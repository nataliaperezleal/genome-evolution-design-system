---
component: "Button"
system: "Genome Plus Design System"
type: "Action"
status: "Draft"
version: "0.1.0"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=392-861"
last_updated: "2026-04-17"
tags: [button, action, cta, form, genome-plus]
---

# Button — Genome Plus Design System

Botón base del sistema para ejecutar acciones inmediatas con variantes de prioridad, semántica y estado.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Type` [`Primary` | `Secondary` | `Tertiary` | `Danger` | `Information` | `Success` | `Warning`] — default: `Primary`
- `Color` [`Evergreen` | `Indigo` | `Default`] — default: `Evergreen` en Primary; `Default` en semánticos/disabled
- `State` [`Default` | `Hovered` | `Pressed` | `Focused` | `Disabled`] — default: `Default`
- `Corner` [`Default` | `Rounded`] — default: `Default`
- `Size` [`SM` | `MD`] — default: `MD`

**Combinaciones inválidas:**
- `Type=Primary/Secondary` + `Color=Default` + `State` distinto de `Disabled`
- `Type=Primary/Secondary` + `State=Disabled` + `Color` distinto de `Default`
- `Type=Tertiary` + `Color` distinto de `Default`
- `Type=Tertiary` + `State=Disabled`
- `Type=Danger/Information/Success/Warning` + `Color` distinto de `Default`
- `Type=Danger/Information/Success/Warning` + `State=Disabled`

**Snippets de uso frecuente:**
- CTA principal: `Type=Primary, Color=Evergreen, State=Default, Corner=Default, Size=MD`
- Acción secundaria: `Type=Secondary, Color=Evergreen, State=Default, Corner=Rounded, Size=MD`
- Acción discreta: `Type=Tertiary, Color=Default, State=Default, Corner=Default, Size=SM`
- Acción destructiva: `Type=Danger, Color=Default, State=Default, Corner=Rounded, Size=MD`
- Confirmación positiva: `Type=Success, Color=Default, State=Default, Corner=Default, Size=SM`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Se necesita ejecutar una acción inmediata.
- La acción requiere jerarquía visual explícita.
- El contexto necesita semántica clara (éxito, peligro, info, advertencia).

### ❌ Evitar cuando
- El patrón correcto es un enlace de navegación (usar Link).
- La UI requiere selección persistente o filtrado.
- El elemento solo comunica estado sin disparar acción.

## Variants

### Type
- `Primary` — Acción principal, alto énfasis.
- `Secondary` — Acción secundaria, menor peso.
- `Tertiary` — Acción discreta, bajo peso.
- `Danger` — Acción destructiva o de riesgo.
- `Information` — Acción informativa.
- `Success` — Confirmación o resultado positivo.
- `Warning` — Acción de precaución.

### Color
- `Evergreen` — Verde de marca. Confirmado en Primary y Secondary.
- `Indigo` — Púrpura alterno. Confirmado en Primary y Secondary.
- `Default` — Neutro/semántico. En Tertiary, tipos semánticos y disabled.

### State
- `Default` — Base.
- `Hovered` — Intensifica superficie.
- `Pressed` — Oscurece énfasis.
- `Focused` — Borde de foco `border/focus` (2px).
- `Disabled` — `background/disabled`, `text/disabled`. Solo en Primary/Secondary.

### Corner
- `Default` — Radio `semantic/sm` (4px).
- `Rounded` — Radio `semantic/pill` (32px).

### Size
- `SM` — Altura 24px. Padding H 12px, V 4px.
- `MD` — Altura 32px. Padding H 16px, V 8px.

## Token Mapping

| Type/Color | Background | Text |
|---|---|---|
| Primary + Evergreen | `surface/evergreen/bold` | `text/inverse` |
| Primary + Indigo | `surface/indigo/bold` | `text/inverse` |
| Danger | `surface/danger/subtle` | `text/danger` |
| Information | `surface/info/subtle` | `text/info` |
| Success | `surface/success/subtle` | `text/success` |
| Warning | `surface/warning/subtle` | `text/warning` |
| Disabled | `background/disabled` | `text/disabled` |

### Typography
- `SM`: `Text/Button/SM` — family/body, weight/semibold, size/12, line-height/16
- `MD`: `Text/Button/MD` — family/body, weight/semibold, size/14, line-height/16

## Accessibility

- Rol semántico: `button`.
- Focus ring visible: `border/focus`, `focus/width=2`.
- No depender solo del color para comunicar prioridad.
- Target táctil mínimo: 24px (SM), 32px (MD).

## Changelog
- `2026-04-17` — v0.1.0. Draft inicial. Propiedades de texto e íconos pendientes de confirmar.
