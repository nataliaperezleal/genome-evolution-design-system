---
component: "Duo button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2135-676"
last_updated: "2026-10-22"
tags:
  - "button"
  - "button-group"
  - "action"
---

# Duo button

System: Genome Evolution Design System

## Component Summary

Duo button is a pair of Button instances, a Secondary button followed by a Primary button in the same brand color, available in two sizes and two colors.

## Quick Reference

### What It Is

Evidence-based interpretation: Duo button presents a secondary action and a primary action side by side, for example an alternative or cancel action next to the main action. This is supported by its structure (a Secondary Button on the left and a Primary Button on the right, both in the same `Color`) and by the Button guidance in Figma, which lists "To confirm or cancel processes" among its uses. Figma does not include a written usage description for the Duo button component set.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | Regular, Small | Regular |
| Color | Evergreen, Indigo | Evergreen |

Defaults are taken from the component property definitions in Figma. The component exposes no other properties at the Duo button level; the labels ("Button") are set on the nested Button instances.

### Default Configuration

`Size=Regular`, `Color=Evergreen`: a 166 × 32 px pair of an Evergreen Secondary button and an Evergreen Primary button, 8 px apart, both labeled "Button".

### Typical Usage

Verified observation: The component set has four variants (two sizes × two colors). In every variant the left button is a Secondary Button and the right button is a Primary Button, both in the variant's `Color`.

Evidence-based interpretation:

- Use Duo button when a view or section needs a main action and one lower-emphasis alternative presented together.
- Use `Size=Regular` with MD-size layouts and `Size=Small` with SM-size layouts.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a ready-made, consistently spaced pair of actions with a clear emphasis order.

### Expected Outcome

Evidence-based interpretation: Users can identify the main action (Primary, on the right) and its alternative (Secondary, on the left).

### Typical Context

Specific product contexts are not documented in Figma.

## When to Use

- To present a primary action with one secondary alternative, such as confirm and cancel (evidence-based interpretation, supported by the Button guidance "To confirm or cancel processes").

## When NOT to Use

Documented guidance inherited from the child Button component:

- Figma states that there should be only one Primary button per view. Because Duo button contains a Primary button, using it together with another Primary button in the same view conflicts with that rule.
- The Button guidance in Figma says not to use buttons "to group multiple actions with the same visual hierarchy in a single context"; Duo button groups two actions of different hierarchy.

Limitations of the current component:

- Only two actions; no variant with a single button or more than two buttons.
- The order (Secondary, then Primary) and the types are fixed in the variants.

## Composition and Hierarchy Rules

### Child components

| Position | Child | Configuration observed |
|----------|-------|------------------------|
| 1 (left) | Button | `Type=Secondary`, `Color` = Duo button `Color`, `State=Default`, `Corner=Default`; `Size=MD` in Regular, `Size=SM` in Small |
| 2 (right) | Button | `Type=Primary`, `Color` = Duo button `Color`, `State=Default`, `Corner=Default`; `Size=MD` in Regular, `Size=SM` in Small |

### Hierarchy and ordering

- The lower-emphasis action (Secondary) is always on the left and the higher-emphasis action (Primary) is always on the right.
- Both buttons always share the same brand color.
- Both buttons share the same size.

### Size mapping

| Duo button Size | Button Size | Button height | Duo button size (default labels) |
|-----------------|-------------|---------------|----------------------------------|
| Regular | MD | 32 px | 166 × 32 px |
| Small | SM | 24 px | 136 × 24 px |

### Overflow

- The component uses horizontal auto layout; its width grows with the button labels.
- Labels are single-line (inherited from Button).

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto layout row, centered, with `gap/sm` between buttons. |
| Secondary button | Required | Button instance, outlined in the brand color. |
| Primary button | Required | Button instance, filled in the brand color. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal, items centered | Design context |
| Gap | `gap/sm` (8); `Size=Small, Color=Indigo` uses a fixed 8 px value not bound to the variable | Design context |
| Height | 32 px (Regular), 24 px (Small) | Variant dimensions |
| Width (default labels) | 166 px (Regular), 136 px (Small) | Variant dimensions |
| Button padding — Regular | 16 px horizontal, `space/8` vertical | Variable bindings |
| Button padding — Small | `space/12` horizontal, `space/4` vertical | Variable bindings |
| Button radius | `semantic/sm` (4) | Variable binding |

## Semantics

Evidence-based interpretation: The right button is the main action and the left button is the alternative. The Primary type is described in Figma as the button for the most important action of a screen or section.

Not verified in Figma: HTML structure (for example, a button group), ARIA attributes and focus order.

## Variants (Properties)

The inventory below is complete: all four variants were inspected.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Regular | Two MD buttons (32 px high); `Text/Button/MD` labels. | Default |
| Small | Two SM buttons (24 px high); `Text/Button/SM` labels. | — |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Evergreen | Secondary: `border/evergreen`, `text/evergreen`, `background/canvas`. Primary: `surface/evergreen/bold`, `text/inverse`. | Default |
| Indigo | Secondary: `border/indigo`, `text/indigo`, `background/canvas`. Primary: `surface/indigo/bold`, `text/inverse`. | — |

## States

The Duo button component set has no state property; both nested buttons use `State=Default`. Interactive states are defined by the Button component.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Spacing | `gap/sm` | Gap between buttons | Variable binding |
| Background | `background/canvas` | Secondary button fill | Variable binding |
| Surface | `surface/evergreen/bold`, `surface/indigo/bold` | Primary button fill | Variable binding |
| Border | `border/evergreen`, `border/indigo`, `width/1` | Secondary button border | Variable binding |
| Text | `text/evergreen`, `text/indigo` | Secondary label | Variable binding |
| Text | `text/inverse` | Primary label | Variable binding |
| Spacing | `size/16`, `space/16`, `space/8`, `space/12`, `space/4` | Button padding | Variable binding |
| Radius | `semantic/sm` | Button corners | Variable binding |
| Typography | `Text/Button/MD`, `Text/Button/SM` | Labels by size | Text styles |

Current behavior:

- The gap in `Size=Small, Color=Indigo` is a fixed 8 px value rather than `gap/sm`; the result is the same.
- In `Size=Regular`, both nested buttons are 32 px high; the Primary button uses 8 px vertical padding here.

## Interaction

The component has no state variants or prototype interactions of its own. Interaction states are those of the nested Button instances.

Not verified in Figma: the actions triggered and keyboard order.

## Accessibility

Accessibility-related observations:

- The two actions differ by fill (outlined vs. solid) and position, not only by color.
- Focus appearance is defined by Button (`State=Focused`, 2 px `border/focus`).
- Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): grouping semantics, focus order between the two buttons and keyboard behavior.

## Content Guidelines

Verified observation: Both buttons use the sample label "Button". Labels are set on the nested Button instances and are single-line.

## Examples

### Confirmation pair

Configuration: `Size=Regular`, `Color=Evergreen`

Description: Evergreen Secondary and Primary buttons: an alternative action next to the main action.

Evidence / Classification: Existing variant in Figma (default configuration).

### Compact Indigo pair

Configuration: `Size=Small`, `Color=Indigo`

Description: SM Indigo Secondary and Primary buttons.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| Duo button together with another Primary button in the same view | Figma states there should be only one Primary button per view | Button Primary description in Figma |

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
