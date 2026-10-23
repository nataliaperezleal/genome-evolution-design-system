---
component: "Split button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2339-3772"
last_updated: "2026-10-23"
tags:
  - "action"
  - "button"
  - "menu"
---

# Split button

System: Genome Evolution Design System

## Component Summary

Split button combines a main action button with an attached chevron segment, in Primary (filled) and Secondary (outlined) types, two color themes, two sizes, and five visual states.

## Quick Reference

### What It Is

Evidence-based interpretation: a button with two parts: a main action labeled "Button" and a separate chevron-down segment that suggests access to related actions. The component set (Figma node `2339:3772`) separates the two parts with a 1px divider. No written component description is defined for Split button in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Evergreen, Indigo, Default | Evergreen |
| Type | Primary, Secondary | Primary |
| Size | Regular, Small | Regular |
| State | Default, Hovered, Pressed, Focused, Disable | Default |

Split button exposes no text, boolean, or instance-swap properties. The label text is bound to a string variable named `Text` (value "Button").

### Default Configuration

The component property defaults exposed by Figma are `Color=Evergreen`, `Type=Primary`, `Size=Regular`, and `State=Default`. This corresponds to variant `2339:3919`, the top-left variant of the component set: a filled green 111 × 32px split button.

### Typical Usage

Verified observations:

- `Type=Primary` uses a filled background (`surface/evergreen/bold` or `surface/indigo/bold`) with a light label; `Type=Secondary` uses a colored 1px border with a colored label.
- `Color=Default` exists only with `Type=Primary` and `State=Disable`; `Disable` is not available for `Type=Secondary`.
- In `Hovered` and `Pressed`, only the chevron segment changes; in `Focused`, the focus border surrounds only the chevron segment.

Evidence-based interpretation:

- Use Split button when there is one main action and a set of related alternative actions available from the chevron.
- Use `Primary` for the main action of a view and `Secondary` for less prominent actions.
- This follows the Button component's Figma description, which states that its `Disabled` state exists only with `Color=Default`; Split button uses the same pattern with `Color=Default` for `Disable`.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: some workflows have one most-common action plus related variations (for example, "Save" with "Save as" or "Save and close"), and showing them all as separate buttons would add clutter.

### Expected Outcome

Evidence-based interpretation: the user performs the main action with one click or opens the related actions from the chevron.

### Typical Context

Evidence-based interpretation: toolbars, form footers, and page headers where a main action has related alternatives.

## When to Use

Evidence-based interpretations, derived from the structure and states:

- When one action is clearly the most common and related actions should remain available.
- To group a main action with its variations in limited space.

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Split button in Figma. As recommendations only:

- Do not use it when there is only one action; use Button.
- Do not use it when the chevron options are unrelated to the main action.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Rounded (4px) container; filled in `Primary`, bordered in `Secondary`. |
| Main action | Required | Segment with the label "Button" (bound to the `Text` variable). |
| Divider | Required | 1px vertical line between the two segments. |
| Chevron segment | Required | Segment with a 12px `chevron-down` icon; carries the hover, pressed, and focus visuals. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — `Regular` | 111 × 32px | Direct measurement |
| Size — `Small` | 92 × 24px (`Primary`); 88 × 24px (`Secondary`) | Direct measurement |
| Main action padding — `Regular` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Main action padding — `Small` | 12px horizontal, 4px vertical | `space/12`, `space/4` |
| Chevron segment padding — `Regular` | 10px | Direct measurement |
| Chevron segment padding — `Small` | 8px × 4px (`Primary`); 6px (`Secondary`) | Direct measurement |
| Corner radius | 4px | `spread/md` (`Primary`); `semantic/sm` (`Secondary`) |
| Divider | 1px | Direct measurement |
| Focus border | 2px, chevron segment only | `focus/width` |
| Icon size | 12px | Direct measurement |

## Semantics

Evidence-based interpretation:

- The main action performs the primary command; the chevron segment opens related options.
- `Type=Primary` represents the highest-emphasis action; `Type=Secondary` a lower-emphasis action. This matches the Primary and Secondary types described in the Button component's Figma description.
- `Color` is a theme choice (Evergreen or Indigo); `Color=Default` is used only for the disabled appearance.

Not verified in Figma: button and menu-button roles, `aria-haspopup`, `aria-expanded`, the menu that opens from the chevron, and keyboard behavior.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Chevron | `chevron-down`, 12px; inverse color in `Primary`, theme color in `Secondary`, muted in `Disable` | Figma layers and variables |

The chevron is not exposed as an instance-swap property.

## Variants (Properties)

The variant inventory is complete: 34 variants. All variants were inspected.

| Type | Color | States | Sizes |
|------|-------|--------|-------|
| Primary | Evergreen, Indigo | Default, Hovered, Pressed, Focused | Regular, Small |
| Primary | Default | Disable | Regular, Small |
| Secondary | Evergreen, Indigo | Default, Hovered, Pressed, Focused | Regular, Small |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Evergreen | Green theme. | Default; `surface/evergreen/bold`, `border/evergreen`, `text/evergreen` |
| Indigo | Purple theme. | `surface/indigo/bold`, `border/indigo`, `text/indigo` |
| Default | Disabled appearance only. | `Type=Primary`, `State=Disable` only |

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Primary | Filled background, light label and chevron, light divider. | Default; `text/inverse`, `border/inverse` |
| Secondary | 1px colored border, colored label and chevron, colored divider, no fill. | `border/evergreen`, `border/indigo` |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Regular | 32px tall; 14px label (`Text/Button/MD`). | Default |
| Small | 24px tall; 12px label (`Text/Button/SM`). | — |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting. | All colors except `Default` |
| Hovered | Chevron segment darkens (`Primary`) or gets a hovered background (`Secondary`). | `surface/.../bold/hovered`; `background/interactive/hovered` |
| Pressed | Chevron segment darkens further (`Primary`) or gets a pressed background (`Secondary`). | `surface/.../bold/pressed`; `background/interactive/pressed` |
| Focused | 2px focus border around the chevron segment only. | `border/focus`, `focus/width` |
| Disable | Muted gray background, label, divider, and chevron. | `Color=Default`, `Type=Primary` only; `background/disabled`, `text/disabled`, `border/disabled` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | Theme fill (`Primary`) or theme border (`Secondary`) | Variants `2339:3919`, `2339:3785` |
| Hovered | Pointer over the chevron segment | Chevron segment: `surface/evergreen/bold/hovered` or `surface/indigo/bold/hovered` (`Primary`); `background/interactive/hovered` (`Secondary`) | Variants `2345:282`, `2345:432` |
| Pressed | Chevron segment being activated | Chevron segment: `surface/.../bold/pressed` (`Primary`); `background/interactive/pressed` (`Secondary`) | Variants `2345:294`, `2345:444` |
| Focused | Chevron segment has focus | 2px `border/focus` around the chevron segment | Variants `2345:329`, `2345:450` |
| Disable | Unavailable | Muted colors | Variants `2345:362`, `2345:357` |

The main action segment has no hover, pressed, or focus visuals. Transitions are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/evergreen/bold`, `surface/indigo/bold` | `Primary` fill | Figma variables |
| Color — surface | `surface/evergreen/bold/hovered`, `surface/indigo/bold/hovered` | `Primary` chevron segment (`Hovered`) | Figma variables |
| Color — surface | `surface/evergreen/bold/pressed`, `surface/indigo/bold/pressed` | `Primary` chevron segment (`Pressed`) | Figma variables |
| Color — surface | `background/interactive/hovered`, `background/interactive/pressed` | `Secondary` chevron segment (`Hovered`, `Pressed`) | Figma variables |
| Color — surface | `background/disabled` | `Disable` fill | Figma variables |
| Color — border | `border/evergreen`, `border/indigo` | `Secondary` border and divider | Figma variables |
| Color — border | `border/inverse` | `Primary` divider; also used as the `Primary`, `Small` label color | Figma variables |
| Color — border | `border/focus` | Focus border | Figma variables |
| Color — border | `border/disabled` | `Disable` divider | Figma variables |
| Border width | `focus/width` | Focus border (2px) | Figma variables |
| Color — text | `text/inverse` | `Primary`, `Regular` label | Figma variables |
| Color — text | `text/evergreen`, `text/indigo` | `Secondary` label | Figma variables |
| Color — text | `text/disabled` | `Disable` label | Figma variables |
| Color — icon | `icon/inverse`, `icon/evergreen`, `icon/indigo`, `icon/disabled` | Used by the component set (chevron); exact layer binding not inspected | Figma variables |
| Spacing | `space/16`, `space/12`, `space/8`, `space/4` | Main action padding | Figma variables |
| Radius | `spread/md`, `semantic/sm` | Corner radius (4px) | Figma variables |
| Typography | `Text/Button/MD`, `Text/Button/SM` | Label | Figma text styles |
| String variable | `Text` | Label content ("Button") | Figma variables |

Not bound to tokens: chevron segment padding (10px, 8px × 4px, 6px), the 1px divider and border widths, and the 4px radius of the `Primary`, `Regular`, `Focused` variant.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hovered`, `Pressed`, and `Focused` are shown only on the chevron segment.
- Evidence-based interpretation: clicking the main action runs the main command; clicking the chevron opens a menu of related actions. The menu, its content, and how each part responds to hover, press, and focus are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Label contrast: `text/inverse` on `surface/evergreen/bold` 5.01:1 and on `surface/indigo/bold` 8.8:1; `text/evergreen` 5.33:1 and `text/indigo` 9.37:1 on white.
- The focus border (`border/focus`) is 1.47:1 against the Evergreen `Primary` fill and 2.58:1 against the Indigo `Primary` fill, so the focus indicator is hard to see on filled split buttons.
- Only the chevron segment has a focus visual; the main action has none.
- The chevron segment shows only an icon, with no visible label.

Missing accessibility information: separate focus targets for the two parts, accessible name for the chevron segment, menu semantics, and keyboard behavior.

## Content Guidelines

Verified observations:

- The label is "Button", provided by the `Text` variable; it is a placeholder.
- The label is single-line and centered.

Recommendations:

- Use a short verb for the main action (for example, "Save").
- Make sure the chevron options are variations of the main action.

## Examples

### Primary split action

Configuration: `Color=Evergreen`, `Type=Primary`, `Size=Regular`, `State=Default`

Description: a filled green split button for the main action of a view.

Evidence / Classification: existing Figma configuration (variant `2339:3919`).

### Secondary split action (Indigo)

Configuration: `Color=Indigo`, `Type=Secondary`, `Size=Small`, `State=Default`

Description: a small outlined split button for a lower-priority action in a dense layout.

Evidence / Classification: existing Figma configuration (variant `2345:677`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: `Color=Default` exists only with `Type=Primary` and `State=Disable`; `Disable` does not exist for `Type=Secondary` or for `Evergreen` and `Indigo`. These combinations cannot be selected in Figma.

## Pending Clarification

1. States per part. `Hovered`, `Pressed`, and `Focused` affect only the chevron segment; the main action has no hover, pressed, or focus visuals. Confirm how states should be shown for each part.
2. Label content. The label is bound to a string variable (`Text`) instead of a component text property, and there is no property for the chevron icon. Confirm how designers should set the label per instance.
3. Disabled coverage and naming. `Disable` exists only for `Type=Primary`; there is no disabled `Secondary` split button. The value is named `Disable`, while Input and Button use `Disabled`. Confirm whether a disabled Secondary variant is needed and whether the value should be renamed.
4. Focus visibility. The focus border is 1.47:1 against the Evergreen fill and 2.58:1 against the Indigo fill. Confirm whether the focus treatment should change on filled split buttons.
5. Token usage. The `Primary`, `Small` label uses `border/inverse` instead of `text/inverse`; chevron padding is hard-coded and differs between `Primary` and `Secondary` in `Small`; radius uses both `spread/md` and `semantic/sm`. Confirm the intended tokens.

## Notes / Changelog

Generated from Figma evidence (component set `2339:3772`) on 2026-10-23.

[No verified historical changes available]
