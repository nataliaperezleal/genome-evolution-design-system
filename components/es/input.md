---
component: "Input"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2171-2467"
last_updated: "2026-10-23"
tags:
  - "form"
  - "input"
  - "text-field"
---

# Input

Sistema: Genome Evolution Design System

## Resumen del componente

Input es un campo de formulario de una sola línea con etiqueta, ícono de información, íconos inicial y final, y texto de ayuda opcionales; está disponible en dos tamaños, dos orientaciones de etiqueta, dos estilos de esquina y ocho estados visuales.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un control de formulario para ingresar o mostrar un único valor. El component set (nodo de Figma `2171:2467`) se compone de una fila de etiqueta, un campo con borde que contiene una línea de texto y un texto de ayuda debajo del campo, con valores de `State` que cubren el ciclo de ingreso de datos (`Default`, `Hovered`, `On focus`, `Focused`, `Filled`, `Error`, `Disabled`, `Read only`). En Figma no hay una descripción escrita definida para Input.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| State | Default, Filled, Hovered, On focus, Focused, Error, Disabled, Read only | Default |
| Size | MD, SM | MD |
| Orientation | Default, Label Left | Default |
| Corner | Square, Rounded | Square |
| showLabel | true, false | true |
| label | Texto | "Label" |
| showInfo | true, false | true |
| showLeftIcon | true, false | true |
| leftIcon | Instance swap | `calendar` |
| showPlaceholder | true, false | true |
| placeholder | Texto | "Placeholder" |
| showRightIcon | true, false | true |
| rightIcon | Instance swap | `chevron-down` |
| showHelperText | true, false | true |
| helperText | Texto | "Helper text" |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `State=Default`, `Size=MD`, `Orientation=Default`, `Corner=Square`, con todas las propiedades de visibilidad en `true`, `label="Label"`, `placeholder="Placeholder"`, `helperText="Helper text"`, un ícono inicial `calendar` y un ícono final `chevron-down`. Esto corresponde a la variante `2179:591`, la variante superior izquierda del component set.

Con estos valores, cada instancia nueva muestra la etiqueta, el ícono de información, ambos íconos, el placeholder y el texto de ayuda. Oculta las partes que el campo no necesite.

### Uso típico

Observaciones verificadas:

- `Size=MD` usa un campo de 32px de alto con texto de 14px; `Size=SM` usa un campo de 24px de alto con texto de 10px.
- `Orientation=Default` ubica la etiqueta sobre el campo; `Orientation=Label Left` la ubica a la izquierda del campo, con el texto de ayuda debajo del campo.
- `Corner=Square` usa un radio de 4px; `Corner=Rounded` usa un campo completamente redondeado (tipo píldora).
- La misma propiedad de texto `placeholder` se muestra como texto de placeholder en `Default` y `Disabled`, y como texto ingresado en `Filled`, `Hovered`, `On focus`, `Focused`, `Error` y `Read only`.

Interpretación basada en evidencia:

- Usa `Orientation=Default` para formularios apilados estándar y `Label Left` para formularios compactos alineados horizontalmente o filas de configuración.
- Usa `SM` en layouts densos como filtros, barras de herramientas o tablas, y `MD` en formularios estándar.
- Usa los valores de `State` para representar el campo en cada momento del ciclo de ingreso en mockups y especificaciones.

Recomendación: reemplaza u oculta los íconos por defecto `calendar` y `chevron-down` salvo que el campo sea de fecha o de selección. Es una recomendación, no una regla del sistema de diseño.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los formularios necesitan un campo consistente para ingresar un único valor, con espacio para una etiqueta, una guía de apoyo y retroalimentación de validación.

### Resultado esperado

Interpretación basada en evidencia: el usuario identifica el campo por su etiqueta, ingresa o revisa un valor y comprende cualquier guía o error a partir del texto de ayuda.

### Contexto típico

Interpretación basada en evidencia: formularios, páginas de configuración, filtros y paneles de ingreso de datos. Las dos orientaciones y los dos tamaños admiten layouts apilados y layouts horizontales compactos.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de las propiedades, los estados y la estructura:

- Para recoger un valor de una sola línea del usuario.
- Para mostrar un valor que puede revisarse pero no editarse (`State=Read only`).
- Para mostrar un campo que no está disponible en ese momento (`State=Disabled`).
- Para informar un problema de validación en un campo (`State=Error` con texto de ayuda).
- Para agregar un ícono inicial o final que aclare el tipo de valor u ofrezca una affordance (`leftIcon`, `rightIcon`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Input. Solo como recomendaciones:

- Evita usar Input para textos largos o de varias líneas; el campo muestra una sola línea de texto en todas las variantes inspeccionadas.
- Evita ocultar la etiqueta (`showLabel=false`) salvo que otra etiqueta visible identifique el campo.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Etiqueta | Opcional (`showLabel`) | Nombre del campo. Texto por defecto: "Label". |
| Ícono de información | Opcional (`showInfo`) | Ícono `info` de 16px junto a la etiqueta. Está dentro de la fila de etiqueta, por lo que ocultar la etiqueta también lo oculta. |
| Campo | Obligatoria | Contenedor con borde que contiene los íconos y el texto. No tiene borde ni fondo en `Read only`. |
| Ícono inicial | Opcional (`showLeftIcon`, `leftIcon`) | Ícono de 16px al inicio del campo. Por defecto: `calendar`. |
| Texto | Opcional (`showPlaceholder`, `placeholder`) | Texto de placeholder o texto ingresado. Texto por defecto: "Placeholder". |
| Cursor | Depende del estado | Cursor de texto de 1 × 16px que aparece después del texto en `On focus`, `Focused` y `Error`. |
| Ícono final | Opcional (`showRightIcon`, `rightIcon`) | Ícono de 12px al final del campo. Por defecto: `chevron-down`. No está presente en `Read only`. |
| Texto de ayuda | Opcional (`showHelperText`, `helperText`) | Texto de apoyo o de error debajo del campo. Texto por defecto: "Helper text". |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Estructura — `Orientation=Default` | Vertical: fila de etiqueta, campo, texto de ayuda; espacio de 2px | `gap/xxxs` |
| Estructura — `Orientation=Label Left` | Horizontal: etiqueta y luego una columna con campo y texto de ayuda; espacio de 4px entre la etiqueta y la columna; espacio de 2px dentro de la columna | `gap/xxs`, `gap/xxxs` |
| Ancho — `Orientation=Default` | 244px (MD y SM) | Medición directa |
| Ancho — `Label Left, MD` | 260px en total, con un campo de ancho fijo de 199px | Medición directa |
| Ancho — `Label Left, SM` | 244px en total; el campo ocupa el ancho restante | Medición directa |
| Espacio en la fila de etiqueta (etiqueta a ícono de información) | 4px | `gap/xxs` (SM); 4px sin vincular (MD) |
| Padding vertical de la etiqueta — `Label Left` | 8px (MD); 4px (SM) | `space/8` (MD); medición directa (SM) |
| Padding del campo — `MD` | 16px horizontal, 6px vertical | `space/16`, `space/6` |
| Padding del campo — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Padding del campo — `Read only` | 0px horizontal; 8px vertical (MD), 4px vertical (SM) | `space/0`, `space/8`, `space/4` |
| Alto del campo | 32px (MD); 24px (SM) | Medición directa |
| Espacio dentro del campo | 8px | `gap/sm` |
| Borde del campo | 1px; 2px en `Focused` | Medición directa; `focus/width` |
| Radio de esquinas — `Square` | 4px | `semantic/sm` o `radius/4` (ambos 4px) |
| Radio de esquinas — `Rounded` | 999px (completamente redondeado) | `semantic/full` |
| Tamaños de íconos | Inicial 16px; final 12px; información 16px | Medición directa |
| Alto del componente — `Orientation=Default` | 70px (MD); 58px (SM) | Medición directa |
| Alto del componente — `Label Left` | 48px (MD); 40px (SM) | Medición directa |

Excepciones: `State=Hovered, Size=MD, Orientation=Default` mide 72px de alto y `State=Disabled, Size=MD, Orientation=Label Left` mide 54px de alto, porque sus campos se estiran; ver Aclaraciones pendientes.

## Semántica

Interpretación basada en evidencia:

- La etiqueta nombra el campo. El ícono de información indica que hay más información disponible sobre el campo; no hay contenido ni comportamiento definido para él.
- La línea de texto representa un texto de placeholder (color secundario, en `Default` y `Disabled`) o un valor (color primario, en los demás estados).
- El texto de ayuda ofrece orientación y, en `Error`, el mensaje de error (mostrado en `text/danger`).
- `Disabled` representa un campo no disponible; `Read only` representa un valor que se muestra pero no se puede editar.

No verificado en Figma: elementos HTML, tipos de input, roles o atributos ARIA (por ejemplo, `aria-invalid`, `aria-describedby`, `readonly`) y comportamiento con lectores de pantalla.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono de información | `info`, 16px, junto a la etiqueta; se controla con `showInfo` | Capas de Figma |
| Ícono inicial | Por defecto `calendar`, 16px; intercambiable con `leftIcon`; se controla con `showLeftIcon` | Capas y propiedades de Figma |
| Ícono final | Por defecto `chevron-down`, 12px; intercambiable con `rightIcon`; se controla con `showRightIcon` | Capas y propiedades de Figma |
| Íconos deshabilitados | Las variantes `Disabled` usan recursos de ícono separados y más claros; `icon/disabled` está entre las variables que usa el component set | Recursos y variables de Figma |

## Variantes (propiedades)

El inventario de variantes es completo: 64 variantes (8 `State` × 2 `Size` × 2 `Orientation` × 2 `Corner`). Los detalles de estilo siguientes provienen de la inspección directa de variantes representativas de todos los estados, ambos tamaños, ambas orientaciones y ambas esquinas. Los nombres de las propiedades booleanas, de texto y de instance swap se listan tal como los expone el MCP de Figma.

### State

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Campo vacío con texto de placeholder. | `background/canvas`, `border/default`, `text/secondary` |
| Filled | Campo con un valor. | `background/canvas`, `border/default`, `text/primary` |
| Hovered | Campo bajo el puntero; muestra un valor. | `background/interactive/hovered`, `border/interactive/hovered`, `text/primary` |
| On focus | Campo activo con borde de foco de 1px y cursor de texto. | `border/focus` (1px), `text/primary` |
| Focused | Campo activo con borde de foco de 2px y cursor de texto. | `border/focus`, `focus/width` (2px) |
| Error | Campo con borde de peligro, cursor de texto y texto de ayuda en color de peligro. | `border/danger`, texto de ayuda `text/danger` |
| Disabled | Campo no disponible con superficie, texto e íconos atenuados. | `background/disabled`, `border/disabled`, `text/disabled` |
| Read only | Valor mostrado sin borde ni fondo de campo, y sin ícono final. | `text/primary`; padding horizontal `space/0` |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| MD | Campo de 32px; etiqueta `Text/Label/MD` (14/20); texto del campo `Text/Body/SM` (14/20); padding horizontal de 16px. | Valor por defecto |
| SM | Campo de 24px; etiqueta `Text/Label/SM` (12/16); texto del campo `Text/Body/XXS` (10/14); padding horizontal de 8px. | — |

El texto de ayuda usa `Text/Body/XXS` (10/14) en ambos tamaños.

### Orientation

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Default | Etiqueta sobre el campo. | Valor por defecto |
| Label Left | Etiqueta a la izquierda del campo; texto de ayuda alineado debajo del campo. | — |

### Corner

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Square | Radio de campo de 4px. | Valor por defecto; `semantic/sm` / `radius/4` |
| Rounded | Campo completamente redondeado. | `semantic/full` |

### Propiedades de visibilidad y contenido

| Propiedad | Descripción verificada | Evidencia / notas |
|-----------|------------------------|-------------------|
| showLabel / label | Muestra la fila de etiqueta y define su texto. | Por defecto: `true` / "Label" |
| showInfo | Muestra el ícono de información junto a la etiqueta. | Por defecto: `true` |
| showLeftIcon / leftIcon | Muestra el ícono inicial y define qué ícono se usa. | Por defecto: `true` / `calendar` |
| showPlaceholder / placeholder | Muestra la línea de texto y define su texto (se usa tanto para placeholder como para valor). | Por defecto: `true` / "Placeholder" |
| showRightIcon / rightIcon | Muestra el ícono final y define qué ícono se usa. | Por defecto: `true` / `chevron-down`; sin efecto en `Read only` |
| showHelperText / helperText | Muestra el texto de ayuda y define su texto. | Por defecto: `true` / "Helper text"; ver Aclaraciones pendientes para `Disabled, MD, Label Left` |

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Campo vacío | Superficie blanca, borde por defecto, placeholder en color secundario | Variante `2179:591` |
| Filled | Campo con un valor | El texto cambia a color primario | Variante `2171:2859` |
| Hovered | Puntero sobre el campo | Superficie y borde de hover | Variante `2171:3110` |
| On focus | Campo activo | Borde de foco verde de 1px, cursor de texto | Variante `2171:2895` |
| Focused | Campo activo | Borde de foco verde de 2px, cursor de texto | Variante `2198:6269` |
| Error | Error de validación | Borde rojo, texto de ayuda rojo, cursor de texto | Variante `2172:685` |
| Disabled | No disponible | Superficie, borde, etiqueta, texto, texto de ayuda e íconos atenuados | Variante `2172:477` |
| Read only | No editable | Sin borde, fondo ni ícono final; sin padding horizontal | Variante `2172:510` |

Estos son variantes de estado visuales. Las transiciones entre estados, el comportamiento de hover y foco, y la diferencia de uso entre `On focus` y `Focused` no están definidos en Figma.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Fondo del campo (`Default`, `Filled`, `On focus`, `Focused`, `Error`) | Variables de Figma |
| Color — superficie | `background/interactive/hovered` | Fondo del campo (`Hovered`) | Variables de Figma |
| Color — superficie | `background/disabled` | Fondo del campo (`Disabled`) | Variables de Figma |
| Color — borde | `border/default` | Borde del campo (`Default`, `Filled`) | Variables de Figma |
| Color — borde | `border/interactive/hovered` | Borde del campo (`Hovered`) | Variables de Figma |
| Color — borde | `border/focus` | Borde del campo (`On focus`, `Focused`) | Variables de Figma |
| Color — borde | `border/danger` | Borde del campo (`Error`) | Variables de Figma |
| Color — borde | `border/disabled` | Borde del campo (`Disabled`) | Variables de Figma |
| Color — texto | `text/primary` | Etiqueta; texto ingresado | Variables de Figma |
| Color — texto | `text/secondary` | Texto de placeholder | Variables de Figma |
| Color — texto | `text/tertiary` | Texto de ayuda | Variables de Figma |
| Color — texto | `text/danger` | Texto de ayuda (`Error`) | Variables de Figma |
| Color — texto | `text/disabled` | Etiqueta, texto y texto de ayuda (`Disabled`) | Variables de Figma |
| Color — ícono | `icon/primary` | Cursor de texto | Variables de Figma |
| Color — ícono | `icon/disabled` | Usado por el component set; vínculo exacto con capas no inspeccionado | Variables de Figma |
| Ancho de borde | `focus/width` | Borde de 2px (`Focused`) | Variables de Figma |
| Espaciado | `space/16`, `space/6` | Padding del campo (MD) | Variables de Figma |
| Espaciado | `space/8`, `space/4` | Padding del campo (SM); padding vertical de `Read only`; padding de la etiqueta (`Label Left, MD`) | Variables de Figma |
| Espaciado | `space/0` | Padding horizontal del campo (`Read only`) | Variables de Figma |
| Espaciado | `gap/sm` | Espacio dentro del campo | Variables de Figma |
| Espaciado | `gap/xxs` | Espacio entre etiqueta y campo (`Label Left`); espacio entre etiqueta e ícono de información (SM) | Variables de Figma |
| Espaciado | `gap/xxxs` | Espacio vertical entre partes | Variables de Figma |
| Radio | `semantic/sm`, `radius/4` | Radio del campo (`Square`) | Variables de Figma |
| Radio | `semantic/full` | Radio del campo (`Rounded`) | Variables de Figma |
| Tipografía | `Text/Label/MD`, `Text/Label/SM` | Etiqueta (MD, SM) | Estilos de texto de Figma |
| Tipografía | `Text/Body/SM` | Texto del campo (MD) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XXS` | Texto del campo (SM); texto de ayuda (ambos tamaños) | Estilo de texto de Figma |

`Text/Label/SM` usa la variable `weight/semibold`, que se resuelve al estilo de fuente "Medium", mientras que `Text/Label/MD` usa directamente el estilo "SemiBold"; ver Aclaraciones pendientes.

## Interacción

- Interacciones verificadas: ninguna. No se encontraron interacciones de prototipo para Input.
- Estados observados: `Hovered`, `On focus`, `Focused`, `Error`, `Disabled` y `Read only` son variantes de estado visuales.
- Interpretación basada en evidencia: el campo acepta ingreso de texto cuando está activo (lo indica el cursor de texto) y muestra un tratamiento de hover bajo el puntero. El ícono final por defecto `chevron-down` sugiere una affordance de selección, y el ícono de información sugiere acceso a más información, pero ninguno de estos comportamientos está definido en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- Hay una etiqueta visible disponible en todas las variantes (`showLabel`).
- `Error` se indica con un borde rojo y con texto de ayuda rojo; el error también se comunica en texto solo si el texto de ayuda lo explica.
- `Focused` ofrece un borde de foco de 2px; `On focus` ofrece un borde de foco de 1px.
- Relaciones de contraste calculadas a partir de los valores de las variables (sobre superficie blanca): placeholder `text/secondary` 5,45:1; texto ingresado `text/primary` 12,78:1; texto de ayuda `text/tertiary` 4,02:1; texto de error `text/danger` 6,46:1; borde por defecto del campo `border/default` 1,66:1; borde de foco `border/focus` 3,63:1. El texto de ayuda (10px) queda por debajo del umbral habitual de WCAG AA de 4,5:1 para texto normal, y el borde por defecto queda por debajo del umbral de 3:1 para límites de componentes de interfaz no textuales. Ver Aclaraciones pendientes.
- El texto del campo en `SM` y todo el texto de ayuda miden 10px.

Información de accesibilidad faltante: tipo de input, atributos ARIA, cómo se asocian el texto de ayuda y el de error con el campo, comportamiento con teclado, orden de foco y nombre accesible para el ícono de información y el ícono final.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Label", "Placeholder" y "Helper text"; los tres son textos de ejemplo.
- El texto de la etiqueta no hace salto de línea (una sola línea).

Recomendaciones:

- Usa etiquetas breves y específicas que nombren el valor solicitado.
- Usa el texto de placeholder solo para ejemplos o pistas de formato, no como reemplazo de la etiqueta.
- En `Error`, usa el texto de ayuda para explicar el problema y cómo resolverlo.

## Ejemplos

### Campo de formulario estándar

Configuración: `State=Default`, `Size=MD`, `Orientation=Default`, `Corner=Square`, `showLeftIcon=false`, `showRightIcon=false`

Descripción: un campo de texto apilado con etiqueta, ícono de información, placeholder y texto de ayuda.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas.

### Campo con error de validación

Configuración: `State=Error`, `Size=MD`, `Orientation=Default`, `Corner=Square`

Descripción: un campo con borde de peligro y texto de ayuda en color de peligro que describe el error.

Evidencia / clasificación: configuración existente en Figma (variante `2172:685`).

### Valor compacto de solo lectura

Configuración: `State=Read only`, `Size=SM`, `Orientation=Label Left`

Descripción: una fila compacta de etiqueta y valor para mostrar información que no se puede editar.

Evidencia / clasificación: configuración existente en Figma (variante `2172:544`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

`State=Read only` no incluye el ícono final, por lo que `showRightIcon` y `rightIcon` no tienen efecto en ese estado.

## Aclaraciones pendientes

1. `On focus` frente a `Focused`. Ambos muestran un borde de foco y un cursor de texto; `On focus` usa un borde de 1px y `Focused` uno de 2px. Confirmar qué representa cada estado (por ejemplo, escritura frente a foco por teclado) y cuál usar.
2. Placeholder frente a valor. Una única propiedad de texto `placeholder` se usa tanto para el texto de placeholder como para los valores ingresados, y `Hovered` muestra el texto en el color de valor. Confirmar si se necesita una propiedad de valor separada y cómo debe verse `Hovered` en un campo vacío.
3. Íconos por defecto. Cada instancia nueva muestra por defecto un ícono inicial `calendar` y un ícono final `chevron-down`. Confirmar si estos valores por defecto son intencionales para un input de texto general o si deberían estar desactivados por defecto.
4. Inconsistencias estructurales. En `Disabled, MD, Label Left` (ambas esquinas), el texto de ayuda no está conectado a `showHelperText` y no se puede ocultar, y el campo estira la variante a 54px. `Hovered, MD, Default` mide 72px en lugar de 70px. Los anchos difieren según la orientación (244px, 260px con un campo fijo de 199px). Confirmar la estructura y el comportamiento de redimensionamiento previstos.
5. Contraste. El texto de ayuda (`text/tertiary`, 4,02:1) y el borde por defecto del campo (`border/default`, 1,66:1) están por debajo de los umbrales habituales de WCAG AA. Confirmar si se aceptan o deben ajustarse.
6. Peso de fuente de la etiqueta. `Text/Label/SM` se resuelve al estilo de fuente "Medium" a través de `weight/semibold`, mientras que `Text/Label/MD` usa "SemiBold". Confirmar el peso previsto para la etiqueta en SM.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2171:2467`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
