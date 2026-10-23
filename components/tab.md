---
component: "Tab"
system: "Genome Evolution Design System"
type: "Navigation item"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2189-5340"
last_updated: "2026-10-23"
tags:
  - "tab"
  - "navigation"
  - "selection"
---

# Tab

System: Genome Evolution Design System

## Component Summary

A single tab item with a text label and optional leading and trailing icons, available in two sizes, with interaction states and a selected state indicated by a bottom border.

## Quick Reference

### What It Is

The Tab is a navigation component that allows users to organise and switch between related sections of content within the same view. Each tab represents a category, page, or context and displays its associated content when selected.

Its purpose is to help users navigate between related groups of information without leaving the current page, reducing visual complexity and improving content organisation. A tab can include text, icons, or both, and uses visual indicators to communicate states such as selection, focus, and interaction.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Indigo, Evergreen | Default (as reported by Figma MCP) |
| State | Default, Hovered, Pressed, Selected, Focused, Selected Focused, Focused Selected | Default (as reported by Figma MCP) |
| Size | MD, SM | MD (as reported by Figma MCP) |
| Show left icon (boolean) | true, false | true (as reported by Figma MCP) |
| Left icon (instance swap) | Any icon instance | `arrow-left` |
| Show text (boolean) | true, false | true (as reported by Figma MCP) |
| Text (text) | Free text | "Tab name" (as reported by Figma MCP) |
| Show right icon (boolean) | true, false | true (as reported by Figma MCP) |
| Right icon (instance swap) | Any icon instance | `arrow-right` |

The names of the boolean, text, and instance-swap properties are listed as exposed through Figma MCP; their exact display names in the Figma properties panel were not verified.

### Default Configuration

Figma MCP reports `Color=Default`, `State=Default`, `Size=MD`, with both icons and the text visible and the text set to "Tab name". This matches the first variant in the component set (`Color=Default, State=Default, Size=MD`, node `2189:5381`). No separate written default is documented in Figma.

### Typical Usage

Verified observations:

- The tab is available in `MD` (40 px high) and `SM` (24 px high).
- `Indigo` and `Evergreen` exist only with `State=Selected`.
- Leading and trailing icons can be hidden independently, and the label can also be hidden.
- Tab width follows the content (16 px side padding, 8 px gaps).

Evidence-based interpretation: Place several Tab instances side by side. One tab uses `State=Selected` to mark the active view, and the others use `State=Default`. Use the `Selected` color (`Default`, `Indigo`, or `Evergreen`) that matches the surrounding product theme.

Recommendation: Use the same `Size` and the same selected `Color` for all tabs in one group.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Tab lets users switch between related views or sections at the same level, while showing which one is currently active.

### Expected Outcome

Evidence-based interpretation: Users can identify the active tab through the bottom border and stronger label color, and move to another tab by selecting it.

### Typical Context

Evidence-based interpretation: Application screens that group content into sections. The Figma description ("The New type is used for apps") indicates this version of Tab is intended for apps, but does not define further context.

## When to Use

- To organice related content into sections within a single screen.
- When users need to quickly switch between different views or categories.
- In pages containing multiple content groups that share the same context.
- To reduce excessive vertical scrolling.
- In dashboards, complex forms, or settings areas organiced into sections.
- When content should only be displayed after selecting a specific tab.

## When NOT to Use

- For primary navigation between product modules or independent areas.
- When there are too many tabs, making scanning and selection difficult.
- When users need to view all content sections simultaneously.
- To trigger actions or commands.
- When options do not represent related content.
- When the information architecture requires deep hierarchies or multiple navigation levels.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Horizontal auto-layout frame. It shows the state background, the selected bottom border, and the focus border. |
| Left icon | Optional | Instance named `arrow-left` (12 px). Controlled by the show-left-icon boolean and replaceable through instance swap. |
| Label | Optional | Text layer named `Tab name`. Controlled by the show-text boolean and the text property. |
| Right icon | Optional | Instance named `arrow-right` (12 px). Controlled by the show-right-icon boolean and replaceable through instance swap. |
| Selected indicator | Conditional | 2 px bottom border, only on `State=Selected`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Layout direction | Horizontal, centered | Figma auto layout |
| Horizontal padding | 16 px (`space/16`) | Variable binding |
| Vertical padding, MD | 12 px (`space/12`) | Variable binding |
| Vertical padding, SM | 4 px (`space/4`) | Variable binding |
| Gap | 8 px (`gap/sm`) | Variable binding |
| Height, MD | 40 px | Variant dimensions |
| Height, SM | 24 px | Variant dimensions |
| Width with both icons and "Tab name" | 130 px (hugs content) | Variant dimensions and child layout |
| Icon size | 12 × 12 px | Layer dimensions |
| Selected bottom border | 2 px | Variant styling |
| Focus border | 2 px on all sides | Variant styling (`focus/width` on `Focused`) |

## Semantics

Evidence-based interpretation: `Selected` represents the currently active tab within its group; `Default` represents an available but inactive tab. `Color` changes only the visual treatment of the selected tab (bottom border, text, and icon color). Figma does not document a semantic difference between `Default`, `Indigo`, and `Evergreen`.

The default `arrow-left` and `arrow-right` icons are placeholder instances that can be swapped. No meaning is documented for them.

HTML element, ARIA roles (for example tab or tablist), and screen-reader announcements: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Left icon | `arrow-left` instance, 12 px; color follows state (see Token Mapping) | Layer and variable bindings |
| Right icon | `arrow-right` instance, 12 px; color follows state | Layer and variable bindings |

Both slots can be hidden independently and support instance swap. Approved replacement icons: Not verified in Figma.

## Variants (Properties)

The variant inventory below is complete: 16 variants were inspected.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Neutral treatment. Available with every state. Selected uses `border/selected`, `text/secondary`, and `icon/primary`. | Variant names, variable bindings |
| Indigo | Selected treatment with `border/indigo`, `text/indigo`, and `icon/indigo`. Only with `State=Selected`. | Variant names, variable bindings |
| Evergreen | Selected treatment with `border/evergreen`, `text/evergreen`, and `icon/evergreen`. Only with `State=Selected`. | Variant names, variable bindings |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Inactive tab; no background or border. | Variable bindings |
| Hovered | `background/interactive/hovered` fill. | Variable bindings |
| Pressed | `background/interactive/pressed` fill. | Variable bindings |
| Selected | 2 px bottom border in the selected color; stronger text and icon color. | Variable bindings |
| Focused | 2 px `border/focus` border on all sides (`focus/width`). | Variable bindings |
| Selected Focused | Exists only for `Size=MD`. 2 px `border/focus` border with selected text and icon colors; no bottom indicator. | Variant names, variable bindings |
| Focused Selected | Exists only for `Size=SM`. Same appearance as `Selected Focused`. | Variant names, variable bindings |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 40 px high, 12 px vertical padding. | Variant dimensions, variable bindings |
| SM | 24 px high, 4 px vertical padding. | Variant dimensions, variable bindings |

Label typography is `Text/Button/SM` in both sizes.

### Show left icon / Show right icon

Booleans that show or hide the left and right icon slots. Reported default: `true`.

### Left icon / Right icon

Instance-swap properties for the icon slots. Default instances: `arrow-left` and `arrow-right`.

### Show text

Boolean that shows or hides the label. Reported default: `true`.

### Text

Text property for the label content. Reported default: "Tab name".

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Inactive | `text/tertiary` label, `icon/secondary` icons, no fill | Variable bindings |
| Hovered | Hovered inactive tab | Adds `background/interactive/hovered` fill | Variable bindings |
| Pressed | Pressed inactive tab | Adds `background/interactive/pressed` fill | Code generation from Figma |
| Selected | Active tab | 2 px bottom border; text and icon colors change by `Color` | Variable bindings |
| Focused | Focused inactive tab (interpretation: keyboard focus) | 2 px `border/focus` border around the tab | Variable bindings |
| Selected Focused / Focused Selected | Focused active tab, `Color=Default` only | 2 px `border/focus` border; `text/secondary` and `icon/primary`; bottom indicator not shown | Variable bindings, screenshot |

Hovered, Pressed, and Focused variants of selected Indigo or Evergreen tabs do not exist in the component set.

## Token Mapping

All tokens below were verified through Figma variable bindings on the inspected variants, except where noted.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Background | `background/interactive/hovered` | Hovered fill | Hovered variant |
| Background | `background/interactive/pressed` | Pressed fill | Code generation from Figma (Pressed variant) |
| Border | `border/selected` | Selected bottom border, `Color=Default` | Selected Default variant |
| Border | `border/indigo` | Selected bottom border, `Color=Indigo` | Indigo variant |
| Border | `border/evergreen` | Selected bottom border, `Color=Evergreen` | Evergreen variant |
| Border | `border/focus` | Focus border (Focused and Selected Focused) | Focused variants |
| Border width | `focus/width` (2) | Focus border width on `Focused` | Focused variant; not bound on `Selected Focused` / `Focused Selected` |
| Text | `text/tertiary` | Label in Default, Hovered, Pressed, Focused | Variable bindings |
| Text | `text/secondary` | Label in Selected and Selected Focused, `Color=Default` | Variable bindings |
| Text | `text/indigo` | Label, Selected Indigo | Variable bindings |
| Text | `text/evergreen` | Label, Selected Evergreen | Variable bindings |
| Icon | `icon/secondary` | Icons in Default, Hovered, Pressed, Focused | Variable bindings |
| Icon | `icon/primary` | Icons in Selected and Selected Focused, `Color=Default` | Variable bindings |
| Icon | `icon/indigo` | Icons, Selected Indigo | Variable bindings |
| Icon | `icon/evergreen` | Icons, Selected Evergreen | Variable bindings |
| Typography | `Text/Button/SM` | Label (`family/body`, `weight/semibold`, `size/12`, `line-height/16`) | Text style |
| Spacing | `space/16` | Horizontal padding | Variable binding |
| Spacing | `space/12` / `space/4` | Vertical padding MD / SM | Variable binding |
| Spacing | `gap/sm` (8) | Gap between icons and label | Variable binding |

## Interaction

Observed states: `Default`, `Hovered`, `Pressed`, `Focused`, `Selected`, and the combined focused and selected state are available as visual variants for `Color=Default`.

Evidence-based interpretation: Selecting an inactive tab makes it the `Selected` tab and returns the previous one to `Default`.

Not verified in Figma: prototype interactions, transitions, keyboard navigation between tabs, activation on focus vs. on confirm, and a disabled state (none exists in the component set).

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, indicators, and backgrounds across all states (Default, Hovered, Pressed, Focused, Selected, and Disabled where applicable).
- All tabs must be keyboard accessible.
- Visible focus indicators must be clearly distinguishable from the selected state.
- The active tab must be properly communicated to assistive technologies.
Recommendations
- Use descriptive labels that can be understood without relying on icons.
- Do not rely solely on colour to communicate selection.
- Maintain a logical keyboard navigation order.

## Content Guidelines

Verified observation: The label is a single line with no wrapping, using `Text/Button/SM` and the placeholder "Tab name".

Recommendation: Use short labels that name the destination view or section.

## Examples

### Active tab, standard size

Configuration: `Color=Default`, `State=Selected`, `Size=MD`

Description: 40 px tab with a `border/selected` bottom border, `text/secondary` label, and both icons visible.

Evidence / Classification: Existing Figma variant (`2189:5413`).

### Active Indigo tab, compact size

Configuration: `Color=Indigo`, `State=Selected`, `Size=SM`

Description: 24 px tab with an Indigo bottom border, label, and icons.

Evidence / Classification: Existing Figma variant (`2256:605`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The component set contains no variants for these combinations, so they cannot be selected in Figma:

- `Color=Indigo` or `Color=Evergreen` with any state other than `Selected`.
- `State=Selected Focused` with `Size=SM`, and `State=Focused Selected` with `Size=MD`.

## Pending Clarification

1. **Inconsistent State value names.** The focused and selected state is named `Selected Focused` in `MD` and `Focused Selected` in `SM`. Switching `Size` on a focused, selected instance cannot keep the state, and code mappings need two names for one state. Confirm the intended single name.
2. **Meaning of the component description.** Every variant says "The New type is used for apps". Confirm what "New type" refers to (for example, whether an older Tab type exists) and whether it limits where this component should be used.
3. **Interaction coverage for Indigo and Evergreen.** These colors exist only as `Selected`, with no hover, pressed, or focused variants. In the focused and selected state, the bottom indicator is also not shown. Confirm whether this is intended or whether variants are missing.
4. **Label font weight.** `Text/Button/SM` declares weight 600, but `weight/semibold` resolves to "Medium". Confirm which weight should be implemented.
5. **Focus border token.** `Focused` binds `focus/width`, but `Selected Focused` / `Focused Selected` use an unbound 2 px border. Confirm that both should use `focus/width`.

## Notes / Changelog

Generated from Figma evidence (node `2189:5340`) on 2026-10-23.

