---
component: "Split button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2339-3772"
last_updated: "2026-10-23"
tags:
  - "action"
  - "button"
  - "menu"
---

# Split button

Sistema: Genome Evolution Design System

## Resumen del componente

Split button combina un botón de acción principal con un segmento de chevron adjunto, en los tipos Primary (relleno) y Secondary (con contorno), dos temas de color, dos tamaños y cinco estados visuales.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un botón con dos partes: una acción principal con la etiqueta "Button" y un segmento separado con un chevron hacia abajo que sugiere acceso a acciones relacionadas. El component set (nodo de Figma `2339:3772`) separa ambas partes con un divisor de 1px. En Figma no hay una descripción escrita definida para Split button.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Evergreen, Indigo, Default | Evergreen |
| Type | Primary, Secondary | Primary |
| Size | Regular, Small | Regular |
| State | Default, Hovered, Pressed, Focused, Disable | Default |

Split button no expone propiedades de texto, booleanas ni de instance swap. El texto de la etiqueta está vinculado a una variable de texto llamada `Text` (valor "Button").

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Evergreen`, `Type=Primary`, `Size=Regular` y `State=Default`. Esto corresponde a la variante `2339:3919`, la variante superior izquierda del component set: un split button verde relleno de 111 × 32px.

### Uso típico

Observaciones verificadas:

- `Type=Primary` usa un fondo relleno (`surface/evergreen/bold` o `surface/indigo/bold`) con una etiqueta clara; `Type=Secondary` usa un borde de color de 1px con una etiqueta de color.
- `Color=Default` existe solo con `Type=Primary` y `State=Disable`; `Disable` no está disponible para `Type=Secondary`.
- En `Hovered` y `Pressed`, solo cambia el segmento del chevron; en `Focused`, el borde de foco rodea solo el segmento del chevron.

Interpretación basada en evidencia:

- Usa Split button cuando hay una acción principal y un conjunto de acciones alternativas relacionadas disponibles desde el chevron.
- Usa `Primary` para la acción principal de una vista y `Secondary` para acciones menos destacadas.
- Esto sigue la descripción en Figma del componente Button, que indica que su estado `Disabled` existe solo con `Color=Default`; Split button usa el mismo patrón con `Color=Default` para `Disable`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: algunos flujos tienen una acción más común y variaciones relacionadas (por ejemplo, "Guardar" con "Guardar como" o "Guardar y cerrar"), y mostrarlas todas como botones separados añadiría desorden.

### Resultado esperado

Interpretación basada en evidencia: el usuario ejecuta la acción principal con un clic o abre las acciones relacionadas desde el chevron.

### Contexto típico

Interpretación basada en evidencia: barras de herramientas, pies de formularios y encabezados de página donde una acción principal tiene alternativas relacionadas.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de la estructura y los estados:

- Cuando una acción es claramente la más común y las acciones relacionadas deben seguir disponibles.
- Para agrupar una acción principal con sus variaciones en un espacio limitado.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Split button. Solo como recomendaciones:

- No lo uses cuando hay una sola acción; usa Button.
- No lo uses cuando las opciones del chevron no están relacionadas con la acción principal.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Contenedor redondeado (4px); relleno en `Primary`, con borde en `Secondary`. |
| Acción principal | Obligatoria | Segmento con la etiqueta "Button" (vinculada a la variable `Text`). |
| Divisor | Obligatoria | Línea vertical de 1px entre los dos segmentos. |
| Segmento del chevron | Obligatoria | Segmento con un ícono `chevron-down` de 12px; muestra los visuales de hover, presionado y foco. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — `Regular` | 111 × 32px | Medición directa |
| Tamaño — `Small` | 92 × 24px (`Primary`); 88 × 24px (`Secondary`) | Medición directa |
| Padding de la acción principal — `Regular` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding de la acción principal — `Small` | 12px horizontal, 4px vertical | `space/12`, `space/4` |
| Padding del segmento del chevron — `Regular` | 10px | Medición directa |
| Padding del segmento del chevron — `Small` | 8px × 4px (`Primary`); 6px (`Secondary`) | Medición directa |
| Radio de esquinas | 4px | `spread/md` (`Primary`); `semantic/sm` (`Secondary`) |
| Divisor | 1px | Medición directa |
| Borde de foco | 2px, solo en el segmento del chevron | `focus/width` |
| Tamaño del ícono | 12px | Medición directa |

## Semántica

Interpretación basada en evidencia:

- La acción principal ejecuta el comando principal; el segmento del chevron abre opciones relacionadas.
- `Type=Primary` representa la acción de mayor énfasis; `Type=Secondary`, una acción de menor énfasis. Esto coincide con los tipos Primary y Secondary descritos en la descripción en Figma del componente Button.
- `Color` es una elección de tema (Evergreen o Indigo); `Color=Default` se usa solo para la apariencia deshabilitada.

No verificado en Figma: roles de botón y de botón de menú, `aria-haspopup`, `aria-expanded`, el menú que se abre desde el chevron y el comportamiento con teclado.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Chevron | `chevron-down`, 12px; color inverso en `Primary`, color del tema en `Secondary`, atenuado en `Disable` | Capas y variables de Figma |

El chevron no se expone como propiedad de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 34 variantes. Se inspeccionaron todas las variantes.

| Type | Color | Estados | Tamaños |
|------|-------|---------|---------|
| Primary | Evergreen, Indigo | Default, Hovered, Pressed, Focused | Regular, Small |
| Primary | Default | Disable | Regular, Small |
| Secondary | Evergreen, Indigo | Default, Hovered, Pressed, Focused | Regular, Small |

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Evergreen | Tema verde. | Valor por defecto; `surface/evergreen/bold`, `border/evergreen`, `text/evergreen` |
| Indigo | Tema morado. | `surface/indigo/bold`, `border/indigo`, `text/indigo` |
| Default | Solo apariencia deshabilitada. | Solo `Type=Primary`, `State=Disable` |

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Primary | Fondo relleno, etiqueta y chevron claros, divisor claro. | Valor por defecto; `text/inverse`, `border/inverse` |
| Secondary | Borde de color de 1px, etiqueta y chevron de color, divisor de color, sin relleno. | `border/evergreen`, `border/indigo` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Regular | 32px de alto; etiqueta de 14px (`Text/Button/MD`). | Valor por defecto |
| Small | 24px de alto; etiqueta de 12px (`Text/Button/SM`). | — |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | En reposo. | Todos los colores excepto `Default` |
| Hovered | El segmento del chevron se oscurece (`Primary`) o recibe un fondo de hover (`Secondary`). | `surface/.../bold/hovered`; `background/interactive/hovered` |
| Pressed | El segmento del chevron se oscurece más (`Primary`) o recibe un fondo de presionado (`Secondary`). | `surface/.../bold/pressed`; `background/interactive/pressed` |
| Focused | Borde de foco de 2px alrededor del segmento del chevron solamente. | `border/focus`, `focus/width` |
| Disable | Fondo, etiqueta, divisor y chevron grises atenuados. | Solo `Color=Default`, `Type=Primary`; `background/disabled`, `text/disabled`, `border/disabled` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | Relleno del tema (`Primary`) o borde del tema (`Secondary`) | Variantes `2339:3919`, `2339:3785` |
| Hovered | Puntero sobre el segmento del chevron | Segmento del chevron: `surface/evergreen/bold/hovered` o `surface/indigo/bold/hovered` (`Primary`); `background/interactive/hovered` (`Secondary`) | Variantes `2345:282`, `2345:432` |
| Pressed | Segmento del chevron en activación | Segmento del chevron: `surface/.../bold/pressed` (`Primary`); `background/interactive/pressed` (`Secondary`) | Variantes `2345:294`, `2345:444` |
| Focused | El segmento del chevron tiene el foco | `border/focus` de 2px alrededor del segmento del chevron | Variantes `2345:329`, `2345:450` |
| Disable | No disponible | Colores atenuados | Variantes `2345:362`, `2345:357` |

El segmento de la acción principal no tiene visuales de hover, presionado ni foco. Las transiciones no están definidas en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/evergreen/bold`, `surface/indigo/bold` | Relleno de `Primary` | Variables de Figma |
| Color — superficie | `surface/evergreen/bold/hovered`, `surface/indigo/bold/hovered` | Segmento del chevron de `Primary` (`Hovered`) | Variables de Figma |
| Color — superficie | `surface/evergreen/bold/pressed`, `surface/indigo/bold/pressed` | Segmento del chevron de `Primary` (`Pressed`) | Variables de Figma |
| Color — superficie | `background/interactive/hovered`, `background/interactive/pressed` | Segmento del chevron de `Secondary` (`Hovered`, `Pressed`) | Variables de Figma |
| Color — superficie | `background/disabled` | Relleno de `Disable` | Variables de Figma |
| Color — borde | `border/evergreen`, `border/indigo` | Borde y divisor de `Secondary` | Variables de Figma |
| Color — borde | `border/inverse` | Divisor de `Primary`; también se usa como color de la etiqueta en `Primary`, `Small` | Variables de Figma |
| Color — borde | `border/focus` | Borde de foco | Variables de Figma |
| Color — borde | `border/disabled` | Divisor de `Disable` | Variables de Figma |
| Ancho de borde | `focus/width` | Borde de foco (2px) | Variables de Figma |
| Color — texto | `text/inverse` | Etiqueta de `Primary`, `Regular` | Variables de Figma |
| Color — texto | `text/evergreen`, `text/indigo` | Etiqueta de `Secondary` | Variables de Figma |
| Color — texto | `text/disabled` | Etiqueta de `Disable` | Variables de Figma |
| Color — ícono | `icon/inverse`, `icon/evergreen`, `icon/indigo`, `icon/disabled` | Usados por el component set (chevron); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Espaciado | `space/16`, `space/12`, `space/8`, `space/4` | Padding de la acción principal | Variables de Figma |
| Radio | `spread/md`, `semantic/sm` | Radio de esquinas (4px) | Variables de Figma |
| Tipografía | `Text/Button/MD`, `Text/Button/SM` | Etiqueta | Estilos de texto de Figma |
| Variable de texto | `Text` | Contenido de la etiqueta ("Button") | Variables de Figma |

Sin vincular a tokens: padding del segmento del chevron (10px, 8px × 4px, 6px), los anchos de 1px del divisor y del borde, y el radio de 4px de la variante `Primary`, `Regular`, `Focused`.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hovered`, `Pressed` y `Focused` se muestran solo en el segmento del chevron.
- Interpretación basada en evidencia: hacer clic en la acción principal ejecuta el comando principal; hacer clic en el chevron abre un menú de acciones relacionadas. El menú, su contenido y la forma en que cada parte responde al hover, al presionado y al foco no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Contraste de la etiqueta: `text/inverse` sobre `surface/evergreen/bold` 5,01:1 y sobre `surface/indigo/bold` 8,8:1; `text/evergreen` 5,33:1 y `text/indigo` 9,37:1 sobre blanco.
- El borde de foco (`border/focus`) tiene 1,47:1 frente al relleno Evergreen de `Primary` y 2,58:1 frente al relleno Indigo de `Primary`, por lo que el indicador de foco es difícil de ver en los split buttons rellenos.
- Solo el segmento del chevron tiene un visual de foco; la acción principal no tiene ninguno.
- El segmento del chevron muestra solo un ícono, sin etiqueta visible.

Información de accesibilidad faltante: objetivos de foco separados para las dos partes, nombre accesible para el segmento del chevron, semántica del menú y comportamiento con teclado.

## Pautas de contenido

Observaciones verificadas:

- La etiqueta es "Button", provista por la variable `Text`; es un texto de ejemplo.
- La etiqueta ocupa una sola línea y está centrada.

Recomendaciones:

- Usa un verbo breve para la acción principal (por ejemplo, "Guardar").
- Asegúrate de que las opciones del chevron sean variaciones de la acción principal.

## Ejemplos

### Acción dividida principal

Configuración: `Color=Evergreen`, `Type=Primary`, `Size=Regular`, `State=Default`

Descripción: un split button verde relleno para la acción principal de una vista.

Evidencia / clasificación: configuración existente en Figma (variante `2339:3919`).

### Acción dividida secundaria (Indigo)

Configuración: `Color=Indigo`, `Type=Secondary`, `Size=Small`, `State=Default`

Descripción: un split button pequeño con contorno para una acción de menor prioridad en un layout denso.

Evidencia / clasificación: configuración existente en Figma (variante `2345:677`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: `Color=Default` existe solo con `Type=Primary` y `State=Disable`; `Disable` no existe para `Type=Secondary` ni para `Evergreen` e `Indigo`. Estas combinaciones no se pueden seleccionar en Figma.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `label` | `ReactNode` | `required` | Etiqueta principal. |
| `onClick` | `() => void` | `required` | Función de la acción principal. |
| `items` | `SplitButtonItem[]` | `required` | Elementos del menú. |
| `color` | `"evergreen" \| "indigo" \| "default"` | `"evergreen"` | Configura la propiedad `color` del componente. |
| `type` | `"primary" \| "secondary"` | `"primary"` | Configura la propiedad `type` del componente. |
| `size` | `"regular" \| "small"` | `"regular"` | Configura la propiedad `size` del componente. |
| `disabled` | `boolean` | `false` | Configura la propiedad `disabled` del componente. |
### Ejemplos

#### Publish split button

```tsx
import { SplitButton } from "@genome-evolution/react";

<SplitButton
  label="Publish"
  onClick={() => {}}
  items={[{ label: "Publish now", onSelect: () => {} }]}
/>;
```

## Aclaraciones pendientes

1. Estados por parte. `Hovered`, `Pressed` y `Focused` afectan solo al segmento del chevron; la acción principal no tiene visuales de hover, presionado ni foco. Confirmar cómo deben mostrarse los estados de cada parte.
2. Contenido de la etiqueta. La etiqueta está vinculada a una variable de texto (`Text`) en lugar de a una propiedad de texto del componente, y no hay propiedad para el ícono del chevron. Confirmar cómo deben definir los diseñadores la etiqueta en cada instancia.
3. Cobertura y nombre del estado deshabilitado. `Disable` existe solo para `Type=Primary`; no hay un split button Secondary deshabilitado. El valor se llama `Disable`, mientras que Input y Button usan `Disabled`. Confirmar si se necesita una variante Secondary deshabilitada y si el valor debe renombrarse.
4. Visibilidad del foco. El borde de foco tiene 1,47:1 frente al relleno Evergreen y 2,58:1 frente al relleno Indigo. Confirmar si el tratamiento de foco debe cambiar en los split buttons rellenos.
5. Uso de tokens. La etiqueta de `Primary`, `Small` usa `border/inverse` en lugar de `text/inverse`; el padding del chevron está fijo y difiere entre `Primary` y `Secondary` en `Small`; el radio usa tanto `spread/md` como `semantic/sm`. Confirmar los tokens previstos.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2339:3772`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
