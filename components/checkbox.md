---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201"
last_updated: "2026-10-22"
tags:
  - "checkbox"
  - "selection"
  - "form"
---

# Checkbox

System: Genome Evolution Design System

## Component Summary

Checkbox is a selection control made of a 16 px box, an optional 16 px icon and an optional label, available unselected (`Default`), selected (`Check`), mixed (`Mixed`) or with a plus mark (`Plus`), in Default, Evergreen and Indigo colors, with Default, Hovered, Pressed, Focused and Disabled states.

## Quick Reference

### What It Is

Evidence-based interpretation: Checkbox lets users select or deselect an option. This is supported by the component name, the `Type` values (`Default` shows an empty box, `Check` a check mark, `Mixed` a horizontal bar, `Plus` a plus sign), the interactive state variants and the label next to the box. Figma does not include a written usage description for this component.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Default, Check, Mixed, Plus | Default |
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Hovered, Pressed, Focused, Disabled | Disabled |
| label (text) | Free text | Label |
| showIcon (boolean) | true, false | true |
| showLabel (boolean) | true, false | true |

Defaults are taken from the component property definitions in Figma.

### Default Configuration

`Type=Default`, `Color=Default`, `State=Disabled`, `label="Label"`, icon and label visible.

Current behavior: the component's default variant is the disabled, unselected checkbox. A newly inserted instance therefore appears disabled until `State` is changed.

### Typical Usage

Verified observation: The component set contains 44 variants. The available combinations are:

| Color | Type | States |
|-------|------|--------|
| Default | Default, Check, Mixed, Plus | Default, Hovered, Pressed, Focused, Disabled |
| Evergreen | Check, Mixed, Plus | Default, Hovered, Pressed, Focused |
| Indigo | Check, Mixed, Plus | Default, Hovered, Pressed, Focused |

Evidence-based interpretation:

- `Type=Default` is the unselected checkbox; it exists only in `Color=Default`, because the color applies to the filled box of the marked types.
- `Type=Check` is the selected checkbox.
- `Type=Mixed` represents a partially selected (indeterminate) state, as indicated by its name and the horizontal bar.
- `Color` selects the fill of the marked box: neutral (`Default`), `Evergreen` or `Indigo`.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent control to turn an option on or off, or to show a mixed selection.

### Expected Outcome

Evidence-based interpretation: Users can see and change whether an option is selected.

### Typical Context

Specific product contexts are not documented in the Checkbox component.

## When to Use

Evidence-based interpretations based on the available variants:

- To let users select or deselect an option (`Default` and `Check`).
- To show that a group of related options is partially selected (`Mixed`).
- The use of `Plus` is not documented in Figma (see Pending Clarification).

## When NOT to Use

[No documented restrictions found]

Limitations of the current component:

- `Disabled` exists only for `Color=Default`.
- The component has a single size.
- The `bizagi-lines` icon is a fixed icon; it can be shown or hidden but not swapped.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Control area (`Check`) | Required | 20 × 20 px frame containing the box and, in interactive states, the state halo or focus ring. |
| Box (`Icon`) | Required | 16 × 16 px square with a 2 px corner radius; outlined when unselected, filled when marked. |
| Mark | Present in `Check`, `Mixed`, `Plus` | 12 × 12 px glyph inside the box: check mark, horizontal bar or plus sign. |
| State halo | Present in `Hovered` and `Pressed` | 32 px circular background behind the box. |
| Focus ring | Present in `Focused` | Circular 2 px `border/focus` ring around the control area. |
| Icon (`bizagi-lines`) | Optional (`showIcon`, visible by default) | 16 px icon between the box and the label. |
| Label | Optional (`showLabel`, visible by default) | Text set through `label`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height | 20 px | Variant dimensions |
| Width (default label, icon visible) | 83 px; adapts to content | Variant dimensions, auto layout |
| Gap between control, icon and label | `gap/sm` (8) | Variable binding |
| Alignment | Vertically centered | Design context |
| Box size | 16 × 16 px | Layer dimensions |
| Box corner radius | 2 px (not bound to a variable) | Design context |
| Box border (unselected) | `width/1` (1 px) | Variable binding |
| Mark size | 12 × 12 px | Layer dimensions |
| State halo | 32 px circle | Layer dimensions |
| Focus ring | `focus/width` (2 px) `border/focus` | Variable bindings |
| Icon size | 16 × 16 px | Layer dimensions |
| Label typography | `Text/Body/XS`: `family/body` (Open Sans), `weight/regular` (400), `size/12`, `line-height/16` | Text style |
| Label wrapping | Single line (no wrapping) | Design context |

## Semantics

Evidence-based interpretation:

- `Default` = not selected; `Check` = selected; `Mixed` = partially selected (indeterminate).
- `Plus` shows a plus sign; its meaning is not documented in Figma.
- `Color` changes the fill of the marked box and does not change the meaning.
- The label describes the option.
- The meaning of the `bizagi-lines` icon is not documented in Figma.

Not verified in Figma: HTML element, ARIA role and state attributes (for example, checked or mixed), label association and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Mark — `Check` | `check` glyph, 12 px, `icon/inverse` on a filled box | Layer name, variable binding |
| Mark — `Mixed` | Horizontal bar glyph, 12 px, `icon/inverse` on a filled box | Screenshot, variable binding |
| Mark — `Plus` | Plus glyph, 12 px, `icon/inverse` on a filled box | Screenshot, variable binding |
| Icon | `bizagi-lines`, 16 px; toggled by `showIcon`; not swappable | Nested instance |

In `Disabled`, marks use `icon/disabled`.

## Variants (Properties)

The inventory below is complete: all 44 variants were listed, and representative variants of every Type, Color and State were inspected in detail.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Empty box: `background/canvas` fill with a 1 px `icon/primary` border. | `Color=Default` only |
| Check | Filled box with a check mark. | All colors |
| Mixed | Filled box with a horizontal bar. | All colors |
| Plus | Filled box with a plus sign. | All colors |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Marked box fill `icon/primary`. | All types |
| Evergreen | Marked box fill `icon/evergreen`. | Check, Mixed, Plus |
| Indigo | Marked box fill `icon/indigo`. | Check, Mixed, Plus |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | No halo. | All combinations |
| Hovered | 32 px halo in `background/interactive/hovered`. Unselected box border changes to `icon/interactive/hovered`. | All combinations |
| Pressed | 32 px halo in `background/interactive/pressed`. Unselected box border changes to `icon/interactive/pressed`. | All combinations |
| Focused | Circular 2 px `border/focus` ring around the control. | All combinations |
| Disabled | Box `background/disabled` with 1 px `border/disabled`; marks `icon/disabled`; label `text/disabled`. | `Color=Default` only |

### label, showIcon, showLabel

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| label | Option text; "Label" in all variants. | Text property |
| showIcon | Shows or hides the `bizagi-lines` icon. Default `true`. | Boolean property |
| showLabel | Shows or hides the label. Default `true`. | Boolean property |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | No halo. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered` halo; darker border on the unselected box. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed` halo; darkest border on the unselected box. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` circular ring. | State variants |
| Disabled | Unavailable appearance. | Disabled box, mark and label colors. | State variants (`Color=Default`) |

The fill of a marked box does not change between Default, Hovered and Pressed; only the halo changes. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Unselected box fill | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | State halo | Variable binding |
| Background | `background/disabled` | Disabled box fill | Variable binding |
| Icon | `icon/primary` | Unselected box border; marked box fill (Default) | Variable binding |
| Icon | `icon/interactive/hovered`, `icon/interactive/pressed` | Unselected box border, Hovered and Pressed | Variable binding |
| Icon | `icon/evergreen`, `icon/indigo` | Marked box fill (Evergreen, Indigo) | Variable binding |
| Icon | `icon/inverse` | Mark glyph | Variable binding |
| Icon | `icon/disabled` | Disabled mark | Variable binding |
| Border | `border/disabled` | Disabled box border | Variable binding |
| Border | `border/focus`, `focus/width` | Focus ring | Variable binding |
| Border width | `width/1` | Box border | Variable binding |
| Text | `text/primary`, `text/disabled` | Label | Variable binding |
| Spacing | `gap/sm` | Gap | Variable binding |
| Typography | `Text/Body/XS` | Label | Text style |

The 2 px box corner radius is a fixed value and is not bound to a variable.

## Interaction

Observed states: Default, Hovered, Pressed and Focused exist for every Type and Color; Disabled exists for `Color=Default`.

Evidence-based interpretation: The checkbox toggles between unselected and selected, with `Mixed` as an intermediate state.

Not verified in Figma: the transition between types when activated, whether the label is part of the clickable area, keyboard interaction and prototype interactions. No prototype interactions were found.

## Accessibility

Accessibility-related observations:

- `Focused` shows a visible circular 2 px `border/focus` ring.
- Selection is shown by both fill and a mark glyph, not by color alone.
- Hover and press add a 32 px halo around the 16 px box.
- The label is 12 px (`size/12`).
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): accessible name when `showLabel=false`, checked and mixed state announcements, the role of the `bizagi-lines` icon for assistive technologies, and keyboard support.

## Content Guidelines

Verified observation: All variants use the label "Label". Labels are single-line, and the component width grows with the label.

## Examples

### Unselected option

Configuration: `Type=Default`, `Color=Default`, `State=Default`

Description: Empty box with icon and label.

Evidence / Classification: Existing variant in Figma.

### Selected option, brand color

Configuration: `Type=Check`, `Color=Evergreen`, `State=Default`

Description: Evergreen filled box with a check mark.

Evidence / Classification: Existing variant in Figma.

### Partially selected group

Configuration: `Type=Mixed`, `Color=Default`, `State=Default`

Description: Neutral filled box with a horizontal bar.

Evidence / Classification: Existing variant in Figma.

### Checkbox without icon

Configuration: `Type=Check`, `Color=Default`, `State=Default`, `showIcon=false`

Description: Box and label only.

Evidence / Classification: Configuration supported by the `showIcon` property.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `Type=Default` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |
| `State=Disabled` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

1. Meaning of `Type=Plus`: Figma provides a `Plus` type (a plus sign in a filled box) alongside `Check` and `Mixed`, but does not document what it represents or when to use it instead of `Check`. Confirm its intended meaning so usage guidance can be documented.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
