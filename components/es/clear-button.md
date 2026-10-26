---
component: "Clear button"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2103-36"
last_updated: "2026-10-22"
tags:
  - "button"
  - "action"
  - "low-emphasis"
---

# Clear button

Sistema: Genome Evolution Design System

## Resumen del componente

Clear button es un botón compacto y sin borde, con etiqueta de color e íconos opcionales al inicio y al final, disponible en colores neutro, de marca (Evergreen, Indigo) y de estado (Information, Success, Danger, Warning), con los estados Default, Hovered, Pressed, Focused y Disabled y dos estilos de esquina.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Clear button es una acción de bajo énfasis. Esto se sustenta en su nombre, en su fondo transparente en reposo (el fondo aparece solo al pasar el cursor y al presionar), en la ausencia de borde salvo en el estado de foco, en su altura compacta de 24 px y en su etiqueta de 12 px. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Color | Default, Evergreen, Indigo | Default |
| Type | Default, Information, Success, Danger, Warning | Default |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| Corner | Default, Rounded | Default |
| label (texto) | Texto libre | Button |
| showLeadingIcon (booleano) | true, false | true |
| leadingIcon (intercambio de instancia) | Cualquier instancia de ícono | arrow-left |
| showTrailingIcon (booleano) | true, false | true |
| trailingIcon (intercambio de instancia) | Cualquier instancia de ícono | arrow-right |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. Ambos íconos son visibles por defecto.

### Configuración predeterminada

`Color=Default`, `Type=Default`, `State=Default`, `Corner=Default`, `label="Button"`, ambos íconos visibles: un botón transparente de 24 px con un ícono `arrow-left`, una etiqueta `text/primary` y un ícono `arrow-right` en `icon/primary`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 58 variantes. Las combinaciones disponibles son:

| Color | Type | Estados |
|-------|------|---------|
| Default | Default | Default, Hovered, Pressed, Focused, Disabled |
| Evergreen | Default | Default, Hovered, Pressed, Focused |
| Indigo | Default | Default, Hovered, Pressed, Focused |
| Indigo | Information, Success, Danger, Warning | Default, Hovered, Pressed, Focused |

Cada combinación anterior existe con `Corner=Default` y `Corner=Rounded`.

Comportamiento actual: Los tipos de estado (`Information`, `Success`, `Danger`, `Warning`) existen solo bajo `Color=Indigo`. Seleccionar un tipo de estado requiere `Color=Indigo`, y el valor de `Color` no afecta su apariencia; los colores de su etiqueta e íconos provienen de los tokens de estado.

Interpretación basada en evidencia:

- Use `Type=Default` con `Color=Default` para una acción neutra de bajo énfasis, o con `Evergreen` o `Indigo` para una con color de marca.
- Use un tipo de estado cuando la acción se relacione con ese estado.
- Los íconos predeterminados `arrow-left` y `arrow-right` se pueden ocultar o intercambiar por otros íconos.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una acción con un peso visual mínimo que puede ubicarse junto al contenido u otros controles sin competir con botones de mayor énfasis.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios reconocen el elemento como una acción por su etiqueta de color, sus íconos y sus estados interactivos, mientras se mantiene visualmente ligero.

### Contexto típico

Los contextos específicos de producto no están documentados en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes disponibles:

- Para acciones de bajo énfasis que no deben tener apariencia rellena ni delineada.
- Para acciones de bajo énfasis con color de marca (`Evergreen`, `Indigo`).
- Para acciones de bajo énfasis asociadas a un estado (`Information`, `Success`, `Danger`, `Warning`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- `Disabled` existe solo para `Color=Default`, `Type=Default`.
- El componente tiene un único tamaño (24 px de alto).

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco horizontal de auto layout; transparente en reposo; lleva el fondo del estado, el borde de foco y el radio de esquina. |
| Ícono inicial | Opcional (`showLeadingIcon`, visible por defecto) | Ícono de 12 px antes de la etiqueta; `arrow-left` por defecto, intercambiable mediante `leadingIcon`. |
| Etiqueta | Obligatoria | Texto definido mediante `label`. |
| Ícono final | Opcional (`showTrailingIcon`, visible por defecto) | Ícono de 12 px después de la etiqueta; `arrow-right` por defecto, intercambiable mediante `trailingIcon`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Alto | 24 px | Dimensiones de las variantes |
| Ancho (etiqueta predeterminada, ambos íconos) | 96 px; se adapta al contenido | Dimensiones de las variantes, auto layout |
| Relleno | `space/8` (8) horizontal, `space/4` (4) vertical | Vinculaciones de variables |
| Espacio | `gap/sm` (8) entre íconos y etiqueta | Vinculación de variable |
| Alineación | Contenido centrado horizontal y verticalmente | Contexto de diseño |
| Radio de esquina — Default | `radius/4` (4) | Vinculación de variable |
| Radio de esquina — Rounded | `semantic/full` (999); `radius/24` (24) en la variante Disabled Rounded | Vinculaciones de variables |
| Tamaño de ícono | 12 × 12 px | Dimensiones de capa |
| Borde de foco | `focus/width` (2 px) `border/focus` | Vinculaciones de variables |
| Tipografía de la etiqueta | `Text/Body/XS Strong`: `family/body` (Open Sans), peso 600, `size/12`, `line-height/16`, `letter-spacing/normal` | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste) | Contexto de diseño |

Con una altura de 24 px, tanto `semantic/full` como `radius/24` producen una forma completamente redondeada (píldora).

## Semántica

Interpretación basada en evidencia:

- El botón representa una acción de bajo énfasis.
- `Evergreen` e `Indigo` aplican colores de marca; `Default` es neutro.
- `Information`, `Success`, `Danger` y `Warning` asocian la acción a un estado, ya que están vinculados a las familias de tokens `info`, `success`, `danger` y `warning`.
- Los íconos de flecha predeterminados son marcadores intercambiables; Figma no les asigna un significado.

No verificado en Figma: elemento HTML, rol ARIA y cómo se exponen los íconos a las tecnologías de asistencia.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Ícono inicial | `arrow-left` por defecto, 12 px; intercambiable mediante `leadingIcon`; visible por defecto | Propiedad de intercambio de instancia |
| Ícono final | `arrow-right` por defecto, 12 px; intercambiable mediante `trailingIcon`; visible por defecto | Propiedad de intercambio de instancia |

El color de los íconos sigue al de la etiqueta: `icon/primary`, `icon/evergreen`, `icon/indigo`, `icon/info`, `icon/success`, `icon/danger`, `icon/warning` o `icon/disabled` en Disabled.

## Variantes (Propiedades)

El inventario siguiente es completo: se listaron las 58 variantes y se inspeccionaron en detalle variantes representativas de cada Color, Type, State y Corner.

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Etiqueta `text/primary`, íconos `icon/primary`. | Solo `Type=Default` |
| Evergreen | Etiqueta `text/evergreen`, íconos `icon/evergreen`. | Solo `Type=Default` |
| Indigo | Con `Type=Default`: etiqueta `text/indigo`, íconos `icon/indigo`. También es el único color bajo el cual existen los tipos de estado. | Todos los tipos |

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Usa el color seleccionado en `Color`. | Default, Evergreen, Indigo |
| Information | Etiqueta `text/info`, íconos `icon/info`. | Solo `Color=Indigo` |
| Success | Etiqueta `text/success`, íconos `icon/success`. | Solo `Color=Indigo` |
| Danger | Etiqueta `text/danger`, íconos `icon/danger`. | Solo `Color=Indigo` |
| Warning | Etiqueta `text/warning`, íconos `icon/warning`. | Solo `Color=Indigo` |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Fondo transparente, sin borde. | Todas las combinaciones |
| Hovered | Fondo `background/interactive/hovered`. | Todas las combinaciones |
| Pressed | Fondo `background/interactive/pressed`. | Todas las combinaciones |
| Focused | Borde de 2 px `border/focus`; fondo transparente. | Todas las combinaciones |
| Disabled | Etiqueta `text/disabled`, íconos `icon/disabled`; fondo transparente. | Solo `Color=Default`, `Type=Default` |

### Corner

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Radio de 4 px (`radius/4`). | Todas las combinaciones |
| Rounded | Forma de píldora (`semantic/full`; `radius/24` en Disabled). | Todas las combinaciones |

### label, leadingIcon, trailingIcon

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| label | Texto del botón; "Button" en todas las variantes. | Propiedad de texto |
| showLeadingIcon / leadingIcon | Muestra un ícono de 12 px antes de la etiqueta (`arrow-left` por defecto). | Booleano (predeterminado `true`) + intercambio de instancia |
| showTrailingIcon / trailingIcon | Muestra un ícono de 12 px después de la etiqueta (`arrow-right` por defecto). | Booleano (predeterminado `true`) + intercambio de instancia |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Transparente; etiqueta e íconos de color. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | `background/interactive/hovered`. | Variantes de estado |
| Pressed | Apariencia al presionar. | `background/interactive/pressed`. | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus`. | Variantes de estado |
| Disabled | Apariencia no disponible. | Etiqueta `text/disabled`, íconos `icon/disabled`. | Variantes de estado (`Color=Default`, `Type=Default`) |

Los fondos de hover y de presión usan los mismos tokens neutros para todos los colores y tipos. Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Texto | `text/primary`, `text/evergreen`, `text/indigo`, `text/info`, `text/success`, `text/danger`, `text/warning`, `text/disabled` | Color de la etiqueta según Color, Type y State | Vinculación de variable |
| Ícono | `icon/primary`, `icon/evergreen`, `icon/indigo`, `icon/info`, `icon/success`, `icon/danger`, `icon/warning`, `icon/disabled` | Color de los íconos según Color, Type y State | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Hovered y Pressed | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Focused | Vinculación de variable |
| Espaciado | `space/8`, `space/4`, `gap/sm` | Relleno y espacio | Vinculación de variable |
| Radio | `radius/4`, `semantic/full`, `radius/24` | Esquina (ver Layout) | Vinculación de variable |
| Tipografía | `Text/Body/XS Strong` | Etiqueta | Estilo de texto |

## Interacción

Estados observados: Default, Hovered, Pressed y Focused existen para todas las combinaciones de Color y Type; Disabled existe para `Color=Default`, `Type=Default`.

No verificado en Figma: la acción que se desencadena, la activación con teclado y las interacciones de prototipo. No se encontraron interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un borde visible de 2 px `border/focus`, que es el único borde que muestra el componente.
- En reposo el botón no tiene fondo ni borde; se identifica por su etiqueta e íconos de color.
- La etiqueta tiene 12 px (`size/12`) con peso 600.
- El estado se comunica mediante el color de la etiqueta y de los íconos; el texto de la etiqueta transmite el significado.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para el uso solo con íconos, semántica de deshabilitado, atributos ARIA y soporte de teclado.

## Pautas de contenido

Observación verificada: Todas las variantes usan la etiqueta "Button". Las etiquetas ocupan una sola línea y el ancho del botón crece con la etiqueta.

## Ejemplos

### Clear button neutro

Configuración: `Color=Default`, `Type=Default`, `State=Default`, `Corner=Default`

Descripción: Botón transparente con íconos de flecha y etiqueta `text/primary`.

Evidencia / Clasificación: Configuración predeterminada en Figma.

### Color de marca, píldora

Configuración: `Color=Evergreen`, `Type=Default`, `State=Default`, `Corner=Rounded`

Descripción: Etiqueta e íconos Evergreen con un área de hover y foco en forma de píldora.

Evidencia / Clasificación: Variante existente en Figma.

### Acción de peligro

Configuración: `Color=Indigo`, `Type=Danger`, `State=Default`, `Corner=Default`

Descripción: Clear button con etiqueta `text/danger` e íconos `icon/danger`.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `Type` distinto de `Default` con `Color=Default` o `Color=Evergreen` | No existe esa variante | Inventario de variantes |
| `State=Disabled` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante | Inventario de variantes |
| `State=Disabled` con cualquier tipo de estado | No existe esa variante | Inventario de variantes |

Estas combinaciones no están disponibles, pero no están documentadas explícitamente como inválidas.

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
