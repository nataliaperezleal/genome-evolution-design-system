---
component: ".TableCellAssets"
system: "Genome Evolution Design System"
type: "Subcomponente (celda del cuerpo de tabla)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-1922"
last_updated: "2026-10-23"
tags:
  - "table"
  - "table-cell"
  - "subcomponent"
---

# .TableCellAssets

Sistema: Genome Evolution Design System

## Resumen del componente

Bloque de construcción para las celdas del cuerpo de una tabla. Está disponible como celda de texto (hasta dos líneas de texto más un icono opcional) o como celda solo de icono, en tres tamaños.

## Referencia rápida

### Qué es

Especificación verificada: `.TableCellAssets` es un conjunto de componentes de la página `Table` de Figma. Sus instancias forman las filas del cuerpo del componente `Table` (nodo `2192:2382`), ubicadas debajo de las instancias de `.TableHeaderAssets` en cada columna.

Interpretación basada en evidencia: Es la unidad de celda del cuerpo de la tabla. El punto inicial en su nombre sigue una convención habitual de Figma para bloques de construcción pensados para usarse dentro de otros componentes, y no para colocarse directamente en los diseños. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Cell, Icon Cell | Cell (según Figma MCP) |
| Size | Small, Medium, Large | Small (según Figma MCP) |
| Icon (booleana) | true, false | true (según Figma MCP); solo aplica a `Type=Cell` |
| Title (booleana) | true, false | true (según Figma MCP); solo aplica a `Type=Cell` |
| Content (booleana) | true, false | true (según Figma MCP); solo aplica a `Type=Cell` |

Los nombres de las propiedades booleanas se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma. El texto de la celda y el icono no se exponen como propiedades de texto ni de intercambio de instancia. Se modifican mediante sobrescrituras de capa.

### Configuración por defecto

Figma MCP reporta `Type=Cell`, `Size=Small`, con el icono, el título y el contenido visibles. Esto coincide con la primera variante del conjunto (`Type=Cell, Size=Small`, nodo `2192:1923`). Figma no documenta por escrito un valor por defecto aparte.

Observación verificada: Dentro del componente `Table`, la celda se configura como `Type=Cell`, `Size=Medium`, con el icono y la segunda línea ocultos y el ancho ajustado a la columna.

### Uso típico

Observaciones verificadas:

- Se usa como celda del cuerpo del componente `Table`, con una instancia por fila en cada columna.
- En `Table`, cada columna es una pila vertical de un `.TableHeaderAssets` y hasta diez instancias de `.TableCellAssets`. Las filas 2–10 y las columnas 2–10 se activan con las propiedades booleanas del componente `Table`.
- `Type=Cell` muestra texto con un icono inicial opcional; `Type=Icon Cell` muestra un único icono centrado.

Interpretación basada en evidencia: Usa `Type=Cell` para datos de texto, con la segunda línea para información complementaria. Usa `Type=Icon Cell` en columnas estrechas que solo necesitan un icono, como una columna de estado o de acción. Usa el mismo `Size` en toda la fila para que las celdas se alineen.

Recomendación: Usa `.TableCellAssets` a través del componente `Table`, y configúralo directamente solo al construir o ampliar diseños de tabla.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: El subcomponente da a todas las celdas del cuerpo de la tabla un relleno, una tipografía y unos colores consistentes, de modo que las tablas se pueden armar a partir de una única unidad reutilizable.

### Resultado esperado

Interpretación basada en evidencia: Las filas de la tabla tienen espaciado y estilos de texto uniformes, con la opción de una línea principal, una línea secundaria y un icono inicial.

### Contexto típico

Especificación verificada: Las filas del cuerpo del componente `Table`.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para construir o ampliar las filas del cuerpo de una tabla, dentro de `Table` o en diseños de tabla personalizados.
- `Type=Cell` solo con `Title`, para valores simples.
- `Type=Cell` con `Title` y `Content`, para un valor con información complementaria.
- `Type=Icon Cell`, para columnas que solo contienen un icono.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para los encabezados de tabla, usa `.TableHeaderAssets`, el bloque de construcción de encabezado que usa `Table`.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Marco horizontal con auto layout y fondo blanco (`background/canvas`). |
| Icono | Opcional (`Cell`); Requerida (`Icon Cell`) | Instancia de icono `bizagi-lines` de 16 px. En `Cell` se controla con la propiedad booleana `Icon`. |
| Marco de texto | Solo `Cell` | Pila vertical de 174 px de ancho que contiene las líneas de título y contenido. |
| Título | Opcional | Primera línea de texto, con el texto de ejemplo "First line content cell", en `text/primary`. Se controla con la propiedad booleana `Title`. |
| Contenido | Opcional | Segunda línea de texto, con el texto de ejemplo "Second line content cell", en `text/secondary`. Se controla con la propiedad booleana `Content`. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, centrada verticalmente | Auto layout de Figma |
| Relleno horizontal | 16 px (`space/16`), todas las variantes | Vinculación de variable |
| Relleno vertical, Small | 4 px (`space/4`) | Vinculación de variable |
| Relleno vertical, Medium | 8 px (`space/8`) | Vinculación de variable |
| Relleno vertical, Large | 16 px (`space/16`) | Vinculación de variable |
| Espacio entre elementos | 8 px (`gap/sm`) | Vinculación de variable |
| Radio de esquina | 0 (`radius/0`) | Vinculación de variable |
| Ancho de la celda (`Type=Cell`) | 230 px fijos en el conjunto; ajustado al ancho de la columna dentro de `Table` | Dimensiones de variante, instancia en `Table` |
| Ancho del marco de texto | 174 px fijos | Dimensiones de capa |
| Altura de la celda con dos líneas | Small 36 px, Medium 44 px, Large 60 px | Dimensiones de variante |
| Tamaño de Icon Cell | 48 × 24 px (Small), 48 × 32 px (Medium), 48 × 48 px (Large); icono centrado | Dimensiones de variante |
| Tamaño de icono | 16 × 16 px | Dimensiones de capa |

La celda no incluye borde ni divisor. En `Table`, solo el bloque de encabezado tiene un borde inferior.

## Semántica

Interpretación basada en evidencia: Cada instancia representa una celda de datos en una fila del cuerpo de la tabla. El título es el valor principal y la línea de contenido es información secundaria sobre él. `Icon Cell` representa una celda cuyo valor es un icono.

Elemento HTML (por ejemplo, una celda de datos de tabla), roles ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono inicial (`Cell`) | Instancia `bizagi-lines`, 16 px, `icon/primary` | Capas y vinculaciones de variables |
| Icono (`Icon Cell`) | Instancia `bizagi-lines`, 16 px, centrada, `icon/primary` | Capas y vinculaciones de variables |

El icono es una instancia de ejemplo. No se expone como propiedad de intercambio de instancia, por lo que se reemplaza mediante una sobrescritura de instancia anidada.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 6 variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Cell | Icono opcional y hasta dos líneas de texto; 230 px de ancho. | Disposición de la variante |
| Icon Cell | Un único icono de 16 px centrado; 48 px de ancho. | Disposición de la variante |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Small | Relleno vertical de 4 px. | Vinculación de variable |
| Medium | Relleno vertical de 8 px. | Vinculación de variable |
| Large | Relleno vertical de 16 px. | Vinculación de variable |

El texto usa `Text/Body/XXS` (10/14) en todos los tamaños. Solo cambia el relleno vertical.

### Icon, Title, Content

Propiedades booleanas que muestran u ocultan el icono inicial, la primera línea y la segunda línea de `Type=Cell`. Valores por defecto reportados: `true`.

## Estados

[No se encontraron estados documentados]. El conjunto no tiene variantes de interacción, selección ni deshabilitado.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno de la celda | Vinculación de variable |
| Texto | `text/primary` | Línea de título | Vinculación de variable |
| Texto | `text/secondary` | Línea de contenido | Vinculación de variable |
| Icono | `icon/primary` | Icono | Vinculación de variable |
| Tipografía | `Text/Body/XXS` | Título y contenido | Estilo de texto |
| Espaciado | `space/16`, `space/8`, `space/4` | Relleno | Vinculaciones de variables |
| Espaciado | `gap/sm` (8) | Espacio entre icono y texto | Vinculación de variable |
| Radio | `radius/0` | Esquinas de la celda | Vinculación de variable |

## Interacción

El conjunto no tiene estados interactivos ni interacciones de prototipo.

No verificado en Figma: hover de fila, selección de fila, ordenamiento, edición de celdas, comportamiento de truncado y comportamiento al hacer clic en los iconos.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Las líneas de título (`text/primary`) y contenido (`text/secondary`) usan tokens de texto distintos para establecer su jerarquía.
- Todo el texto es de 10 px (`Text/Body/XXS`).
- `Icon Cell` no tiene texto, por lo que su significado depende solo del icono.

Información de accesibilidad faltante (no verificada en Figma): semántica de tabla, asociación entre encabezado y celda, nombres accesibles para celdas solo de icono, navegación con teclado y cumplimiento de contraste.

## Guía de contenido

Observación verificada: Los textos de ejemplo son "First line content cell" y "Second line content cell". El marco de texto tiene un ancho fijo de 174 px.

Recomendación: Mantén breve el contenido de las celdas. Figma no define reglas de truncado ni de ajuste de línea.

## Ejemplos

### Celda tal como se usa en Table

Configuración: `Type=Cell`, `Size=Medium`, `Icon=false`, `Title=true`, `Content=false`, ancho ajustado a la columna

Descripción: Una línea de texto principal con 16 px de relleno horizontal y 8 px de relleno vertical (30 px de alto).

Evidencia / Clasificación: Instancia existente en el componente `Table` (`2192:2385`).

### Celda de dos líneas con icono

Configuración: `Type=Cell`, `Size=Large`, todas las propiedades booleanas en `true`

Descripción: Celda de 60 px de alto con icono inicial, línea principal y línea secundaria.

Evidencia / Clasificación: Variante existente en Figma (`2192:1933`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: Las propiedades booleanas `Icon`, `Title` y `Content` solo afectan a `Type=Cell`. `Icon Cell` siempre muestra su icono.

## Aclaraciones pendientes

1. **El texto de la celda no es una propiedad.** Los textos del título y del contenido son texto fijo en la capa ("First line content cell" / "Second line content cell"), sin propiedades de texto. Cada instancia requiere sobrescrituras manuales. Confirma si deben agregarse propiedades de texto.
2. **Ancho de texto fijo dentro de una columna más estrecha.** El marco de texto tiene un ancho fijo de 174 px. Dentro de `Table`, la celda se ajusta a una columna de 129 px, por lo que el marco de texto es más ancho que la celda. Confirma el comportamiento previsto (ocupar el ancho, truncar o ajustar línea).
3. **Alineación de filas entre Cell e Icon Cell.** Con el mismo `Size`, una `Cell` de dos líneas es más alta que una `Icon Cell` (por ejemplo, 36 px frente a 24 px en `Small`). Confirma cómo deben alinearse en una fila las celdas de distinto tipo.
4. **Intención de publicación.** El punto inicial en `.TableCellAssets` sugiere que el componente está pensado para usarse solo dentro de otros componentes. Confirma si está previsto para uso directo por parte de diseñadores o solo a través de `Table`, ya que esto afecta cómo se publica y se documenta.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2192:1922` y su uso en `Table`, nodo `2192:2382`) el 2026-10-23.
