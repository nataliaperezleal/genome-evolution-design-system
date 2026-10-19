---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Visual overlay/underlay element"
status: "Done"
version: "1.2"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2041-81"
last_updated: "2026-10-19"
tags:
  - "backdrop"
  - "overlay"
  - "capas"
---

# Backdrop — Genome Evolution Design System

Capa semitransparente que oscurece o aclara el contenido de fondo, usada junto con modales, dropdowns y otras superposiciones para establecer jerarquía visual y foco.

## Referencia rápida

### Qué es

Elemento visual de superposición/subcapa (fuente: descripción del componente en Figma).

### Propiedades clave

- Color [White | Black] — default: Black

### Configuración por defecto

Color=Black

### Uso típico

- Diálogo modal: Color=Black
- Overlay para tema claro: Color=White
- Fondo de dropdown: Color=Black

---

## Propósito / Intención

### Problema que resuelve

Establece jerarquía visual y foco separando capas (fuente: descripción del componente en Figma).

### Resultado esperado

Mejor contraste del contenido flotante (fuente: descripción del componente en Figma).

### Contexto típico

Se usa junto con modales, dropdowns, popovers y tooltips (fuente: descripción del componente en Figma).

---

## Cuándo usar

- Para oscurecer el fondo al mostrar diálogos modales
- Para crear foco en contenido superpuesto (dropdowns, popovers, tooltips)
- Para establecer separación visual entre capas y mejorar el contraste del contenido flotante

---

## Cuándo NO usar

- Como fondo permanente de página
- Sin un componente de superposición que lo acompañe
- Para estados hover simples sin modal
- Cuando se requiere interacción total con el fondo
- Cuando la accesibilidad exige que el contenido de fondo siga visible

---

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerido | Descripción |
|--------|--------|--------|
| Capa | Requerido | Un único rectángulo semitransparente con desenfoque de fondo. Sin capas hijas ni texto. |

### Layout

| Propiedad | Valor |
|-----------|-----------|
| Alto | 131 (en ambas variantes; puede ser un tamaño de muestra) |
| Ancho | 182 (en ambas variantes; puede ser un tamaño de muestra) |
| Padding | Ninguno |
| Gap | Ninguno |
| Radio | [Pending confirmation] (radius/0 está presente en las variables) |

---

## Iconografía

El componente no contiene iconos.

### Slots de icono

| Slot | Descripción |
|--------|--------|
| Leading | No aplica. |
| Trailing | No aplica. |


## Variantes (Propiedades)

### Color

| Valor | Descripción |
|--------|--------|
| White | Capa clara semitransparente (overlay/white). Uso típico: overlay para tema claro. |
| Black | Capa oscura semitransparente (overlay/black). Uso típico: diálogo modal, fondo de dropdown. |

---

## Estados

El component set no tiene una propiedad de estado.

---

## Mapeo de tokens

### Fondo

| Token | Uso | Notas |
|--------|--------|--------|
| overlay/black | Relleno de la capa | Color=Black |
| overlay/white | Relleno de la capa | Color=White |

### Radio

| Token | Uso | Notas |
|--------|--------|--------|
| radius/0 | Presente en las variables | Capa no verificada |

### Sombra

Sin token: desenfoque de fondo de 8px.

---

| Tema | Información |
|--------|--------|
| Requisito de accesibilidad | La descripción de Figma indica no usarlo cuando la accesibilidad exige que el contenido de fondo siga visible. |
| Soporte visible de estado | [Pending confirmation] |
| Notas | No hay documentación de roles, manejo de foco ni valores de contraste. |

---

## Ejemplos

### Ejemplo 1

Configuración:

```text
Color=Black
```

Descripción:

Diálogo modal (fuente: descripción del componente en Figma).

### Ejemplo 2

Configuración:

```text
Color=White
```

Descripción:

Overlay para tema claro (fuente: descripción del componente en Figma).

### Ejemplo 3

Configuración:

```text
Color=Black
```

Descripción:

Fondo de dropdown (fuente: descripción del componente en Figma).

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
- Conteo de variantes verificado (2).

---

## Aclaraciones pendientes

- Combinaciones inválidas (no documentadas en Figma).
- Dimensiones: ¿182×131 son las medidas reales o un tamaño de muestra? Comportamiento al redimensionar.
- Desenfoque: los 8px no tienen token. ¿Existe uno?
- Radio: capa donde se usa radius/0.
- Interacción: si el Backdrop cierra la superposición al hacer clic y su orden de capas respecto al componente superpuesto.
- Accesibilidad: manejo de foco y requisitos de contraste.
- Status, versión y owner.

---

## Notas / Changelog

Generado a partir del material fuente disponible el 2026-10-19.