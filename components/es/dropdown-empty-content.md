---
component: "Dropdown empty content"
system: "Genome Evolution Design System"
type: "Conjunto de componentes (bloque interno)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3751-6300"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "list-item"
  - "slot"
---

# Dropdown empty content

Sistema: Genome Evolution Design System

## Resumen del componente

Dropdown empty content (`.Dropdown empty content` en Figma) es una fila de opción de 163 px de ancho con un slot vacío para contenido personalizado, disponible en tres tamaños y seis estados (Default, Hovered, Pressed, Focused, Selected, Disabled).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Dropdown empty content es una fila de opción para listas desplegables cuyo contenido lo aporta el diseñador mediante un slot de Figma, en lugar del ícono y la etiqueta fijos de `.Dropdown icon + text`. Esto se sustenta en el nombre del componente, en el valor `Property=No content`, en la única capa de slot que ocupa la fila, y en que comparte tamaños, anchos, rellenos y fondos de estado con `.Dropdown icon + text`. El nombre en Figma comienza con un punto; en Figma, los componentes cuyo nombre comienza con un punto no se publican en la biblioteca, por lo que este componente está pensado para usarse dentro de otro componente. Figma no incluye una descripción de uso escrita.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Size | LG, MD, SM | LG |
| State | Default, Hovered, Pressed, Focused, Selected, Disabled | Default |
| Property | No content | No content |
| Slot de contenido | Cualquier contenido | Vacío |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Existen todas las combinaciones de `Size` y `State` (18 variantes). `Property` tiene un único valor.

### Configuración predeterminada

`Size=LG`, `State=Default`, `Property=No content`, slot vacío: una fila de 163 × 44 px sobre `background/canvas`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 18 variantes: seis estados en cada uno de los tres tamaños, todas con `Property=No content`. El único contenido es un slot que ocupa el espacio dentro del relleno.

Interpretación basada en evidencia:

- Úselo cuando una opción necesite contenido que `.Dropdown icon + text` no puede representar, colocando ese contenido en el slot.
- Use la misma lógica de `Size` y `State` que en las demás filas desplegables: `Default` para opciones disponibles, `Selected` para la opción elegida, `Disabled` para opciones no disponibles, y `Hovered`, `Pressed` y `Focused` para la respuesta de interacción.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece el contenedor de la fila desplegable (tamaño, relleno y apariencia de estado) sin prescribir su contenido.

### Resultado esperado

Interpretación basada en evidencia: El contenido personalizado de una opción mantiene las mismas dimensiones y la misma respuesta de estado que las filas desplegables estándar.

### Contexto típico

Interpretación basada en evidencia: Se usa dentro de una lista desplegable, junto a `.Dropdown icon + text` o en su lugar. El componente contenedor no se referencia en este conjunto de componentes.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura del componente:

- Como fila de opción desplegable con contenido personalizado colocado en el slot.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Como el componente no se publica en la biblioteca (nombre con prefijo de punto), no está disponible para insertarse directamente desde la biblioteca.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila horizontal de auto layout de 163 px de ancho con alto fijo según el tamaño; lleva el fondo del estado o el borde de foco. |
| Slot de contenido | Obligatoria (vacío por defecto) | Slot de Figma que ocupa el área dentro del relleno y acepta cualquier contenido. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 163 px (todas las variantes) | Dimensiones de las variantes |
| Alto | 44 px (LG), 36 px (MD), 22 px (SM), fijo | Contexto de diseño |
| Relleno — LG | `space/16` horizontal, `space/12` vertical | Vinculaciones de variables |
| Relleno — MD | `space/8` | Vinculación de variable |
| Relleno — SM | `space/4` | Vinculación de variable |
| Espacio | `gap/sm` (8) | Vinculación de variable |
| Área del slot — LG | 131 × 20 px | Dimensiones de capa |
| Radio de esquina | Ninguno | Contexto de diseño |
| Borde de foco | 2 px `border/focus` (`width/2`) | Vinculaciones de variables |

El slot ocupa el ancho y el alto dentro del relleno en todos los tamaños.

## Semántica

Interpretación basada en evidencia: Cada fila es una opción seleccionable; `Selected` marca la opción elegida y `Disabled` una opción no disponible. El significado del contenido depende de lo que se coloque en el slot.

No verificado en Figma: elementos HTML, roles ARIA, semántica de seleccionado y deshabilitado, y anuncios en lectores de pantalla.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 18 variantes.

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| LG | 44 px de alto; relleno de 16/12 px. | Predeterminado |
| MD | 36 px de alto; relleno de 8 px. | — |
| SM | 22 px de alto; relleno de 4 px. | — |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | `background/canvas`. | Todos los tamaños |
| Hovered | `background/interactive/hovered`. | Todos los tamaños |
| Pressed | `background/interactive/pressed`. | Todos los tamaños |
| Focused | `background/canvas` con borde de 2 px `border/focus`. | Todos los tamaños |
| Selected | `background/selected`. | Todos los tamaños |
| Disabled | `background/disabled`. | Todos los tamaños |

### Property

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| No content | Fila con un slot de contenido vacío. | Único valor |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Opción disponible. | `background/canvas`. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | `background/interactive/hovered`. | Variantes de estado |
| Pressed | Apariencia al presionar. | `background/interactive/pressed`. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus`. | Variantes de estado |
| Selected | Apariencia seleccionada. | `background/selected`. | Variantes de estado |
| Disabled | Apariencia no disponible. | `background/disabled`. | Variantes de estado |

Los estados cambian solo el fondo o el borde de la fila; el componente no cambia el estilo del contenido colocado en el slot. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Default, Focused | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Hovered, Pressed | Vinculación de variable |
| Fondo | `background/selected` | Selected | Vinculación de variable |
| Fondo | `background/disabled` | Disabled | Vinculación de variable |
| Borde | `border/focus`, `width/2` | Focused | Vinculación de variable |
| Espaciado | `space/16`, `space/12`, `space/8`, `space/4`, `gap/sm` | Relleno y espacio | Vinculación de variable |

Comportamiento actual en comparación con el componente hermano `.Dropdown icon + text`:

- El estado deshabilitado se llama `Disabled` aquí y `Disable` en `.Dropdown icon + text`.
- El ancho del borde de foco está vinculado a `width/2` aquí y a `focus/width` en `.Dropdown icon + text`; ambos se resuelven en 2 px.
- Aquí los altos son fijos; en `.Dropdown icon + text` resultan del relleno y el contenido.

## Interacción

Estados observados: Default, Hovered, Pressed, Focused, Selected y Disabled en todos los tamaños. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: el comportamiento de selección y la navegación con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un borde visible de 2 px `border/focus`.
- `Selected` y `Disabled` se indican solo mediante cambios de fondo; cualquier señal adicional debe provenir del contenido del slot.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para el contenido del slot, anuncios de seleccionado y deshabilitado, y soporte de teclado.

## Pautas de contenido

Observación verificada: El slot está vacío en todas las variantes y su tamaño queda fijado por el alto y el relleno de la fila (por ejemplo, 131 × 20 px en LG). El componente no contempla contenido más grande que el área del slot.

## Ejemplos

### Opción personalizada, seleccionada

Configuración: `Size=MD`, `State=Selected`, contenido personalizado en el slot

Descripción: Fila de opción con `background/selected` y contenido aportado por el diseñador.

Evidencia / Clasificación: Variante existente; el contenido del slot es un ejemplo de uso.

### Opción personalizada compacta

Configuración: `Size=SM`, `State=Default`

Descripción: Fila de 22 px con un slot vacío.

Evidencia / Clasificación: Variante existente en Figma.

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
