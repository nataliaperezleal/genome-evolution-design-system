---
component: "Button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=392-861"
last_updated: "2026-10-22"
tags:
  - "button"
  - "action"
  - "interactive"
---

# Button

System: Genome Evolution Design System

## Component Summary

Button triggers an action. It is available in seven types (Primary, Secondary, Tertiary, Danger, Information, Success, Warning), two brand colors for Primary and Secondary, two sizes, two corner styles, and Default, Hovered, Pressed, Focused and Disabled states, with optional leading and trailing icons.

## Quick Reference

### What It Is

Verified specification: Figma describes the Primary button as the main action button, with a solid background in the brand color, used for the most important action of a screen or section; only one should be used per view. Figma also states that `Color=Evergreen` applies the Genome Plus brand's primary green palette and is the default brand color for Primary and Secondary buttons. (Source: variant descriptions in Figma, written in Spanish.)

Evidence-based interpretation: The other types provide lower emphasis (Secondary, outlined in the brand color; Tertiary, neutral outline) or status-specific emphasis (Danger, Information, Success, Warning), as shown by their fills, borders and the status token families they use.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Primary |
| Color | Evergreen, Indigo, Default | Evergreen |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| Corner | Default, Rounded | Default |
| Size | MD, SM | MD |
| label (text) | Free text | Button |
| showLeadingIcon (boolean) | true, false | false |
| leadingIcon (instance swap) | Any icon instance | check |
| showTrailingIcon (boolean) | true, false | false |
| trailingIcon (instance swap) | Any icon instance | close |

Defaults are taken from the component property definitions in Figma; `Color=Evergreen` as the default brand color is also stated in the Figma description.

### Default Configuration

`Type=Primary`, `Color=Evergreen`, `State=Default`, `Corner=Default`, `Size=MD`, `label="Button"`, both icons hidden: a `surface/evergreen/bold` button with a `text/inverse` label and a 4 px corner radius.

Current behavior: this default variant is 30 px high (top padding `space/8`, bottom padding `space/6`), while every other MD variant is 32 px high (`space/8` top and bottom). See Pending Clarification.

### Typical Usage

Verified observation: The component set contains 152 variants. The available `Color` values depend on `Type` and `State`:

| Type | Colors | States |
|------|--------|--------|
| Primary | Evergreen, Indigo | Default, Hovered, Pressed, Focused |
| Primary | Default | Disabled |
| Secondary | Evergreen, Indigo | Default, Hovered, Pressed, Focused |
| Secondary | Default | Disabled |
| Tertiary | Default | Default, Hovered, Pressed, Focused |
| Danger, Information, Success, Warning | Default | Default, Hovered, Pressed, Focused |

Every combination above exists in both `Corner` values and both `Size` values.

Verified guidance (Figma description): Use a single Primary button per view, for the most important action of the screen or section.

Evidence-based interpretation:

- Use Secondary for actions with less emphasis than Primary, in the same brand color.
- Use Tertiary for neutral, low-emphasis actions.
- Use Danger, Information, Success or Warning when the action relates to that status.
- To show a disabled Primary or Secondary button, set `Color=Default` together with `State=Disabled`.

## Purpose / Intent

### Problem Solved

Verified specification: Primary marks the most important action of a screen or section. Evidence-based interpretation: The full set provides a consistent hierarchy of action emphasis and status-specific actions.

### Expected Outcome

Evidence-based interpretation: Users can identify the main action and distinguish secondary, neutral and status-related actions.

### Typical Context

Primary is documented for the most important action in a screen or section. Other contexts are not documented in Figma.

## When to Use

- Primary: the most important action of a screen or section (verified, Figma description).
- Secondary: an action with lower emphasis than Primary (evidence-based interpretation).
- Tertiary: a neutral, low-emphasis action (evidence-based interpretation).
- Danger, Information, Success, Warning: actions associated with those statuses (evidence-based interpretation from the status tokens).

## When NOT to Use

- Do not use more than one Primary button per view (verified, Figma description).

Limitations of the current component:

- `Disabled` exists only for Primary and Secondary, with `Color=Default`. Tertiary, Danger, Information, Success and Warning have no disabled variant.
- `Indigo` is available only for Primary and Secondary.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout frame that carries the fill, border and corner radius. |
| Leading icon | Optional (`showLeadingIcon`) | 16 px icon before the label; `check` by default, swappable through `leadingIcon`. |
| Label | Required | Text set through `label`. |
| Trailing icon | Optional (`showTrailingIcon`) | 16 px icon after the label; `close` by default, swappable through `trailingIcon`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height — MD | 32 px (30 px in the default variant, see Default Configuration) | Variant dimensions |
| Height — SM | 24 px | Variant dimensions |
| Padding — MD | 16 px horizontal, `space/8` (8) vertical | Variable bindings |
| Padding — SM | `space/12` (12) horizontal, `space/4` (4) vertical | Variable bindings |
| Gap | `gap/sm` (8) between icons and label | Variable binding |
| Alignment | Content centered horizontally and vertically | Design context |
| Width | Adapts to content (79 px MD / 64 px SM with the default label) | Variant dimensions, auto layout |
| Corner radius — Default | `semantic/sm` (4) | Variable binding |
| Corner radius — Rounded | `semantic/pill` (32) | Variable binding |
| Border (outlined types) | `width/1` (1 px) | Variable binding |
| Focus border | `focus/width` (2 px) | Variable binding |
| Icon size | 16 × 16 px (both sizes) | Layer dimensions |
| Label typography — MD | `Text/Button/MD`: `family/body` (Open Sans), weight 600, `size/14`, `line-height/16` | Text style |
| Label typography — SM | `Text/Button/SM`: `family/body`, weight 600, `size/12`, `line-height/16` | Text style |
| Label wrapping | Single line (no wrapping) | Design context |

## Semantics

Verified specification: Primary represents the most important action of a screen or section (Figma description).

Evidence-based interpretation:

- Type expresses the level of emphasis (Primary > Secondary > Tertiary) or the status associated with the action (Danger, Information, Success, Warning, bound to the `danger`, `info`, `success` and `warning` token families).
- `Color` (Evergreen, Indigo) selects the brand palette and does not change the button's meaning; Evergreen is the default brand color (verified, Figma description).
- `Corner` and `Size` are presentational.

Not verified in Figma: HTML element, ARIA role, and how leading or trailing icons are exposed to assistive technologies.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon | `check` by default, 16 px; swappable via `leadingIcon`; hidden unless `showLeadingIcon=true` | Instance swap property |
| Trailing icon | `close` by default, 16 px; swappable via `trailingIcon`; hidden unless `showTrailingIcon=true` | Instance swap property |

Icon fills are not bound to variables in the inspected variants.

## Variants (Properties)

The inventory below is complete for property values; all 152 variants were listed, and representative variants of every Type, Color, State, Corner and Size were inspected in detail.

### Type

| Value | Fill / Border / Label (State=Default) | Available Colors |
|-------|----------------------------------------|------------------|
| Primary | Evergreen: `surface/evergreen/bold`, no border, `text/inverse`. Indigo: `surface/indigo/bold`, no border, `text/inverse`. | Evergreen, Indigo; Default (Disabled only) |
| Secondary | `background/canvas`, 1 px `border/evergreen` or `border/indigo`, `text/evergreen` or `text/indigo` | Evergreen, Indigo; Default (Disabled only) |
| Tertiary | `background/canvas`, 1 px `border/strong`, `text/primary` | Default |
| Danger | `surface/danger/subtle`, 1 px `border/danger`, `text/danger` | Default |
| Information | `surface/info/subtle`, 1 px `border/info`, `text/info` | Default |
| Success | `surface/success/subtle`, 1 px `border/success`, `text/success` | Default |
| Warning | `surface/warning/subtle`, 1 px `border/warning`, `text/warning` | Default |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Evergreen | Genome Plus brand primary green palette; default brand color for Primary and Secondary. | Figma description; Primary and Secondary |
| Indigo | Indigo brand palette (`surface/indigo/bold`, `border/indigo`, `text/indigo`). | Primary and Secondary |
| Default | Neutral color used by Tertiary, the status types, and the Disabled variants of Primary and Secondary. | All types |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting appearance (see Type). | All types |
| Hovered | Primary: `surface/<color>/bold/hovered`. Secondary, Tertiary: `background/interactive/hovered`. Status types: `surface/<status>/subtle/hovered`. | All types |
| Pressed | Primary: `surface/<color>/bold/pressed`. Secondary, Tertiary: `background/interactive/pressed`. Status types: `surface/<status>/subtle/pressed`. | All types |
| Focused | 2 px (`focus/width`) `border/focus` border; the fill stays as in Default; in outlined types it replaces the type border. | All types |
| Disabled | Primary: `background/disabled`, `text/disabled`, no border. Secondary: `background/disabled`, 1 px `border/disabled`, `text/disabled`. | Primary and Secondary with `Color=Default` only |

### Corner

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | 4 px radius (`semantic/sm`). | All combinations |
| Rounded | Pill shape (`semantic/pill`, 32). | All combinations |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 32 px high; `Text/Button/MD`; 16 px horizontal padding. | All combinations |
| SM | 24 px high; `Text/Button/SM`; 12 px horizontal padding. | All combinations |

### label, leadingIcon, trailingIcon

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| label | Button text; "Button" in all variants. | Text property |
| showLeadingIcon / leadingIcon | Shows a 16 px icon before the label (`check` by default). | Boolean + instance swap |
| showTrailingIcon / trailingIcon | Shows a 16 px icon after the label (`close` by default). | Boolean + instance swap |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | See Type. | State variants |
| Hovered | Hover appearance. | Darker bold fill (Primary) or hovered background (other types). | State variants |
| Pressed | Pressed appearance. | Darkest bold fill (Primary) or pressed background (other types). | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border. | State variants |
| Disabled | Unavailable appearance. | `background/disabled`, `text/disabled`; `border/disabled` on Secondary. | State variants (Primary, Secondary) |

These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/evergreen/bold`, `/hovered`, `/pressed` | Primary Evergreen fill by state | Variable binding |
| Surface | `surface/indigo/bold`, `/hovered`, `/pressed` | Primary Indigo fill by state | Variable binding |
| Surface | `surface/danger/subtle`, `/hovered`, `/pressed` | Danger fill by state | Variable binding |
| Surface | `surface/info/subtle`, `/hovered`, `/pressed` | Information fill by state | Variable binding |
| Surface | `surface/success/subtle`, `/hovered`, `/pressed` | Success fill by state | Variable binding |
| Surface | `surface/warning/subtle`, `/hovered`, `/pressed` | Warning fill by state | Variable binding |
| Background | `background/canvas` | Secondary and Tertiary fill | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | Secondary and Tertiary hover and pressed fill | Variable binding |
| Background | `background/disabled` | Disabled fill | Variable binding |
| Border | `border/evergreen`, `border/indigo`, `border/strong`, `border/danger`, `border/info`, `border/success`, `border/warning`, `border/disabled` | Type and Disabled borders | Variable binding |
| Border | `border/focus`, `focus/width` | Focus border | Variable binding |
| Border width | `width/1` | Outlined types | Variable binding |
| Text | `text/inverse`, `text/evergreen`, `text/indigo`, `text/primary`, `text/danger`, `text/info`, `text/success`, `text/warning`, `text/disabled` | Label color by Type, Color and State | Variable binding |
| Spacing | `space/8`, `space/6`, `space/12`, `space/4`, `space/16`, `size/16`, `gap/sm` | Padding and gap | Variable binding |
| Radius | `semantic/sm`, `semantic/pill` | Corner | Variable binding |
| Typography | `Text/Button/MD`, `Text/Button/SM` | Label by Size | Text styles |

Current behavior: MD horizontal padding is bound to `space/16` in the default variant and to `size/16` (a typography size token) in the other MD variants; both resolve to 16 px. Icon fills are not bound to variables.

## Interaction

Observed states: Default, Hovered, Pressed and Focused exist for every Type; Disabled exists for Primary and Secondary.

Not verified in Figma: the action triggered, loading behavior, keyboard activation and prototype interactions. No prototype interactions were found.

## Accessibility

Accessibility-related observations:

- `Focused` shows a visible 2 px `border/focus` border on every Type, Color, Corner and Size.
- Status types pair a subtle fill with a colored border and label, so status is not conveyed by fill color alone, but the label text carries the meaning.
- SM uses a 12 px label (`size/12`).
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): accessible name requirements for icon usage, disabled semantics, ARIA attributes and keyboard support.

## Content Guidelines

Verified observation: All variants use the label "Button". Labels are single-line, and the button width grows with the label.

## Examples

### Main action

Configuration: `Type=Primary`, `Color=Evergreen`, `Size=MD`, `Corner=Default`, `State=Default`

Description: The single most important action in a view.

Evidence / Classification: Existing variant; usage documented in Figma.

### Supporting action

Configuration: `Type=Secondary`, `Color=Evergreen`, `Size=MD`, `Corner=Default`, `State=Default`

Description: Outlined brand-colored button.

Evidence / Classification: Existing variant in Figma.

### Destructive action, pill

Configuration: `Type=Danger`, `Color=Default`, `Size=SM`, `Corner=Rounded`, `State=Default`

Description: Compact pill-shaped Danger button.

Evidence / Classification: Existing variant in Figma.

### Disabled main action

Configuration: `Type=Primary`, `Color=Default`, `State=Disabled`, `Size=MD`

Description: Primary button in its disabled appearance.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| More than one Primary button in a view | Figma states that there should be only one Primary button per view | Figma description |
| `State=Disabled` with `Color=Evergreen` or `Color=Indigo` | No such variant exists; Disabled uses `Color=Default` | Variant inventory |
| `State=Disabled` with Tertiary, Danger, Information, Success or Warning | No such variant exists | Variant inventory |
| `Color=Evergreen` or `Color=Indigo` with Tertiary, Danger, Information, Success or Warning | No such variant exists | Variant inventory |
| Primary or Secondary with `Color=Default` in states other than Disabled | No such variant exists | Variant inventory |

Only the first row is a documented rule; the others are unavailable combinations.

## Pending Clarification

1. Default variant height: `Type=Primary, Color=Evergreen, State=Default, Corner=Default, Size=MD` is 30 px high (top padding 8, bottom padding 6), while all other MD variants, including its Hovered and Focused states, are 32 px. Is 32 px the intended MD height? This affects implementation and causes a 2 px height change between Default and other states of the default button.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
