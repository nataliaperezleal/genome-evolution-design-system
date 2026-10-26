---
component: "Number"
system: "Genome Evolution Design System"
type: "Conjunto de componentes (bloque interno)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-3757"
last_updated: "2026-10-22"
tags:
  - "number"
  - "cell"
  - "building-block"
---

# Number

Sistema: Genome Evolution Design System

## Resumen del componente

Number (`.Number` en Figma) es una celda cuadrada que muestra un número corto, disponible en dos tamaños y siete estados (Default, Conventions, Focused, Selected, Range, Null, Opaque), con los colores Evergreen e Indigo para los estados de foco, selección y rango.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Number es una celda numérica seleccionable pensada para componerse en una cuadrícula, como los días de un calendario. Esto se sustenta en el valor de ejemplo de dos dígitos "00", en los tamaños cuadrados de 24 px y 32 px, y en los estados `Selected`, `Range` (un relleno claro, como para las fechas entre el inicio y el fin de un rango), `Null` (una celda vacía), `Opaque` (un número atenuado) y `Conventions` (un número con tres puntos debajo). El nombre en Figma comienza con un punto; en Figma, los componentes cuyo nombre comienza con un punto no se publican en la biblioteca, por lo que este componente está pensado para usarse dentro de otro componente. El componente contenedor no se referencia en este conjunto de componentes, y Figma no incluye una descripción de uso escrita.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Size | Small, Regular | Small |
| State | Default, Conventions, Focused, Selected, Range, Null, Opaque | Default |
| Color | Default, Evergreen, Indigo | Default |
| number (texto) | Texto libre | 00 |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma.

### Configuración predeterminada

`Size=Small`, `State=Default`, `Color=Default`, `number="00"`: una celda transparente de 24 × 24 px con un número `text/primary` centrado en `Text/Body/XXS`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 20 variantes. `Color` depende de `State`:

| State | Colores | Tamaños |
|-------|---------|---------|
| Default, Conventions, Null, Opaque | Default | Small, Regular |
| Focused, Selected, Range | Evergreen, Indigo | Small, Regular |

Interpretación basada en evidencia:

- `Default` para un número disponible.
- `Selected` para el número elegido (una celda sólida en color de marca).
- `Range` para los números entre el inicio y el fin de un rango seleccionado (una celda sutil en color de marca).
- `Focused` para la celda que tiene el foco.
- `Opaque` para números que se muestran pero quedan en segundo plano.
- `Null` para una posición vacía en la cuadrícula; la celda conserva su tamaño y el número es transparente.
- `Conventions` para un número que tiene marcadores asociados (tres puntos debajo del número).

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una celda numérica consistente con todos los estados visuales necesarios para la selección simple y de rango en una cuadrícula.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden distinguir de un vistazo números disponibles, seleccionados, dentro de un rango, con foco, atenuados, vacíos y marcados.

### Contexto típico

Interpretación basada en evidencia: Se usa dentro de un componente contenedor que organiza las celdas en una cuadrícula, como indican el nombre con prefijo de punto (no publicado) y los estados de rango y nulo. El componente contenedor no se identifica en este conjunto de componentes.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Como celda de una cuadrícula numérica que admite selección simple (`Selected`) o selección de rango (`Range`).
- Para marcar números con información adicional (`Conventions`), atenuar números (`Opaque`) o dejar posiciones vacías (`Null`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Como el componente no se publica en la biblioteca (nombre con prefijo de punto), no está disponible para insertarse directamente desde la biblioteca.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Celda | Obligatoria | Marco cuadrado con esquinas `radius/4` y contenido recortado; lleva el relleno o el borde del estado. |
| Número | Obligatoria | Texto centrado definido mediante `number`. |
| Marcadores de convención | Presentes en `State=Conventions` | Tres puntos de 3 px, separados 2 px, centrados debajo del número. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — Small | 24 × 24 px | Dimensiones de las variantes |
| Tamaño — Regular | 32 × 32 px | Dimensiones de las variantes |
| Radio de esquina | `radius/4` (4) | Vinculación de variable |
| Desbordamiento | Recortado | Contexto de diseño |
| Posición del número | Centrado horizontal y verticalmente (posicionamiento absoluto) | Contexto de diseño |
| Tipografía del número — Small | `Text/Body/XXS`: `family/body` (Open Sans), peso 400, `size/10`, `line-height/14` | Estilo de texto |
| Tipografía del número — Regular | `Text/Body/SM`: `family/body`, peso 400, `size/14`, `line-height/20` | Estilo de texto |
| Marcadores de convención | Tres puntos de 3 × 3 px, espacio de 2 px, debajo del número | Dimensiones de capa |
| Borde (`Focused`, `Selected`) | 1 px | Contexto de diseño |

El componente no usa auto layout.

## Semántica

Interpretación basada en evidencia:

- `Selected` marca el valor elegido; `Range` marca los valores dentro de un rango seleccionado; `Focused` marca la celda con foco.
- `Opaque` marca valores visibles pero en segundo plano.
- `Null` representa una posición vacía.
- `Conventions` marca un valor con información asociada que se muestra como puntos; el significado de los puntos no está documentado en Figma.
- `Color` aplica el acento de marca (Evergreen o Indigo) a los estados de foco, selección y rango.

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, celda de cuadrícula o botón), semántica de seleccionado y deshabilitado, y anuncios en lectores de pantalla.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 20 variantes.

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Small | 24 × 24 px; `Text/Body/XXS`. | Todos los estados |
| Regular | 32 × 32 px; `Text/Body/SM`. | Todos los estados |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Celda transparente; número `text/primary`. | `Color=Default` |
| Conventions | Como Default, más tres puntos debajo del número. | `Color=Default` |
| Focused | Borde de 1 px `border/focus`, sin relleno; número `text/primary`. | Evergreen, Indigo |
| Selected | Relleno sólido de marca con un borde de 1 px del mismo color; número `text/inverse`. | Evergreen, Indigo |
| Range | Relleno `surface/evergreen/subtle` o `surface/indigo/subtle`; número `text/primary`. | Evergreen, Indigo |
| Null | Celda transparente; número en `palette/alpha/0` (totalmente transparente). | `Color=Default` |
| Opaque | Celda transparente; número `text/secondary`. | `Color=Default` |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Sin acento. | Default, Conventions, Null, Opaque |
| Evergreen | Relleno Evergreen en `Selected` y `Range`. | Focused, Selected, Range |
| Indigo | Relleno Indigo en `Selected` y `Range`. | Focused, Selected, Range |

`Focused` se ve igual en Evergreen e Indigo (`border/focus`).

### number

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Texto | Valor que se muestra en la celda; "00" en todas las variantes. | Propiedad de texto |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Número disponible. | Sin relleno ni borde. | Variantes de estado |
| Conventions | Número con marcadores. | Tres puntos debajo del número. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 1 px `border/focus`. | Variantes de estado |
| Selected | Apariencia seleccionada. | Relleno sólido Evergreen o Indigo; número inverso. | Variantes de estado |
| Range | Apariencia dentro del rango. | Relleno sutil Evergreen o Indigo. | Variantes de estado |
| Null | Posición vacía. | Número no visible. | Variantes de estado |
| Opaque | Número en segundo plano. | Número `text/secondary`. | Variantes de estado |

No hay variantes Hovered ni Pressed. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Texto | `text/primary` | Número en Default, Conventions, Focused, Range | Vinculación de variable |
| Texto | `text/inverse` | Número en Selected | Vinculación de variable |
| Texto | `text/secondary` | Número en Opaque | Vinculación de variable |
| Color | `palette/alpha/0` | Número en Null (transparente) | Vinculación de variable |
| Superficie | `surface/evergreen/bold`, `surface/indigo/bold` | Relleno de Selected (Small) | Vinculación de variable |
| Superficie | `border/evergreen`, `text/indigo` | Relleno de Selected (Regular, Evergreen e Indigo) | Vinculación de variable |
| Superficie | `surface/evergreen/subtle`, `surface/indigo/subtle` | Relleno de Range | Vinculación de variable |
| Borde | `border/evergreen`, `border/indigo`, `text/indigo` | Borde de Selected | Vinculación de variable |
| Borde | `border/focus` | Borde de Focused | Vinculación de variable |
| Ícono | `icon/primary`, `icon/secondary` | Marcadores de convención | Vinculación de variable |
| Radio | `radius/4` | Esquinas de la celda | Vinculación de variable |
| Tipografía | `Text/Body/XXS`, `Text/Body/SM` | Número según Size | Estilos de texto |
| Tipografía | `Body/small/regular`, `Body/medium/regular` | Número en Null (Small, Regular) | Estilos de texto |

Comportamiento actual:

- En `Size=Regular`, el relleno de Selected está vinculado a `border/evergreen` (Evergreen) y a `text/indigo` (Indigo), mientras que `Size=Small` usa `surface/evergreen/bold` y `surface/indigo/bold`. Los colores resultantes son los mismos.
- El borde de Selected Indigo Regular está vinculado a `text/indigo`; Small usa `border/indigo`.
- El estado Null usa los estilos de texto `Body/small/regular` y `Body/medium/regular` (variables `font/...`), a diferencia de los demás estados, que usan estilos `Text/Body/...`. El número es transparente, por lo que esto no tiene efecto visible.
- El ancho de borde de 1 px no está vinculado a una variable.

## Interacción

Estados observados: Default, Conventions, Focused, Selected, Range, Null y Opaque. No existen variantes de hover ni de presión, y no se encontraron interacciones de prototipo.

No verificado en Figma: el comportamiento de selección, cómo se inicia y finaliza un rango, la navegación con teclado y si las celdas `Opaque` o `Null` son interactivas.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Selected` usa un relleno sólido y un número inverso, por lo que se diferencia de los demás estados por algo más que el tono.
- `Range` se distingue solo por un relleno sutil.
- `Focused` usa un borde de 1 px, más delgado que los bordes de foco de 2 px que usan otros componentes inspeccionados de este sistema.
- Las celdas Small usan un número de 10 px (`size/10`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles de las celdas, anuncios de los valores seleccionados y dentro del rango, significado de los marcadores de convención para las tecnologías de asistencia y soporte de teclado.

## Pautas de contenido

Observación verificada: Todas las variantes usan el valor de ejemplo "00", un número de dos dígitos. El número ocupa una sola línea y está centrado.

## Ejemplos

### Valor seleccionado

Configuración: `Size=Regular`, `State=Selected`, `Color=Evergreen`

Descripción: Celda sólida Evergreen con número inverso.

Evidencia / Clasificación: Variante existente en Figma.

### Valor dentro de un rango

Configuración: `Size=Regular`, `State=Range`, `Color=Indigo`

Descripción: Celda Indigo sutil con número primario.

Evidencia / Clasificación: Variante existente en Figma.

### Valor con marcadores

Configuración: `Size=Small`, `State=Conventions`, `Color=Default`

Descripción: Número con tres puntos debajo.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `State=Default`, `Conventions`, `Null` u `Opaque` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |
| `State=Focused`, `Selected` o `Range` con `Color=Default` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
