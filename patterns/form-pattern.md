# Form Pattern — Genome Evolution Design System

Patrón base para formularios con captura, validación y acciones.

## Estructura recomendada
1. `Header` o título de sección.
2. `Group` para agrupar bloques relacionados.
3. `Input`, `Dropdown`, `Datepicker`, `Text Area` según el tipo de dato.
4. `Inline Alert` para validación global o mensaje contextual.
5. `Button` primario + secundario para acciones.

## Reglas
- Usar `Input` para texto corto, `Text Area` para texto multilínea.
- Usar `Dropdown` para selección de lista cerrada.
- Mostrar `helperText` antes de usar error persistente.
- El CTA principal debe ser único por bloque de formulario.
- En desktop, alinear campos sobre grid; en mobile, usar una sola columna.

## Combinaciones a evitar
- Dos `Button Primary` en el mismo footer.
- `Link` como acción principal de submit.
- `Checkbox` para activar/desactivar en tiempo real cuando corresponde `Switch`.

## Accesibilidad
- Mantener labels visibles.
- Asociar errores con el campo usando `aria-describedby`.
- Preservar orden lógico de tabulación.
