---
component: "Switch"
system: "Genome Evolution Design System"
type: "Form control (binary toggle)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-3286"
last_updated: "2026-10-23"
tags:
  - "switch"
  - "toggle"
  - "form-control"
---

# Switch

System: Genome Evolution Design System

## Component Summary

A two-position toggle control, with an optional text label, that represents an On or Off setting in two sizes and three color treatments.

## Quick Reference

### What It Is

The Switch is a binary form control that allows users to turn a setting, preference, or feature on or off. It represents two mutually exclusive states, typically On and Off, through a visual toggle that changes position.

Its purpose is to provide a quick and intuitive way to modify settings that have an immediate effect on the interface or system behaviour. An optional label can be displayed to help users understand what setting is being controlled.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Behavior | On, Off | Not verified in Figma |
| Color | Default, Evergreen, Indigo | Not verified in Figma |
| State | Default, Hover, Pressed, Focused, Disabled | Not verified in Figma |
| Size | SM, MD | Not verified in Figma |
| Label (boolean) | true, false | true (as reported by Figma MCP) |
| Text (text) | Free text | "Label" (as reported by Figma MCP) |

The `Label` and `Text` property names are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified.

### Default Configuration

No verified default variant was found. The component set contains 28 variants; the property defaults reported by Figma MCP code generation (`Behavior` Off, `Color` Default, `State` Disabled, `Size` SM) do not match the first variant listed in the component set (`Behavior=On, Color=Evergreen, State=Default, Size=SM`), so neither is treated as the documented default.

Verified observations:

- Every inspected variant shows the label with the placeholder text "Label".
- The `Label` boolean is reported as `true` and the `Text` property as "Label".

### Typical Usage

Verified observations:

- The switch is available in `SM` (16 px high) and `MD` (24 px high).
- `Off` switches use `Color=Default`; `On` switches use `Color=Evergreen` or `Color=Indigo` (or `Color=Default` when disabled).
- A text label sits to the right of the switch and can be hidden with the `Label` boolean.

Evidence-based interpretation: Place a Switch next to a short label that names the setting it controls. Pair `Behavior=Off` with `Color=Default`, and `Behavior=On` with `Evergreen` or `Indigo`, which are the only enabled combinations in the component set.

Recommendation: Use one `On` color consistently within the same view or form. Figma does not document when to choose Evergreen over Indigo (see Pending Clarification).

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Switch lets a user turn a single option or setting on or off with one control, while showing the current status at a glance through the thumb position and the colored track.

### Expected Outcome

Evidence-based interpretation: The user can see whether a setting is on or off and change it directly. The `On` variants use a colored border and thumb (Evergreen or Indigo), and the `Off` variants use neutral colors.

### Typical Context

Evidence-based interpretation: Settings, preferences, and forms where an option has exactly two states. The two sizes and the label typography (10 px for `SM`, 16 px for `MD`) suggest use in both compact and standard-density layouts.

## When to Use

- To enable or disable features.
- In user settings and preference panels.
- When the change takes effect immediately and does not require confirmation.
- To turn options on or off within forms or configuration interfaces.
- For privacy, notification, permission, or personalization controls.
- When only two possible states exist.

## When NOT to Use

- When more than two options are available.
- To select one option from a group of alternatives; use radio buttons instead.
- When the user must confirm the action before it takes effect.
- For one-time actions that do not represent a persistent state.
- When the meaning of the states is not clearly "enabled" versus "disabled".
- For options that require multiple levels of configuration.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| switch | Required | Track and thumb, built as a single graphic layer named `switch`. The thumb is on the left in `Off` and on the right in `On`. |
| Label | Optional | Text layer named `Label`, placed to the right of the switch. Visibility is controlled by the `Label` boolean, and its content by the `Text` property. |
| Focus ring | Conditional | Outline drawn outside the track, present only in `State=Focused` variants. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Layout direction | Horizontal, items centered | Figma auto layout |
| Gap (switch to label) | 8 px (`gap/sm`) | Variable binding |
| Padding | 0 (`space/0`) | Variable binding |
| Switch size, SM | 29 × 16 px | Layer dimensions |
| Switch size, MD | 42 × 24 px | Layer dimensions |
| Component size with "Label", SM | 63 × 16 px | Variant dimensions |
| Component size with "Label", MD | 91 × 24 px | Variant dimensions |
| Corner radius token, SM | `semantic/md` (8) | Variable binding; applied to the track (interpretation: fully rounded at 16 px height) |
| Corner radius token, MD | `semantic/lg` (12) | Variable binding; applied to the track (interpretation: fully rounded at 24 px height) |
| Focus ring offset | Extends 2 px outside the track on every side | Layer geometry in `Focused` variants |

The thumb diameter and its inner offset are part of the `switch` graphic layer and are not exposed as separate measurements: Not verified in Figma.

## Semantics

Evidence-based interpretation: `Behavior=On` represents an active, enabled setting; `Behavior=Off` represents an inactive one. The thumb position and the color change between neutral (`Off`) and Evergreen or Indigo (`On`) convey the status. `Color` changes only the visual treatment of the `On` status; Figma does not document any semantic difference between Evergreen and Indigo.

HTML element, ARIA role, and screen-reader announcements: Not verified in Figma.

## Variants (Properties)

The variant inventory below is complete: 28 variants were inspected.

### Behavior

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| On | Thumb on the right; track border and thumb use the selected `Color` (Evergreen or Indigo), or neutral disabled colors when `State=Disabled`. | Variant names, screenshot, variable bindings |
| Off | Thumb on the left; neutral track and thumb. | Variant names, screenshot, variable bindings |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Neutral treatment. Used for all `Off` variants and for both `Disabled` variants. | Variant names |
| Evergreen | Green `On` treatment (`border/evergreen`, `icon/evergreen`). | Variable bindings |
| Indigo | Purple `On` treatment (`border/indigo`, `icon/indigo`). | Variable bindings |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting appearance. | Variant names |
| Hover | Hovered track background. | Variable bindings |
| Pressed | Pressed track background. | Variable bindings |
| Focused | Adds a 2 px focus ring outside the track. | Variable bindings, layer geometry |
| Disabled | Muted track, thumb, and label. Available for `Off` and `On` with `Color=Default` only. | Variant names, variable bindings |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| SM | 29 × 16 px switch; label uses `Text/Body/XXS` (10/14). | Layer dimensions, text style |
| MD | 42 × 24 px switch; label uses `Text/Body/MD` (16/20). | Layer dimensions, text style |

### Label

Boolean property that shows or hides the label text layer. Reported default: `true`.

### Text

Text property that sets the label content. Reported default: "Label".

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | `Off`: white track (`background/canvas`), neutral border, `icon/primary` thumb. `On`: white track, colored border and thumb. | Variable bindings |
| Hover | Hovered | Track background changes to `background/interactive/hovered`; `Off` thumb changes to `icon/interactive/hovered`. | Variable bindings |
| Pressed | Pressed | Track background changes to `background/interactive/pressed`; `Off` thumb uses `icon/interactive/hovered`. | Variable bindings |
| Focused | Keyboard/programmatic focus (interpretation) | 2 px `border/focus` ring around the track, for all colors. | Variable bindings, screenshot |
| Disabled | Unavailable | `background/disabled` track, `border/disabled` border, `icon/disabled` thumb, `text/disabled` label. | Variable bindings |

## Token Mapping

All tokens below were verified through Figma variable bindings on the inspected variants.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Track fill in Default and Focused states | Off/On Default variants |
| Background | `background/interactive/hovered` | Track fill in Hover | Off and On Hover variants |
| Background | `background/interactive/pressed` | Track fill in Pressed | Off and On Pressed variants |
| Background | `background/disabled` | Track fill in Disabled | Off and On Disabled variants |
| Border | `border/interactive/hovered` | Track border for `Off` in Default, Hover, and Pressed | Off variants |
| Border | `border/evergreen` | Track border for `On` + `Evergreen` | Evergreen variants |
| Border | `border/indigo` | Track border for `On` + `Indigo` | Indigo variants |
| Border | `border/disabled` | Track border in Disabled | Disabled variants |
| Border | `border/focus` | Focus ring color, for all colors | Focused variants |
| Border width | `focus/width` (2) | Focus ring width | Focused variants |
| Icon | `icon/primary` | `Off` thumb in Default and Focused | Off variants |
| Icon | `icon/interactive/hovered` | `Off` thumb in Hover and Pressed | Off variants |
| Icon | `icon/evergreen` | `On` + `Evergreen` thumb | Evergreen variants |
| Icon | `icon/indigo` | `On` + `Indigo` thumb | Indigo variants |
| Icon | `icon/disabled` | Thumb in Disabled | Disabled variants |
| Text | `text/primary` | Label color (enabled) | All enabled variants |
| Text | `text/disabled` | Label color in Disabled | Disabled variants |
| Typography | `Text/Body/XXS` | Label, `Size=SM` | Text style |
| Typography | `Text/Body/MD` | Label, `Size=MD` | Text style |
| Spacing | `gap/sm` (8) | Gap between switch and label | Auto layout |
| Spacing | `space/0` (0) | Container padding | Auto layout |
| Radius | `semantic/md` (8), `semantic/lg` (12) | Track radius for SM and MD | Variable bindings |

## Interaction

Observed states: `Default`, `Hover`, `Pressed`, `Focused`, and `Disabled` are available as visual variants for enabled `Off` and `On` switches.

Evidence-based interpretation: Activating the switch toggles `Behavior` between `Off` and `On`, and `Disabled` switches do not respond to input.

Not verified in Figma: prototype interactions, transitions, animation timing, whether clicking the label toggles the switch, and keyboard keys used to toggle.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between the control, indicator, label, and background across all states (Default, Hover, Pressed, Focused, and Disabled).
- The switch must be fully operable using a keyboard.
- Focus indicators must be clearly visible and distinguishable from the selected state.
- The on/off state must be properly communicated to assistive technologies.
Recommendations
- Always associate the control with a descriptive label.
- Do not rely solely on colour to communicate state.
- Maintain adequate touch target sizes for touch interfaces.

## Content Guidelines

Verified observation: The label sits to the right of the switch, is a single line with no wrapping, and uses the placeholder "Label" in all variants.

Recommendation: Use a short label that names the setting being controlled.

## Examples

### Enabled setting, standard size

Configuration: `Behavior=On`, `Color=Evergreen`, `State=Default`, `Size=MD`, `Label=true`

Description: Medium switch in the on position with an Evergreen border and thumb and a visible label.

Evidence / Classification: Existing Figma variant (`2184:3320`).

### Disabled setting, compact size

Configuration: `Behavior=Off`, `Color=Default`, `State=Disabled`, `Size=SM`, `Label=true`

Description: Small switch in the off position with muted track, thumb, and label.

Evidence / Classification: Existing Figma variant (`2184:3311`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The component set contains variants only for these combinations, so others cannot be selected in Figma:

- `Behavior=Off` with `Color=Evergreen` or `Color=Indigo`.
- `Behavior=On` with `Color=Default`, except when `State=Disabled`.
- `State=Disabled` with `Color=Evergreen` or `Color=Indigo`.

## Pending Clarification

1. **Evergreen vs. Indigo.** Figma provides two `On` colors but no guidance on when to use each. This affects how designers and developers choose a `Color` value.
2. **Default variant.** No default is documented. The defaults reported by Figma MCP (`Off`, `Default`, `Disabled`, `SM`) do not match the first variant in the component set (`On`, `Evergreen`, `Default`, `SM`). Confirm the intended default variant.
3. **Focus ring color for Indigo.** `Focused` Indigo variants use `border/focus` (#339947, green). Confirm that the shared focus color is intentional.
4. **Inconsistent layer in `Behavior=On, Color=Evergreen, State=Pressed, Size=MD`.** This variant uses a layer named `Group 1` instead of the `switch` layer used in every other variant, which can affect overrides and maintenance.
5. **Off border token.** Enabled `Off` variants use `border/interactive/hovered` for the track border in `Default` as well as `Hover`. Confirm that `Default` should not use a resting border token.

## Notes / Changelog

Generated from Figma evidence (node `2184:3286`) on 2026-10-23.
