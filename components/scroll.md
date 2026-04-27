---
component: "Scroll"
system: "Genome Evolution DS"
type: "Navigation / Layout"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2146"
last_updated: "2026-04-17"
tags: [scroll, scrollbar, track, thumb, overflow, vertical, horizontal]
---

# Scroll — Genome Evolution DS

Barra de desplazamiento personalizada. Track + thumb (Bar) + espacio restante (Empty). 2 orientaciones, 2 tamaños. Puramente visual.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Orientation` [`Vertical` | `Horizontal`] — default: `Vertical`
- `Size` [`Small` | `Regular`] — default: `Small`

**Dimensiones:**

| Variante | Ancho | Alto |
|---|---|---|
| Vertical Small | 4px | 272px |
| Vertical Regular | 8px | 272px |
| Horizontal Small | 278px | 4px |
| Horizontal Regular | 278px | 8px |

**Tokens:**

| Elemento | Token | Valor |
|---|---|---|
| Track fondo | `surface/subtlest` | #f7f8f7 |
| Thumb (Bar) | `surface/subtle` | #d9deda |
| Empty | `surface/subtlest` | #f7f8f7 |
| Radius | `semantic/full` | 999px |
| Gap | `gap/none` | 0px |

> ⚠️ En el eje secundario, Empty siempre mide **4px fijo** independientemente del Size.

## Anatomy

```
VERTICAL:
[Track 4/8px ancho]
  [Bar — flex-1 — surface/subtle]
  [Empty — flex-1 — surface/subtlest — 4px fijo]

HORIZONTAL:
[Track 4/8px alto]
  [Bar — flex-1] [Empty — flex-1 — 4px alto fijo]
```

## When to Use / When NOT to Use

### ✅ Usar cuando
- Reemplazar el scrollbar nativo con el estilo del DS en paneles, listas o tablas con overflow.

### ❌ Evitar cuando
- Indicar progreso (usar Progress Bar). Selección de rango (usar Slider).

## Implementation CSS

```css
.container::-webkit-scrollbar { width: 4px; } /* Small */
.container::-webkit-scrollbar-track { background: #f7f8f7; border-radius: 999px; }
.container::-webkit-scrollbar-thumb { background: #d9deda; border-radius: 999px; }
/* Firefox */
.container { scrollbar-width: thin; scrollbar-color: #d9deda #f7f8f7; }
```

## Changelog
- `2026-04-17` — 4 variantes (2 Orientation × 2 Size).
