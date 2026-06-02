---
component: "Tooltip"
system: "Genome Evolution DS"
type: "Feedback / Info"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-478"
last_updated: "2026-04-17"
tags: [tooltip, contextual, hover, overlay, info]
---

# Tooltip — Genome Evolution DS

Contenedor de información contextual flotante. Dos colores (White/Black), título opcional, imagen opcional y descripción opcional. Sin flecha/caret en el diseño base.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`White` | `Black`] — default: `White`
- `title` — Default: `"Tooltip text"`
- `description` — Default: `"Tooltip description"`
- `showTitle` [`true` | `false`] — default: `true`
- `showDescription` [`true` | `false`] — default: `true`
- `showImage` [`true` | `false`] — default: `false`

**Tokens por Color:**

| Elemento | White | Black |
|---|---|---|
| Fondo | `background/canvas` #ffffff | `surface/raised` #3b443d |
| Borde | `border/default` #c3cbc5 1px | `border/default` #c3cbc5 1px |
| Título | `text/primary` #2d342f | `text/inverse` #f7f8f7 |
| Descripción | `text/primary` #2d342f | `text/inverse` #f7f8f7 |

> ⚠️ **"Black" no es negro literal** — usa `surface/raised` (#3b443d), un verde oscuro del sistema.
> ⚠️ El borde es **igual en ambos Colors** — `border/default` siempre presente.

**Combinaciones inválidas:**
- `showTitle=false` + `showDescription=false` + `showImage=false` → tooltip vacío.
- Incluir controles interactivos dentro del tooltip (usar Popover).

## When to Use / When NOT to Use

### ✅ Usar cuando
- Información adicional al hacer hover, breve (máx. 2-3 líneas).
- El espacio no permite texto explicativo permanente.

### ❌ Evitar cuando
- La información es crítica (usar helper text o texto inline).
- El contenido tiene controles interactivos (usar Popover).
- Dispositivos táctiles sin alternativa de acceso.

## Variants

### Color
- `White` — Para fondos claros. Fondo blanco, texto oscuro.
- `Black` — Para fondos oscuros. `surface/raised` #3b443d, texto `text/inverse`.

## Layout & Typography
- Contenedor: border 1px `border/default`, radius `semantic/sm` (4px), padding `space/8` (8px).
- Gap interno (título / imagen / descripción): 4px.
- Título: `Text/Body/XS Strong` — 12/16, semibold 600.
- Descripción: `Text/Body/XS` — 12/16, regular 400.
- Imagen (showImage=true): 46px alto, radius 4px, `object-cover`.
- Tamaño base: 121×52px (con título + descripción).

## Accessibility
- `role="tooltip"` en el contenedor.
- `aria-describedby` en el elemento trigger.
- Visible también en focus (no solo hover).
- Contraste confirmado: text/primary sobre canvas (4.5:1) · text/inverse sobre surface/raised (4.5:1).

## Changelog
- `2026-04-17` — Documentación completa. Tokens y dimensiones confirmados.
