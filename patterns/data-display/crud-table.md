---
pattern: "CRUD Table"
system: "Genome Evolution Design System"
type: "Pattern"
status: "Production"
tags: [table, crud, data-display, edit, delete, actions]
---


# Pattern: CRUD Table

## Estructura

- Usa `Table` para presentar registros en filas y atributos en columnas. Mantén encabezados claros y una relación semántica entre cada encabezado y sus celdas.
- Coloca las acciones de crear, editar o eliminar en un área identificable y usa `Button` para las acciones; cada acción por fila debe indicar a qué registro afecta.
- Añade `Paginator` cuando el conjunto de resultados requiera navegación por páginas. Informa el rango visible y permite identificar la página actual.
- Diferencia estados de carga, error y ausencia de resultados sin eliminar el contexto de la colección.
- En pantallas estrechas, conserva la asociación entre valores y encabezados y evita que las acciones queden inaccesibles por desbordamiento.

## Interacción y accesibilidad

- Usa botones para acciones y enlaces solo para navegación a otro destino.
- Asegura que los controles de paginación y las acciones por fila tengan nombres accesibles que describan su propósito y contexto.
- Mantén disponible la navegación por teclado y un indicador de foco visible. No dependas solo del color para indicar estado o selección.
- Verifica que la estructura del `Table` se renderice como una tabla semántica con encabezados asociados.
- Verifica el contraste del texto, bordes y foco con sus fondos adyacentes.

## Tipografía, color y espacio

- Encabezados: `var(--ge-typography-role-button-md-family)`, `var(--ge-typography-role-button-md-size)`, `var(--ge-typography-role-button-md-weight)` y `var(--ge-typography-role-button-md-line-height)`.
- Celdas: `var(--ge-typography-role-body-sm-family)`, `var(--ge-typography-role-body-sm-size)`, `var(--ge-typography-role-body-sm-weight)` y `var(--ge-typography-role-body-sm-line-height)`.
- Usa `var(--ge-color-role-text-primary)` para contenido, `var(--ge-color-role-border-subtle)` para divisiones discretas y `var(--ge-color-role-background-canvas)` para la superficie.
- Mantén el espaciado de las acciones y del contenido con `var(--ge-spacing-gap-sm)` y `var(--ge-spacing-gap-md)`.

## Pendientes de verificar

- La documentación de `Table` indica que la semántica HTML y la asociación de encabezados no están verificadas; confirma el resultado de la implementación React.
- Los valores admitidos por el tipo `PaginatorType` no están enumerados en los exports de `index.ts`; confirma la variante disponible antes de elegir una.
- Los exports de `index.ts` no detallan las propiedades de `TableProps`, `PaginatorProps` o `ButtonProps`; confirma la API necesaria para tablas dinámicas, navegación y acciones.

## Fuentes consultadas

- [manifest.json](../../manifest.json)
- [table.md](../../components/table.md)
- [paginator.md](../../components/paginator.md)
- [button.md](../../components/button.md)
- [index.ts](../../packages/react/src/index.ts)
- [variables.css](../../packages/tokens/dist/variables.css)
- [token-usage-rules.md](../../ai/token-usage-rules.md)
- [typography.md](../../foundations/typography.md)
- [evaluation-checklist.md](../../ai/evaluation-checklist.md)
- [AGENTS.md](../../AGENTS.md)
