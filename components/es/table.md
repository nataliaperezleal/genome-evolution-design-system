---
component: "Table"
system: "Genome Evolution Design System"
type: "Visualización de datos (compuesto)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-2382"
last_updated: "2026-10-23"
tags:
  - "table"
  - "data-display"
  - "composite"
---

# Table

Sistema: Genome Evolution Design System

## Resumen del componente

Cuadrícula configurable de hasta 10 columnas y 10 filas de cuerpo, construida con celdas de encabezado `.TableHeaderAssets` y celdas de cuerpo `.TableCellAssets`. Las columnas, las filas y el encabezado se muestran u ocultan con propiedades booleanas.

## Referencia rápida

### Qué es

Especificación verificada: `Table` (nodo `2192:2382`) es un componente único, no un conjunto de variantes. Contiene diez contenedores de columna. Cada columna apila una instancia de `.TableHeaderAssets` sobre diez instancias de `.TableCellAssets`. Las propiedades booleanas muestran u ocultan las columnas 2–10, las filas 2–10 y el encabezado.

Interpretación basada en evidencia: Table es una plantilla para datos tabulares. El diseñador activa las columnas y filas que necesita y luego sobrescribe los textos del encabezado y de las celdas. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Mostrar encabezado (booleana) | true, false | true (según Figma MCP) |
| Columna 2 … Columna 10 (booleanas, una por columna) | true, false | false (según Figma MCP) |
| Fila 2 … Fila 10 (booleanas, una por fila) | true, false | false (según Figma MCP) |

Los nombres de las propiedades se indican tal como los expone Figma MCP (`showHeader`, `column2`–`column10`, `row2`–`row10`); no se verificaron sus nombres exactos en el panel de propiedades de Figma. La columna 1 y la fila 1 no tienen propiedad para ocultarlas y siempre están visibles.

### Configuración por defecto

Figma MCP reporta el encabezado activado y todas las propiedades de columna y fila desactivadas. Por eso, el componente muestra una columna con encabezado y una fila de cuerpo, lo que coincide con su representación en Figma ("Header" sobre "First line content cell").

### Uso típico

Observaciones verificadas:

- Activa `Columna N` para agregar las columnas 2–10 a la derecha de la columna 1, en orden fijo.
- Activa `Fila N` para agregar las filas de cuerpo 2–10 debajo de la fila 1, en orden fijo. Cada propiedad de fila controla esa fila en todas las columnas, por lo que todas las columnas visibles tienen siempre el mismo número de filas.
- Edita los textos del encabezado y de las celdas mediante sobrescrituras de capa. Ninguno de los subcomponentes expone propiedades de texto.

Interpretación basada en evidencia: Usa Table para presentar un conjunto pequeño y fijo de registros (hasta 10 × 10) en un diseño.

Recomendación: Para más de 10 filas o columnas, o para datos que deban ordenarse, desplazarse o paginarse, ese comportamiento debe diseñarse por separado, porque Table no lo define.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Table ofrece a los diseñadores una tabla lista para usar, basada en tokens y con estilos consistentes de encabezado y celda, sin tener que armar cuadrículas a mano.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede leer datos organizados en columnas y filas con título, con una fila de encabezado claramente separada.

### Contexto típico

Interpretación basada en evidencia: Pantallas que listan registros, configuraciones o comparaciones en forma de tabla.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para mostrar datos estructurados con hasta 10 columnas y 10 filas.
- Cuando cada columna necesita un título (encabezado activado).
- Para listas de datos sencillas que no requieren ordenamiento, selección ni acciones por fila. Estas funciones no están incluidas en Table.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para conjuntos de datos de más de 10 × 10, o cuando se necesiten interacciones como selección de filas, ordenamiento o edición en línea, amplía la tabla con `.TableHeaderAssets` y `.TableCellAssets` o define un patrón específico.

## Estructura (Anatomía)

### Jerarquía de composición

```
Table
└── Contenedor de columna ×10 (columna 1 siempre visible; columnas 2–10 activables)
    ├── .TableHeaderAssets ×1 (controlado por Mostrar encabezado en la columna 1; ver Aclaraciones pendientes)
    └── .TableCellAssets ×10 (fila 1 siempre visible; filas 2–10 activables)
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor de columna | Columna 1 requerida; columnas 2–10 opcionales | Pila vertical con un encabezado y las celdas de cuerpo de esa columna. |
| Celda de encabezado | Opcional | `.TableHeaderAssets`, `Type=Header`, con ambos iconos ocultos y ajustada al ancho de la columna. |
| Celda de cuerpo | Fila 1 requerida; filas 2–10 opcionales | `.TableCellAssets`, `Type=Cell`, `Size=Medium`, solo con la línea de título y ajustada al ancho de la columna. |

### Relaciones entre componentes hijos

- `.TableHeaderAssets` aporta el título de columna, el estilo de texto seminegrita de 14 px y el borde inferior `border/strong` que separa el encabezado del cuerpo.
- `.TableCellAssets` aporta las celdas de cuerpo, con 16 px de relleno horizontal, 8 px de relleno vertical y texto de 10 px (`Text/Body/XXS`, `text/primary`).
- Table no agrega rellenos, bordes, divisores ni espaciado propios. Todo el estilo visual proviene de los dos subcomponentes.

### Lógica de orden

- Las columnas se ordenan de izquierda a derecha en un orden fijo (columna 1 y luego 2–10). Una columna se puede ocultar, pero las columnas no se pueden reordenar mediante propiedades.
- Las filas se ordenan de arriba abajo en un orden fijo (encabezado, fila 1 y luego filas 2–10).
- Las propiedades de fila se comparten entre columnas. Por ejemplo, `Fila 4` muestra la cuarta celda de cuerpo en todas las columnas visibles.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección de columnas | Columnas en horizontal, alineadas arriba | Auto layout |
| Dirección de filas | Pila vertical dentro de cada columna, sin espacio | Auto layout |
| Ancho de la columna 1 | 129 px | Dimensiones de capa |
| Ancho de las columnas 2–10 | 148 px cada una | Dimensiones de capa |
| Ancho de la tabla (por defecto) | 148 px, con la columna 1 centrada | Dimensiones de capa |
| Altura del encabezado | 32 px | Dimensiones de instancia |
| Altura de fila de cuerpo | 30 px (una línea, `Size=Medium`) | Dimensiones de instancia |
| Altura de la tabla (por defecto) | 62 px (encabezado y una fila) | Dimensiones de capa |
| Espacio entre celdas o columnas | Ninguno | Auto layout |
| Divisores de fila | Ninguno; solo el encabezado tiene borde inferior | Estilo de los subcomponentes |

## Semántica

Interpretación basada en evidencia: La primera fila es la fila de encabezados de columna y las demás son filas de datos. Cada celda de cuerpo pertenece a la columna cuyo encabezado está encima de ella.

Semántica de tabla HTML, asociación entre encabezado y celda, roles ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Variantes (Propiedades)

Table no tiene propiedades de variante. Tiene 19 propiedades booleanas.

### Mostrar encabezado

Muestra u oculta la fila de encabezado. Valor por defecto reportado: `true`. Dentro del componente, esta propiedad solo está conectada al encabezado de la columna 1. Las columnas 2–10 siempre muestran su encabezado cuando están visibles (ver Aclaraciones pendientes).

### Columna 2 … Columna 10

Cada propiedad booleana muestra u oculta un contenedor de columna, incluidos su encabezado y sus celdas de cuerpo. Valor por defecto reportado: `false`.

### Fila 2 … Fila 10

Cada propiedad booleana muestra u oculta una fila de cuerpo en todas las columnas. Valor por defecto reportado: `false`.

## Estados

[No se encontraron estados documentados]. Ni Table ni sus subcomponentes tienen estados de hover, seleccionado, ordenado, carga, vacío o deshabilitado.

## Mapeo de tokens

Table no vincula tokens propios. Los siguientes tokens provienen de sus componentes hijos y se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Origen |
|-----------|-------|----------------|--------|
| Fondo | `background/canvas` | Relleno de encabezado y celdas | Ambos subcomponentes |
| Borde | `border/strong` | Borde inferior del encabezado | `.TableHeaderAssets` |
| Texto | `text/primary` | Título del encabezado y texto de celda | Ambos subcomponentes |
| Tipografía | `Text/Button/MD` | Título del encabezado (14/16) | `.TableHeaderAssets` |
| Tipografía | `Text/Body/XXS` | Texto de celda (10/14) | `.TableCellAssets` |
| Espaciado | `space/16`, `space/8`, `gap/sm` | Relleno y espacio de celdas y encabezado | Ambos subcomponentes |
| Radio | `radius/0` | Esquinas rectas | Ambos subcomponentes |

Excepción: las celdas de la fila 6 en las columnas 2–10 usan valores sin vincular (ver Aclaraciones pendientes).

## Interacción

No hay interacciones de prototipo ni estados interactivos.

No verificado en Figma: patrones de navegación (movimiento entre celdas con teclado, orden de foco), ordenamiento y filtrado (los iconos del encabezado están ocultos en Table), selección de filas, hover de fila, paginación, desplazamiento, redimensionamiento de columnas y comportamiento adaptable (responsive).

## Comportamiento de desbordamiento

Observaciones verificadas:

- Table no define desplazamiento, paginación ni truncado.
- Dentro de cada celda de cuerpo, el marco de texto tiene un ancho fijo de 174 px, mayor que las columnas de 129 px y 148 px. Ninguna regla definida recorta el texto.
- El marco raíz reporta un ancho de 148 px en la configuración por defecto. No se verificó cómo responde el ancho de la tabla al activar las columnas 2–10.

No verificado en Figma: truncado o ajuste de texto, desplazamiento horizontal con muchas columnas y comportamiento con más de 10 filas.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- La fila de encabezado se distingue visualmente (texto seminegrita de 14 px y borde inferior marcado) de las filas de cuerpo (texto regular de 10 px).
- Las filas de cuerpo no tienen divisores ni rellenos alternos, por lo que solo el espaciado las separa.
- El texto del cuerpo es de 10 px.

Información de accesibilidad faltante (no verificada en Figma): semántica de tabla, asociación con encabezados, navegación con teclado, anuncios de lector de pantalla y cumplimiento de contraste.

## Guía de contenido

Observación verificada: Los textos de ejemplo son "Header" y "First line content cell". El texto se edita mediante sobrescrituras de capa en cada instancia.

Recomendaciones:

- Mantén breves los títulos de columna.
- Mantén el contenido de cada celda en una sola línea corta, ya que las celdas usadas en Table solo muestran la línea de título y no hay una regla de truncado definida.

## Ejemplos

### Tabla por defecto

Configuración: `Mostrar encabezado=true`, todas las propiedades de columna y fila en `false`

Descripción: Una columna con encabezado ("Header") y una fila de cuerpo ("First line content cell").

Evidencia / Clasificación: Componente existente en Figma (`2192:2382`).

### Tabla de 3 × 4

Configuración: `Mostrar encabezado=true`, `Columna 2=true`, `Columna 3=true`, `Fila 2=true`, `Fila 3=true`, `Fila 4=true`

Descripción: Tres columnas con encabezado y cuatro filas de cuerpo cada una.

Evidencia / Clasificación: Recomendación basada en las propiedades booleanas del componente; no es un ejemplo existente en Figma.

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: No se pueden agregar columnas después de la 10 ni filas después de la 10 sin desvincular o ampliar el componente.

## Aclaraciones pendientes

1. **La fila 6 de las columnas 2–10 usa una celda distinta y sin estilo.** En las columnas 2–10, la celda de la fila 6 es una instancia de un componente principal distinto de `.TableCellAssets`, con valores sin vincular: texto blanco de 12 px (interlineado de 18 px) sobre fondo blanco. Al activar `Fila 6`, el texto de esas columnas es invisible, y los cambios de tokens no les llegan. Confirma que estas instancias deben reemplazarse por `.TableCellAssets`.
2. **Mostrar encabezado solo controla la columna 1.** La propiedad de encabezado solo oculta el encabezado de la columna 1. Las columnas 2–10 siempre muestran su encabezado, por lo que al desactivarlo con más de una columna la tabla queda desalineada. Confirma el comportamiento previsto.
3. **Anchos de columna inconsistentes.** La columna 1 mide 129 px y las columnas 2–10 miden 148 px. El marco raíz mide 148 px y centra la columna 1. Confirma el ancho de columna previsto y cómo debe crecer la tabla al agregar columnas.
4. **Desbordamiento y ajuste de texto.** El marco de texto de la celda tiene un ancho fijo de 174 px, mayor que cualquier columna, y no hay truncado, ajuste de línea ni desplazamiento definidos. Confirma cómo deben comportarse el contenido largo y las tablas más grandes.
5. **Patrones de interacción ausentes.** Table no tiene hover ni selección de filas, ordenamiento ni paginación, y los iconos de ordenamiento y filtro del encabezado están ocultos. Confirma si estos patrones están fuera del alcance de este componente o si aún falta diseñarlos.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2192:2382` y sus componentes hijos `.TableHeaderAssets` `2192:2096` y `.TableCellAssets` `2192:1922`) el 2026-10-23.
