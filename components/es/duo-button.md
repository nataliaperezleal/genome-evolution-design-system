---
component: "Duo button"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2135-676"
last_updated: "2026-10-22"
tags:
  - "button"
  - "button-group"
  - "action"
---

# Duo button

Sistema: Genome Evolution Design System

## Resumen del componente

Duo button es un par de instancias de Button, un botón Secondary seguido de un botón Primary en el mismo color de marca, disponible en dos tamaños y dos colores.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Duo button presenta una acción secundaria y una acción principal una junto a la otra, por ejemplo una acción alternativa o de cancelación junto a la acción principal. Esto se sustenta en su estructura (un Button Secondary a la izquierda y un Button Primary a la derecha, ambos en el mismo `Color`) y en las pautas de Button en Figma, que incluyen "To confirm or cancel processes" (confirmar o cancelar procesos) entre sus usos. Figma no incluye una descripción de uso escrita para el conjunto de componentes Duo button.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Size | Regular, Small | Regular |
| Color | Evergreen, Indigo | Evergreen |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. El componente no expone otras propiedades a nivel de Duo button; las etiquetas ("Button") se definen en las instancias anidadas de Button.

### Configuración predeterminada

`Size=Regular`, `Color=Evergreen`: un par de 166 × 32 px formado por un botón Secondary Evergreen y un botón Primary Evergreen, separados 8 px, ambos con la etiqueta "Button".

### Uso típico

Observación verificada: El conjunto de componentes tiene cuatro variantes (dos tamaños × dos colores). En todas las variantes, el botón izquierdo es un Button Secondary y el derecho un Button Primary, ambos en el `Color` de la variante.

Interpretación basada en evidencia:

- Use Duo button cuando una vista o sección necesite una acción principal y una alternativa de menor énfasis presentadas juntas.
- Use `Size=Regular` en diseños con tamaño MD y `Size=Small` en diseños con tamaño SM.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un par de acciones listo para usar, con espaciado consistente y un orden de énfasis claro.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden identificar la acción principal (Primary, a la derecha) y su alternativa (Secondary, a la izquierda).

### Contexto típico

Los contextos específicos de producto no están documentados en Figma.

## Cuándo usar

- Para presentar una acción principal con una alternativa secundaria, como confirmar y cancelar (interpretación basada en evidencia, respaldada por la pauta de Button "To confirm or cancel processes").

## Cuándo NO usar

Pautas documentadas heredadas del componente hijo Button:

- Figma indica que solo debe haber un botón Primary por vista. Como Duo button contiene un botón Primary, usarlo junto con otro botón Primary en la misma vista contradice esa regla.
- Las pautas de Button en Figma indican no usar botones "to group multiple actions with the same visual hierarchy in a single context" (para agrupar varias acciones con la misma jerarquía visual en un mismo contexto); Duo button agrupa dos acciones de jerarquía distinta.

Limitaciones del componente actual:

- Solo dos acciones; no hay variante con un solo botón ni con más de dos.
- El orden (Secondary y luego Primary) y los tipos son fijos en las variantes.

## Reglas de composición y jerarquía

### Componentes hijos

| Posición | Hijo | Configuración observada |
|----------|------|-------------------------|
| 1 (izquierda) | Button | `Type=Secondary`, `Color` = `Color` del Duo button, `State=Default`, `Corner=Default`; `Size=MD` en Regular, `Size=SM` en Small |
| 2 (derecha) | Button | `Type=Primary`, `Color` = `Color` del Duo button, `State=Default`, `Corner=Default`; `Size=MD` en Regular, `Size=SM` en Small |

### Jerarquía y orden

- La acción de menor énfasis (Secondary) está siempre a la izquierda y la de mayor énfasis (Primary) siempre a la derecha.
- Ambos botones comparten siempre el mismo color de marca.
- Ambos botones comparten el mismo tamaño.

### Correspondencia de tamaños

| Size de Duo button | Size de Button | Alto del botón | Tamaño de Duo button (etiquetas predeterminadas) |
|--------------------|----------------|----------------|--------------------------------------------------|
| Regular | MD | 32 px | 166 × 32 px |
| Small | SM | 24 px | 136 × 24 px |

### Desbordamiento

- El componente usa auto layout horizontal; su ancho crece con las etiquetas de los botones.
- Las etiquetas ocupan una sola línea (heredado de Button).

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Fila horizontal de auto layout, centrada, con `gap/sm` entre los botones. |
| Botón Secondary | Obligatoria | Instancia de Button, delineada en el color de marca. |
| Botón Primary | Obligatoria | Instancia de Button, rellena en el color de marca. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, elementos centrados | Contexto de diseño |
| Espacio | `gap/sm` (8); `Size=Small, Color=Indigo` usa un valor fijo de 8 px no vinculado a la variable | Contexto de diseño |
| Alto | 32 px (Regular), 24 px (Small) | Dimensiones de las variantes |
| Ancho (etiquetas predeterminadas) | 166 px (Regular), 136 px (Small) | Dimensiones de las variantes |
| Relleno de los botones — Regular | 16 px horizontal, `space/8` vertical | Vinculaciones de variables |
| Relleno de los botones — Small | `space/12` horizontal, `space/4` vertical | Vinculaciones de variables |
| Radio de los botones | `semantic/sm` (4) | Vinculación de variable |

## Semántica

Interpretación basada en evidencia: El botón derecho es la acción principal y el izquierdo la alternativa. Figma describe el tipo Primary como el botón para la acción más importante de una pantalla o sección.

No verificado en Figma: estructura HTML (por ejemplo, un grupo de botones), atributos ARIA y orden de foco.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las cuatro variantes.

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Regular | Dos botones MD (32 px de alto); etiquetas `Text/Button/MD`. | Predeterminado |
| Small | Dos botones SM (24 px de alto); etiquetas `Text/Button/SM`. | — |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Evergreen | Secondary: `border/evergreen`, `text/evergreen`, `background/canvas`. Primary: `surface/evergreen/bold`, `text/inverse`. | Predeterminado |
| Indigo | Secondary: `border/indigo`, `text/indigo`, `background/canvas`. Primary: `surface/indigo/bold`, `text/inverse`. | — |

## Estados

El conjunto de componentes Duo button no tiene propiedad de estado; ambos botones anidados usan `State=Default`. Los estados interactivos los define el componente Button.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Espaciado | `gap/sm` | Espacio entre botones | Vinculación de variable |
| Fondo | `background/canvas` | Relleno del botón Secondary | Vinculación de variable |
| Superficie | `surface/evergreen/bold`, `surface/indigo/bold` | Relleno del botón Primary | Vinculación de variable |
| Borde | `border/evergreen`, `border/indigo`, `width/1` | Borde del botón Secondary | Vinculación de variable |
| Texto | `text/evergreen`, `text/indigo` | Etiqueta del Secondary | Vinculación de variable |
| Texto | `text/inverse` | Etiqueta del Primary | Vinculación de variable |
| Espaciado | `size/16`, `space/16`, `space/8`, `space/12`, `space/4` | Relleno de los botones | Vinculación de variable |
| Radio | `semantic/sm` | Esquinas de los botones | Vinculación de variable |
| Tipografía | `Text/Button/MD`, `Text/Button/SM` | Etiquetas según el tamaño | Estilos de texto |

Comportamiento actual:

- El espacio en `Size=Small, Color=Indigo` es un valor fijo de 8 px en lugar de `gap/sm`; el resultado es el mismo.
- En `Size=Regular`, ambos botones anidados miden 32 px de alto; aquí el botón Primary usa un relleno vertical de 8 px.

## Interacción

El componente no tiene variantes de estado ni interacciones de prototipo propias. Los estados de interacción son los de las instancias anidadas de Button.

No verificado en Figma: las acciones que se desencadenan y el orden de teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Las dos acciones se diferencian por el relleno (delineado frente a sólido) y la posición, no solo por el color.
- La apariencia de foco la define Button (`State=Focused`, 2 px `border/focus`).
- Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): semántica de agrupación, orden de foco entre los dos botones y comportamiento con teclado.

## Pautas de contenido

Observación verificada: Ambos botones usan la etiqueta de ejemplo "Button". Las etiquetas se definen en las instancias anidadas de Button y ocupan una sola línea.

## Ejemplos

### Par de confirmación

Configuración: `Size=Regular`, `Color=Evergreen`

Descripción: Botones Secondary y Primary Evergreen: una acción alternativa junto a la acción principal.

Evidencia / Clasificación: Variante existente en Figma (configuración predeterminada).

### Par Indigo compacto

Configuración: `Size=Small`, `Color=Indigo`

Descripción: Botones Secondary y Primary Indigo en tamaño SM.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| Duo button junto con otro botón Primary en la misma vista | Figma indica que solo debe haber un botón Primary por vista | Descripción de Button Primary en Figma |

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
