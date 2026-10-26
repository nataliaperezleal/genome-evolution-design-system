---
component: "Suggestion-ia"
system: "Genome Evolution Design System"
type: "Elemento de sugerencia de IA"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3859-6817"
last_updated: "2026-10-23"
tags:
  - "ai"
  - "suggestion"
  - "card"
---

# Suggestion-ia

Sistema: Genome Evolution Design System

## Resumen del componente

Elemento individual de sugerencia de IA, disponible como sugerencia compacta de una línea (`Simple`) o como tarjeta con icono, título y descripción (`Complete`).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Suggestion-ia presenta un elemento que la IA propone al usuario. La evidencia:

- El nombre del componente.
- El ejemplo `Simple`, que combina una etiqueta de contexto ("Vistas: Ventas") con una instrucción ("como gráfica de barras").
- El ejemplo `Complete`, que describe un resultado sugerido ("1. Sales dashboard", "1,248 records matching schema") con un icono de gráfica.

No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Simple, Complete | Simple (según Figma MCP) |
| Text (texto) | Texto libre | "como gráfica de barras" (según Figma MCP); solo `Simple` |
| Title (texto) | Texto libre | "1. Sales dashboard" (según Figma MCP); solo `Complete` |
| Description (texto) | Texto libre | "1,248 records matching schema" (según Figma MCP); solo `Complete` |
| Icono (intercambio de instancia) | Cualquier instancia de icono | `chart-lines` (según Figma MCP); solo `Complete` |

Los nombres de las propiedades de texto y de intercambio de instancia se indican tal como los expone Figma MCP (`text`, `title`, `description`, `instance`); no se verificaron sus nombres exactos en el panel de propiedades de Figma. El texto de la etiqueta de contexto en `Simple` ("Vistas: Ventas") no se expone como propiedad.

### Configuración por defecto

Figma MCP reporta `Type=Simple`. Esto coincide con la primera variante del conjunto (`Type=Simple`, nodo `3859:6816`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- `Simple` (320 × 36 px) muestra una etiqueta `Tag` informativa seguida de una línea de texto.
- `Complete` (268 × 56 px) muestra un contenedor de icono de 32 px, un título en seminegrita y una descripción secundaria.
- El título de ejemplo de `Complete` empieza con un número ("1."), lo que sugiere que las tarjetas aparecen en una lista numerada.

Interpretación basada en evidencia:

- Usa `Simple` para proponer una instrucción aplicada a un contexto, por ejemplo una vista mostrada en un formato determinado.
- Usa `Complete` para proponer un resultado concreto, como un tablero o un conjunto de datos, con un resumen breve.
- Apila varios elementos verticalmente para ofrecer una lista de sugerencias. Figma no define un contenedor de lista.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Suggestion-ia permite que la IA presente opciones que el usuario puede reconocer y elegir rápidamente, sin escribir una instrucción completa.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede revisar el contexto y la intención de una sugerencia (`Simple`) o su resultado y resumen (`Complete`), y luego elegirla.

### Contexto típico

Interpretación basada en evidencia: Flujos de asistentes y constructores con IA, junto con `Chat-ia`, `Chat-suggestion-ia` e `Input-ia`. La etiqueta de contexto de `Simple` ("Vistas: Ventas") también aparece en el mensaje `Person` de `Chat-ia`, lo que sugiere que una sugerencia seleccionada puede pasar a formar parte de una instrucción. Esta relación no está definida en Figma.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- `Simple`, para sugerir una instrucción breve ligada a un contexto (vista, entidad o conjunto de datos).
- `Complete`, para sugerir un resultado que necesita un título y una descripción breve.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para chips de seguimiento rápido en una sola fila, usa `Chat-suggestion-ia`.

## Estructura (Anatomía)

### Composición

```
Suggestion-ia
├── [Simple] Contenedor (320 px, una fila)
│   ├── Tag — contexto (Information, píldora, "Vistas: Ventas")
│   └── Texto — instrucción (propiedad Text)
└── [Complete] Contenedor (268 px, tarjeta)
    ├── card-icon-container (32 px, evergreen) — Icono (intercambio de instancia)
    └── card-text-container
        ├── Título (propiedad Title)
        └── Descripción (propiedad Description)
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Contenedor | Requerida | Relleno `background/canvas` con borde `border/subtle` de 1 px. |
| Etiqueta de contexto | Requerida (`Simple`) | Instancia de `Tag` anidada: estilo informativo (`surface/info/subtle`, `border/info`, `text/info`), forma de píldora, 20 px de alto, texto de 12 px (`Text/Button/SM`). |
| Texto de instrucción | Requerida (`Simple`) | Texto de 12 px `Text/Body/XS`, `text/primary`, en una sola línea. |
| Contenedor de icono | Requerida (`Complete`) | 32 × 32 px, `surface/evergreen/subtle`, radio de 8 px, con un icono de 16 px en `icon/evergreen`. |
| Título | Requerida (`Complete`) | Texto de 12 px `Text/Body/XS Strong`, `text/primary`. |
| Descripción | Requerida (`Complete`) | Texto de 10 px `Text/Body/XXS`, `text/tertiary`. |

### Relaciones entre componentes hijos

- `Tag` aporta la etiqueta de contexto en `Simple`, con su tratamiento de color informativo.
- El icono de `Complete` es una instancia de icono intercambiable (por defecto `chart-lines`).

### Lógica de orden

- `Simple`: primero la etiqueta de contexto y luego la instrucción, que se leen como una sola frase ("Vistas: Ventas" + "como gráfica de barras").
- `Complete`: icono a la izquierda y, a continuación, título sobre descripción.
- La numeración del título de `Complete` ("1.") forma parte del texto; el componente no la genera.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 320 px (`Simple`), 268 px (`Complete`), fijo | Dimensiones de variante |
| Altura | 36 px (`Simple`), 56 px (`Complete`) | Dimensiones de variante |
| Relleno | 8 px (`Simple`); 12 px, sin vincular (`Complete`) | Estilo de capa |
| Espacio entre elementos | 8 px (`Simple`); 12 px entre icono y texto y 2 px entre título y descripción (`Complete`), sin vincular | Estilo de capa |
| Radio de esquina | 8 px, `semantic/md` (`Simple`); 10 px, sin vincular (`Complete`) | Vinculación de variable, estilo de capa |
| Desbordamiento | `Simple` recorta el contenido y su texto no se ajusta a varias líneas | Estilo de capa |

## Semántica

Interpretación basada en evidencia: Cada instancia representa una sugerencia de IA seleccionable. En `Simple`, la etiqueta nombra el contexto y el texto nombra la transformación solicitada. En `Complete`, el título nombra el resultado propuesto y la descripción lo resume.

Elementos HTML, roles ARIA y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono (`Complete`) | `chart-lines`, 16 px, `icon/evergreen`, intercambiable | Capa, vinculación de variable, propiedad de intercambio de instancia |

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 2 variantes.

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Simple | Etiqueta de contexto más una línea de texto; 320 × 36 px. | Disposición de la variante |
| Complete | Tarjeta con icono, título y descripción; 268 × 56 px. | Disposición de la variante |

### Text, Title, Description, Icono

- Text: instrucción en `Simple`.
- Title y Description: contenido de la tarjeta en `Complete`.
- Icono: icono de la tarjeta en `Complete`, por defecto `chart-lines`.

## Estados

[No se encontraron estados documentados]. El conjunto no tiene variantes de hover, seleccionado, foco ni deshabilitado.

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno del contenedor | Vinculación de variable |
| Borde | `border/subtle` | Borde del contenedor | Vinculación de variable |
| Superficie | `surface/info/subtle` + `border/info` + `text/info` | Etiqueta de contexto | Vinculaciones de variables |
| Superficie | `surface/evergreen/subtle` | Contenedor de icono | Vinculación de variable |
| Icono | `icon/evergreen` | Icono de la tarjeta | Vinculación de variable |
| Texto | `text/primary`, `text/tertiary` | Instrucción y título; descripción | Vinculaciones de variables |
| Tipografía | `Text/Body/XS`, `Text/Body/XS Strong`, `Text/Body/XXS`, `Text/Button/SM` | Instrucción; título; descripción; texto de la etiqueta | Estilos de texto |
| Espaciado | `space/8`, `space/4`, `gap/xxs` | Relleno y espacio de la etiqueta | Vinculaciones de variables |
| Radio | `semantic/md`, `semantic/full` | Contenedor `Simple`; etiqueta | Vinculaciones de variables |

Sin vinculación a variables: el radio del contenedor `Complete` (10 px), su relleno y espacio (12 px), el radio del contenedor de icono (8 px), y el espacio y relleno del contenedor `Simple` (8 px).

## Interacción

No hay estados interactivos ni interacciones de prototipo.

No verificado en Figma: qué ocurre al seleccionar una sugerencia, la respuesta visual de hover y selección, la navegación con teclado por una lista de sugerencias y dónde aparece la lista.

## Comportamiento de desbordamiento

Observaciones verificadas: Ambos tipos tienen ancho fijo. `Simple` recorta el contenido y su texto de instrucción no se ajusta a varias líneas. El título y la descripción de `Complete` ocupan el ancho restante.

No verificado en Figma: truncado (por ejemplo, con puntos suspensivos), ajuste de línea en `Complete` y comportamiento con etiquetas de contexto largas.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- La descripción de `Complete` usa texto de 10 px en `text/tertiary`.
- El contexto de `Simple` se comunica tanto con el color de la etiqueta como con su texto.

Información de accesibilidad faltante (no verificada en Figma): semántica de botón u opción, estados de foco, selección con teclado, nombres accesibles y cumplimiento de contraste.

## Guía de contenido

Observaciones verificadas:

- El contenido de `Simple` está en español ("Vistas: Ventas", "como gráfica de barras"); el de `Complete` está en inglés ("1. Sales dashboard", "1,248 records matching schema").
- La instrucción de `Simple` empieza en minúscula para leerse como continuación de la etiqueta.

Recomendaciones:

- Redacta las instrucciones de `Simple` como una frase breve que complete la etiqueta de contexto.
- Mantén breves los títulos de `Complete` y las descripciones en una sola línea.

## Ejemplos

### Sugerencia simple

Configuración: `Type=Simple`

Descripción: Etiqueta "Vistas: Ventas" seguida de "como gráfica de barras".

Evidencia / Clasificación: Variante existente en Figma (`3859:6816`).

### Sugerencia completa

Configuración: `Type=Complete`

Descripción: Icono de gráfica en evergreen, título "1. Sales dashboard" y descripción "1,248 records matching schema".

Evidencia / Clasificación: Variante existente en Figma (`3859:6815`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: Text solo aplica a `Simple`; Title, Description e Icono solo aplican a `Complete`.

## Aclaraciones pendientes

1. **Dónde aparecen las sugerencias y cómo se seleccionan.** Figma no muestra dónde se usa Suggestion-ia (por ejemplo, como resultados de `@` / Ctrl + Space en `Input-ia` o dentro de la conversación), qué ocurre al seleccionar un elemento ni cómo se agrupan los elementos en una lista. Confirma el contexto y el comportamiento de selección previstos.
2. **Estados ausentes.** No hay estados de hover, seleccionado, foco ni deshabilitado, aunque los elementos parecen seleccionables. Confirma si se necesitan estados.
3. **El texto de la etiqueta de contexto no es editable.** La etiqueta de contexto de `Simple` ("Vistas: Ventas") no se puede cambiar ni ocultar mediante propiedades. Confirma si debe agregarse una propiedad.
4. **Estilos inconsistentes y sin vincular entre tipos.** `Simple` usa un radio de 8 px con token, mientras que `Complete` usa valores sin vincular (radio de 10 px, relleno y espacio de 12 px, radio de 8 px en el contenedor de icono). Además, los dos tipos tienen anchos fijos distintos (320 px y 268 px). Confirma los tokens y el comportamiento de ancho previstos.
5. **Idiomas mezclados.** El contenido de ejemplo de `Simple` está en español y el de `Complete` en inglés. Confirma el idioma previsto.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `3859:6817`) el 2026-10-23. La instancia de `Tag` anidada se identificó como componente hijo; su propia descripción de Figma no se usó como evidencia para este componente.

[No hay cambios históricos verificados disponibles]
