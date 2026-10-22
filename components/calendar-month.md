---
component: "Month"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Design"
version: "1.2"
owner: "UX Team"
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

The Month component is a selection cell used to represent a month within a calendar grid. It serves as an internal building block of the Date Picker component, allowing users to select a specific month within a given year.
It is displayed as a compact element containing a month label, either abbreviated or fully spelled out, and supports various visual states to communicate availability, selection, focus, and interaction. It is typically arranged as a 12-item grid representing the months of the year.

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

- As part of a month selector within a Date Picker.
- To select a specific month within a year.
- In dashboard and reporting filters where users need to choose monthly periods.
- In forms that require month-and-year selection only.
- In temporal filtering or historical analysis experiences.
- When day-level date selection is unnecessary.

## When NOT to Use

- To select complete dates that include day, month, and year.
- As a primary application navigation element.
- To represent complex date ranges.
- When users need to select options unrelated to months.
- To filter periods using custom time intervals.
- When a simple dropdown would provide a more efficient solution.

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

Mandatory requirements
- Each month option must be keyboard accessible.
- Focus states must be visible and clearly distinguishable from Default and Selected states.
- Selection must be communicated through indicators beyond colour alone.
- Text, border, and background contrast must meet WCAG AA requirements.

Recommendations
- Provide full accessible month names even when abbreviated labels are displayed visually.
- Maintain a chronological order to support keyboard navigation and assistive technologies.

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
