---
component: "Dropdown"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3747-6162"
last_updated: "2026-10-22"
tags:
  - "dropdown"
  - "menu"
  - "list"
---

# Dropdown

Sistema: Genome Evolution Design System

## Resumen del componente

Dropdown es un panel de lista de 174 px de ancho que apila diez filas de opción, un pie con un botón Primary y una barra de desplazamiento vertical, disponible con filas estándar de ícono y texto (`Items default`) o con filas de slot vacío para contenido personalizado (`Slots`).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Dropdown es el panel que muestra una lista de opciones cuando se abre un desplegable. Esto se sustenta en el nombre del componente, en su pila vertical de filas `.Dropdown icon + text` o `.Dropdown empty content`, en el indicador Scroll vertical y en la acción del pie. Figma no incluye una descripción de uso escrita para el conjunto de componentes Dropdown; sus componentes hijos sí tienen descripciones en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Content | Items default, Slots | Items default |

El valor predeterminado proviene de la definición de propiedades del componente en Figma. El componente no expone otras propiedades a nivel de Dropdown; el contenido y los estados de las filas y la etiqueta del botón se definen en las instancias anidadas.

### Configuración predeterminada

`Content=Items default`: un panel de 174 × 482 px con diez filas `.Dropdown icon + text` (`Size=LG`, `State=Default`, etiqueta "Item list", íconos `add` y `chevron-right`), un pie con un botón Primary "Button" y un Scroll vertical en la parte superior derecha.

### Uso típico

Observación verificada: El conjunto de componentes tiene dos variantes que solo se diferencian en el componente de fila que usan. Ambas contienen diez filas de 44 px, un pie de 42 px y una instancia de Scroll.

Interpretación basada en evidencia:

- Use `Content=Items default` para opciones formadas por un ícono, una etiqueta y un ícono final.
- Use `Content=Slots` cuando las opciones necesiten contenido personalizado, colocado en el slot de cada fila.
- Defina el estado de cada fila (por ejemplo, `Selected` para la opción elegida) en las instancias de fila anidadas.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un contenedor consistente para una lista de opciones seleccionables con una acción en la parte inferior.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden recorrer una lista de opciones, elegir una y confirmar con la acción del pie.

### Contexto típico

Interpretación basada en evidencia: Se muestra como un panel flotante debajo de un disparador, como un campo o un botón. El disparador y la ubicación no están documentados en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura del componente:

- Para presentar una lista de opciones en un panel (`Items default`).
- Para presentar opciones con contenido personalizado (`Slots`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- Ambas variantes contienen exactamente diez filas y un botón en el pie; no hay propiedades para cambiar el número de filas ni para ocultar el pie.
- Las filas son siempre `Size=LG`; las filas MD y SM no se muestran a nivel de Dropdown.
- El panel tiene un único ancho (174 px).

## Reglas de composición y jerarquía

### Componentes hijos

| Hijo | Uso | Configuración observada |
|------|-----|-------------------------|
| `.Dropdown icon + text` | Filas, `Content=Items default` | `Size=LG`, `State=Default`, etiqueta "Item list", `add` + `chevron-right`; estirado al ancho del panel (174 px en lugar de sus 163 px propios) |
| `.Dropdown empty content` | Filas, `Content=Slots` | `Size=LG`, `State=Default`, `Property=No content`, slot vacío (142 × 20 px con el ancho del panel) |
| Button | Pie | `Type=Primary`, `Color=Evergreen`, `Size=SM`, etiqueta "Button" |
| Scroll | Indicador de desplazamiento | `Orientation=Vertical`, `Size=Small` (4 × 272 px) |

### Orden

De arriba abajo: diez filas y luego el pie. El indicador Scroll se coloca sobre las filas en la parte superior derecha (a 3 px de los bordes superior y derecho) y no forma parte de la pila vertical.

### Filas

- Las filas se apilan sin espacio ni divisores.
- Todas las filas de una variante usan el mismo componente hijo y el mismo tamaño.
- Las filas ocupan el ancho del panel.

### Pie

- El pie es una fila de 42 px con relleno de 16 px horizontal y 8 px vertical; el botón está alineado a la derecha.
- El pie está siempre presente.

### Desbordamiento y desplazamiento

- El componente Scroll está descrito en Figma como puramente visual, sin lógica de desplazamiento. En Dropdown es un indicador de 272 px junto a una lista de filas de 440 px.
- El panel no recorta su contenido en Figma, por lo que las diez filas son visibles.
- Interpretación basada en evidencia: el Scroll indica que la lista puede desplazarse cuando supera la altura disponible. La altura visible máxima y el comportamiento de desplazamiento no están definidos en Figma.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Panel | Obligatoria | Contenedor vertical de auto layout con fondo, borde de 1 px y radio de 8 px. |
| Filas | Obligatoria | Diez instancias de `.Dropdown icon + text` o `.Dropdown empty content`. |
| Pie (`Button`) | Obligatoria | Fila con un Button Primary SM alineado a la derecha. |
| Scroll | Obligatoria | Indicador de barra de desplazamiento vertical superpuesto en la parte superior derecha. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho del panel | 174 px | Dimensiones de las variantes |
| Alto del panel | 482 px (10 filas × 44 px + pie de 42 px) | Dimensiones de las variantes |
| Borde del panel | 1 px `border/default` | Contexto de diseño |
| Radio del panel | `radius/8` (8) | Vinculación de variable |
| Espacio entre filas | 0 | Contexto de diseño |
| Alto de fila | 44 px (`Size=LG`) | Dimensiones de capa |
| Pie | 42 px de alto; relleno de 16 px horizontal y 8 px vertical (valores fijos); botón alineado a la derecha | Contexto de diseño |
| Scroll | 4 × 272 px; a 3 px de los bordes superior y derecho | Posiciones de capa |

## Semántica

Interpretación basada en evidencia: El panel es una lista de opciones. Cada fila es una opción; el botón del pie es una acción relacionada con la lista (por ejemplo, confirmar una elección). El Scroll indica una lista desplazable.

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, listbox o menú), modelo de selección (simple o múltiple) y la acción del pie.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron ambas variantes.

### Content

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Items default | Diez filas `.Dropdown icon + text`. | Predeterminado |
| Slots | Diez filas `.Dropdown empty content` con slots vacíos. | — |

## Estados

El conjunto de componentes Dropdown no tiene propiedad de estado. Los estados de las filas se definen en las instancias de fila anidadas, y los del botón en la instancia de Button.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Panel, filas y pie | Vinculación de variable |
| Borde | `border/default` | Borde del panel | Vinculación de variable |
| Radio | `radius/8` | Esquinas del panel | Vinculación de variable |
| Superficie | `surface/subtlest`, `surface/subtle` | Pista y control del Scroll | Vinculación de variable |

Los tokens de las filas, del botón y del scroll se documentan en `.Dropdown icon + text`, `.Dropdown empty content`, Button y Scroll.

Comportamiento actual:

- El relleno del pie (16 px / 8 px) usa valores fijos en lugar de variables de espaciado.
- Las sobrescrituras de radio de esquina de las filas son inconsistentes: en `Items default`, la primera fila tiene esquinas superiores redondeadas y las filas 4 a 10 tienen esquinas inferiores redondeadas; en `Slots`, todas las filas tienen esquinas superiores redondeadas. En reposo, las filas y el panel comparten el mismo fondo, por lo que no es visible; puede notarse cuando una fila muestra un fondo de estado (por ejemplo, `Hovered`).

## Interacción

El componente no tiene variantes de estado. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: apertura y cierre, desplazamiento, selección, navegación con teclado y qué hace el botón del pie.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Los estados de las filas, incluido un borde de foco de 2 px, los aportan los componentes de fila.
- El indicador Scroll es solo visual.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): semántica de listbox o menú, navegación con teclado, gestión del foco entre las filas y el pie, y anuncios de la opción seleccionada.

## Pautas de contenido

Observaciones verificadas: Las filas usan la etiqueta de ejemplo "Item list" (`Items default`) o slots vacíos (`Slots`). El botón del pie usa la etiqueta de ejemplo "Button".

## Ejemplos

### Lista de opciones estándar

Configuración: `Content=Items default`

Descripción: Diez opciones de ícono y texto con un botón Primary en el pie.

Evidencia / Clasificación: Variante existente en Figma (predeterminada).

### Lista de opciones personalizadas

Configuración: `Content=Slots`

Descripción: Diez filas con contenido personalizado colocado en sus slots.

Evidencia / Clasificación: Variante existente en Figma; el contenido de los slots es un ejemplo de uso.

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
