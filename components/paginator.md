---
component: "Paginator"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-1106"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "pagination"
  - "data-display"
---

# Paginator

System: Genome Evolution Design System

## Component Summary

Paginator provides pagination controls in three types: a page-size selector with an item range, a page-number input, and a set of page-number buttons, each with first, previous, next, and last navigation icons.

## Quick Reference

### What It Is

The Paginator component enables navigation through large datasets divided into multiple pages, allowing users to browse information efficiently without overwhelming the interface. It provides mechanisms to navigate between pages, jump directly to a specific page, or control the number of items displayed per page.

The component offers three main variants:
- Page Size + Range: displays the current result range, total item count, and a selector to define the number of items displayed per page.
- Input: allows navigation through paging controls combined with an input field where users can directly enter a page number.
- Numbers: displays visible page numbers for direct navigation, complemented by first, previous, next, and last page controls.

Within the design system, the Numbers variant (Type 2) is most commonly used in business applications because it provides a clear visual indication of the user's current position within the result set.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Page size + Range, Input, Numbers | Page size + Range |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| showPages | true, false | true |

`State` values other than `Default` exist only for `Type=Input` and `Type=Numbers`.

### Default Configuration

The component property defaults exposed by Figma are `Type=Page size + Range`, `State=Default`, and `showPages=true`. This corresponds to variant `2185:1107`, the top-left variant of the component set: "Show items:" with a page-size selector showing "15", the range "1 - 15 of 100", and the four navigation icons.

### Typical Usage

Verified observations:

- `Page size + Range` shows the page-size selector (controlled by `showPages`), the item range, and navigation icons, 24px tall.
- `Input` shows the navigation icons around a box with the current page ("0") and total pages ("/ 0"), 32px tall.
- `Numbers` shows the navigation icons around three page buttons ("1", "2", "3"), with "3" highlighted as the current page, 31px tall.
- The page-size selector is a nested instance of the Input component.
- All text in Paginator (page size, range, page numbers, totals) is fixed in the component and is not exposed as properties.

Evidence-based interpretation:

- Use `Page size + Range` below or above a table to let users choose how many items to show and see which items are visible.
- Use `Input` when there are many pages and users may want to jump to a specific page, and `Numbers` when there are few pages.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: large data sets need to be split into pages, with a way to move between pages, choose the page size, and see the current position.

### Expected Outcome

Evidence-based interpretation: the user sees which items are shown, changes the page size, and moves to the first, previous, next, last, or a specific page.

### Typical Context

Evidence-based interpretation: below or above tables, lists, and search results.

## When to Use

- To navigate large data tables.
- In lists of cases, processes, users, documents, or reports.
- When a large amount of information must be divided into pages.
- To improve perceived performance by loading subsets of data.
- In enterprise applications where users need awareness of their location within the dataset.
- When users need quick access to specific pages.
- In grids, tables, galleries, or search results.

## When NOT to Use

- When the number of items is small enough to fit in a single view.
- For short lists that do not require content segmentation.
- When infinite scrolling or progressive loading is the primary interaction pattern.
- For navigation between process steps (use a Stepper or Wizard).
- When content updates continuously and pagination may create inconsistencies.
- For filtering or sorting content (use filtering and sorting controls instead).

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| First-page icon | Required | `first-page`, 12px. |
| Previous icon | Required | `chevron-left`, 12px. |
| Next icon | Required | `chevron-right`, 12px. |
| Last-page icon | Required | `last-page`, 12px. |
| Page-size selector | Optional (`showPages`); `Page size + Range` only | "Show items:" label and a nested Input instance (24px tall) showing "15" with a `chevron-down` icon. |
| Range text | Required in `Page size + Range` | "1 - 15 of 100". |
| Page input box | `Input` only | Bordered box containing a rounded number field ("0") and the total ("/ 0"). |
| Page buttons | `Numbers` only | Bordered box containing three 23px page cells ("1", "2", "3"); the current page ("3") has a border and selected background. |

In `Page size + Range`, the order is: page-size selector, range, first, previous, next, last. In `Input` and `Numbers`, the page box is between the previous and next icons.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Gap — `Page size + Range` | 24px | `gap/xl` |
| Gap — `Input`, `Numbers` | 16px | `gap/lg` |
| Root padding | 0px | `space/0` |
| Height | 24px (`Page size + Range`); 32px (`Input`); 31px (`Numbers`) | Direct measurement |
| Width | 339px (`Page size + Range`); about 166px (`Input`); about 197px (`Numbers`) | Direct measurement |
| Navigation icon size | 12 × 12px | Direct measurement |
| Page box padding | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Page box radius | 4px | `spread/md` |
| Page box gap | 4px (`Input`); 0px (`Numbers`) | `gap/xxs`; `gap/none` |
| Page box border | 1px | Direct measurement |
| `Input` number field | 24px tall; 8px × 4px padding; 8px radius; 1px border | Direct measurement; `spread/lg` |
| `Numbers` page cell | 23 × 23px; 4px padding; 4px radius | Direct measurement; `spread/md` |
| Page-size label gap | 8px | Direct measurement |

## Semantics

Evidence-based interpretation:

- The four icons represent going to the first, previous, next, and last page.
- The range text represents which items are visible out of the total ("1 - 15 of 100").
- In `Input`, the number field represents the current page and "/ 0" the total number of pages.
- In `Numbers`, each cell represents a page, and the highlighted cell represents the current page.

Not verified in Figma: navigation landmark, button roles, `aria-current="page"`, accessible names for the icons, and how the page-size selector is exposed.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| First page | `first-page`, 12px | Figma layers |
| Previous | `chevron-left`, 12px | Figma layers |
| Next | `chevron-right`, 12px | Figma layers |
| Last page | `last-page`, 12px | Figma layers |
| Page-size selector | `chevron-down`, 12px (inside the nested Input) | Figma layers |

In `Disabled`, the navigation icons use separate, lighter icon assets. The icons are not exposed as instance-swap properties.

## Variants (Properties)

The variant inventory is complete: 11 variants (`Page size + Range` in `Default` only; `Input` and `Numbers` in all five states). All variants were inspected. The boolean property name is listed as exposed by the Figma MCP.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Page size + Range | Page-size selector, range text, and navigation icons. | Default; `State=Default` only; variant `2185:1107` |
| Input | Navigation icons around a current-page / total-pages box. | Variants `2185:1116`, `2190:1674`, `2190:1756`, `2186:1234`, `2190:1661` |
| Numbers | Navigation icons around three page cells, with the current page highlighted. | Variants `2185:1125`, `2190:1779`, `2190:1795`, `2186:1247`, `2190:1811` |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting control. | `Input`, `Numbers`, `Page size + Range` |
| Hovered | Page box uses hovered background and border. | `Input`, `Numbers` |
| Pressed | Page box (and the current page cell in `Numbers`) uses pressed background and border. | `Input`, `Numbers` |
| Focused | Page box border (and the number field in `Input`, the current cell in `Numbers`) uses `border/focus`. | `Input`, `Numbers` |
| Disabled | Muted backgrounds, borders, text, and icons. | `Input`, `Numbers` |

### showPages

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows "Show items:" and the page-size selector. | Default; `Page size + Range` only |
| false | Hides the page-size selector; the range and icons remain. | Boolean property |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | Page box: `background/canvas` (`Input`), `border/default`; current page cell: `background/selected`, `border/selected` | Variants `2185:1116`, `2185:1125` |
| Hovered | Pointer over the control | Page box: `background/interactive/hovered`, `border/interactive/hovered`; `Input` number field border changes too | Variants `2190:1674`, `2190:1779` |
| Pressed | Being activated | Page box: `background/interactive/pressed`, `border/interactive/pressed`; `Numbers` current cell uses the same pressed colors | Variants `2190:1756`, `2190:1795` |
| Focused | Has focus | `border/focus` on the page box and on the `Input` number field or `Numbers` current cell | Variants `2186:1234`, `2186:1247` |
| Disabled | Unavailable | `background/disabled`, `border/disabled`, `text/disabled`; lighter icons | Variants `2190:1661`, `2190:1811` |

These states apply to the control as a whole. There are no state variants for individual navigation icons or page cells, and the navigation icons do not change at the first or last page. Transitions and the conditions that trigger each state are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Page box (`Input` Default and Focused); page cells | Figma variables |
| Color — surface | `background/interactive/hovered` | Page box (`Hovered`) | Figma variables |
| Color — surface | `background/interactive/pressed` | Page box and `Numbers` current cell (`Pressed`) | Figma variables |
| Color — surface | `background/selected` | `Numbers` current cell | Figma variables |
| Color — surface | `background/disabled` | Page box and cells (`Disabled`) | Figma variables |
| Color — border | `border/default` | Page box and number field (`Default`) | Figma variables |
| Color — border | `border/interactive/hovered`, `border/interactive/pressed` | Page box and number field (`Hovered`, `Pressed`) | Figma variables |
| Color — border | `border/focus` | `Focused` borders | Figma variables |
| Color — border | `border/selected` | `Numbers` current cell | Figma variables |
| Color — border | `border/disabled` | `Disabled` borders | Figma variables |
| Color — text | `text/primary` | Range, page numbers, label | Figma variables |
| Color — text | `text/secondary` | Page-size value ("15") in the nested Input | Figma variables |
| Color — text | `text/disabled` | Text (`Disabled`) | Figma variables |
| Color — icon | `icon/primary`, `icon/disabled` | Used by the component set (navigation icons); exact layer binding not inspected | Figma variables |
| Spacing | `gap/xl`, `gap/lg`, `gap/xxs`, `gap/none`, `space/8`, `space/4`, `space/0` | Gaps and padding (see Layout) | Figma variables |
| Radius | `spread/md`, `spread/lg` | Page box and cells (4px); `Input` number field (8px) | Figma variables |
| Typography | `Text/Body/XXS` | Label, range, page numbers, totals (10/14) | Figma text style |
| Typography | `Text/Button/SM` | `Numbers` current page (12/16 semibold) | Figma text style |

Not bound to tokens: the 1px borders, the 23px page cell size and 4px cell padding, the `Input` number field padding, and the 8px gap in the page-size selector. Corner radius uses `spread/...` variables rather than the `radius/...` or `semantic/...` variables used for radius in other components.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hovered`, `Pressed`, `Focused`, and `Disabled` for `Input` and `Numbers`.
- Evidence-based interpretation: the navigation icons move between pages, the page input accepts a page number, page cells select a page, and the page-size selector changes the number of items per page. These behaviors are not defined in Figma.

## Accessibility

Mandatory requirements
- All navigation controls must be keyboard accessible.
- Visible focus indicators must clearly identify the active control.
- Disabled states must be communicated visually and programmatically.
- Contrast between controls, text, and backgrounds must meet WCAG AA requirements.
Recommendations
- Expose the current page and total page count through accessible attributes when possible.
- Provide descriptive labels for actions such as "First page", "Previous page", "Next page", and "Last page".
- Maintain a logical keyboard navigation order.

## Content Guidelines

Verified observations:

- Content is fixed: "Show items:", "15", "1 - 15 of 100", "0", "/ 0", and "1", "2", "3"; all are placeholders that can only be changed by overriding the text layers.
- The range follows the format "first - last of total".

Recommendations:

- Keep the range format consistent ("1 - 15 of 100").
- Offer a short list of page-size options in the selector.

## Examples

### Table footer with page size

Configuration: `Type=Page size + Range`, `State=Default`, `showPages=true`

Description: page-size selector, item range, and navigation icons below a table.

Evidence / Classification: existing Figma configuration (variant `2185:1107`).

### Jump to page

Configuration: `Type=Input`, `State=Default`

Description: navigation icons with a current-page / total-pages input.

Evidence / Classification: existing Figma configuration (variant `2185:1116`).

### Few pages

Configuration: `Type=Numbers`, `State=Default`

Description: navigation icons with page buttons and a highlighted current page.

Evidence / Classification: existing Figma configuration (variant `2185:1125`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: `Type=Page size + Range` exists only with `State=Default`, so its other states cannot be selected in Figma. `showPages` affects only `Page size + Range`.

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `page` | `number` | `required` | Current page (1-based). |
| `pageCount` | `number` | `required` | Total pages. |
| `onPageChange` | `(page: number) => void` | `required` | Change handler. |
| `type` | `"page-size-range" \| "input" \| "numbers"` | `"numbers"` | Configures the `type` component property. |
| `showPages` | `boolean` | `true` | Configures the `showPages` component property. |
| `pageSize` | `number` | `15` | Configures the `pageSize` component property. |
| `totalItems` | `number` | `100` | Configures the `totalItems` component property. |
| `onPageSizeChange` | `(pageSize: number) => void` | `undefined` | Configures the `onPageSizeChange` component property. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Pagination nav

```tsx
import { Paginator } from "@genome-evolution/react";

<Paginator page={1} pageCount={16} onPageChange={() => {}} />;
```

## Pending Clarification

1. Fixed content. The page-size value, range text, current page, total pages, and page numbers are fixed text and are not exposed as properties. The page-size value also uses the placeholder color (`text/secondary`). Confirm whether these should be text properties and whether the page-size value should appear as a selected value.
2. `Numbers` page set. `Numbers` always shows three cells with page 3 as current, with no option for more pages, a different current page, or truncation (for example, an ellipsis). Confirm the intended pattern for different page counts.
3. Per-element states. States apply to the whole control; individual navigation icons and page cells have no hover, pressed, or disabled states, and the first/previous or next/last icons cannot be disabled at the start or end. Confirm the intended interaction model.
4. Composition. `Page size + Range` includes its own navigation icons, while `Input` and `Numbers` do not include a page-size selector or range. Confirm whether the types are meant to be combined (for example, page size and range with a page input) or used separately.
5. Radius tokens. Corner radius uses `spread/md` and `spread/lg`, and the `Input` number field (8px) is more rounded than its 4px container. Confirm whether these should use the radius tokens used elsewhere.

## Notes / Changelog

Generated from Figma evidence (component set `2185:1106`) on 2026-10-23.
