---
component: "Modal"
system: "Genome Plus Design System"
type: "Overlay / Feedback"
status: "Draft"
version: "0.1.0"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2533"
last_updated: "2026-04-17"
tags: [modal, overlay, dialog, genome-plus]
---

# Modal — Genome Plus Design System

Contenedor modal para tareas bloqueantes o contextuales. Estructura: header, contenido y acciones de cierre/confirmación.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Size` [`Small` | `Medium` | `Large` | `Bigger` | `90%` | `Full`] — default: `Small`
- `Title` — default: `"Modal 16x title"`
- `Show Header` — default: visible
- `Show Buttons` — default: visible
- `Close` — default: visible
- `Expand` — default: oculto
- `Helper Text` — default: oculto
- `Tertiary Button` — default: oculto
- `Title Icon` — default: oculto

**Dimensiones por Size:**

| Size | Ancho | Alto |
|---|---|---|
| Small | 300px | 280px |
| Medium | 500px | 288px |
| Large | 700px | 288px |
| Bigger | 1000px | 264px |
| 90% | 1296px | 288px |
| Full | 1440px | 900px |

**Combinaciones inválidas:**
- Footer oculto (`Show Buttons=false`) con Tertiary Button visible.
- Header oculto (`Show Header=false`) con Close o Expand visibles.

## When to Use / When NOT to Use

### ✅ Usar cuando
- La tarea requiere atención prioritaria y foco visual.
- El contenido necesita confirmación o cancelación.
- El flujo debe mantenerse sin navegación completa.

### ❌ Evitar cuando
- El contenido puede vivir inline en la página.
- El usuario necesita comparar libremente con el fondo.

## Anatomy

- **Container** — superficie con borde y radio. `background/canvas`, `border/default`, `radius/8`.
- **Header** (opcional) — franja superior con título y acciones. Padding H 16px, V 12px.
- **Content** — área central. Padding 16px.
- **Footer** — zona inferior con helper text y botones. Padding H 16px, V 8px (Small) / 12px (otros).

## Token Mapping

| Elemento | Token |
|---|---|
| Fondo modal | `background/canvas` |
| Borde | `border/default` |
| Título | `Text/Title/SM`, `text/primary` |
| Botón primario | `surface/evergreen/bold`, `text/inverse` |
| Botón secundario | `background/canvas`, `border/strong`, `text/primary` |
| Botón terciario | `background/canvas`, `border/evergreen`, `text/evergreen` |
| Helper text | `text/secondary` |

## Accessibility
- `role="dialog"` + `aria-modal="true"`.
- Focus trap dentro del modal.
- Devolver foco al elemento trigger al cerrar.
- Close accesible por teclado (Escape).

## Changelog
- `2026-04-17` — v0.1.0 Draft. 6 sizes confirmados.
