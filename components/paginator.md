---
component: "Paginator"
system: "Genome Evolution DS"
type: "Navigation"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-1106"
last_updated: "2026-04-17"
tags: [paginator, pagination, navigation, table, numbers, input, range]
---

# Paginator — Genome Evolution DS

Paginación con 3 variantes: display de rango + selector, input numérico, y selector visual de páginas.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Type` [`Page size + Range` | `Input` | `Numbers`]
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Disabled`] — aplica al área central
- `showPages` [`true` | `false`] — exclusivo de `Type=Page size + Range`

**Tokens del Page area por State:**

| State | Background | Border | Width |
|---|---|---|---|
| Default | `background/canvas` | `border/default` #c3cbc5 | 1px |
| Hovered | `background/interactive/hovered` | `border/interactive/hovered` #adb8b0 | 1px |
| Pressed | `background/interactive/pressed` | `border/interactive/pressed` #9daaa0 | 1px |
| Focused | `background/canvas` | `border/focus` #339947 | 1px |
| Disabled | `background/disabled` | `border/disabled` | 1px |

**Tokens de radius:**
- Outer containers: `semantic/md` (4px).
- Inner number (Input): `semantic/lg` (8px — píldora).
- Ítems números (Numbers): `semantic/md` (4px).

**Tokens de gap:**
- Input/Numbers: `gap/l` (16px). Page size + Range: `gap/xl` (24px).
- Page area Input interna: `gap/xs` (4px). Numbers: `gap/none` (0px — ítems contiguos).

## Variants por Type

### Page size + Range (~363×24px)
Selector "Show items" + Rango texto + Íconos de navegación.

### Input (~170×32px)
Outer container + Inner number (píldora, radius 8px) + Texto "/ 0".

### Numbers (~197×31px)
Outer container + Ítems 23×23px contiguos.
- No seleccionado: `background/canvas`, sin borde, `Text/Body/XS` regular.
- Seleccionado: `background/selected` #eefbf2 + `border/selected` #297a39 + `Text/Button/SM` semibold.

**Combinaciones inválidas:** `showPages=true` con `Type=Input` o `Type=Numbers`.

## Accessibility
- `<nav aria-label="Paginación">`.
- Botones nav: `aria-label` descriptivo. Extremos: `disabled` + `aria-disabled`.
- Numbers activo: `aria-current="page"`.

## Changelog
- `2026-04-17` — 11 variantes. Tokens de radius y gap confirmados.
