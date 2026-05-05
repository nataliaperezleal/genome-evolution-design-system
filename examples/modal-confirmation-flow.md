# Modal Confirmation Flow — Genome Evolution Design System

Flujo de confirmación para acciones destructivas o irreversibles.

## Componentes
- `Button`
- `Modal`
- `Inline Alert` opcional
- `Snackbar`

## Flujo
1. El usuario dispara una acción destructiva desde `Button`.
2. `Modal` presenta contexto, impacto y acciones.
3. Acción principal usa `Button Danger`.
4. Tras confirmar, el modal cierra y el sistema responde con `Snackbar` o actualización visible.

## Reglas
- El texto del modal debe explicar la consecuencia, no solo repetir el nombre de la acción.
- Debe existir una salida clara: cerrar, cancelar o escape.
- El foco inicial debe caer en la acción menos riesgosa cuando aplique.
