---
component: "Dropdown icon + text"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2145-444"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "list-item"
  - "building-block"
---

# Dropdown icon + text

System: Genome Evolution Design System

## Component Summary

Dropdown icon + text (`.Dropdown icon + text` in Figma) is a 163 px wide option row with an optional leading icon, a text label and an optional trailing icon, available in three sizes and six states (Default, Hovered, Pressed, Focused, Selected, Disable).

## Quick Reference

### What It Is

The Dropdown Icon + Text component is an option item used as an internal building block for Dropdown menus. It combines a descriptive icon, a text label, and optionally a navigation indicator or secondary action.

Its purpose is to represent a selectable option within a dropdown menu, enabling quick visual recognition through iconography while supporting hierarchical navigation, submenus, or additional actions.

This component serves as the primary pattern for building option lists within dropdowns, contextual menus, and action menus.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | LG, MD, SM | LG |
| State | Default, Hovered, Pressed, Focused, Selected, Disable | Default |
| text (text) | Free text | Item list |
| showLeftIcon (boolean) + leftIcon (instance swap) | true, false / any icon | true / add |
| showRightIcon (boolean) + rightIcon (instance swap) | true, false / any icon | true / chevron-right |
| showSmallLeftIcon (boolean) + smallLeftIcon (instance swap) | true, false / any icon | true / add |
| showSmallRightIcon (boolean) + smallRightIcon (instance swap) | true, false / any icon | true / chevron-right |

Defaults are taken from the component property definitions in Figma. Every `Size` and `State` combination exists (18 variants). The disabled value is spelled `Disable`.

Current behavior: Icon properties are split by size. `showLeftIcon`, `leftIcon`, `showRightIcon` and `rightIcon` control the 16 px icons in `LG` and `MD`; `showSmallLeftIcon`, `smallLeftIcon`, `showSmallRightIcon` and `smallRightIcon` control the 12 px icons in `SM`.

### Default Configuration

`Size=LG`, `State=Default`, `text="Item list"`, both icons visible: a 163 × 44 px row on `background/canvas` with an `add` icon, the label and a `chevron-right` icon.

### Typical Usage

Verified observation: The component set contains 18 variants: six states in each of three sizes. All sizes share the same 163 px width; height and padding change with size.

Evidence-based interpretation:

- Use `Default` for an available option, `Selected` for the chosen option, `Disable` for an unavailable option.
- `Hovered`, `Pressed` and `Focused` represent the interactive feedback of the option.
- Choose `LG`, `MD` or `SM` to match the size of the parent list.
- The default icons (`add`, `chevron-right`) can be hidden or swapped.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent option row with all interaction and selection states for building dropdown lists.

### Expected Outcome

Evidence-based interpretation: Users can scan options, see which option is selected and which are unavailable, and receive feedback while interacting.

### Typical Context

Evidence-based interpretation: Used inside a dropdown list or menu, as indicated by the name and the period-prefixed (unpublished) component. The parent component is not identified in this component set.

## When to Use

- To represent options inside a Dropdown.
- When an icon helps users quickly identify an action or category.
- In contextual navigation menus.
- To display common actions inside a dropdown list.
- When an option leads to a submenu or a deeper navigation level.
- In action menus, settings menus, or tool menus.
- To build consistent menu structures across the platform.

## When NOT to Use

- To display static, non-selectable information.
- As the primary action button of a page or workflow.
- When iconography does not add meaningful value.
- For complex lists that require multiple fields or detailed information.
- As a replacement for persistent navigation components.
- When the option performs a critical action that requires stronger visual emphasis.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout row, 163 px wide; carries the state background or focus border. |
| Leading icon | Optional | 16 px (`LG`, `MD`) or 12 px (`SM`) icon before the label; `add` by default. |
| Label | Required | Text set through `text`. |
| Trailing icon | Optional | 16 px (`LG`, `MD`) or 12 px (`SM`) icon at the end of the row; `chevron-right` by default. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 163 px (all variants) | Variant dimensions |
| Height | 44 px (LG), 36 px (MD), 22 px (SM) | Variant dimensions |
| Padding — LG | `space/16` horizontal, `space/12` vertical | Variable bindings |
| Padding — MD | `space/8` | Variable binding |
| Padding — SM | `space/4` | Variable binding |
| Gap | `gap/sm` (8) | Variable binding |
| Icon size | 16 px (LG, MD), 12 px (SM) | Layer dimensions |
| Label typography — LG, MD | `Text/Body/SM`: `family/body` (Open Sans), weight 400, `size/14`, `line-height/20` | Text style |
| Label typography — SM | `Text/Body/XXS`: `family/body`, weight 400, `size/10`, `line-height/14` | Text style |
| Trailing icon position | End of the row | Design context |
| Corner radius | None | Design context |
| Focus border | `focus/width` (2 px) `border/focus` | Variable bindings |

Current behavior: Label sizing differs between states. In `Default` and `Disable`, the label fills the available width; in `Hovered` it keeps its natural width; in `LG` and `MD` `Pressed`, `Focused` and `Selected`, it keeps its natural width up to 148 px. Labels do not wrap in any state, and no truncation (ellipsis) is defined.

## Semantics

Evidence-based interpretation:

- Each row is one selectable option; `Selected` marks the chosen option and `Disable` an unavailable one.
- The trailing `chevron-right` suggests navigation or a nested level; its meaning is not documented in Figma.

Not verified in Figma: HTML elements, ARIA roles (for example, option or menu item), selected and disabled semantics, and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Leading icon — LG, MD | `add`, 16 px; swappable via `leftIcon`; toggled by `showLeftIcon` | Instance swap property |
| Trailing icon — LG, MD | `chevron-right`, 16 px; swappable via `rightIcon`; toggled by `showRightIcon` | Instance swap property |
| Leading icon — SM | `add`, 12 px; swappable via `smallLeftIcon`; toggled by `showSmallLeftIcon` | Instance swap property |
| Trailing icon — SM | `chevron-right`, 12 px; swappable via `smallRightIcon`; toggled by `showSmallRightIcon` | Instance swap property |

Icons use `icon/primary`, and `icon/disabled` in `Disable`.

## Variants (Properties)

The inventory below is complete: all 18 variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| LG | 44 px high; 16/12 px padding; 16 px icons; `Text/Body/SM`. | Default |
| MD | 36 px high; 8 px padding; 16 px icons; `Text/Body/SM`. | — |
| SM | 22 px high; 4 px padding; 12 px icons; `Text/Body/XXS`. | — |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | `background/canvas`; `text/primary` label. | All sizes |
| Hovered | `background/interactive/hovered`. | All sizes |
| Pressed | `background/interactive/pressed`. | All sizes |
| Focused | `background/canvas` with a 2 px `border/focus` border. | All sizes |
| Selected | `background/selected`. | All sizes |
| Disable | `background/disabled`; `text/disabled` label; `icon/disabled` icons. | All sizes |

### text, icons

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| text | Option label; "Item list" in all variants. | Text property |
| showLeftIcon / leftIcon | Leading 16 px icon in LG and MD (`add` by default). | Default `true` |
| showRightIcon / rightIcon | Trailing 16 px icon in LG and MD (`chevron-right` by default). | Default `true` |
| showSmallLeftIcon / smallLeftIcon | Leading 12 px icon in SM (`add` by default). | Default `true` |
| showSmallRightIcon / smallRightIcon | Trailing 12 px icon in SM (`chevron-right` by default). | Default `true` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Available option. | `background/canvas`. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered`. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed`. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border. | State variants |
| Selected | Selected appearance. | `background/selected`. | State variants |
| Disable | Unavailable appearance. | Disabled background, label and icons. | State variants |

The label and icon colors stay `text/primary` and `icon/primary` in every state except `Disable`. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Default, Focused | Variable binding |
| Background | `background/interactive/hovered`, `background/interactive/pressed` | Hovered, Pressed | Variable binding |
| Background | `background/selected` | Selected | Variable binding |
| Background | `background/disabled` | Disable | Variable binding |
| Border | `border/focus`, `focus/width` | Focused | Variable binding |
| Text | `text/primary`, `text/disabled` | Label | Variable binding |
| Icon | `icon/primary`, `icon/disabled` | Icons | Variable binding |
| Spacing | `space/16`, `space/12`, `space/8`, `space/4`, `gap/sm` | Padding and gap | Variable binding |
| Typography | `Text/Body/SM`, `Text/Body/XXS` | Label by size | Text styles |

## Interaction

Observed states: Default, Hovered, Pressed, Focused, Selected and Disable for all sizes. No prototype interactions were inspected.

Not verified in Figma: selection behavior, what the trailing chevron does, and keyboard navigation.

## Accessibility

Mandatory requirements
- All options must be keyboard accessible.
- Focus states must be visible and clearly distinguishable.
- Icon, text, and background contrast must meet WCAG AA requirements.
- Active or selected options must be communicated visually and programmatically.
Recommendations
- Provide accessible labels for icons with functional meaning.
- Maintain consistent keyboard navigation throughout the dropdown.
- Ensure adequate interaction target sizes for touch devices.

## Content Guidelines

Verified observations: All variants use the sample label "Item list". Labels are single-line; the row width is fixed at 163 px, and no truncation is defined for long labels.

## Examples

### Selected option

Configuration: `Size=MD`, `State=Selected`

Description: Option row with `background/selected`.

Evidence / Classification: Existing variant in Figma.

### Text-only option

Configuration: `Size=LG`, `State=Default`, `showLeftIcon=false`, `showRightIcon=false`

Description: Option row with the label only.

Evidence / Classification: Configuration supported by the icon properties.

### Compact unavailable option

Configuration: `Size=SM`, `State=Disable`

Description: Small option row with disabled colors.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| Using `showLeftIcon` / `showRightIcon` to control icons in `Size=SM` | These properties apply only to `LG` and `MD`; `SM` uses `showSmallLeftIcon` / `showSmallRightIcon` | Property bindings |

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
