---
component: "Accordion"
system: "Genome Evolution Design System"
type: "Expandable/collapsible content container"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-19"
tags:
  - "accordion"
  - "disclosure"
  - "content-container"
---

# Accordion — Genome Evolution Design System

Permite mostrar u ocultar secciones de contenido para controlar la densidad de información y mejorar la legibilidad de la interfaz.

## Referencia rápida

### Qué es

Contenedor de contenido expandible/colapsable (fuente: descripción del componente en Figma).

### Propiedades clave

- Behavior [Collapsed | Expanded] — default: Collapsed
- Color [Default | Evergreen | Indigo] — default: Default
- Size [SM | MD] — default: MD
- State [Default | Disabled | Hovered | Pressed | Focused | Loading] — default: Default
- Show Badge [true | false] — default: false
- Show Checkbox [true | false] — default: false
- Show Left Icon [true | false] — default: false
- Text — texto del encabezado (default: Placeholder)

### Configuración por defecto

Behavior=Collapsed, Color=Default, Size=MD, State=Default, Show Badge=false, Show Checkbox=false, Show Left Icon=false

### Combinaciones inválidas

- Behavior=Collapsed + Color=Evergreen (la variante no existe)
- Behavior=Collapsed + Color=Indigo (la variante no existe)
- State=Disabled + Color=Evergreen o Indigo (la variante no existe)
- State=Loading + Color=Evergreen o Indigo (la variante no existe)
- Color=Evergreen o Indigo + State distinto de Default, Hovered, Pressed, Focused (solo existen esas variantes)

### Uso típico

- Panel de filtros: Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true
- Sección de FAQ: Behavior=Collapsed, Color=Default, Size=MD
- Sección compacta con acento: Behavior=Expanded, Color=Evergreen, Size=SM

---

## Propósito / Intención

### Problema que resuelve

Controla la densidad de información mostrando u ocultando secciones de contenido (fuente: descripción del componente en Figma).

### Resultado esperado

Mejor legibilidad de la interfaz (fuente: descripción del componente en Figma).

### Contexto típico

Información jerárquica (FAQs, ajustes, filtros) y secciones opcionales en formularios (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Para agrupar contenido relacionado en secciones colapsables
- Para ocultar información secundaria y reducir la carga cognitiva
- Para organizar información jerárquica (FAQs, ajustes, filtros) o secciones opcionales en formularios

---

## Cuándo NO usar

- Para información crítica que debe estar siempre visible
- Cuando el contenido se alterna con frecuencia (preferir un layout siempre visible)
- Para un solo elemento (usar disclosure)
- Cuando la relación entre contenidos exige visibilidad constante

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Header Container | Requerido | Fila de encabezado. Contiene el icono izquierdo, el grupo de texto y el grupo de iconos. |
| info (icono izquierdo) | Opcional — Show Left Icon | Icono de 16×16. El slot `icon` puede reemplazarlo. Por defecto es el icono "info". |
| Text | Requerido | Grupo que contiene el Checkbox opcional y el texto del encabezado. |
| Checkbox | Opcional — Show Checkbox | Casilla de 20×20 (caja interna de 16×16, borde de 1px, radio de esquina de 2px), un icono "bizagi-lines" de 16×16 y, en las variantes Behavior=Collapsed, el texto "Label". |
| Badge | Opcional — Show Badge | Píldora con texto numérico (por defecto "0"). |
| chevron-down / chevron-up | Requerido | Icono de 12×12. chevron-down en Collapsed, chevron-up en Expanded. |
| Content Container | Solo en Behavior=Expanded | Área de contenido, de 100px de alto en las variantes revisadas. Contiene un slot de contenido con esquinas radius/4. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | Collapsed: 36 (Size=MD) / 24 (Size=SM). Expanded: 136 (Size=MD) / 124 (Size=SM). |
| Ancho | 265 |
| Padding | Encabezado, Size=MD: space/16 horizontal, space/8 vertical. Encabezado, Size=SM (solo Expanded Default): space/8 horizontal, space/2 vertical. Content Container: space/16 (Size=MD), space/8 (Size=SM). |
| Gap | gap/sm (8) entre elementos del encabezado. |
| Radio | radius/4 en el slot de contenido. |

El padding del encabezado de Size=SM en Collapsed no fue verificado.

---

## Semántica

Según la descripción de Figma, Accordion agrupa contenido relacionado en secciones que se pueden colapsar o expandir. Behavior distingue la forma colapsada y la expandida. La semántica de grupo (una sola sección abierta o varias) no está documentada.

---

## Iconografía

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | Icono izquierdo (16×16), controlado por Show Left Icon. Por defecto "info"; reemplazable mediante el slot `icon`. |
| Trailing | Chevron (12×12): chevron-down en Collapsed, chevron-up en Expanded. Badge opcional antes del chevron. |

### Reglas

- El icono izquierdo solo es visible cuando Show Left Icon=true.
- El chevron refleja el valor de Behavior (chevron-down / chevron-up).
- Iconos permitidos para el slot `icon`: [cualquiera]

---

## Variantes (Propiedades)

### Behavior

| Valor | Descripción |
|--------|--------|
| Collapsed | Muestra solo el encabezado. |
| Expanded | Muestra el encabezado y el Content Container. |

### Color

| Valor | Descripción |
|--------|--------|
| Default | Apariencia neutra. Disponible para todos los valores de Behavior, Size y State. |
| Evergreen | Texto text/evergreen y borde inferior border/evergreen. Solo con Behavior=Expanded, Size=SM y MD, State=Default, Hovered, Pressed, Focused. |
| Indigo | Texto text/indigo y borde inferior border/indigo. Solo con Behavior=Expanded, Size=SM y MD, State=Default, Hovered, Pressed, Focused. |

### Size

| Valor | Descripción |
|--------|--------|
| SM | Collapsed de 24px de alto; Expanded de 124px de alto. |
| MD | Collapsed de 36px de alto; Expanded de 136px de alto. |

### State

| Valor | Descripción |
|--------|--------|
| Default | Apariencia base. |
| Disabled | Apariencia con tokens de deshabilitado. Solo con Color=Default. |
| Hovered | Encabezado con background/interactive/hovered. |
| Pressed | Encabezado con background/interactive/pressed. |
| Focused | Borde de 2px border/focus alrededor del encabezado. |
| Loading | Bloques de esqueleto (background/loading) reemplazan texto, icono y contenido. Solo con Color=Default. |

### Show Badge

| Valor | Descripción |
|--------|--------|
| true | Muestra el badge en el grupo de iconos. |
| false | Oculta el badge. |

### Show Checkbox

| Valor | Descripción |
|--------|--------|
| true | Muestra el checkbox en el encabezado. |
| false | Oculta el checkbox. |

### Show Left Icon

| Valor | Descripción |
|--------|--------|
| true | Muestra el icono izquierdo. |
| false | Oculta el icono izquierdo. |

### Text

Texto del encabezado. Valor por defecto: Placeholder.

---

## Estados

| Estado | Descripción | Cambios visuales |
|--------|--------|--------|
| Default | Apariencia base. | Encabezado con background/canvas; borde inferior border/strong en Expanded, border/default en Collapsed Size=MD. |
| Hovered | Variante State=Hovered. | Fondo del encabezado: background/interactive/hovered. |
| Pressed | Variante State=Pressed. | Fondo del encabezado: background/interactive/pressed. |
| Focused | Variante State=Focused. | Borde de 2px (focus/width) border/focus alrededor del encabezado. |
| Disabled | Variante State=Disabled. | Tokens text/disabled, icon/disabled, background/disabled, border/disabled. |
| Loading | Variante State=Loading. | Bloques de esqueleto (background/loading) en lugar de texto, chevron y contenido. |

---

## Mapeo de tokens

Los tokens están confirmados por variante. No se verificó la capa exacta de cada vinculación. Los tokens de espaciado, gap y radio se confirmaron como variables de Figma, pero no se contrastaron con los archivos de tokens.

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| background/canvas | Relleno de encabezado y contenido | Todas las variantes Color=Default |
| background/interactive/hovered | Relleno en hover | State=Hovered |
| background/interactive/pressed | Relleno en pressed | State=Pressed |
| background/disabled | Relleno deshabilitado | State=Disabled |
| background/loading | Bloques de esqueleto | State=Loading |

### Texto

| Token | Uso | Notas |
|--------|--------|--------|
| text/primary | Texto del encabezado | Color=Default |
| text/evergreen | Texto del encabezado | Color=Evergreen |
| text/indigo | Texto del encabezado | Color=Indigo |
| text/disabled | Texto del encabezado | State=Disabled |

### Borde

| Token | Uso | Notas |
|--------|--------|--------|
| border/strong | Borde inferior del encabezado | Color=Default, Expanded |
| border/default | Borde inferior del contenedor | Behavior=Collapsed, Size=MD |
| border/evergreen | Borde inferior del encabezado | Color=Evergreen |
| border/indigo | Borde inferior del encabezado | Color=Indigo |
| border/focus | Borde de foco | State=Focused |
| focus/width | Grosor del borde de foco (2) | State=Focused |
| border/disabled | Borde deshabilitado | State=Disabled |

### Icono

| Token | Uso | Notas |
|--------|--------|--------|
| icon/primary | Borde del checkbox | Presente en variantes no Disabled; uso en iconos no verificado |
| icon/disabled | Iconos | State=Disabled |

### Tipografía

| Token | Uso | Notas |
|--------|--------|--------|
| Text/Body/SM | Texto del encabezado | size/14, line-height/20, weight/regular, family/body |

El texto "Label" del Checkbox usa size/12, line-height/16 y letter-spacing/normal (no se identificó un estilo compuesto).

### Espaciado

| Token | Uso | Notas |
|--------|--------|--------|
| space/16 | Padding del encabezado (MD), padding del contenido (MD) | |
| space/8 | Padding del encabezado (MD vertical, SM horizontal), padding del contenido (SM), gaps | |
| space/2 | Padding vertical del encabezado | Size=SM |
| gap/sm | Gap entre elementos del encabezado | |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| radius/4 | Slot de contenido | |
| radius/0 | Presente en las variables | Uso [Pending confirmation] |

### Sombra

Sin token: colores del Badge #9e9e9e (borde) y #272727 (texto) y sus variables de fuente (font/family/products, font/weight/semibold, font/size/xs, font/spacing/m), el grosor de 1px del borde inferior y el radio de 2px del checkbox.

---

## Interacción

El componente tiene variantes Hovered, Pressed, Focused, Disabled y Loading. No están documentados el disparador que alterna Behavior, el área clicable, la animación ni si pueden estar abiertas varias secciones a la vez.

---

## Accesibilidad

| Tema | Información |
|--------|--------|
| Soporte visible de estado | Variante State=Focused con borde de 2px border/focus. Variante State=Disabled. |
| Notas | No hay documentación de roles, comportamiento de teclado ni nombres accesibles. |

---

## Guías de contenido

- Text: texto del encabezado (default: Placeholder).
- Reglas de longitud, mayúsculas y truncado: [Pending confirmation]

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true
```

Descripción:

Panel de filtros (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Behavior=Collapsed, Color=Default, Size=MD
```

Descripción:

Sección de FAQ (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Behavior=Expanded, Color=Evergreen, Size=SM
```

Descripción:

Sección expandida compacta con color de acento (la variante existe en Figma).

---

## Combinaciones inválidas

- Behavior=Collapsed + Color=Evergreen (la variante no existe)
- Behavior=Collapsed + Color=Indigo (la variante no existe)
- State=Disabled + Color=Evergreen o Indigo (la variante no existe)
- State=Loading + Color=Evergreen o Indigo (la variante no existe)
- Color=Evergreen o Indigo + State distinto de Default, Hovered, Pressed, Focused (solo existen esas variantes)

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
- Conteo de variantes verificado (40).
- Tokens del Badge definidos.

---

## Aclaraciones pendientes

- Interacción: qué alterna Behavior (todo el encabezado o el chevron), animación y si pueden abrirse varias secciones a la vez.
- Accesibilidad: roles, teclado, nombres accesibles y cómo se activa State=Focused.
- Checkbox: el texto "Label" aparece solo en Behavior=Collapsed. ¿Es intencional?
- Badge: usa #9e9e9e, #272727 y variables de fuente fuera de la taxonomía Genome. ¿Qué tokens debe usar?
- Show Left Icon: qué iconos se permiten en el slot `icon`.
- Slot de contenido: los nombres de capa difieren (Content MD Default, Accordion Content, Content SM Default). Confirmar el nombre de la propiedad del slot.
- El Content Container mide 100px de alto en todas las variantes Expanded revisadas. ¿Es fijo o un placeholder?
- No se verificó el padding de Size=SM en las variantes Collapsed.
- Valores sin token: grosor de 1px del borde inferior y radio de 2px del checkbox. Uso de radius/0.
- Mapeo de tokens por capa según State y Color.
- Status, versión y owner.

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.