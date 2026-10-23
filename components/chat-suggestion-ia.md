---
component: "Chat-suggestion-ia"
system: "Genome Evolution Design System"
type: "AI suggestion chips (composite)"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3855-6697"
last_updated: "2026-10-23"
tags:
  - "chat"
  - "ai"
  - "suggestions"
---

# Chat-suggestion-ia

System: Genome Evolution Design System

## Component Summary

A horizontal row of three AI suggestion chips, with optional back and next arrows, available in an `Indigo` and a `Default` color treatment.

## Quick Reference

### What It Is

Evidence-based interpretation: Chat-suggestion-ia shows quick suggestions that users can pick in an AI conversation. The evidence:

- The component name ("chat", "suggestion", "ia").
- Each chip uses an `ai-assistant` (sparkle) icon.
- The sample labels are short follow-up instructions, such as "Como gráfica" ("As a chart") and "Agrega un título" ("Add a title").
- The back and forward arrows suggest more suggestions can be browsed.

No written component description was found in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Indigo, Default | Indigo (as reported by Figma MCP) |
| Show back (boolean) | true, false | true (as reported by Figma MCP) |
| Show next (boolean) | true, false | true (as reported by Figma MCP) |

The boolean property names are listed as exposed through Figma MCP (`showBack`, `showNext`); their exact display names in the Figma properties panel were not verified. Chip labels are not exposed as properties; they are changed through overrides on the nested `Tag` instances.

### Default Configuration

Figma MCP reports `Type=Indigo` with both arrows visible. This matches the first variant in the component set (`Type=Indigo`, node `3855:6696`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- Each variant shows exactly three suggestion chips between a back arrow and a next arrow.
- `Indigo` sample labels describe output formats: "Como gráfica", "Como tabla con filtros", "En tarjeta con botones".
- `Default` sample labels describe refinements: "Añade botones", "Agrega un título", "Agrega un botón de acciones".

Evidence-based interpretation:

- Place the component near the conversation or prompt input to offer next steps after an AI response.
- Use `Indigo` for highlighted suggestions and `Default` for neutral ones. Based on the sample labels, `Indigo` may be intended for presentation formats and `Default` for refinements, but Figma does not document this distinction.
- Hide the arrows when all suggestions fit or no more are available.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: The component helps users continue a conversation quickly by offering ready-made instructions instead of typing them.

### Expected Outcome

Evidence-based interpretation: Users can select a suggestion to send or apply it, and browse more suggestions with the arrows.

### Typical Context

Evidence-based interpretation: AI chat experiences, together with `Chat-ia` messages and the `Input-ia` composer. This relationship is not defined in Figma.

## When to Use

Evidence-based interpretation (not documented as official guidance in Figma):

- To offer short follow-up instructions after an AI response.
- To suggest alternative output formats or refinements for a generated result.
- When there are more suggestions than fit in one row (with arrows).

## When NOT to Use

[No documented restrictions found]

Recommendation (not an established design-system rule): Avoid long suggestions. Chips are single-line, 10 px text.

## Structure (Anatomy)

### Composition

```
Chat-suggestion-ia (horizontal row, 4 px gap)
├── arrow-backward (Show back)
├── Tag ×3 (suggestion chips: ai-assistant icon + label)
└── arrow-fordward (Show next)
```

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Back arrow | Optional | 12 px `arrow-backward` icon. Controlled by Show back. |
| Suggestion chip | Required (×3) | Nested `Tag` instance: pill-shaped, 20 px high, 8 px horizontal and 4 px vertical padding, 12 px `ai-assistant` icon and a 10 px label (`Text/Body/XXS Strong`). |
| Next arrow | Optional | 12 px `arrow-fordward` icon. Controlled by Show next. |

### Child-component relationships

- `Tag` provides each suggestion chip. The chips use the pill shape (`semantic/full`) and the `Indigo` or neutral outline color treatment.

### Ordering logic

Back arrow, then chips 1–3 from left to right, then next arrow.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Horizontal, vertically centered | Auto layout |
| Gap | 4 px (`gap/xxs`), between all items | Variable binding |
| Height | 20 px | Variant dimensions |
| Width | Hugs content: 416 px (`Indigo`), 427 px (`Default`) with the sample labels | Variant dimensions |
| Chip padding | 8 px horizontal (`space/8`), 4 px vertical (`space/4`) | Variable bindings |
| Chip radius | Fully rounded (`semantic/full`) | Variable binding |
| Icon size | 12 px (arrows and chip icons) | Layer dimensions |
| Overflow | `Default` clips content; `Indigo` does not | Layer styling |

## Semantics

Evidence-based interpretation: Each chip is a suggested instruction for the AI. The arrows indicate that the visible set is part of a longer list. `Type` changes only the visual emphasis of the chips.

HTML elements, ARIA roles, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Back | `arrow-backward`, 12 px | Layer name |
| Chip icon | `ai-assistant` (sparkle), 12 px, `icon/indigo` in both types | Layer, variable binding |
| Next | `arrow-fordward`, 12 px (spelled exactly as in Figma) | Layer name |

## Variants (Properties)

The variant inventory below is complete: 2 variants were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Indigo | Chips with `surface/indigo/subtle` fill, `border/indigo` border, `text/indigo` label, `icon/indigo` icon. | Variable bindings |
| Default | Chips with no fill, `border/default` border, `text/primary` label, `icon/indigo` icon. | Variable bindings |

### Show back, Show next

Booleans that show or hide the arrows. Reported defaults: `true`.

## States

[No documented states found]. The component set has no hover, pressed, selected, or disabled variants for the chips or arrows.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/indigo/subtle` | Chip fill, `Indigo` | Variable binding |
| Border | `border/indigo`, `border/default` | Chip border, `Indigo` / `Default` | Variable bindings |
| Text | `text/indigo`, `text/primary` | Chip label, `Indigo` / `Default` | Variable bindings |
| Icon | `icon/indigo` | Chip icon, both types | Variable binding |
| Icon | `icon/primary` | Arrows | Variable binding |
| Typography | `Text/Body/XXS Strong` | Chip label (10/14) | Text style |
| Spacing | `gap/xxs`, `space/8`, `space/4` | Gaps and chip padding | Variable bindings |
| Radius | `semantic/full` | Chip shape | Variable binding |

## Interaction

Not verified in Figma: what selecting a chip does (send, insert into the input, or apply), how the arrows page through suggestions, how many suggestions exist in total, arrow behavior at the start or end of the list, and chip hover or pressed feedback.

## Accessibility

Accessibility-related observations:

- Chip labels are visible text, and the icon is decorative support.
- The arrows are 12 px icons without a button container, which suggests a small interaction target.
- Labels use 10 px text.

Missing accessibility information (not verified in Figma): button semantics for chips and arrows, accessible names for the arrows, keyboard navigation, focus states, and contrast compliance.

## Content Guidelines

Verified observations:

- All sample labels are in Spanish and use imperative or descriptive short phrases.
- The `Default` samples use two verbs for the same action ("Añade" and "Agrega").

Recommendations:

- Keep suggestions short (two to five words) and action-oriented.
- Use one verb consistently for similar actions.

## Examples

### Format suggestions

Configuration: `Type=Indigo`, Show back `true`, Show next `true`

Description: Three indigo chips ("Como gráfica", "Como tabla con filtros", "En tarjeta con botones") between back and next arrows.

Evidence / Classification: Existing Figma variant (`3855:6696`).

### Refinement suggestions

Configuration: `Type=Default`, Show back `true`, Show next `true`

Description: Three neutral chips ("Añade botones", "Agrega un título", "Agrega un botón de acciones") between arrows.

Evidence / Classification: Existing Figma variant (`3855:6695`).

## Invalid Combinations

[No documented invalid combinations found]

## Pending Clarification

1. **Number of suggestions and paging.** The component always shows three chips, with no property to change the count, and the arrows have no behavior or disabled state defined. Confirm how many suggestions can appear, how the arrows page through them, and how the arrows look at the start and end of the list.
2. **Meaning of Indigo vs. Default.** The sample labels suggest `Indigo` for output formats and `Default` for refinements, but this is not documented. Confirm when each type should be used.
3. **Interaction targets and states.** The arrows are bare 12 px icons, and the chips have no hover, pressed, or focus states. Confirm which elements are interactive and whether states are needed.
4. **Width and overflow.** The row hugs its content, and only `Default` clips overflow. Confirm whether the row should have a fixed or maximum width and how longer labels are handled.

## Notes / Changelog

Generated from Figma evidence (node `3855:6697`) on 2026-10-23. The nested `Tag` instances were identified as child components; their own Figma description was not used as evidence for this component.

[No verified historical changes available]
