---
component: "Clear button"
system: "Genome Evolution Design System"
type: "Button / Action"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-20"
tags: [button, action, clear, ghost, tertiary, navigation, icon-button, minimal]
---
 
# Clear button — Genome Evolution Design System
 
**Component Type:** Button / Action  
**Style:** Ghost/Clear (borderless, no background)  
**Status:** Design  
**Version:** 1.0  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-20
 
## Quick Reference
 
| Property | Values |
|----------|--------|
| Color | Default, Evergreen, Indigo |
| Type | Default, Information, Success, Danger, Warning |
| State | Default, Hovered, Pressed, Focused, Disabled |
| Corner | Default (4px radius), Rounded (full pill) |
| Text | Editable label text |
| Show leading icon | true, false |
| Leading icon | Any icon component (default: arrow-left) |
| Show trailing icon | true, false |
| Trailing icon | Any icon component (default: arrow-right) |
 
**Invalid Combinations:**
- Color + Type semantic both active with non-Default values (Type semantic overrides Color)
- Type != Default + Color != Default simultaneously (use only one color system at a time)
- State=Disabled + Show leading/trailing icon=true without proper opacity reduction
- Corner=Rounded in narrow layouts (pill shape may distort)
**Total Variants:** 150+ (3 Colors × 5 Types × 5 States × 2 Corners × (3 icon configs))
 
## Purpose
 
The Clear button is a lightweight, borderless action button with minimal visual weight. It follows a ghost/clear style pattern, rendering text without background fill or border in default state. This component serves as secondary or tertiary action, perfect for navigation, supplementary actions, and icon-based interactions where a filled or outlined button would dominate the visual hierarchy.
 
Clear buttons support semantic types (Information, Success, Danger, Warning) to communicate action intent, and flexible icon slots (leading and trailing) for directional, informational, or status-based icon combinations. The component prioritizes content readability by letting action text and icons speak for themselves without visual containers.
 
## When to Use
 
- Secondary or tertiary actions that should not compete with primary buttons
- Navigation controls (back, next, skip, more) with optional directional icons
- Inline actions within content (edit, delete, reply) where minimal visual weight is needed
- Icon-only buttons for common actions (refresh, settings, close)
- Breadcrumb navigation or sequential actions
- Help/info links that provide additional context without taking action focus
- Confirmation or alert-related actions with semantic type (Danger for destructive, Success for positive)
- Mobile interfaces where button density requires minimal spacing and visual footprint
- Tertiary calls-to-action in cards, modals, or dense layouts
- Dismissible elements or "learn more" links that blend into content flow
## When NOT to Use
 
- Primary action on a screen (use Button filled for main call-to-action)
- Contexts requiring high visual contrast to indicate interactivity (use Outlined or Filled Button)
- Very low contrast backgrounds where text-only buttons may be lost (use Button with background)
- Situations where button distinctiveness from other links is critical
- Forms where all action buttons should have consistent visual weight (use consistent button style)
- Accessibility-critical interfaces where icon-only buttons lack sufficient context
- Users unfamiliar with interface conventions who might miss text-only actions
- Print media or exported documents (no interactivity context)
## Anatomy
 
**Parts of the component:**
- **Text Label** (Required): Descriptive action text. Communicates button purpose. Typically 12px Open Sans SemiBold typography. Editable via Text property.
- **Leading Icon Slot** (Conditional): Optional icon positioned left/start of text. Controlled by Show leading icon (boolean) and Leading icon (component swap). Default is arrow-left. Can be hidden or swapped to any system icon.
- **Trailing Icon Slot** (Conditional): Optional icon positioned right/end of text. Controlled by Show trailing icon (boolean) and Trailing icon (component swap). Default is arrow-right. Can be hidden or swapped to any system icon.
- **Button Container** (Implicit): Transparent background element that defines click target and state styling. No visible fill or stroke in Default state.
- **Focus Ring** (Conditional): Subtle focus indicator appears on State=Focused. Supports keyboard navigation and accessibility. Color depends on Color property.
- **State Background** (Conditional): Background fill appears on State=Hovered or State=Pressed. Subtle color change to indicate interactivity feedback. Disappears in Default state.
**Dimensions:**
- Text label: 12px font size, 16px line height, SemiBold weight
- Icon size: 16x16px (typical)
- Padding horizontal: 8px
- Padding vertical: 4px
- Gap between elements: 8px (leading icon → text → trailing icon)
- Corner Default: 4px border radius
- Corner Rounded: 100% (full pill shape)
- Minimum touch target: 44x44px recommended
- Height in Default state: 20px (text 12px + padding 4px × 2)
## Variants
 
### Color (3 variants)
Color defines brand identity and primary visual emphasis. Used for branding, consistency, and visual hierarchy.
 
- **Default:** Neutral text color for standard actions. Uses primary text color. Best for generic, non-branded actions. Typical color: #000000 (or system text color).
- **Evergreen:** Brand-aligned green color. Communicates positive, affirmative, or success-oriented actions. Aligns with the Evergreen brand color (approx. #339947 or brand primary). Used for confirmations, subscriptions, or positive outcomes.
- **Indigo:** Brand-aligned secondary color. Communicates emphasis, highlighting, or secondary brand identity. Uses Indigo/secondary brand color (approx. #5856D6 or brand secondary). Used for featured, spotlighted, or branded actions.
**Note:** When Type is set to a semantic value (Information, Success, Danger, Warning), the Color property should typically remain Default or be harmonized with the semantic color. Mixing distinct Color and Type semantic meanings is discouraged.
 
### Type (5 variants)
Type communicates semantic intent and action consequence. Overrides or works in harmony with Color.
 
- **Default:** No semantic overlay. Text inherits from Color property (Default, Evergreen, or Indigo). Generic actions without special meaning or consequence.
- **Information:** Communicates informational or help-related action. Text color shifts to information color (typically blue). Used for "Learn more", help links, or educational actions.
- **Success:** Communicates successful, positive, or confirmatory action. Text color shifts to success color (typically green). Used for confirmations, completions, or affirmative actions.
- **Danger:** Communicates destructive, risky, or negative action. Text color shifts to danger/error color (typically red). Used for delete, cancel, or warning-level actions.
- **Warning:** Communicates caution or attention-required action. Text color shifts to warning color (typically orange/amber). Used for alerts, confirmations, or remedial actions.
### State (5 variants)
State communicates interaction feedback and accessibility focus.
 
- **Default:** Base state. No background fill or stroke. Text only. No hover effects applied. Ready for interaction.
- **Hovered:** Mouse hovers over button. Subtle background color appears (typically 5-10% tint of text color or theme color). Indicates affordance and interactivity. Border may appear faintly.
- **Pressed:** Mouse/touch actively clicks button. Background color deepens or changes to indicate active press state. Visual feedback confirms interaction is being registered.
- **Focused:** Keyboard focus via Tab key. Focus ring appears around button. Communicates which element is keyboard-active. Essential for accessibility and keyboard navigation.
- **Disabled:** Button is not interactive. Text color fades (typically 50% opacity or disabled text color). Background never appears even on hover. Pointer events are disabled. Communicates unavailability.
### Corner (2 variants)
Corner defines border radius and shape of the button.
 
- **Default:** 4px border radius. Standard, slightly rounded rectangle shape. Professional, neutral appearance. Suitable for most contexts and layouts.
- **Rounded:** 100% border radius (full pill shape). Fully rounded pill-shaped button. Modern, softer appearance. Best for standalone or emphasized buttons. May cause distortion in very narrow layouts.
## Token Mapping
 
### Color States (Type=Default, State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Text Color (Default) | text/primary | #000000 | Primary text color |
| Icon Color (Default) | icon/primary | #000000 | Primary icon color |
| Background | — | transparent | No fill in Default state |
| Border | — | transparent | No border in Default state |
 
### Evergreen Color States (Type=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Text Color | color/brand/primary/500 | #339947 | Evergreen brand color |
| Icon Color | color/brand/primary/500 | #339947 | Matches text |
| Hovered Background | color/brand/primary/100 | [light green] | Subtle background |
| Focused Ring | color/brand/primary/500 | #339947 | Focus indicator |
 
### Indigo Color States (Type=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Text Color | color/brand/secondary/500 | #5856D6 | Indigo brand color |
| Icon Color | color/brand/secondary/500 | #5856D6 | Matches text |
| Hovered Background | color/brand/secondary/100 | [light indigo] | Subtle background |
| Focused Ring | color/brand/secondary/500 | #5856D6 | Focus indicator |
 
### Semantic Type States (Color=Default)
 
| Type | Text Color Token | Value | Hover Background | Notes |
|------|-----------------|-------|------------------|-------|
| Information | color/information/500 | #0066CC | color/information/100 | Informational blue |
| Success | color/success/500 | #28A745 | color/success/100 | Success green |
| Danger | color/danger/500 | #DC3545 | color/danger/100 | Danger red |
| Warning | color/warning/500 | #FFC107 | color/warning/100 | Warning amber |
 
### Disabled State
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Text Color | color/text/disabled | #999999 | Muted/disabled text |
| Icon Color | color/icon/disabled | #999999 | Muted/disabled icon |
| Opacity | — | 50% or lower | Reduced prominence |
| Background | — | transparent | Never appears |
 
## Semantics
 
- **Tertiary Priority:** Clear buttons represent tertiary actions. Primary buttons should use filled styles. Secondary actions may use outlined. Clear buttons should never overshadow primary calls-to-action.
- **Ghost/Borderless Pattern:** The clear button follows the "ghost" or "outlined-minimal" pattern. No background fill or visible border in default state preserves content primacy.
- **Color vs. Type Precedence:** When both Color and Type are set to non-Default values, Type semantic meaning should take visual priority. Type communicates intent; Color communicates brand affiliation.
- **Icon as Clarification:** Leading and trailing icons serve as visual clarifications or directional indicators, not as standalone meaning. Text should remain primary; icons supplement.
- **State as Feedback:** State communicates interaction feedback (hover, press, focus), not selection state. Clear buttons are not "selected" or "active" in the UI state sense; they communicate action readiness.
- **Accessibility Primacy:** In icon-only configurations (Show leading/trailing icons only, no text), aria-label or equivalent accessible text must provide full action description.
- **Leading/Trailing Positioning:** Icons use semantic positioning terminology: "leading" (left/start) and "trailing" (right/end) to support both LTR and RTL layouts.
## Interaction
 
- **Click/Tap:** Clicking the button triggers its associated action. No visual state change persists after release (unlike toggle buttons).
- **Hover:** Mouse hovers over button. Subtle background color appears (5-10% tint). Text and icon maintain their base colors. Communicates affordance.
- **Press:** Mouse/touch held down. Background color deepens or shifts. Provides immediate feedback that action is being registered.
- **Focus (Keyboard):** Tab key navigates to button. Focus ring appears around button. Ready for Space or Enter key activation.
- **Space Key:** When focused, Space bar triggers the button action (activates click).
- **Enter Key:** When focused, Enter key may trigger the button action (browser/framework dependent; Space is more standard for buttons).
- **Icon Swap:** Leading icon and Trailing icon properties support component swaps. Changing the icon instance does not affect button behavior; icons are visual only.
- **Text Edit:** Text property allows dynamic label changes. Label updates immediately without state reset.
- **State Transitions:** Default → Hovered (mouse over) → Pressed (mouse down) → Default (mouse up/click completes).
- **Disabled Interaction:** Disabled buttons do not respond to any interaction. Pointer events are blocked. Keyboard navigation may skip disabled buttons depending on implementation.
## Accessibility
 
**HTML Structure:**
- Render as `<button>` element with type="button" (not `<a>` unless it's navigation)
- If text is empty and only icons show, use aria-label to provide button purpose: `<button aria-label="Go back">`
- For icon-only buttons, label must be accessible: `aria-label="Delete item"` or `aria-labelledby`
- Use `<button disabled>` and `aria-disabled="true"` for disabled state
- Ensure button is not nested inside `<a>` or other interactive elements
**Keyboard:**
- Tab key navigates to button
- Space bar activates button when focused
- Enter key may also activate (depending on context)
- Shift+Tab navigates backward
- Do not use arrow keys for single buttons (reserve for button groups)
- Button should be reachable via Tab without excessive tab stops
**Screen Reader:**
- Button announces its label text and action: "Clear button, button" or specific action: "Delete item, button"
- Icon-only buttons must announce fully: "Go back, button" (via aria-label)
- Type semantic should be conveyed if not obvious from text: "Delete item, button" (text itself indicates danger)
- Disabled state should announce: "Clear button, button, disabled"
- Focused state should be indicated by focus ring and screen reader focus announcements
**Contrast:**
- Text and icon must have 4.5:1 contrast ratio against background
- Focus ring must have 3:1 contrast ratio against background
- Hovered/pressed background must maintain readable text contrast (text may not lighten excessively)
- Disabled text must still meet 3:1 minimum contrast (may be reduced due to disabled convention)
**Mobile/Touch:**
- Minimum touch target: 44x44px (WCAG recommendation)
- Button may need padding adjustment for adequate touch size
- Consider icon size on small screens (minimum 16x16px, ideally 24x24px on mobile)
## Content Guidelines
 
- Keep button text concise: 1-3 words typically
- Use action verbs when possible: "Submit", "Delete", "Learn more", "Go back"
- Use sentence case (not all caps): "Save changes" not "SAVE CHANGES"
- Be specific about action outcome: "Submit form" better than "Submit"
- Avoid generic labels: "Ok" or "Click here" are weak; prefer "Confirm order" or "Proceed"
- For destructive actions, use clear language: "Delete permanently" not just "Delete"
- Avoid button-specific language: "Click here" is redundant; just state the action
- For icon-only buttons, ensure icon meaning is universally understood (← for back, ✕ for close, ⚙ for settings)
- Keep text consistent across similar buttons in the UI
- Use parallel language in button groups: "Save" and "Cancel" (not "Save" and "Don't save")
- For navigation buttons, consider direction clarity: "Next" (→) or "Previous" (←)
- Ensure semantic Type language is clear: Danger buttons should say "Delete" not "Proceed"; Success buttons should say "Confirm" or "Done"
- For help/info buttons, use "Learn more" or "Help" rather than generic "More"
- Always provide accessible text for icon-only buttons via aria-label or visible label
- Use "leading" and "trailing" terminology when describing icon positions in documentation
## Examples
 
**Back navigation button with leading icon:**
Color=Default, Type=Default, State=Default, Corner=Default, Text="Back", Show leading icon=true, Leading icon=arrow-left, Show trailing icon=false
 
**Brand-colored action:**
Color=Indigo, Type=Default, State=Default, Corner=Default, Text="Discover", Show leading icon=false, Show trailing icon=false
 
**Forward navigation with trailing arrow:**
Color=Default, Type=Default, State=Default, Corner=Default, Text="Next", Show leading icon=false, Show trailing icon=true, Trailing icon=arrow-right
 
**Pill-shaped green button:**
Color=Evergreen, Type=Default, State=Default, Corner=Rounded, Text="Subscribe", Show leading icon=false, Show trailing icon=false
 
**Delete action with danger semantic:**
Color=Default, Type=Danger, State=Default, Corner=Default, Text="Delete", Show leading icon=false, Show trailing icon=false
 
**Help/information link with leading icon:**
Color=Default, Type=Information, State=Default, Corner=Default, Text="Learn more", Show leading icon=true, Leading icon=info, Show trailing icon=false
 
**Success confirmation with trailing icon:**
Color=Default, Type=Success, State=Default, Corner=Default, Text="Confirmed", Show leading icon=false, Show trailing icon=true, Trailing icon=check
 
**Warning/alert action with trailing icon:**
Color=Default, Type=Warning, State=Default, Corner=Default, Text="Review", Show leading icon=false, Show trailing icon=true, Trailing icon=alert-circle
 
**Icon-only button (close/dismiss):**
Color=Default, Type=Default, State=Default, Corner=Default, Text="", Show leading icon=false, Show trailing icon=true, Trailing icon=close, aria-label="Close dialog"
 
**Disabled tertiary action:**
Color=Default, Type=Default, State=Disabled, Corner=Default, Text="Save", Show leading icon=false, Show trailing icon=false
 
**Hovered brand button:**
Color=Indigo, Type=Default, State=Hovered, Corner=Default, Text="Learn more", Show leading icon=false, Show trailing icon=true, Trailing icon=arrow-right
 
**Focused keyboard navigation:**
Color=Default, Type=Default, State=Focused, Corner=Default, Text="Continue", Show leading icon=false, Show trailing icon=false
