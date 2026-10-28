---
component: "Icon Button"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2182-3348"
last_updated: "2026-10-22"
tags:
  - "button"
  - "icon"
  - "action"
---

# Icon Button

Sistema: Genome Evolution Design System

## Resumen del componente

Icon Button es un botón solo con ícono, disponible en los tipos Filled y Outline, cuatro colores, tres tamaños (24, 32 y 48 px) y dos estilos de esquina, con los estados Default, Hover, Pressed, Focused y Disable.

## Referencia rápida

### Qué es

Especificación verificada (descripción en Figma): Icon Button es un botón solo con ícono. Se usa cuando el espacio disponible no permite un botón con texto, cuando el ícono es lo bastante claro sin etiqueta (por ejemplo, enviar, papelera, guardar, editar, cerrar) y cuando se agrupan varias acciones en una barra de herramientas donde el texto generaría ruido visual.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Filled, Outline | Filled |
| Color | Evergreen, Indigo, Inverse, Default | Evergreen |
| State | Default, Hover, Pressed, Focused, Disable | Default |
| Size | LG, MD, SM | LG |
| Corner | Square, Rounded | Square |
| largeIcon (intercambio de instancia) | Cualquier ícono | send (LG) |
| mediumIcon (intercambio de instancia) | Cualquier ícono | send (MD) |
| smallIcon (intercambio de instancia) | Cualquier ícono | trash (SM) |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Los valores de estado se escriben `Hover` y `Disable`.

Comportamiento actual: el ícono se define mediante una propiedad de intercambio de instancia distinta para cada tamaño: `largeIcon` (LG), `mediumIcon` (MD) y `smallIcon` (SM).

### Configuración predeterminada

`Type=Filled`, `Color=Evergreen`, `State=Default`, `Size=LG`, `Corner=Square`: un botón `surface/evergreen/bold` de 48 × 48 px con un ícono `send` de 24 px en `icon/inverse` y un radio de esquina de 4 px.

### Uso típico

Observación verificada: El conjunto de componentes contiene 156 variantes. Los colores disponibles dependen de `Type` y `State`:

| Type | Colores | Estados |
|------|---------|---------|
| Filled | Evergreen, Indigo, Inverse | Default, Hover, Pressed, Focused |
| Filled | Default | Disable |
| Outline | Default, Evergreen, Indigo | Default, Hover, Pressed, Focused |
| Outline | Default | Disable |

Cada combinación anterior existe en los tres tamaños y en ambos estilos de esquina.

Pauta verificada (descripción en Figma): Use Icon Button cuando el espacio no permita un botón con texto, cuando el ícono sea claro sin etiqueta o cuando se agrupen acciones en una barra de herramientas.

Interpretación basada en evidencia:

- `Filled` aporta más énfasis que `Outline`.
- `Inverse` (un botón blanco con un ícono neutro) es para usarse sobre fondos de color u oscuros.
- Para mostrar un botón deshabilitado, configure `Color=Default` junto con `State=Disable`.

## Propósito / Intención

### Problema que resuelve

Especificación verificada: Ofrece una acción en forma compacta, solo con ícono, donde un botón con texto no cabe o el texto añadiría ruido.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden reconocer y activar acciones solo por su ícono.

### Contexto típico

Especificación verificada (descripción en Figma): Barras de herramientas y espacios reducidos.

## Cuándo usar

Pauta verificada (descripción en Figma):

- Cuando el espacio disponible no permite un botón con texto.
- Cuando el ícono es lo bastante claro sin etiqueta (enviar, papelera, guardar, editar, cerrar).
- Cuando se agrupan varias acciones en una barra de herramientas donde el texto generaría ruido visual.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Comportamiento actual: La descripción en Figma incluye una sección "DO NOT USE", pero sus tres puntos repiten textualmente los de "USE WHEN", por lo que no documenta ninguna restricción.

Limitaciones del componente actual:

- `Disable` existe solo con `Color=Default`.
- `Inverse` existe solo para `Filled`; `Default` existe para `Outline` en todos los estados, pero para `Filled` solo en `Disable`.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco cuadrado que lleva el relleno o el borde, el radio de esquina y el borde de foco. |
| Ícono | Obligatoria | Un único ícono, intercambiable mediante la propiedad de ícono del tamaño. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — LG | 48 × 48 px; relleno de 12 px; ícono de 24 px | Dimensiones de las variantes, contexto de diseño |
| Tamaño — MD | 32 × 32 px; relleno de 8 px; ícono de 16 px | Dimensiones de las variantes, contexto de diseño |
| Tamaño — SM | 24 × 24 px; relleno `space/4`; ícono de 16 px | Dimensiones de las variantes, vinculación de variable |
| Esquina — Square | `semantic/sm` (4) | Vinculación de variable |
| Esquina — Rounded | `semantic/full` (999), completamente circular | Vinculación de variable (inspeccionado en SM) |
| Borde de Outline | 1 px | Contexto de diseño |
| Borde de foco | `focus/width` (2 px) `border/focus` | Vinculaciones de variables (inspeccionado en Filled) |

Comportamiento actual: En SM, el ícono de 16 px con relleno de 4 px ocupa el botón de 24 px, por lo que el ícono ocupa una proporción mayor del botón que en MD y LG.

## Semántica

Especificación verificada: El ícono comunica la acción; la descripción en Figma indica enviar, papelera, guardar, editar y cerrar como ejemplos de íconos lo bastante claros para usarse sin etiqueta.

Interpretación basada en evidencia: `Filled` y `Outline` expresan distintos niveles de énfasis; `Color` selecciona la paleta de marca (Evergreen, Indigo), un estilo neutro (Default) o un estilo claro para fondos oscuros (Inverse).

No verificado en Figma: elemento HTML, atributos ARIA y nombres accesibles.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Ícono — LG | `send`, 24 px; intercambiable mediante `largeIcon` | Propiedad de intercambio de instancia |
| Ícono — MD | `send`, 16 px; intercambiable mediante `mediumIcon` | Propiedad de intercambio de instancia |
| Ícono — SM | `trash`, 16 px; intercambiable mediante `smallIcon` | Propiedad de intercambio de instancia |

## Variantes (Propiedades)

El inventario de variantes siguiente es completo (156 variantes listadas). Los tokens se inspeccionaron en variantes representativas; ver Mapeo de tokens para las partes que no se pudieron inspeccionar.

### Type y Color

| Type / Color | Apariencia predeterminada | Evidencia |
|--------------|---------------------------|-----------|
| Filled / Evergreen | Relleno `surface/evergreen/bold`; ícono `icon/inverse` | Vinculación de variable |
| Filled / Indigo | Relleno Indigo; ícono inverso | Captura; tokens no verificados en Figma |
| Filled / Inverse | Relleno `background/canvas`; ícono `icon/primary` | Vinculación de variable |
| Filled / Default | Solo Disable | Inventario de variantes |
| Outline / Default | Borde de 1 px `border/default`; ícono `icon/primary` | Vinculación de variable |
| Outline / Evergreen | Borde de 1 px `border/evergreen`; ícono Evergreen | Vinculación de variable (borde), captura (ícono) |
| Outline / Indigo | Borde de 1 px `border/indigo`; ícono `icon/indigo` | Vinculación de variable |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Apariencia en reposo. | Todos los colores |
| Hover | Colores de marca Filled: `surface/<color>/bold/hovered`. Filled Inverse y Outline: `background/interactive/hovered`. | Vinculaciones de variables (Evergreen, Inverse, Outline Default) |
| Pressed | Colores de marca Filled: `surface/<color>/bold/pressed`. Outline: `background/interactive/pressed`. | Vinculaciones de variables (Evergreen, Outline Indigo) |
| Focused | Borde de 2 px `border/focus`; el relleno se mantiene como en Default. | Vinculaciones de variables (Filled Evergreen SM) |
| Disable | Relleno o borde claros y un ícono atenuado. | Captura; tokens no verificados en Figma |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| LG | 48 px; ícono de 24 px. | Predeterminado |
| MD | 32 px; ícono de 16 px. | — |
| SM | 24 px; ícono de 16 px. | — |

### Corner

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Square | Radio de 4 px (`semantic/sm`). | Predeterminado |
| Rounded | Circular (`semantic/full`). | — |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Ver Type y Color. | Variantes de estado |
| Hover | Apariencia al pasar el cursor. | Relleno más oscuro (Filled de marca) o fondo hovered (Inverse, Outline). | Variantes de estado |
| Pressed | Apariencia al presionar. | Relleno aún más oscuro (Filled de marca) o fondo pressed (Outline). | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus`. | Variantes de estado |
| Disable | Apariencia no disponible. | Relleno, borde e ícono atenuados. | Variantes de estado (`Color=Default`) |

Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/evergreen/bold`, `/hovered`, `/pressed` | Relleno de Filled Evergreen según el estado | Vinculación de variable |
| Fondo | `background/canvas` | Relleno de Filled Inverse | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Relleno de Hover y Pressed en Inverse y Outline | Vinculación de variable |
| Borde | `border/default`, `border/evergreen`, `border/indigo` | Borde de Outline | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Borde de Focused | Vinculación de variable |
| Ícono | `icon/inverse` | Ícono de Filled de marca | Vinculación de variable |
| Ícono | `icon/primary` | Ícono de Filled Inverse y Outline Default | Vinculación de variable |
| Ícono | `icon/indigo` | Ícono de Outline Indigo | Vinculación de variable |
| Radio | `semantic/sm`, `semantic/full` | Esquinas Square y Rounded | Vinculación de variable |
| Espaciado | `space/4` | Relleno de SM | Vinculación de variable |

No verificado en Figma (se alcanzó el límite de inspección): los tokens de Filled Indigo, el ícono de Outline Evergreen, el estado `Disable` y el estado Focused en las variantes Outline. Su apariencia se describe solo a partir de la captura de las variantes. Los rellenos de LG y MD (12 px y 8 px) son valores fijos en las variantes inspeccionadas.

## Interacción

Estados observados: Default, Hover, Pressed y Focused para todos los Type y Color; Disable para `Color=Default`. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: la acción que se desencadena y la activación con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- El botón no tiene etiqueta visible; el ícono es la única señal.
- `Focused` muestra un borde de 2 px `border/focus`.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles o tooltips para los botones solo con ícono, semántica de deshabilitado y soporte de teclado.

## Pautas de contenido

Pauta verificada (descripción en Figma): Use íconos que sean claros sin etiqueta, como enviar, papelera, guardar, editar y cerrar.

## Ejemplos

### Acción de barra de herramientas

Configuración: `Type=Outline`, `Color=Default`, `State=Default`, `Size=MD`, `Corner=Square`

Descripción: Botón de ícono neutro delineado para una barra de herramientas.

Evidencia / Clasificación: Variante existente; uso en barras de herramientas documentado en Figma.

### Acción principal con ícono

Configuración: `Type=Filled`, `Color=Evergreen`, `State=Default`, `Size=LG`, `Corner=Square`

Descripción: Botón Evergreen sólido con el ícono `send`.

Evidencia / Clasificación: Variante predeterminada en Figma.

### Acción compacta redonda

Configuración: `Type=Outline`, `Color=Indigo`, `State=Hover`, `Size=SM`, `Corner=Rounded`

Descripción: Botón Outline Indigo pequeño y circular en su estado de hover.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `State=Disable` con `Color=Evergreen`, `Indigo` o `Inverse` | No existe esa variante | Inventario de variantes |
| `Type=Outline` con `Color=Inverse` | No existe esa variante | Inventario de variantes |
| `Type=Filled` con `Color=Default` en estados distintos de `Disable` | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | `required` | Ícono visible dentro del control. |
| `label` | `string` | `required` | Etiqueta accesible usada como `aria-label`. |
| `variant` | `"filled" \| "outline"` | `"filled"` | Controla el estilo del contenedor. |
| `tone` | `"default" \| "evergreen" \| "indigo" \| "inverse" \| "neutral"` | `"evergreen"` | Aplica un tono de color compatible con el paquete React actual. |
| `size` | `"sm" \| "md" \| "lg"` | `"lg"` | Controla el marco del botón y la escala prevista del ícono. |
| `corner` | `"square" \| "rounded"` | `"square"` | Configura la propiedad `corner` del componente. |

También acepta los atributos nativos de React para el elemento HTML subyacente (ButtonHTMLAttributes).
### Ejemplos

#### Filled icon action

```tsx
import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Search"
  icon={<SearchIcon />}
/>;
```

#### Outline contextual action

```tsx
import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Go forward"
  icon={<ArrowIcon />}
  variant="outline"
  tone="neutral"
/>;
```

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
