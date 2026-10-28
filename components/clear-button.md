---
component: "Clear button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2103-36"
last_updated: "2026-10-22"
tags:
  - "button"
  - "action"
  - "low-emphasis"
---

# Clear button

System: Genome Evolution Design System

## Component Summary

Clear button is a compact, borderless button with a colored label and optional leading and trailing icons, available in neutral, brand (Evergreen, Indigo) and status (Information, Success, Danger, Warning) colors, with Default, Hovered, Pressed, Focused and Disabled states and two corner styles.

## Quick Reference

### What It Is

The Clear Button is a low-prominence button variant designed to perform secondary or supporting actions without competing with primary interface actions. Its lightweight appearance prioritizes surrounding content while maintaining clear interactivity.

It can include leading and trailing icons, making it especially useful for navigation, back, forward, or contextual actions that benefit from additional visual cues.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Default |
| Type | Default, Information, Success, Danger, Warning | Default |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| Corner | Default, Rounded | Default |
| label (text) | Free text | Button |
| showLeadingIcon (boolean) | true, false | true |
| leadingIcon (instance swap) | Any icon instance | arrow-left |
| showTrailingIcon (boolean) | true, false | true |
| trailingIcon (instance swap) | Any icon instance | arrow-right |

Defaults are taken from the component property definitions in Figma. Both icons are visible by default.

### Default Configuration

`Color=Default`, `Type=Default`, `State=Default`, `Corner=Default`, `label="Button"`, both icons visible: a transparent 24 px button with an `arrow-left` icon, a `text/primary` label and an `arrow-right` icon in `icon/primary`.

### Typical Usage

Verified observation: The component set contains 58 variants. The available combinations are:

| Color | Type | States |
|-------|------|--------|
| Default | Default | Default, Hovered, Pressed, Focused, Disabled |
| Evergreen | Default | Default, Hovered, Pressed, Focused |
| Indigo | Default | Default, Hovered, Pressed, Focused |
| Indigo | Information, Success, Danger, Warning | Default, Hovered, Pressed, Focused |

Every combination above exists with `Corner=Default` and `Corner=Rounded`.

Current behavior: The status types (`Information`, `Success`, `Danger`, `Warning`) exist only under `Color=Indigo`. Selecting a status type requires `Color=Indigo`, and the `Color` value does not affect their appearance; their label and icon colors come from the status tokens.

Evidence-based interpretation:

- Use `Type=Default` with `Color=Default` for a neutral low-emphasis action, or with `Evergreen` or `Indigo` for a brand-colored one.
- Use a status type when the action relates to that status.
- The default `arrow-left` and `arrow-right` icons can be hidden or swapped for other icons.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides an action with minimal visual weight that can sit alongside content or other controls without competing with higher-emphasis buttons.

### Expected Outcome

Evidence-based interpretation: Users can recognize the element as an action through its colored label, icons and interactive states, while it remains visually light.

### Typical Context

Specific product contexts are not documented in Figma.

## When to Use

- For secondary actions within a page or workflow.
- For navigation actions such as “Back,” “Next,” or “View more.”
- In toolbars, headers, or information-dense layouts.
- When an action should remain available without requiring strong visual emphasis.
- To complement primary actions without competing with them.
- In experiences where icons help reinforce the direction or purpose of the action.

## When NOT to Use

- For the primary action of a page or form.
- For critical actions that require high visibility.
- When users must quickly identify the most important action on the interface.
- As a replacement for Primary, Danger, or Warning buttons when stronger visual emphasis is required.
- When the action needs to stand out from surrounding content.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout frame; transparent at rest; carries the state background, focus border and corner radius. |
| Leading icon | Optional (`showLeadingIcon`, visible by default) | 12 px icon before the label; `arrow-left` by default, swappable through `leadingIcon`. |
| Label | Required | Text set through `label`. |
| Trailing icon | Optional (`showTrailingIcon`, visible by default) | 12 px icon after the label; `arrow-right` by default, swappable through `trailingIcon`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height | 24 px | Variant dimensions |
| Width (default label, both icons) | 96 px; adapts to content | Variant dimensions, auto layout |
| Padding | `space/8` (8) horizontal, `space/4` (4) vertical | Variable bindings |
| Gap | `gap/sm` (8) between icons and label | Variable binding |
| Alignment | Content centered horizontally and vertically | Design context |
| Corner radius — Default | `radius/4` (4) | Variable binding |
| Corner radius — Rounded | `semantic/full` (999); `radius/24` (24) in the Disabled Rounded variant | Variable bindings |
| Icon size | 12 × 12 px | Layer dimensions |
| Focus border | `focus/width` (2 px) `border/focus` | Variable bindings |
| Label typography | `Text/Body/XS Strong`: `family/body` (Open Sans), weight 600, `size/12`, `line-height/16`, `letter-spacing/normal` | Text style |
| Label wrapping | Single line (no wrapping) | Design context |

At a height of 24 px, both `semantic/full` and `radius/24` produce a fully rounded (pill) shape.

## Semantics

Evidence-based interpretation:

- The button represents a low-emphasis action.
- `Evergreen` and `Indigo` apply brand colors; `Default` is neutral.
- `Information`, `Success`, `Danger` and `Warning` associate the action with a status, as they are bound to the `info`, `success`, `danger` and `warning` token families.
- The default arrow icons are placeholders that can be swapped; Figma does not assign them a meaning.

Not verified in Figma: HTML element, ARIA role and how icons are exposed to assistive technologies.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon | `arrow-left` by default, 12 px; swappable via `leadingIcon`; visible by default | Instance swap property |
| Trailing icon | `arrow-right` by default, 12 px; swappable via `trailingIcon`; visible by default | Instance swap property |

Icon color follows the label: `icon/primary`, `icon/evergreen`, `icon/indigo`, `icon/info`, `icon/success`, `icon/danger`, `icon/warning`, or `icon/disabled` in Disabled.

## Variants (Properties)

The inventory below is complete: all 58 variants were listed, and representative variants of every Color, Type, State and Corner were inspected in detail.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Label `text/primary`, icons `icon/primary`. | `Type=Default` only |
| Evergreen | Label `text/evergreen`, icons `icon/evergreen`. | `Type=Default` only |
| Indigo | With `Type=Default`: label `text/indigo`, icons `icon/indigo`. Also the only color under which the status types exist. | All types |

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Uses the color selected in `Color`. | Default, Evergreen, Indigo |
| Information | Label `text/info`, icons `icon/info`. | `Color=Indigo` only |
| Success | Label `text/success`, icons `icon/success`. | `Color=Indigo` only |
| Danger | Label `text/danger`, icons `icon/danger`. | `Color=Indigo` only |
| Warning | Label `text/warning`, icons `icon/warning`. | `Color=Indigo` only |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Transparent background, no border. | All combinations |
| Hovered | Background `background/interactive/hovered`. | All combinations |
| Pressed | Background `background/interactive/pressed`. | All combinations |
| Focused | 2 px `border/focus` border; transparent background. | All combinations |
| Disabled | Label `text/disabled`, icons `icon/disabled`; transparent background. | `Color=Default`, `Type=Default` only |

### Corner

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | 4 px radius (`radius/4`). | All combinations |
| Rounded | Pill shape (`semantic/full`; `radius/24` in Disabled). | All combinations |

### label, leadingIcon, trailingIcon

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| label | Button text; "Button" in all variants. | Text property |
| showLeadingIcon / leadingIcon | Shows a 12 px icon before the label (`arrow-left` by default). | Boolean (default `true`) + instance swap |
| showTrailingIcon / trailingIcon | Shows a 12 px icon after the label (`arrow-right` by default). | Boolean (default `true`) + instance swap |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | Transparent; colored label and icons. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered`. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed`. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border. | State variants |
| Disabled | Unavailable appearance. | `text/disabled` label, `icon/disabled` icons. | State variants (`Color=Default`, `Type=Default`) |

Hover and press backgrounds are the same neutral tokens for every color and type. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Text | `text/primary`, `text/evergreen`, `text/indigo`, `text/info`, `text/success`, `text/danger`, `text/warning`, `text/disabled` | Label color by Color, Type and State | Variable binding |
| Icon | `icon/primary`, `icon/evergreen`, `icon/indigo`, `icon/info`, `icon/success`, `icon/danger`, `icon/warning`, `icon/disabled` | Icon color by Color, Type and State | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | Hovered and Pressed | Variable binding |
| Border | `border/focus`, `focus/width` | Focused | Variable binding |
| Spacing | `space/8`, `space/4`, `gap/sm` | Padding and gap | Variable binding |
| Radius | `radius/4`, `semantic/full`, `radius/24` | Corner (see Layout) | Variable binding |
| Typography | `Text/Body/XS Strong` | Label | Text style |

## Interaction

Observed states: Default, Hovered, Pressed and Focused exist for every Color and Type combination; Disabled exists for `Color=Default`, `Type=Default`.

Not verified in Figma: the action triggered, keyboard activation and prototype interactions. No prototype interactions were found.

## Accessibility

- Required: ensure sufficient contrast between text, icons, and background across all color variants and states.
- Required: the component must be keyboard accessible and operable using Enter or Space.
- Required: provide a visible focus indicator in the Focused state.
- Recommended: accompany icons with text labels when their meaning is not universally recognizable.

## Content Guidelines

Verified observation: All variants use the label "Button". Labels are single-line, and the button width grows with the label.

## Examples

### Neutral clear button

Configuration: `Color=Default`, `Type=Default`, `State=Default`, `Corner=Default`

Description: Transparent button with arrow icons and a `text/primary` label.

Evidence / Classification: Default configuration in Figma.

### Brand-colored, pill

Configuration: `Color=Evergreen`, `Type=Default`, `State=Default`, `Corner=Rounded`

Description: Evergreen label and icons with a pill-shaped hover and focus area.

Evidence / Classification: Existing variant in Figma.

### Danger action

Configuration: `Color=Indigo`, `Type=Danger`, `State=Default`, `Corner=Default`

Description: Clear button with `text/danger` label and `icon/danger` icons.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `Type` other than `Default` with `Color=Default` or `Color=Evergreen` | No such variant exists | Variant inventory |
| `State=Disabled` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |
| `State=Disabled` with any status type | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"indigo"` | Brand tone for text/icon. |
| `typeTone` | `"default" \| "information" \| "success" \| "danger" \| "warning"` | `"default"` | Semantic override for text/icon. |
| `corner` | `"default" \| "rounded"` | `"default"` | Controls corner radius. |
| `leadingIcon` | `ReactNode` | `undefined` | Optional icon before label. |
| `trailingIcon` | `ReactNode` | `undefined` | Optional icon after label. |

It also accepts React's native attributes for the underlying HTML element (ButtonHTMLAttributes).
### Examples

#### Navigation action

```tsx
import { ClearButton } from "@genome-evolution/react";

<ClearButton tone="default" leadingIcon={<ArrowIcon />}>
  Back
</ClearButton>;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
