---
component: "Button"
system: "Genome Evolution Design System"
type: "Button"
status: "Production"
version: "2.0"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=392-861"
last_updated: "2026-10-19"
tags:
  - "botón"
  - "acción"
  - "llamada-a-la-acción"
---

# Button — Genome Evolution Design System

Botón de acción interactiva. Comunica una acción disponible y permite al usuario ejecutarla. Es el elemento principal de llamada a la acción en pantallas, formularios y diálogos.

## Referencia rápida

### Qué es

Botón de acción interactiva (fuente: descripción del componente en Figma).

### Propiedades clave

- Type [Primary | Secondary | Tertiary | Danger | Information | Success | Warning] — default: Primary
- Color [Evergreen | Indigo | Default] — default: Evergreen
- Size [SM | MD] — default: MD
- State [Default | Hovered | Pressed | Disabled | Focused] — default: Default
- Corner [Default | Rounded] — default: Default
- showLeadingIcon [true | false] — default: false
- showTrailingIcon [true | false] — default: false
- label — texto visible del botón (default: "Button")

### Configuración por defecto

Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Default, showLeadingIcon=false, showTrailingIcon=false, label=Button

### Combinaciones inválidas

- Type=Tertiary + Color=Evergreen o Color=Indigo (Tertiary solo acepta Color=Default)
- Type=Danger, Information, Success o Warning + Color=Evergreen o Color=Indigo
- State=Disabled + Type=Tertiary, Danger, Information, Success o Warning (la variante no existe)
- Type=Primary o Secondary + Color=Default + State distinto de Disabled (la variante no existe)

### Uso típico

- Acción principal: Type=Primary, Color=Evergreen, Size=MD, Corner=Default
- Acción secundaria: Type=Secondary, Color=Evergreen, Size=MD
- Acción sin énfasis: Type=Tertiary, Color=Default, Size=SM
- Acción destructiva: Type=Danger, Size=MD
- Variante redondeada: Type=Primary, Color=Indigo, Corner=Rounded, Size=SM

---

## Propósito / Intención

### Problema que resuelve

Comunica una acción disponible y permite al usuario ejecutarla (fuente: descripción del componente en Figma).

### Contexto típico

Pantallas, formularios y diálogos (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Acción principal de una pantalla
- Confirmación de formulario
- Acción destructiva con contexto Danger
- Acción contextual informativa o de estado

---

## Cuándo NO usar

- Para navegación entre páginas (usar Link)
- Para acciones múltiples de igual jerarquía sin contexto claro
- Más de un Primary por vista

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Contenedor | Requerido | Marco rectangular con auto layout horizontal. El relleno, el borde y el radio dependen de Type, Color, State y Corner. |
| Icono inicial | Opcional — showLeadingIcon | Icono de 16×16, por defecto "check". Reemplazable mediante el slot leadingIcon. |
| Label | Requerido | Texto del botón. Por defecto: "Button". |
| Icono final | Opcional — showTrailingIcon | Icono de 16×16, por defecto "close". Reemplazable mediante el slot trailingIcon. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | Size=SM: 24. Size=MD: 32 (algunas variantes miden 30 o 34, ver Aclaraciones pendientes). |
| Ancho | Se ajusta al contenido. Con el label por defecto: SM 64–66, MD 79–81. |
| Padding | Size=MD: space/16 horizontal, space/8 vertical (Primary + Evergreen + Default usa 8 arriba / 6 abajo). Size=SM: space/12 horizontal, space/4 vertical. |
| Gap | gap/sm entre icono y label |
| Radio | Corner=Default: semantic/sm (4). Corner=Rounded: semantic/pill (32). |

---

## Semántica

Según la descripción de Figma, Button comunica una acción disponible. Type transmite jerarquía y contexto: Primary para la acción principal, Danger para acciones destructivas, e Information, Success y Warning para acciones contextuales o de estado.

---

## Iconografía

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | Icono de 16×16 controlado por showLeadingIcon. Por defecto: "check". Reemplazable mediante el slot leadingIcon. |
| Trailing | Icono de 16×16 controlado por showTrailingIcon. Por defecto: "close". Reemplazable mediante el slot trailingIcon. |

### Reglas

- Los iconos solo son visibles cuando su propiedad show es true.
- Color del icono: [Pending confirmation] (no hay token de icono vinculado en las variantes revisadas).
- Iconos permitidos para los slots: [Pending confirmation]

---

## Variantes (Propiedades)

### Type

| Valor | Descripción |
|--------|--------|
| Primary | Relleno sólido. Acción principal. Disponible con Color=Evergreen e Indigo (todos los State excepto Disabled) y Color=Default (solo State=Disabled). |
| Secondary | Contorno con borde de 1px. Acción secundaria. Disponible con Color=Evergreen e Indigo (todos los State excepto Disabled) y Color=Default (solo State=Disabled). |
| Tertiary | Fondo canvas con borde de 1px border/strong. Acción sin énfasis. Solo Color=Default. States: Default, Hovered, Pressed, Focused. |
| Danger | Relleno rojo sutil con borde border/danger. Acción destructiva. Solo Color=Default. States: Default, Hovered, Pressed, Focused. |
| Information | Relleno azul sutil con borde border/info. Acción contextual informativa. Solo Color=Default. States: Default, Hovered, Pressed, Focused. |
| Success | Relleno verde sutil con borde border/success. Acción contextual de estado. Solo Color=Default. States: Default, Hovered, Pressed, Focused. |
| Warning | Relleno amarillo sutil con borde border/warning. Acción contextual de estado. Solo Color=Default. States: Default, Hovered, Pressed, Focused. |

### Color

| Valor | Descripción |
|--------|--------|
| Evergreen | Paleta de verde primario. Color de marca por defecto para botones Primary y Secondary (fuente: descripción de la propiedad Color en Figma, que nombra la marca "Genome Plus"). |
| Indigo | Paleta indigo. Disponible para Primary y Secondary. |
| Default | Neutro. Usado por Tertiary, Danger, Information, Success y Warning, y por el estado Disabled de Primary y Secondary. |

### Size

| Valor | Descripción |
|--------|--------|
| SM | 24px de alto. Label: Text/Button/SM (size/12). |
| MD | 32px de alto. Label: Text/Button/MD (size/14). |

### State

| Valor | Descripción |
|--------|--------|
| Default | Apariencia base. |
| Hovered | Apariencia en hover (ver Estados). |
| Pressed | Apariencia al presionar (ver Estados). |
| Disabled | Apariencia deshabilitada. Solo Primary y Secondary con Color=Default. |
| Focused | Borde de 2px border/focus. |

### Corner

| Valor | Descripción |
|--------|--------|
| Default | Radio semantic/sm (4). |
| Rounded | Radio de píldora semantic/pill (32). |

### showLeadingIcon

| Valor | Descripción |
|--------|--------|
| true | Muestra el icono inicial. |
| false | Oculta el icono inicial. |

### showTrailingIcon

| Valor | Descripción |
|--------|--------|
| true | Muestra el icono final. |
| false | Oculta el icono final. |

### label

Texto visible del botón. Valor por defecto: "Button".

---

## Estados

| Estado | Descripción | Cambios visuales |
|--------|--------|--------|
| Default | Apariencia base. | Primary: relleno surface/evergreen/bold o surface/indigo/bold, texto text/inverse. Secondary: relleno background/canvas, borde de 1px border/evergreen o border/indigo, texto text/evergreen o text/indigo. Tertiary: relleno background/canvas, borde border/strong, texto text/primary. Danger, Information, Success, Warning: relleno sutil con borde y texto de los tokens correspondientes. |
| Hovered | Apariencia en hover. | Primary: relleno surface/evergreen/bold/hovered o surface/indigo/bold/hovered. Secondary y Tertiary: relleno background/interactive/hovered. Danger, Information, Success, Warning: relleno surface/{type}/subtle/hovered. |
| Pressed | Apariencia al presionar. | Primary: relleno surface/evergreen/bold/pressed o surface/indigo/bold/pressed. Secondary y Tertiary: relleno background/interactive/pressed. Danger, Information, Success, Warning: relleno surface/{type}/subtle/pressed. |
| Disabled | Apariencia no interactiva. | Primary: relleno background/disabled, texto text/disabled. Secondary: relleno background/disabled, borde border/disabled, texto text/disabled. |
| Focused | Apariencia de foco. | Borde de 2px (`border.base.focus.width`) `border/focus`; relleno y texto como en Default. |

---

## Mapeo de tokens

Los tokens están confirmados por variante. Para Indigo, Information, Success y Warning el emparejamiento sigue el conjunto de variables del componente y la nomenclatura de las variantes Evergreen y Danger revisadas individualmente. Los tokens de espaciado, tamaño, ancho y radio se confirmaron como variables de Figma, pero no se contrastaron con los archivos de tokens.

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| surface/evergreen/bold | Relleno | Type=Primary, Color=Evergreen |
| surface/evergreen/bold/hovered | Relleno | Primary, Evergreen, Hovered |
| surface/evergreen/bold/pressed | Relleno | Primary, Evergreen, Pressed |
| surface/indigo/bold | Relleno | Type=Primary, Color=Indigo |
| surface/indigo/bold/hovered | Relleno | Primary, Indigo, Hovered |
| surface/indigo/bold/pressed | Relleno | Primary, Indigo, Pressed |
| background/canvas | Relleno | Secondary y Tertiary, Default |
| background/interactive/hovered | Relleno | Secondary y Tertiary, Hovered |
| background/interactive/pressed | Relleno | Secondary y Tertiary, Pressed |
| background/disabled | Relleno | State=Disabled |
| surface/danger/subtle, /hovered, /pressed | Relleno | Type=Danger |
| surface/info/subtle, /hovered, /pressed | Relleno | Type=Information |
| surface/success/subtle, /hovered, /pressed | Relleno | Type=Success |
| surface/warning/subtle, /hovered, /pressed | Relleno | Type=Warning |

### Texto

| Token | Uso | Notas |
|--------|--------|--------|
| text/inverse | Label | Type=Primary |
| text/evergreen | Label | Type=Secondary, Color=Evergreen |
| text/indigo | Label | Type=Secondary, Color=Indigo |
| text/primary | Label | Type=Tertiary |
| text/danger | Label | Type=Danger |
| text/info | Label | Type=Information |
| text/success | Label | Type=Success |
| text/warning | Label | Type=Warning |
| text/disabled | Label | State=Disabled |

### Borde

| Token | Uso | Notas |
|--------|--------|--------|
| border/evergreen | Borde de 1px | Type=Secondary, Color=Evergreen |
| border/indigo | Borde de 1px | Type=Secondary, Color=Indigo |
| border/strong | Borde de 1px | Type=Tertiary |
| border/danger | Borde de 1px | Type=Danger |
| border/info | Borde de 1px | Type=Information |
| border/success | Borde de 1px | Type=Success |
| border/warning | Borde de 1px | Type=Warning |
| border/disabled | Borde de 1px | Secondary, State=Disabled |
| border/focus | Borde de foco | State=Focused |
| border.base.focus.width | Grosor del borde de foco (2) | State=Focused |
| width/1 | Grosor de borde (1) | Variantes con borde |

### Tipografía

| Token | Uso | Notas |
|--------|--------|--------|
| Text/Button/MD | Label | Size=MD: size/14, line-height/16, weight/semibold, family/body |
| Text/Button/SM | Label | Size=SM: size/12, line-height/16, weight/semibold, family/body |

### Espaciado

| Token | Uso | Notas |
|--------|--------|--------|
| space/16 | Padding horizontal | Size=MD |
| space/8 | Padding vertical | Size=MD |
| space/6 | Padding inferior | Primary, Evergreen, MD, Default |
| space/12 | Padding horizontal | Size=SM |
| space/4 | Padding vertical | Size=SM |
| gap/sm | Gap entre icono y label | |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| semantic/sm | Radio del contenedor | Corner=Default |
| semantic/pill | Radio del contenedor | Corner=Rounded |

## Interacción

El componente tiene los estados Hovered, Pressed, Focused y Disabled como variantes. No están documentados el comportamiento de activación, el de carga ni el de teclado.

---

## Accesibilidad

| Tema | Información |
|--------|--------|
| Requisito de accesibilidad | [Pending confirmation] |
| Soporte visible de estado | Variantes State=Focused (borde de 2px border/focus) y State=Disabled. |
| Notas | No hay documentación de roles, comportamiento de teclado ni nombres accesibles. |

---

## Guías de contenido

- label: texto visible del botón (default: "Button").
- Límites de longitud, uso de mayúsculas y reglas de redacción: [Pending confirmation]

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Type=Primary, Color=Evergreen, Size=MD, Corner=Default
```

Descripción:

Acción principal (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Type=Tertiary, Color=Default, Size=SM
```

Descripción:

Acción sin énfasis (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Type=Primary, Color=Indigo, Corner=Rounded, Size=SM
```

Descripción:

Variante redondeada (fuente: descripción del componente en Figma).

---

## Combinaciones inválidas

- Type=Tertiary + Color=Evergreen o Color=Indigo (Tertiary solo acepta Color=Default)
- Type=Danger, Information, Success o Warning + Color=Evergreen o Color=Indigo
- State=Disabled + Type=Tertiary, Danger, Information, Success o Warning (la variante no existe)
- Type=Primary o Secondary + Color=Default + State distinto de Disabled (la variante no existe)

---

## Checklist de QA

- Propiedades documentadas.
- Los nombres de propiedades coinciden exactamente con Figma.
- Los valores de variantes coinciden exactamente con Figma.
- Valores por defecto documentados.
- Combinaciones inválidas documentadas.
- Tokens verificados.
- No se añadió comportamiento no documentado.
- No se añadió comportamiento de accesibilidad no documentado.
- Inconsistencias de alto en Size=MD resueltas.
- Tokens de icono definidos.

---

## Aclaraciones pendientes

- El alto de Size=MD varía entre variantes (30, 32 y 34). ¿Cuál es el valor correcto?
- Primary + Evergreen + Default + MD usa padding de 8 arriba / 6 abajo, a diferencia de las demás variantes. ¿Es intencional?
- Disabled solo está disponible para Primary y Secondary con Color=Default. ¿Deberían Tertiary, Danger, Information, Success y Warning tener una variante Disabled?
- La descripción de Figma dice "State=Disabled no aplica cambio de Color", pero Primary y Secondary con Color=Default existen solo como Disabled. Confirmar la regla prevista.
- Los nombres de propiedad showLeadingIcon, showTrailingIcon y label usan camelCase, a diferencia de otros componentes. Confirmar los nombres exactos en Figma.
- Color del icono e iconos permitidos para los slots inicial y final.
- Interacción y comportamiento de teclado; accesibilidad (roles, nombre accesible, orden de foco).
- Comportamiento de carga (no existe un estado Loading).
- El emparejamiento de tokens de Secondary + Indigo, Information, Success y Warning se verificó a nivel de component set, no variante por variante.
- Status, versión y owner.

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.