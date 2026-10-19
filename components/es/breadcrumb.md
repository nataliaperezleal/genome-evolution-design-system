---
component: "Breadcrumb"
system: "Genome Evolution Design System"
type: "Componente de navegación/jerarquía"
status: "Production"
version: "1.0"
owner: "UX Design Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2081-1144"
last_updated: "2026-10-19"
tags:
  - "navegación"
  - "jerarquía"
  - "breadcrumb"
  - "orientación"
---

# Breadcrumb — Genome Evolution Design System

Muestra la ubicación actual del usuario dentro de una jerarquía de navegación como una ruta de elementos, permitiendo comprender la estructura de la página y navegar hacia atrás por los niveles jerárquicos.

Status, versión y owner provienen del borrador de documentación guardado en la página de Figma y no están confirmados de otra forma.

## Referencia rápida

### Qué es

Componente de navegación/jerarquía (fuente: descripción del componente en Figma). Se construye con el subcomponente interno `.BreadcrumbItem`, que según la descripción de Figma no debe usarse directamente en interfaces.

### Propiedades clave

- Color [Default | Evergreen | Indigo] — default: Default
- Show Overflow [true | false] — default: true
- Show Level 1 [true | false] — default: true
- Show Level 2 [true | false] — default: true
- Show Level 3 [true | false] — default: true
- Show Level 4 [true | false] — default: true
- Show Level 5 [true | false] — default: true
- `.BreadcrumbItem` Item [Overflow | Level | Current] — default: Overflow
- `.BreadcrumbItem` State [Default | Disabled | Hovered | Pressed | Focused] — default: Default
- `.BreadcrumbItem` Text — texto del ítem (default: "Text" para Level y Current, "..." para Overflow)

### Configuración por defecto

Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true

### Uso típico

- E-commerce: Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=false, Show Level 4=false, Show Level 5=false
- Documentación: Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true
- Compacto: Show Overflow=true, Show Level 1=true, Show Level 2=false, Show Level 3=false, Show Level 4=false, Show Level 5=false

---

## Propósito / Intención

### Problema que resuelve

Muestra dónde está el usuario dentro de una jerarquía de navegación y le permite volver atrás por los niveles (fuente: descripción del componente en Figma).

### Resultado esperado

Los usuarios comprenden la estructura de la página y reducen los clics necesarios para llegar a páginas superiores (fuente: descripción del componente en Figma).

### Contexto típico

Estructuras jerárquicas, páginas profundamente anidadas y navegación multinivel (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Para mostrar la ubicación de la página actual en estructuras jerárquicas
- Para permitir la navegación hacia atrás a través de los niveles de la jerarquía
- Para dar contexto en páginas profundamente anidadas
- Para mostrar relaciones entre páginas en navegación multinivel
- Para reducir los clics necesarios para navegar a páginas superiores
- Para aclarar la posición en arquitecturas de información complejas

---

## Cuándo NO usar

- Para navegación plana (un solo nivel)
- Cuando la navegación principal es suficiente
- Para aplicaciones pequeñas sin jerarquía
- En páginas de aterrizaje o páginas índice principales
- Cuando el espacio es extremadamente limitado
- Como reemplazo de la navegación principal

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Contenedor | Requerido | Fila horizontal de instancias de `.BreadcrumbItem` sin gap entre ítems (gap/none). |
| Ítem Overflow | Opcional — Show Overflow | `.BreadcrumbItem` Item=Overflow: texto "..." seguido de un chevron-right. Representa los niveles colapsados (fuente: descripción de Figma). |
| Ítems Level (Level 1–5) | Opcional — Show Level 1…5 | `.BreadcrumbItem` Item=Level: texto seguido de un chevron-right. |
| Ítem Current | Requerido | `.BreadcrumbItem` Item=Current: ítem final, solo texto, sin chevron. Siempre presente en las variantes revisadas. |
| Separador (chevron-right) | Parte de cada ítem no final | Icono de 12×12 dentro de los ítems Overflow y Level. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | 36 (cada ítem) |
| Ancho | Se ajusta al contenido. Variante Default con todos los ítems: 414. Anchos de ítem con el texto por defecto: Overflow 48, Level 64, Current 46. |
| Padding | space/8 en cada ítem |
| Gap | gap/sm entre el texto del ítem y su chevron; gap/none entre ítems |
| Radio | radius/4 (ítem) |

---

## Semántica

Según la descripción de Figma, Breadcrumb muestra "una ruta de enlaces" y el ítem Current es la página donde se encuentra el usuario. Si los ítems se renderizan como enlaces y el marcado semántico no están definidos en el componente.

---

## Iconografía

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | No aplica. |
| Trailing | chevron-right (12×12) en los ítems Overflow y Level. Los ítems Current no lo tienen. |

### Reglas

- El chevron-right es el separador entre ítems y no es un icono intercambiable en las propiedades revisadas.
- El chevron de Overflow es gris en todos los valores de Color. Los chevrons de Level siguen el valor de Color (Default: gris, Evergreen: verde, Indigo: morado) según se ve en las variantes.
- En State=Disabled el chevron es más claro (fuente: descripción de Figma de .BreadcrumbItem).

---

## Variantes (Propiedades)

### Color

| Valor | Descripción |
|--------|--------|
| Default | Texto del ítem Current: text/primary. Texto de Level: text/secondary. Chevrons grises. |
| Evergreen | Texto del ítem Current: text/evergreen. Texto de Level: text/secondary. Chevrons de Level en evergreen. |
| Indigo | Texto del ítem Current: text/indigo. Texto de Level: text/secondary. Chevrons de Level en indigo. |

### Show Overflow

| Valor | Descripción |
|--------|--------|
| true | Muestra el ítem Overflow ("...") antes de los niveles. |
| false | Oculta el ítem Overflow. |

### Show Level 1

| Valor | Descripción |
|--------|--------|
| true | Muestra Level 1. |
| false | Oculta Level 1. |

### Show Level 2

| Valor | Descripción |
|--------|--------|
| true | Muestra Level 2. |
| false | Oculta Level 2. |

### Show Level 3

| Valor | Descripción |
|--------|--------|
| true | Muestra Level 3. |
| false | Oculta Level 3. |

### Show Level 4

| Valor | Descripción |
|--------|--------|
| true | Muestra Level 4. |
| false | Oculta Level 4. |

### Show Level 5

| Valor | Descripción |
|--------|--------|
| true | Muestra Level 5. |
| false | Oculta Level 5. |

### Item (.BreadcrumbItem)

| Valor | Descripción |
|--------|--------|
| Overflow | Puntos suspensivos "..." con un chevron. Representa niveles colapsados. Text/Button/MD. |
| Level | Nivel intermedio: texto con un chevron. Text/Body/SM. |
| Current | Ítem final: solo texto. Text/Button/MD. |

### State (.BreadcrumbItem)

| Valor | Descripción |
|--------|--------|
| Default | Apariencia base. |
| Disabled | Color de texto deshabilitado y chevron más claro. |
| Hovered | Fondo claro. |
| Pressed | Fondo más oscuro. |
| Focused | Borde verde de 2px. |

### Text (.BreadcrumbItem)

Texto del ítem. Por defecto: "Text" para Level y Current, "..." para Overflow.

---

## Estados

Los estados existen solo en el subcomponente `.BreadcrumbItem`. Las tres variantes de Breadcrumb muestran todos los ítems en State=Default.

| Estado | Descripción | Cambios visuales |
|--------|--------|--------|
| Default | Apariencia base de cada Item. | Overflow y Current: text/primary. Level: text/secondary. |
| Disabled | Apariencia no interactiva (fuente: descripción de Figma). | Texto: text/disabled. Chevron: más claro (icon/disabled presente en las variables). |
| Hovered | Apariencia en hover. | Fondo del ítem: background/interactive/hovered. |
| Pressed | Apariencia al presionar. | Fondo del ítem: background/interactive/pressed. |
| Focused | Apariencia de foco. | Borde de 2px border/focus alrededor del ítem. |

---

## Mapeo de tokens

Los tokens están confirmados por component set. No se verificó la capa exacta de cada vinculación. Los tokens de espaciado, gap y radio se confirmaron como variables de Figma, pero no se contrastaron con los archivos de tokens.

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| background/interactive/hovered | Fondo del ítem | .BreadcrumbItem, State=Hovered |
| background/interactive/pressed | Fondo del ítem | .BreadcrumbItem, State=Pressed |

### Texto

| Token | Uso | Notas |
|--------|--------|--------|
| text/primary | Texto de Overflow y Current | Current con Color=Default; Overflow en todos los valores de Color |
| text/secondary | Texto de Level | Todos los valores de Color |
| text/evergreen | Texto de Current | Color=Evergreen |
| text/indigo | Texto de Current | Color=Indigo |
| text/disabled | Texto del ítem | State=Disabled |

### Borde

| Token | Uso | Notas |
|--------|--------|--------|
| border/focus | Borde de foco | State=Focused. Grosor de 2px, sin token |

### Icono

| Token | Uso | Notas |
|--------|--------|--------|
| icon/primary | Chevron | Presente en las variables; vinculación por capa [Pending confirmation] |
| icon/secondary | Chevron | Presente en las variables; vinculación por capa [Pending confirmation] |
| icon/evergreen | Chevron | Presente en las variables; esperado para Color=Evergreen, vinculación [Pending confirmation] |
| icon/indigo | Chevron | Presente en las variables; esperado para Color=Indigo, vinculación [Pending confirmation] |
| icon/disabled | Chevron | .BreadcrumbItem, State=Disabled |

### Tipografía

| Token | Uso | Notas |
|--------|--------|--------|
| Text/Button/MD | Texto de Overflow y Current | size/14, line-height/16, weight/semibold, family/body |
| Text/Body/SM | Texto de Level | size/14, line-height/20, weight/regular, family/body |

### Espaciado

| Token | Uso | Notas |
|--------|--------|--------|
| space/8 | Padding del ítem | |
| gap/sm | Gap entre texto y chevron | |
| gap/none | Gap entre ítems | Contenedor Breadcrumb |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| radius/4 | Esquinas del ítem | |

---

## Interacción

El subcomponente `.BreadcrumbItem` tiene los estados Hovered, Pressed, Focused y Disabled. La página de Figma muestra anotaciones de teclado: "tab", "Enter" y "selects item".

No están documentados si los ítems Current son interactivos (también tienen variantes Hovered, Pressed y Focused), qué hace el ítem Overflow al activarse ni el comportamiento responsivo.

---

## Accesibilidad

| Tema | Información |
|--------|--------|
| Requisito de accesibilidad | Un borrador de documentación guardado en la página de Figma indica que "debe usar <nav> con marcado adecuado", con atributos ARIA [Pending confirmation]. No está definido en el componente. |
| Soporte visible de estado | Variantes State=Focused (borde de 2px border/focus) y State=Disabled en .BreadcrumbItem. |
| Notas | El mismo borrador indica que los ítems deben ser accesibles por teclado (Tab), con un anillo de foco visible, y que los lectores de pantalla deben anunciar la estructura del breadcrumb y la página actual. Tratarlo como no confirmado hasta validarlo. |

---

## Guías de contenido

- Texto del ítem: por defecto "Text" (Level, Current) y "..." (Overflow).
- El borrador de documentación en la página de Figma sugiere texto conciso y descriptivo y mostrar siempre la página actual como último ítem. Sin confirmar.
- Límite de longitud y truncado: [Pending confirmation]

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=false, Show Level 4=false, Show Level 5=false
```

Descripción:

E-commerce: Overflow, Level 1, Level 2, Current (Categoría > Subcategoría > Producto) (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Color=Default, Show Overflow=true, Show Level 1=true, Show Level 2=true, Show Level 3=true, Show Level 4=true, Show Level 5=true
```

Descripción:

Documentación: todos los niveles visibles (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Show Overflow=true, Show Level 1=true, Show Level 2=false, Show Level 3=false, Show Level 4=false, Show Level 5=false
```

Descripción:

Compacto: Overflow + Level 1 + Current para jerarquías profundas (fuente: descripción del componente en Figma).

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
- Conteo de variantes verificado (Breadcrumb 3, .BreadcrumbItem 15).
- Tokens de icono del chevron vinculados por capa.

---

## Aclaraciones pendientes

- El borrador de documentación en la página de Figma llama a Show Level 5 la "página actual", pero el componente tiene un ítem Current aparte. Confirmar qué es Level 5.
- El mismo borrador dice que el color del chevron coincide con el texto actual. En el componente, el chevron de Overflow es gris en todos los valores de Color. Confirmar.
- Color: el borrador dice que solo afecta al ítem actual. Los chevrons de Level también cambian. Confirmar.
- Tokens del chevron: cuál de icon/primary, icon/secondary, icon/evergreen, icon/indigo aplica a cada chevron.
- El grosor del borde de foco (2px) corresponde a `focus/width` en la exportación Border de Figma.
- Los estados solo existen en .BreadcrumbItem. ¿Cómo establecen los consumidores el estado de un ítem desde Breadcrumb?
- Los ítems Current tienen variantes Hovered, Pressed y Focused. ¿La página actual es interactiva?
- Comportamiento del ítem Overflow al activarse, y comportamiento responsivo/de truncado.
- Si los ítems son enlaces y el marcado semántico (<nav>, ARIA); el texto de accesibilidad del borrador necesita validación.
- La documentación visual de la página muestra Show Overflow y Show Level 1–4 en una captura, mientras que el componente tiene Show Level 5. Confirmar.
- Combinaciones inválidas (no documentadas en Figma).
- Status, versión y owner (tomados del borrador en la página de Figma).

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.