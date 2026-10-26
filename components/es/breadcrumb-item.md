---
component: "BreadcrumbItem"
system: "Genome Evolution Design System"
type: "Conjunto de componentes (bloque interno)"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2998-19004"
last_updated: "2026-10-22"
tags:
  - "breadcrumb"
  - "navigation"
  - "building-block"
---

# BreadcrumbItem

Sistema: Genome Evolution Design System

## Resumen del componente

BreadcrumbItem es un paso individual de una ruta de navegación (breadcrumb), disponible como indicador de desbordamiento (`Overflow`), nivel intermedio (`Level`) o página actual (`Current`), cada uno con los estados Default, Hovered, Pressed, Focused y Disabled.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: BreadcrumbItem es el bloque con el que se compone una ruta de navegación. Esto se sustenta en el nombre del componente, en los valores de `Item` `Overflow` (una elipsis "…" seguida de `chevron-right`), `Level` (una etiqueta seguida de `chevron-right`) y `Current` (una etiqueta sin chevron), y en las variantes de estado interactivo. El nombre en Figma `.BreadcrumbItem` comienza con un punto; en Figma, los componentes cuyo nombre comienza con un punto no se publican en la biblioteca, por lo que este componente está pensado para usarse dentro de otro componente y no para insertarse directamente. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Item | Overflow, Level, Current | Overflow |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Existen todas las combinaciones de `Item` y `State` (15 variantes). El componente no expone una propiedad de texto; la etiqueta ("Text") y la elipsis ("…") se editan sobrescribiendo directamente la capa de texto.

### Configuración predeterminada

`Item=Overflow`, `State=Default`: una elipsis ("…") en `Text/Button/MD` (`text/primary`) seguida de un `chevron-right` de 12 px en `icon/secondary`, sin fondo.

### Uso típico

Observación verificada: El conjunto de componentes contiene 15 variantes: tres valores de `Item`, cada uno en cinco estados. Todas las variantes tienen 36 px de alto, 8 px de relleno y un radio de esquina de 4 px.

Interpretación basada en evidencia:

- `Level` representa un paso anterior de la ruta; su chevron lo separa del siguiente elemento.
- `Current` representa el último paso (la ubicación actual); no tiene chevron y usa un estilo de etiqueta más fuerte (`Text/Button/MD`, `text/primary`) que `Level` (`Text/Body/SM`, `text/secondary`).
- `Overflow` representa pasos intermedios contraídos, mostrados como "…".

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un elemento consistente y con estados para construir rutas de navegación, con apariencias distintas para los niveles anteriores, la ubicación actual y los pasos contraídos.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden ver dónde se encuentran en una jerarquía e identificar los niveles anteriores.

### Contexto típico

Interpretación basada en evidencia: Se usa dentro de un componente de breadcrumb, como indica el nombre con prefijo de punto (no publicado). El componente contenedor no se referencia en este conjunto de componentes.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- `Item=Level` para cada nivel anterior de la jerarquía.
- `Item=Current` para el elemento final que representa la ubicación actual.
- `Item=Overflow` para representar niveles intermedios contraídos.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Como el componente no se publica en la biblioteca (nombre con prefijo de punto), no está disponible para insertarse directamente desde la biblioteca.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco de auto layout que lleva el fondo del estado o el borde de foco. |
| Etiqueta | Obligatoria | Capa de texto: "…" en `Overflow`, "Text" en `Level` y `Current`. |
| Chevron (`chevron-right`) | Presente en `Overflow` y `Level` | Ícono separador de 12 px después de la etiqueta. No está presente en `Current`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Alto | 36 px (todas las variantes) | Dimensiones de las variantes |
| Ancho (con contenido de muestra) | 48 px (`Overflow`), 64 px (`Level`), 46 px (`Current`) | Dimensiones de las variantes |
| Relleno | `space/8` (8) | Vinculación de variable |
| Espacio entre etiqueta y chevron | `gap/sm` (8) | Vinculación de variable |
| Radio de esquina | `radius/4` (4) | Vinculación de variable |
| Tamaño del chevron | 12 × 12 px | Dimensiones de capa |
| Tipografía de la etiqueta — `Overflow`, `Current` | `Text/Button/MD`: `family/body` (Open Sans), `weight/semibold` (600), `size/14`, `line-height/16` | Estilo de texto |
| Tipografía de la etiqueta — `Level` | `Text/Body/SM`: `family/body`, `weight/regular` (400), `size/14`, `line-height/20` | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste) | Contexto de diseño |
| Borde de foco | 2 px `border/focus` (ancho no vinculado a una variable) | Contexto de diseño |

## Semántica

Interpretación basada en evidencia: Los valores de `Item` describen la posición del elemento en una jerarquía: nivel anterior (`Level`), ubicación actual (`Current`) o niveles contraídos (`Overflow`). El chevron es un separador visual que apunta al siguiente nivel. El estilo de etiqueta más fuerte de `Current` distingue la ubicación actual de los niveles anteriores.

No verificado en Figma: elementos HTML, roles o atributos ARIA (por ejemplo, para marcar la página actual), comportamiento de enlace y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Separador | `chevron-right`, 12 px, después de la etiqueta en `Overflow` y `Level` | Nombre de capa, dimensiones |

Color del chevron por variante: `icon/secondary` en `Overflow / Default`; `icon/primary` en `Overflow` Hovered, Pressed y Focused y en `Level` Default, Hovered, Pressed y Focused; `icon/disabled` en Disabled.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 15 variantes.

### Item

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Overflow | Etiqueta "…" (`Text/Button/MD`, `text/primary`) más `chevron-right`. | 5 estados |
| Level | Etiqueta "Text" (`Text/Body/SM`, `text/secondary`) más `chevron-right`. | 5 estados |
| Current | Etiqueta "Text" (`Text/Button/MD`, `text/primary`); sin chevron. | 5 estados |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Sin fondo. | Todos los elementos |
| Hovered | Fondo `background/interactive/hovered`. | Todos los elementos |
| Pressed | Fondo `background/interactive/pressed`. | Todos los elementos |
| Focused | Borde de 2 px `border/focus`; sin fondo. | Todos los elementos |
| Disabled | Etiqueta `text/disabled`; chevron `icon/disabled`; sin fondo. | Todos los elementos |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Sin fondo. En `Overflow`, el chevron usa `icon/secondary`. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | `background/interactive/hovered`; chevron `icon/primary`. | Variantes de estado |
| Pressed | Apariencia al presionar. | `background/interactive/pressed`; chevron `icon/primary`. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus` alrededor del elemento. | Variantes de estado |
| Disabled | Apariencia no disponible. | Etiqueta `text/disabled`; chevron `icon/disabled`. | Variantes de estado |

`Current` tiene los mismos cinco estados que los demás elementos. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/interactive/hovered` | Hovered | Vinculación de variable |
| Fondo | `background/interactive/pressed` | Pressed | Vinculación de variable |
| Borde | `border/focus` | Focused | Vinculación de variable |
| Texto | `text/primary` | Etiqueta de `Overflow` y `Current` | Vinculación de variable |
| Texto | `text/secondary` | Etiqueta de `Level` | Vinculación de variable |
| Texto | `text/disabled` | Etiqueta en Disabled | Vinculación de variable |
| Ícono | `icon/primary`, `icon/secondary`, `icon/disabled` | Chevron (ver Iconografía) | Vinculación de variable |
| Espaciado | `space/8`, `gap/sm` | Relleno y espacio | Vinculación de variable |
| Radio | `radius/4` | Radio de esquina | Vinculación de variable |
| Tipografía | `Text/Button/MD`, `Text/Body/SM` | Etiqueta según el elemento | Estilos de texto |

El ancho de 2 px del borde de foco es un valor fijo y no está vinculado a `focus/width`.

## Interacción

Estados observados: `Default`, `Hovered`, `Pressed`, `Focused` y `Disabled` existen para los tres elementos, incluido `Current`.

No verificado en Figma: el comportamiento de navegación, qué ocurre al activar `Overflow` (por ejemplo, mostrar los niveles contraídos), si `Current` es interactivo, la interacción con teclado y las interacciones de prototipo. No se encontraron interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un borde visible de 2 px `border/focus` en todos los elementos.
- `Current` se distingue de `Level` por el peso (600 frente a 400), el color (`text/primary` frente a `text/secondary`) y la ausencia de chevron, por lo que la ubicación actual no se indica solo mediante el color.
- `Disabled` cambia los colores de la etiqueta y del chevron.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles (incluido el del elemento de desbordamiento "…"), indicación de la página actual a las tecnologías de asistencia, el papel del chevron para los lectores de pantalla y el soporte de teclado.

## Pautas de contenido

Observación verificada: Las etiquetas ocupan una sola línea y usan "Text" como contenido de muestra; `Overflow` usa una elipsis ("…"). El componente no tiene propiedad de texto, por lo que las etiquetas se cambian sobrescribiendo la capa de texto.

## Ejemplos

### Nivel anterior

Configuración: `Item=Level`, `State=Default`

Descripción: Etiqueta en color secundario seguida de un chevron.

Evidencia / Clasificación: Variante existente en Figma.

### Ubicación actual

Configuración: `Item=Current`, `State=Default`

Descripción: Etiqueta seminegrita en color primario, sin chevron.

Evidencia / Clasificación: Variante existente en Figma.

### Niveles contraídos, con foco

Configuración: `Item=Overflow`, `State=Focused`

Descripción: Elipsis y chevron con borde de foco.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
