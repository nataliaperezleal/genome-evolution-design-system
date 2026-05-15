---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Overlay / Visual"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-15"
tags: [backdrop, overlay, modal, dialog, drawer]
---

# Backdrop — Genome Evolution Design System

A semi-transparent overlay layer placed between the background content and a floating element (modal, drawer, dialog), visually blocking the underlying interface without being interactive.

> Optimized for visual consistency, accessibility, and correct semantic interpretation by AI.

---

## Quick Reference (AI-optimized)

**What it is:** Full-screen overlay, purely visual, that creates hierarchical separation between the background content and an overlaid floating component. It has no interactive behavior.

**Key Properties:**
- Color [White | Black] — default: Black

**Invalid Combinations:**
- Color=White in Light theme → use palette/alpha/100 (transparent), the overlay is invisible
- Color=Black in Dark theme → use palette/alpha/100 (transparent), the overlay is invisible
- Backdrop without a floating component above → usage without semantic or visual purpose

**Frequent Usage Snippets:**
- Modal in Light theme: Color=Black
- Modal in Dark theme: Color=White
- Drawer in Light theme: Color=Black
- Drawer in Dark theme: Color=White

---

## Purpose / Intent

**What it solves:** The need to visually block the background interface when a floating element (modal, drawer, dialog) is active, helping the user focus their attention on the overlaid component.

**Expected outcome:** The user clearly perceives that there is an active layer over the UI and must interact with the floating element before returning to the background content.

**Typical usage context:** Always in combination with modals, dialogs, drawers, or any component that requires visual blocking of the underlying context. Never used in isolation.

---

## When to Use / When NOT to Use

### ✅ Use when
- A modal, dialog, or drawer that requires the user's exclusive attention is opened
- There is a need to hierarchically separate a floating element from the rest of the interface
- The design needs to communicate that the background is temporarily blocked or inactive

### ❌ Avoid when
- There is no active floating component above the Backdrop
- An interactive or clickable element is sought (the Backdrop is purely visual)
- It is used as a decorative background or section element within the layout

---

## Structure (Anatomy)

**Parts of the component:**
- **Overlay layer (Required):** Full-screen rectangle with a semi-transparent color defined by the token corresponding to Color and active theme (Light/Dark). It does not contain its own child elements.

> General rule: The Backdrop always occupies 100% of the viewport and is positioned behind the floating component but above all UI content. Its only element is the color layer with opacity.

---

## Semantics (Meaning & Behavior)

**Main semantic role:** Visual context blocker. Communicates that the background interface is temporarily inaccessible while a floating element is active.

**Action it communicates:** "The background content is blocked. Attend to the overlaid element."

**Signals for the user:**
- The darkening or lightening of the background indicates that there is an active layer
- The visual separation reinforces the hierarchy between the blocked content and the floating element
- There is no signal of interactivity (no pointer cursor, no hover, no tactile feedback)

---

## Iconography

Not applicable. The Backdrop does not contain icons or content slots.

---

## Variants (Properties)

> Names identical to Figma.

### Color
- **Black** — Dark overlay. Use palette/alpha/1000 in Light theme and palette/alpha/100 in Dark theme. Standard usage in most contexts with Light theme.
- **White** — Light overlay. Use palette/alpha/100 in Light theme and palette/alpha/1000 in Dark theme. Use exclusively in Dark theme to maintain the correct contrast.

### State Model
- **Default:** Visible overlay with opacity defined by the token of the active theme.
- **Hovered:** No visual change. The Backdrop is not interactive.
- **Pressed:** No visual change. The Backdrop is not interactive.
- **Focused:** Not applicable. The Backdrop does not receive focus.
- **Disabled:** Not applicable.

---

## Token Mapping

### Color / Surface

| Variant | Light Theme | Dark Theme |
|---------|------------|-----------|
| Black | palette/alpha/1000 | palette/alpha/100 |
| White | palette/alpha/100 | palette/alpha/1000 |

> **Note:** palette/alpha/100 represents the transparent end of the alpha scale. palette/alpha/1000 represents the opaque/covered end. The system automatically adapts the color according to the active theme.

### Usage rule by theme
- **Light Theme** → always use Color=Black to achieve a visible dark overlay
- **Dark Theme** → always use Color=White to achieve a visible overlay over dark UI

---

## Layout & Sizing

### Spacing
- Padding: 0. The Backdrop has no internal padding.
- Gap: Not applicable.
- Width: 100% of the viewport.
- Height: 100% of the viewport.

### Typography
Not applicable. The Backdrop does not contain text.

### Corner / Shape
- Radius: 0. The Backdrop is a full-screen rectangle with no rounded corners.
- Special cases: None.

---

## Interaction & Motion

- **Click/Tap:** No interactive behavior. The Backdrop is a purely visual element.
- **Keyboard:** Does not receive focus and is not keyboard navigable.
- **Loading:** Not applicable.
- **Transitions:** Fade-in/fade-out coordinated with the appearance and closure of the overlaid floating component. Duration: 200ms, Easing: standard.

---

## Accessibility Guidelines

- The Backdrop itself does not require its own ARIA attributes, as it is decorative.
- The accompanying floating component (modal, dialog) must manage focus trapping and the aria-modal, role="dialog" attributes or equivalents.
- Do not rely solely on the Backdrop to communicate blocking: the floating component must be semantically correct.
- The overlay color must have sufficient opacity for the contrast between the blocked background and the floating element to be perceptible.
- **Screen readers:** use aria-hidden="true" on the Backdrop so that it is not announced by assistive technologies.

---

## Content Guidelines

- The Backdrop does not contain text, icons, or its own content.
- All semantic communication is the responsibility of the overlaid floating component.

---

## Examples

### Do ✅
- Use Color=Black in Light theme to accompany a confirmation modal for destructive action.
- Use Color=White in Dark theme to accompany a side navigation drawer.
- Ensure that the Backdrop always has an active floating component above it before rendering.
- Use consistent fade timing with the associated floating component.

### Don't ❌
- Do not use Color=White in Light theme: the token palette/alpha/100 results in a transparent and invisible overlay.
- Do not use Color=Black in Dark theme: same invisibility issue due to transparent token.
- Do not treat the Backdrop as an interactive element or assign click handlers to close the modal (that responsibility belongs to the floating component or its control logic).
- Do not render the Backdrop without an associated floating element.

---

## QA Checklist

- [ ] Color=Black visible in Light theme (token palette/alpha/1000 applied correctly).
- [ ] Color=White visible in Dark theme (token palette/alpha/1000 applied correctly).
- [ ] Color=Black in Dark theme is transparent (palette/alpha/100) — confirm it is not used in this context.
- [ ] Color=White in Light theme is transparent (palette/alpha/100) — confirm it is not used in this context.
- [ ] The Backdrop occupies 100% of the viewport without overflow.
- [ ] aria-hidden="true" present on the Backdrop element.
- [ ] Does not receive focus nor is it keyboard navigable.
- [ ] Always accompanied by an active floating component above.
- [ ] Transition coordinated with the floating component (duration 200ms, easing standard).

---

## Notes / Changelog

**2026-05-15** — Updated documentation to match Accordion md and Badge md pattern. Completed all metadata fields. Expanded sections with detailed specifications for theme usage, interaction behavior, and accessibility requirements. Confirmed 2 variants (Color × Theme combination). 100% aligned with design system documentation standards.
