---
pattern: "Form Validation"
system: "Genome Evolution Design System"
type: "Pattern"
status: "draft"
created: "2026-10-28"
tags: [form, validation, error, feedback, inline-errors]
---

# Pattern: Form Validation

## Estructura

- Organiza los campos en el orden de entrada y usa `Input` con una etiqueta visible y persistente por campo.
- Valida al enviar y, cuando corresponda, vuelve a validar un campo corregido. El mensaje debe identificar el problema y la acción para resolverlo.
- Coloca el error junto al campo correspondiente, con `var(--ge-spacing-gap-xxs)` entre el campo y el texto.
- Usa `Button` para la acción de envío y conserva su etiqueta durante la validación.
- Mantén los valores ya introducidos cuando se muestre un error.

## Anuncio y gestión del foco

- Si el envío contiene errores de campo, mueve el foco al primer campo inválido.
- Incluye un resumen global con `role="alert"` que anuncie el número de errores, sin mover el foco.
- Si el error es global y no corresponde a un campo, anúncialo con `role="alert"` y deja el foco en el botón de envío.
- Asocia cada mensaje de error a su campo y comunica el estado inválido semánticamente. No uses solo color para expresar el estado.

## Tipografía y color

- Etiquetas: `var(--ge-typography-role-label-md-family)`, `var(--ge-typography-role-label-md-size)`, `var(--ge-typography-role-label-md-weight)` y `var(--ge-typography-role-label-md-line-height)`.
- Texto de campo y ayuda: `var(--ge-typography-role-body-sm-family)`, `var(--ge-typography-role-body-sm-size)`, `var(--ge-typography-role-body-sm-weight)` y `var(--ge-typography-role-body-sm-line-height)`.
- Usa `var(--ge-color-role-text-primary)` para el texto principal, `var(--ge-color-role-text-secondary)` para ayuda y `var(--ge-color-role-text-danger)` para el error. Verifica el contraste con el fondo.
- Usa `var(--ge-color-role-border-danger)` para comunicar el borde de error y `var(--ge-color-role-border-focus)` para el indicador de foco. Verifica el contraste de ambos con el fondo adyacente.

## Pendientes de verificar

- Los valores literales de `InputState` y su vínculo con el estado visual de error no se pueden confirmar desde los exports de `index.ts`.
- La documentación de `Input` no confirma el soporte React de los atributos para estado inválido, asociación del mensaje o comportamiento de lector de pantalla.
- La documentación de `Button` no confirma cómo su implementación React expone semántica HTML ni cómo se conserva el foco en el control de envío.

## Fuentes consultadas

- [manifest.json](../../manifest.json)
- [input.md](../../components/input.md)
- [button.md](../../components/button.md)
- [index.ts](../../packages/react/src/index.ts)
- [variables.css](../../packages/tokens/dist/variables.css)
- [token-usage-rules.md](../../ai/token-usage-rules.md)
- [typography.md](../../foundations/typography.md)
- [evaluation-checklist.md](../../ai/evaluation-checklist.md)
- [AGENTS.md](../../AGENTS.md)
