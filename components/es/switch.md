---
component: "Switch"
system: "Genome Evolution DS"
type: "Form / Selection"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-3286"
last_updated: "2026-04-21"
tags: [switch, toggle, on-off, control, form, settings, binary]
---

# Switch — Genome Evolution DS

Control de activación/desactivación binaria. Track oval con thumb deslizante y label opcional. 2 Size, 5 State, 3 Color, 2 Behavior.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Behavior` [`Off` | `On`] — default: `Off`
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `State` [`Default` | `Hover` | `Pressed` | `Focused` | `Disabled`] — default: `Default`
- `Size` [`Small` | `Medium`] — default: `Medium`
- `label` [`true` | `false`] — muestra texto "Label". Default: `true`

**Restricciones críticas Color ↔ Behavior:**

| Color | Behavior=Off | Behavior=On |
|---|---|---|
| Default | ✅ Todos los states | ✅ Solo Disabled |
| Evergreen | ❌ No existe | ✅ Default/Hover/Pressed/Focused |
| Indigo | ❌ No existe | ✅ Default/Hover/Pressed/Focused |

**Tokens del track por State:**

| Behavior+Color | State | Background | Border | Width |
|---|---|---|---|---|
| Off Default | Default | `background/canvas` | `border/default` #c3cbc5 | 1px |
| Off Default | Hover | `background/interactive/hovered` | `border/interactive/hovered` #adb8b0 | 1px |
| Off Default | Focused | `background/canvas` | `border/focus` #339947 | **2px** |
| On Evergreen | Default | `background/canvas` | `border/evergreen` #297a39 | 1px |
| On Indigo | Default | `background/canvas` | `border/indigo` #6b1b99 | 1px |
| Focused (todos) | — | `background/canvas` | `border/focus` #339947 | **2px** |
| Disabled | — | `background/disabled` | `border/disabled` #c3cbc5 | 1px |

> Focused siempre usa `border/focus` 2px, independientemente del Color.

## Variants — Size

| Size | Componente total | Track | Thumb | Radius |
|---|---|---|---|---|
| Small | 68×16px | 29×16px | 12×12px | `semantic/md` 8px |
| Medium | 91×24px | 42×24px | 20×20px | `semantic/lg` 12px |

- Thumb Off: `left: 2px`. Thumb On: `right: 2px`.
- Label: `Text/Body/MD` 16/20 regular. `text/primary` / `text/disabled`.

## Accessibility
- `<button role="switch">` + `aria-checked="true/false"`.
- `aria-disabled="true"` + `disabled` en Disabled.
- Focus ring (`border/focus` #339947 2px) siempre visible.

## Changelog
- `2026-04-21` — 28 variantes de track (2 Behavior × 14 Color/State × 2 Size).
