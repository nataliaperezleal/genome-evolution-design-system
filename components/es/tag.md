---
component: "Tag"
system: "Genome Evolution DS"
type: "Content / Label"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-1314"
last_updated: "2026-04-17"
tags: [tag, chip, label, status, semantic, category]
---

# Tag — Genome Evolution DS

Etiqueta compacta de 20px de alto para categorizar o indicar estado semántico. 24 variantes: 2 Style × 2 Corners × 6 Type.

> ⚠️ **Typo en Figma:** El Type "Success" se llama `Sucess` (una 's'). Usar tal cual en código.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Style` [`Filled` | `Outline`] — default: `Outline`
- `Corners` [`Square` | `Rounded`] — default: `Square`
- `Type` [`Default` | `Inverse` | `Information` | `Warning` | `Error` | `Sucess`] — default: `Default`
- `text` — Default: `"Label"`
- `showLeftIcons` [`true` | `false`] — default: `true`
- `showRightIcon` [`true` | `false`] — default: `true`

**Combinaciones inválidas:**
- `Outline+Inverse` sobre fondos claros (borde y texto casi invisibles).
- `showLeftIcons=false` + `showRightIcon=false` + texto vacío.

## Token Mapping — FILLED

| Type | Background | Border | Texto |
|---|---|---|---|
| Default | `surface/raised` #3b443d | ninguno | `text/inverse` #f7f8f7 |
| Inverse | `background/canvas` #ffffff | ninguno | `text/primary` #2d342f |
| Information | `surface/info/bold` #004a76 | ninguno | `text/inverse` #f7f8f7 |
| Warning | `surface/warning/bold` #705d00 | ninguno | `text/inverse` #f7f8f7 |
| Error | `surface/danger/bold` #93000a | `border/danger` #ba1a1a | `text/inverse` #f7f8f7 |
| Sucess | `surface/evergreen/bold` #297a39 | ninguno | `text/inverse` #f7f8f7 |

## Token Mapping — OUTLINE

| Type | Background | Border | Texto |
|---|---|---|---|
| Default | ninguno | `border/default` #c3cbc5 | `text/primary` #2d342f |
| Inverse | ninguno | `border/inverse` #fcfdfc | `text/inverse` #f7f8f7 |
| Information | `surface/info/subtle` #e8f2ff | `border/info` #2f7cb6 | `text/info` #2f7cb6 |
| Warning | `surface/warning/subtle` #fff0c2 | `border/warning` #8c7500 | `text/warning` #8c7500 |
| Error | `surface/danger/subtle` #ffe9e5 | `border/danger` #ba1a1a | `text/danger` #ba1a1a |
| Sucess | `surface/success/subtle` #bfffda | `border/success` #00885c | `text/success` #00885c |

## Layout & Typography

| Corners | Radius | Padding |
|---|---|---|
| Square | `radius/4` (4px) | `space/4` (4px) todos lados |
| Rounded | `semantic/full` (999px) | H `space/8` (8px), V `space/4` (4px) |

- Alto: **20px fijo** en todas las variantes.
- Gap ícono–texto: `gap/xs` (4px).
- Íconos: 12×12px (`bizagi-lines` por defecto). Color coincide con texto del Type.
- Tipografía: `Text/Button/SM` — 12/16, semibold 600.

## When to Use / When NOT to Use

### ✅ Usar cuando
- Clasificar o etiquetar contenido en tablas, listas o cards.
- Indicar estado semántico (error, éxito, advertencia).

### ❌ Evitar cuando
- Se necesita acción interactiva (usar Button).
- Se quiere mostrar conteo numérico (usar Badge).

## Accessibility
- Implementar con `<span>` o `<div>` — puramente informativo.
- `aria-label` o `role="status"` si el estado es relevante.
- No depender solo del color — el texto debe ser descriptivo.

## Changelog
- `2026-04-17` — Documentación completa. 24 variantes (2×2×6). Typo "Sucess" documentado.
