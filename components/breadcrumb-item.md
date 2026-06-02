---
component: .BreadcrumbItem
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-05-27
tags: [navigation, hierarchy, internal-component, breadcrumb]
---

# .BreadcrumbItem

## Purpose

Individual breadcrumb item representing a single step in the navigation hierarchy. Used internally by the Breadcrumb component to build the navigation path. This is an internal component and should not be used directly in interfaces; always use the parent Breadcrumb container instead.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Item | Overflow, Level, Current | Overflow |
| State | Default, Disabled, Hovered, Pressed, Focused | Default |
| Text | String | Text (Level/Current), ... (Overflow) |

## When to Use

- Building custom breadcrumb implementations
- Extending Breadcrumb component with additional item types
- Creating breadcrumb-like navigation patterns
- Developing specialized navigation patterns

## When NOT to Use

- As standalone component in user interfaces (use Breadcrumb parent)
- For items outside breadcrumb navigation context
- When Breadcrumb component can be used directly
- For non-hierarchical navigation

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Item wrapper with padding and border radius | Always present |
| Text Label | Yes | Item text/label content | Always present |
| Separator | Conditional | Chevron icon (trailing) | Only for Overflow and Level items |

## Properties

| Property | Type | Default | Values | Description |
|----------|------|---------|--------|-------------|
| Item | Enum | Overflow | Overflow, Level, Current | Type of breadcrumb item in hierarchy |
| State | Enum | Default | Default, Disabled, Hovered, Pressed, Focused | Visual and interactive state |
| Text | String | Context-dependent | Any string | Item label text |

## Item Types

| Type | Description | Text Display | Separator | Use Case |
|------|-------------|--------------|-----------|----------|
| Overflow | Collapsed indicator | "..." (ellipsis) | Yes (chevron-right) | Root item when showing collapsed breadcrumbs |
| Level | Intermediate hierarchy level | Customizable text | Yes (chevron-right) | Parent levels (Level 2-4 in hierarchy) |
| Current | Current/final page | Customizable text | No | Last item indicating present page location |

## States

| State | Description | Visual Changes | Background | Border |
|-------|-------------|-----------------|-----------|--------|
| Default | Standard item state | Standard colors | Transparent | None |
| Hovered | Mouse hover over item | Light background highlight | interactive/hovered | None |
| Pressed | Active click/press | Darker background | interactive/pressed | None |
| Focused | Keyboard focus via Tab | Green focus border | Transparent | 2px border/focus |
| Disabled | Non-interactive state | Muted text color | Transparent | None |

## Typography

| Item Type | Weight | Style | Size | Line Height | Letter Spacing |
|-----------|--------|-------|------|------------|-----------------|
| Overflow | semibold | Text/Button/MD | 14px | 16px | normal |
| Level | regular | Text/Body/SM | 14px | 20px | 0 |
| Current | semibold | Text/Button/MD | 14px | 16px | normal |

## Token Mapping

### Background

- **State=Default**: Transparent
- **State=Hovered**: background/interactive/hovered
- **State=Pressed**: background/interactive/pressed
- **State=Focused**: Transparent (border only)
- **State=Disabled**: Transparent

### Text Color

- **Overflow, Default**: text/primary
- **Overflow, Disabled**: text/disabled
- **Level, Default/Hovered/Pressed/Focused**: text/secondary
- **Level, Disabled**: text/disabled
- **Current, Default/Hovered/Pressed/Focused**: text/primary
- **Current, Disabled**: text/disabled

### Border

- **State=Focused**: border/focus (2px)
- **State=Default/Hovered/Pressed/Disabled**: None

### Icon (Chevron Separator)

- **Default/Disabled state**: Primary gray icon
- **Hovered/Pressed/Focused state**: Secondary gray icon
- **Icon size**: 12px (width) × 12px (height)
- **Container size**: 12px width × 12.004px height

### Spacing

- **Horizontal padding**: space/8 (8px)
- **Vertical padding**: space/8 (8px)
- **Gap (text to chevron)**: gap/sm (8px)
- **Border radius**: radius/4 (4px)
- **Item height**: 36px

## Interaction States Visual Guide

### Overflow Item
- **Default**: "..." in semibold, primary text, standard chevron
- **Hovered**: Light background with "..."
- **Pressed**: Darker background with "..."
- **Focused**: Green border with "..."
- **Disabled**: "..." in disabled text color, disabled chevron

### Level Item
- **Default**: "Text" in regular, secondary text, standard chevron
- **Hovered**: Light background with "Text"
- **Pressed**: Darker background with "Text"
- **Focused**: Green border with "Text"
- **Disabled**: "Text" in disabled text color, disabled chevron

### Current Item
- **Default**: "Text" in semibold, primary text (no separator)
- **Hovered**: Light background with "Text"
- **Pressed**: Darker background with "Text"
- **Focused**: Green border with "Text"
- **Disabled**: "Text" in disabled text color (no separator)

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| Overflow item | Root ellipsis | Item=Overflow, State=Default |
| Level navigation | Intermediate breadcrumb | Item=Level, State=Default, Text="Products" |
| Current page | Final breadcrumb | Item=Current, State=Default, Text="Electronics" |
| Hovered level | Interactive hover | Item=Level, State=Hovered |
| Focused navigation | Keyboard focus | Item=Level, State=Focused |
| Disabled breadcrumb | Non-interactive | Item=Level, State=Disabled |

## Accessibility

| Property | Value |
|----------|-------|
| Keyboard navigation | Items should be focusable (Tab key) |
| Focus indicator | Visible 2px green border on focus |
| Text color contrast | All text colors meet WCAG AA standards |
| Disabled state | Visually disabled; pointer-events disabled |
| Semantic HTML | Should be implemented as link elements within breadcrumb nav |
| ARIA labels | Should be marked with appropriate breadcrumb ARIA |

## Usage Guidelines

- Do not use as standalone component; use Breadcrumb parent
- Text content should be concise and descriptive
- Maintain consistent styling within breadcrumb paths
- Ensure keyboard accessibility (Tab navigation)
- Use appropriate item type for hierarchy position
- Current item should always be last in breadcrumb
- Provide visual feedback for all interactive states
- Disable items only when necessary (broken links, unavailable sections)

## Implementation Notes

- Component is designed for internal use within Breadcrumb
- Item type and state determine all visual and text presentation
- Chevron separator is hidden for Current item type
- Overflow item shows "..." automatically (no customization)
- Focus border uses 2px solid width
- Background transitions apply to hover and press states
- Text color varies by item type and state combination
- Icon (chevron) color changes based on interaction state