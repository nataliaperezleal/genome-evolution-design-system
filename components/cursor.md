---
component: "Cursor"
system: "Genome Evolution Design System"
type: "Visual Reference / Prototype Asset"
status: "Done"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2204-2358"
last_updated: "2026-10-20"
tags:
  - "Cursor"
  - "Prototype Asset"
  - "Visual Reference"
---

# Cursor — Genome Evolution Design System

Library of system cursor representations for interactive prototypes, UX documentation, interaction pattern guides and CSS cursor implementation references.

## Quick Reference

### What it is

Library of system cursor representations. A single Type property selects which cursor is shown. The Figma description groups the values into functional categories.

### Key Properties

- Type — 38 values found in Figma, default: Pointer 👆
- Pointers: Arrow ↖︎ | Pointer 👆 | Grab 🖐 | Grabbed ✊
- Arrow badges: Arrow ➕ | Arrow ⌛️ | Arrow 🚫 | Arrow ❌
- Tools: Move | Zoom ➕ | Zoom ➖ | Alias ⤤ | Screenshot 📷 | Select Area ✛
- Text and editing: Input | | ⌶ - Horizontal | ⌶ - Vertical | Cell ✚ | Cross ✛ | Help ？
- Resize: Resize ← | Resize → | Resize ↑ | Resize ↓ | Resize ↔︎ | Resize ↕︎
- Direction: Direction ← | Direction → | Direction ↑ | Direction ↓ | Direction ↖︎ | Direction ↗︎ | Direction ↙︎ | Direction ↘︎ | Direction ↔︎ | Direction ↕︎ | Direction  ⤡ | Direction ⤢

### Default Configuration

Type=Pointer 👆

### Invalid Combinations

- Using Direction when Resize is needed (different semantics)
- Using Arrow badge variants where badge has no functional meaning
- Using Grab 🖐 and Grabbed ✊ interchangeably

### Typical Usage

- Pointer (CSS pointer): Type=Pointer 👆
- Text input (CSS text): Type=Input |
- Blocked action (CSS not-allowed): Type=Arrow 🚫

---

## Purpose / Intent

### Problem Solved

Provides a visual reference for system cursors in interactive prototypes, UX documentation, interaction pattern guides and CSS cursor implementation references.

### Typical Context

Interactive prototypes, UX documentation, interaction pattern guides and CSS cursor implementation references.

---

## When to Use

- Representing the system cursor in interactive prototypes
- Documenting UX interaction patterns
- Providing a visual reference for CSS cursor implementation

---

## When NOT to Use

- As a decorative icon inside the UI
- To replace native OS cursors without clear functional justification

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Cursor glyph | Required | The cursor artwork selected by Type. Most variants are exported as SVG images |
| Color layer | Optional (Type=Input \|) | 24 × 24 px mask layer filled with icon/primary, used only by Type=Input \| |
| Badge | Optional (Type=Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌) | Colored badge shown with the arrow in the four 28 × 40 px variants |

### Layout

| Property | Value |
|-----------|-----------|
| Height | 24 px (Standard), 40 px (Extended), 28 px (Wide) |
| Width | 24 px (Standard), 28 px (Extended), 28 px (Wide) |
| Padding | [Pending confirmation] |
| Gap | [Pending confirmation] |
| Radius | [Pending confirmation] |

Size groups (from variant metadata):

- Standard 24 × 24 px (32 variants): Arrow ↖︎, Pointer 👆, Grab 🖐, Grabbed ✊, Zoom ➕, Zoom ➖, Move, Help ？, ⌶ - Horizontal, ⌶ - Vertical, Input |, Cell ✚, Cross ✛, Alias ⤤, all Resize, all Direction
- Extended 28 × 40 px (4 variants): Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌
- Wide 28 × 28 px (2 variants): Screenshot 📷, Select Area ✛

---

## Semantics

Library of system cursor representations for prototypes, UX documentation, interaction pattern guides and CSS cursor references. The Figma description of Type=Input | reads "Blinking text cursor".

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | None. The component has no icon slots |
| Trailing | None. The component has no icon slots |

### Rules

- Type=Input | is rendered as a mask layer (Color layer) filled with icon/primary.
- The other variants checked are exported as SVG images.
- The four Arrow badge variants (Arrow ➕, Arrow ⌛️, Arrow 🚫, Arrow ❌) combine the arrow with a badge and use the 28 × 40 px size.

---

## Variants (Properties)

Property names and values must match Figma exactly.

### Type

Default: Pointer 👆. CSS equivalents are shown only where the Figma description documents them.

| Value | Description |
|--------|--------|
| Arrow ↖︎ | Pointers. 24 × 24 px. CSS: default |
| Pointer 👆 | Pointers. 24 × 24 px. CSS: pointer. Default value |
| Grab 🖐 | Pointers. 24 × 24 px. CSS: grab |
| Grabbed ✊ | Pointers. 24 × 24 px. CSS: grabbing |
| Arrow ➕ | Arrow badges. 28 × 40 px |
| Arrow ⌛️ | Arrow badges. 28 × 40 px |
| Arrow 🚫 | Arrow badges. 28 × 40 px. CSS: not-allowed |
| Arrow ❌ | Arrow badges. 28 × 40 px |
| Move | Tools. 24 × 24 px. CSS: move |
| Zoom ➕ | Tools. 24 × 24 px. CSS: zoom-in |
| Zoom ➖ | Tools. 24 × 24 px. CSS: zoom-out |
| Alias ⤤ | Tools. 24 × 24 px |
| Screenshot 📷 | Tools. 28 × 28 px |
| Select Area ✛ | Tools. 28 × 28 px |
| Input \| | Text and editing. 24 × 24 px. CSS: text. Figma description: "Blinking text cursor" |
| ⌶ - Horizontal | Text and editing. 24 × 24 px |
| ⌶ - Vertical | Text and editing. 24 × 24 px |
| Cell ✚ | Text and editing. 24 × 24 px |
| Cross ✛ | Text and editing. 24 × 24 px. CSS: crosshair |
| Help ？ | Text and editing. 24 × 24 px. CSS: help |
| Resize ← | Resize. 24 × 24 px |
| Resize → | Resize. 24 × 24 px |
| Resize ↑ | Resize. 24 × 24 px |
| Resize ↓ | Resize. 24 × 24 px |
| Resize ↔︎ | Resize. 24 × 24 px. CSS: ew-resize |
| Resize ↕︎ | Resize. 24 × 24 px. CSS: ns-resize |
| Direction ← | Direction. 24 × 24 px |
| Direction → | Direction. 24 × 24 px |
| Direction ↑ | Direction. 24 × 24 px |
| Direction ↓ | Direction. 24 × 24 px |
| Direction ↖︎ | Direction. 24 × 24 px |
| Direction ↗︎ | Direction. 24 × 24 px |
| Direction ↙︎ | Direction. 24 × 24 px |
| Direction ↘︎ | Direction. 24 × 24 px |
| Direction ↔︎ | Direction. 24 × 24 px |
| Direction ↕︎ | Direction. 24 × 24 px |
| Direction  ⤡ | Direction. 24 × 24 px. The Figma value has two spaces after "Direction" |
| Direction ⤢ | Direction. 24 × 24 px |

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| [Pending confirmation] | The component has no State property | [Pending confirmation] |

---

## Token Mapping

### Icon

| Token | Usage | Notes |
|--------|--------|--------|
| icon/primary | Type=Input \| (Color layer mask fill) | Verified. Value #5f6d62 |

### Shadow

| Token | Usage | Notes |
|--------|--------|--------|
| shadow-l | General shadow | Listed in the design styles of the Arrow ❌ variant and described as the general shadow. Drop shadow #7575752E, offset (0, 0), blur 10. Per-variant usage not verified |

---

## Interaction

The Figma description of Type=Input | reads "Blinking text cursor". All other behavior, animations and prototype interactions:

---

## Examples

### Example 1

Configuration:

```text
Type=Pointer 👆
```

Description:

Default value. CSS equivalent: pointer.

### Example 2

Configuration:

```text
Type=Input |
```

Description:

Text cursor. CSS equivalent: text.

### Example 3

Configuration:

```text
Type=Arrow 🚫
```

Description:

Arrow badge variant, 28 × 40 px. CSS equivalent: not-allowed.

---

## Invalid Combinations

- Using Direction when Resize is needed (different semantics)
- Using Arrow badge variants where badge has no functional meaning
- Using Grab 🖐 and Grabbed ✊ interchangeably

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
- Variant list checked against metadata (38 variants).
- Differences between the Figma description and the variants flagged in Pending Clarification.

---

## Pending Clarification

- The Figma description says 39 variants in 7 groups, but the metadata shows 38 variants and the description lists only 6 groups. Clone ↖︎ appears in the description (Tools group and Standard sizes) but no Type=Clone ↖︎ variant exists.
- Property name casing: the description uses type, the variants use Type. This document follows the variant name.
- The Figma value "Direction  ⤡" has two spaces after "Direction". It is kept as in Figma.
- Arrow badge color: the description says Artificial/Artificial-500 (#7B61FF), while the node variables list Artificial/Artificial-400 (#836FE4). Neither is documented as confirmed.
- Variables listed in the node but whose usage was not identified: icon/danger, icon/inverse, text/success, link/default, link/visited, background/canvas, radius/0, Artificial/Artificial-400. Most variants are exported as SVG images, so token binding inside the artwork cannot be verified.
- CSS equivalents are documented only for some values; the rest are not documented.
- Token names are taken verbatim from Figma and were not cross-checked against the token JSON files.
- status, version and owner.
- Semantics beyond the description, Interaction, Accessibility and Content Guidelines.

---

## Notes / Changelog

Generated from available source material on 2026-10-20.