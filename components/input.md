---
component: "Input"
system: "Genome Evolution DS"
type: "Form / Input"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2171-2467"
last_updated: "2026-04-16"
tags: [input, text, field, form, label, validation, error, disabled, readonly]
---

# Input — Genome Evolution DS

Campo de entrada de texto con label, íconos opcionales leading/trailing, helper text y 8 estados interactivos. Disponible en dos tamaños y dos orientaciones de label.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `State` [`Default` | `Hovered` | `Focused` | `Focused tab` | `Filled` | `Error` | `Disabled` | `Read only`] — default: `Default`
- `Size` [`MD` | `SM`] — default: `MD`
- `Orientation` [`Default` | `Label Left`] — default: `Default`
- `label` — Default: `"Label"`
- `text` — Default: `"Placeholder"`
- `helperText` — Default: `"Helper text"`
- `showLabel`, `showInfo`, `showLeftIcon`, `showRightIcon`, `showHelperText` — todos default: `true`

**Tokens por estado (campo):**

| State | Background | Border | Ancho borde |
|---|---|---|---|
| Default | `background/canvas` #ffffff | `border/default` #c3cbc5 | 1px |
| Hovered | `background/interactive/hovered` #f7f8f7 | `border/interactive/hovered` #adb8b0 | 1px |
| Focused | `background/canvas` | `border/focus` #339947 | 1px |
| Focused tab | `background/canvas` | `border/focus` #339947 | **2px** |
| Filled | `background/canvas` | `border/default` #c3cbc5 | 1px |
| Error | `background/canvas` | `border/danger` #ba1a1a | 1px |
| Disabled | `background/disabled` #f4f6f4 | `border/disabled` #c3cbc5 | 1px |
| Read only | ninguno | ninguno | — |

**Combinaciones inválidas:**
- `State=Read only` con `showRightIcon=true`.
- `State=Disabled` + `State=Error` simultáneamente.
- `showLabel=false` con `Orientation=Label Left`.

## When to Use / When NOT to Use

### ✅ Usar cuando
- Capturar un dato textual en formularios, filtros o configuraciones.
- Se requiere feedback visual de validación con estado Error.
- Se necesita orientación horizontal (Label Left) en formularios en fila.

### ❌ Evitar cuando
- Solo selección de opción de lista (usar Dropdown).
- Texto largo multilínea (usar Text Area).

## Variants

### State
- `Default` — Borde gris, placeholder `text/secondary`.
- `Hovered` — Fondo gris claro, borde más visible.
- `Focused` — Borde verde 1px, cursor de texto visible.
- `Focused tab` — Borde verde 2px (foco por teclado).
- `Filled` — Campo con valor. Visual como Default pero texto `text/primary`.
- `Error` — Borde rojo, helper en `text/danger`.
- `Disabled` — Fondo/texto atenuados. No interactivo.
- `Read only` — Sin borde/fondo. Texto `text/primary`. Sin trailing icon.

### Size
- `MD` — Height ~36px. Label `Text/Label/MD` 14/20 semibold. Ancho 244px.
- `SM` — Más compacto. Label `Text/Label/SM` 12/16 semibold. Ancho 244px.

### Orientation
- `Default` — Label arriba, campo abajo (columna, gap 2px).
- `Label Left` — Label izquierda, campo derecha (fila, gap 4px). Campo MD: 199px ancho.

## Token Mapping — Texto

| State | Texto campo | Label | Helper |
|---|---|---|---|
| Default | `text/secondary` #5f6d62 (placeholder) | `text/primary` | `text/tertiary` #728376 |
| Filled/Focused/Hovered | `text/primary` #2d342f | `text/primary` | `text/tertiary` |
| Error | `text/primary` | `text/primary` | `text/danger` #ba1a1a |
| Disabled | `text/disabled` #849588 | `text/disabled` | `text/disabled` |
| Read only | `text/primary` | `text/primary` | `text/tertiary` |

## Typography

| Elemento | MD | SM |
|---|---|---|
| Label | `Text/Label/MD` 14/20 semibold | `Text/Label/SM` 12/16 semibold |
| Campo texto | `Text/Body/SM` 14/20 regular | `Text/Body/XS` 12/16 regular |
| Helper text | `Text/Body/XS` 12/16 regular | `Text/Body/XS` 12/16 regular |

## Layout & Iconography
- Padding campo: H `space/16` (16px), V `space/8` (8px). Gap interno: `gap/s` (8px).
- Border radius: `semantic/sm` (4px). Excepción: Read only sin radius.
- Left icon: 16×16px, default `calendar`. Right icon: 12×12px, default `chevron-down`.
- Cursor (Focused/Error): 1px × 16px, `icon/primary`.

## Accessibility
- `<label for="id">` asociado al campo.
- Error: `aria-invalid="true"` + `aria-describedby` → helper text.
- Disabled: atributo `disabled`.
- Read only: atributo `readonly`.
- Focused tab: borde 2px asegura visibilidad de foco por teclado.

## Changelog
- `2026-04-16` — Documentación completa. 8 states × 2 sizes × 2 orientations.
