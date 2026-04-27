---
component: "Color Picker"
system: "Genome Evolution DS"
type: "Form / Input"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2113-1894"
last_updated: "2026-04-16"
tags: [color, picker, selector, palette, gradient, hue, saturation]
---

# Color Picker — Genome Evolution DS

Panel de selección de color: área de espacio de color, sliders de tono y opacidad, campos de entrada y paleta de colores guardados. 264×396px fijo.

## Quick Reference (AI-optimized)

**Modos (tabs):**
- `Solid` — Color sólido (activo por defecto)
- `Gradient` — Color en gradiente

**Combinaciones inválidas:**
- Renderizar sin el área de Colorspace.
- Mostrar Swatches sin la acción "+ Add".
- Usar en espacio menor a 264px de ancho.

## Anatomy (top → bottom)

1. **Tabs** — Solid | Gradient
2. **Colorspace** — 232×152px, radius 4px. Gradiente bidireccional sobre el tono activo.
3. **Hue slider** — 8px altura, radius full.
4. **Saturation/Opacity slider** — 8px altura, radius full.
5. **Fields** (3 en fila, gap `gap/s` 8px) — Formato selector | Valor hex | Opacidad %
6. **Saved Colors / Swatches** (opcional) — Label "Palette color:" + "+ Add" + 7 círculos 24px

## Token Mapping

| Elemento | Token | Valor |
|---|---|---|
| Contenedor fondo | `background/canvas` | #ffffff |
| Contenedor radius | `radius/8` | 8px |
| Contenedor padding | `space/16` | 16px |
| Gap entre secciones | `gap/l` | 16px |
| Tab activo borde | `border/strong` 2px bottom | #5f6d62 |
| Tab activo texto | `Text/Body/XS Strong` | `text/primary` |
| Tab inactivo borde | `Neutral/Neutral300` 1px bottom | #E0E0E0 |
| Fields fondo | `background/canvas` | #ffffff |
| Fields borde | `border/default` | #c3cbc5 1px |
| Fields shadow | `Elevation XS` | — |
| Fields tipografía | `Text/Body/SM` 14/20 | `text/primary` |
| Swatch activo borde | `icon/inverse` 2px | #f7f8f7 |
| Swatch activo shadow | `0 0 0 2px rgba(0,0,0,0.25)` | — |

## Accessibility
- Sliders: `<input type="range">` con `aria-label` ("Tono", "Opacidad").
- Fields: `<label>` asociado.
- Swatches: `aria-label` con el valor de color.
- Swatch activo: `aria-selected="true"`.

## Changelog
- `2026-04-16` — Documentación completa. Panel único, sin variantes en Figma.
