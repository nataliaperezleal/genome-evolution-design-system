---
pattern: "Login Form"
system: "Genome Evolution Design System"
type: "Pattern"
status: "draft"
tags: [authentication, form, login, email, password]
---


# Pattern: Login Form

## Estructura

- Presenta un formulario con campos etiquetados para identificador y contraseña. Usa `Input` para ambos; conserva las etiquetas visibles y no dependas del placeholder para nombrarlos.
- Añade `Checkbox` solo si el producto ofrece una opción de sesión persistente y explica su efecto en la etiqueta.
- Usa `Button` para enviar el formulario. La acción principal debe tener una etiqueta clara.
- Mantén los mensajes de ayuda junto al campo correspondiente. El espacio entre un campo y su mensaje de error es `var(--ge-spacing-gap-xxs)`.

## Errores y foco

- Al enviar con errores de campo, enfoca el primer campo inválido.
- Un resumen global con `role="alert"` anuncia el número de errores sin mover el foco.
- Si las credenciales no son válidas y no hay un campo específico que corregir, anuncia el error con `role="alert"` y conserva el foco en el botón de envío.
- Asocia cada error con su campo y describe cómo corregirlo; no comuniques el error solo mediante color.

## Tipografía y color

- Título: `var(--ge-typography-role-heading-md-family)`, `var(--ge-typography-role-heading-md-size)`, `var(--ge-typography-role-heading-md-weight)` y `var(--ge-typography-role-heading-md-line-height)`.
- Etiquetas y texto: `var(--ge-typography-role-label-md-family)`, `var(--ge-typography-role-label-md-size)`, `var(--ge-typography-role-label-md-weight)` y `var(--ge-typography-role-label-md-line-height)`.
- Texto de ayuda: `var(--ge-typography-role-body-sm-family)`, `var(--ge-typography-role-body-sm-size)`, `var(--ge-typography-role-body-sm-weight)` y `var(--ge-typography-role-body-sm-line-height)`.
- Usa `var(--ge-color-role-text-primary)` para el texto principal, `var(--ge-color-role-text-secondary)` para ayuda y `var(--ge-color-role-text-danger)` para errores. Verifica el contraste de cada combinación con su fondo.
- Usa `var(--ge-color-role-background-canvas)` como superficie y `var(--ge-color-role-border-focus)` para el indicador de foco; verifica el contraste del indicador con el fondo adyacente.

## Pendientes de verificar

- Los valores literales de `InputState` y su correspondencia con el aspecto de error no se pueden confirmar desde los exports de `index.ts`.
- La documentación de `Input` y `Button` no confirma cómo su implementación React expone semántica HTML, atributos ARIA ni asociación de errores.

## Fuentes consultadas

- [manifest.json](../../manifest.json)
- [input.md](../../components/input.md)
- [checkbox.md](../../components/checkbox.md)
- [button.md](../../components/button.md)
- [index.ts](../../packages/react/src/index.ts)
- [variables.css](../../packages/tokens/dist/variables.css)
- [token-usage-rules.md](../../ai/token-usage-rules.md)
- [typography.md](../../foundations/typography.md)
- [evaluation-checklist.md](../../ai/evaluation-checklist.md)
- [AGENTS.md](../../AGENTS.md)
