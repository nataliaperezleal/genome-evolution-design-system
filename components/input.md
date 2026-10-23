---
component: "Input"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2171-2467"
last_updated: "2026-10-23"
tags:
  - "form"
  - "input"
  - "text-field"
---

# Input

System: Genome Evolution Design System

## Component Summary

Input is a single-line form field with an optional label, info icon, leading and trailing icons, and helper text, available in two sizes, two label orientations, two corner styles, and eight visual states.

## Quick Reference

### What It Is

The Input component allows users to enter, view, or display information within forms and transactional interfaces. It can include supporting elements such as labels, placeholders, helper text, leading icons, trailing icons, and multiple visual states that communicate interaction, validation, and availability.

The component supports several configuration variants, including different sizes, label orientations, border styles, optional icons, and interaction states.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| State | Default, Filled, Hovered, On focus, Focused, Error, Disabled, Read only | Default |
| Size | MD, SM | MD |
| Orientation | Default, Label Left | Default |
| Corner | Square, Rounded | Square |
| showLabel | true, false | true |
| label | Text | "Label" |
| showInfo | true, false | true |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `calendar` |
| showPlaceholder | true, false | true |
| placeholder | Text | "Placeholder" |
| showRightIcon | true, false | true |
| rightIcon | Instance swap | `chevron-down` |
| showHelperText | true, false | true |
| helperText | Text | "Helper text" |

### Default Configuration

The component property defaults exposed by Figma are `State=Default`, `Size=MD`, `Orientation=Default`, `Corner=Square`, with every visibility property set to `true`, `label="Label"`, `placeholder="Placeholder"`, `helperText="Helper text"`, a `calendar` leading icon, and a `chevron-down` trailing icon. This corresponds to variant `2179:591`, the top-left variant of the component set.

With these defaults, every new instance shows the label, info icon, both icons, placeholder, and helper text. Hide the parts the field does not need.

### Typical Usage

Verified observations:

- `Size=MD` uses a 32px-tall field with 14px text; `Size=SM` uses a 24px-tall field with 10px text.
- `Orientation=Default` places the label above the field; `Orientation=Label Left` places it to the left of the field, with helper text below the field.
- `Corner=Square` uses a 4px radius; `Corner=Rounded` uses a fully rounded (pill) field.
- The same `placeholder` text property is shown as placeholder text in `Default` and `Disabled`, and as entered text in `Filled`, `Hovered`, `On focus`, `Focused`, `Error`, and `Read only`.

Evidence-based interpretation:

- Use `Orientation=Default` for standard stacked forms and `Label Left` for compact, horizontally aligned forms or settings rows.
- Use `SM` for dense layouts such as filters, toolbars, or tables, and `MD` for standard forms.
- Use the `State` values to represent the field at each point of the entry lifecycle in mockups and specifications.

Recommendation: replace or hide the default `calendar` and `chevron-down` icons unless the field is a date or selection field. This is a recommendation, not a design-system rule.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: forms need a consistent field for entering a single value, with room for a label, supporting guidance, and validation feedback.

### Expected Outcome

Evidence-based interpretation: the user identifies the field from its label, enters or reviews a value, and understands any guidance or error from the helper text.

### Typical Context

Evidence-based interpretation: forms, settings pages, filters, and data-entry panels. The two orientations and two sizes support both stacked and compact horizontal layouts.

## When to Use

- To collect user-entered information.
- When information needs to be edited within a form.
- To display existing values in read-only mode.
- When guidance is needed through labels, placeholders, or helper text.
- For fields that require visual validation feedback such as errors or success.
- In simple or complex forms where visual consistency is important.

## When NOT to Use

- To select an option from a predefined list (use Select, Dropdown, or Combobox instead).
- To trigger actions (use Button).
- To enable or disable binary options (use Checkbox, Switch, or Radio Button).
- When entering long multi-line content (use Textarea).
- To display static information that does not require interaction or editing.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Label | Optional (`showLabel`) | Field name. Default text: "Label". |
| Info icon | Optional (`showInfo`) | 16px `info` icon next to the label. Inside the label row, so hiding the label also hides it. |
| Field | Required | Bordered container that holds the icons and text. Has no border or background in `Read only`. |
| Leading icon | Optional (`showLeftIcon`, `leftIcon`) | 16px icon at the start of the field. Default: `calendar`. |
| Text | Optional (`showPlaceholder`, `placeholder`) | Placeholder or entered text. Default text: "Placeholder". |
| Cursor | State-dependent | 1 × 16px text cursor shown after the text in `On focus`, `Focused`, and `Error`. |
| Trailing icon | Optional (`showRightIcon`, `rightIcon`) | 12px icon at the end of the field. Default: `chevron-down`. Not present in `Read only`. |
| Helper text | Optional (`showHelperText`, `helperText`) | Supporting or error text below the field. Default text: "Helper text". |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Structure — `Orientation=Default` | Vertical: label row, field, helper text; 2px gap | `gap/xxxs` |
| Structure — `Orientation=Label Left` | Horizontal: label, then a column with field and helper text; 4px gap between label and column; 2px gap inside the column | `gap/xxs`, `gap/xxxs` |
| Width — `Orientation=Default` | 244px (MD and SM) | Direct measurement |
| Width — `Label Left, MD` | 260px overall, with a 199px fixed-width field | Direct measurement |
| Width — `Label Left, SM` | 244px overall; field fills the remaining width | Direct measurement |
| Label row gap (label to info icon) | 4px | `gap/xxs` (SM); unbound 4px (MD) |
| Label vertical padding — `Label Left` | 8px (MD); 4px (SM) | `space/8` (MD); direct measurement (SM) |
| Field padding — `MD` | 16px horizontal, 6px vertical | `space/16`, `space/6` |
| Field padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Field padding — `Read only` | 0px horizontal; 8px vertical (MD), 4px vertical (SM) | `space/0`, `space/8`, `space/4` |
| Field height | 32px (MD); 24px (SM) | Direct measurement |
| Gap inside field | 8px | `gap/sm` |
| Field border | 1px; 2px in `Focused` | Direct measurement; `focus/width` |
| Corner radius — `Square` | 4px | `semantic/sm` or `radius/4` (both 4px) |
| Corner radius — `Rounded` | 999px (fully rounded) | `semantic/full` |
| Icon sizes | Leading 16px; trailing 12px; info 16px | Direct measurement |
| Component height — `Orientation=Default` | 70px (MD); 58px (SM) | Direct measurement |
| Component height — `Label Left` | 48px (MD); 40px (SM) | Direct measurement |

Exceptions: `State=Hovered, Size=MD, Orientation=Default` is 72px tall, and `State=Disabled, Size=MD, Orientation=Label Left` is 54px tall, because their fields stretch; see Pending Clarification.

## Semantics

Evidence-based interpretation:

- The label names the field. The info icon signals that more information about the field is available; no content or behavior for it is defined.
- The text line represents either placeholder text (secondary color, `Default` and `Disabled`) or a value (primary color, all other states).
- Helper text provides guidance and, in `Error`, the error message (shown in `text/danger`).
- `Disabled` represents an unavailable field; `Read only` represents a value that is shown but not editable.

Not verified in Figma: HTML elements, input types, ARIA roles or attributes (for example, `aria-invalid`, `aria-describedby`, `readonly`), and screen-reader behavior.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Info icon | `info`, 16px, next to the label; controlled by `showInfo` | Figma layers |
| Leading icon | Default `calendar`, 16px; swappable through `leftIcon`; controlled by `showLeftIcon` | Figma layers and properties |
| Trailing icon | Default `chevron-down`, 12px; swappable through `rightIcon`; controlled by `showRightIcon` | Figma layers and properties |
| Disabled icons | `Disabled` variants use separate, lighter icon assets; `icon/disabled` is among the variables used by the component set | Figma assets and variables |

## Variants (Properties)

The variant inventory is complete: 64 variants (8 `State` × 2 `Size` × 2 `Orientation` × 2 `Corner`). Styling details below come from directly inspecting representative variants across every state, both sizes, both orientations, and both corners. Boolean, text, and instance-swap property names are listed as exposed by the Figma MCP.

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Empty field with placeholder text. | `background/canvas`, `border/default`, `text/secondary` |
| Filled | Field with a value. | `background/canvas`, `border/default`, `text/primary` |
| Hovered | Field under the pointer; shows a value. | `background/interactive/hovered`, `border/interactive/hovered`, `text/primary` |
| On focus | Active field with a 1px focus border and a text cursor. | `border/focus` (1px), `text/primary` |
| Focused | Active field with a 2px focus border and a text cursor. | `border/focus`, `focus/width` (2px) |
| Error | Field with a danger border, a text cursor, and danger-colored helper text. | `border/danger`, helper text `text/danger` |
| Disabled | Unavailable field with muted surface, text, and icons. | `background/disabled`, `border/disabled`, `text/disabled` |
| Read only | Value shown without a field border or background, and without the trailing icon. | `text/primary`; horizontal padding `space/0` |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 32px field; label `Text/Label/MD` (14/20); field text `Text/Body/SM` (14/20); 16px horizontal padding. | Default |
| SM | 24px field; label `Text/Label/SM` (12/16); field text `Text/Body/XXS` (10/14); 8px horizontal padding. | — |

Helper text uses `Text/Body/XXS` (10/14) in both sizes.

### Orientation

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Label above the field. | Default |
| Label Left | Label to the left of the field; helper text aligned under the field. | — |

### Corner

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Square | 4px field radius. | Default; `semantic/sm` / `radius/4` |
| Rounded | Fully rounded field. | `semantic/full` |

### Visibility and content properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| showLabel / label | Shows the label row and sets its text. | Default: `true` / "Label" |
| showInfo | Shows the info icon next to the label. | Default: `true` |
| showLeftIcon / leftIcon | Shows the leading icon and sets which icon is used. | Default: `true` / `calendar` |
| showPlaceholder / placeholder | Shows the text line and sets its text (used for both placeholder and value). | Default: `true` / "Placeholder" |
| showRightIcon / rightIcon | Shows the trailing icon and sets which icon is used. | Default: `true` / `chevron-down`; no effect in `Read only` |
| showHelperText / helperText | Shows the helper text and sets its text. | Default: `true` / "Helper text"; see Pending Clarification for `Disabled, MD, Label Left` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Empty field | White surface, default border, secondary-color placeholder | Variant `2179:591` |
| Filled | Field with a value | Text changes to primary color | Variant `2171:2859` |
| Hovered | Pointer over the field | Hovered surface and border | Variant `2171:3110` |
| On focus | Active field | 1px green focus border, text cursor | Variant `2171:2895` |
| Focused | Active field | 2px green focus border, text cursor | Variant `2198:6269` |
| Error | Validation error | Red border, red helper text, text cursor | Variant `2172:685` |
| Disabled | Unavailable | Muted surface, border, label, text, helper text, and icons | Variant `2172:477` |
| Read only | Not editable | No border, background, or trailing icon; no horizontal padding | Variant `2172:510` |

These are visual state variants. Transitions between states, hover and focus behavior, and the difference in use between `On focus` and `Focused` are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Field background (`Default`, `Filled`, `On focus`, `Focused`, `Error`) | Figma variables |
| Color — surface | `background/interactive/hovered` | Field background (`Hovered`) | Figma variables |
| Color — surface | `background/disabled` | Field background (`Disabled`) | Figma variables |
| Color — border | `border/default` | Field border (`Default`, `Filled`) | Figma variables |
| Color — border | `border/interactive/hovered` | Field border (`Hovered`) | Figma variables |
| Color — border | `border/focus` | Field border (`On focus`, `Focused`) | Figma variables |
| Color — border | `border/danger` | Field border (`Error`) | Figma variables |
| Color — border | `border/disabled` | Field border (`Disabled`) | Figma variables |
| Color — text | `text/primary` | Label; entered text | Figma variables |
| Color — text | `text/secondary` | Placeholder text | Figma variables |
| Color — text | `text/tertiary` | Helper text | Figma variables |
| Color — text | `text/danger` | Helper text (`Error`) | Figma variables |
| Color — text | `text/disabled` | Label, text, and helper text (`Disabled`) | Figma variables |
| Color — icon | `icon/primary` | Text cursor | Figma variables |
| Color — icon | `icon/disabled` | Used by the component set; exact layer binding not inspected | Figma variables |
| Border width | `focus/width` | 2px border (`Focused`) | Figma variables |
| Spacing | `space/16`, `space/6` | Field padding (MD) | Figma variables |
| Spacing | `space/8`, `space/4` | Field padding (SM); `Read only` vertical padding; label padding (`Label Left, MD`) | Figma variables |
| Spacing | `space/0` | Field horizontal padding (`Read only`) | Figma variables |
| Spacing | `gap/sm` | Gap inside the field | Figma variables |
| Spacing | `gap/xxs` | Label-to-field gap (`Label Left`); label-to-info gap (SM) | Figma variables |
| Spacing | `gap/xxxs` | Vertical gap between parts | Figma variables |
| Radius | `semantic/sm`, `radius/4` | Field radius (`Square`) | Figma variables |
| Radius | `semantic/full` | Field radius (`Rounded`) | Figma variables |
| Typography | `Text/Label/MD`, `Text/Label/SM` | Label (MD, SM) | Figma text styles |
| Typography | `Text/Body/SM` | Field text (MD) | Figma text style |
| Typography | `Text/Body/XXS` | Field text (SM); helper text (both sizes) | Figma text style |

`Text/Label/SM` uses the `weight/semibold` variable, which resolves to the font style "Medium", while `Text/Label/MD` uses the "SemiBold" style directly; see Pending Clarification.

## Interaction

- Verified interactions: none. No prototype interactions were found for Input.
- Observed states: `Hovered`, `On focus`, `Focused`, `Error`, `Disabled`, and `Read only` are visual state variants.
- Evidence-based interpretation: the field accepts text entry when active (indicated by the text cursor) and shows a hover treatment under the pointer. The trailing `chevron-down` default suggests a selection affordance, and the info icon suggests access to more information, but neither behavior is defined in Figma.

## Accessibility

Mandatory requirements
- Every input must have an accessible label programmatically associated with the field.
- The component must be fully operable using a keyboard.
- The focus state must be clearly visible and distinguishable from the hover state.
- Text, borders, labels, and messages must meet WCAG AA contrast requirements.
- Error messages must be detectable by assistive technologies and must not rely solely on color.

Recommendations
- Associate helper text and validation messages with the input through descriptive accessibility attributes.
- Maintain a logical keyboard navigation order.
- Accompany meaningful icons with textual alternatives when appropriate.

## Content Guidelines

Verified observations:

- Default content is "Label", "Placeholder", and "Helper text"; all three are placeholders.
- Label text does not wrap (single line).

Recommendations:

- Use short, specific labels that name the value requested.
- Use placeholder text only for examples or format hints, not as a replacement for the label.
- In `Error`, use helper text to explain the problem and how to fix it.

## Examples

### Standard form field

Configuration: `State=Default`, `Size=MD`, `Orientation=Default`, `Corner=Square`, `showLeftIcon=false`, `showRightIcon=false`

Description: a stacked text field with label, info icon, placeholder, and helper text.

Evidence / Classification: recommendation built from verified properties.

### Field with validation error

Configuration: `State=Error`, `Size=MD`, `Orientation=Default`, `Corner=Square`

Description: a field with a danger border and danger-colored helper text describing the error.

Evidence / Classification: existing Figma configuration (variant `2172:685`).

### Compact read-only value

Configuration: `State=Read only`, `Size=SM`, `Orientation=Label Left`

Description: a compact label-and-value row for showing information that cannot be edited.

Evidence / Classification: existing Figma configuration (variant `2172:544`).

## Invalid Combinations

[No documented invalid combinations found]

`State=Read only` does not include the trailing icon, so `showRightIcon` and `rightIcon` have no effect in that state.

## Pending Clarification

1. `On focus` vs `Focused`. Both show a focus border and a text cursor; `On focus` uses a 1px border and `Focused` a 2px border. Confirm what each state represents (for example, typing vs keyboard focus) and which to use.
2. Placeholder vs value. A single `placeholder` text property is used for both placeholder text and entered values, and `Hovered` shows the text in the value color. Confirm whether a separate value property is needed and how `Hovered` should look on an empty field.
3. Default icons. Every new instance shows a `calendar` leading icon and a `chevron-down` trailing icon by default. Confirm whether these defaults are intended for a general text input or should be off by default.
4. Structural inconsistencies. In `Disabled, MD, Label Left` (both corners), helper text is not connected to `showHelperText` and cannot be hidden, and the field stretches the variant to 54px. `Hovered, MD, Default` is 72px instead of 70px. Widths differ by orientation (244px, 260px with a fixed 199px field). Confirm the intended structure and resizing behavior.
5. Contrast. Helper text (`text/tertiary`, 4.02:1) and the default field border (`border/default`, 1.66:1) are below common WCAG AA thresholds. Confirm whether these are accepted or should be adjusted.
6. Label font weight. `Text/Label/SM` resolves to the "Medium" font style through `weight/semibold`, while `Text/Label/MD` uses "SemiBold". Confirm the intended label weight for SM.

## Notes / Changelog

Generated from Figma evidence (component set `2171:2467`) on 2026-10-23.
