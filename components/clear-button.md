---
component: ClearButton
system: Genome Evolution Design System
type: Component
status: "Production"
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [action, inline, ghost, navigation]
---

# ClearButton

## Purpose

ClearButton is a minimal, inline-style interactive button with no solid background. It combines a text label with optional leading and trailing icons (default: arrow-left and arrow-right). It is designed for secondary contextual actions embedded within content, lists, panels, or banners, where a full-weight Button would create too much visual noise.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| color | Default, Evergreen, Indigo | Default |
| type | Default, Information, Success, Danger, Warning | Default |
| state | Default, Hovered, Pressed, Focused, Disabled | Default |
| corner | Default, Rounded | Default |
| showLeadingIcon | true, false | true |
| showTrailingIcon | true, false | true |
| label | string | "Button" |

**Invalid Combinations:**
- type=Information, Success, Danger, Warning are only documented with color=Indigo.
- state=Disabled is only documented for color=Default.
- color=Default combined with type=Information, Success, Danger, Warning is not documented.
- color=Evergreen combined with type=Information, Success, Danger, Warning is not documented.

## When to Use

- For inline actions embedded within text, lists, or content blocks.
- For previous/next navigation within a content sequence.
- For low-emphasis secondary actions that must not compete with a primary Button.
- For contextual actions inside banners, alerts, or informational panels.
- When an action needs to be visible but not visually prominent.

## When NOT to Use

- Do not use as the primary action of a screen or section — use Button (Type=Primary) instead.
- Do not use in place of Button Secondary when the action needs more visual presence.
- Do not use when the action requires strong discoverability or high affordance.
- Do not use for navigation between pages — use a Link component instead.

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Invisible wrapper at rest. Applies background only on Hovered/Pressed/Focused states. Padding and corner radius are always applied. | Always |
| Leading Icon | No | Icon placed to the left of the label. Default icon: arrow-left (12×12px). | Only when showLeadingIcon=true |
| Label | Yes | Text label. Uses `Text/Body/XS Strong` typography (12px, semibold). | Always |
| Trailing Icon | No | Icon placed to the right of the label. Default icon: arrow-right (12×12px). | Only when showTrailingIcon=true |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| color | Enum | Default | Default, Evergreen, Indigo | All | Controls the text and icon color. Default uses `text/primary`. Evergreen uses `text/evergreen`. Indigo uses `text/indigo`. |
| type | Enum | Default | Default, Information, Success, Danger, Warning | Primarily color=Indigo | Applies semantic color to the text and icons. Overrides the color property's text token with the corresponding semantic text token. |
| state | Enum | Default | Default, Hovered, Pressed, Focused, Disabled | All | Represents the current interactive state of the component. |
| corner | Enum | Default | Default, Rounded | All | Controls the border-radius shape. Default applies `radius/4` (4px). Rounded applies `semantic/full` (999px). |
| showLeadingIcon | Boolean | true | true, false | All | Shows or hides the leading icon slot. |
| showTrailingIcon | Boolean | true | true, false | All | Shows or hides the trailing icon slot. |
| label | String | "Button" | Any string | All | The visible text label of the component. |

## States

| State | Description | Visual Changes |
|-------|-------------|----------------|
| Default | Resting state. No background visible. | No background. Text and icon color from `color` or `type` token. |
| Hovered | Cursor is over the component. | Background: `background/interactive/hovered`. Text and icon color unchanged. |
| Pressed | Component is being clicked or tapped. | Background: `background/interactive/pressed`. Text and icon color unchanged. |
| Focused | Component receives keyboard or programmatic focus. | Border of `border/focus` at `border.base.focus.width` (2px). No background change. |
| Disabled | Component is non-interactive. | Text and icon color: `text/disabled`. No background. Only documented for color=Default. |

## Sizes

ClearButton has a single size. No size property is exposed.

| Padding X | Padding Y | Typography | Icon Size | Notes |
|-----------|-----------|------------|-----------|-------|
| `space/8` (8px) | `space/4` (4px) | `Text/Body/XS Strong` — 12px, semibold, line-height 16px | 12×12px | Fixed single size. |

## Token Mapping

### Background

| State | Token | Notes |
|-------|-------|-------|
| Default | None | No background at rest |
| Hovered | `background/interactive/hovered` | #f7f8f7 — applies to all color and type values |
| Pressed | `background/interactive/pressed` | #e9ecea — applies to all color and type values |
| Focused | None | No background; uses border instead |
| Disabled | None | No background |

### Text

| color / type | Token | Value |
|---|---|---|
| color=Default, type=Default | `text/primary` | #2d342f |
| color=Evergreen, type=Default | `text/evergreen` | #297a39 |
| color=Indigo, type=Default | `text/indigo` | #6b1b99 |
| color=Indigo, type=Information | `text/info` | #2f7cb6 |
| color=Indigo, type=Success | `text/success` | #00885c |
| color=Indigo, type=Danger | `text/danger` | #ba1a1a |
| color=Indigo, type=Warning | `text/warning` | #8c7500 |
| All — Disabled | `text/disabled` | |

### Border

| State | Token | Notes |
|-------|-------|-------|
| Focused | `border/focus` | Width: `border.base.focus.width` (2px) — applies to all color and type values |

### Icon

Icons match the text token of their corresponding color/type combination. No separate icon token is documented; icon color is inherited from the text color of the variant.

### Typography

| Token | Size | Line-height | Weight | Family |
|-------|------|-------------|--------|--------|
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) |

Letter spacing: `letter-spacing/normal` (0px)

### Spacing

| Token | Value | Applied To |
|-------|-------|------------|
| `gap/sm` | 8px | Gap between icon and label |
| `space/8` | 8px | Horizontal padding |
| `space/4` | 4px | Vertical padding |

### Radius

| Corner | Token | Value |
|--------|-------|-------|
| Default | `radius/4` | 4px |
| Rounded | `semantic/full` | 999px |

### Shadow

Pending confirmation.

## Accessibility

| Property | Value |
|----------|-------|
| Focus indicator | `border/focus` at `border.base.focus.width` (2px) — confirmed in Focused state for all color and type values |
| Disabled visual | `text/disabled` applied to label and icons |
| Keyboard interaction | Pending confirmation |
| ARIA roles | Pending confirmation |
| Screen reader behavior | Pending confirmation |
| WCAG compliance | Pending confirmation |

## Examples

| Example | Description | Configuration |
|---------|-------------|---------------|
| Default inline action | Neutral inline button with both icons | color=Default, type=Default, state=Default, corner=Default |
| Evergreen inline action | Brand-colored inline action | color=Evergreen, type=Default, state=Default, corner=Default |
| Indigo inline action | Alternative brand inline action | color=Indigo, type=Default, state=Default, corner=Default |
| Rounded pill — Default | Pill-shaped neutral inline action | color=Default, type=Default, state=Default, corner=Rounded |
| Rounded pill — Indigo | Pill-shaped Indigo inline action | color=Indigo, type=Default, state=Default, corner=Rounded |
| Danger inline | Danger-tinted action inside alert or panel | color=Indigo, type=Danger, state=Default, corner=Default |
| Information inline | Info-tinted contextual action | color=Indigo, type=Information, state=Default, corner=Default |
| Success inline | Success-tinted contextual action | color=Indigo, type=Success, state=Default, corner=Default |
| Warning inline | Warning-tinted contextual action | color=Indigo, type=Warning, state=Default, corner=Default |
| Hovered state | Visible background on hover | color=Default, type=Default, state=Hovered, corner=Default |
| Focused state | Focus ring visible | color=Default, type=Default, state=Focused, corner=Default |
| Disabled state | Non-interactive appearance | color=Default, type=Default, state=Disabled, corner=Default |
| Label only | Without icons | color=Default, type=Default, showLeadingIcon=false, showTrailingIcon=false |

## Pending Clarification

- type=Information, Success, Danger, Warning are only documented with color=Indigo. Behavior with color=Default or color=Evergreen is not documented.
- state=Disabled is only documented for color=Default. Disabled behavior for color=Evergreen and color=Indigo is not documented.
- Shadow tokens are not documented in the source material.
- ARIA roles and keyboard interaction behavior are not documented.
- Screen reader labels and focus order are not documented.
- Whether the leading and trailing icon slots accept custom icons or are restricted to arrow-left / arrow-right is not specified.
