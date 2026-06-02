---
component: Accordion
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [expandable, collapsible, content, disclosure]
---

# Accordion

## Purpose

Allows users to toggle visibility of content sections to manage information density and improve interface scannability. Accordion components group related content into collapsible sections, reducing cognitive load by hiding secondary information while maintaining access to details when needed.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Behavior | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| Size | SM, MD | MD |
| State | Default, Disabled, Hovered, Pressed, Focused, Loading | Default |
| Show Badge | true, false | false |
| Show Checkbox | true, false | false |
| Show Left Icon | true, false | false |
| Text | String | Placeholder |

## When to Use

- Group related content into collapsible sections
- Reduce cognitive load by hiding secondary information
- Organize hierarchical information (FAQs, settings, filters)
- Create compact layouts with expandable details
- Organize content in forms with optional sections
- Manage space in dense information layouts
- Support progressive disclosure patterns

## When NOT to Use

- For critical information that must always be visible
- When content is frequently toggled (prefer always-visible layout)
- For single items (use disclosure instead)
- When content relationships require constant visibility
- For primary navigation structures
- When all sections are typically expanded

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Header | Yes | Clickable container with text and controls | Always present |
| Text | Yes | Header label text describing content | Always present |
| Chevron Icon | Yes | Rotating icon indicating expand/collapse state | Always present |
| Content Container | Conditional | Container for expandable content | Only when Behavior=Expanded |
| Checkbox | Conditional | Selection control for header | Only when Show Checkbox=true |
| Badge | Conditional | Indicator badge showing count/status | Only when Show Badge=true |
| Left Icon | Conditional | Icon appearing left of text | Only when Show Left Icon=true |
| Border | Conditional | Bottom border distinguishing sections | Visible in expanded and certain states |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| Behavior | Enum | Collapsed | Collapsed, Expanded | All | Controls whether content is visible. Collapsed shows header only; Expanded shows header and content area |
| Color | Enum | Default | Default, Evergreen, Indigo | All | Applies semantic color theming. Affects text color, borders, and background in interactive states |
| Size | Enum | MD | SM, MD | All | Controls padding and spacing. SM=compact, MD=standard |
| State | Enum | Default | Default, Disabled, Hovered, Pressed, Focused, Loading | All | Visual state affecting background color, borders, and interactivity |
| Show Badge | Boolean | false | true, false | All | Shows/hides badge indicator in header |
| Show Checkbox | Boolean | false | true, false | All | Shows/hides checkbox control before text |
| Show Left Icon | Boolean | false | true, false | All | Shows/hides icon left of text content |
| Text | String | Placeholder | Any string | All | Header label text |

## States

| State | Description | Visual Changes |
|-------|-------------|-----------------|
| Default | Standard accordion state | Canvas background; default border |
| Hovered | Mouse hover state | Interactive/hovered background color |
| Pressed | Active click/press state | Interactive/pressed background color; darker background |
| Focused | Keyboard focus state | Green focus border (2px border/focus) |
| Disabled | Non-interactive state | Disabled background; disabled text color; disabled cursor |
| Loading | Content loading state | Placeholder animation; loading skeleton elements |

## Sizes

| Size | Padding | Height (Collapsed) | Text Size | Badge Size | Spacing | Notes |
|------|---------|-------------------|-----------|------------|---------|-------|
| SM | 8px horizontal, 2px vertical | 24px | 14px (Text/Body/SM) | 10px | 8px gap | Compact layout; reduced spacing |
| MD | 16px horizontal, 8px vertical | 36px | 14px (Text/Body/SM) | 10px | 8px gap | Standard; recommended |

## Token Mapping

### Background

- **State=Default**: background/canvas
- **State=Hovered**: background/interactive/hovered
- **State=Pressed**: background/interactive/pressed
- **State=Disabled**: background/disabled
- **State=Loading**: background/canvas
- **Content area**: background/canvas

### Text

- **Color=Default, State=Default**: text/primary
- **Color=Default, State=Disabled**: text/disabled
- **Color=Evergreen**: text/evergreen
- **Color=Indigo**: text/indigo

### Border

- **Behavior=Collapsed, State=Default**: border/default (bottom)
- **Behavior=Expanded**: border/strong (Color=Default), border/evergreen (Color=Evergreen), border/indigo (Color=Indigo) (bottom)
- **State=Focused**: border/focus (2px, all sides)
- **State=Disabled**: border/disabled

### Icon

- **Chevron down**: Vector icon (12px)
- **Chevron up**: Vector icon (12px)
- **Left Icon**: 16px

### Typography

- **Text**: Text/Body/SM (family/body, weight/regular, size/14, lineHeight/20)
- **Badge**: 10px semibold

### Spacing

- **SM Header padding**: space/8 horizontal, space/2 vertical
- **MD Header padding**: space/16 horizontal, space/8 vertical
- **Content padding**: space/16 (MD), space/8 (SM)
- **Gap between elements**: gap/sm (8px)
- **Content height**: 100px

### Radius

- **Content area**: radius/4

### Shadow

[Pending confirmation]

## Content Containers

The accordion supports different content areas based on size and color combinations:

| Content Type | Applies To | Purpose |
|--------------|-----------|---------|
| Content SM Default | Size=SM, Color=Default, Behavior=Expanded | Compact content area for default color theme |
| Content SM Evergreen | Size=SM, Color=Evergreen, Behavior=Expanded | Compact content area for evergreen theme |
| Content SM Indigo | Size=SM, Color=Indigo, Behavior=Expanded | Compact content area for indigo theme |
| Content MD Default | Size=MD, Color=Default, Behavior=Expanded | Standard content area for default color theme |
| Content MD Evergreen | Size=MD, Color=Evergreen, Behavior=Expanded | Standard content area for evergreen theme |
| Content MD Indigo | Size=MD, Color=Indigo, Behavior=Expanded | Standard content area for indigo theme |

## Accessibility

| Property | Value |
|----------|-------|
| Focus state | Visible green 2px border (border/focus) |
| Keyboard interaction | Space/Enter toggles expanded state; focus management required |
| ARIA attributes | [Pending confirmation] |
| State indication | Visual color and border changes; icon rotation |
| Disabled state | Visually disabled; cursor not-allowed |

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| FAQ Section | Basic accordion for frequently asked questions | Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=false |
| Filter Panel | Accordion with multiple filter options | Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true |
| Settings Group | Grouped settings with badge counter | Behavior=Collapsed, Color=Evergreen, Size=MD, Show Badge=true |
| Compact Form | Space-saving form with optional sections | Behavior=Collapsed, Color=Indigo, Size=SM |
| Active Section | Currently expanded accordion | Behavior=Expanded, State=Default |
| Disabled Accordion | Non-interactive accordion | State=Disabled |
| Loading State | Content loading | State=Loading |

## Invalid Combinations

[Pending confirmation - no explicit invalid combinations documented in source material]

## Interaction Guidelines

- Clicking the header toggles between Collapsed and Expanded states
- In Expanded state, chevron icon points upward; in Collapsed state, points downward
- Focus state applies a green border for keyboard accessibility
- Disabled state prevents all interactions
- Loading state displays skeleton placeholders in content area
- Checkbox can be used independently of expand/collapse behavior
- Badge updates should reflect current state (e.g., count of items)

## Usage Guidelines

- Use accordions to reduce visual density while keeping related content discoverable
- Keep header labels concise so users can scan sections quickly
- Prefer the default size for most layouts and use SM only when space is tight
- Pair badges and checkboxes only when they add clear value to the section
- Avoid deep nesting that makes scanning and keyboard navigation harder

## Implementation Notes

- Preserve the header-first structure so the expanded content remains clearly associated
- Keep focus styling visible for keyboard users, especially in dense lists
- Treat loading as a content placeholder state rather than a separate layout pattern
- Keep the expanded content area consistent across color variants
