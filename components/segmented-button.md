---
component: "Segmented button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2194-2674"
last_updated: "2026-10-23"
tags:
  - "selection"
  - "navigation"
  - "segmented-control"
---

# Segmented button

System: Genome Evolution Design System

## Component Summary

Segmented button is a single segment of a segmented control, with an optional icon and label, available in three colors for the selected state, two corner styles, two sizes, and five visual states.

## Quick Reference

### What It Is

Evidence-based interpretation: one option of a segmented control used to switch between views, sections, or modes. Each variant of the component set (Figma node `2194:2674`) is a fixed-width cell made of a gray outer frame (`surface/subtlest`) and an inner segment containing an icon and a label ("Section name"). Placing several cells side by side forms the full control. No written component description is defined for Segmented button in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Selected, Hovered, Pressed, Focused | Default |
| Corner | Default, Rounded | Default |
| Size | MD, SM | MD |
| text | Text | "Section name" |
| showText | true, false | true |
| showIcon | true, false | true |
| icon | Instance swap | `bizagi-lines` |

### Default Configuration

The component property defaults exposed by Figma are `Color=Default`, `State=Default`, `Corner=Default`, `Size=MD`, `text="Section name"`, `showText=true`, `showIcon=true`, and a `bizagi-lines` icon. This corresponds to variant `2194:2755`, the top-left variant of the component set: an unselected 160 × 40px segment.

### Typical Usage

Verified observations:

- `Hovered`, `Pressed`, and `Focused` exist only for `Color=Default`.
- `Color=Evergreen` and `Color=Indigo` exist only with `State=Selected`; `Color=Default` also has a `Selected` variant.
- `Size=MD` segments are 160 × 40px; `Size=SM` segments are 131 × 32px.
- `Corner=Rounded` makes both the inner segment and the outer frame pill-shaped.

Evidence-based interpretation:

- Place two or more segments side by side, with one in `State=Selected` and the others in `State=Default`.
- Use `Color=Evergreen` or `Color=Indigo` for the selected segment to match the product theme, or `Color=Default` for a neutral selected segment.
- Use `Corner=Default` when segments sit directly next to each other, since its square outer frame joins seamlessly.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need a compact way to switch between a small number of related views, sections, or modes while seeing all options at once.

### Expected Outcome

Evidence-based interpretation: the user sees all options, identifies the selected one, and switches by selecting another segment.

### Typical Context

Evidence-based interpretation: view switchers (for example, list or grid), section filters, and mode toggles at the top of panels or pages.

## When to Use

Evidence-based interpretations, derived from the states and structure:

- To switch between a small set of mutually exclusive views or sections.
- When all options should be visible and equally accessible.

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Segmented button in Figma. As recommendations only:

- Avoid using segments for actions that do not change a selection; use Button.
- Avoid using many segments or long labels; each segment has a fixed width.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Outer frame | Required | Fixed-width frame with `surface/subtlest` background (or the hover or pressed background) and 8px × 4px padding. Square in `Corner=Default`; pill-shaped in `Corner=Rounded`. |
| Segment | Required | Inner container that holds the icon and label; its background, border, and text color change with `State`. |
| Icon | Optional (`showIcon`, `icon`) | 12px icon. Default: `bizagi-lines`. |
| Label | Optional (`showText`, `text`) | Semibold label. Default text: "Section name". |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Size — `MD` | 160 × 40px (fixed width) | Direct measurement |
| Size — `SM` | 131 × 32px (fixed width) | Direct measurement |
| Outer frame padding | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Segment padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Segment padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Gap (icon to label) | 8px | `gap/sm` |
| Segment radius — `Corner=Default` | 4px | `semantic/sm` |
| Segment radius — `Corner=Rounded` | Fully rounded | `semantic/full` |
| Outer frame radius — `Corner=Default` | None | Figma layer |
| Outer frame radius — `Corner=Rounded` | 32px | `semantic/pill` |
| Content alignment | Centered; segment fills the frame width | Figma auto layout |
| Icon size | 12px | Direct measurement |

## Semantics

Evidence-based interpretation:

- Each segment represents one option in a mutually exclusive set; `State=Selected` represents the active option.
- `Color` changes the selected segment's text and icon color; no meaning beyond theming is documented.

Not verified in Figma: tab or radio-group roles, `aria-selected` or `aria-pressed`, and keyboard navigation between segments.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Icon | `bizagi-lines`, 12px; swappable through `icon`; controlled by `showIcon` | Figma layers and properties |

The icon color follows the state and color (for example, Evergreen and Indigo when selected); separate icon assets are used per variant.

## Variants (Properties)

The variant inventory is complete: 28 variants. All variants were inspected. Boolean, text, and instance-swap property names are listed as exposed by the Figma MCP.

| Color | Available states | Corner | Size |
|-------|------------------|--------|------|
| Default | Default, Hovered, Pressed, Focused, Selected | Default, Rounded | MD, SM |
| Evergreen | Selected | Default, Rounded | MD, SM |
| Indigo | Selected | Default, Rounded | MD, SM |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Neutral; the only color with unselected and interactive states. Selected label uses `text/secondary`. | Default |
| Evergreen | Selected segment with green label and icon. | `text/evergreen`, `icon/evergreen`; `Selected` only |
| Indigo | Selected segment with purple label and icon. | `text/indigo`, `icon/indigo`; `Selected` only |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Unselected segment on the gray frame; tertiary label. | `surface/subtlest`, `text/tertiary` |
| Hovered | Hovered background and 1px border; primary label. | `background/interactive/hovered`, `border/interactive/hovered` |
| Pressed | Pressed background and 1px green border; primary label. | `background/interactive/pressed`, `border/evergreen` |
| Focused | 2px green focus border; primary label. | `border/focus` |
| Selected | White segment; 1px `border/default` border in `Color=Default`, no border in Evergreen and Indigo. | `background/canvas` |

### Corner

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | 4px segment radius; square outer frame. | Default; `semantic/sm` |
| Rounded | Fully rounded segment; 32px outer frame radius. | `semantic/full`, `semantic/pill` |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 160 × 40px; 14px label (`Text/Button/MD`). | Default |
| SM | 131 × 32px; 12px label (`Text/Button/SM`). | — |

### Content properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| text / showText | Label text and visibility. | Default: "Section name" / `true` |
| icon / showIcon | Icon and visibility. | Default: `bizagi-lines` / `true` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Unselected | Gray segment (`surface/subtlest`), `text/tertiary` label | Variant `2194:2755` |
| Hovered | Pointer over an unselected segment | Frame and segment use `background/interactive/hovered`; 1px `border/interactive/hovered` | Variant `2194:2795` |
| Pressed | Being activated | Frame and segment use `background/interactive/pressed`; 1px `border/evergreen` | Variant `2247:517` |
| Focused | Has focus | 2px `border/focus` border | Variant `2247:1239` |
| Selected | Active option | White segment (`background/canvas`); colored or secondary label | Variants `3662:2798`, `2194:2683`, `2194:2691` |

These are visual state variants. There are no hover, pressed, or focused variants for a selected segment, and there is no disabled state. Transitions are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/subtlest` | Outer frame; segment (`Default`, `Focused`) | Figma variables |
| Color — surface | `background/interactive/hovered`, `background/interactive/pressed` | Frame and segment (`Hovered`, `Pressed`) | Figma variables |
| Color — surface | `background/canvas` | Segment (`Selected`) | Figma variables |
| Color — border | `border/interactive/hovered` | Segment border (`Hovered`) | Figma variables |
| Color — border | `border/evergreen` | Segment border (`Pressed`) | Figma variables |
| Color — border | `border/focus` | Segment border (`Focused`) | Figma variables |
| Color — border | `border/default` | Segment border (`Selected`, `Color=Default`) | Figma variables |
| Color — text | `text/tertiary`, `text/primary`, `text/secondary`, `text/evergreen`, `text/indigo` | Label (see State and Color) | Figma variables |
| Color — icon | `icon/primary`, `icon/secondary`, `icon/evergreen`, `icon/indigo` | Used by the component set (icon); exact layer binding not inspected | Figma variables |
| Spacing | `space/16`, `space/8`, `space/4`, `gap/sm` | Padding and gap | Figma variables |
| Radius | `semantic/sm`, `semantic/full`, `semantic/pill` | Segment and frame radius | Figma variables |
| Typography | `Text/Button/MD`, `Text/Button/SM` | Label | Figma text styles |

Not bound to tokens: the fixed 160px and 131px widths, and the 1px and 2px border widths (the focus border does not use `focus/width`).

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hovered`, `Pressed`, `Focused`, and `Selected`.
- Evidence-based interpretation: selecting a segment makes it the selected option and deselects the others. Group behavior, keyboard navigation, and transitions are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Unselected labels (`text/tertiary` on `surface/subtlest`) are 3.78:1, below the common 4.5:1 WCAG AA threshold for 12–14px text.
- Selected labels on white: `text/secondary` 5.45:1, `text/evergreen` 5.33:1, `text/indigo` 9.37:1; hovered, pressed, and focused labels (`text/primary`) are 10.74:1 or higher.
- The selected segment is distinguished by a white background and, in `Color=Default`, a 1px border (`border/default`, 1.56:1 against the frame), as well as by label color.
- `Focused` provides a 2px focus border (`border/focus`, 3.41:1 against the frame).

Missing accessibility information: group semantics, selected-state announcement, keyboard navigation, and an accessible name when `showText=false`.

## Content Guidelines

Verified observations:

- Default label is "Section name", a placeholder.
- Labels are single-line and centered within a fixed width.

Recommendations:

- Use short labels of one or two words so they fit the fixed width.
- Use parallel wording across segments in the same control.
- If showing only the icon, make sure the meaning is clear and provide an accessible name.

## Examples

### Two-option view switcher

Configuration: segment 1 `Color=Evergreen`, `State=Selected`; segment 2 `Color=Default`, `State=Default`; both `Corner=Default`, `Size=MD`

Description: two segments side by side, with the first selected.

Evidence / Classification: recommendation built from existing Figma variants (`2194:2683`, `2194:2755`).

### Compact rounded selector

Configuration: `Color=Indigo`, `State=Selected`, `Corner=Rounded`, `Size=SM`

Description: a small pill-shaped selected segment in the Indigo theme.

Evidence / Classification: existing Figma configuration (variant `2247:1269`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: `Color=Evergreen` and `Color=Indigo` exist only with `State=Selected`, so they cannot be combined with `Default`, `Hovered`, `Pressed`, or `Focused` in Figma. Whether these are intentionally excluded is not documented.

## Pending Clarification

1. Group component. Segmented button is a single segment; there is no group component that controls how many segments appear or which one is selected. Confirm whether a group component is needed and how segments should be combined (for example, how `Corner=Rounded` frames join).
2. States for selected and themed segments. `Hovered`, `Pressed`, and `Focused` exist only for unselected `Color=Default` segments; there are no interactive states for a selected segment and no disabled state. Confirm whether these states are needed.
3. Unselected label contrast. Unselected labels (`text/tertiary` on `surface/subtlest`) are 3.78:1. Confirm whether a darker label color should be used.
4. Pressed border color. `Pressed` uses a green `border/evergreen` border even for `Color=Default`. Confirm whether this is intended or should follow the selected color.
5. Fixed width. Segments are fixed at 160px (MD) and 131px (SM), regardless of label length. Confirm whether segments should hug their content or fill the available width equally.

## Notes / Changelog

Generated from Figma evidence (component set `2194:2674`) on 2026-10-23.

[No verified historical changes available]
