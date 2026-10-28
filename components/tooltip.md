---
component: "Tooltip"
system: "Genome Evolution Design System"
type: "Overlay / supplementary information"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-478"
last_updated: "2026-10-23"
tags:
  - "tooltip"
  - "overlay"
  - "help-text"
---

# Tooltip

System: Genome Evolution Design System

## Component Summary

A small container with a title, an optional image, and a description, available in a light (`White`) and a dark (`Black`) color treatment.

## Quick Reference

### What It Is

The Tooltip is an overlay component used to provide contextual information, clarifications, or brief assistance related to an interface element. It appears temporarily when users interact with a component through hover, focus, or, in some cases, selection.

A tooltip can contain a title, a short description, and optionally a supporting image. Its purpose is to provide additional context without adding permanent visual clutter to the interface.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | White, Black | White (as reported by Figma MCP) |
| Show title (boolean) | true, false | true (as reported by Figma MCP) |
| Title (text) | Free text | "Tooltip text" (as reported by Figma MCP) |
| Show image (boolean) | true, false | false (as reported by Figma MCP) |
| Show description (boolean) | true, false | true (as reported by Figma MCP) |
| Description (text) | Free text | "Tooltip description" (as reported by Figma MCP) |

The names of the boolean and text properties are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified.

### Default Configuration

Figma MCP reports `Color=White` with the title and description visible and the image hidden. The title reads "Tooltip text" and the description "Tooltip description". This matches the first variant in the component set (`Color=White`, node `2192:479`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- Two color treatments: `White` (light surface, dark text) and `Black` (dark surface, light text).
- Title, image, and description can each be shown or hidden. The image is hidden by default.
- The content area is 88 px wide, and text wraps within it.

Evidence-based interpretation: Use Tooltip to show a short title and a brief explanation next to the element it describes. Turn on the image only when a small visual helps explain the content.

Recommendation: Use one color treatment consistently within the same product area. Figma does not document when to choose `White` or `Black` (see Pending Clarification).

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Tooltip provides short, supplementary information about an element without taking up permanent space in the layout.

### Expected Outcome

Evidence-based interpretation: Users get a brief explanation (title and description, optionally with an image) while keeping their place in the interface.

### Typical Context

Evidence-based interpretation: Near icons, controls, or data points that need a short explanation. Figma does not define trigger, placement, or timing (see Interaction).

## When to Use

- To explain the meaning of icons or less obvious actions.
- To provide additional information without consuming permanent interface space.
- To display short explanations about fields, indicators, or metrics.
- To offer contextual help during a task.
- To support complex controls or specialised concepts.
- When the additional information is optional and not required to complete a task.

## When NOT to Use

- For critical information required to complete a task.
- For lengthy content that requires detailed reading.
- As a replacement for labels, headings, or descriptions that should remain visible.
- To present multiple actions or complex interaction flows.
- When content must remain permanently visible.
- As the primary onboarding or training mechanism.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Rounded box with a 1 px border and a background that depends on `Color`. |
| Content frame | Required | Vertical stack, 88 px wide, holding the title, image, and description. |
| Title | Optional | Text layer `Tooltip text`, style `Text/Body/XS Strong`. Controlled by the show-title boolean. |
| Image | Optional | Layer named `image`, 46 px high with 4 px rounded corners. Hidden by default; controlled by the show-image boolean. |
| Description | Optional | Text layer `Tooltip description`, style `Text/Body/XXS`. Controlled by the show-description boolean. |

No pointer or arrow is part of the component.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Direction | Vertical, centered | Figma auto layout |
| Padding | 8 px (`space/8`) | Variable binding |
| Corner radius | 4 px (`semantic/sm`) | Variable binding |
| Border | 1 px, `border/default` | Variable binding |
| Content width | 88 px (fixed) | Layer dimensions and auto layout |
| Gap between title, image, and description | 4 px (not bound to a variable) | Auto layout |
| Container size with title and description | 104 × 50 px | Variant dimensions |
| Image height | 46 px | Layer dimensions |
| Image width | Not verified in Figma: auto layout sets it to fill the content width (88 px), but the hidden layer's stored width is 149 px | Conflicting layer data |

## Semantics

Evidence-based interpretation: Tooltip carries supplementary, non-interactive information. The title is the primary message and the description adds detail. `Color` changes only the visual treatment; Figma does not document a semantic difference between `White` and `Black`.

HTML element, ARIA role (for example tooltip), relationship to the trigger element, and screen-reader announcements: Not verified in Figma.

## Variants (Properties)

The variant inventory below is complete: 2 variants were inspected.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| White | `background/canvas` background, `text/primary` text, `border/default` border. | Variable bindings |
| Black | `surface/raised` background (#3b443d), `text/inverse` text, `border/default` border. | Variable bindings |

### Show title

Boolean that shows or hides the title. Reported default: `true`.

### Title

Text property for the title. Reported default: "Tooltip text".

### Show image

Boolean that shows or hides the image. Reported default: `false`.

### Show description

Boolean that shows or hides the description. Reported default: `true`.

### Description

Text property for the description. Reported default: "Tooltip description".

## States

- Hidden.
- Visible.

## Token Mapping

All tokens below were verified through Figma variable bindings.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/canvas` | Container background, `White` | `Color=White` |
| Surface | `surface/raised` | Container background, `Black` | `Color=Black` |
| Border | `border/default` | Container border, both colors | Both variants |
| Text | `text/primary` | Title and description, `White` | `Color=White` |
| Text | `text/inverse` | Title and description, `Black` | `Color=Black` |
| Typography | `Text/Body/XS Strong` | Title (`size/12`, `line-height/16`, `weight/semibold`) | Text style |
| Typography | `Text/Body/XXS` | Description (`size/10`, `line-height/14`, `weight/regular`) | Text style |
| Spacing | `space/8` | Container padding | Variable binding |
| Spacing | `gap/xxs` (4) | Container gap | Variable binding |
| Radius | `semantic/sm` (4) | Container corner radius | Variable binding |

The 4 px gap inside the content frame and the 4 px image corner radius are not bound to variables. No elevation or shadow token is applied.

## Interaction

No interactive states, prototype links, or interaction labels exist in the component set.

Evidence-based interpretation: The component represents the visible tooltip content only.

Not verified in Figma: trigger (hover, focus, or click), show and hide delays, placement relative to the trigger, pointer/arrow, collision behavior, and dismissal.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, background, and borders in both White and Black variants.
- Tooltips associated with interactive elements must be accessible through keyboard focus.
- The triggering element must maintain a clearly visible focus indicator.
Recommendations
- Ensure tooltip content can be interpreted by assistive technologies when appropriate.
- Keep text concise and easy to understand.
- Do not rely exclusively on hover interactions to expose important information.

## Content Guidelines

Verified observation: The title uses `Text/Body/XS Strong` and the description uses `Text/Body/XXS`. Both wrap within the 88 px content width.

Recommendation: Keep the title to a few words and the description to one or two short sentences.

## Examples

### Light tooltip

Configuration: `Color=White`, title and description shown, image hidden

Description: White tooltip with a dark title and description.

Evidence / Classification: Existing Figma variant (`2192:479`).

### Dark tooltip

Configuration: `Color=Black`, title and description shown, image hidden

Description: Dark tooltip with light text.

Evidence / Classification: Existing Figma variant (`2192:484`).

## Invalid Combinations

[No documented invalid combinations found]

## Implementation

### React API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `ReactNode` | `undefined` | Tooltip text/content. |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Placement. |
| `title` | `ReactNode` | `undefined` | Configures the `title` component property. |
| `description` | `ReactNode` | `undefined` | Configures the `description` component property. |
| `image` | `ReactNode` | `undefined` | Configures the `image` component property. |
| `color` | `"white" \| "black"` | `"white"` | Configures the `color` component property. |
| `showTitle` | `boolean` | `true` | Configures the `showTitle` component property. |
| `showDescription` | `boolean` | `true` | Configures the `showDescription` component property. |
| `showImage` | `boolean` | `false` | Configures the `showImage` component property. |
| `children` | `ReactNode` | `required` | Configures the `children` component property. |

It also accepts React's native attributes for the underlying HTML element (HTMLAttributes).
### Examples

#### Icon hint

```tsx
import { Tooltip, IconButton } from "@genome-evolution/react";

<Tooltip content="Search">
  <IconButton label="Search" icon={<SearchIcon />} />
</Tooltip>;
```

## Pending Clarification

1. **Image slot dimensions.** The hidden `image` layer stores a width of 149 px, but auto layout sets it to fill the 88 px content area. Confirm the intended image size and aspect ratio when `Show image` is on.
2. **Fixed content width.** The content area is a fixed 88 px. Confirm whether this is a fixed width or a maximum width, since it determines how longer text wraps and how the tooltip grows.
3. **Positioning and pointer.** The component has no arrow/pointer, placement variants, or shadow. Confirm whether these are handled outside this component or still need to be defined.
4. **White vs. Black.** Figma does not document when to use each color treatment. The `Black` variant also uses the light `border/default` border on a dark surface. Confirm whether that border is intentional.
5. **Title font weight.** `Text/Body/XS Strong` declares weight 600, but `weight/semibold` resolves to "Medium". Confirm which weight should be implemented.

## Notes / Changelog

Generated from Figma evidence (node `2192:478`) on 2026-10-23.
