---
component: "Group"
system: "Genome Evolution"
type: "Component"
status: "Done"
version: "1.0"
owner: "UX Design"
figma_node: "2203:2517"
last_updated: "2026-10-20"
tags:
  - "collapsible-panel"
  - "footer-actions"
  - "paginator"
---

# Group — Genome Evolution

Panel colapsable que alterna entre un estado cerrado (header con título y chevron) y un estado abierto (header, área de contenido y footer con paginador e íconos de acción), con dos colores de acento en el estado abierto.

## Quick Reference

### What it is

Panel colapsable utilizado para agrupar contenido en secciones.

### Key Properties

- State [Collapsed | Expanded] — default: Collapsed
- Color [Default | Evergreen | Indigo] — default: Default
- showFooter [true | false] — default: true
- showPaginator [true | false] — default: true
- showLeftIcons [true | false] — default: false
- showRightIcons [true | false] — default: false
- showLeftIcon1–4 [true | false] — default: true
- showRighIcon1 [true | false] — default: true
- showIconRight2 [true | false] — default: true
- showRightIcon3 [true | false] — default: true
- showRightIcon4 [true | false] — default: true
- title — texto del header (default: "Title")
- children — slot de contenido libre dentro del área de contenido (Content2)

### Default Configuration

State=Collapsed, Color=Default, title="Title"

### Invalid Combinations

- State=Collapsed con Color=Evergreen o Color=Indigo (Color solo aplica cuando el panel está abierto).
- showLeftIcons=true y showRightIcons=true simultáneamente, si el espacio del paginador se comprime.
- showFooter=false con showPaginator=true (showPaginator depende de que showFooter=true).

### Typical Usage

- Panel cerrado estándar: State=Collapsed, Color=Default, title="Sección"
- Abierto con paginador: State=Expanded, Color=Evergreen, showFooter=true, showPaginator=true
- Abierto con acciones a la derecha: State=Expanded, Color=Indigo, showRightIcons=true, showPaginator=false
- Abierto con acciones a la izquierda: State=Expanded, Color=Evergreen, showLeftIcons=true, showPaginator=true

---

## Purpose / Intent

### Problem Solved

Agrupa contenido en secciones colapsables dentro de un layout, con paginación opcional del área de contenido y acciones contextuales en el footer del panel.

### Typical Context

Secciones colapsables dentro de un layout. El componente tiene un ancho fijo de 648px.

---

## When to Use

- Se necesita agrupar contenido en secciones colapsables dentro de un layout.
- El área de contenido requiere paginación.
- Se necesitan acciones contextuales en el footer del panel.

---

## When NOT to Use

- Como modal o dialog.
- Cuando el contenido no necesita agruparse ni colapsarse.
- En contextos donde el ancho fijo de 648px no puede acomodarse.

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Panel exterior. Collapsed: fondo, borde de 1px y radio. |
| Head | Required | Chevron (chevron-down al estar colapsado, chevron-up al estar expandido) y título. Altura de 32px. Expanded: borde inferior de 1px en el color de acento. |
| Content area (Content2) | Required en State=Expanded | Área de 184px de alto con el slot `children`. |
| Footer | Optional (showFooter) | Barra de 40px de alto, solo en State=Expanded. |
| Paginator | Optional (showPaginator) | first-page, chevron-left, caja Page ("0" y "/ 0"), chevron-right, last-page. |
| Left icons group | Optional (showLeftIcons) | add, pencil, trash, file-search (controlados individualmente por showLeftIcon1–4). |
| Right icons group | Optional (showRightIcons) | add, trash, save, cancel (controlados individualmente por showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4). |

### Layout

| Property | Value |
|-----------|-----------|
| Height | State=Collapsed: 32px. State=Expanded: 288px (Head 32px + área de contenido 184px + Footer 40px + padding 16px × 2). |
| Width | 648px (fijo) |
| Padding | Collapsed: horizontal space/16, vertical space/4. Wrapper de contenido en Expanded: space/16. Footer: horizontal 16px, vertical 4px (valores hard-coded). |
| Gap | Collapsed: 8px (hard-coded). Wrapper de contenido en Expanded: gap/none. Grupos de íconos del footer: 16px. Paginador: gap/lg. Gap del footer entre grupos: 110px (hard-coded). |
| Radius | 4px (hard-coded) |

---

## Iconography

El componente no tiene un slot leading o trailing en el sentido de la plantilla. Los íconos que contiene se documentan a continuación.

| Location | Icons | Size |
|--------|--------|--------|
| Head | chevron-down (State=Collapsed), chevron-up (State=Expanded) | 12×12px |
| Footer, grupo izquierdo | add, pencil, trash, file-search | 16×16px |
| Footer, grupo derecho | add, trash, save, cancel | 16×16px |
| Paginator | first-page, chevron-left, chevron-right, last-page | 12×12px |

### Rules

- Los íconos del grupo izquierdo se muestran u ocultan individualmente con showLeftIcon1–4 cuando showLeftIcons=true.
- Los íconos del grupo derecho se muestran u ocultan individualmente con showRighIcon1 (add), showIconRight2 (trash), showRightIcon3 (save) y showRightIcon4 (cancel) cuando showRightIcons=true.

---

## Variants (Properties)

Property names and values must match Figma exactly.

### State

| Value | Description |
|--------|--------|
| Collapsed | Panel cerrado: solo el header con chevron-down y título. Altura de 32px. |
| Expanded | Panel abierto: header con chevron-up, área de contenido y footer. Altura de 288px. |

### Color

| Value | Description |
|--------|--------|
| Default | Usado por State=Collapsed. |
| Evergreen | Color de acento para State=Expanded: el borde inferior del Head usa border/evergreen. |
| Indigo | Color de acento para State=Expanded: el borde inferior del Head usa border/indigo. |

### showFooter

| Value | Description |
|--------|--------|
| true | Muestra el footer completo. |
| false | Oculta el footer completo. |

### showPaginator

| Value | Description |
|--------|--------|
| true | Muestra el paginador en el footer. |
| false | Oculta el paginador. |

### showLeftIcons

| Value | Description |
|--------|--------|
| true | Muestra el grupo de íconos izquierdo en el footer. |
| false | Oculta el grupo de íconos izquierdo. |

### showRightIcons

| Value | Description |
|--------|--------|
| true | Muestra el grupo de íconos derecho en el footer. |
| false | Oculta el grupo de íconos derecho. |

### showLeftIcon1–4

| Value | Description |
|--------|--------|
| true | Muestra el ícono individual del grupo izquierdo (add, pencil, trash, file-search respectivamente). Default: true. |
| false | Oculta el ícono individual. |

### showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4

| Value | Description |
|--------|--------|
| true | Muestra el ícono individual del grupo derecho (add, trash, save, cancel respectivamente). Default: true. |
| false | Oculta el ícono individual. |

Los nombres de propiedad se conservan exactamente como aparecen en Figma, incluidos `showRighIcon1` y `showIconRight2`.

### title

Texto del header. Default: "Title".

### children

Slot para contenido libre dentro del área de contenido (Content2).

---

## States

Las variantes exponen dos estados visibles del panel. Los estados interactivos (hover, pressed, focus, disabled) están `[Pending confirmation]`.

| State | Description | Visual Changes |
|--------|--------|--------|
| Collapsed | Panel cerrado (Color=Default). | Altura de 32px; chevron-down; título con Text/Body/XXS en text/secondary; borde de 1px border/default. |
| Expanded | Panel abierto (Color=Evergreen o Color=Indigo). | Altura de 288px; chevron-up; título semibold (size/12) en text/primary; borde inferior del Head en el color de acento; área de contenido y footer visibles. |

---

## Token Mapping

Niveles de verificación: "Verified" = visto en el código exportado del componente. "Listed in node variables; binding not verified" = el token aparece en las variables del nodo, pero no se pudo confirmar su vinculación con este elemento.

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Container (State=Collapsed); caja Page del paginador | Verified |
| surface/subtlest | Footer | Verified (#f7f8f7). Ver Pending Clarification. |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/secondary | Título, State=Collapsed | Verified |
| text/primary | Título, State=Expanded; números del paginador | Verified |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/default | Borde del container (1px); caja Page del paginador | Verified |
| border/evergreen | Borde inferior del Head, Color=Evergreen | Verified |
| border/indigo | Borde inferior del Head, Color=Indigo | Verified |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Íconos | Listed in node variables; binding not verified |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XXS | Título, State=Collapsed (size/10, line-height/14, weight/regular, family/body, letter-spacing/normal) | Verified |
| Text/Body/XS Strong | Título, State=Expanded (size/12, line-height/16, weight/semibold) | Listed in node variables; style name not verified in code |
| size/10 | Números "0" y "/ 0" del paginador | Verified |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Padding horizontal (Collapsed y Head); padding del wrapper de contenido | Verified |
| space/4 | Padding vertical | Verified |
| space/8 | Padding horizontal de la caja Page del paginador | Verified |
| gap/none | Gap del wrapper de contenido | Verified |
| gap/xxs | Gap de la caja Page del paginador | Verified |
| gap/lg | Gap del paginador | Verified |

Valores sin token (hard-coded): gap de Collapsed 8px; padding del footer 16px / 4px; gap entre grupos del footer 110px.

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| spread/md | Caja Page del paginador | Verified |
| spread/lg | Caja interna del número del paginador | Verified |

El radio del container de 4px es hard-coded (sin token).

---

## Examples

### Example 1

Configuration:

```text
State=Collapsed, Color=Default, title="Sección"
```

Description:

Panel cerrado estándar: solo el header con chevron-down y título.

### Example 2

Configuration:

```text
State=Expanded, Color=Evergreen, showFooter=true, showPaginator=true
```

Description:

Panel abierto con acento Evergreen, área de contenido y un footer que incluye el paginador.

### Example 3

Configuration:

```text
State=Expanded, Color=Indigo, showRightIcons=true, showPaginator=false
```

Description:

Panel abierto con acento Indigo y el grupo de íconos derecho (add, trash, save, cancel) en el footer, sin paginador.

---

## Invalid Combinations

- State=Collapsed con Color=Evergreen o Color=Indigo.
- showLeftIcons=true y showRightIcons=true simultáneamente, si el espacio del paginador se comprime.
- showFooter=false con showPaginator=true.

---

## QA Checklist

- Properties documented.
- Property names match Figma exactly.
- Variant values match Figma exactly.
- Defaults documented.
- Invalid combinations documented.
- Tokens verified.
- No undocumented behavior added.
- No undocumented accessibility behavior added.
- Discrepancias entre la descripción de Figma y el diseño visible registradas en Pending Clarification.
- Valores hard-coded (sin token) identificados.

---

## Pending Clarification

- Nomenclatura de propiedades: la descripción de Figma lista `state` [false | true] y `color`, mientras que las variantes y el código exportado exponen `State` [Collapsed | Expanded] y `Color`. Este documento usa los nombres de las variantes. Confirmar los nombres finales.
- Fondo del footer: la descripción indica #fafafa (Neutral/Neutral200); el diseño usa surface/subtlest (#f7f8f7).
- Estilo del título en State=Collapsed: la descripción indica Text/Body/XS (12/16); el diseño usa Text/Body/XXS (size/10, line-height/14).
- Ancho de Content2: 617px en Color=Indigo frente a ancho completo en Color=Evergreen. Confirmar la intención.
- Valores hard-coded sin token: radio del container 4px, gap de Collapsed 8px, padding del footer 16px / 4px, gap de 110px entre grupos del footer.
- Radio de la caja Page del paginador: la descripción indica radius/4; el diseño usa spread/md y spread/lg.
- Vinculación de tokens de los íconos (icon/primary): no verificada, los íconos se exportan como SVG.
- Los nombres de propiedad `showRighIcon1` y `showIconRight2` no siguen la nomenclatura del resto. Se conservan como en Figma; confirmar si son intencionales.
- Los nombres de tokens no se contrastaron con los archivos de tokens del proyecto.
- status, version y owner.
- Semantics, Interaction, Accessibility, Content Guidelines, Expected Outcome, estados interactivos y Shadow.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.