---
component: ".TableCellAssets"
system: "Genome Evolution Design System"
type: "Subcomponent (table body cell)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-1922"
last_updated: "2026-10-23"
tags:
  - "table"
  - "table-cell"
  - "subcomponent"
---

# .TableCellAssets

System: Genome Evolution Design System

## Component Summary

A table body cell building block, available as a text cell (up to two lines of text plus an optional icon) or an icon-only cell, in three sizes.

## Quick Reference

### What It Is

Verified specification: `.TableCellAssets` is a component set on the Figma `Table` page. Instances of it make up the body rows of the `Table` component (node `2192:2382`), placed below `.TableHeaderAssets` instances in each column.

Evidence-based interpretation: It is the single cell unit of the table body. The leading dot in its name follows a common Figma convention for building blocks that are meant to be used inside other components rather than placed directly in designs. No written component description was found in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Cell, Icon Cell | Cell (as reported by Figma MCP) |
| Size | Small, Medium, Large | Small (as reported by Figma MCP) |
| Icon (boolean) | true, false | true (as reported by Figma MCP); applies to `Type=Cell` only |
| Title (boolean) | true, false | true (as reported by Figma MCP); applies to `Type=Cell` only |
| Content (boolean) | true, false | true (as reported by Figma MCP); applies to `Type=Cell` only |

The boolean property names are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified. The cell text and the icon are not exposed as text or instance-swap properties. They are changed through layer overrides.

### Default Configuration

Figma MCP reports `Type=Cell`, `Size=Small`, with the icon, title, and content visible. This matches the first variant in the component set (`Type=Cell, Size=Small`, node `2192:1923`). No separate written default is documented in Figma.

Verified observation: Inside the `Table` component, the cell is configured as `Type=Cell`, `Size=Medium`, with the icon and second line hidden and the width stretched to the column.

### Typical Usage

Verified observations:

- Used as the body cell of the `Table` component, one instance per row in each column.
- In `Table`, each column is a vertical stack of one `.TableHeaderAssets` and up to ten `.TableCellAssets` instances. Rows 2–10 and columns 2–10 are toggled with the `Table` component's boolean properties.
- `Type=Cell` shows text with an optional leading icon; `Type=Icon Cell` shows a single centered icon.

Evidence-based interpretation: Use `Type=Cell` for text data, with the second line for supporting detail. Use `Type=Icon Cell` for narrow columns that only need an icon, such as a status or action column. Use the same `Size` across a row so cells align.

Recommendation: Use `.TableCellAssets` through the `Table` component, and configure it directly only when building or extending table layouts.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: The subcomponent gives every table body cell consistent padding, typography, and colors, so tables can be assembled from a single reusable unit.

### Expected Outcome

Evidence-based interpretation: Table rows have uniform spacing and text styles, with an option for a primary line, a secondary line, and a leading icon.

### Typical Context

Verified specification: The body rows of the `Table` component.

## When to Use

Evidence-based interpretation (not documented as official guidance in Figma):

- To build or extend table body rows, either inside `Table` or in custom table layouts.
- `Type=Cell` with `Title` only, for single values.
- `Type=Cell` with `Title` and `Content`, for a value plus supporting detail.
- `Type=Icon Cell`, for columns that hold only an icon.

## When NOT to Use

[No documented restrictions found]

Recommendation (not an established design-system rule): For table headers, use `.TableHeaderAssets`, which is the dedicated header building block used by `Table`.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | White (`background/canvas`) horizontal auto-layout frame. |
| Icon | Optional (`Cell`); Required (`Icon Cell`) | 16 px `bizagi-lines` icon instance. In `Cell`, controlled by the `Icon` boolean. |
| Text frame | `Cell` only | Vertical stack, 174 px wide, holding the title and content lines. |
| Title | Optional | First text line, placeholder "First line content cell", `text/primary`. Controlled by the `Title` boolean. |
| Content | Optional | Second text line, placeholder "Second line content cell", `text/secondary`. Controlled by the `Content` boolean. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal, vertically centered | Figma auto layout |
| Horizontal padding | 16 px (`space/16`), all variants | Variable binding |
| Vertical padding, Small | 4 px (`space/4`) | Variable binding |
| Vertical padding, Medium | 8 px (`space/8`) | Variable binding |
| Vertical padding, Large | 16 px (`space/16`) | Variable binding |
| Gap | 8 px (`gap/sm`) | Variable binding |
| Corner radius | 0 (`radius/0`) | Variable binding |
| Cell width (`Type=Cell`) | 230 px fixed in the component set; stretched to the column width inside `Table` | Variant dimensions, `Table` instance |
| Text frame width | 174 px fixed | Layer dimensions |
| Cell height with two lines | Small 36 px, Medium 44 px, Large 60 px | Variant dimensions |
| Icon Cell size | 48 × 24 px (Small), 48 × 32 px (Medium), 48 × 48 px (Large); icon centered | Variant dimensions |
| Icon size | 16 × 16 px | Layer dimensions |

No border or divider is part of the cell. In `Table`, only the header building block has a bottom border.

## Semantics

Evidence-based interpretation: Each instance represents one data cell in a table body row. The title is the primary value, and the content line is secondary information about it. `Icon Cell` represents a cell whose value is an icon.

HTML element (for example, a table data cell), ARIA roles, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon (`Cell`) | `bizagi-lines` instance, 16 px, `icon/primary` | Layer and variable bindings |
| Icon (`Icon Cell`) | `bizagi-lines` instance, 16 px, centered, `icon/primary` | Layer and variable bindings |

The icon is a placeholder instance. It is not exposed as an instance-swap property, so it is replaced through a nested instance override.

## Variants (Properties)

The variant inventory below is complete: 6 variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Cell | Optional icon plus up to two lines of text; 230 px wide. | Variant layout |
| Icon Cell | Single centered 16 px icon; 48 px wide. | Variant layout |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Small | 4 px vertical padding. | Variable binding |
| Medium | 8 px vertical padding. | Variable binding |
| Large | 16 px vertical padding. | Variable binding |

Text uses `Text/Body/XXS` (10/14) in all sizes. Only the vertical padding changes.

### Icon, Title, Content

Booleans that show or hide the leading icon, first line, and second line of `Type=Cell`. Reported defaults: `true`.

## States

[No documented states found]. The component set has no interaction, selection, or disabled variants.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Cell fill | Variable binding |
| Text | `text/primary` | Title line | Variable binding |
| Text | `text/secondary` | Content line | Variable binding |
| Icon | `icon/primary` | Icon | Variable binding |
| Typography | `Text/Body/XXS` | Title and content | Text style |
| Spacing | `space/16`, `space/8`, `space/4` | Padding | Variable bindings |
| Spacing | `gap/sm` (8) | Gap between icon and text | Variable binding |
| Radius | `radius/0` | Cell corners | Variable binding |

## Interaction

No interactive states or prototype interactions exist in the component set.

Not verified in Figma: row hover, row selection, sorting, cell editing, truncation behavior, and click behavior of icons.

## Accessibility

Accessibility-related observations:

- The title (`text/primary`) and content (`text/secondary`) lines use distinct text tokens to set their hierarchy.
- All text is 10 px (`Text/Body/XXS`).
- The `Icon Cell` has no text, so its meaning depends on the icon alone.

Missing accessibility information (not verified in Figma): table semantics, header-to-cell association, accessible names for icon-only cells, keyboard navigation, and contrast compliance.

## Content Guidelines

Verified observation: Placeholder texts are "First line content cell" and "Second line content cell". The text frame is a fixed 174 px wide.

Recommendation: Keep cell content short. Truncation and wrapping rules are not defined in Figma.

## Examples

### Cell as used in Table

Configuration: `Type=Cell`, `Size=Medium`, `Icon=false`, `Title=true`, `Content=false`, width stretched to the column

Description: Single line of primary text with 16 px horizontal and 8 px vertical padding (30 px high).

Evidence / Classification: Existing instance in the `Table` component (`2192:2385`).

### Two-line cell with icon

Configuration: `Type=Cell`, `Size=Large`, all booleans `true`

Description: 60 px high cell with a leading icon, a primary line, and a secondary line.

Evidence / Classification: Existing Figma variant (`2192:1933`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The `Icon`, `Title`, and `Content` booleans affect only `Type=Cell`. The `Icon Cell` always shows its icon.

## Pending Clarification

1. **Cell text is not a property.** The title and content texts are fixed layer text ("First line content cell" / "Second line content cell") with no text properties. Every instance requires manual overrides. Confirm whether text properties should be added.
2. **Fixed text width inside a narrower column.** The text frame is fixed at 174 px. Inside `Table`, the cell is stretched to a 129 px column, so the text frame is wider than the cell. Confirm the intended behavior (fill width, truncate, or wrap).
3. **Row alignment between Cell and Icon Cell.** At the same `Size`, a two-line `Cell` is taller than an `Icon Cell` (for example, 36 px vs. 24 px for `Small`). Confirm how cells of different types should align within a row.
4. **Publishing intent.** The leading dot in `.TableCellAssets` suggests the component is meant to be used only inside other components. Confirm whether it is intended for direct use by designers or only through `Table`, since this affects how it is published and documented.

## Notes / Changelog

Generated from Figma evidence (node `2192:1922` and its use in `Table`, node `2192:2382`) on 2026-10-23.

[No verified historical changes available]
