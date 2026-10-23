---
component: "Tab"
system: "Genome Evolution Design System"
type: "Elemento de navegación"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2189-5340"
last_updated: "2026-10-23"
tags:
  - "tab"
  - "navigation"
  - "selection"
---

# Tab

Sistema: Genome Evolution Design System

## Resumen del componente

Pestaña individual con etiqueta de texto e iconos opcionales a la izquierda y a la derecha. Está disponible en dos tamaños, con estados de interacción y un estado seleccionado que se indica con un borde inferior.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Tab es un elemento seleccionable dentro de un conjunto de pestañas. La propiedad `State` incluye `Selected` junto a `Default`, `Hovered`, `Pressed` y `Focused`. Las variantes seleccionadas agregan un borde inferior de 2 px y colores de texto e icono más intensos, que es el patrón habitual para marcar la pestaña activa entre sus pares.

Especificación verificada: Todas las variantes tienen la descripción de Figma "The New type is used for apps". Figma no explica más su significado (ver Aclaraciones pendientes).

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Indigo, Evergreen | Default (según Figma MCP) |
| State | Default, Hovered, Pressed, Selected, Focused, Selected Focused, Focused Selected | Default (según Figma MCP) |
| Size | MD, SM | MD (según Figma MCP) |
| Mostrar icono izquierdo (booleana) | true, false | true (según Figma MCP) |
| Icono izquierdo (intercambio de instancia) | Cualquier instancia de icono | `arrow-left` |
| Mostrar texto (booleana) | true, false | true (según Figma MCP) |
| Text (texto) | Texto libre | "Tab name" (según Figma MCP) |
| Mostrar icono derecho (booleana) | true, false | true (según Figma MCP) |
| Icono derecho (intercambio de instancia) | Cualquier instancia de icono | `arrow-right` |

Los nombres de las propiedades booleanas, de texto y de intercambio de instancia se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

Figma MCP reporta `Color=Default`, `State=Default`, `Size=MD`, con ambos iconos y el texto visibles y el texto "Tab name". Esto coincide con la primera variante del conjunto (`Color=Default, State=Default, Size=MD`, nodo `2189:5381`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- La pestaña está disponible en `MD` (40 px de alto) y `SM` (24 px de alto).
- `Indigo` y `Evergreen` solo existen con `State=Selected`.
- Los iconos izquierdo y derecho se pueden ocultar de forma independiente, y la etiqueta también.
- El ancho de la pestaña se ajusta al contenido (16 px de relleno lateral, 8 px de espacio entre elementos).

Interpretación basada en evidencia: Coloca varias instancias de Tab una al lado de otra. Una pestaña usa `State=Selected` para marcar la vista activa y las demás usan `State=Default`. Usa el color de `Selected` (`Default`, `Indigo` o `Evergreen`) que corresponda al tema del producto.

Recomendación: Usa el mismo `Size` y el mismo `Color` de selección para todas las pestañas de un grupo.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Tab permite al usuario cambiar entre vistas o secciones relacionadas del mismo nivel, y muestra cuál está activa.

### Resultado esperado

Interpretación basada en evidencia: El usuario identifica la pestaña activa por el borde inferior y el color más intenso de la etiqueta, y puede pasar a otra pestaña seleccionándola.

### Contexto típico

Interpretación basada en evidencia: Pantallas de aplicaciones que agrupan el contenido en secciones. La descripción de Figma ("The New type is used for apps") indica que esta versión de Tab está pensada para aplicaciones, pero no define más contexto.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para cambiar entre vistas o secciones del mismo nivel dentro de una pantalla o área de la aplicación.
- Cuando la sección activa debe permanecer visiblemente marcada.
- Usa `Size=MD` en diseños estándar y `Size=SM` en diseños compactos.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para una acción única, usa un botón. Tab no expone semántica de acción o comando.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Marco horizontal con auto layout. Muestra el fondo del estado, el borde inferior de selección y el borde de foco. |
| Icono izquierdo | Opcional | Instancia llamada `arrow-left` (12 px). Se controla con la propiedad booleana para mostrar el icono izquierdo y se puede reemplazar con intercambio de instancia. |
| Etiqueta | Opcional | Capa de texto llamada `Tab name`. Se controla con la propiedad booleana para mostrar el texto y la propiedad de texto. |
| Icono derecho | Opcional | Instancia llamada `arrow-right` (12 px). Se controla con la propiedad booleana para mostrar el icono derecho y se puede reemplazar con intercambio de instancia. |
| Indicador de selección | Condicional | Borde inferior de 2 px, solo en `State=Selected`. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, centrada | Auto layout de Figma |
| Relleno horizontal | 16 px (`space/16`) | Vinculación de variable |
| Relleno vertical, MD | 12 px (`space/12`) | Vinculación de variable |
| Relleno vertical, SM | 4 px (`space/4`) | Vinculación de variable |
| Espacio entre elementos | 8 px (`gap/sm`) | Vinculación de variable |
| Altura, MD | 40 px | Dimensiones de variante |
| Altura, SM | 24 px | Dimensiones de variante |
| Ancho con ambos iconos y "Tab name" | 130 px (se ajusta al contenido) | Dimensiones de variante y disposición de capas |
| Tamaño de icono | 12 × 12 px | Dimensiones de capa |
| Borde inferior de selección | 2 px | Estilo de la variante |
| Borde de foco | 2 px en todos los lados | Estilo de la variante (`focus/width` en `Focused`) |

## Semántica

Interpretación basada en evidencia: `Selected` representa la pestaña activa dentro de su grupo; `Default` representa una pestaña disponible pero inactiva. `Color` solo cambia el tratamiento visual de la pestaña seleccionada (borde inferior, color de texto y de icono). Figma no documenta una diferencia semántica entre `Default`, `Indigo` y `Evergreen`.

Los iconos por defecto `arrow-left` y `arrow-right` son instancias de ejemplo que se pueden intercambiar. Figma no les asigna un significado.

Elemento HTML, roles ARIA (por ejemplo tab o tablist) y anuncios de lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono izquierdo | Instancia `arrow-left`, 12 px; el color depende del estado (ver Mapeo de tokens) | Capas y vinculaciones de variables |
| Icono derecho | Instancia `arrow-right`, 12 px; el color depende del estado | Capas y vinculaciones de variables |

Ambas ranuras se pueden ocultar de forma independiente y admiten intercambio de instancia. Iconos de reemplazo aprobados: No verificado en Figma.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 16 variantes.

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Tratamiento neutro. Disponible con todos los estados. En Selected usa `border/selected`, `text/secondary` e `icon/primary`. | Nombres de variantes, vinculaciones de variables |
| Indigo | Tratamiento de selección con `border/indigo`, `text/indigo` e `icon/indigo`. Solo con `State=Selected`. | Nombres de variantes, vinculaciones de variables |
| Evergreen | Tratamiento de selección con `border/evergreen`, `text/evergreen` e `icon/evergreen`. Solo con `State=Selected`. | Nombres de variantes, vinculaciones de variables |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Pestaña inactiva; sin fondo ni borde. | Vinculaciones de variables |
| Hovered | Relleno `background/interactive/hovered`. | Vinculaciones de variables |
| Pressed | Relleno `background/interactive/pressed`. | Vinculaciones de variables |
| Selected | Borde inferior de 2 px en el color de selección; texto e icono más intensos. | Vinculaciones de variables |
| Focused | Borde `border/focus` de 2 px en todos los lados (`focus/width`). | Vinculaciones de variables |
| Selected Focused | Solo existe en `Size=MD`. Borde `border/focus` de 2 px con colores de texto e icono de selección; sin indicador inferior. | Nombres de variantes, vinculaciones de variables |
| Focused Selected | Solo existe en `Size=SM`. Misma apariencia que `Selected Focused`. | Nombres de variantes, vinculaciones de variables |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | 40 px de alto, 12 px de relleno vertical. | Dimensiones de variante, vinculaciones de variables |
| SM | 24 px de alto, 4 px de relleno vertical. | Dimensiones de variante, vinculaciones de variables |

La tipografía de la etiqueta es `Text/Button/SM` en ambos tamaños.

### Mostrar icono izquierdo / Mostrar icono derecho

Propiedades booleanas que muestran u ocultan las ranuras de icono izquierda y derecha. Valor por defecto reportado: `true`.

### Icono izquierdo / Icono derecho

Propiedades de intercambio de instancia para las ranuras de icono. Instancias por defecto: `arrow-left` y `arrow-right`.

### Mostrar texto

Propiedad booleana que muestra u oculta la etiqueta. Valor por defecto reportado: `true`.

### Text

Propiedad de texto para el contenido de la etiqueta. Valor por defecto reportado: "Tab name".

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Inactiva | Etiqueta `text/tertiary`, iconos `icon/secondary`, sin relleno | Vinculaciones de variables |
| Hovered | Pestaña inactiva en hover | Agrega el relleno `background/interactive/hovered` | Vinculaciones de variables |
| Pressed | Pestaña inactiva presionada | Agrega el relleno `background/interactive/pressed` | Generación de código desde Figma |
| Selected | Pestaña activa | Borde inferior de 2 px; los colores de texto e icono cambian según `Color` | Vinculaciones de variables |
| Focused | Pestaña inactiva con foco (interpretación: foco por teclado) | Borde `border/focus` de 2 px alrededor de la pestaña | Vinculaciones de variables |
| Selected Focused / Focused Selected | Pestaña activa con foco, solo `Color=Default` | Borde `border/focus` de 2 px; `text/secondary` e `icon/primary`; no se muestra el indicador inferior | Vinculaciones de variables, captura |

El conjunto no incluye variantes Hovered, Pressed ni Focused para pestañas seleccionadas Indigo o Evergreen.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma en las variantes inspeccionadas, salvo donde se indica.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/interactive/hovered` | Relleno en Hovered | Variante Hovered |
| Fondo | `background/interactive/pressed` | Relleno en Pressed | Generación de código desde Figma (variante Pressed) |
| Borde | `border/selected` | Borde inferior de selección, `Color=Default` | Variante Selected Default |
| Borde | `border/indigo` | Borde inferior de selección, `Color=Indigo` | Variante Indigo |
| Borde | `border/evergreen` | Borde inferior de selección, `Color=Evergreen` | Variante Evergreen |
| Borde | `border/focus` | Borde de foco (Focused y Selected Focused) | Variantes con foco |
| Grosor de borde | `focus/width` (2) | Grosor del borde de foco en `Focused` | Variante Focused; no vinculado en `Selected Focused` / `Focused Selected` |
| Texto | `text/tertiary` | Etiqueta en Default, Hovered, Pressed y Focused | Vinculaciones de variables |
| Texto | `text/secondary` | Etiqueta en Selected y Selected Focused, `Color=Default` | Vinculaciones de variables |
| Texto | `text/indigo` | Etiqueta, Selected Indigo | Vinculaciones de variables |
| Texto | `text/evergreen` | Etiqueta, Selected Evergreen | Vinculaciones de variables |
| Icono | `icon/secondary` | Iconos en Default, Hovered, Pressed y Focused | Vinculaciones de variables |
| Icono | `icon/primary` | Iconos en Selected y Selected Focused, `Color=Default` | Vinculaciones de variables |
| Icono | `icon/indigo` | Iconos, Selected Indigo | Vinculaciones de variables |
| Icono | `icon/evergreen` | Iconos, Selected Evergreen | Vinculaciones de variables |
| Tipografía | `Text/Button/SM` | Etiqueta (`family/body`, `weight/semibold`, `size/12`, `line-height/16`) | Estilo de texto |
| Espaciado | `space/16` | Relleno horizontal | Vinculación de variable |
| Espaciado | `space/12` / `space/4` | Relleno vertical MD / SM | Vinculación de variable |
| Espaciado | `gap/sm` (8) | Espacio entre iconos y etiqueta | Vinculación de variable |

## Interacción

Estados observados: `Default`, `Hovered`, `Pressed`, `Focused`, `Selected` y el estado combinado de foco y selección están disponibles como variantes visuales para `Color=Default`.

Interpretación basada en evidencia: Al seleccionar una pestaña inactiva, esta pasa a `Selected` y la anterior vuelve a `Default`.

No verificado en Figma: interacciones de prototipo, transiciones, navegación por teclado entre pestañas, activación al recibir el foco o al confirmar, y estado deshabilitado (no existe en el conjunto).

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Existe un borde de foco `border/focus` de 2 px para pestañas inactivas y seleccionadas (`Color=Default`).
- La pestaña seleccionada se indica tanto con un borde inferior como con un cambio de color, no solo con el color. En el estado combinado de foco y selección no se muestra el borde inferior, y solo el color del texto y de los iconos la distingue del estado `Focused` no seleccionado.
- La etiqueta se puede ocultar con la propiedad booleana de mostrar texto, lo que puede dejar una pestaña solo con iconos.

Información de accesibilidad faltante (no verificada en Figma): roles ARIA y estado de selección, soporte de teclado, comportamiento con lector de pantalla, requisitos de nombre accesible para pestañas solo con iconos y cumplimiento de contraste.

## Guía de contenido

Observación verificada: La etiqueta ocupa una sola línea sin ajuste, usa `Text/Button/SM` y el texto de ejemplo "Tab name".

Recomendación: Usa etiquetas breves que nombren la vista o sección de destino.

## Ejemplos

### Pestaña activa, tamaño estándar

Configuración: `Color=Default`, `State=Selected`, `Size=MD`

Descripción: Pestaña de 40 px con borde inferior `border/selected`, etiqueta `text/secondary` y ambos iconos visibles.

Evidencia / Clasificación: Variante existente en Figma (`2189:5413`).

### Pestaña activa Indigo, tamaño compacto

Configuración: `Color=Indigo`, `State=Selected`, `Size=SM`

Descripción: Pestaña de 24 px con borde inferior, etiqueta e iconos en Indigo.

Evidencia / Clasificación: Variante existente en Figma (`2256:605`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: El conjunto no contiene variantes para estas combinaciones, por lo que no se pueden seleccionar en Figma:

- `Color=Indigo` o `Color=Evergreen` con cualquier estado distinto de `Selected`.
- `State=Selected Focused` con `Size=SM`, y `State=Focused Selected` con `Size=MD`.

## Aclaraciones pendientes

1. **Nombres inconsistentes en State.** El estado de foco y selección se llama `Selected Focused` en `MD` y `Focused Selected` en `SM`. Al cambiar `Size` en una instancia con foco y seleccionada no se conserva el estado, y el mapeo en código necesita dos nombres para un mismo estado. Confirma el nombre único previsto.
2. **Significado de la descripción del componente.** Todas las variantes indican "The New type is used for apps". Confirma a qué se refiere "New type" (por ejemplo, si existe un tipo de Tab anterior) y si limita dónde debe usarse este componente.
3. **Cobertura de interacción para Indigo y Evergreen.** Estos colores solo existen como `Selected`, sin variantes hover, presionado ni foco. Además, en el estado combinado de foco y selección no se muestra el indicador inferior. Confirma si es intencional o si faltan variantes.
4. **Peso tipográfico de la etiqueta.** `Text/Button/SM` declara peso 600, pero `weight/semibold` resuelve a "Medium". Confirma qué peso debe implementarse.
5. **Token del borde de foco.** `Focused` vincula `focus/width`, pero `Selected Focused` / `Focused Selected` usan un borde de 2 px sin vincular. Confirma que ambos deben usar `focus/width`.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2189:5340`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
