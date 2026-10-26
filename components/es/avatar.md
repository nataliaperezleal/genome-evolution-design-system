---
component: "Avatar"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-22"
tags:
  - "avatar"
  - "identity"
  - "data-display"
---

# Avatar

Sistema: Genome Evolution Design System

## Resumen del componente

Avatar es una representación visual circular de una entidad, disponible como ícono genérico, foto (Person) o inicial de texto (Print), en cinco tamaños de 16 a 48 px, con un estado de foco y un indicador de estado opcional.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Avatar representa visualmente a un usuario o entidad. Esto se sustenta en el nombre del componente, en los valores de `Type` `Person` (un marcador de posición de foto), `Print` (una etiqueta de texto que muestra una inicial, "B" en todos los ejemplos) e `Icon` (una silueta genérica de persona), y en el contenedor completamente redondeado (`radius/24`) usado en todos los tamaños. El componente en Figma no tiene una descripción de uso escrita; su única entrada de documentación es un enlace a la documentación del repositorio.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Icon, Person, Print | Icon (según las definiciones de propiedades reportadas por Figma MCP; ver Aclaraciones pendientes) |
| Color | Default, Evergreen, Indigo | Default |
| Size | 16, 24, 32, 40, 48 | 16 |
| State | Default, Focused | Default |
| label (texto) | Texto libre | B |
| showState (booleano) | true, false | false |

`Evergreen` e `Indigo` existen solo para `Type=Print`. `Icon` y `Person` existen solo con `Color=Default`.

### Configuración predeterminada

Las definiciones de propiedades reportadas por Figma MCP indican los siguientes valores predeterminados: `Type=Icon`, `Color=Default`, `Size=16`, `State=Default`, `label="B"`, `showState=false`. Estos valores provienen de las definiciones de propiedades del componente y no de una especificación escrita, por lo que el valor predeterminado de `Type` debe confirmarse (ver Aclaraciones pendientes).

### Uso típico

Observación verificada: El conjunto de componentes expone 50 variantes: 10 `Icon` (5 tamaños × 2 estados), 10 `Person` (5 tamaños × 2 estados) y 30 `Print` (3 colores × 5 tamaños × 2 estados).

Interpretación basada en evidencia:

- Use `Type=Person` cuando haya una foto de la persona disponible.
- Use `Type=Print` para mostrar una inicial cuando no haya foto; `Color` (`Default`, `Evergreen`, `Indigo`) aporta variedad visual a los avatares Print.
- Use `Type=Icon` como marcador de posición genérico cuando no haya foto ni inicial.
- Elija `Size` según la densidad del diseño circundante; los tamaños menores reducen la tipografía de la etiqueta (ver Layout).

Recomendación: Use el mismo `Size` para avatares que se muestran juntos en una lista o grupo, de modo que se alineen visualmente.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una forma consistente y compacta de identificar visualmente a una persona o entidad, con alternativas (inicial o ícono genérico) cuando no hay foto disponible.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden reconocer de un vistazo a quién o a qué se refiere un elemento, con un tamaño adecuado al diseño.

### Contexto típico

Los contextos específicos de producto no están documentados en Figma. El rango de tamaños de 16 a 48 px indica uso dentro de otros componentes y diseños (por ejemplo, listas, encabezados o tablas) más que como elemento principal independiente; esto es una interpretación basada en evidencia.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Para representar a una persona con foto (`Type=Person`).
- Para representar a una persona o entidad con una inicial cuando no hay foto (`Type=Print`).
- Para mostrar un marcador de posición genérico cuando no hay datos identificativos (`Type=Icon`).
- Para mostrar un indicador de estado sobre el avatar (`showState=true`); el significado del indicador no está documentado en Figma.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

El componente en Figma no tiene descripción de uso ni restricciones documentadas. El conjunto de componentes no ofrece tamaños superiores a 48 px ni colores distintos de `Default` para `Icon` y `Person`.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco circular (`radius/24`) dimensionado por `Size`. En `Print`, contiene el relleno y el borde. |
| Etiqueta | Obligatoria en `Type=Print` | Capa de texto que muestra el valor de la propiedad `label` ("B" en todas las variantes). |
| Imagen | Obligatoria en `Type=Person` | Capa de imagen llamada `unsplash:LWkFHEGpleE` (foto de muestra), recortada en círculo. |
| Vector del ícono | Obligatoria en `Type=Icon` | Una única capa vectorial que muestra una silueta genérica de persona y ocupa todo el avatar. |
| Indicador de estado | Opcional | Capa elipse (`Ellipse 3`) en la esquina inferior derecha, oculta por defecto y controlada por `showState` en `Print` y `Person`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho × alto | 16, 24, 32, 40 o 48 px (cuadrado), según `Size` | Dimensiones de las variantes |
| Radio de esquina | `radius/24` (24) — se renderiza como círculo en todos los tamaños | Vinculación de variable |
| Alineación de la etiqueta | Centrada horizontal y verticalmente (auto layout vertical) | Contexto de diseño, variantes `Print` |
| Tipografía de la etiqueta — Size 16 | `Text/Label/XS`: `family/body` (Open Sans), peso 600, `size/11`, `line-height/16`, `letter-spacing/wide` (1) | Vinculaciones de variables |
| Tipografía de la etiqueta — Size 24 | `Text/Body/XS Strong`: `size/12`, `line-height/16`, `letter-spacing/normal` (0) | Vinculaciones de variables |
| Tipografía de la etiqueta — Size 32 | `Text/Body/SM Strong`: `size/14`, `line-height/20`, espaciado entre letras 0 | Vinculaciones de variables |
| Tipografía de la etiqueta — Size 40 y 48 | `Text/Body/MD Strong`: `size/16`, `line-height/20`, `letter-spacing/normal` | Vinculaciones de variables |
| Tamaño del indicador de estado | 6 px (16), 8 px (24), 10 px (32), 12 px (40 y 48) | Dimensiones de la capa |
| Posición del indicador de estado | Inferior derecha; alineado al borde inferior derecho del contenedor | Posiciones de capa (p. ej., 12 × 12 en x 36, y 36 en Size 48) |
| Borde — Print, Color=Default, State=Default | 1 px, `border/strong` | Contexto de diseño |
| Borde — State=Focused | `focus/width` (2), `border/focus` | Contexto de diseño |

## Semántica

Interpretación basada en evidencia: El componente comunica identidad. `Person` muestra la imagen real de la persona, `Print` muestra una abreviatura del nombre (una inicial) e `Icon` muestra una persona no específica. Los valores de `Color` en `Print` son temas visuales; Figma no documenta si tienen significado (por ejemplo, roles o categorías). El significado del indicador de estado (`showState`) no está documentado.

No verificado en Figma: elemento HTML, rol ARIA, texto alternativo y comportamiento con lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Vector del ícono (`Type=Icon`) | Silueta genérica de persona (cabeza y hombros) sobre un fondo circular, con `icon/secondary` | Captura, capa `Vector`, vinculación de variable |

El ícono es una única capa vectorial aplanada, no una instancia de ícono intercambiable.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las 50 variantes del conjunto de componentes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Icon | Silueta genérica de persona renderizada como vector que ocupa todo el avatar. | 10 variantes; solo `Color=Default` |
| Person | Foto circular (imagen de muestra `unsplash:LWkFHEGpleE`). | 10 variantes; solo `Color=Default` |
| Print | Inicial de texto (`label`) sobre un círculo con relleno. | 30 variantes; los tres colores |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Print: relleno `background/canvas`, borde de 1 px `border/strong`, etiqueta `text/secondary`. Icon y Person usan su propio contenido. | Todos los tipos |
| Evergreen | Print: relleno `surface/evergreen/subtle`, sin borde, etiqueta `text/evergreen`. | Solo `Type=Print` |
| Indigo | Print: relleno `surface/indigo/subtle`, sin borde, etiqueta `text/indigo`. | Solo `Type=Print` |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| 16 | 16 × 16 px; etiqueta `Text/Label/XS`; indicador de 6 px | Todos los tipos |
| 24 | 24 × 24 px; etiqueta `Text/Body/XS Strong`; indicador de 8 px | Todos los tipos |
| 32 | 32 × 32 px; etiqueta `Text/Body/SM Strong`; indicador de 10 px | Todos los tipos |
| 40 | 40 × 40 px; etiqueta `Text/Body/MD Strong`; indicador de 12 px | Todos los tipos |
| 48 | 48 × 48 px; etiqueta `Text/Body/MD Strong`; indicador de 12 px | Todos los tipos |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Apariencia en reposo. | Todas las combinaciones |
| Focused | Añade un anillo `border/focus` de 2 px (`focus/width`) alrededor del avatar. | Todas las combinaciones |

### label

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Texto | Texto que se muestra en `Type=Print`. "B" en todas las variantes. | Propiedad de texto; se aplica a la capa de etiqueta de Print |

### showState

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| false | Indicador de estado oculto. | Predeterminado |
| true | Muestra el indicador de estado en la esquina inferior derecha. | Vinculado en `Print` y `Person`; ver Aclaraciones pendientes para `Icon` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Print Default: 1 px `border/strong`; Evergreen/Indigo: sin borde. | Variantes `State=Default` |
| Focused | Apariencia de foco. | Un anillo `border/focus` de 2 px reemplaza o añade el borde; en `Person` el anillo se aplica a la capa de imagen. | Variantes `State=Focused` |

`Focused` es una variante visual; Figma no establece si el avatar recibe el foco ni cómo. No existen estados hover, pressed, selected ni disabled.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Radio | `radius/24` | Radio de esquina del contenedor (todos los tipos) | Vinculación de variable |
| Fondo | `background/canvas` | Relleno de Print, Color=Default | Vinculación de variable |
| Fondo | `surface/evergreen/subtle` | Relleno de Print, Color=Evergreen | Vinculación de variable |
| Fondo | `surface/indigo/subtle` | Relleno de Print, Color=Indigo | Vinculación de variable |
| Borde | `border/strong` | Borde de Print, Color=Default (State=Default) | Vinculación de variable |
| Borde | `border/focus` | Anillo de foco (State=Focused) | Vinculación de variable |
| Ancho de borde | `focus/width` | Ancho del anillo de foco (2) | Vinculación de variable |
| Color de texto | `text/secondary` | Etiqueta de Print, Color=Default | Vinculación de variable |
| Color de texto | `text/evergreen` | Etiqueta de Print, Color=Evergreen | Vinculación de variable |
| Color de texto | `text/indigo` | Etiqueta de Print, Color=Indigo | Vinculación de variable |
| Color de ícono | `icon/secondary` | Silueta del tipo Icon | Vinculación de variable |
| Tipografía | `Text/Label/XS`, `Text/Body/XS Strong`, `Text/Body/SM Strong`, `Text/Body/MD Strong` | Etiqueta de Print según el tamaño (ver Layout) | Estilos de texto en el componente |
| Tipografía | `family/body`, `weight/semibold`, `size/11`, `size/12`, `size/14`, `size/16`, `line-height/16`, `line-height/20`, `letter-spacing/wide`, `letter-spacing/normal` | Tipografía de la etiqueta de Print | Vinculaciones de variables |

No verificado en Figma: el relleno del indicador de estado no tiene vinculación de variable, por lo que no se puede establecer su token de color.

## Interacción

Estados observados: existen variantes `Default` y `Focused` para cada tipo, color y tamaño.

No verificado en Figma: si el avatar es interactivo (clicable o enfocable), las interacciones de prototipo y las transiciones. No se encontraron enlaces de prototipo en el componente.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `State=Focused` ofrece un anillo visible de 2 px `border/focus` en todos los tamaños, distinto del borde predeterminado de 1 px `border/strong`.
- En `Print`, los colores de etiqueta y relleno se emparejan por color (`text/evergreen` sobre `surface/evergreen/subtle`, `text/indigo` sobre `surface/indigo/subtle`, `text/secondary` sobre `background/canvas`). Las relaciones de contraste no se han verificado.
- En `Size=16`, la etiqueta usa una fuente de 11 px (`size/11`).
- El indicador de estado se comunica solo de forma visual; Figma no define una alternativa textual.

Información de accesibilidad faltante (no verificado en Figma): texto alternativo para `Person` e `Icon`, nombre accesible, rol ARIA, soporte de teclado, anuncio en lectores de pantalla y si el indicador de estado requiere un equivalente textual.

## Pautas de contenido

Observación verificada: Todas las variantes `Print` muestran un único carácter en mayúscula ("B") en la propiedad `label`.

Recomendación: Use una o dos iniciales para que la etiqueta quepa en el círculo, especialmente en `Size=16` y `Size=24`. Figma no define una longitud máxima para la etiqueta.

## Ejemplos

### Avatar con foto

Configuración: `Type=Person`, `Color=Default`, `Size=40`, `State=Default`

Descripción: Muestra la foto de una persona a 40 px.

Evidencia / Clasificación: Variante existente en Figma.

### Avatar con inicial y color

Configuración: `Type=Print`, `Color=Evergreen`, `Size=32`, `State=Default`, `label="B"`

Descripción: Inicial "B" sobre un fondo sutil Evergreen.

Evidencia / Clasificación: Variante existente en Figma.

### Marcador de posición enfocado con estado

Configuración: `Type=Icon`, `Color=Default`, `Size=48`, `State=Focused`, `showState=true`

Descripción: Avatar genérico con anillo de foco e indicador de estado.

Evidencia / Clasificación: Configuración propuesta; la variante `Icon` existe, pero el comportamiento de `showState` para `Icon` no está verificado (ver Aclaraciones pendientes).

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `Type=Icon` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante en el conjunto de componentes | Inventario de variantes |
| `Type=Person` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante en el conjunto de componentes | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

1. `Type` predeterminado: Las definiciones de propiedades reportadas por Figma MCP indican `Icon` como predeterminado, pero el orden de variantes del conjunto de componentes lista `Print` primero. Confirme el `Type` predeterminado previsto.
2. Indicador de estado en `Icon`: Las variantes `Icon` contienen una capa oculta `Ellipse 3`, pero no parece estar vinculada a `showState`, a diferencia de `Print` y `Person`. Confirme si `showState` debe funcionar en `Icon`.
3. Significado y color del indicador de estado: El significado del indicador (por ejemplo, estado en línea) no está documentado y su relleno no está vinculado a una variable. Confirme el significado y el token que se debe usar.
4. Peso tipográfico: `weight/semibold` se resuelve en el estilo "Medium", mientras que los estilos de texto declaran peso 600. Confirme si la etiqueta debe renderizarse como Medium o SemiBold.
5. Foco e interactividad: Existe un estado `Focused`, pero Figma no establece si el avatar es interactivo. Confirme si el avatar es enfocable y en qué contextos.

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
