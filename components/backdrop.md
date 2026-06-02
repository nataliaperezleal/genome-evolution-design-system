---
component: Backdrop
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [overlay, modal, underlay, focus]
---

# Backdrop

## Purpose

Provides a semi-transparent overlay layer that darkens or lightens background content, commonly used with modals, dropdowns, and other overlays to establish visual hierarchy and focus. The backdrop creates a scrim effect that reduces background visual complexity and directs user attention to primary content.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Color | White, Black | Black |

## When to Use

- Darken background when displaying modal dialogs
- Create focus on overlay content (dropdowns, popovers, tooltips)
- Reduce visual clutter by desaturating background
- Establish visual separation between layers
- Improve contrast for floating content
- Disable background interaction during modal interaction
- Create layered visual hierarchy

## When NOT to Use

- For permanent page backgrounds
- When full background interaction is required
- Without accompanying overlay component
- For simple hover states without modal
- When accessibility requires background content visibility
- As decorative element without functional purpose

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Overlay Container | Yes | Semi-transparent background layer | Always present |
| Blur Effect | Yes | Backdrop blur applied to content behind | Always present |

## Properties

| Property | Type | Default | Values | Description |
|----------|------|---------|--------|-------------|
| Color | Enum | Black | White, Black | Controls overlay color. Black creates dark overlay; White creates light overlay |

## Visual Specifications

| Attribute | Value |
|-----------|-------|
| Width | 182px |
| Height | 131px |
| Backdrop Blur | 8px |
| Opacity | 60% (0.6) |
| Overflow | clip |

## States

[Only one visual state exists; no interactive states]

## Colors

| Color | Overlay Value | Hex (Reference) | Use Case |
|-------|---------------|-----------------|----------|
| Black | overlay/black | rgba(76,87,78,0.6) | Dark tint; modals, standard overlays |
| White | overlay/white | rgba(247,248,247,0.6) | Light tint; light theme overlays, subtle backgrounds |

## Token Mapping

### Background

- **Color=Black**: overlay/black (rgba(76,87,78,0.6))
- **Color=White**: overlay/white (rgba(247,248,247,0.6))

### Effects

- **Blur**: backdrop-blur-8px
- **Overflow**: clip (prevents blur artifacts at edges)

## Accessibility

| Property | Value |
|----------|-------|
| Color contrast | Semi-transparent overlays; verify contrast with underlying content |
| Opacity | 60% maintains some background visibility; sufficient for modal context |
| Focus management | Backdrop does not receive focus; focus should be on modal content |
| Keyboard navigation | Backdrop typically non-interactive; underlying modal handles interactions |

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| Modal Dialog | Standard dark overlay for modal | Color=Black |
| Light Theme Modal | Subtle overlay for light interfaces | Color=White |
| Dropdown Scrim | Background darkening for dropdown menus | Color=Black |
| Popover Underlay | Focus-establishing overlay for popovers | Color=Black |
| Toast Background | Semi-transparent background for toast notifications | Color=Black |

## Usage Guidelines

- Always pair backdrop with modal, dropdown, or other overlay component
- Ensure backdrop covers entire viewport or intended area
- Black is recommended for most use cases
- White should be used in light-themed interfaces
- Backdrop blur effect maintains slight visibility of background content
- Consider backdrop as non-interactive layer; handle interactions in overlay component above

## Implementation Notes

- Backdrop should be positioned absolutely or fixed behind overlay content
- Z-index must be lower than overlay component but higher than main page content
- Blur effect may impact performance on lower-end devices; consider optimization
- Opacity level (60%) balances focus with background visibility
