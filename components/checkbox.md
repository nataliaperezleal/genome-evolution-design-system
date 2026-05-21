---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form / Selection"
status: "Design"
version: "1.1"
owner: "UX Design Team"
last_updated: "2026-05-21"
tags: [form, selection, checkbox, input, binary-state, indeterminate-state, icon-control]
---
 
# Checkbox — Genome Evolution Design System
 
**Component Type:** Form / Selection
**Status:** Design
**Version:** 1.1
**Owner:** UX Design Team
**Last Updated:** 2026-05-21
 
## Quick Reference
 
| Property | Values | Default |
|----------|--------|---------|
| Color | Default, Evergreen, Indigo, Disabled | Default |
| State | Default, Hovered, Pressed, Focused, Disabled | Disabled |
| Type | Default (unchecked), Check (checked), Mixed (indeterminate) | Default |
| Show Label | true, false | true |
| Label | Text content (editable) | "Label" |
| Show icon | true, false | true |
 
**Critical Restrictions:**
- Color=Disabled + State=Disabled only (never mix with active states)
- Color=Indigo + State ≠ Disabled (Indigo active color incompatible with Disabled)
- Show Label=false + Show icon=false invalid (at least one required for accessibility)
- Type=Mixed should only be used for partial/grouped selections
**Total Variants:** 180+ (4 Colors × 5 States × 3 Types × 2 Label toggles × 2 Icon toggles = 240 max combinations)
 
## Purpose
 
The Checkbox component is a binary or indeterminate selection control that enables users to independently select one or multiple options from a set. It supports three selection states: unchecked (Default), checked (Check), and indeterminate/partially checked (Mixed). This component is fundamental for forms, filters, bulk actions, and preference settings where multiple independent selections are required.
 
The component provides visual feedback through four distinct colors (Default, Evergreen, Indigo, Disabled) and five interactive states (Default, Hovered, Pressed, Focused, Disabled) to communicate availability, interactivity, and accessibility. A flexible Show icon property allows designers to control icon visibility independently of the label, enabling icon-only, label-only, or combined configurations. A decorative "bizagi-lines" icon always appears on the right side as a visual separator.
 
## When to Use
 
- Selecting multiple options from a list where all selections are independent
- Accepting terms, conditions, or privacy policies in forms
- Filtering content or search results by multiple criteria
- Bulk selection or deselection of items in tables, lists, or card grids
- Configuration preferences or feature toggles where multiple items can be enabled simultaneously
- Indicating partial selection or "select all" scenarios with the Mixed (indeterminate) state
- Forms requiring multiple checkboxes as part of a checkbox group
- Confirming agreement to multiple independent statements or conditions
- Data table row selection with visual icon feedback
- Dense UI layouts where icon-only checkboxes optimize space
## When NOT to Use
 
- Mutually exclusive options: Use Radio Button instead (only one option can be selected at a time)
- Real-time activation or deactivation of features: Use Toggle/Switch instead (implies immediate action)
- Navigation between different views or pages: Use Tabs or navigation links instead
- Boolean toggles that control system behavior: Use Toggle/Switch for clearer intent
- Single confirmation choice: Consider a confirmation dialog or Radio Button
- Dependent selections (where selecting one option disables others): Use a different selection pattern or add logic validation
- Visual-only indicators: If no user interaction is needed, use an icon or status indicator instead
- When the checkbox meaning would be unclear without both label and icon (maintain at least one visible)
## Anatomy
 
**Parts of the component:**
- **Checkbox Box** (Required): The interactive container that displays the checkbox state. 16x16px (or 20x20px depending on variant). Contains the check/mixed icon when selected. Responds to all user interactions (hover, press, focus). Rounded rectangle shape with border and optional background.
- **Check Icon** (Conditional): Appears when Type=Check and Show icon=true. Uses the "check" icon from the Genome icon system (typically a checkmark ✓). Communicates selected/checked state.
- **Mixed Icon** (Conditional): Appears when Type=Mixed and Show icon=true. Uses the "remove" (dash/minus) icon from the Genome icon system (—). Indicates indeterminate/partial selection.
- **Label** (Conditional): Optional text label positioned to the right of the checkbox box. Controlled by Show Label property. Communicates the option being selected. Font: Open Sans, 10px, Regular.
- **Decorative Icon** (Always Visible): A "bizagi-lines" instance appears on the right side of the component (after label if present). Serves as visual separator or design motif. Always present in all variants.
- **Focus Ring** (Conditional): A subtle elliptical focus indicator that appears when State=Focused. Supports keyboard navigation and accessibility. 32px ellipse overlay on checkbox area.
- **State Background** (Conditional): A background ellipse appears on State=Hovered, Pressed, or Focused. 32x32px rounded background layer that provides visual feedback.
**Dimensions:**
- Checkbox box width: 16px - 20px
- Checkbox box height: 16px - 20px
- Label gap: 8px (spacing between checkbox box and label text)
- Total component width: Variable (depends on label length and icon visibility)
- Total component height: 20px - 24px (checkbox + vertical alignment)
- Label font size: 10px
- Label font family: Open Sans
- Label font weight: Regular
- Label line height: 14px
- Decorative icon: bizagi-lines (right side)
- State ellipse: 32x32px (visible on Hovered/Pressed/Focused)
- Focus ellipse: 32x32px (visible on Focused)
- Padding: No padding on checkbox container (elements are directly positioned)
- Gap between checkbox and label: 8px
## Variants
 
### Color (4 variants)
Color controls the visual emphasis and semantic meaning of the checkbox within its context. Each color has specific valid state pairings.
 
- **Default:** Standard checkbox appearance. Used for regular form inputs and most selection scenarios. Indicates a neutral, available, and interactive element. Valid with all States (Default, Hovered, Pressed, Focused, Disabled—though Disabled should use Color=Disabled).
- **Evergreen:** A branded color variant emphasizing selected or affirmative states. Commonly used for confirmed selections, positive actions, or successful checks in bulk operations. Uses the Evergreen brand color (#339947 or similar). Valid with States: Default, Hovered, Pressed, Focused. NOT valid with State=Disabled.
- **Indigo:** A distinctive color variant for highlighted or emphasized selections. Use when the checkbox needs visual prominence or differentiation from other form elements. Uses the Indigo/secondary brand color. Valid with States: Default, Hovered, Pressed, Focused. NOT valid with State=Disabled.
- **Disabled:** Visual indication that the checkbox cannot be interacted with. ONLY valid when State=Disabled. Communicates unavailability due to permissions, prerequisites, or system constraints. Text and icon appear in disabled/muted color. Never pair with active states (Hovered, Pressed, Focused).
### State (5 variants)
State communicates the interactive feedback and accessibility focus of the checkbox. Each state has specific visual appearance and valid color pairings.
 
- **Default:** Base state. The checkbox is available and ready for interaction. No special visual feedback is applied. Focus ring is absent. State background ellipse is not visible. Valid with Colors: Default, Evergreen, Indigo.
- **Hovered:** Visual feedback when the mouse hovers over the checkbox. Provides affordance that the element is interactive. A subtle state background ellipse (32x32px) appears behind the checkbox. Color intensity may increase slightly. Valid with Colors: Default, Evergreen, Indigo. NOT valid with Color=Disabled.
- **Pressed:** Visual feedback when the checkbox is actively clicked/pressed. Indicates immediate user input recognition. State background ellipse appears and may darken further than hovered state. Valid with Colors: Default, Evergreen, Indigo. NOT valid with Color=Disabled.
- **Focused:** Visual feedback when the checkbox receives keyboard focus (via Tab key). Shows a focus ellipse (32x32px) around the checkbox box. Indicates the element is ready for keyboard interaction. Essential for keyboard navigation accessibility. The ellipse may be the same color as the checkbox color (Default, Evergreen, or Indigo). Valid with Colors: Default, Evergreen, Indigo. NOT valid with Color=Disabled.
- **Disabled:** Communicates that the checkbox is not interactive. MUST be paired with Color=Disabled. The element is visually muted and unresponsive to user input. Text and icons fade (reduced opacity or muted color). Hover/press states do not apply. No state ellipse appears. Pointer and keyboard events are blocked. Valid with Color: Disabled only.
### Type (3 variants)
Type represents the selection state of the checkbox from a data/semantic perspective. Type controls what icon (if any) appears inside the checkbox box.
 
- **Default:** Unchecked state. The option is not selected. No icon appears inside the checkbox box (icon space is empty, even when Show icon=true). Checkbox box shows only border and background (if applicable).
- **Check:** Checked state. The option is selected. A checkmark icon appears inside the checkbox box (when Show icon=true). The check icon uses the "check" symbol from the design system.
- **Mixed:** Indeterminate or partially checked state. Used when representing a group selection where some (but not all) sub-items are checked (select all patterns, hierarchical trees). A dash/minus icon appears inside the checkbox box (when Show icon=true). The remove icon uses the "remove" or "dash" symbol.
## Token Mapping
 
### Color States (State=Default, Type=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | — | transparent | No fill in default |
| Box Border | color/border/default | #CCCCCC | 1-2px border |
| Text Color | color/text/primary | #000000 | Primary text |
| Icon Color | color/text/primary | #000000 | Primary icon |
 
### Evergreen Color States (State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Type=Check) | color/brand/primary/500 | #339947 | Evergreen primary |
| Text Color | color/brand/primary/500 | #339947 | Matches brand |
| Icon Color (Check) | color/text/inverse | #FFFFFF | Check icon on colored bg |
| Box Border | color/brand/primary/500 | #339947 | Matches background |
 
### Indigo Color States (State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Type=Check) | color/brand/secondary/500 | [Indigo hex] | Indigo/secondary brand |
| Text Color | color/brand/secondary/500 | [Indigo hex] | Matches brand |
| Icon Color (Check) | color/text/inverse | #FFFFFF | Check icon contrast |
| Box Border | color/brand/secondary/500 | [Indigo hex] | Matches background |
 
### Disabled Color States (State=Disabled only)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | color/background/disabled | #F5F5F5 | Neutral disabled bg |
| Box Border | color/border/disabled | #DDDDDD | Subtle border |
| Text Color | color/text/disabled | #999999 | Muted text |
| Icon Color | color/icon/disabled | #999999 | Muted icon |
 
### Interactive States (Default Color)
 
| State | Visual Effect | Notes |
|-------|--------------|-------|
| Hovered | State ellipse bg appears (32x32px) | Soft background layer |
| Pressed | State ellipse darkens/intensifies | Deeper visual feedback |
| Focused | Focus ellipse appears (32x32px) | Keyboard indicator |
| Disabled | Muted colors, opacity reduced | No state effects apply |
 
## Semantics
 
- **Selection Independence:** Each checkbox represents an independent, binary choice. Selecting one checkbox does not affect others (unless explicitly configured in parent logic).
- **Ternary Logic:** The Mixed (indeterminate) type extends binary semantics to include partial or grouped selections, commonly used in "select all" patterns or multi-level trees. Should only be used when actually representing partial selection.
- **Color as Affordance:** Color choice signals semantic intent: Default (neutral), Evergreen (affirmative/positive), Indigo (emphasis/highlight), Disabled (unavailable/locked).
- **State as Feedback:** State communicates interactivity feedback (hover, press, focus), not the selection state itself. Type communicates the actual selection state.
- **State vs Color Validity:** Disabled state ONLY pairs with Disabled color. Active colors (Default, Evergreen, Indigo) NEVER pair with Disabled state.
- **Label Association:** The optional label is semantically linked to the checkbox and should describe the option being selected. When Show Label=false, a tooltip or aria-label must provide accessible text.
- **Icon Visibility Control:** Show icon property allows flexible presentation: when false, no icon slot is rendered inside checkbox box, reducing visual complexity. Label alone can communicate selection state in certain contexts.
- **Decorative Icon:** The bizagi-lines icon on the right is purely decorative and visual. It appears in all variants and should not be considered in accessibility labels.
- **Form Integration:** Checkboxes typically appear as groups in forms. Each checkbox contributes an independent value to a multi-select form field.
## Interaction
 
- **Click/Tap:** Clicking the checkbox or its label toggles the selection state: Default ↔ Check, or cycles through Default → Check → Default (or Default → Check → Mixed → Default if mixed state is used).
- **Hover:** Visual feedback via state ellipse (32x32px) appearing behind the checkbox. Indicates interactivity. The ellipse color matches the checkbox color (Default, Evergreen, or Indigo).
- **Press:** Immediate visual feedback when the checkbox is being clicked/pressed down. State ellipse appears/darkens.
- **Focus (Keyboard):** When Tab key navigates to the checkbox, a focus ellipse (32x32px) appears. Indicates the element is ready for keyboard interaction.
- **Space Bar:** When focused via keyboard, pressing Space toggles the checkbox state.
- **Label Click:** Clicking the label also toggles the checkbox state (the label should be wrapped in an associated `<label>` element).
- **Icon Visibility:** The Show icon property controls whether the icon slot is visible. When false, no icon space is rendered; label text or decorative icon directly follows the checkbox box.
- **Disabled Interaction:** Disabled checkboxes do not respond to any interaction. Pointer events are not triggered; keyboard navigation skips over disabled checkboxes.
- **State Transitions (Active):** Default → Hovered (on hover) → Pressed (on click) → Default/Checked (after release, based on toggled state).
- **State Transitions (Keyboard):** Default → Focused (on Tab) → [Selection toggles on Space] → Default/Checked.
## Accessibility
 
**HTML Structure:**
- Wrap each checkbox in a `<label>` element for implicit label association
- Use `<input type="checkbox" />` as the semantic form control
- Use `aria-label` or `aria-labelledby` if label text is not visible (Show Label=false)
- Use `aria-describedby` to associate error messages or additional context with the checkbox
- For indeterminate state, set `aria-checked="mixed"` on the input element
- Use `aria-disabled="true"` and `disabled` attribute together for disabled checkboxes
**Keyboard:**
- Tab key navigates to and from the checkbox
- Space bar toggles the checkbox state when focused
- Enter key may submit a form but should not toggle the checkbox
- Shift+Tab navigates backward through form elements
- Arrow keys should not be used for individual checkboxes; reserve for checkbox groups with arrow key navigation
- Checkbox groups should implement focus management: first checkbox receives focus; arrow keys move between checkboxes
**Screen Reader:**
- Checkbox should announce its label text and state: "Option name, checkbox, checked/unchecked"
- Mixed (indeterminate) state should announce as "partially checked" or "mixed"
- Disabled state should announce: "Option name, checkbox, disabled"
- When Show Label=false, the aria-label text should fully describe the option
- When Show icon=false, screen reader announcement should not reference icon (only label)
- Decorative bizagi-lines icon should be hidden from screen readers (aria-hidden="true")
- Checkbox groups should be wrapped in a `<fieldset>` with a `<legend>` describing the group purpose
**Contrast:**
- Checkbox border must have a contrast ratio of at least 3:1 against the background
- Checked icon must have a contrast ratio of at least 3:1 against the checkbox background
- Label text must have a contrast ratio of at least 4.5:1 against the background for normal text
- Focus ellipse must have a contrast ratio of at least 3:1 against the background
- Disabled state must still maintain 3:1 contrast for the box outline and icon
## Content Guidelines
 
- Keep label text concise and descriptive, typically 2-5 words
- Use sentence case for labels, not all caps
- Begin with the option being selected: "Subscribe to updates" instead of "Updates"
- Avoid technical jargon; use language familiar to the target user
- Ensure labels are scannable and unambiguous
- For grouped checkboxes, use a fieldset legend to describe the group's purpose
- Avoid double negatives in labels: prefer "Enable notifications" over "Do not disable notifications"
- When labels are hidden (Show Label=false), provide a tooltip or aria-label with full descriptive text
- Use consistent terminology across all checkboxes in a group or form
- For error states, pair the checkbox with error message text near the checkbox or in the label
- Keep labels at the same hierarchy level; avoid mixing imperative and declarative language
- Provide additional context or help text below a checkbox group if the selection criteria are complex
- When Show icon=false, ensure the checkbox box itself remains clearly visible and distinct from the label
- Use icons consistently: if showing icon in one checkbox, show it in all related checkboxes for visual consistency
- For Mixed state, clarify the partial selection concept in surrounding text or group label
## Examples
 
**Basic form acceptance with icon and label:**
Color=Default, Type=Check, State=Default, Show Label=true, Show icon=true, Label="I accept the terms and conditions"
 
**Unchecked option in form:**
Color=Default, Type=Default, State=Default, Show Label=true, Show icon=true, Label="Subscribe to newsletter"
 
**Disabled checked option (already subscribed, cannot unsubscribe):**
Color=Disabled, Type=Check, State=Disabled, Show Label=true, Show icon=true, Label="Current subscription active"
 
**Partial selection in table (select all scenario):**
Color=Evergreen, Type=Mixed, State=Default, Show Label=false, Show icon=true
 
**Emphasized selection with color variant:**
Color=Indigo, Type=Check, State=Default, Show Label=true, Show icon=true, Label="Priority task"
 
**Hovered state for interaction affordance:**
Color=Default, Type=Default, State=Hovered, Show Label=true, Show icon=true, Label="Mark as favorite"
 
**Keyboard-focused checkbox:**
Color=Default, Type=Default, State=Focused, Show Label=true, Show icon=true, Label="Agree to data processing"
 
**Bulk action: disabled until items selected:**
Color=Disabled, Type=Default, State=Disabled, Show Label=false, Show icon=true
 
**Label-only checkbox (icon hidden):**
Color=Default, Type=Check, State=Default, Show Label=true, Show icon=false, Label="Confirm selection"
 
**Icon-only checkbox in dense layout (aria-label required):**
Color=Default, Type=Default, State=Default, Show Label=false, Show icon=true, aria-label="Include in report"
 
**Mixed state with Evergreen color for grouped selection:**
Color=Evergreen, Type=Mixed, State=Default, Show Label=true, Show icon=true, Label="Select all items"
 
**Warning-style checkbox (Indigo color for emphasis):**
Color=Indigo, Type=Check, State=Default, Show Label=true, Show icon=true, Label="I understand the risks"
 
**Hovered Evergreen checked:**
Color=Evergreen, Type=Check, State=Hovered, Show Label=true, Show icon=true, Label="Approved option"
 
**Focused Indigo mixed:**
Color=Indigo, Type=Mixed, State=Focused, Show Label=false, Show icon=true
 
**Pressed Default unchecked:**
Color=Default, Type=Default, State=Pressed, Show Label=true, Show icon=true, Label="Toggle option"
