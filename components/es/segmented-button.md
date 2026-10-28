---
component: "Segmented button"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2194-2674"
last_updated: "2026-10-23"
tags:
  - "selection"
  - "navigation"
  - "segmented-control"
---

# Segmented button

Sistema: Genome Evolution Design System

## Resumen del componente

Segmented button es un único segmento de un control segmentado, con ícono y etiqueta opcionales, disponible en tres colores para el estado seleccionado, dos estilos de esquina, dos tamaños y cinco estados visuales.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: una opción de un control segmentado que se usa para cambiar entre vistas, secciones o modos. Cada variante del component set (nodo de Figma `2194:2674`) es una celda de ancho fijo formada por un marco exterior gris (`surface/subtlest`) y un segmento interior que contiene un ícono y una etiqueta ("Section name"). Al ubicar varias celdas una junto a otra se forma el control completo. En Figma no hay una descripción escrita definida para Segmented button.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Evergreen, Indigo | Default |
| State | Default, Selected, Hovered, Pressed, Focused | Default |
| Corner | Default, Rounded | Default |
| Size | MD, SM | MD |
| text | Texto | "Section name" |
| showText | true, false | true |
| showIcon | true, false | true |
| icon | Instance swap | `bizagi-lines` |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Color=Default`, `State=Default`, `Corner=Default`, `Size=MD`, `text="Section name"`, `showText=true`, `showIcon=true` y un ícono `bizagi-lines`. Esto corresponde a la variante `2194:2755`, la variante superior izquierda del component set: un segmento sin seleccionar de 160 × 40px.

### Uso típico

Observaciones verificadas:

- `Hovered`, `Pressed` y `Focused` existen solo para `Color=Default`.
- `Color=Evergreen` y `Color=Indigo` existen solo con `State=Selected`; `Color=Default` también tiene una variante `Selected`.
- Los segmentos `Size=MD` miden 160 × 40px; los segmentos `Size=SM` miden 131 × 32px.
- `Corner=Rounded` da forma de píldora tanto al segmento interior como al marco exterior.

Interpretación basada en evidencia:

- Ubica dos o más segmentos uno junto a otro, con uno en `State=Selected` y los demás en `State=Default`.
- Usa `Color=Evergreen` o `Color=Indigo` en el segmento seleccionado para que coincida con el tema del producto, o `Color=Default` para un segmento seleccionado neutro.
- Usa `Corner=Default` cuando los segmentos están directamente uno junto a otro, ya que su marco exterior cuadrado se une sin cortes.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan una forma compacta de cambiar entre un número reducido de vistas, secciones o modos relacionados, viendo todas las opciones a la vez.

### Resultado esperado

Interpretación basada en evidencia: el usuario ve todas las opciones, identifica la seleccionada y cambia seleccionando otro segmento.

### Contexto típico

Interpretación basada en evidencia: selectores de vista (por ejemplo, lista o cuadrícula), filtros de sección e interruptores de modo en la parte superior de paneles o páginas.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los estados y la estructura:

- Para cambiar entre un conjunto reducido de vistas o secciones mutuamente excluyentes.
- Cuando todas las opciones deben estar visibles e igualmente accesibles.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Segmented button. Solo como recomendaciones:

- Evita usar segmentos para acciones que no cambian una selección; usa Button.
- Evita usar muchos segmentos o etiquetas largas; cada segmento tiene un ancho fijo.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Marco exterior | Obligatoria | Marco de ancho fijo con fondo `surface/subtlest` (o el fondo de hover o presionado) y padding de 8px × 4px. Cuadrado en `Corner=Default`; con forma de píldora en `Corner=Rounded`. |
| Segmento | Obligatoria | Contenedor interior que contiene el ícono y la etiqueta; su fondo, borde y color de texto cambian según `State`. |
| Ícono | Opcional (`showIcon`, `icon`) | Ícono de 12px. Por defecto: `bizagi-lines`. |
| Etiqueta | Opcional (`showText`, `text`) | Etiqueta semibold. Texto por defecto: "Section name". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — `MD` | 160 × 40px (ancho fijo) | Medición directa |
| Tamaño — `SM` | 131 × 32px (ancho fijo) | Medición directa |
| Padding del marco exterior | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Padding del segmento — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding del segmento — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Espacio (ícono a etiqueta) | 8px | `gap/sm` |
| Radio del segmento — `Corner=Default` | 4px | `semantic/sm` |
| Radio del segmento — `Corner=Rounded` | Completamente redondeado | `semantic/full` |
| Radio del marco exterior — `Corner=Default` | Ninguno | Capa de Figma |
| Radio del marco exterior — `Corner=Rounded` | 32px | `semantic/pill` |
| Alineación del contenido | Centrado; el segmento ocupa el ancho del marco | Auto layout de Figma |
| Tamaño del ícono | 12px | Medición directa |

## Semántica

Interpretación basada en evidencia:

- Cada segmento representa una opción dentro de un conjunto mutuamente excluyente; `State=Selected` representa la opción activa.
- `Color` cambia el color del texto y del ícono del segmento seleccionado; no hay un significado documentado más allá del tema.

No verificado en Figma: roles de pestaña o de grupo de radios, `aria-selected` o `aria-pressed`, y navegación con teclado entre segmentos.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono | `bizagi-lines`, 12px; intercambiable con `icon`; se controla con `showIcon` | Capas y propiedades de Figma |

El color del ícono sigue el estado y el color (por ejemplo, Evergreen e Indigo cuando está seleccionado); se usan recursos de ícono separados por variante.

## Variantes (propiedades)

El inventario de variantes es completo: 28 variantes. Se inspeccionaron todas las variantes. Los nombres de las propiedades booleanas, de texto y de instance swap se listan tal como los expone el MCP de Figma.

| Color | Estados disponibles | Corner | Size |
|-------|---------------------|--------|------|
| Default | Default, Hovered, Pressed, Focused, Selected | Default, Rounded | MD, SM |
| Evergreen | Selected | Default, Rounded | MD, SM |
| Indigo | Selected | Default, Rounded | MD, SM |

### Color

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Neutro; el único color con estados sin seleccionar e interactivos. La etiqueta seleccionada usa `text/secondary`. | Valor por defecto |
| Evergreen | Segmento seleccionado con etiqueta e ícono verdes. | `text/evergreen`, `icon/evergreen`; solo `Selected` |
| Indigo | Segmento seleccionado con etiqueta e ícono morados. | `text/indigo`, `icon/indigo`; solo `Selected` |

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Segmento sin seleccionar sobre el marco gris; etiqueta terciaria. | `surface/subtlest`, `text/tertiary` |
| Hovered | Fondo de hover y borde de 1px; etiqueta primaria. | `background/interactive/hovered`, `border/interactive/hovered` |
| Pressed | Fondo de presionado y borde verde de 1px; etiqueta primaria. | `background/interactive/pressed`, `border/evergreen` |
| Focused | Borde de foco verde de 2px; etiqueta primaria. | `border/focus` |
| Selected | Segmento blanco; borde `border/default` de 1px en `Color=Default`, sin borde en Evergreen e Indigo. | `background/canvas` |

### Corner

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Radio de segmento de 4px; marco exterior cuadrado. | Valor por defecto; `semantic/sm` |
| Rounded | Segmento completamente redondeado; radio del marco exterior de 32px. | `semantic/full`, `semantic/pill` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| MD | 160 × 40px; etiqueta de 14px (`Text/Button/MD`). | Valor por defecto |
| SM | 131 × 32px; etiqueta de 12px (`Text/Button/SM`). | — |

### Propiedades de contenido

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| text / showText | Texto y visibilidad de la etiqueta. | Por defecto: "Section name" / `true` |
| icon / showIcon | Ícono y visibilidad. | Por defecto: `bizagi-lines` / `true` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Sin seleccionar | Segmento gris (`surface/subtlest`), etiqueta `text/tertiary` | Variante `2194:2755` |
| Hovered | Puntero sobre un segmento sin seleccionar | Marco y segmento usan `background/interactive/hovered`; borde `border/interactive/hovered` de 1px | Variante `2194:2795` |
| Pressed | En activación | Marco y segmento usan `background/interactive/pressed`; borde `border/evergreen` de 1px | Variante `2247:517` |
| Focused | Con foco | Borde `border/focus` de 2px | Variante `2247:1239` |
| Selected | Opción activa | Segmento blanco (`background/canvas`); etiqueta de color o secundaria | Variantes `3662:2798`, `2194:2683`, `2194:2691` |

Estos son variantes de estado visuales. No hay variantes de hover, presionado ni foco para un segmento seleccionado, y no hay estado deshabilitado. Las transiciones no están definidas en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/subtlest` | Marco exterior; segmento (`Default`, `Focused`) | Variables de Figma |
| Color — superficie | `background/interactive/hovered`, `background/interactive/pressed` | Marco y segmento (`Hovered`, `Pressed`) | Variables de Figma |
| Color — superficie | `background/canvas` | Segmento (`Selected`) | Variables de Figma |
| Color — borde | `border/interactive/hovered` | Borde del segmento (`Hovered`) | Variables de Figma |
| Color — borde | `border/evergreen` | Borde del segmento (`Pressed`) | Variables de Figma |
| Color — borde | `border/focus` | Borde del segmento (`Focused`) | Variables de Figma |
| Color — borde | `border/default` | Borde del segmento (`Selected`, `Color=Default`) | Variables de Figma |
| Color — texto | `text/tertiary`, `text/primary`, `text/secondary`, `text/evergreen`, `text/indigo` | Etiqueta (ver State y Color) | Variables de Figma |
| Color — ícono | `icon/primary`, `icon/secondary`, `icon/evergreen`, `icon/indigo` | Usados por el component set (ícono); vínculo exacto con capas no inspeccionado | Variables de Figma |
| Espaciado | `space/16`, `space/8`, `space/4`, `gap/sm` | Padding y espacio | Variables de Figma |
| Radio | `semantic/sm`, `semantic/full`, `semantic/pill` | Radio del segmento y del marco | Variables de Figma |
| Tipografía | `Text/Button/MD`, `Text/Button/SM` | Etiqueta | Estilos de texto de Figma |

Sin vincular a tokens: los anchos fijos de 160px y 131px, y los anchos de borde de 1px y 2px (el borde de foco no usa `focus/width`).

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Estados observados: `Hovered`, `Pressed`, `Focused` y `Selected`.
- Interpretación basada en evidencia: al seleccionar un segmento, este pasa a ser la opción seleccionada y los demás se deseleccionan. El comportamiento del grupo, la navegación con teclado y las transiciones no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Las etiquetas sin seleccionar (`text/tertiary` sobre `surface/subtlest`) tienen 3,78:1, por debajo del umbral habitual de WCAG AA de 4,5:1 para texto de 12–14px.
- Etiquetas seleccionadas sobre blanco: `text/secondary` 5,45:1, `text/evergreen` 5,33:1, `text/indigo` 9,37:1; las etiquetas en hover, presionado y foco (`text/primary`) tienen 10,74:1 o más.
- El segmento seleccionado se distingue por un fondo blanco y, en `Color=Default`, por un borde de 1px (`border/default`, 1,56:1 frente al marco), además del color de la etiqueta.
- `Focused` ofrece un borde de foco de 2px (`border/focus`, 3,41:1 frente al marco).

Información de accesibilidad faltante: semántica de grupo, anuncio del estado seleccionado, navegación con teclado y nombre accesible cuando `showText=false`.

## Pautas de contenido

Observaciones verificadas:

- La etiqueta por defecto es "Section name", un texto de ejemplo.
- Las etiquetas ocupan una sola línea y están centradas dentro de un ancho fijo.

Recomendaciones:

- Usa etiquetas breves de una o dos palabras para que quepan en el ancho fijo.
- Usa una redacción paralela entre los segmentos de un mismo control.
- Si muestras solo el ícono, asegúrate de que su significado sea claro y ofrece un nombre accesible.

## Ejemplos

### Selector de vista con dos opciones

Configuración: segmento 1 `Color=Evergreen`, `State=Selected`; segmento 2 `Color=Default`, `State=Default`; ambos `Corner=Default`, `Size=MD`

Descripción: dos segmentos uno junto a otro, con el primero seleccionado.

Evidencia / clasificación: recomendación construida a partir de variantes existentes en Figma (`2194:2683`, `2194:2755`).

### Selector compacto redondeado

Configuración: `Color=Indigo`, `State=Selected`, `Corner=Rounded`, `Size=SM`

Descripción: un segmento seleccionado pequeño con forma de píldora en el tema Indigo.

Evidencia / clasificación: configuración existente en Figma (variante `2247:1269`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Combinaciones no disponibles: `Color=Evergreen` y `Color=Indigo` existen solo con `State=Selected`, por lo que no se pueden combinar con `Default`, `Hovered`, `Pressed` ni `Focused` en Figma. No está documentado si se excluyen de forma intencional.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `options` | `SegmentedOption[]` | `undefined` | Segmentos. |
| `value` | `string` | `undefined` | Valor seleccionado. |
| `onChange` | `(value: string) => void` | `undefined` | Función que se ejecuta al cambiar la selección. |
| `text` | `string` | `"Section name"` | Configura la propiedad `text` del componente. |
| `showText` | `boolean` | `true` | Configura la propiedad `showText` del componente. |
| `icon` | `ReactNode` | `"≡"` | Configura la propiedad `icon` del componente. |
| `showIcon` | `boolean` | `true` | Configura la propiedad `showIcon` del componente. |
| `selected` | `boolean` | `false` | Configura la propiedad `selected` del componente. |
| `state` | `"default" \| "selected" \| "hovered" \| "pressed" \| "focused"` | `undefined` | Configura la propiedad `state` del componente. |
| `color` | `"default" \| "evergreen" \| "indigo"` | `"default"` | Configura la propiedad `color` del componente. |
| `size` | `"md" \| "sm"` | `"md"` | Configura la propiedad `size` del componente. |
| `rounded` | `boolean` | `false` | Configura la propiedad `rounded` del componente. |
| `containerProps` | `HTMLAttributes<HTMLDivElement>` | `undefined` | Configura la propiedad `containerProps` del componente. |

También acepta los atributos nativos de React para el elemento HTML subyacente (ButtonHTMLAttributes).
### Ejemplos

#### Theme mode

```tsx
import { SegmentedButton } from "@genome-evolution/react";

<SegmentedButton
  value="light"
  onChange={() => {}}
  options={[{ value: "light", label: "Light" }]}
/>;
```

## Aclaraciones pendientes

1. Componente de grupo. Segmented button es un único segmento; no hay un componente de grupo que controle cuántos segmentos aparecen ni cuál está seleccionado. Confirmar si se necesita un componente de grupo y cómo deben combinarse los segmentos (por ejemplo, cómo se unen los marcos de `Corner=Rounded`).
2. Estados para segmentos seleccionados y con tema. `Hovered`, `Pressed` y `Focused` existen solo para segmentos `Color=Default` sin seleccionar; no hay estados interactivos para un segmento seleccionado ni estado deshabilitado. Confirmar si se necesitan estos estados.
3. Contraste de la etiqueta sin seleccionar. Las etiquetas sin seleccionar (`text/tertiary` sobre `surface/subtlest`) tienen 3,78:1. Confirmar si debe usarse un color de etiqueta más oscuro.
4. Color del borde en presionado. `Pressed` usa un borde verde `border/evergreen` incluso en `Color=Default`. Confirmar si es intencional o si debe seguir el color seleccionado.
5. Ancho fijo. Los segmentos tienen un ancho fijo de 160px (MD) y 131px (SM), sin importar la longitud de la etiqueta. Confirmar si los segmentos deben ajustarse a su contenido o repartirse el ancho disponible por igual.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2194:2674`) el 2026-10-23.
