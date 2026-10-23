---
component: "List"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2403"
last_updated: "2026-10-23"
tags:
  - "list"
  - "list-item"
  - "data-display"
---

# List

System: Genome Evolution Design System

## Component Summary

List is a single list row with a text label and optional leading and trailing slots for a checkbox, a switch, and an icon, available as a regular item or a header row in two sizes and five visual states.

## Quick Reference

### What It Is

The List component represents an item within a list of options or a section header used in navigation menus, configuration panels, selectable lists, and hierarchical content structures. It can display text together with optional icons, checkboxes, switches, or supporting elements positioned on either the left or right side.

The component supports multiple interaction states to communicate navigation, active selection, and focus, enabling consistent experiences across menus and option panels.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | List, Header | List |
| Size | MD, SM | MD |
| State | Default, Hover, Pressed, Selected, Focused | Default |
| text | Text | "List item" |
| leftSide | true, false | false |
| showLeftCheckBox | true, false | true |
| showLeftSwitch | true, false | true |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `bizagi-lines` |
| rightSide | true, false | false |
| showRightCheckBox | true, false | true |
| showRightSwitch | true, false | true |
| showRightIcon | true, false | true |
| rightIcon | Instance swap | `bizagi-lines` |

### Default Configuration

The component property defaults exposed by Figma are `Type=List`, `Size=MD`, `State=Default`, `text="List item"`, and `leftSide=false` and `rightSide=false`, so a new instance shows only the text. This corresponds to variant `2184:2404`, the top-left variant of the component set.

Inside each side, the checkbox, switch, and icon toggles all default to `true`. Turning on `leftSide` or `rightSide` therefore shows all three at once; turn off the ones you do not need.

### Typical Usage

Verified observations:

- `Size=MD` rows are 36px tall with 14px text; `Size=SM` rows are 24px tall with 12px text.
- `Type=Header` rows add a 1px bottom border and use bold text in every state.
- `State=Selected` changes the background to `background/selected` and makes the text bold.
- The checkbox and switch in the side slots are nested instances of the Checkbox and Switch components, each with its own "Label" text.

Evidence-based interpretation:

- Stack `Type=List` rows to build a list, and use a `Type=Header` row to title a group of rows.
- Use the leading checkbox for multi-select lists, the switch for rows that toggle a setting, and the icon to identify the item type.
- Use `SM` for dense lists such as dropdown menus or side panels, and `MD` for standard lists.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: interfaces need a consistent row for presenting items in a vertical list, with room for selection controls, toggles, and icons, and with clear feedback for hover, press, selection, and focus.

### Expected Outcome

Evidence-based interpretation: the user scans the list, identifies items from their text and icons, and selects, toggles, or activates an item with clear visual feedback.

### Typical Context

Evidence-based interpretation: menus, dropdown option lists, settings lists, selection lists, and grouped lists with header rows.

## When to Use

- To build vertical navigation menus.
- To display selectable sets of options.
- In settings panels where each item represents a preference or action.
- To organize content through section headers.
- In lists that need to display selection states.
- When combining text with icons, switches, or checkboxes.
- To represent items within sidebars, contextual menus, or dropdown panels.

## When NOT to Use

- To perform primary interface actions (use a Button).
- To collect user-entered information (use an Input or Textarea).
- To present mutually exclusive options (use Radio Button).
- When the content requires a tabular structure (use a Table).
- To represent inline navigation links (use a Link).
- When there is no meaningful relationship between the items in the list.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Row with a `surface/subtlest` background, padding, and no corner radius. Header rows add a 1px bottom border. |
| Leading side | Optional (`leftSide`) | Group before the text containing up to three elements. |
| Checkbox | Optional (`showLeftCheckBox`, `showRightCheckBox`) | Nested Checkbox instance: a 16px box (in a 20px frame), a 16px icon, and, in most variants, a "Label" text. |
| Switch | Optional (`showLeftSwitch`, `showRightSwitch`) | Nested Switch instance: a 29 × 16px switch and a 10px "Label" text. |
| Icon | Optional (`showLeftIcon` / `leftIcon`, `showRightIcon` / `rightIcon`) | 16px icon. Default: `bizagi-lines`. |
| Text | Required | Single-line row label. Default text: "List item". |
| Trailing side | Optional (`rightSide`) | Group after the text, with the same three elements as the leading side. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal: leading side, text, trailing side; vertically centered | Figma auto layout |
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding — `SM` | 16px horizontal, 4px vertical | `space/16`, `space/4` |
| Height | 36px (`MD`); 24px (`SM`) | Direct measurement |
| Width | Hugs the content (88–91px `MD`, 80–83px `SM` with "List item") | Direct measurement |
| Gap between row parts | 8px | `gap/sm` |
| Gap inside each side | 8px | Direct measurement (not bound to a token) |
| Corner radius | None | Figma layer |
| Header divider | 1px bottom border | `border/default` |
| Focus border | 2px, `Focused` only | `focus/width`, `border/focus` |

Widths differ slightly between variants because `Selected` and `Header` use bold text. No fixed or fill width is defined; see Pending Clarification.

## Semantics

Evidence-based interpretation:

- `Type=List` represents a list item; `Type=Header` represents a heading that labels a group of items.
- `State=Selected` represents the current or chosen item.
- The nested checkbox represents item selection, and the nested switch represents an on/off setting tied to the item.

Not verified in Figma: HTML structure (for example, `ul`/`li`, `role="listbox"`, `role="menu"`), ARIA states such as `aria-selected`, and how header rows are exposed to assistive technology.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon | Default `bizagi-lines`, 16px; swappable through `leftIcon` | Figma layers and properties |
| Trailing icon | Default `bizagi-lines`, 16px; swappable through `rightIcon` | Figma layers and properties |
| Checkbox icon | 16px `bizagi-lines` icon inside the nested Checkbox | Figma layers |

## Variants (Properties)

The variant inventory is complete: 20 variants (2 `Type` × 2 `Size` × 5 `State`). Styling details come from directly inspecting all `Type=List, Size=MD` states and representative `Header` and `SM` variants; the remaining variants were checked visually. Boolean, text, and instance-swap property names are listed as exposed by the Figma MCP.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| List | Standard row; regular text (bold when `Selected`). | Default |
| Header | Row with a 1px bottom border and bold text in every state. | `border/default`; `Text/Body/SM Strong` / `Text/Body/XS Strong` |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 36px row; 14px text (`Text/Body/SM`, 14/20). | Default |
| SM | 24px row; 12px text (`Text/Body/XS`, 12/16). | — |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting row. | `surface/subtlest` |
| Hover | Slightly darker background. | `surface/subtlest/hovered` |
| Pressed | Darker background. | `surface/subtlest/pressed` |
| Selected | Light green background and bold text. | `background/selected`; `Text/Body/SM Strong` (MD) |
| Focused | 2px green border around the row. | `focus/width`, `border/focus` |

### Side slot properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| leftSide / rightSide | Shows or hides the whole leading or trailing group. | Default: `false` |
| showLeftCheckBox / showRightCheckBox | Shows the nested Checkbox in that side. | Default: `true` |
| showLeftSwitch / showRightSwitch | Shows the nested Switch in that side. | Default: `true` |
| showLeftIcon / showRightIcon | Shows the icon in that side. | Default: `true` |
| leftIcon / rightIcon | Sets which icon is shown. | Default: `bizagi-lines` |

### text

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Row label. | Default: "List item" |

The "Label" texts of the nested Checkbox and Switch are not exposed as List properties.

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | `surface/subtlest` background | Variant `2184:2404` |
| Hover | Pointer over the row | `surface/subtlest/hovered` background | Variant `2267:2820` |
| Pressed | Being activated | `surface/subtlest/pressed` background | Variant `2267:2886` |
| Selected | Chosen item | `background/selected` background, bold text | Variants `2267:2952`, `2267:2974` |
| Focused | Has focus | 2px `border/focus` border | Variant `2267:3018` |

These are visual state variants. Transitions, selection behavior (single or multiple), and the relationship between `Selected` and the nested checkbox are not defined in Figma. There is no disabled state.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/subtlest` | Background (`Default`, `Focused`) | Figma variables |
| Color — surface | `surface/subtlest/hovered` | Background (`Hover`) | Figma variables |
| Color — surface | `surface/subtlest/pressed` | Background (`Pressed`) | Figma variables |
| Color — surface | `background/selected` | Background (`Selected`) | Figma variables |
| Color — border | `border/default` | Header bottom border | Figma variables |
| Color — border | `border/focus` | Focus border (`Focused`) | Figma variables |
| Border width | `focus/width` | 2px focus border | Figma variables |
| Color — text | `text/primary` | Row text | Figma variables |
| Spacing | `space/16` | Horizontal padding | Figma variables |
| Spacing | `space/8`, `space/4` | Vertical padding (`MD`, `SM`) | Figma variables |
| Spacing | `gap/sm` | Gap between row parts | Figma variables |
| Typography | `Text/Body/SM` | Text (`List`, `MD`) | Figma text style |
| Typography | `Text/Body/SM Strong` | Text (`Header`, `MD`; `Selected`, `MD`) | Figma text style |
| Typography | `Text/Body/XS` | Text (`List`, `SM`) | Figma text style |
| Typography | `Text/Body/XS Strong` | Text (`Header`, `SM`) | Figma text style |

Minor token inconsistencies: `Pressed, MD` binds its vertical padding to `gap/sm` instead of `space/8`, and `Header, SM` binds its gap to `space/8` instead of `gap/sm` (same values). The strong text styles use `weight/semibold`, which resolves to the font style "Medium".

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hover`, `Pressed`, `Selected`, and `Focused` are visual state variants.
- Evidence-based interpretation: rows respond to pointer hover and press, can be selected, and can receive keyboard focus. The nested Checkbox and Switch are interactive components with their own states. Whether the whole row or only the nested control is clickable, and how selection is toggled, are not defined in Figma.

## Accessibility

Mandatory requirements
- All interactive list items must be keyboard accessible.
- Focus states must be visible and distinguishable from Hover, Pressed, and Selected states.
- Selection states must not rely solely on colour to communicate meaning.
- Text, icon, state, and background contrast must meet WCAG AA requirements.

Recommendations
- Provide clear accessible names for items, icons, and associated controls.
- Maintain a predictable and consistent navigation order.
- Use appropriate semantic roles when lists represent menus, navigation trees, or selectable groups.

## Content Guidelines

Verified observations:

- Default content is "List item" for the row and "Label" for the nested Checkbox and Switch; all are placeholders.
- Row text is single-line and does not wrap.

Recommendations:

- Keep row text short and scannable.
- Use header text that names the group of items below it.
- Replace or hide the nested "Label" texts so they do not duplicate the row text.

## Examples

### Simple list item

Configuration: `Type=List`, `Size=MD`, `State=Default`

Description: a text-only row, the default configuration.

Evidence / Classification: existing Figma configuration (variant `2184:2404`).

### Group header

Configuration: `Type=Header`, `Size=MD`, `State=Default`

Description: a bold heading row with a bottom divider above a group of list items.

Evidence / Classification: existing Figma configuration (variant `2184:2426`).

### Selectable row with checkbox

Configuration: `Type=List`, `Size=MD`, `State=Selected`, `leftSide=true`, `showLeftSwitch=false`, `showLeftIcon=false`

Description: a selected row with a leading checkbox in a multi-select list.

Evidence / Classification: recommendation built from verified properties; this exact combination is not shown in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. Side slot defaults. When `leftSide` or `rightSide` is turned on, the checkbox, switch, and icon all appear at once, and the nested Checkbox shows its own icon. Confirm whether each side is meant to hold one control at a time and whether the sub-toggles should default to `false`.
2. Nested control labels. The nested Checkbox shows a "Label" text in some variants (for example, `List, SM` and `Header`) but not in `List, MD`, and the nested Switch always shows one. These labels are not exposed as List properties. Confirm whether nested labels should be hidden or exposed.
3. `Selected` vs checkbox. `State=Selected` does not change the nested checkbox, which stays unchecked. Confirm how row selection relates to the checkbox in multi-select lists.
4. Width behavior. Rows hug their content, so rows with different text have different widths. Confirm whether rows should fill the width of their list container.
5. Missing disabled state and naming. There is no disabled state, and the hover value is named `Hover` while Input, Link, and Button use `Hovered`. Confirm whether a disabled state is needed and whether `Hover` should be renamed (renaming affects existing instances).

## Notes / Changelog

Generated from Figma evidence (component set `2184:2403`) on 2026-10-23.
