---
component: "Checkbox"
system: "Genome Plus Design System"
type: "Form / Selection"
status: "Production"
version: "1.0"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201"
last_updated: "2026-04-13"
tags: [checkbox, form, selection, input, control]
---

# Checkbox — Genome Plus Design System

Control de selección binaria o indeterminada para marcar opciones de forma independiente.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Color` [`Evergreen` | `Default` | `Indigo` | `Disabled`] — default: `Default`
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Disable`] — default: `Default`
- `Type` [`Default` | `Check` | `Mixted`] — default: `Default`
- `Show Label` [`true` | `false`] — default: `True`
- `Label` — string libre. Default: `Label`

**Combinaciones inválidas:**
- `Color=Disabled` + `State=Hovered/Pressed/Focused` — deshabilitado no es interactuable.
- `Type=Default` interpretado como seleccionado — Default = vacío/sin marcar.
- `Show Label=False` sin `aria-label` alternativo.

**Snippets de uso frecuente:**
- Formulario estándar: `Color=Default, Type=Check, State=Default, Show Label=True`
- Selección parcial tabla: `Color=Evergreen, Type=Mixted, State=Default, Show Label=False`
- Deshabilitado sin marcar: `Color=Disabled, Type=Default, State=Disable, Show Label=True`
- Deshabilitado marcado: `Color=Disabled, Type=Check, State=Disable, Show Label=True`

## When to Use / When NOT to Use

### ✅ Usar cuando
- El usuario puede seleccionar cero, una o varias opciones de forma independiente.
- Confirmar aceptación (términos, permisos, condiciones).
- Representar estado indeterminado en selección parcial (Type=Mixted).
- Selección masiva en tablas.

### ❌ Evitar cuando
- Solo una opción puede estar activa a la vez (usar Radio Button).
- La acción activa una función en tiempo real (usar Switch).
- La lista supera 7–8 ítems visibles (considerar Select).

## Variants

### Color
- `Evergreen` — Marca primaria verde. `surface/evergreen/bold` + `text/on-brand`.
- `Default` — Neutro oscuro.
- `Indigo` — Marca secundaria púrpura. `surface/indigo/bold` + `text/on-brand`.
- `Disabled` — Atenuado. Siempre con `State=Disable`.

### State
- `Default` — Reposo.
- `Hovered` — Fondo `background/interactive/hovered`.
- `Pressed` — Fondo `background/interactive/pressed`.
- `Focused` — Anillo de foco: `ring/color`, `ring/width`, `ring/offset`.
- `Disable` — No interactuable. Opacidad 40%.

### Type
- `Default` — Vacío. Sin selección. Estado inicial.
- `Check` — Seleccionado. Relleno + ícono ✓.
- `Mixted` — Indeterminado. Relleno + ícono —. Selección parcial del grupo.

## Anatomy
- **Control Box** (16×16px): Contiene el estado visual.
- **Check/Minus Icon**: Interno, automático según Type.
- **Label**: A la derecha del control cuando Show Label=True.

## Accessibility
- `role="checkbox"` con `aria-checked="true/false/mixed"`.
- `State=Disable` → `aria-disabled="true"` (no `disabled` nativo).
- Focus ring visible.
- Sin label visible → siempre `aria-label` descriptivo.

## Changelog
- `2026-04-13` — v1.0. Production.
