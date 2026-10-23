---
component: ".TableHeaderAssets"
system: "Genome Evolution Design System"
type: "Subcomponent (table header cell)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-2096"
last_updated: "2026-10-23"
tags:
  - "table"
  - "table-header"
  - "subcomponent"
---

# .TableHeaderAssets

System: Genome Evolution Design System

## Component Summary

A table header cell building block with a bottom border. It comes as a text header with optional sort-style and filter-style icons, or as an icon-only header.

## Quick Reference

### What It Is

TableHeaderAssets is a subcomponent used to build table column headers. Its purpose is to identify the content of a column and provide contextual controls associated with the data it contains, such as sorting, filtering, or column-specific actions.

The component provides two variants:
- Header: column header with a text label and optional actions.
- Icon Header: compact header represented only by an icon.
- This component is intended exclusively for use within a Table and serves as the main entry point for interactions related to organising and exploring tabular data.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Header, Icon Header | Header (as reported by Figma MCP) |
| First icon (boolean) | true, false | true (as reported by Figma MCP); applies to `Type=Header` only |
| Second icon (boolean) | true, false | true (as reported by Figma MCP); applies to `Type=Header` only |

The boolean property names are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified. The header text and icons are not exposed as text or instance-swap properties. They are changed through layer overrides.

### Default Configuration

Figma MCP reports `Type=Header` with both icons visible. This matches the first variant in the component set (`Type=Header`, node `2192:2097`). No separate written default is documented in Figma.

Verified observation: Inside the `Table` component, the header is configured as `Type=Header` with both icons hidden and the width stretched to the column.

### Typical Usage

Verified observations:

- Used as the first item of each column in the `Table` component, followed by up to ten `.TableCellAssets` rows.
- `Type=Header` shows the column title, an `arrow-down` icon next to it, and a `filter` icon at the right edge.
- `Type=Icon Header` shows a single centered 16 px icon and is 48 px wide, the same width as the `Icon Cell` type of `.TableCellAssets`.

Evidence-based interpretation: Use `Type=Header` to title text columns. Use `Type=Icon Header` above columns built from `Icon Cell` cells. The `arrow-down` and `filter` icons suggest sort and filter affordances, but Figma does not document their behavior.

Recommendation: Use `.TableHeaderAssets` through the `Table` component, and configure it directly only when building or extending table layouts.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: The subcomponent gives every table column a consistent title area, separated from the body by a strong bottom border.

### Expected Outcome

Evidence-based interpretation: Users can identify what each column contains, and may see indicators for sorting or filtering.

### Typical Context

Verified specification: The header row of the `Table` component.

## When to Use

- To label and identify columns in a table.
- When a column supports ascending or descending sorting.
- When a column contains filtering controls.
- To display actions associated with a specific column.
- In tables presenting structured and comparable information.
- When a clear hierarchy between headers and content is required.

## When NOT to Use

- As a general navigation element.
- As a section header outside a table.
- To trigger page-level actions.
- When content is not organised into columns.
- As a replacement for standalone buttons or controls.
- When the information is better represented through cards or alternative display patterns.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | White (`background/canvas`) horizontal frame with a 1 px `border/strong` bottom border. |
| Title | Required (`Header`) | Text layer with placeholder "Header", `Text/Button/MD`, `text/primary`. |
| First icon | Optional | 12 px `arrow-down` icon placed right after the title. Controlled by the first-icon boolean. |
| Second icon | Optional | 12 px `filter` icon placed at the right edge of the header. Controlled by the second-icon boolean. |
| Icon | Required (`Icon Header`) | 16 px `bizagi-lines` icon, centered. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal, vertically centered | Figma auto layout |
| Padding | 16 px horizontal (`space/16`), 8 px vertical (`space/8`) | Variable bindings |
| Gap between title group and second icon | 8 px (`gap/sm`) | Variable binding |
| Gap between title and first icon | 8 px (not bound to a variable) | Auto layout |
| Height | 32 px (both types) | Variant dimensions |
| Width, Header | 230 px in the component set; stretched to the column width inside `Table` | Variant dimensions, `Table` instance |
| Width, Icon Header | 48 px | Variant dimensions |
| Title group | Fills the available width, so the second icon is pushed to the right edge | Auto layout |
| Bottom border | 1 px, `border/strong` | Variable binding |
| Corner radius | 0 (`radius/0`) | Variable binding |
| Icon size | 12 px (`Header`), 16 px (`Icon Header`) | Layer dimensions |

## Semantics

Evidence-based interpretation: Each instance represents the header of one table column. The title names the column's data. The `arrow-down` icon after the title suggests a sort indicator, and the `filter` icon suggests a filter control. These meanings come from the icon names and placement only, and their behavior is not defined.

HTML element (for example, a table header cell), ARIA roles and sort state, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| First icon (`Header`) | `arrow-down`, 12 px, `icon/primary`, after the title | Layer name, dimensions, variable binding |
| Second icon (`Header`) | `filter`, 12 px, `icon/primary`, right edge | Layer name, dimensions, variable binding |
| Icon (`Icon Header`) | `bizagi-lines`, 16 px, `icon/primary`, centered | Layer name, dimensions, variable binding |

The icons are not exposed as instance-swap properties. Variants for other sort directions (for example, an up arrow) do not exist.

## Variants (Properties)

The variant inventory below is complete: 2 variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Header | Title plus optional `arrow-down` and `filter` icons; 230 × 32 px. | Variant layout |
| Icon Header | Single centered 16 px icon; 48 × 32 px. | Variant layout |

### First icon, Second icon

Booleans that show or hide the `arrow-down` and `filter` icons of `Type=Header`. Reported defaults: `true`.

## States

[No documented states found]. The component set has no hover, sorted, filtered, or disabled variants.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Header fill | Variable binding |
| Border | `border/strong` | Bottom border | Variable binding |
| Text | `text/primary` | Title | Variable binding |
| Icon | `icon/primary` | All icons | Variable binding |
| Typography | `Text/Button/MD` | Title (`size/14`, `line-height/16`, `weight/semibold`) | Text style |
| Spacing | `space/16`, `space/8` | Padding | Variable bindings |
| Spacing | `gap/sm` (8) | Gap | Variable binding |
| Radius | `radius/0` | Corners | Variable binding |

## Interaction

No interactive states or prototype interactions exist in the component set.

Not verified in Figma: sorting (trigger, directions, active indicator), filtering (trigger, active indicator), hover or pressed states, and column resizing.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, dividers, and backgrounds.
- Sorting and filtering controls must be keyboard accessible.
- Focus indicators must be clearly visible.
- Headers must be properly associated with their corresponding cells for assistive technologies.
Recommendations
- Provide accessible labels for icons.
- Use column names that remain understandable out of context.

## Content Guidelines

Verified observation: The title is a single line with no wrapping, using the placeholder "Header".

Recommendation: Use short column titles that describe the column's data.

## Examples

### Header as used in Table

Configuration: `Type=Header`, both icons hidden, width stretched to the column

Description: 32 px header with the title "Header" and a strong bottom border.

Evidence / Classification: Existing instance in the `Table` component (`2192:2384`).

### Header with sort and filter icons

Configuration: `Type=Header`, both icons visible

Description: 230 px header with the title, an `arrow-down` icon after it, and a `filter` icon at the right edge.

Evidence / Classification: Existing Figma variant (`2192:2097`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The first-icon and second-icon booleans affect only `Type=Header`.

## Pending Clarification

1. **Sort and filter behavior.** The `arrow-down` and `filter` icons have no states (for example, ascending vs. descending, or active filter) and no documented behavior. Confirm whether they represent sort and filter controls, and which states and interactions developers should implement.
2. **Header text is not a property.** The title is fixed layer text ("Header") with no text property, so every instance requires a manual override. Confirm whether a text property should be added.
3. **Publishing intent.** The leading dot in `.TableHeaderAssets` suggests use only inside other components. Confirm whether designers should use it directly or only through `Table`.
4. **Title font weight.** `Text/Button/MD` declares weight 600, but `weight/semibold` resolves to "Medium". Confirm which weight should be implemented.

## Notes / Changelog

Generated from Figma evidence (node `2192:2096` and its use in `Table`, node `2192:2382`) on 2026-10-23.
