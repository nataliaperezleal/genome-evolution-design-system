---
component: "Link"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-571"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "link"
  - "text-action"
---

# Link

Sistema: Genome Evolution Design System

## Resumen del componente

Link es un elemento de texto subrayado disponible en tres temas de color y dos tamaños, con estados visuales para reposo, hover, presionado, visitado, foco y deshabilitado.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un enlace de texto para navegación o acciones ligeras. El component set (nodo de Figma `2185:571`) consta de una sola capa de texto subrayado, con un estado `Visited` (propio de los enlaces que apuntan a destinos) y un contorno de foco de 2px en `Focused`. En Figma no hay una descripción escrita definida para Link.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Indigo, Evergreen | Default |
| State | Default, Hovered, Pressed, Visited, Focused, Disable | Default |
| Size | MD, SM | MD |
| text | Texto | "Link" |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Default`, `State=Default`, `Size=MD` y `text="Link"`. Esto corresponde a la variante `2185:572`, la variante superior izquierda del component set.

### Uso típico

Observaciones verificadas:

- El texto del enlace está subrayado en todas las variantes.
- `Size=MD` usa texto de 14px en un área de 32px de alto; `Size=SM` usa texto de 12px en un área de 24px de alto. El ancho se ajusta al texto.
- `Color=Indigo` y `Color=Evergreen` cambian los colores de `Default`, `Focused` y `Visited` (MD). `Hovered` y `Pressed` usan los mismos colores en los tres temas.
- `State=Disable` existe solo para `Color=Default`.

Interpretación basada en evidencia:

- Usa `Color=Default` para enlaces estándar. Usa `Indigo` o `Evergreen` para coincidir con esos temas de color, que también aparecen como valores de `Color` en el componente Button.
- Usa `SM` en contextos densos (por ejemplo, tablas, texto de ayuda o paneles compactos) y `MD` en contenido estándar.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan una forma reconocible y de bajo énfasis para navegar a otra página, sección o recurso sin el peso visual de un botón.

### Resultado esperado

Interpretación basada en evidencia: el usuario reconoce el texto subrayado como interactivo, lo activa y, cuando ya visitó el destino, puede distinguirlo gracias al color de `Visited`.

### Contexto típico

Interpretación basada en evidencia: dentro de contenido, formularios, texto de ayuda, tablas y acciones de apoyo donde una affordance solo de texto es adecuada.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los estados y la estructura:

- Para navegar a otra página, sección o recurso externo.
- Para acciones secundarias o en línea que no necesitan el énfasis de un botón.
- Cuando es útil distinguir los destinos ya visitados (`State=Visited`).

La descripción en Figma del componente Button recomienda usar un enlace en lugar de un botón para la navegación simple entre páginas.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Link. Solo como recomendaciones:

- No uses Link para acciones principales que necesitan énfasis visual; usa Button.
- No uses Link para texto no interactivo; el subrayado indica interactividad.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Frame con auto layout, padding y radio de 4px. Muestra un borde de foco de 2px en `Focused`; en los demás estados no tiene relleno ni borde. |
| Texto | Obligatoria | Texto subrayado, de una sola línea y centrado. Texto por defecto: "Link". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Alto | 32px (`MD`); 24px (`SM`) | Medición directa |
| Ancho | Se ajusta al texto (61px `MD`, 41px `SM` con "Link") | Medición directa |
| Radio de esquinas | 4px | `radius/4` |
| Espacio | 0px | `gap/none` |
| Borde de foco | 2px, solo en `Focused` | Medición directa (no vinculado a un token de ancho); color `border/focus` |
| Salto de línea | Ninguno (una sola línea) | Configuración de texto en Figma |

## Semántica

Interpretación basada en evidencia:

- Link representa un destino de navegación o una acción ligera. El estado `Visited` indica que el destino ya se visitó.
- `Color` es una elección de tema, no un estado semántico; no hay un significado documentado más allá del tema.
- `Disable` representa un enlace que no está disponible en ese momento.

No verificado en Figma: elemento HTML (por ejemplo, `a` frente a `button`), roles o atributos ARIA, cómo se exponen los enlaces deshabilitados y comportamiento con lectores de pantalla.

## Variantes (propiedades)

El inventario de variantes es completo: 32 variantes (3 `Color` × 5 estados × 2 `Size`, más `State=Disable` para `Color=Default` en ambos tamaños). Se inspeccionaron todas las variantes.

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Enlace azul. | `link/default` (#004a76); `Visited` (MD) `link/visited` (#2f7cb6) |
| Indigo | Enlace morado. | `link/indigo/default` (#6b1b99); `Visited` (MD) `link/indigo/visited` (#a155ce) |
| Evergreen | Enlace verde. | `link/evergreen/default` (#297a39); `Visited` (MD) `link/evergreen/visited` (#3db856) |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Enlace en reposo con el color del tema de `Color`. | `link/default`, `link/indigo/default`, `link/evergreen/default` |
| Hovered | Color de enlace más oscuro; cursor de puntero definido en Figma. Mismo color en todos los temas. | `link/hovered` (#003353) |
| Pressed | Color de enlace más oscuro de todos. Mismo color en todos los temas. | `link/pressed` (#002842) |
| Visited | Color más claro y específico del tema en `MD`; en `SM`, todos los temas usan `link/pressed`. | Ver Aclaraciones pendientes |
| Focused | Color del tema más un borde de foco de 2px con radio de 4px. | `border/focus` (#339947) |
| Disable | Enlace gris atenuado. Disponible solo para `Color=Default`. | `link/disabled` (#849588) |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| MD | Texto de 14px (`Text/Button/MD Underline`, 14/16); padding de 16px × 8px; 32px de alto. | Valor por defecto |
| SM | Texto de 12px (`Text/Button/SM Underline`, 12/16); padding de 8px × 4px; 24px de alto. | — |

### text

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Texto | Etiqueta del enlace. | Valor por defecto: "Link" |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | Color del tema, subrayado | Variantes `2185:572`, `2255:1837`, `2255:1887` |
| Hovered | Puntero sobre el enlace | El color cambia a `link/hovered` en todos los temas | Variantes `2185:606`, `2255:1839`, `2255:1889` |
| Pressed | En activación | El color cambia a `link/pressed` en todos los temas | Variantes `2185:608`, `2255:1841`, `2255:1891` |
| Visited | Destino ya visitado | Color de visitado específico del tema (`MD`); `link/pressed` (`SM`) | Variantes `2189:5021`, `2255:1843`, `2255:1893` |
| Focused | Con foco | Contorno `border/focus` de 2px alrededor del área con padding | Variantes `2185:610`, `2255:1845`, `2255:1895` |
| Disable | No disponible | Color `link/disabled`, sigue subrayado | Variantes `2185:612`, `2185:662` |

Estos son variantes de estado visuales. Las transiciones, la temporización y las condiciones que activan cada estado no están definidas en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — texto | `link/default` | Texto, `Color=Default` (`Default`, `Focused`) | Variables de Figma |
| Color — texto | `link/indigo/default` | Texto, `Color=Indigo` (`Default`, `Focused`) | Variables de Figma |
| Color — texto | `link/evergreen/default` | Texto, `Color=Evergreen` (`Default`, `Focused`) | Variables de Figma |
| Color — texto | `link/hovered` | Texto, `Hovered` (todos los temas) | Variables de Figma |
| Color — texto | `link/pressed` | Texto, `Pressed` (todos los temas); `Visited` en `SM` (todos los temas) | Variables de Figma |
| Color — texto | `link/visited`, `link/indigo/visited`, `link/evergreen/visited` | Texto, `Visited` en `MD`, según el tema | Variables de Figma |
| Color — texto | `link/disabled` | Texto, `Disable` | Variables de Figma |
| Color — borde | `border/focus` | Borde de foco, `Focused` | Variables de Figma |
| Espaciado | `space/16`, `space/8` | Padding (`MD`) | Variables de Figma |
| Espaciado | `space/8`, `space/4` | Padding (`SM`) | Variables de Figma |
| Espaciado | `gap/none` | Espacio del contenedor | Variables de Figma |
| Radio | `radius/4` | Radio del contenedor (visible como radio del borde de foco) | Variables de Figma |
| Tipografía | `Text/Button/MD Underline` | Texto (`MD`) | Estilo de texto de Figma |
| Tipografía | `Text/Button/SM Underline` | Texto (`SM`) | Estilo de texto de Figma |

Sin vincular a un token: el ancho de 2px del borde de foco. Ambos estilos de texto usan `weight/semibold`, que se resuelve al estilo de fuente "Medium", mientras que los estilos declaran un peso de 600.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hovered` (con cursor de puntero definido en Figma), `Pressed`, `Visited`, `Focused` y `Disable` son variantes de estado visuales.
- Interpretación basada en evidencia: el enlace navega o ejecuta una acción al activarse, muestra retroalimentación de hover y de presionado, y muestra un contorno de foco con el foco del teclado. Los destinos de navegación, la apertura en una pestaña nueva y la forma en que `Disable` impide la activación no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El subrayado está presente en todos los estados, por lo que los enlaces no se identifican solo por color.
- `Focused` ofrece un contorno de foco visible de 2px (`border/focus`, 3,63:1 sobre blanco).
- Relaciones de contraste calculadas sobre fondo blanco (el componente no tiene fondo propio): `link/default` 9,37:1, `link/indigo/default` 9,37:1, `link/evergreen/default` 5,33:1, `link/hovered` 13,14:1, `link/pressed` 15,19:1, `link/visited` 4,49:1, `link/indigo/visited` 4,46:1, `link/evergreen/visited` 2,56:1. Los tres colores de visitado quedan por debajo del umbral habitual de WCAG AA de 4,5:1 para texto normal; `link/evergreen/visited` queda muy por debajo. Ver Aclaraciones pendientes.
- El tamaño `SM` tiene un área de 24px de alto.

Información de accesibilidad faltante: semántica de enlace frente a botón, cómo se exponen los enlaces deshabilitados a las tecnologías de asistencia, comportamiento con teclado y pautas para enlaces que se abren en una pestaña nueva o en un sitio externo.

## Pautas de contenido

Observaciones verificadas:

- El texto por defecto es "Link", un texto de ejemplo.
- El texto del enlace ocupa una sola línea y está centrado.

Recomendaciones:

- Escribe un texto de enlace que describa el destino o la acción (por ejemplo, "Ver factura"), no textos genéricos como "Haz clic aquí".
- Mantén el texto del enlace breve para que quepa en una línea.

## Ejemplos

### Enlace estándar

Configuración: `Color=Default`, `State=Default`, `Size=MD`

Descripción: un enlace subrayado estándar dentro del contenido.

Evidencia / clasificación: configuración existente en Figma (variante `2185:572`).

### Enlace compacto con tema

Configuración: `Color=Evergreen`, `State=Default`, `Size=SM`

Descripción: un enlace pequeño que coincide con el tema Evergreen, para layouts densos.

Evidencia / clasificación: configuración existente en Figma (variante `2255:1897`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: el conjunto de variantes no tiene variantes `Color=Indigo, State=Disable` ni `Color=Evergreen, State=Disable`, por lo que estas combinaciones no se pueden seleccionar en Figma. No está documentado si se excluyen de forma intencional; ver Aclaraciones pendientes.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"default"` | Aplica un tono de marca al enlace. |
| `leadingIcon` | `ReactNode` | `undefined` | Ícono inicial opcional. |
| `trailingIcon` | `ReactNode` | `undefined` | Ícono final opcional. |
| `size` | `"sm" \| "md"` | `"md"` | Configura la propiedad `size` del componente. |
| `visited` | `boolean` | `false` | Configura la propiedad `visited` del componente. |

También acepta los atributos nativos de React para el elemento HTML subyacente (AnchorHTMLAttributes).
### Ejemplos

#### Inline link

```tsx
import { Link } from "@genome-evolution/react";

<Link href="#foundations-typography">Typography</Link>;
```

## Aclaraciones pendientes

1. Enlaces con tema deshabilitados. `State=Disable` existe solo para `Color=Default`. Confirmar si los enlaces Indigo y Evergreen pueden deshabilitarse y, en ese caso, si deben cambiar a `Color=Default, State=Disable`.
2. `Visited` en `SM`. Los enlaces visitados en `SM` usan `link/pressed` en todos los temas, mientras que en `MD` usan los tokens de visitado específicos de cada tema. Confirmar cuál es el comportamiento previsto.
3. Colores de tema en hover y presionado. `Hovered` y `Pressed` usan el mismo azul oscuro en todos los temas, por lo que los enlaces Indigo y Evergreen se vuelven azules al interactuar. Confirmar si se necesitan tokens de hover y presionado específicos de cada tema.
4. Contraste de visitado. `link/visited` (4,49:1), `link/indigo/visited` (4,46:1) y especialmente `link/evergreen/visited` (2,56:1) están por debajo de 4,5:1 sobre blanco. Confirmar si estos colores deben ajustarse.
5. Nombre del estado. El valor `Disable` difiere de `Disabled`, que se usa en otros componentes (por ejemplo, Input y Button). Confirmar si debe renombrarse; el cambio de nombre afecta a las instancias existentes.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2185:571`) el 2026-10-23.
