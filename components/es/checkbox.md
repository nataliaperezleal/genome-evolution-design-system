---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form Control / Selection"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201"
last_updated: "2026-10-20"
tags:
  - "Form Control"
  - "Selection"
  - "Checkbox"
---

# Checkbox — Genome Evolution Design System

Control de selección binaria o indeterminada para marcar, desmarcar o indicar un estado mixto, con ícono y label opcionales.

## Quick Reference

### What it is

Control de selección binaria o indeterminada. Permite al usuario marcar, desmarcar o indicar un estado mixto dentro de formularios, listas o tablas. Puede mostrar un ícono y un label opcional a su derecha.

### Key Properties

- Color [Default | Evergreen | Indigo] — default: Default
- Type [Default | Check | Mixed | Plus] — default: Default
- State [Default | Hovered | Pressed | Focused | Disabled] — default: Disabled
- showIcon [true | false] — default: true
- showLabel [true | false] — default: true
- label — texto visible a la derecha, default: "Label"

### Default Configuration

Color=Default, Type=Default, State=Disabled, showIcon=true, showLabel=true, label="Label"

### Invalid Combinations

- Type=Default con Color=Evergreen o Color=Indigo no está documentado
- State=Disabled solo está documentado con Color=Default

### Typical Usage

- Sin marcar: Color=Default, Type=Default, State=Default
- Marcado neutral: Color=Default, Type=Check, State=Default
- Marcado Evergreen: Color=Evergreen, Type=Check, State=Default
- Estado mixto: Color=Default, Type=Mixed, State=Default
- Deshabilitado: Color=Default, Type=Default, State=Disabled
- Con foco: Color=Default, Type=Check, State=Focused

---

## Purpose / Intent

### Problem Solved

Permite al usuario marcar, desmarcar o indicar un estado mixto para una opción dentro de formularios, listas o tablas.

### Typical Context

Formularios, listas y tablas.

---

## When to Use

- Selección de una o múltiples opciones en un formulario
- Selección masiva en tablas (Type=Mixed para el estado indeterminado)
- Activación de preferencias o configuraciones

---

## When NOT to Use

- Selección exclusiva entre opciones (usar Radio Button)
- Activación de un estado on/off inmediato (usar Toggle/Switch)

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Check | Obligatorio | Capa contenedora de 20 × 20 px que aloja la caja de selección |
| Icon | Obligatorio | Caja de selección de 16 × 16 px. Vacía en Type=Default; muestra un glifo en Type=Check, Mixed y Plus |
| State | Opcional | Capa de 32 × 32 px alrededor de la caja, presente en las variantes Hovered, Pressed y Focused revisadas |
| bizagi-lines | Opcional | Ícono de 16 × 16 px entre la caja y el label. Su visibilidad se controla con showIcon |
| Label | Opcional | Texto a la derecha del ícono. Su visibilidad se controla con showLabel |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 20 px (todas las variantes) |
| Width | 83 px en variantes con el label por defecto "Label" e ícono (fijo vs. hug: [Pending confirmation]) |
| Padding | No se especifica en el layout exportado |
| Gap | 8 px (gap/sm) |
| Radius | 2 px en la caja Icon (no está asociado a un token en la exportación) |

---

## Semantics

Control de selección con estados binarios o indeterminado. Type=Mixed representa el estado indeterminado. El significado de Type=Plus:

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | bizagi-lines, 16 × 16 px, entre la caja de selección y el label. Visible cuando showIcon=true |
| Trailing | Ninguno visible |

### Rules

- El ícono está visible por defecto (showIcon=true).
- Dentro de la caja de selección, Type=Check muestra un glifo de check (12 × 12 px) y Type=Mixed muestra un glifo remove (12 × 12 px). Type=Plus muestra un glifo de más; el nombre de su capa está [Pending confirmation].
- Type=Default muestra una caja vacía sin glifo.

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Color

| Value | Description |
|--------|--------|
| Default | Color neutro (icon/primary) |
| Evergreen | Color verde (icon/evergreen). Solo con Type=Check, Mixed y Plus |
| Indigo | Color morado (icon/indigo). Solo con Type=Check, Mixed y Plus |

### Type

| Value | Description |
|--------|--------|
| Default | Caja vacía, sin marcar |
| Check | Caja con glifo de check |
| Mixed | Caja con glifo remove. Estado indeterminado según la descripción en Figma |
| Plus | Caja con glifo de más. Estado que indica agregar un elemento|

### State

| Value | Description |
|--------|--------|
| Default | Apariencia en reposo |
| Hovered | Agrega la capa State alrededor de la caja |
| Pressed | Agrega la capa State alrededor de la caja |
| Focused | Agrega un anillo alrededor de la caja |
| Disabled | Colores de deshabilitado. Solo existe con Color=Default |

### showIcon

| Value | Description |
|--------|--------|
| true | Se muestra el ícono bizagi-lines |
| false | El ícono bizagi-lines se oculta |

### showLabel

| Value | Description |
|--------|--------|
| true | Se muestra el label |
| false | El label se oculta |

### label

Propiedad de texto con el texto visible a la derecha. Default: "Label".

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Estado en reposo | Type=Default: caja con relleno background/canvas y borde de 1 px icon/primary |
| Hovered | Variante State=Hovered | Capa State de 32 × 32 px alrededor de la caja |
| Pressed | Variante State=Pressed | Capa State de 32 × 32 px alrededor de la caja |
| Focused | Variante State=Focused | Anillo alrededor de la caja |
| Disabled | Variante State=Disabled (solo Color=Default) | Type=Default: caja con relleno background/disabled y borde de 1 px border/disabled; label text/disabled |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Relleno de la caja, Type=Default, State=Default | Verificado |
| background/disabled | Relleno de la caja, State=Disabled, Type=Default | Verificado |
| background/interactive/hovered | State=Hovered | Listado en las variables del nodo; asignación no verificada |
| background/interactive/pressed | State=Pressed | Listado en las variables del nodo; asignación no verificada |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Label | Verificado |
| text/disabled | Label, State=Disabled | Verificado |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Borde de la caja, Type=Default, State=Default | Verificado. Grosor: width/1 (1) |
| border/disabled | Borde de la caja, State=Disabled, Type=Default | Verificado |
| border/focus | State=Focused | Listado en las variables del nodo; asignación no verificada. Token de grosor: focus/width (2) |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Relleno de la caja, Color=Default, Type=Check | Verificado en State=Hovered |
| icon/indigo | Relleno de la caja, Color=Indigo | Verificado en Type=Mixed, State=Pressed |
| icon/evergreen | Relleno de la caja, Color=Evergreen | Listado en las variables del nodo; asignación no verificada |
| icon/disabled | State=Disabled | Listado en las variables del nodo; asignación no verificada |
| icon/interactive/hovered | No identificado | Listado en las variables del nodo; uso no identificado |
| icon/interactive/pressed | No identificado | Listado en las variables del nodo; uso no identificado |
| icon/inverse | No identificado | Listado en las variables del nodo; uso no identificado |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XS | Estilo de texto del label | Compuesto por family/body (Open Sans), weight/regular, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| gap/sm | Espacio entre caja, ícono y label | 8 px |

---

## Interaction

El componente ofrece variantes visuales para State=Hovered, Pressed, Focused y Disabled. Disparadores, transiciones y comportamiento al alternar la selección:

---

## Accessibility


| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | Existen las variantes State=Focused y State=Disabled (solo Color=Default) |
| Notes | Roles ARIA, soporte de teclado.

---

## Content Guidelines

El valor por defecto del label es "Label".

---

## Examples

### Example 1

Configuration:

```text
Color=Default, Type=Default, State=Default
```

Description:

Sin marcar.

### Example 2

Configuration:

```text
Color=Default, Type=Check, State=Default
```

Description:

Marcado neutral.

### Example 3

Configuration:

```text
Color=Evergreen, Type=Check, State=Default
```

Description:

Marcado Evergreen.

---

## Invalid Combinations

- Type=Default con Color=Evergreen o Color=Indigo no está documentado
- State=Disabled solo está documentado con Color=Default

---

## QA Checklist

- Propiedades documentadas.
- Los nombres de propiedades coinciden exactamente con Figma.
- Los valores de variantes coinciden exactamente con Figma.
- Defaults documentados.
- Combinaciones inválidas documentadas.
- Tokens verificados.
- No se agregó comportamiento no documentado.
- No se agregó comportamiento de accesibilidad no documentado.
- Matriz de variantes contrastada con la metadata (44 variantes).
- Diferencias entre la descripción de Figma y las variantes señaladas en Pending Clarification.

---

## Pending Clarification

- Type=Plus existe en 13 variantes (Color=Default, Evergreen e Indigo) pero no aparece en la descripción de Figma. Se desconocen su significado y el nombre de la capa de su glifo.
- La descripción de Figma dice que State=Hovered y State=Pressed no están documentados para Color=Default con Type=Default, pero ambas variantes existen en Figma. Se documentan como existentes y no se listan como inválidas.
- El default de State es Disabled tanto en la descripción de Figma como en la variante por defecto, mientras que los ejemplos de uso típico usan State=Default. Confirmar si es intencional.
- Mayúsculas en los nombres de propiedades: la descripción de Figma lista color, type y state en minúscula, mientras que los nombres de variantes usan Color, State y Type. Este documento sigue los nombres de las variantes.
- Asignaciones de tokens sin verificar: los rellenos de la capa State en Hovered, Pressed y Focused, icon/evergreen, icon/disabled, icon/interactive/*, icon/inverse, y las variantes Disabled con Type=Check, Mixed y Plus.
- El radio de 2 px de la caja no está asociado a un token en la exportación.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens.
- status, version y owner.
- Comportamiento del ancho (fijo vs. hug), Semantics de Type=Plus, Interaction, Accessibility y Content Guidelines.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.