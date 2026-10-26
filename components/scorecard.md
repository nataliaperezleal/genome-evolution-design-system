---
component: "Scorecard"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.0"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2125"
last_updated: "2026-10-23"
tags:
  - "data-display"
  - "metric"
  - "kpi"
---

# Scorecard

System: Genome Evolution Design System

## Component Summary

Scorecard displays a single prominent value with a short description, in two sizes, with the description either below or above the value.

## Quick Reference

### What It Is

The Scorecard component is a compact card used to highlight a key metric, indicator, or important value together with a short description. It enables quick visual consumption of quantitative or qualitative information and supports easy comparison of key indicators across dashboards, reports, monitoring panels, and executive views.

The component provides variants in which the value can be displayed either above or below the description, depending on the desired visual hierarchy.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | SM, MD | SM |
| Style | Top value, Bottom value | Top value |

The value and description texts are not exposed as properties.

### Default Configuration

The component property defaults exposed by Figma are `Size=SM` and `Style=Top value`. This corresponds to variant `2191:2126`, the top-left variant of the component set: a 24px value above a 10px description.

### Typical Usage

Verified observations:

- `Size=SM` uses a 24px regular value; `Size=MD` uses a 36px semibold value. The description is 10px in both sizes.
- `Style=Top value` places the value above the description; `Style=Bottom value` places the description above the value.
- The card width adjusts to its content.
- The value ("Value") and description ("Description") are fixed text that can only be changed by overriding the text layers.

Evidence-based interpretation:

- Use Scorecard in dashboards, summaries, or reports to highlight key figures.
- Use `MD` for primary metrics and `SM` for secondary metrics or dense layouts.
- Use `Top value` when the number is the focus, and `Bottom value` when the description works as a heading for the number.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need to read key figures quickly without scanning tables or charts.

### Expected Outcome

Evidence-based interpretation: the user notices the value immediately and understands what it measures from the description.

### Typical Context

Evidence-based interpretation: dashboards, report summaries, and overview pages.

## When to Use

- To display Key Performance Indicators (KPIs).
- In executive and analytical dashboards.
- To highlight business, process, or compliance metrics.
- When information needs to be quickly scanned and understood.
- To compare results across categories, teams, or periods.
- In summary pages where users need a high-level overview of performance.
- To display counts, percentages, monetary amounts, statuses, or aggregated results.

## When NOT to Use

- To present large amounts of detailed information.
- When the content requires extensive explanation or multiple attributes.
- To display complex trends without additional visual support.
- When advanced interaction or data editing is required.
- As a replacement for detailed tables or reports.
- When values lack sufficient context for interpretation.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | White container with an 8px radius and padding; no border or shadow. |
| Value | Required | Large primary text. Default text: "Value". |
| Description | Required | Small secondary text. Default text: "Description". |

Neither text can be hidden; no visibility properties are exposed.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Vertical stack | Figma auto layout |
| Gap | 0px | `gap/none` |
| Radius | 8px | `radius/8` |
| Padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Size — `SM` | 76 × 58px (with default text) | Direct measurement |
| Size — `MD` | 127 × 78px (with default text) | Direct measurement |
| Width | Hugs content | Figma auto layout |
| Alignment — `Top value` | Content and text centered | Figma auto layout |
| Alignment — `Bottom value` | Content aligned to the start (left); description text centered within its line | Figma auto layout |

## Semantics

Evidence-based interpretation:

- The value is the key figure; the description explains what the figure represents.
- `Style` changes only the reading order (value first or description first), not the meaning.

Not verified in Figma: semantic structure (for example, heading or definition list), how the value and description are associated for assistive technology, and number formatting.

## Variants (Properties)

The variant inventory is complete: 4 variants (2 `Size` × 2 `Style`). All variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| SM | Value 24px regular (`Text/Heading/MD`); 8px × 4px padding. | Default; variants `2191:2126`, `2191:2129` |
| MD | Value 36px semibold (`Text/Heading/XL Semibold`); 16px × 8px padding. | Variants `2191:2132`, `2191:2135` |

### Style

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Top value | Value above description; centered. | Default; variants `2191:2126`, `2191:2132` |
| Bottom value | Description above value; aligned to the start. | Variants `2191:2129`, `2191:2135` |

## States

Scorecard has no state variants.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Container background | Figma variables |
| Color — text | `text/primary` | Value | Figma variables |
| Color — text | `text/secondary` | Description | Figma variables |
| Radius | `radius/8` | Container radius | Figma variables |
| Spacing | `space/16`, `space/8`, `space/4` | Padding | Figma variables |
| Spacing | `gap/none` | Gap | Figma variables |
| Typography | `Text/Heading/MD` | Value (`SM`, 24/36 regular) | Figma text style |
| Typography | `Text/Heading/XL Semibold` | Value (`MD`, 36/48 semibold) | Figma text style |
| Typography | `Text/Body/XXS` | Description (10/14) | Figma text style |

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Scorecard has no interactive elements or state variants.

## Accessibility

Mandatory requirements
- Contrast between the value, description, and background must meet WCAG AA requirements.
- Critical information must not rely solely on size, colour, or font weight.
- Any associated interactive element must be keyboard accessible and provide a visible focus state.
Recommendations
- Supplement important metrics with clear descriptive labels.
- Maintain a consistent structure to support assistive technologies.
- Provide additional context when values may be ambiguous on their own.

## Content Guidelines

Verified observations:

- Default content is "Value" and "Description"; both are placeholders.
- Text does not wrap in `SM`.

Recommendations:

- Keep the value short, such as a number with a unit or symbol.
- Write a short description that names the metric.

## Examples

### Primary metric

Configuration: `Size=MD`, `Style=Top value`

Description: a large number with its description below, for the main figure in a dashboard.

Evidence / Classification: existing Figma configuration (variant `2191:2132`).

### Compact labeled metric

Configuration: `Size=SM`, `Style=Bottom value`

Description: a small metric with its description above the number.

Evidence / Classification: existing Figma configuration (variant `2191:2129`).

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. Component name: Scorecard, matching the name used in Figma.
2. Fixed text. "Value" and "Description" are not exposed as text properties and cannot be hidden. Confirm whether text properties (and optionally visibility toggles, units, or trend indicators) should be added.
3. Value weight. The value is regular in `SM` and semibold in `MD`. Confirm whether this weight difference is intended.
4. Alignment. `Top value` is centered, while `Bottom value` is aligned to the start. Confirm the intended alignment for each style.
5. Card separation. The card is white with no border or shadow, so it is invisible on white backgrounds. Confirm whether it should have a border, shadow, or a different background.

## Notes / Changelog

Generated from Figma evidence (component set `2191:2125`) on 2026-10-23.

[No verified historical changes available]
