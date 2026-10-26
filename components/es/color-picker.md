---
component: "Color Picker"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3082-25123"
last_updated: "2026-10-22"
tags:
  - "color-picker"
  - "input"
  - "panel"
---

# Color Picker

Sistema: Genome Evolution Design System

## Resumen del componente

Color Picker es un panel de 264 px para elegir un color, con un modo `Solid` (área de color, controles deslizantes de tono y opacidad, campos de valor) y un modo `Gradient` (barra de degradado con paradas y campos por parada); ambos terminan con una biblioteca de colores guardados.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Color Picker permite definir un color sólido o un degradado de dos paradas y elegir entre colores guardados. Esto se sustenta en el nombre del componente, en los valores de `Type` `Solid` y `Gradient`, en las pestañas "Solid" y "Gradient" en la parte superior del panel, en el área de color y los controles deslizantes de `Solid`, en la barra de degradado y los campos "Stops" de `Gradient`, y en la sección "My colors library" con una acción "Add" en ambos. Figma no incluye una descripción de uso escrita para el conjunto de componentes Color Picker.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | Solid, Gradient | Solid |

El valor predeterminado proviene de la definición de propiedades del componente en Figma. El componente no expone otras propiedades; los valores de los campos y las muestras de color son contenido de ejemplo.

### Configuración predeterminada

`Type=Solid`: un panel de 264 × 396 px con la pestaña "Solid" seleccionada, un área de color, controles deslizantes de tono y opacidad, una fila de campos de valor (formato "Hex", "#4F46E5", "100%") y la sección "My colors library".

### Uso típico

Observación verificada: El conjunto de componentes tiene dos variantes, una por cada `Type`. La fila de pestañas indica qué modo está activo: la pestaña seleccionada tiene un borde inferior de 2 px `border/selected`.

Interpretación basada en evidencia:

- Use `Type=Solid` para elegir un único color, ajustando el tono, la posición en el área de color y la opacidad, o escribiendo un valor.
- Use `Type=Gradient` para definir un degradado mediante sus paradas (posición, color y opacidad por parada).
- Las pestañas "Solid" y "Gradient" corresponden a los dos valores de `Type`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece a los usuarios un único panel para crear colores sólidos y degradados y reutilizar colores guardados.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden definir un color o un degradado exacto de forma visual o por valor y reutilizar colores de su biblioteca.

### Contexto típico

Interpretación basada en evidencia: El ancho fijo de 264 px, el panel redondeado y la sombra (`Elevation/MD`) indican un panel flotante que se muestra bajo demanda. El disparador y la ubicación no están documentados en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura del componente:

- Cuando los usuarios necesiten elegir o introducir un color sólido (`Type=Solid`).
- Cuando los usuarios necesiten definir un degradado mediante paradas (`Type=Gradient`).
- Cuando los usuarios deban poder elegir de una biblioteca de colores guardados o añadir colores a ella.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- El modo `Gradient` muestra dos paradas; Figma no muestra un control para añadir paradas ni para elegir el tipo o el ángulo del degradado.
- El panel tiene un único tamaño (264 px de ancho).

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Panel | Obligatoria | Contenedor vertical de auto layout con fondo, relleno, radio y sombra. |
| Pestañas de modo (`Color Options`) | Obligatoria | Dos instancias anidadas de Tab, "Solid" y "Gradient" (`Size=SM`); la activa usa `State=Selected`. |
| Área de color (`table`) — Solid | Obligatoria en `Solid` | Área de saturación/brillo de 232 × 152 px con un selector circular de 16 px (`Swatch`) y un cursor de puntero mostrado sobre él. |
| Control de tono — Solid | Obligatoria en `Solid` | Pista arcoíris de 8 px con un control circular. |
| Control de opacidad — Solid | Obligatoria en `Solid` | Pista de 8 px sobre un patrón de cuadrícula con un control circular (capa llamada `Saturation`). |
| Campos de valor (`Fields`) — Solid | Obligatoria en `Solid` | Tres campos `Field Master`: selector de formato de color ("Hex" con un ícono selector de 20 px), valor del color ("#4F46E5") y opacidad ("100%"). |
| Sección de degradado — Gradient | Obligatoria en `Gradient` | Título "Gradient color", una barra de degradado de 41 px sobre un patrón de cuadrícula y dos selectores de parada de 14 × 18 px al inicio y al final. |
| Paradas — Gradient | Obligatoria en `Gradient` | Título "Stops" y una fila por parada: posición ("0%" / "100%"), color ("#EDF7F7" / "#23748F"), opacidad ("100%") y un Icon Button con un ícono `trash`. |
| Encabezado de colores guardados | Obligatoria | Título "My colors library" y una instancia de Clear button con la etiqueta "Add" y un ícono de añadir. |
| Fila de muestras (`Row`) | Obligatoria | Siete muestras circulares de 24 px; la primera aparece seleccionada con un borde de 2 px `icon/inverse` y sombra `Elevation/SM`. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho del panel | 264 px | Dimensiones de las variantes |
| Alto del panel | 396 px (`Solid`), 320 px (`Gradient`) con el contenido de ejemplo | Dimensiones de las variantes |
| Relleno del panel | `space/16` (16) | Vinculación de variable |
| Espacio entre secciones | `gap/lg` (16) | Vinculación de variable |
| Radio del panel | `radius/8` (8) | Vinculación de variable |
| Sombra del panel | `Elevation/MD` | Estilo de efecto |
| Relleno de las pestañas | `space/16` horizontal, `space/4` vertical | Vinculaciones de variables |
| Área de color | 232 × 152 px, `radius/4` | Dimensiones de capa, vinculación de variable |
| Selector del área de color | Círculo de 16 px, borde de 2 px `icon/inverse` | Contexto de diseño |
| Controles deslizantes (Solid) | 8 px de alto, ancho completo, `radius/24` | Dimensiones de capa, vinculación de variable |
| Barra de degradado | 41 px de alto, ancho completo, `radius/2` | Dimensiones de capa, vinculación de variable |
| Espacio dentro de la sección de degradado | 8 px | Contexto de diseño |
| Espacio entre campos | `gap/sm` (8) | Vinculación de variable |
| Relleno de los campos | `space/4` (4), espacio `gap/xxs` (4) | Vinculaciones de variables |
| Borde y radio de los campos | `width/1` `border/default`, `radius/4` | Vinculaciones de variables |
| Sombra de los campos | `Elevation/XS` | Estilo de efecto |
| Botón para quitar parada | Icon Button, relleno `space/4`, radio `semantic/sm`, borde de 1 px `border/default`, ícono de 16 px | Contexto de diseño |
| Muestras | Círculos de 24 px (`radius/24`), espacio `gap/sm` (8) | Dimensiones de capa, vinculaciones de variables |

## Semántica

Interpretación basada en evidencia:

- Las pestañas alternan entre la edición de color sólido y de degradado.
- En `Solid`, el área de color define la saturación y el brillo, el control arcoíris define el tono, y el control con cuadrícula y el campo "100%" definen la opacidad. El primer campo selecciona el formato del valor ("Hex"); el segundo contiene el valor del color.
- En `Gradient`, cada fila de parada define la posición, el color y la opacidad de esa parada, y el botón de ícono la elimina.
- "My colors library" contiene los colores guardados; "Add" añade un color a ella. La muestra resaltada representa el color guardado seleccionado actualmente.

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, de control deslizante o de pestaña), interacción con teclado y anuncios en lectores de pantalla.

## Iconografía

| Ranura | Ícono / descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Selector de formato | Ícono selector de 20 px (flechas arriba/abajo) en el campo "Hex" | Capa, captura |
| Acción de añadir | Ícono de añadir (más) en el Clear button "Add" | Instancia anidada |
| Eliminación de parada | Capa de ícono llamada `trash` en el Icon Button, que se muestra como un glifo de quitar (menos) | Nombre de capa, captura |
| Cursor | Instancia de cursor de puntero mostrada sobre el selector del área de color | Instancia anidada |

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron ambas variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Solid | Pestaña "Solid" seleccionada; área de color, control de tono, control de opacidad y campos de valor; biblioteca de colores guardados. | Predeterminado |
| Gradient | Pestaña "Gradient" seleccionada; barra de degradado con dos selectores de parada y dos filas de paradas; biblioteca de colores guardados. | — |

## Composición

El componente se construye con estos componentes anidados, que mantienen su propia documentación:

| Componente anidado | Uso en Color Picker | Configuración observada |
|--------------------|---------------------|-------------------------|
| Tab | Pestañas de modo | `Color=Default`, `Size=SM`; `State=Selected` en el modo activo, `State=Default` en el otro |
| Field Master | Campos de valor y de paradas | Solo contenido de texto |
| Clear button | Acción "Add" | Etiqueta "Add", ícono inicial intercambiado por un ícono de añadir, ícono final oculto |
| Icon Button | Eliminación de parada | Delineado, ícono de 16 px |
| Cursor | Puntero sobre el área de color | `Type=Pointer 👆` |

## Estados

El conjunto de componentes Color Picker no tiene propiedad de estado. Las apariencias interactivas pertenecen a los componentes anidados (por ejemplo, los estados de Tab y de Clear button).

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Fondos del panel y de los campos | Vinculación de variable |
| Borde | `border/selected` | Borde inferior de la pestaña activa | Vinculación de variable |
| Borde | `border/default` | Bordes de los campos y del Icon Button | Vinculación de variable |
| Borde | `icon/inverse` | Borde del selector del área de color; borde de la muestra seleccionada | Vinculación de variable |
| Ancho de borde | `width/1`, `width/2` | Bordes de los campos; borde de la muestra seleccionada | Vinculación de variable |
| Texto | `text/secondary`, `text/tertiary` | Etiquetas de pestaña activa e inactiva | Vinculación de variable |
| Texto | `text/primary` | Títulos de sección, valores de los campos, "Add" | Vinculación de variable |
| Espaciado | `space/16`, `space/8`, `space/4`, `gap/lg`, `gap/sm`, `gap/xxs` | Rellenos y espacios | Vinculación de variable |
| Radio | `radius/8`, `radius/4`, `radius/24`, `radius/2`, `semantic/sm` | Panel, área de color y campos, controles deslizantes y muestras, barra de degradado, botón de ícono | Vinculación de variable |
| Efecto | `Elevation/MD`, `Elevation/SM`, `Elevation/XS` | Panel, muestra seleccionada, campos | Estilos de efecto |
| Tipografía | `Text/Button/SM` | Etiquetas de las pestañas | Estilo de texto |
| Tipografía | `Text/Body/XS Strong` | Títulos de sección ("My colors library", "Gradient color", "Stops") | Estilo de texto |
| Tipografía | `Text/Body/XS` | Valores de los campos | Estilo de texto |

Comportamiento actual: Los colores de las muestras, el degradado del área de color, las imágenes de las pistas de tono y opacidad y el relleno del selector del área de color son valores de ejemplo fijos y no están vinculados a variables.

## Interacción

El componente no tiene variantes de estado ni interacciones de prototipo. El cursor de puntero sobre el selector del área de color es una ilustración estática.

No verificado en Figma: el comportamiento de arrastre del selector, de los controles deslizantes y de los selectores de parada; cómo se sincronizan los valores entre controles y campos; las opciones del selector de formato; cómo se añaden paradas; qué guarda "Add"; y la interacción con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Cada control visual tiene un campo de texto equivalente (formato, valor, opacidad; y posición, color, opacidad por parada), por lo que los valores se pueden leer e introducir como texto.
- La pestaña del modo activo se marca con un borde inferior de 2 px y un color de etiqueta más oscuro, no solo con el color.
- La muestra seleccionada se marca con un borde y una sombra.
- Las etiquetas y los valores usan texto de 12 px.
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): nombres accesibles para los controles deslizantes, las muestras y el botón para quitar parada, operación con teclado del área de color y de los controles deslizantes, orden de foco y anuncios en lectores de pantalla.

## Pautas de contenido

Observaciones verificadas:

- Etiquetas de pestaña: "Solid", "Gradient".
- Títulos de sección: "Gradient color", "Stops", "My colors library".
- Etiqueta de acción: "Add".
- Valores de ejemplo: formato "Hex"; colores en hexadecimal en mayúsculas con "#" ("#4F46E5", "#EDF7F7", "#23748F"); opacidad y posición como porcentajes ("100%", "0%").

## Ejemplos

### Color sólido

Configuración: `Type=Solid`

Descripción: Elegir un color en el área de color o introducir un valor hexadecimal, y definir la opacidad.

Evidencia / Clasificación: Variante existente en Figma.

### Degradado de dos paradas

Configuración: `Type=Gradient`

Descripción: Degradado de "#EDF7F7" en 0% a "#23748F" en 100%, ambos con 100% de opacidad.

Evidencia / Clasificación: Variante existente en Figma (contenido de ejemplo).

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
