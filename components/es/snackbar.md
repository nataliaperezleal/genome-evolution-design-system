---
component: "Snackbar"
system: "Genome Evolution DS"
type: "Feedback"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2255-980"
last_updated: "2026-04-17"
tags: [snackbar, toast, notification, feedback, danger, warning, information, success]
---

# Snackbar — Genome Evolution DS

Notificación toast temporal con 4 tipos semánticos, ícono, mensaje, botón de acción opcional y barra de progreso. Ancho fijo 430px.

## Quick Reference (AI-optimized)

**Propiedades:**
- `Type` [`Danger` | `Warning` | `Information` | `Success`] — default: `Danger`
- `label` — Default: `"Single-line toast bar"`
- `showButton` [`true` | `false`] — default: `true`
- `showBar` [`true` | `false`] — default: `true`

**Tokens por Type:**

| Elemento | Danger | Warning | Information | Success |
|---|---|---|---|---|
| Fondo Content | `surface/danger/subtle` #ffe9e5 | `surface/warning/subtle` #fff0c2 | `surface/info/subtle` #e8f2ff | `surface/success/subtle` #bfffda |
| Ícono | `circle-close` | `warning` | `info` | `check` |
| Color texto/ícono | `text/danger` #ba1a1a | `text/warning` #8c7500 | `text/info` #2f7cb6 | `text/success` #00885c |
| Barra bold | `surface/danger/bold` #93000a | `surface/warning/bold` #705d00 | `surface/info/bold` #004a76 | `surface/success/bold` #006c48 |

**Tokens de estructura:**
- Container radius: `semantic/md` (8px).
- Padding left Content: `space/16` (16px). Padding right: `size/48` (48px).
- Gap Content: `gap/l` (16px).
- Barra fill radius: `semantic/full` (999px). Alto: 8px.

## When to Use / When NOT to Use

### ✅ Usar cuando
- Resultado de una acción, temporal y no bloqueante. Mensaje de una sola línea.

### ❌ Evitar cuando
- Mensajes persistentes (usar Inline Alert). Acción obligatoria (usar Modal).

## Anatomy

```
┌────────────────────────────────────────────┐ ← 430px
│ pl:16 [Ícono 24px] [Texto] [Btn?] [✕ abs] │ ← Content 64px
├────────────────────────────────────────────┤
│ [████████████████████████] [  80px  ]      │ ← Bar 8px
└────────────────────────────────────────────┘
```

- Ícono: 24×24px. Close: 16×16px, absoluto top-16 right-16.
- Botón: height 24px, padding H 13px V 5px, radius `semantic/sm` (4px).
- Mensaje: `Text/Body/MD` 16/20 regular. Botón: `Text/Button/SM` 12/16 semibold.

## Accessibility
- Danger/Warning: `role="alert"`. Information/Success: `role="status"`.
- Close: `aria-label="Cerrar notificación"`.

## Changelog
- `2026-04-17` — 4 variantes. Tokens de barra bold confirmados.
