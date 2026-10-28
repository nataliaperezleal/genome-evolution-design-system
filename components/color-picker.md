---
component: "Color Picker"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.0"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3082-25123"
last_updated: "2026-10-22"
tags:
  - "color-picker"
  - "input"
  - "panel"
---

# Color Picker

System: Genome Evolution Design System

## Component Summary

Color Picker is a 264 px panel for choosing a color, with a `Solid` mode (color area, hue and opacity sliders, value fields) and a `Gradient` mode (gradient bar with stops and per-stop fields), both ending with a saved colors library.

## Quick Reference

### What It Is

The Color Picker is an input component that allows users to select, preview, and edit colors within an interface. It enables both visual and numerical color selection, providing precision and flexibility for customization, visual configuration, and design-related tasks.

The component supports two main modes: Solid for single colors and Gradient for multi-stop color compositions

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Solid, Gradient | Solid |

The default is taken from the component property definition in Figma. The component exposes no other properties; the values in the fields and the swatches are sample content.

### Default Configuration

`Type=Solid`: a 264 × 396 px panel with the "Solid" tab selected, a color area, hue and opacity sliders, a row of value fields (format "Hex", "#4F46E5", "100%") and the "My colors library" section.

### Typical Usage

Verified observation: The component set has two variants, one per `Type`. The tab row shows which mode is active: the selected tab has a 2 px `border/selected` bottom border.

Evidence-based interpretation:

- Use `Type=Solid` to pick a single color, adjusting hue, position in the color area and opacity, or typing a value.
- Use `Type=Gradient` to define a gradient through its stops (position, color and opacity per stop).
- The "Solid" and "Gradient" tabs correspond to the two `Type` values.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Gives users a single panel to create solid colors and gradients and to reuse saved colors.

### Expected Outcome

Evidence-based interpretation: Users can set an exact color or gradient visually or by value and reuse colors from their library.

### Typical Context

Evidence-based interpretation: The fixed 264 px width, rounded panel and drop shadow (`Elevation/MD`) indicate a floating panel shown on demand. The trigger and placement are not documented in Figma.

## When to Use

- To enable color customization in settings or preferences.
- In visual editing, design, or branding tools.
- When users need to select specific colors for interface elements.
- To configure backgrounds, charts, diagrams, or visual components.
- When support for both solid colors and gradients is required.
- In scenarios where users need to enter or adjust colors using formats such as Hex values.

## When NOT to Use

- When only a small predefined set of colors is available. In those cases, a simple color palette is more appropriate.
- For settings where users do not need detailed color control.
- When the color is informational only and cannot be modified.
- In workflows where the additional complexity of a color picker may negatively impact the user experience.
- As a replacement for simple selection controls when available options are limited.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Panel | Required | Vertical auto layout container with background, padding, radius and shadow. |
| Mode tabs (`Color Options`) | Required | Two nested Tab instances, "Solid" and "Gradient" (`Size=SM`); the active one uses `State=Selected`. |
| Color area (`table`) — Solid | Required in `Solid` | 232 × 152 px saturation/brightness area with a 16 px circular handle (`Swatch`) and a pointer cursor shown on it. |
| Hue slider — Solid | Required in `Solid` | 8 px rainbow track with a circular thumb. |
| Opacity slider — Solid | Required in `Solid` | 8 px track over a checkerboard pattern with a circular thumb (layer named `Saturation`). |
| Value fields (`Fields`) — Solid | Required in `Solid` | Three `Field Master` fields: color format selector ("Hex" with a 20 px selector icon), color value ("#4F46E5") and opacity ("100%"). |
| Gradient section — Gradient | Required in `Gradient` | "Gradient color" title, a 41 px gradient bar over a checkerboard pattern, and two 14 × 18 px stop selectors at the start and end. |
| Stops — Gradient | Required in `Gradient` | "Stops" title and one row per stop: position ("0%" / "100%"), color ("#EDF7F7" / "#23748F"), opacity ("100%") and an Icon Button with a `trash` icon. |
| Saved colors header | Required | "My colors library" title and a Clear button instance labeled "Add" with an add icon. |
| Swatch row (`Row`) | Required | Seven 24 px circular swatches; the first is shown as selected with a 2 px `icon/inverse` border and `Elevation/SM` shadow. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Panel width | 264 px | Variant dimensions |
| Panel height | 396 px (`Solid`), 320 px (`Gradient`) with sample content | Variant dimensions |
| Panel padding | `space/16` (16) | Variable binding |
| Gap between sections | `gap/lg` (16) | Variable binding |
| Panel radius | `radius/8` (8) | Variable binding |
| Panel shadow | `Elevation/MD` | Effect style |
| Tab padding | `space/16` horizontal, `space/4` vertical | Variable bindings |
| Color area | 232 × 152 px, `radius/4` | Layer dimensions, variable binding |
| Color area handle | 16 px circle, 2 px `icon/inverse` border | Design context |
| Sliders (Solid) | 8 px high, full width, `radius/24` | Layer dimensions, variable binding |
| Gradient bar | 41 px high, full width, `radius/2` | Layer dimensions, variable binding |
| Gap inside Gradient section | 8 px | Design context |
| Field row gap | `gap/sm` (8) | Variable binding |
| Field padding | `space/4` (4), gap `gap/xxs` (4) | Variable bindings |
| Field border and radius | `width/1` `border/default`, `radius/4` | Variable bindings |
| Field shadow | `Elevation/XS` | Effect style |
| Stop remove button | Icon Button, `space/4` padding, `semantic/sm` radius, 1 px `border/default`, 16 px icon | Design context |
| Swatches | 24 px circles (`radius/24`), gap `gap/sm` (8) | Layer dimensions, variable bindings |

## Semantics

Evidence-based interpretation:

- The tabs switch between solid color and gradient editing.
- In `Solid`, the color area sets saturation and brightness, the rainbow slider sets hue, and the checkerboard slider and the "100%" field set opacity. The first field selects the value format ("Hex"); the second holds the color value.
- In `Gradient`, each stop row defines a stop's position, color and opacity, and the icon button removes that stop.
- "My colors library" holds saved colors; "Add" adds a color to it. The highlighted swatch represents the currently selected saved color.

Not verified in Figma: HTML elements, ARIA roles (for example, slider or tab roles), keyboard interaction and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Format selector | 20 px selector icon (up/down arrows) in the "Hex" field | Layer, screenshot |
| Add action | Add (plus) icon in the "Add" Clear button | Nested instance |
| Stop removal | Icon layer named `trash` in the Icon Button, rendered as a remove (minus) glyph | Layer name, screenshot |
| Cursor | Pointer cursor instance shown over the color area handle | Nested instance |

## Variants (Properties)

The inventory below is complete: both variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Solid | "Solid" tab selected; color area, hue slider, opacity slider and value fields; saved colors library. | Default |
| Gradient | "Gradient" tab selected; gradient bar with two stop selectors and two stop rows; saved colors library. | — |

## Composition

The component is built from these nested components, which keep their own documentation:

| Nested component | Usage in Color Picker | Configuration observed |
|------------------|----------------------|------------------------|
| Tab | Mode tabs | `Color=Default`, `Size=SM`; `State=Selected` on the active mode, `State=Default` on the other |
| Field Master | Value and stop fields | Text content only |
| Clear button | "Add" action | Label "Add", leading icon swapped to an add icon, trailing icon hidden |
| Icon Button | Stop removal | Outlined, 16 px icon |
| Cursor | Pointer over the color area | `Type=Pointer 👆` |

## States

The Color Picker component set has no state property. Interactive appearances belong to the nested components (for example, Tab and Clear button states).

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Panel and field backgrounds | Variable binding |
| Border | `border/selected` | Active tab bottom border | Variable binding |
| Border | `border/default` | Field and Icon Button borders | Variable binding |
| Border | `icon/inverse` | Color area handle border; selected swatch border | Variable binding |
| Border width | `width/1`, `width/2` | Field borders; selected swatch border | Variable binding |
| Text | `text/secondary`, `text/tertiary` | Active and inactive tab labels | Variable binding |
| Text | `text/primary` | Section titles, field values, "Add" | Variable binding |
| Spacing | `space/16`, `space/8`, `space/4`, `gap/lg`, `gap/sm`, `gap/xxs` | Padding and gaps | Variable binding |
| Radius | `radius/8`, `radius/4`, `radius/24`, `radius/2`, `semantic/sm` | Panel, color area and fields, sliders and swatches, gradient bar, icon button | Variable binding |
| Effect | `Elevation/MD`, `Elevation/SM`, `Elevation/XS` | Panel, selected swatch, fields | Effect styles |
| Typography | `Text/Button/SM` | Tab labels | Text style |
| Typography | `Text/Body/XS Strong` | Section titles ("My colors library", "Gradient color", "Stops") | Text style |
| Typography | `Text/Body/XS` | Field values | Text style |

Current behavior: The swatch colors, the color area gradient, the hue and opacity track images and the color area handle fill are fixed sample values and are not bound to variables.

## Interaction

The component has no state variants or prototype interactions. The pointer cursor over the color area handle is a static illustration.

Not verified in Figma: dragging behavior of the handle, sliders and stop selectors; how values sync between controls and fields; the options of the format selector; how stops are added; what "Add" saves; and keyboard interaction.

## Accessibility

- Required: ensure sufficient contrast between controls, indicators, and backgrounds so interactive elements remain identifiable.
- Required: all color picker controls must be keyboard accessible and provide visible focus states.
- Required: color values and related controls must include accessible labels for assistive technologies.
- Recommended: provide textual alternatives to identify selected colors in addition to visual representation.

## Content Guidelines

Verified observations:

- Tab labels: "Solid", "Gradient".
- Section titles: "Gradient color", "Stops", "My colors library".
- Action label: "Add".
- Sample values: format "Hex"; colors as uppercase hex with "#" ("#4F46E5", "#EDF7F7", "#23748F"); opacity and position as percentages ("100%", "0%").

## Examples

### Solid color

Configuration: `Type=Solid`

Description: Pick a color in the color area or enter a hex value, and set opacity.

Evidence / Classification: Existing variant in Figma.

### Two-stop gradient

Configuration: `Type=Gradient`

Description: Gradient from "#EDF7F7" at 0% to "#23748F" at 100%, both at 100% opacity.

Evidence / Classification: Existing variant in Figma (sample content).

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `"Color"` | Visible label. |
| `defaultValue` | `string` | `"#297A39"` | Initial value (uncontrolled). |
| `value` | `string` | `undefined` | Controlled value. |
| `onChange` | `(value: string) => void` | `undefined` | Change handler. |
| `type` | `"Solid" \| "Gradient"` | `undefined` | Configures the `type` component property. |
| `onTypeChange` | `(type: ColorPickerType) => void` | `undefined` | Configures the `onTypeChange` component property. |
### Examples

#### Controlled color picker

```tsx
import { ColorPicker } from "@genome-evolution/react";

<ColorPicker label="Brand" defaultValue="#297A39" />;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
