---
component: "Button"
system: "Genome Evolution DS"
type: "Component"
status: "[Pendiente de confirmar]"
version: "[Pendiente de confirmar]"
owner: "[Pendiente de confirmar]"
figma_node: "392:861"
last_updated: "2026-04-28"
tags: [button, action, cta, primary, secondary, tertiary, danger, semantic, interactive]
---
 
# Button — Genome Evolution DS
 
Botón del sistema para disparar acciones inmediatas. Es el componente de acción más versátil: 7 tipos (3 de prioridad + 4 semánticos), 3 colores de marca, 5 estados interactivos, 2 esquinas y 2 tamaños. Íconos leading y trailing opcionales.
> Optimizado para consistencia visual, accesibilidad y correcta interpretación semántica por IA.
 
---
 
## Quick Reference (AI-optimized)
 
**Qué es:** Elemento interactivo `<button>` con fondo, borde y texto variables según Type, Color y State. Dos familias visuales: botones de marca (Primary/Secondary/Tertiary — usan colores de marca) y botones semánticos (Danger/Information/Success/Warning — usan colores de estado).
 
**Propiedades:**
- Type [Primary | Secondary | Tertiary | Danger | Information | Success | Warning] — default: Primary
- Color [Evergreen | Indigo | Default] — default: Evergreen (Primary/Secondary), Default (resto)
- State [Default | Hovered | Pressed | Focused | Disabled] — default: Default
- Corner [Default | Rounded] — default: Default
- Size [MD | SM] — default: MD
- label — Default: "Button"
- leadingIcon [true | false] — Default: false
- trailingIcon [true | false] — Default: false
**Restricciones críticas:**
 
| Type | Color disponible | State=Disabled |
|------|-----------------|---------------|
| Primary | Evergreen, Indigo | Solo Color=Default |
| Secondary | Evergreen, Indigo | Solo Color=Default |
| Tertiary | Solo Default | ❌ No tiene Disabled |
| Danger / Information / Success / Warning | Solo Default | ❌ No tienen Disabled |
 
**Tokens Default state — todos los Type:**
 
| Type | Color | Fondo | Borde | Texto |
|------|-------|-------|-------|-------|
| Primary | Evergreen | `surface/evergreen/bold` #297a39 | ninguno | `text/inverse` #f7f8f7 |
| Primary | Indigo | `surface/indigo/bold` #6b1b99 | ninguno | `text/inverse` #f7f8f7 |
| Secondary | Evergreen | `background/canvas` #fff | `border/evergreen` #297a39 1px | `text/evergreen` #297a39 |
| Secondary | Indigo | `background/canvas` #fff | `border/indigo` #6b1b99 1px | `text/indigo` #6b1b99 |
| Tertiary | Default | `background/canvas` #fff | `border/strong` #5f6d62 1px | `text/primary` #2d342f |
| Danger | Default | `surface/danger/subtle` #ffe9e5 | `border/danger` #ba1a1a 1px | `text/danger` #ba1a1a |
| Information | Default | `surface/info/subtle` #e8f2ff | `border/info` #2f7cb6 1px | `text/info` #2f7cb6 |
| Success | Default | `surface/success/subtle` #bfffda | `border/success` #00885c 1px | `text/success` #00885c |
| Warning | Default | `surface/warning/subtle` #fff0c2 | `border/warning` #8c7500 1px | `text/warning` #8c7500 |
| Primary/Secondary | Default | `background/disabled` #f4f6f4 | `border/disabled` #c3cbc5 1px | `text/disabled` #849588 |
 
---
 
## Purpose / Intent
 
**Qué resuelve:** Disparar acciones inmediatas con jerarquía visual clara. El Type comunica la prioridad (Primary = acción más importante) y la semántica (Danger = destructivo, Success = confirmación positiva).
 
**Contexto típico:** CTAs de formularios (Guardar, Continuar), acciones destructivas (Eliminar, Cancelar), confirmaciones modales, acciones contextuales en tablas y listas.
 
---
 
## When to Use / When NOT to Use
 
### ✅ Usar cuando
- Se necesita iniciar una acción, confirmar una decisión o ejecutar una operación.
- La acción tiene consecuencias inmediatas.
- El usuario necesita feedback visual de la interacción.
### ❌ Evitar cuando
- Se necesita navegación entre páginas (usar `<a>` o Link).
- Es selección múltiple de opciones (usar Checkbox o Tag).
- Es un estado informativo sin acción asociada (usar Badge o Inline Alert).
- El texto es parte de contenido corrido (usar Link).
---
 
## Structure (Anatomy)
 
```
[leading icon 16px] [Label — semibold 14px(MD)/12px(SM)] [trailing icon 16px]
←── padding H: 16px(MD)/12px(SM) ───────────────────────────────────────────→
←── height: 32px(MD) / 24px(SM) ────────────────────────────────────────────→
```
 
**Contenedor:**
- Flow: fila, `gap/sm` (8px), items-center, justify-center
- MD: 32px alto — padding H `size/16` (16px), V `space/8` (8px)
- SM: 24px alto — padding H `size/12` (12px), V `space/4` (4px)
- Corner=Default: `semantic/sm` (4px)
- Corner=Rounded: `semantic/pill` (32px — píldora completa)
- Fondo y borde según Type × Color × State
**Íconos:**
- MD: 16×16px — leading: `check` / trailing: `close` (por defecto)
- SM: 12×12px
- Color hereda del texto del botón
**Texto (label):**
- MD: `Text/Button/MD` — 14/16, semibold (600)
- SM: `Text/Button/SM` — 12/16, semibold (600)
- `whitespace-nowrap`
---
 
## Variants (Properties)
 
### Type — jerarquía visual
 
**Botones de marca (requieren Color):**
- **Primary** — Acción más importante de la vista. Fondo sólido del color de marca. Solo debe haber uno por pantalla.
- **Secondary** — Acción secundaria. Fondo claro con borde de color de marca.
- **Tertiary** — Acción discreta. Fondo claro con borde neutro (`border/strong`). Solo Color=Default.
**Botones semánticos (Color=Default siempre):**
- **Danger** — Acción destructiva o irreversible (eliminar, revocar).
- **Information** — Acción informativa o de ayuda.
- **Success** — Confirmación positiva, guardar, completar.
- **Warning** — Acción de precaución — efecto que debe revisarse.
### Color
- **Evergreen** — Color de marca verde primario. Para Primary y Secondary en contextos estándar.
- **Indigo** — Color de marca índigo. Para Primary y Secondary en features de IA o apps secundarias.
- **Default** — Neutro. Para Tertiary (siempre), semánticos (siempre) y Disabled.
### State
- **Default** — Reposo.
- **Hovered** — Mouse encima. Primary: fondo más oscuro. Secondary/Tertiary/semánticos: `background/interactive/hovered`.
- **Pressed** — Click activo. Primary: fondo aún más oscuro. Resto: `background/interactive/pressed`.
- **Focused** — Foco teclado. Outline `border/focus` (#339947) 2px (`focus/width`).
- **Disabled** — No interactivo. Solo Primary y Secondary con Color=Default.
### Corner
- **Default** — `semantic/sm` (4px)
- **Rounded** — `semantic/pill` (32px — píldora completa)
### Size
 
| Size | Alto | Padding H | Padding V | Tipografía | Íconos |
|------|------|-----------|-----------|-----------|--------|
| MD | 32px | `size/16` 16px | `space/8` 8px | `Text/Button/MD` 14px | 16px |
| SM | 24px | `size/12` 12px | `space/4` 4px | `Text/Button/SM` 12px | 12px |
 
---
 
## Token Mapping
 
### Default state — fondo y borde
 
| Type | Color | Fondo token | Hex | Borde token | Hex |
|------|-------|------------|-----|------------|-----|
| Primary | Evergreen | `surface/evergreen/bold` | #297a39 | ninguno | — |
| Primary | Indigo | `surface/indigo/bold` | #6b1b99 | ninguno | — |
| Secondary | Evergreen | `background/canvas` | #ffffff | `border/evergreen` | #297a39 |
| Secondary | Indigo | `background/canvas` | #ffffff | `border/indigo` | #6b1b99 |
| Tertiary | Default | `background/canvas` | #ffffff | `border/strong` | #5f6d62 |
| Danger | Default | `surface/danger/subtle` | #ffe9e5 | `border/danger` | #ba1a1a |
| Information | Default | `surface/info/subtle` | #e8f2ff | `border/info` | #2f7cb6 |
| Success | Default | `surface/success/subtle` | #bfffda | `border/success` | #00885c |
| Warning | Default | `surface/warning/subtle` | #fff0c2 | `border/warning` | #8c7500 |
| Primary/Secondary | Default (Disabled) | `background/disabled` | #f4f6f4 | `border/disabled` | #c3cbc5 |
 
### Default state — texto
 
| Type | Color | Texto token | Hex |
|------|-------|------------|-----|
| Primary | Evergreen / Indigo | `text/inverse` | #f7f8f7 |
| Secondary | Evergreen | `text/evergreen` | #297a39 |
| Secondary | Indigo | `text/indigo` | #6b1b99 |
| Tertiary | Default | `text/primary` | #2d342f |
| Danger | Default | `text/danger` | #ba1a1a |
| Information | Default | `text/info` | #2f7cb6 |
| Success | Default | `text/success` | #00885c |
| Warning | Default | `text/warning` | #8c7500 |
| Primary/Secondary | Default (Disabled) | `text/disabled` | #849588 |
 
### Hovered — fondo
 
| Type | Color | Fondo Hovered |
|------|-------|--------------|
| Primary | Evergreen | `surface/evergreen/bold/hovered` #1f5c2b |
| Primary | Indigo | `surface/indigo/bold/hovered` #4f0077 |
| Secondary | Evergreen | `background/interactive/hovered` #f7f8f7 |
| Secondary | Indigo | `background/interactive/hovered` #f7f8f7 |
| Tertiary | Default | `background/interactive/hovered` #f7f8f7 |
| Danger | Default | `surface/danger/subtle/hovered` #ffd1cc |
| Information | Default | `surface/info/subtle/hovered` #cee5ff |
| Success | Default | `surface/success/subtle/hovered` #7dfabe |
| Warning | Default | `surface/warning/subtle/hovered` #ffe16d |
 
### Pressed — fondo
 
| Type | Color | Fondo Pressed |
|------|-------|--------------|
| Primary | Evergreen | `surface/evergreen/bold/pressed` #174520 |
| Primary | Indigo | `surface/indigo/bold/pressed` #30004a |
| Secondary | Evergreen | `background/interactive/pressed` #e9ecea |
| Secondary | Indigo | `background/interactive/pressed` #e9ecea |
| Tertiary | Default | `background/interactive/pressed` #e9ecea |
| Danger | Default | `surface/danger/subtle/pressed` #ffb4ab |
| Information | Default | `surface/info/subtle/pressed` #96ccff |
| Success | Default | `surface/success/subtle/pressed` #5fdda4 |
| Warning | Default | `surface/warning/subtle/pressed` #e9c400 |
 
> En Secondary y Tertiary el borde de color se mantiene en Hovered y Pressed — solo cambia el fondo.
 
### Focused
 
| Propiedad | Token | Valor |
|-----------|-------|-------|
| Outline | `border/focus` | #339947 |
| Ancho | `focus/width` | 2px |
 
---
 
## Interaction & Motion
 
- **Hover:** Fondo oscurece progresivamente. Primary usa tokens `bold/hovered`. Secundarios usan `bg/interactive/hovered`.
- **Pressed:** Fondo más oscuro aún. Primary usa `bold/pressed`. Secundarios usan `bg/interactive/pressed`.
- **Focused:** Outline `border/focus` #339947 2px visible alrededor del botón.
- **Disabled:** No interactivo — sin hover, sin pressed, sin focus. Cursor `not-allowed`.
---
 
## Accessibility Guidelines
 
- Implementar con `<button type="button">` (o `type="submit"` en formularios).
- State=Disabled: `disabled` attribute — excluye del tab order automáticamente.
- Focus ring (`border/focus` #339947 2px) siempre visible — no suprimir con `outline: none`.
- El `label` debe ser descriptivo de la acción — no solo "OK" o "Sí".
- Si solo hay ícono (sin label), añadir `aria-label` descriptivo.
- Type=Danger: considerar `aria-describedby` con texto explicativo de las consecuencias.
- Contraste confirmado:
  - `text/inverse (#f7f8f7)` sobre `surface/evergreen/bold (#297a39)` — cumple 4.5:1.
  - `text/inverse (#f7f8f7)` sobre `surface/indigo/bold (#6b1b99)` — cumple 4.5:1.
  - `text/evergreen (#297a39)` sobre `background/canvas (#ffffff)` — cumple 4.5:1.
  - `text/danger (#ba1a1a)` sobre `surface/danger/subtle (#ffe9e5)` — cumple 4.5:1.
  - `text/disabled (#849588)` sobre `background/disabled (#f4f6f4)` — [pendiente verificar].
---
 
## Content Guidelines
 
- Labels: verbos de acción directa — "Guardar", "Confirmar", "Eliminar", "Enviar".
- Evitar ambigüedad: no "Sí"/"No" — usar "Confirmar eliminación"/"Cancelar".
- Mantener conciso — máx. 3 palabras. `whitespace-nowrap` limita el ancho.
- Type=Danger: el label debe comunicar la acción destructiva claramente.
---
 
## Examples
 
### Do ✅
- Un solo Primary por pantalla — es la acción más importante.
- Primary Evergreen para apps de marca verde (Modeler, Automation).
- Primary Indigo para features de IA.
- Secondary como acción complementaria junto al Primary.
- Tertiary para acciones de menor prioridad ("Ver detalles", "Cancelar").
- Corner=Rounded en contextos más modernos o pills de acción.
### Don't ❌
- No usar más de un Primary por vista.
- No usar Primary con Color=Default (salvo Disabled).
- No usar Tertiary con Color=Evergreen o Indigo.
- No usar Danger/Information/Success/Warning con Color≠Default.
- No usar Tertiary o semánticos con State=Disabled.
- No suprimir el focus ring en implementación.
---
 
## QA Checklist
 
- [ ] Primary Evergreen: surface/evergreen/bold #297a39, sin borde, text/inverse.
- [ ] Primary Indigo: surface/indigo/bold #6b1b99, sin borde, text/inverse.
- [ ] Secondary Evergreen: background/canvas + border/evergreen #297a39, text/evergreen.
- [ ] Secondary Indigo: background/canvas + border/indigo #6b1b99, text/indigo.
- [ ] Tertiary: background/canvas + border/strong #5f6d62, text/primary.
- [ ] Danger: surface/danger/subtle + border/danger, text/danger.
- [ ] Information: surface/info/subtle + border/info, text/info.
- [ ] Success: surface/success/subtle + border/success, text/success.
- [ ] Warning: surface/warning/subtle + border/warning, text/warning.
- [ ] Disabled: background/disabled + border/disabled, text/disabled.
- [ ] Primary Evergreen Hovered: surface/evergreen/bold/hovered #1f5c2b.
- [ ] Primary Evergreen Pressed: surface/evergreen/bold/pressed #174520.
- [ ] Primary Indigo Hovered: surface/indigo/bold/hovered #4f0077.
- [ ] Primary Indigo Pressed: surface/indigo/bold/pressed #30004a.
- [ ] Secondary/Tertiary Hovered: background/interactive/hovered.
- [ ] Secondary/Tertiary Pressed: background/interactive/pressed.
- [ ] Semánticos Hovered/Pressed: surface/[type]/subtle/hovered y /pressed.
- [ ] Focused: border/focus #339947 2px en todos los types activos.
- [ ] MD: 32px alto, padding H 16px V 8px, Text/Button/MD (14px), íconos 16px.
- [ ] SM: 24px alto, padding H 12px V 4px, Text/Button/SM (12px), íconos 12px.
- [ ] Corner=Default: semantic/sm (4px). Corner=Rounded: semantic/pill (32px).
- [ ] `<button>` nativo implementado.
- [ ] focus ring visible — no suprimido.
- [ ] Disabled: `disabled` attribute.
- [ ] Tertiary y semánticos sin State=Disabled.
---