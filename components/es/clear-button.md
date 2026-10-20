---
component: "Clear button"
system: "Genome Evolution Design System"
type: "Button (Inline / Ghost)"
status: "Done"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2103-36"
last_updated: "2026-10-20"
tags:
  - "Button"
  - "Inline"
  - "Ghost"
---

# Clear button — Genome Evolution Design System

Botón de acción inline sin fondo sólido, con íconos de navegación (izquierda y derecha) flanqueando un label.

## Quick Reference

### What it is

Botón de acción inline sin fondo sólido. Un ícono arrow-left inicial y un ícono arrow-right final flanquean un label de texto.

### Key Properties

- Color [Default | Evergreen | Indigo] — default: Default
- Type [Default | Information | Success | Danger | Warning] — default: Default
- State [Default | Hovered | Pressed | Focused | Disabled] — default: Default
- Corner [Default | Rounded] — default: Default
- showLeadingIcon [true | false] — default: true
- showTrailingIcon [true | false] — default: true
- label — texto visible, default: "Button"

### Default Configuration

Color=Default, Type=Default, State=Default, Corner=Default, showLeadingIcon=true, showTrailingIcon=true, label="Button"

### Invalid Combinations

- Type=Information, Success, Danger o Warning solo está documentado con Color=Indigo
- State=Disabled no está documentado para Color=Evergreen ni Color=Indigo
- Color=Default con Type=Information, Success, Danger o Warning no está documentado

### Typical Usage

- Navegación inline: Color=Default, Type=Default, State=Default, Corner=Default
- Acción de marca: Color=Evergreen, Type=Default, State=Default, Corner=Default
- Acción Danger inline: Color=Indigo, Type=Danger, State=Default, Corner=Default
- Variante píldora: Color=Default, Type=Default, State=Default, Corner=Rounded

---

## Purpose / Intent

### Problem Solved

Ofrece una acción discreta, sin peso visual, para acciones secundarias contextuales.

### Typical Context

Dentro de contenido, listas o paneles, y dentro de banners o alertas.

---

## When to Use

- Acciones inline dentro de texto o listas
- Navegación contextual (anterior / siguiente)
- Acciones secundarias que no compiten con un Button principal
- Acciones dentro de banners o alertas

---

## When NOT to Use

- Como acción principal de una pantalla
- En sustitución de Button Primary o Secondary
- Cuando la acción requiere prominencia visual

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Obligatorio | Frame con auto layout que define padding, gap, radius y (según State) fondo o borde de foco |
| arrow-left | Opcional | Ícono inicial de 12 × 12 px. Su visibilidad se controla con showLeadingIcon |
| Label | Obligatorio | Texto del botón (propiedad label). No se encontró un control de visibilidad |
| arrow-right | Opcional | Ícono final de 12 × 12 px. Su visibilidad se controla con showTrailingIcon |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 24 px (todas las variantes) |
| Width | 96 px en variantes con label "Button" (fijo vs. hug: [Pending confirmation]) |
| Padding | 8 px horizontal (space/8), 4 px vertical (space/4) |
| Gap | 8 px (gap/sm) |
| Radius | Corner=Default: 4 px (radius/4). Corner=Rounded: semantic/full (999) |

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | arrow-left, 12 × 12 px. Visible cuando showLeadingIcon=true |
| Trailing | arrow-right, 12 × 12 px. Visible cuando showTrailingIcon=true |

### Rules

- Ambos íconos están visibles por defecto (showLeadingIcon=true, showTrailingIcon=true).
- El color de los íconos sigue el Color / Type / State de la variante (ver Token Mapping).
- El contexto exportado del componente también expone leadingIcon y trailingIcon, que reemplazan las flechas por defecto. Su nombre exacto y tipo en Figma están [Pending confirmation].

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Color

| Value | Description |
|--------|--------|
| Default | Label e íconos neutros (text/primary, icon/primary) |
| Evergreen | Label e íconos en verde (text/evergreen, icon/evergreen) |
| Indigo | Label e íconos en morado (text/indigo, icon/indigo). Único Color que se combina con Type=Information, Success, Danger y Warning |

### Type

| Value | Description |
|--------|--------|
| Default | Tipo base. Existe con Color=Default, Evergreen e Indigo |
| Information | Label e íconos en azul (text/info, icon/info). Solo con Color=Indigo |
| Success | Label e íconos en verde (text/success, icon/success). Solo con Color=Indigo |
| Danger | Label e íconos en rojo (text/danger, icon/danger). Solo con Color=Indigo |
| Warning | Label e íconos en tono oliva/amarillo (text/warning, icon/warning). Solo con Color=Indigo |

### State

| Value | Description |
|--------|--------|
| Default | Apariencia en reposo, sin fondo y sin borde |
| Hovered | Fondo background/interactive/hovered |
| Pressed | Fondo background/interactive/pressed |
| Focused | Borde de 2 px con border/focus |
| Disabled | Label e íconos usan text/disabled e icon/disabled. Solo existe con Color=Default, Type=Default |

### Corner

| Value | Description |
|--------|--------|
| Default | Radio de esquina radius/4 |
| Rounded | Forma de píldora (semantic/full) |

### showLeadingIcon

| Value | Description |
|--------|--------|
| true | Se muestra el ícono inicial (arrow-left) |
| false | El ícono inicial se oculta |

### showTrailingIcon

| Value | Description |
|--------|--------|
| true | Se muestra el ícono final (arrow-right) |
| false | El ícono final se oculta |

### label

Propiedad de texto con el texto visible. Default: "Button".

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Estado en reposo | Sin fondo, sin borde |
| Hovered | Variante State=Hovered | Fondo background/interactive/hovered (#f7f8f7) |
| Pressed | Variante State=Pressed | Fondo background/interactive/pressed (#e9ecea) |
| Focused | Variante State=Focused | Borde sólido de 2 px, border/focus (#339947) |
| Disabled | Variante State=Disabled (solo Color=Default, Type=Default) | Label text/disabled (#849588), íconos icon/disabled (#9daaa0) |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/interactive/hovered | State=Hovered | Verificado en Color=Default |
| background/interactive/pressed | State=Pressed | Verificado en Color=Default |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Label, Color=Default, Type=Default | Verificado |
| text/disabled | Label, State=Disabled | Verificado |
| text/evergreen | Label, Color=Evergreen | Verificado en State=Focused |
| text/info | Label, Type=Information | Verificado |
| text/danger | Label, Type=Danger | Verificado |
| text/indigo | Label, Color=Indigo | Listado en las variables del nodo; no verificado por variante |
| text/success | Label, Type=Success | Listado en las variables del nodo; no verificado por variante |
| text/warning | Label, Type=Warning | Listado en las variables del nodo; no verificado por variante |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/focus | State=Focused | Verificado en Color=Evergreen. Token de grosor: focus/width (2) |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Íconos, Color=Default | Listado en las variables del nodo; asignación por variante no verificada |
| icon/disabled | Íconos, State=Disabled | Listado en las variables del nodo; asignación por variante no verificada |
| icon/evergreen | Íconos, Color=Evergreen | Listado en las variables del nodo; asignación por variante no verificada |
| icon/indigo | Íconos, Color=Indigo | Listado en las variables del nodo; asignación por variante no verificada |
| icon/info | Íconos, Type=Information | Listado en las variables del nodo; asignación por variante no verificada |
| icon/success | Íconos, Type=Success | Listado en las variables del nodo; asignación por variante no verificada |
| icon/danger | Íconos, Type=Danger | Listado en las variables del nodo; asignación por variante no verificada |
| icon/warning | Íconos, Type=Warning | Listado en las variables del nodo; asignación por variante no verificada |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XS Strong | Estilo de texto del label | Compuesto por family/body (Open Sans), weight/semibold, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/8 | Padding horizontal | 8 px |
| space/4 | Padding vertical | 4 px |
| gap/sm | Espacio entre ícono y label | 8 px |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Corner=Default | 4 px |
| semantic/full | Corner=Rounded | 999. Verificado en Color=Default, State=Default |

radius/24 aparece en las variables del nodo.
---

## Interaction

El componente ofrece variantes visuales para State=Hovered, Pressed, Focused y Disabled. Disparadores, transiciones, navegación y comportamiento al hacer clic:

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | Existen las variantes State=Focused (borde de 2 px con border/focus) y State=Disabled (Color=Default, Type=Default) |
| Notes | Roles ARIA, soporte de teclado, contraste y comportamiento con lectores de pantalla: [Pending confirmation] |

---

## Content Guidelines

El valor por defecto del label es "Button".

---

## Examples

### Example 1

Configuration:

```text
Color=Default, Type=Default, State=Default, Corner=Default
```

Description:

Navegación inline.

### Example 2

Configuration:

```text
Color=Evergreen, Type=Default, State=Default, Corner=Default
```

Description:

Acción de marca.

### Example 3

Configuration:

```text
Color=Indigo, Type=Danger, State=Default, Corner=Default
```

Description:

Acción Danger inline.

---

## Invalid Combinations

- Type=Information, Success, Danger o Warning solo está documentado con Color=Indigo
- State=Disabled no está documentado para Color=Evergreen ni Color=Indigo
- Color=Default con Type=Information, Success, Danger o Warning no está documentado

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
- Uso de tokens verificado por variante: parcial (ver notas en Token Mapping).
- Matriz de variantes contrastada con la metadata (58 variantes).

---

## Pending Clarification

- Mayúsculas en los nombres de propiedades: la descripción en Figma lista color, type, state y corner en minúscula, mientras que los nombres de variantes usan Color, Type, State y Corner. Este documento sigue los nombres de las variantes.
- Nombres y tipos exactos en Figma de showLeadingIcon, showTrailingIcon, label, leadingIcon y trailingIcon.
- status, version y owner.
- Asignaciones de tokens por variante sin verificar: text/indigo, text/success, text/warning, todos los icon/*, radius/24 y el radio de Corner=Rounded + State=Focused.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens.
- Comportamiento del ancho (fijo vs. hug), Semantics, Interaction, Accessibility y Content Guidelines.
- weight/semibold se exporta con valor "Medium", mientras que el estilo de texto reporta weight 600.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.