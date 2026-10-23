---
component: "Panel"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3147-381"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "panel"
  - "tree"
---

# Panel

System: Genome Evolution Design System

## Component Summary

Panel provides the rows of a side panel: a header row with an action button, collapsible item rows with optional count and chevron, and tree rows with four indentation levels in two sizes.

## Quick Reference

### What It Is

Evidence-based interpretation: a set of 240px-wide rows used to build a panel, such as a navigation or explorer sidebar. The component set (Figma node `3147:381`) contains three row types: `Header` (panel title with an action button), `Item` (a top-level row with a chevron and a second-level sub-row), and `Tree` (hierarchical rows indented by `Level`). No written component description is defined for Panel in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Item, Header, Tree | Item |
| Level | L1, L2, L3, L4 | L1 |
| Size | MD, SM | MD |
| text | Text | "Panel item" |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `bizagi-lines` |
| showArrow | true, false | true |
| chevron | Instance swap | `chevron-down` |
| arrow | Instance swap | `arrow-fordward` |
| showNumber | true, false | false |
| number | Text | "00" |
| showAction | true, false | true |

Not every combination of `Type`, `Level`, and `Size` exists; see Variants.

### Default Configuration

The component property defaults exposed by Figma are `Type=Item`, `Level=L1`, `Size=MD`, `text="Panel item"`, `showLeftIcon=true`, `showArrow=true`, `showNumber=false`, `number="00"`, and `showAction=true`. This corresponds to variant `3147:385`, the top-left variant of the component set: a top-level item with an icon, text, and chevron.

### Typical Usage

Verified observations:

- All rows are 240px wide.
- `Type=Header` exists only as `Level=L1, Size=MD`; `Type=Item` exists only as `Size=MD` with `Level=L1` or `L2`; `Type=Tree` exists for `Level=L1` to `L4` in both sizes.
- `Tree` rows increase their left padding by 8px per level (16, 24, 32, 40px).
- `Header` and `Item` rows use a light gray background (`surface/subtlest`); `Tree` rows use a white background (`background/canvas`).

Evidence-based interpretation:

- Use one `Header` row at the top of a panel, `Item` L1 rows for collapsible sections, `Item` L2 rows for entries inside a section, and `Tree` rows for nested hierarchies (for example, folders and files).
- Use `showNumber` to show a count of entries in a section.
- Use `Tree` `SM` in dense panels and `Tree` `MD` for standard panels.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: side panels need consistent rows for titles, sections, sub-items, and nested hierarchies, with predictable indentation and spacing.

### Expected Outcome

Evidence-based interpretation: the user identifies the panel from its header, scans sections and their counts, expands sections, and navigates hierarchical content by indentation level.

### Typical Context

Evidence-based interpretation: navigation sidebars, explorer or outline panels, and filter or category panels.

## When to Use

Evidence-based interpretations, derived from the types, levels, and structure:

- To title a side panel and provide a primary panel action (`Type=Header`, `showAction`).
- To present collapsible sections and their entries (`Type=Item`, `Level=L1` and `L2`).
- To present a hierarchy of up to four levels (`Type=Tree`).

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Panel in Figma. As recommendations only:

- Avoid hierarchies deeper than four levels; `Tree` provides `L1` to `L4`.
- For general lists outside a panel, consider the List component.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | 240px-wide row with background and padding. |
| Action button | Optional (`showAction`); `Header` only | Nested Icon Button: 12px icon on a `surface/subtle` square with 6px padding and 4px radius, placed before the title. |
| Leading icon | Optional (`showLeftIcon`, `leftIcon`); `Item` L1 and `Tree` | Default `bizagi-lines`: 16px in `Item` L1, 12px in `Tree`. |
| Tree arrow | Optional (`showArrow`, `arrow`); `Tree` only | Default `arrow-fordward`, 12px, before the leading icon. |
| Text | Required | Row label. Default text: "Panel item" (`Header`, `Item`) or "Title" (`Tree`). |
| Number | Optional (`showNumber`, `number`); `Item` only | Count text. Default text: "00". |
| Chevron | Optional (`showArrow`, `chevron`); `Item` L1 only | Default `chevron-down`, 12px, at the right end. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 240px (all variants) | Direct measurement |
| Height | `Header` 64px; `Item` L1 38px; `Item` L2 34px; `Tree` MD 38px; `Tree` SM 34px | Direct measurement |
| Padding — `Header` | 24px horizontal, 20px vertical | `space/24`, `space/20` |
| Padding — `Item` L1 | 24px horizontal, 8px vertical | `space/24`, `space/8` |
| Padding — `Item` L2 | 48px left, 24px right, 8px vertical | `space/48`, `space/24`, `space/8` |
| Padding — `Tree` | Left 16px (L1), 24px (L2), 32px (L3), 40px (L4); right 16px; vertical 8px | `space/16`, `space/24`, `space/32`, `space/40`, `space/8` |
| Gap — `Header` | 16px | `gap/lg` |
| Gap — `Tree` | 8px between icons and text; 4px between arrow and icon | `gap/sm`; direct measurement |
| Gap — `Item` | 8px | Direct measurement |
| `Item` L1 alignment | Icon and text on the left; number and chevron on the right | Figma auto layout (space between) |
| `Item` L2 alignment | Number directly after the text | Figma auto layout |
| `Header` title width | Fixed 160px | Direct measurement |

## Semantics

Evidence-based interpretation:

- `Header` represents the panel title; its action button represents a panel-level action (the visible icon is a plus sign, suggesting "add").
- `Item` L1 represents a section, and the `chevron-down` suggests it can be expanded or collapsed. `Item` L2 represents an entry inside a section.
- `Tree` represents a node in a hierarchy; `Level` represents nesting depth, and the `arrow-fordward` icon suggests a collapsed node that can be expanded.
- `number` represents a count associated with an item.

Not verified in Figma: navigation or tree roles (for example, `nav`, `role="tree"`, `role="treeitem"`), `aria-expanded`, `aria-level`, and screen-reader behavior.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon (`Item` L1) | `bizagi-lines`, 16px; swappable through `leftIcon` | Figma layers and properties |
| Leading icon (`Tree`) | `bizagi-lines`, 12px; swappable through `leftIcon` | Figma layers and properties |
| Tree arrow | `arrow-fordward`, 12px; swappable through `arrow` | Figma layers and properties |
| Chevron (`Item` L1) | `chevron-down`, 12px; swappable through `chevron` | Figma layers and properties |
| Header action | 12px plus icon (the layer is named `trash`) inside a nested Icon Button | Figma layers; see Pending Clarification |

`showArrow` controls both the `Tree` arrow and the `Item` L1 chevron.

## Variants (Properties)

The variant inventory is complete: 11 variants. All variants were inspected. Boolean, text, and instance-swap property names are listed as exposed by the Figma MCP.

| Type | Level | Size | Variant |
|------|-------|------|---------|
| Item | L1 | MD | `3147:385` (default) |
| Item | L2 | MD | `3147:382` |
| Header | L1 | MD | `3147:392` |
| Tree | L1–L4 | SM | `3147:395`, `3147:400`, `3147:405`, `3147:410` |
| Tree | L1–L4 | MD | `3147:415`, `3147:420`, `3147:425`, `3147:430` |

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Item | Section row (L1) or entry row (L2) on a `surface/subtlest` background. | Default; `Size=MD` only |
| Header | Panel title row with an action button, 16px semibold text, and a `surface/subtlest` background. | `Level=L1, Size=MD` only |
| Tree | Hierarchical row with arrow, icon, and text on a white background. | `L1`–`L4`, `SM` and `MD` |

### Level

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| L1 | Top level. | All types |
| L2 | Second level: `Item` entry with 48px indent; `Tree` with 24px indent. | `Item`, `Tree` |
| L3 | Third level: `Tree` with 32px indent. | `Tree` only |
| L4 | Fourth level: `Tree` with 40px indent. | `Tree` only |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 14px text (22px line height) in `Tree` and `Item` L1; 38px rows. | Default |
| SM | 12px text (18px line height); 34px rows. | `Tree` only |

### Content and visibility properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| text | Row label for `Header` and `Item`. | Default: "Panel item"; `Tree` text is not connected to this property |
| showLeftIcon / leftIcon | Shows the leading icon and sets which icon is used. | Default: `true` / `bizagi-lines` |
| showArrow / arrow / chevron | Shows the `Tree` arrow or the `Item` L1 chevron and sets the icon. | Default: `true` / `arrow-fordward` / `chevron-down` |
| showNumber / number | Shows the count in `Item` rows and sets its text. | Default: `false` / "00" |
| showAction | Shows the action button in `Header`. | Default: `true` |

## States

Panel has no state variants (for example, hover, selected, expanded, or collapsed). The `Item` chevron always points down and the `Tree` arrow always points right. See Pending Clarification.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/subtlest` | Background (`Header`, `Item`) | Figma variables |
| Color — surface | `background/canvas` | Background (`Tree`) | Figma variables |
| Color — surface | `surface/subtle` | Header action button background | Figma variables |
| Color — text | `text/primary` | Row text | Figma variables |
| Color — icon | `icon/primary` | Used by the component set (icons); exact layer binding not inspected | Figma variables |
| Spacing | `space/8`, `space/16`, `space/20`, `space/24`, `space/32`, `space/40`, `space/48` | Padding and indentation (see Layout) | Figma variables |
| Spacing | `gap/sm`, `gap/lg` | Gap (`Tree`, `Header`) | Figma variables |
| Typography | `Body/medium/regular` | Text, 14/22 (`Item` L1, `Tree` MD) | Figma text style |
| Typography | `Body/small/regular` | Text, 12/18 (`Item` L2, `Tree` SM) | Figma text style |
| Typography | `Buttom/large/strong` | Header text, 16/20 semibold | Figma text style |
| Typography variables | `font/family/products`, `font/size/s`, `font/size/m`, `font/height/s`, `font/spacing/m`, `font/weight/regular` | Underlying text style values | Figma variables |

Not bound to tokens: the number color (`#272727`), the 22px line height of `Body/medium/regular`, the 16px header text size, the action button's 6px padding and 4px radius, the 8px `Item` gaps, and the 4px gap between the `Tree` arrow and icon.

Panel uses a different typography set (`Body/...`, `Buttom/...` styles and `font/...` variables) than other components in the system, which use `Text/...` styles and `family/body`, `size/...`, and `line-height/...` variables. See Pending Clarification.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed elements: the nested Icon Button in `Header` and the chevron and arrow icons.
- Evidence-based interpretation: the header action performs a panel-level action such as adding an item, the `Item` chevron expands or collapses a section, and the `Tree` arrow expands or collapses a node. None of these behaviors, nor hover, selection, or keyboard navigation, are defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Row text (`text/primary`) is 12.0:1 on `surface/subtlest` and 12.78:1 on white.
- Hierarchy in `Tree` is communicated through indentation only (8px per level).
- The header action button shows only an icon; no visible label is provided.
- There are no hover, focus, selected, or expanded state variants.

Missing accessibility information: navigation and tree semantics, expanded and collapsed announcements, level announcements, keyboard navigation, focus indication, and an accessible name for the header action button.

## Content Guidelines

Verified observations:

- Default content is "Panel item" (`Header`, `Item`), "Title" (`Tree`), and "00" (number); all are placeholders.
- `Header` text is limited to a fixed 160px width.

Recommendations:

- Keep row labels short so they fit within the 240px row.
- Use the header text to name the panel's content.

## Examples

### Panel header with add action

Configuration: `Type=Header`, `Level=L1`, `Size=MD`, `showAction=true`

Description: a panel title with an add button.

Evidence / Classification: existing Figma configuration (variant `3147:392`).

### Section with count

Configuration: `Type=Item`, `Level=L1`, `Size=MD`, `showNumber=true`

Description: a section row with icon, label, entry count, and chevron.

Evidence / Classification: recommendation built from verified properties.

### Nested tree

Configuration: `Type=Tree`, `Size=MD`, `Level=L1` to `L4`

Description: four rows stacked to show a four-level hierarchy.

Evidence / Classification: existing Figma configurations (variants `3147:415` to `3147:430`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: the variant set has no `Header` rows other than `L1, MD`, no `Item` rows in `SM` or at `L3`/`L4`, so these combinations cannot be selected in Figma. Whether they are intentionally excluded is not documented.

## Pending Clarification

1. `Tree` text not connected. In all `Tree` variants the text is fixed as "Title" and is not connected to the `text` property. Confirm whether it should use `text`.
2. Missing states. There are no hover, selected, expanded, or collapsed variants; the `Item` chevron always points down and the `Tree` arrow always points right. Confirm whether these states are needed for navigation and tree use.
3. Typography system. Panel uses `Body/...` and `Buttom/...` text styles and `font/...` variables, unlike other components that use `Text/...` styles. The number color (`#272727`) and several values are hard-coded. Confirm whether Panel should be migrated to the current typography and color tokens.
4. Header action. The action button's icon layer is named `trash` but shows a plus icon, and the icon cannot be changed through a property. Confirm the intended icon and whether it should be swappable.
5. Variant coverage. `Header` exists only at `L1, MD` and `Item` only in `MD` at `L1` and `L2`. Confirm whether `SM` versions of `Header` and `Item` are needed. In `Item` L2, the number appears directly after the 12px text in 14px type, while in `Item` L1 it is right-aligned; confirm the intended placement.

## Notes / Changelog

Generated from Figma evidence (component set `3147:381`) on 2026-10-23.

[No verified historical changes available]
