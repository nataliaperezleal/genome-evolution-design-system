---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201"
last_updated: "2026-10-22"
tags:
  - "checkbox"
  - "selection"
  - "form"
---

# Checkbox

Sistema: Genome Evolution Design System

## Resumen del componente

Checkbox es un control de selección formado por una casilla de 16 px, un ícono opcional de 16 px y una etiqueta opcional, disponible sin seleccionar (`Default`), seleccionado (`Check`), mixto (`Mixed`) o con un signo más (`Plus`), en los colores Default, Evergreen e Indigo, con los estados Default, Hovered, Pressed, Focused y Disabled.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Checkbox permite a los usuarios seleccionar o deseleccionar una opción. Esto se sustenta en el nombre del componente, en los valores de `Type` (`Default` muestra una casilla vacía, `Check` una marca de verificación, `Mixed` una barra horizontal, `Plus` un signo más), en las variantes de estado interactivo y en la etiqueta junto a la casilla. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Default, Check, Mixed, Plus | Default |
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Hovered, Pressed, Focused, Disabled | Disabled |
| label (texto) | Texto libre | Label |
| showIcon (booleano) | true, false | true |
| showLabel (booleano) | true, false | true |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma.

### Configuración predeterminada

`Type=Default`, `Color=Default`, `State=Disabled`, `label="Label"`, con el ícono y la etiqueta visibles.

Comportamiento actual: la variante predeterminada del componente es la casilla deshabilitada y sin seleccionar. Por lo tanto, una instancia recién insertada aparece deshabilitada hasta que se cambie `State`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 44 variantes. Las combinaciones disponibles son:

| Color | Type | Estados |
|-------|------|---------|
| Default | Default, Check, Mixed, Plus | Default, Hovered, Pressed, Focused, Disabled |
| Evergreen | Check, Mixed, Plus | Default, Hovered, Pressed, Focused |
| Indigo | Check, Mixed, Plus | Default, Hovered, Pressed, Focused |

Interpretación basada en evidencia:

- `Type=Default` es la casilla sin seleccionar; existe solo en `Color=Default`, porque el color se aplica al relleno de la casilla en los tipos marcados.
- `Type=Check` es la casilla seleccionada.
- `Type=Mixed` representa un estado de selección parcial (indeterminado), según su nombre y la barra horizontal.
- `Color` selecciona el relleno de la casilla marcada: neutro (`Default`), `Evergreen` o `Indigo`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un control consistente para activar o desactivar una opción, o para mostrar una selección mixta.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden ver y cambiar si una opción está seleccionada.

### Contexto típico

Los contextos específicos de producto no están documentados en el componente Checkbox.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Para permitir que los usuarios seleccionen o deseleccionen una opción (`Default` y `Check`).
- Para mostrar que un grupo de opciones relacionadas está parcialmente seleccionado (`Mixed`).
- El uso de `Plus` no está documentado en Figma (ver Aclaraciones pendientes).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- `Disabled` existe solo para `Color=Default`.
- El componente tiene un único tamaño.
- El ícono `bizagi-lines` es un ícono fijo; se puede mostrar u ocultar, pero no intercambiar.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Área de control (`Check`) | Obligatoria | Marco de 20 × 20 px que contiene la casilla y, en los estados interactivos, el halo de estado o el anillo de foco. |
| Casilla (`Icon`) | Obligatoria | Cuadrado de 16 × 16 px con radio de esquina de 2 px; delineado sin seleccionar, relleno cuando está marcado. |
| Marca | Presente en `Check`, `Mixed`, `Plus` | Glifo de 12 × 12 px dentro de la casilla: marca de verificación, barra horizontal o signo más. |
| Halo de estado | Presente en `Hovered` y `Pressed` | Fondo circular de 32 px detrás de la casilla. |
| Anillo de foco | Presente en `Focused` | Anillo circular de 2 px `border/focus` alrededor del área de control. |
| Ícono (`bizagi-lines`) | Opcional (`showIcon`, visible por defecto) | Ícono de 16 px entre la casilla y la etiqueta. |
| Etiqueta | Opcional (`showLabel`, visible por defecto) | Texto definido mediante `label`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Alto | 20 px | Dimensiones de las variantes |
| Ancho (etiqueta predeterminada, ícono visible) | 83 px; se adapta al contenido | Dimensiones de las variantes, auto layout |
| Espacio entre control, ícono y etiqueta | `gap/sm` (8) | Vinculación de variable |
| Alineación | Centrado verticalmente | Contexto de diseño |
| Tamaño de la casilla | 16 × 16 px | Dimensiones de capa |
| Radio de esquina de la casilla | 2 px (no vinculado a una variable) | Contexto de diseño |
| Borde de la casilla (sin seleccionar) | `width/1` (1 px) | Vinculación de variable |
| Tamaño de la marca | 12 × 12 px | Dimensiones de capa |
| Halo de estado | Círculo de 32 px | Dimensiones de capa |
| Anillo de foco | `focus/width` (2 px) `border/focus` | Vinculaciones de variables |
| Tamaño del ícono | 16 × 16 px | Dimensiones de capa |
| Tipografía de la etiqueta | `Text/Body/XS`: `family/body` (Open Sans), `weight/regular` (400), `size/12`, `line-height/16` | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste) | Contexto de diseño |

## Semántica

Interpretación basada en evidencia:

- `Default` = no seleccionado; `Check` = seleccionado; `Mixed` = parcialmente seleccionado (indeterminado).
- `Plus` muestra un signo más; su significado no está documentado en Figma.
- `Color` cambia el relleno de la casilla marcada y no cambia el significado.
- La etiqueta describe la opción.
- El significado del ícono `bizagi-lines` no está documentado en Figma.

No verificado en Figma: elemento HTML, rol ARIA y atributos de estado (por ejemplo, seleccionado o mixto), asociación de la etiqueta y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Marca — `Check` | Glifo `check`, 12 px, `icon/inverse` sobre una casilla rellena | Nombre de capa, vinculación de variable |
| Marca — `Mixed` | Glifo de barra horizontal, 12 px, `icon/inverse` sobre una casilla rellena | Captura, vinculación de variable |
| Marca — `Plus` | Glifo de signo más, 12 px, `icon/inverse` sobre una casilla rellena | Captura, vinculación de variable |
| Ícono | `bizagi-lines`, 16 px; se activa con `showIcon`; no intercambiable | Instancia anidada |

En `Disabled`, las marcas usan `icon/disabled`.

## Variantes (Propiedades)

El inventario siguiente es completo: se listaron las 44 variantes y se inspeccionaron en detalle variantes representativas de cada Type, Color y State.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Casilla vacía: relleno `background/canvas` con borde de 1 px `icon/primary`. | Solo `Color=Default` |
| Check | Casilla rellena con marca de verificación. | Todos los colores |
| Mixed | Casilla rellena con barra horizontal. | Todos los colores |
| Plus | Casilla rellena con signo más. | Todos los colores |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Relleno de la casilla marcada `icon/primary`. | Todos los tipos |
| Evergreen | Relleno de la casilla marcada `icon/evergreen`. | Check, Mixed, Plus |
| Indigo | Relleno de la casilla marcada `icon/indigo`. | Check, Mixed, Plus |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Sin halo. | Todas las combinaciones |
| Hovered | Halo de 32 px en `background/interactive/hovered`. El borde de la casilla sin seleccionar cambia a `icon/interactive/hovered`. | Todas las combinaciones |
| Pressed | Halo de 32 px en `background/interactive/pressed`. El borde de la casilla sin seleccionar cambia a `icon/interactive/pressed`. | Todas las combinaciones |
| Focused | Anillo circular de 2 px `border/focus` alrededor del control. | Todas las combinaciones |
| Disabled | Casilla `background/disabled` con borde de 1 px `border/disabled`; marcas `icon/disabled`; etiqueta `text/disabled`. | Solo `Color=Default` |

### label, showIcon, showLabel

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| label | Texto de la opción; "Label" en todas las variantes. | Propiedad de texto |
| showIcon | Muestra u oculta el ícono `bizagi-lines`. Predeterminado `true`. | Propiedad booleana |
| showLabel | Muestra u oculta la etiqueta. Predeterminado `true`. | Propiedad booleana |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Sin halo. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | Halo `background/interactive/hovered`; borde más oscuro en la casilla sin seleccionar. | Variantes de estado |
| Pressed | Apariencia al presionar. | Halo `background/interactive/pressed`; borde aún más oscuro en la casilla sin seleccionar. | Variantes de estado |
| Focused | Apariencia de foco. | Anillo circular de 2 px `border/focus`. | Variantes de estado |
| Disabled | Apariencia no disponible. | Colores deshabilitados en casilla, marca y etiqueta. | Variantes de estado (`Color=Default`) |

El relleno de una casilla marcada no cambia entre Default, Hovered y Pressed; solo cambia el halo. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno de la casilla sin seleccionar | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Halo de estado | Vinculación de variable |
| Fondo | `background/disabled` | Relleno de la casilla deshabilitada | Vinculación de variable |
| Ícono | `icon/primary` | Borde de la casilla sin seleccionar; relleno de la casilla marcada (Default) | Vinculación de variable |
| Ícono | `icon/interactive/hovered`, `icon/interactive/pressed` | Borde de la casilla sin seleccionar, Hovered y Pressed | Vinculación de variable |
| Ícono | `icon/evergreen`, `icon/indigo` | Relleno de la casilla marcada (Evergreen, Indigo) | Vinculación de variable |
| Ícono | `icon/inverse` | Glifo de la marca | Vinculación de variable |
| Ícono | `icon/disabled` | Marca deshabilitada | Vinculación de variable |
| Borde | `border/disabled` | Borde de la casilla deshabilitada | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Anillo de foco | Vinculación de variable |
| Ancho de borde | `width/1` | Borde de la casilla | Vinculación de variable |
| Texto | `text/primary`, `text/disabled` | Etiqueta | Vinculación de variable |
| Espaciado | `gap/sm` | Espacio | Vinculación de variable |
| Tipografía | `Text/Body/XS` | Etiqueta | Estilo de texto |

El radio de esquina de 2 px de la casilla es un valor fijo y no está vinculado a una variable.

## Interacción

Estados observados: Default, Hovered, Pressed y Focused existen para todos los Type y Color; Disabled existe para `Color=Default`.

Interpretación basada en evidencia: La casilla alterna entre sin seleccionar y seleccionado, con `Mixed` como estado intermedio.

No verificado en Figma: la transición entre tipos al activarse, si la etiqueta forma parte del área clicable, la interacción con teclado y las interacciones de prototipo. No se encontraron interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un anillo circular visible de 2 px `border/focus`.
- La selección se muestra mediante el relleno y un glifo de marca, no solo mediante el color.
- Hover y presión añaden un halo de 32 px alrededor de la casilla de 16 px.
- La etiqueta tiene 12 px (`size/12`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombre accesible cuando `showLabel=false`, anuncios de los estados seleccionado y mixto, el papel del ícono `bizagi-lines` para las tecnologías de asistencia y el soporte de teclado.

## Pautas de contenido

Observación verificada: Todas las variantes usan la etiqueta "Label". Las etiquetas ocupan una sola línea y el ancho del componente crece con la etiqueta.

## Ejemplos

### Opción sin seleccionar

Configuración: `Type=Default`, `Color=Default`, `State=Default`

Descripción: Casilla vacía con ícono y etiqueta.

Evidencia / Clasificación: Variante existente en Figma.

### Opción seleccionada, color de marca

Configuración: `Type=Check`, `Color=Evergreen`, `State=Default`

Descripción: Casilla rellena Evergreen con marca de verificación.

Evidencia / Clasificación: Variante existente en Figma.

### Grupo parcialmente seleccionado

Configuración: `Type=Mixed`, `Color=Default`, `State=Default`

Descripción: Casilla rellena neutra con barra horizontal.

Evidencia / Clasificación: Variante existente en Figma.

### Checkbox sin ícono

Configuración: `Type=Check`, `Color=Default`, `State=Default`, `showIcon=false`

Descripción: Solo casilla y etiqueta.

Evidencia / Clasificación: Configuración admitida por la propiedad `showIcon`.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `Type=Default` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |
| `State=Disabled` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

1. Significado de `Type=Plus`: Figma ofrece un tipo `Plus` (un signo más en una casilla rellena) junto a `Check` y `Mixed`, pero no documenta qué representa ni cuándo usarlo en lugar de `Check`. Confirme su significado previsto para poder documentar las pautas de uso.

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
