---
component: "Radio Button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-2043"
last_updated: "2026-10-23"
tags:
  - "form"
  - "selection"
  - "radio"
---

# Radio Button

Sistema: Genome Evolution Design System

## Resumen del componente

Radio Button es un control de selección circular de 20px con etiqueta opcional, disponible en tres colores para el estado seleccionado y en cinco estados de interacción.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un control de formulario para elegir una opción dentro de un conjunto. El component set (nodo de Figma `2190:2043`) consta de un círculo de 20px, que muestra un punto interior relleno cuando `Selected=On`, y una etiqueta de 12px. En Figma no hay una descripción escrita definida para Radio Button.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Evergreen, Indigo | Default |
| State | Enabled, Hovered, Pressed, Focused, Disabled | Disabled (ver Aclaraciones pendientes) |
| Selected | Off, On | Off |
| showLabel | true, false | true |
| label | Texto | "Label" |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Default`, `State=Disabled`, `Selected=Off`, `showLabel=true` y `label="Label"`. Esto corresponde a la variante `2190:2057`, la variante superior izquierda del component set. Como resultado, una instancia nueva está deshabilitada por defecto; cambia `State` a `Enabled` para obtener un radio button utilizable.

### Uso típico

Observaciones verificadas:

- `Selected=Off` existe solo para `Color=Default`; el radio sin seleccionar se ve igual sin importar el color.
- `Color=Evergreen` y `Color=Indigo` existen solo con `Selected=On` y en los estados `Enabled`, `Hovered`, `Pressed` y `Focused`.
- `State=Disabled` existe solo para `Color=Default`, en ambos valores de `Selected`.
- `Hovered` y `Pressed` muestran un halo circular alrededor del control; `Focused` muestra un anillo verde.

Interpretación basada en evidencia:

- Usa radio buttons en grupos donde se puede seleccionar exactamente una opción.
- Usa `Color=Evergreen` o `Color=Indigo` para que el estado seleccionado coincida con el tema del producto, y `Color=Default` para un estado seleccionado neutro.

Recomendación: define siempre `State=Enabled` al colocar una instancia nueva, salvo que la opción no esté disponible.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan elegir una sola opción dentro de un conjunto pequeño de opciones mutuamente excluyentes, con todas las opciones visibles.

### Resultado esperado

Interpretación basada en evidencia: el usuario ve todas las opciones disponibles, selecciona una y puede ver cuál está seleccionada.

### Contexto típico

Interpretación basada en evidencia: formularios, configuraciones, filtros y diálogos con opciones mutuamente excluyentes.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de la estructura del componente y de la propiedad `Selected`:

- Para permitir que los usuarios elijan exactamente una opción de una lista breve.
- Cuando todas las opciones deben estar visibles a la vez.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Radio Button. Solo como recomendaciones:

- Para permitir selecciones múltiples, usa una casilla de verificación.
- Para una sola configuración de encendido/apagado, considera un switch o una casilla de verificación.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Control de radio | Obligatoria | Círculo de 20px; muestra un punto interior cuando `Selected=On`. La capa se llama `check`. |
| Halo / anillo de foco | Depende del estado | Círculo detrás del control en `Hovered` y `Pressed` (unos 32px) y un anillo en `Focused` (unos 36px). |
| Etiqueta | Opcional (`showLabel`, `label`) | Texto de 12px a la derecha del control. Texto por defecto: "Label". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño del control | 20 × 20px | Medición directa |
| Tamaño del componente | 59 × 20px (con "Label") | Medición directa |
| Espacio entre control y etiqueta | 8px | `gap/sm` |
| Radio del contenedor | 4px | `radius/4` |
| Padding | 0px | `space/0` (variantes seleccionadas en Enabled) |
| Halo de hover y presionado | Unos 32px de diámetro; se extiende 6px fuera del control de 20px | Medición directa |
| Anillo de foco | Unos 36px de diámetro; se extiende 8px fuera del control de 20px | Medición directa |
| Alineación de la etiqueta | Centrada verticalmente; una sola línea | Auto layout de Figma |

El halo y el anillo de foco se extienden más allá de los 20px de alto del componente, por lo que pueden superponerse a elementos cercanos.

## Semántica

Interpretación basada en evidencia:

- `Selected=On` representa la opción elegida en un grupo; `Selected=Off` representa una opción disponible pero no elegida.
- `Color` cambia el color del indicador de selección; no hay un significado semántico documentado más allá del tema.
- `Disabled` representa una opción que no se puede elegir.

No verificado en Figma: roles de radio y de grupo de radios, agrupación y etiquetado, `aria-checked` y comportamiento con teclado.

## Iconografía

El control de radio se dibuja como un gráfico vectorial (capa `check`) con recursos separados para cada variante. No se expone como propiedad de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 18 variantes. Se inspeccionaron todas las variantes. Los nombres de las propiedades booleanas y de texto se listan tal como los expone el MCP de Figma.

| Color | Selected | Estados disponibles |
|-------|----------|---------------------|
| Default | Off | Enabled, Hovered, Pressed, Focused, Disabled |
| Default | On | Enabled, Hovered, Pressed, Focused, Disabled |
| Evergreen | On | Enabled, Hovered, Pressed, Focused |
| Indigo | On | Enabled, Hovered, Pressed, Focused |

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Indicador de selección gris neutro; único color con versión sin seleccionar y deshabilitada. | Valor por defecto |
| Evergreen | Indicador de selección verde. | Solo `Selected=On` |
| Indigo | Indicador de selección morado. | Solo `Selected=On` |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Enabled | Control en reposo. | Todos los colores |
| Hovered | Halo claro detrás del control. | Todos los colores; `background/interactive/hovered` |
| Pressed | Halo más oscuro detrás del control. | Todos los colores; `background/interactive/pressed` |
| Focused | Anillo de foco verde alrededor del control. | Todos los colores; `border/focus`, `focus/width` |
| Disabled | Control y etiqueta atenuados. | Solo `Color=Default`; `icon/disabled`, `text/disabled`; valor por defecto |

### Selected

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Off | Círculo vacío. | Valor por defecto; solo `Color=Default` |
| On | Círculo con un punto interior relleno con el color del tema de `Color`. | Todos los colores |

### showLabel / label

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| showLabel | Muestra la etiqueta. | Por defecto: `true` |
| label | Texto de la etiqueta. | Por defecto: "Label" |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Enabled | En reposo | Control en su color normal; etiqueta `text/primary` | Variantes `2190:2044`, `2190:2098`, `2190:2055`, `2190:2085` |
| Hovered | Puntero sobre el control | Halo de unos 32px (`background/interactive/hovered`) | Variantes `2190:2046`, `2190:2100`, `2190:2059`, `2190:2087` |
| Pressed | En activación | Halo de unos 32px (`background/interactive/pressed`) | Variantes `2190:2049`, `2190:2103`, `2190:2062`, `2190:2090` |
| Focused | Con foco | Anillo de unos 36px (`border/focus`, 2px) | Variantes `2190:2052`, `2190:2108`, `2240:118`, `2240:123` |
| Disabled | No disponible | Control atenuado; etiqueta `text/disabled` | Variantes `2190:2057`, `2190:2106` |

Estos son variantes de estado visuales. Las transiciones y las condiciones que activan cada estado no están definidas en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set. El control es un gráfico vectorial, por lo que no se inspeccionó a qué capa exacta está vinculada cada variable de color.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — ícono | `icon/primary` | Usado por el component set (control en `Color=Default`) | Variables de Figma |
| Color — ícono | `icon/evergreen`, `icon/selected` | Usados por el component set (indicador seleccionado Evergreen; ambos se resuelven a #297a39) | Variables de Figma |
| Color — ícono | `icon/indigo` | Usado por el component set (indicador seleccionado Indigo) | Variables de Figma |
| Color — ícono | `icon/disabled` | Usado por el component set (control en `Disabled`) | Variables de Figma |
| Color — superficie | `background/interactive/hovered`, `background/interactive/pressed` | Halo (`Hovered`, `Pressed`) | Variables de Figma |
| Color — borde | `border/focus` | Anillo de foco | Variables de Figma |
| Ancho de borde | `focus/width` | Anillo de foco (2px) | Variables de Figma |
| Color — texto | `text/primary`, `text/disabled` | Etiqueta | Variables de Figma |
| Espaciado | `gap/sm`, `space/0` | Espacio y padding | Variables de Figma |
| Radio | `radius/4` | Radio del contenedor | Variables de Figma |
| Tipografía | `Text/Body/XS` | Etiqueta (12/16) | Estilo de texto de Figma |

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hovered`, `Pressed`, `Focused` y `Disabled`.
- Interpretación basada en evidencia: al seleccionar un radio button se selecciona esa opción y se deseleccionan las demás de su grupo. El comportamiento del grupo y si la etiqueta forma parte del área de clic no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El texto de la etiqueta (`text/primary`) tiene 12,78:1 sobre blanco; la etiqueta mide 12px.
- El color del control sin seleccionar (`icon/primary`) tiene 5,45:1 sobre blanco.
- El estado seleccionado se muestra con un punto interior, no solo con color.
- `Focused` muestra un anillo visible de 2px (`border/focus`, 3,63:1 sobre blanco).
- El halo de hover (`background/interactive/hovered`) apenas se distingue del blanco (cerca de 1,06:1).
- El control mide 20px; el área de clic no está definida.

Información de accesibilidad faltante: semántica de grupo de radios, etiqueta del grupo, navegación con teclado entre opciones y tamaño del área de clic.

## Pautas de contenido

Observaciones verificadas:

- El texto de etiqueta por defecto es "Label", un texto de ejemplo.
- La etiqueta ocupa una sola línea.

Recomendaciones:

- Escribe etiquetas breves que describan claramente cada opción.
- Mantén una estructura paralela en las etiquetas de las opciones de un grupo.

## Ejemplos

### Opción sin seleccionar

Configuración: `Color=Default`, `State=Enabled`, `Selected=Off`

Descripción: una opción disponible que no está seleccionada.

Evidencia / clasificación: configuración existente en Figma (variante `2190:2044`).

### Opción seleccionada (tema Evergreen)

Configuración: `Color=Evergreen`, `State=Enabled`, `Selected=On`

Descripción: la opción seleccionada de un grupo, con el tema Evergreen.

Evidencia / clasificación: configuración existente en Figma (variante `2190:2055`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: el conjunto de variantes no tiene variantes `Selected=Off` para `Evergreen` ni `Indigo`, ni variantes `Disabled` para `Evergreen` ni `Indigo`, por lo que estas combinaciones no se pueden seleccionar en Figma. No está documentado si se excluyen de forma intencional.

## Aclaraciones pendientes

1. Valor por defecto deshabilitado. La variante por defecto es `State=Disabled`, por lo que cada instancia nueva comienza deshabilitada. Confirmar si `State=Enabled` debería ser el valor por defecto (moviendo su variante a la esquina superior izquierda del component set).
2. Variantes con tema sin seleccionar y deshabilitadas. `Evergreen` e `Indigo` no tienen variantes `Selected=Off` ni `Disabled`, por lo que una instancia Evergreen o Indigo no se puede cambiar a sin seleccionar o deshabilitada sin cambiar también `Color`. Confirmar si deben agregarse estas variantes.
3. Desbordamiento del halo y del anillo de foco. Los indicadores de hover, presionado y foco se extienden 6–8px fuera del componente de 20px. Confirmar el espaciado necesario alrededor de los radio buttons y si el área de clic debe coincidir con el halo.
4. Visibilidad del hover. El halo de hover (`background/interactive/hovered`) es casi invisible sobre fondos blancos. Confirmar si se necesita un color de hover más visible.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2190:2043`) el 2026-10-23.
