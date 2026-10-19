---
component: "Accordion"
system: "Genome Evolution Design System"
type: "Expandable/collapsible content container"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-19"
tags:
  - "accordion"
  - "disclosure"
  - "content-container"
---

# Accordion — Genome Evolution Design System

Lets users show or hide content sections to control information density and improve interface readability.

## Quick Reference

### What it is

Expandable/collapsible content container (source: Figma component description).

### Key Properties

- Behavior [Collapsed | Expanded] — default: Collapsed
- Color [Default | Evergreen | Indigo] — default: Default
- Size [SM | MD] — default: MD
- State [Default | Disabled | Hovered | Pressed | Focused | Loading] — default: Default
- Show Badge [true | false] — default: false
- Show Checkbox [true | false] — default: false
- Show Left Icon [true | false] — default: false
- Text — header text (default: Placeholder)

### Default Configuration

Behavior=Collapsed, Color=Default, Size=MD, State=Default, Show Badge=false, Show Checkbox=false, Show Left Icon=false

### Invalid Combinations

- Behavior=Collapsed + Color=Evergreen (variant does not exist)
- Behavior=Collapsed + Color=Indigo (variant does not exist)
- State=Disabled + Color=Evergreen or Indigo (variant does not exist)
- State=Loading + Color=Evergreen or Indigo (variant does not exist)
- Color=Evergreen or Indigo + State other than Default, Hovered, Pressed, Focused (only those variants exist)

### Typical Usage

- Filter panel: Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true
- FAQ section: Behavior=Collapsed, Color=Default, Size=MD
- Compact section with accent: Behavior=Expanded, Color=Evergreen, Size=SM

---

## Purpose / Intent

### Problem Solved

Controls information density by showing or hiding content sections (source: Figma component description).

### Expected Outcome

Improved interface readability (source: Figma component description).

### Typical Context

Hierarchical information (FAQs, settings, filters) and optional form sections (source: Figma component description).

---

## When to Use

- To group related content in collapsible sections
- To hide secondary information and reduce cognitive load
- To organize hierarchical information (FAQs, settings, filters) or optional form sections

---

## When NOT to Use

- For critical information that must always be visible
- When the content is toggled frequently (prefer an always-visible layout)
- For a single item (use disclosure)
- When the relationship between contents requires constant visibility

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Header Container | Required | Header row. Contains the left icon, text group and icons group. |
| info (left icon) | Optional — Show Left Icon | 16×16 icon. The `icon` slot can replace it. Defaults to the "info" icon. |
| Text | Required | Group containing the optional Checkbox and the header text. |
| Checkbox | Optional — Show Checkbox | 20×20 checkbox box (16×16 inner box, 1px border, 2px corner radius), a 16×16 "bizagi-lines" icon, and, in Behavior=Collapsed variants, the text "Label". |
| Badge | Optional — Show Badge | Pill with a numeric text (default "0"). |
| chevron-down / chevron-up | Required | 12×12 icon. chevron-down in Collapsed, chevron-up in Expanded. |
| Content Container | Present only in Behavior=Expanded | Content area, 100px high in the variants reviewed. Contains a content slot with radius/4 corners. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Collapsed: 36 (Size=MD) / 24 (Size=SM). Expanded: 136 (Size=MD) / 124 (Size=SM). |
| Width | 265 |
| Padding | Header, Size=MD: space/16 horizontal, space/8 vertical. Header, Size=SM (Expanded Default only): space/8 horizontal, space/2 vertical. Content Container: space/16 (Size=MD), space/8 (Size=SM). |
| Gap | gap/sm (8) between header elements. |
| Radius | radius/4 on the content slot. |

Size=SM Collapsed header padding was not verified.

---

## Semantics

Per the Figma description, Accordion groups related content into sections that can be collapsed or expanded. Behavior distinguishes the collapsed and expanded forms. Group semantics (single vs. multiple open sections) are not documented.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Left icon (16×16), controlled by Show Left Icon. Defaults to "info"; replaceable via the `icon` slot. |
| Trailing | Chevron (12×12): chevron-down when Collapsed, chevron-up when Expanded. Optional Badge before it. |

### Rules

- Left icon is visible only when Show Left Icon=true.
- The chevron reflects the Behavior value (chevron-down / chevron-up).
- Allowed icons for the `icon` slot: anything

---

## Variants (Properties)

### Behavior

| Value | Description |
|--------|--------|
| Collapsed | Shows only the header. |
| Expanded | Shows the header and the Content Container. |

### Color

| Value | Description |
|--------|--------|
| Default | Neutral appearance. Available for all Behavior, Size and State values. |
| Evergreen | Text text/evergreen and bottom border border/evergreen. Only with Behavior=Expanded, Size=SM and MD, State=Default, Hovered, Pressed, Focused. |
| Indigo | Text text/indigo and bottom border border/indigo. Only with Behavior=Expanded, Size=SM and MD, State=Default, Hovered, Pressed, Focused. |

### Size

| Value | Description |
|--------|--------|
| SM | Collapsed 24px high; Expanded 124px high. |
| MD | Collapsed 36px high; Expanded 136px high. |

### State

| Value | Description |
|--------|--------|
| Default | Base appearance. |
| Disabled | Appearance with disabled tokens. Only with Color=Default. |
| Hovered | Header with background/interactive/hovered. |
| Pressed | Header with background/interactive/pressed. |
| Focused | 2px border/focus border around the header. |
| Loading | Skeleton blocks (background/loading) replace text, icon and content. Only with Color=Default. |

### Show Badge

| Value | Description |
|--------|--------|
| true | Shows the badge in the icons group. |
| false | Hides the badge. |

### Show Checkbox

| Value | Description |
|--------|--------|
| true | Shows the checkbox in the header. |
| false | Hides the checkbox. |

### Show Left Icon

| Value | Description |
|--------|--------|
| true | Shows the left icon. |
| false | Hides the left icon. |

### Text

Header text. Default value: Placeholder.

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Base appearance. | Header with background/canvas; border/strong bottom border when Expanded, border/default when Collapsed Size=MD. |
| Hovered | Variant State=Hovered. | Header background: background/interactive/hovered. |
| Pressed | Variant State=Pressed. | Header background: background/interactive/pressed. |
| Focused | Variant State=Focused. | 2px (focus/width) border/focus border around the header. |
| Disabled | Variant State=Disabled. | Tokens text/disabled, icon/disabled, background/disabled, border/disabled. |
| Loading | Variant State=Loading. | Skeleton blocks (background/loading) in place of text, chevron and content. |

---

## Token Mapping

Tokens are confirmed per variant. The exact layer of each binding was not verified. Spacing, gap and radius tokens were confirmed as Figma variables but not cross-checked against the token files.

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Header and content fill | All Color=Default variants |
| background/interactive/hovered | Hovered fill | State=Hovered |
| background/interactive/pressed | Pressed fill | State=Pressed |
| background/disabled | Disabled fill | State=Disabled |
| background/loading | Skeleton blocks | State=Loading |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/primary | Header text | Color=Default |
| text/evergreen | Header text | Color=Evergreen |
| text/indigo | Header text | Color=Indigo |
| text/disabled | Header text | State=Disabled |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/strong | Header bottom border | Color=Default, Expanded |
| border/default | Container bottom border | Behavior=Collapsed, Size=MD |
| border/evergreen | Header bottom border | Color=Evergreen |
| border/indigo | Header bottom border | Color=Indigo |
| border/focus | Focus border | State=Focused |
| focus/width | Focus border width (2) | State=Focused |
| border/disabled | Disabled border | State=Disabled |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Checkbox border | Present in non-Disabled variants; icon usage not verified |
| icon/disabled | Icons | State=Disabled |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Body/SM | Header text | size/14, line-height/20, weight/regular, family/body |

The Checkbox "Label" text uses size/12, line-height/16 and letter-spacing/normal (no composite style identified).

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Header padding (MD), content padding (MD) | |
| space/8 | Header padding (MD vertical, SM horizontal), content padding (SM), gaps | |
| space/2 | Header vertical padding | Size=SM |
| gap/sm | Gap between header elements | |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/4 | Content slot | |
| radius/0 | Present in variables | none |

### Shadow

Not tokenized: Badge colors #9e9e9e (border) and #272727 (text) and its font variables (font/family/products, font/weight/semibold, font/size/xs, font/spacing/m), the 1px bottom border width and the checkbox 2px radius.

---

## Interaction

The component has Hovered, Pressed, Focused, Disabled and Loading variants. The trigger that toggles Behavior, the clickable area, the animation and whether multiple sections can be open are not documented.

---

## Accessibility

| Topic | Information |
|--------|--------|
| Visible State Support | State=Focused variant with a 2px border/focus border. State=Disabled variant. |
| Notes | No roles, keyboard behavior or accessible names are documented. |

---

## Content Guidelines

- Text: header text (default: Placeholder).

---

## Examples

### Example 1

Configuration:

```text
Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true
```

Description:

Filter panel (source: Figma component description).

### Example 2

Configuration:

```text
Behavior=Collapsed, Color=Default, Size=MD
```

Description:

FAQ section (source: Figma component description).

### Example 3

Configuration:

```text
Behavior=Expanded, Color=Evergreen, Size=SM
```

Description:

Compact expanded section with accent color (variant exists in Figma).

---

## Invalid Combinations

- Behavior=Collapsed + Color=Evergreen (variant does not exist)
- Behavior=Collapsed + Color=Indigo (variant does not exist)
- State=Disabled + Color=Evergreen or Indigo (variant does not exist)
- State=Loading + Color=Evergreen or Indigo (variant does not exist)
- Color=Evergreen or Indigo + State other than Default, Hovered, Pressed, Focused (only those variants exist)

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
- Variant count verified (40).
- Badge tokens defined.

---

## Pending Clarification

- Interaction: what toggles Behavior (whole header or chevron), animation, and whether several sections can be open at once.
- Accessibility: roles, keyboard, accessible names, and how State=Focused is triggered.
- Checkbox: the text "Label" appears only in Behavior=Collapsed. Is this intentional?
- Badge: uses #9e9e9e, #272727 and font tokens outside the Genome taxonomy. Which tokens should it use?
- Show Left Icon: which icons are allowed in the `icon` slot.
- Content slot: layer names differ (Content MD Default, Accordion Content, Content SM Default). Confirm the slot property name.
- Content Container height is 100px in all Expanded variants reviewed. Is it fixed or a placeholder?
- Size=SM padding in Collapsed variants was not verified.
- Untokenized values: 1px bottom border width and checkbox 2px radius. Usage of radius/0.
- Layer-level token mapping per State and Color.
- Status, version and owner.

---

## Notes / Changelog

Generated from available source material on 2026-10-19.