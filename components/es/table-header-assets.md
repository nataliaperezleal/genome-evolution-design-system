---
component: ".TableHeaderAssets"
system: "Genome Evolution Design System"
type: "Subcomponente (celda de encabezado de tabla)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-2096"
last_updated: "2026-10-23"
tags:
  - "table"
  - "table-header"
  - "subcomponent"
---

# .TableHeaderAssets

Sistema: Genome Evolution Design System

## Resumen del componente

Bloque de construcción para las celdas de encabezado de una tabla, con borde inferior. Está disponible como encabezado de texto con iconos opcionales de tipo ordenamiento y filtro, o como encabezado solo de icono.

## Referencia rápida

### Qué es

Especificación verificada: `.TableHeaderAssets` es un conjunto de componentes de la página `Table` de Figma. Una instancia ocupa la parte superior de cada columna del componente `Table` (nodo `2192:2382`), sobre las celdas del cuerpo `.TableCellAssets`, y se muestra u oculta con la propiedad booleana de encabezado del componente `Table`.

Interpretación basada en evidencia: Es la unidad de encabezado de columna de la tabla. El punto inicial en su nombre sigue una convención habitual de Figma para bloques de construcción pensados para usarse dentro de otros componentes. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Header, Icon Header | Header (según Figma MCP) |
| Primer icono (booleana) | true, false | true (según Figma MCP); solo aplica a `Type=Header` |
| Segundo icono (booleana) | true, false | true (según Figma MCP); solo aplica a `Type=Header` |

Los nombres de las propiedades booleanas se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma. El texto del encabezado y los iconos no se exponen como propiedades de texto ni de intercambio de instancia. Se modifican mediante sobrescrituras de capa.

### Configuración por defecto

Figma MCP reporta `Type=Header` con ambos iconos visibles. Esto coincide con la primera variante del conjunto (`Type=Header`, nodo `2192:2097`). Figma no documenta por escrito un valor por defecto aparte.

Observación verificada: Dentro del componente `Table`, el encabezado se configura como `Type=Header`, con ambos iconos ocultos y el ancho ajustado a la columna.

### Uso típico

Observaciones verificadas:

- Se usa como primer elemento de cada columna del componente `Table`, seguido de hasta diez filas de `.TableCellAssets`.
- `Type=Header` muestra el título de la columna, un icono `arrow-down` junto a él y un icono `filter` en el borde derecho.
- `Type=Icon Header` muestra un único icono centrado de 16 px y mide 48 px de ancho, el mismo ancho que el tipo `Icon Cell` de `.TableCellAssets`.

Interpretación basada en evidencia: Usa `Type=Header` para titular columnas de texto. Usa `Type=Icon Header` sobre columnas formadas por celdas `Icon Cell`. Los iconos `arrow-down` y `filter` sugieren funciones de ordenamiento y filtro, pero Figma no documenta su comportamiento.

Recomendación: Usa `.TableHeaderAssets` a través del componente `Table`, y configúralo directamente solo al construir o ampliar diseños de tabla.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: El subcomponente da a cada columna de la tabla un área de título consistente, separada del cuerpo por un borde inferior marcado.

### Resultado esperado

Interpretación basada en evidencia: El usuario identifica qué contiene cada columna y puede ver indicadores de ordenamiento o filtro.

### Contexto típico

Especificación verificada: La fila de encabezado del componente `Table`.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para titular una columna al construir o ampliar tablas.
- `Type=Header` sin iconos, para un título de columna simple (como se usa en `Table`).
- `Type=Header` con iconos, cuando la columna ofrece indicadores de ordenamiento o filtro (comportamiento no definido en Figma).
- `Type=Icon Header`, sobre columnas solo de iconos.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para las celdas del cuerpo, usa `.TableCellAssets`.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Marco horizontal con fondo blanco (`background/canvas`) y borde inferior `border/strong` de 1 px. |
| Título | Requerida (`Header`) | Capa de texto con el texto de ejemplo "Header", `Text/Button/MD`, `text/primary`. |
| Primer icono | Opcional | Icono `arrow-down` de 12 px, ubicado justo después del título. Se controla con la propiedad booleana del primer icono. |
| Segundo icono | Opcional | Icono `filter` de 12 px, ubicado en el borde derecho del encabezado. Se controla con la propiedad booleana del segundo icono. |
| Icono | Requerida (`Icon Header`) | Icono `bizagi-lines` de 16 px, centrado. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, centrada verticalmente | Auto layout de Figma |
| Relleno | 16 px horizontal (`space/16`), 8 px vertical (`space/8`) | Vinculaciones de variables |
| Espacio entre el grupo del título y el segundo icono | 8 px (`gap/sm`) | Vinculación de variable |
| Espacio entre el título y el primer icono | 8 px (sin vinculación a variable) | Auto layout |
| Altura | 32 px (ambos tipos) | Dimensiones de variante |
| Ancho, Header | 230 px en el conjunto; ajustado al ancho de la columna dentro de `Table` | Dimensiones de variante, instancia en `Table` |
| Ancho, Icon Header | 48 px | Dimensiones de variante |
| Grupo del título | Ocupa el ancho disponible, de modo que el segundo icono queda en el borde derecho | Auto layout |
| Borde inferior | 1 px, `border/strong` | Vinculación de variable |
| Radio de esquina | 0 (`radius/0`) | Vinculación de variable |
| Tamaño de icono | 12 px (`Header`), 16 px (`Icon Header`) | Dimensiones de capa |

## Semántica

Interpretación basada en evidencia: Cada instancia representa el encabezado de una columna de la tabla. El título nombra los datos de la columna. El icono `arrow-down` junto al título sugiere un indicador de ordenamiento, y el icono `filter` sugiere un control de filtro. Estos significados provienen solo de los nombres y la posición de los iconos, y su comportamiento no está definido.

Elemento HTML (por ejemplo, una celda de encabezado de tabla), roles ARIA y estado de ordenamiento, y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Primer icono (`Header`) | `arrow-down`, 12 px, `icon/primary`, después del título | Nombre y dimensiones de capa, vinculación de variable |
| Segundo icono (`Header`) | `filter`, 12 px, `icon/primary`, borde derecho | Nombre y dimensiones de capa, vinculación de variable |
| Icono (`Icon Header`) | `bizagi-lines`, 16 px, `icon/primary`, centrado | Nombre y dimensiones de capa, vinculación de variable |

Los iconos no se exponen como propiedades de intercambio de instancia. No existen variantes para otras direcciones de ordenamiento (por ejemplo, una flecha hacia arriba).

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 2 variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Header | Título con iconos opcionales `arrow-down` y `filter`; 230 × 32 px. | Disposición de la variante |
| Icon Header | Un único icono centrado de 16 px; 48 × 32 px. | Disposición de la variante |

### Primer icono, Segundo icono

Propiedades booleanas que muestran u ocultan los iconos `arrow-down` y `filter` de `Type=Header`. Valores por defecto reportados: `true`.

## Estados

[No se encontraron estados documentados]. El conjunto no tiene variantes de hover, ordenado, filtrado ni deshabilitado.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno del encabezado | Vinculación de variable |
| Borde | `border/strong` | Borde inferior | Vinculación de variable |
| Texto | `text/primary` | Título | Vinculación de variable |
| Icono | `icon/primary` | Todos los iconos | Vinculación de variable |
| Tipografía | `Text/Button/MD` | Título (`size/14`, `line-height/16`, `weight/semibold`) | Estilo de texto |
| Espaciado | `space/16`, `space/8` | Relleno | Vinculaciones de variables |
| Espaciado | `gap/sm` (8) | Espacio entre elementos | Vinculación de variable |
| Radio | `radius/0` | Esquinas | Vinculación de variable |

## Interacción

El conjunto no tiene estados interactivos ni interacciones de prototipo.

No verificado en Figma: ordenamiento (disparador, direcciones, indicador activo), filtrado (disparador, indicador activo), estados de hover o presionado y redimensionamiento de columnas.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- El título usa texto de 14 px (`Text/Button/MD`), más grande que el texto de 10 px de las celdas del cuerpo, lo que ayuda a que la fila de encabezado destaque sobre las filas inferiores.
- Un borde inferior `border/strong` de 1 px separa el encabezado del cuerpo.
- `Icon Header` no tiene texto, por lo que su significado depende solo del icono.

Información de accesibilidad faltante (no verificada en Figma): semántica de celda de encabezado y su asociación con las celdas del cuerpo, anuncio del estado de ordenamiento, nombres accesibles para el ordenamiento, el filtro y los encabezados solo de icono, acceso con teclado al ordenamiento y al filtro, y cumplimiento de contraste.

## Guía de contenido

Observación verificada: El título ocupa una sola línea sin ajuste y usa el texto de ejemplo "Header".

Recomendación: Usa títulos de columna breves que describan los datos de la columna.

## Ejemplos

### Encabezado tal como se usa en Table

Configuración: `Type=Header`, ambos iconos ocultos, ancho ajustado a la columna

Descripción: Encabezado de 32 px con el título "Header" y un borde inferior marcado.

Evidencia / Clasificación: Instancia existente en el componente `Table` (`2192:2384`).

### Encabezado con iconos de ordenamiento y filtro

Configuración: `Type=Header`, ambos iconos visibles

Descripción: Encabezado de 230 px con el título, un icono `arrow-down` a continuación y un icono `filter` en el borde derecho.

Evidencia / Clasificación: Variante existente en Figma (`2192:2097`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: Las propiedades booleanas del primer y del segundo icono solo afectan a `Type=Header`.

## Aclaraciones pendientes

1. **Comportamiento de ordenamiento y filtro.** Los iconos `arrow-down` y `filter` no tienen estados (por ejemplo, ascendente frente a descendente, o filtro activo) ni un comportamiento documentado. Confirma si representan controles de ordenamiento y filtro, y qué estados e interacciones debe implementar el equipo de desarrollo.
2. **El texto del encabezado no es una propiedad.** El título es texto fijo en la capa ("Header") sin propiedad de texto, por lo que cada instancia requiere una sobrescritura manual. Confirma si debe agregarse una propiedad de texto.
3. **Intención de publicación.** El punto inicial en `.TableHeaderAssets` sugiere que se usa solo dentro de otros componentes. Confirma si los diseñadores deben usarlo directamente o solo a través de `Table`.
4. **Peso tipográfico del título.** `Text/Button/MD` declara peso 600, pero `weight/semibold` resuelve a "Medium". Confirma qué peso debe implementarse.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2192:2096` y su uso en `Table`, nodo `2192:2382`) el 2026-10-23.
