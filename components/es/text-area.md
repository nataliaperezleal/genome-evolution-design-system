---
component: "Text Area"
system: "Genome Evolution DS"
type: "Form / Input"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2258-793"
last_updated: "2026-04-17"
tags: [textarea, input, multiline, form, text, comment, description]
---

# Text Area — Genome Evolution DS

Campo de texto multi-línea redimensionable. 34 variantes: 8 State × 2 Size × 2 Orientation. Con label, área de texto de altura fija, handle de resize, scrollbar interno y contador de caracteres.

## Quick Reference (AI-optimized)

**Propiedades:**
- `State` [`Default` | `Hovered` | `Focused` | `Focused tab` | `Filled` | `Error` | `Disabled` | `Read only`] — default: `Default`
- `Size` [`MD` | `SM`] — default: `MD`
- `Orientation` [`Default` | `Label Left`] — default: `Default`
- `label`, `text`, `helperText`
- `showLabel`, `showInfo`, `showHelperText`, `showCounter`, `showScroll` — todos default: `true` (excepto `showScroll`: `false`)

**Tokens del área por State:**

| State | Background | Border | Width | Texto campo |
|---|---|---|---|---|
| Default | `background/canvas` | `border/default` #c3cbc5 | 1px | `text/secondary` |
| Hovered | `background/interactive/hovered` | `border/interactive/hovered` #adb8b0 | 1px | `text/primary` |
| Focused | `background/canvas` | `border/focus` #339947 | **1px** | `text/primary` |
| Focused tab | `background/canvas` | `border/focus` #339947 | **2px** | `text/primary` |
| Filled | `background/canvas` | `border/default` | 1px | `text/primary` |
| Error | `background/canvas` | `border/danger` #ba1a1a | 1px | `text/primary` |
| Disabled | `background/disabled` | `border/disabled` | 1px | `text/disabled` |
| Read only | sin fondo | `border/default` | 1px | `text/secondary` |

> ⚠️ Focused = 1px (click) · Focused tab = **2px** (Tab teclado). Ambos muestran cursor.
> ⚠️ Read only: único estado sin fondo.
> ⚠️ Error: solo el helper cambia a `text/danger`, el label mantiene `text/primary`.

**Combinaciones inválidas:**
- `showLabel=false` sin `aria-label` alternativo.
- `State=Disabled` con interacción activa.

## When to Use / When NOT to Use

### ✅ Usar cuando
- El usuario necesita escribir más de una línea.
- Comentarios, descripciones, notas, mensajes libres.
- Se quiere mostrar límite de caracteres con contador.

### ❌ Evitar cuando
- Entrada de una sola línea (usar Input).
- Editor con formato enriquecido.

## Variants

### Size

| Aspecto | MD | SM |
|---|---|---|
| Área alto | 76px | ~56px |
| Label | `Text/Label/MD` 14/20 semibold | `Text/Label/SM` 12/16 semibold |
| Texto | `Text/Body/SM` 14/20 regular | `Text/Body/XS` 12/16 regular |
| Padding V | `space/8` 8px | `space/4` 4px |

### Orientation

| Aspecto | Default | Label Left |
|---|---|---|
| Layout | Columna | Fila |
| Área ancho | 244px | 199px |
| Radius token | `semantic/sm` 4px | `radius/4` 4px |

## Elementos especiales

- **Line expand** — Handle de resize 9×9px, absoluto bottom/right 1px (Focused tab: 2px).
- **Cursor** — div 1px × 16px, `icon/primary`, solo en Focused y Focused tab.
- **Scroll** (showScroll=true) — Componente Scroll del DS, 4px ancho. Track: `surface/subtlest` #f7f8f7. Thumb: `surface/subtle` #d9deda. Radius: `semantic/full` 999px.
- **Counter** — `"00/999"`, 39px ancho fijo, `Text/Body/XS`, `text-right`.

## Padding & Layout
- Padding: left `space/16` (16px), right `space/8` (8px), V según Size.
- Gap label–input: `gap/xxs` (2px).
- Helper row: 18px alto.

## Accessibility
- `<textarea>` nativo asociado a `<label>` con `for`/`id`.
- Error: `aria-invalid="true"` + `aria-describedby` → helper.
- Counter: `aria-live="polite"`.
- `maxlength` coherente con el contador.
- Focused tab: borde 2px asegura visibilidad mayor para foco por teclado.

## Changelog
- `2026-04-17` — Documentación completa. Scroll tokenizado confirmado. Line expand documentado.
