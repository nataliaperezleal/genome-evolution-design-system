---
component: "Scoreboard"
system: "Genome Evolution DS"
type: "Data Display"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2125"
last_updated: "2026-04-17"
tags: [scorecard, metric, kpi, dashboard, value, indicator]
---

# Scoreboard — Genome Evolution DS

Tarjeta de métrica compacta que muestra un valor numérico destacado y una descripción. 2 tamaños, 2 estilos de disposición. Puramente informativo.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Size` [`SM` | `MD`] — default: `SM`
- `Style` [`Top value` | `Bottom value`] — default: `Top value`

**Tokens:**

| Elemento | Token | Valor |
|---|---|---|
| Fondo | `background/canvas` | #ffffff |
| Radius | `radius/8` | 8px |
| Gap | `gap/none` | 0px |
| Value color | `text/primary` | #2d342f |
| Description color | `text/secondary` | #5f6d62 |

**Dimensiones y padding:**

| Size | Dimensiones | Padding H | Padding V |
|---|---|---|---|
| SM | 81×60px | `space/8` 8px | `space/4` 4px |
| MD | 132×88px | `space/16` 16px | `space/8` 8px |

**Tipografía:**

| Elemento | SM | MD |
|---|---|---|
| Value | `Text/Heading/MD` 24/36 semibold tracking -0.5px | `Text/Heading/XL` 36/56 bold tracking -0.5px |
| Description | `Text/Body/XS` 12/16 regular | `Text/Body/XS` 12/16 regular |

## Variants — Style

- `Top value` — Value arriba, Description abajo. `items-center`, `text-center`.
- `Bottom value` — Description arriba, Value abajo. `items-start`.

## When to Use / When NOT to Use

### ✅ Usar cuando
- Destacar una métrica clave (KPI) con contexto descriptivo mínimo en dashboards.

### ❌ Evitar cuando
- Múltiples métricas relacionadas en el mismo card. Contenido interactivo.

## Accessibility
- `<article>` o `<section>` con `aria-label` descriptivo.
- Si el valor se actualiza dinámicamente: `role="status"`.

## Changelog
- `2026-04-17` — 4 variantes (2 Size × 2 Style).
