---
component: "Progress bar"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-1888"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "progress"
  - "status"
---

# Progress bar

System: Genome Evolution Design System

## Component Summary

Progress bar is a thin horizontal bar that shows a fixed level of completion (10%, 25%, 70%, or 100%) with an Evergreen or Indigo fill.

## Quick Reference

### What It Is

The Progress Bar component is a horizontal progress indicator that visually communicates the completion status of a task, process, or workflow. It represents progress through a filled portion of the bar, allowing users to quickly understand how much work has been completed and how much remains.

The component is available in multiple brand colours and supports different progress values, from initial states to full completion.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Evergreen, Indigo | Evergreen |
| Progress | 10%, 25%, 70%, 100% | 10% |

### Default Configuration

The component property defaults exposed by Figma are `Color=Evergreen` and `Progress=10%`. This corresponds to variant `2190:1947`, the top-left variant of the component set.

### Typical Usage

Verified observations:

- The bar is 350px wide and 8px tall in every variant.
- Progress is available only in four fixed steps: 10%, 25%, 70%, and 100%.
- The rendered fill length does not match every label: 10% and 100% match, but 25% renders at about 33% and 70% at about 67% of the track; see Pending Clarification.
- `Color` matches the Evergreen and Indigo color themes, which also appear as `Color` values in the Button and Link components.

Evidence-based interpretation:

- Use Progress bar to show progress of a task, upload, or multi-step process.
- Use the `Color` value that matches the product theme or surrounding components.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need to know how far a task or process has advanced and how much remains.

### Expected Outcome

Evidence-based interpretation: the user sees the proportion of completion at a glance.

### Typical Context

Evidence-based interpretation: file uploads, multi-step forms, onboarding flows, and process tracking.

## When to Use

- To indicate the progress of a loading, processing, or synchronization task.
- In multi-step workflows where overall progress needs to be communicated.
- During data generation, export, or import processes.
- To display the completion percentage of a long-running task.
- In dashboards that present completion or achievement indicators.
- When the system knows the actual progress of the ongoing process.

## When NOT to Use

- When no reliable progress information is available.
- To represent binary states such as active/inactive or completed/not completed.
- To display navigation between workflow steps (use a Stepper when sequential navigation is required).
- For instant processes where the indicator would only appear briefly.
- When the objective is to present comparative metrics rather than progress.
- As a replacement for status messages or success confirmations.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Track | Required | 350 × 8px rounded container with a `background/canvas` (white) background. |
| Fill | Required | 6px-tall rounded bar in the `Color` theme color, starting at the left. |

Internally, `Progress=10%` and `Progress=25%` are built from equal-width segments (ten and three segments) where only the first is colored; `70%` uses a fixed-width fill and `100%` a full-width fill.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Track size | 350 × 8px | Direct measurement |
| Track radius | 8px | `semantic/md` |
| Track padding | Horizontal `space/1` (1px); vertical `space/2` (2px) bound; the fill is rendered 1px from each edge | Figma variables; direct measurement |
| Gap | 0px | `gap/none` |
| Fill height | 6px | Direct measurement |
| Fill radius | 8px | `semantic/md` |
| Fill width — 10% | 34.8px (10% of the 348px inner track) | Direct measurement |
| Fill width — 25% | 116px (about 33% of the inner track) | Direct measurement |
| Fill width — 70% | 232px (about 67% of the inner track) | Direct measurement |
| Fill width — 100% | 348px | Direct measurement |
| Overflow | Clipped | Figma layer |

## Semantics

Evidence-based interpretation:

- The fill length represents the proportion of completion.
- `Color` is a theme choice, not a status; no semantic meaning (for example, success or error) is documented for it.

Not verified in Figma: `progressbar` role, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, accessible label, and screen-reader announcements.

## Variants (Properties)

The variant inventory is complete: 8 variants (2 `Color` × 4 `Progress`). All variants were inspected.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Evergreen | Green fill. | Default; `icon/evergreen` (#297a39) |
| Indigo | Purple fill. | `icon/indigo` (#6b1b99) |

### Progress

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| 10% | Fill covers 10% of the track. | Default; variants `2190:1947`, `2190:1910` |
| 25% | Fill covers about 33% of the track. | Variants `2190:1931`, `2190:1893`; see Pending Clarification |
| 70% | Fill covers about 67% of the track. | Variants `2190:1980`, `2190:1925`; see Pending Clarification |
| 100% | Fill covers the whole track. | Variants `2190:1986`, `2190:1929` |

## States

Progress bar has no state variants. There are no indeterminate, paused, error, or success variants.

## Token Mapping

All tokens below are verified as Figma variables used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Track background | Figma variables |
| Color — fill | `icon/evergreen` | Fill (`Color=Evergreen`) | Figma variables |
| Color — fill | `icon/indigo` | Fill (`Color=Indigo`) | Figma variables |
| Radius | `semantic/md` | Track and fill radius (8px) | Figma variables |
| Spacing | `space/1`, `space/2` | Track padding | Figma variables |
| Spacing | `gap/none` | Gap between segments | Figma variables |

The fill uses `icon/...` color variables rather than surface or fill variables. Not bound to tokens: the 350px width, the 8px and 6px heights, and the 8px radius of the internal empty segments.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Progress bar has no interactive elements or state variants.
- Evidence-based interpretation: the fill length is updated as progress changes. Animation and update behavior are not defined in Figma.

## Accessibility

- Mandatory requirements
- Contrast between the track, progress indicator, and background must meet WCAG AA requirements.
- When progress is task-critical, it must be communicated through accessible information for assistive technologies.
- Progress states and updates must not rely solely on colour.
Recommendations
- Supplement the progress bar with percentages or descriptive status text when relevant.
- Ensure progress updates are understandable for screen reader users.

## Content Guidelines

Progress bar contains no text. Recommendation: pair it with a visible label or percentage text when the exact value or the task name matters.

## Examples

### Upload in progress

Configuration: `Color=Evergreen`, `Progress=70%`

Description: a bar showing that most of a task is complete.

Evidence / Classification: existing Figma configuration (variant `2190:1980`).

### Completed process (Indigo theme)

Configuration: `Color=Indigo`, `Progress=100%`

Description: a fully filled bar in the Indigo theme.

Evidence / Classification: existing Figma configuration (variant `2190:1929`).

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `10` | Current progress value (determinate). |
| `max` | `number` | `100` | Maximum progress value. |
| `indeterminate` | `boolean` | `false` | Unknown duration loading state. |
| `tone` | `"evergreen" \| "indigo" \| "neutral"` | `"evergreen"` | Fill color tone. |
| `label` | `string` | `"Progress"` | Configures the `label` component property. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Indeterminate loading

```tsx
import { ProgressBar } from "@genome-evolution/react";

<ProgressBar indeterminate label="Loading" />;
```

## Pending Clarification

1. Fill length does not match the value. `Progress=25%` renders at about 33% (116px) and `Progress=70%` at about 67% (232px) of the 348px inner track. Confirm the intended lengths (87px and about 244px).
2. Fixed progress steps. Only 10%, 25%, 70%, and 100% are available, and there is no way to set another value or a 0% (empty) state. Confirm whether arbitrary values, more steps, or an empty state are needed, and whether there should be an indeterminate variant.
3. Track visibility. The track is white (`background/canvas`) with no border, so the unfilled part is invisible on white surfaces. Confirm the intended track color.
4. Fill tokens. The fill uses `icon/evergreen` and `icon/indigo`, which are icon color variables. Confirm whether dedicated fill or surface tokens should be used.
5. Label and width. The bar has a fixed 350px width and no label or percentage text. Confirm whether it should stretch to its container and whether a label option is needed.

## Notes / Changelog

Generated from Figma evidence (component set `2190:1888`) on 2026-10-23.
