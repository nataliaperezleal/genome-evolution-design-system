# Feedback Pattern — Genome Evolution Design System

Patrón para comunicar estado, validación y resultado de acciones del usuario.

## Selector rápido
| Necesidad | Componente |
|---|---|
| Mensaje contextual persistente dentro de una vista | `Inline Alert` |
| Confirmación breve no bloqueante | `Snackbar` |
| Información emergente asociada a un control | `Tooltip` |
| Progreso de una tarea | `Progress Bar` |
| Confirmación o riesgo que bloquea flujo | `Modal` |

## Reglas
- `Snackbar` no reemplaza errores de validación de campo.
- `Tooltip` no debe contener contenido crítico para completar la tarea.
- `Modal` se usa solo cuando la decisión requiere atención total.
- `Progress Bar` debe acompañarse de texto cuando el progreso no sea evidente.

## Secuencia sugerida
1. Error de campo: estado `Error` en `Input` + helper/error text.
2. Error de formulario: `Inline Alert`.
3. Éxito posterior a guardar: `Snackbar`.

## Accesibilidad
- `Snackbar` y `Inline Alert` deben anunciarse con `aria-live` según severidad.
- El foco debe entrar al `Modal` y volver al trigger al cerrar.
