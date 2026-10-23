---
component: "Stepper"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2339-4361"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "progress"
  - "wizard"
---

# Stepper

System: Genome Evolution Design System

## Component Summary

Stepper is a single step of a step indicator: a pill with a step number or check mark and a label, with optional connector lines on both sides, available in four states and three colors.

## Quick Reference

### What It Is

Evidence-based interpretation: one step in a multi-step process indicator. Each variant of the component set (Figma node `2339:4361`) is a pill-shaped step with a nested Badge showing the step number ("0") or, when completed, a check mark, plus a label ("Step label"). Short connector lines on the left and right let steps be placed in a row to form the full indicator. No written component description is defined for Stepper in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Selected, Checked, Disabled | Default |
| text | Text | "Step label" |
| backLine | true, false | true |
| nextLine | true, false | true |

### Default Configuration

The component property defaults exposed by Figma are `Color=Default`, `State=Default`, `text="Step label"`, `backLine=true`, and `nextLine=true`. This corresponds to variant `2339:4368`, the top-left variant of the component set: a white step pill with a "0" badge, the label, and connector lines on both sides.

### Typical Usage

Verified observations:

- `State=Default` and `State=Disabled` exist only for `Color=Default`; `Selected` and `Checked` exist for all three colors.
- `Default` and `Selected` show a numbered Badge; `Checked` replaces it with a 12px check mark; `Disabled` shows a muted Badge.
- `Selected` makes the label semibold; `Evergreen` and `Indigo` color the border, badge, and label.
- The step number is the label of the nested Badge ("0") and is not exposed as a Stepper property.

Evidence-based interpretation:

- Place steps in a row: `Checked` for completed steps, `Selected` for the current step, `Default` for upcoming steps, and `Disabled` for steps that are not available.
- Turn off `backLine` on the first step and `nextLine` on the last step.
- Use `Evergreen` or `Indigo` for selected and checked steps to match the product theme.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: in multi-step flows, users need to know where they are, which steps are complete, and what remains.

### Expected Outcome

Evidence-based interpretation: the user sees the current step, the completed steps, and the remaining steps at a glance.

### Typical Context

Evidence-based interpretation: wizards, checkout flows, onboarding, and multi-step forms.

## When to Use

Evidence-based interpretations, derived from the states and structure:

- To show progress through a sequence of steps.
- To show which step is current (`Selected`), completed (`Checked`), upcoming (`Default`), or unavailable (`Disabled`).

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Stepper in Figma. As recommendations only:

- Avoid it for processes with a single step.
- Use Progress bar when only overall completion matters and individual steps do not need labels.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Back line | Optional (`backLine`) | 8 × 1px connector line before the step (see Pending Clarification for `Disabled`). |
| Step pill | Required | Fully rounded bordered container. |
| Badge | State-dependent | Nested Badge instance (Line type) with the step number; shown in `Default`, `Selected`, and `Disabled`. |
| Check mark | State-dependent | 12px check icon; shown in `Checked` instead of the Badge. |
| Label | Required | Step name. Default text: "Step label". |
| Next line | Optional (`nextLine`) | 8 × 1px connector line after the step. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height | 24px | Direct measurement |
| Width | 105–109px (with default text) | Direct measurement |
| Step pill padding | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Step pill radius | Fully rounded | `semantic/full` |
| Step pill border | 1px | Direct measurement |
| Gap inside pill | 4px (`Default`, `Selected`); 8px (`Checked`, `Disabled`) | `gap/xxs`; `gap/sm` |
| Connector lines | 8 × 1px each | Direct measurement |
| Badge | 14px tall; 4px horizontal padding; fully rounded | Badge component; `space/4`, `semantic/full` |
| Check icon | 12px | Direct measurement |

## Semantics

Evidence-based interpretation:

- `Default` represents an upcoming step, `Selected` the current step, `Checked` a completed step, and `Disabled` a step that cannot be reached.
- The Badge number represents the step's position in the sequence.
- `Color` is a theme choice for the selected and completed steps; no other meaning is documented.

Not verified in Figma: list or navigation semantics, `aria-current="step"`, whether steps are clickable, and how completed steps are announced.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Check mark | 12px check; `icon/primary` in `Default` color, `icon/evergreen` or `icon/indigo` in themed colors | Figma layers and variables |

The check mark is not exposed as an instance-swap property.

## Variants (Properties)

The variant inventory is complete: 8 variants. All variants were inspected. Boolean and text property names are listed as exposed by the Figma MCP.

| Color | Available states |
|-------|------------------|
| Default | Default, Selected, Checked, Disabled |
| Evergreen | Selected, Checked |
| Indigo | Selected, Checked |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Neutral gray border and badge. | Default |
| Evergreen | Green border, badge, label, and check. | `border/evergreen`, `text/evergreen`, `surface/evergreen/subtle` |
| Indigo | Purple border, badge, label, and check. | `border/indigo`, `text/indigo`, `surface/indigo/subtle` |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | White pill, neutral badge, regular label. | `Color=Default` only; variant `2339:4368` |
| Selected | White pill, themed border and badge, semibold label. | Variants `2339:4380`, `2339:4374`, `2339:4386` |
| Checked | Tinted pill with check mark and regular label. | Variants `2339:4416`, `2339:4410`, `2339:4422` |
| Disabled | Gray pill with muted badge and label. | `Color=Default` only; variant `2339:4362` |

### text / backLine / nextLine

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| text | Step label. | Default: "Step label" |
| backLine | Shows the connector line before the step. | Default: `true` |
| nextLine | Shows the connector line after the step. | Default: `true` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Upcoming step | `background/canvas`, `border/default`, Badge (Line, Default), `Text/Body/XS` label | Variant `2339:4368` |
| Selected | Current step | Themed border and Badge; `Text/Body/XS Strong` label | Variants `2339:4380`, `2339:4374`, `2339:4386` |
| Checked | Completed step | `surface/subtlest`, `surface/evergreen/subtle`, or `surface/indigo/subtle` background; check mark | Variants `2339:4416`, `2339:4410`, `2339:4422` |
| Disabled | Unavailable step | `background/disabled`, `border/disabled`, `text/disabled` | Variant `2339:4362` |

These are visual state variants. There are no hover, pressed, or focus states.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Pill (`Default`, `Selected`) | Figma variables |
| Color — surface | `surface/subtlest` | Pill (`Checked`, Default color); Badge background | Figma variables |
| Color — surface | `surface/evergreen/subtle`, `surface/indigo/subtle` | Pill (`Checked`, themed) | Figma variables |
| Color — surface | `background/disabled` | Pill (`Disabled`) | Figma variables |
| Color — border | `border/default`, `border/evergreen`, `border/indigo`, `border/disabled` | Pill and Badge borders | Figma variables |
| Color — text | `text/primary`, `text/evergreen`, `text/indigo`, `text/secondary`, `text/disabled` | Label and Badge number | Figma variables |
| Color — icon | `icon/secondary` | Connector lines | Figma variables |
| Color — icon | `icon/primary`, `icon/evergreen`, `icon/indigo` | Used by the component set (check mark); exact layer binding not inspected | Figma variables |
| Spacing | `space/8`, `space/4`, `space/0`, `gap/xxs`, `gap/sm`, `gap/none` | Padding and gaps | Figma variables |
| Radius | `semantic/full` | Pill and Badge | Figma variables |
| Typography | `Text/Body/XS` | Label (`Default`, `Checked`, `Disabled`) | Figma text style |
| Typography | `Text/Body/XS Strong` | Label (`Selected`) | Figma text style |
| Typography | `Text/Body/XXS Strong` | Badge number | Figma text style |

Not bound to tokens: the 1px borders and the 8 × 1px connector lines. The connector lines use an icon color variable (`icon/secondary`).

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Stepper has no interactive state variants.
- Evidence-based interpretation: steps change state as the user progresses. Whether completed or upcoming steps can be clicked to navigate is not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Completed steps are shown with a check mark, and the current step with a bold label and colored border, not by color alone.
- Text contrast: label `text/primary` 12.78:1 on white; `text/evergreen` 5.01:1 on its checked background; `text/indigo` 8.78:1 on its checked background; Badge number `text/secondary` 5.12:1.
- The Badge number is 10px; the label is 12px.
- The default pill border (`border/default`) is 1.66:1 on white; connector lines (`icon/secondary`) are 3.16:1.

Missing accessibility information: step list semantics, current-step announcement, completed-state announcement, and whether steps are focusable.

## Content Guidelines

Verified observations:

- Default content is "Step label" and the Badge number "0"; both are placeholders.
- Labels are single-line.

Recommendations:

- Use short labels of one or two words that describe each step.
- Number steps starting at 1 and keep the numbering consistent with the order.

## Examples

### Three-step flow, second step current

Configuration: step 1 `State=Checked`, `backLine=false`; step 2 `State=Selected`; step 3 `State=Default`, `nextLine=false`; all `Color=Evergreen` where available

Description: a step indicator showing one completed step, the current step, and one upcoming step.

Evidence / Classification: recommendation built from existing Figma variants (`2339:4410`, `2339:4374`, `2339:4368`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: `Evergreen` and `Indigo` have no `Default` or `Disabled` variants, so these combinations cannot be selected in Figma. Whether they are intentionally excluded is not documented.

## Pending Clarification

1. Connector toggles in `Disabled`. In the `Disabled` variant, `nextLine` controls the line before the step and `backLine` controls the line after it, the opposite of the other variants. Confirm and correct the bindings.
2. Step number. The step number is the label of the nested Badge ("0") and is not exposed as a Stepper property. Confirm whether a step-number property should be added.
3. Group component and orientation. Stepper is a single step; there is no component for a full step sequence, and only a horizontal layout with 8px connectors exists. Confirm whether a group component, vertical orientation, or longer connectors are needed.
4. Themed upcoming steps. `Evergreen` and `Indigo` have no `Default` or `Disabled` variants, so a themed stepper must mix `Color=Default` for upcoming steps. Confirm whether this is intended.

## Notes / Changelog

Generated from Figma evidence (component set `2339:4361`) on 2026-10-23.

[No verified historical changes available]
