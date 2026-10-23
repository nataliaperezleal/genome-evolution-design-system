---
component: "Tag"
system: "Genome Evolution Design System"
type: "Label / status indicator"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-1314"
last_updated: "2026-10-23"
tags:
  - "tag"
  - "status"
  - "label"
---

# Tag

System: Genome Evolution Design System

## Component Summary

A compact, 20 px high label with optional leading and trailing icons. It comes in filled and outline styles, square and rounded corners, eight color types, two sizes, and a set of interaction states for the outline default tag.

## Quick Reference

### What It Is

The Tag is a compact labelling and status component used to categorise, classify, or communicate contextual information in a quick and visible way. It represents attributes, statuses, content types, or groupings through a combination of text, colour, and optional iconography.

The component supports different visual styles (Filled and Outline), semantic colour variants, and optional icons on either side of the label. Its design prioritises fast scanning within tables, lists, cards, forms, and detail views.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Style | Filled, Outline | Not verified in Figma |
| Corners | Square, Rounded | Not verified in Figma |
| Type | Default, Inverse, Information, Warning, Error, Sucess, Evergreen, Indigo | Not verified in Figma |
| Size | MD, SM | Not verified in Figma |
| State | Default, Hover, Focused, Selected, Unselected, Disable | Not verified in Figma |
| Show left icon (boolean) | true, false | true (as reported by Figma MCP) |
| Left icon (instance swap) | Any icon instance | `bizagi-lines` |
| Text (text) | Free text | "Label" (as reported by Figma MCP) |
| Show right icon (boolean) | true, false | true (as reported by Figma MCP) |
| Right icon (instance swap) | Any icon instance | `bizagi-lines` |

`Sucess` and `Disable` are spelled exactly as in Figma. The names of the boolean, text, and instance-swap properties are listed as exposed through Figma MCP (the left-icon boolean is exposed as `showLeftIcons`); their exact display names in the Figma properties panel were not verified.

### Default Configuration

No verified default variant was found. The component set contains 72 variants. Figma MCP code generation reports `Style=Outline`, `Corners=Square`, `Type=Default`, `Size=MD`, `State=Default`, but the first variant listed in the component set is `Style=Filled, Corners=Square, Type=Sucess, Size=MD, State=Default`. Neither is treated as the documented default.

Verified observation: All inspected variants show both icons and the text "Label".

### Typical Usage

Verified observations:

- All `Type` values exist in both `Filled` and `Outline`, except `Evergreen` and `Indigo`, which exist only in `Outline`.
- States other than `Default` exist only for `Style=Outline` with `Type=Default`.
- Both sizes are 20 px high. `SM` uses smaller text (10 px vs. 12 px).
- `Rounded` uses fully rounded corners and wider horizontal padding than `Square`.

Evidence-based interpretation:

- Use `Information`, `Warning`, `Error`, and `Sucess` to label items with a status.
- Use `Default`, `Evergreen`, and `Indigo` for neutral or brand-colored categorization.
- Use `Inverse` on dark backgrounds. Outline `Inverse` uses light border and text tokens (`border/inverse`, `text/inverse`).
- Use the outline `Default` tag with its states when users can select or deselect tags.

Recommendation: Use one `Style`, `Corners`, and `Size` combination consistently within the same list or group.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Tag lets users quickly identify the category or status of an item through a short label and a consistent color treatment.

### Expected Outcome

Evidence-based interpretation: Users can scan and distinguish items by their tags. For the outline default tag, users can also see which tags are selected.

### Typical Context

Evidence-based interpretation: Lists, tables, cards, and filters where items need a short category or status label.

## When to Use

- To categorice items within lists or tables.
- To display the status of a process, record, or entity.
- To identify content types, priorities, or attributes.
- To highlight contextual information within an interface.
- As a visual indicator inside tables, cards, or dashboards.
- To communicate semantic states such as success, error, warning, or information.

## When NOT to Use

- For primary user actions.
- As a replacement for buttons when complex interactions are required.
- To display long text or descriptive content.
- When information requires detailed explanations.
- As the sole mechanism for communicating critical information.
- When too many categories exist and colour loses meaning.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | 20 px high frame with fill and/or border depending on `Style`, `Type`, and `State`. |
| Left icon | Optional | 12 px icon instance, `bizagi-lines` by default. Controlled by the show-left-icon boolean and replaceable through instance swap. |
| Label | Required | Text layer with the tag text. |
| Right icon | Optional | 12 px icon instance, `bizagi-lines` by default. Controlled by the show-right-icon boolean and replaceable through instance swap. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Height | 20 px (both sizes) | Layer dimensions |
| Padding, Square | 4 px on all sides (`space/4`) | Variable binding |
| Padding, Rounded | 8 px horizontal (`space/8`), 4 px vertical (`space/4`) | Variable binding |
| Corner radius, Square | 4 px (`radius/4`) | Variable binding |
| Corner radius, Rounded | Fully rounded (`semantic/full`) | Variable binding |
| Gap | 4 px (`gap/xxs`) | Variable binding |
| Icon size | 12 × 12 px | Layer dimensions |
| Border | 1 px; 2 px in `Focused` (`focus/width`) | Variant styling |
| Width with both icons and "Label" | MD: 72 px (Square), 80 px (Rounded); SM: 67 px (Square), 75 px (Rounded) | Variant dimensions; hugs content |

## Semantics

Evidence-based interpretation:

- `Information`, `Warning`, `Error`, and `Sucess` communicate informational, warning, error, and success status, based on the info, warning, danger, and success tokens they use.
- `Default`, `Evergreen`, and `Indigo` are neutral or brand color treatments with no documented status meaning.
- `Inverse` is intended for dark surfaces.
- `Selected` and `Unselected` indicate whether a selectable tag is chosen.

The default `bizagi-lines` icons are swappable placeholders; no meaning is documented for them.

HTML element, ARIA role, and screen-reader behavior: Not verified in Figma.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Left icon | `bizagi-lines` instance, 12 px; color follows `Type` and `State` | Layer and variable bindings |
| Right icon | `bizagi-lines` instance, 12 px; color follows `Type` and `State` | Layer and variable bindings |

Both slots can be hidden independently and support instance swap. Approved replacement icons: Not verified in Figma.

## Variants (Properties)

The variant inventory below is complete: 72 variants were inspected.

### Style

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Filled | Solid background (bold surface tokens), inverse text and icon, except `Inverse`, which uses a white background with primary text. | Variable bindings |
| Outline | 1 px colored border with a subtle or no background and colored text and icon. | Variable bindings |

### Corners

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Square | 4 px radius, 4 px padding. | Variable bindings |
| Rounded | Fully rounded, 8 px horizontal padding. | Variable bindings |

### Type

| Value | Filled | Outline | Evidence |
|-------|--------|---------|----------|
| Default | `surface/raised` background, `text/inverse`, `icon/inverse` | `border/default` border, no fill, `text/primary`, `icon/primary` | Variable bindings |
| Inverse | `background/canvas` background, `text/primary`, `icon/primary` | `border/inverse` border, no fill, `text/inverse`, `icon/inverse` | Variable bindings |
| Information | `surface/info/bold`, inverse text and icon | `border/info`, `surface/info/subtle`, `text/info`, `icon/info` | Variable bindings |
| Warning | `surface/warning/bold`, inverse text and icon | `border/warning`, `surface/warning/subtle`, `text/warning`, `icon/warning` | Variable bindings |
| Error | `surface/danger/bold` with `border/danger`, inverse text and icon | `border/danger`, `surface/danger/subtle`, `text/danger`, `icon/danger` | Variable bindings |
| Sucess | `surface/success/bold`, inverse text and icon | `border/success`, `surface/success/subtle`, `text/success`, `icon/success` | Variable bindings |
| Evergreen | Not available | `border/evergreen`, `surface/evergreen/subtle`, `text/evergreen`, `icon/evergreen` | Variable bindings |
| Indigo | Not available | `border/indigo`, `surface/indigo/subtle`, `text/indigo`, `icon/indigo` | Variable bindings |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 20 px high; label `Text/Button/SM` (12/16). | Layer dimensions, text style |
| SM | 20 px high; label `Text/Body/XXS Strong` (10/14). | Layer dimensions, text style |

### State

Available only for `Style=Outline`, `Type=Default`, in both corners and sizes.

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | `border/default` border, no fill. | Variable bindings |
| Hover | `background/interactive/hovered` fill, `border/interactive/hovered` border, `icon/interactive/hovered` icons. | Variable bindings |
| Focused | `background/interactive/hovered` fill, 2 px `border/focus` border (`focus/width`). | Variable bindings |
| Selected | `background/selected` fill, `border/selected` border. | Variable bindings |
| Unselected | No border or fill; `text/secondary` text and `icon/secondary` icons. | Variable bindings, screenshot |
| Disable | `background/disabled` fill, `border/disabled` border, `text/disabled`, `icon/disabled`. | Variable bindings |

### Show left icon / Show right icon

Booleans that show or hide the icon slots. Reported default: `true`.

### Left icon / Right icon

Instance-swap properties for the icon slots. Default instance: `bizagi-lines`.

### Text

Text property for the label. Reported default: "Label".

## States

These are visual state variants. They do not prove that transitions are implemented.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | Neutral border, no fill | Variable bindings |
| Hover | Pointer over tag | Light gray fill, darker border and icons | Variable bindings |
| Focused | Focus (interpretation: keyboard focus) | Light gray fill, 2 px green focus border | Variable bindings |
| Selected | Chosen | Light green fill, green border | Variable bindings |
| Unselected | Not chosen | No border or fill, secondary text and icons | Variable bindings |
| Disable | Unavailable | Disabled fill, border, text, and icons | Variable bindings |

## Token Mapping

All tokens below were verified through Figma variable bindings. See Variants (Properties) > Type for the full color mapping per type.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/raised` | Filled Default background | Variable bindings |
| Surface | `surface/{info, warning, danger, success}/bold` | Filled status backgrounds | Variable bindings |
| Surface | `surface/{info, warning, danger, success, evergreen, indigo}/subtle` | Outline backgrounds | Variable bindings |
| Background | `background/canvas` | Filled Inverse background | Variable bindings |
| Background | `background/interactive/hovered` | Hover and Focused fill | Variable bindings |
| Background | `background/selected` | Selected fill | Variable bindings |
| Background | `background/disabled` | Disable fill | Variable bindings |
| Border | `border/default`, `border/inverse` | Outline Default and Inverse borders | Variable bindings |
| Border | `border/{info, warning, danger, success, evergreen, indigo}` | Outline type borders | Variable bindings |
| Border | `border/interactive/hovered`, `border/focus`, `border/selected`, `border/disabled` | State borders | Variable bindings |
| Border width | `focus/width` (2) | Focused border | Variable bindings |
| Text | `text/primary`, `text/inverse`, `text/secondary`, `text/disabled` | Neutral, inverse, Unselected, and Disable text | Variable bindings |
| Text | `text/{info, warning, danger, success, evergreen, indigo}` | Outline type text | Variable bindings |
| Icon | `icon/primary`, `icon/inverse`, `icon/secondary`, `icon/disabled`, `icon/interactive/hovered` | Neutral and state icons | Variable bindings |
| Icon | `icon/{info, warning, danger, success, evergreen, indigo}` | Outline type icons | Variable bindings |
| Typography | `Text/Button/SM`, `Text/Body/XXS Strong` | Label, MD / SM | Text styles |
| Spacing | `space/4`, `space/8`, `gap/xxs` | Padding and gap | Variable bindings |
| Radius | `radius/4`, `semantic/full` | Square / Rounded corners | Variable bindings |

## Interaction

Observed states: `Default`, `Hover`, `Focused`, `Selected`, `Unselected`, and `Disable`, available only for the outline `Default` tag.

Evidence-based interpretation: The outline `Default` tag can be hovered, focused, and toggled between `Selected` and `Unselected`. Other combinations appear to be non-interactive display tags.

Not verified in Figma: what selecting a tag does, whether tags can be removed (for example via the right icon), prototype interactions, and keyboard behavior.

## Accessibility

Mandatory requirements
- Ensure sufficient contrast between text, icons, borders, and backgrounds across all visual variants.
- If interactive, the component must be fully keyboard accessible.
- Focus indicators must be clearly visible and distinguishable from Hover, Selected, and Disabled states.
Recommendations
- Do not rely solely on colour to communicate meaning.
- Reinforce important states with descriptive text and iconography.
- Use labels that remain understandable out of context.

## Content Guidelines

Verified observation: The label is a single line with no wrapping, using the placeholder "Label".

Recommendation: Keep tag labels to one or two words.

## Examples

### Status tag

Configuration: `Style=Filled`, `Corners=Rounded`, `Type=Error`, `Size=MD`, `State=Default`

Description: Dark red pill with light text and icons.

Evidence / Classification: Existing Figma variant (`2192:1335`).

### Selectable tag, selected

Configuration: `Style=Outline`, `Corners=Square`, `Type=Default`, `Size=MD`, `State=Selected`

Description: Square tag with a light green fill and green border.

Evidence / Classification: Existing Figma variant (`3667:571`).

## Invalid Combinations

[No documented invalid combinations found]

Verified observation: The component set contains no variants for these combinations, so they cannot be selected in Figma:

- `Style=Filled` with `Type=Evergreen` or `Type=Indigo`.
- Any `State` other than `Default` with `Style=Filled`, or with a `Type` other than `Default`.

## Pending Clarification

1. **Property naming.** `Type=Sucess` is misspelled, `State=Disable` differs from the `Disabled` naming used in other components, and the left-icon boolean is exposed as `showLeftIcons` while the right one is `showRightIcon`. These names carry into code mappings. Confirm whether they should be corrected before implementation.
2. **Purpose of interaction states.** `Hover`, `Focused`, `Selected`, `Unselected`, and `Disable` exist only for the outline `Default` tag. Confirm what a selectable tag is used for (for example, filtering) and whether states are needed for other types or the filled style.
3. **SM vs. MD.** Both sizes are 20 px high and differ only in label size (10 px vs. 12 px). Confirm that this is the intended size difference.
4. **Default variant.** No default is documented. The defaults reported by Figma MCP (Outline, Square, Default, MD, Default) do not match the first variant in the component set (Filled, Square, Sucess, MD, Default). Confirm the intended default.
5. **Label font weight.** `Text/Button/SM` and `Text/Body/XXS Strong` declare weight 600, but `weight/semibold` resolves to "Medium". Confirm which weight should be implemented.

## Notes / Changelog

Generated from Figma evidence (node `2192:1314`) on 2026-10-23.
