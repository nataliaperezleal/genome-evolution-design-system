---
component: "Backdrop"
system: "Genome Plus Design System"
type: "Overlay"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2041-81"
last_updated: "2026-04-09"
tags: [backdrop, overlay, modal, dialog, drawer]
---

# Backdrop — Genome Plus Design System

Capa de overlay semitransparente entre el contenido de fondo y un elemento flotante (modal, drawer, dialog). Puramente visual, sin interactividad.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Color` [`Black` | `White`] — default: `Black`

**Combinaciones inválidas:**
- `Color=White` en tema Light → overlay invisible (`palette/alpha/100`).
- `Color=Black` en tema Dark → overlay invisible (`palette/alpha/100`).
- Backdrop sin componente flotante encima → uso sin propósito semántico.

**Snippets de uso frecuente:**
- Modal en tema Light: `Color=Black`
- Modal en tema Dark: `Color=White`
- Drawer en tema Light: `Color=Black`
- Drawer en tema Dark: `Color=White`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Se abre una modal, dialog o drawer que requiere atención exclusiva.
- Se necesita bloquear visualmente la UI de fondo.

### ❌ Evitar cuando
- No hay componente flotante activo encima.
- Se busca un elemento interactivo.
- Se usa como fondo decorativo.

## Variants

### Color
- `Black` — `palette/alpha/1000` en Light · `palette/alpha/100` en Dark.
- `White` — `palette/alpha/100` en Light · `palette/alpha/1000` en Dark.

## Token Mapping

| Variante | Tema Light | Tema Dark |
|---|---|---|
| Black | `palette/alpha/1000` | `palette/alpha/100` |
| White | `palette/alpha/100` | `palette/alpha/1000` |

**Regla:** Light → siempre `Color=Black`. Dark → siempre `Color=White`.

## Layout
- Width/Height: 100% del viewport. Sin padding. Radius: 0.

## Accessibility
- `aria-hidden="true"` en el elemento del Backdrop.
- El trap de foco y `aria-modal` son responsabilidad del componente flotante.

## Changelog
- `2026-04-09` — v1.0. Tokens confirmados por el equipo.
