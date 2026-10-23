---
component: "Modal"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2533"
last_updated: "2026-10-23"
tags:
  - "overlay"
  - "dialog"
  - "modal"
---

# Modal

System: Genome Evolution Design System

## Component Summary

Modal is a dialog container with an optional header (title, title icon, expand and close icons), a content area, and an optional footer with helper text and action buttons, available in six sizes.

## Quick Reference

### What It Is

Evidence-based interpretation: a dialog window that presents focused content and actions above the main interface. The component set (Figma node `2184:2533`) is a bordered, rounded container with a header, a content placeholder, and a footer containing a nested Duo button (secondary and primary actions). The name "Modal" and the close icon in the header support this reading. No written component description is defined for Modal in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Size | Small, Medium, Large, Bigger, 90%, Full | Small |
| showHeader | true, false | true |
| title | Text | "Modal 16x title" |
| titleIcon | true, false | false |
| expand | true, false | false |
| close | true, false | true |
| showButtons | true, false | true |
| helperText | true, false | false |
| valueHelperText | Text | "1 of 5" |
| tertiaryButton | true, false | false |
| Content (one property per size) | Swappable content | Empty placeholder |

### Default Configuration

The component property defaults exposed by Figma are `Size=Small`, `showHeader=true`, `title="Modal 16x title"`, `titleIcon=false`, `expand=false`, `close=true`, `showButtons=true`, `helperText=false`, `valueHelperText="1 of 5"`, and `tertiaryButton=false`. This corresponds to variant `2184:2534`, the top-left variant of the component set.

With these defaults, a new instance shows a header with a title and close icon, an empty content placeholder, and a footer with two buttons.

### Typical Usage

Verified observations:

- The six sizes set the modal width: Small 300px, Medium 500px, Large 700px, Bigger 1000px, 90% 1296px, and Full 1440 × 900px.
- The content area is a placeholder exposed as a separate swappable content property for each size (for example, `smallModalContent`, `fullModalContent`).
- The footer always contains a nested Duo button (an outlined secondary button and a filled primary button) aligned to the right. In every size except Small, an optional outlined tertiary button (`tertiaryButton`) can appear at the left of the footer.
- `helperText` shows a short text such as "1 of 5" in the footer.

Evidence-based interpretation:

- Choose the size by the amount of content: Small for short confirmations, Medium and Large for forms or detail views, and Bigger, 90%, or Full for complex content such as tables or editors.
- Use `helperText` for step indicators in multi-step flows (the default "1 of 5" suggests this use).
- Because each size has its own content property, content placed in one size may need to be set again after switching `Size`.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: some tasks (confirmations, short forms, detail views, or focused editing) need the user's full attention without navigating away from the current page.

### Expected Outcome

Evidence-based interpretation: the user reads the title, works with the content, and either confirms with the primary action, cancels with the secondary action or close icon, or uses an optional tertiary action.

### Typical Context

Evidence-based interpretation: confirmation dialogs, forms, wizards (with step helper text), and large data or editing views (Bigger, 90%, Full).

## When to Use

Evidence-based interpretations, derived from the properties, sizes, and structure:

- To ask the user to confirm or complete a focused task before continuing.
- To present a short form or detail view without leaving the page.
- To guide users through a multi-step flow (`helperText`, Duo button actions).
- To present large, complex content in a focused view (`Bigger`, `90%`, `Full`).

The nested Duo button's Figma description recommends it for flows with one primary and one related secondary action, such as "Cancel" and "Save" or "Back" and "Next".

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Modal in Figma. As recommendations only:

- Avoid using a modal for information that does not require interrupting the user; consider an inline component instead.
- Avoid offering more than three footer actions; the footer provides one optional tertiary button and a two-button Duo button.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | White container with a 1px border, 8px radius, and clipped content. |
| Header | Optional (`showHeader`) | Row with a bottom divider containing the title icon, title, expand icon, and close icon. |
| Title icon | Optional (`titleIcon`) | 16px `bizagi-lines` icon before the title. |
| Title | Required in the header | Single-line title truncated with an ellipsis. Default text: "Modal 16x title". |
| Expand icon | Optional (`expand`) | 16px `expand` icon. |
| Close icon | Optional (`close`) | 16px `close` icon. |
| Content | Required | 16px-padded area with a size-specific content placeholder. |
| Footer | Optional (`showButtons`) | Row with a top divider containing the tertiary button, helper text, and Duo button. |
| Tertiary button | Optional (`tertiaryButton`); not available in Small | Nested outlined Button instance with the label "Button". |
| Helper text | Optional (`helperText`, `valueHelperText`) | Short secondary text. Default text: "1 of 5". |
| Duo button | Required in the footer | Nested Duo button instance: outlined secondary button and filled primary button, both labeled "Button". |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Container radius | 8px | `radius/8` |
| Container border | 1px | `border/default` |
| Container background | White | `background/canvas` |
| Header padding | 16px horizontal, 12px vertical | Direct measurement (not bound to tokens) |
| Header gap | 8px | Direct measurement |
| Content padding | 16px | Direct measurement |
| Content placeholder height | 152px (Small, Medium, Large, 90%); fills the remaining height (Bigger, Full) | Direct measurement |
| Footer padding — Small | 16px horizontal, 8px vertical | Direct measurement |
| Footer padding — other sizes | 16px horizontal, 12px vertical; 16px gap | Direct measurement |
| Width — Small | 300px | Direct measurement |
| Width — Medium | 500px | Direct measurement |
| Width — Large | 700px (hugs a fixed 668px content placeholder) | Direct measurement |
| Width — Bigger | 1000px (fixed minimum and maximum) | Direct measurement |
| Width — 90% | 1296px (fixed minimum and maximum) | Direct measurement |
| Size — Full | 1440 × 900px (fixed minimum and maximum) | Direct measurement |
| Height | 280px (Small); 288px (Medium, Large, 90%); 251px fixed (Bigger); 900px fixed (Full) | Direct measurement |
| Header and footer corner radius | 4px on their outer corners | Direct measurement |
| Elevation | No shadow is applied | Figma layer |

## Semantics

Evidence-based interpretation:

- The modal represents a dialog. The title names the dialog, the close icon dismisses it, and the expand icon suggests enlarging it.
- In the Duo button, the filled button is the primary action and the outlined button is the secondary action, per the Duo button's Figma description. The tertiary button represents an additional, lower-priority action.
- The helper text represents supporting status, such as progress in a multi-step flow.

Not verified in Figma: dialog role, `aria-modal`, labelling of the dialog by its title, focus trapping, and behavior on the Escape key or outside click.

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Title icon | `bizagi-lines`, 16px; shown with `titleIcon=true` | Figma layers |
| Expand | `expand`, 16px; shown with `expand=true` | Figma layers |
| Close | `close`, 16px; shown with `close=true` | Figma layers |

The header icons are not exposed as instance-swap properties.

## Variants (Properties)

The variant inventory is complete: 6 variants (one per `Size`). Boolean, text, and content property names are listed as exposed by the Figma MCP.

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Small | 300px wide; compact footer (8px vertical padding); no tertiary button. | Default; variant `2184:2534` |
| Medium | 500px wide. | Variant `2184:2604` |
| Large | 700px wide. | Variant `2184:2618` |
| Bigger | 1000px wide; fixed 251px height; content fills the remaining height. | Variant `2184:2632` |
| 90% | 1296px wide (90% of the 1440px Full width). | Variant `2184:2702` |
| Full | 1440 × 900px; content fills the remaining height. | Variant `2184:2716` |

### Header properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| showHeader | Shows the header row. | Default: `true` |
| title | Title text. | Default: "Modal 16x title" |
| titleIcon | Shows the icon before the title. | Default: `false` |
| expand | Shows the expand icon. | Default: `false` |
| close | Shows the close icon. | Default: `true` |

### Footer properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| showButtons | Shows the footer row. | Default: `true` |
| helperText / valueHelperText | Shows the helper text and sets its content. | Default: `false` / "1 of 5" |
| tertiaryButton | Shows the tertiary button at the left of the footer. | Default: `false`; no effect in `Small` |

### Content properties

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| smallModalContent, mediumModalContent, largeModalContent, biggerModalContent, 90% content, fullModalContent | Swappable content for the content placeholder of each size. | Default: empty; the 90% property is exposed by the MCP as `prop90ModalContent` |

Button labels are set on the nested Button and Duo button instances; they are not exposed as Modal properties.

## States

Modal has no state variants. Interactive states for the footer actions come from the nested Button and Duo button components. The expand and close icons are plain icon layers with no state variants.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — surface | `background/canvas` | Container background; outlined button backgrounds | Figma variables |
| Color — border | `border/default` | Container border; header and footer dividers | Figma variables |
| Color — text | `text/primary` | Title | Figma variables |
| Color — text | `text/secondary` | Helper text | Figma variables |
| Color — icon | `icon/primary` | Used by the component set (header icons); exact layer binding not inspected | Figma variables |
| Radius | `radius/8` | Container radius | Figma variables |
| Typography | `Text/Title/SM` | Title (18/24, tight letter spacing) | Figma text style |
| Typography | `Text/Button/MD` | Button labels (nested) | Figma text style |
| Nested Button / Duo button | `surface/evergreen/bold`, `text/inverse`, `border/strong`, `border/evergreen`, `text/evergreen`, `space/16`, `size/16`, `space/8`, `gap/sm`, `semantic/sm`, `width/1` | Styling of the nested buttons | Figma variables (defined by the Button component) |

Not bound to tokens: header, content, and footer padding; header and footer gaps; the 4px header and footer corner radius; the title font size (18px is applied directly although line height, family, and letter spacing use variables).

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed elements: the expand and close icons and the footer buttons. The footer buttons are interactive components with their own states.
- Evidence-based interpretation: the close icon dismisses the modal, the expand icon enlarges it, and the footer buttons confirm, cancel, or perform an additional action. Opening and closing behavior, animation, backdrop, scrolling of long content, and the effect of the expand icon are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- Title text (`text/primary`) is 12.78:1 against white; helper text (`text/secondary`) is 5.45:1.
- The primary button label (`text/inverse` on `surface/evergreen/bold`) is 5.01:1.
- Long titles are truncated with an ellipsis, which can hide part of the title.
- The expand and close icons are 16px with no surrounding button, hit area, or state variants.

Missing accessibility information: dialog semantics, accessible name, focus management (initial focus, focus trap, focus return), keyboard dismissal, and accessible names for the expand and close icons.

## Content Guidelines

Verified observations:

- Default content is "Modal 16x title" for the title, "1 of 5" for the helper text, and "Button" for every button; all are placeholders.
- The title is single-line and truncates with an ellipsis.

Recommendations:

- Write a short title that states the purpose of the dialog.
- Label the primary action with a specific verb (for example, "Save") and the secondary action with the alternative (for example, "Cancel").
- Use the helper text for brief status, such as step progress.

## Examples

### Short confirmation

Configuration: `Size=Small`, `showHeader=true`, `close=true`, `showButtons=true`

Description: a compact dialog with a title, short content, and Cancel and Confirm actions.

Evidence / Classification: existing Figma configuration (variant `2184:2534`, default).

### Multi-step flow

Configuration: `Size=Medium`, `helperText=true`, `valueHelperText="1 of 5"`, `tertiaryButton=true`

Description: a wizard step with progress text in the footer, Back and Next actions, and an additional tertiary action.

Evidence / Classification: recommendation built from verified properties.

### Full-screen editor

Configuration: `Size=Full`, `expand=false`, `close=true`

Description: a full 1440 × 900px dialog for complex content, with content filling the available height.

Evidence / Classification: existing Figma configuration (variant `2184:2716`).

## Invalid Combinations

[No documented invalid combinations found]

`tertiaryButton` has no effect in `Size=Small`, because the Small footer does not include a tertiary button.

## Pending Clarification

1. Responsive sizing. `90%` and `Full` are fixed pixel sizes (1296px and 1440 × 900px) based on a 1440px frame. Confirm whether they should scale with the viewport (for example, 90% of the viewport width) and how the other sizes behave on smaller screens.
2. Inconsistent size structure. `Bigger` has a fixed 251px height (shorter than Medium and Large at 288px), and `Large` hugs a fixed 668px content area instead of having a fixed width. Confirm the intended height and width rules for each size.
3. Small footer. The Small footer has different padding (8px vs 12px) and no tertiary button option. Confirm whether this difference is intended.
4. Expand and close controls. Both are plain 16px icons with no button wrapper or states, and the effect of expand is not defined. Confirm whether they should be icon buttons and what expand does (for example, switching to `Full`).
5. Overlay and elevation. The modal has no shadow and no backdrop. Confirm whether it must be used with a separate backdrop or overlay component and whether an elevation style is needed.
6. Hard-coded values. Header, content, and footer padding, the title font size, and the 4px header and footer radius are not bound to tokens. Confirm whether they should use spacing, typography, and radius tokens.

## Notes / Changelog

Generated from Figma evidence (component set `2184:2533`) on 2026-10-23.

[No verified historical changes available]
