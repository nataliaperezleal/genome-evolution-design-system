---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form / Selection"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-19"
tags: [form, selection, checkbox, input, binary-state, indeterminate-state]
---
 
# Checkbox — Genome Evolution Design System
 
**Component Type:** Form / Selection  
**Status:** Design  
**Version:** 1.0  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-19
 
## Quick Reference
 
| Property | Values |
|----------|--------|
| Color | Default, Evergreen, Indigo, Disabled |
| State | Default, Hovered, Pressed, Focused, Disabled |
| Type | Default (unchecked), Check (checked), Mixed (indeterminate) |
| Show Label | true, false |
| Label | Text content (editable) |
 
**Invalid Combinations:**
- Color=Disabled + State ≠ Disabled (Disabled color implies Disabled state; do not mix with Hovered, Pressed, or Focused)
- Type=Default without semantic understanding (Type=Default represents empty/unchecked state; not a selection indicator)
- Show Label=false without tooltip or accessible alternative context (checkbox must always have accessible text)
- Color=Indigo + State=Disabled (Indigo color is reserved for active/emphasized states; Disabled color overrides)
- State=Disabled + any non-Disabled color except when indicating a previously selected item that is now disabled
## Purpose
 
The Checkbox component is a binary or indeterminate selection control that enables users to independently select one or multiple options from a set. It supports three states: unchecked (Default), checked (Check), and indeterminate/partially checked (Mixed). This component is fundamental for forms, filters, bulk actions, and preference settings where multiple independent selections are required.
 
The component provides visual feedback through four distinct colors (Default, Evergreen, Indigo, Disabled) and five interactive states (Default, Hovered, Pressed, Focused, Disabled) to communicate availability, interactivity, and accessibility.
 
## When to Use
 
- Selecting multiple options from a list where all selections are independent
- Accepting terms, conditions, or privacy policies in forms
- Filtering content or search results by multiple criteria
- Bulk selection or deselection of items in tables, lists, or card grids
- Configuration preferences or feature toggles where multiple items can be enabled simultaneously
- Indicating partial selection or "select all" scenarios with the Mixed (indeterminate) state
- Forms requiring multiple checkboxes as part of a checkbox group
- Confirming agreement to multiple independent statements or conditions
## When NOT to Use
 
- Mutually exclusive options: Use Radio Button instead (only one option can be selected at a time)
- Real-time activation or deactivation of features: Use Toggle/Switch instead (implies immediate action)
- Navigation between different views or pages: Use Tabs or navigation links instead
- Boolean toggles that control system behavior: Use Toggle/Switch for clearer intent
- Single confirmation choice: Consider a confirmation dialog or Radio Button
- Dependent selections (where selecting one option disables others): Use a different selection pattern or add logic validation
- Visual-only indicators: If no user interaction is needed, use an icon or status indicator instead
## Anatomy
 
**Parts of the component:**
- **Checkbox Box** (Required): The interactive container that displays the checkbox state. Contains the check/mixed icon when selected. Responds to all user interactions (hover, press, focus).
- **Check Icon** (Conditional): Appears when Type=Check. Uses the "check" icon from the Genome icon system.
- **Mixed Icon** (Conditional): Appears when Type=Mixed. Uses the "remove" (dash) icon from the Genome icon system to indicate indeterminate/partial selection.
- **Label** (Conditional): Optional text label positioned to the right of the checkbox box. Controlled by Show Label property. Communicates the option being selected.
- **Focus Ring** (Conditional): A subtle circular focus indicator that appears when State=Focused. Supports keyboard navigation and accessibility.
**Dimensions:**
- Checkbox box width: 16px
- Checkbox box height: 16px
- Label gap: 8px (spacing between checkbox box and label text)
- Total component width: Variable (depends on label length)
- Total component height: 20px (checkbox 16px + vertical padding)
- Label font size: 10px
- Label font family: Inter
- Padding horizontal: 4px (on sides)
- Padding vertical: 2px (top/bottom)
## Variants
 
### Color (4 variants)
Color controls the visual emphasis and semantic meaning of the checkbox within its context.
 
- **Default:** Standard checkbox appearance. Used for regular form inputs and most selection scenarios. Indicates a neutral, available, and interactive element.
- **Evergreen:** A branded color variant emphasizing selected or affirmative states. Commonly used for confirmed selections, positive actions, or successful checks in bulk operations.
- **Indigo:** A distinctive color variant for highlighted or emphasized selections. Use when the checkbox needs visual prominence or differentiation from other form elements.
- **Disabled:** Visual indication that the checkbox cannot be interacted with. Always paired with State=Disabled. Communicates unavailability due to permissions, prerequisites, or system constraints.
### State (5 variants)
State communicates the interactive feedback and accessibility focus of the checkbox.
 
- **Default:** Base state. The checkbox is available and ready for interaction. No special visual feedback is applied.
- **Hovered:** Visual feedback when the mouse hovers over the checkbox. Provides affordance that the element is interactive. Background or border changes slightly.
- **Pressed:** Visual feedback when the checkbox is actively clicked/pressed. Indicates immediate user input recognition.
- **Focused:** Visual feedback when the checkbox receives keyboard focus (via Tab key). Shows a subtle focus ring around the checkbox box. Essential for keyboard navigation accessibility.
- **Disabled:** Communicates that the checkbox is not interactive. Always used with Color=Disabled. The element is visually muted and unresponsive to user input.
### Type (3 variants)
Type represents the selection state of the checkbox from a data/semantic perspective.
 
- **Default:** Unchecked state. The option is not selected. No icon appears inside the checkbox box.
- **Check:** Checked state. The option is selected. A checkmark icon appears inside the checkbox box.
- **Mixed:** Indeterminate or partially checked state. Used when representing a group selection where some (but not all) sub-items are checked. A dash/minus icon appears inside the checkbox box.
## Token Mapping
 
### Color States (Default State)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | Color.Primary.Default | #FFFFFF | Unchecked background |
| Box Border | Color.Border.Default | #CCCCCC | 2px border |
| Icon Color | Color.Text.Primary | #000000 | Check/mixed icon |
| Label Text | Color.Text.Primary | #000000 | Label text color |
 
### Evergreen Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Checked) | Color.Brand.Primary.500 | #339947 | Evergreen primary |
| Icon Color | Color.Text.Inverse | #FFFFFF | Check icon on colored bg |
| Box Border | Color.Brand.Primary.500 | #339947 | Matches background when checked |
 
### Indigo Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Checked) | Color.Brand.Secondary.500 | [Indigo hex] | Indigo/secondary brand color |
| Icon Color | Color.Text.Inverse | #FFFFFF | Check icon contrast |
| Box Border | Color.Brand.Secondary.500 | [Indigo hex] | Matches background |
 
### Disabled Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | Color.Background.Disabled | #F5F5F5 | Neutral disabled background |
| Box Border | Color.Border.Disabled | #DDDDDD | Subtle disabled border |
| Icon Color | Color.Text.Disabled | #999999 | Muted icon |
| Label Text | Color.Text.Disabled | #999999 | Disabled text |
 
### Interactive States (Default Color)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Hovered Border | Color.Border.Hover | #666666 | Darker on hover |
| Hovered Background | Color.Background.Hover | #F9F9F9 | Subtle background shift |
| Focus Ring | Color.Focus.Ring | #0000FF | Keyboard focus indicator |
| Pressed Background | Color.Background.Pressed | #F0F0F0 | Slightly darker when pressed |
 
## Semantics
 
- **Selection Independence:** Each checkbox represents an independent, binary choice. Selecting one checkbox does not affect others (unless explicitly configured in parent logic).
- **Ternary Logic:** The Mixed (indeterminate) type extends binary semantics to include partial or grouped selections, commonly used in "select all" patterns or multi-level trees.
- **Color as Affordance:** Color choice signals semantic intent: Default (neutral), Evergreen (affirmative/positive), Indigo (emphasis/highlight), Disabled (unavailable/locked).
- **State as Feedback:** State communicates interactivity feedback (hover, press) and accessibility needs (focused), not the selection state itself. Type communicates the actual selection state.
- **Label Association:** The optional label is semantically linked to the checkbox and should describe the option being selected. When label is hidden (Show Label=false), a tooltip or aria-label must provide accessible text.
- **Form Integration:** Checkboxes typically appear as groups in forms. Each checkbox contributes an independent value to a multi-select form field.
## Interaction
 
- **Click/Tap:** Clicking the checkbox or its label toggles the selection state: Default ↔ Check, or cycles through Default → Check → Default.
- **Hover:** Visual feedback via border/background change when the mouse hovers over the checkbox. Indicates interactivity.
- **Press:** Immediate visual feedback when the checkbox is being clicked/pressed down.
- **Focus (Keyboard):** When Tab key navigates to the checkbox, a focus ring appears around the box. Indicates the element is ready for keyboard interaction.
- **Space Bar:** When focused via keyboard, pressing Space toggles the checkbox state.
- **Label Click:** Clicking the label also toggles the checkbox state (the label should be wrapped in an associated <label> element).
- **Disabled Interaction:** Disabled checkboxes do not respond to any interaction. Pointer events are not triggered; keyboard navigation skips over disabled checkboxes.
- **State Transitions:** Default → Hovered (on hover) → Pressed (on click) → Default/Checked (after release, based on toggled state).
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
- Checkbox groups should be wrapped in a `<fieldset>` with a `<legend>` describing the group purpose
**Contrast:**
- Checkbox border must have a contrast ratio of at least 3:1 against the background
- Checked icon must have a contrast ratio of at least 3:1 against the checkbox background
- Label text must have a contrast ratio of at least 4.5:1 against the background for normal text
- Focus ring must have a contrast ratio of at least 3:1 against the background
- Disabled state must still maintain 3:1 contrast for the box outline and icon
## Content Guidelines
 
- Keep label text concise and descriptive, typically 2-5 words
- Use sentence case for labels, not all caps
- Begin with action or benefit when possible: "Subscribe to updates" instead of "Updates"
- Avoid technical jargon; use language familiar to the target user
- Ensure labels are scannable and unambiguous
- For grouped checkboxes, use a fieldset legend to describe the group's purpose
- Avoid double negatives in labels: prefer "Enable notifications" over "Do not disable notifications"
- When labels are hidden (Show Label=false), provide a tooltip or aria-label with full descriptive text
- Use consistent terminology across all checkboxes in a group or form
- For error states, pair the checkbox with error message text near the checkbox or in the label
- Keep labels at the same hierarchy level; avoid mixing imperative and declarative language
- Provide additional context or help text below a checkbox group if the selection criteria are complex
## Examples
 
**Basic form acceptance:**
Color=Default, Type=Check, State=Default, Show Label=true, Label="I accept the terms and conditions"
 
**Unchecked option in form:**
Color=Default, Type=Default, State=Default, Show Label=true, Label="Subscribe to newsletter"
 
**Disabled checked option (already subscribed, cannot unsubscribe):**
Color=Disabled, Type=Check, State=Disabled, Show Label=true, Label="Current subscription active"
 
**Partial selection in table (select all scenario):**
Color=Evergreen, Type=Mixed, State=Default, Show Label=false
 
**Emphasized selection with color variant:**
Color=Indigo, Type=Check, State=Default, Show Label=true, Label="Priority task"
 
**Hovered state for interaction affordance:**
Color=Default, Type=Default, State=Hovered, Show Label=true, Label="Mark as favorite"
 
**Keyboard-focused checkbox:**
Color=Default, Type=Default, State=Focused, Show Label=true, Label="Agree to data processing"
 
**Bulk action: disabled until items selected:**
Color=Disabled, Type=Default, State=Disabled, Show Label=false (shown in disabled state until user selects items)
