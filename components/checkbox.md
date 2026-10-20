---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form Control / Selection"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201"
last_updated: "2026-10-20"
tags:
  - "Form Control"
  - "Selection"
  - "Checkbox"
---

# Checkbox — Genome Evolution Design System

Binary or indeterminate selection control to check, uncheck or indicate a mixed state, with an optional icon and label.

## Quick Reference

### What it is

Binary or indeterminate selection control. It lets the user check, uncheck or indicate a mixed state within forms, lists or tables. It can show an icon and an optional label to its right.

### Key Properties

- Color [Default | Evergreen | Indigo] — default: Default
- Type [Default | Check | Mixed | Plus] — default: Default
- State [Default | Hovered | Pressed | Focused | Disabled] — default: Disabled
- showIcon [true | false] — default: true
- showLabel [true | false] — default: true
- label — visible text to the right, default: "Label"

### Default Configuration

Color=Default, Type=Default, State=Disabled, showIcon=true, showLabel=true, label="Label"

### Invalid Combinations

- Type=Default with Color=Evergreen or Color=Indigo is not documented
- State=Disabled is only documented with Color=Default

### Typical Usage

- Unchecked: Color=Default, Type=Default, State=Default
- Neutral checked: Color=Default, Type=Check, State=Default
- Evergreen checked: Color=Evergreen, Type=Check, State=Default
- Mixed state: Color=Default, Type=Mixed, State=Default
- Disabled: Color=Default, Type=Default, State=Disabled
- Focused: Color=Default, Type=Check, State=Focused

---

## Purpose / Intent

### Problem Solved

Lets the user check, uncheck or indicate a mixed state for an option within forms, lists or tables.

### Typical Context

Forms, lists and tables.

---

## When to Use

- Selecting one or multiple options in a form
- Bulk selection in tables (Type=Mixed for the indeterminate state)
- Enabling preferences or settings

---

## When NOT to Use

- Exclusive selection between options (use Radio Button)
- Immediate on/off state activation (use Toggle/Switch)

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Check | Required | 20 × 20 px wrapper layer holding the selection box |
| Icon | Required | 16 × 16 px selection box. Empty for Type=Default; shows a glyph for Type=Check, Mixed and Plus |
| State | Optional | 32 × 32 px layer around the box, present in the Hovered, Pressed and Focused variants checked |
| bizagi-lines | Optional | 16 × 16 px icon between the box and the label. Visibility controlled by showIcon |
| Label | Optional | Text to the right of the icon. Visibility controlled by showLabel |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 20 px (all variants) |
| Width | 83 px in variants with the default label "Label" and icon (fixed vs. hug: [Pending confirmation]) |
| Padding | None specified in the exported layout |
| Gap | 8 px (gap/sm) |
| Radius | 2 px on the Icon box (not bound to a token in the export) |

---

## Semantics

Selection control with binary or indeterminate states. Type=Mixed represents the indeterminate state. The meaning of Type=Plus:

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | bizagi-lines, 16 × 16 px, between the selection box and the label. Shown when showIcon=true |
| Trailing | None visible |

### Rules

- The icon is visible by default (showIcon=true).
- Inside the selection box, Type=Check shows a check glyph (12 × 12 px) and Type=Mixed shows a remove glyph (12 × 12 px). Type=Plus shows a plus glyph; its layer name is [Pending confirmation].
- Type=Default shows an empty box with no glyph.

---

## Variants (Properties)

Property names and values must match Figma exactly.

### Color

| Value | Description |
|--------|--------|
| Default | Neutral color (icon/primary) |
| Evergreen | Green color (icon/evergreen). Only with Type=Check, Mixed and Plus |
| Indigo | Purple color (icon/indigo). Only with Type=Check, Mixed and Plus |

### Type

| Value | Description |
|--------|--------|
| Default | Empty box, unchecked |
| Check | Box with a check glyph |
| Mixed | Box with a remove glyph. Indeterminate state per the Figma description |
| Plus | Box with a plus glyph. State indicating that an element is being added|

### State

| Value | Description |
|--------|--------|
| Default | Resting appearance |
| Hovered | Adds the State layer around the box |
| Pressed | Adds the State layer around the box |
| Focused | Adds a ring around the box |
| Disabled | Disabled colors. Only exists with Color=Default |

### showIcon

| Value | Description |
|--------|--------|
| true | The bizagi-lines icon is shown |
| false | The bizagi-lines icon is hidden |

### showLabel

| Value | Description |
|--------|--------|
| true | The label is shown |
| false | The label is hidden |

### label

Text property with the visible text to the right. Default: "Label".

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Resting state | Type=Default: box with background/canvas fill and 1 px border icon/primary |
| Hovered | Variant State=Hovered | 32 × 32 px State layer around the box |
| Pressed | Variant State=Pressed | 32 × 32 px State layer around the box |
| Focused | Variant State=Focused | Ring around the box |
| Disabled | Variant State=Disabled (Color=Default only) | Type=Default: box with background/disabled fill and 1 px border/disabled border; label text/disabled |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Box fill, Type=Default, State=Default | Verified |
| background/disabled | Box fill, State=Disabled, Type=Default | Verified |
| background/interactive/hovered | State=Hovered | Listed in node variables; binding not verified |
| background/interactive/pressed | State=Pressed | Listed in node variables; binding not verified |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Label | Verified |
| text/disabled | Label, State=Disabled | Verified |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Box border, Type=Default, State=Default | Verified. Width: width/1 (1) |
| border/disabled | Box border, State=Disabled, Type=Default | Verified |
| border/focus | State=Focused | Listed in node variables; binding not verified. Width token: focus/width (2) |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Box fill, Color=Default, Type=Check | Verified on State=Hovered |
| icon/indigo | Box fill, Color=Indigo | Verified on Type=Mixed, State=Pressed |
| icon/evergreen | Box fill, Color=Evergreen | Listed in node variables; binding not verified |
| icon/disabled | State=Disabled | Listed in node variables; binding not verified |
| icon/interactive/hovered | Not identified | Listed in node variables; usage not identified |
| icon/interactive/pressed | Not identified | Listed in node variables; usage not identified |
| icon/inverse | Not identified | Listed in node variables; usage not identified |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XS | Label text style | Composed of family/body (Open Sans), weight/regular, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| gap/sm | Gap between box, icon and label | 8 px |

---

## Interaction

The component provides visual variants for State=Hovered, Pressed, Focused and Disabled. Triggers, transitions and toggle behavior:

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | State=Focused and State=Disabled (Color=Default only) variants exist |
| Notes | ARIA roles, keyboard support.

---

## Content Guidelines

The default label value is "Label".

---

## Examples

### Example 1

Configuration:

```text
Color=Default, Type=Default, State=Default
```

Description:

Unchecked.

### Example 2

Configuration:

```text
Color=Default, Type=Check, State=Default
```

Description:

Neutral checked.

### Example 3

Configuration:

```text
Color=Evergreen, Type=Check, State=Default
```

Description:

Evergreen checked.

---

## Invalid Combinations

- Type=Default with Color=Evergreen or Color=Indigo is not documented
- State=Disabled is only documented with Color=Default

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
- Variant matrix checked against metadata (44 variants).
- Differences between the Figma description and the variants flagged in Pending Clarification.

---

## Pending Clarification

- Type=Plus exists in 13 variants (Color=Default, Evergreen and Indigo) but is missing from the Figma description. Its meaning and glyph layer name are unknown.
- The Figma description says State=Hovered and State=Pressed are not documented for Color=Default with Type=Default, but both variants exist in Figma. They are documented as existing and not listed as invalid.
- State default is Disabled in both the Figma description and the default variant, while the typical usage examples use State=Default. Confirm this is intended.
- Property name casing: the Figma description lists color, type and state in lowercase, while the variant names use Color, State and Type. This document follows the variant names.
- Token bindings still unverified: the State layer fills for Hovered, Pressed and Focused, icon/evergreen, icon/disabled, icon/interactive/*, icon/inverse, and the Disabled variants with Type=Check, Mixed and Plus.
- The 2 px box radius is not bound to a token in the export.
- Token names are taken verbatim from Figma and were not cross-checked against the token JSON files.
- status, version and owner.
- Width behavior (fixed vs. hug), Semantics of Type=Plus, Interaction, Accessibility and Content Guidelines.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.