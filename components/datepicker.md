---
component: "Datepicker"
system: "Genome Evolution Design System"
type: "Selection Panel / Complex Control"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-2296"
last_updated: "2026-10-20"
tags:
  - "Selection Panel"
  - "Complex Control"
  - "Datepicker"
---

# Datepicker — Genome Evolution Design System

Date selection panel with three navigable views: Numbers (day grid), Month (month grid) and Year (year grid).

## Quick Reference

### What it is

Date selection panel with three navigable views. It supports two sizes, two accent colors, optional footer buttons and an optional conventions legend.

### Key Properties

- Type [Numbers | Month | Year] — default: Numbers
- Size [SM | MD] — default: SM
- Color [Evergreen | Indigo] — default: Evergreen
- showButtons [true | false] — default: true
- showConventions [true | false] — default: true

### Default Configuration

Type=Numbers, Size=SM, Color=Evergreen, showButtons=true, showConventions=true

### Invalid Combinations

- showConventions=true with Type=Month or Type=Year
- Mixing Evergreen and Indigo tokens in the same instance

### Typical Usage

- Day picker: Type=Numbers, Size=SM, Color=Evergreen, showButtons=true
- Indigo day picker: Type=Numbers, Size=SM, Color=Indigo, showButtons=true
- Month picker: Type=Month, Size=SM, Color=Evergreen, showButtons=true
- Year picker without footer: Type=Year, Size=MD, Color=Indigo, showButtons=false
- Day picker with legend: Type=Numbers, Size=SM, Color=Evergreen, showConventions=true

---

## Purpose / Intent

### Problem Solved

Lets the user select a specific date and navigate between day, month and year views.

### Typical Context

Forms, filters and settings.

---

## When to Use

- The user needs to select a specific date in forms, filters or settings
- Navigation between views (day → month → year) is required

---

## When NOT to Use

- For complex date range selection without component adaptation
- When a free-text date input is sufficient

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Header | Required | Date label (e.g. "MAR 2021" in Type=Numbers, a year in Type=Month, a year range in Type=Year) with an arrow-dropdown icon, plus an Arrows group with chevron-left and chevron-right icons |
| Content | Required | Holds the grid for the selected Type |
| Days | Required (Type=Numbers) | Weekday row: S M T W T F S |
| Week 1 to Week 5 | Required (Type=Numbers) | Five rows of .Number cells, 7 per row |
| .Month cells | Required (Type=Month, Type=Year) | Month names (JAN to DEC) or years (2010 to 2033). Type=Year reuses the .Month sub-component |
| Buttons | Optional | Footer with a Cancel button and an Apply button, separated from the grid by a top border. Controlled by showButtons |
| Conventions | Optional (Type=Numbers) | Up to 3 rows, each with an 8 px colored dot and the label "Convention". Controlled by showConventions |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Numbers: SM 282 px (Evergreen) / 284 px (Indigo), MD 364 px. Month: SM 160 px, MD 218 px. Year: SM 244 px, MD 326 px |
| Width | SM 184 px, MD 256 px |
| Padding | space/8 (8 px) |
| Gap | gap/sm (8 px) |
| Radius | radius/4 (4 px) |

Cell sizes (Figma description):

- SM: .Number 24 × 24 px, .Month and Year cells 42 × 24 px
- MD: .Number 32 × 32 px, .Month and Year cells 56 × 32 px

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | None |
| Trailing | arrow-dropdown icon (12 px) next to the date label in the Header |

### Rules

- The Header always shows chevron-left and chevron-right icons (12 px) in the Arrows group.
- The same Header icons appear in all three Type values.

---

## Variants (Properties)

Property names and values must match Figma exactly.

### Type

| Value | Description |
|--------|--------|
| Numbers | Day grid: weekday row, 5 week rows of .Number cells, optional conventions legend |
| Month | Month grid (JAN to DEC) of .Month cells. showConventions is not valid |
| Year | Year grid (2010 to 2033) of .Month cells. showConventions is not valid |

### Size

| Value | Description |
|--------|--------|
| SM | Panel width 184 px. .Number 24 × 24 px, .Month 42 × 24 px |
| MD | Panel width 256 px. .Number 32 × 32 px, .Month 56 × 32 px |

### Color

| Value | Description |
|--------|--------|
| Evergreen | Green accent on the selected cell and the Apply button |
| Indigo | Purple accent on the selected cell and the Apply button |

### showButtons

| Value | Description |
|--------|--------|
| true | The footer with Cancel and Apply buttons is shown |
| false | The footer is hidden |

### showConventions

| Value | Description |
|--------|--------|
| true | The conventions legend is shown. Valid only with Type=Numbers |
| false | The conventions legend is hidden |

---

## States

The component has no State property. The Figma variants show these cell appearances.

| State | Description | Visual Changes |
|--------|--------|--------|
| Selected cell | Highlighted cell (5 in Numbers, APR in Month, 2021 in Year) | Filled background, text/inverse label. Evergreen Numbers: surface/evergreen/bold fill with border/evergreen border |
| Outlined cell | Cell "2" in Numbers (Evergreen, SM) | 1 px border/focus border. Meaning [Pending confirmation] |
| Out-of-month day | Days from adjacent months (29, 30, 31, 1, 2) | Label text/secondary |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Panel and Cancel button | Verified |
| surface/evergreen/bold | Selected .Number cell and Apply button, Color=Evergreen | Verified on Type=Numbers, Size=SM, Color=Evergreen |
| surface/indigo/bold | Color=Indigo accent | Listed in node variables; binding not verified |
| border/indigo | Selected .Month cell, Color=Indigo | Verified on Type=Month, Size=MD, Color=Indigo (used as the fill) |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Header label, current-month numbers, month cells, Cancel label, conventions labels | Verified |
| text/secondary | Weekday row and out-of-month days | Verified |
| text/inverse | Selected cell label, Apply label | Verified |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/default | Top border of the footer | Verified. Width: width/1 (1) |
| border/strong | Cancel button border | Verified |
| border/focus | Outlined .Number cell | Verified |
| border/evergreen | Selected .Number cell, Color=Evergreen | Verified |
| border/indigo | Selected .Month cell, Color=Indigo | Verified |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Label/XS | Weekday row | Verified values: family/body, weight/semibold, size/11, line-height/16, letter-spacing/wide |
| Text/Body/XXS | .Number cells and conventions labels | Verified values: family/body, weight/regular, size/10, line-height/14 |
| Text/Body/XS Strong | Header label | Listed in the design styles; also matches Text/Button/SM. Exact binding not verified. Values: size/12, weight/semibold, line-height/16 |
| Text/Button/SM | Cancel and Apply labels | Listed in the design styles; exact binding not verified |
| Text/Body/SM Strong | .Month cells, Size=MD | Values verified: size/14, weight/semibold, line-height/20. Style name listed in the design styles; binding not verified |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/8 | Panel padding, top padding of Buttons and Conventions | 8 px |
| space/0 | Remaining padding of Buttons and Conventions | 0 px |
| space/12 | Horizontal padding of footer buttons | 12 px |
| space/4 | Vertical padding of footer buttons | 4 px |
| gap/sm | Gap between panel sections, footer buttons and convention dot and label | 8 px |
| gap/xxs | Gap between the date label and arrow-dropdown | 4 px |
| gap/lg | Gap between the chevrons | 16 px |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Panel and cells | 4 px |
| semantic/sm | Footer buttons | 4 px |

---

## Interaction

The Figma description calls the three views navigable and says navigation between views (day → month → year) is required. 

---

## Accessibility

| Topic | Information |
|--------|--------|
| Notes | ARIA roles, keyboard support|

---

## Content Guidelines

Visible text in the variants: "MAR 2021", weekday initials S M T W T F S, "Cancel", "Apply", "Convention", month names JAN to DEC, and years 2010 to 2033 under the range "2010-2033". These are sample content.

---

## Examples

### Example 1

Configuration:

```text
Type=Numbers, Size=SM, Color=Evergreen, showButtons=true
```

Description:

Day picker with footer buttons.

### Example 2

Configuration:

```text
Type=Month, Size=SM, Color=Evergreen, showButtons=true
```

Description:

Month picker with footer buttons.

### Example 3

Configuration:

```text
Type=Year, Size=MD, Color=Indigo, showButtons=false
```

Description:

Year picker without footer buttons.

---

## Invalid Combinations

- showConventions=true with Type=Month or Type=Year
- Mixing Evergreen and Indigo tokens in the same instance

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
- Variant matrix checked against metadata (12 variants: Type × Size × Color).
- Differences between the Figma description and the design flagged in Pending Clarification.

---

## Pending Clarification

- Grid columns: the Figma description says 3 columns for Type=Month and Type=Year, but the screenshot and cell widths (42 px × 4 in a 168 px content area) show 4 columns (3 rows of months, 6 rows of years).
- Panel height for Type=Numbers, Size=SM is 282 px in Evergreen and 284 px in Indigo.
- Meaning of the outlined cell "2" (border/focus, 1 px) in Type=Numbers is not documented.
- Meaning and colors of the 3 convention dots are not documented. The labels read "Convention" (sample content).
- Footer buttons are Button instances. The description names them Tertiary/Default/SM (Cancel) and Primary/Evergreen/SM (Apply), but the Cancel button shows a border/strong outline. Instance properties, MD sizes and the Indigo Apply button were not verified.
- Selected-cell fill is inconsistent across the variants checked: surface/evergreen/bold (Numbers, Evergreen) vs border/indigo (Month, Indigo). The other variants were not verified.
- Icon tokens (icon/primary, icon/secondary, icon/disabled) appear in node variables but their usage is not identified; the icons are exported as SVG images. space/16, size/16 and Body/small/strong are also listed with no identified usage.
- Token names are taken verbatim from Figma and were not cross-checked against the token JSON files.
- status, version and owner.
- Semantics, Interaction, Accessibility, Content Guidelines and Shadow.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.
```