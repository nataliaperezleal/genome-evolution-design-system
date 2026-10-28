---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2041-81"
last_updated: "2026-10-22"
tags:
  - "backdrop"
  - "overlay"
  - "layering"
---

# Backdrop

Sistema: Genome Evolution Design System

## Resumen del componente

Backdrop es una superficie de superposición semitransparente y desenfocada, disponible en un color oscuro (`Black`) y uno claro (`White`).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Backdrop es una capa de superposición que se coloca sobre el contenido existente para separarlo visualmente del contenido que se muestra encima. Esto se sustenta en el nombre del componente, en sus rellenos vinculados a las variables `overlay/black` y `overlay/white` (ambas con 60 % de opacidad) y en su desenfoque de fondo de 8 px. El componente no contiene otras capas. Figma no incluye una descripción de uso escrita para este componente.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Color | Black, White | Black |

El valor predeterminado proviene de la definición de propiedades del componente en Figma.

### Configuración predeterminada

`Color=Black`: un relleno `overlay/black` (#4C574E con 60 % de opacidad) con un desenfoque de fondo de 8 px.

### Uso típico

Observación verificada: El conjunto de componentes tiene dos variantes, `Color=Black` y `Color=White`, que solo se diferencian en el relleno. Ambas carecen de contenido, no tienen radio de esquina (`radius/0`) y tienen un desenfoque de fondo de 8 px.

Interpretación basada en evidencia:

- `Color=Black` oscurece el contenido que queda detrás.
- `Color=White` aclara el contenido que queda detrás.
- Como el componente no tiene contenido propio, se usa como capa debajo de otros componentes y no de forma independiente.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Reduce la prominencia visual del contenido subyacente para que el contenido mostrado sobre el backdrop destaque.

### Resultado esperado

Interpretación basada en evidencia: El contenido subyacente sigue siendo parcialmente visible, pero oscurecido o aclarado y desenfocado, y la atención se dirige al contenido colocado encima.

### Contexto típico

Los componentes que usan Backdrop no están documentados en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de la estructura y los tokens del componente:

- Cuando el contenido subyacente deba quedar visualmente en segundo plano detrás del contenido mostrado encima.
- Use `Color=Black` para oscurecer y `Color=White` para aclarar el contenido subyacente.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Superficie de superposición | Obligatoria | Marco rectangular único con el relleno de superposición y el desenfoque de fondo. No tiene capas hijas. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dimensiones del componente | 182 × 131 px | Dimensiones de las variantes (ambas) |
| Radio de esquina | `radius/0` (0) | Vinculación de variable |
| Desenfoque de fondo | 8 px | Contexto de diseño (no vinculado a una variable) |
| Desbordamiento | Recortado | Contexto de diseño |

El componente no usa auto layout. Figma no define restricciones de redimensionamiento; el tamaño de 182 × 131 px es el tamaño del componente tal como está publicado.

## Semántica

Interpretación basada en evidencia: Backdrop es una capa decorativa que separa niveles de contenido. No contiene texto, íconos ni elementos interactivos, por lo que no aporta significado de contenido propio. La diferencia entre `Black` y `White` es visual (oscurecer o aclarar).

No verificado en Figma: elemento HTML, rol ARIA y si el backdrop oculta el contenido subyacente a las tecnologías de asistencia.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron ambas variantes.

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Black | Relleno `overlay/black` (#4C574E, 60 % de opacidad); desenfoque de fondo de 8 px. | Predeterminado |
| White | Relleno `overlay/white` (#F7F8F7, 60 % de opacidad); desenfoque de fondo de 8 px. | — |

## Estados

- Visible (`open=true`).
- Oculto (`open=false`).

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superposición | `overlay/black` | Relleno, `Color=Black` | Vinculación de variable |
| Superposición | `overlay/white` | Relleno, `Color=White` | Vinculación de variable |
| Radio | `radius/0` | Radio de esquina | Vinculación de variable |

El desenfoque de fondo de 8 px es un valor fijo y no está vinculado a una variable.

## Interacción

Backdrop no tiene variantes de estado ni interacciones de prototipo en Figma. Figma no define si interactuar con el backdrop tiene algún efecto (por ejemplo, cerrar el contenido que está encima).

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Ambas superposiciones tienen 60 % de opacidad y un desenfoque de 8 px, por lo que el contenido subyacente sigue siendo parcialmente visible pero queda en segundo plano.
- El backdrop no contiene texto, por lo que no tiene requisitos de contraste de texto propios. El contraste del contenido colocado encima depende de ese contenido y no se ha verificado.

Información de accesibilidad faltante (no verificado en Figma): cómo se gestionan el foco y el acceso de las tecnologías de asistencia al contenido subyacente mientras se muestra el backdrop.

## Ejemplos

### Backdrop oscuro

Configuración: `Color=Black`

Descripción: Oscurece y desenfoca el contenido que queda detrás.

Evidencia / Clasificación: Variante existente en Figma.

### Backdrop claro

Configuración: `Color=White`

Descripción: Aclara y desenfoca el contenido que queda detrás.

Evidencia / Clasificación: Variante existente en Figma.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `open` | `boolean` | `true` | Indica si se muestra el backdrop. |
| `tone` | `"black" \| "white"` | `"black"` | Tono del color de superposición. |

También acepta los atributos nativos de React para el elemento HTML subyacente (HTMLAttributes).
### Ejemplos

#### Backdrop behind modal

```tsx
import { Backdrop } from "@genome-evolution/react";

<Backdrop tone="black" />;
```

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
