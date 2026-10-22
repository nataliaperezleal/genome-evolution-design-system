---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2041-81"
last_updated: "2026-10-22"
tags:
  - "backdrop"
  - "overlay"
  - "layering"
---

# Backdrop

System: Genome Evolution Design System

## Component Summary

Backdrop is a semi-transparent, blurred overlay surface available in a dark (`Black`) and a light (`White`) color.

## Quick Reference

### What It Is

The Backdrop is an overlay layer displayed behind temporary or modal components to visually dim background content and direct the user's attention to an active foreground element. Its primary purpose is to establish visual hierarchy, reduce distractions, and communicate that the main interaction is occurring in the foreground.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Black, White | Black |

The default is taken from the component property definition in Figma.

### Default Configuration

`Color=Black`: a fill of `overlay/black` (#4C574E at 60% opacity) with an 8 px background blur.

### Typical Usage

Verified observation: The component set has two variants, `Color=Black` and `Color=White`, which differ only in fill. Both have no content, no corner radius (`radius/0`) and an 8 px background blur.

Evidence-based interpretation:

- `Color=Black` dims the content behind it.
- `Color=White` lightens the content behind it.
- Because the component has no content of its own, it is used as a layer underneath other components rather than on its own.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Reduces the visual prominence of the underlying content so that content displayed above the backdrop stands out.

### Expected Outcome

Evidence-based interpretation: The underlying content remains partially visible but dimmed or lightened and blurred, and attention moves to the content placed on top.

### Typical Context

The components that use Backdrop are not documented in Figma.

## When to Use

- Behind modal dialogs.
- For drawers, side panels, or slide-out panels.
- During processes that temporarily block interaction with the interface.
- To highlight high-priority content that requires immediate attention.
- As visual support for overlays, popups, or focus-driven experiences.
- When it is necessary to communicate a temporary change in interaction context.

## When NOT to Use

- To visually separate sections within a page.
- As a replacement for containers, cards, or content surfaces.
- When interaction with background content must remain available.
- To emphasize permanent interface elements.
- When the foreground component does not require visual priority or contextual blocking.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Overlay surface | Required | Single rectangular frame with the overlay fill and background blur. It has no child layers. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Component dimensions | 182 × 131 px | Variant dimensions (both variants) |
| Corner radius | `radius/0` (0) | Variable binding |
| Background blur | 8 px | Design context (not bound to a variable) |
| Overflow | Clipped | Design context |

The component does not use auto layout. Figma does not define resizing constraints; the 182 × 131 px size is the size of the component as published.

## Semantics

Evidence-based interpretation: Backdrop is a decorative layer that separates layers of content. It contains no text, icons or interactive elements, so it carries no content meaning of its own. The difference between `Black` and `White` is visual (darkening or lightening).

Not verified in Figma: HTML element, ARIA role, and whether the backdrop hides the underlying content from assistive technologies.

## Variants (Properties)

The inventory below is complete: both variants were inspected.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Black | Fill `overlay/black` (#4C574E, 60% opacity); 8 px background blur. | Default |
| White | Fill `overlay/white` (#F7F8F7, 60% opacity); 8 px background blur. | — |

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Overlay | `overlay/black` | Fill, `Color=Black` | Variable binding |
| Overlay | `overlay/white` | Fill, `Color=White` | Variable binding |
| Radius | `radius/0` | Corner radius | Variable binding |

The 8 px background blur is a fixed value and is not bound to a variable.

## Interaction

Backdrop has no state variants and no prototype interactions in Figma. Whether interacting with the backdrop has any effect (for example, dismissing content above it) is not defined in Figma.

## Accessibility

- Required: maintain sufficient contrast between the active content and the backdrop to ensure readability.
- Required: when used with modal components, keyboard focus must remain within the active content until it is dismissed.
- Required: provide visible focus indicators for interactive elements displayed in the foreground.
- Recommended: avoid opacity levels that make contextual changes difficult to perceive for users with low vision.

Missing accessibility information (not verified in Figma): how focus and assistive-technology access to the underlying content are handled while the backdrop is shown.

## Examples

### Dark backdrop

Configuration: `Color=Black`

Description: Dims and blurs the content behind it.

Evidence / Classification: Existing variant in Figma.

### Light backdrop

Configuration: `Color=White`

Description: Lightens and blurs the content behind it.

Evidence / Classification: Existing variant in Figma.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
