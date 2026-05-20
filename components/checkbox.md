---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form / Selection"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-20"
tags: [form, selection, checkbox, input, binary-state, indeterminate-state, icon-control]
---
 
# Checkbox — Genome Evolution Design System
 
**Component Type:** Form / Selection  
**Status:** Design  
**Version:** 1.0  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-20
 
## Quick Reference
 
| Property | Values |
|----------|--------|
| Color | Default, Evergreen, Indigo, Disabled |
| State | Default, Hovered, Pressed, Focused, Disabled |
| Type | Default (unchecked), Check (checked), Mixed (indeterminate) |
| Show Label | true, false |
| Label | Text content (editable) |
| Show icon | true, false |
 
**Invalid Combinations:**
- Color=Disabled + State ≠ Disabled (Disabled color implies Disabled state; do not mix with Hovered, Pressed, or Focused)
- Type=Default without semantic understanding (Type=Default represents empty/unchecked state; not a selection indicator)
- Show Label=false + Show icon=false simultaneously (at least one must be true for accessibility)
- Color=Indigo + State=Disabled (Indigo color is reserved for active/emphasized states; Disabled color overrides)
- State=Disabled + any non-Disabled color except when indicating a previously selected item that is now disabled
**Total Variants:** 180+ (4 Colors × 5 States × 3 Types × 2 Label toggles × 2 Icon toggles = 240 max combinations)
 
## Purpose
 
The Checkbox component is a binary or indeterminate selection control that enables users to independently select one or multiple options from a set. It supports three states: unchecked (Default), checked (Check), and indeterminate/partially checked (Mixed). This component is fundamental for forms, filters, bulk actions, and preference settings where multiple independent selections are required.
 
The component provides visual feedback through four distinct colors (Default, Evergreen, Indigo, Disabled) and five interactive states (Default, Hovered, Pressed, Focused, Disabled) to communicate availability, interactivity, and accessibility. A flexible Show icon property allows designers to control icon visibility independently of the label, enabling icon-only, label-only, or combined configurations.
 
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
- When the checkbox meaning would be unclear without both label and icon (maintain Show Label=true)
## Anatomy
 
**Parts of the component:**
- **Checkbox Box** (Required): The interactive container that displays the checkbox state. Contains the check/mixed icon when selected. Responds to all user interactions (hover, press, focus). Typical dimensions: 16x16px or 20x20px.
- **Check Icon** (Conditional): Appears when Type=Check and Show icon=true. Uses the "check" icon from the Genome icon system. Communicates selected/checked state.
- **Mixed Icon** (Conditional): Appears when Type=Mixed and Show icon=true. Uses the "remove" (dash) icon from the Genome icon system to indicate indeterminate/partial selection.
- **Label** (Conditional): Optional text label positioned to the right of the checkbox box. Controlled by Show Label property. Communicates the option being selected. Font: Open Sans, 10px, Regular.
- **Focus Ring** (Conditional): A subtle circular focus indicator that appears when State=Focused. Supports keyboard navigation and accessibility. Typically a soft outline or ellipse overlay.
- **Decorative Icon** (Optional): A "bizagi-lines" instance appears on the right side of label in certain implementations (visible in variants). May serve as visual separator or design motif.
**Dimensions:**
- Checkbox box width: 16px - 20px
- Checkbox box height: 16px - 20px
- Label gap: 8px (spacing between checkbox box and label text)
- Total component width: Variable (depends on label length)
- Total component height: 20px - 24px (checkbox + vertical padding)
- Label font size: 10px
- Label font family: Open Sans
- Label font weight: Regular
- Padding horizontal: 0px (checkbox itself; may vary in container)
- Padding vertical: 0px (checkbox itself; may vary in container)
## Variants
 
### Color (4 variants)
Color controls the visual emphasis and semantic meaning of the checkbox within its context.
 
- **Default:** Standard checkbox appearance. Used for regular form inputs and most selection scenarios. Indicates a neutral, available, and interactive element. Text and icon appear in primary/neutral color.
- **Evergreen:** A branded color variant emphasizing selected or affirmative states. Commonly used for confirmed selections, positive actions, or successful checks in bulk operations. Uses the Evergreen brand color (#339947 or similar).
- **Indigo:** A distinctive color variant for highlighted or emphasized selections. Use when the checkbox needs visual prominence or differentiation from other form elements. Uses the Indigo/secondary brand color.
- **Disabled:** Visual indication that the checkbox cannot be interacted with. Always paired with State=Disabled. Communicates unavailability due to permissions, prerequisites, or system constraints. Text and icon appear in disabled/muted color.
### State (5 variants)
State communicates the interactive feedback and accessibility focus of the checkbox.
 
- **Default:** Base state. The checkbox is available and ready for interaction. No special visual feedback is applied. Focus ring is absent.
- **Hovered:** Visual feedback when the mouse hovers over the checkbox. Provides affordance that the element is interactive. A subtle background or border change appears (typically a soft ellipse or rounded rectangle background). Color intensity may increase slightly.
- **Pressed:** Visual feedback when the checkbox is actively clicked/pressed. Indicates immediate user input recognition. Background may darken or intensify further than hovered state.
- **Focused:** Visual feedback when the checkbox receives keyboard focus (via Tab key). Shows a subtle focus ring (ellipse or rounded box outline) around the checkbox box. Essential for keyboard navigation accessibility. The ring may be the same color as the checkbox color (Default, Evergreen, or Indigo).
- **Disabled:** Communicates that the checkbox is not interactive. Always used with Color=Disabled. The element is visually muted and unresponsive to user input. Text and icons fade (reduced opacity or muted color). Hover/press states do not apply.
### Type (3 variants)
Type represents the selection state of the checkbox from a data/semantic perspective.
 
- **Default:** Unchecked state. The option is not selected. No icon appears inside the checkbox box (when Show icon=true, icon space is empty).
- **Check:** Checked state. The option is selected. A checkmark icon appears inside the checkbox box (when Show icon=true).
- **Mixed:** Indeterminate or partially checked state. Used when representing a group selection where some (but not all) sub-items are checked. A dash/minus icon appears inside the checkbox box (when Show icon=true).
## Token Mapping
 
### Color States (Default State, Type=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | — | transparent | No fill in default |
| Box Border | color/border/default | #CCCCCC | 1-2px border |
| Text Color | color/text/primary | #000000 | Primary text |
| Icon Container | — | visible when Show icon=true | Icon slot |
 
### Evergreen Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Type=Check) | color/brand/primary/500 | #339947 | Evergreen primary |
| Text Color | color/brand/primary/500 | #339947 | Matches brand |
| Icon Color | color/text/inverse | #FFFFFF | Check icon on colored bg |
| Box Border | color/brand/primary/500 | #339947 | Matches background |
 
### Indigo Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background (Type=Check) | color/brand/secondary/500 | [Indigo hex] | Indigo/secondary brand |
| Text Color | color/brand/secondary/500 | [Indigo hex] | Matches brand |
| Icon Color | color/text/inverse | #FFFFFF | Check icon contrast |
| Box Border | color/brand/secondary/500 | [Indigo hex] | Matches background |
 
### Disabled Color States
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Box Background | color/background/disabled | #F5F5F5 | Neutral disabled bg |
| Box Border | color/border/disabled | #DDDDDD | Subtle border |
| Text Color | color/text/disabled | #999999 | Muted text |
| Icon Color | color/icon/disabled | #999999 | Muted icon |
 
### Interactive States (Default Color)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Hovered Ring | — | soft ellipse/background | Subtle feedback |
| Focused Ring | color/focus/ring | varies by Color | Keyboard indicator |
| Pressed Ring | — | darker than hovered | Deeper feedback |
 
## Semantics
 
- **Selection Independence:** Each checkbox represents an independent, binary choice. Selecting one checkbox does not affect others (unless explicitly configured in parent logic).
- **Ternary Logic:** The Mixed (indeterminate) type extends binary semantics to include partial or grouped selections, commonly used in "select all" patterns or multi-level trees.
- **Color as Affordance:** Color choice signals semantic intent: Default (neutral), Evergreen (affirmative/positive), Indigo (emphasis/highlight), Disabled (unavailable/locked).
- **State as Feedback:** State communicates interactivity feedback (hover, press, focus), not the selection state itself. Type communicates the actual selection state.
- **Label Association:** The optional label is semantically linked to the checkbox and should describe the option being selected. When Show Label=false, a tooltip or aria-label must provide accessible text.
- **Icon Visibility Control:** Show icon property allows flexible presentation: when false, no icon slot is rendered, reducing visual complexity. Label alone can communicate selection state in certain contexts.
- **Form Integration:** Checkboxes typically appear as groups in forms. Each checkbox contributes an independent value to a multi-select form field.
## Interaction
 
- **Click/Tap:** Clicking the checkbox or its label toggles the selection state: Default ↔ Check, or cycles through Default → Check → Default (or Default → Check → Mixed → Default if mixed state is used).
- **Hover:** Visual feedback via background/ring change when the mouse hovers over the checkbox. Indicates interactivity. The feedback appears as a subtle colored ring or background layer.
- **Press:** Immediate visual feedback when the checkbox is being clicked/pressed down. Background or ring intensifies.
- **Focus (Keyboard):** When Tab key navigates to the checkbox, a focus ring appears around the box. Indicates the element is ready for keyboard interaction.
- **Space Bar:** When focused via keyboard, pressing Space toggles the checkbox state.
- **Label Click:** Clicking the label also toggles the checkbox state (the label should be wrapped in an associated `<label>` element).
- **Icon Visibility:** The Show icon property controls whether the icon slot is visible. When false, no icon space is reserved; label text or other content directly follows the checkbox box.
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
- When Show icon=false, screen reader announcement should not reference icon (only label)
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
