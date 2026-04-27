---
component: "Badge"
system: "Genome Plus Design System"
type: "Indicator"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2046-82"
last_updated: "2026-04-09"
tags: [badge, counter, notification, indicator, status]
---

# Badge — Genome Plus Design System

Indicador visual compacto que muestra un valor numérico (contador) sobre o junto a un elemento de la interfaz.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Type` [`Filled` | `Line`] — default: `Filled`
- `Color` [`Default` | `Evergreen` | `Indigo` | `Inverse` | `Information` | `Warning` | `Error` | `Success`] — default: `Default`

**⚠️ Regla crítica de texto:**
- `Warning` (Filled y Line) siempre usa `text/primary`, NO el token semántico de color.
- Todos los demás usan `text/on-[color]` (Filled) o `text/[color]` (Line).

**Combinaciones inválidas:**
- Badge sin valor numérico (siempre debe mostrar un número; default: 0).
- `Type=Line` + `Color=Inverse` (contraste insuficiente).

**Snippets de uso frecuente:**
- Notificaciones críticas: `Type=Filled, Color=Error`
- Contador mensajes: `Type=Filled, Color=Default`
- Estado de éxito: `Type=Filled, Color=Success`
- Énfasis con borde: `Type=Line, Color=Evergreen`
- Alerta numérica: `Type=Line, Color=Warning`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Mostrar contador numérico en íconos de navegación.
- Comunicar urgencia semántica con un valor (Error=crítico, Warning=atención).

### ❌ Evitar cuando
- Se necesita etiqueta de texto sin número (usar Tag).
- Se quiere comunicar estado sin cantidad (usar ícono semántico).

## Variants

### Type
- `Filled` — Fondo sólido. Mayor peso visual.
- `Line` — Fondo sutil + borde. Menor peso visual.

### Color
- `Default` — Sin urgencia semántica específica.
- `Evergreen` — Verde de marca primaria.
- `Indigo` — Índigo de marca secundaria.
- `Inverse` — Contraste invertido.
- `Information` — Azul. Informativo.
- `Warning` — Amarillo. Precaución. ⚠️ texto siempre `text/primary`.
- `Error` — Rojo. Alerta crítica.
- `Success` — Verde semántico. Completados.

## Token Mapping (Filled)

| Color | Background | Text |
|---|---|---|
| Default | `surface/default/bold` | `text/inverse` |
| Evergreen | `surface/evergreen/bold` | `text/inverse` |
| Indigo | `surface/indigo/bold` | `text/inverse` |
| Warning | `surface/warning/bold` | `text/primary` ⚠️ |
| Error | `surface/danger/bold` | `text/on-danger` |
| Success | `surface/success/bold` | `text/on-success` |

## Token Mapping (Line)

| Color | Background | Border | Text |
|---|---|---|---|
| Default | `surface/default/subtle` | `border/default` | `text/primary` |
| Evergreen | `surface/evergreen/subtle` | `border/evergreen` | `text/evergreen` |
| Warning | `surface/warning/subtle` | `border/warning` | `text/primary` ⚠️ |
| Error | `surface/danger/subtle` | `border/danger` | `text/danger` |

## Layout & Typography
- Tipografía: `Text/Label/XS` — 11px, line-height 16px, weight medium, tracking wide.
- Corner radius: 5px.

## Accessibility
- `aria-label` descriptivo: `aria-label="23 notificaciones no leídas"`.
- Contraste mínimo 4.5:1 en todas las variantes.

## Changelog
- `2026-04-09` — v1.0. 16 variantes (2 Types × 8 Colors). Warning usa text/primary confirmado.
