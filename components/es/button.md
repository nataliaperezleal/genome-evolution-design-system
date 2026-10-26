---
component: "Button"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=392-861"
last_updated: "2026-10-22"
tags:
  - "button"
  - "action"
  - "interactive"
---

# Button

Sistema: Genome Evolution Design System

## Resumen del componente

Button desencadena una acción. Está disponible en siete tipos (Primary, Secondary, Tertiary, Danger, Information, Success, Warning), dos colores de marca para Primary y Secondary, dos tamaños, dos estilos de esquina y los estados Default, Hovered, Pressed, Focused y Disabled, con íconos opcionales al inicio y al final.

## Referencia rápida

### Qué es

Especificación verificada: Figma describe el botón Primary como el botón de acción principal, con fondo sólido en el color de la marca, usado para la acción más importante de una pantalla o sección; solo debe haber uno por vista. Figma también indica que `Color=Evergreen` aplica la paleta de verde primario de la marca Genome Plus y es el color de marca por defecto para los botones Primary y Secondary. (Fuente: descripciones de variantes en Figma, escritas en español.)

Interpretación basada en evidencia: Los demás tipos ofrecen menor énfasis (Secondary, delineado en el color de marca; Tertiary, delineado neutro) o un énfasis asociado a un estado (Danger, Information, Success, Warning), según muestran sus rellenos, bordes y las familias de tokens de estado que usan.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Primary, Secondary, Tertiary, Danger, Information, Success, Warning | Primary |
| Color | Evergreen, Indigo, Default | Evergreen |
| State | Default, Hovered, Pressed, Focused, Disabled | Default |
| Corner | Default, Rounded | Default |
| Size | MD, SM | MD |
| label (texto) | Texto libre | Button |
| showLeadingIcon (booleano) | true, false | false |
| leadingIcon (intercambio de instancia) | Cualquier instancia de ícono | check |
| showTrailingIcon (booleano) | true, false | false |
| trailingIcon (intercambio de instancia) | Cualquier instancia de ícono | close |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma; que `Color=Evergreen` sea el color de marca por defecto también se indica en la descripción de Figma.

### Configuración predeterminada

`Type=Primary`, `Color=Evergreen`, `State=Default`, `Corner=Default`, `Size=MD`, `label="Button"`, ambos íconos ocultos: un botón `surface/evergreen/bold` con etiqueta `text/inverse` y radio de esquina de 4 px.

Comportamiento actual: esta variante predeterminada mide 30 px de alto (relleno superior `space/8`, relleno inferior `space/6`), mientras que todas las demás variantes MD miden 32 px (`space/8` arriba y abajo). Ver Aclaraciones pendientes.

### Uso típico

Observación verificada: El conjunto de componentes contiene 152 variantes. Los valores de `Color` disponibles dependen de `Type` y `State`:

| Type | Colores | Estados |
|------|---------|---------|
| Primary | Evergreen, Indigo | Default, Hovered, Pressed, Focused |
| Primary | Default | Disabled |
| Secondary | Evergreen, Indigo | Default, Hovered, Pressed, Focused |
| Secondary | Default | Disabled |
| Tertiary | Default | Default, Hovered, Pressed, Focused |
| Danger, Information, Success, Warning | Default | Default, Hovered, Pressed, Focused |

Cada combinación anterior existe en ambos valores de `Corner` y ambos valores de `Size`.

Pauta verificada (descripción en Figma): Use un único botón Primary por vista, para la acción más importante de la pantalla o sección.

Interpretación basada en evidencia:

- Use Secondary para acciones con menos énfasis que Primary, en el mismo color de marca.
- Use Tertiary para acciones neutras de bajo énfasis.
- Use Danger, Information, Success o Warning cuando la acción se relacione con ese estado.
- Para mostrar un botón Primary o Secondary deshabilitado, configure `Color=Default` junto con `State=Disabled`.

## Propósito / Intención

### Problema que resuelve

Especificación verificada: Primary marca la acción más importante de una pantalla o sección. Interpretación basada en evidencia: El conjunto completo ofrece una jerarquía consistente de énfasis de acciones y acciones asociadas a estados.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden identificar la acción principal y distinguir las acciones secundarias, neutras y relacionadas con un estado.

### Contexto típico

Primary está documentado para la acción más importante de una pantalla o sección. Otros contextos no están documentados en Figma.

## Cuándo usar

- Primary: la acción más importante de una pantalla o sección (verificado, descripción en Figma).
- Secondary: una acción con menos énfasis que Primary (interpretación basada en evidencia).
- Tertiary: una acción neutra de bajo énfasis (interpretación basada en evidencia).
- Danger, Information, Success, Warning: acciones asociadas a esos estados (interpretación basada en evidencia a partir de los tokens de estado).

## Cuándo NO usar

- No use más de un botón Primary por vista (verificado, descripción en Figma).

Limitaciones del componente actual:

- `Disabled` existe solo para Primary y Secondary, con `Color=Default`. Tertiary, Danger, Information, Success y Warning no tienen variante deshabilitada.
- `Indigo` está disponible solo para Primary y Secondary.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Marco horizontal de auto layout que lleva el relleno, el borde y el radio de esquina. |
| Ícono inicial | Opcional (`showLeadingIcon`) | Ícono de 16 px antes de la etiqueta; `check` por defecto, intercambiable mediante `leadingIcon`. |
| Etiqueta | Obligatoria | Texto definido mediante `label`. |
| Ícono final | Opcional (`showTrailingIcon`) | Ícono de 16 px después de la etiqueta; `close` por defecto, intercambiable mediante `trailingIcon`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Alto — MD | 32 px (30 px en la variante predeterminada, ver Configuración predeterminada) | Dimensiones de las variantes |
| Alto — SM | 24 px | Dimensiones de las variantes |
| Relleno — MD | 16 px horizontal, `space/8` (8) vertical | Vinculaciones de variables |
| Relleno — SM | `space/12` (12) horizontal, `space/4` (4) vertical | Vinculaciones de variables |
| Espacio | `gap/sm` (8) entre íconos y etiqueta | Vinculación de variable |
| Alineación | Contenido centrado horizontal y verticalmente | Contexto de diseño |
| Ancho | Se adapta al contenido (79 px MD / 64 px SM con la etiqueta predeterminada) | Dimensiones de las variantes, auto layout |
| Radio de esquina — Default | `semantic/sm` (4) | Vinculación de variable |
| Radio de esquina — Rounded | `semantic/pill` (32) | Vinculación de variable |
| Borde (tipos delineados) | `width/1` (1 px) | Vinculación de variable |
| Borde de foco | `focus/width` (2 px) | Vinculación de variable |
| Tamaño de ícono | 16 × 16 px (ambos tamaños) | Dimensiones de capa |
| Tipografía de la etiqueta — MD | `Text/Button/MD`: `family/body` (Open Sans), peso 600, `size/14`, `line-height/16` | Estilo de texto |
| Tipografía de la etiqueta — SM | `Text/Button/SM`: `family/body`, peso 600, `size/12`, `line-height/16` | Estilo de texto |
| Ajuste de la etiqueta | Una sola línea (sin ajuste) | Contexto de diseño |

## Semántica

Especificación verificada: Primary representa la acción más importante de una pantalla o sección (descripción en Figma).

Interpretación basada en evidencia:

- Type expresa el nivel de énfasis (Primary > Secondary > Tertiary) o el estado asociado a la acción (Danger, Information, Success, Warning, vinculados a las familias de tokens `danger`, `info`, `success` y `warning`).
- `Color` (Evergreen, Indigo) selecciona la paleta de marca y no cambia el significado del botón; Evergreen es el color de marca por defecto (verificado, descripción en Figma).
- `Corner` y `Size` son de presentación.

No verificado en Figma: elemento HTML, rol ARIA y cómo se exponen los íconos inicial o final a las tecnologías de asistencia.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Ícono inicial | `check` por defecto, 16 px; intercambiable mediante `leadingIcon`; oculto salvo con `showLeadingIcon=true` | Propiedad de intercambio de instancia |
| Ícono final | `close` por defecto, 16 px; intercambiable mediante `trailingIcon`; oculto salvo con `showTrailingIcon=true` | Propiedad de intercambio de instancia |

Los rellenos de los íconos no están vinculados a variables en las variantes inspeccionadas.

## Variantes (Propiedades)

El inventario siguiente es completo en cuanto a valores de propiedades; se listaron las 152 variantes y se inspeccionaron en detalle variantes representativas de cada Type, Color, State, Corner y Size.

### Type

| Valor | Relleno / Borde / Etiqueta (State=Default) | Colores disponibles |
|-------|--------------------------------------------|---------------------|
| Primary | Evergreen: `surface/evergreen/bold`, sin borde, `text/inverse`. Indigo: `surface/indigo/bold`, sin borde, `text/inverse`. | Evergreen, Indigo; Default (solo Disabled) |
| Secondary | `background/canvas`, borde de 1 px `border/evergreen` o `border/indigo`, `text/evergreen` o `text/indigo` | Evergreen, Indigo; Default (solo Disabled) |
| Tertiary | `background/canvas`, borde de 1 px `border/strong`, `text/primary` | Default |
| Danger | `surface/danger/subtle`, borde de 1 px `border/danger`, `text/danger` | Default |
| Information | `surface/info/subtle`, borde de 1 px `border/info`, `text/info` | Default |
| Success | `surface/success/subtle`, borde de 1 px `border/success`, `text/success` | Default |
| Warning | `surface/warning/subtle`, borde de 1 px `border/warning`, `text/warning` | Default |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Evergreen | Paleta de verde primario de la marca Genome Plus; color de marca por defecto para Primary y Secondary. | Descripción en Figma; Primary y Secondary |
| Indigo | Paleta de marca índigo (`surface/indigo/bold`, `border/indigo`, `text/indigo`). | Primary y Secondary |
| Default | Color neutro usado por Tertiary, los tipos de estado y las variantes Disabled de Primary y Secondary. | Todos los tipos |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Apariencia en reposo (ver Type). | Todos los tipos |
| Hovered | Primary: `surface/<color>/bold/hovered`. Secondary, Tertiary: `background/interactive/hovered`. Tipos de estado: `surface/<estado>/subtle/hovered`. | Todos los tipos |
| Pressed | Primary: `surface/<color>/bold/pressed`. Secondary, Tertiary: `background/interactive/pressed`. Tipos de estado: `surface/<estado>/subtle/pressed`. | Todos los tipos |
| Focused | Borde de 2 px (`focus/width`) `border/focus`; el relleno se mantiene como en Default; en los tipos delineados reemplaza el borde del tipo. | Todos los tipos |
| Disabled | Primary: `background/disabled`, `text/disabled`, sin borde. Secondary: `background/disabled`, borde de 1 px `border/disabled`, `text/disabled`. | Solo Primary y Secondary con `Color=Default` |

### Corner

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Radio de 4 px (`semantic/sm`). | Todas las combinaciones |
| Rounded | Forma de píldora (`semantic/pill`, 32). | Todas las combinaciones |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | 32 px de alto; `Text/Button/MD`; relleno horizontal de 16 px. | Todas las combinaciones |
| SM | 24 px de alto; `Text/Button/SM`; relleno horizontal de 12 px. | Todas las combinaciones |

### label, leadingIcon, trailingIcon

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| label | Texto del botón; "Button" en todas las variantes. | Propiedad de texto |
| showLeadingIcon / leadingIcon | Muestra un ícono de 16 px antes de la etiqueta (`check` por defecto). | Booleano + intercambio de instancia |
| showTrailingIcon / trailingIcon | Muestra un ícono de 16 px después de la etiqueta (`close` por defecto). | Booleano + intercambio de instancia |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Estado en reposo. | Ver Type. | Variantes de estado |
| Hovered | Apariencia al pasar el cursor. | Relleno bold más oscuro (Primary) o fondo hovered (otros tipos). | Variantes de estado |
| Pressed | Apariencia al presionar. | Relleno bold más oscuro aún (Primary) o fondo pressed (otros tipos). | Variantes de estado |
| Focused | Apariencia de foco. | Borde de 2 px `border/focus`. | Variantes de estado |
| Disabled | Apariencia no disponible. | `background/disabled`, `text/disabled`; `border/disabled` en Secondary. | Variantes de estado (Primary, Secondary) |

Son variantes visuales; las transiciones no están definidas en Figma.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/evergreen/bold`, `/hovered`, `/pressed` | Relleno de Primary Evergreen según el estado | Vinculación de variable |
| Superficie | `surface/indigo/bold`, `/hovered`, `/pressed` | Relleno de Primary Indigo según el estado | Vinculación de variable |
| Superficie | `surface/danger/subtle`, `/hovered`, `/pressed` | Relleno de Danger según el estado | Vinculación de variable |
| Superficie | `surface/info/subtle`, `/hovered`, `/pressed` | Relleno de Information según el estado | Vinculación de variable |
| Superficie | `surface/success/subtle`, `/hovered`, `/pressed` | Relleno de Success según el estado | Vinculación de variable |
| Superficie | `surface/warning/subtle`, `/hovered`, `/pressed` | Relleno de Warning según el estado | Vinculación de variable |
| Fondo | `background/canvas` | Relleno de Secondary y Tertiary | Vinculación de variable |
| Fondo | `background/interactive/hovered`, `background/interactive/pressed` | Relleno hovered y pressed de Secondary y Tertiary | Vinculación de variable |
| Fondo | `background/disabled` | Relleno en Disabled | Vinculación de variable |
| Borde | `border/evergreen`, `border/indigo`, `border/strong`, `border/danger`, `border/info`, `border/success`, `border/warning`, `border/disabled` | Bordes por tipo y en Disabled | Vinculación de variable |
| Borde | `border/focus`, `focus/width` | Borde de foco | Vinculación de variable |
| Ancho de borde | `width/1` | Tipos delineados | Vinculación de variable |
| Texto | `text/inverse`, `text/evergreen`, `text/indigo`, `text/primary`, `text/danger`, `text/info`, `text/success`, `text/warning`, `text/disabled` | Color de la etiqueta según Type, Color y State | Vinculación de variable |
| Espaciado | `space/8`, `space/6`, `space/12`, `space/4`, `space/16`, `size/16`, `gap/sm` | Relleno y espacio | Vinculación de variable |
| Radio | `semantic/sm`, `semantic/pill` | Esquina | Vinculación de variable |
| Tipografía | `Text/Button/MD`, `Text/Button/SM` | Etiqueta según Size | Estilos de texto |

Comportamiento actual: el relleno horizontal de MD está vinculado a `space/16` en la variante predeterminada y a `size/16` (un token de tamaño tipográfico) en las demás variantes MD; ambos se resuelven en 16 px. Los rellenos de los íconos no están vinculados a variables.

## Interacción

Estados observados: Default, Hovered, Pressed y Focused existen para todos los Type; Disabled existe para Primary y Secondary.

No verificado en Figma: la acción que se desencadena, el comportamiento de carga, la activación con teclado y las interacciones de prototipo. No se encontraron interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Focused` muestra un borde visible de 2 px `border/focus` en todos los Type, Color, Corner y Size.
- Los tipos de estado combinan un relleno sutil con borde y etiqueta de color, por lo que el estado no depende solo del color de relleno, aunque es la etiqueta la que transmite el significado.
- SM usa una etiqueta de 12 px (`size/12`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): requisitos de nombre accesible para el uso de íconos, semántica de deshabilitado, atributos ARIA y soporte de teclado.

## Pautas de contenido

Observación verificada: Todas las variantes usan la etiqueta "Button". Las etiquetas ocupan una sola línea y el ancho del botón crece con la etiqueta.

## Ejemplos

### Acción principal

Configuración: `Type=Primary`, `Color=Evergreen`, `Size=MD`, `Corner=Default`, `State=Default`

Descripción: La única acción más importante de una vista.

Evidencia / Clasificación: Variante existente; uso documentado en Figma.

### Acción de apoyo

Configuración: `Type=Secondary`, `Color=Evergreen`, `Size=MD`, `Corner=Default`, `State=Default`

Descripción: Botón delineado en color de marca.

Evidencia / Clasificación: Variante existente en Figma.

### Acción destructiva, píldora

Configuración: `Type=Danger`, `Color=Default`, `Size=SM`, `Corner=Rounded`, `State=Default`

Descripción: Botón Danger compacto en forma de píldora.

Evidencia / Clasificación: Variante existente en Figma.

### Acción principal deshabilitada

Configuración: `Type=Primary`, `Color=Default`, `State=Disabled`, `Size=MD`

Descripción: Botón Primary en su apariencia deshabilitada.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| Más de un botón Primary en una vista | Figma indica que solo debe haber un botón Primary por vista | Descripción en Figma |
| `State=Disabled` con `Color=Evergreen` o `Color=Indigo` | No existe esa variante; Disabled usa `Color=Default` | Inventario de variantes |
| `State=Disabled` con Tertiary, Danger, Information, Success o Warning | No existe esa variante | Inventario de variantes |
| `Color=Evergreen` o `Color=Indigo` con Tertiary, Danger, Information, Success o Warning | No existe esa variante | Inventario de variantes |
| Primary o Secondary con `Color=Default` en estados distintos de Disabled | No existe esa variante | Inventario de variantes |

Solo la primera fila es una regla documentada; las demás son combinaciones no disponibles.

## Aclaraciones pendientes

1. Alto de la variante predeterminada: `Type=Primary, Color=Evergreen, State=Default, Corner=Default, Size=MD` mide 30 px de alto (relleno superior 8, inferior 6), mientras que todas las demás variantes MD, incluidos sus estados Hovered y Focused, miden 32 px. ¿Es 32 px el alto previsto para MD? Esto afecta la implementación y provoca un cambio de alto de 2 px entre Default y los demás estados del botón predeterminado.

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
