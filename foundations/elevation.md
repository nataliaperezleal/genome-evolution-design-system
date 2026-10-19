# Elevation — Genome Evolution Design System

Elevation recipes are published as `color.role.light.elevation.<level>`. The documentation page previews these recipes using their canonical position and blur values.

## Shadow recipes

| Level | Token | X | Y | Blur | Color |
|---|---|---:|---:|---:|---|
| `none` | `color.role.light.elevation.none` | 0px | 0px | 0px | transparent |
| `xs` | `color.role.light.elevation.xs` | 1px | 1px | 1px | `#d9deda99` |
| `sm` | `color.role.light.elevation.sm` | 2px | 2px | 2px | `#d9deda99` |
| `md` | `color.role.light.elevation.md` | 2px | 4px | 4px | `#d9deda99` |
| `lg` | `color.role.light.elevation.lg` | 2px | 4px | 8px | `#d9deda99` |
| `overlay` | `color.role.light.elevation.overlay` | 2px | 4px | 16px | `#d9deda99` |

## Base tokens

The position and blur values used by the recipes are available under `elevation.base.position.<value>` and `elevation.base.blur.<value>`.

## Usage

- Use the elevation recipe that matches the component hierarchy; do not invent shadow values.
- Reserve `overlay` for overlays and modals. Use `none` for flat surfaces.
- Avoid shadows on small elements such as badges or tags when a border or surface color is sufficient.
