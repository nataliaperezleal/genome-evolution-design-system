---
component: "List"
system: "Genome Evolution Design System"
type: "Component set"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2403"
last_updated: "2026-10-23"
tags:
  - "list"
  - "list-item"
  - "data-display"
---

# List

Sistema: Genome Evolution Design System

## Resumen del componente

List es una fila de lista con una etiqueta de texto y espacios opcionales al inicio y al final para una casilla de verificación, un switch y un ícono; está disponible como elemento normal o como fila de encabezado, en dos tamaños y cinco estados visuales.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: aunque se llama "List", cada variante del component set (nodo de Figma `2184:2403`) es una sola fila: un contenedor tintado con padding y una etiqueta de texto. Las filas se combinan para construir listas. `Type=Header` agrega un divisor inferior y texto en negrita, lo que sugiere una fila de encabezado para un grupo de elementos. En Figma no hay una descripción escrita definida para List.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | List, Header | List |
| Size | MD, SM | MD |
| State | Default, Hover, Pressed, Selected, Focused | Default |
| text | Texto | "List item" |
| leftSide | true, false | false |
| showLeftCheckBox | true, false | true |
| showLeftSwitch | true, false | true |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `bizagi-lines` |
| rightSide | true, false | false |
| showRightCheckBox | true, false | true |
| showRightSwitch | true, false | true |
| showRightIcon | true, false | true |
| rightIcon | Instance swap | `bizagi-lines` |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Type=List`, `Size=MD`, `State=Default`, `text="List item"`, y `leftSide=false` y `rightSide=false`, por lo que una instancia nueva muestra solo el texto. Esto corresponde a la variante `2184:2404`, la variante superior izquierda del component set.

Dentro de cada lado, los toggles de casilla, switch e ícono tienen `true` por defecto. Por eso, al activar `leftSide` o `rightSide` aparecen los tres a la vez; desactiva los que no necesites.

### Uso típico

Observaciones verificadas:

- Las filas `Size=MD` miden 36px de alto con texto de 14px; las filas `Size=SM` miden 24px de alto con texto de 12px.
- Las filas `Type=Header` agregan un borde inferior de 1px y usan texto en negrita en todos los estados.
- `State=Selected` cambia el fondo a `background/selected` y pone el texto en negrita.
- La casilla y el switch de los espacios laterales son instancias anidadas de los componentes Checkbox y Switch, cada una con su propio texto "Label".

Interpretación basada en evidencia:

- Apila filas `Type=List` para construir una lista y usa una fila `Type=Header` para titular un grupo de filas.
- Usa la casilla inicial en listas de selección múltiple, el switch en filas que activan o desactivan una configuración, y el ícono para identificar el tipo de elemento.
- Usa `SM` en listas densas como menús desplegables o paneles laterales, y `MD` en listas estándar.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: las interfaces necesitan una fila consistente para presentar elementos en una lista vertical, con espacio para controles de selección, switches e íconos, y con retroalimentación clara para hover, presionado, selección y foco.

### Resultado esperado

Interpretación basada en evidencia: el usuario recorre la lista, identifica los elementos por su texto e íconos, y selecciona, activa o desactiva un elemento con retroalimentación visual clara.

### Contexto típico

Interpretación basada en evidencia: menús, listas de opciones desplegables, listas de configuración, listas de selección y listas agrupadas con filas de encabezado.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de las propiedades, los estados y la estructura:

- Para presentar una lista vertical de elementos, una fila por elemento.
- Para permitir que los usuarios seleccionen uno o varios elementos (`State=Selected`, casilla opcional).
- Para presentar configuraciones que se activan o desactivan por fila (switch opcional).
- Para agrupar elementos bajo un encabezado (`Type=Header`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para List. Solo como recomendaciones:

- Evita mostrar una casilla y un switch en la misma fila; ambos son visibles por defecto al activar un lado.
- Evita textos largos; el texto ocupa una sola línea y no hace salto de línea.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila con fondo `surface/subtlest`, padding y sin radio de esquinas. Las filas de encabezado agregan un borde inferior de 1px. |
| Lado inicial | Opcional (`leftSide`) | Grupo antes del texto que contiene hasta tres elementos. |
| Casilla | Opcional (`showLeftCheckBox`, `showRightCheckBox`) | Instancia anidada de Checkbox: una casilla de 16px (en un frame de 20px), un ícono de 16px y, en la mayoría de las variantes, un texto "Label". |
| Switch | Opcional (`showLeftSwitch`, `showRightSwitch`) | Instancia anidada de Switch: un switch de 29 × 16px y un texto "Label" de 10px. |
| Ícono | Opcional (`showLeftIcon` / `leftIcon`, `showRightIcon` / `rightIcon`) | Ícono de 16px. Por defecto: `bizagi-lines`. |
| Texto | Obligatoria | Etiqueta de la fila en una sola línea. Texto por defecto: "List item". |
| Lado final | Opcional (`rightSide`) | Grupo después del texto, con los mismos tres elementos que el lado inicial. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal: lado inicial, texto, lado final; centrado verticalmente | Auto layout de Figma |
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding — `SM` | 16px horizontal, 4px vertical | `space/16`, `space/4` |
| Alto | 36px (`MD`); 24px (`SM`) | Medición directa |
| Ancho | Se ajusta al contenido (88–91px `MD`, 80–83px `SM` con "List item") | Medición directa |
| Espacio entre las partes de la fila | 8px | `gap/sm` |
| Espacio dentro de cada lado | 8px | Medición directa (no vinculado a un token) |
| Radio de esquinas | Ninguno | Capa de Figma |
| Divisor de encabezado | Borde inferior de 1px | `border/default` |
| Borde de foco | 2px, solo en `Focused` | `focus/width`, `border/focus` |

Los anchos difieren ligeramente entre variantes porque `Selected` y `Header` usan texto en negrita. No hay un ancho fijo ni de relleno definido; ver Aclaraciones pendientes.

## Semántica

Interpretación basada en evidencia:

- `Type=List` representa un elemento de lista; `Type=Header` representa un encabezado que titula un grupo de elementos.
- `State=Selected` representa el elemento actual o elegido.
- La casilla anidada representa la selección del elemento, y el switch anidado representa una configuración de encendido/apagado vinculada al elemento.

No verificado en Figma: estructura HTML (por ejemplo, `ul`/`li`, `role="listbox"`, `role="menu"`), estados ARIA como `aria-selected` y cómo se exponen las filas de encabezado a las tecnologías de asistencia.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono inicial | Por defecto `bizagi-lines`, 16px; intercambiable con `leftIcon` | Capas y propiedades de Figma |
| Ícono final | Por defecto `bizagi-lines`, 16px; intercambiable con `rightIcon` | Capas y propiedades de Figma |
| Ícono de la casilla | Ícono `bizagi-lines` de 16px dentro del Checkbox anidado | Capas de Figma |

## Variantes (propiedades)

El inventario de variantes es completo: 20 variantes (2 `Type` × 2 `Size` × 5 `State`). Los detalles de estilo provienen de la inspección directa de todos los estados de `Type=List, Size=MD` y de variantes representativas de `Header` y `SM`; las variantes restantes se revisaron visualmente. Los nombres de las propiedades booleanas, de texto y de instance swap se listan tal como los expone el MCP de Figma.

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| List | Fila estándar; texto regular (en negrita cuando está `Selected`). | Valor por defecto |
| Header | Fila con borde inferior de 1px y texto en negrita en todos los estados. | `border/default`; `Text/Body/SM Strong` / `Text/Body/XS Strong` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| MD | Fila de 36px; texto de 14px (`Text/Body/SM`, 14/20). | Valor por defecto |
| SM | Fila de 24px; texto de 12px (`Text/Body/XS`, 12/16). | — |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Fila en reposo. | `surface/subtlest` |
| Hover | Fondo ligeramente más oscuro. | `surface/subtlest/hovered` |
| Pressed | Fondo más oscuro. | `surface/subtlest/pressed` |
| Selected | Fondo verde claro y texto en negrita. | `background/selected`; `Text/Body/SM Strong` (MD) |
| Focused | Borde verde de 2px alrededor de la fila. | `focus/width`, `border/focus` |

### Propiedades de los espacios laterales

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| leftSide / rightSide | Muestra u oculta todo el grupo inicial o final. | Por defecto: `false` |
| showLeftCheckBox / showRightCheckBox | Muestra el Checkbox anidado en ese lado. | Por defecto: `true` |
| showLeftSwitch / showRightSwitch | Muestra el Switch anidado en ese lado. | Por defecto: `true` |
| showLeftIcon / showRightIcon | Muestra el ícono en ese lado. | Por defecto: `true` |
| leftIcon / rightIcon | Define qué ícono se muestra. | Por defecto: `bizagi-lines` |

### text

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Texto | Etiqueta de la fila. | Valor por defecto: "List item" |

Los textos "Label" del Checkbox y del Switch anidados no se exponen como propiedades de List.

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | Fondo `surface/subtlest` | Variante `2184:2404` |
| Hover | Puntero sobre la fila | Fondo `surface/subtlest/hovered` | Variante `2267:2820` |
| Pressed | En activación | Fondo `surface/subtlest/pressed` | Variante `2267:2886` |
| Selected | Elemento elegido | Fondo `background/selected`, texto en negrita | Variantes `2267:2952`, `2267:2974` |
| Focused | Con foco | Borde `border/focus` de 2px | Variante `2267:3018` |

Estos son variantes de estado visuales. Las transiciones, el comportamiento de selección (simple o múltiple) y la relación entre `Selected` y la casilla anidada no están definidos en Figma. No hay un estado deshabilitado.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/subtlest` | Fondo (`Default`, `Focused`) | Variables de Figma |
| Color — superficie | `surface/subtlest/hovered` | Fondo (`Hover`) | Variables de Figma |
| Color — superficie | `surface/subtlest/pressed` | Fondo (`Pressed`) | Variables de Figma |
| Color — superficie | `background/selected` | Fondo (`Selected`) | Variables de Figma |
| Color — borde | `border/default` | Borde inferior del encabezado | Variables de Figma |
| Color — borde | `border/focus` | Borde de foco (`Focused`) | Variables de Figma |
| Ancho de borde | `focus/width` | Borde de foco de 2px | Variables de Figma |
| Color — texto | `text/primary` | Texto de la fila | Variables de Figma |
| Espaciado | `space/16` | Padding horizontal | Variables de Figma |
| Espaciado | `space/8`, `space/4` | Padding vertical (`MD`, `SM`) | Variables de Figma |
| Espaciado | `gap/sm` | Espacio entre las partes de la fila | Variables de Figma |
| Tipografía | `Text/Body/SM` | Texto (`List`, `MD`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/SM Strong` | Texto (`Header`, `MD`; `Selected`, `MD`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XS` | Texto (`List`, `SM`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XS Strong` | Texto (`Header`, `SM`) | Estilo de texto de Figma |

Inconsistencias menores de tokens: `Pressed, MD` vincula su padding vertical a `gap/sm` en lugar de `space/8`, y `Header, SM` vincula su espacio a `space/8` en lugar de `gap/sm` (mismos valores). Los estilos de texto en negrita usan `weight/semibold`, que se resuelve al estilo de fuente "Medium".

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hover`, `Pressed`, `Selected` y `Focused` son variantes de estado visuales.
- Interpretación basada en evidencia: las filas responden al hover y al presionado del puntero, pueden seleccionarse y pueden recibir el foco del teclado. El Checkbox y el Switch anidados son componentes interactivos con sus propios estados. No está definido en Figma si se puede hacer clic en toda la fila o solo en el control anidado, ni cómo se alterna la selección.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El texto de la fila (`text/primary`) tiene alto contraste sobre el fondo de todos los estados (10,74:1 o más).
- `Selected` se indica con un tinte de fondo y con texto en negrita, pero el tinte por sí solo es casi indistinguible del fondo por defecto (cerca de 1,0:1); la negrita aporta la mayor parte de la diferencia.
- Los fondos de `Hover` (1,02:1) y `Pressed` (1,12:1) difieren solo ligeramente de `Default`.
- `Focused` ofrece un borde de foco de 2px (`border/focus`, 3,41:1 frente al fondo de la fila).
- El divisor del encabezado (`border/default`) tiene 1,56:1 frente al fondo de la fila.
- La etiqueta del Switch anidado mide 10px.

Información de accesibilidad faltante: roles de lista y de opción, anuncio del estado seleccionado, navegación con teclado entre filas y cómo se etiquetan la casilla y el switch anidados para las tecnologías de asistencia.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "List item" para la fila y "Label" para el Checkbox y el Switch anidados; todos son textos de ejemplo.
- El texto de la fila ocupa una sola línea y no hace salto de línea.

Recomendaciones:

- Mantén el texto de la fila breve y fácil de recorrer.
- Usa un texto de encabezado que nombre el grupo de elementos que está debajo.
- Reemplaza u oculta los textos "Label" anidados para que no dupliquen el texto de la fila.

## Ejemplos

### Elemento de lista simple

Configuración: `Type=List`, `Size=MD`, `State=Default`

Descripción: una fila solo con texto, la configuración por defecto.

Evidencia / clasificación: configuración existente en Figma (variante `2184:2404`).

### Encabezado de grupo

Configuración: `Type=Header`, `Size=MD`, `State=Default`

Descripción: una fila de encabezado en negrita con divisor inferior, sobre un grupo de elementos de lista.

Evidencia / clasificación: configuración existente en Figma (variante `2184:2426`).

### Fila seleccionable con casilla

Configuración: `Type=List`, `Size=MD`, `State=Selected`, `leftSide=true`, `showLeftSwitch=false`, `showLeftIcon=false`

Descripción: una fila seleccionada con casilla inicial en una lista de selección múltiple.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas; esta combinación exacta no se muestra en Figma.

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. Valores por defecto de los espacios laterales. Al activar `leftSide` o `rightSide`, la casilla, el switch y el ícono aparecen a la vez, y el Checkbox anidado muestra su propio ícono. Confirmar si cada lado debe contener un solo control a la vez y si los toggles internos deberían tener `false` por defecto.
2. Etiquetas de los controles anidados. El Checkbox anidado muestra un texto "Label" en algunas variantes (por ejemplo, `List, SM` y `Header`) pero no en `List, MD`, y el Switch anidado siempre lo muestra. Estas etiquetas no se exponen como propiedades de List. Confirmar si las etiquetas anidadas deben ocultarse o exponerse.
3. `Selected` frente a la casilla. `State=Selected` no cambia la casilla anidada, que permanece sin marcar. Confirmar cómo se relaciona la selección de la fila con la casilla en listas de selección múltiple.
4. Comportamiento del ancho. Las filas se ajustan a su contenido, por lo que filas con textos distintos tienen anchos distintos. Confirmar si las filas deben ocupar el ancho de su contenedor de lista.
5. Estado deshabilitado faltante y nombres. No hay estado deshabilitado, y el valor de hover se llama `Hover`, mientras que Input, Link y Button usan `Hovered`. Confirmar si se necesita un estado deshabilitado y si `Hover` debe renombrarse (el cambio de nombre afecta a las instancias existentes).

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2184:2403`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
