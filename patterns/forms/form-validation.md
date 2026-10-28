---
pattern: "Form Validation"
system: "Genome Evolution DS"
type: "Pattern"
category: "forms"
status: "Production"
created: "2026-05-05"
tags: [form, validation, error, feedback, inline-errors]
---

# Pattern: Form Validation — Genome Evolution DS

Estrategias para validar formularios y mostrar errores de forma accesible.

---

## Problem

Cómo mostrar errores de formulario de manera clara, accesible y no frustrante para el usuario.

---

## Validation Strategies

### 1. Real-time Validation (on blur)
**Cuándo usar:**
- Email format checking
- Password strength
- Required fields

**Cuándo NO usar:**
- No validar en cada keystroke (jarring)
- No mostrar errores hasta que user termina input

```
User types: "hello"
User leaves field (blur)
Error shows: "Invalid email address"
User corrects: "hello@example.com"
User leaves field
Error disappears ✓
```

### 2. Submit-time Validation
**Cuándo usar:**
- Final form validation
- Server-side checks (email already exists)
- Multi-field validation

```
User fills form
User clicks Submit
Validation runs
If errors → show inline errors + banner
If success → submit API
```

### 3. Server-side Error Recovery
**Cuándo usar:**
- Email already registered
- Permission denied
- API failure

```
User submits
Server responds: "Email already exists"
Show error in Input + Inline Alert banner
User fixes and resubmits
```

---

## Component Anatomy

### Real-time Error (on blur)
```
┌─────────────────────────────┐
│ Email address               │ (label)
│ [john@exam_____] ❌         │ (Input with error border)
│ Invalid email address       │ (error text, red)
└─────────────────────────────┘
```

### Submit-time Error (banner + inline)
```
┌──────────────────────────────────┐
│ ⚠️ Please fix 2 errors below    │ (Inline Alert banner)
├──────────────────────────────────┤
│ Name                            │
│ [____________________] ❌        │
│ Required field                  │
│                                 │
│ Email                           │
│ [john@example.com____] ❌       │
│ Email already registered        │
│                                 │
│ [      Submit      ]            │
└──────────────────────────────────┘
```

---

## States & Behavior

### Field States

**Valid** ✓
```
[john@example.com_______________] ✓
Border: var(--ge-color-role-border-default) (no change)
Icon: checkmark (optional)
```

**Invalid** ❌
```
[john@exam__________________] ❌
Border: var(--ge-color-role-border-danger), 2px
Text below: "Invalid email address"
Color: var(--ge-color-role-text-danger)
```

**Loading (checking server)** ⟳
```
[john@example.com_______________] ⟳
Border: var(--ge-color-role-border-default)
Spinner appears while checking
```

**Disabled** (form submitting)
```
[____________________] (grayed out)
Border: var(--ge-color-role-border-disabled)
Cursor: not-allowed
```

---

## Token Mapping

```text
Valid state:
  Border: var(--ge-color-role-border-default)
  Text: var(--ge-color-role-text-primary)

Invalid state:
  Border: var(--ge-color-role-border-danger)
  Background: var(--ge-color-role-background-canvas)
  Error text: var(--ge-color-role-text-danger)
  Error icon: var(--ge-color-role-icon-danger)

Loading state:
  Border: var(--ge-color-role-border-default)
  Spinner: var(--ge-color-role-icon-secondary)

Error banner (Inline Alert):
  Background: var(--ge-color-role-surface-danger-subtle)
  Border: var(--ge-color-role-border-danger)
  Text: var(--ge-color-role-text-danger)
  Icon: var(--ge-color-role-icon-danger)

Spacing:
  Error text below input: var(--ge-spacing-gap-xxs)
  Error text size: var(--ge-typography-role-body-xs-size)
  Error banner margin-bottom: var(--ge-spacing-space-16)
```

---

## Interaction & Motion

### Error Appears
- Border changes to the danger border color: instant
- Error text fades in: 200ms, curva estándar
- Focus moves to first error (keyboard nav)

### Banner Error on Submit
- Banner slides down from top: 320ms, curva de entrada
- Focus moves to banner (aria-live announces)

### Error Dismissed (user fixes)
- Error text fades out: 200ms, curva de salida
- Border returns to default: 200ms
- Checkmark may appear: instant

---

## Accessibility

### ARIA
```html
<!-- Invalid input with error message -->
<input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Invalid email address
</span>

<!-- Error banner -->
<div role="alert" aria-live="assertive">
  Please fix 2 errors below
</div>

<!-- Loading indicator -->
<div aria-busy="true" role="status">
  Checking availability...
</div>
```

### Keyboard
- Tab to each field
- Error announced by screen reader
- User fixes + tab away → error disappears
- Submit button available after corrections

### Screen Reader
- "Email, edit text, invalid, invalid email address"
- "Form has 2 errors"
- Errors announced immediately

---

## Validation Rules (Best Practices)

### Email
```
✓ john@example.com
✓ john.doe@example.co.uk
✗ john@.com
✗ john@example
✗ john (no @)

Use browser native: type="email"
Regex strict: avoid, breaks valid emails
Message: "Enter a valid email address"
```

### Password
```
Check strength:
  ✓ 8+ characters
  ✓ Mix uppercase + lowercase
  ✓ Contains number or symbol

Real-time: show strength indicator (weak/medium/strong)
Never show password hint in plain text
Message: "Password too weak. Add uppercase and number."
```

### Required Field
```
Mark label: "Name *" (asterisk)
Show error on blur/submit, not on keystroke
Message: "Required field" or "Please enter your name"
```

### Server Validation
```
Email already exists:
  Message: "Email already registered. Sign in instead?"
  Link to login

Permission denied:
  Message: "You don't have permission to edit this"
  Contact admin link

Rate limit:
  Message: "Too many attempts. Try again in 5 minutes."
  Disable form temporarily
```

---

## Do's & Don'ts

### ✅ Do
- Show errors on blur (not keystroke)
- Use clear, helpful messages
- Show error both inline + in banner (if submit-time)
- Color + text + icon (not color alone)
- Link to help docs if complex validation
- Announce errors to screen readers (aria-live)
- Disable submit button if required field empty

### ❌ Don't
- Don't validate on every keystroke (jarring)
- Don't use generic "Error" message
- Don't use color alone (colorblind users)
- Don't clear form after error (user loses data)
- Don't use blocking alerts (form should show errors inline)
- Don't make error text tiny (readability)
- Don't require specific format without explaining it

---

## QA Checklist

**Real-time Validation**
- [ ] Error appears after blur (not on keystroke)
- [ ] Error message is clear and helpful
- [ ] Error text uses the danger text color and is also marked by text and icon
- [ ] Input border uses the danger border color
- [ ] Error disappears when user fixes field
- [ ] Screen reader announces error

**Submit-time Validation**
- [ ] All errors collected before showing
- [ ] Banner appears with error count
- [ ] Each field with error highlighted
- [ ] Focus moves to first error
- [ ] User can fix each error
- [ ] Submit button re-enabled after fixes

**Server Validation**
- [ ] Loading spinner shows while checking (e.g., email availability)
- [ ] Error displayed if server check fails
- [ ] User can retry without reloading
- [ ] Timeout handled (show "Try again" after 10s)

**Accessibility**
- [ ] aria-invalid="true" set on invalid inputs
- [ ] aria-describedby links to error message
- [ ] Error message has role="alert"
- [ ] Error banner has aria-live="assertive"
- [ ] All errors announced to screen readers
- [ ] Keyboard navigation works (Tab to each error)
- [ ] Focus visible on all elements

**Cross-browser**
- [ ] Works without JavaScript (HTML5 validation)
- [ ] Works with JavaScript (custom validation)
- [ ] Works on mobile (touch validation)

---

## Examples

### Example 1: Password Strength
```
Password
[MyPass123______________] ⟳

Real-time feedback:
Password strength: Weak → Medium → Strong
- Need 8+ chars ❌
- Need uppercase ✓
- Need number ✓

User sees progress, knows what to fix.
```

### Example 2: Email Availability
```
Email
[john@example.com____________________] ⟳

Server checking...
(After 1-2 seconds)

✓ Available! or ❌ Already registered

No annoying delays, UX feedback.
```

### Example 3: Multi-field Form Submit
```
Name: [____] Error: Required
Email: [____] Error: Already exists
Password: [____] Error: Too weak

Banner: "Please fix 3 errors below"
(All errors show, user fixes all, retries)
```

---

## Related Patterns

- [Login Form](./login.md) — Uses real-time + submit validation
- Form Layout — Helper/error text positioning (próximamente)

## Component References

- [Input](../../components/input.md)
- [Inline Alert](../../components/inline-alert.md)
- [Button](../../components/button.md)

---

*Pattern: Form Validation para Genome Evolution DS v2.0.0+*