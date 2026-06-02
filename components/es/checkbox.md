---
component: Checkbox
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [formulario, selección, input, control]
---

# Checkbox

## Propósito

Checkbox es un control de selección binaria o indeterminada. Permite a los usuarios marcar, desmarcar o indicar un estado mixto/indeterminado dentro de formularios, listas o tablas. El componente muestra un control interactivo de 20×20px, con un ícono BizagiLines opcional (16×16px) y un label de texto opcional a su derecha.

## Referencia Rápida

| Propiedad | Valores | Default |
|-----------|---------|---------|
| color | Default, Evergreen, Indigo | Default |
| type | Default, Check, Mixed | Default |
| state | Default, Hovered, Pressed, Disabled, Focused | Disabled |
| showIcon | true, false | true |
| showLabel | true, false | true |
| label | string | "Label" |

**Combinaciones inválidas:**
- type=Default solo está documentado para color=Default. color=Evergreen y color=Indigo no están documentados con type=Default.
- state=Disabled solo está documentado para color=Default.
- state=Hovered y state=Pressed con color=Default y type=Default no están documentados.
- color=Evergreen y color=Indigo solo están documentados para type=Check y type=Mixed.

## Cuándo Usar

- Para seleccionar una o múltiples opciones en un formulario o lista.
- Para selección masiva en tablas, usando type=Mixed para representar un estado indeterminado (algunos elementos seleccionados, pero no todos).
- Para activar preferencias, configuraciones u opciones que requieren confirmación explícita del usuario.
- Cuando múltiples opciones no excluyentes pueden seleccionarse simultáneamente.

## Cuándo NO Usar

- No usar para opciones mutuamente excluyentes — usar Radio Button en su lugar.
- No usar para activar o desactivar una configuración en tiempo real de forma inmediata — usar Toggle o Switch en su lugar.
- No usar como control de navegación ni activador de acciones.

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Check Control | Sí | Área interactiva de 20×20px. Contiene el cuadro de checkbox de 16×16px con esquinas redondeadas (2px). Muestra marca de verificación, guión o estado vacío según type. | Siempre |
| Ícono interno (check o dash) | Condicional | Ícono de 12×12px dentro del cuadro. Checkmark para type=Check. Dash/remove para type=Mixed. Oculto para type=Default. | Cuando type=Check o type=Mixed |
| State Layer | Condicional | Capa circular de 32×32px detrás del control. Visible en estados Hovered, Pressed y Focused. | Cuando state=Hovered, Pressed o Focused |
| Ícono BizagiLines | No | Ícono de marca de 16×16px a la derecha del control. | Cuando showIcon=true |
| Label | No | Texto a la derecha del ícono. Usa tipografía `Text/Body/XXS` (10px, regular). | Cuando showLabel=true |

## Propiedades

| Propiedad | Tipo | Default | Valores | Aplica a | Descripción |
|-----------|------|---------|---------|----------|-------------|
| color | Enum | Default | Default, Evergreen, Indigo | Todos | Controla el color de relleno del checkbox cuando está marcado o en estado mixto. Default usa `icon/primary`. Evergreen usa `icon/evergreen`. Indigo usa `icon/indigo`. |
| type | Enum | Default | Default, Check, Mixed | Todos | Define el estado de selección representado visualmente. Default = sin marcar. Check = marcado con checkmark. Mixed = indeterminado con guión. |
| state | Enum | Disabled | Default, Hovered, Pressed, Disabled, Focused | Todos | Representa el estado interactivo actual del componente. |
| showIcon | Boolean | true | true, false | Todos | Muestra u oculta el slot del ícono BizagiLines a la derecha del control. |
| showLabel | Boolean | true | true, false | Todos | Muestra u oculta el label de texto a la derecha del ícono. |
| label | String | "Label" | Cualquier texto | Todos | Texto visible del componente. |

## Estados

| Estado | Descripción | Cambios Visuales |
|--------|-------------|------------------|
| Default | Estado en reposo, sin interacción activa. | type=Default: cuadro vacío con borde `icon/primary` sobre `background/canvas`. type=Check o Mixed: cuadro relleno con `icon/primary`, `icon/evergreen` o `icon/indigo` según color. |
| Hovered | El cursor está sobre el componente. | Capa de estado de 32×32px (estilo Hovered) aparece detrás del checkbox. El cuadro se rellena con el token de color correspondiente. |
| Pressed | El componente está siendo clickeado o presionado. | Capa de estado de 32×32px (estilo Pressed) aparece. El cuadro se rellena con el token de color correspondiente. |
| Focused | El componente recibe foco por teclado o de forma programática. | Capa de anillo de foco de 32×32px aparece. El cuadro se rellena para type=Check y type=Mixed. Para type=Default (color=Default), se renderiza un anillo de foco alrededor del cuadro vacío. |
| Disabled | El componente no es interactivo. Solo documentado para color=Default. | type=Default: cuadro con relleno `background/disabled` y borde `border/disabled`. type=Check o Mixed: cuadro con `background/disabled` y `border/disabled`, con ícono interno atenuado. Label usa `text/disabled`. |

## Tamaños

Checkbox tiene un único tamaño fijo. No expone una propiedad de Size.

| Elemento | Tamaño | Notas |
|----------|--------|-------|
| Check Control (área de interacción) | 20×20px | Área objetivo interactiva |
| Cuadro de checkbox | 16×16px | Cuadro visible con 2px de radio de esquina |
| Ícono interno (check o dash) | 12×12px | Recortado dentro del cuadro |
| State Layer | 32×32px | Capa circular para Hovered/Pressed/Focused |
| Ícono BizagiLines | 16×16px | Ícono de marca trailing |

## Mapeo de Tokens

### Relleno / Fondo (Cuadro de checkbox)

| color / type / state | Token | Valor |
|---|---|---|
| Cualquier color, type=Default, state=Default | `background/canvas` | white |
| color=Default, type=Check o Mixed, state=Default o Focused | `icon/primary` | #5f6d62 |
| color=Evergreen, type=Check o Mixed, state=Default/Hovered/Pressed/Focused | `icon/evergreen` | #297a39 |
| color=Indigo, type=Check o Mixed, state=Default/Hovered/Pressed/Focused | `icon/indigo` | #6b1b99 |
| color=Default, type=Check o Mixed, state=Hovered o Pressed | `icon/primary` | #5f6d62 |
| Cualquiera, state=Disabled | `background/disabled` | #f4f6f4 |

### Borde (Cuadro de checkbox)

| state | Token | Notas |
|-------|-------|-------|
| Default, type=Default | `icon/primary` | 1px de borde, `width/1` |
| Disabled | `border/disabled` | 1px de borde, `width/1` |
| Focused (color=Default, type=Default) | Pendiente de confirmación | Anillo de foco visible en cuadro vacío |

### Texto (Label)

| state | Token | Valor |
|-------|-------|-------|
| Default, Hovered, Pressed, Focused | `text/primary` | #2d342f |
| Disabled | `text/disabled` | #849588 |

### Tipografía (Label)

| Token | Tamaño | Line-height | Weight | Familia |
|-------|--------|-------------|--------|---------|
| `Text/Body/XXS` | 10px (`size/10`) | 14px (`line-height/14`) | regular (`weight/regular`) | `family/body` (Open Sans) |

Espaciado de letras: `letter-spacing/normal` (0px)

### Espaciado

| Token | Valor | Aplicado a |
|-------|-------|------------|
| `gap/sm` | 8px | Gap entre el Check Control, el ícono BizagiLines y el label |

### Radio de Esquina

| Elemento | Valor | Notas |
|----------|-------|-------|
| Cuadro de checkbox | 2px | Aplicado al cuadro interno de 16×16px |

### Sombra

Pendiente de confirmación.

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Indicador de foco | Capa de anillo de foco de 32×32px — confirmado visualmente en State=Focused |
| Visual deshabilitado | Relleno `background/disabled` + borde `border/disabled` + label `text/disabled` |
| Interacción con teclado | Pendiente de confirmación |
| Roles ARIA | Pendiente de confirmación |
| Comportamiento con lector de pantalla | Pendiente de confirmación |
| Cumplimiento WCAG | Pendiente de confirmación |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|---------------|
| Sin marcar — Default | Checkbox vacío, sin selección | color=Default, type=Default, state=Default, showIcon=true, showLabel=true |
| Marcado — Default | Marcado con color neutro | color=Default, type=Check, state=Default, showIcon=true, showLabel=true |
| Marcado — Evergreen | Marcado con color de marca Evergreen | color=Evergreen, type=Check, state=Default, showIcon=true, showLabel=true |
| Marcado — Indigo | Marcado con color de marca Indigo | color=Indigo, type=Check, state=Default, showIcon=true, showLabel=true |
| Mixto — Default | Estado indeterminado, color neutro | color=Default, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Mixto — Evergreen | Estado indeterminado, Evergreen | color=Evergreen, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Mixto — Indigo | Estado indeterminado, Indigo | color=Indigo, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Deshabilitado — Sin marcar | No interactivo, vacío | color=Default, type=Default, state=Disabled, showIcon=true, showLabel=true |
| Deshabilitado — Marcado | No interactivo, marcado | color=Default, type=Check, state=Disabled, showIcon=true, showLabel=true |
| Deshabilitado — Mixto | No interactivo, indeterminado | color=Default, type=Mixed, state=Disabled, showIcon=true, showLabel=true |
| Focused — Marcado | Foco por teclado en estado marcado | color=Default, type=Check, state=Focused, showIcon=true, showLabel=true |
| Focused — Sin marcar | Foco por teclado en estado vacío | color=Default, type=Default, state=Focused, showIcon=true, showLabel=true |
| Hovered — Marcado | Hover sobre checkbox marcado | color=Default, type=Check, state=Hovered, showIcon=true, showLabel=true |
| Pressed — Marcado | Presión sobre checkbox marcado | color=Default, type=Check, state=Pressed, showIcon=true, showLabel=true |
| Sin ícono ni label | Solo control | color=Default, type=Check, state=Default, showIcon=false, showLabel=false |
| Sin label | Control con ícono solamente | color=Default, type=Check, state=Default, showIcon=true, showLabel=false |

## Pendiente de Confirmación

- type=Default no está documentado para color=Evergreen ni color=Indigo. El comportamiento en esas combinaciones es desconocido.
- state=Hovered y state=Pressed no están documentados para color=Default con type=Default.
- state=Disabled no está documentado para color=Evergreen ni color=Indigo.
- El token de borde del anillo de foco para type=Default state=Focused (cuadro vacío) no está identificado explícitamente en el material fuente.
- Los tokens de sombra no están documentados.
- Los roles ARIA, la interacción con teclado y el comportamiento con lector de pantalla no están documentados en el material fuente.
- El rol y significado del ícono BizagiLines no están descritos en el material fuente.
- El valor default del state en Figma está configurado como Disabled — confirmar si esto es intencional.

## Guías de uso

- Usa checkboxes cuando el usuario pueda hacer una o varias selecciones independientes
- Usa el estado mixed solo cuando algunos elementos hijos estén seleccionados pero no todos
- Mantén labels breves para que el control sea fácil de escanear en formularios densos
- Oculta el ícono adicional cuando no aporte contexto útil
- Usa el tamaño y espaciado predeterminados para la mayoría de filas de formulario

## Notas de implementación

- Conserva un área de toque amplia para una interacción cómoda con mouse y touch
- Mantén la distinción visual entre los estados vacío, checked y mixed
- Asegura que el estilo disabled siga siendo legible incluso cuando se muestre el ícono
- Mantén consistente el espaciado entre el control, el ícono y el label
