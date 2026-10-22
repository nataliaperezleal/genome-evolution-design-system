---
component: "Group"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2203-2517"
last_updated: "2026-10-22"
tags:
  - "group"
  - "container"
  - "collapsible"
---

# Group

Sistema: Genome Evolution Design System

## Resumen del componente

Group es un contenedor plegable de 648 px de ancho con un encabezado con título, un slot de contenido y un pie opcional con un Paginator e íconos de acción opcionales, que se muestra contraído (solo el encabezado) o expandido (encabezado, contenido y pie).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Group es un contenedor de sección que agrupa contenido relacionado bajo un título y se puede contraer hasta su encabezado. Esto se sustenta en los valores de `State` `Collapsed` (encabezado de 32 px con `chevron-down`) y `Expanded` (encabezado con `chevron-up`, un slot de contenido y un pie), en la propiedad de título, en el slot de contenido que acepta cualquier contenido, y en el pie con un Paginator e íconos de acción (añadir, editar, eliminar, buscar, guardar, cancelar). Figma no incluye una descripción de uso escrita para el conjunto de componentes Group.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| State | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| title (texto) | Texto libre | Title |
| showFooter (booleano) | true, false | true |
| showPaginator (booleano) | true, false | true |
| showLeftIcons (booleano) | true, false | false |
| showLeftIcon1 – showLeftIcon4 (booleano) | true, false | true |
| showRightIcons (booleano) | true, false | false |
| showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4 (booleano) | true, false | true |
| Slot de contenido | Cualquier contenido | Vacío |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Los nombres de las propiedades se indican exactamente como aparecen en Figma, incluidos `showRighIcon1` y `showIconRight2`.

### Configuración predeterminada

`State=Collapsed`, `Color=Default`, `title="Title"`: una barra de 648 × 32 px con `chevron-down` y el título.

### Uso típico

Observación verificada: El conjunto de componentes tiene tres variantes: `Collapsed` con `Color=Default`, y `Expanded` con `Color=Evergreen` o `Color=Indigo`.

Interpretación basada en evidencia:

- Use `State=Collapsed` para mostrar solo el título del grupo.
- Use `State=Expanded` con el color de marca del contexto para mostrar el contenido.
- Coloque el contenido del grupo en el slot de contenido.
- Use `showPaginator` cuando el contenido esté paginado, y `showLeftIcons` / `showRightIcons` para mostrar las acciones del pie.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Organiza contenido relacionado en una sección con título y plegable, con paginación y acciones en un pie consistente.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden contraer o expandir secciones, paginar el contenido y usar las acciones de la sección.

### Contexto típico

Los contextos específicos de producto no están documentados en Figma. El ancho fijo de 648 px indica su uso dentro de diseños de página o de formulario; esto es una interpretación basada en evidencia.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura del componente:

- Para agrupar contenido bajo un título que se puede contraer.
- Para paginar el contenido del grupo con un Paginator.
- Para ofrecer acciones sobre el contenido del grupo desde el pie.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- `Collapsed` existe solo con `Color=Default`, y `Expanded` solo con `Evergreen` o `Indigo`.
- El ancho es fijo de 648 px.
- Los íconos de acción del pie son fijos (add, pencil, trash, file-search a la izquierda; add, trash, save, cancel a la derecha); cada uno se puede ocultar, pero no intercambiar.

## Reglas de composición y jerarquía

### Orden

En `Expanded`, de arriba abajo: encabezado, área de contenido, pie (cuando `showFooter=true`).

### Disposición del pie

| Posición | Elemento | Visibilidad | Predeterminado |
|----------|----------|-------------|----------------|
| Izquierda | Íconos: `add`, `pencil`, `trash`, `file-search` | `showLeftIcons` y luego `showLeftIcon1` – `showLeftIcon4` | Grupo oculto |
| Centro | Paginator | `showPaginator` | Visible |
| Derecha | Íconos: `add`, `trash`, `save`, `cancel` | `showRightIcons` y luego `showRighIcon1`, `showIconRight2`, `showRightIcon3`, `showRightIcon4` | Grupo oculto |

- Los grupos de íconos se ubican en los extremos izquierdo y derecho del pie; el Paginator está centrado.
- Cada grupo de íconos tiene un interruptor general (`showLeftIcons`, `showRightIcons`, predeterminado `false`) y un interruptor por ícono (predeterminado `true`).

### Componentes hijos

| Hijo | Configuración observada |
|------|-------------------------|
| Paginator | Tipo Input: primera página, anterior, un campo de página ("0 / 0"), siguiente, última página. Sus estados y tipos se documentan en Paginator. |
| Instancias de ícono | `chevron-down` / `chevron-up` (12 px) en el encabezado; íconos de acción de 16 px en el pie. |

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Panel de 648 px de ancho con `background/canvas`, borde de 1 px `border/default` y radio `semantic/sm`. |
| Encabezado (`Head`) | Obligatoria | Fila de 32 px con un chevron de 12 px y el título. En `Expanded`, tiene un borde inferior de 1 px en el color de marca. |
| Área de contenido | Obligatoria en `Expanded` | Área con relleno (`space/16`) que contiene el slot de contenido (616 × 184 px). |
| Pie | Opcional (`showFooter`) en `Expanded` | Fila de 40 px sobre `surface/subtlest` con íconos a la izquierda, Paginator e íconos a la derecha. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 648 px | Dimensiones de las variantes |
| Alto | 32 px (Collapsed), 288 px (Expanded con pie) | Dimensiones de las variantes |
| Borde y radio del contenedor | 1 px `border/default`; `semantic/sm` (4) | Vinculaciones de variables |
| Encabezado | 32 px de alto; relleno `space/16` horizontal, `space/4` vertical; espacio de 8 px | Vinculaciones de variables, contexto de diseño |
| Divisor del encabezado (Expanded) | 1 px `border/evergreen` o `border/indigo` | Vinculaciones de variables |
| Área de contenido | Relleno `space/16`; slot de 616 × 184 px | Vinculación de variable, dimensiones de capa |
| Pie | 40 px de alto; relleno de 16 px horizontal y 4 px vertical (valores fijos); `surface/subtlest` | Contexto de diseño |
| Grupos de íconos del pie | Íconos de 16 px, separados 16 px; a 16 px de los bordes del pie | Posiciones de capa |
| Tipografía del título — Collapsed | `Text/Body/XXS`: peso 400, `size/10`, `line-height/14`; `text/secondary` | Estilo de texto |
| Tipografía del título — Expanded | `Text/Body/XS Strong`: peso 600, `size/12`, `line-height/16`; `text/primary` | Estilo de texto |

## Semántica

Interpretación basada en evidencia:

- El encabezado identifica el grupo; el chevron indica si el grupo está contraído (`chevron-down`) o expandido (`chevron-up`).
- Los íconos del pie representan acciones sobre el contenido del grupo (añadir, editar, eliminar, buscar a la izquierda; añadir, eliminar, guardar, cancelar a la derecha); sus significados se infieren de los nombres de los íconos.
- El Paginator permite moverse entre páginas del contenido.

No verificado en Figma: elementos HTML, atributos ARIA (por ejemplo, el estado expandido) y nombres accesibles para las acciones solo con ícono.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Encabezado — Collapsed | `chevron-down`, 12 px | Capa |
| Encabezado — Expanded | `chevron-up`, 12 px | Capa |
| Pie, izquierda | `add`, `pencil`, `trash`, `file-search`, 16 px | Capas |
| Pie, derecha | `add`, `trash`, `save`, `cancel`, 16 px | Capas |
| Paginator | `first-page`, `chevron-left`, `chevron-right`, `last-page`, 12 px | Instancia anidada |

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las tres variantes.

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Collapsed | Solo encabezado: `chevron-down` y un título `Text/Body/XXS` `text/secondary`. | Solo `Color=Default`; predeterminado |
| Expanded | Encabezado con `chevron-up`, título `Text/Body/XS Strong` `text/primary` y divisor en color de marca; área de contenido; pie. | `Color=Evergreen` o `Indigo` |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Sin acento de marca. | Solo `State=Collapsed` |
| Evergreen | Divisor del encabezado `border/evergreen`. | Solo `State=Expanded` |
| Indigo | Divisor del encabezado `border/indigo`. | Solo `State=Expanded` |

### Propiedades del pie

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| showFooter | Muestra el pie. | Predeterminado `true`; solo Expanded |
| showPaginator | Muestra el Paginator centrado. | Predeterminado `true` |
| showLeftIcons | Muestra el grupo de íconos izquierdo. | Predeterminado `false` |
| showLeftIcon1 – showLeftIcon4 | Muestran `add`, `pencil`, `trash`, `file-search`. | Predeterminado `true` |
| showRightIcons | Muestra el grupo de íconos derecho. | Predeterminado `false` |
| showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4 | Muestran `add`, `trash`, `save`, `cancel`. | Predeterminado `true` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Collapsed | Grupo cerrado. | Encabezado de 32 px; título más pequeño, regular y en color secundario. | Variantes de estado |
| Expanded | Grupo abierto. | Encabezado con divisor de marca y título más fuerte; contenido y pie visibles. | Variantes de estado |

No existen variantes de hover, presión ni foco para el encabezado. Las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Contenedor, encabezado, contenido | Vinculación de variable |
| Superficie | `surface/subtlest` | Pie | Vinculación de variable |
| Borde | `border/default` | Borde del contenedor | Vinculación de variable |
| Borde | `border/evergreen`, `border/indigo` | Divisor del encabezado (Expanded) | Vinculación de variable |
| Texto | `text/secondary` | Título (Collapsed) | Vinculación de variable |
| Texto | `text/primary` | Título (Expanded) | Vinculación de variable |
| Espaciado | `space/16`, `space/4` | Relleno del encabezado y del contenido | Vinculación de variable |
| Radio | `semantic/sm` | Esquinas del contenedor | Vinculación de variable |
| Tipografía | `Text/Body/XXS`, `Text/Body/XS Strong` | Título según el estado | Estilos de texto |

Los tokens del Paginator se documentan en Paginator.

Comportamiento actual:

- El estilo del título cambia entre estados: `Text/Body/XXS` en `text/secondary` al estar contraído, `Text/Body/XS Strong` en `text/primary` al estar expandido.
- El color de marca se aplica solo al divisor del encabezado expandido; el estado contraído no tiene color de marca.
- El relleno del pie y el espacio del encabezado usan valores fijos en lugar de variables de espaciado.
- En `Color=Indigo`, el área de contenido tiene un alto fijo de 216 px y el slot un ancho fijo de 617 px; en `Color=Evergreen`, el slot ocupa el ancho del contenido.
- Dos nombres de propiedad son irregulares: `showRighIcon1` y `showIconRight2`.

## Interacción

Estados observados: Collapsed y Expanded. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: el cambio entre estados, el comportamiento de paginación y qué hacen los íconos del pie.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- El estado expandido se muestra mediante la dirección del chevron, el contenido visible y un título más fuerte, no solo mediante el color.
- Las acciones del pie son solo íconos.
- El título contraído mide 10 px (`size/10`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para los íconos del pie y para el control del encabezado, anuncio del estado expandido, soporte de teclado y apariencia de foco.

## Pautas de contenido

Observaciones verificadas: El título de ejemplo es "Title". El título ocupa una sola línea en un cuadro de texto de ancho fijo (596 px). El Paginator muestra "0 / 0" como contenido de ejemplo.

## Ejemplos

### Grupo contraído

Configuración: `State=Collapsed`, `Color=Default`

Descripción: Solo la barra de título.

Evidencia / Clasificación: Variante predeterminada en Figma.

### Grupo expandido con paginación

Configuración: `State=Expanded`, `Color=Evergreen`, `showFooter=true`, `showPaginator=true`

Descripción: Encabezado, slot de contenido y un pie con el Paginator.

Evidencia / Clasificación: Variante existente en Figma.

### Grupo expandido con acciones

Configuración: `State=Expanded`, `Color=Indigo`, `showLeftIcons=true`, `showRightIcons=true`

Descripción: Pie con íconos de acción a ambos lados y el Paginator en el centro.

Evidencia / Clasificación: Configuración admitida por las propiedades del pie.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `State=Collapsed` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |
| `State=Expanded` con `Color=Default` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
