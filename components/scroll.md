---
component: "Scroll"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2146"
last_updated: "2026-10-23"
tags:
  - "scrollbar"
  - "layout"
  - "navigation"
---

# Scroll

System: Genome Evolution Design System

## Component Summary

Scroll is a thin scrollbar with a rounded track and thumb, available in vertical and horizontal orientations and two thicknesses.

## Quick Reference

### What It Is

Evidence-based interpretation: a visual scrollbar that indicates scrollable content and the visible portion of it. The component set (Figma node `2191:2146`) consists of a pill-shaped light track and a darker pill-shaped thumb ("Bar") that fills the first half of the track. No written component description is defined for Scroll in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Orientation | Vertical, Horizontal | Vertical |
| Size | Small, Regular | Small |

### Default Configuration

The component property defaults exposed by Figma are `Orientation=Vertical` and `Size=Small`. This corresponds to variant `2191:2147`, the top-left variant of the component set: a 4px-wide, 272px-tall vertical scrollbar.

### Typical Usage

Verified observations:

- `Size=Small` is 4px thick; `Size=Regular` is 8px thick.
- Vertical variants are 272px tall; horizontal variants are 278px wide.
- The thumb always fills the first half of the track; its length and position are not exposed as properties.

Evidence-based interpretation:

- Place a vertical scrollbar along the right edge of scrollable panels, lists, or tables, and a horizontal scrollbar along the bottom edge of horizontally scrollable content.
- Use `Small` in compact components (for example, dropdowns or narrow panels) and `Regular` in larger content areas.
- Resize the scrollbar and adjust the thumb to match the scrollable content when used in mockups.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need to know that content extends beyond the visible area and roughly how much of it they are seeing.

### Expected Outcome

Evidence-based interpretation: the user recognizes that the area can scroll and sees the relative position and size of the visible portion.

### Typical Context

Evidence-based interpretation: scrollable panels, dropdown menus, lists, tables, and modals with long content.

## When to Use

Evidence-based interpretations, derived from the structure and properties:

- To show a consistent, styled scrollbar on scrollable content.
- To indicate vertical (`Orientation=Vertical`) or horizontal (`Orientation=Horizontal`) scrolling.

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Scroll in Figma. As a recommendation only: do not show a scrollbar on content that does not scroll.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Track | Required | Pill-shaped container with a `surface/subtlest` background. |
| Thumb | Required | Pill-shaped `surface/subtle` bar (layer "Bar") at the start of the track, filling half of its length. |
| Spacer | Required | Transparent-looking segment (layer "Empty", same color as the track) that fills the other half. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Thickness | 4px (`Small`); 8px (`Regular`); fixed minimum and maximum | Direct measurement |
| Length | 272px (vertical); 278px (horizontal) | Direct measurement |
| Radius | Fully rounded (999px) on track and thumb | `semantic/full` |
| Padding | 0px | `space/0` |
| Gap | 0px | `gap/none` |
| Thumb length | Half of the track (thumb and spacer share the length equally) | Figma auto layout |
| Overflow | Clipped | Figma layer |

## Semantics

Evidence-based interpretation:

- The track represents the full scrollable length; the thumb represents the visible portion and its position.
- `Orientation` represents the scroll direction.

Not verified in Figma: scrollbar role, value attributes, and whether this component replaces or styles the native browser scrollbar.

## Variants (Properties)

The variant inventory is complete: 4 variants (2 `Orientation` × 2 `Size`). All variants were inspected.

### Orientation

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Vertical | 272px tall; thumb at the top. | Default; variants `2191:2147`, `2191:2150` |
| Horizontal | 278px wide; thumb at the left. | Variants `2191:2153`, `2191:2156` |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Small | 4px thick. | Default; variants `2191:2147`, `2191:2153` |
| Regular | 8px thick. | Variants `2191:2150`, `2191:2156` |

## States

Scroll has no state variants (for example, hover, active, or dragging).

## Token Mapping

All tokens below are verified as Figma variables used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/subtlest` | Track and spacer | Figma variables |
| Color — surface | `surface/subtle` | Thumb | Figma variables |
| Radius | `semantic/full` | Track and thumb (fully rounded) | Figma variables |
| Spacing | `space/0` | Padding | Figma variables |
| Spacing | `gap/none` | Gap | Figma variables |

Not bound to tokens: the 4px and 8px thicknesses and the 272px and 278px lengths.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Scroll has no interactive state variants.
- Evidence-based interpretation: the thumb moves as content scrolls and may be dragged. Thumb sizing, dragging, hover feedback, auto-hide, and scroll behavior are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- The thumb (`surface/subtle`) has 1.28:1 contrast against the track and 1.36:1 against white, below the common 3:1 threshold for non-text UI elements.
- The track (`surface/subtlest`) is nearly indistinguishable from white (1.06:1).
- `Small` is 4px thick, which offers a very small target if the thumb is meant to be dragged.

Missing accessibility information: whether the scrollbar is interactive, keyboard scrolling, and minimum target size.

## Content Guidelines

Scroll contains no text. Content guidance is not applicable.

## Examples

### Vertical scrollbar in a compact list

Configuration: `Orientation=Vertical`, `Size=Small`

Description: a 4px scrollbar along the right edge of a dropdown or narrow panel.

Evidence / Classification: existing Figma configuration (variant `2191:2147`).

### Horizontal scrollbar for a wide table

Configuration: `Orientation=Horizontal`, `Size=Regular`

Description: an 8px scrollbar along the bottom of a wide table.

Evidence / Classification: existing Figma configuration (variant `2191:2156`); usage context is a recommendation.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. Thumb size and position. The thumb is always half of the track and at the start; neither its length nor its position can be set through properties. Confirm how designers should represent different scroll positions and content lengths.
2. Low contrast. The thumb is 1.28:1 against the track and 1.36:1 against white, and the track is nearly invisible on white. Confirm whether stronger colors are needed.
3. Missing states and behavior. There are no hover, active, or dragging states, and auto-hide behavior is not defined. Confirm whether these are needed and whether the scrollbar replaces the native browser scrollbar.
4. Fixed length. Vertical and horizontal variants have fixed lengths (272px and 278px). Confirm whether the scrollbar should stretch to fill its scrollable container.

## Notes / Changelog

Generated from Figma evidence (component set `2191:2146`) on 2026-10-23.

[No verified historical changes available]
