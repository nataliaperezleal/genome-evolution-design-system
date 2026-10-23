---
component: "Snackbar"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2255-980"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "notification"
  - "toast"
---

# Snackbar

System: Genome Evolution Design System

## Component Summary

Snackbar is a tinted message bar with a status icon, a message, an optional action button, a close icon, and an optional colored bar at the bottom, in Danger, Warning, Information, and Success types.

## Quick Reference

### What It Is

The Snackbar is a temporary feedback component used to communicate the outcome of a user action or a system status change. It presents a brief contextual message accompanied by a status icon, an optional action button, and a close control.
Snackbars appear in a non-intrusive manner and help communicate events such as successful operations, warnings, errors, or informational messages without interrupting the user's workflow. Depending on the configuration, they may include a progress indicator that visually represents the remaining time before automatic dismissal.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Danger, Warning, Information, Success | Danger (see Pending Clarification) |
| label | Text | "Single-line toast bar" |
| showButton | true, false | true |
| showBar | true, false | true |

### Default Configuration

The component property defaults exposed by Figma are `Type=Danger`, `label="Single-line toast bar"`, `showButton=true`, and `showBar=true`. This corresponds to variant `2255:1014`, the top-left variant of the component set. Whether Danger is an intentional default, rather than a result of variant placement, is not documented.

### Typical Usage

Verified observations:

- Every type shows a status icon, the message, and a close icon; the action button and bottom bar are optional.
- The snackbar is 430px wide in the inspected variants, with a minimum width of 328px and a maximum width of 912px.
- The message can wrap; it has a minimum width of 162px and a maximum of 746px.
- The bottom bar is filled with the type's bold color up to 80px from the right edge.

Evidence-based interpretation:

- Use Snackbar to confirm the result of an action (`Success`), report a failure (`Danger`), warn about a condition (`Warning`), or give neutral information (`Information`).
- The bottom bar suggests a timer that shows how long the snackbar remains visible before it is dismissed automatically.
- Use the action button for one quick follow-up action, such as "Undo" or "Retry".

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need brief, timely feedback about their actions without interrupting their work.

### Expected Outcome

Evidence-based interpretation: the user notices the message, understands its status from the color and icon, and optionally takes the related action or dismisses it.

### Typical Context

Evidence-based interpretation: feedback after saving, deleting, sending, or other actions, typically shown temporarily over the interface.

## When to Use

- To confirm that an action was completed successfully.
- To communicate recoverable errors without blocking user interaction.
- To display short informational messages.
- To warn users about situations that require attention but not immediate action.
- When users should be able to continue working without dismissing a dialog.
- To provide a quick related action such as "Undo", "Retry", or "View details".

## When NOT to Use

- When the message requires mandatory user action.
- For critical information that must not be missed.
- When the content is lengthy or requires detailed explanation.
- To request confirmations or important decisions.
- When multiple simultaneous messages would compete for user attention.
- For blocking errors that prevent task completion.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Rounded (8px), clipped container. |
| Content | Required | Type-tinted row with padding. |
| Status icon | Required | 24px icon: `circle-close` (Danger), `warning` (Warning), `info` (Information), `check` (Success). |
| Message | Required | Message text in the type's text color. Default text: "Single-line toast bar". |
| Button | Optional (`showButton`) | Nested Button instance (24px tall, 12px label "Button"), styled to match the type. |
| Close icon | Required | 16px `close` icon, positioned 16px from the top and right edges. No visibility property is exposed. |
| Bar | Optional (`showBar`) | 8px-tall bar at the bottom: a subtle track with a bold-colored fill. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 430px (inspected variants); minimum 328px, maximum 912px | Direct measurement |
| Height | 64px (56px content + 8px bar) | Direct measurement |
| Radius | 8px | `semantic/md` |
| Container padding | 0px | `space/0` |
| Content padding | 16px left, 48px right, 16px top and bottom | `space/16`, `size/48` |
| Content gap | 16px | `gap/lg` |
| Gap between icon, message, and button | 16px | Direct measurement |
| Status icon | 24 × 24px | Direct measurement |
| Message width | Minimum 162px, maximum 746px; fills available space | Direct measurement |
| Close icon | 16 × 16px; 16px from top and right | Direct measurement |
| Bar | 8px tall; fill ends 80px before the right edge; fill fully rounded | Direct measurement; `semantic/full` |
| Nested Button | 24px tall; 12px × 4px padding; 4px radius; 1px border | `space/12`, `space/4`, `semantic/sm`, `width/1` |

## Semantics

Evidence-based interpretation:

- `Type` communicates the status of the message: `Danger` (error or failure), `Warning` (caution), `Information` (neutral), and `Success` (confirmation). Each type uses its own icon and `surface`, `border`, `text`, and `icon` color variables.
- The button represents a quick follow-up action; the close icon represents dismissal.
- The bar likely represents the remaining display time.

Not verified in Figma: live-region or `status`/`alert` roles, announcement behavior, and timing.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Status icon — Danger | `circle-close`, 24px | Figma layers; `icon/danger` |
| Status icon — Warning | `warning`, 24px | Figma layers; `icon/warning` |
| Status icon — Information | `info`, 24px | Figma layers; `icon/info` |
| Status icon — Success | `check`, 24px | Figma layers; `icon/success` |
| Close | `close`, 16px | Figma layers |

Icons are fixed per type and not exposed as instance-swap properties.

## Variants (Properties)

The variant inventory is complete: 4 variants. All variants were inspected. Boolean and text property names are listed as exposed by the Figma MCP.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Danger | Red snackbar with `circle-close` icon. | Default; `surface/danger/subtle`, `text/danger`, `border/danger`, `surface/danger/bold` |
| Warning | Yellow snackbar with `warning` icon. | `surface/warning/subtle`, `text/warning`, `border/warning`, `surface/warning/bold` |
| Information | Blue snackbar with `info` icon. | `surface/info/subtle`, `text/info`, `border/info`, `surface/info/bold` |
| Success | Green snackbar with `check` icon. | `surface/success/subtle`, `text/success`, `border/success`, `surface/success/bold` |

### label

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Message content. | Default: "Single-line toast bar" |

### showButton

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the nested action Button after the message. | Default |
| false | Hides the action Button. | Boolean property |

### showBar

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Shows the 8px bar at the bottom. | Default |
| false | Hides the bar. | Boolean property |

The nested Button's label ("Button") is not exposed as a Snackbar property.

## States

Snackbar has no state variants. The nested Button defines its own states in the Button component set.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/danger/subtle`, `surface/warning/subtle`, `surface/info/subtle`, `surface/success/subtle` | Content background, bar track, Button background | Figma variables |
| Color — surface | `surface/danger/bold`, `surface/warning/bold`, `surface/info/bold`, `surface/success/bold` | Bar fill | Figma variables |
| Color — text | `text/danger`, `text/warning`, `text/info`, `text/success` | Message and Button label | Figma variables |
| Color — border | `border/danger`, `border/warning`, `border/info`, `border/success` | Button border | Figma variables |
| Color — icon | `icon/danger`, `icon/warning`, `icon/info`, `icon/success` | Status and close icons | Figma variables |
| Color | `Color/Background/Alpha/Default` | Transparent empty part of the bar (Information) | Figma variables |
| Spacing | `space/16`, `space/12`, `space/4`, `space/0`, `size/48` | Padding | Figma variables |
| Spacing | `gap/lg`, `gap/sm` | Gaps | Figma variables |
| Radius | `semantic/md`, `semantic/sm`, `semantic/full` | Container, Button, bar fill | Figma variables |
| Border width | `width/1` | Button border | Figma variables |
| Typography | `Text/Body/MD` | Message (16/20) | Figma text style |
| Typography | `Text/Button/SM` | Button label (12/16) | Figma text style |

Not bound to tokens: the 16px gap between icon, message, and button; the 80px empty part of the bar; and the close icon's 16px offset. The content's right padding uses `size/48`, a size variable, rather than a spacing variable.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed elements: the nested Button and the close icon.
- Evidence-based interpretation: the snackbar appears after an action, may disappear automatically when the bar runs out, and can be dismissed with the close icon. Position on screen, timing, animation, stacking of multiple snackbars, and pause-on-hover are not defined in Figma.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, buttons, and backgrounds across all status variants.
- Interactive controls (action button and close button) must be keyboard accessible.
- Visible focus indicators must be clearly distinguishable on interactive elements.
- Messages should be announced to assistive technologies using appropriate live regions.
Recommendations
- Provide sufficient time for users to read and interact with the message.
- Do not rely solely on colour to communicate status.
- Combine colour, icons, and descriptive text to reinforce meaning.

## Content Guidelines

Verified observations:

- The default message is "Single-line toast bar" and the button label is "Button"; both are placeholders.
- The message can wrap within its maximum width.

Recommendations:

- Keep the message to one short sentence.
- Use a single, specific verb for the action button (for example, "Undo").

## Examples

### Action confirmed with undo

Configuration: `Type=Success`, `showButton=true`, `showBar=true`

Description: a confirmation that an action succeeded, with an "Undo" action and a timer bar.

Evidence / Classification: existing Figma configuration (variant `2255:981`); content is a recommendation.

### Error without action

Configuration: `Type=Danger`, `showButton=false`, `showBar=false`

Description: a failure message that stays until the user closes it.

Evidence / Classification: recommendation built from verified properties.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. Bar meaning and behavior. The bottom bar is always shown at the same fill (ending 80px before the edge), with no property to set its progress. Confirm whether it is a timer for automatic dismissal and how it should behave.
2. Default type. The default variant is `Type=Danger` because it is the top-left variant. Confirm whether Danger should be the default.
3. Text contrast. Warning (3.97:1), Information (4.26:1), and Success (4.27:1) messages are below 4.5:1 on their backgrounds. Confirm whether these color pairings are accepted.
4. Close control. The close icon is always visible, has no visibility property, and is a plain 16px icon without button states. Confirm whether it should be optional and interactive.
5. Relationship with Inline Alert. Snackbar and Inline Alert share the same status colors, icons, and default text ("Single-line toast bar"). Confirm when to use each component.

## Notes / Changelog

Generated from Figma evidence (component set `2255:980`) on 2026-10-23.

[No verified historical changes available]
