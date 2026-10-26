---
component: "Scroll"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2146"
last_updated: "2026-10-23"
tags:
  - "scrollbar"
  - "layout"
  - "navigation"
---

# Scroll

Sistema: Genome Evolution Design System

## Resumen del componente

Scroll es una barra de desplazamiento delgada con pista y control (thumb) redondeados, disponible en orientación vertical y horizontal y en dos grosores.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: una barra de desplazamiento visual que indica que hay contenido desplazable y qué parte de él está visible. El component set (nodo de Figma `2191:2146`) consta de una pista clara con forma de píldora y un thumb más oscuro con forma de píldora ("Bar") que ocupa la primera mitad de la pista. En Figma no hay una descripción escrita definida para Scroll.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Orientation | Vertical, Horizontal | Vertical |
| Size | Small, Regular | Small |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Orientation=Vertical` y `Size=Small`. Esto corresponde a la variante `2191:2147`, la variante superior izquierda del component set: una barra de desplazamiento vertical de 4px de ancho y 272px de alto.

### Uso típico

Observaciones verificadas:

- `Size=Small` mide 4px de grosor; `Size=Regular` mide 8px de grosor.
- Las variantes verticales miden 272px de alto; las horizontales, 278px de ancho.
- El thumb siempre ocupa la primera mitad de la pista; su longitud y su posición no se exponen como propiedades.

Interpretación basada en evidencia:

- Ubica una barra vertical en el borde derecho de paneles, listas o tablas desplazables, y una barra horizontal en el borde inferior de contenido con desplazamiento horizontal.
- Usa `Small` en componentes compactos (por ejemplo, menús desplegables o paneles estrechos) y `Regular` en áreas de contenido más grandes.
- En mockups, redimensiona la barra y ajusta el thumb para que coincidan con el contenido desplazable.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan saber que el contenido se extiende más allá del área visible y, aproximadamente, cuánto de él están viendo.

### Resultado esperado

Interpretación basada en evidencia: el usuario reconoce que el área se puede desplazar y ve la posición y el tamaño relativos de la parte visible.

### Contexto típico

Interpretación basada en evidencia: paneles desplazables, menús desplegables, listas, tablas y modales con contenido largo.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de la estructura y las propiedades:

- Para mostrar una barra de desplazamiento consistente y con estilo en contenido desplazable.
- Para indicar desplazamiento vertical (`Orientation=Vertical`) u horizontal (`Orientation=Horizontal`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Scroll. Solo como recomendación: no muestres una barra de desplazamiento en contenido que no se desplaza.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Pista | Obligatoria | Contenedor con forma de píldora y fondo `surface/subtlest`. |
| Thumb | Obligatoria | Barra con forma de píldora `surface/subtle` (capa "Bar") al inicio de la pista, que ocupa la mitad de su longitud. |
| Espaciador | Obligatoria | Segmento que parece transparente (capa "Empty", del mismo color que la pista) que ocupa la otra mitad. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Grosor | 4px (`Small`); 8px (`Regular`); mínimo y máximo fijos | Medición directa |
| Longitud | 272px (vertical); 278px (horizontal) | Medición directa |
| Radio | Completamente redondeado (999px) en pista y thumb | `semantic/full` |
| Padding | 0px | `space/0` |
| Espacio | 0px | `gap/none` |
| Longitud del thumb | La mitad de la pista (thumb y espaciador comparten la longitud por igual) | Auto layout de Figma |
| Desbordamiento | Recortado | Capa de Figma |

## Semántica

Interpretación basada en evidencia:

- La pista representa toda la longitud desplazable; el thumb representa la parte visible y su posición.
- `Orientation` representa la dirección del desplazamiento.

No verificado en Figma: rol de scrollbar, atributos de valor y si este componente reemplaza o da estilo a la barra de desplazamiento nativa del navegador.

## Variantes (propiedades)

El inventario de variantes es completo: 4 variantes (2 `Orientation` × 2 `Size`). Se inspeccionaron todas las variantes.

### Orientation

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Vertical | 272px de alto; thumb arriba. | Valor por defecto; variantes `2191:2147`, `2191:2150` |
| Horizontal | 278px de ancho; thumb a la izquierda. | Variantes `2191:2153`, `2191:2156` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Small | 4px de grosor. | Valor por defecto; variantes `2191:2147`, `2191:2153` |
| Regular | 8px de grosor. | Variantes `2191:2150`, `2191:2156` |

## Estados

Scroll no tiene variantes de estado (por ejemplo, hover, activo o arrastrando).

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables de Figma usadas por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/subtlest` | Pista y espaciador | Variables de Figma |
| Color — superficie | `surface/subtle` | Thumb | Variables de Figma |
| Radio | `semantic/full` | Pista y thumb (completamente redondeados) | Variables de Figma |
| Espaciado | `space/0` | Padding | Variables de Figma |
| Espaciado | `gap/none` | Espacio | Variables de Figma |

Sin vincular a tokens: los grosores de 4px y 8px y las longitudes de 272px y 278px.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Scroll no tiene variantes de estado interactivo.
- Interpretación basada en evidencia: el thumb se mueve a medida que se desplaza el contenido y puede arrastrarse. El tamaño del thumb, el arrastre, la retroalimentación de hover, el ocultamiento automático y el comportamiento de desplazamiento no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El thumb (`surface/subtle`) tiene un contraste de 1,28:1 frente a la pista y de 1,36:1 frente al blanco, por debajo del umbral habitual de 3:1 para elementos de interfaz no textuales.
- La pista (`surface/subtlest`) es casi indistinguible del blanco (1,06:1).
- `Small` mide 4px de grosor, lo que ofrece un objetivo muy pequeño si el thumb debe poder arrastrarse.

Información de accesibilidad faltante: si la barra de desplazamiento es interactiva, el desplazamiento con teclado y el tamaño mínimo del objetivo.

## Pautas de contenido

Scroll no contiene texto. Las pautas de contenido no aplican.

## Ejemplos

### Barra vertical en una lista compacta

Configuración: `Orientation=Vertical`, `Size=Small`

Descripción: una barra de 4px a lo largo del borde derecho de un menú desplegable o un panel estrecho.

Evidencia / clasificación: configuración existente en Figma (variante `2191:2147`).

### Barra horizontal para una tabla ancha

Configuración: `Orientation=Horizontal`, `Size=Regular`

Descripción: una barra de 8px a lo largo del borde inferior de una tabla ancha.

Evidencia / clasificación: configuración existente en Figma (variante `2191:2156`); el contexto de uso es una recomendación.

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. Tamaño y posición del thumb. El thumb siempre ocupa la mitad de la pista y está al inicio; ni su longitud ni su posición se pueden definir mediante propiedades. Confirmar cómo deben representar los diseñadores distintas posiciones de desplazamiento y longitudes de contenido.
2. Bajo contraste. El thumb tiene 1,28:1 frente a la pista y 1,36:1 frente al blanco, y la pista es casi invisible sobre blanco. Confirmar si se necesitan colores más fuertes.
3. Estados y comportamiento faltantes. No hay estados de hover, activo ni arrastrando, y el ocultamiento automático no está definido. Confirmar si se necesitan y si la barra reemplaza la barra de desplazamiento nativa del navegador.
4. Longitud fija. Las variantes vertical y horizontal tienen longitudes fijas (272px y 278px). Confirmar si la barra debe estirarse para ocupar su contenedor desplazable.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2191:2146`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
