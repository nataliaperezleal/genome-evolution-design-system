---
component: "Dropdown"
system: "Genome Evolution DS"
type: "Form / Selection"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2145-444"
last_updated: "2026-04-16"
tags: [dropdown, item, list, menu, select, option, combobox]
---

# Dropdown Item — Genome Evolution DS

Elemento individual de una lista desplegable. Ícono leading + texto + ícono trailing. 6 estados, 3 tamaños. Ancho fijo 163px.

## Quick Reference (AI-optimized)

**Propiedades:**
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Selected` | `Disable`] — default: `Default`
- `Size` [`LG` | `MD` | `SM`] — default: `LG`
- `text` — Default: `"Item list"`
- `showLeftIcon` / `showRightIcon` [`true` | `false`] — default: `true`
- `leftIcon` / `rightIcon` — LG/MD (16px). Default: `add` / `chevron-right`
- `smallLeftIcon` / `smallRightIcon` — SM (12px). Default: `add` / `chevron-right`

**Tokens por State:**

| State | Background | Texto | Íconos | Border |
|---|---|---|---|---|
| Default | `background/canvas` #ffffff | `text/primary` | `icon/primary` | ninguno |
| Hovered | `background/interactive/hovered` #f7f8f7 | `text/primary` | `icon/primary` | ninguno |
| Pressed | `background/interactive/pressed` #e9ecea | `text/primary` | `icon/primary` | ninguno |
| Focused | `background/canvas` | `text/primary` | `icon/primary` | `border/focus` #339947 2px |
| Selected | `background/selected` #eefbf2 | `text/primary` | `icon/primary` | ninguno |
| Disable | `background/disabled` #f4f6f4 | `text/disabled` #849588 | `icon/disabled` #9daaa0 | ninguno |

**Combinaciones inválidas:**
- `leftIcon` con `Size=SM` (usar `smallLeftIcon`).
- Usar fuera de un contenedor de lista.

## Variants — Size

| Size | Alto | Padding V | Padding H | Íconos | Tipografía |
|---|---|---|---|---|---|
| LG | 40px | 12px | 16px | 16px | `Text/Body/SM` 14/20 regular |
| MD | 32px | 8px | 16px | 16px | `Text/Body/SM` 14/20 regular |
| SM | 24px | 4px | 16px | 12px | `Text/Body/XS` 12/16 regular |

- Ancho: **163px fijo** en todas las variantes.
- Gap interno: `gap/s` (8px).

## Accessibility
- `role="option"` + `aria-selected` en Selected.
- `role="listbox"` en el contenedor.
- Disable: `aria-disabled="true"`, no recibe foco.
- Focus ring (`border/focus` #339947 2px) siempre visible.

## Changelog
- `2026-04-16` — 18 variantes (6 State × 3 Size).
