---
component: "Group"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.0"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2203-2517"
last_updated: "2026-10-22"
tags:
  - "group"
  - "container"
  - "collapsible"
---

# Group

System: Genome Evolution Design System

## Component Summary

Group is a 648 px wide collapsible container with a titled header, a content slot and an optional footer with a Paginator and optional action icons, shown either collapsed (header only) or expanded (header, content and footer).

## Quick Reference

### What It Is

The Group is a collapsible container component that organizes and groups related information within a single interface section. It toggles between Collapsed and Expanded states, helping reduce visual clutter and improve content discoverability.

The component includes a header with a title and expansion indicator, a configurable content area through slots, and optional elements such as actions, pagination, and a footer section. It can be used to group forms, tables, settings, or related information blocks.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| State | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| title (text) | Free text | Title |
| showFooter (boolean) | true, false | true |
| showPaginator (boolean) | true, false | true |
| showLeftIcons (boolean) | true, false | false |
| showLeftIcon1 – showLeftIcon4 (boolean) | true, false | true |
| showRightIcons (boolean) | true, false | false |
| showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4 (boolean) | true, false | true |
| Content slot | Any content | Empty |

Defaults are taken from the component property definitions in Figma. Property names are listed exactly as they appear in Figma, including `showRighIcon1` and `showIconRight2`.

### Default Configuration

`State=Collapsed`, `Color=Default`, `title="Title"`: a 648 × 32 px bar with `chevron-down` and the title.

### Typical Usage

Verified observation: The component set has three variants: `Collapsed` with `Color=Default`, and `Expanded` with `Color=Evergreen` or `Color=Indigo`.

Evidence-based interpretation:

- Use `State=Collapsed` to show only the group title.
- Use `State=Expanded` with the brand color of the context to show the content.
- Place the group's content in the content slot.
- Use `showPaginator` when the content is paged, and `showLeftIcons` / `showRightIcons` to show the footer actions.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Organizes related content in a titled, collapsible section with paging and actions in a consistent footer.

### Expected Outcome

Evidence-based interpretation: Users can collapse or expand sections, page through content and use the section's actions.

### Typical Context

Specific product contexts are not documented in Figma. The fixed 648 px width indicates use within page or form layouts; this is an evidence-based interpretation.

## When to Use

- To organize large amounts of information into manageable sections.
- In complex forms containing multiple groups of fields.
- To group related tables, lists, or configuration settings.
- When users only need to expand information relevant to their current task.
- In pages containing multiple content categories.
- To improve scannability and reduce visual noise.

## When NOT to Use

- When content is critical and must always remain visible.
- To hide information required to complete a primary task.
- When the content volume is minimal and does not require grouping.
- As a replacement for hierarchical or structural navigation.
- When users need to compare content across multiple sections simultaneously.
- To group unrelated information.

## Composition and Hierarchy Rules

### Order

In `Expanded`, from top to bottom: header, content area, footer (when `showFooter=true`).

### Footer layout

| Position | Element | Visibility | Default |
|----------|---------|------------|---------|
| Left | Icons: `add`, `pencil`, `trash`, `file-search` | `showLeftIcons`, then `showLeftIcon1` – `showLeftIcon4` | Hidden group |
| Center | Paginator | `showPaginator` | Shown |
| Right | Icons: `add`, `trash`, `save`, `cancel` | `showRightIcons`, then `showRighIcon1`, `showIconRight2`, `showRightIcon3`, `showRightIcon4` | Hidden group |

- The icon groups are positioned at the left and right edges of the footer; the Paginator is centered.
- Each icon group has a master toggle (`showLeftIcons`, `showRightIcons`, default `false`) and one toggle per icon (default `true`).

### Child components

| Child | Configuration observed |
|-------|------------------------|
| Paginator | Input type: first-page, previous, a page field ("0 / 0"), next, last-page. Its states and types are documented with Paginator. |
| Icon instances | `chevron-down` / `chevron-up` (12 px) in the header; 16 px action icons in the footer. |

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | 648 px wide panel with `background/canvas`, 1 px `border/default` and `semantic/sm` radius. |
| Header (`Head`) | Required | 32 px row with a 12 px chevron and the title. In `Expanded`, it has a 1 px bottom border in the brand color. |
| Content area | Required in `Expanded` | Padded area (`space/16`) containing the content slot (616 × 184 px). |
| Footer | Optional (`showFooter`) in `Expanded` | 40 px row on `surface/subtlest` with left icons, Paginator and right icons. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 648 px | Variant dimensions |
| Height | 32 px (Collapsed), 288 px (Expanded with footer) | Variant dimensions |
| Container border and radius | 1 px `border/default`; `semantic/sm` (4) | Variable bindings |
| Header | 32 px high; `space/16` horizontal, `space/4` vertical padding; 8 px gap | Variable bindings, design context |
| Header divider (Expanded) | 1 px `border/evergreen` or `border/indigo` | Variable bindings |
| Content area | `space/16` padding; slot 616 × 184 px | Variable binding, layer dimensions |
| Footer | 40 px high; 16 px horizontal, 4 px vertical padding (fixed values); `surface/subtlest` | Design context |
| Footer icon groups | 16 px icons, 16 px apart; 16 px from the footer edges | Layer positions |
| Title typography — Collapsed | `Text/Body/XXS`: weight 400, `size/10`, `line-height/14`; `text/secondary` | Text style |
| Title typography — Expanded | `Text/Body/XS Strong`: weight 600, `size/12`, `line-height/16`; `text/primary` | Text style |

## Semantics

Evidence-based interpretation:

- The header identifies the group; the chevron indicates whether the group is collapsed (`chevron-down`) or expanded (`chevron-up`).
- The footer icons represent actions on the group's content (add, edit, delete, search on the left; add, delete, save, cancel on the right); their meanings are inferred from the icon names.
- The Paginator moves between pages of the content.

Not verified in Figma: HTML elements, ARIA attributes (for example, expanded state), and accessible names for icon-only actions.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Header — Collapsed | `chevron-down`, 12 px | Layer |
| Header — Expanded | `chevron-up`, 12 px | Layer |
| Footer left | `add`, `pencil`, `trash`, `file-search`, 16 px | Layers |
| Footer right | `add`, `trash`, `save`, `cancel`, 16 px | Layers |
| Paginator | `first-page`, `chevron-left`, `chevron-right`, `last-page`, 12 px | Nested instance |

## Variants (Properties)

The inventory below is complete: all three variants were inspected.

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Collapsed | Header only: `chevron-down` and a `Text/Body/XXS` `text/secondary` title. | `Color=Default` only; default |
| Expanded | Header with `chevron-up`, `Text/Body/XS Strong` `text/primary` title and brand-colored divider; content area; footer. | `Color=Evergreen` or `Indigo` |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | No brand accent. | `State=Collapsed` only |
| Evergreen | Header divider `border/evergreen`. | `State=Expanded` only |
| Indigo | Header divider `border/indigo`. | `State=Expanded` only |

### Footer properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| showFooter | Shows the footer. | Default `true`; Expanded only |
| showPaginator | Shows the centered Paginator. | Default `true` |
| showLeftIcons | Shows the left icon group. | Default `false` |
| showLeftIcon1 – showLeftIcon4 | Show `add`, `pencil`, `trash`, `file-search`. | Default `true` |
| showRightIcons | Shows the right icon group. | Default `false` |
| showRighIcon1, showIconRight2, showRightIcon3, showRightIcon4 | Show `add`, `trash`, `save`, `cancel`. | Default `true` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Collapsed | Group closed. | 32 px header; smaller, regular, secondary-colored title. | State variants |
| Expanded | Group open. | Header with brand divider and stronger title; content and footer visible. | State variants |

No hover, pressed or focused variants exist for the header. Transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Container, header, content | Variable binding |
| Surface | `surface/subtlest` | Footer | Variable binding |
| Border | `border/default` | Container border | Variable binding |
| Border | `border/evergreen`, `border/indigo` | Header divider (Expanded) | Variable binding |
| Text | `text/secondary` | Title (Collapsed) | Variable binding |
| Text | `text/primary` | Title (Expanded) | Variable binding |
| Spacing | `space/16`, `space/4` | Header and content padding | Variable binding |
| Radius | `semantic/sm` | Container corners | Variable binding |
| Typography | `Text/Body/XXS`, `Text/Body/XS Strong` | Title by state | Text styles |

Paginator tokens are documented with Paginator.

Current behavior:

- The title style changes between states: `Text/Body/XXS` in `text/secondary` when collapsed, `Text/Body/XS Strong` in `text/primary` when expanded.
- The brand color applies only to the expanded header divider; the collapsed state has no brand color.
- The footer padding and the header gap use fixed values rather than spacing variables.
- In `Color=Indigo`, the content area has a fixed 216 px height and the slot a fixed 617 px width; in `Color=Evergreen`, the slot fills the content width.
- Two property names are irregular: `showRighIcon1` and `showIconRight2`.

## Interaction

Observed states: Collapsed and Expanded. No prototype interactions were inspected.

Not verified in Figma: toggling between states, paging behavior, and what the footer icons do.

## Accessibility

- Required: ensure sufficient contrast between headers, content, icons, and backgrounds across all color variants (Default, Evergreen, and Indigo).
- Required: support keyboard interaction for expanding and collapsing using Enter or Space.
- Required: provide visible focus indicators for headers and interactive actions.
- Recommended: communicate Expanded and Collapsed states using appropriate accessibility attributes (for example, aria-expanded).

## Content Guidelines

Verified observations: The sample title is "Title". The title is a single line in a fixed-width (596 px) text box. The Paginator shows "0 / 0" as sample content.

## Examples

### Collapsed group

Configuration: `State=Collapsed`, `Color=Default`

Description: Title bar only.

Evidence / Classification: Default variant in Figma.

### Expanded group with paging

Configuration: `State=Expanded`, `Color=Evergreen`, `showFooter=true`, `showPaginator=true`

Description: Header, content slot and a footer with the Paginator.

Evidence / Classification: Existing variant in Figma.

### Expanded group with actions

Configuration: `State=Expanded`, `Color=Indigo`, `showLeftIcons=true`, `showRightIcons=true`

Description: Footer with action icons on both sides and the Paginator in the center.

Evidence / Classification: Configuration supported by the footer properties.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `State=Collapsed` with `Color=Evergreen` or `Color=Indigo` | No such variant exists | Variant inventory |
| `State=Expanded` with `Color=Default` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
