---
component: "Tab"
system: "Genome Evolution DS"
type: "Navigation"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2189-5340"
last_updated: "2026-04-17"
tags: [tab, navigation, selected, horizontal, bar, evergreen, indigo]
---

# Tab — Genome Evolution DS

Pestaña individual de navegación horizontal. El tab activo se distingue con `border-b-2` de color. 3 colores, 7 estados, 2 tamaños, íconos opcionales.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Selected` | `Selected Focused` | `Focused Selected`] — default: `Default`
- `Size` [`MD` | `SM`] — default: `MD`
- `text` — Default: `"Tab name"`
- `showLeftIcon` / `showRightIcon` — íconos arrow-left/right 12px. Default: `true`

**Regla crítica Color ↔ State:**

| Color | States disponibles |
|---|---|
| Default | Default, Hovered, Pressed, Focused, Selected, Selected Focused |
| Evergreen | **Selected únicamente** |
| Indigo | **Selected únicamente** |

**Tokens por State — completo:**

| State | Color | Fondo | Borde | Scope borde | Texto |
|---|---|---|---|---|---|
| Default | Default | ninguno | ninguno | — | `text/tertiary` #728376 |
| Hovered | Default | `bg/interactive/hovered` | ninguno | — | `text/tertiary` |
| Pressed | Default | `bg/interactive/pressed` | ninguno | — | `text/tertiary` |
| Focused | Default | ninguno | `border/focus` 2px | **todos lados** | `text/tertiary` |
| Selected | Default | ninguno | `border/selected` #297a39 2px | **solo bottom** | `text/secondary` #5f6d62 |
| Selected | Evergreen | ninguno | `border/evergreen` #297a39 2px | **solo bottom** | `text/evergreen` #297a39 |
| Selected | Indigo | ninguno | `border/indigo` #6b1b99 2px | **solo bottom** | `text/indigo` #6b1b99 |
| Selected Focused | Default | ninguno | `border/focus` 2px | **todos lados** | `text/secondary` |

> ⚠️ Selected = `border-b-2` (solo inferior). Focused = `border-2` (todos los lados).

## Variants — Size

| Size | Dimensiones | Padding H | Padding V |
|---|---|---|---|
| MD | 130×40px | `space/16` 16px | `space/12` 12px |
| SM | 130×24px | `space/16` 16px | `space/4` 4px |

- Tipografía: `Text/Button/SM` 12/16 semibold 600 en todos los states.
- Gap ícono–texto: `gap/s` (8px).

## Accessibility
- `role="tablist"` en el grupo + `aria-label`.
- Cada tab: `role="tab"` + `aria-selected` + `aria-controls`.
- Paneles: `role="tabpanel"` + `aria-labelledby`.
- Navegación con flechas ←/→.

## Changelog
- `2026-04-17` — 16 variantes. Bugs Color=Evergreen/Indigo corregidos.
