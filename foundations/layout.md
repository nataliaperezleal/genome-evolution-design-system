# Layout — Genome Evolution Design System

## Breakpoints
| Token | Valor | Uso |
|---|---|---|
| `layout/breakpoint/mobile` | 360px | Viewport mínimo soportado |
| `layout/breakpoint/tablet` | 1024px | Cambio de grid móvil a tablet |
| `layout/breakpoint/computer` | 1440px | Cambio de grid tablet a desktop |

## Grid por breakpoint
| Breakpoint | Columnas | Gutter | Margin |
|---|---|---|---|
| Mobile | `layout/columns/mobile` = 4 | `layout/gutter/mobile` = 16px | `layout/margin/mobile` = 16px |
| Tablet | `layout/columns/tablet` = 8 | `layout/gutter/tablet` = 16px | `layout/margin/tablet` = 32px |
| Computer | `layout/columns/computer` = 12 | `layout/gutter/computer` = 16px | `layout/margin/computer` = 32px |

## Reglas de uso
- `layout/*` aplica solo al contenedor macro de página, no al spacing interno de componentes.
- `margin/*` define el padding lateral del layout principal.
- `gutter/*` define el espacio entre columnas del grid.
- `columns/*` se usa para calcular spans, no para fijar anchos de componentes aislados.

## Ejemplos de composición
- Formulario simple en mobile: span 4/4 con `margin/mobile`.
- Panel + tabla en tablet: spans 3/8 y 5/8 con `gutter/tablet`.
- Dashboard en desktop: sidebar 3/12, contenido 9/12 con `margin/computer`.

## Antipatrones
- No usar `layout/margin/*` como padding interno de cards, modales o inputs.
- No saltarse breakpoints: diseñar y revisar en 360, 1024 y 1440.
- No usar grids de 12 columnas en mobile.
