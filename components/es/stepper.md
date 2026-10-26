---
component: "Stepper"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2339-4361"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "progress"
  - "wizard"
---

# Stepper

Sistema: Genome Evolution Design System

## Resumen del componente

Stepper es un único paso de un indicador de pasos: una píldora con un número de paso o una marca de verificación y una etiqueta, con líneas de conexión opcionales a ambos lados, disponible en cuatro estados y tres colores.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un paso dentro de un indicador de un proceso de varios pasos. Cada variante del component set (nodo de Figma `2339:4361`) es un paso con forma de píldora con un Badge anidado que muestra el número de paso ("0") o, cuando está completado, una marca de verificación, además de una etiqueta ("Step label"). Las líneas de conexión cortas a la izquierda y a la derecha permiten ubicar los pasos en fila para formar el indicador completo. En Figma no hay una descripción escrita definida para Stepper.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Selected, Checked, Disabled | Default |
| text | Texto | "Step label" |
| backLine | true, false | true |
| nextLine | true, false | true |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Default`, `State=Default`, `text="Step label"`, `backLine=true` y `nextLine=true`. Esto corresponde a la variante `2339:4368`, la variante superior izquierda del component set: una píldora de paso blanca con un badge "0", la etiqueta y líneas de conexión a ambos lados.

### Uso típico

Observaciones verificadas:

- `State=Default` y `State=Disabled` existen solo para `Color=Default`; `Selected` y `Checked` existen para los tres colores.
- `Default` y `Selected` muestran un Badge numerado; `Checked` lo reemplaza por una marca de verificación de 12px; `Disabled` muestra un Badge atenuado.
- `Selected` pone la etiqueta en semibold; `Evergreen` e `Indigo` colorean el borde, el badge y la etiqueta.
- El número de paso es la etiqueta del Badge anidado ("0") y no se expone como propiedad de Stepper.

Interpretación basada en evidencia:

- Ubica los pasos en fila: `Checked` para los pasos completados, `Selected` para el paso actual, `Default` para los próximos pasos y `Disabled` para los pasos no disponibles.
- Desactiva `backLine` en el primer paso y `nextLine` en el último.
- Usa `Evergreen` o `Indigo` en los pasos seleccionados y completados para que coincidan con el tema del producto.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: en los flujos de varios pasos, los usuarios necesitan saber dónde están, qué pasos están completos y qué falta.

### Resultado esperado

Interpretación basada en evidencia: el usuario ve de un vistazo el paso actual, los pasos completados y los pasos restantes.

### Contexto típico

Interpretación basada en evidencia: asistentes paso a paso, flujos de compra, incorporación y formularios de varios pasos.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los estados y la estructura:

- Para mostrar el avance a lo largo de una secuencia de pasos.
- Para mostrar qué paso es el actual (`Selected`), cuál está completado (`Checked`), cuál es el próximo (`Default`) o cuál no está disponible (`Disabled`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Stepper. Solo como recomendaciones:

- Evítalo en procesos de un solo paso.
- Usa Progress bar cuando solo importa el avance general y los pasos individuales no necesitan etiquetas.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Línea anterior | Opcional (`backLine`) | Línea de conexión de 8 × 1px antes del paso (ver Aclaraciones pendientes para `Disabled`). |
| Píldora del paso | Obligatoria | Contenedor con borde completamente redondeado. |
| Badge | Depende del estado | Instancia anidada de Badge (tipo Line) con el número de paso; se muestra en `Default`, `Selected` y `Disabled`. |
| Marca de verificación | Depende del estado | Ícono de verificación de 12px; se muestra en `Checked` en lugar del Badge. |
| Etiqueta | Obligatoria | Nombre del paso. Texto por defecto: "Step label". |
| Línea siguiente | Opcional (`nextLine`) | Línea de conexión de 8 × 1px después del paso. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Alto | 24px | Medición directa |
| Ancho | 105–109px (con el texto por defecto) | Medición directa |
| Padding de la píldora | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Radio de la píldora | Completamente redondeado | `semantic/full` |
| Borde de la píldora | 1px | Medición directa |
| Espacio dentro de la píldora | 4px (`Default`, `Selected`); 8px (`Checked`, `Disabled`) | `gap/xxs`; `gap/sm` |
| Líneas de conexión | 8 × 1px cada una | Medición directa |
| Badge | 14px de alto; padding horizontal de 4px; completamente redondeado | Componente Badge; `space/4`, `semantic/full` |
| Ícono de verificación | 12px | Medición directa |

## Semántica

Interpretación basada en evidencia:

- `Default` representa un paso próximo, `Selected` el paso actual, `Checked` un paso completado y `Disabled` un paso al que no se puede llegar.
- El número del Badge representa la posición del paso en la secuencia.
- `Color` es una elección de tema para los pasos seleccionados y completados; no hay otro significado documentado.

No verificado en Figma: semántica de lista o de navegación, `aria-current="step"`, si los pasos se pueden pulsar y cómo se anuncian los pasos completados.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Marca de verificación | Verificación de 12px; `icon/primary` en el color Default, `icon/evergreen` o `icon/indigo` en los colores con tema | Capas y variables de Figma |

La marca de verificación no se expone como propiedad de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 8 variantes. Se inspeccionaron todas las variantes. Los nombres de las propiedades booleanas y de texto se listan tal como los expone el MCP de Figma.

| Color | Estados disponibles |
|-------|---------------------|
| Default | Default, Selected, Checked, Disabled |
| Evergreen | Selected, Checked |
| Indigo | Selected, Checked |

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Borde y badge grises neutros. | Valor por defecto |
| Evergreen | Borde, badge, etiqueta y verificación verdes. | `border/evergreen`, `text/evergreen`, `surface/evergreen/subtle` |
| Indigo | Borde, badge, etiqueta y verificación morados. | `border/indigo`, `text/indigo`, `surface/indigo/subtle` |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Píldora blanca, badge neutro, etiqueta regular. | Solo `Color=Default`; variante `2339:4368` |
| Selected | Píldora blanca, borde y badge con el tema, etiqueta semibold. | Variantes `2339:4380`, `2339:4374`, `2339:4386` |
| Checked | Píldora tintada con marca de verificación y etiqueta regular. | Variantes `2339:4416`, `2339:4410`, `2339:4422` |
| Disabled | Píldora gris con badge y etiqueta atenuados. | Solo `Color=Default`; variante `2339:4362` |

### text / backLine / nextLine

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| text | Etiqueta del paso. | Por defecto: "Step label" |
| backLine | Muestra la línea de conexión antes del paso. | Por defecto: `true` |
| nextLine | Muestra la línea de conexión después del paso. | Por defecto: `true` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Paso próximo | `background/canvas`, `border/default`, Badge (Line, Default), etiqueta `Text/Body/XS` | Variante `2339:4368` |
| Selected | Paso actual | Borde y Badge con el tema; etiqueta `Text/Body/XS Strong` | Variantes `2339:4380`, `2339:4374`, `2339:4386` |
| Checked | Paso completado | Fondo `surface/subtlest`, `surface/evergreen/subtle` o `surface/indigo/subtle`; marca de verificación | Variantes `2339:4416`, `2339:4410`, `2339:4422` |
| Disabled | Paso no disponible | `background/disabled`, `border/disabled`, `text/disabled` | Variante `2339:4362` |

Estos son variantes de estado visuales. No hay estados de hover, presionado ni foco.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Píldora (`Default`, `Selected`) | Variables de Figma |
| Color — superficie | `surface/subtlest` | Píldora (`Checked`, color Default); fondo del Badge | Variables de Figma |
| Color — superficie | `surface/evergreen/subtle`, `surface/indigo/subtle` | Píldora (`Checked`, con tema) | Variables de Figma |
| Color — superficie | `background/disabled` | Píldora (`Disabled`) | Variables de Figma |
| Color — borde | `border/default`, `border/evergreen`, `border/indigo`, `border/disabled` | Bordes de la píldora y del Badge | Variables de Figma |
| Color — texto | `text/primary`, `text/evergreen`, `text/indigo`, `text/secondary`, `text/disabled` | Etiqueta y número del Badge | Variables de Figma |
| Color — ícono | `icon/secondary` | Líneas de conexión | Variables de Figma |
| Color — ícono | `icon/primary`, `icon/evergreen`, `icon/indigo` | Usados por el component set (marca de verificación); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Espaciado | `space/8`, `space/4`, `space/0`, `gap/xxs`, `gap/sm`, `gap/none` | Padding y espacios | Variables de Figma |
| Radio | `semantic/full` | Píldora y Badge | Variables de Figma |
| Tipografía | `Text/Body/XS` | Etiqueta (`Default`, `Checked`, `Disabled`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XS Strong` | Etiqueta (`Selected`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XXS Strong` | Número del Badge | Estilo de texto de Figma |

Sin vincular a tokens: los bordes de 1px y las líneas de conexión de 8 × 1px. Las líneas de conexión usan una variable de color de ícono (`icon/secondary`).

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Stepper no tiene variantes de estado interactivo.
- Interpretación basada en evidencia: los pasos cambian de estado a medida que el usuario avanza. No está definido en Figma si los pasos completados o próximos se pueden pulsar para navegar.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Los pasos completados se muestran con una marca de verificación, y el paso actual con una etiqueta en negrita y un borde de color, no solo con color.
- Contraste del texto: etiqueta `text/primary` 12,78:1 sobre blanco; `text/evergreen` 5,01:1 sobre su fondo de completado; `text/indigo` 8,78:1 sobre su fondo de completado; número del Badge `text/secondary` 5,12:1.
- El número del Badge mide 10px; la etiqueta, 12px.
- El borde por defecto de la píldora (`border/default`) tiene 1,66:1 sobre blanco; las líneas de conexión (`icon/secondary`), 3,16:1.

Información de accesibilidad faltante: semántica de lista de pasos, anuncio del paso actual, anuncio del estado completado y si los pasos pueden recibir el foco.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Step label" y el número del Badge "0"; ambos son textos de ejemplo.
- Las etiquetas ocupan una sola línea.

Recomendaciones:

- Usa etiquetas breves de una o dos palabras que describan cada paso.
- Numera los pasos desde 1 y mantén la numeración coherente con el orden.

## Ejemplos

### Flujo de tres pasos con el segundo paso actual

Configuración: paso 1 `State=Checked`, `backLine=false`; paso 2 `State=Selected`; paso 3 `State=Default`, `nextLine=false`; todos con `Color=Evergreen` donde esté disponible

Descripción: un indicador de pasos que muestra un paso completado, el paso actual y un paso próximo.

Evidencia / clasificación: recomendación construida a partir de variantes existentes en Figma (`2339:4410`, `2339:4374`, `2339:4368`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: `Evergreen` e `Indigo` no tienen variantes `Default` ni `Disabled`, por lo que estas combinaciones no se pueden seleccionar en Figma. No está documentado si se excluyen de forma intencional.

## Aclaraciones pendientes

1. Toggles de conexión en `Disabled`. En la variante `Disabled`, `nextLine` controla la línea anterior al paso y `backLine` la línea posterior, al revés que en las demás variantes. Confirmar y corregir los vínculos.
2. Número de paso. El número de paso es la etiqueta del Badge anidado ("0") y no se expone como propiedad de Stepper. Confirmar si debe agregarse una propiedad para el número de paso.
3. Componente de grupo y orientación. Stepper es un único paso; no hay un componente para la secuencia completa de pasos, y solo existe un layout horizontal con conectores de 8px. Confirmar si se necesitan un componente de grupo, una orientación vertical o conectores más largos.
4. Pasos próximos con tema. `Evergreen` e `Indigo` no tienen variantes `Default` ni `Disabled`, por lo que un stepper con tema debe mezclar `Color=Default` para los pasos próximos. Confirmar si es intencional.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2339:4361`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
