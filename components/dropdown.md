---
component: "Dropdown"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3747-6162"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "menu"
  - "list"
---

# Dropdown

System: Genome Evolution Design System

## Component Summary

Dropdown is a 174 px wide list panel that stacks ten option rows, a footer with a Primary button and a vertical scrollbar, available with standard icon-and-text rows (`Items default`) or with empty slot rows for custom content (`Slots`).

## Quick Reference

### What It Is

Evidence-based interpretation: Dropdown is the panel that displays a list of options when a dropdown is opened. This is supported by the component name, its vertical stack of `.Dropdown icon + text` or `.Dropdown empty content` rows, the vertical Scroll indicator and the footer action. Figma does not include a written usage description for the Dropdown component set; its child components do have descriptions in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Content | Items default, Slots | Items default |

The default is taken from the component property definition in Figma. The component exposes no other properties at the Dropdown level; row content, row states and the button label are set on the nested instances.

### Default Configuration

`Content=Items default`: a 174 × 482 px panel with ten `.Dropdown icon + text` rows (`Size=LG`, `State=Default`, label "Item list", `add` and `chevron-right` icons), a footer with a "Button" Primary button, and a vertical Scroll at the top right.

### Typical Usage

Verified observation: The component set has two variants that differ only in the row component used. Both contain ten 44 px rows, a 42 px footer and a Scroll instance.

Evidence-based interpretation:

- Use `Content=Items default` for options that consist of an icon, a label and a trailing icon.
- Use `Content=Slots` when options need custom content, placed in each row's slot.
- Set the state of individual rows (for example, `Selected` for the chosen option) on the nested row instances.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent container for a list of selectable options with an action at the bottom.

### Expected Outcome

Evidence-based interpretation: Users can browse a list of options, choose one, and confirm with the footer action.

### Typical Context

Evidence-based interpretation: Shown as a floating panel below a trigger, such as a field or button. The trigger and placement are not documented in Figma.

## When to Use

Evidence-based interpretations based on the component structure:

- To present a list of options in a panel (`Items default`).
- To present options with custom content (`Slots`).

## When NOT to Use

[No documented restrictions found]

Limitations of the current component:

- Both variants contain exactly ten rows and a footer button; there are no properties to change the number of rows or to hide the footer.
- Rows are always `Size=LG`; MD and SM rows are not shown at the Dropdown level.
- The panel has a single width (174 px).

## Composition and Hierarchy Rules

### Child components

| Child | Used in | Configuration observed |
|-------|---------|------------------------|
| `.Dropdown icon + text` | Rows, `Content=Items default` | `Size=LG`, `State=Default`, label "Item list", `add` + `chevron-right`; stretched to the panel width (174 px instead of its own 163 px) |
| `.Dropdown empty content` | Rows, `Content=Slots` | `Size=LG`, `State=Default`, `Property=No content`, empty slot (142 × 20 px at the panel width) |
| Button | Footer | `Type=Primary`, `Color=Evergreen`, `Size=SM`, label "Button" |
| Scroll | Scroll indicator | `Orientation=Vertical`, `Size=Small` (4 × 272 px) |

### Order

From top to bottom: ten rows, then the footer. The Scroll indicator is placed on top of the rows at the top right (3 px from the top and right edges) and is not part of the vertical stack.

### Rows

- Rows are stacked with no gap and no dividers.
- All rows in a variant use the same child component and size.
- Rows fill the panel width.

### Footer

- The footer is a 42 px row with 16 px horizontal and 8 px vertical padding; the button is right-aligned.
- The footer is always present.

### Overflow and scrolling

- The Scroll component is described in Figma as purely visual, with no scroll logic. In Dropdown it is a 272 px indicator next to a 440 px list of rows.
- The panel does not clip its content in Figma, so all ten rows are visible.
- Evidence-based interpretation: the Scroll indicates that the list can scroll when it exceeds the available height. The maximum visible height and the scroll behavior are not defined in Figma.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Panel | Required | Vertical auto layout container with background, 1 px border and 8 px radius. |
| Rows | Required | Ten `.Dropdown icon + text` or `.Dropdown empty content` instances. |
| Footer (`Button`) | Required | Row containing a right-aligned Primary SM Button. |
| Scroll | Required | Vertical scrollbar indicator overlaid at the top right. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Panel width | 174 px | Variant dimensions |
| Panel height | 482 px (10 × 44 px rows + 42 px footer) | Variant dimensions |
| Panel border | 1 px `border/default` | Design context |
| Panel radius | `radius/8` (8) | Variable binding |
| Gap between rows | 0 | Design context |
| Row height | 44 px (`Size=LG`) | Layer dimensions |
| Footer | 42 px high; 16 px horizontal, 8 px vertical padding (fixed values); button right-aligned | Design context |
| Scroll | 4 × 272 px; 3 px from the top and right edges | Layer positions |

## Semantics

Evidence-based interpretation: The panel is a list of options. Each row is an option; the footer button is an action related to the list (for example, confirming a choice). The Scroll indicates a scrollable list.

Not verified in Figma: HTML elements, ARIA roles (for example, listbox or menu), selection model (single or multiple) and the footer action.

## Variants (Properties)

The inventory below is complete: both variants were inspected.

### Content

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Items default | Ten `.Dropdown icon + text` rows. | Default |
| Slots | Ten `.Dropdown empty content` rows with empty slots. | — |

## States

The Dropdown component set has no state property. Row states are set on the nested row instances, and button states on the Button instance.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Panel, rows and footer | Variable binding |
| Border | `border/default` | Panel border | Variable binding |
| Radius | `radius/8` | Panel corners | Variable binding |
| Surface | `surface/subtlest`, `surface/subtle` | Scroll track and thumb | Variable binding |

Row, button and scroll tokens are documented with `.Dropdown icon + text`, `.Dropdown empty content`, Button and Scroll.

Current behavior:

- The footer padding (16 px / 8 px) uses fixed values rather than spacing variables.
- Corner radius overrides on the rows are inconsistent: in `Items default`, the first row has rounded top corners and rows 4 to 10 have rounded bottom corners; in `Slots`, every row has rounded top corners. At rest, rows and panel share the same background, so this is not visible; it can show when a row displays a state background (for example, `Hovered`).

## Interaction

The component has no state variants. Prototype interactions were not inspected.

Not verified in Figma: opening and closing, scrolling, selection, keyboard navigation and what the footer button does.

## Accessibility

Accessibility-related observations:

- Row states, including a 2 px focus border, are provided by the row components.
- The Scroll indicator is visual only.
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): listbox or menu semantics, keyboard navigation, focus management between rows and the footer, and announcements of the selected option.

## Content Guidelines

Verified observations: Rows use the sample label "Item list" (`Items default`) or empty slots (`Slots`). The footer button uses the sample label "Button".

## Examples

### Standard options list

Configuration: `Content=Items default`

Description: Ten icon-and-text options with a Primary button in the footer.

Evidence / Classification: Existing variant in Figma (default).

### Custom options list

Configuration: `Content=Slots`

Description: Ten rows with custom content placed in their slots.

Evidence / Classification: Existing variant in Figma; slot content is a usage example.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
