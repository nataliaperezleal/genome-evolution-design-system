---
component: "Text area"
system: "Genome Evolution Design System"
type: "Form control (multi-line text input)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2258-793"
last_updated: "2026-10-23"
tags:
  - "text-area"
  - "input"
  - "form-control"
---

# Text area

System: Genome Evolution Design System

## Component Summary

A multi-line text field with an optional label, info icon, helper text, character counter, and scrollbar, available in two sizes, two label orientations, and eight states.

## Quick Reference

### What It Is

The Text Area is a form control designed to capture and edit multi-line text content. It allows users to enter comments, descriptions, notes, justifications, or any information that requires more space than a single-line text field.

The component can include a label, information icon, helper text, character counter, and scrollbar, providing guidance and context throughout data entry. It also supports multiple states to communicate availability, validation, and interaction.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| State | Default, Hovered, Focused, Focused tab, Filled, Error, Disabled, Read only | Not verified in Figma |
| Size | MD, SM | Not verified in Figma |
| Orientation | Default, Label Left | Not verified in Figma |
| Show label (boolean) | true, false | true (as reported by Figma MCP) |
| Label (text) | Free text | "Label" (as reported by Figma MCP) |
| Show info (boolean) | true, false | true (as reported by Figma MCP) |
| Text (text) | Free text | "Placeholder" (as reported by Figma MCP) |
| Show helper text (boolean) | true, false | true (as reported by Figma MCP) |
| Helper text (text) | Free text | "Helper text" (as reported by Figma MCP) |
| Show counter (boolean) | true, false | true (as reported by Figma MCP) |
| Show scroll (boolean) | true, false | false (as reported by Figma MCP) |

The names of the boolean and text properties are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified. The counter text ("00/999") is fixed in the layer and is not exposed as a property.

### Default Configuration

No verified default variant was found. The component set contains 32 variants. Figma MCP code generation reports `State=Default`, `Size=MD`, `Orientation=Default`, but the first variant listed in the component set is `State=Filled, Size=SM, Orientation=Default`. Neither is treated as the documented default.

Verified observations: In every inspected variant, the label, info icon, helper text, and counter are visible and the scrollbar is hidden. The reported defaults for the boolean properties match this.

### Typical Usage

Verified observations:

- Two sizes: `MD` (76 px input, 14 px text) and `SM` (56 px input, 10 px text).
- Two orientations: `Default` places the label above the input; `Label Left` places it to the left.
- The helper text and counter sit below the input, and each can be hidden independently.
- The component width is 244 px in all configurations except `Size=MD, Orientation=Label Left`, which is 260 px.

Evidence-based interpretation: Use Text area in forms where users enter free-form, multi-line text such as comments or descriptions. Use the label to name the field, helper text to explain what to enter, and the counter to show the character limit.

Recommendation: Use the same `Size` and `Orientation` for all fields in the same form.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Text area lets users enter and review text that is longer than a single line, with room for a label, guidance, validation feedback, and a character count.

### Expected Outcome

Evidence-based interpretation: Users understand what to enter (label, info icon, helper text), can see how much they have typed relative to a limit (counter), and receive visible error feedback when the input is invalid (`Error` state).

### Typical Context

Evidence-based interpretation: Forms and detail panels. The `Label Left` orientation suggests use in horizontally aligned form layouts, and `SM` suggests use in denser layouts.

## When to Use

- To capture user comments or feedback.
- When users need to enter descriptions, observations, or detailed notes.
- For justification or explanation fields within forms.
- When the expected input exceeds a single line of text.
- In workflows where users must provide additional context.
- To enable the creation or editing of long-form text content.

## When NOT to Use

- When the expected input is a single word or short phrase.
- For structured data such as names, email addresses, dates, or numbers.
- When users must select an option from a predefined list.
- For simple search or filtering inputs.
- When character limits are very small and a standard text field is sufficient.
- For actions or commands that do not require text entry.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Label | Optional | Field name. Controlled by the show-label boolean and the label text property. |
| Info icon | Optional | 16 px `info` icon after the label. Controlled by the show-info boolean. |
| Input | Required | Bordered box that holds the text. |
| Text | Required | Placeholder or entered text. Content is set by the text property. |
| Cursor | Conditional | 1 px × 16 px text cursor, shown in `Focused`, `Focused tab`, and `Error`. |
| Resize handle | Required | 9 px `Line expand` graphic in the bottom-right corner of the input. |
| Scroll | Optional | 4 px vertical scrollbar (bar and empty track) inside the input. Controlled by the show-scroll boolean. |
| Helper text | Optional | Guidance or error message below the input. Controlled by the show-helper-text boolean and the helper text property. |
| Counter | Optional | Right-aligned character count, fixed text "00/999". Controlled by the show-counter boolean. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Component width | 244 px; 260 px for `MD` + `Label Left` | Variant dimensions |
| Input height, MD | 76 px | Layer dimensions |
| Input height, SM | 56 px | Layer dimensions |
| Input padding, MD | 16 px left (`space/16`), 8 px right, top, bottom (`space/8`) | Variable bindings |
| Input padding, SM | 8 px left (`space/8`), 4 px right, top, bottom (`space/4`) | Variable bindings |
| Input corner radius | 4 px (`semantic/sm` or `radius/4`, depending on variant) | Variable bindings |
| Input border | 1 px; 2 px in `Focused tab` (`focus/width`) | Variant styling |
| Gap inside input | 8 px (`gap/sm`) | Variable binding |
| Gap between label, input, and helper row (`Default` orientation) | 2 px (`gap/xxxs`) | Variable binding |
| Gap between label and input (`Label Left`) | 4 px (`gap/xxs`) | Variable binding |
| Label top padding (`Label Left`) | 8 px in MD, 4 px in SM | Layer styling |
| Gap between label and info icon | 4 px | Layer styling |
| Helper row height | 18 px; 8 px gap between helper text and counter | Layer dimensions |
| Counter width | 39 px, right-aligned | Layer dimensions |
| Info icon | 16 × 16 px | Layer dimensions |
| Scrollbar width | 4 px, fully rounded (`semantic/full`) | Variable bindings |

## Semantics

Evidence-based interpretation:

- The label names the field, and the info icon indicates that more information is available about it.
- `Default` shows placeholder text in a lighter color (`text/secondary`); `Filled` shows entered text in `text/primary`.
- `Error` marks invalid input with a danger-colored border and helper text.
- `Read only` shows content that can be viewed but not edited: no background fill and placeholder-style text color.
- `Disabled` marks an unavailable field.
- `Focused` and `Focused tab` both indicate focus. `Focused tab` uses a thicker 2 px border, which suggests keyboard (Tab key) focus.

HTML element, ARIA attributes, label association, and screen-reader announcements: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Info | `info` icon, 16 px, after the label; muted in `Disabled` | Layer name and dimensions |
| Resize handle | `Line expand` graphic, 9 px, bottom-right of the input | Layer name and dimensions |

The behavior of the info icon (for example, opening a tooltip) is not defined in Figma.

## Variants (Properties)

The variant inventory below is complete: 32 variants (8 states × 2 sizes × 2 orientations) were inspected.

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | White input, `border/default` border, placeholder in `text/secondary`. | Variable bindings |
| Hovered | `background/interactive/hovered` fill, `border/interactive/hovered` border, text in `text/primary`. | Variable bindings |
| Focused | 1 px `border/focus` border, text cursor. | Variable bindings |
| Focused tab | 2 px `border/focus` border (`focus/width`), text cursor. | Variable bindings |
| Filled | White input, `border/default` border, text in `text/primary`. | Variable bindings |
| Error | `border/danger` border, helper text and counter in `text/danger`, text cursor. | Variable bindings |
| Disabled | `background/disabled` fill, `border/disabled` border; label, text, helper, and counter in `text/disabled`; muted info icon and resize handle. | Variable bindings |
| Read only | No background fill, `border/default` border, text in `text/secondary`. | Variable bindings |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 76 px input; label `Text/Label/MD` (14/20); text `Text/Body/SM` (14/20). | Layer dimensions, text styles |
| SM | 56 px input; label `Text/Label/SM` (12/16); text `Text/Body/XXS` (10/14). | Layer dimensions, text styles |

The helper text and counter use `Text/Body/XXS` (10/14) in both sizes.

### Orientation

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Label above the input. | Variant layout |
| Label Left | Label to the left of the input, aligned to the top of the input; the input and helper row share a column. | Variant layout |

### Boolean and text properties

- Show label / Label: show or hide the label and set its text. Reported defaults: `true`, "Label".
- Show info: show or hide the info icon. Reported default: `true`.
- Text: placeholder or entered text. Reported default: "Placeholder".
- Show helper text / Helper text: show or hide the helper text and set its content. Reported defaults: `true`, "Helper text".
- Show counter: show or hide the counter. Reported default: `true`.
- Show scroll: show or hide the scrollbar. Reported default: `false`.

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Empty field | Placeholder in `text/secondary` | Variable bindings |
| Hovered | Pointer over field | Hovered fill and border | Variable bindings |
| Focused | Field has focus | 1 px green border, cursor | Variable bindings |
| Focused tab | Field has keyboard focus (interpretation) | 2 px green border, cursor | Variable bindings |
| Filled | Field contains text | Text in `text/primary` | Variable bindings |
| Error | Invalid input | Red border, red helper text and counter, cursor | Variable bindings |
| Disabled | Unavailable | Muted fill, border, and text | Variable bindings |
| Read only | View-only content | Transparent fill, secondary text | Variable bindings |

The `Error` variants include a text cursor, so the component set shows the error state only while the field appears focused. An unfocused error appearance is not provided.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Input fill: Default, Focused, Focused tab, Filled, Error | Variable bindings |
| Background | `background/interactive/hovered` | Input fill: Hovered | Variable bindings |
| Background | `background/disabled` | Input fill: Disabled | Variable bindings |
| Border | `border/default` | Input border: Default, Filled, Read only | Variable bindings |
| Border | `border/interactive/hovered` | Input border: Hovered | Variable bindings |
| Border | `border/focus` | Input border: Focused, Focused tab | Variable bindings |
| Border width | `focus/width` (2) | Input border: Focused tab | Variable bindings |
| Border | `border/danger` | Input border: Error | Variable bindings |
| Border | `border/disabled` | Input border: Disabled | Variable bindings |
| Text | `text/primary` | Label; text in Hovered, Focused, Focused tab, Filled, Error | Variable bindings |
| Text | `text/secondary` | Text in Default and Read only | Variable bindings |
| Text | `text/tertiary` | Helper text and counter | Variable bindings |
| Text | `text/danger` | Helper text and counter in Error | Variable bindings |
| Text | `text/disabled` | Label, text, helper text, and counter in Disabled | Variable bindings |
| Icon | `icon/primary` | Cursor and info icon | Variable bindings |
| Icon | `icon/disabled` | Info icon in Disabled | Variable bindings |
| Surface | `surface/subtlest`, `surface/subtle` | Scrollbar track and bar | Variable bindings |
| Typography | `Text/Label/MD`, `Text/Label/SM` | Label, MD / SM | Text styles |
| Typography | `Text/Body/SM`, `Text/Body/XXS` | Text, MD / SM; helper text and counter use `Text/Body/XXS` | Text styles |
| Spacing | `space/16`, `space/8`, `space/4` | Input padding | Variable bindings |
| Spacing | `gap/sm`, `gap/xxs`, `gap/xxxs`, `gap/none` | Internal gaps | Variable bindings |
| Radius | `semantic/sm`, `radius/4`, `semantic/full` | Input radius (both tokens used); scrollbar radius | Variable bindings |

Some variants use unbound values instead of tokens: a 4 px radius in `Read only` and some `SM` variants, and a 2 px gap in some variants.

## Interaction

Observed states: `Default`, `Hovered`, `Focused`, `Focused tab`, `Filled`, `Error`, `Disabled`, and `Read only`.

Evidence-based interpretation: The field accepts typed text (cursor in focused states), shows a resize handle that suggests the input can be resized, and can scroll its content when the scrollbar is shown.

Not verified in Figma: resize behavior and limits, scroll behavior, when `Error` is triggered, counter logic and limit, behavior of the info icon, and prototype interactions.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, borders, status indicators, and backgrounds.
- The field must be fully operable using a keyboard.
- Focus states must be clearly visible and distinguishable from other states.
- The label must be properly associated with the field for assistive technologies.
Recommendations
- Provide descriptive helper text when users may need additional guidance.
- Communicate validation errors and character limits accessibly.
- Do not rely solely on colour to communicate error or validation states.

## Content Guidelines

Verified observations: The label is a single line with no wrapping. The placeholder text is "Placeholder", the helper text placeholder is "Helper text", and the counter uses the format "00/999".

Recommendations:

- Use a short label that names the field.
- Use helper text to explain what to enter, and replace it with a clear error message in `Error`.

## Examples

### Standard field, label above

Configuration: `State=Default`, `Size=MD`, `Orientation=Default`

Description: 244 px field with a label and info icon above, a 76 px input with placeholder, and helper text and counter below.

Evidence / Classification: Existing Figma variant (`2258:967`).

### Compact field with error, label on the left

Configuration: `State=Error`, `Size=SM`, `Orientation=Label Left`

Description: Label on the left, 56 px input with a red border and cursor, and red helper text and counter.

Evidence / Classification: Existing Figma variant (`2258:925`).

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Visible label. |
| `helperText` | `string` | `undefined` | Supportive message. |
| `error` | `string` | `undefined` | Error message (overrides helperText). |

It also accepts React's native attributes for the underlying HTML element (TextareaHTMLAttributes).
### Examples

#### Notes field

```tsx
import { TextArea } from "@genome-evolution/react";

<TextArea label="Notes" placeholder="Write…" />;
```

## Pending Clarification

1. **Counter text is not editable.** The counter is fixed text ("00/999") and not a property, so instances cannot show a real count or limit without detaching. Confirm whether a counter text property should be added, and what the character limit is.
2. **Error state appears only while focused.** All `Error` variants include a text cursor. Confirm whether an unfocused error appearance is needed, or whether `Error` is intended to represent both cases.
3. **Focused vs. Focused tab.** Two focus states exist (1 px and 2 px border). Confirm the intended difference (for example, pointer focus vs. keyboard focus) so developers can implement the correct trigger for each.
4. **Inconsistent widths and token use.** `MD` + `Label Left` is 260 px while all others are 244 px; in `Default` and `Filled` with `Label Left`, the input has a fixed width (199 px in MD, 188 px container in SM) while other states fill the width. The input radius uses `semantic/sm`, `radius/4`, or an unbound 4 px depending on the variant. Confirm the intended width behavior and radius token.
5. **Default variant.** No default is documented. The defaults reported by Figma MCP (`Default`, `MD`, `Default`) do not match the first variant in the component set (`Filled`, `SM`, `Default`). Confirm the intended default variant.
6. **Label font weight.** `Text/Label/SM` uses `weight/semibold`, which resolves to "Medium", while `Text/Label/MD` uses the literal "SemiBold" style; both declare weight 600. Confirm which weight should be implemented.

## Notes / Changelog

Generated from Figma evidence (node `2258:793`) on 2026-10-23.

