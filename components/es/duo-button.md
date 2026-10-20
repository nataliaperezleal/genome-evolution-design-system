---
component: "Duo button"
system: "Genome Evolution Design System"
type: "Component"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2135-676"
last_updated: "2026-10-20"
tags:
  - "Duo button"
  - "Button pair"
  - "Complementary actions"
---

# Duo button — Genome Evolution Design System

Par de botones adyacentes: una acción secundaria (outlined) y una acción primaria (filled) presentadas como una sola unidad visual.

## Quick Reference

### What it is

Agrupación de dos botones adyacentes que representa una pareja de acciones complementarias: una acción secundaria (outlined) a la izquierda y una acción primaria (filled) a la derecha, presentadas como una unidad visual cohesiva.

### Key Properties

- Size [Regular | Small] — default: Regular
- Color [Evergreen | Indigo] — default: Evergreen

### Default Configuration

Size=Regular, Color=Evergreen

### Invalid Combinations

- Mezclar Color=Evergreen en un botón con Color=Indigo en el otro dentro del mismo Duo button
- Usar Duo button con una sola acción visible (ambos botones son siempre obligatorios)
- Usar Duo button cuando las acciones no son complementarias

### Typical Usage

- Footer de modal (Cancel + Apply): Size=Regular, Color=Evergreen
- Footer de drawer IA (Descartar + Guardar): Size=Regular, Color=Indigo
- Acción compacta en card: Size=Small, Color=Evergreen
- Confirmación en panel IA: Size=Small, Color=Indigo

---

## Purpose / Intent

### Problem Solved

Presenta dos acciones directamente relacionadas como una sola unidad, manteniendo el patrón de acción dual visualmente consistente en toda la interfaz.

### Typical Context

Footers de modales y drawers, cards y paneles.

---

## When to Use

- Se necesita presentar dos acciones directamente relacionadas como una unidad (p. ej. Cancel + Apply, Cancelar + Guardar, Volver + Continuar)
- El patrón de acción dual es recurrente y debe mantener consistencia visual en toda la interfaz

---

## When NOT to Use

- Las dos acciones no son complementarias o no están directamente relacionadas entre sí
- Se necesitan más de dos acciones (usar un grupo de botones individuales)
- Solo hay una acción disponible

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Obligatorio | Flujo horizontal con gap/sm entre los dos botones, elementos centrados |
| Button (izquierdo) | Obligatorio | Secundario (outlined): background/canvas con borde y label en el color de marca |
| Button (derecho) | Obligatorio | Primario (filled): relleno sólido en el color de marca con label text/inverse |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Regular: 32 px según la descripción de Figma (la variante Evergreen mide 34 px). Small: 24 px |
| Width | Regular: 168 px. Small: 138 px (medido con el label "Button"; fijo vs. hug: [Pending confirmation]) |
| Padding | Regular: space/16 (16 px) horizontal, space/8 (8 px) vertical. Small: space/12 (12 px) horizontal, space/4 (4 px) vertical |
| Gap | gap/sm (8 px) entre los dos botones |
| Radius | semantic/sm (4 px) en ambos botones |

---

## Semantics

Pareja de acciones complementarias: el botón izquierdo es la acción secundaria (outlined) y el botón derecho es la acción primaria (filled), presentadas como una unidad visual.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Ninguno visible |
| Trailing | Ninguno visible |

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Size

| Value | Description |
|--------|--------|
| Regular | Text/Button/MD (14/16). Padding space/16 horizontal, space/8 vertical. Altura 32 px según la descripción de Figma |
| Small | Text/Button/SM (12/16). Padding space/12 horizontal, space/4 vertical. Altura 24 px |

### Color

| Value | Description |
|--------|--------|
| Evergreen | Color de marca verde: border/evergreen y text/evergreen en el botón secundario, surface/evergreen/bold en el botón primario |
| Indigo | Color de marca morado: border/indigo y text/indigo en el botón secundario, surface/indigo/bold en el botón primario |

---

## States

El componente no tiene una propiedad State.

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Relleno del botón secundario | Verificado |
| surface/evergreen/bold | Relleno del botón primario, Color=Evergreen | Verificado en Size=Regular |
| surface/indigo/bold | Relleno del botón primario, Color=Indigo | Verificado en Size=Small |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/evergreen | Label del botón secundario, Color=Evergreen | Verificado en Size=Regular |
| text/indigo | Label del botón secundario, Color=Indigo | Verificado en Size=Small |
| text/inverse | Label del botón primario | Verificado |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/evergreen | Borde del botón secundario, Color=Evergreen | Verificado en Size=Regular. Grosor: width/1 (1) |
| border/indigo | Borde del botón secundario, Color=Indigo | Verificado en Size=Small. Grosor: width/1 (1) |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Button/MD | Labels de Size=Regular | Valores verificados: family/body, weight/semibold, size/14, line-height/16, letter-spacing/normal |
| Text/Button/SM | Labels de Size=Small | Valores verificados: family/body, weight/semibold, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Padding horizontal, Size=Regular | 16 px |
| space/8 | Padding vertical, Size=Regular | 8 px |
| space/12 | Padding horizontal, Size=Small | 12 px |
| space/4 | Padding vertical, Size=Small | 4 px |
| gap/sm | Espacio entre los dos botones y dentro de cada botón | 8 px |
| size/16 | Padding horizontal del botón secundario, Size=Regular, Color=Evergreen | Aparece en el código exportado en lugar de space/16 |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| semantic/sm | Ambos botones | 4 px |

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | [Pending confirmation] |
| Notes | Roles ARIA, soporte de teclado, contraste y comportamiento con lectores de pantalla: [Pending confirmation] |

---

## Content Guidelines

Ambos botones muestran el label de ejemplo "Button" en las variantes. Pares de labels mencionados en la descripción de Figma: Cancel + Apply, Cancelar + Guardar, Volver + Continuar, Descartar + Guardar.

---

## Examples

### Example 1

Configuration:

```text
Size=Regular, Color=Evergreen
```

Description:

Footer de modal (Cancel + Apply).

### Example 2

Configuration:

```text
Size=Regular, Color=Indigo
```

Description:

Footer de drawer IA (Descartar + Guardar).

### Example 3

Configuration:

```text
Size=Small, Color=Evergreen
```

Description:

Acción compacta en una card.

---

## Invalid Combinations

- Mezclar Color=Evergreen en un botón con Color=Indigo en el otro dentro del mismo Duo button
- Usar Duo button con una sola acción visible (ambos botones son siempre obligatorios)
- Usar Duo button cuando las acciones no son complementarias

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
- Matriz de variantes contrastada con la metadata (4 variantes: Size × Color).
- Diferencias entre la descripción de Figma y el diseño señaladas en Pending Clarification.

---

## Pending Clarification

- Altura: la descripción de Figma indica que Regular mide 32 px, pero Size=Regular, Color=Evergreen mide 34 px (Color=Indigo mide 32 px). En el código exportado, su botón secundario usa size/16 (fallback 17 px) y space/8 (fallback 9 px) en lugar de los space/16 y space/8 documentados.
- El botón secundario de Size=Small, Color=Indigo usa paddings de respaldo de 13 px y 5 px para space/12 y space/4.
- El gap raíz de Size=Small, Color=Indigo está fijo en 8 px en lugar de usar gap/sm. La descripción de Figma nombra el token del gap como gap/s, mientras que la variable en Figma es gap/sm.
- Solo se inspeccionaron en el código exportado Size=Regular, Color=Evergreen y Size=Small, Color=Indigo. Las otras dos variantes se apoyan en la metadata y la descripción de Figma.
- El tipo de componente solo aparece como "Component" en la descripción de Figma.
- Los dos botones son instancias anidadas de Button. No están documentadas sus variantes, si sus labels se pueden editar desde el Duo button, ni sus estados interactivos.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens.
- status, version y owner.
- Expected Outcome, Interaction, Accessibility, Content Guidelines, reglas de Iconography y Shadow.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.