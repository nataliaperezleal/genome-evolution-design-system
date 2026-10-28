---
component: "Datepicker"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2115-2296"
last_updated: "2026-10-22"
tags:
  - "datepicker"
  - "calendar"
  - "input"
---

# Datepicker

System: Genome Evolution Design System

## Component Summary

Datepicker is a calendar panel with three views (days, months and years), two sizes and two brand colors, built from `.Number`, `.Month` and Button instances, with optional Cancel/Apply buttons and an optional conventions legend.

## Quick Reference

### What It Is

The Datepicker is a date selection component that allows users to choose a date through a visual calendar interface. It simplifies navigation between days, months, and years while reducing input errors and ensuring consistent date formats.

The component provides different selection views (Numbers, Month, and Year) and can include explicit confirmation actions as well as additional conventions or references associated with the calendar.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Numbers, Month, Year | Numbers |
| Size | SM, MD | SM |
| Color | Evergreen, Indigo | Evergreen |
| showButtons (boolean) | true, false | true |
| showConventions (boolean) | true, false | true |

Defaults are taken from the component property definitions in Figma. Every `Type`, `Size` and `Color` combination exists (12 variants). `showConventions` affects only `Type=Numbers`, the only type with a conventions legend.

### Default Configuration

`Type=Numbers`, `Size=SM`, `Color=Evergreen`, buttons and conventions shown: a 184 px wide panel with the header "MAR 2021", the weekday row, five week rows of 24 px day cells, Cancel and Apply buttons and a three-item conventions legend.

### Typical Usage

Verified observation: All variants share the same structure: header, content grid, optional buttons and (in `Numbers`) optional conventions. Selection in every sample uses the single-selection `Selected` state of the child cells; no variant shows a range.

Evidence-based interpretation:

- `Type=Numbers` to choose a day within a month.
- `Type=Month` to choose a month within a year.
- `Type=Year` to choose a year within a range of years.
- `Size=SM` for compact layouts and `Size=MD` for standard layouts.
- `showButtons=true` when the selection must be confirmed with Apply or discarded with Cancel.
- `showConventions=true` to explain the markers shown on days.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent calendar for selecting a day, month or year, with navigation between periods and optional confirmation.

### Expected Outcome

Evidence-based interpretation: Users can move between periods, see the current selection and focus, and confirm or cancel their choice.

### Typical Context

Evidence-based interpretation: The fixed panel width (184 px or 256 px) and the confirmation buttons indicate a panel shown from a date field or similar trigger. The trigger is not documented in Figma.

## When to Use

- To indicate that an element is interactive or selectable.
- To support drag-and-drop interactions.
- In design, editing, or content manipulation tools.
- To indicate areas that support resizing.
- To communicate temporary system states such as loading or waiting.
- To signal restricted actions through unavailable or prohibited cursors.
- In experiences that require precision, multi-selection, or object positioning.
- 
## When NOT to Use

- When the date is fixed and cannot be changed.
- For complex period selections requiring advanced ranges or multiple date selections.
- When only free-text date-related input is needed.
- In situations where only a few predefined options exist and a simpler selector is sufficient.
- When the required information is not tied to a specific date.

## Composition and Hierarchy Rules

The following rules are established by the component's structure and child components.

### Child components

| Child | Used in | Configuration observed |
|-------|---------|------------------------|
| `.Number` | Day cells in `Type=Numbers` | `Size=Small` in SM, `Size=Regular` in MD; states `Default`, `Opaque`, `Focused`, `Selected` |
| `.Month` | Month cells in `Type=Month` and year cells in `Type=Year` | `Size=Small` in SM (42 × 24 px), `Size=Regular` in MD (56 × 32 px); states `Default`, `Selected` |
| Button | Cancel and Apply actions | Cancel: `Type=Tertiary`. Apply: `Type=Primary` in the same `Color` as the Datepicker. Button `Size=SM` in SM, `Size=MD` in MD |

The child cells take the Datepicker `Color` for their `Selected` (and, in `Numbers`, `Focused`) states.

### Views and hierarchy

| Type | Header label (sample) | Grid | Cell |
|------|-----------------------|------|------|
| Numbers | Month and year, uppercase ("MAR 2021") | Weekday row + 5 week rows × 7 days | `.Number` |
| Month | Year ("2024") | 3 rows × 4 months (12) | `.Month` |
| Year | Year range ("2010-2033") | 6 rows × 4 years (24) | `.Month` |

Evidence-based interpretation: The three types form a hierarchy of day → month → year. The header label with a dropdown arrow suggests switching to the next higher view (for example, from days to months); this behavior is not defined in Figma.

### Ordering

- Weekday headers start on Sunday: S, M, T, W, T, F, S.
- Days are ordered left to right, top to bottom. Days from the previous and next months fill the first and last rows and use the `Opaque` state (for example, 29, 30 and 31 before the 1st).
- Months are ordered January to December, left to right, top to bottom, as uppercase three-letter abbreviations (JAN … DEC).
- Years are ordered ascending, left to right, top to bottom; the header shows the first and last year of the page.

### Navigation

- The header contains `chevron-left` and `chevron-right` icons on the right. Evidence-based interpretation: they move to the previous and next period (month, year or year range, depending on `Type`).
- The header label is followed by an `arrow-dropdown` icon. Evidence-based interpretation: it opens a higher-level view or period selection.
- Prototype interactions were not available through the inspection tools, so navigation behavior is not verified in Figma.

### Overflow and grid size

- The inspected Figma `Numbers` variants show five week rows. React adds a sixth row when a month needs it so every date remains available.
- `Month` always shows 12 cells and `Year` 24 cells.
- Cells have fixed sizes; the panel has a fixed width.

### Confirmation

- When `showButtons=true`, a button row appears below the grid, separated by a 1 px `border/default` line, with Cancel and Apply aligned to the right.
- When `showConventions=true` (Numbers only), the legend appears below the buttons.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Panel | Required | Vertical auto layout container with background, padding and radius. |
| Header | Required | Period label with `arrow-dropdown` (left) and previous/next chevrons (right). |
| Weekday row (`Days`) | Required in `Numbers` | Seven weekday initials. |
| Content grid | Required | Rows of `.Number` or `.Month` cells. |
| Buttons | Optional (`showButtons`) | Cancel (Tertiary) and Apply (Primary) Button instances. |
| Conventions | Optional (`showConventions`, Numbers only) | Three rows, each with an 8 px dot and a "Convention" label. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Panel width | 184 px (SM), 256 px (MD) | Variant dimensions |
| Panel height (all optional parts shown) | Numbers 282 px (SM) / 362 px (MD); Month 160 / 216 px; Year 244 / 324 px | Variant dimensions |
| Panel padding | `space/8` (SM), `space/16` (MD) | Variable bindings |
| Gap between sections | `gap/sm` (8) | Variable binding |
| Panel radius | `radius/4` (4) | Variable binding |
| Header | Space-between row; label gap `gap/xxs` (4); chevron gap `gap/lg` (16); 12 px icons | Variable bindings, layer dimensions |
| Day grid | 7 columns of 24 px (SM) or 32 px (MD) cells, no gap | Layer dimensions |
| Month and year grids | 4 columns; 4 px row gap in MD | Layer positions |
| Button row | 1 px `border/default` top border; top padding `space/8` (SM) / `space/12` (MD); gap `gap/sm`; right-aligned | Variable bindings |
| Conventions | Top padding `space/8`; rows with 8 px dot, `gap/sm`, label in `Text/Body/XXS` | Variable bindings |

## Semantics

Evidence-based interpretation:

- The header label names the visible period; the chevrons move between periods.
- In `Numbers`, `Opaque` days belong to adjacent months, the `Focused` cell has focus, and the `Selected` cell is the chosen date.
- Apply confirms the selection and Cancel discards it.
- The conventions legend explains the meaning of the colored markers that `.Number` can show (`State=Conventions`); the sample labels are placeholders ("Convention").

Not verified in Figma: HTML elements, ARIA roles (for example, dialog or grid), keyboard interaction and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Period selector | `arrow-dropdown`, 12 px, after the header label | Layer name |
| Previous period | `chevron-left`, 12 px | Layer name |
| Next period | `chevron-right`, 12 px | Layer name |
| Convention markers | 8 px dots in three tones | Layers, screenshot |

## Variants (Properties)

The inventory below is complete: all 12 variants were listed, and representative variants of every Type, Size and Color were inspected in detail.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Numbers | Day grid with weekday row; `.Number` cells; supports conventions. | Default |
| Month | 12 `.Month` cells in 3 × 4. | No conventions |
| Year | 24 `.Month` cells in 6 × 4. | No conventions |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| SM | 184 px wide; `space/8` padding; small child cells and SM buttons. | Default |
| MD | 256 px wide; `space/16` padding; regular child cells and MD buttons. | — |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Evergreen | Selected cells and Apply button in Evergreen. | Default |
| Indigo | Selected cells and Apply button in Indigo. | — |

The focused day cell uses `border/focus` in both colors.

### showButtons

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the Cancel/Apply row. | Default |
| false | Hides the button row. | All types |

### showConventions

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the conventions legend. | Default; Numbers only |
| false | Hides the legend. | Numbers only |

## States

The Datepicker component set has no state property. Cell states (Default, Opaque, Focused, Selected) come from the child `.Number` and `.Month` components, and button states from Button.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Panel | Variable binding |
| Border | `border/default`, `width/1` | Button row divider | Variable binding |
| Text | `text/primary` | Header label, current-month numbers, convention labels | Variable binding |
| Text | `text/secondary` | Weekday initials, adjacent-month days | Variable binding |
| Icon | `icon/primary`, `icon/secondary` | Header icons, markers | Variable binding |
| Spacing | `space/8`, `space/16`, `space/12`, `space/0`, `gap/sm`, `gap/xxs`, `gap/lg` | Padding and gaps | Variable binding |
| Radius | `radius/4` | Panel | Variable binding |
| Typography | `Text/Body/XS Strong` (SM), `Text/Body/SM Strong` (MD) | Header label | Text styles |
| Typography | `Text/Label/XS` (SM), `Body/small/strong` (MD) | Weekday initials | Text styles |
| Typography | `Text/Body/XXS` | Convention labels | Text style |

Child cell and button tokens are documented with `.Number`, `.Month` and Button.

Current behavior:

- In `Size=MD`, the weekday initials use the `Body/small/strong` text style (`font/...` variables) instead of a `Text/...` style used elsewhere in the component.
- The Apply button in the Evergreen MD variants is 30 px high while Cancel is 32 px, because Apply uses the Button default variant (see Button documentation).
- The panel has no shadow.

## Interaction

The component has no state variants. Prototype interactions were not available through the inspection tools.

Not verified in Figma: navigation with the chevrons, switching views through the header label, selection, what Apply and Cancel do, and keyboard interaction.

## Accessibility

- Required: ensure sufficient contrast between dates, selected states, navigation controls, and backgrounds.
- Required: support full keyboard navigation, including movement between days, months, and years.
- Required: provide visible focus indicators on all interactive elements.
- Recommended: announce selected dates and view changes to assistive technologies.

## Content Guidelines

Verified observations:

- Header labels: uppercase month abbreviation and year ("MAR 2021"), year ("2024") or year range with a hyphen ("2010-2033").
- Weekday initials: one uppercase letter per day, starting with Sunday.
- Month labels: uppercase three-letter abbreviations (JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC).
- Button labels: "Cancel" and "Apply".
- Convention labels: "Convention" (placeholder).

## Examples

### Day selection with confirmation

Configuration: `Type=Numbers`, `Size=MD`, `Color=Evergreen`, `showButtons=true`, `showConventions=true`

Description: March 2021 with the 5th selected, the 2nd focused and a conventions legend.

Evidence / Classification: Existing variant in Figma (sample content).

### Month selection

Configuration: `Type=Month`, `Size=SM`, `Color=Indigo`

Description: Twelve months of 2024 with APR selected.

Evidence / Classification: Existing variant in Figma (sample content).

### Year selection without buttons

Configuration: `Type=Year`, `Size=MD`, `Color=Evergreen`, `showButtons=false`

Description: Years 2010–2033 without the button row.

Evidence / Classification: Configuration supported by the `showButtons` property.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `showConventions` with `Type=Month` or `Type=Year` | The property has no visible effect; these types contain no conventions legend | Component structure |

## Implementation

The React panel implementation uses the documented `numbers`, `month` and `year` types and defaults to `panel` presentation unless a label, helper text or error is supplied. `presentation="field"` is a React convenience that renders a native date input; it is not a separate visual variant in Figma. Use `presentation="panel"` to render the documented calendar panel explicitly.

The panel's convention markers use sample dates only; Figma defines the marker appearance and placeholder legend, but does not assign dates to conventions.

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Visible label. |
| `helperText` | `string` | `undefined` | Supportive message. |
| `error` | `string` | `undefined` | Error message (overrides helperText). |
| `type` | `"numbers" \| "month" \| "year"` | `"numbers"` | Configures the `type` component property. |
| `size` | `"sm" \| "md"` | `"sm"` | Configures the `size` component property. |
| `tone` | `"evergreen" \| "indigo"` | `"evergreen"` | Configures the `tone` component property. |
| `showButtons` | `boolean` | `true` | Configures the `showButtons` component property. |
| `showConventions` | `boolean` | `true` | Configures the `showConventions` component property. |
| `presentation` | `"field" \| "panel"` | `undefined` | Configures the `presentation` component property. |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | `undefined` | Configures the `onChange` component property. |
| `onDateChange` | `(date: string) => void` | `undefined` | Configures the `onDateChange` component property. |

It also accepts React's native attributes for the underlying HTML element (InputHTMLAttributes).
### Examples

#### Date field

```tsx
import { Datepicker } from "@genome-evolution/react";

<Datepicker label="Start date" defaultValue="2026-05-04" />;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
