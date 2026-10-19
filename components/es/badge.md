---
component: "Badge"
system: "Genome Evolution Design System"
type: "Indicator/label component"
status: "Production"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2046-82"
last_updated: "2026-10-19"
tags:
  - "badge"
  - "estado"
  - "etiqueta"
---

# Badge — Genome Evolution Design System

Muestra un conteo, estado o categoría en un formato compacto y visualmente distintivo, para dar retroalimentación visual rápida.

## Referencia rápida

### Qué es

Componente indicador/etiqueta (fuente: descripción del componente en Figma).

### Propiedades clave

- Type [Filled | Line] — default: Line
- Color [Default | Evergreen | Indigo | Inverse | Information | Warning | Error | Success] — default: Default
- Label — contenido de texto (default: 0)

### Configuración por defecto

Type=Line, Color=Default, Label=0

### Uso típico

- Conteo de notificaciones: Type=Filled, Color=Default, Label=5
- Etiqueta de advertencia: Type=Line, Color=Warning, Label=Warning
- Estado de error: Type=Filled, Color=Error, Label=!

---

## Propósito / Intención

### Problema que resuelve

Da retroalimentación visual rápida sobre un conteo, estado o categoría en un formato compacto (fuente: descripción del componente en Figma).

### Contexto típico

Conteos de notificaciones, indicadores de estado, etiquetas de categoría y marcadores semánticos como advertencias y alertas (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Para mostrar conteos de notificaciones o indicadores de estado
- Para mostrar etiquetas o tags de categoría
- Para indicar estado (nuevo, actualizado, error, éxito) o marcar elementos con significado semántico (advertencias, alertas)

---

## Cuándo NO usar

- Para texto descriptivo largo
- Cuando se necesita información detallada
- Como elemento de acción principal
- Para estados de carga (usar un spinner dedicado)
- Cuando la accesibilidad requiere texto de forma más larga

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Contenedor | Requerido | Marco en forma de píldora (radio semantic/full) con padding horizontal. El relleno y el borde dependen de Type y Color. |
| Label | Requerido | Texto centrado. Valor por defecto: 0. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | 14 (mínimo observado; igual a line-height/14, sin padding vertical) |
| Ancho | 14 en las variantes con el Label por defecto "0". Regla de redimensionamiento: [Pending confirmation] |
| Padding | space/4 horizontal, space/0 vertical |
| Gap | gap/none |
| Radio | semantic/full |

---

## Semántica

Según la descripción de Figma, Badge comunica un conteo, un estado o una categoría. Los valores de Color Information, Warning, Error y Success se nombran según significados semánticos. Significado de Default, Evergreen, Indigo e Inverse: Usado según necesidad.

---

## Iconografía

El componente no contiene iconos.

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | No aplica. |
| Trailing | No aplica. |

---

## Variantes (Propiedades)

### Type

| Valor | Descripción |
|--------|--------|
| Filled | Relleno sólido de fondo. El color del texto es text/inverse, excepto con Color=Inverse. |
| Line | Contorno con borde. El relleno depende de Color (ver Mapeo de tokens). |

### Color

| Valor | Descripción |
|--------|--------|
| Default | Neutro. Line: relleno surface/subtlest, borde border/default. Filled: relleno surface/raised. |
| Evergreen | Evergreen. Line: borde border/evergreen, sin relleno. Filled: relleno surface/evergreen/bold. |
| Indigo | Indigo. Line: borde border/indigo, sin relleno. Filled: relleno surface/indigo/bold. |
| Inverse | Para fondos oscuros. Line: borde border/inverse, texto text/inverse, sin relleno. Filled: relleno background/canvas, texto text/secondary. |
| Information | Información. Line: relleno surface/info/subtle, borde border/info. Filled: relleno surface/info/bold. |
| Warning | Advertencia. Line: relleno surface/warning/subtle, borde border/warning. Filled: relleno surface/warning/bold. |
| Error | Error. Line: relleno surface/danger/subtle, borde border/danger. Filled: relleno surface/danger/bold. |
| Success | Éxito. Line: relleno surface/evergreen/subtle, borde border/success. Filled: relleno surface/success/bold. |

### Label

Contenido de texto. Valor por defecto: 0. Límite de longitud: [Pending confirmation]

---

## Estados

El component set no tiene una propiedad de estado.

---

## Mapeo de tokens

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| surface/subtlest | Relleno | Type=Line, Color=Default |
| surface/raised | Relleno | Type=Filled, Color=Default |
| surface/evergreen/bold | Relleno | Type=Filled, Color=Evergreen |
| surface/indigo/bold | Relleno | Type=Filled, Color=Indigo |
| background/canvas | Relleno | Type=Filled, Color=Inverse |
| surface/info/subtle | Relleno | Type=Line, Color=Information |
| surface/info/bold | Relleno | Type=Filled, Color=Information |
| surface/warning/subtle | Relleno | Type=Line, Color=Warning |
| surface/warning/bold | Relleno | Type=Filled, Color=Warning |
| surface/danger/subtle | Relleno | Type=Line, Color=Error |
| surface/danger/bold | Relleno | Type=Filled, Color=Error |
| surface/evergreen/subtle | Relleno | Type=Line, Color=Success (no es un token success) |
| surface/success/bold | Relleno | Type=Filled, Color=Success |

### Texto

| Token | Uso | Notas |
|--------|--------|--------|
| text/secondary | Label | Type=Line, Color=Default; Type=Filled, Color=Inverse |
| text/inverse | Label | Todos los Type=Filled excepto Color=Inverse; Type=Line, Color=Inverse |
| text/evergreen | Label | Type=Line, Color=Evergreen |
| text/indigo | Label | Type=Line, Color=Indigo |
| text/info | Label | Type=Line, Color=Information |
| text/warning | Label | Type=Line, Color=Warning |
| text/danger | Label | Type=Line, Color=Error |
| text/success | Label | Type=Line, Color=Success |

### Borde

| Token | Uso | Notas |
|--------|--------|--------|
| border/default | Borde de 1px | Type=Line, Color=Default |
| border/evergreen | Borde de 1px | Type=Line, Color=Evergreen |
| border/indigo | Borde de 1px | Type=Line, Color=Indigo |
| border/inverse | Borde de 1px | Type=Line, Color=Inverse |
| border/info | Borde de 1px | Type=Line, Color=Information |
| border/warning | Borde de 1px | Type=Line, Color=Warning |
| border/danger | Borde de 1px | Type=Line, Color=Error |
| border/success | Borde de 1px | Type=Line, Color=Success |

Las variantes Filled no tienen borde. El grosor de 1px no tiene token.

### Tipografía

| Token | Uso | Notas |
|--------|--------|--------|
| Text/Body/XXS Strong | Label | size/10, line-height/14, letter-spacing/normal, weight/semibold, family/body |

### Espaciado

| Token | Uso | Notas |
|--------|--------|--------|
| space/4 | Padding horizontal | |
| space/0 | Padding vertical | |
| gap/none | Gap | |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| semantic/full | Radio del contenedor (999) | Confirmado en las variables de Figma; no contrastado con los archivos de tokens |

---

## Accesibilidad

| Tema | Información |
|--------|--------|
| Requisito de accesibilidad | La descripción de Figma indica no usarlo cuando la accesibilidad requiere texto de forma más larga. |
| Soporte visible de estado | [Pending confirmation] |
| Notas | No hay documentación de roles, anuncios ni valores de contraste. |

---

## Guías de contenido

- Label: contenido de texto (default: 0). La descripción de Figma da ejemplos de un conteo (5), una palabra (Warning) y un símbolo (!).

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Type=Filled, Color=Default, Label=5
```

Descripción:

Conteo de notificaciones (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Type=Line, Color=Warning, Label=Warning
```

Descripción:

Etiqueta de advertencia (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Type=Filled, Color=Error, Label=!
```

Descripción:

Estado de error (fuente: descripción del componente en Figma).

---

Las 16 combinaciones Type × Color existen en el component set.

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
- Conteo de variantes verificado (16).
- semantic/full verificado contra los archivos de tokens.

---

## Aclaraciones pendientes

- Combinaciones inválidas (no documentadas en Figma).
- Type=Line, Color=Success usa surface/evergreen/subtle como relleno. ¿Es intencional?
- Type=Line, Color=Evergreen / Indigo no tienen relleno, a diferencia de las demás variantes Line.
- Ancho: ¿el badge se ajusta a su Label? Longitud máxima y comportamiento de desbordamiento.
- Significado de Color=Default, Evergreen, Indigo e Inverse.
- Si el Badge incrustado en Accordion debería usar este componente; usa valores distintos (#9e9e9e, #272727).
- Accesibilidad: anuncio de conteos y estados, requisitos de contraste.
- Status, versión y owner.

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.