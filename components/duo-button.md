---
component: "Duo button"
system: "Genome Evolution Design System"
type: "Component"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2135-676"
last_updated: "2026-10-20"
tags:
  - "Duo button"
  - "Button pair"
  - "Complementary actions"
---

# Duo button — Genome Evolution Design System

Pair of adjacent buttons: one secondary (outlined) action and one primary (filled) action presented as a single visual unit.

## Quick Reference

### What it is

Grouping of two adjacent buttons that represents a pair of complementary actions: a secondary (outlined) action on the left and a primary (filled) action on the right, presented as a cohesive visual unit.

### Key Properties

- Size [Regular | Small] — default: Regular
- Color [Evergreen | Indigo] — default: Evergreen

### Default Configuration

Size=Regular, Color=Evergreen

### Invalid Combinations

- Mixing Color=Evergreen in one button with Color=Indigo in the other within the same Duo button
- Using Duo button with a single visible action (both buttons are always Required)
- Using Duo button when the actions are not complementary

### Typical Usage

- Modal footer (Cancel + Apply): Size=Regular, Color=Evergreen
- AI drawer footer (Descartar + Guardar): Size=Regular, Color=Indigo
- Compact action in card: Size=Small, Color=Evergreen
- Confirmation in AI panel: Size=Small, Color=Indigo

---

## Purpose / Intent

### Problem Solved

Presents two directly related actions as one unit, keeping the dual-action pattern visually consistent across the interface.

### Typical Context

Footers of modals and drawers, cards and panels.

---

## When to Use

- Two directly related actions must be presented as a unit (e.g. Cancel + Apply, Cancelar + Guardar, Volver + Continuar)
- The dual-action pattern is recurrent and must stay visually consistent across the interface

---

## When NOT to Use

- The two actions are not complementary or not directly related to each other
- More than two actions are needed (use a group of individual buttons)
- Only one action is available

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Horizontal flow with gap/sm between the two buttons, items centered |
| Button (left) | Required | Secondary (outlined): background/canvas with a brand-color border and brand-color label |
| Button (right) | Required | Primary (filled): solid brand-color fill with text/inverse label |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Regular: 32 px per the Figma description (the Evergreen variant measures 34 px). Small: 24 px |
| Width | Regular: 168 px. Small: 138 px (measured with the label "Button"; fixed vs. hug: [Pending confirmation]) |
| Padding | Regular: space/16 (16 px) horizontal, space/8 (8 px) vertical. Small: space/12 (12 px) horizontal, space/4 (4 px) vertical |
| Gap | gap/sm (8 px) between the two buttons |
| Radius | semantic/sm (4 px) on both buttons |

---

## Semantics

Pair of complementary actions: the left button is the secondary (outlined) action and the right button is the primary (filled) action, presented as one visual unit.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | None visible |
| Trailing | None visible |

---

## Variants (Properties)

Property names and values must match Figma exactly.

### Size

| Value | Description |
|--------|--------|
| Regular | Text/Button/MD (14/16). Padding space/16 horizontal, space/8 vertical. Height 32 px per the Figma description |
| Small | Text/Button/SM (12/16). Padding space/12 horizontal, space/4 vertical. Height 24 px |

### Color

| Value | Description |
|--------|--------|
| Evergreen | Green brand color: border/evergreen and text/evergreen on the secondary button, surface/evergreen/bold on the primary button |
| Indigo | Purple brand color: border/indigo and text/indigo on the secondary button, surface/indigo/bold on the primary button |

---

## States

The component has no State property.

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Secondary button fill | Verified |
| surface/evergreen/bold | Primary button fill, Color=Evergreen | Verified on Size=Regular |
| surface/indigo/bold | Primary button fill, Color=Indigo | Verified on Size=Small |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/evergreen | Secondary button label, Color=Evergreen | Verified on Size=Regular |
| text/indigo | Secondary button label, Color=Indigo | Verified on Size=Small |
| text/inverse | Primary button label | Verified |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/evergreen | Secondary button border, Color=Evergreen | Verified on Size=Regular. Width: width/1 (1) |
| border/indigo | Secondary button border, Color=Indigo | Verified on Size=Small. Width: width/1 (1) |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Button/MD | Size=Regular labels | Verified values: family/body, weight/semibold, size/14, line-height/16, letter-spacing/normal |
| Text/Button/SM | Size=Small labels | Verified values: family/body, weight/semibold, size/12, line-height/16, letter-spacing/normal |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Horizontal padding, Size=Regular | 16 px |
| space/8 | Vertical padding, Size=Regular | 8 px |
| space/12 | Horizontal padding, Size=Small | 12 px |
| space/4 | Vertical padding, Size=Small | 4 px |
| gap/sm | Gap between the two buttons and inside each button | 8 px |
| size/16 | Horizontal padding of the secondary button, Size=Regular, Color=Evergreen | Listed in the exported code in place of space/16 |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| semantic/sm | Both buttons | 4 px |

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | [Pending confirmation] |
| Notes | ARIA roles, keyboard support, contrast and screen reader behavior: [Pending confirmation] |

---

## Content Guidelines

Both buttons show the placeholder label "Button" in the variants. Label pairs mentioned in the Figma description: Cancel + Apply, Cancelar + Guardar, Volver + Continuar, Descartar + Guardar.

---

## Examples

### Example 1

Configuration:

```text
Size=Regular, Color=Evergreen
```

Description:

Modal footer (Cancel + Apply).

### Example 2

Configuration:

```text
Size=Regular, Color=Indigo
```

Description:

AI drawer footer (Descartar + Guardar).

### Example 3

Configuration:

```text
Size=Small, Color=Evergreen
```

Description:

Compact action in a card.

---

## Invalid Combinations

- Mixing Color=Evergreen in one button with Color=Indigo in the other within the same Duo button
- Using Duo button with a single visible action (both buttons are always Required)
- Using Duo button when the actions are not complementary

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
- Variant matrix checked against metadata (4 variants: Size × Color).
- Differences between the Figma description and the design flagged in Pending Clarification.

---

## Pending Clarification

- Height: the Figma description says Regular is 32 px, but Size=Regular, Color=Evergreen measures 34 px (Color=Indigo measures 32 px). In the exported code its secondary button pads with size/16 (fallback 17 px) and space/8 (fallback 9 px) instead of the documented space/16 and space/8.
- The secondary button in Size=Small, Color=Indigo uses fallback paddings of 13 px and 5 px for space/12 and space/4.
- The root gap of Size=Small, Color=Indigo is hard-coded at 8 px instead of using gap/sm. The Figma description names the gap token gap/s, while the variable in Figma is gap/sm.
- Only Size=Regular, Color=Evergreen and Size=Small, Color=Indigo were inspected in the exported code. The other two variants rely on metadata and the Figma description.
- The component type is only stated as "Component" in the Figma description.
- The two buttons are nested Button instances. Their variants, whether their labels can be edited from the Duo button, and their interactive states are not documented.
- Token names are taken verbatim from Figma and were not cross-checked against the token JSON files.
- status, version and owner.
- Expected Outcome, Interaction, Accessibility, Content Guidelines, Iconography rules and Shadow.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.