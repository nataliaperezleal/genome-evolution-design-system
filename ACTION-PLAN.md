# 🚀 Plan de Acción — Genome Evolution DS

**Objetivo:** Pasar de 5.1/10 a 9+/10 en 6 semanas completando 3 tiers prioritarios.

---

## 📍 Tier 1: Crítico (Semanas 1–3)

### ✅ Task 1.1: Crear Carpeta `patterns/` con 5 Patrones Clave
**Effort:** 3 días | **Impact:** ⭐⭐⭐⭐⭐

Los patrones son lo que devs necesitan: "¿Cómo hago un login form? ¿Cómo muestro una tabla con CRUD?"

#### Estructura esperada:
```
patterns/
├── README.md (index de patrones)
├── forms/
│   ├── login.md (email + password + submit)
│   ├── contact-form.md (con validación)
│   └── multi-step.md (wizard/stepper)
├── navigation/
│   ├── sidebar.md (con menú collapsible)
│   ├── breadcrumbs.md
│   └── tabs-with-content.md
├── data-display/
│   ├── table-with-actions.md (CRUD buttons)
│   ├── card-grid.md (producto cards)
│   └── list-with-filters.md
├── feedback/
│   ├── empty-state.md (cuando no hay datos)
│   ├── loading-state.md (skeleton, spinner)
│   ├── form-validation.md (inline errors)
│   └── success-confirmation.md (modal + toast)
└── layouts/
    ├── dashboard-layout.md
    └── settings-page.md
```

#### Cada patrón contiene:
```markdown
# Pattern: Login Form

## Problem
Users need to authenticate. Common use case.

## Anatomy
```
[Header: "Sign in to your account"]
[Input: email + label]
[Input: password + label]
[Checkbox: "Remember me"]
[Button: Primary "Sign in"]
[Link: Tertiary "Forgot password?"]
```
```

## Composition (Components Used)
- Input (email variant)
- Input (password variant)
- Checkbox
- Button (Primary)
- Link

## States & Behavior
- **Initial:** Email + password empty, button disabled (if validation).
- **Filled:** Button enabled, hint below password (if weak).
- **Submitting:** Button shows loading state, inputs disabled.
- **Error:** Inline error under email/password, inline-alert banner.
- **Success:** Toast confirmation, redirect.

## Tokens Used
- spacing: gap/md between form fields.
- spacing: space/16 padding around form.
- typography: label/md for labels.
- color: text/primary, border/default.
- focus: focus.light ring.

## Do's & Don'ts
✅ Clear labels above inputs.
✅ Show inline validation errors.
❌ Don't disable submit button (confuses users).
❌ Don't show password hint in plain text.

## Code Example
[Pseudocode or screenshot showing composition]

## Accessibility
- Form landmark: <form> tag.
- Labels: <label for="email"> → <input id="email">.
- Error: aria-describedby linking input to error message.
- Submit: <button type="submit">.
```

#### Patrones prioritarios (semana 2):
1. **Login form** — más solicitado.
2. **CRUD table** — común en dashboards.
3. **Empty state** — necesario para UX.
4. **Form validation** — desafío común.
5. **Sidebar navigation** — layout fundamental.

**Entregable:** `patterns/` folder con 5 `.md` files documentados, cada uno con:
- Problem statement.
- Component anatomy.
- Composition (qué componentes usar).
- States & behavior.
- Tokens mapping.
- Do's & Don'ts.
- Code/screenshot example.
- Accessibility notes.

---

### ✅ Task 1.2: Publicar Web Site Profesional
**Effort:** 3 días | **Impact:** ⭐⭐⭐⭐

Reemplazar `site/index.html` stub con un Next.js + MDX site profesional.

#### Stack recomendado:
```
Tecnología | Razón
-----------|------
Next.js 14+ | SSR, SSG, API routes, great DX.
MDX | Escribir docs en Markdown, embed components.
Tailwind CSS | Rápido, design tokens como utilidades.
Algolia | Búsqueda en docs (opcional v2.1).
Vercel | Deploy automático en push.
```

#### Estructura:
```
site/
├── .next/ (generated)
├── app/ (Next.js App Router)
│   ├── page.tsx (landing page)
│   ├── layout.tsx (root layout)
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   └── (docs)/
│       ├── [slug]/
│       │   └── page.tsx (dynamic component docs)
│       └── layout.tsx
├── content/ (MDX files)
│   ├── foundations/
│   │   ├── color.mdx
│   │   ├── typography.mdx
│   │   └── spacing.mdx
│   ├── components/
│   │   └── [auto-sync from components/*.md]
│   └── patterns/
│       └── [auto-sync from patterns/*.md]
├── lib/
│   ├── mdx.ts (MDX loader)
│   ├── tokens.ts (load tokens.json)
│   └── utils.ts
├── public/
│   └── figma-screenshots/ (component previews)
├── styles/
│   └── globals.css (Tailwind + design tokens as CSS vars)
├── next.config.js
├── tsconfig.json
└── package.json
```

#### Landing page (`app/page.tsx`):
```
┌─────────────────────────────────────────┐
│  Header: "Genome Evolution Design..."   │
│  Tagline: "Complete design system..."   │
├─────────────────────────────────────────┤
│  [Components] [Patterns] [Foundations]  │
│  [View in Figma] [GitHub] [Docs]        │
├─────────────────────────────────────────┤
│  Features:                              │
│  ✓ 36 components documented             │
│  ✓ 572 design tokens                    │
│  ✓ Light & dark mode                    │
│  ✓ WCAG 2.1 AA accessible               │
├─────────────────────────────────────────┤
│  Latest Components:                     │
│  [Button] [Input] [Modal] [Table]...    │
├─────────────────────────────────────────┤
│  Get Started:                           │
│  → View Components                      │
│  → Read Guidelines                      │
│  → Contribute                           │
└─────────────────────────────────────────┘
```

#### Component docs page (`app/(docs)/[slug]/page.tsx`):
```
┌─────────────────────────────────────────┐
│ Sidebar: [Search] + [Component list]    │
├─────────────────────────────────────────┤
│ Main:                                   │
│ # Button — Genome Evolution DS          │
│                                         │
│ [Description from components/button.md] │
│                                         │
│ ## Variants                             │
│ [Tabs: Primary | Secondary | Tertiary] │
│                                         │
│ ## Props                                │
│ [Props table from button.md]            │
│                                         │
│ ## Accessibility                        │
│ [A11y notes]                            │
│                                         │
│ [Figma link button]                     │
│                                         │
│ ## Related                              │
│ [Link: Icon Button] [Link: Link]        │
└─────────────────────────────────────────┘
```

#### Package.json dependencies:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "@next/mdx": "^14.0.0",
    "react": "^18.0.0",
    "tailwindcss": "^3.3.0",
    "gray-matter": "^4.0.3"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

**Entregable:**
- [ ] Next.js project setup.
- [ ] Landing page.
- [ ] Dynamic component docs pages.
- [ ] Navigation + Sidebar.
- [ ] MDX loader (auto-sync from `components/*.md` + `patterns/*.md`).
- [ ] Deploy to Vercel.
- [ ] Custom domain (si es el caso).

**Resultado:** `genome-evolution.design` (o similar) con:
- Professional landing.
- Searchable component docs.
- Responsive design.
- Dark mode (bonus).

---

### ✅ Task 1.3: Crear CONTRIBUTING.md
**Effort:** 1 día | **Impact:** ⭐⭐⭐

Guía para que otros contribuyan al DS.

```markdown
# Contributing to Genome Evolution DS

## Welcome 👋
Thank you for contributing to Genome Evolution! This guide explains how to add components, fix bugs, or improve documentation.

## Before You Start
- Read [`AUDIT.md`](./AUDIT.md) to understand the current state.
- Check [`manifest.json`](./manifest.json) to see all 36 components.
- Validate the component doesn't already exist.

## Adding a Component

### 1. Design in Figma
- Create component in Figma file: [`Genome Evolution DS`](figma_link).
- Set up all variants (Color, State, Size, Corner, etc.).
- Document in Figma: add "Texto para el md" frame with property descriptions.

### 2. Create Markdown
- Copy `templates/component-template.md`.
- Name it `components/[kebab-case-name].md`.
- Fill in all sections: Purpose, Anatomy, Variants, Token Mapping, Accessibility, QA Checklist.

### 3. Update Manifest
```json
{
  "name": "Component Name",
  "file": "components/component-name.md",
  "type": "Category",
  "status": "Draft",
  "figma_node": "YOUR_NODE_ID",
  "variants": { ... }
}
```

### 4. Submit PR
- Link to Figma node in PR description.
- Reference this guide.
- Tag @nataliaperezleal for review.

## Checklist for New Components

- [ ] Purpose section explains when to use it.
- [ ] Anatomy section shows structure.
- [ ] Variants clearly defined (Type, Color, State, Size, etc.).
- [ ] Token mapping table (background, border, text).
- [ ] Accessibility section (ARIA, keyboard, contrast).
- [ ] QA checklist (all variants tested).
- [ ] Figma node documented.
- [ ] Component added to manifest.json.

## Updating Existing Components
1. Edit the `.md` file.
2. Update Figma file if variants changed.
3. Submit PR with clear "what changed" explanation.

## Reporting Bugs
1. Check if bug already reported (GitHub Issues).
2. Create issue with: description, affected component, screenshot.
3. Tag relevant component.

## Suggesting New Patterns
1. Check if pattern exists in `patterns/`.
2. Create issue with: use case, components involved, screenshot.
3. We'll evaluate and add if valuable.

## Code of Conduct
- Be respectful.
- Provide constructive feedback.
- Help others learn.

## Questions?
Open an issue or email nataliaperezleal@gmail.com.

---
*Keep the DS complete, consistent, and accessible. Thank you!*
```

**Entregable:**
- [ ] CONTRIBUTING.md in root.
- [ ] Clear, friendly tone.
- [ ] Step-by-step for adding components.
- [ ] Checklist to ensure quality.

---

## 📊 Tier 1 Summary

| Task | Status | Days | Deliverable |
|------|--------|------|-------------|
| 1.1 Patterns (5 clave) | 📝 In Progress | 3 | `patterns/` folder |
| 1.2 Web site (Next.js) | 📝 In Progress | 3 | Website en Vercel |
| 1.3 CONTRIBUTING.md | 📝 In Progress | 1 | `CONTRIBUTING.md` |
| **Total Tier 1** | | **7 días** | **3 deliverables** |

**Impact Tier 1:** Design system pasa de 5.1 → 7.0. Ya es útil y contribuible.

---

## 🎯 Tier 2 & 3 Preview

### Tier 2 (Weeks 4–5): Profesional
- [ ] Storybook (interactive components).
- [ ] Brand guide completo (icons, motion, elevation, writing).
- [ ] Accessibility guide centralizada.
- [ ] Motion guidelines detalladas.

### Tier 3 (Week 6): Polish
- [ ] Examples en contexto (5 layouts reales).
- [ ] API reference (si hay código).
- [ ] Theming guide.

**Resultado final:** ~9.2/10 (casi Atlassian).

---

## 🚦 Success Criteria

### Después de Tier 1:
- [ ] Developers pueden usar patrones para new features.
- [ ] Website es navegable y profesional.
- [ ] Community puede contribuir fácilmente.
- [ ] Design system score: 7.0+.

### Después de Tier 2:
- [ ] Componentes se ven "en vivo" en Storybook.
- [ ] Brand es consistente (icons, motion, voice).
- [ ] Accesibilidad es verificable.
- [ ] Design system score: 8.5+.

### Después de Tier 3:
- [ ] Real-world layouts demuestran cómo combinar componentes.
- [ ] Devs saben cómo customizar el sistema.
- [ ] API es clara y completa.
- [ ] Design system score: 9.2+.

---

## 🤝 Próximos Pasos Inmediatos

1. **Hoy:** Review AUDIT.md y este plan.
2. **Mañana:** Start Task 1.1 (Patterns).
3. **Día 3:** Start Task 1.2 (Next.js setup).
4. **Día 5:** Start Task 1.3 (CONTRIBUTING.md).
5. **Día 7:** Review & merge Tier 1.
6. **Semanas 2–3:** Continue Tier 1 work.
7. **Semanas 4–6:** Tier 2 & 3.

---

*Ready to make Genome Evolution DS world-class? Let's go! 🚀*
