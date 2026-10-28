---
component: "Accordion"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-22"
tags:
  - "accordion"
  - "disclosure"
  - "layout"
---

# Accordion

Sistema: Genome Evolution Design System

## Resumen del componente

Accordion es un contenedor desplegable con un encabezado que muestra u oculta un área de contenido, disponible en dos tamaños, tres colores y los estados Default, Hovered, Pressed, Focused, Disabled y Loading.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Accordion permite a los usuarios mostrar u ocultar una sección de contenido bajo un encabezado con etiqueta. Esto se sustenta en los valores de `Behavior` `Collapsed` (solo encabezado, `chevron-down`) y `Expanded` (encabezado más un área de contenido, `chevron-up`), y en que el área de contenido es un slot de Figma que acepta cualquier contenido. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Behavior | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| Size | MD, SM | MD |
| State | Default, Hovered, Pressed, Focused, Disabled, Loading | Default |
| text (texto) | Texto libre | Placeholder |
| showLeftIcon (booleano) | true, false | false |
| icon (intercambio de instancia) | Cualquier instancia de ícono | info |
| showCheckbox (booleano) | true, false | false |
| showBadge (booleano) | true, false | false |
| Slot de contenido | Cualquier contenido | Vacío |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. `Evergreen` e `Indigo` están disponibles solo con `Behavior=Expanded` y los estados `Default`, `Hovered`, `Pressed` y `Focused`.

### Configuración predeterminada

`Behavior=Collapsed`, `Color=Default`, `Size=MD`, `State=Default`, `text="Placeholder"`, con el ícono izquierdo, la casilla de verificación y el badge ocultos. En esta configuración, el accordion muestra un encabezado de 36 px con la etiqueta y un ícono `chevron-down`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 40 variantes. `Color=Default` cubre ambos comportamientos, ambos tamaños y los seis estados (24 variantes). `Evergreen` e `Indigo` cubren solo `Behavior=Expanded` en cuatro estados y ambos tamaños (8 variantes cada uno).

Interpretación basada en evidencia:

- Use `Behavior=Collapsed` para mostrar solo el encabezado y `Behavior=Expanded` para mostrar el encabezado y su contenido.
- Use `Size=MD` para diseños estándar y `Size=SM` para diseños compactos; SM reduce el relleno del encabezado y del contenido.
- Use `Color=Evergreen` o `Color=Indigo` para teñir la etiqueta y el divisor del encabezado expandido.
- Use `State=Loading` mientras se cargan el encabezado y el contenido; la variante los reemplaza con marcadores de carga (skeleton).
- Use `State=Disabled` cuando la sección no esté disponible.

Recomendación: Apile varios accordions verticalmente para crear un grupo de secciones desplegables, usando el mismo `Size` y `Color` en todo el grupo.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Reduce la carga visual al permitir ocultar contenido secundario o extenso tras un encabezado con etiqueta y mostrarlo cuando se necesite.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden recorrer los encabezados de las secciones y abrir solo las que necesitan.

### Contexto típico

Los contextos específicos de producto no están documentados en Figma. El ancho fijo de 265 px en todas las variantes y la casilla de verificación, el badge y el ícono izquierdo opcionales sugieren uso en paneles, barras laterales o listas de configuración; esto es una interpretación basada en evidencia.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Para agrupar contenido relacionado bajo un encabezado que se puede contraer y expandir.
- Para mostrar un contador o indicador junto al encabezado (`showBadge`), un ícono antes de la etiqueta (`showLeftIcon`) o una casilla de verificación en el encabezado (`showCheckbox`).
- Para indicar una sección que se está cargando (`State=Loading`) o que no está disponible (`State=Disabled`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Figma no documenta restricciones. Limitaciones del conjunto de componentes actual:

- La apariencia contraída solo está disponible para `Color=Default`.
- `Disabled` y `Loading` solo están disponibles para `Color=Default`.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Header Container | Obligatoria | Fila que contiene los elementos del encabezado; lleva el fondo del estado. |
| Ícono izquierdo (`info`) | Opcional (`showLeftIcon`) | Ícono de 16 px antes de la etiqueta; intercambiable mediante `icon`. |
| Casilla de verificación | Opcional (`showCheckbox`) | Instancia anidada de casilla con un ícono `bizagi-lines`, ubicada antes de la etiqueta. |
| Etiqueta | Obligatoria | Texto del encabezado, definido mediante `text`. |
| Badge | Opcional (`showBadge`) | Contador pequeño redondeado (muestra "0") antes del chevron. |
| Chevron | Obligatoria | `chevron-down` (Collapsed) o `chevron-up` (Expanded) de 12 px. |
| Content Container | Obligatoria en `Behavior=Expanded` | Área bajo el encabezado que contiene el slot de contenido. |
| Slot de contenido | Obligatoria en `Behavior=Expanded` | Slot de Figma (por ejemplo, `Content MD Default`) que acepta contenido personalizado. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 265 px (todas las variantes) | Dimensiones de las variantes |
| Alto del encabezado — MD | 36 px | Dimensiones de las variantes |
| Alto del encabezado — SM | 24 px | Dimensiones de las variantes |
| Relleno del encabezado — MD | `space/16` (16) horizontal, `space/8` (8) vertical | Vinculaciones de variables |
| Relleno del encabezado — SM | `space/8` (8) horizontal, `space/2` (2) vertical | Vinculaciones de variables |
| Espacio del encabezado | `gap/sm` (8) | Vinculaciones de variables |
| Alto del Content Container | 100 px (Expanded, ambos tamaños) | Dimensiones de las variantes |
| Relleno del contenido — MD | `space/16` (16) | Vinculaciones de variables; slot de 233 × 68 px |
| Relleno del contenido — SM | `space/8` (8) | Posiciones de capa; slot de 249 × 84 px |
| Radio del slot de contenido | `radius/4` (4) | Vinculación de variable |
| Alto total — Expanded | 136 px (MD), 124 px (SM) | Dimensiones de las variantes |
| Tipografía de la etiqueta | `Text/Body/SM`: `family/body` (Open Sans), `weight/regular` (400), `size/14`, `line-height/20` | Estilo de texto |
| Tamaños de íconos | Ícono izquierdo 16 px; chevron 12 px | Dimensiones de capa |

## Semántica

Interpretación basada en evidencia: El encabezado identifica una sección de contenido, y la dirección del chevron refleja si la sección está contraída (`chevron-down`) o expandida (`chevron-up`). Los valores de `Color` tiñen la etiqueta y el divisor del encabezado en el estado expandido; Figma no documenta si tienen significado. El significado de la casilla de verificación y del badge en el encabezado no está documentado en Figma.

No verificado en Figma: elementos HTML, roles o atributos ARIA (por ejemplo, el anuncio del estado expandido) y comportamiento con lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Ícono izquierdo | `info` por defecto; intercambiable mediante `icon`; oculto salvo con `showLeftIcon=true` | Propiedad de intercambio de instancia |
| Chevron | `chevron-down` (Collapsed), `chevron-up` (Expanded); `icon/primary`, `icon/disabled` en Disabled | Nombres de capa, vinculaciones de variables |
| Ícono de la casilla | `bizagi-lines`, mostrado junto a la casilla cuando `showCheckbox=true` | Instancia anidada |

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 40 variantes.

### Behavior

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Collapsed | Solo encabezado, con `chevron-down` y un borde inferior de 1 px `border/default`. | Solo `Color=Default` |
| Expanded | Encabezado más un área de contenido de 100 px; `chevron-up`; divisor del encabezado en el color de `Color`. | Todos los colores |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Etiqueta `text/primary`; divisor expandido `border/strong`. | Todos los comportamientos y estados |
| Evergreen | Etiqueta `text/evergreen`; divisor expandido `border/evergreen`. | Solo Expanded; Default, Hovered, Pressed, Focused |
| Indigo | Etiqueta `text/indigo`; divisor expandido `border/indigo`. | Solo Expanded; Default, Hovered, Pressed, Focused |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | Encabezado de 36 px; relleno de contenido de 16 px. | Todos los colores |
| SM | Encabezado de 24 px; relleno de contenido de 8 px. | Todos los colores |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Fondo del encabezado `background/canvas`. | Todos los colores |
| Hovered | Fondo del encabezado `background/interactive/hovered`. | Todos los colores |
| Pressed | Fondo del encabezado `background/interactive/pressed`. | Todos los colores |
| Focused | Contorno de 2 px (`focus/width`) `border/focus` alrededor de todo el accordion. | Todos los colores |
| Disabled | Fondo del encabezado `background/disabled`, etiqueta `text/disabled`, íconos `icon/disabled`. | Solo `Color=Default` |
| Loading | Encabezado y contenido reemplazados por bloques skeleton en `background/loading`. | Solo `Color=Default` |

### text

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Texto | Etiqueta del encabezado. "Placeholder" en todas las variantes. | Propiedad de texto |

### showLeftIcon / icon

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| showLeftIcon=false | Ícono izquierdo oculto. | Predeterminado |
| showLeftIcon=true | Muestra el ícono definido en `icon` (`info` por defecto). | En `Disabled`, el ícono no está expuesto para intercambio |

### showCheckbox

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| false | Casilla oculta. | Predeterminado |
| true | Muestra la casilla anidada (con ícono `bizagi-lines`) antes de la etiqueta. | En `Collapsed / MD / Default` la casilla anidada también muestra su propio texto "Label" |

### showBadge

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| false | Badge oculto. | Predeterminado |
| true | Muestra un badge contador antes del chevron. | No se muestra en `Disabled` ni en `Loading` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Encabezado `background/canvas`. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | Encabezado `background/interactive/hovered`. | Variantes de estado |
| Pressed | Apariencia al presionar. | Encabezado `background/interactive/pressed`. | Variantes de estado |
| Focused | Apariencia de foco. | Contorno de 2 px `border/focus` alrededor del accordion; reemplaza el borde inferior o el divisor. | Variantes de estado |
| Disabled | Apariencia no disponible. | Encabezado `background/disabled`; etiqueta `text/disabled`; chevron `icon/disabled`; Collapsed no tiene borde inferior. | Variantes de estado |
| Loading | Apariencia de carga. | Bloques skeleton (`background/loading`) reemplazan la etiqueta, el chevron y el contenido. | Variantes de estado |

Son variantes visuales; las transiciones y su duración no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Encabezado (estado Default) y área de contenido | Vinculación de variable |
| Fondo | `background/interactive/hovered` | Encabezado, Hovered | Vinculación de variable |
| Fondo | `background/interactive/pressed` | Encabezado, Pressed | Vinculación de variable |
| Fondo | `background/disabled` | Encabezado, Disabled | Vinculación de variable |
| Fondo | `background/loading` | Bloques skeleton, Loading | Vinculación de variable |
| Borde | `border/default` | Borde inferior en Collapsed | Vinculación de variable |
| Borde | `border/strong` | Divisor expandido, Color=Default | Vinculación de variable |
| Borde | `border/evergreen` | Divisor expandido, Color=Evergreen | Vinculación de variable |
| Borde | `border/indigo` | Divisor expandido, Color=Indigo | Vinculación de variable |
| Borde | `border/disabled` | Divisor expandido, Disabled | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Contorno de foco | Vinculación de variable |
| Texto | `text/primary`, `text/evergreen`, `text/indigo`, `text/disabled` | Color de la etiqueta según Color/State | Vinculación de variable |
| Ícono | `icon/primary`, `icon/disabled` | Chevron e íconos | Vinculación de variable |
| Espaciado | `space/16`, `space/8`, `space/2`, `gap/sm` | Relleno y espacios del encabezado y del contenido | Vinculación de variable |
| Radio | `radius/4` | Slot de contenido | Vinculación de variable |
| Tipografía | `Text/Body/SM` | Etiqueta | Estilo de texto |

Limitación: El Badge anidado usa colores y valores tipográficos fijos que no están vinculados a variables de Genome Evolution, por lo que no se puede documentar su mapeo de tokens.

## Interacción

Estados observados: `Default`, `Hovered`, `Pressed` y `Focused` existen para todos los colores; `Disabled` y `Loading` existen para `Color=Default`.

Interpretación basada en evidencia: El encabezado actúa como el control que alterna entre `Collapsed` y `Expanded`, según indican los estados interactivos del encabezado y la dirección del chevron.

No verificado en Figma: el comportamiento real de alternancia, si varios accordions pueden estar abiertos a la vez, la interacción con teclado, la animación y la interacción de la casilla del encabezado. No se encontraron interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un contorno visible de 2 px `border/focus` alrededor de todo el accordion en todos los colores y tamaños.
- `Disabled` cambia los colores de fondo, etiqueta e íconos, por lo que el estado no depende de una sola señal.
- La dirección del chevron difiere entre contraído y expandido, pero el estado expandido también se comunica mediante el área de contenido visible.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): roles y atributos ARIA, soporte de teclado, orden de foco, anuncios en lectores de pantalla y nombre accesible de la casilla del encabezado.

## Pautas de contenido

Observación verificada: La etiqueta del encabezado usa `Text/Body/SM` y se ajusta al ancho disponible (la etiqueta ocupa el espacio restante del encabezado).

Recomendación: Mantenga las etiquetas de encabezado breves y descriptivas para que el contenido de la sección sea claro antes de expandirla. Figma no define una longitud máxima para la etiqueta.

## Ejemplos

### Sección contraída

Configuración: `Behavior=Collapsed`, `Color=Default`, `Size=MD`, `State=Default`

Descripción: Un único encabezado con etiqueta y `chevron-down`.

Evidencia / Clasificación: Variante existente en Figma.

### Sección expandida con color

Configuración: `Behavior=Expanded`, `Color=Evergreen`, `Size=MD`, `State=Default`

Descripción: Etiqueta y divisor Evergreen con el slot de contenido visible.

Evidencia / Clasificación: Variante existente en Figma.

### Sección compacta en carga

Configuración: `Behavior=Expanded`, `Color=Default`, `Size=SM`, `State=Loading`

Descripción: Marcadores skeleton mientras se carga el contenido.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `Color=Evergreen` o `Color=Indigo` con `Behavior=Collapsed` | No existe esa variante | Inventario de variantes |
| `Color=Evergreen` o `Color=Indigo` con `State=Disabled` o `State=Loading` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `title` | `string` | `undefined` | Etiqueta del control que expande el acordeón. |
| `children` | `ReactNode` | `undefined` | Contenido del panel. |
| `size` | `"sm" \| "md"` | `"md"` | Controla el relleno y la densidad. |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"default"` | Tono opcional de énfasis sutil. |
| `disabled` | `boolean` | `false` | Deshabilita la interacción del trigger. |
| `defaultOpen` | `boolean` | `false` | Estado inicial (no controlado). |
| `open` | `boolean` | `undefined` | Estado abierto controlado. |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Función que actualiza el estado controlado. |
| `text` | `string` | `undefined` | Configura la propiedad `text` del componente. |
| `state` | `"default" \| "hovered" \| "pressed" \| "focused" \| "disabled" \| "loading"` | `"default"` | Configura la propiedad `state` del componente. |
| `showLeftIcon` | `boolean` | `false` | Configura la propiedad `showLeftIcon` del componente. |
| `icon` | `ReactNode` | `undefined` | Configura la propiedad `icon` del componente. |
| `showCheckbox` | `boolean` | `false` | Configura la propiedad `showCheckbox` del componente. |
| `checked` | `boolean` | `undefined` | Configura la propiedad `checked` del componente. |
| `defaultChecked` | `boolean` | `false` | Configura la propiedad `defaultChecked` del componente. |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Configura la propiedad `onCheckedChange` del componente. |
| `showBadge` | `boolean` | `false` | Configura la propiedad `showBadge` del componente. |
| `badge` | `ReactNode` | `"0"` | Configura la propiedad `badge` del componente. |
### Ejemplos

#### Uncontrolled accordion

```tsx
import { Accordion } from "@genome-evolution/react";

<Accordion title="Details" defaultOpen>
  Extra information lives here.
</Accordion>;
```

## Aclaraciones pendientes

1. Accordions con color contraídos: `Evergreen` e `Indigo` existen solo como `Expanded`. Cuando un accordion con color se contrae, ¿debe cambiar a `Color=Default`, o faltan variantes Evergreen/Indigo contraídas? Esto determina cómo los diseñadores representan el estado contraído de un accordion con color.

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
