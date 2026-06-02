---
component: Button
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [acción, interactivo, formulario, cta]
---

# Button

## Propósito

El componente Button comunica una acción disponible y permite al usuario ejecutarla. Es el elemento principal de llamada a la acción en pantallas, formularios y diálogos. Soporta múltiples tipos semánticos, dos paletas de color de marca, dos tamaños y variantes de esquinas rectas o redondeadas.

## Referencia Rápida

| Propiedad | Valores | Default |
|-----------|---------|---------|
| Type | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Primary |
| Color | Evergreen, Indigo, Default | Evergreen |
| Size | SM, MD | MD |
| State | Default, Hovered, Pressed, Disabled, Focused | Default |
| Corner | Default, Rounded | Default |
| showLeadingIcon | true, false | false |
| showTrailingIcon | true, false | false |
| label | string | "Button" |

**Combinaciones inválidas:**
- Type=Tertiary solo acepta Color=Default. Color=Evergreen y Color=Indigo no son válidos con Tertiary.
- Type=Danger, Information, Success, Warning no aceptan Color=Evergreen ni Color=Indigo.
- Color=Default no es válido para Type=Primary ni Type=Secondary.

## Cuándo Usar

- Para la acción principal de una pantalla o sección (Type=Primary). Solo uno por vista.
- Para acciones secundarias que complementan la acción principal (Type=Secondary).
- Para acciones de bajo énfasis que no requieren peso visual (Type=Tertiary).
- Para acciones destructivas o irreversibles (Type=Danger).
- Para acciones contextuales relacionadas con estados informativos, de éxito o de advertencia (Type=Information, Success, Warning).

## Cuándo NO Usar

- No usar para navegación entre páginas o secciones — usar un componente Link en su lugar.
- No colocar más de un botón Type=Primary por vista.
- No usar Type=Tertiary cuando la acción requiere prominencia o visibilidad.
- No usar para elementos decorativos o no interactivos.

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Envolvente interactivo. Aplica fondo, borde, padding y radio de esquina. | Siempre |
| Label | Sí | Texto visible dentro del botón. Usa tipografía `button/sm` o `button/md`. | Siempre |
| Ícono izquierdo (Leading Icon) | No | Ícono ubicado a la izquierda del label. | Solo cuando showLeadingIcon=true |
| Ícono derecho (Trailing Icon) | No | Ícono ubicado a la derecha del label. | Solo cuando showTrailingIcon=true |

## Propiedades

| Propiedad | Tipo | Default | Valores | Aplica a | Descripción |
|-----------|------|---------|---------|----------|-------------|
| Type | Enum | Primary | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Todos | Define el rol semántico y el estilo visual del botón. |
| Color | Enum | Evergreen | Evergreen, Indigo, Default | Primary, Secondary, Tertiary | Aplica la paleta de color de marca. Evergreen es el color primario de marca de Genome Plus. |
| Size | Enum | MD | SM, MD | Todos | Controla la altura, el padding y el tamaño tipográfico. |
| State | Enum | Default | Default, Hovered, Pressed, Disabled, Focused | Todos | Representa el estado interactivo actual del botón. |
| Corner | Enum | Default | Default, Rounded | Todos | Controla la forma del radio de borde. Default aplica `semantic/sm` (4px). Rounded aplica `semantic/pill`. |
| showLeadingIcon | Boolean | false | true, false | Todos | Muestra u oculta el espacio del ícono izquierdo. |
| showTrailingIcon | Boolean | false | true, false | Todos | Muestra u oculta el espacio del ícono derecho. |
| label | String | "Button" | Cualquier texto | Todos | Contenido de texto visible del botón. |

## Estados

| Estado | Descripción | Cambios Visuales |
|--------|-------------|------------------|
| Default | Estado en reposo. Sin interacción activa. | Se aplican los tokens base de fondo, texto y borde. |
| Hovered | El cursor está sobre el botón. | El fondo cambia al token de surface hovered correspondiente (ej. `surface/evergreen/bold/hovered`). |
| Pressed | El botón está siendo clickeado o presionado. | El fondo cambia al token de surface pressed correspondiente (ej. `surface/evergreen/bold/pressed`). |
| Focused | El botón recibe foco por teclado o de forma programática. | Se aplica un borde de `border/focus` con grosor `focus/width` (2px) alrededor del contenedor. |
| Disabled | El botón no es interactivo. | Fondo: `background/disabled`. Texto: `text/disabled`. Borde: `border/disabled`. |

## Tamaños

| Size | Altura | Padding X | Padding Y | Tipografía | Tamaño Ícono | Notas |
|------|--------|-----------|-----------|------------|--------------|-------|
| SM | 24px | `space/12` (12px) | `space/4` (4px) | `button/sm` (12px / semibold) | 16px | Compacto. Para layouts densos o contextos inline. |
| MD | 32px | `space/16` (16px) | `space/8` (8px) | `button/md` (14px / semibold) | 16px | Estándar. Tamaño por defecto para la mayoría de casos de uso. |

## Mapeo de Tokens

### Fondo (Background)

| Type / State | Token | Notas |
|---|---|---|
| Primary Evergreen — Default | `surface/evergreen/bold` | #297a39 |
| Primary Evergreen — Hovered | `surface/evergreen/bold/hovered` | |
| Primary Evergreen — Pressed | `surface/evergreen/bold/pressed` | |
| Primary Indigo — Default | `surface/indigo/bold` | |
| Primary Indigo — Hovered | `surface/indigo/bold/hovered` | |
| Primary Indigo — Pressed | `surface/indigo/bold/pressed` | |
| Secondary / Tertiary — Default | `background/canvas` | Fondo transparente o de lienzo |
| Secondary — Hovered | `background/interactive/hovered` | |
| Secondary — Pressed | `background/interactive/pressed` | |
| Danger — Default | `surface/danger/subtle` | |
| Danger — Hovered | `surface/danger/subtle/hovered` | |
| Danger — Pressed | `surface/danger/subtle/pressed` | |
| Information — Default | `surface/info/subtle` | |
| Information — Hovered | `surface/info/subtle/hovered` | |
| Information — Pressed | `surface/info/subtle/pressed` | |
| Success — Default | `surface/success/subtle` | |
| Success — Hovered | `surface/success/subtle/hovered` | |
| Success — Pressed | `surface/success/subtle/pressed` | |
| Warning — Default | `surface/warning/subtle` | |
| Warning — Hovered | `surface/warning/subtle/hovered` | |
| Warning — Pressed | `surface/warning/subtle/pressed` | |
| Todos — Disabled | `background/disabled` | |

### Texto (Text)

| Type | Token |
|------|-------|
| Primary (Evergreen o Indigo) | `text/inverse` |
| Secondary Evergreen | `text/evergreen` |
| Secondary Indigo | `text/indigo` |
| Tertiary | `text/primary` |
| Danger | `text/danger` |
| Information | `text/info` |
| Success | `text/success` |
| Warning | `text/warning` |
| Todos — Disabled | `text/disabled` |

### Borde (Border)

| State / Type | Token | Notas |
|---|---|---|
| Focused | `border/focus` | Grosor: `focus/width` (2px) |
| Secondary Evergreen | `border/evergreen` | |
| Secondary Indigo | `border/indigo` | |
| Danger | `border/danger` | |
| Todos — Disabled | `border/disabled` | |
| Borde neutro / Default | `border/strong` | Aplicado a Tertiary y botones con Color=Default |

### Tipografía

| Size | Token | Tamaño | Line-height | Weight |
|------|-------|--------|-------------|--------|
| SM | `button/sm` | 12px (`size/12`) | 16px (`line-height/16`) | semibold (`weight/semibold`) |
| MD | `button/md` | 14px (`size/14`) | 20px | semibold (`weight/semibold`) |

Familia: `family/body` (Open Sans)
Espaciado de letras: `letter-spacing/normal` (0px)

### Espaciado

| Token | Valor | Aplicado a |
|-------|-------|------------|
| `gap/sm` | 8px | Gap entre ícono y label |
| `space/12` | 12px | Padding horizontal — SM |
| `space/16` | 16px | Padding horizontal — MD |
| `space/4` | 4px | Padding vertical — SM |
| `space/8` | 8px | Padding vertical — MD |

### Radio de Esquina

| Corner | Token | Valor |
|--------|-------|-------|
| Default | `semantic/sm` | 4px |
| Rounded | `semantic/pill` | Radio tipo píldora completo |

### Sombra

Pendiente de confirmación.

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Indicador de foco | `border/focus` con grosor `focus/width` (2px) — confirmado visualmente en State=Focused |
| Visual deshabilitado | `background/disabled` + `text/disabled` + `border/disabled` |
| Interacción con teclado | Pendiente de confirmación |
| Roles ARIA | Pendiente de confirmación |
| Comportamiento con lector de pantalla | Pendiente de confirmación |
| Cumplimiento WCAG | Pendiente de confirmación |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|---------------|
| CTA Primary — Evergreen | Botón de acción principal, tamaño estándar, esquina por defecto | Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Default |
| CTA Primary — Rounded | Acción principal con forma de píldora | Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Rounded |
| CTA Primary — Indigo | Color de marca alternativo para acción principal | Type=Primary, Color=Indigo, Size=MD, State=Default, Corner=Default |
| Acción Secundaria | Acción de soporte con borde | Type=Secondary, Color=Evergreen, Size=MD, State=Default |
| Tertiary — Sin énfasis | Acción fantasma sin peso visual prominente | Type=Tertiary, Color=Default, Size=SM, State=Default |
| Primary Compacto | Botón primario pequeño para interfaces densas | Type=Primary, Color=Evergreen, Size=SM, State=Default, Corner=Default |
| Acción Destructiva | Botón Danger para acciones irreversibles | Type=Danger, Size=MD, State=Default |
| Informacional | Botón contextual vinculado a un estado informativo | Type=Information, Size=MD, State=Default |
| Estado Deshabilitado | Botón no interactivo | Type=Primary, Color=Evergreen, Size=MD, State=Disabled |
| Con Ícono Izquierdo | Botón con ícono a la izquierda | Type=Primary, Color=Evergreen, Size=MD, showLeadingIcon=true |
| Con Ícono Derecho | Botón con ícono a la derecha | Type=Primary, Color=Evergreen, Size=MD, showTrailingIcon=true |

## Pendiente de Confirmación

- Los tokens de sombra por Type o State no están documentados en el material fuente.
- Los roles ARIA y el comportamiento de interacción con teclado no están documentados en el material fuente.
- Las etiquetas para lectores de pantalla y el orden de foco no están especificados.
- No se especifica si el slot de ícono acepta cualquier ícono o está restringido a íconos específicos.
- La interacción entre State=Disabled y Corner=Rounded no está documentada explícitamente.
