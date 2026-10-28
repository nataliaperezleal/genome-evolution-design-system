---
component: "Modal"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-2533"
last_updated: "2026-10-23"
tags:
  - "overlay"
  - "dialog"
  - "modal"
---

# Modal

Sistema: Genome Evolution Design System

## Resumen del componente

Modal es un contenedor de diálogo con un encabezado opcional (título, ícono de título, íconos de expandir y cerrar), un área de contenido y un pie opcional con texto de ayuda y botones de acción; está disponible en seis tamaños.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: una ventana de diálogo que presenta contenido y acciones enfocados sobre la interfaz principal. El component set (nodo de Figma `2184:2533`) es un contenedor redondeado con borde que tiene un encabezado, un placeholder de contenido y un pie con un Duo button anidado (acciones secundaria y principal). El nombre "Modal" y el ícono de cierre del encabezado respaldan esta lectura. En Figma no hay una descripción escrita definida para Modal.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Size | Small, Medium, Large, Bigger, 90%, Full | Small |
| showHeader | true, false | true |
| title | Texto | "Modal 16x title" |
| titleIcon | true, false | false |
| expand | true, false | false |
| close | true, false | true |
| showButtons | true, false | true |
| helperText | true, false | false |
| valueHelperText | Texto | "1 of 5" |
| tertiaryButton | true, false | false |
| Contenido (una propiedad por tamaño) | Contenido intercambiable | Placeholder vacío |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Size=Small`, `showHeader=true`, `title="Modal 16x title"`, `titleIcon=false`, `expand=false`, `close=true`, `showButtons=true`, `helperText=false`, `valueHelperText="1 of 5"` y `tertiaryButton=false`. Esto corresponde a la variante `2184:2534`, la variante superior izquierda del component set.

Con estos valores, una instancia nueva muestra un encabezado con título e ícono de cierre, un placeholder de contenido vacío y un pie con dos botones.

### Uso típico

Observaciones verificadas:

- Los seis tamaños definen el ancho del modal: Small 300px, Medium 500px, Large 700px, Bigger 1000px, 90% 1296px y Full 1440 × 900px.
- El área de contenido es un placeholder expuesto como una propiedad de contenido intercambiable distinta para cada tamaño (por ejemplo, `smallModalContent`, `fullModalContent`).
- El pie siempre contiene un Duo button anidado (un botón secundario con contorno y un botón principal relleno) alineado a la derecha. En todos los tamaños excepto Small, puede aparecer un botón terciario opcional con contorno (`tertiaryButton`) a la izquierda del pie.
- `helperText` muestra un texto breve como "1 of 5" en el pie.

Interpretación basada en evidencia:

- Elige el tamaño según la cantidad de contenido: Small para confirmaciones breves, Medium y Large para formularios o vistas de detalle, y Bigger, 90% o Full para contenido complejo como tablas o editores.
- Usa `helperText` para indicadores de paso en flujos de varios pasos (el valor por defecto "1 of 5" sugiere este uso).
- Como cada tamaño tiene su propia propiedad de contenido, puede ser necesario volver a definir el contenido después de cambiar `Size`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: algunas tareas (confirmaciones, formularios breves, vistas de detalle o edición enfocada) necesitan la atención total del usuario sin salir de la página actual.

### Resultado esperado

Interpretación basada en evidencia: el usuario lee el título, trabaja con el contenido y confirma con la acción principal, cancela con la acción secundaria o el ícono de cierre, o usa una acción terciaria opcional.

### Contexto típico

Interpretación basada en evidencia: diálogos de confirmación, formularios, asistentes paso a paso (con texto de ayuda de pasos) y vistas grandes de datos o de edición (Bigger, 90%, Full).

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de las propiedades, los tamaños y la estructura:

- Para pedir al usuario que confirme o complete una tarea enfocada antes de continuar.
- Para presentar un formulario breve o una vista de detalle sin salir de la página.
- Para guiar a los usuarios a través de un flujo de varios pasos (`helperText`, acciones del Duo button).
- Para presentar contenido grande y complejo en una vista enfocada (`Bigger`, `90%`, `Full`).

La descripción en Figma del Duo button anidado lo recomienda para flujos con una acción principal y una acción secundaria relacionada, como "Cancel" y "Save" o "Back" y "Next".

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Modal. Solo como recomendaciones:

- Evita usar un modal para información que no requiere interrumpir al usuario; considera un componente en línea.
- Evita ofrecer más de tres acciones en el pie; el pie ofrece un botón terciario opcional y un Duo button de dos botones.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Contenedor blanco con borde de 1px, radio de 8px y contenido recortado. |
| Encabezado | Opcional (`showHeader`) | Fila con divisor inferior que contiene el ícono de título, el título, el ícono de expandir y el ícono de cerrar. |
| Ícono de título | Opcional (`titleIcon`) | Ícono `bizagi-lines` de 16px antes del título. |
| Título | Obligatoria en el encabezado | Título de una sola línea truncado con puntos suspensivos. Texto por defecto: "Modal 16x title". |
| Ícono de expandir | Opcional (`expand`) | Ícono `expand` de 16px. |
| Ícono de cerrar | Opcional (`close`) | Ícono `close` de 16px. |
| Contenido | Obligatoria | Área con padding de 16px y un placeholder de contenido específico de cada tamaño. |
| Pie | Opcional (`showButtons`) | Fila con divisor superior que contiene el botón terciario, el texto de ayuda y el Duo button. |
| Botón terciario | Opcional (`tertiaryButton`); no disponible en Small | Instancia anidada de Button con contorno y la etiqueta "Button". |
| Texto de ayuda | Opcional (`helperText`, `valueHelperText`) | Texto secundario breve. Texto por defecto: "1 of 5". |
| Duo button | Obligatoria en el pie | Instancia anidada de Duo button: botón secundario con contorno y botón principal relleno, ambos con la etiqueta "Button". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Radio del contenedor | 8px | `radius/8` |
| Borde del contenedor | 1px | `border/default` |
| Fondo del contenedor | Blanco | `background/canvas` |
| Padding del encabezado | 16px horizontal, 12px vertical | Medición directa (no vinculado a tokens) |
| Espacio del encabezado | 8px | Medición directa |
| Padding del contenido | 16px | Medición directa |
| Alto del placeholder de contenido | 152px (Small, Medium, Large, 90%); ocupa el alto restante (Bigger, Full) | Medición directa |
| Padding del pie — Small | 16px horizontal, 8px vertical | Medición directa |
| Padding del pie — otros tamaños | 16px horizontal, 12px vertical; espacio de 16px | Medición directa |
| Ancho — Small | 300px | Medición directa |
| Ancho — Medium | 500px | Medición directa |
| Ancho — Large | 700px (se ajusta a un placeholder de contenido fijo de 668px) | Medición directa |
| Ancho — Bigger | 1000px (mínimo y máximo fijos) | Medición directa |
| Ancho — 90% | 1296px (mínimo y máximo fijos) | Medición directa |
| Tamaño — Full | 1440 × 900px (mínimo y máximo fijos) | Medición directa |
| Alto | 280px (Small); 288px (Medium, Large, 90%); 251px fijo (Bigger); 900px fijo (Full) | Medición directa |
| Radio de esquinas del encabezado y del pie | 4px en sus esquinas exteriores | Medición directa |
| Elevación | No se aplica sombra | Capa de Figma |

## Semántica

Interpretación basada en evidencia:

- El modal representa un diálogo. El título nombra el diálogo, el ícono de cerrar lo descarta y el ícono de expandir sugiere agrandarlo.
- En el Duo button, el botón relleno es la acción principal y el botón con contorno es la acción secundaria, según la descripción en Figma del Duo button. El botón terciario representa una acción adicional de menor prioridad.
- El texto de ayuda representa un estado de apoyo, como el progreso en un flujo de varios pasos.

No verificado en Figma: rol de diálogo, `aria-modal`, etiquetado del diálogo mediante su título, retención del foco y comportamiento con la tecla Escape o con clic fuera del modal.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono de título | `bizagi-lines`, 16px; se muestra con `titleIcon=true` | Capas de Figma |
| Expandir | `expand`, 16px; se muestra con `expand=true` | Capas de Figma |
| Cerrar | `close`, 16px; se muestra con `close=true` | Capas de Figma |

Los íconos del encabezado no se exponen como propiedades de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 6 variantes (una por `Size`). Los nombres de las propiedades booleanas, de texto y de contenido se listan tal como los expone el MCP de Figma.

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Small | 300px de ancho; pie compacto (padding vertical de 8px); sin botón terciario. | Valor por defecto; variante `2184:2534` |
| Medium | 500px de ancho. | Variante `2184:2604` |
| Large | 700px de ancho. | Variante `2184:2618` |
| Bigger | 1000px de ancho; alto fijo de 251px; el contenido ocupa el alto restante. | Variante `2184:2632` |
| 90% | 1296px de ancho (90% del ancho de 1440px de Full). | Variante `2184:2702` |
| Full | 1440 × 900px; el contenido ocupa el alto restante. | Variante `2184:2716` |

### Propiedades del encabezado

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| showHeader | Muestra la fila del encabezado. | Por defecto: `true` |
| title | Texto del título. | Por defecto: "Modal 16x title" |
| titleIcon | Muestra el ícono antes del título. | Por defecto: `false` |
| expand | Muestra el ícono de expandir. | Por defecto: `false` |
| close | Muestra el ícono de cerrar. | Por defecto: `true` |

### Propiedades del pie

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| showButtons | Muestra la fila del pie. | Por defecto: `true` |
| helperText / valueHelperText | Muestra el texto de ayuda y define su contenido. | Por defecto: `false` / "1 of 5" |
| tertiaryButton | Muestra el botón terciario a la izquierda del pie. | Por defecto: `false`; sin efecto en `Small` |

### Propiedades de contenido

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| smallModalContent, mediumModalContent, largeModalContent, biggerModalContent, contenido 90%, fullModalContent | Contenido intercambiable para el placeholder de contenido de cada tamaño. | Por defecto: vacío; el MCP expone la propiedad de 90% como `prop90ModalContent` |

Las etiquetas de los botones se definen en las instancias anidadas de Button y Duo button; no se exponen como propiedades de Modal.

## Estados

Modal no tiene variantes de estado. Los estados interactivos de las acciones del pie provienen de los componentes anidados Button y Duo button. Los íconos de expandir y cerrar son capas de ícono simples sin variantes de estado.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Fondo del contenedor; fondos de los botones con contorno | Variables de Figma |
| Color — borde | `border/default` | Borde del contenedor; divisores del encabezado y del pie | Variables de Figma |
| Color — texto | `text/primary` | Título | Variables de Figma |
| Color — texto | `text/secondary` | Texto de ayuda | Variables de Figma |
| Color — ícono | `icon/primary` | Usado por el component set (íconos del encabezado); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Radio | `radius/8` | Radio del contenedor | Variables de Figma |
| Tipografía | `Text/Title/SM` | Título (18/24, espaciado de letras ajustado) | Estilo de texto de Figma |
| Tipografía | `Text/Button/MD` | Etiquetas de botones (anidados) | Estilo de texto de Figma |
| Button / Duo button anidados | `surface/evergreen/bold`, `text/inverse`, `border/strong`, `border/evergreen`, `text/evergreen`, `space/16`, `size/16`, `space/8`, `gap/sm`, `semantic/sm`, `width/1` | Estilo de los botones anidados | Variables de Figma (definidas por el componente Button) |

Sin vincular a tokens: padding del encabezado, del contenido y del pie; espacios del encabezado y del pie; el radio de 4px del encabezado y del pie; el tamaño de fuente del título (18px se aplica directamente, aunque el alto de línea, la familia y el espaciado de letras usan variables).

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Elementos observados: los íconos de expandir y cerrar y los botones del pie. Los botones del pie son componentes interactivos con sus propios estados.
- Interpretación basada en evidencia: el ícono de cerrar descarta el modal, el ícono de expandir lo agranda y los botones del pie confirman, cancelan o ejecutan una acción adicional. El comportamiento de apertura y cierre, la animación, el fondo de superposición, el desplazamiento del contenido largo y el efecto del ícono de expandir no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El texto del título (`text/primary`) tiene 12,78:1 sobre blanco; el texto de ayuda (`text/secondary`) tiene 5,45:1.
- La etiqueta del botón principal (`text/inverse` sobre `surface/evergreen/bold`) tiene 5,01:1.
- Los títulos largos se truncan con puntos suspensivos, lo que puede ocultar parte del título.
- Los íconos de expandir y cerrar miden 16px, sin botón contenedor, área táctil ni variantes de estado.

Información de accesibilidad faltante: semántica de diálogo, nombre accesible, gestión del foco (foco inicial, retención y retorno del foco), cierre con teclado y nombres accesibles para los íconos de expandir y cerrar.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Modal 16x title" para el título, "1 of 5" para el texto de ayuda y "Button" para todos los botones; todos son textos de ejemplo.
- El título ocupa una sola línea y se trunca con puntos suspensivos.

Recomendaciones:

- Escribe un título breve que indique el propósito del diálogo.
- Etiqueta la acción principal con un verbo específico (por ejemplo, "Guardar") y la acción secundaria con la alternativa (por ejemplo, "Cancelar").
- Usa el texto de ayuda para un estado breve, como el progreso de los pasos.

## Ejemplos

### Confirmación breve

Configuración: `Size=Small`, `showHeader=true`, `close=true`, `showButtons=true`

Descripción: un diálogo compacto con título, contenido breve y acciones Cancelar y Confirmar.

Evidencia / clasificación: configuración existente en Figma (variante `2184:2534`, por defecto).

### Flujo de varios pasos

Configuración: `Size=Medium`, `helperText=true`, `valueHelperText="1 of 5"`, `tertiaryButton=true`

Descripción: un paso de asistente con texto de progreso en el pie, acciones Atrás y Siguiente, y una acción terciaria adicional.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas.

### Editor a pantalla completa

Configuración: `Size=Full`, `expand=false`, `close=true`

Descripción: un diálogo completo de 1440 × 900px para contenido complejo, con el contenido ocupando el alto disponible.

Evidencia / clasificación: configuración existente en Figma (variante `2184:2716`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

`tertiaryButton` no tiene efecto en `Size=Small`, porque el pie de Small no incluye un botón terciario.

## Implementación

La implementación de React expone las propiedades de contenido específicas por tamaño de Figma mediante una sola propiedad `sizeContent`:

```tsx
<Modal
  open
  size="medium"
  sizeContent={{
    small: <SmallContent />,
    medium: <MediumContent />
  }}
/>
```

`sizeContent` es un mapa parcial con claves de tipo `ModalSize`. Si no hay una entrada para el tamaño actual, la implementación usa `children` como contenido compartido alternativo. La propiedad `expand` solo muestra el ícono documentado; su efecto sigue sin definirse.

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `open` | `boolean` | `required` | Indica si el modal está visible. |
| `title` | `string` | `"Modal 16x title"` | Título del modal. |
| `description` | `string` | `undefined` | Descripción complementaria. |
| `footer` | `ReactNode` | `undefined` | Área de acciones del pie. |
| `onClose` | `() => void` | `undefined` | Función de cierre (Escape, backdrop o botón de cierre). |
| `size` | `"small" \| "medium" \| "large" \| "bigger" \| "90%" \| "full"` | `"small"` | Configura la propiedad `size` del componente. |
| `sizeContent` | `Partial<Record<ModalSize, ReactNode>>` | `undefined` | Configura la propiedad `sizeContent` del componente. |
| `showHeader` | `boolean` | `true` | Configura la propiedad `showHeader` del componente. |
| `showTitleIcon` | `boolean` | `false` | Configura la propiedad `showTitleIcon` del componente. |
| `titleIcon` | `ReactNode` | `"i"` | Configura la propiedad `titleIcon` del componente. |
| `expand` | `boolean` | `false` | Configura la propiedad `expand` del componente. |
| `close` | `boolean` | `true` | Configura la propiedad `close` del componente. |
| `showButtons` | `boolean` | `true` | Configura la propiedad `showButtons` del componente. |
| `helperText` | `boolean` | `false` | Configura la propiedad `helperText` del componente. |
| `valueHelperText` | `string` | `"1 of 5"` | Configura la propiedad `valueHelperText` del componente. |
| `tertiaryButton` | `boolean` | `false` | Configura la propiedad `tertiaryButton` del componente. |
| `children` | `ReactNode` | `undefined` | Configura la propiedad `children` del componente. |
| `onConfirm` | `() => void` | `undefined` | Configura la propiedad `onConfirm` del componente. |
| `onCancel` | `() => void` | `undefined` | Configura la propiedad `onCancel` del componente. |
| `onTertiary` | `() => void` | `undefined` | Configura la propiedad `onTertiary` del componente. |
| `className` | `string` | `undefined` | Configura la propiedad `className` del componente. |
### Ejemplos

#### Confirmation modal

```tsx
import { Modal, Button } from "@genome-evolution/react";

<Modal
  open
  title="Confirm changes"
  onClose={() => {}}
  footer={<Button>Confirm</Button>}
/>;
```

## Aclaraciones pendientes

1. Tamaños responsive. `90%` y `Full` son tamaños fijos en píxeles (1296px y 1440 × 900px) basados en un frame de 1440px. Confirmar si deben escalar con el viewport (por ejemplo, 90% del ancho del viewport) y cómo se comportan los demás tamaños en pantallas más pequeñas.
2. Estructura de tamaños inconsistente. `Bigger` tiene un alto fijo de 251px (menor que Medium y Large, de 288px), y `Large` se ajusta a un área de contenido fija de 668px en lugar de tener un ancho fijo. Confirmar las reglas de alto y ancho previstas para cada tamaño.
3. Pie de Small. El pie de Small tiene un padding distinto (8px frente a 12px) y no ofrece la opción de botón terciario. Confirmar si esta diferencia es intencional.
4. Controles de expandir y cerrar. Ambos son íconos simples de 16px sin botón contenedor ni estados, y el efecto de expandir no está definido. Confirmar si deberían ser icon buttons y qué hace expandir (por ejemplo, cambiar a `Full`).
5. Superposición y elevación. El modal no tiene sombra ni fondo de superposición. Confirmar si debe usarse con un componente separado de backdrop o superposición y si se necesita un estilo de elevación.
6. Valores fijos. El padding del encabezado, del contenido y del pie, el tamaño de fuente del título y el radio de 4px del encabezado y del pie no están vinculados a tokens. Confirmar si deben usar tokens de espaciado, tipografía y radio.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2184:2533`) el 2026-10-23.
