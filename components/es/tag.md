---
component: "Tag"
system: "Genome Evolution Design System"
type: "Etiqueta / indicador de estado"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-1314"
last_updated: "2026-10-23"
tags:
  - "tag"
  - "status"
  - "label"
---

# Tag

Sistema: Genome Evolution Design System

## Resumen del componente

Etiqueta compacta de 20 px de alto con iconos opcionales al inicio y al final. Está disponible en estilos relleno y contorno, esquinas cuadradas y redondeadas, ocho tipos de color, dos tamaños y un conjunto de estados de interacción para la etiqueta de contorno por defecto.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Tag es una etiqueta breve que sirve para categorizar o marcar elementos. Sus valores de `Type` `Information`, `Warning`, `Error` y `Sucess` corresponden a los tokens semánticos de color (info, warning, danger, success), por lo que también puede comunicar un estado. La etiqueta de contorno por defecto tiene además los estados `Hover`, `Focused`, `Selected`, `Unselected` y `Disable`, lo que sugiere que puede funcionar como etiqueta seleccionable. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Style | Filled, Outline | No verificado en Figma |
| Corners | Square, Rounded | No verificado en Figma |
| Type | Default, Inverse, Information, Warning, Error, Sucess, Evergreen, Indigo | No verificado en Figma |
| Size | MD, SM | No verificado en Figma |
| State | Default, Hover, Focused, Selected, Unselected, Disable | No verificado en Figma |
| Mostrar icono izquierdo (booleana) | true, false | true (según Figma MCP) |
| Icono izquierdo (intercambio de instancia) | Cualquier instancia de icono | `bizagi-lines` |
| Text (texto) | Texto libre | "Label" (según Figma MCP) |
| Mostrar icono derecho (booleana) | true, false | true (según Figma MCP) |
| Icono derecho (intercambio de instancia) | Cualquier instancia de icono | `bizagi-lines` |

`Sucess` y `Disable` se escriben exactamente como en Figma. Los nombres de las propiedades booleanas, de texto y de intercambio de instancia se indican tal como los expone Figma MCP (la propiedad booleana del icono izquierdo se expone como `showLeftIcons`); no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

No se encontró una variante por defecto verificada. El conjunto contiene 72 variantes. La generación de código de Figma MCP reporta `Style=Outline`, `Corners=Square`, `Type=Default`, `Size=MD`, `State=Default`, pero la primera variante del conjunto es `Style=Filled, Corners=Square, Type=Sucess, Size=MD, State=Default`. Ninguna se considera el valor por defecto documentado.

Observación verificada: Todas las variantes inspeccionadas muestran ambos iconos y el texto "Label".

### Uso típico

Observaciones verificadas:

- Todos los valores de `Type` existen en `Filled` y `Outline`, excepto `Evergreen` e `Indigo`, que solo existen en `Outline`.
- Los estados distintos de `Default` solo existen para `Style=Outline` con `Type=Default`.
- Ambos tamaños miden 20 px de alto. `SM` usa texto más pequeño (10 px frente a 12 px).
- `Rounded` usa esquinas completamente redondeadas y más relleno horizontal que `Square`.

Interpretación basada en evidencia:

- Usa `Information`, `Warning`, `Error` y `Sucess` para marcar elementos con un estado.
- Usa `Default`, `Evergreen` e `Indigo` para categorías neutras o con colores de marca.
- Usa `Inverse` sobre fondos oscuros. `Inverse` en contorno usa tokens claros de borde y texto (`border/inverse`, `text/inverse`).
- Usa la etiqueta `Default` de contorno con sus estados cuando el usuario puede seleccionar o deseleccionar etiquetas.

Recomendación: Usa una misma combinación de `Style`, `Corners` y `Size` dentro de una lista o grupo.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Tag permite identificar rápidamente la categoría o el estado de un elemento mediante una etiqueta breve y un tratamiento de color consistente.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede recorrer y distinguir los elementos por sus etiquetas. En la etiqueta de contorno por defecto, también puede ver qué etiquetas están seleccionadas.

### Contexto típico

Interpretación basada en evidencia: Listas, tablas, tarjetas y filtros donde los elementos necesitan una etiqueta breve de categoría o estado.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para marcar un elemento con una categoría o estado breve.
- Para mostrar un estado semántico con los tipos `Information`, `Warning`, `Error` o `Sucess`.
- Para permitir que el usuario seleccione o deseleccione etiquetas, con la etiqueta `Default` de contorno y los estados `Selected` / `Unselected`.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendaciones (no son reglas establecidas del sistema de diseño):

- Usa un tipo `Inverse` solo sobre fondos oscuros. La etiqueta `Inverse` de contorno casi no se ve sobre superficies claras.
- No dependas solo del color para comunicar un estado. Usa un texto claro en la etiqueta.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Marco de 20 px de alto con relleno y/o borde según `Style`, `Type` y `State`. |
| Icono izquierdo | Opcional | Instancia de icono de 12 px, `bizagi-lines` por defecto. Se controla con la propiedad booleana para mostrar el icono izquierdo y se puede reemplazar con intercambio de instancia. |
| Etiqueta | Requerida | Capa de texto con el texto de la etiqueta. |
| Icono derecho | Opcional | Instancia de icono de 12 px, `bizagi-lines` por defecto. Se controla con la propiedad booleana para mostrar el icono derecho y se puede reemplazar con intercambio de instancia. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Altura | 20 px (ambos tamaños) | Dimensiones de capa |
| Relleno, Square | 4 px en todos los lados (`space/4`) | Vinculación de variable |
| Relleno, Rounded | 8 px horizontal (`space/8`), 4 px vertical (`space/4`) | Vinculación de variable |
| Radio de esquina, Square | 4 px (`radius/4`) | Vinculación de variable |
| Radio de esquina, Rounded | Completamente redondeado (`semantic/full`) | Vinculación de variable |
| Espacio entre elementos | 4 px (`gap/xxs`) | Vinculación de variable |
| Tamaño de icono | 12 × 12 px | Dimensiones de capa |
| Borde | 1 px; 2 px en `Focused` (`focus/width`) | Estilo de la variante |
| Ancho con ambos iconos y "Label" | MD: 72 px (Square), 80 px (Rounded); SM: 67 px (Square), 75 px (Rounded) | Dimensiones de variante; se ajusta al contenido |

## Semántica

Interpretación basada en evidencia:

- `Information`, `Warning`, `Error` y `Sucess` comunican estados informativo, de advertencia, de error y de éxito, según los tokens info, warning, danger y success que usan.
- `Default`, `Evergreen` e `Indigo` son tratamientos de color neutros o de marca, sin un significado de estado documentado.
- `Inverse` está pensado para superficies oscuras.
- `Selected` y `Unselected` indican si una etiqueta seleccionable está elegida.

Los iconos por defecto `bizagi-lines` son marcadores intercambiables; Figma no les asigna un significado.

Elemento HTML, rol ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono izquierdo | Instancia `bizagi-lines`, 12 px; el color depende de `Type` y `State` | Capas y vinculaciones de variables |
| Icono derecho | Instancia `bizagi-lines`, 12 px; el color depende de `Type` y `State` | Capas y vinculaciones de variables |

Ambas ranuras se pueden ocultar de forma independiente y admiten intercambio de instancia. Iconos de reemplazo aprobados: No verificado en Figma.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 72 variantes.

### Style

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Filled | Fondo sólido (tokens de superficie intensos), texto e icono inversos, excepto `Inverse`, que usa fondo blanco y texto primario. | Vinculaciones de variables |
| Outline | Borde de color de 1 px, con fondo sutil o sin fondo, y texto e icono de color. | Vinculaciones de variables |

### Corners

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Square | Radio de 4 px, relleno de 4 px. | Vinculaciones de variables |
| Rounded | Completamente redondeado, relleno horizontal de 8 px. | Vinculaciones de variables |

### Type

| Valor | Filled | Outline | Evidencia |
|-------|--------|---------|-----------|
| Default | Fondo `surface/raised`, `text/inverse`, `icon/inverse` | Borde `border/default`, sin relleno, `text/primary`, `icon/primary` | Vinculaciones de variables |
| Inverse | Fondo `background/canvas`, `text/primary`, `icon/primary` | Borde `border/inverse`, sin relleno, `text/inverse`, `icon/inverse` | Vinculaciones de variables |
| Information | `surface/info/bold`, texto e icono inversos | `border/info`, `surface/info/subtle`, `text/info`, `icon/info` | Vinculaciones de variables |
| Warning | `surface/warning/bold`, texto e icono inversos | `border/warning`, `surface/warning/subtle`, `text/warning`, `icon/warning` | Vinculaciones de variables |
| Error | `surface/danger/bold` con `border/danger`, texto e icono inversos | `border/danger`, `surface/danger/subtle`, `text/danger`, `icon/danger` | Vinculaciones de variables |
| Sucess | `surface/success/bold`, texto e icono inversos | `border/success`, `surface/success/subtle`, `text/success`, `icon/success` | Vinculaciones de variables |
| Evergreen | No disponible | `border/evergreen`, `surface/evergreen/subtle`, `text/evergreen`, `icon/evergreen` | Vinculaciones de variables |
| Indigo | No disponible | `border/indigo`, `surface/indigo/subtle`, `text/indigo`, `icon/indigo` | Vinculaciones de variables |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | 20 px de alto; etiqueta `Text/Button/SM` (12/16). | Dimensiones de capa, estilo de texto |
| SM | 20 px de alto; etiqueta `Text/Body/XXS Strong` (10/14). | Dimensiones de capa, estilo de texto |

### State

Disponible solo para `Style=Outline`, `Type=Default`, en ambas esquinas y tamaños.

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Borde `border/default`, sin relleno. | Vinculaciones de variables |
| Hover | Relleno `background/interactive/hovered`, borde `border/interactive/hovered`, iconos `icon/interactive/hovered`. | Vinculaciones de variables |
| Focused | Relleno `background/interactive/hovered`, borde `border/focus` de 2 px (`focus/width`). | Vinculaciones de variables |
| Selected | Relleno `background/selected`, borde `border/selected`. | Vinculaciones de variables |
| Unselected | Sin borde ni relleno; texto `text/secondary` e iconos `icon/secondary`. | Vinculaciones de variables, captura |
| Disable | Relleno `background/disabled`, borde `border/disabled`, `text/disabled`, `icon/disabled`. | Vinculaciones de variables |

### Mostrar icono izquierdo / Mostrar icono derecho

Propiedades booleanas que muestran u ocultan las ranuras de icono. Valor por defecto reportado: `true`.

### Icono izquierdo / Icono derecho

Propiedades de intercambio de instancia para las ranuras de icono. Instancia por defecto: `bizagi-lines`.

### Text

Propiedad de texto para la etiqueta. Valor por defecto reportado: "Label".

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | Borde neutro, sin relleno | Vinculaciones de variables |
| Hover | Puntero sobre la etiqueta | Relleno gris claro, borde e iconos más oscuros | Vinculaciones de variables |
| Focused | Foco (interpretación: foco por teclado) | Relleno gris claro, borde de foco verde de 2 px | Vinculaciones de variables |
| Selected | Elegida | Relleno verde claro, borde verde | Vinculaciones de variables |
| Unselected | No elegida | Sin borde ni relleno, texto e iconos secundarios | Vinculaciones de variables |
| Disable | No disponible | Relleno, borde, texto e iconos deshabilitados | Vinculaciones de variables |

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma. Consulta Variantes (Propiedades) > Type para el mapeo completo de color por tipo.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/raised` | Fondo de Filled Default | Vinculaciones de variables |
| Superficie | `surface/{info, warning, danger, success}/bold` | Fondos de estado en Filled | Vinculaciones de variables |
| Superficie | `surface/{info, warning, danger, success, evergreen, indigo}/subtle` | Fondos en Outline | Vinculaciones de variables |
| Fondo | `background/canvas` | Fondo de Filled Inverse | Vinculaciones de variables |
| Fondo | `background/interactive/hovered` | Relleno en Hover y Focused | Vinculaciones de variables |
| Fondo | `background/selected` | Relleno en Selected | Vinculaciones de variables |
| Fondo | `background/disabled` | Relleno en Disable | Vinculaciones de variables |
| Borde | `border/default`, `border/inverse` | Bordes de Outline Default e Inverse | Vinculaciones de variables |
| Borde | `border/{info, warning, danger, success, evergreen, indigo}` | Bordes de tipo en Outline | Vinculaciones de variables |
| Borde | `border/interactive/hovered`, `border/focus`, `border/selected`, `border/disabled` | Bordes de estado | Vinculaciones de variables |
| Grosor de borde | `focus/width` (2) | Borde en Focused | Vinculaciones de variables |
| Texto | `text/primary`, `text/inverse`, `text/secondary`, `text/disabled` | Texto neutro, inverso, Unselected y Disable | Vinculaciones de variables |
| Texto | `text/{info, warning, danger, success, evergreen, indigo}` | Texto de tipo en Outline | Vinculaciones de variables |
| Icono | `icon/primary`, `icon/inverse`, `icon/secondary`, `icon/disabled`, `icon/interactive/hovered` | Iconos neutros y de estado | Vinculaciones de variables |
| Icono | `icon/{info, warning, danger, success, evergreen, indigo}` | Iconos de tipo en Outline | Vinculaciones de variables |
| Tipografía | `Text/Button/SM`, `Text/Body/XXS Strong` | Etiqueta, MD / SM | Estilos de texto |
| Espaciado | `space/4`, `space/8`, `gap/xxs` | Relleno y espacio entre elementos | Vinculaciones de variables |
| Radio | `radius/4`, `semantic/full` | Esquinas Square / Rounded | Vinculaciones de variables |

## Interacción

Estados observados: `Default`, `Hover`, `Focused`, `Selected`, `Unselected` y `Disable`, disponibles solo para la etiqueta `Default` de contorno.

Interpretación basada en evidencia: La etiqueta `Default` de contorno puede recibir hover y foco, y alternar entre `Selected` y `Unselected`. Las demás combinaciones parecen ser etiquetas de visualización no interactivas.

No verificado en Figma: qué ocurre al seleccionar una etiqueta, si las etiquetas se pueden eliminar (por ejemplo, con el icono derecho), interacciones de prototipo y comportamiento con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Los tipos de estado usan tanto color como texto.
- El estado `Focused` tiene un borde `border/focus` de 2 px.
- `Selected` agrega relleno y borde verdes. `Unselected` elimina el borde y usa texto secundario, por lo que las etiquetas seleccionadas y no seleccionadas se diferencian por algo más que el color.
- La etiqueta `SM` usa texto de 10 px.

Información de accesibilidad faltante (no verificada en Figma): rol ARIA y estado de selección, soporte de teclado, nombres accesibles para los iconos, comportamiento con lector de pantalla y cumplimiento de contraste.

## Guía de contenido

Observación verificada: La etiqueta ocupa una sola línea sin ajuste y usa el texto de ejemplo "Label".

Recomendación: Mantén las etiquetas en una o dos palabras.

## Ejemplos

### Etiqueta de estado

Configuración: `Style=Filled`, `Corners=Rounded`, `Type=Error`, `Size=MD`, `State=Default`

Descripción: Etiqueta redondeada en rojo oscuro con texto e iconos claros.

Evidencia / Clasificación: Variante existente en Figma (`2192:1335`).

### Etiqueta seleccionable, seleccionada

Configuración: `Style=Outline`, `Corners=Square`, `Type=Default`, `Size=MD`, `State=Selected`

Descripción: Etiqueta cuadrada con relleno verde claro y borde verde.

Evidencia / Clasificación: Variante existente en Figma (`3667:571`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: El conjunto no contiene variantes para estas combinaciones, por lo que no se pueden seleccionar en Figma:

- `Style=Filled` con `Type=Evergreen` o `Type=Indigo`.
- Cualquier `State` distinto de `Default` con `Style=Filled`, o con un `Type` distinto de `Default`.

## Aclaraciones pendientes

1. **Nombres de propiedades.** `Type=Sucess` tiene un error ortográfico, `State=Disable` difiere de la forma `Disabled` usada en otros componentes, y la propiedad booleana del icono izquierdo se expone como `showLeftIcons`, mientras que la del derecho es `showRightIcon`. Estos nombres pasan al mapeo en código. Confirma si deben corregirse antes de la implementación.
2. **Propósito de los estados de interacción.** `Hover`, `Focused`, `Selected`, `Unselected` y `Disable` solo existen para la etiqueta `Default` de contorno. Confirma para qué se usa una etiqueta seleccionable (por ejemplo, filtrar) y si se necesitan estados para otros tipos o para el estilo relleno.
3. **SM vs. MD.** Ambos tamaños miden 20 px de alto y solo difieren en el tamaño del texto (10 px frente a 12 px). Confirma que esta es la diferencia de tamaño prevista.
4. **Variante por defecto.** No hay un valor por defecto documentado. Los valores que reporta Figma MCP (Outline, Square, Default, MD, Default) no coinciden con la primera variante del conjunto (Filled, Square, Sucess, MD, Default). Confirma el valor por defecto previsto.
5. **Peso tipográfico de la etiqueta.** `Text/Button/SM` y `Text/Body/XXS Strong` declaran peso 600, pero `weight/semibold` resuelve a "Medium". Confirma qué peso debe implementarse.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2192:1314`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
