---
component: "Month"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-3842"
last_updated: "2026-10-22"
tags:
  - "month"
  - "cell"
  - "building-block"
---

# Month

System: Genome Evolution Design System

## Component Summary

Month (`.Month` in Figma) is a rectangular cell that displays a short label, such as an abbreviated month name, available in two sizes and four states (Default, Focused, Selected, Disable), with Evergreen and Indigo colors for the focused and selected states.

## Quick Reference

### What It Is

Evidence-based interpretation: Month is a selectable cell intended to be composed into a grid of months, for example in a month picker. This is supported by the component name, the three-character sample label "XXX" (the length of an abbreviated month name), the `Selected`, `Focused` and `Disable` states, and its similarity in structure and tokens to `.Number`. The Figma name starts with a period; in Figma, components whose names start with a period are not published to the library, so this component is meant to be used inside another component. The parent component is not referenced in this component set, and Figma does not include a written usage description.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | Small, Regular | Small |
| State | Default, Focused, Selected, Disable | Default |
| Color | Default, Evergreen, Indigo | Default |
| text (text) | Free text | XXX |

Defaults are taken from the component property definitions in Figma. The disabled value is spelled `Disable`.

### Default Configuration

`Size=Small`, `State=Default`, `Color=Default`, `text="XXX"`: a 42 × 24 px transparent cell with a centered `text/primary` label in `Text/Body/XS Strong`.

### Typical Usage

Verified observation: The component set contains 12 variants. `Color` depends on `State`:

| State | Colors | Sizes |
|-------|--------|-------|
| Default, Disable | Default | Small, Regular |
| Focused, Selected | Evergreen, Indigo | Small, Regular |

Evidence-based interpretation:

- `Default` for an available month.
- `Selected` for the chosen month (a solid brand-colored cell).
- `Focused` for the cell that has focus.
- `Disable` for a month that cannot be chosen.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent cell for presenting and selecting months in a grid.

### Expected Outcome

Evidence-based interpretation: Users can distinguish available, focused, selected and unavailable months.

### Typical Context

Evidence-based interpretation: Used inside a parent component that arranges month cells in a grid, as indicated by the period-prefixed (unpublished) name. The parent component is not identified in this component set.

## When to Use

Evidence-based interpretations based on the available variants:

- As the cell of a month grid that supports single selection (`Selected`).
- To show months that cannot be chosen (`Disable`).

## When NOT to Use

[No documented restrictions found]

Because the component is not published to the library (period-prefixed name), it is not available for direct insertion from the library.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Cell | Required | Rectangular frame with `radius/4` corners and clipped content; carries the state fill or border. |
| Label | Required | Centered text set through `text`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — Small | 42 × 24 px | Variant dimensions |
| Size — Regular | 56 × 32 px | Variant dimensions |
| Corner radius | `radius/4` (4) | Variable binding |
| Overflow | Clipped | Design context |
| Label position | Centered (absolute positioning) | Design context |
| Label typography — Small | `Text/Body/XS Strong`: `family/body` (Open Sans), weight 600, `size/12`, `line-height/16` | Text style |
| Label typography — Regular | `Text/Body/SM Strong`: `family/body`, weight 600, `size/14`, `line-height/20` | Text style |
| Border (`Focused`, `Selected`) | 1 px | Design context |

The component does not use auto layout; the cell keeps a fixed size regardless of the label length.

## Semantics

Evidence-based interpretation:

- `Selected` marks the chosen month; `Focused` marks the cell with focus; `Disable` marks a month that is not available.
- `Color` applies the brand accent (Evergreen or Indigo) to the focused and selected states.

Not verified in Figma: HTML elements, ARIA roles, selected and disabled semantics, and screen-reader announcements.

## Variants (Properties)

The inventory below is complete: all 12 variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Small | 42 × 24 px; `Text/Body/XS Strong`. | All states |
| Regular | 56 × 32 px; `Text/Body/SM Strong`. | All states |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Transparent cell; `text/primary` label. | `Color=Default` |
| Focused | 1 px `border/focus` border, no fill; `text/primary` label. | Evergreen, Indigo |
| Selected | Solid brand fill with a 1 px border in the same color; `text/inverse` label. | Evergreen, Indigo |
| Disable | Transparent cell; `text/disabled` label. | `Color=Default` |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | No accent. | Default, Disable |
| Evergreen | Evergreen fill in `Selected`. | Focused, Selected |
| Indigo | Indigo fill in `Selected`. | Focused, Selected |

`Focused` looks the same in Evergreen and Indigo (`border/focus`).

### text

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Label shown in the cell; "XXX" in all variants. | Text property |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Available month. | No fill or border. | State variants |
| Focused | Focus appearance. | 1 px `border/focus` border. | State variants |
| Selected | Selected appearance. | Solid Evergreen or Indigo fill; inverse label. | State variants |
| Disable | Unavailable appearance. | `text/disabled` label. | State variants |

There are no Hovered or Pressed variants. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Text | `text/primary` | Label in Default and Focused | Variable binding |
| Text | `text/inverse` | Label in Selected | Variable binding |
| Text | `text/disabled` | Label in Disable | Variable binding |
| Surface | `surface/evergreen/bold` | Selected fill, Evergreen | Variable binding |
| Surface | `border/indigo` | Selected fill, Indigo | Variable binding |
| Border | `border/evergreen`, `border/indigo` | Selected border | Variable binding |
| Border | `border/focus` | Focused border | Variable binding |
| Radius | `radius/4` | Cell corners | Variable binding |
| Typography | `Text/Body/XS Strong`, `Text/Body/SM Strong` | Label by Size | Text styles |

Current behavior: The Selected Indigo fill is bound to `border/indigo` (a border token), while the Evergreen fill uses `surface/evergreen/bold`; both resolve to the expected brand colors. The 1 px border width is not bound to a variable.

## Interaction

Observed states: Default, Focused, Selected and Disable. No hover or pressed variants exist, and no prototype interactions were found.

Not verified in Figma: selection behavior, keyboard navigation and how `Disable` cells respond to interaction.

## Accessibility

Accessibility-related observations:

- `Selected` uses a solid fill and an inverse label, so it differs from other states by more than hue alone.
- `Focused` uses a 1 px border, thinner than the 2 px focus borders used by other components inspected in this system.
- `Disable` is indicated by a muted label only.
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): accessible names (for example, full month names for abbreviated labels), selected and disabled announcements, and keyboard support.

## Content Guidelines

Verified observation: All variants use the three-character sample "XXX". The label is single-line and centered, and the cell has a fixed width (42 px Small, 56 px Regular).

## Examples

### Selected month

Configuration: `Size=Regular`, `State=Selected`, `Color=Evergreen`

Description: Solid Evergreen cell with an inverse label.

Evidence / Classification: Existing variant in Figma.

### Focused month

Configuration: `Size=Small`, `State=Focused`, `Color=Indigo`

Description: Cell with a 1 px focus border.

Evidence / Classification: Existing variant in Figma.

### Unavailable month

Configuration: `Size=Regular`, `State=Disable`, `Color=Default`

Description: Cell with a muted label.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `State=Default` or `State=Disable` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |
| `State=Focused` or `State=Selected` with `Color=Default` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
