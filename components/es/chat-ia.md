---
component: "Chat-ia"
system: "Genome Evolution Design System"
type: "Mensaje de conversación con IA"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3853-5941"
last_updated: "2026-10-23"
tags:
  - "chat"
  - "ai"
  - "message"
---

# Chat-ia

Sistema: Genome Evolution Design System

## Resumen del componente

Mensaje de conversación para experiencias de chat con IA. Muestra un mensaje del usuario (`Person`) o una respuesta de la IA (`IA`), con estados de IA para respuesta normal, advertencia, error con reintento e indicador de procesamiento.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Chat-ia es una fila de mensaje dentro de una conversación entre una persona y un asistente de IA. La evidencia:

- La propiedad `User` distingue los mensajes `Person` e `IA`.
- Cada lado tiene su propio avatar: un icono `user` a la derecha para `Person` y un icono `ai-worker` a la izquierda para `IA`.
- La forma de las burbujas cambia: cada una tiene una esquina recta del lado del avatar.
- El contenido de ejemplo: una instrucción del usuario y una respuesta de la IA con una pregunta de seguimiento.
- Los estados propios de la IA: una advertencia de cuota de tokens, un error de generación con `Retry` y "Procesando tu solicitud...".

No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| User | Person, IA | Person (según Figma MCP) |
| State | Default, Warning, Charging, Error | Default (según Figma MCP) |
| Mostrar etiquetas (booleana) | true, false | false (según Figma MCP); solo `Person` |
| Mostrar recomendación (booleana) | true, false | true (según Figma MCP); solo `Person` |
| Mostrar título (booleana) | true, false | false (según Figma MCP); solo `IA` + `Default` |
| Mostrar check (booleana) | true, false | true (según Figma MCP); solo se muestra con el título |
| Mostrar botón (booleana) | true, false | false (según Figma MCP); solo `IA` + `Default` |
| Mostrar acciones (booleana) | true, false | true (según Figma MCP); solo `IA` + `Default` |

Los nombres de las propiedades booleanas se indican tal como los expone Figma MCP (`showTags`, `showRecommendation`, `showTitle`, `showCheck`, `showButton`, `showActions`); no se verificaron sus nombres exactos en el panel de propiedades de Figma. Los textos de los mensajes no se exponen como propiedades de texto.

### Configuración por defecto

Figma MCP reporta `User=Person`, `State=Default`. Esto coincide con la primera variante del conjunto (nodo `3853:5940`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- `Person` solo tiene el estado `Default`. `Warning`, `Charging` y `Error` solo existen para `IA`.
- Todas las variantes miden 336 px de ancho.
- Los mensajes `Person` ubican el avatar a la derecha; los mensajes `IA`, a la izquierda.
- El mensaje `IA` + `Default` puede mostrar un título con icono de check, el texto de la respuesta, una línea con versión y fecha, un botón `Select` y acciones de valoración (me gusta, no me gusta, guardar).

Interpretación basada en evidencia: Apila instancias de Chat-ia verticalmente para construir una conversación, alternando mensajes `Person` e `IA`. Usa `IA` + `Charging` mientras se genera una respuesta y reemplázalo luego por `IA` + `Default`, `Warning` o `Error`.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Chat-ia da a las conversaciones con IA un formato de mensaje consistente que separa las instrucciones del usuario de las respuestas de la IA y comunica el procesamiento, los límites y los fallos.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede seguir la conversación, distinguir sus mensajes de las respuestas de la IA, valorar o guardar respuestas, actuar sobre una propuesta (`Select`) y recuperarse de errores (`Retry`).

### Contexto típico

Interpretación basada en evidencia: Chats de asistentes o constructores con IA, probablemente junto a una entrada de instrucciones como `Input-ia`. Esta combinación no está definida en Figma.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- `Person`, para mostrar una instrucción enviada por el usuario, opcionalmente con documentos adjuntos (Mostrar etiquetas) y una etiqueta de contexto (Mostrar recomendación).
- `IA` + `Default`, para mostrar una respuesta de la IA.
- `IA` + `Charging`, mientras la IA procesa una solicitud.
- `IA` + `Warning`, cuando un límite de uso impide responder (por ejemplo, cuota de tokens superada).
- `IA` + `Error`, cuando una respuesta falla y se puede reintentar.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para notificaciones del sistema fuera de una conversación, usa componentes de alerta o snackbar.

## Estructura (Anatomía)

### Composición

```
Chat-ia (336 px)
├── [Person] Fila de etiquetas de documento (Mostrar etiquetas): 3 instancias de Tag de archivo + chevron-down
├── [Person] bubble-simple
│   ├── Burbuja de mensaje: Tag de contexto (Mostrar recomendación) + texto de la instrucción
│   └── Avatar: Icon Button (icono user), a la derecha
└── [IA]
    ├── Avatar: Icon Button (icono ai-worker), a la izquierda
    └── Burbuja de mensaje (Default / Warning / Error) o texto de procesamiento (Charging)
        ├── [Default] Encabezado: título + circle-check (Mostrar título, Mostrar check)
        ├── [Default] Texto de respuesta + "Versión 1 · 14 jul, 10:30"
        ├── [Default] Botón Select (Mostrar botón)
        ├── [Default] Acciones de valoración: like, unlike, bookmark (Mostrar acciones)
        ├── [Warning / Error] icono warning + mensaje
        └── [Error] Botón Retry
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Avatar | Requerida | Instancia de `Icon Button` redonda de 32 px. `Person`: icono `user`, `surface/indigo/subtle` con `border/indigo`. `IA`: icono `ai-worker`, `surface/evergreen/subtle` con `border/evergreen`. |
| Burbuja de mensaje | Requerida (excepto `Charging`) | Relleno de 16 px, espacio de 16 px, esquinas redondeadas de 16 px con una esquina recta del lado del avatar y sombra `shadow-xs`. |
| Etiquetas de documento | Opcional, `Person` | Fila de tres instancias de `Tag` de archivo ("Docum…") y un `chevron-down` de 16 px, sobre la burbuja. Mide 296 px de ancho y recorta el desbordamiento. |
| Etiqueta de contexto | Opcional, `Person` | `Tag` de estilo informativo ("Vistas: Ventas") en la parte superior de la burbuja. |
| Título | Opcional, `IA` + `Default` | Título seminegrita de 16 px en `text/indigo` ("Title - component name"), con un icono `circle-check` opcional de 16 px. |
| Texto del mensaje | Requerida | Texto 14/20 (`Text/Body/SM`) en `text/primary`. |
| Metadatos | `IA` + `Default` | "Versión 1 · 14 jul, 10:30" en texto de 10 px. |
| Botón Select | Opcional, `IA` + `Default` | `Button` de 32 px con relleno `surface/indigo/bold` y etiqueta "Select" en `text/inverse`. |
| Acciones de valoración | Opcional, `IA` + `Default` | Iconos `like`, `unlike` y `bookmark` de 16 px, separados 12 px y alineados a la derecha. |
| Icono de estado | `Warning` / `Error` | Icono `warning` de 16 px. |
| Botón Retry | `Error` | `Button` en forma de píldora de 24 px con `surface/danger/subtle`, `border/danger` y etiqueta "Retry" en `text/danger`. |
| Texto de procesamiento | `Charging` | "Procesando tu solicitud..." en texto de 12 px `text/secondary`, junto al avatar y sin burbuja. |

### Lógica de orden

- `Person`: etiquetas de documento opcionales arriba; luego la burbuja a la izquierda y el avatar a la derecha.
- `IA`: avatar a la izquierda; luego la burbuja. Dentro de la burbuja `Default`: título, respuesta, metadatos, botón `Select` y acciones de valoración.
- `Error`: primero el mensaje y, debajo, el botón `Retry` alineado a la derecha.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 336 px (todas las variantes) | Dimensiones de variante |
| Espacio entre avatar y burbuja | 8 px | Auto layout |
| Relleno de la burbuja | 16 px (`space/16`) | Vinculación de variable |
| Espacio dentro de la burbuja | 16 px (`gap/lg`) | Vinculación de variable |
| Radio de la burbuja | 16 px, excepto la esquina junto al avatar (superior derecha en `Person`, superior izquierda en `IA`) | Estilo de capa |
| Altura de la burbuja de Person | 308 px, fija | Dimensiones de capa |
| Avatar | 32 × 32 px (icono de 16 px + 8 px de relleno) | Dimensiones de capa |
| Alturas | Person 308, IA Default 346, Warning 73, Charging 32, Error 112 px | Dimensiones de variante |

## Semántica

Interpretación basada en evidencia:

- `Person` = mensaje del usuario; `IA` = mensaje de la IA.
- `Warning` = la IA no puede responder por un límite, con hora de restablecimiento.
- `Error` = la generación de la respuesta falló y se puede reintentar.
- `Charging` = la solicitud se está procesando.
- El `circle-check` junto al título sugiere un resultado completado o validado. La línea de versión sugiere que las respuestas pueden tener varias versiones.

Elementos HTML, regiones ARIA live y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Avatar de Person | `user`, 16 px, `icon/indigo` | Capa, vinculación de variable |
| Avatar de IA | `ai-worker`, 16 px, `icon/evergreen` | Capa, vinculación de variable |
| Check del título | `circle-check`, 16 px | Capa |
| Valoración | `like`, `unlike`, `bookmark`, 16 px, `icon/primary` | Capas |
| Warning / Error | `warning`, 16 px, `icon/warning` / `icon/danger` | Capas, vinculaciones de variables |
| Etiquetas de documento | Icono `file` en cada etiqueta; `chevron-down` al final de la fila | Instancias de Tag anidadas |

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 5 variantes.

### User

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Person | Mensaje del usuario; avatar a la derecha; burbuja `surface/subtlest`. Solo `State=Default`. | Disposición de la variante, vinculaciones de variables |
| IA | Mensaje de la IA; avatar a la izquierda; burbuja `background/canvas`. Los cuatro estados. | Disposición de la variante, vinculaciones de variables |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Mensaje normal. En `IA`: burbuja con `border/default` y el contenido de la respuesta. | Vinculaciones de variables |
| Warning | Solo `IA`. Burbuja con `border/warning`, icono de advertencia, "AI token quota exceeded" y "Resets in 23:59:34." (en negrita). | Vinculaciones de variables, texto de capa |
| Charging | Solo `IA`. Avatar con "Procesando tu solicitud..." en `text/secondary`; sin burbuja. | Disposición de la variante |
| Error | Solo `IA`. Burbuja con `border/danger`, icono de advertencia en color de peligro, "We could not generate a response. Please try again." y botón `Retry`. | Vinculaciones de variables, texto de capa |

### Propiedades booleanas

- Mostrar etiquetas: etiquetas de documento sobre la burbuja de `Person`. Valor por defecto reportado: `false`.
- Mostrar recomendación: etiqueta de contexto dentro de la burbuja de `Person`. Valor por defecto reportado: `true`.
- Mostrar título / Mostrar check: título e icono de check en la respuesta de `IA`. Valores por defecto reportados: `false` / `true`.
- Mostrar botón: botón `Select` en la respuesta de `IA`. Valor por defecto reportado: `false`.
- Mostrar acciones: acciones de valoración en la respuesta de `IA`. Valor por defecto reportado: `true`.

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Mensaje visible | Burbuja neutra | Vinculaciones de variables |
| Charging | Procesando | Avatar con texto secundario de procesamiento | Disposición de la variante |
| Warning | Límite alcanzado | Borde e icono de advertencia | Vinculaciones de variables |
| Error | Fallo | Borde e icono de peligro y botón Retry | Vinculaciones de variables |

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma, salvo donde se indica.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/subtlest` | Burbuja de Person | Vinculación de variable |
| Fondo | `background/canvas` | Burbuja de IA | Vinculación de variable |
| Superficie | `surface/indigo/subtle`, `surface/evergreen/subtle` | Relleno del avatar de Person / IA | Vinculaciones de variables |
| Superficie | `surface/indigo/bold` | Relleno del botón Select | Vinculación de variable |
| Superficie | `surface/danger/subtle`, `surface/info/subtle` | Botón Retry; etiqueta de contexto | Vinculaciones de variables |
| Borde | `border/default`, `border/warning`, `border/danger` | Borde de la burbuja según el estado | Vinculaciones de variables |
| Borde | `border/indigo`, `border/evergreen`, `border/info` | Avatares; etiqueta de contexto | Vinculaciones de variables |
| Texto | `text/primary`, `text/secondary`, `text/indigo`, `text/inverse`, `text/danger`, `text/info` | Mensaje, texto de procesamiento, título, etiqueta Select, etiqueta Retry, etiqueta de contexto | Vinculaciones de variables |
| Icono | `icon/indigo`, `icon/evergreen`, `icon/primary`, `icon/warning`, `icon/danger` | Iconos | Vinculaciones de variables |
| Efecto | `shadow-xs` | Sombra de la burbuja | Estilo de efecto |
| Tipografía | `Text/Body/SM`, `Text/Body/XS`, `Text/Body/XXS`, `Text/Button/SM` | Mensaje; texto de procesamiento; metadatos; textos de etiquetas y botones | Estilos de texto |
| Espaciado | `space/16`, `space/12`, `space/8`, `space/4`, `gap/lg`, `gap/sm`, `gap/xxs` | Relleno y espacios | Vinculaciones de variables |
| Radio | `semantic/full`, `semantic/pill`, `semantic/sm` | Avatar y etiquetas; botón Retry; botón Select | Vinculaciones de variables |

Sin vinculación a variables: el radio de 16 px de la burbuja, el radio del avatar de IA, el espacio de 12 px entre acciones de valoración y la configuración tipográfica del mensaje de `Warning`.

## Interacción

No verificado en Figma: qué hacen me gusta, no me gusta y guardar; qué hace `Select`; el comportamiento de `Retry`; cómo se despliegan las etiquetas de documento (`chevron-down`); la animación de procesamiento; y la transmisión progresiva (streaming) de mensajes.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Los mensajes de la persona y de la IA se diferencian por el icono del avatar, el lado, el color de la burbuja y la forma de las esquinas, no solo por el color.
- `Warning` y `Error` combinan un icono, un borde de color y un mensaje de texto.
- Las acciones de valoración son solo de icono.
- Los metadatos usan texto de 10 px.

Información de accesibilidad faltante (no verificada en Figma): nombres accesibles para los avatares y las acciones de valoración, anuncio de mensajes nuevos y del estado de procesamiento (por ejemplo, regiones live), acceso con teclado a las acciones y cumplimiento de contraste.

## Guía de contenido

Observaciones verificadas:

- El contenido mezcla idiomas: "Procesando tu solicitud...", "Versión 1 · 14 jul, 10:30" y "Vistas: Ventas" están en español, mientras que la advertencia, el error, `Retry`, `Select` y los mensajes de ejemplo están en inglés.
- Todos los textos de los mensajes son texto fijo en la capa.

Recomendaciones:

- Usa un mismo idioma en todos los mensajes y etiquetas.
- Mantén los mensajes de advertencia y error breves y orientados a la acción, como en los ejemplos existentes.

## Ejemplos

### Instrucción del usuario

Configuración: `User=Person`, `State=Default`, Mostrar recomendación `true`

Descripción: Burbuja gris con la etiqueta de contexto "Vistas: Ventas" y el texto de la instrucción, con el avatar del usuario a la derecha.

Evidencia / Clasificación: Variante existente en Figma (`3853:5940`).

### Error de la IA

Configuración: `User=IA`, `State=Error`

Descripción: Avatar de la IA con una burbuja de borde rojo, un mensaje de error y un botón `Retry`.

Evidencia / Clasificación: Variante existente en Figma (`3924:4599`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: El conjunto no contiene variantes de `Person` para `Warning`, `Charging` ni `Error`.

## Aclaraciones pendientes

1. **El texto de los mensajes no se edita mediante propiedades.** Todos los textos (instrucción, respuesta, título, metadatos, advertencia, error y procesamiento) son texto fijo en la capa, sin propiedades de texto. Confirma si deben agregarse propiedades de texto.
2. **Altura fija en los mensajes de Person.** La burbuja de `Person` tiene una altura fija de 308 px, por lo que no se adapta a instrucciones más cortas o más largas. Confirma el comportamiento de crecimiento previsto para ambos tipos de mensaje.
3. **Nombre del estado.** `Charging` parece significar carga o procesamiento. Confirma si debe renombrarse (por ejemplo, `Loading`) y si se espera una animación o un estado de transmisión progresiva.
4. **Idiomas mezclados.** El componente combina textos en español e inglés. Confirma el idioma previsto.
5. **Valores sin vincular.** El mensaje de `Warning` usa valores tipográficos directos en lugar de estilos de texto, y los radios de la burbuja y del avatar de IA no están vinculados a tokens, mientras que el avatar de Person usa `semantic/full`. Confirma que deben convertirse en tokens.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `3853:5941`) el 2026-10-23. Las instancias anidadas de `Tag`, `Icon Button` y `Button` se identificaron como componentes hijos; sus propias descripciones de Figma no se usaron como evidencia para este componente.

[No hay cambios históricos verificados disponibles]
