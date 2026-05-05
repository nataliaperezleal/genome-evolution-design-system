---
pattern: "CRUD Table"
system: "Genome Evolution DS"
type: "Pattern"
category: "data-display"
status: "Production"
created: "2026-05-05"
updated: "2026-05-05"
tags: [table, crud, data-display, edit, delete, actions]
---

# Pattern: CRUD Table — Genome Evolution DS

Tabla de datos con operaciones CRUD: crear, leer, editar, eliminar registros.

---

## Problem / Use Case

### Qué problema resuelve
Mostrar una lista de datos estructurados (registros de usuarios, productos, etc.) con capacidad de editar, eliminar y crear nuevos registros.

### Cuándo usar
- Paneles de administración (users, products, etc.)
- Dashboards con datos tabulares
- Cuando necesitas acciones por fila (edit, delete)

### Cuándo NO usar
- Datos muy simples sin acciones (usar Card Grid o List)
- Gran volumen de filas sin paginación (usar virtualized table)
- Datos jerárquicos complejos (usar tree view)

---

## Anatomy / Structure

### Layout Visual
```
┌──────────────────────────────────────────────────────┐
│ Users (Heading)          [+ New User] [📥] [⚙️]        │ (Header)
├──────────────────────────────────────────────────────┤
│ Name │ Email           │ Status  │ Joined   │ Actions │ (Headers)
├──────────────────────────────────────────────────────┤
│ ☐ Alice │ alice@... │ Active  │ 2 Jan   │ ✏️ 🗑️     │ (Row 1)
│ ☐ Bob   │ bob@...   │ Pending │ 5 Jan   │ ✏️ 🗑️     │ (Row 2)
│ ☐ Carol │ carol@... │ Active  │ 8 Jan   │ ✏️ 🗑️     │ (Row 3)
├──────────────────────────────────────────────────────┤
│ Showing 1-3 of 150        [< Prev] [1] [2] [Next >]  │ (Footer)
└──────────────────────────────────────────────────────┘
```

### Estructura HTML
```html
<div class="table-container">
  <!-- Header with title and actions -->
  <header class="table-header">
    <h2>Users</h2>
    <div class="header-actions">
      <button class="btn-primary">+ New User</button>
      <button class="btn-icon" aria-label="Export">📥</button>
      <button class="btn-icon" aria-label="Settings">⚙️</button>
    </div>
  </header>

  <!-- Scrollable table -->
  <div class="table-wrapper">
    <table role="table">
      <thead>
        <tr>
          <th><input type="checkbox" aria-label="Select all" /></th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row">
          <td><input type="checkbox" value="1" /></td>
          <td><strong>Alice</strong></td>
          <td>alice@example.com</td>
          <td><span class="badge variant-success">Active</span></td>
          <td>2 Jan 2026</td>
          <td>
            <button class="btn-icon" aria-label="Edit Alice">✏️</button>
            <button class="btn-icon" aria-label="Delete Alice">🗑️</button>
          </td>
        </tr>
        <!-- More rows -->
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <footer class="table-footer">
    <span>Showing 1-3 of 150 users</span>
    <nav aria-label="Pagination">
      <button>← Prev</button>
      <button aria-current="page">1</button>
      <button>2</button>
      <button>Next →</button>
    </nav>
  </footer>
</div>
```

---

## Component Composition

| Componente | Rol | Variante | Notas |
|-----------|------|----------|-------|
| **Table** | Contenedor | semantic HTML `<table>` | Roles ARIA, semantic headers |
| **Checkbox** | Select multiple | variant=default | Header para "select all", per-row |
| **Badge** | Status indicator | variant=success/warning/danger | Color semántico según estado |
| **Button** | Primary action | type=Primary, color=Evergreen | "+ New User" |
| **Icon Button** | Row actions | type=Icon, variant=Tertiary | Edit, delete, menu |
| **Paginator** | Navigation | variant=default | Next/prev, page numbers |

### Spacing & Layout

```
Container: space/24 padding

Table header:
  Gap between title and actions: gap/lg (16px)
  Margin-bottom: space/24 (24px)

Table rows:
  Vertical padding per cell: space/12 (12px)
  Horizontal padding per cell: space/16 (16px)
  Hover background: background/interactive/hovered

Actions column:
  Gap between buttons: gap/sm (8px)
  Width: 100px (fixed)

Table footer:
  Margin-top: space/16 (16px)
  Gap: gap/lg (16px)
  Text: body/sm
```

---

## States & Behavior

### Initial State
- Table populated with 10-50 rows (per página)
- Checkboxes desmarcados
- Acciones hover-revealed o siempre visibles

### Row Hover
- Background: background/interactive/hovered (#f7f8f7)
- Acciones: más prominentes (más opaco si inicialmente tenues)
- Duration: 200ms / easing: standard

### Row Selected (checkbox)
- Background: background/selected (#eefbf2 light green)
- Border-left: border/selected (#297a39) 3px accent
- Checkbox: checked

### Edit Row
- Modal/drawer se abre con formulario pre-llenado
- Row original puede estar disabled (dimmed)
- Submit → guardar → recargar tabla → toast success

### Delete Row (with confirmation)
- Modal de confirmación: "Are you sure?"
- Destrucción si user confirma
- Recargar tabla
- Toast: "User deleted"

### Loading State
- Spinner durante API call
- Tabla puede mostrar skeleton loaders
- Button disabled

### Empty State
- Si no hay rows: mostrar Empty State component
- "No users yet. Create your first user →"

### Error State
- Si API error: Inline Alert con retry button
- Usuario puede reintentar o volver

---

## Token Mapping

### Color Tokens

```
Table background: background/canvas (#ffffff)
Row background hover: background/interactive/hovered (#f7f8f7)
Row background selected: background/selected (#eefbf2)
Cell border: border/subtle (#d9deda)
Header background: surface/subtlest (#f7f8f7)
Header text: text/primary (#2d342f)
Row text: text/primary (#2d342f)
Secondary text: text/secondary (#5f6d62)
Status badge (Active): surface/evergreen/subtle (#bfffda)
Status badge (Pending): surface/warning/subtle (#fff0c2)
Status badge (Inactive): surface/danger/subtle (#ffe9e5)
Action button icon: icon/secondary (#728376)
Action button hover: icon/interactive/hovered (#4c574e)
```

### Typography Tokens

```
Table header (h2): heading/sm (20px, semibold)
Column header: label/md (14px, medium)
Row text: body/sm (14px, regular)
Secondary text: body/xs (12px, regular)
Footer text: body/xs (12px, regular)
Status badge: label/sm (12px, medium)
```

### Spacing Tokens

```
Container padding: space/24
Header margin-bottom: space/24
Cell padding: space/12 (vertical), space/16 (horizontal)
Actions gap: gap/sm (8px)
Footer margin-top: space/16
Footer gap: gap/lg (16px)
Row gap (flex): gap/sm (8px)
```

---

## Interaction & Motion

### Row Hover
- Background fade in: 200ms, easing/standard
- Icons appear or become more opaque

### Checkbox Toggle
- Check animation: 120ms, easing/standard
- Row background highlight: 200ms smooth transition

### Delete with Confirmation
- Modal slide-in: 320ms, easing/enter
- Modal slide-out: 320ms, easing/exit

### Page Navigation
- Table fade-out: 200ms
- Reload spinner: 500ms wait
- Fade-in: 200ms

---

## Accessibility

### Semantic HTML
```html
<table role="table">
  <thead>
    <tr role="row">
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

### ARIA Attributes
```html
<!-- Select all checkbox -->
<input 
  type="checkbox" 
  aria-label="Select all users"
/>

<!-- Sortable column -->
<th aria-sort="ascending">Name</th>

<!-- Row actions -->
<button aria-label="Edit user Alice">✏️</button>
<button aria-label="Delete user Alice">🗑️</button>

<!-- Pagination -->
<nav aria-label="Pagination">
  <button aria-current="page">1</button>
</nav>

<!-- Loading -->
<div role="status" aria-live="polite">
  Loading users...
</div>

<!-- Error -->
<div role="alert" aria-live="assertive">
  Failed to load users. <button>Try again</button>
</div>
```

### Keyboard Navigation
```
Tab order: 
  1. New User button
  2. Select all checkbox
  3. Column headers (if sortable)
  4. Row checkboxes
  5. Row action buttons
  6. Pagination buttons

Enter/Space: 
  - Toggle checkbox
  - Activate buttons

Focus visible:
  - All buttons show focus ring
  - Table rows may highlight on keyboard nav
```

### Screen Reader
- Table announced: "Table with X rows and Y columns"
- Column headers announced: "Name, button, not sorted"
- Row actions: "Edit user Alice", "Delete user Alice"
- Pagination: "Page 1 of 5, current page"

---

## Do's & Don'ts

### ✅ Do
- **Use semantic `<table>` with `<thead>` and `<tbody>`**
- **Label row actions clearly: "Edit Alice", not "Edit"**
- **Show row hover state** — helps with targeting
- **Provide select-all checkbox** — improves bulk operations UX
- **Use Badge component for status** — color + text for colorblind users
- **Confirm destructive actions** — "Really delete?"
- **Show loading state** — spinners during API calls
- **Paginate large datasets** — not all 1000 rows at once
- **Make action buttons keyboard accessible** — Tab + Enter
- **Show empty state** — "No users yet" > blank table

### ❌ Don't
- **Don't use color alone for status** — use Badge with text
- **Don't make actions tiny** — 44x44px minimum touch target
- **Don't auto-delete without confirmation** — user error recovery needed
- **Don't hide actions on hover mobile** — always visible on touch
- **Don't virtualize initially** — only if 1000+ rows
- **Don't sort on column header click without UI change** — show sort indicator
- **Don't reload full page on edit** — API update → reload just data
- **Don't make edit modal outside viewport** — ensure scroll to action

---

## QA Checklist

- [ ] Table renders with correct column headers
- [ ] Row data displays correctly formatted
- [ ] Hover state changes background color (200ms animation)
- [ ] Checkbox select-all toggles all rows
- [ ] Individual row checkboxes work independently
- [ ] Edit button opens modal with pre-filled data
- [ ] Modal form submits and reloads table data
- [ ] Delete button shows confirmation modal
- [ ] Confirmation modal deletes row on confirm
- [ ] Pagination buttons navigate correctly
- [ ] Page numbers highlight current page
- [ ] Loading spinner shows during API calls
- [ ] Error state shows retry button
- [ ] Empty state displays when no data
- [ ] Status badges show correct color per status
- [ ] All buttons have hover/focus/active states
- [ ] Tab order correct: left-to-right, top-to-bottom
- [ ] Focus ring visible on all interactive elements
- [ ] Screen reader announces table structure
- [ ] Touch targets ≥ 44x44px
- [ ] Works at 360px, 1024px, 1440px viewports

---

## Related Patterns

- [Filterable List](./filterable-list.md) — Table with filters
- [Card Grid](./card-grid.md) — Alternative to table for mobile
- [Empty State](../feedback/empty-state.md) — What to show when no data

## Component References

- [Table](../../components/table.md)
- [Checkbox](../../components/checkbox.md)
- [Button](../../components/button.md)
- [Icon Button](../../components/icon-button.md)
- [Badge](../../components/badge.md)
- [Paginator](../../components/paginator.md)

---

## Notas

- **2026-05-05** — Patrón documentado como base para CRUD tables
- Design assumes typical admin interface (users, products, etc.)
- Puede adaptarse para datos específicos (cambiar columnas, badges, acciones)
- Para tables muy grandes (10k+ rows) considerar virtualization

---

*Pattern: CRUD Table para Genome Evolution DS v2.0.0+*
