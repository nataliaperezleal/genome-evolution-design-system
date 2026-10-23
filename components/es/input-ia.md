---
component: "Input-ia"
system: "Genome Evolution Design System"
type: "Compositor de instrucciones para IA (entrada compuesta)"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3847-4964"
last_updated: "2026-10-23"
tags:
  - "input"
  - "ai"
  - "prompt"
---

# Input-ia

Sistema: Genome Evolution Design System

## Resumen del componente

Campo de entrada de instrucciones para interacciones con IA. Combina un campo de texto, etiquetas de referencia que se pueden quitar, selectores de acción opcionales, un botón de envío y un aviso sobre la IA. Está disponible en dos disposiciones (`Normal`, `Multiactions`), dos estilos de esquina y siete estados.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Input-ia es el compositor de mensajes de un asistente de IA. Varias evidencias de Figma lo respaldan:

- El nombre del componente ("ia").
- El texto de ejemplo "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos".
- El aviso "AI can make mistakes. Consider checking important information." ("La IA puede cometer errores. Considera verificar la información importante.").
- Un botón `send` que se activa (relleno) cuando el campo contiene texto.
- Etiquetas de referencia que representan archivos adjuntos.

No se encontró una descripción escrita en Figma para el propio Input-ia.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Normal, Multiactions | Normal (según Figma MCP) |
| State | Default, Filled, Hovered, On focus, Focused, Error, Disable | Default (según Figma MCP) |
| Corners | Square, Rounded | Square (según Figma MCP) |
| Mostrar referencias (booleana) | true, false | true (según Figma MCP) |
| Mostrar acción 1 / 2 / 3 (booleanas) | true, false | true (según Figma MCP); solo `Type=Normal` |
| Text (texto) | Texto libre | "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos" |

`Disable` se escribe exactamente como en Figma. Los nombres de las propiedades booleanas y de texto se indican tal como los expone Figma MCP (`showEmbed`, `showAction1`–`showAction3`, `text`); no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

Figma MCP reporta `Type=Normal`, `State=Default`, `Corners=Square`, con las etiquetas de referencia y las tres acciones visibles. Esto coincide con la primera variante del conjunto (nodo `3847:4951`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- `Normal` es un compositor de varias líneas (389 × 168 px). Las etiquetas de referencia están arriba dentro del recuadro, el texto de la instrucción debajo y, al final, una fila de acciones con tres selectores a la izquierda y el botón de envío a la derecha.
- `Multiactions` es un compositor compacto de una sola fila (389 × 112 px incluyendo etiquetas y aviso). Las etiquetas de referencia están sobre el recuadro, y dentro de él hay un icono `add` (+), el texto de la instrucción y el botón de envío.
- El botón de envío se ve deshabilitado en todos los estados excepto `Filled`, donde usa un estilo relleno Evergreen.
- El aviso se muestra debajo del recuadro en todos los estados excepto `Error`, donde lo reemplaza un mensaje de error.

Interpretación basada en evidencia: Usa `Normal` cuando el usuario escribe instrucciones largas y necesita acceso directo a las acciones de adjuntos y datos. Usa `Multiactions` cuando el espacio es limitado y las acciones se agrupan detrás del botón `+`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Input-ia permite escribir instrucciones para una IA, adjuntar o referenciar datos y enviar la instrucción desde un único componente, recordando al usuario que los resultados de la IA pueden contener errores.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede redactar una instrucción, ver qué archivos o fuentes de datos están referenciados, agregar contexto mediante acciones y enviar la instrucción cuando contiene texto.

### Contexto típico

Interpretación basada en evidencia: Experiencias de asistentes y constructores con IA donde el usuario describe lo que quiere construir y referencia sus datos.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Como punto de entrada de instrucciones de un asistente o constructor con IA.
- Cuando el usuario necesita referenciar datos o archivos en una instrucción (etiquetas de referencia, indicación de `@` / Ctrl + Space).
- `Normal`, para instrucciones detalladas con acciones visibles de adjuntos y datos.
- `Multiactions`, para disposiciones compactas.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para campos de formulario comunes, usa `Input` o `Text area`. Input-ia incluye contenido específico de IA (aviso, botón de envío, referencias).

## Estructura (Anatomía)

### Composición

```
Input-ia
├── Fila de referencias (Mostrar referencias) — instancias de Tag: etiquetas de archivo con icono para quitar + etiqueta de desbordamiento "+6"
├── Recuadro Input-chat (con borde)
│   ├── [Normal] Fila de referencias, dentro del recuadro, arriba
│   ├── [Multiactions] Icono add (+)
│   ├── Texto de la instrucción (propiedad Text)
│   └── [Normal] Fila composer-actions
│       ├── composer-actions-left: hasta 3 selectores de acción (instancias de Input)
│       └── Botón de envío (instancia de Icon Button)
│   └── [Multiactions] Botón de envío (instancia de Icon Button), al final de la fila
└── Aviso / mensaje de error (debajo del recuadro)
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Etiquetas de referencia | Opcional | Fila de instancias de `Tag` (forma de píldora): tres etiquetas de archivo ("01_Resea…", "02_Perso…", "03_Journ…") con icono `file` e icono `close`, seguidas de una etiqueta "+6" en color de éxito con icono `chevron-down`. Se controla con Mostrar referencias. La fila recorta el desbordamiento. |
| Recuadro de entrada | Requerida | Contenedor con borde que contiene la instrucción y las acciones. |
| Icono add | Solo `Multiactions` | Icono `add` de 16 px al inicio del recuadro. |
| Texto de la instrucción | Requerida | Texto de 12 px (`Text/Body/XS`). El contenido se define con la propiedad Text. |
| Selectores de acción | Opcional, solo `Normal` | Hasta tres instancias de `Input` de 52 × 24 px, cada una con un icono de 16 px (`database-add`, `clip`, `image`) y un `chevron-down` de 12 px. Se controlan con Mostrar acción 1–3. |
| Botón de envío | Requerida | Instancia de `Icon Button` con icono `send` (flecha hacia arriba) de 16 px y 8 px de relleno. |
| Aviso | Requerida | Texto centrado de 10 px: "AI can make mistakes. Consider checking important information." En `Error`, lo reemplaza "Review the instruction, correct the text so that the AI can understand it." |

### Relaciones entre componentes hijos

- `Tag` aporta las etiquetas de referencia y el indicador de desbordamiento "+6".
- `Input` aporta los selectores de acción (icono con chevron desplegable).
- `Icon Button` aporta el control de envío.

### Lógica de orden

- Las etiquetas de referencia siempre van primero (sobre el recuadro o en su parte superior), seguidas de la instrucción, las acciones y el aviso.
- En `Normal`, las acciones se alinean a la izquierda de la fila inferior y el botón de envío a la derecha.
- En `Multiactions`, el orden dentro del recuadro es `+`, instrucción, envío.
- Las etiquetas de referencia se listan de izquierda a derecha, con la etiqueta de desbordamiento "+6" al final.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho del componente | 389 px | Dimensiones de variante |
| Altura, Normal | 168 px (166 px en `On focus`) | Dimensiones de variante |
| Altura, Multiactions | 112 px | Dimensiones de variante |
| Relleno del recuadro | 16 px | Estilo de capa / `space/16` |
| Relleno de la fila de acciones | 8 px arriba, 16 px a los lados y abajo | Estilo de capa |
| Espacio entre selectores de acción | 6 px (sin vinculación a variable) | Auto layout |
| Espacio dentro del recuadro Multiactions | 16 px (`gap/lg`) | Vinculación de variable |
| Espacio entre etiquetas de referencia | 4 px | Auto layout |
| Espacio entre recuadro y aviso | 4 px (Normal); 8 px entre etiquetas y recuadro (Multiactions, `gap/sm`) | Auto layout |
| Radio de esquina, Square | 4 px (`semantic/sm`) | Vinculación de variable |
| Radio de esquina, Rounded | 12 px (`semantic/lg`); botón de envío completamente redondeado | Vinculación de variable, captura |
| Botón de envío | 32 × 32 px (icono de 16 px + 8 px de relleno) | Estilo de capa |

## Semántica

Interpretación basada en evidencia:

- Las etiquetas de referencia representan datos o archivos incluidos como contexto. El icono `close` sugiere que cada una se puede quitar, y la etiqueta "+6" indica seis referencias ocultas más.
- El botón de envío es la acción principal. Su aspecto deshabilitado en los estados vacíos y relleno en `Filled` indica que solo se puede enviar una instrucción cuando hay texto.
- El borde degradado distingue la entrada de IA de las entradas comunes.

Elementos HTML, roles ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Etiqueta de referencia | `file` (inicial) y `close` (final), 12 px | Instancias de Tag anidadas |
| Etiqueta de desbordamiento | `chevron-down`, 12 px | Instancia de Tag anidada |
| Acción 1 / 2 / 3 | `database-add`, `clip`, `image`, 16 px, cada uno con `chevron-down` | Instancias de Input anidadas |
| Add | `add`, 16 px (`Multiactions`) | Nombre de capa |
| Envío | `send` (flecha hacia arriba), 16 px | Instancia de Icon Button anidada |

Las capas de icono de las acciones se llaman `calendar` dentro de las instancias de `Input` anidadas, aunque muestran otros iconos.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 28 variantes (2 tipos × 7 estados × 2 esquinas).

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Normal | Recuadro de varias líneas con referencias, instrucción y fila de acciones. | Disposición de la variante |
| Multiactions | Etiquetas sobre un recuadro de una fila con `+`, instrucción y envío. Mostrar acción 1–3 no aplica. | Disposición de la variante |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Borde degradado (`palette/primary/700` → `palette/secondary/700`), texto de ejemplo en `text/tertiary`, botón de envío con estilo deshabilitado (`background/disabled`, `icon/disabled`). | Vinculaciones de variables, captura |
| Filled | Borde degradado; botón de envío relleno con `surface/evergreen/bold` e `icon/inverse`. | Vinculaciones de variables, captura |
| Hovered | Borde degradado; relleno `background/interactive/hovered`. | Vinculaciones de variables |
| On focus | Borde degradado; cursor de texto visible y sin texto de ejemplo. | Captura |
| Focused | Borde `border/focus` de 2 px (`focus/width`). | Vinculaciones de variables |
| Error | Borde `border/danger`; mensaje de error en `text/danger` que reemplaza el aviso. | Vinculaciones de variables, captura |
| Disable | Relleno `background/disabled`, borde `border/disabled`, contenido en `text/disabled` e `icon/disabled`. | Vinculaciones de variables |

### Corners

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Square | Radio del recuadro de 4 px. | Vinculación de variable |
| Rounded | Radio del recuadro de 12 px; botón de envío circular. | Vinculación de variable, captura |

### Mostrar referencias, Mostrar acción 1–3, Text

- Mostrar referencias: muestra u oculta las etiquetas de referencia. Valor por defecto reportado: `true`.
- Mostrar acción 1–3: muestran u ocultan cada selector de acción (solo `Normal`). Valor por defecto reportado: `true`.
- Text: texto de ejemplo o contenido de la instrucción.

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Vacío | Borde degradado, texto de ejemplo, envío inactivo | Vinculaciones de variables |
| Filled | Instrucción escrita | Botón de envío activo (relleno) | Vinculaciones de variables |
| Hovered | Puntero sobre el recuadro | Relleno gris claro | Vinculaciones de variables |
| On focus | Escribiendo (interpretación) | Cursor, sin texto de ejemplo | Captura |
| Focused | Foco (interpretación: foco por teclado) | Borde de foco verde de 2 px | Vinculaciones de variables |
| Error | Instrucción no válida | Borde rojo, mensaje de error en rojo | Vinculaciones de variables |
| Disable | No disponible | Relleno, borde, texto y acciones atenuados | Vinculaciones de variables |

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Borde | `palette/primary/700`, `palette/secondary/700` (estilo `Gradient`) | Borde del recuadro en Default, Filled, Hovered y On focus | Vinculaciones de variables |
| Borde | `border/focus` + `focus/width` (2) | Borde en Focused | Vinculaciones de variables |
| Borde | `border/danger` | Borde en Error | Vinculaciones de variables |
| Borde | `border/disabled`, `border/default` | Borde en Disable; bordes de selectores de acción y etiquetas de referencia | Vinculaciones de variables |
| Fondo | `background/canvas` | Relleno del recuadro y de las acciones | Vinculaciones de variables |
| Fondo | `background/interactive/hovered` | Relleno en Hovered | Vinculaciones de variables |
| Fondo | `background/disabled` | Relleno en Disable; botón de envío inactivo | Vinculaciones de variables |
| Superficie | `surface/evergreen/bold` | Botón de envío activo (Filled) | Vinculaciones de variables |
| Superficie | `surface/success/subtle` + `border/success` + `text/success` | Etiqueta de desbordamiento "+6" | Vinculaciones de variables |
| Texto | `text/tertiary` | Texto de ejemplo y aviso | Vinculaciones de variables |
| Texto | `text/primary` | Textos de las etiquetas de referencia | Vinculaciones de variables |
| Texto | `text/danger`, `text/disabled` | Mensaje de error; texto en Disable | Vinculaciones de variables |
| Icono | `icon/primary`, `icon/disabled`, `icon/inverse`, `icon/success` | Iconos según el estado | Vinculaciones de variables |
| Tipografía | `Text/Body/XS` (12/16), `Text/Body/XXS` (10/14), `Text/Body/XXS Strong` | Instrucción; aviso; textos de etiquetas | Estilos de texto |
| Espaciado | `space/8`, `space/4`, `space/16`, `gap/sm`, `gap/lg`, `gap/xxs`, `gap/xxxs` | Relleno y espacios | Vinculaciones de variables |
| Radio | `semantic/sm`, `semantic/lg`, `semantic/full` | Recuadro (Square / Rounded) y etiquetas | Vinculaciones de variables |

## Interacción

Estados observados: `Default`, `Filled`, `Hovered`, `On focus`, `Focused`, `Error` y `Disable`.

Interpretación basada en evidencia: El botón de envío se habilita cuando la instrucción tiene texto. Escribir `@` o presionar Ctrl + Space permite referenciar datos (según el texto de ejemplo). Cada etiqueta de referencia se puede quitar con su icono `close`, y la etiqueta "+6" despliega las referencias ocultas.

No verificado en Figma: qué abre cada selector de acción, qué abre `+` en `Multiactions`, el comportamiento de envío (clic o teclado), cómo se agregan o quitan referencias, el crecimiento automático de la altura con instrucciones largas y cuándo se activa `Error`.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Existe un estado `Focused` dedicado, con un borde `border/focus` de 2 px.
- `Error` usa un borde rojo y un mensaje de texto, por lo que no se indica solo con color.
- El estado habilitado del botón de envío se indica con el color del relleno y del icono.
- Los selectores de acción y el botón de envío son solo de icono.
- El aviso, los textos de referencia y el mensaje de error usan texto de 10 px.

Información de accesibilidad faltante (no verificada en Figma): nombres accesibles para las acciones solo de icono y el botón de envío, etiqueta del campo de instrucción, soporte de teclado (incluidos Ctrl + Space y `@`), anuncio de referencias y errores, y cumplimiento de contraste (incluido el borde degradado).

## Guía de contenido

Observaciones verificadas:

- El texto de ejemplo está en español: "¿Qué quieres construir? Usa @ o Ctrl + Space para referenciar tus datos".
- El aviso y el mensaje de error están en inglés y son fijos; no se exponen como propiedades.
- Los nombres de las etiquetas de referencia se truncan con puntos suspensivos ("01_Resea…").

Recomendaciones:

- Mantén el texto de ejemplo, el aviso y el mensaje de error en el mismo idioma.
- Redacta mensajes de error que indiquen al usuario cómo corregir la instrucción, como en el ejemplo existente.

## Ejemplos

### Compositor por defecto

Configuración: `Type=Normal`, `State=Default`, `Corners=Square`, todas las propiedades booleanas en `true`

Descripción: Compositor con tres etiquetas de referencia y "+6", texto de ejemplo, tres selectores de acción, botón de envío inactivo y aviso.

Evidencia / Clasificación: Variante existente en Figma (`3847:4951`).

### Compositor compacto, listo para enviar

Configuración: `Type=Multiactions`, `State=Filled`, `Corners=Rounded`

Descripción: Etiquetas de referencia sobre un recuadro redondeado de una fila con `+`, texto y botón de envío circular relleno.

Evidencia / Clasificación: Variante existente en Figma (`3907:7771`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: Mostrar acción 1–3 solo afectan a `Type=Normal`.

## Aclaraciones pendientes

1. **Focused vs. On focus.** Existen dos estados relacionados con el foco: `On focus` (cursor, borde degradado) y `Focused` (borde de foco verde de 2 px, sin cursor). Confirma la diferencia prevista para que el equipo de desarrollo asocie cada uno con el disparador correcto.
2. **El borde degradado usa tokens de paleta.** El borde por defecto es un estilo `Gradient` construido con tokens primitivos de paleta (`palette/primary/700` → `palette/secondary/700`) en lugar de tokens semánticos de borde. Confirma si debe definirse un token semántico para el borde de IA.
3. **Idiomas mezclados y textos fijos.** El texto de ejemplo está en español, mientras que el aviso y el mensaje de error están en inglés. Ni el aviso ni el mensaje de error se exponen como propiedades. Confirma el idioma previsto y si estos textos deben ser editables.
4. **Acciones sin definir.** Figma no define qué abren los tres selectores de acción (`database-add`, `clip`, `image`) ni el botón `+` en `Multiactions`, cómo se agregan o quitan referencias, ni cómo se despliega la etiqueta "+6". Además, el nombre `Multiactions` sugiere varias acciones, pero muestra un único `+`. Confirma el comportamiento previsto.
5. **Crecimiento y desbordamiento.** El componente tiene un ancho fijo de 389 px y la fila de referencias recorta el desbordamiento. Confirma si el recuadro crece con instrucciones largas y si el ancho es fijo o fluido.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `3847:4964`) el 2026-10-23. Las instancias anidadas de `Tag`, `Input` e `Icon Button` se identificaron como componentes hijos; sus propias descripciones de Figma no se usaron como evidencia para este componente.

[No hay cambios históricos verificados disponibles]
