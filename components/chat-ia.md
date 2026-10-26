---
component: "Chat-ia"
system: "Genome Evolution Design System"
type: "AI conversation message"
status: "Design"
version: "1.0"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3853-5941"
last_updated: "2026-10-23"
tags:
  - "chat"
  - "ai"
  - "message"
---

# Chat-ia

System: Genome Evolution Design System

## Component Summary

A conversation message for AI chat experiences. It shows a user (`Person`) message or an AI (`IA`) response, with AI states for a normal response, a warning, an error with retry, and a processing indicator.

## Quick Reference

### What It Is

The Chat component is a conversational interface used to display message exchanges between a user and an artificial intelligence system. It enables the presentation of user requests, AI-generated responses, processing states, warnings, errors, and actions associated with generated content.

The component is specifically designed for AI-powered conversational experiences where responses may include dynamically generated information, recommendations, contextual references, evidence, quality feedback controls, and follow-up actions.
It supports different participant types (Person and AI), as well as generation, validation, and error states that help users understand the lifecycle of an interaction with artificial intelligence.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| User | Person, IA | Person (as reported by Figma MCP) |
| State | Default, Warning, Charging, Error | Default (as reported by Figma MCP) |
| Show tags (boolean) | true, false | false (as reported by Figma MCP); `Person` only |
| Show recommendation (boolean) | true, false | true (as reported by Figma MCP); `Person` only |
| Show title (boolean) | true, false | false (as reported by Figma MCP); `IA` + `Default` only |
| Show check (boolean) | true, false | true (as reported by Figma MCP); shown only with the title |
| Show button (boolean) | true, false | false (as reported by Figma MCP); `IA` + `Default` only |
| Show actions (boolean) | true, false | true (as reported by Figma MCP); `IA` + `Default` only |

The boolean property names are listed as exposed through Figma MCP (`showTags`, `showRecommendation`, `showTitle`, `showCheck`, `showButton`, `showActions`); their exact display names in the Figma properties panel were not verified. Message texts are not exposed as text properties.

### Default Configuration

Figma MCP reports `User=Person`, `State=Default`. This matches the first variant in the component set (node `3853:5940`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- `Person` has only the `Default` state. `Warning`, `Charging`, and `Error` exist only for `IA`.
- All variants are 336 px wide.
- `Person` messages place the avatar on the right; `IA` messages place it on the left.
- The `IA` + `Default` message can show a title with a check icon, the response text, a version and timestamp line, a `Select` button, and feedback actions (like, dislike, bookmark).

Evidence-based interpretation: Stack Chat-ia instances vertically to build a conversation, alternating `Person` and `IA` messages. Use `IA` + `Charging` while a response is being generated, then replace it with `IA` + `Default`, `Warning`, or `Error`.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Chat-ia gives AI conversations a consistent message format that separates user prompts from AI responses and communicates processing, limits, and failures.

### Expected Outcome

Evidence-based interpretation: Users can follow the conversation, tell their own messages from AI responses, rate or save AI responses, act on a proposal (`Select`), and recover from errors (`Retry`).

### Typical Context

Evidence-based interpretation: AI assistant or builder chats, likely together with a prompt input such as `Input-ia`. This pairing is not defined in Figma.

## When to Use

- For conversations between users and AI assistants.
- In copilots, intelligent agents, and virtual assistants.
- To display prompts and responses within a conversational experience.
- When conversation history and context must be preserved.
- To present content generated progressively by an AI model.
- When generated responses require feedback, evaluation, or follow-up actions.
- For natural-language-driven automation experiences.

## When NOT to Use

- For traditional user-to-user messaging without AI capabilities.
- When the interaction consists solely of structured forms.
- To display static information that does not require conversation.
- As a replacement for lists, tables, or dashboards.
- When users do not need historical interaction context.
- For simple tasks that can be completed more efficiently through direct actions.

## Structure (Anatomy)

### Composition

```
Chat-ia (336 px)
├── [Person] Document tags row (Show tags): 3 file Tag instances + chevron-down
├── [Person] bubble-simple
│   ├── Message bubble: context Tag (Show recommendation) + prompt text
│   └── Avatar: Icon Button (user icon), right side
└── [IA]
    ├── Avatar: Icon Button (ai-worker icon), left side
    └── Message bubble (Default / Warning / Error) or processing text (Charging)
        ├── [Default] Header: title + circle-check (Show title, Show check)
        ├── [Default] Response text + "Versión 1 · 14 jul, 10:30"
        ├── [Default] Select button (Show button)
        ├── [Default] Feedback actions: like, dislike, bookmark (Show actions)
        ├── [Warning / Error] warning icon + message
        └── [Error] Retry button
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Avatar | Required | 32 px round `Icon Button` instance. `Person`: `user` icon, `surface/indigo/subtle` with `border/indigo`. `IA`: `ai-worker` icon, `surface/evergreen/subtle` with `border/evergreen`. |
| Message bubble | Required (except `Charging`) | 16 px padding, 16 px gap, 16 px rounded corners with one square corner on the avatar side, `shadow-xs` drop shadow. |
| Document tags | Optional, `Person` | Row of three file `Tag` instances ("Docum…") and a 16 px `chevron-down`, above the bubble. 296 px wide, clips overflow. |
| Context tag | Optional, `Person` | Information-style `Tag` ("Vistas: Ventas") at the top of the bubble. |
| Title | Optional, `IA` + `Default` | 16 px semibold title in `text/indigo` ("Title - component name"), with an optional 16 px `circle-check` icon. |
| Message text | Required | 14/20 text (`Text/Body/SM`) in `text/primary`. |
| Metadata | `IA` + `Default` | "Versión 1 · 14 jul, 10:30" in 10 px text. |
| Select button | Optional, `IA` + `Default` | 32 px `Button` with `surface/indigo/bold` fill and `text/inverse` label "Select". |
| Feedback actions | Optional, `IA` + `Default` | `like`, `unlike`, `bookmark` icons, 16 px, 12 px apart, right-aligned. |
| Status icon | `Warning` / `Error` | 16 px `warning` icon. |
| Retry button | `Error` | 24 px pill `Button` with `surface/danger/subtle`, `border/danger`, and `text/danger` label "Retry". |
| Processing text | `Charging` | "Procesando tu solicitud..." in 12 px `text/secondary`, next to the avatar, with no bubble. |

### Ordering logic

- `Person`: optional document tags above; then the bubble on the left and the avatar on the right.
- `IA`: avatar on the left; then the bubble. Inside the `Default` bubble: title, response, metadata, `Select` button, feedback actions.
- `Error`: message first, `Retry` button aligned to the right below it.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 336 px (all variants) | Variant dimensions |
| Gap between avatar and bubble | 8 px | Auto layout |
| Bubble padding | 16 px (`space/16`) | Variable binding |
| Bubble gap | 16 px (`gap/lg`) | Variable binding |
| Bubble radius | 16 px, except the corner next to the avatar (top-right for `Person`, top-left for `IA`) | Layer styling |
| Person bubble height | 308 px, fixed | Layer dimensions |
| Avatar | 32 × 32 px (16 px icon + 8 px padding) | Layer dimensions |
| Heights | Person 308, IA Default 346, Warning 73, Charging 32, Error 112 px | Variant dimensions |

## Semantics

Evidence-based interpretation:

- `Person` = message from the user; `IA` = message from the AI.
- `Warning` = the AI cannot respond because of a limit, with a reset time.
- `Error` = response generation failed and can be retried.
- `Charging` = the request is being processed.
- The `circle-check` next to the title suggests a completed or validated result. The version line suggests responses can have multiple versions.

HTML elements, ARIA live regions, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Person avatar | `user`, 16 px, `icon/indigo` | Layer, variable binding |
| IA avatar | `ai-worker`, 16 px, `icon/evergreen` | Layer, variable binding |
| Title check | `circle-check`, 16 px | Layer |
| Feedback | `like`, `unlike`, `bookmark`, 16 px, `icon/primary` | Layers |
| Warning / Error | `warning`, 16 px, `icon/warning` / `icon/danger` | Layers, variable bindings |
| Document tags | `file` icon in each tag; `chevron-down` after the row | Nested Tag instances |

## Variants (Properties)

The variant inventory below is complete: 5 variants were inspected.

### User

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Person | User message; avatar on the right; `surface/subtlest` bubble. Only `State=Default`. | Variant layout, variable bindings |
| IA | AI message; avatar on the left; `background/canvas` bubble. All four states. | Variant layout, variable bindings |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Normal message. For `IA`: `border/default` bubble with response content. | Variable bindings |
| Warning | `IA` only. `border/warning` bubble, warning icon, "AI token quota exceeded" and "Resets in 23:59:34." (bold). | Variable bindings, layer text |
| Charging | `IA` only. Avatar plus "Procesando tu solicitud..." in `text/secondary`; no bubble. | Variant layout |
| Error | `IA` only. `border/danger` bubble, danger warning icon, "We could not generate a response. Please try again." and a `Retry` button. | Variable bindings, layer text |

### Boolean properties

- Show tags: document tags above the `Person` bubble. Reported default: `false`.
- Show recommendation: context tag inside the `Person` bubble. Reported default: `true`.
- Show title / Show check: title and check icon in the `IA` response. Reported defaults: `false` / `true`.
- Show button: `Select` button in the `IA` response. Reported default: `false`.
- Show actions: feedback actions in the `IA` response. Reported default: `true`.

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Message shown | Neutral bubble | Variable bindings |
| Charging | Processing | Avatar with secondary processing text | Variant layout |
| Warning | Limit reached | Warning border and icon | Variable bindings |
| Error | Failure | Danger border, icon, and Retry button | Variable bindings |

## Token Mapping

All tokens below were verified through Figma variable bindings, except where noted.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/subtlest` | Person bubble | Variable binding |
| Background | `background/canvas` | IA bubble | Variable binding |
| Surface | `surface/indigo/subtle`, `surface/evergreen/subtle` | Person / IA avatar fill | Variable bindings |
| Surface | `surface/indigo/bold` | Select button fill | Variable binding |
| Surface | `surface/danger/subtle`, `surface/info/subtle` | Retry button; context tag | Variable bindings |
| Border | `border/default`, `border/warning`, `border/danger` | Bubble border by state | Variable bindings |
| Border | `border/indigo`, `border/evergreen`, `border/info` | Avatars; context tag | Variable bindings |
| Text | `text/primary`, `text/secondary`, `text/indigo`, `text/inverse`, `text/danger`, `text/info` | Message, processing text, title, Select label, Retry label, context tag | Variable bindings |
| Icon | `icon/indigo`, `icon/evergreen`, `icon/primary`, `icon/warning`, `icon/danger` | Icons | Variable bindings |
| Effect | `shadow-xs` | Bubble drop shadow | Effect style |
| Typography | `Text/Body/SM`, `Text/Body/XS`, `Text/Body/XXS`, `Text/Button/SM` | Message; processing text; metadata; tag and button labels | Text styles |
| Spacing | `space/16`, `space/12`, `space/8`, `space/4`, `gap/lg`, `gap/sm`, `gap/xxs` | Padding and gaps | Variable bindings |
| Radius | `semantic/full`, `semantic/pill`, `semantic/sm` | Avatar and tags; Retry button; Select button | Variable bindings |

Not bound to variables: the 16 px bubble radius, the IA avatar radius, the 12 px gap between feedback actions, and the font settings of the `Warning` message.

## Interaction

Not verified in Figma: what like, dislike, and bookmark do; what `Select` does; `Retry` behavior; how the document tags expand (`chevron-down`); processing animation; and message streaming.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, borders, status indicators, and backgrounds.
- All interactive controls associated with messages must be keyboard accessible.
- Focus indicators must be clearly visible on actions, buttons, and interactive elements.
- New messages, loading states, and errors must be properly communicated to assistive technologies.
Recommendations
- Semantically identify the source of each message (user or AI).
- Communicate processing states through text in addition to visual indicators.
- Maintain a clear hierarchy for titles, references, actions, and generated content.

## Content Guidelines

Verified observations:

- Content mixes languages: "Procesando tu solicitud...", "Versión 1 · 14 jul, 10:30", and "Vistas: Ventas" are in Spanish, while the warning, error, `Retry`, `Select`, and sample messages are in English.
- All message texts are fixed layer text.

Recommendations:

- Use one language consistently across all messages and labels.
- Keep warning and error messages short and action-oriented, as in the existing examples.

## Examples

### User prompt

Configuration: `User=Person`, `State=Default`, Show recommendation `true`

Description: Gray bubble with a "Vistas: Ventas" context tag and the prompt text, with the user avatar on the right.

Evidence / Classification: Existing Figma variant (`3853:5940`).

### AI error

Configuration: `User=IA`, `State=Error`

Description: AI avatar with a red-bordered bubble, an error message, and a `Retry` button.

Evidence / Classification: Existing Figma variant (`3924:4599`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The component set contains no `Person` variants for `Warning`, `Charging`, or `Error`.

## Pending Clarification

1. **Message text is not editable through properties.** All message texts (prompt, response, title, metadata, warning, error, processing) are fixed layer text with no text properties. Confirm whether text properties should be added.
2. **Fixed height for Person messages.** The `Person` bubble has a fixed height of 308 px, so it does not adapt to shorter or longer prompts. Confirm the intended growth behavior for both message types.
3. **State naming.** `Charging` appears to mean loading or processing. Confirm whether it should be renamed (for example, `Loading`) and whether an animation or streaming state is expected.
4. **Mixed languages.** Spanish and English texts are combined within the component. Confirm the intended language.
5. **Unbound values.** The `Warning` message uses raw font values instead of text styles, and the bubble and IA avatar radii are not bound to tokens, while the Person avatar uses `semantic/full`. Confirm that these should be tokenized.

## Notes / Changelog

Generated from Figma evidence (node `3853:5941`) on 2026-10-23. The nested `Tag`, `Icon Button`, and `Button` instances were identified as child components; their own Figma descriptions were not used as evidence for this component.
