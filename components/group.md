---
component: "Group"
system: "Genome Evolution"
type: "Component"
status: "Done"
version: "1.0"
owner: "UX Design"
figma_node: "2203:2517"
last_updated: "2026-10-20"
tags:
  - "collapsible-panel"
  - "footer-actions"
  - "paginator"
---

# Group — Genome Evolution

Collapsible panel that toggles between a closed state (header with title and chevron) and an open state (header, content area and footer with paginator and action icons), with two accent colors in the open state.

## Quick Reference

### What it is

Collapsible panel used to group content into sections.

### Key Properties

- State [Collapsed | Expanded] — default: Collapsed
- Color [Default | Evergreen | Indigo] — default: Default
- showFooter [true | false] — default: true
- showPaginator [true | false] — default: true
- showLeftIcons [true | false] — default: false
- showRightIcons [true | false] — default: false
- showLeftIcon1–4 [true | false] — default: true
- showRighIcon1 [true | false] — default: true
- showIconRight2 [true | false] — default: true
- showRightIcon3 [true | false] — default: true
- showRightIcon4 [true | false] — default: true
- title — header text (default: "Title")
- children — free content slot inside the content area (Content2)

### Default Configuration

State=Collapsed, Color=Default, title="Title"

### Invalid Combinations

- State=Collapsed with Color=Evergreen or Color=Indigo (Color only applies when the panel is open).
- showLeftIcons=true and showRightIcons=true simultaneously, if the paginator space compresses.
- showFooter=false with showPaginator=true (showPaginator depends on showFooter=true).

### Typical Usage

- Standard closed panel: State=Collapsed, Color=Default, title="Sección"
- Open with paginator: State=Expanded, Color=Evergreen, showFooter=true, showPaginator=true
- Open with right actions: State=Expanded, Color=Indigo, showRightIcons=true, showPaginator=false
- Open with left actions: State=Expanded, Color=Evergreen, showLeftIcons=true, showPaginator=true

---

## Purpose / Intent

### Problem Solved

Groups content into collapsible sections within a layout, with optional pagination of the content area and contextual actions in the panel footer.

### Typical Context

Collapsible sections within a layout. The component has a fixed width of 648px.

---

## When to Use

- Content needs to be grouped into collapsible sections within a layout.
- The content area requires pagination.
- Contextual actions are needed in the footer of the panel.

---

## When NOT to Use

- As a modal or dialog.
- When the content does not need to be grouped or collapsed.
- In contexts where the fixed 648px width cannot be accommodated.

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Outer panel. Collapsed: background, 1px border and radius. |
| Head | Required | Chevron (chevron-down when collapsed, chevron-up when expanded) and title. 32px tall. Expanded: 1px bottom border in the accent color. |
| Content area (Content2) | Required in State=Expanded | 184px tall area with the `children` slot. |
| Footer | Optional (showFooter) | 40px tall bar, only in State=Expanded. |
| Paginator | Optional (showPaginator) | first-page, chevron-left, Page box ("0" and "/ 0"), chevron-right, last-page. |
| Left icons group | Optional (showLeftIcons) | add, pencil, trash, file-search (individually controlled by showLeftIcon1–4). |
| Right icons group | Optional (showRightIcons) | add, trash, save, cancel (individually controlled by showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4). |

### Layout

| Property | Value |
|-----------|-----------|
| Height | State=Collapsed: 32px. State=Expanded: 288px (Head 32px + content area 184px + Footer 40px + padding 16px × 2). |
| Width | 648px (fixed) |
| Padding | Collapsed: horizontal space/16, vertical space/4. Expanded content wrapper: space/16. Footer: horizontal 16px, vertical 4px (hard-coded values). |
| Gap | Collapsed: 8px (hard-coded). Expanded content wrapper: gap/none. Footer icon groups: 16px. Paginator: gap/lg. Footer gap between groups: 110px (hard-coded). |
| Radius | 4px (hard-coded) |


## Iconography

### Icon Slots

The component has no leading or trailing slot in the template sense. The icons it contains are documented below.

| Location | Icons | Size |
|--------|--------|--------|
| Head | chevron-down (State=Collapsed), chevron-up (State=Expanded) | 12×12px |
| Footer left group | add, pencil, trash, file-search | 16×16px |
| Footer right group | add, trash, save, cancel | 16×16px |
| Paginator | first-page, chevron-left, chevron-right, last-page | 12×12px |

### Rules

- Left group icons are shown or hidden individually with showLeftIcon1–4 once showLeftIcons=true.
- Right group icons are shown or hidden individually with showRighIcon1 (add), showIconRight2 (trash), showRightIcon3 (save) and showRightIcon4 (cancel) once showRightIcons=true.

---

## Variants (Properties)

Property names and values must match Figma exactly.

### State

| Value | Description |
|--------|--------|
| Collapsed | Closed panel: only the header with chevron-down and title. Height 32px. |
| Expanded | Open panel: header with chevron-up, content area and footer. Height 288px. |

### Color

| Value | Description |
|--------|--------|
| Default | Used by State=Collapsed. |
| Evergreen | Accent color for State=Expanded: Head bottom border uses border/evergreen. |
| Indigo | Accent color for State=Expanded: Head bottom border uses border/indigo. |

### showFooter

| Value | Description |
|--------|--------|
| true | Shows the full footer. |
| false | Hides the full footer. |

### showPaginator

| Value | Description |
|--------|--------|
| true | Shows the paginator in the footer. |
| false | Hides the paginator. |

### showLeftIcons

| Value | Description |
|--------|--------|
| true | Shows the left icon group in the footer. |
| false | Hides the left icon group. |

### showRightIcons

| Value | Description |
|--------|--------|
| true | Shows the right icon group in the footer. |
| false | Hides the right icon group. |

### showLeftIcon1–4

| Value | Description |
|--------|--------|
| true | Shows the individual icon of the left group (add, pencil, trash, file-search respectively). Default: true. |
| false | Hides the individual icon. |

### showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4

| Value | Description |
|--------|--------|
| true | Shows the individual icon of the right group (add, trash, save, cancel respectively). Default: true. |
| false | Hides the individual icon. |

Property names are kept exactly as they appear in Figma, including `showRighIcon1` and `showIconRight2`.

### title

Header text. Default: "Title".

### children

Slot for free content inside the content area (Content2).

---

## States

The variants expose two visible panel states. Interactive states (hover, pressed, focus, disabled) are `[Pending confirmation]`.

| State | Description | Visual Changes |
|--------|--------|--------|
| Collapsed | Closed panel (Color=Default). | Height 32px; chevron-down; title with Text/Body/XXS in text/secondary; 1px border/default border. |
| Expanded | Open panel (Color=Evergreen or Color=Indigo). | Height 288px; chevron-up; title semibold (size/12) in text/primary; Head bottom border in the accent color; content area and footer visible. |

---

## Token Mapping

Verification levels: "Verified" = seen in the exported component code. "Listed in node variables; binding not verified" = the token appears in the node variables but its binding to this element could not be confirmed.

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Container (State=Collapsed); Paginator Page box | Verified |
| surface/subtlest | Footer | Verified (#f7f8f7). See Pending Clarification. |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/secondary | Title, State=Collapsed | Verified |
| text/primary | Title, State=Expanded; paginator numbers | Verified |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/default | Container border (1px); Paginator Page box | Verified |
| border/evergreen | Head bottom border, Color=Evergreen | Verified |
| border/indigo | Head bottom border, Color=Indigo | Verified |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Icons | Listed in node variables; binding not verified |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/XXS | Title, State=Collapsed (size/10, line-height/14, weight/regular, family/body, letter-spacing/normal) | Verified |
| Text/Body/XS Strong | Title, State=Expanded (size/12, line-height/16, weight/semibold) | Listed in node variables; style name not verified in code |
| size/10 | Paginator numbers "0" and "/ 0" | Verified |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Horizontal padding (Collapsed and Head); content wrapper padding | Verified |
| space/4 | Vertical padding | Verified |
| space/8 | Paginator Page box horizontal padding | Verified |
| gap/none | Gap in the content wrapper | Verified |
| gap/xxs | Paginator Page box gap | Verified |
| gap/lg | Paginator gap | Verified |

Values without token (hard-coded): Collapsed gap 8px; footer padding 16px / 4px; gap between footer groups 110px.

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| spread/md | Paginator Page box | Verified |
| spread/lg | Paginator inner number box | Verified |

Container radius semantic semantic/sm (4px)

## Examples

### Example 1

Configuration:

```text
State=Collapsed, Color=Default, title="Sección"
```

Description:

Standard closed panel: only the header with chevron-down and title.

### Example 2

Configuration:

```text
State=Expanded, Color=Evergreen, showFooter=true, showPaginator=true
```

Description:

Open panel with Evergreen accent, content area and a footer that includes the paginator.

### Example 3

Configuration:

```text
State=Expanded, Color=Indigo, showRightIcons=true, showPaginator=false
```

Description:

Open panel with Indigo accent and the right icon group (add, trash, save, cancel) in the footer, without paginator.

---

## Invalid Combinations

- State=Collapsed with Color=Evergreen or Color=Indigo.
- showLeftIcons=true and showRightIcons=true simultaneously, if the paginator space compresses.
- showFooter=false with showPaginator=true.

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
- Discrepancies between the Figma description and the visible design recorded under Pending Clarification.
- Hard-coded values (no token) identified.

---

## Pending Clarification

- Property naming: the Figma description lists `state` [false | true] and `color`, while the variants and exported code expose `State` [Collapsed | Expanded] and `Color`. This document uses the variant names. Confirm the final names.
- Footer background: the description says #fafafa (Neutral/Neutral200); the design uses surface/subtlest (#f7f8f7).
- Title style in State=Collapsed: the description says Text/Body/XS (12/16); the design uses Text/Body/XXS (size/10, line-height/14).
- Content2 width: 617px in Color=Indigo vs. full width in Color=Evergreen. Confirm intent.
- Hard-coded values without token: container radius 4px, Collapsed gap 8px, footer padding 16px / 4px, gap of 110px between footer groups.
- Paginator Page box radius: the description says radius/4; the design uses spread/md and spread/lg.
- Icon token binding (icon/primary): not verified, icons are exported as SVG.
- Property names `showRighIcon1` and `showIconRight2` do not follow the naming of the other properties. Kept as in Figma; confirm whether they are intentional.
- Token names were not cross-checked against the project token files.
- status, version and owner.
- Semantics, Interaction, Accessibility, Content Guidelines, Expected Outcome, interactive states and Shadow.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.