---
component: "Datepicker"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-2296"
last_updated: "2026-10-22"
tags:
  - "datepicker"
  - "calendar"
  - "input"
---

# Datepicker

Sistema: Genome Evolution Design System

## Resumen del componente

Datepicker es un panel de calendario con tres vistas (días, meses y años), dos tamaños y dos colores de marca, construido con instancias de `.Number`, `.Month` y Button, con botones opcionales Cancel/Apply y una leyenda de convenciones opcional.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Datepicker permite elegir una fecha navegando por un calendario. Esto se sustenta en el nombre del componente, en los valores de `Type` `Numbers` (una cuadrícula mensual de días con encabezados de día de la semana), `Month` (una cuadrícula de doce meses) y `Year` (una cuadrícula de años), en el encabezado con una etiqueta de periodo, una flecha desplegable y chevrons de anterior/siguiente, y en los botones Cancel y Apply. Figma no incluye una descripción de uso escrita para el conjunto de componentes Datepicker.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Numbers, Month, Year | Numbers |
| Size | SM, MD | SM |
| Color | Evergreen, Indigo | Evergreen |
| showButtons (booleano) | true, false | true |
| showConventions (booleano) | true, false | true |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Existen todas las combinaciones de `Type`, `Size` y `Color` (12 variantes). `showConventions` afecta solo a `Type=Numbers`, el único tipo con leyenda de convenciones.

### Configuración predeterminada

`Type=Numbers`, `Size=SM`, `Color=Evergreen`, con botones y convenciones visibles: un panel de 184 px de ancho con el encabezado "MAR 2021", la fila de días de la semana, cinco filas de semanas con celdas de día de 24 px, los botones Cancel y Apply y una leyenda de convenciones de tres elementos.

### Uso típico

Observación verificada: Todas las variantes comparten la misma estructura: encabezado, cuadrícula de contenido, botones opcionales y (en `Numbers`) convenciones opcionales. En todos los ejemplos la selección usa el estado de selección simple `Selected` de las celdas hijas; ninguna variante muestra un rango.

Interpretación basada en evidencia:

- `Type=Numbers` para elegir un día dentro de un mes.
- `Type=Month` para elegir un mes dentro de un año.
- `Type=Year` para elegir un año dentro de un rango de años.
- `Size=SM` para diseños compactos y `Size=MD` para diseños estándar.
- `showButtons=true` cuando la selección deba confirmarse con Apply o descartarse con Cancel.
- `showConventions=true` para explicar los marcadores que se muestran en los días.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un calendario consistente para seleccionar un día, un mes o un año, con navegación entre periodos y confirmación opcional.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden moverse entre periodos, ver la selección y el foco actuales, y confirmar o cancelar su elección.

### Contexto típico

Interpretación basada en evidencia: El ancho fijo del panel (184 px o 256 px) y los botones de confirmación indican un panel que se muestra desde un campo de fecha u otro disparador similar. El disparador no está documentado en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes:

- Para seleccionar un único día (`Numbers`), mes (`Month`) o año (`Year`).
- Para exigir la confirmación de la selección (`showButtons=true`).
- Para mostrar una leyenda de los marcadores de los días (`showConventions=true`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- Las variantes muestran solo selección simple; la selección de rango no se muestra a nivel de Datepicker, aunque el componente hijo `.Number` tiene un estado `Range`.
- La leyenda de convenciones solo está disponible en `Type=Numbers`.

## Reglas de composición y jerarquía

Las siguientes reglas se derivan de la estructura del componente y de sus componentes hijos.

### Componentes hijos

| Hijo | Uso | Configuración observada |
|------|-----|-------------------------|
| `.Number` | Celdas de día en `Type=Numbers` | `Size=Small` en SM, `Size=Regular` en MD; estados `Default`, `Opaque`, `Focused`, `Selected` |
| `.Month` | Celdas de mes en `Type=Month` y de año en `Type=Year` | `Size=Small` en SM (42 × 24 px), `Size=Regular` en MD (56 × 32 px); estados `Default`, `Selected` |
| Button | Acciones Cancel y Apply | Cancel: `Type=Tertiary`. Apply: `Type=Primary` en el mismo `Color` que el Datepicker. Button `Size=SM` en SM, `Size=MD` en MD |

Las celdas hijas toman el `Color` del Datepicker para su estado `Selected` (y, en `Numbers`, `Focused`).

### Vistas y jerarquía

| Type | Etiqueta del encabezado (ejemplo) | Cuadrícula | Celda |
|------|-----------------------------------|------------|-------|
| Numbers | Mes y año, en mayúsculas ("MAR 2021") | Fila de días de la semana + 5 filas de semanas × 7 días | `.Number` |
| Month | Año ("2024") | 3 filas × 4 meses (12) | `.Month` |
| Year | Rango de años ("2010-2033") | 6 filas × 4 años (24) | `.Month` |

Interpretación basada en evidencia: Los tres tipos forman una jerarquía día → mes → año. La etiqueta del encabezado con flecha desplegable sugiere el paso a la vista de nivel superior (por ejemplo, de días a meses); este comportamiento no está definido en Figma.

### Orden

- Los encabezados de día de la semana comienzan en domingo: S, M, T, W, T, F, S.
- Los días se ordenan de izquierda a derecha y de arriba abajo. Los días de los meses anterior y siguiente completan la primera y la última fila y usan el estado `Opaque` (por ejemplo, 29, 30 y 31 antes del día 1).
- Los meses se ordenan de enero a diciembre, de izquierda a derecha y de arriba abajo, como abreviaturas de tres letras en mayúsculas (JAN … DEC).
- Los años se ordenan de forma ascendente, de izquierda a derecha y de arriba abajo; el encabezado muestra el primer y el último año de la página.

### Navegación

- El encabezado contiene los íconos `chevron-left` y `chevron-right` a la derecha. Interpretación basada en evidencia: mueven al periodo anterior y siguiente (mes, año o rango de años, según `Type`).
- La etiqueta del encabezado va seguida de un ícono `arrow-dropdown`. Interpretación basada en evidencia: abre una vista de nivel superior o la selección del periodo.
- Las interacciones de prototipo no estaban disponibles con las herramientas de inspección, por lo que el comportamiento de navegación no está verificado en Figma.

### Desbordamiento y tamaño de la cuadrícula

- `Numbers` muestra cinco filas de semanas en todas las variantes; no se ofrece una sexta fila.
- `Month` muestra siempre 12 celdas y `Year` 24 celdas.
- Las celdas tienen tamaños fijos; el panel tiene un ancho fijo.

### Confirmación

- Cuando `showButtons=true`, aparece una fila de botones debajo de la cuadrícula, separada por una línea de 1 px `border/default`, con Cancel y Apply alineados a la derecha.
- Cuando `showConventions=true` (solo Numbers), la leyenda aparece debajo de los botones.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Panel | Obligatoria | Contenedor vertical de auto layout con fondo, relleno y radio. |
| Encabezado | Obligatoria | Etiqueta de periodo con `arrow-dropdown` (izquierda) y chevrons de anterior/siguiente (derecha). |
| Fila de días de la semana (`Days`) | Obligatoria en `Numbers` | Siete iniciales de días de la semana. |
| Cuadrícula de contenido | Obligatoria | Filas de celdas `.Number` o `.Month`. |
| Botones | Opcional (`showButtons`) | Instancias de Button Cancel (Tertiary) y Apply (Primary). |
| Convenciones | Opcional (`showConventions`, solo Numbers) | Tres filas, cada una con un punto de 8 px y una etiqueta "Convention". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho del panel | 184 px (SM), 256 px (MD) | Dimensiones de las variantes |
| Alto del panel (con todas las partes opcionales) | Numbers 282 px (SM) / 362 px (MD); Month 160 / 216 px; Year 244 / 324 px | Dimensiones de las variantes |
| Relleno del panel | `space/8` (SM), `space/16` (MD) | Vinculaciones de variables |
| Espacio entre secciones | `gap/sm` (8) | Vinculación de variable |
| Radio del panel | `radius/4` (4) | Vinculación de variable |
| Encabezado | Fila con distribución entre extremos; espacio de la etiqueta `gap/xxs` (4); espacio entre chevrons `gap/lg` (16); íconos de 12 px | Vinculaciones de variables, dimensiones de capa |
| Cuadrícula de días | 7 columnas de celdas de 24 px (SM) o 32 px (MD), sin espacio | Dimensiones de capa |
| Cuadrículas de meses y años | 4 columnas; espacio entre filas de 4 px en MD | Posiciones de capa |
| Fila de botones | Borde superior de 1 px `border/default`; relleno superior `space/8` (SM) / `space/12` (MD); espacio `gap/sm`; alineada a la derecha | Vinculaciones de variables |
| Convenciones | Relleno superior `space/8`; filas con punto de 8 px, `gap/sm` y etiqueta en `Text/Body/XXS` | Vinculaciones de variables |

## Semántica

Interpretación basada en evidencia:

- La etiqueta del encabezado nombra el periodo visible; los chevrons permiten moverse entre periodos.
- En `Numbers`, los días `Opaque` pertenecen a meses adyacentes, la celda `Focused` tiene el foco y la celda `Selected` es la fecha elegida.
- Apply confirma la selección y Cancel la descarta.
- La leyenda de convenciones explica el significado de los marcadores de color que puede mostrar `.Number` (`State=Conventions`); las etiquetas de ejemplo son marcadores de posición ("Convention").

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, diálogo o cuadrícula), interacción con teclado y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Selector de periodo | `arrow-dropdown`, 12 px, después de la etiqueta del encabezado | Nombre de capa |
| Periodo anterior | `chevron-left`, 12 px | Nombre de capa |
| Periodo siguiente | `chevron-right`, 12 px | Nombre de capa |
| Marcadores de convención | Puntos de 8 px en tres tonos | Capas, captura |

## Variantes (Propiedades)

El inventario siguiente es completo: se listaron las 12 variantes y se inspeccionaron en detalle variantes representativas de cada Type, Size y Color.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Numbers | Cuadrícula de días con fila de días de la semana; celdas `.Number`; admite convenciones. | Predeterminado |
| Month | 12 celdas `.Month` en 3 × 4. | Sin convenciones |
| Year | 24 celdas `.Month` en 6 × 4. | Sin convenciones |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| SM | 184 px de ancho; relleno `space/8`; celdas hijas pequeñas y botones SM. | Predeterminado |
| MD | 256 px de ancho; relleno `space/16`; celdas hijas regulares y botones MD. | — |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Evergreen | Celdas seleccionadas y botón Apply en Evergreen. | Predeterminado |
| Indigo | Celdas seleccionadas y botón Apply en Indigo. | — |

La celda de día con foco usa `border/focus` en ambos colores.

### showButtons

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| true | Muestra la fila Cancel/Apply. | Predeterminado |
| false | Oculta la fila de botones. | Todos los tipos |

### showConventions

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| true | Muestra la leyenda de convenciones. | Predeterminado; solo Numbers |
| false | Oculta la leyenda. | Solo Numbers |

## Estados

El conjunto de componentes Datepicker no tiene propiedad de estado. Los estados de las celdas (Default, Opaque, Focused, Selected) provienen de los componentes hijos `.Number` y `.Month`, y los de los botones, de Button.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Panel | Vinculación de variable |
| Borde | `border/default`, `width/1` | Divisor de la fila de botones | Vinculación de variable |
| Texto | `text/primary` | Etiqueta del encabezado, números del mes actual, etiquetas de convenciones | Vinculación de variable |
| Texto | `text/secondary` | Iniciales de los días de la semana, días de meses adyacentes | Vinculación de variable |
| Ícono | `icon/primary`, `icon/secondary` | Íconos del encabezado, marcadores | Vinculación de variable |
| Espaciado | `space/8`, `space/16`, `space/12`, `space/0`, `gap/sm`, `gap/xxs`, `gap/lg` | Rellenos y espacios | Vinculación de variable |
| Radio | `radius/4` | Panel | Vinculación de variable |
| Tipografía | `Text/Body/XS Strong` (SM), `Text/Body/SM Strong` (MD) | Etiqueta del encabezado | Estilos de texto |
| Tipografía | `Text/Label/XS` (SM), `Body/small/strong` (MD) | Iniciales de los días de la semana | Estilos de texto |
| Tipografía | `Text/Body/XXS` | Etiquetas de convenciones | Estilo de texto |

Los tokens de las celdas hijas y de los botones se documentan en `.Number`, `.Month` y Button.

Comportamiento actual:

- En `Size=MD`, las iniciales de los días de la semana usan el estilo de texto `Body/small/strong` (variables `font/...`) en lugar de un estilo `Text/...` como en el resto del componente.
- El botón Apply de las variantes Evergreen MD mide 30 px de alto mientras que Cancel mide 32 px, porque Apply usa la variante predeterminada de Button (ver la documentación de Button).
- El panel no tiene sombra.

## Interacción

El componente no tiene variantes de estado. Las interacciones de prototipo no estaban disponibles con las herramientas de inspección.

No verificado en Figma: la navegación con los chevrons, el cambio de vista mediante la etiqueta del encabezado, la selección, qué hacen Apply y Cancel, y la interacción con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- La celda seleccionada usa un relleno sólido con texto inverso, y la celda con foco un borde de 1 px `border/focus` (de los componentes hijos).
- Los días de meses adyacentes se atenúan con `text/secondary`.
- En SM, los números de los días miden 10 px y las iniciales de los días de la semana 11 px.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para los chevrons y el botón del encabezado, semántica de cuadrícula, anuncios de la fecha actual y de la seleccionada, navegación con teclado y gestión del foco.

## Pautas de contenido

Observaciones verificadas:

- Etiquetas del encabezado: abreviatura del mes en mayúsculas y año ("MAR 2021"), año ("2024") o rango de años con guion ("2010-2033").
- Iniciales de los días de la semana: una letra mayúscula por día, comenzando por el domingo.
- Etiquetas de mes: abreviaturas de tres letras en mayúsculas (JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC).
- Etiquetas de los botones: "Cancel" y "Apply".
- Etiquetas de convenciones: "Convention" (marcador de posición).

## Ejemplos

### Selección de día con confirmación

Configuración: `Type=Numbers`, `Size=MD`, `Color=Evergreen`, `showButtons=true`, `showConventions=true`

Descripción: Marzo de 2021 con el día 5 seleccionado, el día 2 con foco y una leyenda de convenciones.

Evidencia / Clasificación: Variante existente en Figma (contenido de ejemplo).

### Selección de mes

Configuración: `Type=Month`, `Size=SM`, `Color=Indigo`

Descripción: Los doce meses de 2024 con APR seleccionado.

Evidencia / Clasificación: Variante existente en Figma (contenido de ejemplo).

### Selección de año sin botones

Configuración: `Type=Year`, `Size=MD`, `Color=Evergreen`, `showButtons=false`

Descripción: Años 2010–2033 sin la fila de botones.

Evidencia / Clasificación: Configuración admitida por la propiedad `showButtons`.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `showConventions` con `Type=Month` o `Type=Year` | La propiedad no tiene efecto visible; estos tipos no contienen leyenda de convenciones | Estructura del componente |

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
