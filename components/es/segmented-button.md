---
component: "Segmented Button"
system: "Genome Evolution DS"
type: "Action / Selection"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2194-2674"
last_updated: "2026-04-17"
tags: [segmented, button, tab, filter, selection, pill, group, evergreen, indigo]
---

# Segmented Button — Genome Evolution DS

Segmento individual de un grupo de selección exclusiva (tipo tab/filter). Estructura de doble capa: track exterior + botón interior. El Color solo es visible en State=Selected.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Selected`] — default: `Default`
- `Corner` [`Default` | `Rounded`] — default: `Default`
- `Size` [`MD` | `SM`] — default: `MD`
- `text` — Default: `"Section name"`
- `showIcon` / `showText` — default: `true`
- `icon` — default: `bizagi-lines` 12×12px

**Regla crítica Color ↔ State:**

| Color | States disponibles |
|---|---|
| Default | Default, Hovered, Pressed, Focused |
| Evergreen | **Selected únicamente** |
| Indigo | **Selected únicamente** |

**Tokens inner button por State:**

| State | Fondo inner | Borde inner | Texto |
|---|---|---|---|
| Default | `surface/subtlest` #f7f8f7 | ninguno | `text/primary` |
| Hovered | `background/interactive/hovered` | `border/interactive/hovered` 1px | `text/primary` |
| Pressed | `background/interactive/pressed` | `border/evergreen` #297a39 1px ⚠️ | `text/primary` |
| Focused | `surface/subtlest` | `border/focus` #339947 **2px** | `text/primary` |
| Selected Evergreen | `background/canvas` #ffffff | ninguno | `text/evergreen` #297a39 |
| Selected Indigo | `background/canvas` #ffffff | ninguno | `text/indigo` #6b1b99 |

> ⚠️ Pressed siempre usa `border/evergreen` independientemente del Color del grupo.

Outer track: siempre `surface/subtlest` #f7f8f7.

## Variants — Size

| Size | Total | Padding outer | Padding inner H | Padding inner V | Tipografía |
|---|---|---|---|---|---|
| MD | 160×48px | `space/8` 8px | `space/16` 16px | `space/8` 8px | `Text/Button/MD` 14/16 semibold |
| SM | 131×40px | `space/8` 8px | `space/8` 8px | `space/4` 4px | `Text/Button/SM` 12/16 semibold |

- Radius Default: `semantic/sm` (4px). Rounded: `semantic/full` (999px).
- Ícono: 12×12px, gap `gap/s` (8px).

## When to Use / When NOT to Use

### ✅ Usar cuando
- Grupo de selección exclusiva tipo tab bar o filter chips (2-6 opciones).

### ❌ Evitar cuando
- Acción puntual aislada (Button). Selección múltiple (Checkbox). Más de 6 opciones (Dropdown).

## Accessibility
- Grupo: `role="tablist"` o `role="group"` + `aria-label`.
- Cada segmento: `role="tab"` o `role="radio"` + `aria-selected`/`aria-checked`.
- Navegación con flechas ←/→.

## Changelog
- `2026-04-17` — 24 variantes. Pressed border: `border/evergreen` confirmado (fijo).
