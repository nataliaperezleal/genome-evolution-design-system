---
component: "Thinking-ia"
system: "Genome Evolution Design System"
type: "AI process step indicator"
status: "Design"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3924-4713"
last_updated: "2026-10-23"
tags:
  - "ai"
  - "thinking"
  - "progress"
---

# Thinking-ia

System: Genome Evolution Design System

## Component Summary

A single step of an AI's working process, shown as an icon and a short label with an optional connector line to the next step. It comes in two states: `Done` and `Changing`.

## Quick Reference

### What It Is

Evidence-based interpretation: Thinking-ia shows what the AI is doing or has done while it prepares a response. The evidence:

- The component name ("thinking").
- The sample step "Read documents" with a `Search` icon.
- A vertical connector line below the icon that links to the next step.
- Two states: `Done` is muted, and `Changing` uses primary colors, which suggests the step currently in progress.

No written component description was found in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| State | Done, Changing | Done (as reported by Figma MCP) |
| Text (text) | Free text | "Read documents" (as reported by Figma MCP) |
| Icon (instance swap) | Any icon instance | `Search` (as reported by Figma MCP) |
| Show line (boolean) | true, false | true (as reported by Figma MCP) |

The text, instance-swap, and boolean property names are listed as exposed through Figma MCP (`text`, `icon`, `showLine`); their exact display names in the Figma properties panel were not verified.

### Default Configuration

Figma MCP reports `State=Done`, Text "Read documents", the `Search` icon, and the line visible. This matches the first variant in the component set (`State=Done`, node `3924:4697`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- Each instance is one step: a 16 px icon and a 12 px label, with a 10 px vertical line below the icon.
- `Done` uses muted colors (`icon/secondary`, `text/tertiary`); `Changing` uses primary colors (`icon/primary`, `text/primary`).

Evidence-based interpretation:

- Stack several instances vertically to show the sequence of steps the AI follows (for example, reading documents, analyzing data, generating a result).
- Use `Changing` for the step in progress and `Done` for completed steps.
- Turn off Show line on the last step so the connector does not lead to an empty space.
- Swap the icon to match each step's action.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Thinking-ia makes the AI's work visible while users wait, so they understand what is happening and how far the process has progressed.

### Expected Outcome

Evidence-based interpretation: Users can see which steps are complete and which step is in progress.

### Typical Context

Evidence-based interpretation: AI conversation and builder experiences, likely near or inside `Chat-ia` responses while a response is being generated. This relationship is not defined in Figma.

## When to Use

Evidence-based interpretation (not documented as official guidance in Figma):

- To show the steps of an AI process while it runs or after it finishes.
- When a process has several distinct actions worth naming.

## When NOT to Use

[No documented restrictions found]

Recommendation (not an established design-system rule): For a single, unnamed waiting state, the `Charging` state of `Chat-ia` may be enough.

## Structure (Anatomy)

### Composition

```
Thinking-ia (358 px)
├── Task row (2 px vertical padding, 8 px gap)
│   ├── Icon (instance swap, 16 px)
│   └── Label (Text property, 12 px)
└── Line connection (Show line), 16 × 10 px, vertical line centered under the icon
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Icon | Required | 16 px swappable icon instance, default `Search`. `icon/secondary` in `Done`, `icon/primary` in `Changing`. |
| Label | Required | Single-line 12 px text (`Text/Body/XS`). `text/tertiary` in `Done`, `text/primary` in `Changing`. |
| Connector line | Optional | 10 px vertical line in `border/default`, centered under the icon. Controlled by Show line. |

### Ordering logic

Evidence-based interpretation: Steps are stacked top to bottom in the order the AI performs them. The connector line of each step leads to the icon of the next step, and the last step's line is hidden. Figma does not provide a container component that enforces this order.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 358 px, fixed | Variant dimensions |
| Height | 30 px with line (20 px row + 10 px line) | Variant dimensions |
| Row vertical padding | 2 px (`space/2`) | Variable binding |
| Gap between icon and label | 8 px (`gap/sm`) | Variable binding |
| Icon size | 16 × 16 px | Layer dimensions |
| Connector | 16 × 10 px frame with a centered 1 px line | Layer dimensions |

## Semantics

Evidence-based interpretation: Each instance is one step of a process. `Done` means the step is complete; `Changing` most likely means the step is in progress. The connector expresses a sequence between steps.

HTML elements, ARIA attributes (for example, status or live regions), and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Icon | `Search` by default, 16 px, swappable; `icon/secondary` (Done) or `icon/primary` (Changing) | Layer, variable bindings, instance-swap property |

## Variants (Properties)

The variant inventory below is complete: 2 variants were inspected.

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Done | Muted icon (`icon/secondary`) and label (`text/tertiary`). | Variable bindings |
| Changing | Primary icon (`icon/primary`) and label (`text/primary`). | Variable bindings |

### Text, Icon, Show line

- Text: step label. Reported default: "Read documents".
- Icon: step icon. Default: `Search`.
- Show line: shows or hides the connector below the icon. Reported default: `true`.

## States

These are visual state variants. They do not prove that transitions or animations are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Done | Completed step (interpretation) | Muted icon and text | Variable bindings |
| Changing | Step in progress (interpretation) | Primary icon and text | Variable bindings |

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Icon | `icon/secondary`, `icon/primary` | Icon in Done / Changing | Variable bindings |
| Text | `text/tertiary`, `text/primary` | Label in Done / Changing | Variable bindings |
| Border | `border/default` | Connector line | Variable binding |
| Typography | `Text/Body/XS` | Label (12/16) | Text style |
| Spacing | `space/2`, `gap/sm` | Row padding; icon–label gap | Variable bindings |

## Interaction

No interactive states or prototype interactions exist.

Not verified in Figma: animation of the in-progress step, whether the step list can be collapsed or expanded, and whether steps can be selected to show details.

## Overflow behavior

Verified observation: The label is single-line with no wrapping, inside a fixed 358 px width.

Not verified in Figma: truncation of long labels and how the connector behaves if a label needed more than one line.

## Accessibility

Accessibility-related observations:

- `Done` and `Changing` differ only by color (muted vs. primary). No icon or text change distinguishes them.
- `Done` uses `text/tertiary`, which is lower in contrast than `text/primary`.

Missing accessibility information (not verified in Figma): announcement of step changes to assistive technology, accessible names for icons, and contrast compliance.

## Content Guidelines

Verified observation: The sample label is a short English verb phrase ("Read documents").

Recommendation: Use short verb phrases that describe each action (for example, "Read documents", "Analyze data").

## Examples

### Completed step

Configuration: `State=Done`, Show line `true`

Description: Muted search icon and "Read documents" label, with a connector to the next step.

Evidence / Classification: Existing Figma variant (`3924:4697`).

### Step in progress

Configuration: `State=Changing`, Show line `true`

Description: Primary-colored search icon and label.

Evidence / Classification: Existing Figma variant (`3924:4714`).

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. **Meaning and naming of `Changing`.** `Changing` appears to mean "in progress". Confirm its meaning, whether it should be renamed (for example, `In progress`), and whether additional states are needed, such as pending or failed steps or an animation for the active step.
2. **States differ only by color.** `Done` and `Changing` differ only in icon and text color. Confirm whether a non-color indicator (for example, a check icon or a spinner) is needed.
3. **Step list container.** Figma does not define a container for a sequence of steps, how many steps can appear, where the list is placed (for example, inside `Chat-ia`), or whether it can collapse. Confirm the intended composition.
4. **Long labels.** Labels are single-line in a fixed 358 px width, and truncation is not defined. Confirm how long labels should behave.

## Notes / Changelog

Generated from Figma evidence (node `3924:4713`) on 2026-10-23.

[No verified historical changes available]
