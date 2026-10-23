---
component: "Text area"
system: "Genome Evolution Design System"
type: "Control de formulario (entrada de texto multilínea)"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2258-793"
last_updated: "2026-10-23"
tags:
  - "text-area"
  - "input"
  - "form-control"
---

# Text area

Sistema: Genome Evolution Design System

## Resumen del componente

Campo de texto multilínea con etiqueta, icono de información, texto de ayuda, contador de caracteres y barra de desplazamiento opcionales. Está disponible en dos tamaños, dos orientaciones de etiqueta y ocho estados.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Text area es un control de formulario para escribir textos largos de varias líneas. Varias evidencias de Figma lo respaldan: el nombre del componente, un campo más alto que una sola línea (76 px en `MD`, 56 px en `SM`), un control de redimensionamiento (`Line expand`) en la esquina inferior derecha, una barra de desplazamiento vertical opcional, un cursor de texto en los estados con foco y un contador de caracteres. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| State | Default, Hovered, Focused, Focused tab, Filled, Error, Disabled, Read only | No verificado en Figma |
| Size | MD, SM | No verificado en Figma |
| Orientation | Default, Label Left | No verificado en Figma |
| Mostrar etiqueta (booleana) | true, false | true (según Figma MCP) |
| Etiqueta (texto) | Texto libre | "Label" (según Figma MCP) |
| Mostrar información (booleana) | true, false | true (según Figma MCP) |
| Text (texto) | Texto libre | "Placeholder" (según Figma MCP) |
| Mostrar texto de ayuda (booleana) | true, false | true (según Figma MCP) |
| Texto de ayuda (texto) | Texto libre | "Helper text" (según Figma MCP) |
| Mostrar contador (booleana) | true, false | true (según Figma MCP) |
| Mostrar desplazamiento (booleana) | true, false | false (según Figma MCP) |

Los nombres de las propiedades booleanas y de texto se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma. El texto del contador ("00/999") está fijo en la capa y no se expone como propiedad.

### Configuración por defecto

No se encontró una variante por defecto verificada. El conjunto contiene 32 variantes. La generación de código de Figma MCP reporta `State=Default`, `Size=MD`, `Orientation=Default`, pero la primera variante del conjunto es `State=Filled, Size=SM, Orientation=Default`. Ninguna se considera el valor por defecto documentado.

Observaciones verificadas: En todas las variantes inspeccionadas, la etiqueta, el icono de información, el texto de ayuda y el contador están visibles, y la barra de desplazamiento está oculta. Los valores por defecto reportados para las propiedades booleanas coinciden con esto.

### Uso típico

Observaciones verificadas:

- Dos tamaños: `MD` (campo de 76 px, texto de 14 px) y `SM` (campo de 56 px, texto de 10 px).
- Dos orientaciones: `Default` ubica la etiqueta sobre el campo; `Label Left` la ubica a la izquierda.
- El texto de ayuda y el contador se ubican debajo del campo, y cada uno se puede ocultar por separado.
- El componente mide 244 px de ancho en todas las configuraciones excepto `Size=MD, Orientation=Label Left`, que mide 260 px.

Interpretación basada en evidencia: Usa Text area en formularios donde el usuario escribe texto libre de varias líneas, como comentarios o descripciones. Usa la etiqueta para nombrar el campo, el texto de ayuda para explicar qué escribir y el contador para mostrar el límite de caracteres.

Recomendación: Usa el mismo `Size` y la misma `Orientation` para todos los campos de un formulario.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Text area permite al usuario escribir y revisar textos de más de una línea, con espacio para una etiqueta, indicaciones, mensajes de validación y un conteo de caracteres.

### Resultado esperado

Interpretación basada en evidencia: El usuario entiende qué debe escribir (etiqueta, icono de información, texto de ayuda), ve cuánto ha escrito respecto a un límite (contador) y recibe una indicación visible de error cuando el contenido no es válido (estado `Error`).

### Contexto típico

Interpretación basada en evidencia: Formularios y paneles de detalle. La orientación `Label Left` sugiere su uso en formularios alineados horizontalmente, y `SM` sugiere su uso en interfaces más densas.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Cuando el usuario necesita escribir texto de varias líneas o de cierta extensión.
- Cuando el campo tiene un límite de caracteres que debe ser visible (contador).
- Usa `Read only` para mostrar un valor que se puede ver pero no editar, y `Disabled` cuando el campo no está disponible.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para valores cortos de una sola línea, considera un componente de entrada de una línea.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Etiqueta | Opcional | Nombre del campo. Se controla con la propiedad booleana de mostrar etiqueta y la propiedad de texto de la etiqueta. |
| Icono de información | Opcional | Icono `info` de 16 px después de la etiqueta. Se controla con la propiedad booleana de mostrar información. |
| Campo | Requerida | Recuadro con borde que contiene el texto. |
| Texto | Requerida | Texto de ejemplo o ingresado. El contenido se define con la propiedad de texto. |
| Cursor | Condicional | Cursor de texto de 1 × 16 px, visible en `Focused`, `Focused tab` y `Error`. |
| Control de redimensionamiento | Requerida | Gráfico `Line expand` de 9 px en la esquina inferior derecha del campo. |
| Desplazamiento | Opcional | Barra de desplazamiento vertical de 4 px (barra y riel vacío) dentro del campo. Se controla con la propiedad booleana de mostrar desplazamiento. |
| Texto de ayuda | Opcional | Indicación o mensaje de error debajo del campo. Se controla con la propiedad booleana de mostrar texto de ayuda y la propiedad de texto de ayuda. |
| Contador | Opcional | Conteo de caracteres alineado a la derecha, con el texto fijo "00/999". Se controla con la propiedad booleana de mostrar contador. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho del componente | 244 px; 260 px para `MD` + `Label Left` | Dimensiones de variante |
| Altura del campo, MD | 76 px | Dimensiones de capa |
| Altura del campo, SM | 56 px | Dimensiones de capa |
| Relleno del campo, MD | 16 px a la izquierda (`space/16`); 8 px a la derecha, arriba y abajo (`space/8`) | Vinculaciones de variables |
| Relleno del campo, SM | 8 px a la izquierda (`space/8`); 4 px a la derecha, arriba y abajo (`space/4`) | Vinculaciones de variables |
| Radio de esquina del campo | 4 px (`semantic/sm` o `radius/4`, según la variante) | Vinculaciones de variables |
| Borde del campo | 1 px; 2 px en `Focused tab` (`focus/width`) | Estilo de la variante |
| Espacio dentro del campo | 8 px (`gap/sm`) | Vinculación de variable |
| Espacio entre etiqueta, campo y fila de ayuda (orientación `Default`) | 2 px (`gap/xxxs`) | Vinculación de variable |
| Espacio entre etiqueta y campo (`Label Left`) | 4 px (`gap/xxs`) | Vinculación de variable |
| Relleno superior de la etiqueta (`Label Left`) | 8 px en MD, 4 px en SM | Estilo de capa |
| Espacio entre etiqueta e icono de información | 4 px | Estilo de capa |
| Altura de la fila de ayuda | 18 px; 8 px de espacio entre el texto de ayuda y el contador | Dimensiones de capa |
| Ancho del contador | 39 px, alineado a la derecha | Dimensiones de capa |
| Icono de información | 16 × 16 px | Dimensiones de capa |
| Ancho de la barra de desplazamiento | 4 px, completamente redondeada (`semantic/full`) | Vinculaciones de variables |

## Semántica

Interpretación basada en evidencia:

- La etiqueta nombra el campo y el icono de información indica que hay más información disponible sobre él.
- `Default` muestra el texto de ejemplo en un color más claro (`text/secondary`); `Filled` muestra el texto ingresado en `text/primary`.
- `Error` marca un contenido no válido con borde y texto de ayuda en color de peligro.
- `Read only` muestra contenido que se puede ver pero no editar: sin relleno de fondo y con el color de texto del texto de ejemplo.
- `Disabled` marca un campo no disponible.
- `Focused` y `Focused tab` indican foco. `Focused tab` usa un borde más grueso de 2 px, lo que sugiere foco por teclado (tecla Tab).

Elemento HTML, atributos ARIA, asociación de la etiqueta y anuncios de lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Información | Icono `info`, 16 px, después de la etiqueta; atenuado en `Disabled` | Nombre y dimensiones de capa |
| Control de redimensionamiento | Gráfico `Line expand`, 9 px, en la esquina inferior derecha del campo | Nombre y dimensiones de capa |

Figma no define el comportamiento del icono de información (por ejemplo, si abre un tooltip).

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 32 variantes (8 estados × 2 tamaños × 2 orientaciones).

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Campo blanco, borde `border/default`, texto de ejemplo en `text/secondary`. | Vinculaciones de variables |
| Hovered | Relleno `background/interactive/hovered`, borde `border/interactive/hovered`, texto en `text/primary`. | Vinculaciones de variables |
| Focused | Borde `border/focus` de 1 px, cursor de texto. | Vinculaciones de variables |
| Focused tab | Borde `border/focus` de 2 px (`focus/width`), cursor de texto. | Vinculaciones de variables |
| Filled | Campo blanco, borde `border/default`, texto en `text/primary`. | Vinculaciones de variables |
| Error | Borde `border/danger`, texto de ayuda y contador en `text/danger`, cursor de texto. | Vinculaciones de variables |
| Disabled | Relleno `background/disabled`, borde `border/disabled`; etiqueta, texto, ayuda y contador en `text/disabled`; icono de información y control de redimensionamiento atenuados. | Vinculaciones de variables |
| Read only | Sin relleno de fondo, borde `border/default`, texto en `text/secondary`. | Vinculaciones de variables |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | Campo de 76 px; etiqueta `Text/Label/MD` (14/20); texto `Text/Body/SM` (14/20). | Dimensiones de capa, estilos de texto |
| SM | Campo de 56 px; etiqueta `Text/Label/SM` (12/16); texto `Text/Body/XXS` (10/14). | Dimensiones de capa, estilos de texto |

El texto de ayuda y el contador usan `Text/Body/XXS` (10/14) en ambos tamaños.

### Orientation

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Etiqueta sobre el campo. | Disposición de la variante |
| Label Left | Etiqueta a la izquierda del campo, alineada con su parte superior; el campo y la fila de ayuda comparten una columna. | Disposición de la variante |

### Propiedades booleanas y de texto

- Mostrar etiqueta / Etiqueta: muestran u ocultan la etiqueta y definen su texto. Valores por defecto reportados: `true`, "Label".
- Mostrar información: muestra u oculta el icono de información. Valor por defecto reportado: `true`.
- Text: texto de ejemplo o ingresado. Valor por defecto reportado: "Placeholder".
- Mostrar texto de ayuda / Texto de ayuda: muestran u ocultan el texto de ayuda y definen su contenido. Valores por defecto reportados: `true`, "Helper text".
- Mostrar contador: muestra u oculta el contador. Valor por defecto reportado: `true`.
- Mostrar desplazamiento: muestra u oculta la barra de desplazamiento. Valor por defecto reportado: `false`.

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Campo vacío | Texto de ejemplo en `text/secondary` | Vinculaciones de variables |
| Hovered | Puntero sobre el campo | Relleno y borde de hover | Vinculaciones de variables |
| Focused | El campo tiene el foco | Borde verde de 1 px, cursor | Vinculaciones de variables |
| Focused tab | El campo tiene el foco por teclado (interpretación) | Borde verde de 2 px, cursor | Vinculaciones de variables |
| Filled | El campo contiene texto | Texto en `text/primary` | Vinculaciones de variables |
| Error | Contenido no válido | Borde rojo, texto de ayuda y contador en rojo, cursor | Vinculaciones de variables |
| Disabled | No disponible | Relleno, borde y texto atenuados | Vinculaciones de variables |
| Read only | Contenido solo de lectura | Sin relleno, texto secundario | Vinculaciones de variables |

Las variantes `Error` incluyen un cursor de texto, por lo que el conjunto solo muestra el estado de error mientras el campo aparenta tener el foco. No hay una apariencia de error sin foco.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno del campo: Default, Focused, Focused tab, Filled, Error | Vinculaciones de variables |
| Fondo | `background/interactive/hovered` | Relleno del campo: Hovered | Vinculaciones de variables |
| Fondo | `background/disabled` | Relleno del campo: Disabled | Vinculaciones de variables |
| Borde | `border/default` | Borde del campo: Default, Filled, Read only | Vinculaciones de variables |
| Borde | `border/interactive/hovered` | Borde del campo: Hovered | Vinculaciones de variables |
| Borde | `border/focus` | Borde del campo: Focused, Focused tab | Vinculaciones de variables |
| Grosor de borde | `focus/width` (2) | Borde del campo: Focused tab | Vinculaciones de variables |
| Borde | `border/danger` | Borde del campo: Error | Vinculaciones de variables |
| Borde | `border/disabled` | Borde del campo: Disabled | Vinculaciones de variables |
| Texto | `text/primary` | Etiqueta; texto en Hovered, Focused, Focused tab, Filled y Error | Vinculaciones de variables |
| Texto | `text/secondary` | Texto en Default y Read only | Vinculaciones de variables |
| Texto | `text/tertiary` | Texto de ayuda y contador | Vinculaciones de variables |
| Texto | `text/danger` | Texto de ayuda y contador en Error | Vinculaciones de variables |
| Texto | `text/disabled` | Etiqueta, texto, texto de ayuda y contador en Disabled | Vinculaciones de variables |
| Icono | `icon/primary` | Cursor e icono de información | Vinculaciones de variables |
| Icono | `icon/disabled` | Icono de información en Disabled | Vinculaciones de variables |
| Superficie | `surface/subtlest`, `surface/subtle` | Riel y barra de desplazamiento | Vinculaciones de variables |
| Tipografía | `Text/Label/MD`, `Text/Label/SM` | Etiqueta, MD / SM | Estilos de texto |
| Tipografía | `Text/Body/SM`, `Text/Body/XXS` | Texto, MD / SM; el texto de ayuda y el contador usan `Text/Body/XXS` | Estilos de texto |
| Espaciado | `space/16`, `space/8`, `space/4` | Relleno del campo | Vinculaciones de variables |
| Espaciado | `gap/sm`, `gap/xxs`, `gap/xxxs`, `gap/none` | Espacios internos | Vinculaciones de variables |
| Radio | `semantic/sm`, `radius/4`, `semantic/full` | Radio del campo (se usan ambos tokens); radio de la barra de desplazamiento | Vinculaciones de variables |

Algunas variantes usan valores sin vincular en lugar de tokens: un radio de 4 px en `Read only` y en algunas variantes `SM`, y un espacio de 2 px en algunas variantes.

## Interacción

Estados observados: `Default`, `Hovered`, `Focused`, `Focused tab`, `Filled`, `Error`, `Disabled` y `Read only`.

Interpretación basada en evidencia: El campo admite texto escrito (cursor en los estados con foco), muestra un control de redimensionamiento que sugiere que el campo se puede redimensionar y puede desplazar su contenido cuando se muestra la barra de desplazamiento.

No verificado en Figma: comportamiento y límites del redimensionamiento, comportamiento del desplazamiento, cuándo se activa `Error`, lógica y límite del contador, comportamiento del icono de información e interacciones de prototipo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Hay una etiqueta visible sobre o a la izquierda del campo.
- Existen dos apariencias de foco: 1 px (`Focused`) y 2 px (`Focused tab`) de `border/focus`.
- `Error` se comunica con el color del borde y del texto de ayuda. El texto de ayuda puede contener un mensaje de error, por lo que el error no se indica solo con color cuando el texto de ayuda está visible.
- `Disabled` y `Read only` se distinguen visualmente entre sí y de los estados editables.
- El texto de ayuda y el contador usan texto de 10 px.

Información de accesibilidad faltante (no verificada en Figma): asociación de la etiqueta y del texto de ayuda, atributos ARIA para los estados de error, deshabilitado y solo lectura, comportamiento con teclado, nombre accesible cuando la etiqueta está oculta, accesibilidad del icono de información y cumplimiento de contraste.

## Guía de contenido

Observaciones verificadas: La etiqueta ocupa una sola línea sin ajuste. El texto de ejemplo es "Placeholder", el texto de ayuda de ejemplo es "Helper text" y el contador usa el formato "00/999".

Recomendaciones:

- Usa una etiqueta breve que nombre el campo.
- Usa el texto de ayuda para explicar qué escribir, y reemplázalo por un mensaje de error claro en `Error`.

## Ejemplos

### Campo estándar, etiqueta arriba

Configuración: `State=Default`, `Size=MD`, `Orientation=Default`

Descripción: Campo de 244 px con etiqueta e icono de información arriba, un campo de 76 px con texto de ejemplo, y texto de ayuda y contador debajo.

Evidencia / Clasificación: Variante existente en Figma (`2258:967`).

### Campo compacto con error, etiqueta a la izquierda

Configuración: `State=Error`, `Size=SM`, `Orientation=Label Left`

Descripción: Etiqueta a la izquierda, campo de 56 px con borde rojo y cursor, y texto de ayuda y contador en rojo.

Evidencia / Clasificación: Variante existente en Figma (`2258:925`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. **El texto del contador no es editable.** El contador es un texto fijo ("00/999") y no una propiedad, por lo que las instancias no pueden mostrar un conteo o límite real sin desvincularse. Confirma si debe agregarse una propiedad de texto para el contador y cuál es el límite de caracteres.
2. **El estado de error solo aparece con foco.** Todas las variantes `Error` incluyen un cursor de texto. Confirma si se necesita una apariencia de error sin foco, o si `Error` debe representar ambos casos.
3. **Focused vs. Focused tab.** Existen dos estados de foco (borde de 1 px y de 2 px). Confirma la diferencia prevista (por ejemplo, foco por puntero frente a foco por teclado) para que el equipo de desarrollo implemente el disparador correcto para cada uno.
4. **Anchos y tokens inconsistentes.** `MD` + `Label Left` mide 260 px, mientras que las demás configuraciones miden 244 px. En `Default` y `Filled` con `Label Left`, el campo tiene un ancho fijo (199 px en MD; contenedor de 188 px en SM), mientras que en los demás estados ocupa todo el ancho. El radio del campo usa `semantic/sm`, `radius/4` o 4 px sin vincular según la variante. Confirma el comportamiento de ancho y el token de radio previstos.
5. **Variante por defecto.** No hay un valor por defecto documentado. Los valores que reporta Figma MCP (`Default`, `MD`, `Default`) no coinciden con la primera variante del conjunto (`Filled`, `SM`, `Default`). Confirma la variante por defecto prevista.
6. **Peso tipográfico de la etiqueta.** `Text/Label/SM` usa `weight/semibold`, que resuelve a "Medium", mientras que `Text/Label/MD` usa el estilo literal "SemiBold"; ambos declaran peso 600. Confirma qué peso debe implementarse.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2258:793`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
