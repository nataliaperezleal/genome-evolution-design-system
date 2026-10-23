---
component: "Chat-suggestion-ia"
system: "Genome Evolution Design System"
type: "Sugerencias de IA en forma de chips (compuesto)"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3855-6697"
last_updated: "2026-10-23"
tags:
  - "chat"
  - "ai"
  - "suggestions"
---

# Chat-suggestion-ia

Sistema: Genome Evolution Design System

## Resumen del componente

Fila horizontal de tres sugerencias de IA en forma de chips, con flechas opcionales de anterior y siguiente, disponible en un tratamiento de color `Indigo` y otro `Default`.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Chat-suggestion-ia muestra sugerencias rápidas que el usuario puede elegir en una conversación con IA. La evidencia:

- El nombre del componente ("chat", "suggestion", "ia").
- Cada chip usa un icono `ai-assistant` (destellos).
- Los textos de ejemplo son instrucciones breves de seguimiento, como "Como gráfica" y "Agrega un título".
- Las flechas de anterior y siguiente sugieren que se pueden recorrer más sugerencias.

No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Indigo, Default | Indigo (según Figma MCP) |
| Mostrar anterior (booleana) | true, false | true (según Figma MCP) |
| Mostrar siguiente (booleana) | true, false | true (según Figma MCP) |

Los nombres de las propiedades booleanas se indican tal como los expone Figma MCP (`showBack`, `showNext`); no se verificaron sus nombres exactos en el panel de propiedades de Figma. Los textos de los chips no se exponen como propiedades; se cambian mediante sobrescrituras en las instancias de `Tag` anidadas.

### Configuración por defecto

Figma MCP reporta `Type=Indigo` con ambas flechas visibles. Esto coincide con la primera variante del conjunto (`Type=Indigo`, nodo `3855:6696`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- Cada variante muestra exactamente tres chips de sugerencia entre una flecha de anterior y una de siguiente.
- Los textos de ejemplo de `Indigo` describen formatos de salida: "Como gráfica", "Como tabla con filtros", "En tarjeta con botones".
- Los textos de ejemplo de `Default` describen ajustes: "Añade botones", "Agrega un título", "Agrega un botón de acciones".

Interpretación basada en evidencia:

- Ubica el componente cerca de la conversación o de la entrada de instrucciones para ofrecer siguientes pasos después de una respuesta de la IA.
- Usa `Indigo` para sugerencias destacadas y `Default` para sugerencias neutras. Según los textos de ejemplo, `Indigo` podría estar pensado para formatos de presentación y `Default` para ajustes, pero Figma no documenta esta diferencia.
- Oculta las flechas cuando todas las sugerencias caben o no hay más disponibles.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: El componente ayuda al usuario a continuar la conversación rápidamente, ofreciendo instrucciones listas para usar en lugar de escribirlas.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede seleccionar una sugerencia para enviarla o aplicarla, y recorrer más sugerencias con las flechas.

### Contexto típico

Interpretación basada en evidencia: Experiencias de chat con IA, junto con los mensajes `Chat-ia` y el compositor `Input-ia`. Esta relación no está definida en Figma.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para ofrecer instrucciones breves de seguimiento después de una respuesta de la IA.
- Para sugerir formatos de salida alternativos o ajustes de un resultado generado.
- Cuando hay más sugerencias de las que caben en una fila (con flechas).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Evita sugerencias largas. Los chips son de una sola línea, con texto de 10 px.

## Estructura (Anatomía)

### Composición

```
Chat-suggestion-ia (fila horizontal, espacio de 4 px)
├── arrow-backward (Mostrar anterior)
├── Tag ×3 (chips de sugerencia: icono ai-assistant + texto)
└── arrow-fordward (Mostrar siguiente)
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Flecha anterior | Opcional | Icono `arrow-backward` de 12 px. Se controla con Mostrar anterior. |
| Chip de sugerencia | Requerida (×3) | Instancia de `Tag` anidada: forma de píldora, 20 px de alto, 8 px de relleno horizontal y 4 px vertical, icono `ai-assistant` de 12 px y texto de 10 px (`Text/Body/XXS Strong`). |
| Flecha siguiente | Opcional | Icono `arrow-fordward` de 12 px. Se controla con Mostrar siguiente. |

### Relaciones entre componentes hijos

- `Tag` aporta cada chip de sugerencia. Los chips usan la forma de píldora (`semantic/full`) y el tratamiento de contorno `Indigo` o neutro.

### Lógica de orden

Flecha anterior, luego los chips 1–3 de izquierda a derecha y, por último, la flecha siguiente.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, centrada verticalmente | Auto layout |
| Espacio entre elementos | 4 px (`gap/xxs`), entre todos los elementos | Vinculación de variable |
| Altura | 20 px | Dimensiones de variante |
| Ancho | Se ajusta al contenido: 416 px (`Indigo`), 427 px (`Default`) con los textos de ejemplo | Dimensiones de variante |
| Relleno del chip | 8 px horizontal (`space/8`), 4 px vertical (`space/4`) | Vinculaciones de variables |
| Radio del chip | Completamente redondeado (`semantic/full`) | Vinculación de variable |
| Tamaño de icono | 12 px (flechas e iconos de chip) | Dimensiones de capa |
| Desbordamiento | `Default` recorta el contenido; `Indigo` no | Estilo de capa |

## Semántica

Interpretación basada en evidencia: Cada chip es una instrucción sugerida para la IA. Las flechas indican que el conjunto visible forma parte de una lista más larga. `Type` solo cambia el énfasis visual de los chips.

Elementos HTML, roles ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Anterior | `arrow-backward`, 12 px | Nombre de capa |
| Icono del chip | `ai-assistant` (destellos), 12 px, `icon/indigo` en ambos tipos | Capa, vinculación de variable |
| Siguiente | `arrow-fordward`, 12 px (escrito exactamente como en Figma) | Nombre de capa |

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 2 variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Indigo | Chips con relleno `surface/indigo/subtle`, borde `border/indigo`, texto `text/indigo` e icono `icon/indigo`. | Vinculaciones de variables |
| Default | Chips sin relleno, con borde `border/default`, texto `text/primary` e icono `icon/indigo`. | Vinculaciones de variables |

### Mostrar anterior, Mostrar siguiente

Propiedades booleanas que muestran u ocultan las flechas. Valores por defecto reportados: `true`.

## Estados

[No se encontraron estados documentados]. El conjunto no tiene variantes de hover, presionado, seleccionado ni deshabilitado para los chips o las flechas.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/indigo/subtle` | Relleno del chip, `Indigo` | Vinculación de variable |
| Borde | `border/indigo`, `border/default` | Borde del chip, `Indigo` / `Default` | Vinculaciones de variables |
| Texto | `text/indigo`, `text/primary` | Texto del chip, `Indigo` / `Default` | Vinculaciones de variables |
| Icono | `icon/indigo` | Icono del chip, ambos tipos | Vinculación de variable |
| Icono | `icon/primary` | Flechas | Vinculación de variable |
| Tipografía | `Text/Body/XXS Strong` | Texto del chip (10/14) | Estilo de texto |
| Espaciado | `gap/xxs`, `space/8`, `space/4` | Espacios y relleno del chip | Vinculaciones de variables |
| Radio | `semantic/full` | Forma del chip | Vinculación de variable |

## Interacción

No verificado en Figma: qué ocurre al seleccionar un chip (enviar, insertar en la entrada o aplicar), cómo recorren las flechas las sugerencias, cuántas sugerencias existen en total, el comportamiento de las flechas al inicio o al final de la lista, y la respuesta visual de los chips al pasar el puntero o presionarlos.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Los textos de los chips son visibles, y el icono funciona como apoyo decorativo.
- Las flechas son iconos de 12 px sin contenedor de botón, lo que sugiere un área de interacción pequeña.
- Los textos usan tamaño de 10 px.

Información de accesibilidad faltante (no verificada en Figma): semántica de botón para chips y flechas, nombres accesibles para las flechas, navegación con teclado, estados de foco y cumplimiento de contraste.

## Guía de contenido

Observaciones verificadas:

- Todos los textos de ejemplo están en español y usan frases breves imperativas o descriptivas.
- Los ejemplos de `Default` usan dos verbos para la misma acción ("Añade" y "Agrega").

Recomendaciones:

- Mantén las sugerencias breves (de dos a cinco palabras) y orientadas a la acción.
- Usa un mismo verbo para acciones similares.

## Ejemplos

### Sugerencias de formato

Configuración: `Type=Indigo`, Mostrar anterior `true`, Mostrar siguiente `true`

Descripción: Tres chips índigo ("Como gráfica", "Como tabla con filtros", "En tarjeta con botones") entre las flechas de anterior y siguiente.

Evidencia / Clasificación: Variante existente en Figma (`3855:6696`).

### Sugerencias de ajuste

Configuración: `Type=Default`, Mostrar anterior `true`, Mostrar siguiente `true`

Descripción: Tres chips neutros ("Añade botones", "Agrega un título", "Agrega un botón de acciones") entre flechas.

Evidencia / Clasificación: Variante existente en Figma (`3855:6695`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. **Número de sugerencias y paginación.** El componente siempre muestra tres chips, sin una propiedad para cambiar la cantidad, y las flechas no tienen comportamiento ni estado deshabilitado definidos. Confirma cuántas sugerencias pueden aparecer, cómo las recorren las flechas y cómo se ven las flechas al inicio y al final de la lista.
2. **Significado de Indigo vs. Default.** Los textos de ejemplo sugieren `Indigo` para formatos de salida y `Default` para ajustes, pero no está documentado. Confirma cuándo debe usarse cada tipo.
3. **Áreas de interacción y estados.** Las flechas son iconos de 12 px sin contenedor, y los chips no tienen estados de hover, presionado ni foco. Confirma qué elementos son interactivos y si se necesitan estados.
4. **Ancho y desbordamiento.** La fila se ajusta a su contenido, y solo `Default` recorta el desbordamiento. Confirma si la fila debe tener un ancho fijo o máximo y cómo se manejan los textos más largos.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `3855:6697`) el 2026-10-23. Las instancias de `Tag` anidadas se identificaron como componentes hijos; su propia descripción de Figma no se usó como evidencia para este componente.

[No hay cambios históricos verificados disponibles]
