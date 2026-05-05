#!/usr/bin/env python3

from __future__ import annotations

import datetime as _dt
import json
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
TOKENS_JSON = REPO_ROOT / "foundations" / "tokens.json"

LIGHT_PRIMITIVE = Path.home() / "Downloads" / "PrimitiveColor_Light.json"
DARK_PRIMITIVE = Path.home() / "Downloads" / "PrimitiveColor_Dark.json"
ROLE_COLORS = Path.home() / "Downloads" / "RoleColors.json"


def _read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def _hex_from_value(value: Any) -> str | None:
    if isinstance(value, str) and value.startswith("#"):
        return value.lower()
    if isinstance(value, dict):
        hex_value = value.get("hex")
        if isinstance(hex_value, str) and hex_value.startswith("#"):
            return hex_value.lower()
    return None


def _walk_primitive(node: Any, path: str, out: dict[str, str]) -> None:
    if isinstance(node, dict):
        if node.get("$type") == "color" and "$value" in node:
            hx = _hex_from_value(node["$value"])
            if hx:
                out[path] = hx
            return
        for k, v in node.items():
            if isinstance(k, str) and k.startswith("$"):
                continue
            if not isinstance(k, str):
                continue
            next_path = f"{path}.{k}" if path else k
            _walk_primitive(v, next_path, out)


def _alias_to_reference(alias_data: dict[str, Any]) -> str | None:
    name = alias_data.get("targetVariableName")
    if not isinstance(name, str) or not name:
        return None
    # Figma exports palette/neutral/1200 etc.
    normalized = name.replace("/", ".").strip(".")
    if normalized.startswith("palette."):
        return "{%s}" % normalized
    return None


def _walk_role(node: Any, path: str, out: dict[str, str]) -> None:
    if isinstance(node, dict):
        if node.get("$type") == "color" and "$value" in node:
            ext = node.get("$extensions") or {}
            alias_data = None
            if isinstance(ext, dict):
                alias_data = ext.get("com.figma.aliasData")
            if isinstance(alias_data, dict):
                ref = _alias_to_reference(alias_data)
                if ref:
                    out[path] = ref
            if path not in out:
                hx = _hex_from_value(node["$value"])
                if hx:
                    out[path] = hx
        for k, v in node.items():
            if not isinstance(k, str):
                continue
            if k == "$root":
                _walk_role(v, path, out)
                continue
            if k.startswith("$"):
                continue
            next_path = f"{path}.{k}" if path else k
            _walk_role(v, next_path, out)


def _ensure_path(tokens: dict[str, Any], dotted: str) -> dict[str, Any] | None:
    if not dotted:
        return tokens
    parts = dotted.split(".")
    node: Any = tokens
    for part in parts:
        if not isinstance(node, dict):
            return None
        existing = node.get(part)
        if not isinstance(existing, dict):
            node[part] = {}
        node = node[part]
    return node if isinstance(node, dict) else None


def _set_token_value(tokens: dict[str, Any], dotted: str, value: Any, token_type: str = "color") -> bool:
    parts = dotted.split(".")
    parent_path = ".".join(parts[:-1])
    leaf_key = parts[-1]
    parent = _ensure_path(tokens, parent_path)
    if not isinstance(parent, dict):
        return False
    existing = parent.get(leaf_key)
    if isinstance(existing, dict) and "$value" in existing:
        existing["$value"] = value
        existing["$type"] = token_type
        return True
    parent[leaf_key] = {"$value": value, "$type": token_type}
    return True


def main() -> None:
    missing = [p for p in [LIGHT_PRIMITIVE, DARK_PRIMITIVE, ROLE_COLORS] if not p.exists()]
    if missing:
        raise SystemExit("Missing color JSON file(s):\n" + "\n".join(str(p) for p in missing))

    light_src = _read_json(LIGHT_PRIMITIVE)
    dark_src = _read_json(DARK_PRIMITIVE)
    role_src = _read_json(ROLE_COLORS)

    light_map: dict[str, str] = {}
    dark_map: dict[str, str] = {}
    role_map: dict[str, str] = {}

    _walk_primitive(light_src, "palette", light_map)
    _walk_primitive(dark_src, "palette", dark_map)
    _walk_role(role_src, "", role_map)

    tokens = _read_json(TOKENS_JSON)

    updated = 0
    for key, hx in light_map.items():
        if _set_token_value(tokens, f"color.primitive.light.{key}", hx):
            updated += 1

    for key, hx in dark_map.items():
        if _set_token_value(tokens, f"color.primitive.dark.{key}", hx):
            updated += 1

    for key, val in role_map.items():
        # role json paths map directly to color.role.*
        if _set_token_value(tokens, f"color.role.{key}", val):
            updated += 1

    def count_entries(node: Any) -> int:
        if isinstance(node, dict):
            if "$value" in node:
                return 1
            return sum(count_entries(v) for k, v in node.items() if isinstance(k, str) and not k.startswith("$"))
        if isinstance(node, (str, int, float, bool)):
            return 1
        return 0

    meta = tokens.setdefault("$metadata", {})
    if isinstance(meta, dict):
        meta["generatedAt"] = _dt.date.today().isoformat()
        meta["totalTokens"] = count_entries(tokens)

    TOKENS_JSON.write_text(json.dumps(tokens, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"Light primitives: {len(light_map)}")
    print(f"Dark primitives: {len(dark_map)}")
    print(f"Role colors: {len(role_map)}")
    print(f"Tokens updated: {updated}")


if __name__ == "__main__":
    main()
