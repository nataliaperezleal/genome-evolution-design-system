---
pattern: "Login Form"
system: "Genome Evolution DS"
type: "Pattern"
category: "forms"
status: "Production"
created: "2026-05-05"
updated: "2026-05-05"
tags: [authentication, form, login, email, password]
---

# Pattern: Login Form — Genome Evolution DS

Formulario de autenticación para que usuarios inicien sesión con email y contraseña.

---

## Problem / Use Case

### Qué problema resuelve
Los usuarios necesitan una forma clara, segura y accesible para autenticarse en la aplicación usando email y contraseña.

### Cuándo usar
- Pantalla principal de login en aplicaciones.
- Cuando requieres email + password (no OAuth).
- Flujos de reauthenticación.

### Cuándo NO usar
- Cuando tienes múltiples opciones de login (usar Social Login pattern en su lugar).
- Sign-up/registro (usar Sign-up Form pattern).
- Cambio de contraseña (usar Change Password pattern).

---

## Anatomy / Structure

### Layout Visual
```
┌─────────────────────────────────────┐
│                                     │
│   Sign in to your account           │ (heading/sm)
│   Access your Genome workspace      │ (body/sm, tertiary)
│                                     │
│   Email address                     │ (label/md)
│   [email@example.com_______]        │ (Input)
│                                     │
│   Password                          │ (label/md)
│   [••••••••••••••••__] [👁️]          │ (Input + show/hide icon)
│                                     │
│   ☐ Remember me                     │ (Checkbox + label)
│                                     │
│   [   Sign in   ] or [Forgot pwd?]  │ (Button + Link)
│                                     │
│   Don't have an account?            │ (body/xs)
│   [Create one] →                    │ (Link)
│                                     │
└─────────────────────────────────────┘
```

### Estructura HTML
```html
<form class="login-form" novalidate>
  <header>
    <h1>Sign in to your account</h1>
    <p>Access your Genome workspace</p>
  </header>

  <!-- Email Input -->
  <div class="form-field">
    <label for="email">Email address</label>
    <input 
      id="email" 
      type="email" 
      name="email"
      placeholder="you@example.com"
      required
      aria-describedby="email-error"
    />
    <span id="email-error" role="alert" hidden></span>
  </div>

  <!-- Password Input with Show/Hide -->
  <div class="form-field">
    <div class="label-with-action">
      <label for="password">Password</label>
      <a href="/forgot-password" class="text-xs">Forgot?</a>
    </div>
    <div class="password-input-wrapper">
      <input 
        id="password" 
        type="password" 
        name="password"
        placeholder="••••••••"
        required
        aria-describedby="password-error"
      />
      <button 
        type="button" 
        class="toggle-password"
        aria-label="Show password"
        aria-pressed="false"
      >
        👁️
      </button>
    </div>
    <span id="password-error" role="alert" hidden></span>
  </div>

  <!-- Remember Me -->
  <div class="form-field">
    <input id="remember" type="checkbox" name="remember" />
    <label for="remember">Remember me for 30 days</label>
  </div>

  <!-- Actions -->
  <div class="form-actions">
    <button type="submit" class="btn-primary">Sign in</button>
  </div>

  <!-- Sign Up Link -->
  <p class="signup-prompt">
    Don't have an account? <a href="/signup">Create one →</a>
  </p>

  <!-- Server Error (shown only on error) -->
  <div class="inline-alert alert-danger" role="alert" hidden>
    <svg><!-- error icon --></svg>
    <span>Email or password incorrect. Try again.</span>
  </div>
</form>
```

---

## Component Composition

### Componentes Utilizados

| Componente | Rol | Variante | Notas |
|-----------|------|----------|-------|
| **Input** | Email | type=email, variant=default | Label arriba, placeholder "you@example.com" |
| **Input** | Password | type=password, variant=default | Show/hide toggle button opcional |
| **Checkbox** | Remember me | variant=default | Opcional pero recomendado |
| **Button** | Submit | type=Primary, color=Evergreen, size=MD | Main action |
| **Link** | Forgot password | type=Tertiary | Secondary action, inline con label |
| **Link** | Sign up | type=Tertiary | Footer, invita a registro |
| **Inline Alert** | Error server | variant=danger | Aparece solo en error |

### Spacing & Layout

```
Container:
  - Padding: space/24 (24px) en desktop, space/16 en mobile
  - Max-width: 400px (form reads better narrow)
  - Background: background/canvas (#fff)

Header (título + subtitle):
  - Gap entre título y subtitle: gap/xs (4px)
  - Margin bottom: space/24 (24px)

Form fields (email + password):
  - Gap entre fields: gap/md (12px)
  - Cada field interno: gap/xs (4px) entre label e input

Remember checkbox:
  - Margin top: space/12 (12px)

Button row:
  - Gap: gap/sm (8px) entre button y "Forgot?" link
  - Margin top: space/20 (20px)

Sign up prompt:
  - Margin top: space/16 (16px)
  - Text size: body/xs (12px)

Error inline-alert:
  - Margin top: space/12 (12px)
  - Margin bottom: 0 (arriba solo si es error global)
```

---

## States & Behavior

### 1. Initial State
**Visual:**
- Email input vacío, placeholder "you@example.com"
- Password input vacío, placeholder "••••••••"
- Checkbox desmarcado
- Button enabled (NO disabled)
- Show/hide password icon visible

**Behavior:**
- Focus automático en email input (si no en mobile)
- No validación hasta submit

**A11y:**
- Form landmark: `<form>`
- Labels asociados: `<label for="email">` → `<input id="email">`

### 2. User Enters Email
**Visual:**
- Input border: `border/focus` (#339947) en focus, `border/default` (#c3cbc5) en blur
- Focus ring visible

**Behavior:**
- Validación real-time (opcional): si email inválido después de blur, mostrar error inline
- O esperar a submit

**A11y:**
- Screen reader: "Email address, edit text"

### 3. User Enters Password
**Visual:**
- Input type="password" oculta caracteres como ••••••
- Show/hide button (👁️) permite alternar visibilidad

**Behavior:**
- Mostrar/ocultar: `input.type = password ? 'text' : 'password'`
- Button aria-label: "Show password" o "Hide password"
- Button aria-pressed: true/false

### 4. User Submits (Success Path)
**Visual:**
- Button state: Loading
  - Texto desaparece
  - Spinner dentro del button
  - Button disabled
- Inputs disabled (grayed out)

**Behavior:**
- POST /api/login con { email, password, remember }
- Espera respuesta server (típicamente 1-3 segundos)

**A11y:**
- Form aria-busy="true"
- Button aria-disabled="true"

**After Success:**
- Toast notification: "Welcome back!" (Snackbar component)
- Redirect a dashboard/home
- Clear form (opcional)

### 5. User Submits (Error: Invalid Credentials)
**Visual:**
- Inline alert aparece: 
  ```
  ⚠️ Email or password incorrect. Try again.
  ```
  - Color: `surface/danger/subtle` (#ffe9e5)
  - Border: `border/danger` (#ba1a1a)
  - Text: `text/danger` (#ba1a1a)
  - Icon: error icon

- Button vuelve a estado normal (enabled)
- Inputs re-habilitados
- Focus va al inline alert para anunciarlo a screen readers

**Behavior:**
- Usuario puede reintentar
- Email input pre-llenado con último valor (para retry)
- Password input vaciado por seguridad

**A11y:**
- aria-live="polite" en inline alert
- Focus management hacia error
- aria-describedby en inputs (si error inline también)

### 6. User Submits (Error: Server Error / Network)
**Visual:**
- Similar al caso anterior pero mensaje genérico:
  ```
  ⚠️ Something went wrong. Please try again.
  ```

**Behavior:**
- Retry button visible
- Link a soporte: "Contact support"

**A11y:**
- Same focus management

### 7. Show/Hide Password Toggled
**Visual:**
- Input type alternates: password ↔ text
- Icon changes: 👁️ (show) ↔ 👁️‍🗨️ (hide)
- Text visible: "password123" vs "••••••••"

**Behavior:**
- Click/Keyboard (Space/Enter on button toggles)
- No reset de valor

**A11y:**
- aria-pressed="true|false"
- aria-label actualizado

### 8. Remember Me Toggled
**Visual:**
- Checkbox estado: checked ↔ unchecked

**Behavior:**
- Si marcado: servidor setea cookie de "remember" por 30 días
- Next login muestra email pre-llenado (NO password)

**A11y:**
- Label associated: `<label for="remember">`

---

## Token Mapping

### Color Tokens

```
Input Background (default):
  background/canvas #ffffff

Input Border (default):
  border/default #c3cbc5

Input Border (focus):
  border/focus #339947

Input Border (error):
  border/danger #ba1a1a

Input Text:
  text/primary #2d342f

Input Placeholder:
  text/tertiary #728376

Label Text:
  text/primary #2d342f

Error Message:
  text/danger #ba1a1a

Button Background:
  surface/evergreen/bold #297a39

Button Text:
  text/inverse #f7f8f7

Error Alert Background:
  surface/danger/subtle #ffe9e5

Error Alert Border:
  border/danger #ba1a1a

Link Text:
  link/default #004a76 (blue)

Link Text Hover:
  link/hovered #003353
```

### Typography Tokens

```
Header (h1):
  typography/role/heading/sm
  20px, semibold, tight tracking

Subtitle:
  typography/role/body/sm
  14px, regular
  color: text/secondary

Label:
  typography/role/label/md
  14px, medium

Input Text:
  typography/role/body/sm
  14px, regular

Helper / Placeholder:
  typography/role/body/xs
  12px, regular

Error Message:
  typography/role/body/xs
  12px, regular
  color: text/danger

Sign-up Prompt:
  typography/role/body/xs
  12px, regular
```

### Spacing Tokens

```
Container padding (desktop):
  space/24 (24px)

Container padding (mobile):
  space/16 (16px)

Header margin-bottom:
  space/24 (24px)

Form fields gap:
  gap/md (12px)

Label-to-input gap:
  gap/xs (4px)

Checkbox margin-top:
  space/12 (12px)

Actions margin-top:
  space/20 (20px)

Sign-up section margin-top:
  space/16 (16px)

Error alert margin-top:
  space/12 (12px)
```

### Focus Tokens

```
All interactive elements (inputs, button, links):
  focus/light ring
  border/focus #339947
  2px width
  2px outline-offset
  1px white inner gap
```

### Elevation (if modal)

```
If form in modal:
  z-index: layer/modal (600)
  shadow: position.4 + blur.16
  overlay: overlay/black (backdrop)
```

---

## Interaction & Motion

### Hover States
```
Input field on hover:
  (subtle change, not much)
  background stays background/canvas
  border stays border/default
  Duration: instant (no animation needed)

Button on hover:
  background: surface/evergreen/bold/hovered #1f5c2b (darker)
  Duration: motion/duration/moderate (200ms)
  Easing: motion/easing/standard

Link on hover:
  text: link/hovered #003353 (darker blue)
  Duration: motion/duration/moderate (200ms)
  Easing: motion/easing/standard

Checkbox on hover:
  subtle background change to background/interactive/hovered
  Duration: motion/duration/moderate (200ms)

Show/Hide button on hover:
  background: background/interactive/hovered
  Duration: motion/duration/moderate (200ms)
```

### Focus States
```
All interactive elements:
  Ring visible: border/focus #339947 2px
  Outline-offset: 2px
  Inner gap: 1px white ring
  Duration: instant (no animation)
  No delay
```

### Loading States (Button)
```
Spinner animation:
  Rotation: 360° infinite
  Duration: motion/duration/moderate per rotation (200ms per spin)
  Easing: motion/easing/standard (constant speed)
  Color: text/inverse #f7f8f7 (white on green)

Text:
  Hidden (not display:none, use aria-busy instead)
```

### Error State
```
Inline alert slide-in:
  From: opacity 0, transform translateY(-8px)
  To: opacity 1, transform translateY(0)
  Duration: motion/duration/moderate (200ms)
  Easing: motion/easing/enter

Focus management:
  Focus moves to error alert
  Screen reader announces immediately
  Delay: none (instant)
```

### Success Toast
```
Toast slide-in from bottom-right:
  From: opacity 0, translateY(+16px), translateX(+16px)
  To: opacity 1, translateY(0), translateX(0)
  Duration: motion/duration/slow (320ms)
  Easing: motion/easing/enter

Toast auto-dismiss:
  Wait: 5000ms (5 seconds)
  Exit: opacity 0, translateY(-16px)
  Duration: motion/duration/moderate (200ms)
  Easing: motion/easing/exit
```

---

## Accessibility

### Semantic HTML
```html
<!-- Form landmark -->
<form>

<!-- Proper input types -->
<input type="email" />
<input type="password" />
<input type="checkbox" />

<!-- Associated labels -->
<label for="email">Email</label>
<input id="email" />

<!-- Submit button -->
<button type="submit">Sign in</button>
```

### ARIA Attributes
```html
<!-- Error state -->
<input 
  type="email"
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Invalid email</span>

<!-- Loading state -->
<form aria-busy="true">
  <!-- Button appears disabled to screen readers -->
</form>

<!-- Show/hide button -->
<button 
  type="button"
  aria-label="Show password"
  aria-pressed="false"
>👁️</button>

<!-- Success message -->
<div role="status" aria-live="polite" aria-atomic="true">
  Welcome back! Redirecting...
</div>

<!-- Error alert -->
<div role="alert" aria-live="assertive">
  Email or password incorrect.
</div>
```

### Keyboard Navigation
```
Tab order: 
  1. Email input
  2. Password input
  3. Show/hide button (inside password field, or separate)
  4. Remember checkbox
  5. Sign in button
  6. Forgot password link (if outside button)
  7. Sign up link

Enter key:
  - On any input or sign-in button: Submit form
  - On forgot password/sign-up links: Navigate

Escape key:
  - (Optional) Clear form and reset focus

Focus visible:
  - All elements show focus ring (border/focus)
  - No focus suppression
```

### Screen Reader Testing
```
Expected announcements:
  - Form identified as: "Sign in, form"
  - Email input: "Email address, edit text, required"
  - Password input: "Password, password edit text, required"
  - Password button: "Show password, toggle button"
  - Checkbox: "Remember me for 30 days, checkbox, unchecked"
  - Submit button: "Sign in, button"
  - Error message: "Email or password incorrect. Try again." (announced immediately)
  - Success: "Welcome back! Redirecting..." (announced with role=status)

Test with:
  - NVDA (Windows, free)
  - JAWS (Windows, paid)
  - VoiceOver (Mac, built-in)
  - TalkBack (Android, built-in)
```

### Color Contrast (WCAG 2.1 AA)
```
All text meets 4.5:1 minimum:
  ✅ text/primary (#2d342f) on background/canvas (#ffffff) = 11:1
  ✅ text/inverse (#f7f8f7) on surface/evergreen/bold (#297a39) = 4.5:1
  ✅ text/danger (#ba1a1a) on surface/danger/subtle (#ffe9e5) = 5.5:1
  ✅ link/default (#004a76) on background/canvas (#ffffff) = 8.6:1

Tested with:
  - WebAIM Contrast Checker
  - Stark (Figma plugin)
```

### Mobile & Touch
```
- Input min-height: 44px (accessible touch target)
- Show/hide button: 44x44px minimum
- Checkbox: 44x44px hit area (label clicks checkbox)
- Button: 44x44px minimum
- Spacing between fields: ≥ 12px (easy to tap without hitting wrong field)
- Keyboard: native email/password keyboards on mobile
```

---

## Do's & Don'ts

### ✅ Do

- **Use semantic `<form>` and `<input>` tags** — Not `<div>` impersonating form.
- **Always label inputs** — Never placeholder-only labels.
- **Show inline errors after blur** — Not on every keystroke (jarring).
- **Keep password visible after show toggle** — Not auto-hiding.
- **Disable button during submit** — Prevents double-submission.
- **Pre-fill email on error retry** — Password must be cleared (security).
- **Link to "Forgot password" clearly** — Common user need.
- **Show "Remember me"** — Improves UX for repeat users.
- **Use proper input types** — `type="email"` triggers mobile keyboards.
- **Provide helpful error messages** — "Email not found" > "Error".

### ❌ Don't

- **Don't hide labels with placeholder** — Placeholder disappears on focus (accessibility fail).
- **Don't disable submit button** — Confuses users (they think "doesn't work").
- **Don't force password change on first login** — Annoying UX.
- **Don't show password in plain text by default** — Security risk.
- **Don't validate email strictly** — Many valid emails fail strict regex.
- **Don't use generic errors** — "Error" tells user nothing.
- **Don't require password confirmation on login** — Only on signup.
- **Don't auto-submit on Enter in password field** — Let user click sign-in.
- **Don't lose user session data on error** — User should see what they entered.
- **Don't use color alone for errors** — Colorblind users won't see it. Use text + icon.

---

## QA Checklist

**Visual & Interaction**
- [ ] Email input shows email keyboard on mobile
- [ ] Password input shows password keyboard (dots) on mobile
- [ ] Show/hide password button toggles visibility correctly
- [ ] Button shows loading spinner during submission
- [ ] All inputs disabled during submission
- [ ] Error message appears inline below failed input
- [ ] Inline alert appears at top on server error
- [ ] Success toast appears and auto-dismisses after 5 seconds
- [ ] Email pre-filled on error retry, password cleared

**States**
- [ ] Default state: inputs empty, button enabled
- [ ] Hover state: button darkens, link color changes
- [ ] Focus state: focus ring visible (border/focus #339947)
- [ ] Disabled state: inputs/button grayed out, cursor not-allowed
- [ ] Loading state: spinner animates, button disabled
- [ ] Error state: red border, error message, alert banner
- [ ] Success state: toast notification with icon

**Keyboard Navigation**
- [ ] Tab order correct: Email → Password → Show/hide → Checkbox → Button
- [ ] All elements reachable with Tab key
- [ ] Enter submits form from any input or button
- [ ] Escape clears form (if implemented)
- [ ] Focus visible at all times (no focus:none removal)
- [ ] No keyboard traps

**Accessibility**
- [ ] Form announced by screen reader as "Sign in form"
- [ ] Inputs announced with labels: "Email address, edit text"
- [ ] Error announced immediately: "Email or password incorrect"
- [ ] Success announced: "Welcome back! Redirecting..."
- [ ] Checkbox label announced when focused
- [ ] Show/hide button aria-label correct: "Show password" / "Hide password"
- [ ] aria-invalid and aria-describedby set on error inputs
- [ ] Color contrast verified WCAG 2.1 AA (4.5:1 minimum)

**Responsive**
- [ ] Works at 360px (mobile), 1024px (tablet), 1440px (desktop)
- [ ] Touch targets ≥ 44x44px
- [ ] Form max-width maintained (≤400px for readability)
- [ ] Padding adjusted for mobile (space/16 vs space/24)
- [ ] No horizontal scroll on mobile

**Security**
- [ ] Password field uses type="password" (not visible by default)
- [ ] Form uses POST (not GET) for submission
- [ ] HTTPS enforced (production)
- [ ] No password hints in HTML comments or data attributes
- [ ] Password cleared on error (not pre-filled)

**Cross-browser**
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Mobile: iOS Safari, Chrome Android
- [ ] Email/password inputs show native iOS/Android keyboards

---

## Examples en Contexto

### Desktop (1440px)
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                                                     │
│            Sign in to your account                 │
│            Access your Genome workspace            │
│                                                     │
│            Email address                           │
│            [john@example.com_____________________]  │
│                                                     │
│            Password                                │
│            [•••••••••••••_____________________] [👁] │
│                                                     │
│            ☑ Remember me                           │
│                                                     │
│            [   Sign in   ]                         │
│                                                     │
│            Don't have an account?                  │
│            [Create one →]                          │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Mobile (360px)
```
┌──────────────────────┐
│  Sign in            │
│  Access your        │
│  Genome workspace   │
│                     │
│  Email address      │
│  [email@ex.com___] │
│                     │
│  Password           │
│  [•••••••••_____] 👁 │
│                     │
│  ☐ Remember me      │
│                     │
│  [ Sign in ]        │
│                     │
│  Create account →   │
│                     │
└──────────────────────┘
```

### Error State (Desktop)
```
┌─────────────────────────────────────────────────────┐
│  ⚠️ Email or password incorrect. Try again.         │
│                                                     │
│  Sign in to your account                           │
│  Access your Genome workspace                      │
│                                                     │
│  Email address                                     │
│  [john@example.com__________________] ❌           │
│  Email or password incorrect                       │
│                                                     │
│  Password                                          │
│  [•••••••••_____________________] [👁]             │
│  Email or password incorrect                       │
│                                                     │
│  ☑ Remember me                                     │
│                                                     │
│  [   Sign in   ]                                   │
│                                                     │
│  Don't have an account? [Create one →]             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Related Patterns

- [Form Validation](./form-validation.md) — Estrategias de validación en formularios
- [Multi-step Form](./multi-step-form.md) — Formularios con wizard
- [Password Reset](./password-reset.md) — Flujo de recuperación de contraseña (Próximamente)
- [Sign-up Form](./signup-form.md) — Registro de usuarios (Próximamente)

---

## Component References

- [Input](../../components/input.md)
- [Button](../../components/button.md)
- [Checkbox](../../components/checkbox.md)
- [Link](../../components/link.md)
- [Inline Alert](../../components/inline-alert.md)
- [Snackbar](../../components/snackbar.md)

---

## Notas & Changelog

- **2026-05-05** — Patrón documentado. Basado en mejores prácticas de autenticación WCAG 2.1 AA.
- Password show/hide es opcional pero recomendado para UX.
- "Remember me" mejora UX pero requiere decisión de seguridad (30 días recomendado).
- Email siempre debe ser pre-llenado en retry por UX; password nunca (seguridad).

---

*Pattern: Login Form para Genome Evolution DS v2.0.0+*
