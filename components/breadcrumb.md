---
component: "Breadcrumb"
system: "Genome Evolution DS"
type: "Navigation"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2081-1160"
last_updated: "2026-04-21"
tags: [breadcrumb, navigation, hierarchy, path, wayfinding]
---

# Breadcrumb — Genome Evolution DS

Ruta de navegación jerárquica horizontal. Muestra la posición actual del usuario dentro de la estructura de la aplicación mediante una secuencia de items separados por chevrons.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `showMore` [`true` | `false`] — muestra "..." (items colapsados). Default: `true`
- `hideOne` [`true` | `false`] — muestra item intermedio 1. Default: `true`
- `hideTwo` [`true` | `false`] — muestra item intermedio 2. Default: `true`

> ⚠️ **Naming contraintuitivo:** `hideOne=true` y `hideTwo=true` **MUESTRAN** el item, no lo ocultan.

**Estructura (todos los props en true):**
```
[... >] [Text >] [Text >] [Text >] [Text activo]
  ↑        ↑       ↑       penúltimo   activo
showMore  hideOne hideTwo  (visible)  (visible)
semibold  regular regular   regular   semibold
```

**Tokens por Color:**

| Elemento | Default | Evergreen | Indigo |
|---|---|---|---|
| "..." y activo | `text/primary` #2d342f | `text/evergreen` #297a39 | `text/indigo` #6b1b99 |
| Intermedios | `text/secondary` #5f6d62 | `text/secondary` | `text/secondary` |
| Chevrons | implícito | `icon/evergreen` | `icon/indigo` |

**Tipografía:**
- "..." y activo: `Text/Button/MD` — 14/16, semibold 600
- Items intermedios: `Text/Body/SM` — 14/20, regular 400

**Combinaciones inválidas:**
- Hacer clickeable el último item (activo) — es la ubicación actual, no interactivo.
- `showMore=true` cuando hay espacio para mostrar todos los items.

## When to Use / When NOT to Use

### ✅ Usar cuando
- La jerarquía tiene 3 o más niveles de profundidad.
- El usuario necesita contexto sobre su ubicación.
- Se quiere navegación rápida a niveles superiores.

### ❌ Evitar cuando
- Estructura plana de 1-2 niveles.
- La navegación principal ya comunica la jerarquía.

## Variants

### Color
- `Default` — Destacados con `text/primary`.
- `Evergreen` — Destacados con `text/evergreen`, chevrons `icon/evergreen`.
- `Indigo` — Destacados con `text/indigo`, chevrons `icon/indigo`.

> Los intermedios siempre usan `text/secondary` independientemente del Color.

## Layout
- Flow: fila, gap 8px, items-center
- Padding: H 16px, V 8px
- Chevron: 12×12px (vector interior 6×10px)
- `whitespace-nowrap` en todos los textos

## Accessibility
- `<nav aria-label="Breadcrumb">` como contenedor.
- Lista `<ol>` con `<li>` para cada item.
- Item activo: `aria-current="page"`, no debe ser `<a>`.
- Chevrons: `aria-hidden="true"`.
- Contraste confirmado: text/primary, text/evergreen, text/indigo, text/secondary → todos cumplen 4.5:1.

## Changelog
- `2026-04-21` — Documentación completa. 3 variantes de Color.
