---
component: "Inline Alert"
system: "Genome Evolution DS"
type: "Feedback"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2181-3058"
last_updated: "2026-04-16"
tags: [alert, inline, notification, feedback, danger, warning, information, success]
---

# Inline Alert — Genome Evolution DS

Alerta contextual en línea con borde izquierdo de 4px de color semántico. Persiste dentro del flujo de la página (no es flotante).

## Quick Reference (AI-optimized)

**Propiedades:**
- `Type` [`Danger` | `Warning` | `Information` | `Success`] — default: `Danger`
- `Size` [`Regular` | `Small`] — default: `Regular`
- `title` — Default: `"Title"`
- `description` — Default: `"Single-line toast bar"`
- `showTitle` [`true` | `false`] — default: `true`
- `showButton` [`true` | `false`] — default: `true`
- `showClose` [`true` | `false`] — default: `true`

**Tokens completos por Type:**

| Elemento | Danger | Warning | Information | Success |
|---|---|---|---|---|
| Fondo | `surface/danger/subtle` #ffe9e5 | `surface/warning/subtle` #fff0c2 | `surface/info/subtle` #e8f2ff | `surface/success/subtle` #bfffda |
| Borde izq. | `border/danger` #ba1a1a | `border/warning` #8c7500 | `border/info` #2f7cb6 | `border/success` #00885c |
| Texto | `text/danger` #ba1a1a | `text/warning` #8c7500 | `text/info` #2f7cb6 | `text/success` #00885c |
| Ícono | `circle-close` | `warning` | `info` | `check` |

> Regla: fondo, borde, texto, ícono y botón son **siempre del mismo tipo semántico**.

**Combinaciones inválidas:**
- `showTitle=false` sin descripción → componente vacío.
- Usar para mensajes transitorios (usar Toast/Snackbar).

## When to Use / When NOT to Use

### ✅ Usar cuando
- Mensaje semántico persistente dentro del contenido.
- Se quiere ofrecer una acción relacionada.
- El usuario necesita contexto sobre el estado de una sección.

### ❌ Evitar cuando
- El mensaje desaparece automáticamente (usar Snackbar).
- Es flotante sobre el contenido (usar Modal).

## Variants

### Type
- `Danger` — Error crítico. Ícono `circle-close`. Rojo #ba1a1a.
- `Warning` — Advertencia. Ícono `warning`. Amarillo #8c7500.
- `Information` — Informativo neutro. Ícono `info`. Azul #2f7cb6.
- `Success` — Confirmación positiva. Ícono `check`. Verde #00885c.

### Size

| Aspecto | Regular | Small |
|---|---|---|
| Altura | 76px | 56px |
| Padding | 16px todos lados | 16px izq, 8px der, 8px V |
| Ícono | 24×24px | 16×16px |
| Título | `Text/Title/SM` 18/24 semibold | `Text/Body/SM Strong` 14/20 semibold |
| Descripción | `Text/Body/MD` 16/20 regular | `Text/Body/SM` 14/20 regular |
| Botón | `Text/Button/MD` padding H 17px V 9px | `Text/Button/SM` padding H 13px V 5px |

## Layout
- Border-left: 4px sólido, `border/[type]`.
- Border-radius: `radius/8` (8px).
- Gap interno: `gap/s` (8px).
- Flow: horizontal, items-start.
- Texto: flex-1. Botón y close: shrink-0.

## Accessibility
- Danger/Warning: `role="alert"` (anuncia inmediatamente).
- Information/Success: `role="status"` (anuncia en momento oportuno).
- Ícono semántico: `aria-hidden="true"`.
- Close: `aria-label="Cerrar alerta"`.
- Contraste confirmado: todos los Types cumplen 4.5:1.

## Changelog
- `2026-04-16` — Documentación completa. 8 variantes (4 Type × 2 Size).
