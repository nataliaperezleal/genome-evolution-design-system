---
component: "Accordion"
system: "Genome Plus Design System"
type: "Navigation / Content"
status: "Production"
version: "1.0"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-04-13"
tags: [accordion, collapse, navigation, content, interactive]
---

# Accordion — Genome Plus Design System

Contenedor colapsable que muestra u oculta contenido secundario bajo demanda.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `Behavior` [`Expanded` | `Collapsed`] — default: `Collapsed`
- `Size` [`MD` | `SM`] — default: `MD`
- `State` [`Default` | `Disable` | `Hovered` | `Pressed` | `Focused` | `Loading`] — default: `Default`
- `Text` — string libre, texto del encabezado
- `Show Left Icon` [`true` | `false`] — default: `False`
- `Show Checkbox` [`true` | `false`] — default: `False`
- `Show Badge` [`true` | `false`] — default: `False`
- `Icon` — info (nombre del ícono cuando Show Icon=True)

**Combinaciones inválidas:**
- `Show Checkbox=True` + `Show Icon=True` — ambos ocupan el slot izquierdo.
- `State=Disable` + `Behavior=Expanded` — deshabilitado no debe mostrarse expandido.
- `State=Loading` + `Behavior=Expanded` — carga implica contenido no disponible.

**Snippets de uso frecuente:**
- FAQ colapsado: `Color=Default, Behavior=Collapsed, Size=MD, State=Default`
- Filtro activo: `Color=Evergreen, Behavior=Expanded, Size=SM, Show Badge=True`
- Item deshabilitado: `Color=Default, State=Disable, Behavior=Collapsed`
- Con ícono: `Color=Indigo, Behavior=Collapsed, Show Icon=True, Icon=info, Size=MD`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Contenido con jerarquía clara entre encabezado y detalle.
- Espacio vertical limitado; información accesible bajo demanda.
- Configuraciones, filtros o categorías agrupadas.

### ❌ Evitar cuando
- Contenido siempre visible para el flujo de la tarea.
- Tablas de datos, listas planas sin jerarquía.
- Se necesita comparar múltiples secciones simultáneamente.

## Variants

### Color
- `Default` — Neutro sin énfasis.
- `Evergreen` — Verde de marca. Selección activa o estado positivo.
- `Indigo` — Púrpura de marca. Categoría especial.

### Behavior
- `Expanded` — Content Container visible. Chevron arriba.
- `Collapsed` — Content Container oculto. Chevron abajo.

### Size
- `MD` — Trigger 40px alto. Padding `space/16`.
- `SM` — Trigger 32px alto. Padding `space/8`.

### State
- `Default` — Reposo.
- `Hovered` — `background/interactive/hovered`.
- `Pressed` — `background/interactive/pressed`.
- `Focused` — Anillo de foco: `border/focus` 2px.
- `Disable` — No interactuable. Opacidad 40%.
- `Loading` — Skeleton en Content Container.

## Token Mapping

| Elemento | Token |
|---|---|
| Fondo canvas | `background/canvas` |
| Fondo hover | `background/interactive/hovered` |
| Fondo pressed | `background/interactive/pressed` |
| Fondo disabled | `background/disabled` |
| Borde default | `border/default` |
| Borde evergreen | `border/evergreen` |
| Borde indigo | `border/indigo` |
| Borde focus | `border/focus` (2px) |
| Texto primary | `text/primary` |
| Texto evergreen | `text/evergreen` |
| Texto indigo | `text/indigo` |
| Texto disabled | `text/disabled` |

## Accessibility

- `role="button"` + `aria-expanded="true/false"` en el trigger.
- `aria-controls` referenciando el Content Container.
- `aria-disabled="true"` en Disable (no `disabled` nativo).
- Focus ring: `ring/color` (#339947), 2px, offset 2px.
- Contraste mínimo 4.5:1.

## Changelog
- `2026-04-13` — v1.0. 40 variantes confirmadas.
