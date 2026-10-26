---
component: "Suggestion-ia"
system: "Genome Evolution Design System"
type: "AI suggestion item"
status: "Design"
version: "1.0"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3859-6817"
last_updated: "2026-10-23"
tags:
  - "ai"
  - "suggestion"
  - "card"
---

# Suggestion-ia

System: Genome Evolution Design System

## Component Summary

A single AI suggestion item, available as a compact one-line suggestion (`Simple`) or a card with an icon, title, and description (`Complete`).

## Quick Reference

### What It Is

The Suggestion component is a contextual recommendation element used to present potential actions, queries, or exploration paths within AI-powered experiences. Its purpose is to help users start a conversation, discover assistant capabilities, or continue an interaction based on an AI-generated response.

Unlike Chat Suggestion, which focuses on quick refinements within the conversational flow, Suggestion represents broader contextual recommendations and can be used both at the beginning of an experience and within AI responses to suggest next steps, related queries, or available resources.

The component supports two variants:
- Simple: a lightweight recommendation based on text and optionally associated with a category or context.
- Complete: an enriched recommendation that includes iconography, title, description, and supporting metadata that help users understand what they will obtain when selecting it.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Simple, Complete | Simple (as reported by Figma MCP) |
| Text (text) | Free text | "como gráfica de barras" (as reported by Figma MCP); `Simple` only |
| Title (text) | Free text | "1. Sales dashboard" (as reported by Figma MCP); `Complete` only |
| Description (text) | Free text | "1,248 records matching schema" (as reported by Figma MCP); `Complete` only |
| Icon (instance swap) | Any icon instance | `chart-lines` (as reported by Figma MCP); `Complete` only |

The text and instance-swap property names are listed as exposed through Figma MCP (`text`, `title`, `description`, `instance`); their exact display names in the Figma properties panel were not verified. The context tag text in `Simple` ("Vistas: Ventas") is not exposed as a property.

### Default Configuration

Figma MCP reports `Type=Simple`. This matches the first variant in the component set (`Type=Simple`, node `3859:6816`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- `Simple` (320 × 36 px) shows an information `Tag` followed by a single line of text.
- `Complete` (268 × 56 px) shows a 32 px icon container, a semibold title, and a secondary description.
- The sample `Complete` title starts with a number ("1."), which suggests the cards appear in a numbered list.

Evidence-based interpretation:

- Use `Simple` to propose an instruction applied to a context, for example a view displayed in a given format.
- Use `Complete` to propose a concrete result, such as a dashboard or data set, with a short summary.
- Stack several items vertically to offer a list of suggestions. Figma does not define a list container.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Suggestion-ia lets the AI present options that users can recognize and choose quickly, without writing a full prompt.

### Expected Outcome

Evidence-based interpretation: Users can scan a suggestion's context and intent (`Simple`) or its result and summary (`Complete`), then choose it.

### Typical Context

Evidence-based interpretation: AI assistant and builder flows, alongside `Chat-ia`, `Chat-suggestion-ia`, and `Input-ia`. The `Simple` context tag ("Vistas: Ventas") also appears in the `Person` message of `Chat-ia`, which suggests a selected suggestion may become part of a prompt. This relationship is not defined in Figma.

## When to Use

- As a starting point when an AI chat has no existing messages.
- To help users discover assistant capabilities.
- Within AI-generated responses to suggest relevant next steps.
- To recommend common queries or actions.
- When guiding users toward specific platform capabilities.
- To surface available resources, views, reports, data, or automations.
- As part of assisted exploration experiences in enterprise AI solutions.

## When NOT to Use

- As a replacement for the primary text input.
- For critical actions that require explicit confirmation.
- When recommendations are unrelated to the current context.
- For primary application navigation.
- When only a single relevant action exists.
- To display long lists of records or search results.

## Structure (Anatomy)

### Composition

```
Suggestion-ia
├── [Simple] Container (320 px, single row)
│   ├── Tag — context (Information, pill, "Vistas: Ventas")
│   └── Text — instruction (Text property)
└── [Complete] Container (268 px, card)
    ├── card-icon-container (32 px, evergreen) — Icon (instance swap)
    └── card-text-container
        ├── Title (Title property)
        └── Description (Description property)
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | `background/canvas` fill with a 1 px `border/subtle` border. |
| Context tag | Required (`Simple`) | Nested `Tag` instance: information style (`surface/info/subtle`, `border/info`, `text/info`), pill-shaped, 20 px high, 12 px label (`Text/Button/SM`). |
| Instruction text | Required (`Simple`) | 12 px `Text/Body/XS`, `text/primary`, single line. |
| Icon container | Required (`Complete`) | 32 × 32 px, `surface/evergreen/subtle`, 8 px radius, holding a 16 px icon in `icon/evergreen`. |
| Title | Required (`Complete`) | 12 px `Text/Body/XS Strong`, `text/primary`. |
| Description | Required (`Complete`) | 10 px `Text/Body/XXS`, `text/tertiary`. |

### Child-component relationships

- `Tag` provides the context label in `Simple`, using its information color treatment.
- The `Complete` icon is a swappable icon instance (default `chart-lines`).

### Ordering logic

- `Simple`: context tag first, then the instruction, read as one phrase ("Vistas: Ventas" + "como gráfica de barras").
- `Complete`: icon on the left, then title above description.
- Numbering in the `Complete` title ("1.") is part of the text, not generated by the component.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 320 px (`Simple`), 268 px (`Complete`), fixed | Variant dimensions |
| Height | 36 px (`Simple`), 56 px (`Complete`) | Variant dimensions |
| Padding | 8 px (`Simple`); 12 px, unbound (`Complete`) | Layer styling |
| Gap | 8 px (`Simple`); 12 px between icon and text, 2 px between title and description (`Complete`), unbound | Layer styling |
| Corner radius | 8 px, `semantic/md` (`Simple`); 10 px, unbound (`Complete`) | Variable binding, layer styling |
| Overflow | `Simple` clips content; its text does not wrap | Layer styling |

## Semantics

Evidence-based interpretation: Each instance represents one selectable AI suggestion. In `Simple`, the tag names the context and the text names the requested transformation. In `Complete`, the title names the proposed result and the description summarizes it.

HTML elements, ARIA roles, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Icon (`Complete`) | `chart-lines`, 16 px, `icon/evergreen`, swappable | Layer, variable binding, instance-swap property |

## Variants (Properties)

The variant inventory below is complete: 2 variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Simple | Context tag plus one line of text; 320 × 36 px. | Variant layout |
| Complete | Icon, title, and description card; 268 × 56 px. | Variant layout |

### Text, Title, Description, Icon

- Text: instruction in `Simple`.
- Title and Description: card content in `Complete`.
- Icon: card icon in `Complete`, default `chart-lines`.

## States

[No documented states found]. The component set has no hover, selected, focused, or disabled variants.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Container fill | Variable binding |
| Border | `border/subtle` | Container border | Variable binding |
| Surface | `surface/info/subtle` + `border/info` + `text/info` | Context tag | Variable bindings |
| Surface | `surface/evergreen/subtle` | Icon container | Variable binding |
| Icon | `icon/evergreen` | Card icon | Variable binding |
| Text | `text/primary`, `text/tertiary` | Instruction and title; description | Variable bindings |
| Typography | `Text/Body/XS`, `Text/Body/XS Strong`, `Text/Body/XXS`, `Text/Button/SM` | Instruction; title; description; tag label | Text styles |
| Spacing | `space/8`, `space/4`, `gap/xxs` | Tag padding and gap | Variable bindings |
| Radius | `semantic/md`, `semantic/full` | `Simple` container; tag | Variable bindings |

Not bound to variables: the `Complete` container radius (10 px), padding and gap (12 px), the icon container radius (8 px), and the `Simple` container gap and padding (8 px).

## Interaction

No interactive states or prototype interactions exist.

Not verified in Figma: what selecting a suggestion does, hover and selected feedback, keyboard navigation through a list of suggestions, and where the list appears.

## Overflow behavior

Verified observations: Both types have a fixed width. `Simple` clips content, and its instruction text does not wrap. The `Complete` title and description fill the remaining width.

Not verified in Figma: truncation (for example, ellipsis), wrapping in `Complete`, and behavior with long context tags.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, borders, and backgrounds.
- Suggestions must be fully keyboard accessible.
- Visible focus indicators must be clearly identifiable on every interactive suggestion.
- Titles, descriptions, and category information must be available to assistive technologies.
Recommendations
- Use descriptive and action-oriented titles.
- Ensure the primary meaning can be understood without relying only on icons.
- Maintain a logical navigation order between recommendations.

## Content Guidelines

Verified observations:

- `Simple` content is in Spanish ("Vistas: Ventas", "como gráfica de barras"); `Complete` content is in English ("1. Sales dashboard", "1,248 records matching schema").
- The `Simple` instruction starts in lowercase so that it reads as a continuation of the tag.

Recommendations:

- Write `Simple` instructions as a short phrase that completes the context tag.
- Keep `Complete` titles short and descriptions to one line.

## Examples

### Simple suggestion

Configuration: `Type=Simple`

Description: "Vistas: Ventas" tag followed by "como gráfica de barras".

Evidence / Classification: Existing Figma variant (`3859:6816`).

### Complete suggestion

Configuration: `Type=Complete`

Description: Evergreen chart icon, title "1. Sales dashboard", and description "1,248 records matching schema".

Evidence / Classification: Existing Figma variant (`3859:6815`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: Text applies only to `Simple`; Title, Description, and Icon apply only to `Complete`.

## Pending Clarification

1. **Where suggestions appear and how they are selected.** Figma does not show where Suggestion-ia is used (for example, as results of `@` / Ctrl + Space in `Input-ia`, or inside the conversation), what selecting an item does, or how items are grouped into a list. Confirm the intended context and selection behavior.
2. **Missing states.** There are no hover, selected, focused, or disabled states, although the items appear to be selectable. Confirm whether states are needed.
3. **Context tag text is not editable.** The `Simple` context tag ("Vistas: Ventas") cannot be changed or hidden through properties. Confirm whether a property should be added.
4. **Inconsistent and unbound styling between types.** `Simple` uses an 8 px tokenized radius, while `Complete` uses unbound values (10 px radius, 12 px padding and gap, 8 px icon container radius). The two types also have different fixed widths (320 px and 268 px). Confirm the intended tokens and width behavior.
5. **Mixed languages.** `Simple` sample content is in Spanish and `Complete` content is in English. Confirm the intended language.

## Notes / Changelog

Generated from Figma evidence (node `3859:6817`) on 2026-10-23. The nested `Tag` instance was identified as a child component; its own Figma description was not used as evidence for this component.
