---
component: "Icon Button"
system: "Genome Evolution Design System"
type: "Action"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2182-3348"
last_updated: "2026-10-20"
tags:
  - "button"
  - "icon"
  - "action"
  - "toolbar"
  - "compact"
  - "filled"
  - "outline"
---

# Icon Button — Genome Evolution Design System

System: Genome Evolution Design System

Compact icon-only action button, available in Filled and Outline types, four colors, five states, three sizes and two corner styles.

Source key: unmarked content is verified in Figma. Content marked "Legacy" comes from the previous documentation of this file and is pending validation [Pending confirmation].

## Quick Reference

### What it is

Icon-only action control with no text label. The Figma component description classifies it as a "Button".

### Key Properties

| Property | Values | Default |
|---|---|---|
| Type | Filled, Outline | Filled |
| Color | Evergreen, Indigo, Inverse, Default | Evergreen |
| State | Default, Hover, Pressed, Focused, Disable | Default |
| Size | SM, MD, LG | MD |
| Corner | Square, Rounded | Square |
| smallIcon | Swappable icon for Size=SM | — |
| mediumIcon | Swappable icon for Size=MD | — |
| largeIcon | Swappable icon for Size=LG | — |

Defaults are stated in the Figma component description. The Size default (MD) also matches the React implementation default, but it is provisional: see Pending Clarification 9. Figma does not mark default icons; see Iconography for the icon instances used in the inspected variants.

### Default Configuration

Type=Filled, Color=Evergreen, State=Default, Size=MD, Corner=Square. Size=MD is provisional (see Pending Clarification 9).

### Typical Usage

Verified Observation: the Figma component description lists three example variants and labels them "not usage guidance" (see Examples).

Recommendation (Legacy, pending validation):

- Use Filled for higher visual weight and primary actions, and Outline for secondary actions.
- Use Indigo for AI features.
- Use Inverse on dark backgrounds.

## Purpose / Intent

### Problem Solved

Provides an action when the available space does not allow a button with text.

### Expected Outcome

[Pending confirmation]

### Typical Context

Toolbars where several actions are grouped and text would be visually noisy.

## When to Use

- The available space does not allow for a button with text.
- The icon is clear enough without a label (send, trash, save, edit, close).
- Multiple actions are grouped in a toolbar where text would be visually noisy.

## When NOT to Use

The "DO NOT USE" block in the Figma description repeats the "USE WHEN" text, so no verified cases to avoid are available [Pending confirmation].

Legacy (pending validation):

- The action is ambiguous without a label.
- It is the main call to action of a screen.

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|---|---|---|
| Container | Yes | Frame whose background and border depend on Type, Color and State. |
| Icon | Yes (in the inspected variants) | Swappable icon instance, centered in the container. |

### Layout

| Property | Verified Value |
|---|---|
| Height and Width | LG 48px, MD 32px, SM 24px (square) |
| Padding | LG 12px, MD 8px, SM 4px (`space/4`) |
| Icon size | LG 24px, MD 16px, SM 16px |
| Radius, Corner=Square | 4px (`semantic/sm`) |
| Radius, Corner=Rounded | 999px (`semantic/full`) |
| Focus ring | 2px (`focus/width`), color `border/focus` #339947 |

Measured directly on Type=Filled, Color=Evergreen, State=Default variants: Square for LG and SM, Rounded for MD. LG and MD padding were read as fixed values, with no spacing token returned. Outline variants and the remaining states were not measured individually.

## Semantics

[Pending confirmation]

## Iconography

| Slot | Description |
|---|---|
| largeIcon | Size=LG. 24px icon. The inspected variants use `send`. |
| mediumIcon | Size=MD. 16px icon. The inspected variants use `send`. |
| smallIcon | Size=SM. 16px icon. The inspected variants use `trash`. |

## Variants (Properties)

### Type

| Value | Description |
|---|---|
| Filled | Variant with a background fill. |
| Outline | Variant defined by its border. |

### Color

| Value | Description |
|---|---|
| Evergreen | Green. Uses `surface/evergreen/bold` #297a39 in the inspected variant. |
| Indigo | Indigo. |
| Inverse | Light background. Exists only with Type=Filled and has no Disable state. |
| Default | Neutral. Exists with Type=Outline in all five states, and with Type=Filled only in State=Disable. |

### State

| Value | Description |
|---|---|
| Default | Resting variant. |
| Hover | Hover variant. |
| Pressed | Pressed variant. |
| Focused | Variant with a focus ring. |
| Disable | Disabled variant. Exists only with Color=Default. |

### Size

| Value | Description |
|---|---|
| SM | 24×24px. |
| MD | 32×32px. |
| LG | 48×48px. |

### Corner

| Value | Description |
|---|---|
| Square | 4px radius. |
| Rounded | 999px radius (inspected on Size=MD), circular appearance. |

## States

| State | Description | Visual Changes |
|---|---|---|
| Default | Resting variant. | Base tokens for the Type and Color. |
| Hover | Variant exists. | Background changes (see Token Mapping). |
| Pressed | Variant exists. | Background changes (see Token Mapping). |
| Focused | Variant exists. | 2px ring in `border/focus` #339947. |
| Disable | Variant exists, only for Color=Default. | Disabled background or border and icon tokens. |

## Token Mapping

### Verified directly in Figma (inspected variant)

| Category | Token | Usage |
|---|---|---|
| Background | `surface/evergreen/bold` #297a39 | Type=Filled, Color=Evergreen, State=Default |
| Icon | `icon/inverse` #f7f8f7 | Type=Filled, Color=Evergreen, State=Default |
| Radius | `semantic/sm` 4 | Corner=Square (Size=LG and SM inspected) |
| Radius | `semantic/full` 999 | Corner=Rounded (Size=MD inspected) |
| Padding | `space/4` 4 | Size=SM |

### Present in the component's Figma variables (binding to each variant not verified)

The token names and values exist in Figma. The usage column comes from the previous documentation and was not checked variant by variant [Pending confirmation].

| Token | Value | Usage (Legacy) |
|---|---|---|
| `surface/evergreen/bold/hovered` | #1f5c2b | Filled, Evergreen, Hover |
| `surface/evergreen/bold/pressed` | #174520 | Filled, Evergreen, Pressed |
| `surface/indigo/bold` | #6b1b99 | Filled, Indigo, Default |
| `surface/indigo/bold/hovered` | #4f0077 | Filled, Indigo, Hover |
| `surface/indigo/bold/pressed` | #30004a | Filled, Indigo, Pressed |
| `background/canvas` | #ffffff | Filled, Inverse, Default |
| `background/interactive/hovered` | #f7f8f7 | Hover background of Filled Inverse and of Outline |
| `background/interactive/pressed` | #e9ecea | Pressed background of Filled Inverse and of Outline |
| `background/disabled` | #f4f6f4 | Filled, Disable |
| `border/evergreen` | #297a39 | Outline, Evergreen, border |
| `border/indigo` | #6b1b99 | Outline, Indigo, border |
| `border/disabled` | #c3cbc5 | Outline, Disable, border |
| `icon/evergreen` | #297a39 | Outline, Evergreen, icon |
| `icon/indigo` | #6b1b99 | Outline, Indigo, icon |
| `icon/primary` | #5f6d62 | Icon of Filled Inverse and of Outline Default |
| `icon/disabled` | #9daaa0 | Disable, icon |
| `border/focus` | #339947 | Focus ring |
| `focus/width` | 2 | Focus ring width |

### Not found in Figma

`border/strong` #5f6d62 is documented in the previous version as the border of Type=Outline, Color=Default. It does not appear in the component's Figma variables. `border/default` #c3cbc5 is present, but its usage is unknown [Pending confirmation].

## Interaction

Visual states exist as variants (see States). Interactive behavior is not verified: no prototype or interaction documentation was available. [Pending confirmation]

## Accessibility

Legacy implementation guidance from the previous documentation. It is not an official Design System requirement and is pending validation [Pending confirmation]:

- Add a descriptive accessible label, since the control has no visible text (previous example: `aria-label="Delete"`).
- Mark the icon as decorative (`aria-hidden="true"`).
- For the disabled state, set `aria-disabled="true"` and keep it out of the focus order.
- Use Size=MD (32px) as the smallest size for touch targets on mobile.

## Content Guidelines

[Pending confirmation]

## Examples

### Example 1

Configuration: Type=Filled, Color=Evergreen, State=Default, Size=LG, Corner=Square

Description: Example variant listed in the Figma description. Not usage guidance.

### Example 2

Configuration: Type=Outline, Color=Indigo, State=Hover, Size=MD, Corner=Rounded

Description: Example variant listed in the Figma description. Not usage guidance.

### Example 3

Configuration: Type=Outline, Color=Default, State=Disable, Size=SM, Corner=Square

Description: Example variant listed in the Figma description. Not usage guidance.

## Invalid Combinations

### Not present in the variant set (verified)

The following combinations have no variant in Figma, in any Size or Corner. Their absence does not mean they are officially prohibited.

| Type | Color | States with no variant |
|---|---|---|
| Filled | Evergreen, Indigo, Inverse | Disable |
| Filled | Default | Default, Hover, Pressed, Focused |
| Outline | Evergreen, Indigo | Disable |
| Outline | Inverse | Default, Hover, Pressed, Focused, Disable |

### Officially declared invalid

[Pending confirmation]. The Figma description states that the validity of these combinations is not confirmed, and `ai/invalid-combinations.md` has no Icon Button entry.

### Legacy (pending validation)

- The previous documentation listed the absent combinations above as invalid. Figma does not confirm this.
- largeIcon with Size=MD or SM (use mediumIcon or smallIcon).
- Color=Inverse on light backgrounds. This reads as a usage recommendation rather than a variant rule.

## QA Checklist

- [ ] All documented properties and values match the available Figma source. (Partial: Layout was measured on Filled / Evergreen / Default variants only.)
- [x] Variant values verified.
- [ ] Default values included only when verified. (Partial: Size=MD is provisional; see Pending Clarification 9.)
- [ ] Relevant tokens verified against available sources. (Partial: see Token Mapping.)
- [x] No undocumented behavior added.
- [ ] No undocumented accessibility claims added. (Legacy guidance included and labeled.)
- [x] Recommendations distinguished from verified observations.
- [x] No unresolved template placeholders remain.
- [x] No template instructions remain.
- [x] No fabricated information present.

## Pending Clarification

1. Which border token does Type=Outline, Color=Default use: `border/strong` (not found in Figma) or `border/default` #c3cbc5?
2. What should the Figma "DO NOT USE" block say, and do the Legacy "When NOT to use" items stand?
3. Is any of the Legacy accessibility guidance or Legacy usage recommendation official?
4. Does the Design System officially declare any of the absent combinations invalid?
5. Which tokens does each Hover, Pressed, Disable and Outline variant actually bind to?
6. Do Outline variants, the remaining states and Rounded variants of other sizes share the measured padding, icon size and radius?
7. Are "Action" (type) and "Production" (status) correct? They come from the previous file and the manifest, not from Figma.
8. Are a version and an owner defined? Neither was found, so both were left out of the front-matter.
9. Which Size is the real default of the component set? The code generated by Figma when inspecting variants returned LG as the default, while the Figma component description and the React implementation state MD. MD is kept as the provisional default until the set's default variant is confirmed.

## Notes / Changelog

Generated on 2026-10-20 from the Figma component (node 2182:3348) and the previous documentation of this file.

[No verified historical changes available]
