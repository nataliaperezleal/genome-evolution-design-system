---
component: "Clear Button"
system: "Genome Evolution DS"
type: "Action"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2103-36"
last_updated: "2026-04-09"
tags: [button, clear, ghost, action, navigation]
---

# Clear Button — Genome Evolution DS

Botón de acción sin fondo ni borde visible (estilo ghost/clear), con variantes de color de marca y tipo semántico. Soporta íconos opcionales a izquierda y derecha del texto.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Color` [`Indigo` | `Default` | `Evergreen`] — default: `Indigo`
- `Type` [`Default` | `Information` | `Success` | `Danger` | `Warning`] — default: `Default`
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Disabled`] — default: `Default`
- `Corner` [`Default` | `Rounded`] — default: `Default`
- `Text` — Label. Default: `"Button"`
- `Show left icon` [`true` | `false`] — default: `True`
- `Left icon` — default: `arrow-left`. Acepta cualquier ícono.
- `Show right icon` [`true` | `false`] — default: `True`
- `Right icon` — default: `arrow-right`. Acepta cualquier ícono.

**Tokens en State=Default:**
- Texto: `text/primary` · Ícono: `icon/primary` · Fill: ninguno · Stroke: ninguno

**Combinaciones inválidas:**
- `Color` ≠ Default con `Type` ≠ Default simultáneamente.
- `Corner=Rounded` en contenedores muy estrechos.

**Snippets:**
- Navegación anterior: `Color=Default, Show left icon=true, Left icon=arrow-left, Show right icon=false`
- Marca Indigo: `Color=Indigo, Type=Default, Corner=Default`
- Semántica peligro: `Color=Default, Type=Danger`
- Pill de marca: `Color=Evergreen, Corner=Rounded`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Acción secundaria o terciaria de menor jerarquía.
- Acciones de navegación con íconos direccionales.

### ❌ Evitar cuando
- Es la acción principal (usar Button filled).
- El contexto requiere borde visible para identificar el elemento.

## Variants

### Color
- `Default` — `text/primary`, `icon/primary`.
- `Indigo` — `text/indigo`, `icon/indigo`.
- `Evergreen` — `text/evergreen`, `icon/evergreen`.

### Type (sobreescribe Color en texto/ícono)
- `Default` — según Color.
- `Information` — `text/info`, `icon/info`.
- `Success` — `text/success`, `icon/success`.
- `Danger` — `text/danger`, `icon/danger`.
- `Warning` — `text/warning`, `icon/warning`.

### Corner
- `Default` — radius 4px.
- `Rounded` — `radius/full` (pill).

## Layout & Typography
- Flow: horizontal, centro-centro
- Padding: 8px H · 4px V · Gap: 8px
- Altura: 24px (hug)
- Tipografía: `Text/Body/XS Strong` — 12/16, semibold 600

## Accessibility
- Contraste 4.5:1 contra fondo del contexto (sin fondo propio).
- Focus ring del sistema visible en Focused.
- Label descriptivo: evitar "Click aquí".
- Target mínimo móvil: wrapper con área 40px.

## Changelog
- `2026-04-09` — Documentación inicial. Tokens State=Default confirmados.
