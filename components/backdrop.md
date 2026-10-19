---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Visual overlay/underlay element"
status: "Production"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2041-81"
last_updated: "2026-10-19"
tags:
  - "backdrop"
  - "overlay"
  - "layering"
---

# Backdrop — Genome Evolution Design System

Semi-transparent layer that darkens or lightens the background content, used together with modals, dropdowns and other overlays to establish visual hierarchy and focus.

## Quick Reference

### What it is

Visual overlay/underlay element (source: Figma component description).

### Key Properties

- Color [White | Black] — default: Black

### Default Configuration

Color=Black

### Typical Usage

- Modal dialog: Color=Black
- Overlay for light theme: Color=White
- Dropdown background: Color=Black

---

## Purpose / Intent

### Problem Solved

Establishes visual hierarchy and focus by separating layers (source: Figma component description).

### Expected Outcome

Improved contrast of floating content (source: Figma component description).

### Typical Context

Used alongside modals, dropdowns, popovers and tooltips (source: Figma component description).

---

## When to Use

- To darken the background when showing modal dialogs
- To create focus on overlaid content (dropdowns, popovers, tooltips)
- To establish visual separation between layers and improve the contrast of floating content

---

## When NOT to Use

- As a permanent page background
- Without an accompanying overlay component
- For simple hover states without a modal
- When full interaction with the background is required
- When accessibility requires the background content to remain visible

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Layer | Required | Single semi-transparent rectangle with a background blur. No child layers or text. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 131 (in both variants; may be a sample size) |
| Width | 182 (in both variants; may be a sample size) |
| Padding | None |
| Gap | None |
| Radius | (radius/0 is present in the variables) |

---

## Iconography

The component contains no icons.

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Not applicable. |
| Trailing | Not applicable. |

## Variants (Properties)

### Color

| Value | Description |
|--------|--------|
| White | Light semi-transparent layer (overlay/white). Typical use: overlay for light theme. |
| Black | Dark semi-transparent layer (overlay/black). Typical use: modal dialog, dropdown background. |

---

## States

No state property exists in the component set.

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| overlay/black | Layer fill | Color=Black |
| overlay/white | Layer fill | Color=White |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/0 | Present in the variables | Layer not verified |

Not tokenized: background blur of 8px.

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | The Figma description advises against use when accessibility requires the background content to remain visible. |
| Visible State Support | [Pending confirmation] |
| Notes | No roles, focus handling or contrast values are documented. |

---

## Examples

### Example 1

Configuration:

```text
Color=Black
```

Description:

Modal dialog (source: Figma component description).

### Example 2

Configuration:

```text
Color=White
```

Description:

Overlay for light theme (source: Figma component description).

### Example 3

Configuration:

```text
Color=Black
```

Description:

Dropdown background (source: Figma component description).

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
- Variant count verified (2).

---

## Pending Clarification

- Invalid combinations (not documented in Figma).
- Sizing: are 182×131 the real dimensions or a sample size? Resizing behavior.
- Blur: 8px is not tokenized. Is there a token for it?
- Radius: layer where radius/0 is used.
- Interaction: whether the Backdrop closes the overlay on click, and its layering order relative to the overlay component.
- Accessibility: focus handling and contrast requirements.
- Status, version and owner.

---

## Notes / Changelog

Generated from available source material on 2026-10-19.