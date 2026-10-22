---
component: "Accordion"
system: "Genome Evolution Design System"
type: "Not verified in Figma"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-21"
---

# Accordion

System: Genome Evolution Design System

## Component Summary

Accordion is a component with a header row and, in Behavior=Expanded, a content area. It has two Behavior values, two Size values, three Color values, and six State values.

## Quick Reference

### What It Is

[Pending confirmation]

Verified observation: Figma exposes the Behavior values Collapsed and Expanded. Collapsed variants contain only a header row with a chevron-down icon. Expanded variants contain a header row with a chevron-up icon and a content container below it.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Evergreen, Indigo | Not verified in Figma |
| Behavior | Collapsed, Expanded | Not verified in Figma |
| Size | MD, SM | Not verified in Figma |
| State | Default, Hovered, Pressed, Focused, Disabled, Loading | Not verified in Figma |

Variant availability is not a full matrix. Color=Default exists for both Behavior values, both Sizes, and all six States (24 variants). Evergreen and Indigo exist only for Behavior=Expanded, with the States Default, Hovered, Pressed, and Focused, in both Sizes (16 variants). Disabled and Loading exist only for Color=Default.

### Default Configuration

[Pending confirmation]

### Typical Usage

[Pending confirmation]

## Purpose / Intent

[Pending confirmation]

## When to Use

[Pending confirmation]

## When NOT to Use

[Pending confirmation]

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Header Container | Not verified in Figma | Row holding the left icon, text, and trailing icons. It carries the background and the bottom border, and in Focused it carries the 2px border (in Expanded). |
| Left icon ("info") | Not verified in Figma | 16 x 16 icon at the start of the header, toggled by `showLeftIcon` and replaceable through `icon` in the generated interface. |
| Checkbox | Not verified in Figma | 20 x 20 "Check" frame containing a 16 x 16 box (1px icon/primary border, 2px radius) and a 16 x 16 "bizagi-lines" icon, toggled by `showCheckbox` in the generated interface. In Behavior=Collapsed, Size=MD, State=Default it also contains a text layer "Label". |
| Text | Not verified in Figma | Header text, with sample content "Placeholder". |
| Badge | Not verified in Figma | 14px-wide pill containing the sample text "0", toggled by `showBadge` in the generated interface. |
| Chevron | Not verified in Figma | 12 x 12 icon: chevron-down in Collapsed, chevron-up in Expanded. |
| Content Container | Not verified in Figma | Present in Behavior=Expanded variants only, 100px tall, with a content slot inside (layer names vary by variant, such as "Content MD Default" and "Accordion Content"). |
| Loading placeholders | Not verified in Figma | In State=Loading, rectangles using background/loading replace the text and chevron, and two bars replace the content in Expanded. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Variant width | 265 in all 40 variants | Figma metadata |
| Variant height | Collapsed MD 36; Collapsed SM 24; Expanded MD 136; Expanded SM 124 | Figma metadata, all 40 variants |
| Header padding (Size=MD) | Horizontal space/16, vertical space/8 | Figma design context, Default-color MD variants and Evergreen/Indigo MD variants inspected |
| Header padding (Size=SM) | Horizontal space/8, vertical space/2 | Figma design context, SM Default Expanded and Collapsed only |
| Header item spacing | 8, bound to gap/sm or space/8 in most inspected layers and a literal 8 in others | Figma design context |
| Content Container height | 100 in Expanded variants | Figma design context |
| Content Container padding | space/16 (MD), space/8 (SM Default); literal 16 in Indigo MD Focused | Figma design context |
| Content slot corner radius | radius/4 | Figma design context |
| Bottom border (Collapsed, Default color) | 1px on the root, border/default; none on the Collapsed Disabled root | Figma design context |
| Bottom border (Expanded header) | 1px: border/strong (Default color: Default, Hovered, Pressed), border/disabled (Disabled), border/evergreen (Evergreen Default) | Figma design context |
| Focus border (State=Focused) | 2px, border/focus (focus/width), around the header container in Expanded and around the root in Collapsed MD | Figma design context |
| Icon sizes | Left icon 16; chevron 12; checkbox frame 20 with a 16 box | Figma design context |

The 1px border widths come from the generated border classes. I did not find a variable bound to the 1px width. Measurements are per variant and are not generalized. Fixed width or responsive behavior was not verified.

## Semantics

[Pending confirmation]

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Left icon | "info" | Figma design context |
| Checkbox icon | "bizagi-lines" | Figma design context |
| Trailing icon | "chevron-down" (Collapsed) and "chevron-up" (Expanded) | Figma design context |

Icon colors are defined inside SVG assets that were not opened. The icon/disabled and icon/primary variables are returned for this node, but their application to specific icons is not verified.

## Variants (Properties)

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Header text in text/primary, header background background/canvas | 24 variants |
| Evergreen | Header text in text/evergreen, Expanded header bottom border in border/evergreen (verified in Size=MD, State=Default) | 8 variants, Behavior=Expanded only |
| Indigo | Header text in text/indigo (verified in Size=MD, State=Focused) | 8 variants, Behavior=Expanded only |

### Behavior

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Collapsed | Header row with chevron-down | 12 variants, Color=Default only |
| Expanded | Header row with chevron-up, plus a 100px Content Container | 28 variants |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | Header padding space/16 by space/8; heights 36 (Collapsed) and 136 (Expanded) | Verified in Default-color variants and 2 colored variants |
| SM | Header padding space/8 by space/2; heights 24 (Collapsed) and 124 (Expanded). Header text style is the same Text/Body/SM as MD. | Verified in SM Default Expanded and Collapsed only |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting appearance | Figma |
| Hovered | Visual variant | Figma |
| Pressed | Visual variant | Figma |
| Focused | Visual variant with a 2px border/focus | Figma |
| Disabled | Visual variant | Color=Default only |
| Loading | Visual variant | Color=Default only |

Inventory completeness: all 40 variants listed in the node metadata were identified. Detailed inspection covered 16 of them, so behavior-specific details for the remaining 24 variants are not documented. Properties defined outside this node, if any, were not inspected.

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Visual variant | Header background background/canvas, text text/primary. | Figma |
| Hovered | Visual variant | Header background becomes background/interactive/hovered. | Figma, Default color MD |
| Pressed | Visual variant | Header background becomes background/interactive/pressed. | Figma, Default color MD |
| Focused | Visual variant | A 2px border/focus appears around the header container (Expanded) or the root (Collapsed MD). | Figma, Default color MD; Indigo MD Expanded |
| Disabled | Visual variant | Header background becomes background/disabled and text becomes text/disabled. In Expanded the header bottom border is border/disabled. In Collapsed MD no root bottom border was found. | Figma, Default color MD |
| Loading | Visual variant | The text and chevron are replaced by background/loading rectangles (a 170 x 20 bar and a 12 x 12 square). In Expanded the content shows two background/loading bars (full width and 129 wide). | Figma, Default color MD |

These are visual state variants only. They do not prove that any interaction, expand or collapse behavior, focus behavior, or state transition is implemented. Hovered, Pressed, and Focused for Evergreen and Indigo, and all SM states other than Default, were not inspected in detail.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color | background/canvas (#ffffff) | Header background (Default, Focused, Loading) and Content Container background | Figma variable binding |
| Color | background/interactive/hovered (#f7f8f7) | Hovered header background | Figma variable binding |
| Color | background/interactive/pressed (#e9ecea) | Pressed header background | Figma variable binding |
| Color | background/disabled (#f4f6f4) | Disabled header background | Figma variable binding |
| Color | background/loading (#d9deda99) | Loading placeholder rectangles | Figma variable binding |
| Color | text/primary (#2d342f) | Header text (Default color, not Disabled) | Figma variable binding |
| Color | text/disabled (#849588) | Disabled header text | Figma variable binding |
| Color | text/evergreen (#297a39) | Evergreen header text (verified in Size=MD, State=Default) | Figma variable binding |
| Color | text/indigo (#6b1b99) | Indigo header text (verified in Size=MD, State=Focused) | Figma variable binding |
| Color | border/strong (#5f6d62) | Expanded header bottom border in Default color | Figma variable binding |
| Color | border/default (#c3cbc5) | Collapsed root bottom border | Figma variable binding |
| Color | border/disabled (#c3cbc5) | Expanded Disabled header bottom border | Figma variable binding |
| Color | border/evergreen (#297a39) | Evergreen Expanded header bottom border (verified in Size=MD, State=Default) | Figma variable binding |
| Color | border/focus (#339947) | State=Focused border | Figma variable binding |
| Color | icon/primary (#5f6d62) | Checkbox box border | Figma variable binding |
| Border width | focus/width (2) | State=Focused border | Figma variable binding |
| Spacing | space/16, space/8, space/2 | Header and content padding (see Layout) | Figma variable binding |
| Spacing | gap/sm (8) | Header item spacing in most inspected layers | Figma variable binding |
| Shape | radius/4 (4) | Content slot corner radius | Figma variable binding |
| Typography | Text/Body/SM | Header text (family/body, size/14, weight 400, line-height/20, letter spacing 0) | Figma |
| Typography | size/12, line-height/16, letter-spacing/normal | "Label" text in the checkbox (Collapsed, MD, Default) | Figma variable binding |

The following were returned for this node, but their usage was not established: border/indigo (#6b1b99), icon/disabled (#9daaa0), radius/0, and weight/regular (resolves to the style name "Regular"). The Badge uses literal values (border #9e9e9e, text #272727) and font/* variable references that were not returned by Figma's variable definitions, and the checkbox border width references width/1, which was also not returned. Token values come from Figma only; repository token JSON files were not used.

## Interaction

[Pending confirmation]

## Accessibility

[Pending confirmation]

## Invalid Combinations

[Pending confirmation]

Observation, not a rule: Evergreen and Indigo are not provided for Behavior=Collapsed, and Disabled and Loading are not provided for them either.

## QA Checklist

- [x] Component identity and source references verified.
- [ ] Documented properties and values checked against available Figma evidence.
- [x] Variant inventory completeness assessed and any inspection limitations documented.
- [ ] Default values verified, or unresolved conflicts recorded.
- [ ] Layout measurements checked against the relevant configurations.
- [ ] Token mappings verified against their actual sources.
- [x] Visual states distinguished from verified interactive behavior.
- [ ] Accessibility claims supported by explicit evidence.
- [ ] Invalid combinations supported by explicit evidence.
- [x] Recommendations distinguished from verified observations.
- [ ] English and Spanish documentation are semantically equivalent.
- [x] No unresolved template placeholders remain.
- [x] No template instructions remain in the final document.
- [ ] No unsupported or fabricated information has been added.
- [x] Historical changes included only when supported by version history.

## Pending Clarification

1. Component structure. Node 2016:2350 is a frame holding 40 components and is not confirmed as a component set. Properties defined outside it, if any, were not inspected. Resolve by confirming the component set in Figma.
2. Property inventory and defaults. The default of Color, Behavior, Size, and State is not established. The generated interface also lists `text` (sample "Placeholder"), `showLeftIcon`, `showCheckbox`, `showBadge`, `icon`, and content slots, but whether they are Figma properties, and their types and defaults, are unverified. Resolve by confirming the properties panel in Figma.
3. Partial inspection. Only 16 of 40 variants were inspected in detail. SM states other than Default, Evergreen and Indigo variants other than the two listed, and Hovered and Pressed for colored variants were identified by name and size only.
4. Token gaps. Badge literals, unresolved font/* and width/1 references, unbound 1px border widths, the literal 16 padding in Indigo MD Focused, and the unestablished usage of border/indigo, icon/disabled, icon/primary on icons, and radius/0.
5. Layer differences between variants. The "Label" text in the checkbox appears only in Collapsed, MD, Default among the inspected variants. Collapsed Disabled has no root bottom border while Expanded Disabled does. In Focused, the border is on the root in Collapsed and on the header container in Expanded. It is not known whether these are intentional.
6. Variant availability. It is not known whether the absence of Evergreen and Indigo for Collapsed, and of Disabled and Loading for those colors, is intentional.
7. Not documented in Figma: purpose, usage guidance, restrictions, semantics, interaction (including expand and collapse), accessibility, invalid combinations, status, version, owner, tags, and the content that goes in the content slot.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-21.

[No verified historical changes available]
