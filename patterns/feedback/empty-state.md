---
pattern: "Empty State"
system: "Genome Evolution DS"
type: "Pattern"
category: "feedback"
status: "Production"
created: "2026-05-05"
tags: [empty-state, no-data, feedback, onboarding]
---

# Pattern: Empty State — Genome Evolution DS

Mostrar un mensaje amigable cuando no hay datos para mostrar.

---

## Anatomy

```
┌─────────────────────────────────┐
│                                 │
│            [📦 Illustration]     │
│                                 │
│    No projects yet              │ (heading/sm)
│    Create your first project    │ (body/sm)
│    to get started.              │
│                                 │
│         [+ New Project]         │ (Button Primary)
│                                 │
│    Need help? [Read the guide] →│ (Link)
│                                 │
└─────────────────────────────────┘
```

---

## Component Composition

| Componente | Rol |
|-----------|------|
| **Illustration** | Visual (can be SVG or icon) |
| **Heading** | Title (heading/sm) |
| **Body Text** | Description (body/sm) |
| **Button** | Primary action (+ Create) |
| **Link** | Secondary action (Help) |

---

## States & Behavior

### Default
- Icon/illustration centered
- Clear title + description
- CTA button visible
- Secondary help link

### With Different Actions
- Crear: "+ New Item"
- Upload: "🔼 Upload file"
- Search: "No results. Try different search."

### Loading State (before empty)
- Show skeleton loaders
- Spinners in content area
- Not empty state yet (data might load)

---

## Token Mapping

```text
Background:          var(--ge-color-role-background-canvas)
Icon:                var(--ge-color-role-icon-secondary)
Title:               var(--ge-color-role-text-primary)
Description:         var(--ge-color-role-text-secondary)
Button background:   var(--ge-color-role-surface-evergreen-bold)
Button text:         var(--ge-color-role-text-inverse)
Link:                var(--ge-color-role-link-default)

Spacing:
  Container padding:         var(--ge-spacing-space-32)
  Icon margin-bottom:        var(--ge-spacing-space-24)
  Title margin-bottom:       var(--ge-spacing-space-12)
  Description margin-bottom: var(--ge-spacing-space-24)
  Button margin-bottom:      var(--ge-spacing-space-16)
```

---

## Interaction & Motion

### Initial Load
- Fade in: 300ms, curva de entrada estándar
- Icons scale up: 0.8 → 1.0, 300ms

### Button Hover
- Background: `var(--ge-color-role-surface-evergreen-bold-hovered)`, 200ms

## Accessibility

### Semantic
- Container: `<div role="region" aria-label="Empty state">`
- Heading: `<h2>` with clear message
- Icon: `aria-hidden="true"` (decorative)
- Button: meaningful text, not "Click here"

### ARIA
```html
<div role="region" aria-label="Empty state">
  <h2>No projects yet</h2>
  <p>Create your first project to get started.</p>
  <button>+ New Project</button>
</div>
```

### Do's & Don'ts

✅ Do:
- Be encouraging, not sad 😊
- Clear action: "+ New Item", not "Create"
- Help link to docs
- Icon/illustration for visual break

❌ Don't:
- Sad faces (depressing UX)
- Generic "No data" (not helpful)
- No action buttons (what to do?)
- Jargon/technical language

---

## QA Checklist

- [ ] Empty state displays when no data
- [ ] Icon/illustration visible
- [ ] Title clearly states situation
- [ ] Description explains what to do
- [ ] CTA button is prominent and actionable
- [ ] Help link visible
- [ ] Button click creates new item
- [ ] Focus ring visible on button
- [ ] Works at 360px, 1024px, 1440px
- [ ] Screen reader announces situation

---

## Related Patterns

- Loading State — Before empty (próximamente)
- Error Recovery — When something failed (próximamente)

## Component References

- [Button](../../components/button.md)
- [Link](../../components/link.md)
- [Inline Alert](../../components/inline-alert.md)

---

*Pattern: Empty State para Genome Evolution DS v2.0.0+*
