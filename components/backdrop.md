---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Overlay / Modal"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-21"
tags: [overlay, backdrop, modal, dialog, drawer, non-interactive, theme-aware]
---
 
# Backdrop — Genome Evolution Design System
 
**Component Type:** Overlay / Modal  
**Status:** Design  
**Version:** 1.0  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-21
 
## Quick Reference
 
| Property | Values | Default |
|----------|--------|---------|
| Color | White, Black | Black |
 
**Theme-Aware Rendering:**
- Light Theme: Color=Black (dark overlay), Color=White (light overlay)
- Dark Theme: Color=White (light overlay), Color=Black (dark overlay)
**Invalid Combinations:**
- Color=White in Light theme (transparent/invisible)
- Color=Black in Dark theme (transparent/invisible)
- Backdrop without floating component above
**Total Variants:** 2 (2 Colors × 1 theme adaptive = theme-dependent rendering)
 
## Purpose
 
The Backdrop component is a semitransparent overlay layer that visually blocks the underlying interface while accompanying a floating component (modal, drawer, dialog, popover). It serves as a visual separation and focus mechanism, signaling to users that the floating element demands their attention and that interaction with the background is temporarily blocked.
 
The component is theme-aware, automatically adapting its color based on the current theme context (Light or Dark mode) to ensure consistent visual blocking across different interfaces. It is purely visual and non-interactive by default, though it may optionally capture click events to trigger modal dismissal.
 
## When to Use
 
- Modals or dialogs that require focus isolation from the background interface
- Drawers, sidebars, or slide-out panels that overlay the main content
- Popover menus that need visual separation from background
- Any floating or modal component requiring hierarchical visual distinction
- Creating focus-trapping experiences that highlight a single interactive element
- Improving cognitive load by visually removing background elements from consideration
- Mobile interfaces where full-screen modals need background blocking
- Confirming critical user actions with modal dialogs
## When NOT to Use
 
- As an interactive element (backdrop itself should not be actionable UI)
- Decorative overlays or background tints for sections (use color backgrounds instead)
- Without a floating component above (use section backgrounds or color fills)
- For loading states or progress indicators (use dedicated Loading/Progress components)
- As the primary focus mechanism for non-modal content
- Simple hover effects or tooltips (use dedicated Tooltip component)
- Background darkening without a modal context
## Anatomy
 
**Parts of the component:**
- **Overlay Layer** (Required): A full-viewport semitransparent rectangle covering the entire accessible area. No visual elements, text, or interactive controls. Single flat shape with color and opacity applied.
**Dimensions:**
- Width: 100% (fills viewport/container width)
- Height: 100% (fills viewport/container height)
- Position: Absolute or Fixed positioning
- Z-index: Below floating element (modal, drawer) but above background content
**Styling:**
- Background: Single solid color with transparency (alpha opacity)
- No borders, shadows, or decorative elements
- No text or icons
- Smooth, uniform appearance
- Color opacity creates semitransparent effect (not fully opaque, not fully transparent)
## Variants
 
### Color (2 variants)
Color determines the overlay's visual appearance and adapts based on theme context.
 
- **Black:** Dark overlay color. In Light theme, renders as dark overlay (palette/alpha/1000) to darken light background. In Dark theme, renders as dark overlay (palette/alpha/100) to maintain visibility. Used for emphasis and visual blocking.
- **White:** Light overlay color. In Light theme, renders as light overlay (palette/alpha/100) for subtle blocking. In Dark theme, renders as light overlay (palette/alpha/1000) to brighten dark background. Used for subtle separation or in dark-themed interfaces.
**Theme Adaptation Logic:**
The component is designed with theme-aware token mapping to ensure consistent visual blocking regardless of theme:
- **Light Theme Context:**
  - Color=Black → dark overlay (blocks light UI effectively)
  - Color=White → light overlay (subtle, minimal blocking)
- **Dark Theme Context:**
  - Color=Black → dark overlay (minimal visibility in dark UI)
  - Color=White → light overlay (blocks dark UI effectively)
In practice, designers should select Color=Black for modal/blocking in Light theme and Color=White for Dark theme to achieve optimal visual blocking.
 
## Token Mapping
 
### Light Theme
 
| Color | Token | Value | Notes |
|-------|-------|-------|-------|
| Black | palette/alpha/1000 | [dark semitransparent] | Dark overlay, effective blocking |
| White | palette/alpha/100 | [light semitransparent] | Light overlay, subtle effect |
 
### Dark Theme
 
| Color | Token | Value | Notes |
|-------|-------|-------|-------|
| Black | palette/alpha/100 | [light semitransparent] | Dark overlay, minimal visibility |
| White | palette/alpha/1000 | [dark semitransparent] | Light overlay, effective blocking |
 
**Alpha/Opacity Values:**
- palette/alpha/100: ~10% opacity (subtle, light overlay)
- palette/alpha/1000: ~70-80% opacity (strong, dark overlay)
## Semantics
 
- **Visual Blocking:** Backdrop communicates that interaction with background is blocked. It creates a visual "do not interact" boundary.
- **Focus Signaling:** The overlay directs user attention to the floating element, indicating it requires the user's immediate focus and action.
- **Hierarchy Communication:** Backdrop separates floating elements into a visual layer above the main interface, establishing clear component hierarchy.
- **Non-Interactive Semantics:** Despite covering the background, backdrop itself is not interactive (though it may optionally handle clicks for dismissal).
- **Theme Awareness:** Color selection ensures visibility across Light and Dark themes. The component adapts semantically to the interface context.
- **Modal Context Requirement:** Backdrop should only appear with an accompanying floating component. Its presence implies a modal context.
## Interaction
 
- **Click/Tap (Optional):** Backdrop may optionally respond to click events to dismiss the accompanying modal (implementation-dependent). When clickable, typically triggers close action on the floating component.
- **Non-Interactive Default:** By default, backdrop is non-interactive (pointer-events: none). Users can interact with the floating component above, but not the backdrop itself.
- **Keyboard (No Direct Interaction):** Backdrop does not capture keyboard events. Focus management and keyboard handlers belong to the floating component.
- **Focus Trapping:** Backdrop supports focus-trapping behavior where Tab key only cycles through elements within the floating component (modal trap pattern).
- **Dismiss Mechanism:** If backdrop is clickable, clicking it typically triggers:
  - Close/dismiss the modal
  - Emit cancel/dismiss event
  - Return focus to the element that opened the modal
## Accessibility
 
**HTML Structure:**
- Backdrop is a `<div>` or similar container element
- Should not receive focus (tabindex should be absent or -1)
- Should not be keyboard interactive (no keyboard handlers)
- May have role="presentation" or similar to indicate non-semantic element
- Should not have text content or interactive children
**Example HTML Structure:**
```html
<div class="backdrop" role="presentation" aria-hidden="true"></div>
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <!-- modal content -->
</div>
```
 
**Keyboard:**
- Backdrop should not be a tab stop
- Escape key handling belongs to the modal/floating component, not backdrop
- Tab key should cycle only through modal content (focus trap)
- Backdrop should not capture or handle keyboard events
**Screen Reader:**
- Backdrop should be hidden from screen readers: `aria-hidden="true"`
- Backdrop text content should be absent (no text to announce)
- Screen reader should announce the floating component and its purpose, not the backdrop
- Focus announcements belong to the modal, not the backdrop
**Contrast:**
- Backdrop opacity is intentionally semitransparent (not fully opaque)
- Ensures background is still visible but darkened/reduced in prominence
- Color choice (Black vs. White) ensures adequate contrast with background
- No contrast requirement between backdrop and floating component (they are separate layers)
## Content Guidelines
 
- Backdrop is a non-content element; it has no text, labels, or information
- No content strategy applies to backdrop
- All messaging and interaction belongs to the floating component above
- Do not add text overlays, icons, or decoration to the backdrop
- Keep backdrop as a simple, uniform overlay
## Examples
 
**Modal in Light theme (dark overlay):**
Color=Black, Light theme, Positioned full-screen, Z-index below modal dialog
 
**Modal in Dark theme (light overlay):**
Color=White, Dark theme, Positioned full-screen, Z-index below modal dialog
 
**Drawer with backdrop (Light theme):**
Color=Black, Light theme, Positioned full-screen, Z-index below drawer panel
 
**Drawer with backdrop (Dark theme):**
Color=White, Dark theme, Positioned full-screen, Z-index below drawer panel
 
**Clickable backdrop for dismissal:**
Color=Black (Light theme), Full-screen position, onClick handler triggers modal close
 
**Non-clickable backdrop:**
Color=Black, Full-screen position, pointer-events: none, Modal dismiss requires button in modal only
 
**Dialog with backdrop:**
Color=Black (Light theme), Full-screen cover, Modal dialog centered above, Focus trap enabled
 
**Nested modals with multiple backdrops:**
Each modal has its own backdrop, Z-index stacked appropriately (first modal backdrop below first modal, second backdrop below second modal, etc.)
 
**Popover with subtle backdrop:**
Color=White (Light theme, subtle), Positioned over affected area only, Non-full-screen backdrop covering only the popover context
 
**Mobile modal with backdrop:**
Color=Black, Full viewport coverage, Touching backdrop dismisses modal (optional), Modal animates in from bottom
 
**Critical action dialog:**
Color=Black (high contrast), Full-screen backdrop, Modal elevated and highlighted, Requires explicit action (not just backdrop click)
 
**Confirmation dialog:**
Color=Black, Full-screen backdrop, Modal with "Confirm" and "Cancel" buttons, Backdrop click optional dismissal
