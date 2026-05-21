---
component: "Button"
system: "Genome Evolution Design System"
type: "Action / Control"
status: "Design"
version: "1.1"
owner: "UX Design Team"
last_updated: "2026-05-21"
tags: [button, action, control, primary, secondary, semantic, size, icon, interactive]
---
 
# Button — Genome Evolution Design System
 
**Component Type:** Action / Control  
**Status:** Design  
**Version:** 1.1  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-21
 
## Quick Reference
 
| Property | Values | Default |
|----------|--------|---------|
| Type | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Primary |
| Color | Evergreen, Indigo, Default | Evergreen (Primary/Secondary), Default (others) |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| Corner | Default, Rounded | Default |
| Size | MD, SM | MD |
| Label | Text content (editable) | "Button" |
| Show leading icon | true, false | false |
| Leading icon | Icon component | check |
| Show trailing icon | true, false | false |
| Trailing icon | Icon component | close |
 
**Critical Color ↔ Type ↔ State Restrictions:**
- Primary/Secondary: require Color=Evergreen or Indigo (Disabled state uses Color=Default)
- Tertiary: Color=Default only, no Disabled state
- Danger/Information/Success/Warning: Color=Default only, no Disabled state
**Total Variants:** 350+ (7 Types × 3 Colors × 5 States × 2 Corners × 2 Sizes × (2 icon configs))
 
## Purpose
 
The Button component is a system button for triggering immediate actions. It communicates user actions and consequences through a hierarchical system combining Type (priority level + semantic meaning) and visual styling. The component supports 7 types (Primary/Secondary/Tertiary priority levels plus 4 semantic types: Danger, Information, Success, Warning), 3 color variants for brand identity, 5 interaction states, 2 size options, and flexible icon support.
 
Buttons serve as the primary interactive affordance for user actions in forms, dialogs, cards, and navigation contexts. The hierarchical type system ensures clear visual priority: Primary buttons dominate, Secondary buttons support, Tertiary buttons provide subtle actions, and semantic types (Danger, Information, Success, Warning) communicate action consequences.
 
## When to Use
 
- Primary action on a page or form (submit, create, save)
- Confirming important decisions (delete, publish, send)
- Initiating workflows or processes (start, begin, continue)
- Secondary or supporting actions that don't compete with primary (cancel, skip, more)
- Tertiary, minimal-visual-weight actions in dense layouts
- Semantic actions communicating consequence (delete=danger, confirm=success)
- Call-to-action buttons in cards, modals, or marketing contexts
- Form submissions or input validation triggers
- Navigation actions with clear intent
- Undo, redo, or correction actions
- Icon-only buttons for common actions (search, filter, settings)
- Size-flexible buttons adapting to different contexts (large buttons in modals, small buttons in toolbars)
## When NOT to Use
 
- Navigation between pages or views (use Link or Navigation)
- Mutually exclusive options (use Radio Button or Segmented Control)
- Persistent selection state (use Checkbox or Toggle)
- Text content that flows as part of prose (use Link within text)
- Decorative or non-functional elements
- When contrast is insufficient (always ensure adequate contrast)
- In forms without clear labeling (button text must be self-explanatory)
- Multiple buttons without clear hierarchy or visual distinction
- Standalone without semantic purpose or clear action consequence
- Mobile contexts where space is limited and could use alternative UX
## Anatomy
 
**Parts of the component:**
- **Text Label** (Required): Descriptive action text. Communicates button purpose. Font: button/md (14px SemiBold) for MD, button/sm (12px SemiBold) for SM. Editable via Label property.
- **Leading Icon Slot** (Conditional): Optional icon positioned left/start of text. Icon size: 16px (MD) or 12px (SM). Controlled by Show leading icon (boolean) and Leading icon (component swap). Default: check. Can be hidden or swapped to any system icon.
- **Trailing Icon Slot** (Conditional): Optional icon positioned right/end of text. Icon size: 16px (MD) or 12px (SM). Controlled by Show trailing icon (boolean) and Trailing icon (component swap). Default: close. Can be hidden or swapped to any system icon.
- **Button Container** (Implicit): Holds text and icons. Background fill and border change based on Type and State. Supports padding and corner radius adjustments.
- **Focus Ring** (Conditional): Appears on State=Focused. Color: focus/ring. Supports keyboard navigation and accessibility.
- **State Background/Border** (Conditional): Visual feedback on State=Hovered, Pressed, or Focused. Background color or border changes to indicate interactivity.
**Dimensions:**
- **MD (Medium):**
  - Height: 32px
  - Padding: space/16 horizontal, space/8 vertical
  - Icon size: 16x16px
  - Typography: button/md (14px SemiBold, line height 20px)
  - Gap: gap/s (8px) between elements
  - Corner Default: radius/4 (4px), Corner Rounded: 100% (pill)
  - Minimum width: ~80px (recommended for primary buttons)
- **SM (Small):**
  - Height: 24px
  - Padding: space/12 horizontal, space/4 vertical
  - Icon size: 12x12px
  - Typography: button/sm (12px SemiBold, line height 16px)
  - Gap: gap/s (8px) between elements
  - Corner Default: radius/4 (4px), Corner Rounded: 100% (pill)
  - Minimum width: ~60px
## Variants
 
### Type (7 variants)
Type defines action priority and semantic meaning. Determines visual dominance and communicates consequence.
 
- **Primary:** Highest visual priority. Main call-to-action on a page. Filled background, solid color. Type=Primary requires Color=Evergreen or Indigo. Communicates the recommended action. Default color: Evergreen.
- **Secondary:** Supporting action, secondary priority. Outlined or lower-fill background. Type=Secondary requires Color=Evergreen or Indigo. Complements primary button. Default color: Evergreen (but distinctly styled differently from Primary).
- **Tertiary:** Minimal visual weight. Gentle, subtle action. Borderless or very light styling. Type=Tertiary uses Color=Default only (cannot use Evergreen/Indigo). No Disabled state available; instead hide or remove tertiary button if unavailable.
- **Danger:** Communicates destructive or risky action. Delete, cancel important state, remove data. Type=Danger uses Color=Default (semantic color overrides brand color). Text color: color/danger/500 (red). No Disabled state; use confirmation dialogs instead of disabling dangerous actions.
- **Information:** Communicates informational or help-oriented action. Learn more, help, details. Type=Information uses Color=Default. Text color: color/information/500 (blue). No Disabled state.
- **Success:** Communicates successful or confirmatory action. Confirm, complete, done. Type=Success uses Color=Default. Text color: color/success/500 (green). No Disabled state.
- **Warning:** Communicates caution or alert-required action. Proceed with caution, review, confirm. Type=Warning uses Color=Default. Text color: color/warning/500 (orange/amber). No Disabled state.
### Color (3 variants)
Color determines brand identity and visual emphasis. Used primarily for Primary and Secondary buttons.
 
- **Evergreen:** Brand-aligned green color (color/brand/primary/500, #339947). Communicates positive, affirmative, trusted action. Background (Primary): filled with Evergreen. Text: text/inverse (white). Used as default for Primary/Secondary buttons in most contexts.
- **Indigo:** Brand-aligned secondary color (color/brand/secondary/500, #6b1b99). Communicates emphasis, secondary brand identity, or featured action. Background (Primary): filled with Indigo. Text: text/inverse (white). Used for emphasized or featured Primary/Secondary buttons.
- **Default:** Neutral color palette. Uses default text and background. Color=Default is required for Tertiary, Danger, Information, Success, Warning types. For Primary/Secondary, Color=Default appears in Disabled state only.
### State (5 variants)
State communicates interaction feedback and accessibility focus.
 
- **Default:** Base state. Full opacity, standard appearance. No hover effects applied. Ready for interaction.
- **Hovered:** Mouse hovers over button. Background color shifts (typically darkens or increases saturation). Text maintains contrast. Border may appear or shift. Indicates affordance and interactivity.
- **Pressed:** Mouse/touch actively clicks button. Background color deepens further than hovered. Visual feedback confirms interaction is being registered. May have slight inset shadow or scale effect.
- **Focused:** Keyboard focus via Tab key. Focus ring (focus/ring) appears around button. Communicates which element is keyboard-active. Essential for accessibility and keyboard navigation.
- **Disabled:** Button is not interactive. Appearance fades (typically reduced opacity or muted colors). Background may be filled with disabled color. Pointer and keyboard events are disabled. Communicates unavailability or unsatisfied preconditions.
**State Color Mapping (Primary/Secondary, Evergreen, Default state):**
- Background: color/brand/primary/500 (#339947)
- Text: text/inverse (#FFFFFF)
- Hovered: color/brand/primary/400 (darker Evergreen)
- Pressed: color/brand/primary/300 (darkest Evergreen)
- Focused: focus/ring added as outline
- Disabled: background surface/disabled, text text/disabled
### Corner (2 variants)
Corner defines border radius shape.
 
- **Default:** radius/4 (4px border radius). Standard, slightly rounded rectangle. Professional, neutral appearance.
- **Rounded:** 100% border radius (full pill shape). Fully rounded buttons. Modern, softer aesthetic. May cause distortion in very narrow layouts.
### Size (2 variants)
Size adapts button dimensions for different contexts.
 
- **MD (Medium):** 32px height, space/16 horizontal padding, button/md typography. Standard, primary button size. Default for most contexts.
- **SM (Small):** 24px height, space/12 horizontal padding, button/sm typography. Compact, toolbar buttons, small card actions.
## Token Mapping
 
### Primary Type — Evergreen Color (State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | color/brand/primary/500 | #339947 | Evergreen primary |
| Text Color | text/inverse | #FFFFFF | White text |
| Icon Color | text/inverse | #FFFFFF | White icon |
| Border | — | none | No border |
| Corner | radius/4 or 100% | 4px or pill | Based on Corner variant |
 
### Primary Type — Indigo Color (State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | color/brand/secondary/500 | #6b1b99 | Indigo secondary |
| Text Color | text/inverse | #FFFFFF | White text |
| Icon Color | text/inverse | #FFFFFF | White icon |
| Border | — | none | No border |
| Corner | radius/4 or 100% | 4px or pill | Based on Corner variant |
 
### Secondary Type — Color (State=Default)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | background/canvas | #FFFFFF | White fill |
| Text Color | text/[color] | #339947 (Evergreen) / #6b1b99 (Indigo) | Matches Color |
| Icon Color | text/[color] | Matches Color | Matches text |
| Border | border/[color] | 1px solid | Evergreen or Indigo border |
| Corner | radius/4 or 100% | 4px or pill | Based on Corner variant |
 
### Tertiary Type (Color=Default only)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | background/canvas | #FFFFFF or transparent | No fill or very light |
| Text Color | text/primary | #2d342f | Primary text |
| Icon Color | text/primary | #2d342f | Primary icon |
| Border | — | none | No visible border |
| Corner | radius/4 or 100% | 4px or pill | Based on Corner variant |
 
### Semantic Types — Danger, Information, Success, Warning (Color=Default)
 
| Type | Background | Text | Border | Notes |
|------|-----------|------|--------|-------|
| Danger | surface/danger/subtle | text/danger | border/danger | Red semantic |
| Information | surface/info/subtle | text/info | border/info | Blue semantic |
| Success | surface/success/subtle | text/success | border/success | Green semantic |
| Warning | surface/warning/subtle | text/primary | border/warning | Amber semantic, primary text |
 
### Disabled State (Primary/Secondary only)
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | surface/disabled | #F4F6F4 | Muted background |
| Text Color | text/disabled | #849588 | Disabled text |
| Icon Color | text/disabled | #849588 | Disabled icon |
| Border | border/disabled | #C3CBC5 | Disabled border |
| Opacity | — | 50-70% | Reduced prominence |
 
### Spacing & Typography Tokens
 
| Element | MD | SM |
|---------|----|----|
| Padding H | space/16 (16px) | space/12 (12px) |
| Padding V | space/8 (8px) | space/4 (4px) |
| Gap | gap/s (8px) | gap/s (8px) |
| Icon Size | 16×16px | 12×12px |
| Typography | button/md (14px SemiBold) | button/sm (12px SemiBold) |
| Line Height | 20px | 16px |
| Corner | radius/4 or 100% | radius/4 or 100% |
| Focus | focus/ring | focus/ring |
 
## Semantics
 
- **Action Priority:** Type determines visual hierarchy. Primary buttons should be dominant; secondary supporting; tertiary minimal; semantic types communicating consequence.
- **Type vs. Color Precedence:** When Type is set to semantic value (Danger, Information, Success, Warning), semantic color overrides Color property. Type semantic meaning takes visual precedence.
- **Color Meaning:** Color communicates brand identity (Evergreen=primary brand, Indigo=secondary brand, Default=neutral). Semantic types ignore Color and use semantic colors instead.
- **State as Feedback:** State (hover, press, focus) communicates interactivity feedback, not selection state. Buttons are not "selected" or "active" UI states; they communicate readiness and consequence.
- **Icon as Clarification:** Leading and trailing icons serve as visual clarifications or directional indicators, not as standalone meaning. Text should remain primary; icons supplement and enhance understanding.
- **Accessibility Primacy:** Icon-only buttons must provide accessible text via aria-label. Focus must be visible (focus/ring) and keyboard-accessible.
- **Disabled Constraint:** Some semantic types (Tertiary, Danger, Information, Success, Warning) do not support Disabled state. Instead, hide button or use confirmation dialogs for dangerous actions.
## Interaction
 
- **Click/Tap:** Clicking triggers button action. No visual state change persists after release.
- **Hover:** Mouse hovers over button. Background color shifts, border may appear. Indicates affordance.
- **Press:** Mouse/touch held down. Background deepens, visual feedback indicates action is being registered.
- **Focus (Keyboard):** Tab key navigates to button. Focus ring appears (focus/ring). Ready for Space or Enter key activation.
- **Space Key:** When focused, Space bar triggers button action.
- **Enter Key:** When focused, Enter key triggers button action (standard for form buttons).
- **Icon Swap:** Leading/Trailing icon properties support component swaps; icons are visual-only indicators.
- **Label Edit:** Label text property allows dynamic text updates.
- **State Transitions:** Default → Hovered (mouse over) → Pressed (mouse down) → Default (mouse up/click triggers action).
- **Disabled Interaction:** Disabled buttons block all interactions; pointer and keyboard events do not trigger actions.
## Accessibility
 
**HTML Structure:**
- Render as `<button type="button">` (or `type="submit"` for form submission)
- For icon-only buttons, use aria-label: `<button aria-label="Search">`
- Use `<button disabled>` and `aria-disabled="true"` for disabled state
- Ensure button is not nested inside `<a>` or other interactive elements
**Keyboard:**
- Tab key navigates to button
- Space bar activates button when focused
- Enter key activates button (in forms and otherwise)
- Shift+Tab navigates backward
- Button should be reachable via Tab without excessive tab stops
- Arrow keys should not be used for single buttons (reserve for button groups)
**Screen Reader:**
- Button announces its label and action: "Submit form, button"
- Icon-only buttons must announce fully: "Search, button" (via aria-label)
- Disabled state should announce: "Submit form, button, disabled"
- Semantic type can be conveyed via text alone: "Delete item, button" (text indicates danger)
- State transitions (focus) should be announced by screen reader
**Contrast:**
- Text and icon must have 4.5:1 contrast ratio against background
- Focus ring (focus/ring) must have 3:1 contrast ratio
- Hovered/pressed background must maintain readable text contrast
- Disabled text must still meet 3:1 minimum contrast (may be reduced due to disabled convention)
**Mobile/Touch:**
- Minimum touch target: 44x44px (WCAG recommendation)
- MD size (32px) may need padding for adequate touch size on mobile
- Consider icon size on small screens (minimum 16×16px, ideally 24×24px on mobile)
## Content Guidelines
 
- Keep button text concise: 1-3 words typically
- Use action verbs: "Submit", "Delete", "Learn more", "Save changes"
- Use sentence case: "Save changes" not "SAVE CHANGES"
- Be specific about action outcome: "Submit form" better than "Submit"
- For Primary buttons, use clear, affirmative language: "Create account", "Save", "Publish"
- For destructive actions, use explicit language: "Delete permanently" not "Delete"
- For secondary buttons, use complementary language: "Cancel", "Skip", "More options"
- For semantic types, language should match intent: Danger="Delete", Success="Confirm", Warning="Review"
- Avoid generic labels: "Ok" or "Click here" are weak
- For icon-only buttons, ensure icon meaning is universally understood
- Keep text consistent across similar buttons in the UI
- Use parallel language in button groups: "Save" and "Cancel" (not "Save" and "Don't save")
- For help/info buttons: "Learn more", "Help", "Details"
- Always provide accessible text for icon-only buttons via aria-label
## Examples
 
**Primary CTA (Create Account):**
Type=Primary, Color=Evergreen, State=Default, Corner=Default, Size=MD, Label="Create account", Show leading icon=false, Show trailing icon=false, Padding: space/16 H space/8 V, Typography: button/md
 
**Secondary action (Cancel):**
Type=Secondary, Color=Evergreen, State=Default, Corner=Rounded, Size=MD, Label="Cancel", Show leading icon=false, Show trailing icon=false, Padding: space/16 H space/8 V, Typography: button/md
 
**Tertiary subtle action:**
Type=Tertiary, Color=Default, State=Default, Corner=Default, Size=SM, Label="More options", Show leading icon=false, Show trailing icon=true, Trailing icon=chevron-down, Padding: space/12 H space/4 V
 
**Destructive action (Delete):**
Type=Danger, Color=Default, State=Default, Corner=Rounded, Size=MD, Label="Delete permanently", Show leading icon=false, Show trailing icon=false, Padding: space/16 H space/8 V, Typography: button/md
 
**Success confirmation:**
Type=Success, Color=Default, State=Default, Corner=Default, Size=SM, Label="Confirm", Show leading icon=false, Show trailing icon=true, Trailing icon=check, Padding: space/12 H space/4 V
 
**Warning action:**
Type=Warning, Color=Default, State=Default, Corner=Rounded, Size=MD, Label="Proceed with caution", Show leading icon=true, Leading icon=alert, Show trailing icon=false, Padding: space/16 H space/8 V
 
**Information helper:**
Type=Information, Color=Default, State=Default, Corner=Default, Size=SM, Label="Learn more", Show leading icon=true, Leading icon=info, Show trailing icon=false, Padding: space/12 H space/4 V
 
**Icon-only search button:**
Type=Tertiary, Color=Default, State=Default, Corner=Default, Size=MD, Show leading icon=true, Leading icon=search, Show trailing icon=false, aria-label="Search", Padding: space/16 H space/8 V
 
**Disabled primary button:**
Type=Primary, Color=Default, State=Disabled, Corner=Default, Size=MD, Label="Submit", Padding: space/16 H space/8 V, Typography: button/md
 
**Focused keyboard navigation:**
Type=Primary, Color=Indigo, State=Focused, Corner=Default, Size=MD, Label="Next step", Show leading icon=false, Show trailing icon=true, Trailing icon=arrow-right, Focus: focus/ring, Padding: space/16 H space/8 V, Typography: button/md
 
**Pill-shaped brand button:**
Type=Primary, Color=Evergreen, State=Default, Corner=Rounded, Size=MD, Label="Subscribe now", Show leading icon=false, Show trailing icon=false, Padding: space/16 H space/8 V, Typography: button/md
 
**Small toolbar button:**
Type=Tertiary, Color=Default, State=Default, Corner=Default, Size=SM, Label="Refresh", Show leading icon=true, Leading icon=refresh, Show trailing icon=false, Padding: space/12 H space/4 V, Typography: button/sm
 
