---
component: "Tooltip"
system: "Genome Evolution Design System"
type: "Superposición / información complementaria"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2192-478"
last_updated: "2026-10-23"
tags:
  - "tooltip"
  - "overlay"
  - "help-text"
---

# Tooltip

Sistema: Genome Evolution Design System

## Resumen del componente

Contenedor pequeño con título, imagen opcional y descripción, disponible en un tratamiento de color claro (`White`) y uno oscuro (`Black`).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Tooltip es un recuadro compacto de información que muestra contenido complementario breve: un título, una imagen opcional y una descripción corta. El nombre del componente, su tamaño reducido (104 × 50 px con el contenido por defecto) y los estilos de texto pequeños (título de 12 px, descripción de 10 px) indican una ayuda breve y contextual. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | White, Black | White (según Figma MCP) |
| Mostrar título (booleana) | true, false | true (según Figma MCP) |
| Título (texto) | Texto libre | "Tooltip text" (según Figma MCP) |
| Mostrar imagen (booleana) | true, false | false (según Figma MCP) |
| Mostrar descripción (booleana) | true, false | true (según Figma MCP) |
| Descripción (texto) | Texto libre | "Tooltip description" (según Figma MCP) |

Los nombres de las propiedades booleanas y de texto se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

Figma MCP reporta `Color=White` con el título y la descripción visibles y la imagen oculta. El título dice "Tooltip text" y la descripción "Tooltip description". Esto coincide con la primera variante del conjunto (`Color=White`, nodo `2192:479`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- Dos tratamientos de color: `White` (superficie clara, texto oscuro) y `Black` (superficie oscura, texto claro).
- El título, la imagen y la descripción se pueden mostrar u ocultar por separado. La imagen está oculta por defecto.
- El área de contenido mide 88 px de ancho y el texto se ajusta dentro de ella.

Interpretación basada en evidencia: Usa Tooltip para mostrar un título breve y una explicación corta junto al elemento que describe. Activa la imagen solo cuando un elemento visual pequeño ayude a explicar el contenido.

Recomendación: Usa un mismo tratamiento de color de forma consistente dentro de una misma área del producto. Figma no documenta cuándo elegir `White` o `Black` (ver Aclaraciones pendientes).

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Tooltip ofrece información breve y complementaria sobre un elemento sin ocupar espacio permanente en el diseño.

### Resultado esperado

Interpretación basada en evidencia: El usuario obtiene una explicación breve (título y descripción, opcionalmente con imagen) sin perder su lugar en la interfaz.

### Contexto típico

Interpretación basada en evidencia: Junto a iconos, controles o datos que necesitan una explicación corta. Figma no define el disparador, la posición ni los tiempos (ver Interacción).

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para dar una etiqueta o explicación corta de un elemento.
- Cuando la explicación cabe en un título y una o dos líneas breves de descripción.
- Con `Mostrar imagen` activado cuando una vista previa o ilustración pequeña ayude a explicar el contenido.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Como el área de contenido mide 88 px de ancho y usa texto de 10–12 px, evita contenido extenso o esencial que el usuario deba leer para completar una tarea.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Recuadro redondeado con borde de 1 px y un fondo que depende de `Color`. |
| Marco de contenido | Requerida | Pila vertical de 88 px de ancho que contiene el título, la imagen y la descripción. |
| Título | Opcional | Capa de texto `Tooltip text`, estilo `Text/Body/XS Strong`. Se controla con la propiedad booleana de mostrar título. |
| Imagen | Opcional | Capa llamada `image`, de 46 px de alto con esquinas redondeadas de 4 px. Oculta por defecto; se controla con la propiedad booleana de mostrar imagen. |
| Descripción | Opcional | Capa de texto `Tooltip description`, estilo `Text/Body/XXS`. Se controla con la propiedad booleana de mostrar descripción. |

El componente no incluye flecha ni puntero.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Vertical, centrada | Auto layout de Figma |
| Relleno | 8 px (`space/8`) | Vinculación de variable |
| Radio de esquina | 4 px (`semantic/sm`) | Vinculación de variable |
| Borde | 1 px, `border/default` | Vinculación de variable |
| Ancho del contenido | 88 px (fijo) | Dimensiones de capa y auto layout |
| Espacio entre título, imagen y descripción | 4 px (sin vinculación a variable) | Auto layout |
| Tamaño del contenedor con título y descripción | 104 × 50 px | Dimensiones de variante |
| Altura de la imagen | 46 px | Dimensiones de capa |
| Ancho de la imagen | No verificado en Figma: el auto layout la ajusta al ancho del contenido (88 px), pero la capa oculta guarda un ancho de 149 px | Datos de capa en conflicto |

## Semántica

Interpretación basada en evidencia: Tooltip contiene información complementaria y no interactiva. El título es el mensaje principal y la descripción agrega detalle. `Color` solo cambia el tratamiento visual; Figma no documenta una diferencia semántica entre `White` y `Black`.

Elemento HTML, rol ARIA (por ejemplo tooltip), relación con el elemento que lo activa y anuncios de lector de pantalla: No verificado en Figma.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 2 variantes.

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| White | Fondo `background/canvas`, texto `text/primary`, borde `border/default`. | Vinculaciones de variables |
| Black | Fondo `surface/raised` (#3b443d), texto `text/inverse`, borde `border/default`. | Vinculaciones de variables |

### Mostrar título

Propiedad booleana que muestra u oculta el título. Valor por defecto reportado: `true`.

### Título

Propiedad de texto para el título. Valor por defecto reportado: "Tooltip text".

### Mostrar imagen

Propiedad booleana que muestra u oculta la imagen. Valor por defecto reportado: `false`.

### Mostrar descripción

Propiedad booleana que muestra u oculta la descripción. Valor por defecto reportado: `true`.

### Descripción

Propiedad de texto para la descripción. Valor por defecto reportado: "Tooltip description".

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Fondo del contenedor, `White` | `Color=White` |
| Superficie | `surface/raised` | Fondo del contenedor, `Black` | `Color=Black` |
| Borde | `border/default` | Borde del contenedor, ambos colores | Ambas variantes |
| Texto | `text/primary` | Título y descripción, `White` | `Color=White` |
| Texto | `text/inverse` | Título y descripción, `Black` | `Color=Black` |
| Tipografía | `Text/Body/XS Strong` | Título (`size/12`, `line-height/16`, `weight/semibold`) | Estilo de texto |
| Tipografía | `Text/Body/XXS` | Descripción (`size/10`, `line-height/14`, `weight/regular`) | Estilo de texto |
| Espaciado | `space/8` | Relleno del contenedor | Vinculación de variable |
| Espaciado | `gap/xxs` (4) | Espacio del contenedor | Vinculación de variable |
| Radio | `semantic/sm` (4) | Radio de esquina del contenedor | Vinculación de variable |

El espacio de 4 px dentro del marco de contenido y el radio de 4 px de la imagen no están vinculados a variables. No se aplica ningún token de elevación ni sombra.

## Interacción

El conjunto no tiene estados interactivos, enlaces de prototipo ni etiquetas de interacción.

Interpretación basada en evidencia: El componente representa solo el contenido visible del tooltip.

No verificado en Figma: disparador (hover, foco o clic), retrasos al mostrar y ocultar, posición respecto al disparador, flecha o puntero, comportamiento ante colisiones y forma de cerrarlo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Ambos tratamientos usan tokens de texto emparejados con su superficie: `text/primary` sobre `background/canvas`, y `text/inverse` sobre `surface/raised`.
- El texto es pequeño: título de 12 px y descripción de 10 px.
- La imagen no tiene guía documentada de texto alternativo.

Información de accesibilidad faltante (no verificada en Figma): rol ARIA y relación con el disparador, acceso por teclado, comportamiento con lector de pantalla, forma de cerrarlo y cumplimiento de contraste.

## Guía de contenido

Observación verificada: El título usa `Text/Body/XS Strong` y la descripción usa `Text/Body/XXS`. Ambos se ajustan dentro del ancho de contenido de 88 px.

Recomendación: Mantén el título en pocas palabras y la descripción en una o dos frases cortas.

## Ejemplos

### Tooltip claro

Configuración: `Color=White`, título y descripción visibles, imagen oculta

Descripción: Tooltip blanco con título y descripción oscuros.

Evidencia / Clasificación: Variante existente en Figma (`2192:479`).

### Tooltip oscuro

Configuración: `Color=Black`, título y descripción visibles, imagen oculta

Descripción: Tooltip oscuro con texto claro.

Evidencia / Clasificación: Variante existente en Figma (`2192:484`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. **Dimensiones de la imagen.** La capa oculta `image` guarda un ancho de 149 px, pero el auto layout la ajusta al área de contenido de 88 px. Confirma el tamaño y la proporción previstos de la imagen cuando `Mostrar imagen` está activado.
2. **Ancho fijo del contenido.** El área de contenido mide 88 px fijos. Confirma si es un ancho fijo o un ancho máximo, ya que determina cómo se ajusta un texto más largo y cómo crece el tooltip.
3. **Posición y puntero.** El componente no tiene flecha o puntero, variantes de posición ni sombra. Confirma si esto se resuelve fuera de este componente o si aún falta definirlo.
4. **White vs. Black.** Figma no documenta cuándo usar cada tratamiento de color. Además, la variante `Black` usa el borde claro `border/default` sobre una superficie oscura. Confirma si ese borde es intencional.
5. **Peso tipográfico del título.** `Text/Body/XS Strong` declara peso 600, pero `weight/semibold` resuelve a "Medium". Confirma qué peso debe implementarse.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2192:478`) el 2026-10-23.
