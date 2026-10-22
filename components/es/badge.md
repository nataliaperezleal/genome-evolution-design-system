---
component: "Badge"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2046-82"
last_updated: "2026-10-22"
tags:
  - "badge"
  - "counter"
  - "status"
---

# Badge

Sistema: Genome Evolution Design System

## Resumen del componente

Badge es una pequeña etiqueta en forma de píldora que muestra un valor breve, como un conteo, en estilo delineado (`Line`) o sólido (`Filled`) en ocho colores, incluidos colores de estado.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Badge muestra un valor compacto, normalmente un número, junto a otros elementos. Esto se sustenta en el valor predeterminado de `label` "0", la tipografía de 10 px de la etiqueta, el contenedor completamente redondeado (`semantic/full`) y la altura de 14 px. Los colores de estado (`Information`, `Warning`, `Error`, `Success`) están vinculados a los tokens `info`, `warning`, `danger` y `success` correspondientes, por lo que el badge también puede comunicar estado mediante el color. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Line, Filled | Line |
| Color | Default, Inverse, Information, Warning, Error, Success, Evergreen, Indigo | Default |
| label (texto) | Texto libre | 0 |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Existen todas las combinaciones de `Type` y `Color` (16 variantes).

### Configuración predeterminada

`Type=Line`, `Color=Default`, `label="0"`: una píldora `surface/subtlest` con un borde de 1 px `border/default` y una etiqueta `text/secondary`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 16 variantes, una por cada combinación de `Type` (2 valores) y `Color` (8 valores). Todas las variantes comparten el mismo layout y la misma tipografía, y solo difieren en el relleno, el borde y el color de la etiqueta.

Interpretación basada en evidencia:

- Use `Type=Line` para un badge delineado y más ligero, y `Type=Filled` para un badge sólido de mayor énfasis.
- Use `Information`, `Warning`, `Error` o `Success` cuando el valor se relacione con un estado, ya que estos colores usan los tokens de estado del sistema.
- Use `Default`, `Evergreen` o `Indigo` para badges neutros o de color de marca.
- Use `Inverse` sobre superficies oscuras: `Line / Inverse` usa borde y texto claros (`border/inverse`, `text/inverse`) sin relleno, y `Filled / Inverse` usa un relleno `background/canvas`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una forma compacta y consistente de mostrar un valor breve, como un conteo, junto a otros elementos de la interfaz, opcionalmente coloreado según el estado.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden notar un valor o un estado de un vistazo sin que ocupe mucho espacio.

### Contexto típico

Interpretación basada en evidencia: La altura de 14 px y la etiqueta de 10 px indican uso junto a otros componentes o dentro de ellos, más que de forma independiente. Los componentes contenedores específicos no están documentados en el componente Badge.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Para mostrar un valor breve, como un conteo, junto a una etiqueta, un ícono o un encabezado.
- Para asociar ese valor con un estado (`Information`, `Warning`, `Error`, `Success`).
- Para colocar un badge sobre una superficie oscura (`Inverse`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

El badge tiene un único tamaño y una sola línea de texto de 10 px; el conjunto de componentes no ofrece tamaños mayores ni íconos.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco de auto layout en forma de píldora que lleva el relleno y, en `Line`, el borde. |
| Etiqueta | Obligatoria | Capa de texto centrada que muestra el valor de la propiedad `label`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño con la etiqueta predeterminada ("0") | 14 × 14 px | Dimensiones de las variantes |
| Ancho | Se adapta a la etiqueta (auto layout, sin ancho fijo) | Contexto de diseño |
| Relleno horizontal | `space/4` (4) | Vinculación de variable |
| Relleno vertical | `space/0` (0) | Vinculación de variable |
| Espacio | `gap/none` (0) | Vinculación de variable |
| Radio de esquina | `semantic/full` (999) — completamente redondeado | Vinculación de variable |
| Borde (`Type=Line`) | 1 px (ancho no vinculado a una variable) | Contexto de diseño |
| Alineación | Etiqueta centrada horizontal y verticalmente | Contexto de diseño |
| Tipografía de la etiqueta | `Text/Body/XXS Strong`: `family/body` (Open Sans), `weight/semibold` (600), `size/10`, `line-height/14`, `letter-spacing/normal` | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste) | Contexto de diseño |

## Semántica

Interpretación basada en evidencia:

- `Information`, `Warning`, `Error` y `Success` comunican estado, ya que están vinculados a las familias de tokens `info`, `warning`, `danger` y `success`. `Error` usa los tokens `danger`.
- `Default`, `Evergreen` e `Indigo` no tienen un significado de estado documentado.
- `Inverse` es una variante de contraste para superficies oscuras, no un estado.
- `Filled` aporta más énfasis visual que `Line`; Figma no documenta una diferencia semántica entre ambos.

No verificado en Figma: elemento HTML, rol ARIA y cómo anuncian el valor los lectores de pantalla.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 16 variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Line | Borde de 1 px en el token de borde del color; relleno claro o sin relleno; etiqueta de color. | 8 variantes |
| Filled | Relleno sólido en el token de superficie bold del color; sin borde; etiqueta `text/inverse` (excepto `Inverse`). | 8 variantes |

### Color

| Valor | Line (relleno / borde / etiqueta) | Filled (relleno / etiqueta) |
|-------|-----------------------------------|-----------------------------|
| Default | `surface/subtlest` / `border/default` / `text/secondary` | `surface/raised` / `text/inverse` |
| Inverse | Sin relleno / `border/inverse` / `text/inverse` | `background/canvas` / `text/secondary` |
| Information | `surface/info/subtle` / `border/info` / `text/info` | `surface/info/bold` / `text/inverse` |
| Warning | `surface/warning/subtle` / `border/warning` / `text/warning` | `surface/warning/bold` / `text/inverse` |
| Error | `surface/danger/subtle` / `border/danger` / `text/danger` | `surface/danger/bold` / `text/inverse` |
| Success | `surface/evergreen/subtle` / `border/success` / `text/success` | `surface/success/bold` / `text/inverse` |
| Evergreen | Sin relleno / `border/evergreen` / `text/evergreen` | `surface/evergreen/bold` / `text/inverse` |
| Indigo | Sin relleno / `border/indigo` / `text/indigo` | `surface/indigo/bold` / `text/inverse` |

Comportamiento actual: `Line / Success` usa `surface/evergreen/subtle` como relleno, mientras que su borde y su etiqueta usan tokens `success`. `Line / Evergreen`, `Line / Indigo` y `Line / Inverse` no tienen relleno, por lo que se ve la superficie que queda detrás.

### label

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Texto | Valor que se muestra en el badge. "0" en todas las variantes. | Propiedad de texto |

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/subtlest`, `surface/raised` | Relleno de Default (Line, Filled) | Vinculación de variable |
| Superficie | `background/canvas` | Relleno de Filled / Inverse | Vinculación de variable |
| Superficie | `surface/info/subtle`, `surface/info/bold` | Relleno de Information (Line, Filled) | Vinculación de variable |
| Superficie | `surface/warning/subtle`, `surface/warning/bold` | Relleno de Warning (Line, Filled) | Vinculación de variable |
| Superficie | `surface/danger/subtle`, `surface/danger/bold` | Relleno de Error (Line, Filled) | Vinculación de variable |
| Superficie | `surface/evergreen/subtle`, `surface/success/bold` | Relleno de Success (Line, Filled) | Vinculación de variable |
| Superficie | `surface/evergreen/bold`, `surface/indigo/bold` | Relleno de Evergreen e Indigo (Filled) | Vinculación de variable |
| Borde | `border/default`, `border/inverse`, `border/info`, `border/warning`, `border/danger`, `border/success`, `border/evergreen`, `border/indigo` | Borde de Line según el color | Vinculación de variable |
| Texto | `text/secondary`, `text/inverse`, `text/info`, `text/warning`, `text/danger`, `text/success`, `text/evergreen`, `text/indigo` | Color de la etiqueta según tipo y color | Vinculación de variable |
| Espaciado | `space/4`, `space/0`, `gap/none` | Relleno y espacio | Vinculación de variable |
| Radio | `semantic/full` | Radio de esquina | Vinculación de variable |
| Tipografía | `Text/Body/XXS Strong` | Etiqueta | Estilo de texto |

El ancho de borde de 1 px es un valor fijo y no está vinculado a una variable.

## Interacción

Badge no tiene variantes de estado ni interacciones de prototipo en Figma. Se presenta como un elemento de visualización no interactivo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- La etiqueta tiene 10 px (`size/10`) con peso 600.
- El estado se comunica mediante el color; el badge no tiene ícono ni texto que indique el estado por sí mismo.
- `Line / Inverse` usa borde y texto claros sin relleno, por lo que solo es legible sobre superficies oscuras.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombre accesible, cómo se anuncian el valor y su estado a las tecnologías de asistencia, y alternativas textuales para el estado comunicado solo por color.

## Pautas de contenido

Observación verificada: Todas las variantes muestran el carácter único "0". La etiqueta no se ajusta en varias líneas y el badge crece horizontalmente con su contenido.

## Ejemplos

### Conteo neutro

Configuración: `Type=Line`, `Color=Default`, `label="0"`

Descripción: Badge neutro delineado con un conteo.

Evidencia / Clasificación: Variante existente en Figma.

### Conteo de error

Configuración: `Type=Filled`, `Color=Error`, `label="0"`

Descripción: Badge sólido `surface/danger/bold` con etiqueta inversa.

Evidencia / Clasificación: Variante existente en Figma.

### Badge sobre superficie oscura

Configuración: `Type=Line`, `Color=Inverse`, `label="0"`

Descripción: Badge delineado con borde y etiqueta claros, para fondos oscuros.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
