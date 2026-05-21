---
component: "Badge"
system: "Genome Evolution Design System"
type: "Status / Indicator"
status: "Design"
version: "1.1"
owner: "UX Design Team"
last_updated: "2026-05-21"
tags: [badge, counter, notification, indicator, numeric, status, semantic]
---
 
# Badge — Genome Evolution Design System
 
**Component Type:** Status / Indicator  
**Status:** Design  
**Version:** 1.1  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-21
 
## Quick Reference
 
| Property | Values | Default |
|----------|--------|---------|
| Type | Filled, Line | Line |
| Color | Default, Evergreen, Indigo, Inverse, Information, Warning, Error, Success | Default |
| Label | Numeric text (editable) | "0" |
 
**Typography:**
- Font: Open Sans, body/sm (11px SemiBold)
- Line height: 16px
**Total Variants:** 16 (2 Types × 8 Colors)
 
## Purpose
 
The Badge component is a compact visual indicator that displays numeric values (counters) on or beside interface elements. It communicates quantity-based information such as notification counts, unread messages, pending items, or state-based counters. The component is purely visual and non-interactive, serving as a read-only indicator of quantity or status.
 
With 2 style types (Filled for prominence, Line for subtlety) and 8 semantic color options, the Badge supports both neutral information display and semantic communication of intent (errors, warnings, success, information). It is designed for high legibility in compact spaces and works effectively when paired with icons or text labels.
 
## When to Use
 
- Displaying notification or message counts on navigation icons (bell icon + badge)
- Showing quantity of pending items, tasks, or items requiring attention
- Communicating unread email or message counts
- Indicating number of items in a cart or shopping bag
- Status indicators with numeric values (errors: 5, warnings: 2)
- Associated counters with navigation items or controls
- Displaying approval count, vote count, or similar metrics
- Communicating state-based numeric information (items selected, completed, failed)
## When NOT to Use
 
- For generic text labels or tags (use Tag or Label component)
- Communicating state without a numeric value (use Status or Icon)
- In contexts where space doesn't allow number legibility (text would be unreadable)
- As an interactive element or button (Badge is read-only, visual-only)
- For decorative purposes without meaningful numeric information
- Displaying text longer than 2-3 characters (use a different container)
- Communicating progress or percentage (use Progress component)
- For user-selected status indicators (use Checkbox, Radio Button, or Toggle)
## Anatomy
 
**Parts of the component:**
- **Container** (Required): A compact horizontal container holding the numeric text. Background may be solid (Filled type) or transparent with border (Line type). Padding is minimal (space/0 top/bottom, space/4 left/right) to keep the component compact.
- **Numeric Text** (Required): The counter value (number or text like "99+"). Font: body/sm (Open Sans 11px SemiBold). Always centered vertically and horizontally within the container. Text color depends on Type and Color properties.
**Dimensions:**
- Container height: ~16px (derived from text line height: body/sm)
- Container width: Adaptive (expands based on text width)
- Padding horizontal: space/4 (4px)
- Padding vertical: space/0 (0px)
- Text size: body/sm (11px)
- Line height: 16px
- Compact and minimal design
- Corner radius: radius/4 or similar
**Visual Properties:**
- Type=Filled: Solid background color with high visual weight
- Type=Line: Transparent background with 1px border and colored text
- No shadows, decorative elements, or additional visual treatments
- Consistent corner radius (typically radius/4)
## Variants
 
### Type (2 variants)
Type determines the visual style and prominence of the badge.
 
- **Filled:** Solid background color with contrasting text color. High visual prominence. Used for critical, high-priority, or urgent counters (notifications, errors, critical counts). Background is opaque and colored, text is inverse (white/light) or semantic color-appropriate. Token: surface/[semantic]/subtle or surface/[color]/bold.
- **Line:** Outlined border with colored text and transparent background. Subtle emphasis. Used for secondary, supporting, or less critical counters (secondary counts, optional indicators). Background is transparent, border is 1px in the semantic color, text color matches border. Token: border/[semantic] + text/[semantic].
### Color (8 variants)
Color communicates semantic intent and visual emphasis of the counter.
 
- **Default:** Neutral text and border color. Standard counter display for non-semantic information. Uses text/primary (#2d342f or similar). Best for generic, non-prioritized counters.
- **Evergreen:** Brand-aligned green color (color/brand/primary/500 #339947). Communicates positive, affirmative, or success-oriented counts. Used for approved items, positive status, confirmations.
- **Indigo:** Brand-aligned secondary color (color/brand/secondary/500 #6b1b99). Communicates emphasis, highlighting, or featured status. Used for prominent or special counters.
- **Inverse:** Inverse text color (light on dark). Used on dark backgrounds or within colored containers. Works in any background context.
- **Information:** Informational blue color (color/information/500 #0066CC). Communicates educational, helpful, or informational counters. Used for help tips, info counts, learning-related metrics.
- **Warning:** Caution/warning color (orange/amber, color/warning/500 #FFC107). Communicates caution-level attention or alerts. Used for pending items, warnings, items needing review.
- **Error:** Error/critical red color (color/danger/500 #BA1A1A). Communicates error, failed, or critical status. Used for error counts, failed items, critical issues.
- **Success:** Success green color (color/success/500 #28A745). Communicates successful, completed, or positive outcomes. Used for success counts, completed items, positive results.
### Label (Editable Text)
The numeric value displayed in the badge. Can be any numeric or short text value.
 
- **Default Value:** "0" (zero unread, zero pending, etc.)
- **Typical Values:** "1", "5", "12", "99", "99+" (cap indicator), "N/A" (not applicable)
- **Text Constraint:** 1-3 characters recommended for optimal legibility and compact sizing
- **Examples:** "0", "5", "12", "99+", "New", "N/A"
## Token Mapping
 
### Filled Type — Default Color
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | background/default | [neutral bg] | Neutral background |
| Text Color | text/primary | #2d342f | Primary text |
| Border | — | none | No border in Filled |
| Padding H | space/4 | 4px | Left/right padding |
| Padding V | space/0 | 0px | Top/bottom padding |
| Typography | body/sm | 11px SemiBold | Label font |
| Corner | radius/4 | 4px | Border radius |
 
### Filled Type — Semantic Colors
 
| Color | Background Token | Text Token | Notes |
|-------|-----------------|-----------|-------|
| Evergreen | surface/evergreen/bold | text/inverse | #339947 bg, white text |
| Indigo | surface/indigo/bold | text/inverse | #6b1b99 bg, white text |
| Inverse | surface/inverse | text/on-inverse | Inverse bg, inverse text |
| Information | surface/info/subtle | text/info | #e8f2ff bg, #0066CC text |
| Warning | surface/warning/subtle | text/primary | #fff0c2 bg, primary text |
| Error | surface/error/subtle | text/danger | #ffe9e5 bg, #BA1A1A text |
| Success | surface/success/subtle | text/success | #bfffda bg, #00885c text |
 
### Line Type — Default Color
 
| Property | Token | Value | Notes |
|----------|-------|-------|-------|
| Background | — | transparent | No fill |
| Text Color | text/primary | #2d342f | Primary text |
| Border | border/default | #5f6d62 | 1px border |
| Padding H | space/4 | 4px | Left/right padding |
| Padding V | space/0 | 0px | Top/bottom padding |
| Typography | body/sm | 11px SemiBold | Label font |
| Corner | radius/4 | 4px | Border radius |
 
### Line Type — Semantic Colors
 
| Color | Text Token | Border Token | Notes |
|-------|-----------|--------------|-------|
| Evergreen | text/evergreen | border/evergreen | #339947 text/border |
| Indigo | text/indigo | border/indigo | #6b1b99 text/border |
| Inverse | text/inverse | border/inverse | Light text/border |
| Information | text/info | border/info | #0066CC text/border |
| Warning | text/primary | border/warning | Primary text, #FFC107 border |
| Error | text/danger | border/danger | #BA1A1A text/border |
| Success | text/success | border/success | #00885c text/border |
 
## Semantics
 
- **Numeric Indicator:** Badge communicates quantity. The primary semantic is "there are X of these items."
- **Status Communication:** Through color, Badge adds semantic layer. Danger/Error badge: "there are X errors." Success badge: "there are X completed items."
- **Visual Hierarchy:** Type (Filled vs. Line) establishes visual prominence. Filled badges are high-priority, Line badges are secondary.
- **Non-Interactive Indicator:** Badge is visual-only. It does not capture interaction or represent selectable state. It informs, not invites interaction.
- **Countable Concept:** Badge implies countable, discrete items. It is not used for continuous metrics or percentages.
- **Color Meaning:** Color selection should align with the semantic content. Error badge for error counts, Success badge for completed counts, etc.
## Interaction
 
- **Non-Interactive:** Badge does not respond to clicks, hovers, or keyboard input. It is a visual indicator only.
- **No State Changes:** Badge does not have hover, pressed, or focused states. It displays static information.
- **Associated with Parent Element:** Badge is typically positioned on or near a parent element (icon, button, label). Clicking the parent element may affect what the badge displays (e.g., clicking a bell icon opens notifications, dismissing the badge).
- **Dynamic Value Updates:** The Label property may be updated programmatically as the counter changes (e.g., new message arrives, badge updates from "5" to "6").
- **No Keyboard Access:** Badge is not a tab stop and has no keyboard interaction.
- **Screen Reader Visibility:** Badge content (the number) should be announced by screen readers as associated with its parent element.
## Accessibility
 
**HTML Structure:**
- Badge is typically a `<span>` or `<div>` with numeric or status text content
- Badge should be associated with a parent interactive element (icon, button, link)
- Badge text should be visible (not hidden/display:none)
- Use `aria-label` or `aria-describedby` to provide context if Badge number is not immediately clear
**Example HTML Structure:**
```html
<!-- Badge on icon -->
<button class="icon-button">
  <span class="icon">bell</span>
  <span class="badge badge--filled badge--error" aria-label="5 unread notifications">5</span>
</button>
 
<!-- Badge with text -->
<div class="cart">
  <span class="label">Shopping Cart</span>
  <span class="badge badge--filled badge--default" aria-label="3 items">3</span>
</div>
```
 
**Keyboard:**
- Badge is not a keyboard-interactive element
- Badge should not be a tab stop
- Focus belongs to parent element (icon, button, etc.), not the badge
**Screen Reader:**
- Badge text should be announced: "5" (numeric value)
- Context should be provided by parent element label: "bell icon, 5 unread notifications"
- Use aria-label or aria-describedby to provide full context if needed
- Example: `aria-label="5 unread notifications"` on the badge or parent
- Badge should not interfere with parent element's screen reader announcement
**Contrast:**
- Text must have 4.5:1 contrast ratio against background (Filled type)
- Border and text must have 3:1 contrast ratio against background (Line type)
- Inverse color should provide adequate contrast on intended background colors
- Semantic colors (Error, Warning, Success, Information) should be distinguishable from each other and from Default
## Content Guidelines
 
- Keep badge content numeric or very short (1-3 characters)
- Use "0" for zero counts (not empty or hidden)
- Use "99+" or similar notation for large numbers that exceed space
- Avoid long text labels (badge is for quick scanning)
- Badge content should be accurate and up-to-date
- Update badge content dynamically as the counter changes
- Provide context in parent element label or aria-label
- Do not include punctuation or special formatting in badge
- Use consistent formatting across all badges (e.g., always "99+", never "99 or more")
## Examples
 
**Notification count on bell icon (Filled, Error):**
Type=Filled, Color=Error, Label="5", positioned on top-right of bell icon, Background: surface/error/subtle, Text: text/danger, Padding: space/4 H
 
**Unread messages (Filled, Default):**
Type=Filled, Color=Default, Label="12", positioned next to "Messages" label, Padding: space/4 H, Typography: body/sm
 
**Pending items (Filled, Warning):**
Type=Filled, Color=Warning, Label="3", positioned next to "Tasks" in sidebar, Background: surface/warning/subtle, Text: text/primary, Padding: space/4 H
 
**Success indicator (Filled, Success):**
Type=Filled, Color=Success, Label="10", indicating 10 completed items, Background: surface/success/subtle, Text: text/success, Padding: space/4 H
 
**Secondary count with border (Line, Evergreen):**
Type=Line, Color=Evergreen, Label="2", subtle emphasis for secondary info, Border: border/evergreen, Text: text/evergreen, Padding: space/4 H
 
**Warning alert (Line, Warning):**
Type=Line, Color=Warning, Label="1", positioned next to alert icon, Border: border/warning, Text: text/primary, Padding: space/4 H
 
**Information counter (Filled, Information):**
Type=Filled, Color=Information, Label="8", help-related counter, Background: surface/info/subtle, Text: text/info, Padding: space/4 H
 
**Neutral secondary indicator (Line, Default):**
Type=Line, Color=Default, Label="0", generic counter without semantic weight, Border: border/default, Text: text/primary, Padding: space/4 H
 
**Error count display (Filled, Error):**
Type=Filled, Color=Error, Label="99+", indicating many errors (capped display), Background: surface/error/subtle, Text: text/danger, Padding: space/4 H
 
**Success on card (Filled, Success):**
Type=Filled, Color=Success, Label="4", indicating 4 successful operations, Background: surface/success/subtle, Text: text/success, Padding: space/4 H
 
**Inverse badge on dark background (Filled, Inverse):**
Type=Filled, Color=Inverse, Label="6", on dark background or colored container, Background: surface/inverse, Text: text/on-inverse, Padding: space/4 H
 
**Indigo emphasis badge (Filled, Indigo):**
Type=Filled, Color=Indigo, Label="New", highlighted/featured badge, Background: surface/indigo/bold, Text: text/inverse, Padding: space/4 H
