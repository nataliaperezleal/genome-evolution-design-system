---
component: "Duo Button"
system: "Genome Evolution DS"
type: "Action"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2135-676"
last_updated: "2026-04-16"
tags: [button, duo, pair, action, primary, secondary, evergreen, indigo]
---

# Duo Button — Genome Evolution DS

Agrupación de dos botones adyacentes: Secondary (outlined) a la izquierda + Primary (filled) a la derecha. Representa una pareja de acciones complementarias como unidad visual.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Size` [`Regular` | `Small`] — default: `Regular`
- `Color` [`Evergreen` | `Indigo`] — default: `Evergreen`

**Tokens por Color:**

| Elemento | Evergreen | Indigo |
|---|---|---|
| Secondary fondo | `background/canvas` #ffffff | `background/canvas` #ffffff |
| Secondary borde | `border/evergreen` #297a39 1px | `border/indigo` #6b1b99 1px |
| Secondary texto | `text/evergreen` #297a39 | `text/indigo` #6b1b99 |
| Primary fondo | `surface/evergreen/bold` #297a39 | `surface/indigo/bold` #6b1b99 |
| Primary texto | `text/inverse` #f7f8f7 | `text/inverse` #f7f8f7 |
| Radius ambos | `semantic/sm` 4px | `semantic/sm` 4px |

**Combinaciones inválidas:**
- Mezclar colores entre los dos botones.
- Usar con una sola acción disponible.

## Variants — Size

| Size | Alto | Padding H | Padding V | Tipografía |
|---|---|---|---|---|
| Regular | 32px | `space/16` 16px | `space/8` 8px | `Text/Button/MD` 14/16 semibold |
| Small | 24px | `space/12` 12px | `space/4` 4px | `Text/Button/SM` 12/16 semibold |

- Gap entre botones: `gap/s` (8px).
- Orden: **Secondary siempre izquierda, Primary siempre derecha.**
- Sin íconos — solo texto.

## Typical Pairs
- "Cancelar" + "Guardar" · "Cancel" + "Apply" · "Volver" + "Continuar" · "Rechazar" + "Aceptar"

## When to Use / When NOT to Use

### ✅ Usar cuando
- Exactamente dos acciones complementarias con jerarquía clara.

### ❌ Evitar cuando
- Una sola acción, más de dos acciones, o acciones no relacionadas.

## Accessibility
- Tab order: Secondary primero, Primary segundo.
- Contraste confirmado: text/evergreen y text/indigo sobre canvas → 4.5:1. text/inverse sobre bold → 4.5:1.

## Changelog
- `2026-04-16` — 4 variantes (2 Size × 2 Color).
