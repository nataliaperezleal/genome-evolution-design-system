---
component: "Icon Button"
system: "Genome Evolution DS"
type: "Action"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2182-3348"
last_updated: "2026-04-16"
tags: [button, icon, action, toolbar, compact, filled, outline]
---

# Icon Button — Genome Evolution DS

Botón compacto que contiene únicamente un ícono (sin texto). Dos estilos, cuatro colores, cinco estados y tres tamaños.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Type` [`Filled` | `Outline`] — default: `Filled`
- `Color` [`Evergreen` | `Indigo` | `Default` | `Inverse`] — default: `Evergreen`
- `State` [`Default` | `Hover` | `Pressed` | `Focused` | `Disable`] — default: `Default`
- `Size` [`LG` | `MD` | `SM`] — default: `LG`
- `largeIcon` — ícono para Size=LG (24px). Default: `send`
- `mediumIcon` — ícono para Size=MD (16px). Default: `send`
- `smallIcon` — ícono para Size=SM (12px). Default: `trash`

**Dimensiones:**

| Size | Total | Padding | Ícono |
|---|---|---|---|
| LG | 48×48px | 12px | 24×24px |
| MD | 32×32px | 8px | 16×16px |
| SM | 24×24px | 6px | 12×12px |

**Combinaciones inválidas:**
- `largeIcon` con `Size=MD` o `SM` — usar `mediumIcon`/`smallIcon`.
- `State=Disable` con `Color` ≠ `Default`.
- `Color=Inverse` con `Type=Outline` — no existe.
- `Color=Inverse` sobre fondos claros.

## When to Use / When NOT to Use

### ✅ Usar cuando
- El ícono comunica claramente la acción sin texto.
- Se agrupan acciones en toolbars de alta densidad.

### ❌ Evitar cuando
- La acción es ambigua sin label.
- Es el CTA principal de una pantalla.

## Variants

### Type
- `Filled` — Fondo sólido. Mayor peso visual. Acciones primarias.
- `Outline` — Solo borde. Acciones secundarias.

### Color
- `Evergreen` — Verde de marca.
- `Indigo` — Índigo de marca. Features IA.
- `Default` — Neutro. `border/strong`.
- `Inverse` — Fondo claro (`background/canvas`). Solo en Filled. Para fondos oscuros.

### State
- `Default` — Reposo.
- `Hover` — Fondo intensificado.
- `Pressed` — Fondo más oscuro.
- `Focused` — `border/focus` #339947 2px — universal para todos los colores.
- `Disable` — `background/disabled`, ícono `icon/disabled`. No interactivo.

## Token Mapping (Type=Filled)

| Color | Default | Hover | Pressed | Ícono |
|---|---|---|---|---|
| Evergreen | `surface/evergreen/bold` #297a39 | `surface/evergreen/bold/hovered` #1f5c2b | `surface/evergreen/bold/pressed` #174520 | `icon/inverse` #f7f8f7 |
| Indigo | `surface/indigo/bold` #6b1b99 | `surface/indigo/bold/hovered` #4f0077 | `surface/indigo/bold/pressed` #30004a | `icon/inverse` #f7f8f7 |
| Inverse | `background/canvas` #ffffff | `background/interactive/hovered` | `background/interactive/pressed` | `icon/primary` #5f6d62 |
| Disable | `background/disabled` #f4f6f4 | — | — | `icon/disabled` #9daaa0 |

## Token Mapping (Type=Outline)

| Color | Borde Default | Hover bg | Pressed bg | Ícono |
|---|---|---|---|---|
| Evergreen | `border/evergreen` #297a39 | `background/interactive/hovered` | `background/interactive/pressed` | `icon/evergreen` #297a39 |
| Indigo | `border/indigo` #6b1b99 | `background/interactive/hovered` | `background/interactive/pressed` | `icon/indigo` #6b1b99 |
| Default | `border/strong` #5f6d62 | `background/interactive/hovered` | `background/interactive/pressed` | `icon/primary` #5f6d62 |
| Disable | `border/disabled` #c3cbc5 | — | — | `icon/disabled` #9daaa0 |

**Focus ring:** `border/focus` #339947 2px — universal para todos los Color y Type.

**Border radius:** 4px en todos los sizes y variantes.

## Accessibility
- **Siempre** añadir `aria-label` descriptivo (ej. `aria-label="Eliminar"`).
- Ícono: `aria-hidden="true"`.
- Disable: `aria-disabled="true"`. No recibe foco.
- Target táctil mínimo en móvil: usar Size=MD (32px) como mínimo.

## Changelog
- `2026-04-16` — Documentación completa. Tokens confirmados por inspección directa.
