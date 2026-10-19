---
component: ColorPicker
system: Genome Evolution Design System
type: Component
status: "Production"
version: 1.0
owner: UX Design Team
last_updated: 2026-05-27
tags: [color, picker, input, gradiente, sólido, complejo]
---

# ColorPicker

## Propósito

ColorPicker es un panel complejo de selección de color que permite al usuario elegir un color mediante un lienzo de espacio de color 2D, un slider de matiz (Hue), un slider de saturación/opacidad y campos de texto para entrada manual de valores Hex y porcentaje de opacidad. Soporta dos modos: Solid (color plano) y Gradient (degradado). Ambos modos incluyen una paleta de colores guardados denominada "My colors library" y un ClearButton para agregar nuevas muestras. El modo Gradient reemplaza el lienzo, el slider Hue y el slider de saturación/opacidad con una barra de gradiente y expone dos filas de edición por parada de color, cada una con posición, hex, opacidad y un Icon Button de eliminación.

## Referencia Rápida

| Propiedad | Valores | Default |
|-----------|---------|---------|
| type | Solid, Gradient | Solid |

## Cuándo Usar

- Cuando el usuario necesita seleccionar un color libremente desde un espectro completo.
- Cuando la selección de color debe soportar rellenos de gradiente además de colores sólidos.
- Cuando la interfaz requiere un picker completo con entrada Hex, control de opacidad y paleta de colores guardados.
- En herramientas de diseño, paneles de configuración o interfaces de personalización avanzada.

## Cuándo NO Usar

- No usar cuando el usuario solo debe elegir entre un conjunto fijo de colores de marca — usar un selector de Swatch o Token Picker en su lugar.
- No usar cuando una paleta de colores predefinida simple es suficiente.
- No usar en contextos donde la selección de color debe estar restringida exclusivamente a tokens del sistema.

## Anatomía

### Compartida — ambos modos

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Barra de Tabs | Sí | Dos pestañas: "Solid" y "Gradient". Tab activa: borde inferior 2px `border/selected` (#297a39), label `text/secondary`. Tab inactiva: sin borde, label `text/tertiary`. | Siempre |
| Fila Saved Colors | Sí | Label "My colors library" (`text/primary`, `Text/Body/XS Strong`) + ClearButton (ícono leading + label "Add"). | Siempre |
| Fila Swatches | Sí | Fila horizontal de 7 chips de color circulares, 24×24px, `radius/24`, `gap/sm` (8px) entre chips. Chip seleccionado: borde 2px `icon/inverse` + sombra `Elevation/SM`. | Siempre |

### Solo modo Solid

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Lienzo Colorspace | Sí | Área de selección de color 2D, 232×152px, `radius/4`. Relleno de gradiente. Contiene un indicador Swatch circular arrastrable de 16px (borde 2px `icon/inverse` + anillo `rgba(0,0,0,0.25)`) y un overlay de Cursor (Pointer 👆, 24px). | type=Solid |
| Slider Hue | Sí | Franja de gradiente de matiz completo. Altura: 8px. Ancho completo. `radius/24`. Indicador thumb tipo elipse. | type=Solid |
| Slider Saturación/Opacidad | Sí | Slider de opacidad con patrón de cuadrícula de transparencia. Altura: 8px. Ancho completo. `radius/24`. Indicador thumb tipo elipse al extremo derecho en la representación de Figma. | type=Solid |
| Fila de Fields | Sí | Tres campos de igual ancho uno al lado del otro: (1) selector de formato (label "Hex" + ícono chevron/arrow-down, 20×20px), (2) campo de valor Hex (ej. `#4F46E5`), (3) campo de Opacidad (ej. `100%`). Cada campo: `background/canvas`, borde `border/default` 1px, sombra `Elevation/XS`, `radius/4`, padding `space/4`. | type=Solid |

### Solo modo Gradient

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Label "Gradient color" | Sí | Label de sección. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Barra Gradient | Sí | Barra de color a ancho completo (41px de alto, `radius/2`) con patrón de cuadrícula de transparencia. Contiene dos Selector handles arrastrables (14×18px cada uno) en las posiciones de inicio y fin. | type=Gradient |
| Label "Stops" | Sí | Label de sección. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Fila de Fields — Parada 1 | Sí | Tres campos de igual ancho (posición `0%`, valor Hex, Opacidad `100%`) + un Icon Button (—, Type=Outline, Color=Default, Size=SM). | type=Gradient |
| Fila de Fields — Parada 2 | Sí | Tres campos de igual ancho (posición `100%`, valor Hex, Opacidad `100%`) + un Icon Button (—, Type=Outline, Color=Default, Size=SM). | type=Gradient |

## Propiedades

| Propiedad | Tipo | Default | Valores | Aplica a | Descripción |
|-----------|------|---------|---------|----------|-------------|
| type | Enum | Solid | Solid, Gradient | Todos | Alterna entre el modo de color sólido y el modo de gradiente. En el modo Gradient, el lienzo Colorspace, el slider Hue y el slider de Saturación/Opacidad son reemplazados por la Barra Gradient y las filas de edición de paradas. |

## Estados

El panel ColorPicker no expone una propiedad de estado interactivo a nivel de panel. Los estados interactivos aplican individualmente a sus sub-componentes.

| Sub-componente | Comportamiento Interactivo |
|---|---|
| Barra de Tabs | Tab activa: borde inferior 2px `border/selected`. Tab inactiva: sin borde. |
| Indicador Swatch del Colorspace | Círculo arrastrable de 16px. Overlay de Cursor (Pointer 👆) visible durante la interacción. |
| Thumb del Slider Hue | Indicador tipo elipse arrastrable a lo largo del track de gradiente de matiz. |
| Thumb del Slider Saturación/Opacidad | Indicador tipo elipse arrastrable. Posición al extremo derecho mostrada en Figma en reposo. |
| Selector handles de la Barra Gradient | Dos handles arrastrables de 14×18px en las posiciones de inicio y fin del gradiente. |
| Fields | Inputs de texto editables. `border/default` en reposo. Estado de foco por campo sigue el comportamiento del componente Field. |
| Icon Button (—) | Elimina la parada de gradiente correspondiente. Type=Outline, Color=Default, Size=SM. |
| ClearButton "Add" | Componente ClearButton (ghost inline). Agrega un nuevo color a la paleta de swatches. |
| Swatches | Círculos clickeables de 24×24px. Seleccionado: borde 2px `icon/inverse` + sombra `Elevation/SM`. |

## Tamaños

El ColorPicker tiene un layout fijo. No expone una propiedad de Size.

| Elemento | Dimensiones | Notas |
|----------|-------------|-------|
| Contenedor del panel | 264px de ancho (Gradient) / ancho automático (Solid), alto automático | Padding: `space/16` (16px) todos los lados. Gap entre secciones: `gap/lg` (16px). `radius/8`. Sombra `Elevation/MD`. |
| Lienzo Colorspace | 232×152px | `radius/4`. Solo modo Solid. |
| Track Slider Hue | Ancho completo × 8px | `radius/24`. Solo modo Solid. |
| Track Slider Saturación/Opacidad | Ancho completo × 8px | `radius/24`. Solo modo Solid. |
| Track Barra Gradient | Ancho completo × 41px | `radius/2`. Solo modo Gradient. |
| Selector handles del Gradient | 14×18px cada uno | 2 handles. Solo modo Gradient. |
| Fields (cada uno) | Ancho flex igual, alto automático | Padding `space/4` (4px). `gap/sm` (8px) entre fields. |
| Icon Button (—) | 24×24px | 6px padding. Ícono 12×12px (minus/remove). |
| Swatches (cada uno) | 24×24px | `radius/24`. `gap/sm` (8px) entre chips. |

## Mapeo de Tokens

### Fondo (Background)

| Elemento | Token | Valor |
|----------|-------|-------|
| Contenedor del panel | `background/canvas` | white |
| Fields | `background/canvas` | white |

### Borde (Border)

| Elemento | Token | Notas |
|----------|-------|-------|
| Tab activa | `border/selected` | #297a39 — 2px solo en borde inferior |
| Fields | `border/default` | #c3cbc5 — 1px, `width/1` |
| Chip Swatch seleccionado | `icon/inverse` | #f7f8f7 — 2px, `width/2` |
| Indicador Swatch del Colorspace | `icon/inverse` | #f7f8f7 — 2px + anillo exterior `rgba(0,0,0,0.25)` |
| Icon Button (—) | `border/strong` | #5f6d62 — 1px |

### Texto (Text)

| Elemento | Token | Valor | Tipografía |
|----------|-------|-------|------------|
| Label Tab activa | `text/secondary` | #5f6d62 | `Text/Button/SM` — 12px, semibold |
| Label Tab inactiva | `text/tertiary` | #728376 | `Text/Button/SM` — 12px, semibold |
| Label "My colors library" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Gradient color" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Stops" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Add" ClearButton | `text/primary` | #2d342f | `Text/Button/SM` — 12px, semibold |
| Valores de Fields | `text/primary` | #2d342f | `Text/Body/XS` — 12px, regular |

### Tipografía

| Token | Tamaño | Line-height | Weight | Familia | Usado en |
|-------|--------|-------------|--------|---------|----------|
| `Text/Button/SM` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Labels de tabs, label "Add" del ClearButton |
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Labels de sección |
| `Text/Body/XS` | 12px (`size/12`) | 16px (`line-height/16`) | regular (`weight/regular`) | `family/body` (Open Sans) | Valores de los Fields |

Espaciado de letras: `letter-spacing/normal` (0px) para todos.

### Sombra / Elevación

| Elemento | Token | Descripción |
|----------|-------|-------------|
| Contenedor del panel | `Elevation/MD` | `DROP_SHADOW palette/alpha/300 (position/2, position/4) blur/4` |
| Fields | `Elevation/XS` | `DROP_SHADOW palette/alpha/300 (position/1, position/1) blur/1` |
| Chip Swatch seleccionado | `Elevation/SM` | `DROP_SHADOW palette/alpha/300 (position/2, position/2) blur/2` |

### Espaciado

| Token | Valor | Aplicado a |
|-------|-------|------------|
| `space/16` | 16px | Padding del panel (todos los lados) |
| `gap/lg` | 16px | Gap entre secciones del panel |
| `gap/sm` | 8px | Gap entre fields de una fila; gap entre chips de swatches |
| `gap/xs` | 4px | Gap interno de cada field (ícono + texto) |
| `space/4` | 4px | Padding interno de cada field |
| `space/8` | 8px | Padding horizontal del ClearButton |

### Radio de Esquina

| Elemento | Token | Valor |
|----------|-------|-------|
| Contenedor del panel | `radius/8` | 8px |
| Lienzo Colorspace | `radius/4` | 4px |
| Track Slider Hue | `radius/24` | 24px |
| Track Slider Saturación/Opacidad | `radius/24` | 24px |
| Track Barra Gradient | `radius/2` | 2px |
| Fields | `radius/4` | 4px |
| Swatches | `radius/24` | 24px |
| Icon Button (—) | 4px | Hardcoded — pendiente de confirmación de token |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Interacción de arrastre del lienzo Colorspace | Pendiente de confirmación |
| Comportamiento de teclado de sliders (valores de paso, teclas de flecha) | Pendiente de confirmación |
| Comportamiento de teclado de los Selector handles del Gradient | Pendiente de confirmación |
| Gestión del foco entre sub-componentes | Pendiente de confirmación |
| Roles ARIA | Pendiente de confirmación |
| Comportamiento con lector de pantalla | Pendiente de confirmación |
| Cumplimiento WCAG | Pendiente de confirmación |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|---------------|
| Picker de color sólido | Panel completo en modo sólido | type=Solid |
| Picker de gradiente | Panel completo en modo gradiente con barra y filas de paradas | type=Gradient |

## Pendiente de Confirmación

- El rango de arrastre del lienzo Colorspace, el modelo de color de salida y el equivalente de teclado no están documentados.
- Los valores de paso y el comportamiento de teclado de los sliders Hue y Saturación/Opacidad no están documentados.
- El rango de arrastre, posiciones por defecto y comportamiento de teclado de los Selector handles del Gradient no están documentados.
- Los Fields muestran valores de ejemplo estáticos — el comportamiento de edición y las reglas de validación no están especificados.
- El Icon Button (—) en las filas de paradas: si se impone un mínimo de 2 paradas no está especificado.
- La acción del ClearButton "Add" (paleta destino, máximo de swatches) no está documentada más allá de su representación visual.
- El comportamiento de selección de Swatches (cómo un chip actualiza los campos de color activos) no está documentado.
- El número de swatches (7 mostrados) y si es configurable no está especificado.
- El ancho del panel en modo Solid (automático vs fijo) no está explícitamente documentado en la fuente.
- Los roles ARIA, el orden de navegación por teclado y el comportamiento con lector de pantalla no están documentados.