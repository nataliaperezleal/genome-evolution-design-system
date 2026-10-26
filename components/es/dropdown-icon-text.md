---
component: "Dropdown icon + text"
system: "Genome Evolution Design System"
type: "Conjunto de componentes (bloque interno)"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2145-444"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "list-item"
  - "building-block"
---

# Dropdown icon + text

Sistema: Genome Evolution Design System

## Resumen del componente

Dropdown icon + text (`.Dropdown icon + text` en Figma) es una fila de opción de 163 px de ancho con un ícono inicial opcional, una etiqueta de texto y un ícono final opcional, disponible en tres tamaños y seis estados (Default, Hovered, Pressed, Focused, Selected, Disable).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Dropdown icon + text es un elemento de opción para una lista desplegable. Esto se sustenta en el nombre del componente, en la etiqueta de ejemplo "Item list", en el estado `Selected`, en los estados interactivos y en el diseño en fila con íconos inicial y final. El nombre en Figma comienza con un punto; en Figma, los componentes cuyo nombre comienza con un punto no se publican en la biblioteca, por lo que este componente está pensado para usarse dentro de otro componente. El componente contenedor no se referencia en este conjunto de componentes, y Figma no incluye una descripción de uso escrita.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Size | LG, MD, SM | LG |
| State | Default, Hovered, Pressed, Focused, Selected, Disable | Default |
| text (texto) | Texto libre | Item list |
| showLeftIcon (booleano) + leftIcon (intercambio de instancia) | true, false / cualquier ícono | true / add |
| showRightIcon (booleano) + rightIcon (intercambio de instancia) | true, false / cualquier ícono | true / chevron-right |
| showSmallLeftIcon (booleano) + smallLeftIcon (intercambio de instancia) | true, false / cualquier ícono | true / add |
| showSmallRightIcon (booleano) + smallRightIcon (intercambio de instancia) | true, false / cualquier ícono | true / chevron-right |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Existen todas las combinaciones de `Size` y `State` (18 variantes). El valor deshabilitado se escribe `Disable`.

Comportamiento actual: Las propiedades de ícono están separadas por tamaño. `showLeftIcon`, `leftIcon`, `showRightIcon` y `rightIcon` controlan los íconos de 16 px en `LG` y `MD`; `showSmallLeftIcon`, `smallLeftIcon`, `showSmallRightIcon` y `smallRightIcon` controlan los íconos de 12 px en `SM`.

### Configuración predeterminada

`Size=LG`, `State=Default`, `text="Item list"`, ambos íconos visibles: una fila de 163 × 44 px sobre `background/canvas` con un ícono `add`, la etiqueta y un ícono `chevron-right`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 18 variantes: seis estados en cada uno de los tres tamaños. Todos los tamaños comparten el mismo ancho de 163 px; el alto y el relleno cambian según el tamaño.

Interpretación basada en evidencia:

- Use `Default` para una opción disponible, `Selected` para la opción elegida y `Disable` para una opción no disponible.
- `Hovered`, `Pressed` y `Focused` representan la respuesta interactiva de la opción.
- Elija `LG`, `MD` o `SM` según el tamaño de la lista contenedora.
- Los íconos predeterminados (`add`, `chevron-right`) se pueden ocultar o intercambiar.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una fila de opción consistente con todos los estados de interacción y selección para construir listas desplegables.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden recorrer las opciones, ver cuál está seleccionada y cuáles no están disponibles, y recibir respuesta visual al interactuar.

### Contexto típico

Interpretación basada en evidencia: Se usa dentro de una lista o menú desplegable, como indican el nombre y el prefijo de punto (no publicado). El componente contenedor no se identifica en este conjunto de componentes.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Como fila de opción en una lista desplegable, con o sin íconos inicial y final.
- Para mostrar la opción seleccionada (`Selected`) o las opciones no disponibles (`Disable`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Como el componente no se publica en la biblioteca (nombre con prefijo de punto), no está disponible para insertarse directamente desde la biblioteca.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila horizontal de auto layout de 163 px de ancho; lleva el fondo del estado o el borde de foco. |
| Ícono inicial | Opcional | Ícono de 16 px (`LG`, `MD`) o 12 px (`SM`) antes de la etiqueta; `add` por defecto. |
| Etiqueta | Obligatoria | Texto definido mediante `text`. |
| Ícono final | Opcional | Ícono de 16 px (`LG`, `MD`) o 12 px (`SM`) al final de la fila; `chevron-right` por defecto. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 163 px (todas las variantes) | Dimensiones de las variantes |
| Alto | 44 px (LG), 36 px (MD), 22 px (SM) | Dimensiones de las variantes |
| Relleno — LG | `space/16` horizontal, `space/12` vertical | Vinculaciones de variables |
| Relleno — MD | `space/8` | Vinculación de variable |
| Relleno — SM | `space/4` | Vinculación de variable |
| Espacio | `gap/sm` (8) | Vinculación de variable |
| Tamaño de ícono | 16 px (LG, MD), 12 px (SM) | Dimensiones de capa |
| Tipografía de la etiqueta — LG, MD | `Text/Body/SM`: `family/body` (Open Sans), peso 400, `size/14`, `line-height/20` | Estilo de texto |
| Tipografía de la etiqueta — SM | `Text/Body/XXS`: `family/body`, peso 400, `size/10`, `line-height/14` | Estilo de texto |
| Posición del ícono final | Final de la fila | Contexto de diseño |
| Radio de esquina | Ninguno | Contexto de diseño |
| Borde de foco | `focus/width` (2 px) `border/focus` | Vinculaciones de variables |

Comportamiento actual: El dimensionamiento de la etiqueta difiere entre estados. En `Default` y `Disable`, la etiqueta ocupa el ancho disponible; en `Hovered` mantiene su ancho natural; en `Pressed`, `Focused` y `Selected` de `LG` y `MD`, mantiene su ancho natural hasta un máximo de 148 px. Las etiquetas no se ajustan en varias líneas en ningún estado, y no se define truncado (puntos suspensivos).

## Semántica

Interpretación basada en evidencia:

- Cada fila es una opción seleccionable; `Selected` marca la opción elegida y `Disable` una opción no disponible.
- El `chevron-right` final sugiere navegación o un nivel anidado; su significado no está documentado en Figma.

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, opción o elemento de menú), semántica de seleccionado y deshabilitado, y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Ícono inicial — LG, MD | `add`, 16 px; intercambiable mediante `leftIcon`; se activa con `showLeftIcon` | Propiedad de intercambio de instancia |
| Ícono final — LG, MD | `chevron-right`, 16 px; intercambiable mediante `rightIcon`; se activa con `showRightIcon` | Propiedad de intercambio de instancia |
| Ícono inicial — SM | `add`, 12 px; intercambiable mediante `smallLeftIcon`; se activa con `showSmallLeftIcon` | Propiedad de intercambio de instancia |
| Ícono final — SM | `chevron-right`, 12 px; intercambiable mediante `smallRightIcon`; se activa con `showSmallRightIcon` | Propiedad de intercambio de instancia |

Los íconos usan `icon/primary`, e `icon/disabled` en `Disable`.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 18 variantes.

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| LG | 44 px de alto; relleno de 16/12 px; íconos de 16 px; `Text/Body/SM`. | Predeterminado |
| MD | 36 px de alto; relleno de 8 px; íconos de 16 px; `Text/Body/SM`. | — |
| SM | 22 px de alto; relleno de 4 px; íconos de 12 px; `Text/Body/XXS`. | — |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | `background/canvas`; etiqueta `text/primary`. | Todos los tamaños |
| Hovered | `background/interactive/hovered`. | Todos los tamaños |
| Pressed | `background/interactive/pressed`. | Todos los tamaños |
| Focused | `background/canvas` con borde de 2 px `border/focus`. | Todos los tamaños |
| Selected | `background/selected`. | Todos los tamaños |
| Disable | `background/disabled`; etiqueta `text/disabled`; íconos `icon/disabled`. | Todos los tamaños |

### text, íconos

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| text | Etiqueta de la opción; "Item list" en todas las variantes. | Propiedad de texto |
| showLeftIcon / leftIcon | Ícono inicial de 16 px en LG y MD (`add` por defecto). | Predeterminado `true` |
| showRightIcon / rightIcon | Ícono final de 16 px en LG y MD (`chevron-right` por defecto). | Predeterminado `true` |
| showSmallLeftIcon / smallLeftIcon | Ícono inicial de 12 px en SM (`add` por defecto). | Predeterminado `true` |
| showSmallRightIcon / smallRightIcon | Ícono final de 12 px en SM (`chevron-right` por defecto). | Predeterminado `true` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Opción disponible. | `background/canvas`. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | `background/interactive/hovered`. | Variantes de estado |
| Pressed | Apariencia al presionar. | `background/interactive/pressed`. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus`. | Variantes de estado |
| Selected | Apariencia seleccionada. | `background/selected`. | Variantes de estado |
| Disable | Apariencia no disponible. | Fondo, etiqueta e íconos deshabilitados. | Variantes de estado |

Los colores de la etiqueta y de los íconos se mantienen en `text/primary` e `icon/primary` en todos los estados excepto `Disable`. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Default, Focused | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Hovered, Pressed | Vinculación de variable |
| Fondo | `background/selected` | Selected | Vinculación de variable |
| Fondo | `background/disabled` | Disable | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Focused | Vinculación de variable |
| Texto | `text/primary`, `text/disabled` | Etiqueta | Vinculación de variable |
| Ícono | `icon/primary`, `icon/disabled` | Íconos | Vinculación de variable |
| Espaciado | `space/16`, `space/12`, `space/8`, `space/4`, `gap/sm` | Relleno y espacio | Vinculación de variable |
| Tipografía | `Text/Body/SM`, `Text/Body/XXS` | Etiqueta según el tamaño | Estilos de texto |

## Interacción

Estados observados: Default, Hovered, Pressed, Focused, Selected y Disable en todos los tamaños. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: el comportamiento de selección, qué hace el chevron final y la navegación con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un borde visible de 2 px `border/focus`.
- `Selected` se indica solo mediante un fondo sutil (`background/selected`); la etiqueta y los íconos no cambian.
- Las etiquetas de `SM` miden 10 px (`size/10`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para el significado de los íconos, anuncios de seleccionado y deshabilitado, y soporte de teclado.

## Pautas de contenido

Observaciones verificadas: Todas las variantes usan la etiqueta de ejemplo "Item list". Las etiquetas ocupan una sola línea; el ancho de la fila es fijo de 163 px y no se define truncado para etiquetas largas.

## Ejemplos

### Opción seleccionada

Configuración: `Size=MD`, `State=Selected`

Descripción: Fila de opción con `background/selected`.

Evidencia / Clasificación: Variante existente en Figma.

### Opción solo con texto

Configuración: `Size=LG`, `State=Default`, `showLeftIcon=false`, `showRightIcon=false`

Descripción: Fila de opción solo con la etiqueta.

Evidencia / Clasificación: Configuración admitida por las propiedades de ícono.

### Opción compacta no disponible

Configuración: `Size=SM`, `State=Disable`

Descripción: Fila de opción pequeña con colores deshabilitados.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| Usar `showLeftIcon` / `showRightIcon` para controlar los íconos en `Size=SM` | Estas propiedades solo se aplican a `LG` y `MD`; `SM` usa `showSmallLeftIcon` / `showSmallRightIcon` | Vinculaciones de propiedades |

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
