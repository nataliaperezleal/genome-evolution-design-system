---
component: Button
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [action, interactive, form, cta]
---

# Button

## Purpose

The Button component communicates an available action and allows the user to trigger it. It is the primary call-to-action element in screens, forms, and dialogs. It supports multiple semantic types, two brand color palettes, two sizes, and both square and rounded corner variants.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Type | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Primary |
| Color | Evergreen, Indigo, Default | Evergreen |
| Size | SM, MD | MD |
| State | Default, Hovered, Pressed, Disabled, Focused | Default |
| Corner | Default, Rounded | Default |
| showLeadingIcon | true, false | false |
| showTrailingIcon | true, false | false |
| label | string | "Button" |

**Invalid Combinations:**
- Type=Tertiary only accepts Color=Default. Color=Evergreen and Color=Indigo are not valid with Tertiary.
- Type=Danger, Information, Success, Warning do not accept Color=Evergreen or Color=Indigo.
- Color=Default is not valid for Type=Primary or Type=Secondary.

## When to Use

- For the primary action of a screen or section (Type=Primary). Only one per view.
- For secondary actions that support the primary action (Type=Secondary).
- For low-emphasis actions that do not require visual weight (Type=Tertiary).
- For destructive or irreversible actions (Type=Danger).
- For contextual feedback actions related to informational, success, or warning states (Type=Information, Success, Warning).

## When NOT to Use

- Do not use for page or section navigation — use a Link component instead.
- Do not place more than one Type=Primary button per view.
- Do not use Type=Tertiary when the action requires prominence or discoverability.
- Do not use for decorative or non-interactive elements.

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Interactive wrapper. Applies background, border, padding, and corner radius. | Always |
| Label | Yes | Text label displayed inside the button. Uses `button/sm` or `button/md` typography. | Always |
| Leading Icon | No | Icon placed to the left of the label. | Only when showLeadingIcon=true |
| Trailing Icon | No | Icon placed to the right of the label. | Only when showTrailingIcon=true |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| Type | Enum | Primary | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | All | Defines the semantic role and visual style of the button. |
| Color | Enum | Evergreen | Evergreen, Indigo, Default | Primary, Secondary, Tertiary | Applies the brand color palette. Evergreen is the Genome Plus primary brand color. |
| Size | Enum | MD | SM, MD | All | Controls the height, padding, and typography size. |
| State | Enum | Default | Default, Hovered, Pressed, Disabled, Focused | All | Represents the current interactive state. |
| Corner | Enum | Default | Default, Rounded | All | Controls the border-radius shape of the button. Default applies `semantic/sm` (4px). Rounded applies `semantic/pill`. |
| showLeadingIcon | Boolean | false | true, false | All | Shows or hides the leading icon slot. |
| showTrailingIcon | Boolean | false | true, false | All | Shows or hides the trailing icon slot. |
| label | String | "Button" | Any string | All | The visible text content of the button. |

## States

| State | Description | Visual Changes |
|-------|-------------|----------------|
| Default | Resting state. No interaction active. | Base background, text, and border tokens applied. |
| Hovered | Cursor is over the button. | Background shifts to hovered surface token (e.g., `surface/evergreen/bold/hovered`). |
| Pressed | Button is being clicked or tapped. | Background shifts to pressed surface token (e.g., `surface/evergreen/bold/pressed`). |
| Focused | Button receives keyboard or programmatic focus. | Border of `border/focus` at `focus/width` (2px) applied around the container. |
| Disabled | Button is non-interactive. | Background: `background/disabled`. Text: `text/disabled`. Border: `border/disabled`. |

## Sizes

| Size | Height | Padding X | Padding Y | Typography | Icon Size | Notes |
|------|--------|-----------|-----------|------------|-----------|-------|
| SM | 24px | `space/12` (12px) | `space/4` (4px) | `button/sm` (12px / semibold) | 16px | Compact. Use in dense layouts or inline contexts. |
| MD | 32px | `space/16` (16px) | `space/8` (8px) | `button/md` (14px / semibold) | 16px | Standard. Default size for most use cases. |

## Token Mapping

### Background

| Type / State | Token | Notes |
|---|---|---|
| Primary Evergreen — Default | `surface/evergreen/bold` | #297a39 |
| Primary Evergreen — Hovered | `surface/evergreen/bold/hovered` | |
| Primary Evergreen — Pressed | `surface/evergreen/bold/pressed` | |
| Primary Indigo — Default | `surface/indigo/bold` | |
| Primary Indigo — Hovered | `surface/indigo/bold/hovered` | |
| Primary Indigo — Pressed | `surface/indigo/bold/pressed` | |
| Secondary / Tertiary — Default | `background/canvas` | Transparent or canvas background |
| Secondary — Hovered | `background/interactive/hovered` | |
| Secondary — Pressed | `background/interactive/pressed` | |
| Danger — Default | `surface/danger/subtle` | |
| Danger — Hovered | `surface/danger/subtle/hovered` | |
| Danger — Pressed | `surface/danger/subtle/pressed` | |
| Information — Default | `surface/info/subtle` | |
| Information — Hovered | `surface/info/subtle/hovered` | |
| Information — Pressed | `surface/info/subtle/pressed` | |
| Success — Default | `surface/success/subtle` | |
| Success — Hovered | `surface/success/subtle/hovered` | |
| Success — Pressed | `surface/success/subtle/pressed` | |
| Warning — Default | `surface/warning/subtle` | |
| Warning — Hovered | `surface/warning/subtle/hovered` | |
| Warning — Pressed | `surface/warning/subtle/pressed` | |
| All — Disabled | `background/disabled` | |

### Text

| Type | Token |
|------|-------|
| Primary (Evergreen or Indigo) | `text/inverse` |
| Secondary Evergreen | `text/evergreen` |
| Secondary Indigo | `text/indigo` |
| Tertiary | `text/primary` |
| Danger | `text/danger` |
| Information | `text/info` |
| Success | `text/success` |
| Warning | `text/warning` |
| All — Disabled | `text/disabled` |

### Border

| State / Type | Token | Notes |
|---|---|---|
| Focused | `border/focus` | Width: `focus/width` (2px) |
| Secondary Evergreen | `border/evergreen` | |
| Secondary Indigo | `border/indigo` | |
| Danger | `border/danger` | |
| All — Disabled | `border/disabled` | |
| Strong / Default border | `border/strong` | Applied to Tertiary and Default color buttons |

### Typography

| Size | Token | Size | Line-height | Weight |
|------|-------|------|-------------|--------|
| SM | `button/sm` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) |
| MD | `button/md` | 14px (`size/14`) | 20px | semibold (`weight/semibold`) |

Family: `family/body` (Open Sans)
Letter spacing: `letter-spacing/normal` (0px)

### Spacing

| Token | Value | Applied To |
|-------|-------|------------|
| `gap/sm` | 8px | Gap between icon and label |
| `space/12` | 12px | Horizontal padding — SM |
| `space/16` | 16px | Horizontal padding — MD |
| `space/4` | 4px | Vertical padding — SM |
| `space/8` | 8px | Vertical padding — MD |

### Radius

| Corner | Token | Value |
|--------|-------|-------|
| Default | `semantic/sm` | 4px |
| Rounded | `semantic/pill` | Full pill radius |

### Shadow

Pending confirmation.

## Accessibility

| Property | Value |
|----------|-------|
| Focus indicator | `border/focus` at `focus/width` (2px) — visually confirmed in Focused state |
| Disabled visual | `background/disabled` + `text/disabled` + `border/disabled` |
| Keyboard interaction | Pending confirmation |
| ARIA roles | Pending confirmation |
| Screen reader behavior | Pending confirmation |
| WCAG compliance | Pending confirmation |

## Examples

| Example | Description | Configuration |
|---------|-------------|---------------|
| Primary CTA — Evergreen | Main action button, standard size, default corner | Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Default |
| Primary CTA — Rounded | Main action with pill shape | Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Rounded |
| Primary CTA — Indigo | Alternative brand color for primary action | Type=Primary, Color=Indigo, Size=MD, State=Default, Corner=Default |
| Secondary Action | Supporting action, outlined | Type=Secondary, Color=Evergreen, Size=MD, State=Default |
| Tertiary — No emphasis | Ghost action without border prominence | Type=Tertiary, Color=Default, Size=SM, State=Default |
| Compact Primary | Small primary button for dense UI | Type=Primary, Color=Evergreen, Size=SM, State=Default, Corner=Default |
| Destructive Action | Danger button for irreversible actions | Type=Danger, Size=MD, State=Default |
| Informational | Contextual button tied to an info state | Type=Information, Size=MD, State=Default |
| Disabled State | Non-interactive button | Type=Primary, Color=Evergreen, Size=MD, State=Disabled |
| With Leading Icon | Button with icon on the left | Type=Primary, Color=Evergreen, Size=MD, showLeadingIcon=true |
| With Trailing Icon | Button with icon on the right | Type=Primary, Color=Evergreen, Size=MD, showTrailingIcon=true |

## Pending Clarification

- Shadow tokens per Type or State are not documented in the source material.
- ARIA roles and keyboard interaction behavior are not documented in the source material.
- Screen reader labels and focus order requirements are not documented.
- Whether icon slot accepts any icon or is restricted to specific icons is not specified.
- State=Disabled interaction with Corner=Rounded is not explicitly documented.
