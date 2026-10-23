---
component: "Table"
system: "Genome Evolution Design System"
type: "Data display (composite)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-2382"
last_updated: "2026-10-23"
tags:
  - "table"
  - "data-display"
  - "composite"
---

# Table

System: Genome Evolution Design System

## Component Summary

A configurable grid of up to 10 columns and 10 body rows, built from `.TableHeaderAssets` header cells and `.TableCellAssets` body cells. Columns, rows, and the header are shown or hidden with boolean properties.

## Quick Reference

### What It Is

The Table is a data display component that organises information into rows and columns to support comparison, review, and analysis of multiple records. It is composed of column headers (TableHeaderAssets) and content cells (TableCellAssets), allowing structured information to be presented in a clear and scalable way.

Headers may include sorting indicators, filters, and other contextual controls associated with a column. Cells can contain single-line or multi-line content, icons, and additional supporting elements depending on the data being displayed.
Its purpose is to help users efficiently browse, compare, and manage large amounts of information.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Show header (boolean) | true, false | true (as reported by Figma MCP) |
| Column 2 … Column 10 (booleans, one per column) | true, false | false (as reported by Figma MCP) |
| Row 2 … Row 10 (booleans, one per row) | true, false | false (as reported by Figma MCP) |

The property names are listed as exposed through Figma MCP (`showHeader`, `column2`–`column10`, `row2`–`row10`); their exact display names in the Figma properties panel were not verified. Column 1 and row 1 have no toggle and are always visible.

### Default Configuration

Figma MCP reports the header on and all column and row toggles off. The component therefore shows one column with a header and one body row, matching the component as rendered in Figma ("Header" above "First line content cell").

### Typical Usage

Verified observations:

- Turn on `Column N` to add columns 2–10 to the right of column 1, in fixed order.
- Turn on `Row N` to add body rows 2–10 below row 1, in fixed order. Each row toggle controls that row in every column, so all visible columns always have the same number of rows.
- Edit the header and cell text through layer overrides. Neither subcomponent exposes text properties.

Evidence-based interpretation: Use Table to present a small, fixed set of records (up to 10 × 10) in a design.

Recommendation: For more than 10 rows or columns, or for sortable, scrollable, or paginated data, the behavior must be designed separately, because Table does not define it.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Table gives designers a ready-made, token-based table with consistent header and cell styling, without building grids by hand.

### Expected Outcome

Evidence-based interpretation: Users can read data organized in labeled columns and rows, with a clearly separated header row.

### Typical Context

Evidence-based interpretation: Screens that list records, settings, or comparisons in tabular form.

## When to Use

- To display structured datasets in rows and columns.
- When users need to compare information across multiple records.
- In administrative, operational, analytical, or tracking interfaces.
- To present search results, inventories, cases, processes, or reports.
- When data needs to be sorted, filtered, or scanned quickly.
- In experiences where data alignment and comparison are important.

## When NOT to Use

- When displaying a single piece of information or very small datasets.
- For narrative content or long-form reading experiences.
- When information requires a highly customised or free-form layout.
- In mobile experiences where the number of columns compromises readability and no responsive strategy exists.
- When the content consists primarily of actions rather than data.
- To represent complex relationships that are better communicated through charts or diagrams.

## Structure (Anatomy)

### Composition hierarchy

```
Table
└── Column container ×10 (column 1 always visible; columns 2–10 toggled)
    ├── .TableHeaderAssets ×1 (toggled by Show header in column 1; see Pending Clarification)
    └── .TableCellAssets ×10 (row 1 always visible; rows 2–10 toggled)
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Column container | Column 1 required; columns 2–10 optional | Vertical stack holding one header and the body cells of that column. |
| Header cell | Optional | `.TableHeaderAssets`, `Type=Header`, both icons hidden, stretched to the column width. |
| Body cell | Row 1 required; rows 2–10 optional | `.TableCellAssets`, `Type=Cell`, `Size=Medium`, title line only, stretched to the column width. |

### Child-component relationships

- `.TableHeaderAssets` provides the column title, the 14 px semibold text style, and the `border/strong` bottom border that separates the header from the body.
- `.TableCellAssets` provides body cells with 16 px horizontal and 8 px vertical padding and 10 px text (`Text/Body/XXS`, `text/primary`).
- Table itself adds no fills, borders, dividers, or spacing. All visual styling comes from the two subcomponents.

### Ordering logic

- Columns are arranged left to right in fixed order (column 1, then 2–10). A column can be hidden, but columns cannot be reordered through properties.
- Rows are arranged top to bottom in fixed order (header, row 1, then rows 2–10).
- Row toggles are shared across columns. For example, `Row 4` shows the fourth body cell in every visible column.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Column direction | Columns placed horizontally, top-aligned | Auto layout |
| Row direction | Vertical stack within each column, no gap | Auto layout |
| Column 1 width | 129 px | Layer dimensions |
| Columns 2–10 width | 148 px each | Layer dimensions |
| Table width (default) | 148 px, with column 1 centered | Layer dimensions |
| Header height | 32 px | Instance dimensions |
| Body row height | 30 px (single line, `Size=Medium`) | Instance dimensions |
| Table height (default) | 62 px (header + one row) | Layer dimensions |
| Gaps between cells or columns | None | Auto layout |
| Row dividers | None; only the header has a bottom border | Subcomponent styling |

## Semantics

Evidence-based interpretation: The first row is the column header row and the remaining rows are data rows. Each body cell belongs to the column whose header is above it.

HTML table semantics, header-to-cell association, ARIA roles, and screen-reader behavior: Not verified in Figma.

## Variants (Properties)

Table has no variant properties. It has 19 boolean properties.

### Show header

Shows or hides the header row. Reported default: `true`. Inside the component, this toggle is wired only to the column 1 header. Columns 2–10 always show their header when visible (see Pending Clarification).

### Column 2 … Column 10

Each boolean shows or hides one column container, including its header and body cells. Reported default: `false`.

### Row 2 … Row 10

Each boolean shows or hides one body row across all columns. Reported default: `false`.

## States

[No documented states found]. Table and its subcomponents have no hover, selected, sorted, loading, empty, or disabled states.

## Token Mapping

Table binds no tokens of its own. These tokens come from its child components and were verified through Figma variable bindings.

| Category | Token | Verified Usage | Source |
|----------|-------|----------------|--------|
| Background | `background/canvas` | Header and cell fill | Both subcomponents |
| Border | `border/strong` | Header bottom border | `.TableHeaderAssets` |
| Text | `text/primary` | Header title and cell text | Both subcomponents |
| Typography | `Text/Button/MD` | Header title (14/16) | `.TableHeaderAssets` |
| Typography | `Text/Body/XXS` | Cell text (10/14) | `.TableCellAssets` |
| Spacing | `space/16`, `space/8`, `gap/sm` | Cell and header padding and gap | Both subcomponents |
| Radius | `radius/0` | Square corners | Both subcomponents |

Exception: the row 6 cells in columns 2–10 use unbound values (see Pending Clarification).

## Interaction

No prototype interactions or interactive states exist.

Not verified in Figma: navigation patterns (keyboard movement between cells, focus order), sorting and filtering (the header icons are hidden in Table), row selection, row hover, pagination, scrolling, column resizing, and responsive behavior.

## Overflow behavior

Verified observations:

- Table defines no scrolling, pagination, or truncation.
- Inside each body cell, the text frame is a fixed 174 px wide, which is wider than the 129 px and 148 px columns. Text is not clipped by a defined rule.
- The root frame reports a 148 px width in the default configuration. How the table width responds when columns 2–10 are turned on was not verified.

Not verified in Figma: text truncation, wrapping, horizontal scrolling for many columns, and behavior beyond 10 rows.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, dividers, and backgrounds.
- Provide keyboard access to interactive elements such as sorting, filtering, row selection, or actions.
- Display clear focus indicators on headers and interactive controls.
- Correctly associate column headers and cells for assistive technologies.
Recommendations
- Use descriptive column labels that remain understandable out of context.
- Maintain a semantic table structure for screen reader compatibility.
- Provide accessible names for sorting and filtering controls.

## Content Guidelines

Verified observation: Placeholder texts are "Header" and "First line content cell". Text is edited through layer overrides on each instance.

Recommendations:

- Keep column titles short.
- Keep cell content to a single short line, since the cells used in Table show the title line only and no truncation rule is defined.

## Examples

### Default table

Configuration: `Show header=true`, all column and row toggles `false`

Description: One column with a header ("Header") and one body row ("First line content cell").

Evidence / Classification: Existing Figma component (`2192:2382`).

### 3 × 4 table

Configuration: `Show header=true`, `Column 2=true`, `Column 3=true`, `Row 2=true`, `Row 3=true`, `Row 4=true`

Description: Three columns with headers and four body rows each.

Evidence / Classification: Recommendation based on the component's boolean properties; not an existing Figma example.

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: Columns cannot be added after column 10, and rows cannot be added after row 10, without detaching or extending the component.

## Pending Clarification

1. **Row 6 in columns 2–10 uses a different, unstyled cell.** In columns 2–10, the row 6 cell is an instance of a different main component than `.TableCellAssets`, with unbound values: white 12 px text (18 px line height) on a white background. When `Row 6` is turned on, the text in those columns is invisible, and token changes will not reach them. Confirm that these instances should be replaced with `.TableCellAssets`.
2. **Show header controls only column 1.** The header toggle hides the header in column 1 only. Columns 2–10 always show their header, so turning the header off with more than one column produces a misaligned table. Confirm the intended behavior.
3. **Inconsistent column widths.** Column 1 is 129 px wide, while columns 2–10 are 148 px. The root frame is 148 px with column 1 centered. Confirm the intended column width and how the table should grow as columns are added.
4. **Overflow and text fitting.** The cell text frame is fixed at 174 px, wider than any column, and no truncation, wrapping, or scrolling is defined. Confirm how long content and larger tables should behave.
5. **Missing interaction patterns.** Table has no row hover, selection, sorting, or pagination, and the header's sort and filter icons are hidden. Confirm whether these patterns are out of scope for this component or still need to be designed.

## Notes / Changelog

Generated from Figma evidence (node `2192:2382`, its child components `.TableHeaderAssets` `2192:2096` and `.TableCellAssets` `2192:1922`) on 2026-10-23.
