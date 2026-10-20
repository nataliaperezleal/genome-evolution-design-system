---
component: "Color Picker"
system: "Genome Evolution Design System"
type: "Color Selection / Complex Control"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3082-25123"
last_updated: "2026-10-20"
tags:
  - "Color Selection"
  - "Complex Control"
  - "Color Picker"
---

# Color Picker — Genome Evolution Design System

Panel de selección de color con dos modos: Solid (color plano) y Gradient.

## Quick Reference

### What it is

Panel completo de selección de color. Permite elegir un color mediante un canvas 2D de colorspace, un slider Hue, un slider Saturation/Opacity y campos manuales Hex y Opacity. Incluye una paleta de colores guardados ("My colors library") y una acción Add. El modo Gradient reemplaza el colorspace por una barra de degradado y campos de edición por stop.

### Key Properties

- Type [Solid | Gradient] — default: Solid
- Contenido Type=Solid — tabs, colorspace, Hue, Saturation, campos Hex y opacidad, My colors library, 7 swatches
- Contenido Type=Gradient — barra de degradado con 2 Selector, Stops (2 filas de campos con Icon Button), My colors library, 7 swatches

### Default Configuration

Type=Solid

### Typical Usage

- Selección de color sólido: Type=Solid
- Selección de degradado: Type=Gradient

---

## Purpose / Intent

### Problem Solved

Selección libre de color de todo el espectro, con soporte de degradado, entrada Hex, control de opacidad y swatches guardados.

---

## When to Use

- El usuario necesita selección libre de color de todo el espectro
- Se requiere soporte de relleno degradado
- Se necesita un picker completo con entrada Hex, control de opacidad y swatches guardados

---

## When NOT to Use

- El usuario debe elegir solo entre un conjunto fijo de colores de marca (usar Swatch selector o Token Picker)
- Basta una paleta predefinida simple

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Color Options | Obligatorio | Fila con dos instancias de Tab: "Solid" y "Gradient". La tab seleccionada tiene borde inferior |
| table | Obligatorio (Type=Solid) | Contenedor de 232 × 152 px que aloja Colorspace, Swatch y Cursor |
| Colorspace | Obligatorio (Type=Solid) | Canvas 2D de color, 232 × 152 px |
| Swatch (indicador) | Obligatorio (Type=Solid) | Indicador circular de 16 px sobre el colorspace. Descrito como arrastrable |
| Cursor | Obligatorio (Type=Solid) | Instancia de Cursor (type "Pointer 👆"), 24 × 24 px, superpuesta al colorspace |
| Hue | Obligatorio (Type=Solid) | Pista de slider de 8 px con thumb elíptico |
| Saturation | Obligatorio (Type=Solid) | Pista de slider de 8 px con patrón de transparencia en cuadrícula y thumb elíptico en el extremo derecho |
| Etiqueta "Gradient color" | Obligatorio (Type=Gradient) | Etiqueta de texto sobre la barra de degradado |
| Barra de degradado | Obligatorio (Type=Gradient) | Barra de 41 px de alto, ancho completo, con 2 handles Selector (14 × 18 px) |
| Etiqueta "Stops" | Obligatorio (Type=Gradient) | Etiqueta de texto sobre las filas de stops |
| Fields (stops) | Obligatorio (Type=Gradient) | 2 filas. Cada una tiene 3 instancias de Field Master (posición, valor Hex, opacidad) y un Icon Button |
| Fields | Obligatorio (Type=Solid) | 3 instancias de Field Master: selector de formato Hex (con ícono chevron), valor Hex, opacidad |
| Saved Colors | Obligatorio | Etiqueta "My colors library" y una instancia de Clear button con label "Add" |
| Row (swatches) | Obligatorio | 7 chips circulares de swatch, 24 × 24 px |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Type=Solid: 396 px. Type=Gradient: 320 px |
| Width | 264 px |
| Padding | 16 px en todos los lados (space/16) |
| Gap | 16 px entre secciones (gap/lg). 8 px entre chips de swatch (gap/sm) |
| Radius | 8 px (radius/8) |

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Glifo de agregar en el Clear button "Add" (la capa se llama arrow-left). El ícono final no se renderiza |
| Trailing | Ícono chevron de 20 × 20 px dentro del campo selector de formato Hex (capa llamada Icon) |

### Rules

- Type=Solid superpone una instancia de Cursor (type "Pointer 👆", 24 × 24 px) sobre el colorspace.
- En Type=Gradient, cada fila de stop termina con un Icon Button con un glifo de 16 × 16 px. La capa se llama trash pero se ve como un signo menos; la descripción de Figma lo llama "Icon Button (—)".
- La barra de degradado tiene dos handles Selector de 14 × 18 px.

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Type

| Value | Description |
|--------|--------|
| Solid | Modo de color plano. La tab "Solid" está seleccionada. Muestra colorspace, slider Hue, slider Saturation, fila de campos, colores guardados y swatches |
| Gradient | Modo degradado. La tab "Gradient" está seleccionada. Reemplaza colorspace, Hue y Saturation por la barra de degradado y dos filas de stops |

---

## States

El componente no tiene una propiedad State.

| State | Description | Visual Changes |
|--------|--------|--------|
| Tab seleccionada | Tab que corresponde al Type actual | Borde inferior de 2 px border/selected, label text/secondary |
| Tab no seleccionada | La otra tab | Sin borde, label text/tertiary |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Fondo del panel y de Field Master | Verificado |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Etiquetas de sección, texto de campos, label "Add" | Verificado |
| text/secondary | Label de la tab seleccionada | Verificado |
| text/tertiary | Label de la tab no seleccionada | Verificado |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/selected | Borde inferior de la tab seleccionada | Verificado. El grosor de 2 px no está asociado a un token |
| border/default | Borde de Field Master e Icon Button | Verificado. Grosor: width/1 (1) |
| icon/inverse | Color del borde del indicador del colorspace y del primer chip de swatch | Verificado. Grosor del borde del chip: width/2 (2) |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XS | Texto de campos | Verificado. family/body (Open Sans), weight/regular, size/12, line-height/16, letter-spacing/normal |
| Text/Button/SM | Labels de las tabs | Listado en los estilos del diseño; aplicado a Tab según la descripción de Tab |
| Text/Body/XS Strong | Etiquetas de sección | Listado en los estilos del diseño; asignación a las etiquetas no verificada. weight/semibold |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Padding del panel, padding horizontal de Tab | 16 px |
| space/4 | Padding vertical de Tab, padding de Field Master, padding de Icon Button, padding vertical de Clear button | 4 px |
| space/8 | Padding horizontal de Clear button | 8 px |
| gap/lg | Espacio entre secciones del panel | 16 px |
| gap/sm | Espacio entre campos, chips de swatch y partes del Clear button | 8 px |
| gap/xxs | Espacio dentro de Field Master | 4 px |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/8 | Panel | 8 px |
| radius/4 | Colorspace, Field Master, Clear button | 4 px |
| radius/24 | Pistas Hue y Saturation, chips de swatch | 24 px |
| radius/2 | Barra de degradado | 2 px |
| semantic/sm | Icon Button | 4 px |

### Shadow

| Token | Usage | Notes |
|--------|--------|--------|
| position/2, position/4, blur/4, palette/alpha/300 | Sombra del panel | Verificado. Coincide con el estilo Elevation/MD, listado en los estilos del diseño |
| position/1, blur/1, palette/alpha/300 | Sombra de Field Master | Verificado. Coincide con el estilo Elevation/XS |
| position/2, blur/2, palette/alpha/300 | Sombra del primer chip de swatch | Verificado. Coincide con el estilo Elevation/SM |

---

## Interaction

La descripción de Figma llama "arrastrable" al indicador del colorspace. Todo el demás comportamiento (cambio de tab, edición de campos, acción Add, eliminación de stops):

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | [Pending confirmation] |
| Notes | Roles ARIA, soporte de teclado, contraste y comportamiento con lectores de pantalla: [Pending confirmation] |

---

## Content Guidelines

Texto visible en las variantes: "Solid", "Gradient", "Gradient color", "Stops", "My colors library", "Add", "Hex". Los valores de campos mostrados (#4F46E5, 100%, 0%, #EDF7F7, #23748F) son contenido de ejemplo.

---

## Examples

### Example 1

Configuration:

```text
Type=Solid
```

Description:

Selección de color sólido.

### Example 2

Configuration:

```text
Type=Gradient
```

Description:

Selección de color en degradado.

### Example 3

Configuration:

```text
[Pending confirmation]
```

Description:

No hay un tercer ejemplo documentado.

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
- Ambas variantes (Type=Solid, Type=Gradient) contrastadas con la metadata y el contexto de diseño.
- Componentes anidados identificados: Tab, Field Master, Clear button, Icon Button, Cursor, Selector.

---

## Pending Clarification

- Combinaciones inválidas: no hay ninguna documentada. Type es la única propiedad.
- El Icon Button junto a cada stop se describe como "(—)", pero su capa se llama trash. Su función no está documentada.
- El slider llamado Saturation se describe como "Saturation/Opacity". No está documentado qué valor controla ni su relación con el campo de opacidad (%).
- Las opciones del selector de formato Hex no están documentadas.
- El primer chip de swatch tiene borde y sombra que los demás no tienen. Su significado (seleccionado o activo) no está documentado.
- Los valores de ejemplo son inconsistentes: el indicador del colorspace es #23748f mientras que el campo Hex muestra #4F46E5. Se tratan como contenido de ejemplo.
- Valores fijos sin token: colores del degradado del colorspace, rellenos de los chips de swatch, el anillo de 2 px del indicador (rgba(0,0,0,0.25)), el gap de 8 px dentro de la sección de degradado y el grosor de 2 px del borde de la tab seleccionada.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens. Elevation/XS, Elevation/SM y Elevation/MD se asocian a los tokens de sombra por valor, no por una asignación explícita.
- Estilo de texto aplicado a las etiquetas de sección (Text/Body/XS Strong vs Text/Button/SM).
- Las propiedades expuestas por los componentes anidados (Tab, Field Master) no se documentan aquí más allá de lo visible.
- status, version y owner.
- Comportamiento del ancho, Semantics, Interaction, Accessibility y Content Guidelines.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.