---
pattern: "[Pattern Name]"
system: "Genome Evolution DS"
type: "Pattern"
category: "[forms|navigation|data-display|feedback|layouts]"
status: "Draft"
created: "[YYYY-MM-DD]"
updated: "[YYYY-MM-DD]"
tags: [pattern, ui-solution, reusable, example]
---

# Pattern: [Pattern Name] — Genome Evolution DS

> **One-line summary of what this pattern solves.**

---

## Problem / Use Case

### What problem does this pattern solve?
Clearly explain the user need or UX challenge.

**Example:**
> Users frequently need to authenticate. A common pattern combines email/password inputs, a submit button, and error handling into a cohesive login experience.

### When would you use this pattern?
- Scenario A: e.g., "When users need to sign in to the app."
- Scenario B: e.g., "When you're creating an authentication flow."

### When would you NOT use this pattern?
- Anti-example A: e.g., "Don't use this for sign-up (use sign-up pattern instead)."
- Anti-example B: e.g., "Don't use for social login (different pattern)."

---

## Anatomy / Structure

### Visual Layout
```
┌─────────────────────────────────┐
│  [Header / Title]               │
│                                 │
│  [Element 1]                    │
│  [Element 2]                    │
│  [Element 3]                    │
│                                 │
│  [Action Button]                │
│  [Alternative action link]      │
└─────────────────────────────────┘
```

### HTML Structure (Pseudocode)
```html
<section> <!-- Semantic container -->
  <header>
    <h2>Title</h2>
    <p>Subtitle</p>
  </header>
  
  <form> <!-- Use <form> for composition -->
    <!-- Element 1 -->
    <div class="form-field">
      <label for="field-1">Label</label>
      <input id="field-1" type="text" />
    </div>
    
    <!-- Element 2 -->
    <div class="form-field">
      <label for="field-2">Label</label>
      <input id="field-2" type="password" />
    </div>
    
    <!-- Actions -->
    <div class="form-actions">
      <button type="submit">Primary action</button>
      <a href="#">Secondary action</a>
    </div>
  </form>
</section>
```

---

## Component Composition

### Components Used
List every component that makes up this pattern.

| Component | Role | Props/Variant | Note |
|-----------|------|-------|------|
| Input | Email field | variant=default, type=email | Label above. |
| Input | Password field | variant=default, type=password | Show/hide icon optional. |
| Checkbox | Remember me | variant=default | Optional for most use cases. |
| Button | Submit | type=Primary, color=Evergreen | Main action. |
| Link | Forgot password | type=Tertiary | Secondary navigation. |

### Spacing & Layout
Describe how components are spaced and aligned.

```
Top: space/16 (16px padding from container edge)
Form fields: gap/md (12px) between each field
Form field vertical: space/12 inside each (label-to-input gap)
Button row: gap/sm (8px) between button and link
Bottom: space/16 (16px padding from button to edge)
```

---

## States & Behavior

### Initial State
- **Visual:** All inputs empty, button enabled (or disabled if required fields empty).
- **Behavior:** Focus first input on load (if not on mobile).
- **Accessibility:** Form focus management.

### User Enters Data
- **Visual:** Input border changes from default to focus state (border.focus).
- **Behavior:** Character validation (e.g., email format) can show inline hint.
- **Accessibility:** aria-invalid/aria-describedby if hints shown.

### User Submits (Success Path)
- **Visual:** Button shows loading state (spinner or text "Signing in...").
- **Behavior:** Inputs are disabled, button disabled.
- **Network:** Form data submitted to API.
- **After success:** Toast confirmation + redirect OR inline success message.
- **Accessibility:** aria-busy=true on form, announce success with aria-live.

### User Submits (Error Path)
- **Visual:** 
  - Input border becomes border/danger (#ba1a1a).
  - Inline error message below field (text/danger).
  - Inline alert banner above form (Inline Alert component).
- **Behavior:** Button returns to normal state (enabled). User can retry.
- **Accessibility:** aria-invalid=true on input, error message linked via aria-describedby.

### Server Error
- **Visual:** Modal or inline alert with "Something went wrong" message.
- **Behavior:** User can retry or contact support.
- **Accessibility:** Error announced to screen readers.

---

## Token Mapping

### Spacing Tokens
```
Container padding: space/16 (16px)
Form field gap: gap/md (12px)
Form field internal: space/12
Label-to-input: gap/sm (8px)
Button row: gap/sm (8px)
```

### Color Tokens
```
Input background: background/canvas (#ffffff)
Input border (default): border/default (#c3cbc5)
Input border (focused): border/focus (#339947)
Input border (error): border/danger (#ba1a1a)
Label text: text/primary (#2d342f)
Error text: text/danger (#ba1a1a)
Placeholder: text/tertiary (#728376)
Button background: surface/evergreen/bold (#297a39)
Button text: text/inverse (#f7f8f7)
```

### Typography Tokens
```
Header: heading/sm (20px, semibold, tight)
Label: label/md (14px, medium)
Input text: body/sm (14px, regular)
Error message: body/xs (12px, regular, danger color)
Helper text: body/xs (12px, regular, tertiary color)
Button text: button/md (14px, semibold)
```

### Focus Tokens
```
All interactive elements: focus/light ring (border/focus #339947, 2px)
Inner ring: 1px white gap
Outline: no outline, use border strategy
```

### Elevation (if modal or floating)
```
Background overlay: overlay/black (color/role/overlay/black)
Modal shadow: position.4 + blur.16
Modal z-index: layer/modal (600)
```

---

## Interaction & Motion

### Hover State
- Input field: background changes to background/interactive/hovered (very subtle).
- Button: background darkens (Primary uses surface/evergreen/bold/hovered #1f5c2b).
- Link: text darkens (link/hovered).
- Duration: motion/duration/moderate (200ms).
- Easing: motion/easing/standard.

### Focus State
- Ring appears: border/focus 2px green (#339947) with 1px white inner gap.
- Duration: motion/duration/fast (120ms).
- No animation needed for focus (instant visible).

### Loading State (Button)
- Spinner animates inside button (rotation).
- Duration: motion/duration/moderate (200ms per spin).
- Easing: motion/easing/standard.
- Text becomes hidden (use aria-busy instead).

### Success Toast
- Toast slides in from bottom-right.
- Duration: motion/duration/slow (320ms enter) + motion/duration/moderate (200ms fade out).
- Easing: motion/easing/enter for appear, motion/easing/exit for dismiss.
- Auto-dismisses after 5 seconds.

---

## Accessibility

### Semantic HTML
- Use `<form>` for the form container (not `<div>`).
- Use `<input>` with `type="email"`, `type="password"` for native validation.
- Use `<label>` with `for="input-id"` to associate labels with inputs.
- Use `<button type="submit">` for the submit button.

### ARIA Attributes
```html
<!-- Error state -->
<input id="email" aria-invalid="true" aria-describedby="email-error" />
<span id="email-error" role="alert">Invalid email address</span>

<!-- Loading state -->
<form aria-busy="true">...</form>

<!-- Success message -->
<div role="status" aria-live="polite">
  Sign in successful! Redirecting...
</div>
```

### Keyboard Navigation
- **Tab order:** Email → Password → Checkbox (optional) → Submit Button → Forgot Password Link.
- **Enter:** Submit form when focused on any input or button.
- **Escape:** Cancel form (optional, depends on context).
- **Focus visible:** All elements show focus ring (border/focus).
- **No keyboard traps:** User can tab out of all fields.

### Screen Reader Testing
- Form announced as: "Sign in form, landmarks and inputs available."
- Label announced before input: "Email, edit text."
- Error announced: "Email, edit text, invalid entry, enter a valid email address."
- Success announced: "Form submitted successfully, signing you in."

### Color Contrast
All text meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text):
- `text/primary (#2d342f)` on `background/canvas (#ffffff)` ✅ 11:1
- `text/danger (#ba1a1a)` on `surface/danger/subtle (#ffe9e5)` ✅ 5.5:1
- `text/inverse (#f7f8f7)` on `surface/evergreen/bold (#297a39)` ✅ 4.5:1

---

## Do's & Don'ts

### ✅ Do
- **Clearly label every input** — "Email address", "Password", not just "Email", "Pass".
- **Show inline errors** — Don't wait for form submission to validate email format.
- **Disable submit button during load** — Prevent double-submission.
- **Use native input types** — `type="email"` triggers mobile keyboard, browser validation.
- **Provide error context** — "Invalid email address. Did you mean..." (helpful errors).
- **Make labels visible** — Don't use placeholder-only (not accessible).

### ❌ Don't
- **Don't hide labels** — Use placeholder instead (no, this breaks accessibility).
- **Don't show password in plain text by default** — Use password input, show/hide toggle.
- **Don't disable submit button** — Confuses users (they think it won't work).
- **Don't validate on every keystroke** — Wait for blur or submit (less jarring).
- **Don't use only color for errors** — Include text message (colorblind users).
- **Don't use generic error messages** — "Error" is not helpful; "Email already registered" is.

---

## Examples & Screenshots

### Example 1: Default State
```
┌────────────────────────────┐
│  Sign in to your account   │
│                            │
│ Email address              │
│ [________@______.___]      │
│                            │
│ Password                   │
│ [________________]         │
│                            │
│ ☐ Remember me              │
│                            │
│ [  Sign in  ] Forgot?      │
└────────────────────────────┘
```

### Example 2: Error State
```
┌────────────────────────────┐
│  Sign in to your account   │
│                            │
│ ⚠️ Email not found or...   │
│                            │
│ Email address              │
│ [invalid@_____.___]❌      │
│ Invalid email address      │
│                            │
│ Password                   │
│ [________________]         │
│                            │
│ ☐ Remember me              │
│                            │
│ [  Sign in  ] Forgot?      │
└────────────────────────────┘
```

### Example 3: Loading State
```
┌────────────────────────────┐
│  Sign in to your account   │
│                            │
│ Email address              │
│ [john@example.com]         │  (disabled, greyed)
│                            │
│ Password                   │
│ [••••••••••••••]           │  (disabled, greyed)
│                            │
│ ☐ Remember me              │  (disabled)
│                            │
│ [ ⟳ Signing in... ]        │  (button disabled + spinner)
└────────────────────────────┘
```

### Screenshot of Real Usage
[Insert screenshot of this pattern in real application, showing mobile + desktop]

---

## Related Patterns
- [Sign-up form](./signup-form.md) — Registration pattern.
- [Multi-step form](./multi-step-form.md) — For longer flows.
- [Modal with form](./modal-with-form.md) — When form is in a modal.

---

## Component References
- [Input](../components/input.md)
- [Button](../components/button.md)
- [Checkbox](../components/checkbox.md)
- [Link](../components/link.md)
- [Inline Alert](../components/inline-alert.md)

---

## QA Checklist

- [ ] Form submits correctly on Enter key.
- [ ] Email input shows native email keyboard on mobile.
- [ ] Password input hides characters (••••).
- [ ] Submit button shows loading state during submission.
- [ ] Error state displays inline error message and border/danger.
- [ ] Success toast appears and auto-dismisses after 5 seconds.
- [ ] Tab order is correct: Email → Password → Checkbox → Button → Link.
- [ ] Focus ring visible on all interactive elements.
- [ ] Screen reader announces form fields and errors correctly.
- [ ] Contrast verified: all text meets WCAG 2.1 AA.
- [ ] Pattern works on mobile (360px), tablet (1024px), desktop (1440px).
- [ ] Pattern works in light and dark mode.

---

## Notes / Changelog

- **[Date]** — Initial pattern documented.
- **[Date]** — Added examples with real screenshots.
- **[Date]** — Updated with motion/animation details.

---

*Pattern template for Genome Evolution DS. Copy and fill for new patterns.*
