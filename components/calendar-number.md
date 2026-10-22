---
component: "Number"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-3757"
last_updated: "2026-10-22"
tags:
  - "number"
  - "cell"
  - "building-block"
---

# Number

System: Genome Evolution Design System

## Component Summary

Number (`.Number` in Figma) is a square cell that displays a short number, available in two sizes and seven states (Default, Conventions, Focused, Selected, Range, Null, Opaque), with Evergreen and Indigo colors for the focused, selected and range states.

## Quick Reference

### What It Is

Evidence-based interpretation: Number is a selectable numeric cell intended to be composed into a grid, such as the days of a calendar. This is supported by the two-digit sample value "00", the square 24 px and 32 px sizes, and the states `Selected`, `Range` (a light fill, as for the dates between the start and end of a range), `Null` (an empty cell), `Opaque` (a muted number) and `Conventions` (a number with three dots below it). The Figma name starts with a period; in Figma, components whose names start with a period are not published to the library, so this component is meant to be used inside another component. The parent component is not referenced in this component set, and Figma does not include a written usage description.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | Small, Regular | Small |
| State | Default, Conventions, Focused, Selected, Range, Null, Opaque | Default |
| Color | Default, Evergreen, Indigo | Default |
| number (text) | Free text | 00 |

Defaults are taken from the component property definitions in Figma.

### Default Configuration

`Size=Small`, `State=Default`, `Color=Default`, `number="00"`: a 24 × 24 px transparent cell with a centered `text/primary` number in `Text/Body/XXS`.

### Typical Usage

Verified observation: The component set contains 20 variants. `Color` depends on `State`:

| State | Colors | Sizes |
|-------|--------|-------|
| Default, Conventions, Null, Opaque | Default | Small, Regular |
| Focused, Selected, Range | Evergreen, Indigo | Small, Regular |

Evidence-based interpretation:

- `Default` for an available number.
- `Selected` for the chosen number (a solid brand-colored cell).
- `Range` for numbers between the start and end of a selected range (a subtle brand-colored cell).
- `Focused` for the cell that has focus.
- `Opaque` for numbers that are shown but de-emphasized.
- `Null` for an empty position in the grid; the cell keeps its size and the number is transparent.
- `Conventions` for a number that has associated markers (three dots below the number).

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent numeric cell with all the visual states needed for single and range selection in a grid.

### Expected Outcome

Evidence-based interpretation: Users can distinguish available, selected, in-range, focused, muted, empty and marked numbers at a glance.

### Typical Context

Evidence-based interpretation: Used inside a parent component that arranges cells in a grid, as indicated by the period-prefixed (unpublished) name and the range and null states. The parent component is not identified in this component set.

## When to Use

Evidence-based interpretations based on the available variants:

- As the cell of a numeric grid that supports single selection (`Selected`) or range selection (`Range`).
- To mark numbers with additional information (`Conventions`), de-emphasize numbers (`Opaque`) or leave positions empty (`Null`).

## When NOT to Use

[No documented restrictions found]

Because the component is not published to the library (period-prefixed name), it is not available for direct insertion from the library.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Cell | Required | Square frame with `radius/4` corners and clipped content; carries the state fill or border. |
| Number | Required | Centered text set through `number`. |
| Convention markers | Present in `State=Conventions` | Three 3 px dots, 2 px apart, centered below the number. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — Small | 24 × 24 px | Variant dimensions |
| Size — Regular | 32 × 32 px | Variant dimensions |
| Corner radius | `radius/4` (4) | Variable binding |
| Overflow | Clipped | Design context |
| Number position | Centered horizontally and vertically (absolute positioning) | Design context |
| Number typography — Small | `Text/Body/XXS`: `family/body` (Open Sans), weight 400, `size/10`, `line-height/14` | Text style |
| Number typography — Regular | `Text/Body/SM`: `family/body`, weight 400, `size/14`, `line-height/20` | Text style |
| Convention markers | Three 3 × 3 px dots, 2 px gap, below the number | Layer dimensions |
| Border (`Focused`, `Selected`) | 1 px | Design context |

The component does not use auto layout.

## Semantics

Evidence-based interpretation:

- `Selected` marks the chosen value; `Range` marks values within a selected range; `Focused` marks the cell with focus.
- `Opaque` marks values that are visible but de-emphasized.
- `Null` represents an empty position.
- `Conventions` marks a value that has associated information shown as dots; the meaning of the dots is not documented in Figma.
- `Color` applies the brand accent (Evergreen or Indigo) to the focused, selected and range states.

Not verified in Figma: HTML elements, ARIA roles (for example, grid cell or button), selected and disabled semantics, and screen-reader announcements.

## Variants (Properties)

The inventory below is complete: all 20 variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Small | 24 × 24 px; `Text/Body/XXS`. | All states |
| Regular | 32 × 32 px; `Text/Body/SM`. | All states |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Transparent cell; `text/primary` number. | `Color=Default` |
| Conventions | As Default, plus three dots below the number. | `Color=Default` |
| Focused | 1 px `border/focus` border, no fill; `text/primary` number. | Evergreen, Indigo |
| Selected | Solid brand fill with a 1 px border in the same color; `text/inverse` number. | Evergreen, Indigo |
| Range | `surface/evergreen/subtle` or `surface/indigo/subtle` fill; `text/primary` number. | Evergreen, Indigo |
| Null | Transparent cell; number in `palette/alpha/0` (fully transparent). | `Color=Default` |
| Opaque | Transparent cell; `text/secondary` number. | `Color=Default` |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | No accent. | Default, Conventions, Null, Opaque |
| Evergreen | Evergreen fill in `Selected` and `Range`. | Focused, Selected, Range |
| Indigo | Indigo fill in `Selected` and `Range`. | Focused, Selected, Range |

`Focused` looks the same in Evergreen and Indigo (`border/focus`).

### number

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Value shown in the cell; "00" in all variants. | Text property |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Available number. | No fill or border. | State variants |
| Conventions | Number with markers. | Three dots below the number. | State variants |
| Focused | Focus appearance. | 1 px `border/focus` border. | State variants |
| Selected | Selected appearance. | Solid Evergreen or Indigo fill; inverse number. | State variants |
| Range | In-range appearance. | Subtle Evergreen or Indigo fill. | State variants |
| Null | Empty position. | Number not visible. | State variants |
| Opaque | De-emphasized number. | `text/secondary` number. | State variants |

There are no Hovered or Pressed variants. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Text | `text/primary` | Number in Default, Conventions, Focused, Range | Variable binding |
| Text | `text/inverse` | Number in Selected | Variable binding |
| Text | `text/secondary` | Number in Opaque | Variable binding |
| Color | `palette/alpha/0` | Number in Null (transparent) | Variable binding |
| Surface | `surface/evergreen/bold`, `surface/indigo/bold` | Selected fill (Small) | Variable binding |
| Surface | `border/evergreen`, `text/indigo` | Selected fill (Regular, Evergreen and Indigo) | Variable binding |
| Surface | `surface/evergreen/subtle`, `surface/indigo/subtle` | Range fill | Variable binding |
| Border | `border/evergreen`, `border/indigo`, `text/indigo` | Selected border | Variable binding |
| Border | `border/focus` | Focused border | Variable binding |
| Icon | `icon/primary`, `icon/secondary` | Convention markers | Variable binding |
| Radius | `radius/4` | Cell corners | Variable binding |
| Typography | `Text/Body/XXS`, `Text/Body/SM` | Number by Size | Text styles |
| Typography | `Body/small/regular`, `Body/medium/regular` | Number in Null (Small, Regular) | Text styles |

Current behavior:

- In `Size=Regular`, the Selected fill is bound to `border/evergreen` (Evergreen) and `text/indigo` (Indigo), while `Size=Small` uses `surface/evergreen/bold` and `surface/indigo/bold`. The resolved colors are the same.
- The Selected Indigo Regular border is bound to `text/indigo`; Small uses `border/indigo`.
- The Null state uses the `Body/small/regular` and `Body/medium/regular` text styles (`font/...` variables), unlike the other states, which use `Text/Body/...` styles. The number is transparent, so this has no visible effect.
- The 1 px border width is not bound to a variable.

## Interaction

Observed states: Default, Conventions, Focused, Selected, Range, Null and Opaque. No hover or pressed variants exist, and no prototype interactions were found.

Not verified in Figma: selection behavior, how a range is started and ended, keyboard navigation and whether `Opaque` or `Null` cells are interactive.

## Accessibility

Accessibility-related observations:

- `Selected` uses a solid fill and an inverse number, so it differs from other states by more than hue alone.
- `Range` is distinguished only by a subtle fill.
- `Focused` uses a 1 px border, thinner than the 2 px focus borders used by other components inspected in this system.
- Small cells use a 10 px number (`size/10`).
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): accessible names for cells, announcements for selected and in-range values, meaning of the convention markers for assistive technologies, and keyboard support.

## Content Guidelines

Verified observation: All variants use the sample value "00", a two-digit number. The number is single-line and centered.

## Examples

### Selected value

Configuration: `Size=Regular`, `State=Selected`, `Color=Evergreen`

Description: Solid Evergreen cell with an inverse number.

Evidence / Classification: Existing variant in Figma.

### Value within a range

Configuration: `Size=Regular`, `State=Range`, `Color=Indigo`

Description: Subtle Indigo cell with a primary number.

Evidence / Classification: Existing variant in Figma.

### Value with markers

Configuration: `Size=Small`, `State=Conventions`, `Color=Default`

Description: Number with three dots below it.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `State=Default`, `Conventions`, `Null` or `Opaque` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |
| `State=Focused`, `Selected` or `Range` with `Color=Default` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
