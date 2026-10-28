---
component: "Icon Button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2182-3348"
last_updated: "2026-10-22"
tags:
  - "button"
  - "icon"
  - "action"
---

# Icon Button

System: Genome Evolution Design System

## Component Summary

Icon Button is an icon-only button available in Filled and Outline types, four colors, three sizes (24, 32 and 48 px) and two corner styles, with Default, Hover, Pressed, Focused and Disable states.

## Quick Reference

### What It Is

The Icon Button is an icon-only button designed to perform quick and recurring actions while minimizing the amount of visual space used in the interface. It allows actions to be represented through recognizable symbols without requiring visible text labels.

The component is available in Filled and Outline variants, multiple colors, sizes, and corner styles, making it adaptable to different visual hierarchies and usage contexts.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Filled, Outline | Filled |
| Color | Evergreen, Indigo, Inverse, Default | Evergreen |
| State | Default, Hover, Pressed, Focused, Disable | Default |
| Size | LG, MD, SM | LG |
| Corner | Square, Rounded | Square |
| largeIcon (instance swap) | Any icon | send (LG) |
| mediumIcon (instance swap) | Any icon | send (MD) |
| smallIcon (instance swap) | Any icon | trash (SM) |

Defaults are taken from the component property definitions in Figma. State values are spelled `Hover` and `Disable`.

Current behavior: the icon is set through a different instance swap property for each size: `largeIcon` (LG), `mediumIcon` (MD) and `smallIcon` (SM).

### Default Configuration

`Type=Filled`, `Color=Evergreen`, `State=Default`, `Size=LG`, `Corner=Square`: a 48 × 48 px `surface/evergreen/bold` button with a 24 px `send` icon in `icon/inverse` and a 4 px corner radius.

### Typical Usage

Verified observation: The component set contains 156 variants. The available colors depend on `Type` and `State`:

| Type | Colors | States |
|------|--------|--------|
| Filled | Evergreen, Indigo, Inverse | Default, Hover, Pressed, Focused |
| Filled | Default | Disable |
| Outline | Default, Evergreen, Indigo | Default, Hover, Pressed, Focused |
| Outline | Default | Disable |

Every combination above exists in all three sizes and both corner styles.

Verified guidance (Figma description): Use Icon Button when space does not allow a text button, when the icon is clear without a label, or when grouping actions in a toolbar.

Evidence-based interpretation:

- `Filled` gives more emphasis than `Outline`.
- `Inverse` (a white button with a neutral icon) is for use on colored or dark backgrounds.
- To show a disabled button, set `Color=Default` together with `State=Disable`.

## Purpose / Intent

### Problem Solved

Verified specification: Offers an action in a compact, icon-only form where a text button does not fit or text would add noise.

### Expected Outcome

Evidence-based interpretation: Users can recognize and trigger actions from their icon alone.

### Typical Context

Verified specification (Figma description): Toolbars and constrained spaces.

## When to Use

- For common actions represented by widely recognized icons.
- In toolbars and action bars.
- For contextual actions within tables, lists, or cards.
- For navigation, edit, delete, share, or search controls.
- When available space is limited.
- For frequent actions that users can quickly identify through iconography.

## When NOT to Use

- When the action cannot be easily understood through an icon alone.
- For critical or irreversible actions without additional context.
- As the only option when multiple similar actions may create ambiguity.
- When understanding the action depends entirely on descriptive text.
- For primary actions in complex screens where a labeled button provides better clarity.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Square frame carrying the fill or border, corner radius and focus border. |
| Icon | Required | Single icon, swappable through the size's icon property. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — LG | 48 × 48 px; 12 px padding; 24 px icon | Variant dimensions, design context |
| Size — MD | 32 × 32 px; 8 px padding; 16 px icon | Variant dimensions, design context |
| Size — SM | 24 × 24 px; `space/4` padding; 16 px icon | Variant dimensions, variable binding |
| Corner — Square | `semantic/sm` (4) | Variable binding |
| Corner — Rounded | `semantic/full` (999), fully circular | Variable binding (inspected on SM) |
| Outline border | 1 px | Design context |
| Focus border | `focus/width` (2 px) `border/focus` | Variable bindings (inspected on Filled) |

Current behavior: In SM, the 16 px icon with 4 px padding fills the 24 px button, so the icon occupies a larger share of the button than in MD and LG.

## Semantics

Verified specification: The icon communicates the action; the Figma description lists send, trash, save, edit and close as examples of icons clear enough to use without a label.

Evidence-based interpretation: `Filled` and `Outline` express different levels of emphasis; `Color` selects the brand palette (Evergreen, Indigo), a neutral style (Default) or a light style for dark backgrounds (Inverse).

Not verified in Figma: HTML element, ARIA attributes and accessible names.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Icon — LG | `send`, 24 px; swappable via `largeIcon` | Instance swap property |
| Icon — MD | `send`, 16 px; swappable via `mediumIcon` | Instance swap property |
| Icon — SM | `trash`, 16 px; swappable via `smallIcon` | Instance swap property |

## Variants (Properties)

The variant inventory below is complete (156 variants listed). Tokens were inspected on representative variants; see Token Mapping for the parts that could not be inspected.

### Type and Color

| Type / Color | Default appearance | Evidence |
|--------------|--------------------|----------|
| Filled / Evergreen | `surface/evergreen/bold` fill; `icon/inverse` icon | Variable binding |
| Filled / Indigo | Indigo fill; inverse icon | Screenshot; tokens not verified in Figma |
| Filled / Inverse | `background/canvas` fill; `icon/primary` icon | Variable binding |
| Filled / Default | Disable only | Variant inventory |
| Outline / Default | 1 px `border/default`; `icon/primary` icon | Variable binding |
| Outline / Evergreen | 1 px `border/evergreen`; Evergreen icon | Variable binding (border), screenshot (icon) |
| Outline / Indigo | 1 px `border/indigo`; `icon/indigo` icon | Variable binding |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting appearance. | All colors |
| Hover | Filled brand colors: `surface/<color>/bold/hovered`. Filled Inverse and Outline: `background/interactive/hovered`. | Variable bindings (Evergreen, Inverse, Outline Default) |
| Pressed | Filled brand colors: `surface/<color>/bold/pressed`. Outline: `background/interactive/pressed`. | Variable bindings (Evergreen, Outline Indigo) |
| Focused | 2 px `border/focus` border; the fill stays as in Default. | Variable bindings (Filled Evergreen SM) |
| Disable | Light fill or border and a muted icon. | Screenshot; tokens not verified in Figma |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| LG | 48 px; 24 px icon. | Default |
| MD | 32 px; 16 px icon. | — |
| SM | 24 px; 16 px icon. | — |

### Corner

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Square | 4 px radius (`semantic/sm`). | Default |
| Rounded | Circular (`semantic/full`). | — |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | See Type and Color. | State variants |
| Hover | Hover appearance. | Darker fill (Filled brand) or hovered background (Inverse, Outline). | State variants |
| Pressed | Pressed appearance. | Darkest fill (Filled brand) or pressed background (Outline). | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border. | State variants |
| Disable | Unavailable appearance. | Muted fill, border and icon. | State variants (`Color=Default`) |

These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/evergreen/bold`, `/hovered`, `/pressed` | Filled Evergreen fill by state | Variable binding |
| Background | `background/canvas` | Filled Inverse fill | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | Hover and Pressed fill for Inverse and Outline | Variable binding |
| Border | `border/default`, `border/evergreen`, `border/indigo` | Outline border | Variable binding |
| Border | `border/focus`, `focus/width` | Focused border | Variable binding |
| Icon | `icon/inverse` | Filled brand icon | Variable binding |
| Icon | `icon/primary` | Filled Inverse and Outline Default icon | Variable binding |
| Icon | `icon/indigo` | Outline Indigo icon | Variable binding |
| Radius | `semantic/sm`, `semantic/full` | Square and Rounded corners | Variable binding |
| Spacing | `space/4` | SM padding | Variable binding |

Not verified in Figma (inspection limit reached): the tokens for Filled Indigo, the Outline Evergreen icon, the `Disable` state, and the Focused state on Outline variants. Their appearance is described from the variant screenshot only. The LG and MD paddings (12 px and 8 px) are fixed values in the inspected variants.

## Interaction

Observed states: Default, Hover, Pressed and Focused for every Type and Color; Disable for `Color=Default`. No prototype interactions were inspected.

Not verified in Figma: the action triggered and keyboard activation.

## Accessibility

- Required: ensure sufficient contrast between icon, background, and border across all variants, sizes, and states.
- Required: the button must be keyboard accessible and operable using Enter or Space.
- Required: provide a visible focus indicator in the Focused state.
- Recommended: provide accessible labels (aria-label) or descriptive tooltips whenever no visible text is available.

## Content Guidelines

Verified guidance (Figma description): Use icons that are clear without a label, such as send, trash, save, edit and close.

## Examples

### Toolbar action

Configuration: `Type=Outline`, `Color=Default`, `State=Default`, `Size=MD`, `Corner=Square`

Description: Neutral outlined icon button for a toolbar.

Evidence / Classification: Existing variant; toolbar use documented in Figma.

### Primary icon action

Configuration: `Type=Filled`, `Color=Evergreen`, `State=Default`, `Size=LG`, `Corner=Square`

Description: Solid Evergreen button with the `send` icon.

Evidence / Classification: Default variant in Figma.

### Round compact action

Configuration: `Type=Outline`, `Color=Indigo`, `State=Hover`, `Size=SM`, `Corner=Rounded`

Description: Small circular Indigo outline button in its hover state.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `State=Disable` with `Color=Evergreen`, `Indigo` or `Inverse` | No such variant exists | Variant inventory |
| `Type=Outline` with `Color=Inverse` | No such variant exists | Variant inventory |
| `Type=Filled` with `Color=Default` in states other than `Disable` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `required` | The visible icon rendered inside the control. |
| `label` | `string` | `required` | Accessible label used as `aria-label`. |
| `variant` | `"filled" \| "outline"` | `"filled"` | Controls the shell style. |
| `tone` | `"default" \| "evergreen" \| "indigo" \| "inverse" \| "neutral"` | `"evergreen"` | Applies the supported color tone in the current React package. |
| `size` | `"sm" \| "md" \| "lg"` | `"lg"` | Controls the button frame and expected icon scale. |
| `corner` | `"square" \| "rounded"` | `"square"` | Configures the `corner` component property. |

It also accepts React's native attributes for the underlying HTML element (ButtonHTMLAttributes).
### Examples

#### Filled icon action

```tsx
import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Search"
  icon={<SearchIcon />}
/>;
```

#### Outline contextual action

```tsx
import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Go forward"
  icon={<ArrowIcon />}
  variant="outline"
  tone="neutral"
/>;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
