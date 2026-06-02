---
component: ColorPicker
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [color, picker, input, gradiente, sólido, complejo]
---

# ColorPicker

## Propósito

ColorPicker es un panel complejo de selección de color que permite al usuario elegir un color mediante un lienzo de espacio de color 2D, un slider de matiz (Hue), un slider de saturación/opacidad y campos de texto para entrada manual de valores Hex y porcentaje de opacidad. Soporta dos modos: Solid (color plano) y Gradient (degradado). Ambos modos incluyen una paleta de colores guardados (Swatches) y una acción de adición. El modo Gradient reemplaza el lienzo, el slider Hue y el slider de saturación por una barra de gradiente y expone dos filas de edición por parada de color con posición, hex, opacidad y un Icon Button de eliminación.

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

### Compartida (ambos modos)

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Barra de Tabs (Color Options) | Sí | Dos pestañas: "Solid" y "Gradient". La pestaña activa muestra un borde inferior de 2px con `border/selected` (#297a39). Label activo: `text/secondary`. Label inactivo: `text/tertiary`. | Siempre |
| Fila Saved Colors | Sí | Label "My colors library" (`text/primary`, `Text/Body/XS Strong`) + ClearButton con ícono y label "Add". | Siempre |
| Fila Swatches | Sí | Fila horizontal única de 7 muestras de color circulares de 24×24px, `radius/24`. La muestra seleccionada muestra borde 2px `icon/inverse` y sombra `Elevation/SM`. | Siempre |

### Solo modo Solid

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Lienzo Colorspace | Sí | Área de selección de color 2D. 232×152px. `radius/4`. Contiene un indicador Swatch arrastrable de 16px y un overlay de Cursor (Pointer 👆, 24px). | type=Solid |
| Slider Hue | Sí | Franja horizontal de degradado de matiz. Altura: 8px. Ancho completo. `radius/24`. Indicador thumb tipo elipse. | type=Solid |
| Slider Saturación/Opacidad | Sí | Slider horizontal de opacidad con patrón de cuadrícula de transparencia. Altura: 8px. Ancho completo. `radius/24`. Indicador thumb tipo elipse al extremo derecho. | type=Solid |
| Fila de Fields | Sí | Tres campos de igual ancho: selector de formato (Hex + ícono chevron), campo de valor Hex (ej. `#4F46E5`), campo de Opacidad (ej. `100%`). Cada uno: `border/default`, `Elevation/XS`, `radius/4`. | type=Solid |

### Solo modo Gradient

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Label "Gradient color" | Sí | Label de sección. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Barra Gradient Color | Sí | Barra de vista previa del gradiente a ancho completo (41px de alto, `radius/2`). Soporta patrón de cuadrícula de transparencia. Dos Selector handles arrastrables (14×18px cada uno) en las posiciones de inicio y fin. | type=Gradient |
| Label "Stops" | Sí | Label de sección. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Fila de Fields — Parada 1 | Sí | Tres campos de igual ancho (posición %, valor Hex, Opacidad %) + un Icon Button (—) para eliminar la parada. | type=Gradient |
| Fila de Fields — Parada 2 | Sí | Tres campos de igual ancho (posición %, valor Hex, Opacidad %) + un Icon Button (—) para eliminar la parada. | type=Gradient |

## Propiedades

| Propiedad | Tipo | Default | Valores | Aplica a | Descripción |
|-----------|------|---------|---------|----------|-------------|
| type | Enum | Solid | Solid, Gradient | Todos | Alterna entre el modo de color sólido y el modo de gradiente. En el modo Gradient, el lienzo Colorspace, el slider Hue y el slider de Saturación/Opacidad son reemplazados por la Barra Gradient Color y las filas de edición de paradas. |

## Estados

El panel ColorPicker no expone una propiedad de estado interactivo. Los estados aplican individualmente a sus sub-componentes.

| Sub-componente | Comportamiento Interactivo |
|---|---|
| Barra de Tabs | Tab activa: `border/selected` borde inferior 2px. Tab inactiva: sin borde. |
| Swatch del Colorspace (Solid) | Indicador arrastrable. Muestra overlay de Cursor (Pointer 👆). |
| Thumb del Slider Hue (Solid) | Indicador tipo elipse arrastrable. |
| Thumb del Slider Saturación/Opacidad (Solid) | Indicador tipo elipse arrastrable. Posicionado al extremo derecho en la representación de Figma. |
| Selectores de la Barra Gradient (Gradient) | Dos Selector handles arrastrables en las posiciones de inicio y fin del gradiente. |
| Fields | Inputs de texto editables. `border/default` en reposo. |
| Icon Button — (Gradient) | Elimina una parada del gradiente. Type=Outline, Color=Default, Size=SM. |
| ClearButton "Add" | Componente ClearButton. Estilo ghost inline. |
| Swatches | Círculos clickeables. Muestra seleccionada: borde `icon/inverse` 2px + sombra `Elevation/SM`. |

## Tamaños

El panel ColorPicker tiene un layout fijo. No expone una propiedad de Size.

| Elemento | Dimensiones | Notas |
|----------|-------------|-------|
| Contenedor del panel | 264px de ancho (Gradient) / auto (Solid), alto automático | Padding: `space/16` (16px) en todos los lados. Gap entre secciones: `gap/lg` (16px). Esquinas `radius/8`. Sombra `Elevation/MD`. |
| Lienzo Colorspace | 232×152px | `radius/4`. Solo modo Solid. |
| Track Slider Hue | Ancho completo × 8px | `radius/24`. Solo modo Solid. |
| Track Slider Saturación/Opacidad | Ancho completo × 8px | `radius/24`. Solo modo Solid. |
| Barra Gradient Color | Ancho completo × 41px | `radius/2`. Solo modo Gradient. |
| Selector handles del Gradient | 14×18px cada uno | Dos handles. Solo modo Gradient. |
| Fields | Columnas flex de igual ancho | Padding: `space/4` (4px). Gap entre fields: `gap/sm` (8px). |
| Icon Button (—) en Gradient | 24×24px | Type=Outline, Color=Default, Size=SM. 6px de padding. Ícono 12px. |
| Swatches | 24×24px cada una | `radius/24`. Distribuidas justificadas a lo largo de la fila. |

## Mapeo de Tokens

### Fondo (Background)

| Elemento | Token | Valor |
|----------|-------|-------|
| Contenedor del panel | `background/canvas` | white |
| Fields | `background/canvas` | white |

### Borde (Border)

| Elemento | Token | Notas |
|----------|-------|-------|
| Tab activa | `border/selected` | #297a39, 2px solo en borde inferior |
| Fields | `border/default` | #c3cbc5, 1px — `width/1` |
| Swatch seleccionada | `icon/inverse` | #f7f8f7, 2px — `width/2` |
| Icon Button (—) | `border/strong` | #5f6d62, 1px |

### Texto (Text)

| Elemento | Token | Valor | Tipografía |
|----------|-------|-------|------------|
| Label Tab activa | `text/secondary` | #5f6d62 | `Text/Button/SM` — 12px, semibold |
| Label Tab inactiva | `text/tertiary` | #728376 | `Text/Button/SM` — 12px, semibold |
| Label "My colors library" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Gradient color" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Stops" | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| Label "Add" ClearButton | `text/primary` | #2d342f | `Text/Button/SM` — 12px, semibold |
| Texto de Fields | `text/primary` | #2d342f | `Text/Body/XS` — 12px, regular |

### Tipografía

| Token | Tamaño | Line-height | Weight | Familia | Usado en |
|-------|--------|-------------|--------|---------|----------|
| `Text/Button/SM` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Labels de tabs, label del ClearButton |
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Labels de sección |
| `Text/Body/XS` | 12px (`size/12`) | 16px (`line-height/16`) | regular (`weight/regular`) | `family/body` (Open Sans) | Valores de los Fields |

Espaciado de letras: `letter-spacing/normal` (0px) para todos.

### Sombra / Elevación

| Elemento | Token | Notas |
|----------|-------|-------|
| Contenedor del panel | `Elevation/MD` | `DROP_SHADOW palette/alpha/300 (position/2, position/4) blur/4` |
| Fields | `Elevation/XS` | `DROP_SHADOW palette/alpha/300 (position/1, position/1) blur/1` |
| Swatch seleccionada | `Elevation/SM` | `DROP_SHADOW palette/alpha/300 (position/2, position/2) blur/2` |

### Espaciado

| Token | Valor | Aplicado a |
|-------|-------|------------|
| `space/16` | 16px | Padding del panel (todos los lados) |
| `gap/lg` | 16px | Gap entre secciones del panel |
| `gap/sm` | 8px | Gap entre fields de cada fila |
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
| Barra Gradient Color | `radius/2` | 2px |
| Fields | `radius/4` | 4px |
| Icon Button (—) | 4px (hardcoded) | Pendiente de confirmación de token |
| Swatches | `radius/24` | 24px |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Interacción con el lienzo Colorspace | Pendiente de confirmación |
| Interacción con teclado en sliders | Pendiente de confirmación |
| Interacción con teclado en Selector handles del gradiente | Pendiente de confirmación |
| Gestión del foco entre sub-componentes | Pendiente de confirmación |
| Roles ARIA | Pendiente de confirmación |
| Comportamiento con lector de pantalla | Pendiente de confirmación |
| Cumplimiento WCAG | Pendiente de confirmación |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|---------------|
| Picker de color sólido | Panel completo en modo color sólido | type=Solid |
| Picker de gradiente | Panel completo en modo gradiente con barra de gradiente y filas de paradas | type=Gradient |

## Pendiente de Confirmación

- El comportamiento de arrastre del lienzo Colorspace (rango, equivalente de teclado, valor de salida) no está documentado.
- Los valores de paso y el comportamiento de teclado de los sliders Hue y Saturación/Opacidad no están documentados.
- El rango de arrastre, posiciones por defecto y comportamiento de teclado de los Selector handles del gradiente no están documentados.
- Los Fields muestran valores de ejemplo estáticos — el comportamiento de edición y las reglas de validación no están especificados.
- El Icon Button (—) en las filas de paradas del gradiente: no se especifica si se exige un mínimo de 2 paradas.
- La acción del ClearButton "Add" (qué agrega, dónde guarda) no está documentada más allá de su representación visual.
- El comportamiento de selección de Swatches (cómo una muestra actualiza los valores de los campos activos) no está documentado.
- El número de swatches (7 mostradas) y si este número es configurable no está especificado.
- Los roles ARIA, la navegación por teclado y el comportamiento con lector de pantalla no están documentados.
- El ancho del panel en modo Solid (automático vs fijo) no está explícitamente documentado.

## Guías de uso

- Usa el modo solid para flujos estándar de selección de un solo color
- Usa el modo gradient solo cuando el usuario necesite rampas de color editables con varias paradas
- Mantén simple el contexto alrededor del panel porque el componente ya es denso
- Reserva los campos manuales para flujos que realmente necesiten valores numéricos o hexadecimales
- Usa swatches para elecciones comunes y el canvas o los controles de gradient para ajustes finos

## Notas de implementación

- Mantén el panel compacto pero legible, con separación clara entre controles
- Conserva la estructura basada en tabs para que el cambio de modo sea evidente
- Asegura que la fila de swatches permanezca alineada con el resto del contenido
- Trata el icono de eliminar en modo gradient como una acción destructiva solo para la parada seleccionada
