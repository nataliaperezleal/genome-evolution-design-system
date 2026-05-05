# Filterable Table — Genome Evolution Design System

Vista de listado con filtros, tabla y paginación.

## Componentes
- `Header`
- `Input`
- `Dropdown`
- `Button`
- `Table`
- `Paginator`
- `Inline Alert` opcional para estado vacío o error

## Estructura
1. `Header` con título y acción principal.
2. Barra de filtros con `Input` de búsqueda y `Dropdown` de estado.
3. `Table` con columnas alineadas a label styles.
4. `Paginator` al pie.

## Reglas
- El filtro principal debe ir antes de la tabla.
- No usar `Modal` para filtros simples.
- La paginación solo aparece si hay más de una página.

## Estado vacío
- Mostrar mensaje claro con `Inline Alert` o bloque vacío.
- Mantener visibles filtros y CTA principal.
