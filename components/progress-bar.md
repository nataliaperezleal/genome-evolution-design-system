---
component: "Progress Bar"
system: "Genome Evolution DS"
type: "Feedback / Status"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-1888"
last_updated: "2026-04-17"
tags: [progress, bar, loading, status, indicator, evergreen, indigo]
---

# Progress Bar — Genome Evolution DS

Barra de progreso horizontal de 350×8px con fill coloreado sobre track claro. 2 colores de marca, puramente visual (no interactivo).

## Quick Reference (AI-optimized)

**Propiedades:**
- `Color` [`Evergreen` | `Indigo`] — default: `Evergreen`
- `Progress` [`10%` | `25%` | `70%` | `100%`] — snapshot visual (en implementación usar CSS `width`)

**Tokens:**

| Elemento | Token | Valor |
|---|---|---|
| Track fondo | `background/canvas` | #ffffff |
| Fill Evergreen | `icon/evergreen` | #297a39 |
| Fill Indigo | `icon/indigo` | #6b1b99 |
| Radius track y fill | `semantic/md` | 8px |
| Padding H | `space/1` | 1px |
| Padding V | `space/2` | 2px |
| Gap | `gap/none` | 0px |

## Anatomy

```
┌──────────────────────────────── 350×8px ────────────────────────┐
│ padding H 1px, V 2px — background/canvas — radius 8px — overflow:hidden │
│ ┌────────── fill 6px alto ──────────┐                           │
│ │ icon/[color] — radius 8px         │  (espacio vacío)          │
│ └───────────────────────────────────┘                           │
└─────────────────────────────────────────────────────────────────┘
```

- Track: 350×8px, `overflow: hidden`.
- Fill: 6px alto, `width: [0–100%]` dinámico en implementación.

## When to Use / When NOT to Use

### ✅ Usar cuando
- Progreso determinado con porcentaje conocido. Pasivo y no interactivo.

### ❌ Evitar cuando
- Progreso indeterminado (usar Spinner). Selección de rango (usar Slider).

## Implementation

```css
.progress-track {
  width: 350px; height: 8px;
  background: var(--background/canvas);
  border-radius: var(--semantic/md, 8px);
  overflow: hidden;
  padding: 2px 1px;
}
.progress-fill {
  height: 6px;
  border-radius: var(--semantic/md, 8px);
  background: var(--icon/evergreen);
  width: 70%; /* valor dinámico */
  transition: width 0.3s ease;
}
```

## Accessibility
- `role="progressbar"` + `aria-valuenow` + `aria-valuemin="0"` + `aria-valuemax="100"`.
- `aria-label` descriptivo del proceso.

## Changelog
- `2026-04-17` — 8 variantes (2 Color × 4 Progress). `semantic/md` = 8px confirmado.
