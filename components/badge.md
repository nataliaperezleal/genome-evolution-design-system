---
component: Badge
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [indicator, label, status, tag]
---

# Badge

## Purpose

Displays count, status, or category labels in a compact, visually distinct format. Badges provide quick visual feedback and labeling across UI elements, communicating status, counts, and semantic meaning at a glance.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Type | Filled, Line | Line |
| Color | Default, Evergreen, Indigo, Inverse, Information, Warning, Error, Success | Default |
| Label | Text/numeric | 0 |

## When to Use

- Display notification count or status indicators
- Show category tags or labels
- Indicate status (new, updated, error, success)
- Mark items with semantic meaning (warnings, alerts)
- Highlight actionable status changes
- Group related labels in compact space
- Provide quick visual feedback without disrupting layout

## When NOT to Use

- For long descriptive text (max ~2-3 characters)
- When detailed information is needed
- As primary action element
- For loading states (use dedicated spinner)
- When accessibility requires longer form text
- For interactive content (badges are read-only)

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Rounded pill-shaped container | Always present |
| Background | Yes | Colored background (filled) or transparent (line) | Always present |
| Border | Conditional | Colored border | Only for Type=Line |
| Text Label | Yes | Badge text content | Always present |

## Properties

| Property | Type | Default | Values | Description |
|----------|------|---------|--------|-------------|
| Type | Enum | Line | Filled, Line | Style variant. Filled=solid background; Line=outlined with border |
| Color | Enum | Default | Default, Evergreen, Indigo, Inverse, Information, Warning, Error, Success | Semantic color indicating status or meaning |
| Label | String | 0 | Any text (0-3 chars recommended) | Badge content text |

## Color Palette

| Color | Background | Border | Text | Use Case |
|-------|-----------|--------|------|----------|
| Default | surface/raised | border/default | text/inverse (Filled), text/primary (Line) | Neutral status; default badges |
| Evergreen | surface/evergreen/bold | icon/evergreen | text/inverse (Filled), text/evergreen (Line) | Success, positive, active status |
| Indigo | surface/indigo/bold | border/indigo | text/inverse (Filled), text/indigo (Line) | Primary, branded, important status |
| Inverse | background/canvas | icon/inverse | text/secondary | Inverted/light backgrounds |
| Information | surface/info/bold | icon/info | text/inverse (Filled), text/info (Line) | Information, helpful, informational |
| Warning | surface/warning/bold | border/warning | text/inverse (Filled), text/warning (Line) | Caution, warning, attention needed |
| Error | surface/danger/bold | icon/danger | text/inverse (Filled), text/danger (Line) | Error, danger, critical status |
| Success | surface/success/bold | icon/success | text/inverse (Filled), text/success (Line) | Success, confirmed, positive |

## Type Styles

| Type | Background | Border | Text Color |
|------|-----------|--------|-----------|
| Filled | Semantic color (bold) | None | text/inverse |
| Line | surface/subtlest (Default) or semantic subtle | semantic color | Matching semantic text color |

## Token Mapping

### Background

- **Type=Filled, Color=Default**: surface/raised
- **Type=Filled, Color=Evergreen**: surface/evergreen/bold
- **Type=Filled, Color=Indigo**: surface/indigo/bold
- **Type=Filled, Color=Information**: surface/info/bold
- **Type=Filled, Color=Warning**: surface/warning/bold
- **Type=Filled, Color=Error**: surface/danger/bold
- **Type=Filled, Color=Success**: surface/success/bold
- **Type=Filled, Color=Inverse**: background/canvas
- **Type=Line, Color=Default**: surface/subtlest
- **Type=Line, Color=Evergreen**: surface/evergreen/subtle
- **Type=Line, Color=Information**: surface/info/subtle
- **Type=Line, Color=Warning**: surface/warning/subtle
- **Type=Line, Color=Error**: surface/danger/subtle
- **Type=Line, Color=Success**: surface/evergreen/subtle

### Text

- **Type=Filled**: text/inverse
- **Type=Line, Color=Default**: text/primary
- **Type=Line, Color=Evergreen**: text/evergreen
- **Type=Line, Color=Indigo**: text/indigo
- **Type=Line, Color=Inverse**: text/inverse
- **Type=Line, Color=Information**: text/info
- **Type=Line, Color=Warning**: text/warning
- **Type=Line, Color=Error**: text/danger
- **Type=Line, Color=Success**: text/success

### Border

- **Type=Line, Color=Default**: border/default
- **Type=Line, Color=Evergreen**: icon/evergreen
- **Type=Line, Color=Indigo**: border/indigo
- **Type=Line, Color=Inverse**: icon/inverse
- **Type=Line, Color=Information**: icon/info
- **Type=Line, Color=Warning**: border/warning
- **Type=Line, Color=Error**: icon/danger
- **Type=Line, Color=Success**: icon/success

### Typography

- **Label**: Text/Label/XS (family/body, weight/semibold, size/11, lineHeight/16, letterSpacing/wide)

### Spacing

- **Horizontal padding**: space/4 (4px)
- **Vertical padding**: space/0 (0px)
- **Border radius**: 350px (fully rounded pill shape)

## States

[No interactive states; badges are read-only elements]

## Sizes

| Dimension | Value |
|-----------|-------|
| Height | Auto (fitted to text) |
| Width | Auto (fitted to text + padding) |
| Min Width | ~20px |
| Border Radius | 350px (pill shape) |
| Font Size | 11px |
| Line Height | 16px |

## Accessibility

| Property | Value |
|----------|-------|
| Text contrast | High contrast text on background; verify WCAG AA |
| Semantic color | Do not rely on color alone; label text must convey meaning |
| Disabled state | No disabled state; use opacity reduction if needed |
| Focus state | Badges are not focusable; no keyboard interaction |

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| Notification count | Unread message count | Type=Filled, Color=Default, Label="5" |
| Success indicator | Confirmed action | Type=Filled, Color=Success, Label="✓" |
| Warning tag | Alert/caution status | Type=Line, Color=Warning, Label="!" |
| Info label | New feature indicator | Type=Line, Color=Information, Label="New" |
| Error state | Error condition | Type=Filled, Color=Error, Label="!" |
| Active tag | Active status | Type=Line, Color=Evergreen, Label="Active" |
| Draft status | Work in progress | Type=Line, Color=Default, Label="Draft" |
| Important badge | Branded/primary status | Type=Filled, Color=Indigo, Label="Important" |

## Usage Guidelines

- Keep labels short (0-3 characters recommended; max 5 characters)
- Use semantic colors to convey meaning
- Pair color with icon or text for clarity (don't rely on color alone)
- Combine badges with other UI elements (buttons, lists, cards)
- Use Filled for prominent status; Line for secondary
- Ensure sufficient contrast between text and background
- Position badges near relevant content
- Use consistent styling within feature areas

## Implementation Notes

- Badge does not receive keyboard focus
- Badge is not interactive; place within interactive element if action needed
- Consider responsive behavior for small screens
- Text truncation not recommended; use shorter labels
