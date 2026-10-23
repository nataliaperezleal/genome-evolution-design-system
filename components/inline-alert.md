---
component: "Inline Alert"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2181-3058"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "alert"
  - "status-message"
---

# Inline Alert

System: Genome Evolution Design System

## Component Summary

Inline Alert is a tinted message bar that communicates a Danger, Warning, Information, or Success message through a status icon, an optional title, a description, an optional action button, and an optional close icon.

## Quick Reference

### What It Is

The Inline Alert is a contextual communication component used to display important messages within the flow of an interface without interrupting the user's task. It appears as a visible content block integrated into the page and includes a semantic visual indicator that communicates the message type: Information, Success, Warning, or Danger.

The component may include a title, description, related action, and an optional dismiss control, allowing teams to communicate information, warnings, successful outcomes, or errors in a clear and contextual manner.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Danger, Warning, Information, Success | Danger (Figma property default; see Pending Clarification) |
| Size | Regular, Small | Regular (Figma property default; see Pending Clarification) |
| showTitle | true, false | true |
| showButton | true, false | true |
| showClose | true, false | true |
| title | Text | "Title" |
| description | Text | "Single-line toast bar" |

### Default Configuration

The component property defaults exposed by Figma are: `Type=Danger`, `Size=Regular`, `showTitle=true`, `showButton=true`, `showClose=true`, `title="Title"`, `description="Single-line toast bar"`.

In Figma, the default variant of a component set is the first variant in the set, and `Type=Danger, Size=Regular` is that first variant. Whether Danger is an intentional design default, rather than a consequence of variant order, is not documented.

### Typical Usage

Verified observations:

- Each `Type` is available in two sizes: `Regular` (76px tall in the inspected variants) and `Small` (56px tall in the inspected variants).
- Every variant shows a status icon and a description. The title, action button, and close icon are optional and are controlled by `showTitle`, `showButton`, and `showClose`.
- The action button is a nested instance of the system's Button component, colored to match the alert `Type`.

Evidence-based interpretation:

- Use `Regular` where the message needs more prominence, for example at the top of a page section or form, and `Small` in denser layouts such as panels, cards, or near a specific field group. This reading is based on the larger icon (24px vs 16px), larger type (18px title vs 14px), and larger padding of `Regular`.
- Use the action button when the message has one directly related follow-up action, and the close icon when the message can be dismissed once read.

Recommendation: keep the title on for `Danger` and `Warning` messages so the issue is identifiable at a glance. This is a recommendation, not a design-system rule.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need to notice and understand status information (errors, risks, neutral information, or confirmations) in the context where it applies, without leaving the current view or being interrupted by a modal.

### Expected Outcome

Evidence-based interpretation: the user identifies the type of message from its color and icon, understands it from the title and description, and can optionally take a related action or dismiss the message.

### Typical Context

Evidence-based interpretation: embedded in page content, forms, panels, or sections, alongside the content the message refers to. The component name ("Inline") and its in-flow structure (no overlay, shadow, or elevation in the inspected variants) support this reading. The default description text "Single-line toast bar" mentions a toast, but no toast-specific behavior (positioning, timing, or overlay) is defined in the component; see Pending Clarification.

## When to Use

- To communicate relevant information related to the current page content.
- To inform users about the outcome of an action.
- To display warnings before an important action or process.
- To communicate errors that require user attention or correction.
- To highlight successful completion of a task.
- When the message should remain visible while users continue interacting with the page.

## When NOT to Use

- For temporary messages that disappear automatically. In those cases, a Toast is more appropriate.
- To block a task or require immediate user response. Use a Modal or Dialog instead.
- To display permanent information that belongs to the primary page content.
- When multiple alerts would create visual noise or compete for attention.
- To communicate low-priority or irrelevant events.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Rounded, clipped frame with a `Type`-colored subtle surface and a 4px `Type`-colored left border. |
| Status icon | Required | `Type`-specific icon (24px in `Regular`, 16px in `Small`). Present in all variants; no visibility property is exposed. |
| Title | Optional (`showTitle`) | Short heading text in the `Type` text color. Default text: "Title". |
| Description | Required | Message text in the `Type` text color. Present in all variants; no visibility property is exposed. Default text: "Single-line toast bar". |
| Button | Optional (`showButton`) | Nested Button instance with the label "Button", styled to match the `Type`. |
| Close icon | Optional (`showClose`) | 16px `close` icon, top-aligned at the right end of the container. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal: content group, then close icon | Figma auto layout |
| Container alignment | Top (close icon aligns to the top) | Figma auto layout |
| Content group alignment | Vertically centered (icon, text, button) | Figma auto layout |
| Corner radius | 8px | `radius/8` |
| Left border | 4px | Direct measurement (not bound to a token) |
| Gap between content group and close icon | 8px | `gap/sm` |
| Padding — `Regular` | 16px on all sides | `space/16` |
| Padding — `Small` | Left 16px; right, top, and bottom 8px | `space/16`, `space/8` |
| Gap inside content group — `Regular` | 16px | Direct measurement (not bound to a token) |
| Gap inside content group — `Small` | 12px | Direct measurement (not bound to a token) |
| Height — `Regular` | 76px (with title and one-line description) | Direct measurement |
| Height — `Small` | 56px (with title and one-line description) | Direct measurement |
| Width | 430px (Danger and Warning, both sizes; Information and Success `Regular`); about 422px (Information and Success `Small`) | Direct measurement; see Pending Clarification |
| Status icon size | 24 × 24px (`Regular`); 16 × 16px (`Small`) | Direct measurement |
| Close icon size | 16 × 16px (both sizes) | Direct measurement |
| Nested Button | 24px height; 4px radius (`semantic/sm`); 1px border (`width/1`). `Regular`: horizontal padding `size/16` (16px), vertical padding `space/8` (8px). `Small`: horizontal padding `space/12` (12px), vertical padding `space/4` (4px) | Figma variables and direct measurement |

Text inside the content group fills the available width and wraps (`word-break: break-word`). Resizing and responsive behavior are not documented; see Pending Clarification.

## Semantics

Evidence-based interpretation:

- `Type` communicates the semantic status of the message: `Danger` (error or critical problem), `Warning` (caution), `Information` (neutral information), and `Success` (positive confirmation). Each `Type` consistently uses its own status icon and its own `surface/*`, `border/*`, `text/*`, and `icon/*` variables.
- The title acts as a short summary of the message, and the description carries the message detail.
- The nested Button represents an action related to the message. The close icon represents dismissal of the message.

Not verified in Figma: HTML elements, ARIA roles (for example, `alert` or `status`), live-region behavior, and screen-reader announcements.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Status icon — `Danger` | `circle-close`; 24px (`Regular`), 16px (`Small`); `icon/danger` | Figma layers and variables |
| Status icon — `Warning` | `warning`; 24px (`Regular`), 16px (`Small`); `icon/warning` | Figma layers and variables |
| Status icon — `Information` | `info`; 24px (`Regular`), 16px (`Small`); `icon/info` | Figma layers and variables |
| Status icon — `Success` | `check`; 24px (`Regular`), 16px (`Small`); `icon/success` | Figma layers and variables |
| Close icon | `close`; 16px in both sizes; shown with `showClose=true` | Figma layers |

The status icon is fixed per `Type`. No property for swapping or hiding it is exposed.

## Variants (Properties)

The inventory below is complete for the component set: 8 variants (4 `Type` × 2 `Size`) and five non-variant properties. Boolean and text property names are listed as exposed by the Figma MCP.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Danger | Red-tinted alert with the `circle-close` icon. | `surface/danger/subtle` (#ffe9e5), `border/danger`, `text/danger`, `icon/danger` (#ba1a1a) |
| Warning | Yellow-tinted alert with the `warning` icon. | `surface/warning/subtle` (#fff0c2), `border/warning`, `text/warning`, `icon/warning` (#8c7500) |
| Information | Blue-tinted alert with the `info` icon. | `surface/info/subtle` (#f7f9ff), `border/info`, `text/info`, `icon/info` (#2f7cb6) |
| Success | Green-tinted alert with the `check` icon. | `surface/success/subtle` (#e8ffef), `border/success`, `text/success`, `icon/success` (#00885c) |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Regular | 24px status icon; title `Text/Title/SM` (18/24); description `Text/Body/MD` (16/20); button text `Text/Button/MD` (14/16); 16px padding; 16px content gap. | 76px tall in the inspected variants |
| Small | 16px status icon; title `Text/Body/SM Strong` (14/20); description `Text/Body/SM` (14/20); button text `Text/Button/SM` (12/16); 8px vertical and right padding, 16px left padding; 12px content gap. | 56px tall in the inspected variants |

### showTitle

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Displays the title above the description. | Default |
| false | Hides the title; only the description is shown. | Boolean property |

### showButton

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Displays the nested action Button at the end of the content group. | Default |
| false | Hides the action Button. | Boolean property |

### showClose

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| true | Displays the 16px close icon at the top-right. | Default |
| false | Hides the close icon. | Boolean property |

### title

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Title content. | Default: "Title" |

### description

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Description content. | Default: "Single-line toast bar" |

The nested Button's label ("Button") is not exposed as an Inline Alert property.

## States

Inline Alert has no state variants (for example, hover, focus, or pressed) in Figma. The nested Button is an instance of the Button component, which defines its own states in its component set. The close icon is a plain icon layer with no state variants.

## Token Mapping

All tokens below are verified as Figma variables or text styles bound to this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `surface/danger/subtle`, `surface/warning/subtle`, `surface/info/subtle`, `surface/success/subtle` | Container background and nested Button background, per `Type` | Figma variables |
| Color — border | `border/danger`, `border/warning`, `border/info`, `border/success` | 4px left border of the container and 1px border of the nested Button, per `Type` | Figma variables |
| Color — text | `text/danger`, `text/warning`, `text/info`, `text/success` | Title, description, and Button label, per `Type` | Figma variables |
| Color — icon | `icon/danger`, `icon/warning`, `icon/info`, `icon/success` | Status and close icons, per `Type` | Figma variables |
| Spacing | `space/16` | Container padding (`Regular`: all sides; `Small`: left) | Figma variables |
| Spacing | `space/8` | Container padding (`Small`: top, bottom, right); nested Button vertical padding (`Regular`) | Figma variables |
| Spacing | `space/12`, `space/4` | Nested Button horizontal and vertical padding (`Small`) | Figma variables |
| Spacing | `size/16` | Nested Button horizontal padding (`Regular`) | Figma variables |
| Spacing | `gap/sm` | Gap between content group and close icon; gap inside nested Button | Figma variables |
| Radius | `radius/8` | Container corner radius | Figma variables |
| Radius | `semantic/sm` | Nested Button corner radius (4px) | Figma variables |
| Border width | `width/1` | Nested Button border (1px) | Figma variables |
| Typography | `Text/Title/SM` | Title (`Regular`) | Figma text style |
| Typography | `Text/Body/MD` | Description (`Regular`) | Figma text style |
| Typography | `Text/Body/SM Strong` | Title (`Small`) | Figma text style |
| Typography | `Text/Body/SM` | Description (`Small`) | Figma text style |
| Typography | `Text/Button/MD`, `Text/Button/SM` | Nested Button label (`Regular`, `Small`) | Figma text styles |

Not bound to tokens: the 4px left border width and the content-group gaps (16px `Regular`, 12px `Small`).

## Interaction

- Verified interactions: none. No prototype interactions were found for Inline Alert.
- Observed elements: the nested Button (an interactive component with its own states in the Button component set) and the close icon.
- Evidence-based interpretation: the Button triggers an action related to the message, and the close icon dismisses the alert. Dismissal behavior, animation, timing, and auto-dismiss are not verified in Figma.

## Accessibility

- Required: ensure sufficient contrast between background, text, icons, and interactive controls across all semantic variants.
- Required: all interactive elements, including buttons and dismiss actions, must be keyboard accessible and provide visible focus indicators.
- Required: dynamically displayed alerts should be properly announced to assistive technologies.
- Recommended: do not rely solely on color to communicate severity or message type; use supporting iconography and descriptive text.

## Content Guidelines

Verified observations:

- Default content is "Title" for the title and "Single-line toast bar" for the description; both are placeholders.
- Text wraps within the available width.

Recommendations:

- Write a short title that names the situation, and use the description for detail or the next step.
- Use a short, action-oriented button label that describes what the action does.
- Replace the default placeholder text in every use.

## Examples

### Danger alert with recovery action

Configuration: `Type=Danger`, `Size=Regular`, `showTitle=true`, `showButton=true`, `showClose=true`

Description: an error message with a title, detail, a related action, and dismissal. This configuration matches the Figma property defaults.

Evidence / Classification: existing Figma configuration (node `2181:3059`).

### Compact success confirmation

Configuration: `Type=Success`, `Size=Small`, `showTitle=false`, `showButton=false`, `showClose=true`

Description: a short confirmation in a dense layout, with only the icon, description, and close icon.

Evidence / Classification: recommendation built from verified properties; this exact combination is not shown in Figma.

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. Default `Type`. Figma exposes `Type=Danger, Size=Regular` as the default because it is the first variant in the set. Confirm whether Danger is the intended default or whether the variants should be reordered (for example, to make `Information` the default).
2. Text contrast. Warning (3.97:1), Information (4.26:1), and Success (4.27:1) text colors on their subtle surfaces are below 4.5:1. Confirm whether these color pairings are accepted or should be adjusted.
3. Width and resizing behavior. Variant widths differ (430px vs about 422px), and some `Regular` variants use a fixed-width content group (about 374px) while `Danger, Regular` uses a fill-width content group. Confirm the intended width behavior (fixed, fill container, or hug) and minimum and maximum widths.
4. Nested Button size in `Regular`. The Button is 24px tall but uses `Text/Button/MD` and MD padding; the Button component defines MD as 32px and SM as 24px. Confirm which Button `Size` the `Regular` alert should use. The Button label is also not exposed as an Inline Alert property.
5. Close control. The close element is a 16px icon with no button wrapper, hit area, or states. Confirm whether it should be an interactive component (for example, an icon button) and its expected behavior.
6. Toast relationship. The default description "Single-line toast bar" refers to a toast. Confirm whether Inline Alert is meant only for inline placement and how it differs from toast or snackbar components in the system.

## Notes / Changelog

Generated from Figma evidence (component set `2181:3058`) on 2026-10-23.
