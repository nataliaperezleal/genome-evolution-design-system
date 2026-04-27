---
component: "Link"
system: "Genome Evolution DS"
type: "Navigation"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-571"
last_updated: "2026-04-16"
tags: [link, navigation, anchor, inline, underline, text]
---

# Link — Genome Evolution DS

Elemento de navegación inline con texto subrayado y semibold. 3 colores, 6 estados, 2 tamaños. Sin íconos.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Indigo` | `Evergreen`] — default: `Default`
- `State` [`Default` | `Hovered` | `Pressed` | `Visited` | `Focused` | `Disable`] — default: `Default`
- `Size` [`MD` | `SM`] — default: `MD`

> ⚠️ `State=Disable` solo existe para `Color=Default`.

**Tokens de color por State:**

| State | Default | Indigo | Evergreen |
|---|---|---|---|
| Default | `link/default` #004a76 | `link/indigo` #6b1b99 | `link/evergreen` #297a39 |
| Hovered | `link/hovered` #003353 | `link/indigo/hovered` #4f0077 | `link/evergreen/hovered` #1f5c2b |
| Pressed | `link/pressed` #002842 | `link/indigo/pressed` #30004a | `link/evergreen/pressed` #174520 |
| Visited | `link/visited` #2f7cb6 | `link/indigo/visited` #a155ce | `link/evergreen/visited` #3db856 |
| Focused | igual que Default | igual | igual | + `border/focus` #339947 2px |
| Disable | `link/disabled` #849588 | — | — |

**Combinaciones inválidas:**
- `State=Disable` con `Color=Indigo` o `Color=Evergreen`.
- Usar como botón de acción primaria.

## Variants — Size

| Size | Dimensiones | Padding H | Padding V | Tipografía |
|---|---|---|---|---|
| MD | 61×32px | `space/16` 16px | `space/8` 8px | `Text/Button/MD Underline` 14/16 semibold |
| SM | 41×24px | `space/8` 8px | `space/4` 4px | `Text/Button/SM Underline` 12/16 semibold |

- Siempre `text-decoration: underline`.
- Contenedor: `radius/4` (4px). Focused: border 2px `border/focus`.

## Accessibility
- `<a href="...">` nativo. No usar `<div>` sin role.
- Subrayado cumple WCAG 1.4.1 (no depende solo del color).
- Disable: `aria-disabled="true"` + `tabindex="-1"`.
- State=Visited: gestionar con CSS `:visited`.

## Changelog
- `2026-04-16` — 34 variantes (3 Color × 6 State × 2 Size, menos Disable no-Default).
