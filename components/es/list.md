---
component: "List"
system: "Genome Evolution DS"
type: "Content / Display"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2403"
last_updated: "2026-04-17"
tags: [list, item, navigation, header, checkbox, switch, menu, selectable]
---

# List — Genome Evolution DS

Ítem de lista o cabecera de sección para menús de navegación, listas seleccionables y paneles de opciones. Soporta controles opcionales (checkbox, switch, ícono) a izquierda y derecha.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Type` [`List` | `Header`] — default: `List`
- `Size` [`Bigger` | `Large` | `Regular`] — default: `Bigger`
- `State` [`Default` | `Hover` | `Pressed` | `Selected` | `Focused`] — default: `Default`
- `text` — Default: `"List item"`
- `leftSide` / `rightSide` [`true` | `false`] — default: `false`
- `showLeftCheckBox`, `showLeftSwitch`, `showLeftIcon` — condicionado a `leftSide=true`
- `showRightCheckBox`, `showRightSwitch`, `showRightIcon` — condicionado a `rightSide=true`

**Tokens por State:**

| State | Background | Border |
|---|---|---|
| Default | `surface/subtlest` #f7f8f7 | ninguno |
| Hover | `surface/subtlest/hovered` #f4f6f4 | ninguno |
| Pressed | `surface/subtlest/pressed` #e9ecea | ninguno |
| Selected | `background/selected` #eefbf2 | ninguno |
| Focused | `surface/subtlest` #f7f8f7 | `border/focus` #339947 2px todos los lados |

**Diferencias clave Type=List vs Type=Header:**

| Aspecto | List | Header |
|---|---|---|
| Texto weight | Regular 400 | Semibold 600 |
| Border inferior | No | Sí — `border/default` 1px (solo Default) |
| Checkbox izquierdo | Sin label | Con label de texto |

**Combinaciones inválidas:**
- `leftSide=false` con `showLeft*` activos.
- `rightSide=false` con `showRight*` activos.

## Variants

### Size

| Size | Alto | Padding V |
|---|---|---|
| Bigger | 40px | 12px |
| Large | 32px | 8px |
| Regular | 24px | 4px |

Padding H: `space/16` (16px) en todos los sizes.

### Tipografía

| Combinación | Token | Tamaño | Weight |
|---|---|---|---|
| List + Bigger/Large | `Buttom/medium/regular` | 14px | 400 |
| Header + Bigger/Large | `Buttom/medium/strong` | 14px | 600 |
| List + Regular | `Buttom/small/regular` | 12px | 400 |
| Header + Regular | `Buttom/small/strong` | 12px | 600 |

Texto siempre `text/primary` (#2d342f) en todos los states.

## Anatomy
- **Contenedor:** flow horizontal, gap 8px, items-center.
- **Left side** (leftSide=true): Checkbox (20px) + Switch (29×16px) + Ícono (16px).
- **Texto:** siempre presente, `shrink-0`.
- **Right side** (rightSide=true): Checkbox+label + Switch + Ícono.

## Accessibility
- Ítems: `<li>` dentro de `<ul>`. Navegación: `role="menuitem"`.
- Selected: `aria-selected="true"` o `aria-current="page"`.
- Header: `role="separator"` o `role="presentation"`.
- Focus ring siempre visible.

## Changelog
- `2026-04-17` — 30 variantes (2 Type × 3 Size × 5 State).
