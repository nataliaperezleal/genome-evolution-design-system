---
component: "Cursor"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2204-2358"
last_updated: "2026-10-22"
tags:
  - "cursor"
  - "pointer"
  - "illustration"
---

# Cursor

System: Genome Evolution Design System

## Component Summary

Cursor is a set of 38 pointer and text-cursor graphics selected through a single `Type` property, covering arrows, hands, zoom, text, selection, resize and direction cursors.

## Quick Reference

### What It Is

Evidence-based interpretation: Cursor provides visual representations of mouse pointers and text cursors for use in designs, mockups and prototypes. This is supported by the component name, the `Type` values (for example `Arrow ↖︎`, `Pointer 👆`, `Grab 🖐`, `Zoom ➕`, `Resize ↔︎`), their graphics and their placement inside other components: Color Picker shows a `Cursor` instance (`Type=Pointer 👆`) over its color area to illustrate interaction.

Verified specification: `Type=Input |` is described in Figma as a "Blinking text cursor".

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | 38 values; see Variants | Pointer 👆 |

The default is taken from the component property definition in Figma. `Type` values include symbols and emoji, and must be used exactly as written (see Content Guidelines).

### Default Configuration

`Type=Pointer 👆`: a 24 × 24 px pointing-hand cursor in `icon/primary` with a `background/canvas` outline.

### Typical Usage

Verified observation: The component set contains 38 variants with no properties other than `Type`. Most variants are 24 × 24 px; the arrow-with-badge variants are 28 × 40 px; `Select Area ✛` and `Screenshot 📷` are 28 × 28 px.

Evidence-based interpretation:

- Place a Cursor instance in a design to show where and how the user is pointing or interacting (as Color Picker does with `Pointer 👆`).
- Choose the `Type` whose name matches the interaction being illustrated: `Pointer 👆` for clickable elements, `Grab 🖐` / `Grabbed ✊` for draggable content, `Resize` and `Direction` types for resizing or moving in a direction, `Input |` for a text insertion point.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent, reusable set of cursor graphics so designs can illustrate pointer interaction without drawing cursors ad hoc.

### Expected Outcome

Evidence-based interpretation: Designs and prototypes communicate the expected pointer feedback for each interaction.

### Typical Context

Verified observation: Used inside Color Picker (`Type=Pointer 👆` over the color area handle). Other contexts are not documented in Figma.

## When to Use

Evidence-based interpretations based on the variant names and graphics:

- To illustrate the pointer state over an interactive element in a mockup or prototype.
- To show a blinking text cursor in a text field (`Input |`, verified description).

## When NOT to Use

[No documented restrictions found]

Limitations of the current component:

- Each type has a single fixed size and color; there are no size, color or state properties.
- Graphics are flattened vectors; their parts cannot be recolored through properties.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Cursor graphic | Required | A single flattened vector graphic for the selected `Type`. |
| Badge | Present in arrow-with-badge types | Status badge below and to the right of the arrow (`Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌`). |
| Color layer | Present in `Input \|` | `icon/primary` layer masked to the text cursor shape. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — standard types | 24 × 24 px | Variant dimensions |
| Size — `Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌` | 28 × 40 px | Variant dimensions |
| Size — `Select Area ✛`, `Screenshot 📷` | 28 × 28 px | Variant dimensions |
| Overflow — `Input \|` | Clipped | Design context |

The component does not use auto layout.

## Semantics

Evidence-based interpretation, based on the variant names and graphics:

- **Arrows**: `Arrow ↖︎` is the standard arrow. `Arrow ➕` adds a green plus badge, `Arrow ⌛️` a blue progress badge, `Arrow 🚫` a red prohibition badge and `Arrow ❌` a red cross badge.
- **Hands**: `Pointer 👆` (pointing hand), `Grab 🖐` (open hand), `Grabbed ✊` (closed hand).
- **Zoom and move**: `Zoom ➕`, `Zoom ➖` (magnifier with plus or minus), `Move` (four-way arrows).
- **Text**: `Input |` (blinking text cursor, verified), `⌶ - Horizontal` (vertical I-beam graphic), `⌶ - Vertical` (horizontal I-beam graphic).
- **Selection and other**: `Help ？` (question mark), `Cell ✚` (thick plus), `Cross ✛` (thin crosshair), `Alias ⤤` (curved arrow), `Select Area ✛` (crosshair with target), `Screenshot 📷` (camera).
- **Resize**: `Resize ←`, `→`, `↑`, `↓` (arrow against a bar, indicating an edge), `Resize ↔︎`, `Resize ↕︎` (two-way arrows with a center bar).
- **Direction**: `Direction ←`, `→`, `↑`, `↓`, `↖︎`, `↗︎`, `↙︎`, `↘︎` (single arrows), `Direction ↔︎`, `↕︎`, `⤡`, `⤢` (two-way arrows).

Not verified in Figma: correspondence to platform or CSS cursor values, and any behavior.

## Iconography

Each `Type` is a cursor graphic; see Semantics for descriptions and Token Mapping for colors.

## Variants (Properties)

The inventory below is complete: all 38 variants were listed.

### Type

| Group | Values |
|-------|--------|
| Arrow | `Arrow ↖︎`, `Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌` |
| Hand | `Pointer 👆`, `Grab 🖐`, `Grabbed ✊` |
| Zoom and move | `Zoom ➕`, `Zoom ➖`, `Move` |
| Text | `Input \|`, `⌶ - Horizontal`, `⌶ - Vertical` |
| Selection and other | `Help ？`, `Cell ✚`, `Cross ✛`, `Alias ⤤`, `Select Area ✛`, `Screenshot 📷` |
| Resize | `Resize ←`, `Resize →`, `Resize ↑`, `Resize ↓`, `Resize ↔︎`, `Resize ↕︎` |
| Direction | `Direction ←`, `Direction →`, `Direction ↑`, `Direction ↓`, `Direction ↖︎`, `Direction ↗︎`, `Direction ↙︎`, `Direction ↘︎`, `Direction ↔︎`, `Direction ↕︎`, `Direction  ⤡`, `Direction ⤢` |

The groups above are an editorial organization; Figma defines a single flat `Type` list.

## States

Cursor has no state property.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Icon | `icon/primary` | Main cursor color | Variable binding |
| Background | `background/canvas` | Light outline around cursor graphics | Variable binding |
| Text | `text/success` | `Arrow ➕` badge | Variable binding |
| Link | `link/default`, `link/visited` | `Arrow ⌛️` badge | Variable binding |
| Icon | `icon/danger` | `Arrow 🚫` and `Arrow ❌` badges | Variable binding |
| Icon | `icon/inverse` | Cross mark in the `Arrow ❌` badge | Variable binding |
| Effect | `shadow-l` | `Arrow 🚫` and `Arrow ❌` | Effect style |
| Radius | `radius/0` | Direction cursors (inspected: `Direction ←`) | Variable binding |

Current behavior: The color style `Artificial/Artificial-400` is also used within the component set; the variant that uses it was not isolated during inspection.

## Interaction

Cursor is a static graphic with no states or prototype interactions. `Input |` is described as blinking, but no animation is defined in the component.

## Accessibility

Accessibility-related observations:

- Cursor graphics are decorative illustrations within designs; they carry no text.
- Graphics use `icon/primary` with a `background/canvas` outline, which helps them stand out on varied backgrounds.
- Badge meanings rely on color and symbol (plus, progress, prohibition, cross).

Not verified in Figma: whether cursor graphics are intended for use in production interfaces or only in design artifacts.

## Content Guidelines

Verified observations about `Type` values:

- Values include symbols and emoji (for example `Pointer 👆`, `Arrow ⌛️`, `Help ？`) and some include invisible variation selectors (for example `Arrow ↖︎`, `Resize ↔︎`).
- `Help ？` uses a full-width question mark.
- `Direction  ⤡` contains two spaces between the word and the arrow, while `Direction ⤢` contains one.
- `⌶ - Horizontal` and `⌶ - Vertical` begin with the `⌶` symbol.

Values must be copied exactly when referencing a variant.

## Examples

### Clickable element

Configuration: `Type=Pointer 👆`

Description: Pointing hand over an interactive element, as used in Color Picker.

Evidence / Classification: Default variant; usage observed in Color Picker.

### Text field focus

Configuration: `Type=Input |`

Description: Blinking text cursor inside a text field.

Evidence / Classification: Existing variant; description documented in Figma.

### Unavailable action

Configuration: `Type=Arrow 🚫`

Description: Arrow with a red prohibition badge.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"pointer" \| "text" \| "grab"` | `"pointer"` | Cursor glyph style. |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"default"` | Optional tone emphasis. |
| `label` | `string` | `undefined` | Optional label shown next to the glyph. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Cursor label

```tsx
import { Cursor } from "@genome-evolution/react";

<Cursor variant="grab" tone="indigo" label="Drag" />;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
