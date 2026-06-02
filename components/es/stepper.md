---
component: "Stepper"
system: "Genome Evolution DS"
type: "Navigation / Form"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2339-4361"
last_updated: "2026-04-21"
tags: [stepper, wizard, progress, step, multi-step, onboarding]
---

# Stepper — Genome Evolution DS

Indicador de paso individual para flujos multi-paso. Se instancian múltiples en fila para construir el stepper completo. 8 variantes: 3 Color × 4 State (con restricciones).

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `State` [`Default` | `Selected` | `Checked` | `Disabled`] — default: `Default`
- `backLine` [`true` | `false`] — línea conectora izquierda 8px. Default: `true`
- `nextLine` [`true` | `false`] — línea conectora derecha 8px. Default: `true`
- `text` — Default: `"Step label"`

**Restricciones Color ↔ State:**

| Color | States disponibles |
|---|---|
| Default | Default, Selected, Checked, Disabled |
| Evergreen | Selected, Checked únicamente |
| Indigo | Selected, Checked únicamente |

**Tokens por variante:**

| Color | State | Pill fondo | Pill borde | Gap | Contenido | Label weight |
|---|---|---|---|---|---|---|
| Default | Default | `background/canvas` | `border/default` | `gap/xs` 4px | Badge número | regular |
| Default | Selected | `background/canvas` | `border/default` | `gap/xs` 4px | Badge número | **semibold** |
| Evergreen | Selected | `background/canvas` | `border/evergreen` | `gap/xs` 4px | Badge número | **semibold** |
| Indigo | Selected | `background/canvas` | `border/indigo` | `gap/xs` 4px | Badge número | **semibold** |
| Default | Checked | `surface/subtlest` | `border/default` | `gap/sm` 8px | ✓ check | regular |
| Evergreen | Checked | `surface/evergreen/subtle` | `border/evergreen` | `gap/sm` 8px | ✓ check | regular |
| Indigo | Checked | `surface/indigo/subtle` | `border/indigo` | `gap/sm` 8px | ✓ check | regular |
| Default | Disabled | `background/disabled` | `border/disabled` | `gap/sm` 8px | Badge número | regular |

> ⚠️ Selected: gap `gap/xs` (4px), label **semibold**. Checked: gap `gap/sm` (8px), label regular, fondo sutil.

## Assembly — Stepper completo

```
[backLine=false] Step 1 [nextLine=true]  →  [backLine=true] Step 2 [nextLine=false]
Color=Evergreen, State=Checked               Color=Evergreen, State=Selected (activo)
```

- Primer paso: `backLine=false`. Último paso: `nextLine=false`.
- Líneas: 8px × 1px, `icon/secondary` #849588.

## Typography
- Badge número: `Text/Label/XS` 11/16 semibold tracking wide.
- Label Selected: `Text/Body/XS Strong` 12/16 semibold.
- Label resto: `Text/Body/XS` 12/16 regular.

## Pill
- Padding: H `space/8` (8px), V `space/4` (4px). Radius: `semantic/full` (999px).

## Accessibility
- `<ol>` con `<li>` por cada paso.
- Paso activo: `aria-current="step"`. Completado: texto `sr-only` "Completado".

## Changelog
- `2026-04-21` — 8 variantes. Bug Default+Checked texto corregido a `text/primary`.
