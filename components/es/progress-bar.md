---
component: "Progress bar"
system: "Genome Evolution Design System"
type: "Component set"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2190-1888"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "progress"
  - "status"
---

# Progress bar

Sistema: Genome Evolution Design System

## Resumen del componente

Progress bar es una barra horizontal delgada que muestra un nivel fijo de avance (10%, 25%, 70% o 100%) con un relleno Evergreen o Indigo.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un indicador visual de cuánto se ha completado una tarea o un proceso. El component set (nodo de Figma `2190:1888`) consta de una pista redondeada de 8px de alto y un relleno de color de 6px cuya longitud depende del valor de `Progress`. En Figma no hay una descripción escrita definida para Progress bar.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Evergreen, Indigo | Evergreen |
| Progress | 10%, 25%, 70%, 100% | 10% |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Evergreen` y `Progress=10%`. Esto corresponde a la variante `2190:1947`, la variante superior izquierda del component set.

### Uso típico

Observaciones verificadas:

- La barra mide 350px de ancho y 8px de alto en todas las variantes.
- El avance solo está disponible en cuatro pasos fijos: 10%, 25%, 70% y 100%.
- La longitud del relleno no coincide con todas las etiquetas: 10% y 100% coinciden, pero 25% se muestra en cerca de 33% y 70% en cerca de 67% de la pista; ver Aclaraciones pendientes.
- `Color` coincide con los temas de color Evergreen e Indigo, que también aparecen como valores de `Color` en los componentes Button y Link.

Interpretación basada en evidencia:

- Usa Progress bar para mostrar el avance de una tarea, una carga o un proceso de varios pasos.
- Usa el valor de `Color` que coincida con el tema del producto o con los componentes cercanos.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan saber cuánto ha avanzado una tarea o un proceso y cuánto falta.

### Resultado esperado

Interpretación basada en evidencia: el usuario ve de un vistazo la proporción completada.

### Contexto típico

Interpretación basada en evidencia: cargas de archivos, formularios de varios pasos, flujos de incorporación y seguimiento de procesos.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de la estructura y las propiedades:

- Para mostrar el nivel de avance de una tarea o un proceso.
- Para mostrar el avance a lo largo de una secuencia de pasos.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Progress bar. Solo como recomendaciones:

- No dependas solo de Progress bar cuando el valor exacto importa; no tiene etiqueta ni texto de porcentaje.
- No lo uses cuando el avance no se puede medir; no hay una variante indeterminada.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Pista | Obligatoria | Contenedor redondeado de 350 × 8px con fondo `background/canvas` (blanco). |
| Relleno | Obligatoria | Barra redondeada de 6px de alto con el color del tema de `Color`, que comienza a la izquierda. |

Internamente, `Progress=10%` y `Progress=25%` se construyen con segmentos de igual ancho (diez y tres segmentos) en los que solo el primero tiene color; `70%` usa un relleno de ancho fijo y `100%` un relleno de ancho completo.

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño de la pista | 350 × 8px | Medición directa |
| Radio de la pista | 8px | `semantic/md` |
| Padding de la pista | Horizontal `space/1` (1px); vertical `space/2` (2px) vinculado; el relleno se muestra a 1px de cada borde | Variables de Figma; medición directa |
| Espacio | 0px | `gap/none` |
| Alto del relleno | 6px | Medición directa |
| Radio del relleno | 8px | `semantic/md` |
| Ancho del relleno — 10% | 34,8px (10% de la pista interior de 348px) | Medición directa |
| Ancho del relleno — 25% | 116px (cerca del 33% de la pista interior) | Medición directa |
| Ancho del relleno — 70% | 232px (cerca del 67% de la pista interior) | Medición directa |
| Ancho del relleno — 100% | 348px | Medición directa |
| Desbordamiento | Recortado | Capa de Figma |

## Semántica

Interpretación basada en evidencia:

- La longitud del relleno representa la proporción completada.
- `Color` es una elección de tema, no un estado; no hay un significado semántico documentado para él (por ejemplo, éxito o error).

No verificado en Figma: rol `progressbar`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, etiqueta accesible y anuncios de lector de pantalla.

## Variantes (propiedades)

El inventario de variantes es completo: 8 variantes (2 `Color` × 4 `Progress`). Se inspeccionaron todas las variantes.

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Evergreen | Relleno verde. | Valor por defecto; `icon/evergreen` (#297a39) |
| Indigo | Relleno morado. | `icon/indigo` (#6b1b99) |

### Progress

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| 10% | El relleno cubre el 10% de la pista. | Valor por defecto; variantes `2190:1947`, `2190:1910` |
| 25% | El relleno cubre cerca del 33% de la pista. | Variantes `2190:1931`, `2190:1893`; ver Aclaraciones pendientes |
| 70% | El relleno cubre cerca del 67% de la pista. | Variantes `2190:1980`, `2190:1925`; ver Aclaraciones pendientes |
| 100% | El relleno cubre toda la pista. | Variantes `2190:1986`, `2190:1929` |

## Estados

Progress bar no tiene variantes de estado. No hay variantes indeterminada, en pausa, de error ni de éxito.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables de Figma usadas por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Fondo de la pista | Variables de Figma |
| Color — relleno | `icon/evergreen` | Relleno (`Color=Evergreen`) | Variables de Figma |
| Color — relleno | `icon/indigo` | Relleno (`Color=Indigo`) | Variables de Figma |
| Radio | `semantic/md` | Radio de la pista y del relleno (8px) | Variables de Figma |
| Espaciado | `space/1`, `space/2` | Padding de la pista | Variables de Figma |
| Espaciado | `gap/none` | Espacio entre segmentos | Variables de Figma |

El relleno usa variables de color `icon/...` en lugar de variables de superficie o de relleno. Sin vincular a tokens: el ancho de 350px, los altos de 8px y 6px, y el radio de 8px de los segmentos vacíos internos.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Progress bar no tiene elementos interactivos ni variantes de estado.
- Interpretación basada en evidencia: la longitud del relleno se actualiza a medida que cambia el avance. La animación y el comportamiento de actualización no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Contraste del relleno frente a la pista blanca: `icon/evergreen` 5,33:1; `icon/indigo` 9,37:1.
- La pista es blanca y no tiene borde, por lo que sobre una superficie blanca solo se ve el relleno y no se muestra la longitud total de la barra.
- No hay etiqueta visible ni texto de porcentaje, por lo que el valor se comunica solo mediante la longitud.

Información de accesibilidad faltante: semántica de progressbar, atributos de valor, etiqueta accesible y cómo se anuncian las actualizaciones de avance.

## Pautas de contenido

Progress bar no contiene texto. Recomendación: acompáñalo con una etiqueta visible o un texto de porcentaje cuando importen el valor exacto o el nombre de la tarea.

## Ejemplos

### Carga en curso

Configuración: `Color=Evergreen`, `Progress=70%`

Descripción: una barra que muestra que la mayor parte de una tarea está completa.

Evidencia / clasificación: configuración existente en Figma (variante `2190:1980`).

### Proceso completado (tema Indigo)

Configuración: `Color=Indigo`, `Progress=100%`

Descripción: una barra completamente llena con el tema Indigo.

Evidencia / clasificación: configuración existente en Figma (variante `2190:1929`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. La longitud del relleno no coincide con el valor. `Progress=25%` se muestra en cerca del 33% (116px) y `Progress=70%` en cerca del 67% (232px) de la pista interior de 348px. Confirmar las longitudes previstas (87px y cerca de 244px).
2. Pasos de avance fijos. Solo están disponibles 10%, 25%, 70% y 100%, y no hay forma de definir otro valor ni un estado de 0% (vacío). Confirmar si se necesitan valores arbitrarios, más pasos o un estado vacío, y si debería haber una variante indeterminada.
3. Visibilidad de la pista. La pista es blanca (`background/canvas`) y no tiene borde, por lo que la parte sin rellenar es invisible sobre superficies blancas. Confirmar el color previsto de la pista.
4. Tokens del relleno. El relleno usa `icon/evergreen` e `icon/indigo`, que son variables de color de íconos. Confirmar si deben usarse tokens específicos de relleno o de superficie.
5. Etiqueta y ancho. La barra tiene un ancho fijo de 350px y no tiene etiqueta ni texto de porcentaje. Confirmar si debe ajustarse al ancho de su contenedor y si se necesita una opción de etiqueta.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2190:1888`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
