---
component: "Avatar"
system: "Genome Evolution"
type: "Avatar display component"
status: "Production"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-19"
tags:
  - "avatar"
  - "identity"
  - "status-indicator"
---

# Avatar — Genome Evolution Design System

Representa visualmente a una persona o entidad mediante una inicial de texto, un icono genérico o una imagen real, con soporte opcional para indicador de estado.

## Referencia rápida

### Qué es

Componente de visualización que representa la identidad de una persona o entidad (fuente: descripción del componente en Figma).

### Propiedades clave

- Type [Icon | Person | Print] — default: Print
- Color [Default | Evergreen | Indigo] — default: Default
- Size [16 | 24 | 32 | 40 | 48] — default: 16
- State [Default | Focused] — default: Default
- Show State [true | false] — default: false
- Label — Carácter o inicial de texto; solo aplica a Type=Print (default: B)

### Configuración por defecto

Type=Print, Color=Default, Size=16, State=Default, Show State=false, Label=B (variante por defecto del component set).

La descripción actual en Figma indica "Type: Print, Color: Default, Size: 32, State: Default" como configuración por defecto.

### Combinaciones inválidas

- Type=Icon + Color=Evergreen (la variante no existe)
- Type=Icon + Color=Indigo (la variante no existe)
- Type=Person + Color=Evergreen (la variante no existe)
- Type=Person + Color=Indigo (la variante no existe)
- Label con Type=Icon o Type=Person (estas variantes no tienen capa de texto)
- Size=16 + Show State=true (indicado en la descripción de Figma) [Pending confirmation]

### Uso típico

- Lista de usuarios activos: Type=Icon, Color=Default, Size=32, Show State=true
- Perfil con foto: Type=Person, Color=Default, Size=40, Show State=false
- Avatar con inicial: Type=Print, Color=Indigo, Size=40, Label=B, Show State=true
- Asignación en tarjeta: Type=Print, Color=Default, Size=24, Show State=false

---

## Propósito / Intención

### Problema que resuelve

Representa la identidad de una persona o entidad en la interfaz mediante una inicial, un icono genérico o una imagen (fuente: descripción del componente en Figma).

### Contexto típico

Listas, tablas, perfiles, comentarios, asignaciones y menciones (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Para mostrar la identidad del usuario en listas, tablas o perfiles
- Para indicar presencia o disponibilidad con el indicador de estado
- Para representar personas en comentarios, asignaciones o menciones

---

## Cuándo NO usar

- Como botón de acción principal
- Cuando el espacio disponible es menor a 16px
- Para representar entidades no personales (usar un icono específico)

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Contenedor | Requerido | Marco cuadrado con esquinas radius/24. El relleno y el borde varían según Type, Color y State. Contenido centrado vertical y horizontalmente. |
| Label (capa de texto "B") | Opcional — solo Type=Print | Inicial de texto centrada. La tipografía cambia según Size. |
| Imagen (capa "unsplash:LWkFHEGpleE") | Opcional — solo Type=Person | Relleno de imagen recortado con radio de esquina de 360px. |
| Icono (capa "Vector") | Opcional — solo Type=Icon | Vector de silueta genérica de persona que ocupa todo el Size. |
| Indicador de estado (capa Ellipse) | Opcional | Círculo en la esquina inferior derecha, oculto por defecto y controlado por Show State. Presente en todos los valores de Type. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | 16 / 24 / 32 / 40 / 48 px (igual a Size) |
| Ancho | 16 / 24 / 32 / 40 / 48 px (igual a Size) |
| Padding | Sin padding definido en Figma (contenido centrado) |
| Gap | Sin gap definido en Figma |
| Radio | radius/24 (contenedor); 360px en la capa de imagen de Person (sin token) |

---

## Semántica

Según la descripción del componente en Figma, Avatar representa visualmente a una persona o entidad. Cada valor de Type es una representación visual distinta: Print (inicial), Icon (silueta genérica) y Person (imagen).

El significado del indicador de estado (por ejemplo, qué estados representa) no está documentado.

---

## Iconografía

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | No aplica — el componente no tiene slot de icono inicial. |
| Trailing | No aplica — el componente no tiene slot de icono final. |

### Reglas

- Type=Icon muestra un vector de silueta genérica de persona (capa "Vector") que ocupa todo el tamaño del avatar.
- El icono está vinculado al token icon/secondary.
- No se encontró una propiedad de intercambio de instancia para el icono. [Pending confirmation]

---

## Variantes (Propiedades)

### Type

| Valor | Descripción |
|--------|--------|
| Print | Muestra la inicial de Label centrada en el contenedor. Disponible con Color=Default, Evergreen e Indigo. |
| Icon | Muestra un vector de silueta genérica de persona. Disponible solo con Color=Default. |
| Person | Muestra una imagen recortada en círculo. Disponible solo con Color=Default. |

### Color

| Valor | Descripción |
|--------|--------|
| Default | Type=Print: relleno background/canvas, borde de 1px border/strong, texto text/secondary. Único valor disponible para Type=Icon y Type=Person. |
| Evergreen | Solo Type=Print: relleno surface/evergreen/subtle, texto text/evergreen, sin borde. |
| Indigo | Solo Type=Print: relleno surface/indigo/subtle, texto text/indigo, sin borde. |

### Size

| Valor | Descripción |
|--------|--------|
| 16 | 16×16 px. Label: Text/Label/XS. Indicador de estado: 6×6 px. |
| 24 | 24×24 px. Label: Text/Body/XS Strong. Indicador de estado: 8×8 px. |
| 32 | 32×32 px. Label: Text/Body/SM Strong. Indicador de estado: 10×10 px. |
| 40 | 40×40 px. Label: Text/Body/MD Strong. Indicador de estado: 12×12 px. |
| 48 | 48×48 px. Label: Text/Body/MD Strong. Indicador de estado: 12×12 px. |

### State

| Valor | Descripción |
|--------|--------|
| Default | Apariencia base. |
| Focused | Añade un borde de foco con `border.base.focus.width` (2px) y `border/focus`. |

### Show State

| Valor | Descripción |
|--------|--------|
| true | Muestra el indicador de estado (elipse) en la esquina inferior derecha. |
| false | El indicador de estado está oculto. |

### Label

Propiedad de texto. Valor por defecto: B. Solo las variantes Type=Print tienen capa de texto; no tiene efecto visible en Type=Icon ni en Type=Person.

---

## Estados

| Estado | Descripción | Cambios visuales |
|--------|--------|--------|
| Default | Apariencia base de cada Type y Color. | Print + Default: borde de 1px border/strong. Print + Evergreen / Indigo: sin borde. Icon y Person: sin borde. |
| Focused | Apariencia de foco (variante State=Focused). | Print: borde de 2px (`border.base.focus.width`) `border/focus` en el contenedor, que reemplaza border/strong en Color=Default. Person: borde de 2px `border/focus` en la capa de imagen. Icon: anillo de foco dibujado en el vector, que sobresale 2px de los límites del componente. |

---

## Mapeo de tokens

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| background/canvas | Relleno del contenedor | Type=Print, Color=Default |
| surface/evergreen/subtle | Relleno del contenedor | Type=Print, Color=Evergreen |
| surface/indigo/subtle | Relleno del contenedor | Type=Print, Color=Indigo |

### Texto

| Token | Uso | Notas |
|--------|--------|--------|
| text/secondary | Color del Label | Type=Print, Color=Default |
| text/evergreen | Color del Label | Type=Print, Color=Evergreen |
| text/indigo | Color del Label | Type=Print, Color=Indigo |

### Borde

| Token | Uso | Notas |
|--------|--------|--------|
| border/strong | Borde del contenedor | Type=Print, Color=Default, State=Default. Grosor de 1px, sin token. |
| border/focus | Color del borde de foco | State=Focused, todos los valores de Type |
| border.base.focus.width | Grosor del borde de foco (2) | State=Focused, todos los valores de Type |

### Icono

| Token | Uso | Notas |
|--------|--------|--------|
| icon/secondary | Color de la silueta | Type=Icon |

### Tipografía

| Token | Uso | Notas |
|--------|--------|--------|
| Text/Label/XS | Label | Size=16 (size/11, line-height/16, letter-spacing/wide) |
| Text/Body/XS Strong | Label | Size=24 (size/12, line-height/16, letter-spacing/normal) |
| Text/Body/SM Strong | Label | Size=32 (size/14, line-height/20) |
| Text/Body/MD Strong | Label | Size=40 y Size=48 (size/16, line-height/20, letter-spacing/normal) |

Cada estilo se asoció a un Size según sus variables vinculadas. Todos los estilos usan family/body y weight/semibold.

### Espaciado

| Token | Uso | Notas |
|--------|--------|--------|
| none | — | El componente no tiene tokens de espaciado vinculados. |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| radius/24 | Radio de esquina del contenedor | Todas las variantes. La capa de imagen de Person usa 360px (sin token). |

### Sombra

| Token | Uso | Notas |
|--------|--------|--------|
| none | — | El componente no tiene tokens de sombra vinculados. |

Color del indicador de estado (Ellipse): no se encontró un token vinculado.

---

## Interacción

El componente tiene una variante State=Focused. La fuente no define interacciones de prototipo, disparadores ni transiciones, ni indica si el componente es interactivo.

---

## Accesibilidad

| Tema | Información |
|--------|--------|
| Requisito de accesibilidad | [Pending confirmation] |
| Soporte visible de estado | Variante State=Focused con borde de 2px border/focus. |
| Notas | No hay documentación de texto alternativo, nombre accesible, rol ni comportamiento con lectores de pantalla. [Pending confirmation] |

---

## Guías de contenido

- Label: carácter o inicial de texto; solo aplica a Type=Print (fuente: descripción del componente en Figma). Valor por defecto: B.
- Límite de caracteres, uso de mayúsculas y reglas para generar la inicial: [Pending confirmation]

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Type=Icon, Color=Default, Size=32, Show State=true
```

Descripción:

Lista de usuarios activos (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Type=Person, Color=Default, Size=40, Show State=false
```

Descripción:

Perfil con foto (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Type=Print, Color=Indigo, Size=40, Label=B, Show State=true
```

Descripción:

Avatar con inicial (fuente: descripción del componente en Figma).

---

## Combinaciones inválidas

- Type=Icon + Color=Evergreen (la variante no existe)
- Type=Icon + Color=Indigo (la variante no existe)
- Type=Person + Color=Evergreen (la variante no existe)
- Type=Person + Color=Indigo (la variante no existe)
- Label con Type=Icon o Type=Person (estas variantes no tienen capa de texto)
- Size=16 + Show State=true (indicado en la descripción de Figma; las variantes Size=16 sí tienen una capa de indicador de 6×6 px) [Pending confirmation]

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
- Conflicto de Size por defecto (16 vs 32) resuelto.
- Token de color del indicador de estado definido.

---

## Aclaraciones pendientes

- Size por defecto: la variante por defecto del component set es Size=16, pero la descripción de Figma indica Size=32. ¿Cuál es el correcto?
- Size=16 + Show State=true: la descripción lo marca como inválido, pero las variantes Size=16 tienen una capa de indicador de 6×6 px. ¿Se debe eliminar la capa o actualizar la regla?
- La descripción de Figma dice que "Type=Person sin imagen asignada vuelve a Icon automáticamente". Es comportamiento en ejecución y no se puede verificar en Figma. Confirmarlo con desarrollo.
- Indicador de estado: color/token y estados que representa (por ejemplo, en línea, ocupado, desconectado).
- Qué activa State=Focused (foco de teclado, selección) y si Avatar es interactivo.
- Accesibilidad: texto alternativo para Person y nombre accesible para Print e Icon.
- Valores sin token: grosor de borde de 1px (Print + Default) y radio de imagen de 360px (Person).
- Type=Person, Size=16, State=Default tiene un relleno de imagen adicional al 20% de opacidad en el contenedor, que los demás tamaños no tienen. ¿Es intencional?
- Status, versión y owner del componente.

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.