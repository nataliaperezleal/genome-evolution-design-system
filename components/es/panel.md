---
component: "Panel"
system: "Genome Evolution Design System"
type: "Component set"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3147-381"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "panel"
  - "tree"
---

# Panel

Sistema: Genome Evolution Design System

## Resumen del componente

Panel ofrece las filas de un panel lateral: una fila de encabezado con botón de acción, filas de elementos plegables con contador y chevron opcionales, y filas de árbol con cuatro niveles de sangría en dos tamaños.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un conjunto de filas de 240px de ancho que se usan para construir un panel, como una barra lateral de navegación o de exploración. El component set (nodo de Figma `3147:381`) contiene tres tipos de fila: `Header` (título del panel con botón de acción), `Item` (una fila de primer nivel con chevron y una subfila de segundo nivel) y `Tree` (filas jerárquicas con sangría según `Level`). En Figma no hay una descripción escrita definida para Panel.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Item, Header, Tree | Item |
| Level | L1, L2, L3, L4 | L1 |
| Size | MD, SM | MD |
| text | Texto | "Panel item" |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `bizagi-lines` |
| showArrow | true, false | true |
| chevron | Instance swap | `chevron-down` |
| arrow | Instance swap | `arrow-fordward` |
| showNumber | true, false | false |
| number | Texto | "00" |
| showAction | true, false | true |

No existen todas las combinaciones de `Type`, `Level` y `Size`; ver Variantes.

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Type=Item`, `Level=L1`, `Size=MD`, `text="Panel item"`, `showLeftIcon=true`, `showArrow=true`, `showNumber=false`, `number="00"` y `showAction=true`. Esto corresponde a la variante `3147:385`, la variante superior izquierda del component set: un elemento de primer nivel con ícono, texto y chevron.

### Uso típico

Observaciones verificadas:

- Todas las filas miden 240px de ancho.
- `Type=Header` existe solo como `Level=L1, Size=MD`; `Type=Item` existe solo como `Size=MD` con `Level=L1` o `L2`; `Type=Tree` existe para `Level=L1` a `L4` en ambos tamaños.
- Las filas `Tree` aumentan su padding izquierdo 8px por nivel (16, 24, 32, 40px).
- Las filas `Header` e `Item` usan un fondo gris claro (`surface/subtlest`); las filas `Tree` usan un fondo blanco (`background/canvas`).

Interpretación basada en evidencia:

- Usa una fila `Header` en la parte superior de un panel, filas `Item` L1 para secciones plegables, filas `Item` L2 para entradas dentro de una sección y filas `Tree` para jerarquías anidadas (por ejemplo, carpetas y archivos).
- Usa `showNumber` para mostrar la cantidad de entradas de una sección.
- Usa `Tree` `SM` en paneles densos y `Tree` `MD` en paneles estándar.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los paneles laterales necesitan filas consistentes para títulos, secciones, subelementos y jerarquías anidadas, con sangría y espaciado predecibles.

### Resultado esperado

Interpretación basada en evidencia: el usuario identifica el panel por su encabezado, recorre las secciones y sus contadores, expande secciones y navega contenido jerárquico según el nivel de sangría.

### Contexto típico

Interpretación basada en evidencia: barras laterales de navegación, paneles de exploración o de esquema, y paneles de filtros o categorías.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los tipos, los niveles y la estructura:

- Para titular un panel lateral y ofrecer una acción principal del panel (`Type=Header`, `showAction`).
- Para presentar secciones plegables y sus entradas (`Type=Item`, `Level=L1` y `L2`).
- Para presentar una jerarquía de hasta cuatro niveles (`Type=Tree`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Panel. Solo como recomendaciones:

- Evita jerarquías de más de cuatro niveles; `Tree` ofrece de `L1` a `L4`.
- Para listas generales fuera de un panel, considera el componente List.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila de 240px de ancho con fondo y padding. |
| Botón de acción | Opcional (`showAction`); solo `Header` | Icon Button anidado: ícono de 12px sobre un cuadrado `surface/subtle` con padding de 6px y radio de 4px, ubicado antes del título. |
| Ícono inicial | Opcional (`showLeftIcon`, `leftIcon`); `Item` L1 y `Tree` | Por defecto `bizagi-lines`: 16px en `Item` L1, 12px en `Tree`. |
| Flecha de árbol | Opcional (`showArrow`, `arrow`); solo `Tree` | Por defecto `arrow-fordward`, 12px, antes del ícono inicial. |
| Texto | Obligatoria | Etiqueta de la fila. Texto por defecto: "Panel item" (`Header`, `Item`) o "Title" (`Tree`). |
| Número | Opcional (`showNumber`, `number`); solo `Item` | Texto de contador. Texto por defecto: "00". |
| Chevron | Opcional (`showArrow`, `chevron`); solo `Item` L1 | Por defecto `chevron-down`, 12px, en el extremo derecho. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 240px (todas las variantes) | Medición directa |
| Alto | `Header` 64px; `Item` L1 38px; `Item` L2 34px; `Tree` MD 38px; `Tree` SM 34px | Medición directa |
| Padding — `Header` | 24px horizontal, 20px vertical | `space/24`, `space/20` |
| Padding — `Item` L1 | 24px horizontal, 8px vertical | `space/24`, `space/8` |
| Padding — `Item` L2 | 48px izquierda, 24px derecha, 8px vertical | `space/48`, `space/24`, `space/8` |
| Padding — `Tree` | Izquierda 16px (L1), 24px (L2), 32px (L3), 40px (L4); derecha 16px; vertical 8px | `space/16`, `space/24`, `space/32`, `space/40`, `space/8` |
| Espacio — `Header` | 16px | `gap/lg` |
| Espacio — `Tree` | 8px entre íconos y texto; 4px entre flecha e ícono | `gap/sm`; medición directa |
| Espacio — `Item` | 8px | Medición directa |
| Alineación de `Item` L1 | Ícono y texto a la izquierda; número y chevron a la derecha | Auto layout de Figma (space between) |
| Alineación de `Item` L2 | Número inmediatamente después del texto | Auto layout de Figma |
| Ancho del título de `Header` | 160px fijo | Medición directa |

## Semántica

Interpretación basada en evidencia:

- `Header` representa el título del panel; su botón de acción representa una acción a nivel de panel (el ícono visible es un signo más, lo que sugiere "agregar").
- `Item` L1 representa una sección, y el `chevron-down` sugiere que se puede expandir o contraer. `Item` L2 representa una entrada dentro de una sección.
- `Tree` representa un nodo en una jerarquía; `Level` representa la profundidad de anidamiento, y el ícono `arrow-fordward` sugiere un nodo contraído que se puede expandir.
- `number` representa un contador asociado a un elemento.

No verificado en Figma: roles de navegación o de árbol (por ejemplo, `nav`, `role="tree"`, `role="treeitem"`), `aria-expanded`, `aria-level` y comportamiento con lectores de pantalla.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono inicial (`Item` L1) | `bizagi-lines`, 16px; intercambiable con `leftIcon` | Capas y propiedades de Figma |
| Ícono inicial (`Tree`) | `bizagi-lines`, 12px; intercambiable con `leftIcon` | Capas y propiedades de Figma |
| Flecha de árbol | `arrow-fordward`, 12px; intercambiable con `arrow` | Capas y propiedades de Figma |
| Chevron (`Item` L1) | `chevron-down`, 12px; intercambiable con `chevron` | Capas y propiedades de Figma |
| Acción del encabezado | Ícono de signo más de 12px (la capa se llama `trash`) dentro de un Icon Button anidado | Capas de Figma; ver Aclaraciones pendientes |

`showArrow` controla tanto la flecha de `Tree` como el chevron de `Item` L1.

## Variantes (propiedades)

El inventario de variantes es completo: 11 variantes. Se inspeccionaron todas las variantes. Los nombres de las propiedades booleanas, de texto y de instance swap se listan tal como los expone el MCP de Figma.

| Type | Level | Size | Variante |
|------|-------|------|----------|
| Item | L1 | MD | `3147:385` (por defecto) |
| Item | L2 | MD | `3147:382` |
| Header | L1 | MD | `3147:392` |
| Tree | L1–L4 | SM | `3147:395`, `3147:400`, `3147:405`, `3147:410` |
| Tree | L1–L4 | MD | `3147:415`, `3147:420`, `3147:425`, `3147:430` |

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Item | Fila de sección (L1) o de entrada (L2) sobre fondo `surface/subtlest`. | Valor por defecto; solo `Size=MD` |
| Header | Fila de título del panel con botón de acción, texto semibold de 16px y fondo `surface/subtlest`. | Solo `Level=L1, Size=MD` |
| Tree | Fila jerárquica con flecha, ícono y texto sobre fondo blanco. | `L1`–`L4`, `SM` y `MD` |

### Level

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| L1 | Primer nivel. | Todos los tipos |
| L2 | Segundo nivel: entrada `Item` con sangría de 48px; `Tree` con sangría de 24px. | `Item`, `Tree` |
| L3 | Tercer nivel: `Tree` con sangría de 32px. | Solo `Tree` |
| L4 | Cuarto nivel: `Tree` con sangría de 40px. | Solo `Tree` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| MD | Texto de 14px (alto de línea de 22px) en `Tree` e `Item` L1; filas de 38px. | Valor por defecto |
| SM | Texto de 12px (alto de línea de 18px); filas de 34px. | Solo `Tree` |

### Propiedades de contenido y visibilidad

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| text | Etiqueta de la fila para `Header` e `Item`. | Por defecto: "Panel item"; el texto de `Tree` no está conectado a esta propiedad |
| showLeftIcon / leftIcon | Muestra el ícono inicial y define qué ícono se usa. | Por defecto: `true` / `bizagi-lines` |
| showArrow / arrow / chevron | Muestra la flecha de `Tree` o el chevron de `Item` L1 y define el ícono. | Por defecto: `true` / `arrow-fordward` / `chevron-down` |
| showNumber / number | Muestra el contador en las filas `Item` y define su texto. | Por defecto: `false` / "00" |
| showAction | Muestra el botón de acción en `Header`. | Por defecto: `true` |

## Estados

Panel no tiene variantes de estado (por ejemplo, hover, seleccionado, expandido o contraído). El chevron de `Item` siempre apunta hacia abajo y la flecha de `Tree` siempre apunta a la derecha. Ver Aclaraciones pendientes.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/subtlest` | Fondo (`Header`, `Item`) | Variables de Figma |
| Color — superficie | `background/canvas` | Fondo (`Tree`) | Variables de Figma |
| Color — superficie | `surface/subtle` | Fondo del botón de acción del encabezado | Variables de Figma |
| Color — texto | `text/primary` | Texto de la fila | Variables de Figma |
| Color — ícono | `icon/primary` | Usado por el component set (íconos); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Espaciado | `space/8`, `space/16`, `space/20`, `space/24`, `space/32`, `space/40`, `space/48` | Padding y sangría (ver Layout) | Variables de Figma |
| Espaciado | `gap/sm`, `gap/lg` | Espacio (`Tree`, `Header`) | Variables de Figma |
| Tipografía | `Body/medium/regular` | Texto, 14/22 (`Item` L1, `Tree` MD) | Estilo de texto de Figma |
| Tipografía | `Body/small/regular` | Texto, 12/18 (`Item` L2, `Tree` SM) | Estilo de texto de Figma |
| Tipografía | `Buttom/large/strong` | Texto del encabezado, 16/20 semibold | Estilo de texto de Figma |
| Variables tipográficas | `font/family/products`, `font/size/s`, `font/size/m`, `font/height/s`, `font/spacing/m`, `font/weight/regular` | Valores subyacentes de los estilos de texto | Variables de Figma |

Sin vincular a tokens: el color del número (`#272727`), el alto de línea de 22px de `Body/medium/regular`, el tamaño de 16px del texto del encabezado, el padding de 6px y el radio de 4px del botón de acción, los espacios de 8px de `Item` y el espacio de 4px entre la flecha y el ícono de `Tree`.

Panel usa un sistema tipográfico distinto (estilos `Body/...` y `Buttom/...` y variables `font/...`) al de otros componentes del sistema, que usan estilos `Text/...` y variables `family/body`, `size/...` y `line-height/...`. Ver Aclaraciones pendientes.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Elementos observados: el Icon Button anidado en `Header` y los íconos de chevron y flecha.
- Interpretación basada en evidencia: la acción del encabezado ejecuta una acción a nivel de panel, como agregar un elemento; el chevron de `Item` expande o contrae una sección; y la flecha de `Tree` expande o contrae un nodo. Ninguno de estos comportamientos, ni el hover, la selección o la navegación con teclado, están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El texto de las filas (`text/primary`) tiene 12,0:1 sobre `surface/subtlest` y 12,78:1 sobre blanco.
- En `Tree`, la jerarquía se comunica solo mediante la sangría (8px por nivel).
- El botón de acción del encabezado muestra solo un ícono; no hay una etiqueta visible.
- No hay variantes de estado de hover, foco, seleccionado ni expandido.

Información de accesibilidad faltante: semántica de navegación y de árbol, anuncio de expandido y contraído, anuncio de nivel, navegación con teclado, indicación de foco y nombre accesible para el botón de acción del encabezado.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Panel item" (`Header`, `Item`), "Title" (`Tree`) y "00" (número); todos son textos de ejemplo.
- El texto de `Header` está limitado a un ancho fijo de 160px.

Recomendaciones:

- Mantén las etiquetas de las filas breves para que quepan en la fila de 240px.
- Usa el texto del encabezado para nombrar el contenido del panel.

## Ejemplos

### Encabezado de panel con acción de agregar

Configuración: `Type=Header`, `Level=L1`, `Size=MD`, `showAction=true`

Descripción: un título de panel con un botón de agregar.

Evidencia / clasificación: configuración existente en Figma (variante `3147:392`).

### Sección con contador

Configuración: `Type=Item`, `Level=L1`, `Size=MD`, `showNumber=true`

Descripción: una fila de sección con ícono, etiqueta, contador de entradas y chevron.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas.

### Árbol anidado

Configuración: `Type=Tree`, `Size=MD`, `Level=L1` a `L4`

Descripción: cuatro filas apiladas que muestran una jerarquía de cuatro niveles.

Evidencia / clasificación: configuraciones existentes en Figma (variantes `3147:415` a `3147:430`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: el conjunto de variantes no tiene filas `Header` distintas de `L1, MD`, ni filas `Item` en `SM` o en `L3`/`L4`, por lo que estas combinaciones no se pueden seleccionar en Figma. No está documentado si se excluyen de forma intencional.

## Aclaraciones pendientes

1. Texto de `Tree` no conectado. En todas las variantes `Tree`, el texto es fijo ("Title") y no está conectado a la propiedad `text`. Confirmar si debe usar `text`.
2. Estados faltantes. No hay variantes de hover, seleccionado, expandido ni contraído; el chevron de `Item` siempre apunta hacia abajo y la flecha de `Tree` siempre apunta a la derecha. Confirmar si se necesitan estos estados para el uso en navegación y en árboles.
3. Sistema tipográfico. Panel usa estilos de texto `Body/...` y `Buttom/...` y variables `font/...`, a diferencia de otros componentes que usan estilos `Text/...`. El color del número (`#272727`) y varios valores están fijos. Confirmar si Panel debe migrarse a los tokens actuales de tipografía y color.
4. Acción del encabezado. La capa del ícono del botón de acción se llama `trash` pero muestra un ícono de signo más, y el ícono no se puede cambiar mediante una propiedad. Confirmar el ícono previsto y si debe ser intercambiable.
5. Cobertura de variantes. `Header` existe solo en `L1, MD` e `Item` solo en `MD`, en `L1` y `L2`. Confirmar si se necesitan versiones `SM` de `Header` e `Item`. En `Item` L2, el número aparece inmediatamente después del texto de 12px con tipografía de 14px, mientras que en `Item` L1 está alineado a la derecha; confirmar la ubicación prevista.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `3147:381`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
