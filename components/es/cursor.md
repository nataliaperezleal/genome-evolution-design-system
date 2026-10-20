---
component: "Cursor"
system: "Genome Evolution Design System"
type: "Visual Reference / Prototype Asset"
status: "Done"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2204-2358"
last_updated: "2026-10-20"
tags:
  - "Cursor"
  - "Prototype Asset"
  - "Visual Reference"
---

# Cursor — Genome Evolution Design System

Biblioteca de representaciones de cursores del sistema para prototipos interactivos, documentación de UX, guías de patrones de interacción y referencias de implementación de cursores CSS.

## Quick Reference

### What it is

Biblioteca de representaciones de cursores del sistema. Una única propiedad Type selecciona qué cursor se muestra. La descripción de Figma agrupa los valores en categorías funcionales.

### Key Properties

- Type — 38 valores encontrados en Figma, default: Pointer 👆
- Pointers: Arrow ↖︎ | Pointer 👆 | Grab 🖐 | Grabbed ✊
- Arrow badges: Arrow ➕ | Arrow ⌛️ | Arrow 🚫 | Arrow ❌
- Tools: Move | Zoom ➕ | Zoom ➖ | Alias ⤤ | Screenshot 📷 | Select Area ✛
- Text and editing: Input | | ⌶ - Horizontal | ⌶ - Vertical | Cell ✚ | Cross ✛ | Help ？
- Resize: Resize ← | Resize → | Resize ↑ | Resize ↓ | Resize ↔︎ | Resize ↕︎
- Direction: Direction ← | Direction → | Direction ↑ | Direction ↓ | Direction ↖︎ | Direction ↗︎ | Direction ↙︎ | Direction ↘︎ | Direction ↔︎ | Direction ↕︎ | Direction  ⤡ | Direction ⤢

### Default Configuration

Type=Pointer 👆

### Invalid Combinations

- Usar Direction cuando se necesita Resize (semántica distinta)
- Usar las variantes Arrow con badge cuando el badge no tiene significado funcional
- Usar Grab 🖐 y Grabbed ✊ de forma intercambiable

### Typical Usage

- Pointer (CSS pointer): Type=Pointer 👆
- Entrada de texto (CSS text): Type=Input |
- Acción bloqueada (CSS not-allowed): Type=Arrow 🚫

---

## Purpose / Intent

### Problem Solved

Ofrece una referencia visual de los cursores del sistema en prototipos interactivos, documentación de UX, guías de patrones de interacción y referencias de implementación de cursores CSS.

### Typical Context

Prototipos interactivos, documentación de UX, guías de patrones de interacción y referencias de implementación de cursores CSS.

---

## When to Use

- Representar el cursor del sistema en prototipos interactivos
- Documentar patrones de interacción de UX
- Dar una referencia visual para la implementación de cursores CSS

---

## When NOT to Use

- Como ícono decorativo dentro de la UI
- Para reemplazar los cursores nativos del sistema operativo sin una justificación funcional clara

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Cursor glyph | Obligatorio | La ilustración del cursor seleccionada por Type. La mayoría de las variantes se exportan como imágenes SVG |
| Color layer | Opcional (Type=Input \|) | Capa de máscara de 24 × 24 px rellena con icon/primary, usada solo por Type=Input \| |
| Badge | Opcional (Type=Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌) | Badge de color que acompaña a la flecha en las cuatro variantes de 28 × 40 px |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 24 px (Standard), 40 px (Extended), 28 px (Wide) |
| Width | 24 px (Standard), 28 px (Extended), 28 px (Wide) |
| Padding | [Pending confirmation] |
| Gap | [Pending confirmation] |
| Radius | [Pending confirmation] |

Grupos de tamaño (según la metadata de variantes):

- Standard 24 × 24 px (32 variantes): Arrow ↖︎, Pointer 👆, Grab 🖐, Grabbed ✊, Zoom ➕, Zoom ➖, Move, Help ？, ⌶ - Horizontal, ⌶ - Vertical, Input |, Cell ✚, Cross ✛, Alias ⤤, todos los Resize, todos los Direction
- Extended 28 × 40 px (4 variantes): Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌
- Wide 28 × 28 px (2 variantes): Screenshot 📷, Select Area ✛

---

## Semantics

Biblioteca de representaciones de cursores del sistema para prototipos, documentación de UX, guías de patrones de interacción y referencias de cursores CSS. La descripción de Figma de Type=Input | dice "Blinking text cursor".

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Ninguno. El componente no tiene slots de ícono |
| Trailing | Ninguno. El componente no tiene slots de ícono |

### Rules

- Type=Input | se renderiza como una capa de máscara (Color layer) rellena con icon/primary.
- Las demás variantes revisadas se exportan como imágenes SVG.
- Las cuatro variantes Arrow con badge (Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌) combinan la flecha con un badge y usan el tamaño 28 × 40 px.

---

## Variants (Properties)

Los nombres de propiedades y valores deben coincidir exactamente con Figma.

### Type

Default: Pointer 👆. Los equivalentes CSS se muestran solo donde la descripción de Figma los documenta.

| Value | Description |
|--------|--------|
| Arrow ↖︎ | Pointers. 24 × 24 px. CSS: default |
| Pointer 👆 | Pointers. 24 × 24 px. CSS: pointer. Valor por defecto |
| Grab 🖐 | Pointers. 24 × 24 px. CSS: grab |
| Grabbed ✊ | Pointers. 24 × 24 px. CSS: grabbing |
| Arrow ➕ | Arrow badges. 28 × 40 px |
| Arrow ⌛️ | Arrow badges. 28 × 40 px |
| Arrow 🚫 | Arrow badges. 28 × 40 px. CSS: not-allowed |
| Arrow ❌ | Arrow badges. 28 × 40 px |
| Move | Tools. 24 × 24 px. CSS: move |
| Zoom ➕ | Tools. 24 × 24 px. CSS: zoom-in |
| Zoom ➖ | Tools. 24 × 24 px. CSS: zoom-out |
| Alias ⤤ | Tools. 24 × 24 px |
| Screenshot 📷 | Tools. 28 × 28 px |
| Select Area ✛ | Tools. 28 × 28 px |
| Input \| | Text and editing. 24 × 24 px. CSS: text. Descripción en Figma: "Blinking text cursor" |
| ⌶ - Horizontal | Text and editing. 24 × 24 px |
| ⌶ - Vertical | Text and editing. 24 × 24 px |
| Cell ✚ | Text and editing. 24 × 24 px |
| Cross ✛ | Text and editing. 24 × 24 px. CSS: crosshair |
| Help ？ | Text and editing. 24 × 24 px. CSS: help |
| Resize ← | Resize. 24 × 24 px |
| Resize → | Resize. 24 × 24 px |
| Resize ↑ | Resize. 24 × 24 px |
| Resize ↓ | Resize. 24 × 24 px |
| Resize ↔︎ | Resize. 24 × 24 px. CSS: ew-resize |
| Resize ↕︎ | Resize. 24 × 24 px. CSS: ns-resize |
| Direction ← | Direction. 24 × 24 px |
| Direction → | Direction. 24 × 24 px |
| Direction ↑ | Direction. 24 × 24 px |
| Direction ↓ | Direction. 24 × 24 px |
| Direction ↖︎ | Direction. 24 × 24 px |
| Direction ↗︎ | Direction. 24 × 24 px |
| Direction ↙︎ | Direction. 24 × 24 px |
| Direction ↘︎ | Direction. 24 × 24 px |
| Direction ↔︎ | Direction. 24 × 24 px |
| Direction ↕︎ | Direction. 24 × 24 px |
| Direction  ⤡ | Direction. 24 × 24 px. El valor en Figma tiene dos espacios después de "Direction" |
| Direction ⤢ | Direction. 24 × 24 px |

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| [Pending confirmation] | El componente no tiene una propiedad State | [Pending confirmation] |

---

## Token Mapping

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Type=Input \| (relleno de la máscara Color layer) | Verificado. Valor #5f6d62 |

### Shadow

| Token | Usage | Notes |
|--------|--------|--------|
| shadow-l | Sombra general | Listado en los estilos del diseño de la variante Arrow ❌ y descrito como la sombra general. Drop shadow #7575752E, offset (0, 0), blur 10. Uso por variante no verificado |

---

## Interaction

La descripción de Figma de Type=Input | dice "Blinking text cursor". Todo el demás comportamiento, animaciones e interacciones de prototipo:

---

## Examples

### Example 1

Configuration:

```text
Type=Pointer 👆
```

Description:

Valor por defecto. Equivalente CSS: pointer.

### Example 2

Configuration:

```text
Type=Input |
```

Description:

Cursor de texto. Equivalente CSS: text.

### Example 3

Configuration:

```text
Type=Arrow 🚫
```

Description:

Variante Arrow con badge, 28 × 40 px. Equivalente CSS: not-allowed.

---

## Invalid Combinations

- Usar Direction cuando se necesita Resize (semántica distinta)
- Usar las variantes Arrow con badge cuando el badge no tiene significado funcional
- Usar Grab 🖐 y Grabbed ✊ de forma intercambiable

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
- Lista de variantes contrastada con la metadata (38 variantes).
- Diferencias entre la descripción de Figma y las variantes señaladas en Pending Clarification.

---

## Pending Clarification

- La descripción de Figma indica 39 variantes en 7 grupos, pero la metadata muestra 38 variantes y la descripción lista solo 6 grupos. Clone ↖︎ aparece en la descripción (grupo Tools y tamaños Standard) pero no existe una variante Type=Clone ↖︎.
- Mayúsculas en el nombre de la propiedad: la descripción usa type, las variantes usan Type. Este documento sigue el nombre de las variantes.
- El valor de Figma "Direction  ⤡" tiene dos espacios después de "Direction". Se conserva tal cual en Figma.
- Color del badge de las flechas: la descripción indica Artificial/Artificial-500 (#7B61FF), mientras que las variables del nodo listan Artificial/Artificial-400 (#836FE4). Ninguno se documenta como confirmado.
- Variables listadas en el nodo cuyo uso no se identificó: icon/danger, icon/inverse, text/success, link/default, link/visited, background/canvas, radius/0, Artificial/Artificial-400. La mayoría de las variantes se exportan como imágenes SVG, por lo que no se puede verificar la asignación de tokens dentro de la ilustración.
- Los equivalentes CSS están documentados solo para algunos valores; el resto no está documentado.
- Los nombres de tokens se tomaron tal cual de Figma y no se cruzaron con los archivos JSON de tokens.
- status, version y owner.
- Semantics más allá de la descripción, Interaction, Accessibility y Content Guidelines.

---

## Notes / Changelog

Generado a partir del material fuente disponible el 2026-10-20.