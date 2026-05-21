---
component: "Badge"
system: "Genome Evolution Design System"
type: "Data Visualization / Counter"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2026-05-15"
tags: [badge, counter, notification, indicator, status]
---

# Badge — Genome Evolution Design System

A compact numeric counter indicator that displays notification counts, message badges, or state counters. Shows a number in a pill-shaped container with semantic color variants for urgency levels.

> Optimized for visual consistency, accessibility, and correct semantic interpretation by AI.

---

## Quick Reference (AI-optimized)

**What it is:** A small numeric counter component displayed as a pill-shaped badge. Always shows a number (default: 0). Available in two visual styles (Filled and Line) and eight semantic color variants.

**Key Properties:**
- Type [Filled | Line] — default: Filled
- Color [Default | Evergreen | Indigo | Inverse | Information | Warning | Error | Success] — default: Default
- Value [numeric] — default: 0

**Invalid Combinations:**
- Badge with empty value → must always display a number; use 0 as default
- Type=Line + Color=Inverse → insufficient contrast in most contexts
- Badge without associated UI element → badges must accompany a specific interface element

**Frequent Usage Snippets:**
- Notification counter: Type=Filled, Color=Error, Value="5"
- Unread messages: Type=Filled, Color=Default, Value="23"
- Success count: Type=Filled, Color=Success, Value="12"
- Secondary badge: Type=Line, Color=Evergreen, Value="3"
- Warning alert: Type=Filled, Color=Warning, Value="1"

---

## Purpose / Intent

**What it solves:** Need to visually communicate a numeric count or quantity associated with an interface element, with support for semantic urgency levels through color coding.

**Expected outcome:** User immediately perceives that there are pending items, notifications, or events associated with the element the badge accompanies, without reading additional text.

**Typical usage context:** Navigation icons (notifications, messages), action buttons with pending count, dashboard metrics, list item counters, header sections with accumulated actions.

---

## When to Use / When NOT to Use

### ✅ Use when
- A numeric counter needs to be associated with a UI element (notifications, messages, pending items)
- Communicating urgency or semantic state with a numeric value (Error for critical, Success for completed, Warning for pending)
- The element requires immediate visual differentiation by quantity
- Distinguishing elements in a navigation or list by their associated count

### ❌ Avoid when
- A generic text label without numeric value is needed (use Tag or Label instead)
- Available space cannot accommodate readable number size (minimum XS/11px)
- Communicating state without a related quantity (use State Indicator or semantic Icon)
- The number changes so frequently that animation becomes distracting

---

## Structure (Anatomy)

**Parts of the component:**
- **Container (Required):** Pill-shaped rectangle with solid background (Filled) or border (Line). Corner radius: 5px. Size adapts to content width.
- **Numeric Text (Required):** Always present. Displays numeric value. Default: 0. Typography: text/label/xs.

> General rule: Badge always contains a visible numeric value. No variant exists without a number. Container width adapts to number width while maintaining consistent padding and height.

---

## Semantics (Meaning & Behavior)

**Main semantic role:** Numeric counter or quantity indicator associated with an interface element.

**Action it communicates:** "There are [N] items pending / notifications / events of this type."

**Signals for the user:**
- Color immediately communicates urgency level or semantic category (Error = critical, Warning = attention needed, Success = completed, Information = informational)
- Filled type communicates higher visual weight and urgency compared to Line type
- The numeric value itself communicates the exact quantity of associated items

**Color Semantics:**
- Default — Neutral, general-purpose counters without specific semantic meaning
- Evergreen — Positive, active, approved states with quantity
- Indigo — Secondary emphasis, special category, editorial highlight
- Inverse — High contrast for use on dark/colored backgrounds
- Information — Informational, help-related, or new item counts
- Warning — Caution, pending attention, awaiting action. **EXCEPTION: uses text/primary for contrast**
- Error — Critical, blocked, or failure counts
- Success — Completion, approved, or successful action counts

---

## Variants (Properties)

> Names identical to Figma.

### Type
- **Filled** — Solid background with contrasting text. Higher visual weight. Standard use for notifications and alerts.
- **Line** — Subtle background with semantic color border. Lower visual weight. Use when Filled would be too prominent.

### Color
- **Default** — Neutral gray tone. General counters without semantic urgency.
- **Evergreen** — Primary brand green. Use for active, approved, positive counts.
- **Indigo** — Secondary brand purple. Use for special categories or editorial emphasis.
- **Inverse** — Inverse tone for use on dark backgrounds. Adapts to theme.
- **Information** — Semantic blue. Use for informational or new item counts.
- **Warning** — Semantic amber/yellow. **EXCEPTION: text always uses text/primary, not semantic text token.**
- **Error** — Semantic red. Use for critical, blocked, or error counts.
- **Success** — Semantic green. Use for completion or success counts.

---

## Token Mapping

### Type=Filled Color Variants

| Color | Background | Text |
|-------|-----------|------|
| Default | surface/default/bold | text/inverse |
| Evergreen | surface/evergreen/bold | text/inverse |
| Indigo | surface/indigo/bold | text/inverse |
| Inverse | surface/raised | text/inverse |
| Information | surface/information/bold | text/inverse |
| Warning | surface/warning/bold | text/primary ⚠️ |
| Error | surface/error/bold | text/inverse |
| Success | surface/success/bold | text/inverse |

### Type=Line Color Variants

| Color | Background | Border | Text |
|-------|-----------|--------|------|
| Default | surface/default/subtle | border/default | text/primary |
| Evergreen | surface/evergreen/subtle | border/evergreen | text/evergreen |
| Indigo | surface/indigo/subtle | border/indigo | text/indigo |
| Inverse | surface/raised | border/strong | text/inverse |
| Information | surface/information/subtle | border/information | text/information |
| Warning | surface/warning/subtle | border/warning | text/primary ⚠️ |
| Error | surface/error/subtle | border/error | text/error |
| Success | surface/success/subtle | border/success | text/success |

> ⚠️ **Warning Exception:** Text always uses text/primary (not semantic color token) for sufficient contrast on both Filled and Line types.

---

## Layout & Sizing

### Spacing
- Height: 24px (size/24) — consistent height across all variants
- Width: Auto, sized to fit numeric content with minimal padding
- Minimum width: Sufficient for single digit plus padding

### Typography
- Style: text/label/xs
- Size: 11px
- Weight: 500 (medium)
- Line-height: 16px
- Letter-spacing: wide (+1px)
- Font family: body (system font)

### Corner / Shape
- Radius: 5px
- Always pill-shaped. No square corners.

---

## Interaction & Motion

- **Click/Tap:** No interactive behavior. Badge itself is not clickable; interaction occurs on parent element.
- **Keyboard:** Does not receive focus and is not keyboard navigable.
- **Loading:** Not applicable. Badges do not have loading states.
- **Transitions:** Recommended: fade or scale transition when value changes (200ms, standard easing).
- **Numeric Overflow:** When value exceeds 99, display as "99+" (implementation confirmed).

---

## Accessibility Guidelines

- **Contrast:** Minimum 4.5:1 between numeric text and background (WCAG 2.1 AA). Warning is the exception: uses text/primary for compliance.
- **ARIA:** Badge must have descriptive aria-label in context, e.g., aria-label="23 unread messages". Number alone is insufficient for screen readers.
- **Color not sole indicator:** Badge color must be supplemented by context or icon to communicate meaning; do not rely on color only.
- **Screen readers:** Badge content should be read as part of parent context. If standalone, wrap with descriptive container.
- **Focus:** If parent element is interactive, focus ring applies to parent, not badge. Badge itself does not receive focus.

---

## Content Guidelines

- Always display a number. Default value is 0.
- Numeric limits: Define overflow behavior (e.g., display "99+" when value exceeds 99).
- No alphabetic text: Badge is exclusively numeric. No letters or symbols.
- Real, updated values: Number must reflect actual count in production; avoid static placeholders.
- Numeric format: Use simple digits. Avoid commas or currency symbols.

---

## Examples

### Do ✅
- Use Type=Filled, Color=Error to display critical error count on an alert icon.
- Use Type=Line, Color=Warning when the badge competes visually with other elements.
- Use Color=Success to indicate the number of completed or approved items.
- Pair badges with action buttons showing pending count.
- Use Color=Information for "New" or "Featured" item counts.

### Don't ❌
- Do not display empty or zero badges without context (show 0 if relevant; hide if not).
- Do not use Type=Line + Color=Inverse without testing contrast against actual background.
- Do not expect Warning color text to use semantic color token; text/primary ensures contrast.
- Do not use badges on elements without clear association or context.
- Do not change badge value so frequently that animation becomes distracting.
- Do not use non-numeric content in badges.

---

## QA Checklist

- [ ] Type=Filled tested with all 8 color variants for visual appearance.
- [ ] Type=Line tested with all 8 color variants for contrast and readability.
- [ ] Warning (both Filled and Line) confirmed using text/primary, not semantic text token.
- [ ] Type=Line confirmed using surface/[color]/subtle background with border/[color].
- [ ] Type=Filled confirmed using surface/[color]/bold background.
- [ ] Typography text/label/xs applied (11px/16px, weight/medium, tracking/wide).
- [ ] Corner radius: 5px confirmed on all variants.
- [ ] Contrast ratio minimum 4.5:1 validated across all color combinations.
- [ ] Numeric overflow behavior defined and documented (e.g., "99+").
- [ ] aria-label descriptive text implemented in context of use.
- [ ] Badge always displays numeric value (no empty variants).
- [ ] Height consistent: 24px across all variants.

---

## Notes / Changelog

**2026-05-15** — Updated documentation to match Accordion md and Backdrop md pattern. Completed all metadata fields. Expanded sections with 16 color variants (Type × Color combinations). Added comprehensive token mapping for both Filled and Line types. Confirmed unique Warning exception (text/primary). Added numeric overflow guidance ("99+"). Detailed accessibility requirements and ARIA labeling. 100% aligned with design system documentation standards.
