# Elevation — Genome Evolution Design System

The design system publishes base position and blur values under `elevation.base.position.<value>` and `elevation.base.blur.<value>`. It does not currently publish elevation role tokens. The recipes below are illustrative combinations of those base values and the alpha color token `color.primitive.light.palette.alpha.300`; their level names are labels, not token names.

## Illustrative shadow recipes

| Level | X | Y | Blur | Color |
|---|---|---:|---:|---:|---|
| `none` | 0px | 0px | 0px | transparent |
| `xs` | 1px | 1px | 1px | `#d9deda99` |
| `sm` | 2px | 2px | 2px | `#d9deda99` |
| `md` | 2px | 4px | 4px | `#d9deda99` |
| `lg` | 2px | 4px | 8px | `#d9deda99` |
| `overlay` | 2px | 4px | 16px | `#d9deda99` |

## Base tokens

The position and blur values used by these examples are available under `elevation.base.position.<value>` and `elevation.base.blur.<value>`. The shadow color is read from `color.primitive.light.palette.alpha.300`.

## Usage

- Treat these combinations as guidance, not as published elevation role tokens.
- Reserve the `overlay` example for overlays and modals. Use `none` for flat surfaces.
- Avoid shadows on small elements such as badges or tags when a border or surface color is sufficient.
