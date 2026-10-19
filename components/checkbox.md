---
component: Checkbox
system: Genome Evolution Design System
type: Component
status: "Production"
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [form, selection, input, control]
---

# Checkbox

## Purpose

Checkbox is a binary or indeterminate selection form control. It allows users to select, deselect, or indicate a mixed/indeterminate state within forms, lists, or tables. The component displays a 20×20px interactive checkbox control, with optional trailing icon (BizagiLines, 16×16px) and optional text label.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| color | Default, Evergreen, Indigo | Default |
| type | Default, Check, Mixed | Default |
| state | Default, Hovered, Pressed, Disabled, Focused | Disabled |
| showIcon | true, false | true |
| showLabel | true, false | true |
| label | string | "Label" |

**Invalid Combinations:**
- type=Default is only documented for color=Default. color=Evergreen and color=Indigo are not documented with type=Default.
- state=Disabled is only documented for color=Default.
- state=Hovered and state=Pressed with color=Default and type=Default are not documented.
- color=Evergreen and color=Indigo are only documented for type=Check and type=Mixed.

## When to Use

- For selecting one or multiple options in a form or list.
- For bulk selection in tables, using type=Mixed to represent an indeterminate state (some but not all items selected).
- For toggling preferences, settings, or configuration options that require explicit user confirmation.
- When multiple non-exclusive options can be selected simultaneously.

## When NOT to Use

- Do not use for mutually exclusive options — use a Radio Button instead.
- Do not use for immediate on/off toggling of a live setting — use a Toggle or Switch instead.
- Do not use as a navigation control or action trigger.

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Check Control | Yes | 20×20px interactive area. Contains the 16×16px checkbox box with rounded corners (2px). Shows check mark, dash, or empty state depending on type. | Always |
| Check Icon (inner) | Conditional | 12×12px icon inside the checkbox box. Check mark icon for type=Check. Dash/remove icon for type=Mixed. Hidden for type=Default. | When type=Check or type=Mixed |
| State Layer | Conditional | 32×32px circular ripple/state overlay behind the checkbox control. Visible on Hovered, Pressed, and Focused states. | When state=Hovered, Pressed, or Focused |
| BizagiLines Icon | No | 16×16px branded icon displayed to the right of the checkbox control. | When showIcon=true and state ≠ Disabled (for non-Default color), or showIcon=true for all documented states |
| Label | No | Text label displayed to the right of the icon. Uses `Text/Body/XXS` typography (10px, regular). | When showLabel=true |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| color | Enum | Default | Default, Evergreen, Indigo | All | Controls the fill color of the checkbox when checked or mixed. Default uses `icon/primary`. Evergreen uses `icon/evergreen`. Indigo uses `icon/indigo`. |
| type | Enum | Default | Default, Check, Mixed | All | Defines the selection state represented visually. Default = unchecked. Check = checked with checkmark. Mixed = indeterminate with dash. |
| state | Enum | Disabled | Default, Hovered, Pressed, Disabled, Focused | All | Represents the current interactive state of the component. |
| showIcon | Boolean | true | true, false | All | Shows or hides the BizagiLines icon slot to the right of the checkbox. |
| showLabel | Boolean | true | true, false | All | Shows or hides the text label to the right of the icon. |
| label | String | "Label" | Any string | All | The visible text label of the component. |

## States

| State | Description | Visual Changes |
|-------|-------------|----------------|
| Default | Resting state, no interaction active. | type=Default: empty box with `icon/primary` border on `background/canvas`. type=Check or Mixed: filled box with `icon/primary`, `icon/evergreen`, or `icon/indigo` depending on color. |
| Hovered | Cursor is over the component. | 32×32px state layer (Hovered style) appears behind checkbox. Checkbox box fills with the corresponding color token. |
| Pressed | Component is being clicked or tapped. | 32×32px state layer (Pressed style) appears. Checkbox box fills with the corresponding color token. |
| Focused | Component receives keyboard or programmatic focus. | 32×32px focus ring layer appears. Box fills for type=Check and type=Mixed. For type=Default (color=Default), a focus ring renders around the empty box. |
| Disabled | Component is non-interactive. Only documented for color=Default. | type=Default: box with `background/disabled` fill and `border/disabled` border. type=Check or Mixed: box with `background/disabled` and `border/disabled`, with dimmed check/dash icon. Label uses `text/disabled`. |

## Sizes

Checkbox has a single fixed size. No size property is exposed.

| Element | Size | Notes |
|---------|------|-------|
| Check Control (outer hit area) | 20×20px | Interactive target area |
| Checkbox Box | 16×16px | Visible checkbox with 2px border-radius |
| Inner icon (check or dash) | 12×12px | Clipped within the checkbox box |
| State Layer | 32×32px | Circular overlay for Hovered/Pressed/Focused |
| BizagiLines Icon | 16×16px | Trailing branded icon |

## Token Mapping

### Background / Fill (Checkbox Box)

| color / type / state | Token | Value |
|---|---|---|
| Any color, type=Default, state=Default | `background/canvas` | white |
| color=Default, type=Check or Mixed, state=Default or Focused | `icon/primary` | #5f6d62 |
| color=Evergreen, type=Check or Mixed, state=Default/Hovered/Pressed/Focused | `icon/evergreen` | #297a39 |
| color=Indigo, type=Check or Mixed, state=Default/Hovered/Pressed/Focused | `icon/indigo` | #6b1b99 |
| color=Default, type=Check or Mixed, state=Hovered or Pressed | `icon/primary` | #5f6d62 |
| Any, state=Disabled | `background/disabled` | #f4f6f4 |

### Border (Checkbox Box)

| state | Token | Notes |
|-------|-------|-------|
| Default, type=Default | `icon/primary` | 1px border, `width/1` |
| Disabled | `border/disabled` | 1px border, `width/1` |
| Focused (Default color, Default type) | Pending confirmation | Focus ring visible on empty box |

### Text (Label)

| state | Token | Value |
|-------|-------|-------|
| Default, Hovered, Pressed, Focused | `text/primary` | #2d342f |
| Disabled | `text/disabled` | #849588 |

### Typography (Label)

| Token | Size | Line-height | Weight | Family |
|-------|------|-------------|--------|--------|
| `Text/Body/XXS` | 10px (`size/10`) | 14px (`line-height/14`) | regular (`weight/regular`) | `family/body` (Open Sans) |

Letter spacing: `letter-spacing/normal` (0px)

### Spacing

| Token | Value | Applied To |
|-------|-------|------------|
| `gap/sm` | 8px | Gap between Check Control, BizagiLines icon, and label |

### Radius

| Element | Value | Notes |
|---------|-------|-------|
| Checkbox Box | 2px | Applied to the 16×16px inner box |

### Shadow

Pending confirmation.

## Accessibility

| Property | Value |
|----------|-------|
| Focus indicator | 32×32px focus ring layer — confirmed visually in Focused state |
| Disabled visual | `background/disabled` fill + `border/disabled` border + `text/disabled` label |
| Keyboard interaction | Pending confirmation |
| ARIA roles | Pending confirmation |
| Screen reader behavior | Pending confirmation |
| WCAG compliance | Pending confirmation |

## Examples

| Example | Description | Configuration |
|---------|-------------|---------------|
| Unchecked — Default | Empty, unselected checkbox | color=Default, type=Default, state=Default, showIcon=true, showLabel=true |
| Checked — Default | Checked with neutral color | color=Default, type=Check, state=Default, showIcon=true, showLabel=true |
| Checked — Evergreen | Checked with Evergreen brand color | color=Evergreen, type=Check, state=Default, showIcon=true, showLabel=true |
| Checked — Indigo | Checked with Indigo brand color | color=Indigo, type=Check, state=Default, showIcon=true, showLabel=true |
| Mixed — Default | Indeterminate state, neutral color | color=Default, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Mixed — Evergreen | Indeterminate state, Evergreen | color=Evergreen, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Mixed — Indigo | Indeterminate state, Indigo | color=Indigo, type=Mixed, state=Default, showIcon=true, showLabel=true |
| Disabled — Unchecked | Non-interactive, empty | color=Default, type=Default, state=Disabled, showIcon=true, showLabel=true |
| Disabled — Checked | Non-interactive, checked | color=Default, type=Check, state=Disabled, showIcon=true, showLabel=true |
| Disabled — Mixed | Non-interactive, indeterminate | color=Default, type=Mixed, state=Disabled, showIcon=true, showLabel=true |
| Focused — Checked | Keyboard focus on checked | color=Default, type=Check, state=Focused, showIcon=true, showLabel=true |
| Focused — Unchecked | Keyboard focus on empty | color=Default, type=Default, state=Focused, showIcon=true, showLabel=true |
| Hovered — Checked | Hover on checked | color=Default, type=Check, state=Hovered, showIcon=true, showLabel=true |
| Pressed — Checked | Press on checked | color=Default, type=Check, state=Pressed, showIcon=true, showLabel=true |
| Without icon and label | Control only | color=Default, type=Check, state=Default, showIcon=false, showLabel=false |
| Without label | Control with icon only | color=Default, type=Check, state=Default, showIcon=true, showLabel=false |

## Pending Clarification

- type=Default is not documented for color=Evergreen or color=Indigo. Behavior in those combinations is unknown.
- state=Hovered and state=Pressed are not documented for color=Default with type=Default.
- state=Disabled is not documented for color=Evergreen or color=Indigo.
- The focus ring border token for type=Default state=Focused (empty box) is not explicitly identified in the source material.
- Shadow tokens are not documented.
- ARIA roles, keyboard interaction, and screen reader behavior are not documented in the source material.
- The role and meaning of the BizagiLines icon is not described in the source material.
- The default state value in Figma is set to Disabled — confirm if this is intentional.

## Usage Guidelines

- Use checkboxes when users can make one or more independent selections
- Use the mixed state only when some child items are selected but not all
- Keep labels short so the control stays easy to scan in dense forms
- Hide the trailing icon when it does not add useful context
- Use the default size and spacing for most form rows

## Implementation Notes

- Keep the hit area large enough for comfortable pointer and touch interaction
- Preserve the visual distinction between empty, checked, and mixed states
- Ensure disabled styling remains legible even when the icon is shown
- Maintain consistent spacing between the control, icon, and label
