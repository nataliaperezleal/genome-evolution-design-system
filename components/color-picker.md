---
component: ColorPicker
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [color, picker, input, gradient, solid, complex]
---

# ColorPicker

## Purpose

ColorPicker is a complex color selection panel that allows users to choose a color through a 2D colorspace canvas, a Hue slider, a Saturation/Opacity slider, and manual text field inputs (Hex and Opacity). It supports two modes: Solid (flat color) and Gradient. Both modes include a saved color palette (Swatches) and an Add action. Gradient mode replaces the colorspace, Hue, and Saturation sliders with a gradient bar and exposes two per-stop editing rows with position, hex, opacity, and a remove Icon Button.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| type | Solid, Gradient | Solid |

## When to Use

- When the user needs to freely select a color from a full spectrum.
- When color selection must support gradient fills in addition to solid colors.
- When the interface requires a complete color picker with Hex input, opacity control, and saved palette swatches.
- In design tools, configuration panels, or advanced customization interfaces.

## When NOT to Use

- Do not use when the user must only choose from a fixed set of brand colors — use a Swatch selector or Token Picker instead.
- Do not use when a simple predefined color palette is sufficient.
- Do not use in contexts where color selection must be constrained to system tokens only.

## Anatomy

### Shared (both modes)

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Tab Bar (Color Options) | Yes | Two tabs: "Solid" and "Gradient". Active tab shows a 2px bottom border using `border/selected` (#297a39). Active label: `text/secondary`. Inactive label: `text/tertiary`. | Always |
| Saved Colors Row | Yes | Label "My colors library" (`text/primary`, `Text/Body/XS Strong`) + ClearButton with leading icon and label "Add". | Always |
| Swatches Row | Yes | Single horizontal row of 7 circular color swatches, 24×24px, `radius/24`. Selected swatch shows 2px `icon/inverse` border and `Elevation/SM` shadow. | Always |

### Solid mode only

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Colorspace Canvas | Yes | 2D color selection area. 232×152px. `radius/4`. Contains a draggable 16px Swatch indicator and a Cursor overlay (Pointer 👆, 24px). | type=Solid |
| Hue Slider | Yes | Horizontal hue gradient strip. 8px height. Full-width. `radius/24`. Ellipse thumb indicator. | type=Solid |
| Saturation/Opacity Slider | Yes | Horizontal opacity slider with checkered transparency pattern. 8px height. Full-width. `radius/24`. Ellipse thumb indicator at far right. | type=Solid |
| Fields Row | Yes | Three equal-width input fields: format selector (Hex + chevron icon), Hex value field (e.g. `#4F46E5`), Opacity field (e.g. `100%`). Each: `border/default`, `Elevation/XS`, `radius/4`. | type=Solid |

### Gradient mode only

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| "Gradient color" label | Yes | Section label. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Gradient Color Bar | Yes | Full-width gradient preview bar (41px tall, `radius/2`). Supports transparency checkered pattern. Two draggable Selector handles (14×18px each) at the start and end positions. | type=Gradient |
| "Stops" label | Yes | Section label. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Stop 1 Fields Row | Yes | Three equal-width fields (position %, Hex value, Opacity %) + one Icon Button (—) to remove the stop. | type=Gradient |
| Stop 2 Fields Row | Yes | Three equal-width fields (position %, Hex value, Opacity %) + one Icon Button (—) to remove the stop. | type=Gradient |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| type | Enum | Solid | Solid, Gradient | All | Switches between solid color selection mode and gradient color selection mode. In Gradient mode, the Colorspace canvas, Hue slider, and Saturation/Opacity slider are replaced by the Gradient Color Bar and Stop editing rows. |

## States

The ColorPicker panel does not expose an interactive state property. States apply to its sub-components individually.

| Sub-component | Interactive Behavior |
|---|---|
| Tab Bar | Active tab: `border/selected` 2px bottom border. Inactive tab: no border. |
| Colorspace Swatch (Solid) | Draggable indicator. Shows Cursor (Pointer 👆) overlay. |
| Hue Slider thumb (Solid) | Draggable ellipse indicator. |
| Saturation/Opacity Slider thumb (Solid) | Draggable ellipse indicator. Positioned at far right in the Figma representation. |
| Gradient Color Bar Selectors (Gradient) | Two draggable Selector handles at gradient start and end positions. |
| Fields | Editable text inputs. `border/default` at rest. |
| Icon Button — (Gradient) | Removes a gradient stop. Type=Outline, Color=Default, Size=SM. |
| ClearButton "Add" | ClearButton component. Inline ghost style. |
| Swatches | Clickable circles. Selected swatch: `icon/inverse` 2px border + `Elevation/SM` shadow. |

## Sizes

The ColorPicker panel has a fixed layout. No size property is exposed.

| Element | Dimensions | Notes |
|---------|-----------|-------|
| Panel container | 264px wide (Gradient) / auto (Solid), auto-height | Padding: `space/16` (16px) all sides. Gap between sections: `gap/lg` (16px). `radius/8` corners. `Elevation/MD` shadow. |
| Colorspace Canvas | 232×152px | `radius/4`. Solid mode only. |
| Hue Slider track | Full-width × 8px | `radius/24`. Solid mode only. |
| Saturation/Opacity Slider track | Full-width × 8px | `radius/24`. Solid mode only. |
| Gradient Color Bar | Full-width × 41px | `radius/2`. Gradient mode only. |
| Gradient Selector handles | 14×18px each | Two handles. Gradient mode only. |
| Fields | Equal-width flex columns | Padding: `space/4` (4px). Gap between fields: `gap/sm` (8px). |
| Icon Button (—) in Gradient | 24×24px | Type=Outline, Color=Default, Size=SM. 6px padding. 12px icon. |
| Swatches | 24×24px each | `radius/24`. Justified across full row width. |

## Token Mapping

### Background

| Element | Token | Value |
|---------|-------|-------|
| Panel container | `background/canvas` | white |
| Fields | `background/canvas` | white |

### Border

| Element | Token | Notes |
|---------|-------|-------|
| Active Tab | `border/selected` | #297a39, 2px bottom border only |
| Fields | `border/default` | #c3cbc5, 1px — `width/1` |
| Selected Swatch | `icon/inverse` | #f7f8f7, 2px — `width/2` |
| Icon Button (—) | `border/strong` | #5f6d62, 1px |

### Text

| Element | Token | Value | Typography |
|---------|-------|-------|------------|
| Active Tab label | `text/secondary` | #5f6d62 | `Text/Button/SM` — 12px, semibold |
| Inactive Tab label | `text/tertiary` | #728376 | `Text/Button/SM` — 12px, semibold |
| "My colors library" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Gradient color" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Stops" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Add" ClearButton label | `text/primary` | #2d342f | `Text/Button/SM` — 12px, semibold |
| Fields text | `text/primary` | #2d342f | `Text/Body/XS` — 12px, regular |

### Typography

| Token | Size | Line-height | Weight | Family | Used for |
|-------|------|-------------|--------|--------|----------|
| `Text/Button/SM` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Tab labels, ClearButton label |
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Section labels |
| `Text/Body/XS` | 12px (`size/12`) | 16px (`line-height/16`) | regular (`weight/regular`) | `family/body` (Open Sans) | Field values |

Letter spacing: `letter-spacing/normal` (0px) for all.

### Shadow / Elevation

| Element | Token | Notes |
|---------|-------|-------|
| Panel container | `Elevation/MD` | `DROP_SHADOW palette/alpha/300 (position/2, position/4) blur/4` |
| Fields | `Elevation/XS` | `DROP_SHADOW palette/alpha/300 (position/1, position/1) blur/1` |
| Selected Swatch | `Elevation/SM` | `DROP_SHADOW palette/alpha/300 (position/2, position/2) blur/2` |

### Spacing

| Token | Value | Applied To |
|-------|-------|------------|
| `space/16` | 16px | Panel padding (all sides) |
| `gap/lg` | 16px | Gap between panel sections |
| `gap/sm` | 8px | Gap between fields in each row |
| `gap/xs` | 4px | Gap inside each field (icon + text) |
| `space/4` | 4px | Field inner padding |
| `space/8` | 8px | ClearButton horizontal padding |

### Radius

| Element | Token | Value |
|---------|-------|-------|
| Panel container | `radius/8` | 8px |
| Colorspace Canvas | `radius/4` | 4px |
| Hue Slider track | `radius/24` | 24px |
| Saturation/Opacity Slider track | `radius/24` | 24px |
| Gradient Color Bar | `radius/2` | 2px |
| Fields | `radius/4` | 4px |
| Icon Button (—) | 4px (hardcoded) | Pending token confirmation |
| Swatches | `radius/24` | 24px |

## Accessibility

| Property | Value |
|----------|-------|
| Colorspace canvas interaction | Pending confirmation |
| Slider keyboard interaction | Pending confirmation |
| Gradient selector handle keyboard interaction | Pending confirmation |
| Focus management across sub-components | Pending confirmation |
| ARIA roles | Pending confirmation |
| Screen reader behavior | Pending confirmation |
| WCAG compliance | Pending confirmation |

## Examples

| Example | Description | Configuration |
|---------|-------------|---------------|
| Solid color picker | Full panel in solid color mode | type=Solid |
| Gradient color picker | Full panel in gradient mode with gradient bar and stop rows | type=Gradient |

## Pending Clarification

- Colorspace canvas drag interaction (range, keyboard equivalent, value output) is not documented.
- Hue and Saturation/Opacity slider step values and keyboard behavior are not documented.
- Gradient Selector handle drag range, default positions, and keyboard behavior are not documented.
- Fields show static example values — editable input behavior and validation rules are not specified.
- The Icon Button (—) in Gradient stop rows: whether a minimum of 2 stops is enforced is not specified.
- The ClearButton "Add" action (what it adds, where it saves) is not documented beyond its visual representation.
- Swatch selection behavior (how a swatch updates the active field values) is not documented.
- The number of swatches (7 shown) and whether this count is configurable is not specified.
- ARIA roles, keyboard navigation, and screen reader behavior are not documented.
- The panel width in Solid mode (auto vs fixed) is not explicitly documented.

## Usage Guidelines

- Use the solid mode for standard single-color selection workflows
- Use the gradient mode only when users need editable multi-stop color ramps
- Keep the surrounding form context simple because the panel itself is dense
- Reserve the custom field inputs for workflows that truly need manual values
- Use swatches for common choices and the canvas or gradient controls for fine tuning

## Implementation Notes

- Keep the panel compact but readable, with clear separation between controls
- Preserve the tab-first structure so the mode switch is obvious
- Make sure the swatch row remains aligned with the rest of the panel content
- Treat the remove icon in gradient mode as a destructive action only for the selected stop
