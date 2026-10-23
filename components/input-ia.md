---
component: "Input-ia"
system: "Genome Evolution Design System"
type: "AI prompt composer (composite input)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3847-4964"
last_updated: "2026-10-23"
tags:
  - "input"
  - "ai"
  - "prompt"
---

# Input-ia

System: Genome Evolution Design System

## Component Summary

A prompt input for AI interactions. It combines a text field, removable reference tags, optional action pickers, a send button, and an AI disclaimer, in two layouts (`Normal`, `Multiactions`), two corner styles, and seven states.

## Quick Reference

### What It Is

Evidence-based interpretation: Input-ia is the message composer for an AI assistant. Several pieces of Figma evidence support this:

- The component name ("ia").
- The placeholder "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos" ("What do you want to build? Use @ or Ctrl + Space to reference your data").
- The disclaimer "AI can make mistakes. Consider checking important information."
- A `send` button that becomes active (filled) when the field contains text.
- Reference tags that look like attached files.

No written component description was found in Figma for Input-ia itself.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Normal, Multiactions | Normal (as reported by Figma MCP) |
| State | Default, Filled, Hovered, On focus, Focused, Error, Disable | Default (as reported by Figma MCP) |
| Corners | Square, Rounded | Square (as reported by Figma MCP) |
| Show embed (boolean) | true, false | true (as reported by Figma MCP) |
| Show action 1 / 2 / 3 (booleans) | true, false | true (as reported by Figma MCP); `Type=Normal` only |
| Text (text) | Free text | "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos" |

`Disable` is spelled exactly as in Figma. The boolean and text property names are listed as exposed through Figma MCP (`showEmbed`, `showAction1`–`showAction3`, `text`); their exact display names in the Figma properties panel were not verified.

### Default Configuration

Figma MCP reports `Type=Normal`, `State=Default`, `Corners=Square`, with the reference tags and all three actions visible. This matches the first variant in the component set (node `3847:4951`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- `Normal` is a multi-line composer (389 × 168 px). Reference tags sit at the top inside the box, the prompt text below them, and an action row at the bottom with three action pickers on the left and the send button on the right.
- `Multiactions` is a compact single-row composer (389 × 112 px including the tags and disclaimer). Reference tags sit above the box, and inside it are an `add` (+) icon, the prompt text, and the send button.
- The send button looks disabled in all states except `Filled`, where it uses a filled Evergreen style.
- The disclaimer is shown below the box in all states except `Error`, where an error message replaces it.

Evidence-based interpretation: Use `Normal` where users write longer prompts and need direct access to attachment and data actions. Use `Multiactions` where space is limited and actions are grouped behind the `+` button.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Input-ia lets users write instructions for an AI, attach or reference data, and send the prompt, all from one component, while reminding them that AI output can be wrong.

### Expected Outcome

Evidence-based interpretation: Users can compose a prompt, see which files or data sources are referenced, add more context through actions, and send the prompt once it contains text.

### Typical Context

Evidence-based interpretation: AI assistant and builder experiences where users describe what they want to build and reference their data.

## When to Use

Evidence-based interpretation (not documented as official guidance in Figma):

- As the prompt entry point of an AI assistant or builder.
- When users need to reference data or files in a prompt (reference tags, `@` / Ctrl + Space hint).
- `Normal`, for detailed prompts with visible attach and data actions.
- `Multiactions`, for compact layouts.

## When NOT to Use

[No documented restrictions found]

Recommendation (not an established design-system rule): For regular form fields, use `Input` or `Text area`. Input-ia includes AI-specific content (disclaimer, send button, references).

## Structure (Anatomy)

### Composition

```
Input-ia
├── References row (Show embed) — Tag instances: file tags with remove icon + "+6" overflow tag
├── Input-chat box (bordered)
│   ├── [Normal] References row, inside the box at the top
│   ├── [Multiactions] add (+) icon
│   ├── Prompt text (Text property)
│   └── [Normal] composer-actions row
│       ├── composer-actions-left: up to 3 action pickers (Input instances)
│       └── Send button (Icon Button instance)
│   └── [Multiactions] Send button (Icon Button instance), at the end of the row
└── Disclaimer / error message (below the box)
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Reference tags | Optional | Row of `Tag` instances (pill-shaped): three file tags ("01_Resea…", "02_Perso…", "03_Journ…") with a `file` icon and a `close` icon, followed by a success-colored "+6" tag with a `chevron-down` icon. Controlled by Show embed. The row clips overflow. |
| Input box | Required | Bordered container holding the prompt and actions. |
| Add icon | `Multiactions` only | 16 px `add` icon at the start of the box. |
| Prompt text | Required | 12 px text (`Text/Body/XS`). Content set by the Text property. |
| Action pickers | Optional, `Normal` only | Up to three 52 × 24 px `Input` instances, each with a 16 px icon (`database-add`, `clip`, `image`) and a 12 px `chevron-down`. Controlled by Show action 1–3. |
| Send button | Required | `Icon Button` instance with a 16 px `send` (arrow-up) icon, 8 px padding. |
| Disclaimer | Required | Centered 10 px text: "AI can make mistakes. Consider checking important information." In `Error`, replaced by "Review the instruction, correct the text so that the AI can understand it." |

### Child-component relationships

- `Tag` provides the reference chips and the "+6" overflow indicator.
- `Input` provides the action pickers (icon plus dropdown chevron).
- `Icon Button` provides the send control.

### Ordering logic

- Reference tags always come first (above or at the top of the box), followed by the prompt, then actions, then the disclaimer.
- In `Normal`, actions are aligned to the left of the bottom row and the send button to the right.
- In `Multiactions`, the order inside the box is `+`, prompt, send.
- Reference tags are listed left to right, with the "+6" overflow tag last.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Component width | 389 px | Variant dimensions |
| Height, Normal | 168 px (166 px in `On focus`) | Variant dimensions |
| Height, Multiactions | 112 px | Variant dimensions |
| Box padding | 16 px | Layer styling / `space/16` |
| Action row padding | 8 px top, 16 px sides and bottom | Layer styling |
| Gap between action pickers | 6 px (not bound to a variable) | Auto layout |
| Gap inside Multiactions box | 16 px (`gap/lg`) | Variable binding |
| Gap between reference tags | 4 px | Auto layout |
| Gap between box and disclaimer | 4 px (Normal); 8 px between tags and box (Multiactions, `gap/sm`) | Auto layout |
| Corner radius, Square | 4 px (`semantic/sm`) | Variable binding |
| Corner radius, Rounded | 12 px (`semantic/lg`); send button fully rounded | Variable binding, screenshot |
| Send button | 32 × 32 px (16 px icon + 8 px padding) | Layer styling |

## Semantics

Evidence-based interpretation:

- Reference tags represent data or files included as context. The `close` icon suggests each can be removed, and the "+6" tag indicates six more hidden references.
- The send button is the primary action. Its disabled look in empty states and filled look in `Filled` indicate that a prompt can be sent only when text is present.
- The gradient border distinguishes the AI input from regular inputs.

HTML elements, ARIA roles, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Reference tag | `file` (leading) and `close` (trailing), 12 px | Nested Tag instances |
| Overflow tag | `chevron-down`, 12 px | Nested Tag instance |
| Action 1 / 2 / 3 | `database-add`, `clip`, `image`, 16 px, each with `chevron-down` | Nested Input instances |
| Add | `add`, 16 px (`Multiactions`) | Layer name |
| Send | `send` (arrow-up), 16 px | Nested Icon Button instance |

The action icon layers are named `calendar` inside the nested `Input` instances, although they show other icons.

## Variants (Properties)

The variant inventory below is complete: 28 variants (2 types × 7 states × 2 corners) were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Normal | Multi-line box with references, prompt, and action row. | Variant layout |
| Multiactions | Tags above a single-row box with `+`, prompt, and send. Show action 1–3 do not apply. | Variant layout |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Gradient border (`palette/primary/700` → `palette/secondary/700`), placeholder in `text/tertiary`, send button in disabled style (`background/disabled`, `icon/disabled`). | Variable bindings, screenshot |
| Filled | Gradient border; send button filled with `surface/evergreen/bold` and `icon/inverse`. | Variable bindings, screenshot |
| Hovered | Gradient border; `background/interactive/hovered` fill. | Variable bindings |
| On focus | Gradient border; text cursor shown and placeholder removed. | Screenshot |
| Focused | 2 px `border/focus` border (`focus/width`). | Variable bindings |
| Error | `border/danger` border; error message in `text/danger` replaces the disclaimer. | Variable bindings, screenshot |
| Disable | `background/disabled` fill, `border/disabled` border, `text/disabled` and `icon/disabled` content. | Variable bindings |

### Corners

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Square | 4 px box radius. | Variable binding |
| Rounded | 12 px box radius; circular send button. | Variable binding, screenshot |

### Show embed, Show action 1–3, Text

- Show embed: shows or hides the reference tags. Reported default: `true`.
- Show action 1–3: show or hide each action picker (`Normal` only). Reported default: `true`.
- Text: the prompt placeholder or content.

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Empty | Gradient border, placeholder, inactive send | Variable bindings |
| Filled | Prompt entered | Active (filled) send button | Variable bindings |
| Hovered | Pointer over box | Light gray fill | Variable bindings |
| On focus | Typing (interpretation) | Cursor, no placeholder | Screenshot |
| Focused | Focus (interpretation: keyboard focus) | 2 px green focus border | Variable bindings |
| Error | Invalid prompt | Red border, red error message | Variable bindings |
| Disable | Unavailable | Muted fill, border, text, and actions | Variable bindings |

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Border | `palette/primary/700`, `palette/secondary/700` (`Gradient` style) | Box border in Default, Filled, Hovered, On focus | Variable bindings |
| Border | `border/focus` + `focus/width` (2) | Focused border | Variable bindings |
| Border | `border/danger` | Error border | Variable bindings |
| Border | `border/disabled`, `border/default` | Disable border; action picker and reference tag borders | Variable bindings |
| Background | `background/canvas` | Box and action fill | Variable bindings |
| Background | `background/interactive/hovered` | Hovered fill | Variable bindings |
| Background | `background/disabled` | Disable fill; inactive send button | Variable bindings |
| Surface | `surface/evergreen/bold` | Active send button (Filled) | Variable bindings |
| Surface | `surface/success/subtle` + `border/success` + `text/success` | "+6" overflow tag | Variable bindings |
| Text | `text/tertiary` | Placeholder and disclaimer | Variable bindings |
| Text | `text/primary` | Reference tag labels | Variable bindings |
| Text | `text/danger`, `text/disabled` | Error message; Disable text | Variable bindings |
| Icon | `icon/primary`, `icon/disabled`, `icon/inverse`, `icon/success` | Icons by state | Variable bindings |
| Typography | `Text/Body/XS` (12/16), `Text/Body/XXS` (10/14), `Text/Body/XXS Strong` | Prompt; disclaimer; tag labels | Text styles |
| Spacing | `space/8`, `space/4`, `space/16`, `gap/sm`, `gap/lg`, `gap/xxs`, `gap/xxxs` | Padding and gaps | Variable bindings |
| Radius | `semantic/sm`, `semantic/lg`, `semantic/full` | Box (Square / Rounded) and tags | Variable bindings |

## Interaction

Observed states: `Default`, `Filled`, `Hovered`, `On focus`, `Focused`, `Error`, and `Disable`.

Evidence-based interpretation: The send button is enabled when the prompt has text. Typing `@` or pressing Ctrl + Space references data (from the placeholder). Each reference tag can be removed with its `close` icon, and the "+6" tag expands the hidden references.

Not verified in Figma: what each action picker opens, what `+` opens in `Multiactions`, send behavior (click or keyboard), how references are added or removed, auto-growing height for long prompts, and when `Error` is triggered.

## Accessibility

Accessibility-related observations:

- A dedicated `Focused` state shows a 2 px `border/focus` border.
- `Error` uses a red border and a text message, so it is not shown by color alone.
- The send button's enabled state is shown by fill color and icon color.
- Action pickers and the send button are icon-only.
- Disclaimer, reference labels, and error message use 10 px text.

Missing accessibility information (not verified in Figma): accessible names for icon-only actions and the send button, label for the prompt field, keyboard support (including Ctrl + Space and `@`), announcement of references and errors, and contrast compliance (including the gradient border).

## Content Guidelines

Verified observations:

- The placeholder is in Spanish: "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos".
- The disclaimer and the error message are in English and fixed, not exposed as properties.
- Reference tag names are truncated with an ellipsis ("01_Resea…").

Recommendations:

- Keep placeholder, disclaimer, and error message in the same language.
- Write error messages that tell users how to fix the prompt, as in the existing example.

## Examples

### Default composer

Configuration: `Type=Normal`, `State=Default`, `Corners=Square`, all booleans `true`

Description: Composer with three reference tags and "+6", placeholder text, three action pickers, an inactive send button, and the disclaimer.

Evidence / Classification: Existing Figma variant (`3847:4951`).

### Compact composer, ready to send

Configuration: `Type=Multiactions`, `State=Filled`, `Corners=Rounded`

Description: Reference tags above a rounded single-row box with `+`, text, and a filled circular send button.

Evidence / Classification: Existing Figma variant (`3907:7771`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: Show action 1–3 affect only `Type=Normal`.

## Pending Clarification

1. **Focused vs. On focus.** Two focus-related states exist: `On focus` (cursor, gradient border) and `Focused` (2 px green focus border, no cursor). Confirm the intended difference so developers can map each one to the right trigger.
2. **Gradient border uses palette tokens.** The default border is a `Gradient` style built from primitive palette tokens (`palette/primary/700` → `palette/secondary/700`) instead of semantic border tokens. Confirm whether a semantic token should be defined for the AI border.
3. **Mixed languages and fixed texts.** The placeholder is in Spanish, while the disclaimer and error message are in English. Neither the disclaimer nor the error message is exposed as a property. Confirm the intended language and whether these texts should be editable.
4. **Undefined actions.** Figma does not define what the three action pickers (`database-add`, `clip`, `image`) and the `+` button in `Multiactions` open, how references are added or removed, or how the "+6" tag expands. The name `Multiactions` also suggests multiple actions while showing a single `+`. Confirm the intended behavior.
5. **Growth and overflow.** The component has a fixed width of 389 px, and the reference row clips overflow. Confirm whether the box grows with long prompts and whether the width is fixed or fluid.

## Notes / Changelog

Generated from Figma evidence (node `3847:4964`) on 2026-10-23. The nested `Tag`, `Input`, and `Icon Button` instances were identified as child components; their own Figma descriptions were not used as evidence for this component.

[No verified historical changes available]
