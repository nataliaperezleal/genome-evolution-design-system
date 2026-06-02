---
component: "Radio Button"
system: "Genome Evolution DS"
type: "Form / Selection"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-2043"
last_updated: "2026-04-17"
tags: [radio, button, selection, form, input, single-choice]
---

# Radio Button — Genome Evolution DS

Control de selección única para grupos mutuamente excluyentes. Círculo 20×20px con label opcional. 3 colores, 5 estados, 2 estados de selección.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `State` [`Enabled` | `Hovered` | `Pressed` | `Focused` | `Disabled`] — default: `Enabled`
- `Selected` [`On` | `Off`] — default: `Off`
- `label` — Default: `"Label"`
- `showLabel` [`true` | `false`] — default: `true`

**Restricciones críticas Color ↔ Selected:**

| Color | Selected=Off | Selected=On | Disabled |
|---|---|---|---|
| Default | ✅ Todos los states | ✅ Todos los states | ✅ Off y On |
| Evergreen | ❌ No existe | ✅ Enabled/Hovered/Pressed/Focused | ❌ No existe |
| Indigo | ❌ No existe | ✅ Enabled/Hovered/Pressed/Focused | ❌ No existe |

**Tokens del círculo:**

| State/Color | Selected=Off | Selected=On Default | Evergreen | Indigo |
|---|---|---|---|---|
| Enabled | `icon/primary` #5f6d62 | `icon/selected` #297a39 | `icon/evergreen` #297a39 | `icon/indigo` #6b1b99 |
| Hovered | + halo `bg/interactive/hovered` | ídem + halo | ídem | ídem |
| Pressed | + halo `bg/interactive/pressed` | ídem + halo | ídem | ídem |
| Focused | + `border/focus` 2px | ídem + ring | ídem | ídem |
| Disabled | `icon/disabled` #9daaa0 | `icon/disabled` | — | — |

## When to Use / When NOT to Use

### ✅ Usar cuando
- El usuario debe elegir exactamente una opción de un conjunto (2–6 opciones).

### ❌ Evitar cuando
- Múltiples opciones (Checkbox). Más de 6 (Dropdown). Toggle independiente (Switch).

## Layout & Typography
- Contenedor: fila, `gap/s` (8px), items-center. Radius `radius/4` (4px).
- Círculo: 20×20px.
- Label: `Text/Body/XS` 12/16 regular. `text/primary` activo · `text/disabled` en Disabled.
- Total con label: 59×20px.

## Accessibility
- `<input type="radio">` nativo con `<label>` asociado.
- `<fieldset>` + `<legend>` para el grupo.
- `name` compartido entre todos los radios del grupo.
- Disabled: atributo `disabled`. No recibe foco.

## Changelog
- `2026-04-17` — 18 variantes confirmadas.
