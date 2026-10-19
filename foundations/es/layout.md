# Diseño de página — Genome Evolution Design System

## Puntos de quiebre
| Token | Valor | Uso |
|---|---|---|
| `layout/breakpoint/mobile` | 360px | Ancho mínimo de pantalla compatible |
| `layout/breakpoint/tablet` | 1024px | Cambio de cuadrícula móvil a tablet |
| `layout/breakpoint/computer` | 1440px | Cambio de cuadrícula tablet a escritorio |

## Cuadrícula por punto de quiebre
| Punto de quiebre | Columnas | Separación | Margen |
|---|---|---|---|
| Móvil | `layout/columns/mobile` = 4 | `layout/gutter/mobile` = 16px | `layout/margin/mobile` = 16px |
| Tablet | `layout/columns/tablet` = 8 | `layout/gutter/tablet` = 16px | `layout/margin/tablet` = 32px |
| Escritorio | `layout/columns/computer` = 12 | `layout/gutter/computer` = 16px | `layout/margin/computer` = 32px |

## Reglas de uso
- `layout/*` se aplica al contenedor general de la página, no al espaciado interno de los componentes.
- `margin/*` define el relleno lateral del diseño principal.
- `gutter/*` define el espacio entre las columnas de la cuadrícula.
- `columns/*` se usa para calcular los tramos de la cuadrícula, no para fijar anchos de componentes aislados.

## Ejemplos de composición
- Formulario simple en móvil: tramo 4/4 con `margin/mobile`.
- Panel y tabla en tablet: tramos 3/8 y 5/8 con `gutter/tablet`.
- Panel de control en escritorio: barra lateral 3/12 y contenido 9/12 con `margin/computer`.

## Antipatrones
- No usar `layout/margin/*` como relleno interno de tarjetas, modales o campos.
- No omitir puntos de quiebre: diseñar y revisar en 360, 1024 y 1440.
- No usar cuadrículas de 12 columnas en móvil.
