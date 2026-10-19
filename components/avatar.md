---
component: "Avatar"
system: "Genome Evolution"
type: "Avatar display component"
status: "Production"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-19"
tags:
  - "avatar"
  - "identity"
  - "status-indicator"
---

# Avatar — Genome Evolution Design System

Visually represents a person or entity through a text initial, a generic icon or a real image, with optional support for a status indicator.

## Quick Reference

### What it is

Display component that represents the identity of a person or entity (source: Figma component description).

### Key Properties

- Type [Icon | Person | Print] — default: Print
- Color [Default | Evergreen | Indigo] — default: Default
- Size [16 | 24 | 32 | 40 | 48] — default: 16
- State [Default | Focused] — default: Default
- Show State [true | false] — default: false
- Label — Text character or initial; only applies to Type=Print (default: B)

### Default Configuration

Type=Print, Color=Default, Size=16, State=Default, Show State=false, Label=B (default variant of the component set).

The current Figma description states "Type: Print, Color: Default, Size: 32, State: Default" as the default configuration.

### Invalid Combinations

- Type=Icon + Color=Evergreen (variant does not exist)
- Type=Icon + Color=Indigo (variant does not exist)
- Type=Person + Color=Evergreen (variant does not exist)
- Type=Person + Color=Indigo (variant does not exist)
- Label with Type=Icon or Type=Person (these variants contain no text layer)
- Size=16 + Show State=true (stated in the Figma description) [Pending confirmation]

### Typical Usage

- Active users list: Type=Icon, Color=Default, Size=32, Show State=true
- Profile with photo: Type=Person, Color=Default, Size=40, Show State=false
- Avatar with initial: Type=Print, Color=Indigo, Size=40, Label=B, Show State=true
- Card assignment: Type=Print, Color=Default, Size=24, Show State=false

---

## Purpose / Intent

### Problem Solved

Represents the identity of a person or entity in the interface through an initial, a generic icon or an image (source: Figma component description).

### Typical Context

Lists, tables, profiles, comments, assignments and mentions (source: Figma component description).

---

## When to Use

- To show user identity in lists, tables or profiles
- To indicate presence or availability with the status indicator
- To represent people in comments, assignments or mentions

---

## When NOT to Use

- As a primary action button
- When the available space is smaller than 16px
- To represent non-person entities (use a specific icon)

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Square frame with radius/24 corners. Fill and border vary by Type, Color and State. Content centered vertically and horizontally. |
| Label (text layer "B") | Optional — Type=Print only | Centered text initial. Typography changes with Size. |
| Image (layer "unsplash:LWkFHEGpleE") | Optional — Type=Person only | Image fill clipped with a 360px corner radius. |
| Icon (layer "Vector") | Optional — Type=Icon only | Generic person silhouette vector filling the full Size. |
| Status indicator (Ellipse layer) | Optional | Circle in the bottom-right corner, hidden by default and controlled by Show State. Present in all Type values. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 16 / 24 / 32 / 40 / 48 px (equals Size) |
| Width | 16 / 24 / 32 / 40 / 48 px (equals Size) |
| Padding | None defined in Figma (content centered) |
| Gap | None defined in Figma |
| Radius | radius/24 (container); 360px on the Person image layer (no token) |

---

## Semantics

According to the Figma component description, Avatar visually represents a person or entity. Each Type value is a different visual representation: Print (initial), Icon (generic silhouette) and Person (image).

The meaning of the status indicator (e.g., which statuses it represents) is not documented.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | Not applicable — the component has no leading icon slot. |
| Trailing | Not applicable — the component has no trailing icon slot. |

### Rules

- Type=Icon renders a generic person silhouette vector (layer "Vector") that fills the entire avatar size.
- The icon is bound to the icon/secondary token.
- No instance-swap property for the icon was found. [Pending confirmation]

---

## Variants (Properties)

### Type

| Value | Description |
|--------|--------|
| Print | Shows the Label text initial centered in the container. Available with Color=Default, Evergreen and Indigo. |
| Icon | Shows a generic person silhouette vector. Available only with Color=Default. |
| Person | Shows an image clipped to a circle. Available only with Color=Default. |

### Color

| Value | Description |
|--------|--------|
| Default | Type=Print: background/canvas fill, 1px border/strong border, text/secondary text. Only value available for Type=Icon and Type=Person. |
| Evergreen | Type=Print only: surface/evergreen/subtle fill, text/evergreen text, no border. |
| Indigo | Type=Print only: surface/indigo/subtle fill, text/indigo text, no border. |

### Size

| Value | Description |
|--------|--------|
| 16 | 16×16 px. Label: Text/Label/XS. Status indicator: 6×6 px. |
| 24 | 24×24 px. Label: Text/Body/XS Strong. Status indicator: 8×8 px. |
| 32 | 32×32 px. Label: Text/Body/SM Strong. Status indicator: 10×10 px. |
| 40 | 40×40 px. Label: Text/Body/MD Strong. Status indicator: 12×12 px. |
| 48 | 48×48 px. Label: Text/Body/MD Strong. Status indicator: 12×12 px. |

### State

| Value | Description |
|--------|--------|
| Default | Base appearance. |
| Focused | Adds a focus border using `focus/width` (2px) and `border/focus`. |

### Show State

| Value | Description |
|--------|--------|
| true | Shows the status indicator (ellipse) in the bottom-right corner. |
| false | The status indicator is hidden. |

### Label

Text property. Default value: B. Only Type=Print variants contain a text layer; it has no visible effect on Type=Icon or Type=Person.

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Base appearance of each Type and Color. | Print + Default: 1px border/strong border. Print + Evergreen / Indigo: no border. Icon and Person: no border. |
| Focused | Focus appearance (State=Focused variant). | Print: 2px (`focus/width`) `border/focus` border on the container, replacing border/strong for Color=Default. Person: 2px `border/focus` border on the image layer. Icon: focus ring drawn in the vector, extending 2px beyond the component bounds. |

---

## Token Mapping

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| background/canvas | Container fill | Type=Print, Color=Default |
| surface/evergreen/subtle | Container fill | Type=Print, Color=Evergreen |
| surface/indigo/subtle | Container fill | Type=Print, Color=Indigo |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/secondary | Label color | Type=Print, Color=Default |
| text/evergreen | Label color | Type=Print, Color=Evergreen |
| text/indigo | Label color | Type=Print, Color=Indigo |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/strong | Container border | Type=Print, Color=Default, State=Default. 1px width, not tokenized. |
| border/focus | Focus border color | State=Focused, all Type values |
| focus/width | Focus border width (2) | State=Focused, all Type values |

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/secondary | Silhouette color | Type=Icon |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Label/XS | Label | Size=16 (size/11, line-height/16, letter-spacing/wide) |
| Text/Body/XS Strong | Label | Size=24 (size/12, line-height/16, letter-spacing/normal) |
| Text/Body/SM Strong | Label | Size=32 (size/14, line-height/20) |
| Text/Body/MD Strong | Label | Size=40 and Size=48 (size/16, line-height/20, letter-spacing/normal) |

Each style was matched to a Size by its bound variables. All styles use family/body and weight/semibold.

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| none | — | No spacing tokens bound in the component. |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| radius/24 | Container corner radius | All variants. The Person image layer uses 360px (no token). |

### Shadow

| Token | Usage | Notes |
|--------|--------|--------|
| none | — | No shadow tokens bound in the component. |

Status indicator (Ellipse) color: no bound token found.

---

## Interaction

The component has a State=Focused variant. The source does not define prototype interactions, triggers or transitions, and it does not say whether the component is interactive.

---

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | State=Focused variant with a 2px border/focus border. |
| Notes | No alternative text, accessible name, role or screen reader behavior is documented. [Pending confirmation] |

---

## Content Guidelines

- Label: text character or initial; only applies to Type=Print (source: Figma component description). Default value: B.
- Character limits, casing and initial-generation rules: [Pending confirmation]

---

## Examples

### Example 1

Configuration:

```text
Type=Icon, Color=Default, Size=32, Show State=true
```

Description:

Active users list (source: Figma component description).

### Example 2

Configuration:

```text
Type=Person, Color=Default, Size=40, Show State=false
```

Description:

Profile with photo (source: Figma component description).

### Example 3

Configuration:

```text
Type=Print, Color=Indigo, Size=40, Label=B, Show State=true
```

Description:

Avatar with initial (source: Figma component description).

---

## Invalid Combinations

- Type=Icon + Color=Evergreen (variant does not exist)
- Type=Icon + Color=Indigo (variant does not exist)
- Type=Person + Color=Evergreen (variant does not exist)
- Type=Person + Color=Indigo (variant does not exist)
- Label with Type=Icon or Type=Person (these variants contain no text layer)
- Size=16 + Show State=true (stated in the Figma description; Size=16 variants do contain a 6×6 px indicator layer)

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
- Default Size conflict (16 vs 32) resolved.
- Status indicator color token defined.

---

## Pending Clarification

- Default Size: the component set's default variant is Size=16, but the Figma description states Size=32. Which one is correct?
- Size=16 + Show State=true: the description marks it invalid, but Size=16 variants contain a 6×6 px indicator layer. Should the layer be removed or the rule updated?
- The Figma description says "Type=Person without an assigned image falls back to Icon automatically". This is runtime behavior and cannot be verified in Figma. Confirm it with development.
- Status indicator: color/token and the statuses it represents (e.g., online, busy, offline).
- What triggers State=Focused (keyboard focus, selection) and whether Avatar is interactive.
- Accessibility: alternative text for Person, accessible name for Print and Icon.
- Untokenized values: 1px border width (Print + Default) and 360px image radius (Person).
- Type=Person, Size=16, State=Default has an extra image fill at 20% opacity on the container, which other sizes do not. Is this intentional?
- Status, version and owner of the component.

---

## Notes / Changelog

Generated from available source material on 2026-10-19.