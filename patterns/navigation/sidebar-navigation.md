---
pattern: "Sidebar Navigation"
system: "Genome Evolution DS"
type: "Pattern"
category: "navigation"
status: "Production"
created: "2026-05-05"
tags: [navigation, sidebar, menu, layout]
---

# Pattern: Sidebar Navigation — Genome Evolution DS

Menú lateral collapsible para navegación principal de la aplicación.

---

## Anatomy

### Desktop (1440px)
```
┌────────────────┬─────────────────────────────────┐
│ 📊 Genome      │                                 │
│ Dashboard      │ Main content area               │
│ Projects       │                                 │
│ Reports        │                                 │
│ Settings       │                                 │
│ ───────────    │                                 │
│ Help           │                                 │
│ Logout         │                                 │
│ (width: 260px) │ (flex: 1)                       │
└────────────────┴─────────────────────────────────┘
```

### Mobile (360px)
```
┌──────────────┬─────────────────────┐
│ ☰ Genome     │ Main content        │
├──────────────┤                     │
│ (Drawer, z:modal) |
└──────────────┴─────────────────────┘
```

---

## Component Composition

| Componente | Rol | Variante |
|-----------|------|----------|
| **Header** | Branding | Logo + app name |
| **Link** | Menu items | type=Tertiary, active state |
| **Icon** | Visual indicator | Leading icon per item |
| **Divider** | Section separator | border/subtle |
| **Button** | Actions | Logout button |

---

## States & Behavior

### Default
- Menu visible con items de navegación
- Active item: background/selected (#eefbf2) + border-left (#297a39)
- Hover item: background/interactive/hovered (#f7f8f7)

### Mobile
- Menu oculto (collapsed)
- Hamburger button abre drawer modal
- Drawer overlay: z-index/modal, background/overlay
- Escape cierra drawer

### Hover (Desktop)
- Item background: background/interactive/hovered (#f7f8f7)
- Icon color: icon/interactive/hovered
- Duration: 200ms / easing: standard

### Active
- Item background: background/selected (#eefbf2)
- Border-left: border/selected (#297a39) 3px
- Text: text/selected (darker)
- Permanece así en current page

---

## Token Mapping

```
Sidebar background: background/canvas (#ffffff)
Sidebar border-right: border/subtle (#d9deda)
Menu item text: text/secondary (#5f6d62)
Menu item hover bg: background/interactive/hovered (#f7f8f7)
Menu item active bg: background/selected (#eefbf2)
Menu item active border-left: border/selected (#297a39)
Menu item active text: text/selected (#297a39)
Divider: border/subtle (#d9deda)
Logo text: text/primary (#2d342f)
Icon color: icon/secondary (#728376)

Spacing:
  Sidebar width desktop: 260px
  Sidebar padding: space/16
  Menu item gap: gap/sm (8px)
  Icon + label gap: gap/sm (8px)
  Section gap: gap/md (12px)
```

---

## Interaction & Motion

### Menu Item Hover
- Background fade-in: 200ms, easing/standard
- Icon color change: 200ms

### Mobile Drawer Open
- Slide-in from left: 320ms, easing/enter
- Overlay fade-in: 320ms, easing/enter

### Mobile Drawer Close
- Slide-out to left: 320ms, easing/exit
- Overlay fade-out: 320ms, easing/exit

### Active State Transition
- Border-left slide-in: 120ms, easing/standard
- Background fill: 120ms, easing/standard

---

## Accessibility

### Semantic
- Navigation landmark: `<nav role="navigation">`
- Links: `<a>` tags con href
- Hamburger: `<button aria-label="Menu">`
- Active link: `aria-current="page"`

### ARIA
```html
<nav role="navigation" aria-label="Main">
  <a href="/dashboard" aria-current="page">Dashboard</a>
  <a href="/projects">Projects</a>
</nav>

<!-- Mobile hamburger -->
<button 
  aria-label="Menu" 
  aria-expanded="false"
  aria-controls="sidebar"
>☰</button>
```

### Keyboard
- Tab through menu items
- Enter activates link
- Escape closes mobile drawer
- Focus visible on all items

### Screen Reader
- Navigation announced: "Main navigation"
- Active item: "Current page: Dashboard"
- Hamburger button: "Menu, toggle button"

---

## Do's & Don'ts

### ✅ Do
- Mantener sidebar visible en desktop
- Mostrar icon + label (no icon solo)
- Highlight active page claramente
- Use section dividers para agrupar items
- Make hamburger always accessible on mobile

### ❌ Don't
- No auto-collapse sidebar (user preference)
- No hide labels on icon-only hover (accessibility)
- No use colors para indicar active (use background + border)
- No truncate labels (adjust width o use tooltip)

---

## QA Checklist

- [ ] Sidebar renders with logo and menu items
- [ ] Menu items are clickable links
- [ ] Active item has background/selected color
- [ ] Active item has left border accent
- [ ] Hover changes background color (200ms)
- [ ] Mobile hamburger visible at <1024px
- [ ] Hamburger opens drawer with menu
- [ ] Escape key closes mobile drawer
- [ ] Tab order correct through menu items
- [ ] Focus ring visible
- [ ] Screen reader announces "Main navigation"
- [ ] Screen reader announces current page
- [ ] Drawer overlay blocks main content on mobile
- [ ] Icons visible and correct
- [ ] Dividers separate menu sections
- [ ] Works at 360px, 1024px, 1440px

---

## Related Patterns

- [Top Navigation](./top-navigation.md) — Alternative to sidebar
- [Breadcrumbs](./breadcrumbs.md) — Complementary navigation

## Component References

- [Link](../../components/link.md)
- [Icon Button](../../components/icon-button.md)
- [Button](../../components/button.md)

---

*Pattern: Sidebar Navigation para Genome Evolution DS v2.0.0+*
