#!/usr/bin/env python3

from __future__ import annotations

import datetime as _dt
import json
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_EXPORT = Path.home() / "Downloads" / "export.json"
TOKENS_JSON = REPO_ROOT / "foundations" / "tokens.json"


def _collect_export_blocks(export_data: list[dict[str, Any]]) -> dict[str, Any]:
    blocks: dict[str, Any] = {}
    for entry in export_data:
        if not isinstance(entry, dict) or not entry:
            continue
        name = next(iter(entry.keys()))
        blocks[name] = entry[name]
    return blocks


def _walk_export(node: Any, base_key: str, value_map: dict[str, Any]) -> None:
    if isinstance(node, dict):
        if "$value" in node:
            value_map[base_key] = node["$value"]
        for k, v in node.items():
            if isinstance(k, str) and k.startswith("$"):
                continue
            if not isinstance(k, str):
                continue
            next_key = f"{base_key}.{k}" if base_key else k
            _walk_export(v, next_key, value_map)
        return

    # primitives can appear as scalars in some exports
    if isinstance(node, (str, int, float, bool)):
        value_map[base_key] = node


def _add_block(blocks: dict[str, Any], value_map: dict[str, Any], block_name: str, mode_to_prefix: dict[str, str]) -> None:
    block = blocks.get(block_name)
    if not block:
        return
    modes = block.get("modes") or {}
    for mode, prefix in mode_to_prefix.items():
        payload = modes.get(mode)
        if not isinstance(payload, dict):
            continue
        for k, v in payload.items():
            if not isinstance(k, str):
                continue
            _walk_export(v, f"{prefix}{k}", value_map)


def _weight_to_number(value: str) -> int | None:
    mapping = {"regular": 400, "medium": 500, "semibold": 600, "bold": 700}
    return mapping.get(value.strip().lower())


def _convert_value(token_key: str, token_type: str | None, export_value: Any) -> Any:
    if token_type == "dimension" and isinstance(export_value, (int, float)):
        # dimensions in export are usually floats representing px
        if export_value == int(export_value):
            return f"{int(export_value)}px"
        return f"{export_value}px"

    if token_type == "fontWeight" and isinstance(export_value, str):
        mapped = _weight_to_number(export_value)
        return mapped if mapped is not None else export_value

    return export_value


def _update_tokens(node: Any, path: str, value_map: dict[str, Any]) -> tuple[int, int]:
    updated = 0
    visited = 0

    if isinstance(node, dict):
        if "$value" in node:
            visited += 1
            if path in value_map:
                token_type = node.get("$type") if isinstance(node.get("$type"), str) else None
                node["$value"] = _convert_value(path, token_type, value_map[path])
                updated += 1
            return updated, visited

        for k, v in node.items():
            if not isinstance(k, str) or k.startswith("$"):
                continue
            child_path = f"{path}.{k}" if path else k
            u, vis = _update_tokens(v, child_path, value_map)
            updated += u
            visited += vis
        return updated, visited

    if isinstance(node, (str, int, float, bool)):
        visited += 1
        if path in value_map:
            return updated + 1, visited
        return updated, visited

    return updated, visited


def _apply_scalar_updates(node: Any, path: str, value_map: dict[str, Any]) -> int:
    updated = 0
    if isinstance(node, dict):
        if "$value" in node:
            return 0
        for k, v in list(node.items()):
            if not isinstance(k, str) or k.startswith("$"):
                continue
            child_path = f"{path}.{k}" if path else k
            if isinstance(v, (str, int, float, bool)) and child_path in value_map:
                node[k] = value_map[child_path]
                updated += 1
            else:
                updated += _apply_scalar_updates(v, child_path, value_map)
        return updated
    return 0


def _count_token_entries(node: Any) -> int:
    if isinstance(node, dict):
        if "$value" in node:
            return 1
        return sum(_count_token_entries(v) for k, v in node.items() if isinstance(k, str) and not k.startswith("$"))
    if isinstance(node, (str, int, float, bool)):
        return 1
    return 0


def main() -> None:
    export_path = DEFAULT_EXPORT
    if not export_path.exists():
        raise SystemExit(f"Missing export file at {export_path}")

    export_data = json.loads(export_path.read_text(encoding="utf-8"))
    blocks = _collect_export_blocks(export_data)

    value_map: dict[str, Any] = {}
    _add_block(blocks, value_map, "Border", {"Base": "border."})
    _add_block(blocks, value_map, "Color / Primitive", {"Light": "color.primitive.light.", "Dark": "color.primitive.dark."})
    _add_block(blocks, value_map, "Color / Role", {"Light": "color.role."})
    _add_block(blocks, value_map, "Elevation", {"Base": "elevation."})
    _add_block(blocks, value_map, "Focus", {"Light": "focus.light.", "Dark": "focus.dark."})
    _add_block(blocks, value_map, "Layer", {"Base": "layer."})
    _add_block(blocks, value_map, "Layout", {"Base": "layout."})
    _add_block(blocks, value_map, "Motion", {"Base": "motion."})
    _add_block(blocks, value_map, "Opacity", {"Base": "opacity."})

    # Radius block uses `radius` key where our schema uses `scale`
    radius_modes = (blocks.get("Radius") or {}).get("modes") or {}
    radius_base = radius_modes.get("Base") or {}
    _walk_export(radius_base.get("radius", {}), "radius.scale", value_map)
    _walk_export(radius_base.get("semantic", {}), "radius.semantic", value_map)

    _add_block(blocks, value_map, "Spacing", {"Base": "spacing."})
    _add_block(blocks, value_map, "Typography / Primitive", {"Base": "typography.primitive."})
    _add_block(blocks, value_map, "Typography / Role", {"Base": "typography.role."})

    tokens = json.loads(TOKENS_JSON.read_text(encoding="utf-8"))

    updated_leaf, visited_leaf = _update_tokens(tokens, "", value_map)
    updated_scalar = _apply_scalar_updates(tokens, "", value_map)

    total = _count_token_entries(tokens)
    meta = tokens.setdefault("$metadata", {})
    if isinstance(meta, dict):
        meta["source"] = f"Figma — DS Genome Evolution (export.json)"
        meta["generatedAt"] = _dt.date.today().isoformat()
        meta["totalTokens"] = total

    TOKENS_JSON.write_text(json.dumps(tokens, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Export entries: {len(value_map)}")
    print(f"Visited leaves: {visited_leaf}")
    print(f"Updated leaf $value: {updated_leaf}")
    print(f"Updated scalar tokens: {updated_scalar}")
    print(f"Total tokens now: {total}")


if __name__ == "__main__":
    main()

