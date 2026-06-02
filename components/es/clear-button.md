---
component: ClearButton
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [acción, inline, ghost, navegación]
---

# ClearButton

## Propósito

ClearButton es un botón interactivo de estilo inline y mínimo, sin fondo sólido en reposo. Combina un label de texto con íconos opcionales izquierdo y derecho (por defecto: arrow-left y arrow-right). Está diseñado para acciones secundarias contextuales embebidas en contenido, listas, paneles o banners, donde un Button de peso completo generaría demasiado ruido visual.

## Referencia Rápida

| Propiedad | Valores | Default |
|-----------|---------|---------|
| color | Default, Evergreen, Indigo | Default |
| type | Default, Information, Success, Danger, Warning | Default |
| state | Default, Hovered, Pressed, Focused, Disabled | Default |
| corner | Default, Rounded | Default |
| showLeadingIcon | true, false | true |
| showTrailingIcon | true, false | true |
| label | string | "Button" |

**Combinaciones inválidas:**
- type=Information, Success, Danger, Warning solo están documentados con color=Indigo.
- state=Disabled solo está documentado para color=Default.
- color=Default combinado con type=Information, Success, Danger, Warning no está documentado.
- color=Evergreen combinado con type=Information, Success, Danger, Warning no está documentado.

## Cuándo Usar

- Para acciones inline embebidas en texto, listas o bloques de contenido.
- Para navegación contextual de tipo anterior / siguiente dentro de una secuencia de contenido.
- Para acciones secundarias de bajo énfasis que no deben competir con un Button principal.
- Para acciones contextuales dentro de banners, alertas o paneles informativos.
- Cuando una acción necesita ser visible pero no visualmente prominente.

## Cuándo NO Usar

- No usar como acción principal de una pantalla o sección — usar Button (Type=Primary) en su lugar.
- No usar en sustitución de Button Secondary cuando la acción necesita mayor presencia visual.
- No usar cuando la acción requiere alta visibilidad o fuerte affordance.
- No usar para navegación entre páginas — usar un componente Link en su lugar.

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Envolvente sin fondo visible en reposo. Aplica fondo solo en estados Hovered, Pressed y Focused. El padding y el radio de esquina siempre se aplican. | Siempre |
| Ícono izquierdo (Leading Icon) | No | Ícono a la izquierda del label. Ícono por defecto: arrow-left (12×12px). | Solo cuando showLeadingIcon=true |
| Label | Sí | Texto del botón. Usa tipografía `Text/Body/XS Strong` (12px, semibold). | Siempre |
| Ícono derecho (Trailing Icon) | No | Ícono a la derecha del label. Ícono por defecto: arrow-right (12×12px). | Solo cuando showTrailingIcon=true |

## Propiedades

| Propiedad | Tipo | Default | Valores | Aplica a | Descripción |
|-----------|------|---------|---------|----------|-------------|
| color | Enum | Default | Default, Evergreen, Indigo | Todos | Controla el color de texto e ícono. Default usa `text/primary`. Evergreen usa `text/evergreen`. Indigo usa `text/indigo`. |
| type | Enum | Default | Default, Information, Success, Danger, Warning | Principalmente color=Indigo | Aplica color semántico al texto y los íconos, sobreescribiendo el token de text del color con el token semántico correspondiente. |
| state | Enum | Default | Default, Hovered, Pressed, Focused, Disabled | Todos | Representa el estado interactivo actual del componente. |
| corner | Enum | Default | Default, Rounded | Todos | Controla la forma del radio de borde. Default aplica `radius/4` (4px). Rounded aplica `semantic/full` (999px). |
| showLeadingIcon | Boolean | true | true, false | Todos | Muestra u oculta el slot del ícono izquierdo. |
| showTrailingIcon | Boolean | true | true, false | Todos | Muestra u oculta el slot del ícono derecho. |
| label | String | "Button" | Cualquier texto | Todos | Texto visible del componente. |

## Estados

| Estado | Descripción | Cambios Visuales |
|--------|-------------|------------------|
| Default | Estado en reposo. Sin fondo visible. | Sin fondo. Color de texto e ícono según el token de `color` o `type`. |
| Hovered | El cursor está sobre el componente. | Fondo: `background/interactive/hovered`. Color de texto e ícono sin cambio. |
| Pressed | El componente está siendo clickeado o presionado. | Fondo: `background/interactive/pressed`. Color de texto e ícono sin cambio. |
| Focused | El componente recibe foco por teclado o de forma programática. | Borde de `border/focus` con grosor `focus/width` (2px). Sin cambio de fondo. |
| Disabled | El componente no es interactivo. | Texto e íconos: `text/disabled`. Sin fondo. Solo documentado para color=Default. |

## Tamaños

ClearButton tiene un único tamaño. No expone una propiedad de Size.

| Padding X | Padding Y | Tipografía | Tamaño Ícono | Notas |
|-----------|-----------|------------|--------------|-------|
| `space/8` (8px) | `space/4` (4px) | `Text/Body/XS Strong` — 12px, semibold, line-height 16px | 12×12px | Tamaño único fijo. |

## Mapeo de Tokens

### Fondo (Background)

| Estado | Token | Notas |
|--------|-------|-------|
| Default | Ninguno | Sin fondo en reposo |
| Hovered | `background/interactive/hovered` | #f7f8f7 — aplica a todos los valores de color y type |
| Pressed | `background/interactive/pressed` | #e9ecea — aplica a todos los valores de color y type |
| Focused | Ninguno | Sin fondo; usa borde en su lugar |
| Disabled | Ninguno | Sin fondo |

### Texto (Text)

| color / type | Token | Valor |
|---|---|---|
| color=Default, type=Default | `text/primary` | #2d342f |
| color=Evergreen, type=Default | `text/evergreen` | #297a39 |
| color=Indigo, type=Default | `text/indigo` | #6b1b99 |
| color=Indigo, type=Information | `text/info` | #2f7cb6 |
| color=Indigo, type=Success | `text/success` | #00885c |
| color=Indigo, type=Danger | `text/danger` | #ba1a1a |
| color=Indigo, type=Warning | `text/warning` | #8c7500 |
| Todos — Disabled | `text/disabled` | |

### Borde (Border)

| Estado | Token | Notas |
|--------|-------|-------|
| Focused | `border/focus` | Grosor: `focus/width` (2px) — aplica a todos los valores de color y type |

### Ícono

Los íconos heredan el color del token de texto de su combinación de color/type correspondiente. No se documenta un token de color de ícono independiente en el material fuente.

### Tipografía

| Token | Tamaño | Line-height | Weight | Familia |
|-------|--------|-------------|--------|---------|
| `Text/Body/XS Strong` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) | `family/body` (Open Sans) |

Espaciado de letras: `letter-spacing/normal` (0px)

### Espaciado

| Token | Valor | Aplicado a |
|-------|-------|------------|
| `gap/sm` | 8px | Gap entre ícono y label |
| `space/8` | 8px | Padding horizontal |
| `space/4` | 4px | Padding vertical |

### Radio de Esquina

| Corner | Token | Valor |
|--------|-------|-------|
| Default | `radius/4` | 4px |
| Rounded | `semantic/full` | 999px |

### Sombra

Pendiente de confirmación.

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Indicador de foco | `border/focus` con grosor `focus/width` (2px) — confirmado en State=Focused para todos los valores de color y type |
| Visual deshabilitado | `text/disabled` aplicado a label e íconos |
| Interacción con teclado | Pendiente de confirmación |
| Roles ARIA | Pendiente de confirmación |
| Comportamiento con lector de pantalla | Pendiente de confirmación |
| Cumplimiento WCAG | Pendiente de confirmación |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|---------------|
| Acción inline neutra | Botón inline neutral con ambos íconos | color=Default, type=Default, state=Default, corner=Default |
| Acción inline Evergreen | Acción inline con color de marca Evergreen | color=Evergreen, type=Default, state=Default, corner=Default |
| Acción inline Indigo | Acción inline con color de marca Indigo | color=Indigo, type=Default, state=Default, corner=Default |
| Píldora redondeada — Default | Acción inline neutra con forma de píldora | color=Default, type=Default, state=Default, corner=Rounded |
| Píldora redondeada — Indigo | Acción inline Indigo con forma de píldora | color=Indigo, type=Default, state=Default, corner=Rounded |
| Danger inline | Acción de color Danger dentro de alerta o panel | color=Indigo, type=Danger, state=Default, corner=Default |
| Information inline | Acción contextual de color Information | color=Indigo, type=Information, state=Default, corner=Default |
| Success inline | Acción contextual de color Success | color=Indigo, type=Success, state=Default, corner=Default |
| Warning inline | Acción contextual de color Warning | color=Indigo, type=Warning, state=Default, corner=Default |
| Estado Hovered | Fondo visible al hacer hover | color=Default, type=Default, state=Hovered, corner=Default |
| Estado Focused | Anillo de foco visible | color=Default, type=Default, state=Focused, corner=Default |
| Estado Disabled | Apariencia no interactiva | color=Default, type=Default, state=Disabled, corner=Default |
| Solo label | Sin íconos | color=Default, type=Default, showLeadingIcon=false, showTrailingIcon=false |

## Pendiente de Confirmación

- type=Information, Success, Danger, Warning solo están documentados con color=Indigo. El comportamiento con color=Default o color=Evergreen no está documentado.
- state=Disabled solo está documentado para color=Default. El comportamiento Disabled para color=Evergreen y color=Indigo no está documentado.
- Los tokens de sombra no están documentados en el material fuente.
- Los roles ARIA y el comportamiento de interacción con teclado no están documentados.
- Las etiquetas para lectores de pantalla y el orden de foco no están especificados.
- No se especifica si los slots de ícono izquierdo y derecho aceptan íconos personalizados o están restringidos a arrow-left / arrow-right.
