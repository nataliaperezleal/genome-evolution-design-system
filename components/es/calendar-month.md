---
component: "Month"
system: "Genome Evolution Design System"
type: "Conjunto de componentes (bloque interno)"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-3842"
last_updated: "2026-10-22"
tags:
  - "month"
  - "cell"
  - "building-block"
---

# Month

Sistema: Genome Evolution Design System

## Resumen del componente

Month (`.Month` en Figma) es una celda rectangular que muestra una etiqueta corta, como el nombre abreviado de un mes, disponible en dos tamaños y cuatro estados (Default, Focused, Selected, Disable), con los colores Evergreen e Indigo para los estados de foco y selección.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Month es una celda seleccionable pensada para componerse en una cuadrícula de meses, por ejemplo en un selector de mes. Esto se sustenta en el nombre del componente, en la etiqueta de ejemplo de tres caracteres "XXX" (la longitud del nombre abreviado de un mes), en los estados `Selected`, `Focused` y `Disable`, y en su similitud de estructura y tokens con `.Number`. El nombre en Figma comienza con un punto; en Figma, los componentes cuyo nombre comienza con un punto no se publican en la biblioteca, por lo que este componente está pensado para usarse dentro de otro componente. El componente contenedor no se referencia en este conjunto de componentes, y Figma no incluye una descripción de uso escrita.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Size | Small, Regular | Small |
| State | Default, Focused, Selected, Disable | Default |
| Color | Default, Evergreen, Indigo | Default |
| text (texto) | Texto libre | XXX |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. El valor deshabilitado se escribe `Disable`.

### Configuración predeterminada

`Size=Small`, `State=Default`, `Color=Default`, `text="XXX"`: una celda transparente de 42 × 24 px con una etiqueta `text/primary` centrada en `Text/Body/XS Strong`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 12 variantes. `Color` depende de `State`:

| State | Colores | Tamaños |
|-------|---------|---------|
| Default, Disable | Default | Small, Regular |
| Focused, Selected | Evergreen, Indigo | Small, Regular |

Interpretación basada en evidencia:

- `Default` para un mes disponible.
- `Selected` para el mes elegido (una celda sólida en color de marca).
- `Focused` para la celda que tiene el foco.
- `Disable` para un mes que no se puede elegir.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una celda consistente para presentar y seleccionar meses en una cuadrícula.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden distinguir los meses disponibles, con foco, seleccionados y no disponibles.

### Contexto típico

Interpretación basada en evidencia: Se usa dentro de un componente contenedor que organiza las celdas de mes en una cuadrícula, como indica el nombre con prefijo de punto (no publicado). El componente contenedor no se identifica en este conjunto de componentes.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Como celda de una cuadrícula de meses que admite selección simple (`Selected`).
- Para mostrar meses que no se pueden elegir (`Disable`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Como el componente no se publica en la biblioteca (nombre con prefijo de punto), no está disponible para insertarse directamente desde la biblioteca.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Celda | Obligatoria | Marco rectangular con esquinas `radius/4` y contenido recortado; lleva el relleno o el borde del estado. |
| Etiqueta | Obligatoria | Texto centrado definido mediante `text`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — Small | 42 × 24 px | Dimensiones de las variantes |
| Tamaño — Regular | 56 × 32 px | Dimensiones de las variantes |
| Radio de esquina | `radius/4` (4) | Vinculación de variable |
| Desbordamiento | Recortado | Contexto de diseño |
| Posición de la etiqueta | Centrada (posicionamiento absoluto) | Contexto de diseño |
| Tipografía de la etiqueta — Small | `Text/Body/XS Strong`: `family/body` (Open Sans), peso 600, `size/12`, `line-height/16` | Estilo de texto |
| Tipografía de la etiqueta — Regular | `Text/Body/SM Strong`: `family/body`, peso 600, `size/14`, `line-height/20` | Estilo de texto |
| Borde (`Focused`, `Selected`) | 1 px | Contexto de diseño |

El componente no usa auto layout; la celda mantiene un tamaño fijo independientemente de la longitud de la etiqueta.

## Semántica

Interpretación basada en evidencia:

- `Selected` marca el mes elegido; `Focused` marca la celda con foco; `Disable` marca un mes que no está disponible.
- `Color` aplica el acento de marca (Evergreen o Indigo) a los estados de foco y selección.

No verificado en Figma: elementos HTML, roles ARIA, semántica de seleccionado y deshabilitado, y anuncios en lectores de pantalla.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 12 variantes.

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Small | 42 × 24 px; `Text/Body/XS Strong`. | Todos los estados |
| Regular | 56 × 32 px; `Text/Body/SM Strong`. | Todos los estados |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Celda transparente; etiqueta `text/primary`. | `Color=Default` |
| Focused | Borde de 1 px `border/focus`, sin relleno; etiqueta `text/primary`. | Evergreen, Indigo |
| Selected | Relleno sólido de marca con un borde de 1 px del mismo color; etiqueta `text/inverse`. | Evergreen, Indigo |
| Disable | Celda transparente; etiqueta `text/disabled`. | `Color=Default` |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Sin acento. | Default, Disable |
| Evergreen | Relleno Evergreen en `Selected`. | Focused, Selected |
| Indigo | Relleno Indigo en `Selected`. | Focused, Selected |

`Focused` se ve igual en Evergreen e Indigo (`border/focus`).

### text

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Texto | Etiqueta que se muestra en la celda; "XXX" en todas las variantes. | Propiedad de texto |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Mes disponible. | Sin relleno ni borde. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 1 px `border/focus`. | Variantes de estado |
| Selected | Apariencia seleccionada. | Relleno sólido Evergreen o Indigo; etiqueta inversa. | Variantes de estado |
| Disable | Apariencia no disponible. | Etiqueta `text/disabled`. | Variantes de estado |

No hay variantes Hovered ni Pressed. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Texto | `text/primary` | Etiqueta en Default y Focused | Vinculación de variable |
| Texto | `text/inverse` | Etiqueta en Selected | Vinculación de variable |
| Texto | `text/disabled` | Etiqueta en Disable | Vinculación de variable |
| Superficie | `surface/evergreen/bold` | Relleno de Selected, Evergreen | Vinculación de variable |
| Superficie | `border/indigo` | Relleno de Selected, Indigo | Vinculación de variable |
| Borde | `border/evergreen`, `border/indigo` | Borde de Selected | Vinculación de variable |
| Borde | `border/focus` | Borde de Focused | Vinculación de variable |
| Radio | `radius/4` | Esquinas de la celda | Vinculación de variable |
| Tipografía | `Text/Body/XS Strong`, `Text/Body/SM Strong` | Etiqueta según Size | Estilos de texto |

Comportamiento actual: El relleno de Selected Indigo está vinculado a `border/indigo` (un token de borde), mientras que el relleno Evergreen usa `surface/evergreen/bold`; ambos se resuelven en los colores de marca esperados. El ancho de borde de 1 px no está vinculado a una variable.

## Interacción

Estados observados: Default, Focused, Selected y Disable. No existen variantes de hover ni de presión, y no se encontraron interacciones de prototipo.

No verificado en Figma: el comportamiento de selección, la navegación con teclado y cómo responden las celdas `Disable` a la interacción.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Selected` usa un relleno sólido y una etiqueta inversa, por lo que se diferencia de los demás estados por algo más que el tono.
- `Focused` usa un borde de 1 px, más delgado que los bordes de foco de 2 px que usan otros componentes inspeccionados de este sistema.
- `Disable` se indica solo con una etiqueta atenuada.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles (por ejemplo, nombres completos de mes para etiquetas abreviadas), anuncios de seleccionado y deshabilitado, y soporte de teclado.

## Pautas de contenido

Observación verificada: Todas las variantes usan el ejemplo de tres caracteres "XXX". La etiqueta ocupa una sola línea y está centrada, y la celda tiene un ancho fijo (42 px en Small, 56 px en Regular).

## Ejemplos

### Mes seleccionado

Configuración: `Size=Regular`, `State=Selected`, `Color=Evergreen`

Descripción: Celda sólida Evergreen con etiqueta inversa.

Evidencia / Clasificación: Variante existente en Figma.

### Mes con foco

Configuración: `Size=Small`, `State=Focused`, `Color=Indigo`

Descripción: Celda con borde de foco de 1 px.

Evidencia / Clasificación: Variante existente en Figma.

### Mes no disponible

Configuración: `Size=Regular`, `State=Disable`, `Color=Default`

Descripción: Celda con etiqueta atenuada.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `State=Default` o `State=Disable` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |
| `State=Focused` o `State=Selected` con `Color=Default` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
