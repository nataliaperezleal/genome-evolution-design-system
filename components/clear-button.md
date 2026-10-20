---
component: "Clear button"
system: "Genome Evolution Design System"
type: "Button (Inline / Ghost)"
status: "Done"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2103-36"
last_updated: "2026-10-20"
tags:
  - "Button"
  - "Inline"
  - "Ghost"
---

# Clear button — Genome Evolution Design System

Inline action button without a solid background, with navigation icons (left and right) flanking a label.

## Quick Reference

### What it is

Inline action button without a solid background. A leading arrow-left icon and a trailing arrow-right icon flank a text label.

### Key Properties

- Color [Default | Evergreen | Indigo] — default: Default
- Type [Default | Information | Success | Danger | Warning] — default: Default
- State [Default | Hovered | Pressed | Focused | Disabled] — default: Default
- Corner [Default | Rounded] — default: Default
- showLeadingIcon [true | false] — default: true
- showTrailingIcon [true | false] — default: true
- label — visible text, default: "Button"

### Default Configuration

Color=Default, Type=Default, State=Default, Corner=Default, showLeadingIcon=true, showTrailingIcon=true, label="Button"

### Invalid Combinations

- Type=Information, Success, Danger or Warning is only documented with Color=Indigo
- State=Disabled is not documented for Color=Evergreen or Color=Indigo
- Color=Default with Type=Information, Success, Danger or Warning is not documented

### Typical Usage

- Inline navigation: Color=Default, Type=Default, State=Default, Corner=Default
- Brand action: Color=Evergreen, Type=Default, State=Default, Corner=Default
- Inline Danger action: Color=Indigo, Type=Danger, State=Default, Corner=Default
- Pill variant: Color=Default, Type=Default, State=Default, Corner=Rounded

---

## Purpose / Intent

### Problem Solved

Provides a discreet action without visual weight for secondary, contextual actions.

### Typical Context

Inside content, lists or panels, and inside banners or alerts.

---

## When to Use

- Inline actions within text or lists
- Contextual navigation (previous / next)
- Secondary actions that do not compete with a primary Button
- Actions inside banners or alerts

---

## When NOT to Use

- As the main action of a screen
- As a replacement for Button Primary or Secondary
- When the action requires visual prominence

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Auto-layout frame holding padding, gap, radius and (per State) background or focus border |
| arrow-left | Optional | Leading icon, 12 × 12 px. Visibility controlled by showLeadingIcon |
| Label | Required | Text label (property label). No visibility toggle was found |
| arrow-right | Optional | Trailing icon, 12 × 12 px. Visibility controlled by showTrailingIcon |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 24 px (all variants) |
| Width | 96 px in variants with label "Button" (fixed vs. hug: [Pending confirmation]) |
| Padding | 8 px horizontal (space/8), 4 px vertical (space/4) |
| Gap | 8 px (gap/sm) |
| Radius | Corner=Default: 4 px (radius/4). Corner=Rounded: semantic/full (999) |

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | arrow-left, 12 × 12 px. Shown when showLeadingIcon=true |
| Trailing | arrow-right, 12 × 12 px. Shown when showTrailingIcon=true |

### Rules

- Both icons are visible by default (showLeadingIcon=true, showTrailingIcon=true).
- Icon color follows the Color / Type / State of the variant (see Token Mapping).
- The exported component context also exposes leadingIcon and trailingIcon, which replace the default arrows. Their exact names and type in Figma are [Pending confirmation].

---

## Variants (Properties)

Property names and values must match Figma exactly.

### Color

| Value | Description |
|--------|--------|
| Default | Neutral label and icons (text/primary, icon/primary) |
| Evergreen | Green label and icons (text/evergreen, icon/evergreen) |
| Indigo | Purple label and icons (text/indigo, icon/indigo). Only Color that combines with Type=Information, Success, Danger and Warning |

### Type

| Value | Description |
|--------|--------|
| Default | Base type. Exists with Color=Default, Evergreen and Indigo |
| Information | Blue label and icons (text/info, icon/info). Only with Color=Indigo |
| Success | Green label and icons (text/success, icon/success). Only with Color=Indigo |
| Danger | Red label and icons (text/danger, icon/danger). Only with Color=Indigo |
| Warning | Olive/yellow label and icons (text/warning, icon/warning). Only with Color=Indigo |

### State

| Value | Description |
|--------|--------|
| Default | Resting appearance, no background and no border |
| Hovered | Background background/interactive/hovered |
| Pressed | Background background/interactive/pressed |
| Focused | 2 px border using border/focus |
| Disabled | Label and icons use text/disabled and icon/disabled. Only exists with Color=Default, Type=Default |

### Corner

| Value | Description |
|--------|--------|
| Default | Corner radius radius/4 |
| Rounded | Pill shape (semantic/full) |

### showLeadingIcon

| Value | Description |
|--------|--------|
| true | Leading icon (arrow-left) is shown |
| false | Leading icon is hidden |

### showTrailingIcon

| Value | Description |
|--------|--------|
| true | Trailing icon (arrow-right) is shown |
| false | Trailing icon is hidden |

### label

Text property with the visible text. Default: "Button".

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Resting state | No background, no border |
| Hovered | Variant State=Hovered | Background background/interactive/hovered (#f7f8f7) |
| Pressed | Variant State=Pressed | Background background/interactive/pressed (#e9ecea) |
| Focused | Variant State=Focused | 2 px solid border, border/focus (#339947) |
| Disabled | Variant State=Disabled (Color=Default, Type=Default only) | Label text/disabled (#849588), icons icon/disabled (#9daaa0) |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/interactive/hovered | State=Hovered | Verified on Color=Default |
| background/interactive/pressed | State=Pressed | Verified on Color=Default |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Label, Color=Default, Type=Default | Verified |
| text/disabled | Label, State=Disabled | Verified |
| text/evergreen | Label, Color=Evergreen | Verified on State=Focused |
| text/info | Label, Type=Information | Verified |
| text/danger | Label, Type=Danger | Verified |
| text/indigo | Label, Color=Indigo | Listed in node variables; not verified per variant |
| text/success | Label, Type=Success | Listed in node variables; not verified per variant |
| text/warning | Label, Type=Warning | Listed in node variables; not verified per variant |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/focus | State=Focused | Verified on Color=Evergreen. Width token: focus/width (2) |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Icons, Color=Default | Listed in node variables; per-variant binding not verified |
| icon/disabled | Icons, State=Disabled | Listed in node variables; per-variant binding not verified |
| icon/evergreen | Icons, Color=Evergreen | Listed in node variables; per-variant binding not verified |
| icon/indigo | Icons, Color=Indigo | Listed in node variables; per-variant binding not verified |
| icon/info | Icons, Type=Information | Listed in node variables; per-variant binding not verified |
| icon/success | Icons, Type=Success | Listed in node variables; per-variant binding not verified |
| icon/danger | Icons, Type=Danger | Listed in node variables; per-variant binding not verified |
| icon/warning | Icons, Type=Warning | Listed in node variables; per-variant binding not verified |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XS Strong | Label text style | Composed of family/body (Open Sans), weight/semibold, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/8 | Horizontal padding | 8 px |
| space/4 | Vertical padding | 4 px |
| gap/sm | Gap between icon and label | 8 px |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Corner=Default | 4 px |
| semantic/full | Corner=Rounded | 999. Verified on Color=Default, State=Default |

radius/24 appears in the node variables.
## Interaction

The component provides visual variants for State=Hovered, Pressed, Focused and Disabled. Triggers, transitions, navigation and click behavior:

---

## Accessibility

| Topic | Information |
|--------|--------|
| Visible State Support | State=Focused (2 px border/focus border) and State=Disabled (Color=Default, Type=Default) variants exist |
| Notes | ARIA roles, keyboard support. |

---

## Content Guidelines

The default label value is "Button".

---

## Examples

### Example 1

Configuration:

```text
Color=Default, Type=Default, State=Default, Corner=Default
```

Description:

Inline navigation.

### Example 2

Configuration:

```text
Color=Evergreen, Type=Default, State=Default, Corner=Default
```

Description:

Brand action.

### Example 3

Configuration:

```text
Color=Indigo, Type=Danger, State=Default, Corner=Default
```

Description:

Inline Danger action.

---

## Invalid Combinations

- Type=Information, Success, Danger or Warning is only documented with Color=Indigo
- State=Disabled is not documented for Color=Evergreen or Color=Indigo
- Color=Default with Type=Information, Success, Danger or Warning is not documented

---

## QA Checklist

- Properties documented.
- Property names match Figma exactly.
- Variant values match Figma exactly.
- Defaults documented.
- Invalid combinations documented.
- Tokens verified.
- No undocumented behavior added.
- No undocumented accessibility behavior added.
- Token usage verified per variant: partial (see Token Mapping notes).
- Variant matrix checked against metadata (58 variants).

---

## Pending Clarification

- Property name casing: the Figma description lists color, type, state and corner in lowercase, while the variant names use Color, Type, State and Corner. This document follows the variant names.
- Exact Figma names and types of showLeadingIcon, showTrailingIcon, label, leadingIcon and trailingIcon.
- status, version and owner.
- Per-variant token bindings still unverified: text/indigo, text/success, text/warning, all icon/* tokens, radius/24, and the radius used by Corner=Rounded + State=Focused.
- Token names are taken verbatim from Figma and were not cross-checked against the token JSON files.
- Width behavior (fixed vs. hug), Semantics, Interaction, Accessibility and Content Guidelines.
- weight/semibold is exported with value "Medium", while the text style reports weight 600.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.