---
component: "Badge"
system: "Genome Evolution Design System"
type: "Indicator/label component"
status: "Production"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2046-82"
last_updated: "2026-10-19"
tags:
  - "badge"
  - "status"
  - "label"
---

# Badge — Genome Evolution Design System

Shows a count, status or category in a compact, visually distinctive format to give quick visual feedback.

## Quick Reference

### What it is

Indicator/label component (source: Figma component description).

### Key Properties

- Type [Filled | Line] — default: Line
- Color [Default | Evergreen | Indigo | Inverse | Information | Warning | Error | Success] — default: Default
- Label — text content (default: 0)

### Default Configuration

Type=Line, Color=Default, Label=0

### Typical Usage

- Notification count: Type=Filled, Color=Default, Label=5
- Warning label: Type=Line, Color=Warning, Label=Warning
- Error state: Type=Filled, Color=Error, Label=!

---

## Purpose / Intent

### Problem Solved

Gives quick visual feedback about a count, status or category in a compact format (source: Figma component description).

### Typical Context

Notification counts, status indicators, category tags and semantic markers such as warnings and alerts (source: Figma component description).

---

## When to Use

- To show notification counts or status indicators
- To show category labels or tags
- To indicate status (new, updated, error, success) or mark items with semantic meaning (warnings, alerts)

---

## When NOT to Use

- For long descriptive text
- When detailed information is needed
- As a primary action element
- For loading states (use a dedicated spinner)
- When accessibility requires longer-form text

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Pill-shaped frame (semantic/full radius) with horizontal padding. Fill and border depend on Type and Color. |
| Label | Required | Centered text. Default: 0. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 14 (minimum observed; equals line-height/14, no vertical padding) |
| Width | 14 in variants with the default Label "0". Resizing rule: [Pending confirmation] |
| Padding | space/4 horizontal, space/0 vertical |
| Gap | gap/none |
| Radius | semantic/full |

---

## Semantics

According to the Figma description, Badge communicates a count, a status or a category. The Color values Information, Warning, Error and Success are named after semantic meanings. Meaning of Default, Evergreen, Indigo and Inverse: Used for need.

---

## Iconography

The component contains no icons.

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Not applicable. |
| Trailing | Not applicable. |

---

## Variants (Properties)

### Type

| Value | Description |
|--------|--------|
| Filled | Solid background fill. Text color is text/inverse, except Color=Inverse. |
| Line | Border outline. Fill depends on Color (see Token Mapping). |

### Color

| Value | Description |
|--------|--------|
| Default | Neutral. Line: surface/subtlest fill, border/default border. Filled: surface/raised fill. |
| Evergreen | Evergreen. Line: border/evergreen border, no fill. Filled: surface/evergreen/bold fill. |
| Indigo | Indigo. Line: border/indigo border, no fill. Filled: surface/indigo/bold fill. |
| Inverse | For dark backgrounds. Line: border/inverse border, text/inverse text, no fill. Filled: background/canvas fill, text/secondary text. |
| Information | Information. Line: surface/info/subtle fill, border/info border. Filled: surface/info/bold fill. |
| Warning | Warning. Line: surface/warning/subtle fill, border/warning border. Filled: surface/warning/bold fill. |
| Error | Error. Line: surface/danger/subtle fill, border/danger border. Filled: surface/danger/bold fill. |
| Success | Success. Line: surface/evergreen/subtle fill, border/success border. Filled: surface/success/bold fill. |

### Label

Text content. Default value: 0. 

---

## States

No state property exists in the component set.

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| surface/subtlest | Fill | Type=Line, Color=Default |
| surface/raised | Fill | Type=Filled, Color=Default |
| surface/evergreen/bold | Fill | Type=Filled, Color=Evergreen |
| surface/indigo/bold | Fill | Type=Filled, Color=Indigo |
| background/canvas | Fill | Type=Filled, Color=Inverse |
| surface/info/subtle | Fill | Type=Line, Color=Information |
| surface/info/bold | Fill | Type=Filled, Color=Information |
| surface/warning/subtle | Fill | Type=Line, Color=Warning |
| surface/warning/bold | Fill | Type=Filled, Color=Warning |
| surface/danger/subtle | Fill | Type=Line, Color=Error |
| surface/danger/bold | Fill | Type=Filled, Color=Error |
| surface/evergreen/subtle | Fill | Type=Line, Color=Success (not a success token) |
| surface/success/bold | Fill | Type=Filled, Color=Success |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/secondary | Label | Type=Line, Color=Default; Type=Filled, Color=Inverse |
| text/inverse | Label | All Type=Filled except Color=Inverse; Type=Line, Color=Inverse |
| text/evergreen | Label | Type=Line, Color=Evergreen |
| text/indigo | Label | Type=Line, Color=Indigo |
| text/info | Label | Type=Line, Color=Information |
| text/warning | Label | Type=Line, Color=Warning |
| text/danger | Label | Type=Line, Color=Error |
| text/success | Label | Type=Line, Color=Success |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/default | 1px border | Type=Line, Color=Default |
| border/evergreen | 1px border | Type=Line, Color=Evergreen |
| border/indigo | 1px border | Type=Line, Color=Indigo |
| border/inverse | 1px border | Type=Line, Color=Inverse |
| border/info | 1px border | Type=Line, Color=Information |
| border/warning | 1px border | Type=Line, Color=Warning |
| border/danger | 1px border | Type=Line, Color=Error |
| border/success | 1px border | Type=Line, Color=Success |

Filled variants have no border. The 1px border width is not tokenized.

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XXS Strong | Label | size/10, line-height/14, letter-spacing/normal, weight/semibold, family/body |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/4 | Horizontal padding | |
| space/0 | Vertical padding | |
| gap/none | Gap | |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| semantic/full | Container radius (999) | Confirmed in Figma variables; not cross-checked against the token files |

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | The Figma description advises against use when accessibility requires longer-form text. |
| Visible State Support | [Pending confirmation] |
| Notes | No roles, announcements or contrast values are documented. |

---

## Content Guidelines

- Label: text content (default: 0). The Figma description gives examples of a count (5), a word (Warning) and a symbol (!).

---

## Examples

### Example 1

Configuration:

```text
Type=Filled, Color=Default, Label=5
```

Description:

Notification count (source: Figma component description).

### Example 2

Configuration:

```text
Type=Line, Color=Warning, Label=Warning
```

Description:

Warning label (source: Figma component description).

### Example 3

Configuration:

```text
Type=Filled, Color=Error, Label=!
```

Description:

Error state (source: Figma component description).

---

All 16 Type × Color combinations exist in the component set.

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
- Variant count verified (16).
- semantic/full verified against token files.

---

## Pending Clarification

- Invalid combinations (not documented in Figma).
- Type=Line, Color=Success uses surface/evergreen/subtle as fill. Is this intentional?
- Type=Line, Color=Evergreen / Indigo have no fill, unlike the other Line variants.
- Width: does the badge hug its Label? Maximum length and overflow behavior.
- Meaning of Color=Default, Evergreen, Indigo and Inverse.
- Whether the Badge embedded in Accordion should use this component; it uses different values (#9e9e9e, #272727).
- Accessibility: announcement of counts and status, contrast requirements.
- Status, version and owner.

---

## Notes / Changelog

Generated from available source material on 2026-10-19.