---
component: "BreadcrumbItem"
system: "Genome Evolution Design System"
type: "Component set (internal building block)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2998-19004"
last_updated: "2026-10-22"
tags:
  - "breadcrumb"
  - "navigation"
  - "building-block"
---

# BreadcrumbItem

System: Genome Evolution Design System

## Component Summary

BreadcrumbItem is a single step of a breadcrumb trail, available as an overflow indicator (`Overflow`), an intermediate level (`Level`) or the current page (`Current`), each with Default, Hovered, Pressed, Focused and Disabled states.

## Quick Reference

### What It Is

Evidence-based interpretation: BreadcrumbItem is the building block used to compose a breadcrumb trail. This is supported by the component name, the `Item` values `Overflow` (an ellipsis "…" followed by `chevron-right`), `Level` (a label followed by `chevron-right`) and `Current` (a label without a chevron), and by the interactive state variants. The Figma name `.BreadcrumbItem` starts with a period; in Figma, components whose names start with a period are not published to the library, so this component is meant to be used inside another component rather than inserted directly. Figma does not include a written usage description for this component.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Item | Overflow, Level, Current | Overflow |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |

Defaults are taken from the component property definitions in Figma. Every `Item` and `State` combination exists (15 variants). The component exposes no text property; the label ("Text") and the ellipsis ("…") are edited by overriding the text layer directly.

### Default Configuration

`Item=Overflow`, `State=Default`: an ellipsis ("…") in `Text/Button/MD` (`text/primary`) followed by a 12 px `chevron-right` in `icon/secondary`, with no background.

### Typical Usage

Verified observation: The component set contains 15 variants: three `Item` values, each in five states. All variants are 36 px high, with 8 px padding and a 4 px corner radius.

Evidence-based interpretation:

- `Level` represents a previous step in the trail; its chevron separates it from the next item.
- `Current` represents the last step (the current location); it has no chevron and uses a stronger label style (`Text/Button/MD`, `text/primary`) than `Level` (`Text/Body/SM`, `text/secondary`).
- `Overflow` represents collapsed intermediate steps, shown as "…".

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent, stateful item for building breadcrumb trails, with separate appearances for previous levels, the current location and collapsed steps.

### Expected Outcome

Evidence-based interpretation: Users can see where they are in a hierarchy and identify previous levels.

### Typical Context

Evidence-based interpretation: Used inside a breadcrumb component, as indicated by the period-prefixed (unpublished) component name. The parent component is not referenced in this component set.

## When to Use

Evidence-based interpretations based on the available variants:

- `Item=Level` for each previous level of the hierarchy.
- `Item=Current` for the final item that represents the current location.
- `Item=Overflow` to represent intermediate levels that are collapsed.

## When NOT to Use

[No documented restrictions found]

Because the component is not published to the library (period-prefixed name), it is not available for direct insertion from the library.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Auto layout frame that carries the state background or focus border. |
| Label | Required | Text layer: "…" in `Overflow`, "Text" in `Level` and `Current`. |
| Chevron (`chevron-right`) | Present in `Overflow` and `Level` | 12 px separator icon after the label. Not present in `Current`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height | 36 px (all variants) | Variant dimensions |
| Width (with sample content) | 48 px (`Overflow`), 64 px (`Level`), 46 px (`Current`) | Variant dimensions |
| Padding | `space/8` (8) | Variable binding |
| Gap between label and chevron | `gap/sm` (8) | Variable binding |
| Corner radius | `radius/4` (4) | Variable binding |
| Chevron size | 12 × 12 px | Layer dimensions |
| Label typography — `Overflow`, `Current` | `Text/Button/MD`: `family/body` (Open Sans), `weight/semibold` (600), `size/14`, `line-height/16` | Text style |
| Label typography — `Level` | `Text/Body/SM`: `family/body`, `weight/regular` (400), `size/14`, `line-height/20` | Text style |
| Label wrapping | Single line (no wrapping) | Design context |
| Focus border | 2 px `border/focus` (width not bound to a variable) | Design context |

## Semantics

Evidence-based interpretation: The `Item` values describe the item's position in a hierarchy: previous level (`Level`), current location (`Current`) or collapsed levels (`Overflow`). The chevron is a visual separator pointing to the next level. The stronger label style of `Current` distinguishes the current location from previous levels.

Not verified in Figma: HTML elements, ARIA roles or attributes (for example, marking the current page), link behavior and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Separator | `chevron-right`, 12 px, after the label in `Overflow` and `Level` | Layer name, dimensions |

Chevron color by variant: `icon/secondary` in `Overflow / Default`; `icon/primary` in `Overflow` Hovered, Pressed and Focused and in `Level` Default, Hovered, Pressed and Focused; `icon/disabled` in Disabled.

## Variants (Properties)

The inventory below is complete: all 15 variants were inspected.

### Item

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Overflow | "…" label (`Text/Button/MD`, `text/primary`) plus `chevron-right`. | 5 states |
| Level | "Text" label (`Text/Body/SM`, `text/secondary`) plus `chevron-right`. | 5 states |
| Current | "Text" label (`Text/Button/MD`, `text/primary`); no chevron. | 5 states |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | No background. | All items |
| Hovered | Background `background/interactive/hovered`. | All items |
| Pressed | Background `background/interactive/pressed`. | All items |
| Focused | 2 px `border/focus` border; no background. | All items |
| Disabled | Label `text/disabled`; chevron `icon/disabled`; no background. | All items |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | No background. In `Overflow`, the chevron uses `icon/secondary`. | State variants |
| Hovered | Hover appearance. | `background/interactive/hovered`; chevron `icon/primary`. | State variants |
| Pressed | Pressed appearance. | `background/interactive/pressed`; chevron `icon/primary`. | State variants |
| Focused | Focus appearance. | 2 px `border/focus` border around the item. | State variants |
| Disabled | Unavailable appearance. | `text/disabled` label; `icon/disabled` chevron. | State variants |

`Current` has the same five states as the other items. These are visual variants; transitions are not defined in Figma.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/interactive/hovered` | Hovered | Variable binding |
| Background | `background/interactive/pressed` | Pressed | Variable binding |
| Border | `border/focus` | Focused | Variable binding |
| Text | `text/primary` | `Overflow` and `Current` label | Variable binding |
| Text | `text/secondary` | `Level` label | Variable binding |
| Text | `text/disabled` | Disabled label | Variable binding |
| Icon | `icon/primary`, `icon/secondary`, `icon/disabled` | Chevron (see Iconography) | Variable binding |
| Spacing | `space/8`, `gap/sm` | Padding and gap | Variable binding |
| Radius | `radius/4` | Corner radius | Variable binding |
| Typography | `Text/Button/MD`, `Text/Body/SM` | Label by item | Text styles |

The 2 px focus border width is a fixed value and is not bound to `focus/width`.

## Interaction

Observed states: `Default`, `Hovered`, `Pressed`, `Focused` and `Disabled` exist for all three items, including `Current`.

Not verified in Figma: navigation behavior, what activating `Overflow` does (for example, revealing collapsed levels), whether `Current` is interactive, keyboard interaction and prototype interactions. No prototype interactions were found.

## Accessibility

Accessibility-related observations:

- `Focused` shows a visible 2 px `border/focus` border on every item.
- `Current` is distinguished from `Level` by weight (600 vs 400), color (`text/primary` vs `text/secondary`) and the absence of a chevron, so the current location is not indicated by color alone.
- `Disabled` changes both label and chevron colors.
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): accessible names (including for the "…" overflow item), indication of the current page to assistive technologies, the role of the chevron for screen readers, and keyboard support.

## Content Guidelines

Verified observation: Labels are single-line and use "Text" as sample content; `Overflow` uses an ellipsis ("…"). The component has no text property, so labels are changed by overriding the text layer.

## Examples

### Previous level

Configuration: `Item=Level`, `State=Default`

Description: Secondary-color label followed by a chevron.

Evidence / Classification: Existing variant in Figma.

### Current location

Configuration: `Item=Current`, `State=Default`

Description: Primary-color, semibold label without a chevron.

Evidence / Classification: Existing variant in Figma.

### Collapsed levels, focused

Configuration: `Item=Overflow`, `State=Focused`

Description: Ellipsis and chevron with a focus border.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
