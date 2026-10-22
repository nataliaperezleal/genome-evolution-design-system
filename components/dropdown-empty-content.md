---
component: "Dropdown empty content"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3751-6300"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "list-item"
  - "slot"
---

# Dropdown empty content

System: Genome Evolution Design System

## Component Summary

Dropdown empty content (`.Dropdown empty content` in Figma) is a 163 px wide option row with an empty slot for custom content, available in three sizes and six states (Default, Hovered, Pressed, Focused, Selected, Disabled).

## Quick Reference

### What It Is

The Dropdown Empty Content component is an empty content container used as an internal building block for composing custom Dropdown menus. It provides a flexible surface where controls, filters, forms, lists, indicators, actions, or any other required content can be placed inside a dropdown panel.

Unlike a list item or selectable option, this component only represents the content area of the dropdown and does not define specific behaviour by itself. Its primary purpose is to serve as the structural foundation for more advanced dropdown experiences that require custom content.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | LG, MD, SM | LG |
| State | Default, Hovered, Pressed, Focused, Selected, Disabled | Default |
| Property | No content | No content |
| Content slot | Any content | Empty |

Defaults are taken from the component property definitions in Figma. Every `Size` and `State` combination exists (18 variants). `Property` has a single value.

### Default Configuration

`Size=LG`, `State=Default`, `Property=No content`, empty slot: a 163 × 44 px row on `background/canvas`.

### Typical Usage

Verified observation: The component set contains 18 variants: six states in each of three sizes, all with `Property=No content`. The only content is a slot that fills the space inside the padding.

Evidence-based interpretation:

- Use it when an option needs content that `.Dropdown icon + text` cannot represent, by placing that content in the slot.
- Use the same `Size` and `State` logic as the other dropdown rows: `Default` for available options, `Selected` for the chosen option, `Disabled` for unavailable options, and `Hovered`, `Pressed` and `Focused` for interaction feedback.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides the dropdown row container (size, padding and state appearance) without prescribing its content.

### Expected Outcome

Evidence-based interpretation: Custom option content keeps the same dimensions and state feedback as standard dropdown rows.

### Typical Context

Evidence-based interpretation: Used inside a dropdown list, alongside or instead of `.Dropdown icon + text`. The parent component is not referenced in this component set.

## When to Use

- To build the internal content of a custom Dropdown.
- When the dropdown contains forms or advanced filters.
- To include dynamic option lists.
- For rich selectors that include search, grouping, or additional actions.
- To display contextual information within a dropdown panel.
- When buttons or other actions need to be included inside the dropdown.
- To create composite menus that combine multiple component types.

## When NOT to Use

- As a generic page or layout container.
- To display permanent content within a view.
- When a simple set of options can be handled by standard Dropdown or Select components.
- As a replacement for Modals, Popovers, or Drawers.
- As a standalone interactive component.
- When the content does not need to appear inside a dropdown surface.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout row, 163 px wide with a fixed height per size; carries the state background or focus border. |
| Content slot | Required (empty by default) | Figma slot that fills the area inside the padding and accepts any content. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 163 px (all variants) | Variant dimensions |
| Height | 44 px (LG), 36 px (MD), 22 px (SM), fixed | Design context |
| Padding — LG | `space/16` horizontal, `space/12` vertical | Variable bindings |
| Padding — MD | `space/8` | Variable binding |
| Padding — SM | `space/4` | Variable binding |
| Gap | `gap/sm` (8) | Variable binding |
| Slot area — LG | 131 × 20 px | Layer dimensions |
| Corner radius | None | Design context |
| Focus border | 2 px `border/focus` (`width/2`) | Variable bindings |

The slot fills the width and height inside the padding in every size.

## Semantics

Evidence-based interpretation: Each row is one selectable option; `Selected` marks the chosen option and `Disabled` an unavailable one. The meaning of the content depends on what is placed in the slot.

Not verified in Figma: HTML elements, ARIA roles, selected and disabled semantics, and screen-reader announcements.

## Variants (Properties)

The inventory below is complete: all 18 variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| LG | 44 px high; 16/12 px padding. | Default |
| MD | 36 px high; 8 px padding. | — |
| SM | 22 px high; 4 px padding. | — |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | `background/canvas`. | All sizes |
| Hovered | `background/interactive/hovered`. | All sizes |
| Pressed | `background/interactive/pressed`. | All sizes |
| Focused | `background/canvas` with a 2 px `border/focus` border. | All sizes |
| Selected | `background/selected`. | All sizes |
| Disabled | `background/disabled`. | All sizes |

### Property

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| No content | Row with an empty content slot. | Only value |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Available option. | `background/canvas`. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered`. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed`. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border. | State variants |
| Selected | Selected appearance. | `background/selected`. | State variants |
| Disabled | Unavailable appearance. | `background/disabled`. | State variants |

The states change only the row background or border; content placed in the slot is not restyled by the component. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Default, Focused | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | Hovered, Pressed | Variable binding |
| Background | `background/selected` | Selected | Variable binding |
| Background | `background/disabled` | Disabled | Variable binding |
| Border | `border/focus`, `width/2` | Focused | Variable binding |
| Spacing | `space/16`, `space/12`, `space/8`, `space/4`, `gap/sm` | Padding and gap | Variable binding |

Current behavior compared with the sibling `.Dropdown icon + text`:

- The disabled state is named `Disabled` here and `Disable` in `.Dropdown icon + text`.
- The focus border width is bound to `width/2` here and to `focus/width` in `.Dropdown icon + text`; both resolve to 2 px.
- Heights are fixed here; in `.Dropdown icon + text` they result from padding and content.

## Interaction

Observed states: Default, Hovered, Pressed, Focused, Selected and Disabled for all sizes. No prototype interactions were inspected.

Not verified in Figma: selection behavior and keyboard navigation.

## Accessibility

Mandatory requirements
- All interactive elements inside the container must be keyboard accessible.
- Focus must move correctly into the dropdown when opened and remain visible throughout interaction.
- Embedded controls must meet WCAG AA requirements for contrast and interaction states.

Recommendations
- Maintain a logical keyboard navigation order.

## Content Guidelines

Verified observation: The slot is empty in all variants, and its size is fixed by the row height and padding (for example, 131 × 20 px in LG). Content larger than the slot area is not accounted for by the component.

## Examples

### Custom option, selected

Configuration: `Size=MD`, `State=Selected`, custom content in the slot

Description: Option row with `background/selected` and designer-supplied content.

Evidence / Classification: Existing variant; slot content is a usage example.

### Compact custom option

Configuration: `Size=SM`, `State=Default`

Description: 22 px row with an empty slot.

Evidence / Classification: Existing variant in Figma.


## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
