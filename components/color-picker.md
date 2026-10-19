---
component: ColorPicker
system: Genome Evolution Design System
type: Component
status: "Production"
version: 1.0
owner: UX Design Team
last_updated: 2026-05-27
tags: [color, picker, input, gradient, solid, complex]
---

# ColorPicker

## Purpose

ColorPicker is a complex color selection panel that allows users to choose a color through a 2D colorspace canvas, a Hue slider, a Saturation/Opacity slider, and manual text field inputs (Hex and Opacity). It supports two modes: Solid (flat color) and Gradient. Both modes include a saved color palette labeled "My colors library" and a ClearButton to add new swatches. Gradient mode replaces the colorspace, Hue, and Saturation/Opacity sliders with a gradient bar and exposes two per-stop editing rows, each with position, hex, opacity, and a remove Icon Button.

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

### Shared — both modes

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Tab Bar | Yes | Two tabs: "Solid" and "Gradient". Active tab: 2px bottom border `border/selected` (#297a39), label `text/secondary`. Inactive tab: no border, label `text/tertiary`. | Always |
| Saved Colors Row | Yes | Label "My colors library" (`text/primary`, `Text/Body/XS Strong`) + ClearButton (leading icon + label "Add"). | Always |
| Swatches Row | Yes | Horizontal row of 7 circular color chips, 24×24px, `radius/24`, `gap/sm` (8px) between chips. Selected chip: 2px `icon/inverse` border + `Elevation/SM` shadow. | Always |

### Solid mode only

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Colorspace Canvas | Yes | 2D color selection area, 232×152px, `radius/4`. Gradient fill. Contains a draggable 16px circular Swatch indicator (2px `icon/inverse` border + `rgba(0,0,0,0.25)` ring) and a Cursor overlay (Pointer 👆, 24px). | type=Solid |
| Hue Slider | Yes | Full-spectrum hue gradient strip. 8px height. Full-width. `radius/24`. Ellipse thumb indicator. | type=Solid |
| Saturation/Opacity Slider | Yes | Opacity slider with checkered transparency pattern background. 8px height. Full-width. `radius/24`. Ellipse thumb indicator positioned at far right in the Figma representation. | type=Solid |
| Fields Row | Yes | Three equal-width inputs side by side: (1) format selector field (label "Hex" + chevron/arrow-down icon, 20×20px), (2) Hex value field (e.g. `#4F46E5`), (3) Opacity field (e.g. `100%`). Each field: `background/canvas`, `border/default` 1px, `Elevation/XS` shadow, `radius/4`, `space/4` padding. | type=Solid |

### Gradient mode only

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| "Gradient color" label | Yes | Section label. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Gradient Bar | Yes | Full-width color bar (41px tall, `radius/2`) with checkered transparency pattern. Contains two draggable Selector handles (14×18px each) at start and end positions. | type=Gradient |
| "Stops" label | Yes | Section label. `text/primary`, `Text/Body/XS Strong`. | type=Gradient |
| Stop 1 Fields Row | Yes | Three equal-width fields (position `0%`, Hex value, Opacity `100%`) + one Icon Button (—, Type=Outline, Color=Default, Size=SM). | type=Gradient |
| Stop 2 Fields Row | Yes | Three equal-width fields (position `100%`, Hex value, Opacity `100%`) + one Icon Button (—, Type=Outline, Color=Default, Size=SM). | type=Gradient |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| type | Enum | Solid | Solid, Gradient | All | Switches between solid color selection mode and gradient mode. In Gradient mode, the Colorspace canvas, Hue slider, and Saturation/Opacity slider are replaced by the Gradient Bar and Stop editing rows. |

## States

The ColorPicker panel does not expose an interactive state property at the panel level. Interactive states apply to individual sub-components.

| Sub-component | Interactive Behavior |
|---|---|
| Tab Bar | Active tab: `border/selected` 2px bottom border. Inactive tab: no border. |
| Colorspace Swatch indicator | Draggable 16px circle. Cursor overlay (Pointer 👆) shown while interacting. |
| Hue Slider thumb | Draggable ellipse indicator across the hue gradient track. |
| Saturation/Opacity Slider thumb | Draggable ellipse indicator. Far-right position shown in Figma at rest. |
| Gradient Bar Selector handles | Two draggable 14×18px handles, positioned at gradient start and end. |
| Fields | Editable text inputs. `border/default` at rest. Per-field focus state follows Field component behavior. |
| Icon Button (—) | Removes the corresponding gradient stop. Type=Outline, Color=Default, Size=SM. |
| ClearButton "Add" | ClearButton component (inline ghost). Adds a new color to the swatches palette. |
| Swatches | Clickable 24×24px circles. Selected: `icon/inverse` 2px border + `Elevation/SM` shadow. |

## Sizes

The ColorPicker has a fixed layout. No size property is exposed.

| Element | Dimensions | Notes |
|---------|-----------|-------|
| Panel container | 264px width (Gradient) / auto width (Solid), auto height | Padding: `space/16` (16px) all sides. Gap between sections: `gap/lg` (16px). `radius/8`. `Elevation/MD` shadow. |
| Colorspace Canvas | 232×152px | `radius/4`. Solid mode only. |
| Hue Slider track | Full-width × 8px | `radius/24`. Solid mode only. |
| Saturation/Opacity Slider track | Full-width × 8px | `radius/24`. Solid mode only. |
| Gradient Bar track | Full-width × 41px | `radius/2`. Gradient mode only. |
| Gradient Selector handles | 14×18px each | 2 handles. Gradient mode only. |
| Fields (each) | Equal flex width, auto height | `space/4` (4px) padding. `gap/sm` (8px) between fields. |
| Icon Button (—) | 24×24px | 6px padding. 12×12px icon (minus/remove). |
| Swatches (each) | 24×24px | `radius/24`. `gap/sm` (8px) between chips. |

## Token Mapping

### Background

| Element | Token | Value |
|---------|-------|-------|
| Panel container | `background/canvas` | white |
| Fields | `background/canvas` | white |

### Border

| Element | Token | Notes |
|---------|-------|-------|
| Active Tab | `border/selected` | #297a39 — 2px bottom border only |
| Fields | `border/default` | #c3cbc5 — 1px, `width/1` |
| Selected Swatch chip | `icon/inverse` | #f7f8f7 — 2px, `width/2` |
| Colorspace Swatch indicator ring | `icon/inverse` | #f7f8f7 — 2px + `rgba(0,0,0,0.25)` outer ring |
| Icon Button (—) | `border/strong` | #5f6d62 — 1px |

### Text

| Element | Token | Value | Typography |
|---------|-------|-------|------------|
| Active Tab label | `text/secondary` | #5f6d62 | `Text/Button/SM` — 12px, semibold |
| Inactive Tab label | `text/tertiary` | #728376 | `Text/Button/SM` — 12px, semibold |
| "My colors library" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Gradient color" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Stops" label | `text/primary` | #2d342f | `Text/Body/XS Strong` — 12px, semibold |
| "Add" ClearButton label | `text/primary` | #2d342f | `Text/Button/SM` — 12px, semibold |
| Field values | `text/primary` | #2d342f | `Text/Body/XS` — 12px, regular |

### Typography

| Token | Size | Line-height | Weight | Family | Used For |
|-------|------|-------------|--------|--------|----------|
| `Text/Button/SM` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Tab labels, ClearButton "Add" label |
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) | Section labels |
| `Text/Body/XS` | 12px (`size/12`) | 16px (`line-height/16`) | regular (`weight/regular`) | `family/body` (Open Sans) | Field values |

Letter spacing: `letter-spacing/normal` (0px) for all.

### Shadow / Elevation

| Element | Token | Description |
|---------|-------|-------------|
| Panel container | `Elevation/MD` | `DROP_SHADOW palette/alpha/300 (position/2, position/4) blur/4` |
| Fields | `Elevation/XS` | `DROP_SHADOW palette/alpha/300 (position/1, position/1) blur/1` |
| Selected Swatch chip | `Elevation/SM` | `DROP_SHADOW palette/alpha/300 (position/2, position/2) blur/2` |

### Spacing

| Token | Value | Applied To |
|-------|-------|------------|
| `space/16` | 16px | Panel padding (all sides) |
| `gap/lg` | 16px | Gap between panel sections |
| `gap/sm` | 8px | Gap between fields in a row; gap between swatch chips |
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
| Gradient Bar track | `radius/2` | 2px |
| Fields | `radius/4` | 4px |
| Swatches | `radius/24` | 24px |
| Icon Button (—) | 4px | Hardcoded — pending token confirmation |

## Accessibility

| Property | Value |
|----------|-------|
| Colorspace canvas drag interaction | Pending confirmation |
| Slider keyboard behavior (step values, arrow keys) | Pending confirmation |
| Gradient Selector handle keyboard behavior | Pending confirmation |
| Focus management across sub-components | Pending confirmation |
| ARIA roles | Pending confirmation |
| Screen reader behavior | Pending confirmation |
| WCAG compliance | Pending confirmation |

## Examples

| Example | Description | Configuration |
|---------|-------------|---------------|
| Solid color picker | Full panel in solid mode | type=Solid |
| Gradient color picker | Full panel in gradient mode with gradient bar and stop rows | type=Gradient |

## Pending Clarification

- Colorspace canvas drag range, output color model, and keyboard equivalent are not documented.
- Hue and Saturation/Opacity slider step values and keyboard behavior are not documented.
- Gradient Selector handle drag range, default positions, and keyboard behavior are not documented.
- Fields show static example values — editable input behavior and validation rules are not specified.
- The Icon Button (—) in Gradient stop rows: whether a minimum of 2 stops is enforced is not specified.
- The ClearButton "Add" action (target palette, maximum swatches) is not documented beyond its visual representation.
- Swatch selection behavior (how selecting a chip updates the active color fields) is not documented.
- The number of swatches (7 shown) and whether this count is configurable is not specified.
- Panel width in Solid mode (auto vs fixed) is not explicitly documented in the source.
- ARIA roles, keyboard navigation order, and screen reader behavior are not documented.