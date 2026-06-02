---
component: Breadcrumb
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [navigation, hierarchy, breadcrumb, wayfinding]
---

# Breadcrumb

## Purpose

Shows the user's current location within a navigational hierarchy. Displays breadcrumbs as a path of links, allowing users to understand the page structure and navigate back through hierarchical levels. Provides context and enables quick navigation to parent pages.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Color | Default, Evergreen, Indigo | Default |
| Show Overflow | true, false | true |
| Show Level 1-5 | true, false | true (all levels shown) |

## When to Use

- Show current page location in hierarchical structures
- Enable navigation backwards through hierarchy levels
- Provide context for deeply nested pages
- Show page relationships in multi-level navigation
- Reduce clicks needed to navigate to parent pages
- Clarify position in complex information architectures
- Create wayfinding context in large applications

## When NOT to Use

- For flat navigation (single level only)
- When primary navigation is sufficient
- For small applications with no hierarchy
- On landing pages or main index pages
- When space is extremely limited
- As replacement for main navigation
- For marketing websites without hierarchy

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Horizontal container for breadcrumb items | Always present |
| Breadcrumb Item | Yes | Individual level in hierarchy | At least one (current page) |
| Text Label | Yes | Level or page name | Always present in item |
| Separator | Conditional | Chevron icon between items | Between non-final items |
| Overflow Item | Conditional | Ellipsis (...) for collapsed levels | When Show Overflow=true |
| Current Item | Yes | Final item showing current page | Always last item |

## Properties

| Property | Type | Default | Values | Description |
|----------|------|---------|--------|-------------|
| Color | Enum | Default | Default, Evergreen, Indigo | Semantic color for current page item |
| Show Overflow | Boolean | true | true, false | Shows/hides overflow item (...) for collapsed levels |
| Show Level 1 | Boolean | true | true, false | Shows/hides first level (root) |
| Show Level 2 | Boolean | true | true, false | Shows/hides second level |
| Show Level 3 | Boolean | true | true, false | Shows/hides third level |
| Show Level 4 | Boolean | true | true, false | Shows/hides fourth level |
| Show Level 5 | Boolean | true | true, false | Shows/hides fifth level (current) |

## Hierarchy Levels

| Level | Position | Role | Example |
|-------|----------|------|---------|
| Overflow | First (if shown) | Collapsed indicator | ... |
| Level 1 | Root | Home or category root | Products |
| Level 2 | Secondary | First category | Electronics |
| Level 3 | Tertiary | Second category | Computers |
| Level 4 | Quaternary | Third category | Laptops |
| Level 5 | Current | Current page | MacBook Pro |

## Item States

| Item Type | Description | Visual |
|-----------|-------------|--------|
| Overflow | Collapsed levels indicator | "..." in semibold |
| Level | Intermediate hierarchy level | Text + chevron separator |
| Current | Final/current page location | Text (no trailing separator) |

## Color Variants

| Color | Current Text | Level Text | Separator | Use Case |
|-------|--------------|-----------|-----------|----------|
| Default | text/primary | text/secondary | Default chevron | Neutral, default styling |
| Evergreen | text/evergreen | text/secondary | Evergreen chevron | Success, positive context |
| Indigo | text/indigo | text/secondary | Indigo chevron | Primary, branded context |

## Token Mapping

### Text

- **Overflow item**: Text/Button/MD (semibold, 14px)
- **Level items**: Text/Body/SM (regular, 14px)
- **Current item**: Text/Button/MD (semibold, 14px)
- **Color=Default, Current**: text/primary
- **Color=Evergreen, Current**: text/evergreen
- **Color=Indigo, Current**: text/indigo
- **Level items**: text/secondary (all colors)

### Icons

- **Separator**: chevron-right (12px)
- **Icon color matches current text color**

### Spacing

- **Horizontal padding**: space/8 per item
- **Vertical padding**: space/8 per item
- **Gap between text and chevron**: gap/sm (8px)
- **Gap between items**: No gap (chevron is separator)

### Radius

- **Item background**: radius/4

### Typography

- **All text**: family/body
- **Overflow/Current**: weight/semibold
- **Levels**: weight/regular
- **Size**: size/14
- **Line height**: line-height/16 (overflow/current), line-height/20 (levels)
- **Letter spacing**: letter-spacing/normal

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| E-commerce path | Product hierarchy | Overflow > Level 1 > Level 2 > Level 3 > Current |
| Full hierarchy | All levels shown | Level 1 > Level 2 > Level 3 > Level 4 > Level 5 |
| Collapsed path | Deep hierarchy reduced | Overflow > Level 1 > Level 4 > Current |
| Two-level navigation | Simple structure | Level 1 > Current |
| Branded path | Evergreen theme | Color=Evergreen, Level 1 > Level 2 > Current |

## Accessibility

| Property | Value |
|----------|-------|
| Semantic HTML | Should use <nav> with proper markup |
| ARIA attributes | [Pending confirmation] |
| Keyboard navigation | Items should be keyboard accessible (Tab key) |
| Focus indicator | Visible focus ring on breadcrumb items |
| Screen reader | Should announce breadcrumb structure and current page |
| Link elements | Breadcrumb items should be keyboard interactive links |

## Usage Guidelines

- Always show the current page as the last item
- Use semantic color matching your page context
- Ellipsis (...) represents hidden parent levels
- Keep breadcrumb text concise and descriptive
- Ensure items are keyboard navigable
- Use consistent breadcrumb positioning (typically top of main content)
- Consider hiding breadcrumbs on small screens (responsive behavior)
- Each item should link to its corresponding page
- Avoid breadcrumbs for single-level structures

## Implementation Notes

- Breadcrumb container uses flexbox with no gap between items
- Separator (chevron) is part of each item except the last
- Overflow item shows "..." automatically when enabled
- Color variant affects only the current page item appearance
- Items are typically clickable links (implement with proper href)
- Last item is often not clickable (current page indicator)
- Responsive design should hide levels or use overflow on smaller screens
