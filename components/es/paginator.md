---
component: "Paginator"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-1106"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "pagination"
  - "data-display"
---

# Paginator

Sistema: Genome Evolution Design System

## Resumen del componente

Paginator ofrece controles de paginación en tres tipos: un selector de tamaño de página con rango de elementos, un campo de número de página y un conjunto de botones de número de página, cada uno con íconos de navegación a la primera, anterior, siguiente y última página.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un control de navegación para recorrer contenido paginado, como las filas de una tabla. El component set (nodo de Figma `2185:1106`) incluye íconos de primera página, anterior, siguiente y última página en todos los tipos, un selector de tamaño de página "Show items:" con un rango de elementos ("1 - 15 of 100"), y dos formas de mostrar la página actual: un campo de página "0 / 0" y botones numerados con la página actual resaltada. En Figma no hay una descripción escrita definida para Paginator.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Page size + Range, Input, Numbers | Page size + Range |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| showPages | true, false | true |

Los valores de `State` distintos de `Default` existen solo para `Type=Input` y `Type=Numbers`.

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Type=Page size + Range`, `State=Default` y `showPages=true`. Esto corresponde a la variante `2185:1107`, la variante superior izquierda del component set: "Show items:" con un selector de tamaño de página que muestra "15", el rango "1 - 15 of 100" y los cuatro íconos de navegación.

### Uso típico

Observaciones verificadas:

- `Page size + Range` muestra el selector de tamaño de página (controlado por `showPages`), el rango de elementos y los íconos de navegación; mide 24px de alto.
- `Input` muestra los íconos de navegación alrededor de un cuadro con la página actual ("0") y el total de páginas ("/ 0"); mide 32px de alto.
- `Numbers` muestra los íconos de navegación alrededor de tres botones de página ("1", "2", "3"), con "3" resaltado como página actual; mide 31px de alto.
- El selector de tamaño de página es una instancia anidada del componente Input.
- Todos los textos de Paginator (tamaño de página, rango, números de página, totales) están fijos en el componente y no se exponen como propiedades.

Interpretación basada en evidencia:

- Usa `Page size + Range` debajo o encima de una tabla para que los usuarios elijan cuántos elementos mostrar y vean qué elementos están visibles.
- Usa `Input` cuando hay muchas páginas y los usuarios pueden querer ir a una página específica, y `Numbers` cuando hay pocas páginas.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los conjuntos de datos grandes deben dividirse en páginas, con una forma de moverse entre ellas, elegir el tamaño de página y ver la posición actual.

### Resultado esperado

Interpretación basada en evidencia: el usuario ve qué elementos se muestran, cambia el tamaño de página y va a la primera, anterior, siguiente, última o a una página específica.

### Contexto típico

Interpretación basada en evidencia: debajo o encima de tablas, listas y resultados de búsqueda.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los tipos y la estructura:

- Para navegar contenido dividido en páginas.
- Para permitir que los usuarios elijan cuántos elementos aparecen por página y vean el rango visible (`Type=Page size + Range`).
- Para permitir que los usuarios vayan directamente a una página (`Type=Input`) o elijan entre pocos números de página (`Type=Numbers`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Paginator. Solo como recomendaciones:

- Evita la paginación cuando todo el contenido cabe en una página.
- Evita `Type=Numbers` para muchas páginas; muestra un conjunto fijo de tres botones de página.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Ícono de primera página | Obligatoria | `first-page`, 12px. |
| Ícono de anterior | Obligatoria | `chevron-left`, 12px. |
| Ícono de siguiente | Obligatoria | `chevron-right`, 12px. |
| Ícono de última página | Obligatoria | `last-page`, 12px. |
| Selector de tamaño de página | Opcional (`showPages`); solo `Page size + Range` | Etiqueta "Show items:" y una instancia anidada de Input (24px de alto) que muestra "15" con un ícono `chevron-down`. |
| Texto de rango | Obligatoria en `Page size + Range` | "1 - 15 of 100". |
| Cuadro de página con campo | Solo `Input` | Cuadro con borde que contiene un campo numérico redondeado ("0") y el total ("/ 0"). |
| Botones de página | Solo `Numbers` | Cuadro con borde que contiene tres celdas de página de 23px ("1", "2", "3"); la página actual ("3") tiene borde y fondo de seleccionado. |

En `Page size + Range`, el orden es: selector de tamaño de página, rango, primera, anterior, siguiente, última. En `Input` y `Numbers`, el cuadro de página está entre los íconos de anterior y siguiente.

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Espacio — `Page size + Range` | 24px | `gap/xl` |
| Espacio — `Input`, `Numbers` | 16px | `gap/lg` |
| Padding raíz | 0px | `space/0` |
| Alto | 24px (`Page size + Range`); 32px (`Input`); 31px (`Numbers`) | Medición directa |
| Ancho | 339px (`Page size + Range`); unos 166px (`Input`); unos 197px (`Numbers`) | Medición directa |
| Tamaño de los íconos de navegación | 12 × 12px | Medición directa |
| Padding del cuadro de página | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Radio del cuadro de página | 4px | `spread/md` |
| Espacio del cuadro de página | 4px (`Input`); 0px (`Numbers`) | `gap/xxs`; `gap/none` |
| Borde del cuadro de página | 1px | Medición directa |
| Campo numérico de `Input` | 24px de alto; padding de 8px × 4px; radio de 8px; borde de 1px | Medición directa; `spread/lg` |
| Celda de página de `Numbers` | 23 × 23px; padding de 4px; radio de 4px | Medición directa; `spread/md` |
| Espacio de la etiqueta de tamaño de página | 8px | Medición directa |

## Semántica

Interpretación basada en evidencia:

- Los cuatro íconos representan ir a la primera, anterior, siguiente y última página.
- El texto de rango representa qué elementos están visibles respecto del total ("1 - 15 of 100").
- En `Input`, el campo numérico representa la página actual y "/ 0" el número total de páginas.
- En `Numbers`, cada celda representa una página, y la celda resaltada representa la página actual.

No verificado en Figma: landmark de navegación, roles de botón, `aria-current="page"`, nombres accesibles para los íconos y cómo se expone el selector de tamaño de página.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Primera página | `first-page`, 12px | Capas de Figma |
| Anterior | `chevron-left`, 12px | Capas de Figma |
| Siguiente | `chevron-right`, 12px | Capas de Figma |
| Última página | `last-page`, 12px | Capas de Figma |
| Selector de tamaño de página | `chevron-down`, 12px (dentro del Input anidado) | Capas de Figma |

En `Disabled`, los íconos de navegación usan recursos de ícono separados y más claros. Los íconos no se exponen como propiedades de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 11 variantes (`Page size + Range` solo en `Default`; `Input` y `Numbers` en los cinco estados). Se inspeccionaron todas las variantes. El nombre de la propiedad booleana se lista tal como lo expone el MCP de Figma.

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Page size + Range | Selector de tamaño de página, texto de rango e íconos de navegación. | Valor por defecto; solo `State=Default`; variante `2185:1107` |
| Input | Íconos de navegación alrededor de un cuadro de página actual / total de páginas. | Variantes `2185:1116`, `2190:1674`, `2190:1756`, `2186:1234`, `2190:1661` |
| Numbers | Íconos de navegación alrededor de tres celdas de página, con la página actual resaltada. | Variantes `2185:1125`, `2190:1779`, `2190:1795`, `2186:1247`, `2190:1811` |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Control en reposo. | `Input`, `Numbers`, `Page size + Range` |
| Hovered | El cuadro de página usa fondo y borde de hover. | `Input`, `Numbers` |
| Pressed | El cuadro de página (y la celda de página actual en `Numbers`) usa fondo y borde de presionado. | `Input`, `Numbers` |
| Focused | El borde del cuadro de página (y del campo numérico en `Input`, y de la celda actual en `Numbers`) usa `border/focus`. | `Input`, `Numbers` |
| Disabled | Fondos, bordes, textos e íconos atenuados. | `Input`, `Numbers` |

### showPages

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra "Show items:" y el selector de tamaño de página. | Valor por defecto; solo `Page size + Range` |
| false | Oculta el selector de tamaño de página; el rango y los íconos permanecen. | Propiedad booleana |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | Cuadro de página: `background/canvas` (`Input`), `border/default`; celda de página actual: `background/selected`, `border/selected` | Variantes `2185:1116`, `2185:1125` |
| Hovered | Puntero sobre el control | Cuadro de página: `background/interactive/hovered`, `border/interactive/hovered`; el borde del campo numérico de `Input` también cambia | Variantes `2190:1674`, `2190:1779` |
| Pressed | En activación | Cuadro de página: `background/interactive/pressed`, `border/interactive/pressed`; la celda actual de `Numbers` usa los mismos colores de presionado | Variantes `2190:1756`, `2190:1795` |
| Focused | Con foco | `border/focus` en el cuadro de página y en el campo numérico de `Input` o en la celda actual de `Numbers` | Variantes `2186:1234`, `2186:1247` |
| Disabled | No disponible | `background/disabled`, `border/disabled`, `text/disabled`; íconos más claros | Variantes `2190:1661`, `2190:1811` |

Estos estados se aplican al control en su conjunto. No hay variantes de estado para íconos de navegación ni celdas de página individuales, y los íconos de navegación no cambian en la primera ni en la última página. Las transiciones y las condiciones que activan cada estado no están definidas en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Cuadro de página (`Input` Default y Focused); celdas de página | Variables de Figma |
| Color — superficie | `background/interactive/hovered` | Cuadro de página (`Hovered`) | Variables de Figma |
| Color — superficie | `background/interactive/pressed` | Cuadro de página y celda actual de `Numbers` (`Pressed`) | Variables de Figma |
| Color — superficie | `background/selected` | Celda actual de `Numbers` | Variables de Figma |
| Color — superficie | `background/disabled` | Cuadro de página y celdas (`Disabled`) | Variables de Figma |
| Color — borde | `border/default` | Cuadro de página y campo numérico (`Default`) | Variables de Figma |
| Color — borde | `border/interactive/hovered`, `border/interactive/pressed` | Cuadro de página y campo numérico (`Hovered`, `Pressed`) | Variables de Figma |
| Color — borde | `border/focus` | Bordes de `Focused` | Variables de Figma |
| Color — borde | `border/selected` | Celda actual de `Numbers` | Variables de Figma |
| Color — borde | `border/disabled` | Bordes de `Disabled` | Variables de Figma |
| Color — texto | `text/primary` | Rango, números de página, etiqueta | Variables de Figma |
| Color — texto | `text/secondary` | Valor de tamaño de página ("15") en el Input anidado | Variables de Figma |
| Color — texto | `text/disabled` | Texto (`Disabled`) | Variables de Figma |
| Color — ícono | `icon/primary`, `icon/disabled` | Usados por el component set (íconos de navegación); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Espaciado | `gap/xl`, `gap/lg`, `gap/xxs`, `gap/none`, `space/8`, `space/4`, `space/0` | Espacios y padding (ver Layout) | Variables de Figma |
| Radio | `spread/md`, `spread/lg` | Cuadro de página y celdas (4px); campo numérico de `Input` (8px) | Variables de Figma |
| Tipografía | `Text/Body/XXS` | Etiqueta, rango, números de página, totales (10/14) | Estilo de texto de Figma |
| Tipografía | `Text/Button/SM` | Página actual de `Numbers` (12/16 semibold) | Estilo de texto de Figma |

Sin vincular a tokens: los bordes de 1px, el tamaño de 23px y el padding de 4px de las celdas de página, el padding del campo numérico de `Input` y el espacio de 8px del selector de tamaño de página. El radio de esquinas usa variables `spread/...` en lugar de las variables `radius/...` o `semantic/...` que se usan para el radio en otros componentes.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hovered`, `Pressed`, `Focused` y `Disabled` para `Input` y `Numbers`.
- Interpretación basada en evidencia: los íconos de navegación cambian de página, el campo de página acepta un número de página, las celdas de página seleccionan una página y el selector de tamaño de página cambia la cantidad de elementos por página. Estos comportamientos no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Todo el texto de Paginator mide 10px, excepto la página actual en `Numbers` (12px semibold).
- Contraste del texto sobre blanco: `text/primary` 12,78:1; `text/secondary` (valor de tamaño de página) 5,45:1.
- La página actual en `Numbers` se indica con un borde (`border/selected`, 5,33:1 sobre blanco), un tinte y texto en negrita, no solo con color.
- El borde del cuadro de página (`border/default`) tiene 1,66:1 sobre blanco.
- Los íconos de navegación miden 12px, sin botón contenedor, área táctil ni estados individuales.

Información de accesibilidad faltante: landmark de navegación, nombres accesibles para los íconos de navegación, `aria-current` para la página actual, estados deshabilitados en la primera y la última página, y comportamiento con teclado.

## Pautas de contenido

Observaciones verificadas:

- El contenido es fijo: "Show items:", "15", "1 - 15 of 100", "0", "/ 0" y "1", "2", "3"; todos son textos de ejemplo que solo se pueden cambiar sobrescribiendo las capas de texto.
- El rango sigue el formato "primero - último of total".

Recomendaciones:

- Mantén un formato de rango consistente ("1 - 15 of 100").
- Ofrece una lista breve de opciones de tamaño de página en el selector.

## Ejemplos

### Pie de tabla con tamaño de página

Configuración: `Type=Page size + Range`, `State=Default`, `showPages=true`

Descripción: selector de tamaño de página, rango de elementos e íconos de navegación debajo de una tabla.

Evidencia / clasificación: configuración existente en Figma (variante `2185:1107`).

### Ir a una página

Configuración: `Type=Input`, `State=Default`

Descripción: íconos de navegación con un campo de página actual / total de páginas.

Evidencia / clasificación: configuración existente en Figma (variante `2185:1116`).

### Pocas páginas

Configuración: `Type=Numbers`, `State=Default`

Descripción: íconos de navegación con botones de página y la página actual resaltada.

Evidencia / clasificación: configuración existente en Figma (variante `2185:1125`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: `Type=Page size + Range` existe solo con `State=Default`, por lo que sus otros estados no se pueden seleccionar en Figma. `showPages` afecta solo a `Page size + Range`.

## Aclaraciones pendientes

1. Contenido fijo. El valor de tamaño de página, el texto de rango, la página actual, el total de páginas y los números de página son textos fijos y no se exponen como propiedades. Además, el valor de tamaño de página usa el color de placeholder (`text/secondary`). Confirmar si deben ser propiedades de texto y si el valor de tamaño de página debe mostrarse como valor seleccionado.
2. Conjunto de páginas de `Numbers`. `Numbers` siempre muestra tres celdas con la página 3 como actual, sin opción para más páginas, otra página actual ni truncamiento (por ejemplo, puntos suspensivos). Confirmar el patrón previsto para distintas cantidades de páginas.
3. Estados por elemento. Los estados se aplican a todo el control; los íconos de navegación y las celdas de página individuales no tienen estados de hover, presionado ni deshabilitado, y los íconos de primera/anterior o siguiente/última no se pueden deshabilitar al inicio o al final. Confirmar el modelo de interacción previsto.
4. Composición. `Page size + Range` incluye sus propios íconos de navegación, mientras que `Input` y `Numbers` no incluyen selector de tamaño de página ni rango. Confirmar si los tipos deben combinarse (por ejemplo, tamaño de página y rango con un campo de página) o usarse por separado.
5. Tokens de radio. El radio de esquinas usa `spread/md` y `spread/lg`, y el campo numérico de `Input` (8px) es más redondeado que su contenedor de 4px. Confirmar si deben usar los tokens de radio que se usan en otros componentes.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2185:1106`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
