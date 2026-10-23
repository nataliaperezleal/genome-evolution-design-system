---
component: "Radio Button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-2043"
last_updated: "2026-10-23"
tags:
  - "form"
  - "selection"
  - "radio"
---

# Radio Button

System: Genome Evolution Design System

## Component Summary

Radio Button is a 20px circular selection control with an optional label, available in three colors for the selected state and five interaction states.

## Quick Reference

### What It Is

Evidence-based interpretation: a form control for choosing one option from a set. The component set (Figma node `2190:2043`) consists of a 20px circle, which shows a filled inner dot when `Selected=On`, and a 12px label. No written component description is defined for Radio Button in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Default |
| State | Enabled, Hovered, Pressed, Focused, Disabled | Disabled (see Pending Clarification) |
| Selected | Off, On | Off |
| showLabel | true, false | true |
| label | Text | "Label" |

### Default Configuration

The component property defaults exposed by Figma are `Color=Default`, `State=Disabled`, `Selected=Off`, `showLabel=true`, and `label="Label"`. This corresponds to variant `2190:2057`, the top-left variant of the component set. As a result, a new instance is disabled by default; switch `State` to `Enabled` for a usable radio button.

### Typical Usage

Verified observations:

- `Selected=Off` exists only for `Color=Default`; the unselected radio looks the same regardless of color.
- `Color=Evergreen` and `Color=Indigo` exist only with `Selected=On` and in the `Enabled`, `Hovered`, `Pressed`, and `Focused` states.
- `State=Disabled` exists only for `Color=Default`, in both `Selected` values.
- `Hovered` and `Pressed` show a circular halo around the control; `Focused` shows a green ring.

Evidence-based interpretation:

- Use radio buttons in groups where exactly one option can be selected.
- Use `Color=Evergreen` or `Color=Indigo` to match the product theme for the selected state, and `Color=Default` for a neutral selected state.

Recommendation: always set `State=Enabled` when placing a new instance, unless the option is unavailable.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need to choose a single option from a small set of mutually exclusive choices, with all options visible.

### Expected Outcome

Evidence-based interpretation: the user sees all available options, selects one, and can see which option is selected.

### Typical Context

Evidence-based interpretation: forms, settings, filters, and dialogs with mutually exclusive choices.

## When to Use

Evidence-based interpretations, derived from the component structure and the `Selected` property:

- To let users choose exactly one option from a short list.
- When all options should be visible at once.

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Radio Button in Figma. As recommendations only:

- To allow multiple selections, use a checkbox.
- For a single on/off setting, consider a switch or checkbox.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Radio control | Required | 20px circle; shows an inner dot when `Selected=On`. The layer is named `check`. |
| Halo / focus ring | State-dependent | Circle behind the control in `Hovered` and `Pressed` (about 32px) and a ring in `Focused` (about 36px). |
| Label | Optional (`showLabel`, `label`) | 12px text to the right of the control. Default text: "Label". |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Control size | 20 × 20px | Direct measurement |
| Component size | 59 × 20px (with "Label") | Direct measurement |
| Gap between control and label | 8px | `gap/sm` |
| Container radius | 4px | `radius/4` |
| Padding | 0px | `space/0` (selected Enabled variants) |
| Hover and pressed halo | About 32px diameter, extending 6px outside the 20px control | Direct measurement |
| Focus ring | About 36px diameter, extending 8px outside the 20px control | Direct measurement |
| Label alignment | Vertically centered; single line | Figma auto layout |

The halo and focus ring extend beyond the component's 20px height, so they can overlap nearby elements.

## Semantics

Evidence-based interpretation:

- `Selected=On` represents the chosen option in a group; `Selected=Off` represents an available but unchosen option.
- `Color` changes the color of the selected indicator; no semantic meaning beyond theming is documented.
- `Disabled` represents an option that cannot be chosen.

Not verified in Figma: radio and radio-group roles, grouping and labelling, `aria-checked`, and keyboard behavior.

## Iconography

The radio control is drawn as a vector graphic (layer name `check`) with separate assets for each variant. It is not exposed as an instance-swap property.

## Variants (Properties)

The variant inventory is complete: 18 variants. All variants were inspected. Boolean and text property names are listed as exposed by the Figma MCP.

| Color | Selected | Available states |
|-------|----------|------------------|
| Default | Off | Enabled, Hovered, Pressed, Focused, Disabled |
| Default | On | Enabled, Hovered, Pressed, Focused, Disabled |
| Evergreen | On | Enabled, Hovered, Pressed, Focused |
| Indigo | On | Enabled, Hovered, Pressed, Focused |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Neutral gray selected indicator; only color with an unselected and disabled version. | Default |
| Evergreen | Green selected indicator. | `Selected=On` only |
| Indigo | Purple selected indicator. | `Selected=On` only |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Enabled | Resting control. | All colors |
| Hovered | Light halo behind the control. | All colors; `background/interactive/hovered` |
| Pressed | Darker halo behind the control. | All colors; `background/interactive/pressed` |
| Focused | Green focus ring around the control. | All colors; `border/focus`, `focus/width` |
| Disabled | Muted control and label. | `Color=Default` only; `icon/disabled`, `text/disabled`; default value |

### Selected

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Off | Empty circle. | Default; `Color=Default` only |
| On | Circle with a filled inner dot in the `Color` theme color. | All colors |

### showLabel / label

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| showLabel | Shows the label. | Default: `true` |
| label | Label text. | Default: "Label" |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Enabled | Resting | Control in its normal color; label `text/primary` | Variants `2190:2044`, `2190:2098`, `2190:2055`, `2190:2085` |
| Hovered | Pointer over the control | About 32px halo (`background/interactive/hovered`) | Variants `2190:2046`, `2190:2100`, `2190:2059`, `2190:2087` |
| Pressed | Being activated | About 32px halo (`background/interactive/pressed`) | Variants `2190:2049`, `2190:2103`, `2190:2062`, `2190:2090` |
| Focused | Has focus | About 36px ring (`border/focus`, 2px) | Variants `2190:2052`, `2190:2108`, `2240:118`, `2240:123` |
| Disabled | Unavailable | Muted control; label `text/disabled` | Variants `2190:2057`, `2190:2106` |

These are visual state variants. Transitions and the conditions that trigger each state are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set. The control is a vector graphic, so the exact layer each color variable is bound to was not inspected.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — icon | `icon/primary` | Used by the component set (control in `Color=Default`) | Figma variables |
| Color — icon | `icon/evergreen`, `icon/selected` | Used by the component set (Evergreen selected indicator; both resolve to #297a39) | Figma variables |
| Color — icon | `icon/indigo` | Used by the component set (Indigo selected indicator) | Figma variables |
| Color — icon | `icon/disabled` | Used by the component set (`Disabled` control) | Figma variables |
| Color — surface | `background/interactive/hovered`, `background/interactive/pressed` | Halo (`Hovered`, `Pressed`) | Figma variables |
| Color — border | `border/focus` | Focus ring | Figma variables |
| Border width | `focus/width` | Focus ring (2px) | Figma variables |
| Color — text | `text/primary`, `text/disabled` | Label | Figma variables |
| Spacing | `gap/sm`, `space/0` | Gap and padding | Figma variables |
| Radius | `radius/4` | Container radius | Figma variables |
| Typography | `Text/Body/XS` | Label (12/16) | Figma text style |

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hovered`, `Pressed`, `Focused`, and `Disabled`.
- Evidence-based interpretation: selecting a radio button selects that option and deselects the others in its group. Group behavior and whether the label is part of the clickable area are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Label text (`text/primary`) is 12.78:1 on white; the label is 12px.
- The unselected control color (`icon/primary`) is 5.45:1 on white.
- Selected state is shown by an inner dot, not by color alone.
- `Focused` shows a visible 2px ring (`border/focus`, 3.63:1 on white).
- The hover halo (`background/interactive/hovered`) is barely distinguishable from white (about 1.06:1).
- The control is 20px; the clickable area is not defined.

Missing accessibility information: radio group semantics, group label, keyboard navigation between options, and the clickable target size.

## Content Guidelines

Verified observations:

- Default label text is "Label", a placeholder.
- The label is a single line.

Recommendations:

- Write short labels that clearly describe each option.
- Keep option labels parallel in structure within a group.

## Examples

### Unselected option

Configuration: `Color=Default`, `State=Enabled`, `Selected=Off`

Description: an available option that is not selected.

Evidence / Classification: existing Figma configuration (variant `2190:2044`).

### Selected option (Evergreen theme)

Configuration: `Color=Evergreen`, `State=Enabled`, `Selected=On`

Description: the selected option in a group, using the Evergreen theme.

Evidence / Classification: existing Figma configuration (variant `2190:2055`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: the variant set has no `Selected=Off` variants for `Evergreen` or `Indigo`, and no `Disabled` variants for `Evergreen` or `Indigo`, so these combinations cannot be selected in Figma. Whether they are intentionally excluded is not documented.

## Pending Clarification

1. Disabled default. The default variant is `State=Disabled`, so every new instance starts disabled. Confirm whether `State=Enabled` should be the default (moving its variant to the top-left of the component set).
2. Unselected and disabled themed variants. `Evergreen` and `Indigo` have no `Selected=Off` or `Disabled` variants, so an Evergreen or Indigo instance cannot be switched to unselected or disabled without also changing `Color`. Confirm whether these variants should be added.
3. Halo and focus ring overflow. The hover, pressed, and focus indicators extend 6–8px outside the 20px component. Confirm the required spacing around radio buttons and whether the clickable area should match the halo.
4. Hover visibility. The hover halo (`background/interactive/hovered`) is nearly invisible on white backgrounds. Confirm whether a stronger hover color is needed.

## Notes / Changelog

Generated from Figma evidence (component set `2190:2043`) on 2026-10-23.

[No verified historical changes available]
