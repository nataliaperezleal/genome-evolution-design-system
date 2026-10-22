---
component: "Accordion"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-22"
tags:
  - "accordion"
  - "disclosure"
  - "layout"
---

# Accordion

System: Genome Evolution Design System

## Component Summary

Accordion is a disclosure container with a header that shows or hides a content area, available in two sizes, three colors, and Default, Hovered, Pressed, Focused, Disabled and Loading states.

## Quick Reference

### What It Is

The Accordion is a progressive disclosure component that allows users to show and hide content associated with a section. Its primary purpose is to organize information into expandable and collapsible areas, reducing visual clutter and improving the exploration of lengthy content within an interface.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Behavior | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| Size | MD, SM | MD |
| State | Default, Hovered, Pressed, Focused, Disabled, Loading | Default |
| text (text) | Free text | Placeholder |
| showLeftIcon (boolean) | true, false | false |
| icon (instance swap) | Any icon instance | info |
| showCheckbox (boolean) | true, false | false |
| showBadge (boolean) | true, false | false |
| Content slot | Any content | Empty |

Defaults are taken from the component property definitions in Figma. `Evergreen` and `Indigo` are available only with `Behavior=Expanded` and the states `Default`, `Hovered`, `Pressed` and `Focused`.

### Default Configuration

`Behavior=Collapsed`, `Color=Default`, `Size=MD`, `State=Default`, `text="Placeholder"`, with the left icon, checkbox and badge hidden. In this configuration, the accordion shows a 36 px header with the label and a `chevron-down` icon.

### Typical Usage

Verified observation: The component set contains 40 variants. `Color=Default` covers both behaviors, both sizes and all six states (24 variants). `Evergreen` and `Indigo` cover only `Behavior=Expanded` in four states and both sizes (8 variants each).

Evidence-based interpretation:

- Use `Behavior=Collapsed` to show only the header, and `Behavior=Expanded` to show the header and its content.
- Use `Size=MD` for standard layouts and `Size=SM` for compact layouts; SM reduces header padding and content padding.
- Use `Color=Evergreen` or `Color=Indigo` to tint the expanded header label and divider.
- Use `State=Loading` while the header and content are being loaded; the variant replaces them with skeleton placeholders.
- Use `State=Disabled` when the section is unavailable.

Recommendation: Stack several accordions vertically to build a group of collapsible sections, using the same `Size` and `Color` across the group.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Reduces visual load by letting users hide secondary or lengthy content behind a labeled header and reveal it on demand.

### Expected Outcome

Evidence-based interpretation: Users can scan section headers and open only the sections they need.

### Typical Context

Specific product contexts are not documented in Figma. The fixed 265 px width in all variants and the optional checkbox, badge and left icon suggest use in panels, side bars or settings lists; this is an evidence-based interpretation.

## When to Use

Evidence-based interpretations based on the available variants:

- To organize secondary or supporting information that does not need to remain permanently visible.
- When multiple related content sections exist on the same page.
- For FAQs, configuration details, or explanatory content.
- In complex forms where groups of fields can be displayed on demand.
- When optimizing vertical space is important.
- To enable users to progressively explore content.

## When NOT to Use

- When the content is critical and must remain visible at all times.
- To hide information required to complete a primary task.
- When the content volume is small enough to fit comfortably on screen.
- As a replacement for structured page or application navigation.
- When users need to compare information across multiple sections simultaneously.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Header Container | Required | Row containing the header elements; carries the state background. |
| Left icon (`info`) | Optional (`showLeftIcon`) | 16 px icon before the label; swappable through `icon`. |
| Checkbox | Optional (`showCheckbox`) | Nested checkbox instance with a `bizagi-lines` icon, placed before the label. |
| Label | Required | Header text, set through `text`. |
| Badge | Optional (`showBadge`) | Small rounded counter (shows "0") before the chevron. |
| Chevron | Required | 12 px `chevron-down` (Collapsed) or `chevron-up` (Expanded). |
| Content Container | Required in `Behavior=Expanded` | Area below the header that holds the content slot. |
| Content slot | Required in `Behavior=Expanded` | Figma slot (for example, `Content MD Default`) that accepts custom content. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 265 px (all variants) | Variant dimensions |
| Header height — MD | 36 px | Variant dimensions |
| Header height — SM | 24 px | Variant dimensions |
| Header padding — MD | `space/16` (16) horizontal, `space/8` (8) vertical | Variable bindings |
| Header padding — SM | `space/8` (8) horizontal, `space/2` (2) vertical | Variable bindings |
| Header gap | `gap/sm` (8) | Variable bindings |
| Content Container height | 100 px (Expanded, both sizes) | Variant dimensions |
| Content padding — MD | `space/16` (16) | Variable bindings; slot 233 × 68 px |
| Content padding — SM | `space/8` (8) | Layer positions; slot 249 × 84 px |
| Content slot radius | `radius/4` (4) | Variable binding |
| Total height — Expanded | 136 px (MD), 124 px (SM) | Variant dimensions |
| Label typography | `Text/Body/SM`: `family/body` (Open Sans), `weight/regular` (400), `size/14`, `line-height/20` | Text style |
| Icon sizes | Left icon 16 px; chevron 12 px | Layer dimensions |

## Semantics

Evidence-based interpretation: The header labels a section of content, and the chevron direction reflects whether the section is collapsed (`chevron-down`) or expanded (`chevron-up`). `Color` values tint the label and the header divider in the expanded state; Figma does not document whether they carry meaning. The meaning of the checkbox and badge in the header is not documented in Figma.

Not verified in Figma: HTML elements, ARIA roles or attributes (for example, expanded state announcement), and screen-reader behavior.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Left icon | `info` by default; swappable via `icon`; hidden unless `showLeftIcon=true` | Instance swap property |
| Chevron | `chevron-down` (Collapsed), `chevron-up` (Expanded); `icon/primary`, `icon/disabled` in Disabled | Layer names, variable bindings |
| Checkbox icon | `bizagi-lines`, shown next to the checkbox when `showCheckbox=true` | Nested instance |

## Variants (Properties)

The inventory below is complete: all 40 variants were inspected.

### Behavior

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Collapsed | Header only, with `chevron-down` and a 1 px `border/default` bottom border. | `Color=Default` only |
| Expanded | Header plus a 100 px content area; `chevron-up`; header divider in the color of `Color`. | All colors |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Label `text/primary`; expanded divider `border/strong`. | All behaviors and states |
| Evergreen | Label `text/evergreen`; expanded divider `border/evergreen`. | Expanded only; Default, Hovered, Pressed, Focused |
| Indigo | Label `text/indigo`; expanded divider `border/indigo`. | Expanded only; Default, Hovered, Pressed, Focused |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 36 px header; 16 px content padding. | All colors |
| SM | 24 px header; 8 px content padding. | All colors |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Header background `background/canvas`. | All colors |
| Hovered | Header background `background/interactive/hovered`. | All colors |
| Pressed | Header background `background/interactive/pressed`. | All colors |
| Focused | 2 px (`focus/width`) `border/focus` outline around the whole accordion. | All colors |
| Disabled | Header background `background/disabled`, label `text/disabled`, icons `icon/disabled`. | `Color=Default` only |
| Loading | Header and content replaced by skeleton blocks in `background/loading`. | `Color=Default` only |

### text

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Header label. "Placeholder" in all variants. | Text property |

### showLeftIcon / icon

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| showLeftIcon=false | Left icon hidden. | Default |
| showLeftIcon=true | Shows the icon set in `icon` (`info` by default). | In `Disabled`, the icon is not exposed for swapping |

### showCheckbox

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| false | Checkbox hidden. | Default |
| true | Shows the nested checkbox (with `bizagi-lines` icon) before the label. | In `Collapsed / MD / Default` the nested checkbox also shows its own "Label" text |

### showBadge

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| false | Badge hidden. | Default |
| true | Shows a counter badge before the chevron. | Not shown in `Disabled` and `Loading` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | `background/canvas` header. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered` header. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed` header. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` outline around the accordion; replaces the bottom border/divider. | State variants |
| Disabled | Unavailable appearance. | `background/disabled` header; `text/disabled` label; `icon/disabled` chevron; Collapsed has no bottom border. | State variants |
| Loading | Loading appearance. | Skeleton blocks (`background/loading`) replace label, chevron and content. | State variants |

These are visual variants; transitions and timing are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Header (Default state) and content area | Variable binding |
| Background | `background/interactive/hovered` | Header, Hovered | Variable binding |
| Background | `background/interactive/pressed` | Header, Pressed | Variable binding |
| Background | `background/disabled` | Header, Disabled | Variable binding |
| Background | `background/loading` | Skeleton blocks, Loading | Variable binding |
| Border | `border/default` | Collapsed bottom border | Variable binding |
| Border | `border/strong` | Expanded divider, Color=Default | Variable binding |
| Border | `border/evergreen` | Expanded divider, Color=Evergreen | Variable binding |
| Border | `border/indigo` | Expanded divider, Color=Indigo | Variable binding |
| Border | `border/disabled` | Expanded divider, Disabled | Variable binding |
| Border | `border/focus`, `focus/width` | Focus outline | Variable binding |
| Text | `text/primary`, `text/evergreen`, `text/indigo`, `text/disabled` | Label color by Color/State | Variable binding |
| Icon | `icon/primary`, `icon/disabled` | Chevron and icons | Variable binding |
| Spacing | `space/16`, `space/8`, `space/2`, `gap/sm` | Header and content padding, gaps | Variable binding |
| Radius | `radius/4` | Content slot | Variable binding |
| Typography | `Text/Body/SM` | Label | Text style |

Limitation: The nested Badge uses hard-coded colors and type values that are not bound to Genome Evolution variables, so its token mapping cannot be documented.

## Interaction

Observed states: `Default`, `Hovered`, `Pressed` and `Focused` exist for all colors; `Disabled` and `Loading` exist for `Color=Default`.

Evidence-based interpretation: The header acts as the control that toggles between `Collapsed` and `Expanded`, as indicated by the interactive header states and the chevron direction.

Not verified in Figma: the actual toggle behavior, whether multiple accordions can be open at once, keyboard interaction, animation, and the interaction of the header checkbox. No prototype interactions were found.

## Accessibility

Accessibility-related observations:

- `Focused` shows a visible 2 px `border/focus` outline around the whole accordion in every color and size.
- `Disabled` changes background, label and icon colors, so the state is not conveyed by a single cue.
- The chevron direction differs between collapsed and expanded, but the expanded state is also conveyed by the visible content area.
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): ARIA roles and attributes, keyboard support, focus order, screen-reader announcements and the accessible name of the header checkbox.

## Content Guidelines

Verified observation: The header label uses `Text/Body/SM` and wraps within the available width (the label fills the remaining space in the header).

Recommendation: Keep header labels short and descriptive so the section content is clear before expanding. Figma does not define a maximum label length.

## Examples

### Collapsed section

Configuration: `Behavior=Collapsed`, `Color=Default`, `Size=MD`, `State=Default`

Description: A single header with label and `chevron-down`.

Evidence / Classification: Existing variant in Figma.

### Expanded colored section

Configuration: `Behavior=Expanded`, `Color=Evergreen`, `Size=MD`, `State=Default`

Description: Evergreen label and divider with the content slot visible.

Evidence / Classification: Existing variant in Figma.

### Compact loading section

Configuration: `Behavior=Expanded`, `Color=Default`, `Size=SM`, `State=Loading`

Description: Skeleton placeholders while the content loads.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `Color=Evergreen` or `Color=Indigo` with `Behavior=Collapsed` | No such variant exists | Variant inventory |
| `Color=Evergreen` or `Color=Indigo` with `State=Disabled` or `State=Loading` | No such variant exists | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

1. Collapsed colored accordions: `Evergreen` and `Indigo` exist only as `Expanded`. When a colored accordion is collapsed, should it switch to `Color=Default`, or are collapsed Evergreen/Indigo variants missing? This determines how designers represent the collapsed state of a colored accordion.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
