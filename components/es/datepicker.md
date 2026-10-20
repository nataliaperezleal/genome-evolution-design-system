---
component: "Datepicker"
system: "Genome Evolution Design System"
type: "Selection Panel / Complex Control"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-2296"
last_updated: "2026-10-20"
tags:
  - "Selection Panel"
  - "Complex Control"
  - "Datepicker"
---

# Datepicker — Genome Evolution Design System

Panel de selección de fecha con tres vistas navegables: Numbers (cuadrícula de días), Month (cuadrícula de meses) y Year (cuadrícula de años).

## Quick Reference

### What it is

Panel de selección de fecha con tres vistas navegables. Soporta dos tamaños, dos colores de acento, botones de pie opcionales y una leyenda de convenciones opcional.

### Key Properties

- Type [Numbers | Month | Year] — default: Numbers
- Size [SM | MD] — default: SM
- Color [Evergreen | Indigo] — default: Evergreen
- showButtons [true | false] — default: true
- showConventions [true | false] — default: true

### Default Configuration

Type=Numbers, Size=SM, Color=Evergreen, showButtons=true, showConventions=true

### Invalid Combinations

- showConventions=true con Type=Month o Type=Year
- Mezclar tokens Evergreen e Indigo en la misma instancia

### Typical Usage

- Selector de día: Type=Numbers, Size=SM, Color=Evergreen, showButtons=true
- Selector de día Indigo: Type=Numbers, Size=SM, Color=Indigo, showButtons=true
- Selector de mes: Type=Month, Size=SM, Color=Evergreen, showButtons=true
- Selector de año sin pie: Type=Year, Size=MD, Color=Indigo, showButtons=false
- Selector de día con leyenda: Type=Numbers, Size=SM, Color=Evergreen, showConventions=true

---

## Purpose / Intent

### Problem Solved

Permite al usuario seleccionar una fecha específica y navegar entre las vistas de día, mes y año.

### Typical Context

Formularios, filtros y configuraciones.

---

## When to Use

- El usuario necesita seleccionar una fecha específica en formularios, filtros o configuraciones
- Se requiere navegación entre vistas (día → mes → año)

---

## When NOT to Use

- Para selección compleja de rangos de fechas sin adaptar el componente
- Cuando basta una entrada de fecha en texto libre

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Header | Obligatorio | Etiqueta de fecha (p. ej. "MAR 2021" en Type=Numbers, un año en Type=Month, un rango de años en Type=Year) con un ícono arrow-dropdown, más un grupo Arrows con los íconos chevron-left y chevron-right |
| Content | Obligatorio | Contiene la cuadrícula del Type seleccionado |
| Days | Obligatorio (Type=Numbers) | Fila de días de la semana: S M T W T F S |
| Week 1 a Week 5 | Obligatorio (Type=Numbers) | Cinco filas de celdas .Number, 7 por fila |
| Celdas .Month | Obligatorio (Type=Month, Type=Year) | Nombres de meses (JAN a DEC) o años (2010 a 2033). Type=Year reutiliza el subcomponente .Month |
| Buttons | Opcional | Pie con un botón Cancel y un botón Apply, separado de la cuadrícula por un borde superior. Controlado por showButtons |
| Conventions | Opcional (Type=Numbers) | Hasta 3 filas, cada una con un punto de color de 8 px y la etiqueta "Convention". Controlado por showConventions |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Numbers: SM 282 px (Evergreen) / 284 px (Indigo), MD 364 px. Month: SM 160 px, MD 218 px. Year: SM 244 px, MD 326 px |
| Width | SM 184 px, MD 256 px |
| Padding | space/8 (8 px) |
| Gap | gap/sm (8 px) |
| Radius | radius/4 (4 px) |

Tamaños de celda (descripción de Figma):

- SM: .Number 24 × 24 px, celdas .Month y de año 42 × 24 px
- MD: .Number 32 × 32 px, celdas .Month y de año 56 × 32 px

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Ninguno |
| Trailing | Ícono arrow-dropdown (12 px) junto a la etiqueta de fecha en el Header |

### Rules

- El Header siempre muestra los íconos chevron-left y chevron-right (12 px) en el grupo Arrows.
- Los mismos íconos del Header aparecen en los tres valores de Type.

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Type

| Value | Description |
|--------|--------|
| Numbers | Cuadrícula de días: fila de días de la semana, 5 filas de celdas .Number, leyenda de convenciones opcional |
| Month | Cuadrícula de meses (JAN a DEC) de celdas .Month. showConventions no es válido |
| Year | Cuadrícula de años (2010 a 2033) de celdas .Month. showConventions no es válido |

### Size

| Value | Description |
|--------|--------|
| SM | Ancho del panel 184 px. .Number 24 × 24 px, .Month 42 × 24 px |
| MD | Ancho del panel 256 px. .Number 32 × 32 px, .Month 56 × 32 px |

### Color

| Value | Description |
|--------|--------|
| Evergreen | Acento verde en la celda seleccionada y en el botón Apply |
| Indigo | Acento morado en la celda seleccionada y en el botón Apply |

### showButtons

| Value | Description |
|--------|--------|
| true | Se muestra el pie con los botones Cancel y Apply |
| false | El pie se oculta |

### showConventions

| Value | Description |
|--------|--------|
| true | Se muestra la leyenda de convenciones. Válido solo con Type=Numbers |
| false | La leyenda de convenciones se oculta |

---

## States

El componente no tiene una propiedad State. Las variantes de Figma muestran estas apariencias de celda.

| State | Description | Visual Changes |
|--------|--------|--------|
| Celda seleccionada | Celda resaltada (5 en Numbers, APR en Month, 2021 en Year) | Fondo relleno, label text/inverse. Numbers Evergreen: relleno surface/evergreen/bold con borde border/evergreen |
| Celda con contorno | Celda "2" en Numbers (Evergreen, SM) | Borde de 1 px border/focus. Significado [Pending confirmation] |
| Día fuera del mes | Días de meses adyacentes (29, 30, 31, 1, 2) | Label text/secondary |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Panel y botón Cancel | Verificado |
| surface/evergreen/bold | Celda .Number seleccionada y botón Apply, Color=Evergreen | Verificado en Type=Numbers, Size=SM, Color=Evergreen |
| surface/indigo/bold | Acento de Color=Indigo | Listado en las variables del nodo; asignación no verificada |
| border/indigo | Celda .Month seleccionada, Color=Indigo | Verificado en Type=Month, Size=MD, Color=Indigo (usado como relleno) |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Etiqueta del Header, números del mes actual, celdas de mes, label Cancel, etiquetas de convenciones | Verificado |
| text/secondary | Fila de días de la semana y días fuera del mes | Verificado |
| text/inverse | Label de la celda seleccionada, label Apply | Verificado |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/default | Borde superior del pie | Verificado. Grosor: width/1 (1) |
| border/strong | Borde del botón Cancel | Verificado |
| border/focus | Celda .Number con contorno | Verificado |
| border/evergreen | Celda .Number seleccionada, Color=Evergreen | Verificado |
| border/indigo | Celda .Month seleccionada, Color=Indigo | Verificado |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Label/XS | Fila de días de la semana | Valores verificados: family/body, weight/semibold, size/11, line-height/16, letter-spacing/wide |
| Text/Body/XXS | Celdas .Number y etiquetas de convenciones | Valores verificados: family/body, weight/regular, size/10, line-height/14 |
| Text/Body/XS Strong | Etiqueta del Header | Listado en los estilos del diseño; también coincide con Text/Button/SM. Asignación exacta no verificada. Valores: size/12, weight/semibold, line-height/16 |
| Text/Button/SM | Labels de Cancel y Apply | Listado en los estilos del diseño; asignación exacta no verificada |
| Text/Body/SM Strong | Celdas .Month, Size=MD | Valores verificados: size/14, weight/semibold, line-height/20. Nombre del estilo listado en los estilos del diseño; asignación no verificada |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/8 | Padding del panel, padding superior de Buttons y Conventions | 8 px |
| space/0 | Resto del padding de Buttons y Conventions | 0 px |
| space/12 | Padding horizontal de los botones del pie | 12 px |
| space/4 | Padding vertical de los botones del pie | 4 px |
| gap/sm | Espacio entre secciones del panel, botones del pie y punto y etiqueta de convención | 8 px |
| gap/xxs | Espacio entre la etiqueta de fecha y arrow-dropdown | 4 px |
| gap/lg | Espacio entre los chevrons | 16 px |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Panel y celdas | 4 px |
| semantic/sm | Botones del pie | 4 px |

---

## Interaction

La descripción de Figma llama navegables a las tres vistas y dice que se requiere navegación entre vistas (día → mes → año). Cómo se comportan la navegación, la selección y los botones del pie:

---

## Accessibility

| Topic | Information |
|--------|--------|
| Notes | Roles ARIA, soporte de teclado

---

## Content Guidelines

Texto visible en las variantes: "MAR 2021", iniciales de los días S M T W T F S, "Cancel", "Apply", "Convention", nombres de meses JAN a DEC y años 2010 a 2033 bajo el rango "2010-2033". Es contenido de ejemplo.

---

## Examples

### Example 1

Configuration:

```text
Type=Numbers, Size=SM, Color=Evergreen, showButtons=true
```

Description:

Selector de día con botones de pie.

### Example 2

Configuration:

```text
Type=Month, Size=SM, Color=Evergreen, showButtons=true
```

Description:

Selector de mes con botones de pie.

### Example 3

Configuration:

```text
Type=Year, Size=MD, Color=Indigo, showButtons=false
```

Description:

Selector de año sin botones de pie.

---

## Invalid Combinations

- showConventions=true con Type=Month o Type=Year
- Mezclar tokens Evergreen e Indigo en la misma instancia

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
- Matriz de variantes contrastada con la metadata (12 variantes: Type × Size × Color).
- Diferencias entre la descripción de Figma y el diseño señaladas en Pending Clarification.

---

## Pending Clarification

- Columnas de la cuadrícula: la descripción de Figma indica 3 columnas para Type=Month y Type=Year, pero la captura y los anchos de celda (42 px × 4 en un área de contenido de 168 px) muestran 4 columnas (3 filas de meses, 6 filas de años).
- La altura del panel para Type=Numbers, Size=SM es 282 px en Evergreen y 284 px en Indigo.
- El significado de la celda "2" con contorno (border/focus, 1 px) en Type=Numbers no está documentado.
- El significado y los colores de los 3 puntos de convención no están documentados. Las etiquetas dicen "Convention" (contenido de ejemplo).
- Los botones del pie son instancias de Button. La descripción los nombra Tertiary/Default/SM (Cancel) y Primary/Evergreen/SM (Apply), pero el botón Cancel muestra un contorno border/strong. No se verificaron las propiedades de las instancias, los tamaños en MD ni el botón Apply en Indigo.
- El relleno de la celda seleccionada es inconsistente entre las variantes revisadas: surface/evergreen/bold (Numbers, Evergreen) vs border/indigo (Month, Indigo). Las demás variantes no se verificaron.
- Los tokens de ícono (icon/primary, icon/secondary, icon/disabled) aparecen en las variables del nodo pero su uso no se identificó; los íconos se exportan como imágenes SVG. space/16, size/16 y Body/small/strong también están listados sin uso identificado.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens.
- status, version y owner.
- Semantics, Interaction, Accessibility, Content Guidelines y Shadow.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.