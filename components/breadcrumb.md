---
component: "Breadcrumb"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2998-19525"
last_updated: "2026-10-22"
tags:
  - "breadcrumb"
  - "navigation"
  - "hierarchy"
---

# Breadcrumb

System: Genome Evolution Design System

## Component Summary

Breadcrumb is a horizontal navigation trail built from `.BreadcrumbItem` instances, showing an optional overflow indicator, up to five previous levels and the current location, in Default, Evergreen or Indigo color.

## Quick Reference

### What It Is

The Breadcrumb is a secondary navigation component that displays the user's current location within a hierarchical structure. It helps users understand their navigation context, visualize the path taken, and quickly navigate back to higher levels in the hierarchy.

It is composed of a sequence of levels connected by separators, where the last item represents the current location. When space is limited, intermediate levels can be collapsed using an overflow option.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Default |
| showOverflow (boolean) | true, false | true |
| showLevel5 (boolean) | true, false | true |
| showLevel4 (boolean) | true, false | true |
| showLevel3 (boolean) | true, false | true |
| showLevel2 (boolean) | true, false | true |
| showLevel1 (boolean) | true, false | true |

Defaults are taken from the component property definitions in Figma. The current-location item has no visibility property and is always shown.

### Default Configuration

`Color=Default` with all items visible: Overflow ("…"), five `Level` items ("Text") and one `Current` item ("Text"). In this configuration the breadcrumb is 414 × 36 px.

### Typical Usage

Verified observation: The component set has three variants, one per `Color`. Each variant contains the same seven `.BreadcrumbItem` instances in the same order, controlled by the same six boolean properties.

Evidence-based interpretation:

- Show one `Level` item per ancestor of the current location by turning `showLevel1`–`showLevel5` on or off.
- Turn on `showOverflow` when there are more ancestors than the visible `Level` items can represent.
- Use `Evergreen` or `Indigo` to tint the separators and the current-location label.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Communicates where the user is within a hierarchy and which levels lead to the current location, in a single compact row.

### Expected Outcome

Evidence-based interpretation: Users can identify their current location and the levels above it.

### Typical Context

Specific product contexts are not documented in Figma. The 36 px height and single-row layout indicate placement at the top of a page or view; this is an evidence-based interpretation.

## When to Use

- In applications with multi-level hierarchical structures.
- To help users understand where they are within the product.
- When quick navigation to parent pages or sections is needed.
- In portals, enterprise platforms, content management systems, and complex applications.
- In experiences where the same page can be reached through multiple hierarchical paths.
- When navigation depth exceeds one or two levels.

## When NOT to Use

- In single-page applications or flat structures without hierarchy.
- When primary navigation already clearly communicates the current location.
- To represent sequential workflows or step-by-step processes. Use a Stepper instead.
- As a replacement for the application's primary navigation.
- When items do not represent a true hierarchical relationship.

## Composition and Hierarchy Rules

The following rules are established by the component's structure and properties.

### Item order

The items always appear in this fixed order, from left to right:

| Position | Item | Visibility property | `.BreadcrumbItem` configuration |
|----------|------|---------------------|---------------------------------|
| 1 | Overflow | `showOverflow` | `Item=Overflow` |
| 2 | Level 5 | `showLevel5` | `Item=Level` |
| 3 | Level 4 | `showLevel4` | `Item=Level` |
| 4 | Level 3 | `showLevel3` | `Item=Level` |
| 5 | Level 2 | `showLevel2` | `Item=Level` |
| 6 | Level 1 | `showLevel1` | `Item=Level` |
| 7 | Current | Always visible | `Item=Current` |

Hiding an item removes it from the row, and the remaining items close the gap (auto layout with `gap/none`). The order cannot be changed through properties.

### Hierarchy

- `Current` is always the last item and is always present.
- `Level` items are numbered from the current location outward: `Level 1` sits immediately before `Current`, and `Level 5` is the farthest from it. Evidence-based interpretation: `Level 1` represents the direct parent of the current location, and higher numbers represent higher ancestors.
- Every item except `Current` ends with a `chevron-right` separator, so separators always appear between items and never after the last one.

### Overflow behavior

- `Overflow` is a single "…" item placed at the start of the trail, before all `Level` items.
- Evidence-based interpretation: it represents ancestors above the visible `Level` items that are collapsed.
- Overflow is controlled manually through `showOverflow`; the component does not hide or collapse items automatically based on available width.
- What happens when the overflow item is activated is not defined in Figma.

### Item count

- Minimum: one item (`Current` only, with all boolean properties set to `false`).
- Maximum: seven items (Overflow, five `Level` items and `Current`).

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout row holding the items. |
| Overflow item | Optional (`showOverflow`) | `.BreadcrumbItem` with `Item=Overflow`: "…" plus `chevron-right`. |
| Level items (1–5) | Optional (`showLevel1`–`showLevel5`) | `.BreadcrumbItem` with `Item=Level`: label plus `chevron-right`. |
| Current item | Required | `.BreadcrumbItem` with `Item=Current`: label without a chevron. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal, items vertically centered | Design context |
| Gap between items | `gap/none` (0) | Variable binding |
| Height | 36 px | Variant dimensions |
| Width (all items visible, sample labels) | 414 px; adapts to visible items and labels | Variant dimensions, auto layout |
| Item padding | `space/8` (8) | Variable binding (in `.BreadcrumbItem`) |
| Gap between label and chevron | `gap/sm` (8) | Variable binding (in `.BreadcrumbItem`) |
| Item corner radius | `radius/4` (4) | Variable binding (in `.BreadcrumbItem`) |
| Label typography — Level | `Text/Body/SM` (`size/14`, weight 400, `line-height/20`) | Text style |
| Label typography — Overflow, Current | `Text/Button/MD` (`size/14`, weight 600, `line-height/16`) | Text style |
| Label wrapping | Single line (no wrapping or truncation) | Design context |

The visible spacing between items comes from each item's own padding.

## Semantics

Evidence-based interpretation: The trail represents a hierarchy path. `Current` marks the user's location and is visually emphasized (semibold label, no chevron). `Level` items are ancestors, and `Overflow` stands for collapsed ancestors. `Color` changes the accent color of the separators and the current label; Figma does not document whether it carries meaning.

Not verified in Figma: HTML elements, ARIA roles or attributes (for example, a navigation landmark or marking the current page), link behavior and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Separator | `chevron-right`, 12 px, at the end of every Overflow and Level item | Nested `.BreadcrumbItem` |

Separator color by `Color`: see Variants.

## Variants (Properties)

The inventory below is complete: all three variants were inspected.

### Color

| Value | Level separators | Current label | Overflow item | Level labels |
|-------|------------------|---------------|---------------|--------------|
| Default | `icon/primary` | `text/primary` | "…" `text/primary`, separator `icon/secondary` | `text/secondary` |
| Evergreen | `icon/evergreen` | `text/evergreen` | Unchanged from Default | `text/secondary` |
| Indigo | `icon/indigo` | `text/indigo` | Unchanged from Default | `text/secondary` |

Current behavior: In `Evergreen` and `Indigo`, only the `Level` separators and the `Current` label are recolored. The Overflow item keeps its default colors, and `Level` labels remain `text/secondary`. The colors are applied as overrides on the nested `.BreadcrumbItem` instances, which have no color property of their own.

### showOverflow

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the "…" item at the start of the trail. | Default |
| false | Hides the overflow item. | — |

### showLevel1 – showLevel5

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the corresponding `Level` item in its fixed position. | Default for all five |
| false | Hides the corresponding `Level` item. | — |

## States

The Breadcrumb component set has no state property. All nested `.BreadcrumbItem` instances use `State=Default`. The `.BreadcrumbItem` component defines Default, Hovered, Pressed, Focused and Disabled states (see BreadcrumbItem documentation).

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Spacing | `gap/none` | Gap between items | Variable binding |
| Spacing | `space/8`, `gap/sm` | Item padding and label–chevron gap | Variable binding |
| Radius | `radius/4` | Item corner radius | Variable binding |
| Text | `text/primary` | Current and Overflow labels (Default) | Variable binding |
| Text | `text/secondary` | Level labels | Variable binding |
| Text | `text/evergreen`, `text/indigo` | Current label (Evergreen, Indigo) | Variable binding |
| Icon | `icon/primary` | Level separators (Default) | Variable binding |
| Icon | `icon/secondary` | Overflow separator | Variable binding |
| Icon | `icon/evergreen`, `icon/indigo` | Level separators (Evergreen, Indigo) | Variable binding |
| Typography | `Text/Body/SM`, `Text/Button/MD` | Level labels; Overflow and Current labels | Text styles |

## Interaction

The Breadcrumb has no state variants or prototype interactions. Interactive appearances are defined at the item level in `.BreadcrumbItem`.

Not verified in Figma: navigation behavior when an item is activated, overflow expansion, whether `Current` is interactive, and keyboard interaction.

## Accessibility

- Required: ensure sufficient contrast between text, icons, and background across all color variants (Default, Evergreen, and Indigo).
- Required: all interactive items must be keyboard accessible and provide a visible focus indicator.
- Required: identify the current item using appropriate accessibility attributes (for example, aria-current="page").
- Recommended: use a semantic navigation structure to improve interpretation by assistive technologies.

Missing accessibility information (not verified in Figma): navigation landmark and labeling, current-page indication for assistive technologies, accessible name for the "…" item, how separators are exposed to screen readers, and keyboard support.

## Content Guidelines

Verified observations:

- Labels use "Text" as sample content and the overflow item uses "…".
- Labels are single-line and do not truncate, so the trail width grows with label length.
- The Breadcrumb exposes no text properties; labels are changed by overriding the text layers of the nested items.

## Examples

### Full trail

Configuration: `Color=Default`, all boolean properties `true`

Description: Overflow, five levels and the current location.

Evidence / Classification: Default configuration in Figma.

### Short trail without overflow

Configuration: `Color=Default`, `showOverflow=false`, `showLevel3=false`, `showLevel4=false`, `showLevel5=false`

Description: Two previous levels (`Level 2`, `Level 1`) followed by the current location.

Evidence / Classification: Configuration supported by the component's boolean properties.

### Colored trail

Configuration: `Color=Evergreen`, all boolean properties `true`

Description: Evergreen separators and current label.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | `required` | Ordered breadcrumb items. |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"default"` | Configures the `tone` component property. |
| `showOverflow` | `boolean` | `true` | Configures the `showOverflow` component property. |
| `showLevel1` | `boolean` | `true` | Configures the `showLevel1` component property. |
| `showLevel2` | `boolean` | `true` | Configures the `showLevel2` component property. |
| `showLevel3` | `boolean` | `true` | Configures the `showLevel3` component property. |
| `showLevel4` | `boolean` | `true` | Configures the `showLevel4` component property. |
| `showLevel5` | `boolean` | `true` | Configures the `showLevel5` component property. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Three levels

```tsx
import { Breadcrumb } from "@genome-evolution/react";

<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Settings", href: "/settings" }, { label: "Billing" }]} />;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
