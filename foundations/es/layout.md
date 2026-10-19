# Diseño de página — Genome Evolution Design System

## Puntos de quiebre
| Token | Valor | Uso |
|---|---|---|
| `layout.base.breakpoint.mobile` | 360px | Ancho mínimo de pantalla compatible |
| `layout.base.breakpoint.tablet` | 1024px | Cambio de cuadrícula móvil a tablet |
| `layout.base.breakpoint.computer` | 1440px | Cambio de cuadrícula tablet a escritorio |

## Cuadrícula por punto de quiebre
| Punto de quiebre | Columnas | Separación | Margen |
|---|---|---|---|
| Móvil | `layout.base.columns.mobile` = 4 | `layout.base.gutter.mobile` = 16px | `layout.base.margin.mobile` = 16px |
| Tablet | `layout.base.columns.tablet` = 8 | `layout.base.gutter.tablet` = 16px | `layout.base.margin.tablet` = 32px |
| Escritorio (en `computer`) | `layout.base.columns.desktop` = 12 | `layout.base.gutter.desktop` = 16px | `layout.base.margin.desktop` = 32px |

## Reglas de uso
- `layout.base.*` se aplica a la cuadrícula general de la página, no al espaciado interno de los componentes.
- `margin.*` define el margen horizontal del diseño principal.
- `gutter.*` define el espacio entre las columnas de la cuadrícula.
- `columns.*` se usa para calcular los tramos de la cuadrícula, no para fijar anchos de componentes aislados.

## Ejemplos de composición
- Formulario simple en móvil: tramo 4/4 con `layout.base.margin.mobile`.
- Panel y tabla en tablet: tramos 3/8 y 5/8 con `layout.base.gutter.tablet`.
- Panel de control en escritorio: barra lateral 3/12 y contenido 9/12 con `layout.base.margin.desktop`.

## Antipatrones
- No usar `layout.base.margin.*` como relleno interno de tarjetas, modales o campos.
- No omitir puntos de quiebre: diseñar y revisar en 360, 1024 y 1440.
- No usar cuadrículas de 12 columnas en móvil.
