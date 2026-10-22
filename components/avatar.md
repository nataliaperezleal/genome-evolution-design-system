---
component: "Avatar"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "Ux Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-22"
tags:
  - "avatar"
  - "identity"
  - "data-display"
---

# Avatar

System: Genome Evolution Design System

## Component Summary

Avatar is a circular visual representation of an entity, available as a generic icon, a photo (Person), or a text initial (Print), in five sizes from 16 to 48 px, with a focused state and an optional status indicator.

## Quick Reference

### What It Is

The Avatar is a visual component used to represent a person, user, or entity within the interface. It can be displayed as a generic icon or a profile image and helps identify participants, owners, assignees, or authors across different product experiences.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Icon, Person, Print | Icon (as reported by Figma MCP property definitions; see Pending Clarification) |
| Color | Default, Evergreen, Indigo | Default |
| Size | 16, 24, 32, 40, 48 | 16 |
| State | Default, Focused | Default |
| label (text) | Free text | B |
| showState (boolean) | true, false | false |

`Evergreen` and `Indigo` exist only for `Type=Print`. `Icon` and `Person` exist only with `Color=Default`.

### Default Configuration

The Figma MCP property definitions report the following defaults: `Type=Icon`, `Color=Default`, `Size=16`, `State=Default`, `label="B"`, `showState=false`. These values come from the component's property definitions rather than from a written specification, so the default for `Type` should be confirmed (see Pending Clarification).

### Typical Usage

Verified observation: The component set exposes 50 variants: 10 `Icon` (5 sizes × 2 states), 10 `Person` (5 sizes × 2 states) and 30 `Print` (3 colors × 5 sizes × 2 states).

Evidence-based interpretation:

- Use `Type=Person` when a photo of the person is available.
- Use `Type=Print` to show an initial when no photo is available; `Color` (`Default`, `Evergreen`, `Indigo`) provides visual variety for Print avatars.
- Use `Type=Icon` as a generic placeholder when neither a photo nor an initial is available.
- Choose `Size` according to the density of the surrounding layout; smaller sizes reduce the label typography (see Layout).

Recommendation: Use the same `Size` for avatars displayed together in a list or group so they align visually.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent, compact way to identify a person or entity visually, with fallbacks (initial or generic icon) for when a photo is unavailable.

### Expected Outcome

Evidence-based interpretation: Users can recognize who or what an item refers to at a glance, at a size appropriate to the layout.

### Typical Context

Specific product contexts are not documented in Figma. The 16–48 px size range indicates use inside other components and layouts (for example, lists, headers or tables) rather than as a standalone hero element; this is an evidence-based interpretation.

## When to Use

Evidence-based interpretations based on the available variants:

- To represent users in lists, tables, or directories.
- In comments, activity feeds, audit trails, or collaborative experiences.
- As a visual indicator of task owners, assignees, or responsible users.
- In profile headers or user profile pages.
- In user groups or process participant representations.
- When visual identification should complement a user's name or information.

## When NOT to Use

- To represent actions, features, or system categories. Use icons instead.
- When user identity does not add value to the context.
- As the only method for identifying a person when ambiguity may occur.
- To display statuses, metrics, or information unrelated to a person or entity.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Circular frame (`radius/24`) sized by `Size`. In `Print`, it carries the fill and border. |
| Label | Required in `Type=Print` | Text layer that displays the `label` property value ("B" in all variants). |
| Image | Required in `Type=Person` | Image layer named `unsplash:LWkFHEGpleE` (sample photo), cropped to a circle. |
| Icon vector | Required in `Type=Icon` | A single vector layer showing a generic person silhouette that fills the avatar. |
| Status indicator | Optional | Ellipse layer (`Ellipse 3`) at the bottom-right, hidden by default and controlled by `showState` in `Print` and `Person`. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width × height | 16, 24, 32, 40 or 48 px (square), matching `Size` | Variant dimensions |
| Corner radius | `radius/24` (24) — renders as a circle at every size | Variable binding |
| Label alignment | Centered horizontally and vertically (vertical auto layout) | Design context, `Print` variants |
| Label typography — Size 16 | `Text/Label/XS`: `family/body` (Open Sans), weight 600, `size/11`, `line-height/16`, `letter-spacing/wide` (1) | Variable bindings |
| Label typography — Size 24 | `Text/Body/XS Strong`: `size/12`, `line-height/16`, `letter-spacing/normal` (0) | Variable bindings |
| Label typography — Size 32 | `Text/Body/SM Strong`: `size/14`, `line-height/20`, letter-spacing 0 | Variable bindings |
| Label typography — Size 40 and 48 | `Text/Body/MD Strong`: `size/16`, `line-height/20`, `letter-spacing/normal` | Variable bindings |
| Status indicator size | 6 px (16), 8 px (24), 10 px (32), 12 px (40 and 48) | Layer dimensions |
| Status indicator position | Bottom-right; aligned to the container's bottom-right edge | Layer positions (e.g., 12 × 12 at x 36, y 36 in Size 48) |
| Border — Print, Color=Default, State=Default | 1 px, `border/strong` | Design context |
| Border — State=Focused | `focus/width` (2), `border/focus` | Design context |

## Semantics

Evidence-based interpretation: The component conveys identity. `Person` shows the actual image of the individual, `Print` shows an abbreviation of the name (an initial), and `Icon` shows a non-specific person. `Color` values in `Print` are visual themes; Figma does not document whether they carry meaning (for example, roles or categories). The meaning of the status indicator (`showState`) is not documented.

Not verified in Figma: HTML element, ARIA role, alternative text and screen-reader behavior.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Icon vector (`Type=Icon`) | Generic person silhouette (head and shoulders) on a circular background, using `icon/secondary` | Screenshot, layer `Vector`, variable binding |

The icon is a single flattened vector layer, not a swappable icon instance.

## Variants (Properties)

The inventory below is complete: all 50 variants of the component set were inspected.

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Icon | Generic person silhouette rendered as a vector filling the avatar. | 10 variants; `Color=Default` only |
| Person | Circular photo (sample image `unsplash:LWkFHEGpleE`). | 10 variants; `Color=Default` only |
| Print | Text initial (`label`) on a filled circle. | 30 variants; all three colors |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Print: `background/canvas` fill, 1 px `border/strong` border, `text/secondary` label. Icon and Person use their own content. | All types |
| Evergreen | Print: `surface/evergreen/subtle` fill, no border, `text/evergreen` label. | `Type=Print` only |
| Indigo | Print: `surface/indigo/subtle` fill, no border, `text/indigo` label. | `Type=Print` only |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| 16 | 16 × 16 px; label `Text/Label/XS`; indicator 6 px | All types |
| 24 | 24 × 24 px; label `Text/Body/XS Strong`; indicator 8 px | All types |
| 32 | 32 × 32 px; label `Text/Body/SM Strong`; indicator 10 px | All types |
| 40 | 40 × 40 px; label `Text/Body/MD Strong`; indicator 12 px | All types |
| 48 | 48 × 48 px; label `Text/Body/MD Strong`; indicator 12 px | All types |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting appearance. | All combinations |
| Focused | Adds a 2 px (`focus/width`) `border/focus` ring around the avatar. | All combinations |

### label

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Text shown in `Type=Print`. "B" in all variants. | Text property; applies to the Print label layer |

### showState

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| false | Status indicator hidden. | Default |
| true | Shows the bottom-right status indicator. | Bound in `Print` and `Person`; see Pending Clarification for `Icon` |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting state. | Print Default: 1 px `border/strong`; Evergreen/Indigo: no border. | `State=Default` variants |
| Focused | Focus appearance. | 2 px `border/focus` ring replaces or adds to the border; in `Person` the ring is applied to the image layer. | `State=Focused` variants |

`Focused` is a visual variant; Figma does not establish whether or how the avatar receives focus. No hover, pressed, selected or disabled states exist.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Radius | `radius/24` | Container corner radius (all types) | Variable binding |
| Background | `background/canvas` | Print, Color=Default fill | Variable binding |
| Background | `surface/evergreen/subtle` | Print, Color=Evergreen fill | Variable binding |
| Background | `surface/indigo/subtle` | Print, Color=Indigo fill | Variable binding |
| Border | `border/strong` | Print, Color=Default border (State=Default) | Variable binding |
| Border | `border/focus` | Focus ring (State=Focused) | Variable binding |
| Border width | `focus/width` | Focus ring width (2) | Variable binding |
| Text color | `text/secondary` | Print, Color=Default label | Variable binding |
| Text color | `text/evergreen` | Print, Color=Evergreen label | Variable binding |
| Text color | `text/indigo` | Print, Color=Indigo label | Variable binding |
| Icon color | `icon/secondary` | Icon type silhouette | Variable binding |
| Typography | `Text/Label/XS`, `Text/Body/XS Strong`, `Text/Body/SM Strong`, `Text/Body/MD Strong` | Print label by size (see Layout) | Text styles in component |
| Typography | `family/body`, `weight/semibold`, `size/11`, `size/12`, `size/14`, `size/16`, `line-height/16`, `line-height/20`, `letter-spacing/wide`, `letter-spacing/normal` | Print label typography | Variable bindings |

Not verified in Figma: the status indicator fill has no variable binding, so its color token cannot be established.

## Interaction

Observed states: `Default` and `Focused` variants exist for every type, color and size.

Not verified in Figma: whether the avatar is interactive (clickable or focusable), prototype interactions, and transitions. No prototype links were found on the component.

## Accessibility

Accessibility-related observations:

- `State=Focused` provides a visible 2 px `border/focus` ring at every size, distinct from the 1 px `border/strong` default border.
- In `Print`, label and fill colors are paired by color (`text/evergreen` on `surface/evergreen/subtle`, `text/indigo` on `surface/indigo/subtle`, `text/secondary` on `background/canvas`). Contrast ratios have not been verified.
- At `Size=16`, the label uses an 11 px font (`size/11`).
- The status indicator is conveyed visually only; no text alternative is defined in Figma.

Missing accessibility information (not verified in Figma): alternative text for `Person` and `Icon`, accessible name, ARIA role, keyboard support, screen-reader announcement, and whether a status indicator requires a text equivalent.

## Content Guidelines

Verified observation: All `Print` variants show a single uppercase character ("B") in the `label` property.

Recommendation: Use one or two initials so the label fits the circle, especially at `Size=16` and `Size=24`. Figma does not define a maximum label length.

## Examples

### Photo avatar

Configuration: `Type=Person`, `Color=Default`, `Size=40`, `State=Default`

Description: Shows a person's photo at 40 px.

Evidence / Classification: Existing variant in Figma.

### Initial avatar with color

Configuration: `Type=Print`, `Color=Evergreen`, `Size=32`, `State=Default`, `label="B"`

Description: Initial "B" on an Evergreen subtle background.

Evidence / Classification: Existing variant in Figma.

### Focused placeholder with status

Configuration: `Type=Icon`, `Color=Default`, `Size=48`, `State=Focused`, `showState=true`

Description: Generic avatar with focus ring and status indicator.

Evidence / Classification: Proposed configuration; the `Icon` variant exists, but `showState` behavior for `Icon` is unverified (see Pending Clarification).

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `Type=Icon` with `Color=Evergreen` or `Color=Indigo` | No such variant exists in the component set | Variant inventory |
| `Type=Person` with `Color=Evergreen` or `Color=Indigo` | No such variant exists in the component set | Variant inventory |

These combinations are unavailable rather than explicitly documented as invalid.

## Pending Clarification

1. Default `Type`: The Figma MCP property definitions report `Icon` as the default, but the variant order in the component set lists `Print` first. Confirm the intended default `Type`.
2. Status indicator for `Icon`: `Icon` variants contain a hidden `Ellipse 3` layer, but it does not appear to be bound to `showState`, unlike `Print` and `Person`. Confirm whether `showState` should work for `Icon`.
3. Status indicator meaning and color: The indicator's meaning (for example, online status) is not documented, and its fill is not bound to a variable. Confirm the meaning and the token to use.
4. Typography weight: `weight/semibold` resolves to the style "Medium" while the text styles declare weight 600. Confirm whether the label should render as Medium or SemiBold.
5. Focus and interactivity: A `Focused` state exists, but Figma does not establish whether the avatar is interactive. Confirm whether the avatar is focusable and in which contexts.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.
