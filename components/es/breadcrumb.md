---
component: "Breadcrumb"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2998-19525"
last_updated: "2026-10-22"
tags:
  - "breadcrumb"
  - "navigation"
  - "hierarchy"
---

# Breadcrumb

Sistema: Genome Evolution Design System

## Resumen del componente

Breadcrumb es una ruta de navegación horizontal construida con instancias de `.BreadcrumbItem`, que muestra un indicador de desbordamiento opcional, hasta cinco niveles anteriores y la ubicación actual, en color Default, Evergreen o Indigo.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Breadcrumb muestra la ubicación del usuario dentro de una jerarquía y los niveles superiores. Esto se sustenta en su estructura: una secuencia fija de instancias de `.BreadcrumbItem` con `Item=Overflow`, `Item=Level` e `Item=Current`, separadas por íconos `chevron-right` y que termina con la ubicación actual. Figma no incluye una descripción de uso escrita para el conjunto de componentes Breadcrumb.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Color | Default, Evergreen, Indigo | Default |
| showOverflow (booleano) | true, false | true |
| showLevel5 (booleano) | true, false | true |
| showLevel4 (booleano) | true, false | true |
| showLevel3 (booleano) | true, false | true |
| showLevel2 (booleano) | true, false | true |
| showLevel1 (booleano) | true, false | true |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. El elemento de ubicación actual no tiene propiedad de visibilidad y siempre se muestra.

### Configuración predeterminada

`Color=Default` con todos los elementos visibles: Overflow ("…"), cinco elementos `Level` ("Text") y un elemento `Current` ("Text"). En esta configuración el breadcrumb mide 414 × 36 px.

### Uso típico

Observación verificada: El conjunto de componentes tiene tres variantes, una por cada `Color`. Cada variante contiene las mismas siete instancias de `.BreadcrumbItem` en el mismo orden, controladas por las mismas seis propiedades booleanas.

Interpretación basada en evidencia:

- Muestre un elemento `Level` por cada ancestro de la ubicación actual activando o desactivando `showLevel1`–`showLevel5`.
- Active `showOverflow` cuando haya más ancestros de los que pueden representar los elementos `Level` visibles.
- Use `Evergreen` o `Indigo` para teñir los separadores y la etiqueta de la ubicación actual.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Comunica dónde se encuentra el usuario dentro de una jerarquía y qué niveles conducen a la ubicación actual, en una sola fila compacta.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden identificar su ubicación actual y los niveles superiores.

### Contexto típico

Los contextos específicos de producto no están documentados en Figma. La altura de 36 px y el layout de una sola fila indican su ubicación en la parte superior de una página o vista; esto es una interpretación basada en evidencia.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura del componente:

- Para mostrar la ruta desde los niveles superiores de una jerarquía hasta la ubicación actual.
- Para indicar que algunos niveles superiores están contraídos (`showOverflow=true`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- Se puede mostrar un máximo de cinco elementos `Level`.
- La ruta ocupa una sola fila; las etiquetas no se ajustan en varias líneas ni se truncan.

## Reglas de composición y jerarquía

Las siguientes reglas se derivan de la estructura y las propiedades del componente.

### Orden de los elementos

Los elementos siempre aparecen en este orden fijo, de izquierda a derecha:

| Posición | Elemento | Propiedad de visibilidad | Configuración de `.BreadcrumbItem` |
|----------|----------|--------------------------|------------------------------------|
| 1 | Overflow | `showOverflow` | `Item=Overflow` |
| 2 | Level 5 | `showLevel5` | `Item=Level` |
| 3 | Level 4 | `showLevel4` | `Item=Level` |
| 4 | Level 3 | `showLevel3` | `Item=Level` |
| 5 | Level 2 | `showLevel2` | `Item=Level` |
| 6 | Level 1 | `showLevel1` | `Item=Level` |
| 7 | Current | Siempre visible | `Item=Current` |

Al ocultar un elemento, este desaparece de la fila y los elementos restantes cierran el espacio (auto layout con `gap/none`). El orden no se puede cambiar mediante propiedades.

### Jerarquía

- `Current` es siempre el último elemento y siempre está presente.
- Los elementos `Level` se numeran desde la ubicación actual hacia afuera: `Level 1` está inmediatamente antes de `Current` y `Level 5` es el más alejado. Interpretación basada en evidencia: `Level 1` representa el padre directo de la ubicación actual, y los números mayores representan ancestros de nivel superior.
- Todos los elementos excepto `Current` terminan con un separador `chevron-right`, por lo que los separadores siempre aparecen entre elementos y nunca después del último.

### Comportamiento de desbordamiento

- `Overflow` es un único elemento "…" ubicado al inicio de la ruta, antes de todos los elementos `Level`.
- Interpretación basada en evidencia: representa los ancestros que están por encima de los elementos `Level` visibles y que están contraídos.
- El desbordamiento se controla manualmente mediante `showOverflow`; el componente no oculta ni contrae elementos automáticamente según el ancho disponible.
- Figma no define qué ocurre al activar el elemento de desbordamiento.

### Cantidad de elementos

- Mínimo: un elemento (solo `Current`, con todas las propiedades booleanas en `false`).
- Máximo: siete elementos (Overflow, cinco elementos `Level` y `Current`).

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila horizontal de auto layout que contiene los elementos. |
| Elemento de desbordamiento | Opcional (`showOverflow`) | `.BreadcrumbItem` con `Item=Overflow`: "…" más `chevron-right`. |
| Elementos de nivel (1–5) | Opcional (`showLevel1`–`showLevel5`) | `.BreadcrumbItem` con `Item=Level`: etiqueta más `chevron-right`. |
| Elemento actual | Obligatoria | `.BreadcrumbItem` con `Item=Current`: etiqueta sin chevron. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, elementos centrados verticalmente | Contexto de diseño |
| Espacio entre elementos | `gap/none` (0) | Vinculación de variable |
| Alto | 36 px | Dimensiones de las variantes |
| Ancho (todos los elementos visibles, etiquetas de muestra) | 414 px; se adapta a los elementos visibles y a las etiquetas | Dimensiones de las variantes, auto layout |
| Relleno de los elementos | `space/8` (8) | Vinculación de variable (en `.BreadcrumbItem`) |
| Espacio entre etiqueta y chevron | `gap/sm` (8) | Vinculación de variable (en `.BreadcrumbItem`) |
| Radio de esquina de los elementos | `radius/4` (4) | Vinculación de variable (en `.BreadcrumbItem`) |
| Tipografía de la etiqueta — Level | `Text/Body/SM` (`size/14`, peso 400, `line-height/20`) | Estilo de texto |
| Tipografía de la etiqueta — Overflow, Current | `Text/Button/MD` (`size/14`, peso 600, `line-height/16`) | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste ni truncado) | Contexto de diseño |

El espacio visible entre elementos proviene del relleno propio de cada elemento.

## Semántica

Interpretación basada en evidencia: La ruta representa un camino jerárquico. `Current` marca la ubicación del usuario y se enfatiza visualmente (etiqueta seminegrita, sin chevron). Los elementos `Level` son ancestros, y `Overflow` representa ancestros contraídos. `Color` cambia el color de acento de los separadores y de la etiqueta actual; Figma no documenta si tiene significado.

No verificado en Figma: elementos HTML, roles o atributos ARIA (por ejemplo, una región de navegación o la marca de la página actual), comportamiento de enlace y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Separador | `chevron-right`, 12 px, al final de cada elemento Overflow y Level | `.BreadcrumbItem` anidado |

Color del separador según `Color`: ver Variantes.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las tres variantes.

### Color

| Valor | Separadores de Level | Etiqueta Current | Elemento Overflow | Etiquetas Level |
|-------|----------------------|------------------|-------------------|-----------------|
| Default | `icon/primary` | `text/primary` | "…" `text/primary`, separador `icon/secondary` | `text/secondary` |
| Evergreen | `icon/evergreen` | `text/evergreen` | Sin cambios respecto a Default | `text/secondary` |
| Indigo | `icon/indigo` | `text/indigo` | Sin cambios respecto a Default | `text/secondary` |

Comportamiento actual: En `Evergreen` e `Indigo`, solo se cambia el color de los separadores de `Level` y de la etiqueta `Current`. El elemento Overflow mantiene sus colores predeterminados y las etiquetas `Level` siguen en `text/secondary`. Los colores se aplican como sobrescrituras sobre las instancias anidadas de `.BreadcrumbItem`, que no tienen propiedad de color propia.

### showOverflow

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| true | Muestra el elemento "…" al inicio de la ruta. | Predeterminado |
| false | Oculta el elemento de desbordamiento. | — |

### showLevel1 – showLevel5

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| true | Muestra el elemento `Level` correspondiente en su posición fija. | Predeterminado para los cinco |
| false | Oculta el elemento `Level` correspondiente. | — |

## Estados

El conjunto de componentes Breadcrumb no tiene propiedad de estado. Todas las instancias anidadas de `.BreadcrumbItem` usan `State=Default`. El componente `.BreadcrumbItem` define los estados Default, Hovered, Pressed, Focused y Disabled (ver la documentación de BreadcrumbItem).

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Espaciado | `gap/none` | Espacio entre elementos | Vinculación de variable |
| Espaciado | `space/8`, `gap/sm` | Relleno de los elementos y espacio etiqueta–chevron | Vinculación de variable |
| Radio | `radius/4` | Radio de esquina de los elementos | Vinculación de variable |
| Texto | `text/primary` | Etiquetas Current y Overflow (Default) | Vinculación de variable |
| Texto | `text/secondary` | Etiquetas Level | Vinculación de variable |
| Texto | `text/evergreen`, `text/indigo` | Etiqueta Current (Evergreen, Indigo) | Vinculación de variable |
| Ícono | `icon/primary` | Separadores de Level (Default) | Vinculación de variable |
| Ícono | `icon/secondary` | Separador de Overflow | Vinculación de variable |
| Ícono | `icon/evergreen`, `icon/indigo` | Separadores de Level (Evergreen, Indigo) | Vinculación de variable |
| Tipografía | `Text/Body/SM`, `Text/Button/MD` | Etiquetas Level; etiquetas Overflow y Current | Estilos de texto |

## Interacción

Breadcrumb no tiene variantes de estado ni interacciones de prototipo. Las apariencias interactivas se definen a nivel de elemento en `.BreadcrumbItem`.

No verificado en Figma: comportamiento de navegación al activar un elemento, expansión del desbordamiento, si `Current` es interactivo e interacción con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- La ubicación actual se distingue de los niveles anteriores por el peso (600 frente a 400), el color y la ausencia de separador, no solo por el color.
- Los separadores son íconos; las etiquetas contienen el texto de la jerarquía.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): región de navegación y su etiqueta, indicación de la página actual para las tecnologías de asistencia, nombre accesible del elemento "…", cómo se exponen los separadores a los lectores de pantalla y soporte de teclado.

## Pautas de contenido

Observaciones verificadas:

- Las etiquetas usan "Text" como contenido de muestra y el elemento de desbordamiento usa "…".
- Las etiquetas ocupan una sola línea y no se truncan, por lo que el ancho de la ruta crece con la longitud de las etiquetas.
- Breadcrumb no expone propiedades de texto; las etiquetas se cambian sobrescribiendo las capas de texto de los elementos anidados.

## Ejemplos

### Ruta completa

Configuración: `Color=Default`, todas las propiedades booleanas en `true`

Descripción: Overflow, cinco niveles y la ubicación actual.

Evidencia / Clasificación: Configuración predeterminada en Figma.

### Ruta corta sin desbordamiento

Configuración: `Color=Default`, `showOverflow=false`, `showLevel3=false`, `showLevel4=false`, `showLevel5=false`

Descripción: Dos niveles anteriores (`Level 2`, `Level 1`) seguidos de la ubicación actual.

Evidencia / Clasificación: Configuración admitida por las propiedades booleanas del componente.

### Ruta con color

Configuración: `Color=Evergreen`, todas las propiedades booleanas en `true`

Descripción: Separadores y etiqueta actual en Evergreen.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
