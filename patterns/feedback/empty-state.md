---
pattern: "Empty State"
system: "Genome Evolution Design System"
type: "Pattern"
status: "draft"
tags: [empty-state, no-data, feedback, onboarding]
---

# Pattern: Empty State

## Cuándo usarlo

- Muestra un estado vacío cuando no hay contenido que presentar.
- Distingue entre una colección que aún no tiene elementos y una búsqueda o filtro sin coincidencias; explica el motivo concreto en cada caso.

## Composición

- Incluye un título breve, una explicación útil y, si existe un siguiente paso pertinente, una acción.
- Usa `Button` para una acción como crear el primer elemento o limpiar filtros. No muestres una acción que no esté disponible para el usuario.
- Mantén el estado vacío en el contexto de la colección para que el usuario entienda qué contenido falta.
- No dependas de una ilustración o icono no verificado para transmitir el significado.

## Tipografía, color y espacio

- Título: `var(--ge-typography-role-title-md-family)`, `var(--ge-typography-role-title-md-size)`, `var(--ge-typography-role-title-md-weight)` y `var(--ge-typography-role-title-md-line-height)`.
- Descripción: `var(--ge-typography-role-body-sm-family)`, `var(--ge-typography-role-body-sm-size)`, `var(--ge-typography-role-body-sm-weight)` y `var(--ge-typography-role-body-sm-line-height)`.
- Separa título, descripción y acción con `var(--ge-spacing-gap-md)` y `var(--ge-spacing-gap-lg)`, según la jerarquía.
- Usa `var(--ge-color-role-text-primary)` para el título, `var(--ge-color-role-text-secondary)` para la explicación y `var(--ge-color-role-background-canvas)` para la superficie. Verifica el contraste de texto y controles con sus fondos.

## Accesibilidad

- Mantén el título en la jerarquía de encabezados de la página.
- La explicación debe indicar por qué no hay contenido y qué puede hacer el usuario después.
- La acción debe tener un nombre accesible claro y ser operable con teclado.

## Pendientes de verificar

- La documentación de `Button` no confirma cómo su implementación React expone semántica HTML ni el nombre accesible.

## Fuentes consultadas

- [manifest.json](../../manifest.json)
- [button.md](../../components/button.md)
- [index.ts](../../packages/react/src/index.ts)
- [variables.css](../../packages/tokens/dist/variables.css)
- [token-usage-rules.md](../../ai/token-usage-rules.md)
- [typography.md](../../foundations/typography.md)
- [evaluation-checklist.md](../../ai/evaluation-checklist.md)
- [AGENTS.md](../../AGENTS.md)
