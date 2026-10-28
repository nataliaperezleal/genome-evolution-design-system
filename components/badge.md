---
component: "Badge"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2046-82"
last_updated: "2026-10-22"
tags:
  - "badge"
  - "counter"
  - "status"
---

# Badge

System: Genome Evolution Design System

## Component Summary

Badge is a small pill-shaped label that displays a short value, such as a count, in an outlined (`Line`) or solid (`Filled`) style across eight colors, including status colors.

## Quick Reference

### What It Is

The Badge is a compact component used to display brief information, statuses, categories, labels, or counters associated with an interface element. Its primary purpose is to provide additional context in a quick and visual way without taking up significant space within the experience.

It can be displayed using Filled or Line styles and leverage different color variants to communicate meaning, priority, or status.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Line, Filled | Line |
| Color | Default, Inverse, Information, Warning, Error, Success, Evergreen, Indigo | Default |
| label (text) | Free text | 0 |

Defaults are taken from the component property definitions in Figma. Every `Type` and `Color` combination exists (16 variants).

### Default Configuration

`Type=Line`, `Color=Default`, `label="0"`: a `surface/subtlest` pill with a 1 px `border/default` border and a `text/secondary` label.

### Typical Usage

Verified observation: The component set contains 16 variants, one per combination of `Type` (2 values) and `Color` (8 values). All variants share the same layout and typography and differ only in fill, border and label color.

Evidence-based interpretation:

- Use `Type=Line` for a lighter, outlined badge and `Type=Filled` for a higher-emphasis solid badge.
- Use `Information`, `Warning`, `Error` or `Success` when the value relates to a status, as these colors use the system's status tokens.
- Use `Default`, `Evergreen` or `Indigo` for neutral or brand-colored badges.
- Use `Inverse` on dark surfaces: `Line / Inverse` uses light border and text (`border/inverse`, `text/inverse`) with no fill, and `Filled / Inverse` uses a `background/canvas` fill.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a compact, consistent way to display a short value, such as a count, alongside other UI elements, optionally colored by status.

### Expected Outcome

Evidence-based interpretation: Users can notice a value or status at a glance without it taking much space.

### Typical Context

Evidence-based interpretation: The 14 px height and 10 px label indicate use alongside or inside other components rather than on its own. Specific host components are not documented in the Badge component.

## When to Use

Evidence-based interpretations based on the available variants:

- To display counts or numeric indicators associated with an action or item.
- To indicate the status of a process, record, or entity.
- To highlight relevant information within lists, tables, or cards.
- As a classification or categorization label.
- To communicate semantic states such as information, success, warning, or error.
- When a concise and easily recognizable visual reference is needed.

## When NOT to Use

- To display long text or complex information.
- As a replacement for full notifications, alerts, or messages.
- When the displayed information requires additional explanation to be understood.
- As the sole mechanism for communicating critical information.
- To represent interactive actions when a button or link would be more appropriate.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Pill-shaped auto layout frame that carries the fill and, in `Line`, the border. |
| Label | Required | Centered text layer that displays the `label` property value. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size with default label ("0") | 14 × 14 px | Variant dimensions |
| Width | Adapts to the label (auto layout, no fixed width) | Design context |
| Horizontal padding | `space/4` (4) | Variable binding |
| Vertical padding | `space/0` (0) | Variable binding |
| Gap | `gap/none` (0) | Variable binding |
| Corner radius | `semantic/full` (999) — fully rounded | Variable binding |
| Border (`Type=Line`) | 1 px (width not bound to a variable) | Design context |
| Alignment | Label centered horizontally and vertically | Design context |
| Label typography | `Text/Body/XXS Strong`: `family/body` (Open Sans), `weight/semibold` (600), `size/10`, `line-height/14`, `letter-spacing/normal` | Text style |
| Label wrapping | Single line (no wrapping) | Design context |

## Semantics

Evidence-based interpretation:

- `Information`, `Warning`, `Error` and `Success` convey status, as they are bound to the `info`, `warning`, `danger` and `success` token families. `Error` uses the `danger` tokens.
- `Default`, `Evergreen` and `Indigo` carry no documented status meaning.
- `Inverse` is a contrast variant for dark surfaces, not a status.
- `Filled` gives more visual emphasis than `Line`; Figma does not document a semantic difference between them.

Not verified in Figma: HTML element, ARIA role and how the value is announced by screen readers.

## Variants (Properties)

The inventory below is complete: all 16 variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Line | 1 px border in the color's border token; light or no fill; colored label. | 8 variants |
| Filled | Solid fill in the color's bold surface token; no border; `text/inverse` label (except `Inverse`). | 8 variants |

### Color

| Value | Line (fill / border / label) | Filled (fill / label) |
|-------|------------------------------|-----------------------|
| Default | `surface/subtlest` / `border/default` / `text/secondary` | `surface/raised` / `text/inverse` |
| Inverse | No fill / `border/inverse` / `text/inverse` | `background/canvas` / `text/secondary` |
| Information | `surface/info/subtle` / `border/info` / `text/info` | `surface/info/bold` / `text/inverse` |
| Warning | `surface/warning/subtle` / `border/warning` / `text/warning` | `surface/warning/bold` / `text/inverse` |
| Error | `surface/danger/subtle` / `border/danger` / `text/danger` | `surface/danger/bold` / `text/inverse` |
| Success | `surface/evergreen/subtle` / `border/success` / `text/success` | `surface/success/bold` / `text/inverse` |
| Evergreen | No fill / `border/evergreen` / `text/evergreen` | `surface/evergreen/bold` / `text/inverse` |
| Indigo | No fill / `border/indigo` / `text/indigo` | `surface/indigo/bold` / `text/inverse` |

Current behavior: `Line / Success` uses `surface/evergreen/subtle` as its fill, while its border and label use `success` tokens. `Line / Evergreen`, `Line / Indigo` and `Line / Inverse` have no fill, so the surface behind them shows through.

### label

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Value shown in the badge. "0" in all variants. | Text property |

## States

- **Default:** resting state.
- **Interactive (optional):** badges can be rendered as buttons/tags when used as filters.
- **Disabled (optional):** only when the badge is interactive.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/subtlest`, `surface/raised` | Default fill (Line, Filled) | Variable binding |
| Surface | `background/canvas` | Filled / Inverse fill | Variable binding |
| Surface | `surface/info/subtle`, `surface/info/bold` | Information fill (Line, Filled) | Variable binding |
| Surface | `surface/warning/subtle`, `surface/warning/bold` | Warning fill (Line, Filled) | Variable binding |
| Surface | `surface/danger/subtle`, `surface/danger/bold` | Error fill (Line, Filled) | Variable binding |
| Surface | `surface/evergreen/subtle`, `surface/success/bold` | Success fill (Line, Filled) | Variable binding |
| Surface | `surface/evergreen/bold`, `surface/indigo/bold` | Evergreen and Indigo fill (Filled) | Variable binding |
| Border | `border/default`, `border/inverse`, `border/info`, `border/warning`, `border/danger`, `border/success`, `border/evergreen`, `border/indigo` | Line border by color | Variable binding |
| Text | `text/secondary`, `text/inverse`, `text/info`, `text/warning`, `text/danger`, `text/success`, `text/evergreen`, `text/indigo` | Label color by type and color | Variable binding |
| Spacing | `space/4`, `space/0`, `gap/none` | Padding and gap | Variable binding |
| Radius | `semantic/full` | Corner radius | Variable binding |
| Typography | `Text/Body/XXS Strong` | Label | Text style |

The 1 px border width is a fixed value and is not bound to a variable.

## Interaction

Badge has no state variants and no prototype interactions in Figma. It is presented as a non-interactive display element.

## Accessibility

Accessibility-related observations:

- Required: ensure sufficient contrast between text, border, and background across all color and style variants (Filled and Line).
- Required: when a badge communicates important information, it must also be available to assistive technologies and not rely solely on color.
- Required: if the badge is interactive, it must be keyboard accessible and provide a visible focus indicator.
- Recommended: accompany critical states with descriptive text or supporting iconography.

Missing accessibility information (not verified in Figma): accessible name, how the value and its status are announced to assistive technologies, and text alternatives for color-only status.

## Content Guidelines

Verified observation: All variants show the single character "0". The label does not wrap and the badge grows horizontally with its content.

## Examples

### Neutral count

Configuration: `Type=Line`, `Color=Default`, `label="0"`

Description: Outlined neutral badge with a count.

Evidence / Classification: Existing variant in Figma.

### Error count

Configuration: `Type=Filled`, `Color=Error`, `label="0"`

Description: Solid `surface/danger/bold` badge with an inverse label.

Evidence / Classification: Existing variant in Figma.

### Badge on a dark surface

Configuration: `Type=Line`, `Color=Inverse`, `label="0"`

Description: Outlined badge with light border and label, for dark backgrounds.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tone` | `"default" \| "neutral" \| "primary" \| "info" \| "information" \| "success" \| "warning" \| "danger" \| "error" \| "inverse" \| "evergreen" \| "indigo"` | `"default"` | Semantic styling for the badge. |
| `variant` | `"filled" \| "line" \| "outline"` | `"line"` | Controls the surface style. |
| `icon` | `ReactNode` | `undefined` | Optional leading icon. |
| `children` | `ReactNode` | `"0"` | Badge label. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Semantic tones

```tsx
import { Badge } from "@genome-evolution/react";

<Badge tone="neutral">Borrador</Badge>
<Badge tone="success">Activo</Badge>;
```

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
