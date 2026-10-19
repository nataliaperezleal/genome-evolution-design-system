---
component: "Breadcrumb"
system: "Genome Evolution Design System"
type: "Navigation/hierarchy component"
status: "Production"
version: "1.0"
owner: "UX Design Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2081-1144"
last_updated: "2026-10-19"
tags:
  - "navigation"
  - "hierarchy"
  - "breadcrumb"
  - "wayfinding"
---

# Breadcrumb — Genome Evolution Design System

Shows the user's current location within a navigational hierarchy as a path of items, allowing users to understand the page structure and navigate back through hierarchical levels.

Status, version and owner come from the draft documentation stored on the Figma page and are not otherwise confirmed.

## Quick Reference

### What it is

Navigation/hierarchy component (source: Figma component description). It is built from the internal subcomponent `.BreadcrumbItem`, which the Figma description says should not be used directly in interfaces.

### Key Properties

- Color [Default | Evergreen | Indigo] — default: Default
- Show Overflow [true | false] — default: true
- Show Level 1 [true | false] — default: true
- Show Level 2 [true | false] — default: true
- Show Level 3 [true | false] — default: true
- Show Level 4 [true | false] — default: true
- Show Level 5 [true | false] — default: true
- `.BreadcrumbItem` Item [Overflow | Level | Current] — default: Overflow
- `.BreadcrumbItem` State [Default | Disabled | Hovered | Pressed | Focused] — default: Default
- `.BreadcrumbItem` Text — item text (default: "Text" for Level and Current, "..." for Overflow)

### Default Configuration

Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true

### Typical Usage

- E-commerce: Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=false, Show Level 4=false, Show Level 5=false
- Documentation: Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true
- Compact: Show Overflow=true, Show Level 1=true, Show Level 2=false, Show Level 3=false, Show Level 4=false, Show Level 5=false

---

## Purpose / Intent

### Problem Solved

Shows where the user is within a navigational hierarchy and lets them navigate backwards through the levels (source: Figma component description).

### Expected Outcome

Users understand the page structure and can reduce clicks needed to reach parent pages (source: Figma component description).

### Typical Context

Hierarchical structures, deeply nested pages and multi-level navigation (source: Figma component description).

---

## When to Use

- To show the current page location in hierarchical structures
- To enable navigation backwards through hierarchy levels
- To provide context for deeply nested pages
- To show page relationships in multi-level navigation
- To reduce clicks needed to navigate to parent pages
- To clarify position in complex information architectures

---

## When NOT to Use

- For flat navigation (single level)
- When primary navigation is sufficient
- For small applications with no hierarchy
- On landing pages or main index pages
- When space is extremely limited
- As a replacement for main navigation

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Horizontal row of `.BreadcrumbItem` instances with no gap between items (gap/none). |
| Overflow item | Optional — Show Overflow | `.BreadcrumbItem` Item=Overflow: "..." text followed by a chevron-right. Represents collapsed hierarchy levels (source: Figma description). |
| Level items (Level 1–5) | Optional — Show Level 1…5 | `.BreadcrumbItem` Item=Level: text followed by a chevron-right. |
| Current item | Required | `.BreadcrumbItem` Item=Current: final item, text only, no chevron. Always present in the variants reviewed. |
| Separator (chevron-right) | Part of each non-final item | 12×12 icon inside Overflow and Level items. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 36 (each item) |
| Width | Hugs content. Default variant with all items: 414. Item widths with the default text: Overflow 48, Level 64, Current 46. |
| Padding | space/8 on each item |
| Gap | gap/sm between an item's text and its chevron; gap/none between items |
| Radius | radius/4 (item) |

---

## Semantics

According to the Figma description, Breadcrumb displays "a path of links" and the Current item is the page where the user currently is. Whether items are rendered as links, and the semantic markup, are not defined in the component itself.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Not applicable. |
| Trailing | chevron-right (12×12) in Overflow and Level items. Current items have none. |

### Rules

- The chevron-right is the separator between items and is not a swappable icon in the properties reviewed.
- Overflow chevron is gray in all Color values. Level chevrons follow the Color value (Default: gray, Evergreen: green, Indigo: purple) as seen in the variants.
- In State=Disabled the chevron is lighter (source: Figma description of .BreadcrumbItem).

---

## Variants (Properties)

### Color

| Value | Description |
|--------|--------|
| Default | Current item text: text/primary. Level text: text/secondary. Gray chevrons. |
| Evergreen | Current item text: text/evergreen. Level text: text/secondary. Level chevrons in evergreen. |
| Indigo | Current item text: text/indigo. Level text: text/secondary. Level chevrons in indigo. |

### Show Overflow

| Value | Description |
|--------|--------|
| true | Shows the Overflow item ("...") before the levels. |
| false | Hides the Overflow item. |

### Show Level 1

| Value | Description |
|--------|--------|
| true | Shows Level 1. |
| false | Hides Level 1. |

### Show Level 2

| Value | Description |
|--------|--------|
| true | Shows Level 2. |
| false | Hides Level 2. |

### Show Level 3

| Value | Description |
|--------|--------|
| true | Shows Level 3. |
| false | Hides Level 3. |

### Show Level 4

| Value | Description |
|--------|--------|
| true | Shows Level 4. |
| false | Hides Level 4. |

### Show Level 5

| Value | Description |
|--------|--------|
| true | Shows Level 5. |
| false | Hides Level 5. |

### Item (.BreadcrumbItem)

| Value | Description |
|--------|--------|
| Overflow | Ellipsis "..." with a chevron. Represents collapsed levels. Text/Button/MD. |
| Level | Intermediate level: text with a chevron. Text/Body/SM. |
| Current | Final item: text only. Text/Button/MD. |

### State (.BreadcrumbItem)

| Value | Description |
|--------|--------|
| Default | Base appearance. |
| Disabled | Disabled text color and a lighter chevron. |
| Hovered | Light background. |
| Pressed | Darker background. |
| Focused | 2px green border. |

### Text (.BreadcrumbItem)

Item text. Default: "Text" for Level and Current, "..." for Overflow.

---

## States

States exist only in the `.BreadcrumbItem` subcomponent. The three Breadcrumb variants show every item in State=Default.

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Base appearance of each Item. | Overflow and Current: text/primary. Level: text/secondary. |
| Disabled | Non-interactive appearance (source: Figma description). | Text: text/disabled. Chevron: lighter (icon/disabled present in the variables). |
| Hovered | Hover appearance. | Item background: background/interactive/hovered. |
| Pressed | Press appearance. | Item background: background/interactive/pressed. |
| Focused | Focus appearance. | 2px border/focus border around the item. |

---

## Token Mapping

Tokens are confirmed per component set. The exact layer of each binding was not verified. Spacing, gap and radius tokens were confirmed as Figma variables but not cross-checked against the token files.

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/interactive/hovered | Item background | .BreadcrumbItem, State=Hovered |
| background/interactive/pressed | Item background | .BreadcrumbItem, State=Pressed |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Overflow and Current text | Color=Default Current; Overflow in all Color values |
| text/secondary | Level text | All Color values |
| text/evergreen | Current text | Color=Evergreen |
| text/indigo | Current text | Color=Indigo |
| text/disabled | Item text | State=Disabled |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/focus | Focus border | State=Focused. Border width 2px, not tokenized |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Chevron | Present in the variables; layer binding [Pending confirmation] |
| icon/secondary | Chevron | Present in the variables; layer binding [Pending confirmation] |
| icon/evergreen | Chevron | Present in the variables; expected for Color=Evergreen, binding [Pending confirmation] |
| icon/indigo | Chevron | Present in the variables; expected for Color=Indigo, binding [Pending confirmation] |
| icon/disabled | Chevron | .BreadcrumbItem, State=Disabled |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Button/MD | Overflow and Current text | size/14, line-height/16, weight/semibold, family/body |
| Text/Body/SM | Level text | size/14, line-height/20, weight/regular, family/body |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/8 | Item padding | |
| gap/sm | Gap between text and chevron | |
| gap/none | Gap between items | Breadcrumb container |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Item corners | |

---

## Interaction

The `.BreadcrumbItem` subcomponent has Hovered, Pressed, Focused and Disabled states. The Figma page shows keyboard annotations: "tab", "Enter" and "selects item".

Whether Current items are interactive (they also have Hovered, Pressed and Focused variants), what the Overflow item does when activated, and responsive behavior are not documented.

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | A draft documentation stored on the Figma page states that it "should use <nav> with proper markup", with ARIA attributes [Pending confirmation]. Not defined in the component itself. |
| Visible State Support | State=Focused (2px border/focus border) and State=Disabled variants on .BreadcrumbItem. |
| Notes | The same draft says items should be keyboard accessible (Tab), with a visible focus ring, and that screen readers should announce the breadcrumb structure and current page. Treat these as unconfirmed until validated. |

---

## Content Guidelines

- Item text: default "Text" (Level, Current) and "..." (Overflow).
- The draft documentation on the Figma page suggests concise, descriptive text and always showing the current page as the last item. Unconfirmed.
- Length limits and truncation: [Pending confirmation]

---

## Examples

### Example 1

Configuration:

```text
Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=false, Show Level 4=false, Show Level 5=false
```

Description:

E-commerce: Overflow, Level 1, Level 2, Current (Category > Subcategory > Product) (source: Figma component description).

### Example 2

Configuration:

```text
Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true
```

Description:

Documentation: all levels shown (source: Figma component description).

### Example 3

Configuration:

```text
Show Overflow=true, Show Level 1=true, Show Level 2=false, Show Level 3=false, Show Level 4=false, Show Level 5=false
```

Description:

Compact: Overflow + Level 1 + Current for deep hierarchies (source: Figma component description).

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
- Variant counts verified (Breadcrumb 3, .BreadcrumbItem 15).
- Chevron icon tokens bound per layer.

---

## Pending Clarification

- Draft documentation on the Figma page calls Show Level 5 the "current page", but the component has a separate Current item. Confirm what Level 5 is.
- The same draft says the chevron color matches the current text color. In the component the Overflow chevron is gray in all Color values. Confirm.
- Color: the draft says it affects only the current item. The Level chevrons also change. Confirm.
- Chevron tokens: which of icon/primary, icon/secondary, icon/evergreen, icon/indigo applies to each chevron.
- Focus border width (2px) uses the `border.base.focus.width` token (`--ge-border-focus-width`).
- States only exist in .BreadcrumbItem. How do consumers set an item's state from Breadcrumb?
- Current items have Hovered, Pressed and Focused variants. Is the current page interactive?
- Overflow item behavior when activated, and responsive/truncation behavior.
- Whether items are links and the semantic markup (<nav>, ARIA); the draft accessibility text needs validation.
- The page's visual documentation shows Show Overflow and Show Level 1–4 in one screenshot, while the component has Show Level 5. Confirm.
- Invalid combinations (not documented in Figma).
- Status, version and owner (taken from the draft on the Figma page).

---

## Notes / Changelog

Generated from available source material on 2026-10-19.