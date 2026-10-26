---
component: "Snackbar"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2255-980"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "notification"
  - "toast"
---

# Snackbar

Sistema: Genome Evolution Design System

## Resumen del componente

Snackbar es una barra de mensaje con fondo tintado que tiene un ícono de estado, un mensaje, un botón de acción opcional, un ícono de cierre y una barra de color opcional en la parte inferior, en los tipos Danger, Warning, Information y Success.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un mensaje breve de retroalimentación, a menudo llamado toast, que informa el resultado o el estado de una acción. El component set (nodo de Figma `2255:980`) combina una superficie con el color del estado, un ícono de estado, un mensaje con el color del estado, un Button anidado, un ícono de cierre y una barra de 8px en el borde inferior. El mensaje por defecto "Single-line toast bar" hace referencia a un toast. En Figma no hay una descripción escrita definida para Snackbar.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Danger, Warning, Information, Success | Danger (ver Aclaraciones pendientes) |
| label | Texto | "Single-line toast bar" |
| showButton | true, false | true |
| showBar | true, false | true |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Type=Danger`, `label="Single-line toast bar"`, `showButton=true` y `showBar=true`. Esto corresponde a la variante `2255:1014`, la variante superior izquierda del component set. No está documentado si Danger es un valor por defecto intencional o una consecuencia de la ubicación de las variantes.

### Uso típico

Observaciones verificadas:

- Todos los tipos muestran un ícono de estado, el mensaje y un ícono de cierre; el botón de acción y la barra inferior son opcionales.
- El snackbar mide 430px de ancho en las variantes inspeccionadas, con un ancho mínimo de 328px y un máximo de 912px.
- El mensaje puede hacer salto de línea; tiene un ancho mínimo de 162px y un máximo de 746px.
- La barra inferior está rellena con el color intenso del tipo hasta 80px antes del borde derecho.

Interpretación basada en evidencia:

- Usa Snackbar para confirmar el resultado de una acción (`Success`), informar un fallo (`Danger`), advertir sobre una condición (`Warning`) o dar información neutral (`Information`).
- La barra inferior sugiere un temporizador que muestra cuánto tiempo permanece visible el snackbar antes de descartarse automáticamente.
- Usa el botón de acción para una acción rápida de seguimiento, como "Deshacer" o "Reintentar".

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan retroalimentación breve y oportuna sobre sus acciones sin interrumpir su trabajo.

### Resultado esperado

Interpretación basada en evidencia: el usuario nota el mensaje, entiende su estado por el color y el ícono, y opcionalmente ejecuta la acción relacionada o lo descarta.

### Contexto típico

Interpretación basada en evidencia: retroalimentación después de guardar, eliminar, enviar u otras acciones, normalmente mostrada de forma temporal sobre la interfaz.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los valores de `Type` y de la estructura:

- `Success`: para confirmar que una acción se completó.
- `Danger`: para informar que una acción falló.
- `Warning`: para advertir sobre una condición que puede requerir atención.
- `Information`: para dar información breve y neutral.
- Cuando el mensaje debe ser breve y temporal.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Snackbar. Solo como recomendaciones:

- Para mensajes que deben permanecer visibles junto al contenido relacionado, considera Inline Alert.
- Evita mensajes largos; Snackbar muestra un solo mensaje sin título.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Contenedor redondeado (8px) y recortado. |
| Contenido | Obligatoria | Fila tintada según el tipo, con padding. |
| Ícono de estado | Obligatoria | Ícono de 24px: `circle-close` (Danger), `warning` (Warning), `info` (Information), `check` (Success). |
| Mensaje | Obligatoria | Texto del mensaje con el color de texto del tipo. Texto por defecto: "Single-line toast bar". |
| Button | Opcional (`showButton`) | Instancia anidada de Button (24px de alto, etiqueta "Button" de 12px), con el estilo del tipo. |
| Ícono de cierre | Obligatoria | Ícono `close` de 16px, ubicado a 16px de los bordes superior y derecho. No se expone una propiedad de visibilidad. |
| Barra | Opcional (`showBar`) | Barra de 8px de alto en la parte inferior: una pista sutil con un relleno de color intenso. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 430px (variantes inspeccionadas); mínimo 328px, máximo 912px | Medición directa |
| Alto | 64px (56px de contenido + 8px de barra) | Medición directa |
| Radio | 8px | `semantic/md` |
| Padding del contenedor | 0px | `space/0` |
| Padding del contenido | 16px izquierda, 48px derecha, 16px arriba y abajo | `space/16`, `size/48` |
| Espacio del contenido | 16px | `gap/lg` |
| Espacio entre ícono, mensaje y botón | 16px | Medición directa |
| Ícono de estado | 24 × 24px | Medición directa |
| Ancho del mensaje | Mínimo 162px, máximo 746px; ocupa el espacio disponible | Medición directa |
| Ícono de cierre | 16 × 16px; a 16px de arriba y de la derecha | Medición directa |
| Barra | 8px de alto; el relleno termina 80px antes del borde derecho; relleno completamente redondeado | Medición directa; `semantic/full` |
| Button anidado | 24px de alto; padding de 12px × 4px; radio de 4px; borde de 1px | `space/12`, `space/4`, `semantic/sm`, `width/1` |

## Semántica

Interpretación basada en evidencia:

- `Type` comunica el estado del mensaje: `Danger` (error o fallo), `Warning` (precaución), `Information` (neutral) y `Success` (confirmación). Cada tipo usa su propio ícono y sus propias variables de color `surface`, `border`, `text` e `icon`.
- El botón representa una acción rápida de seguimiento; el ícono de cierre representa el descarte.
- La barra probablemente representa el tiempo de visualización restante.

No verificado en Figma: live region o roles `status`/`alert`, comportamiento de los anuncios y temporización.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono de estado — Danger | `circle-close`, 24px | Capas de Figma; `icon/danger` |
| Ícono de estado — Warning | `warning`, 24px | Capas de Figma; `icon/warning` |
| Ícono de estado — Information | `info`, 24px | Capas de Figma; `icon/info` |
| Ícono de estado — Success | `check`, 24px | Capas de Figma; `icon/success` |
| Cerrar | `close`, 16px | Capas de Figma |

Los íconos son fijos para cada tipo y no se exponen como propiedades de instance swap.

## Variantes (propiedades)

El inventario de variantes es completo: 4 variantes. Se inspeccionaron todas las variantes. Los nombres de las propiedades booleanas y de texto se listan tal como los expone el MCP de Figma.

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Danger | Snackbar rojo con ícono `circle-close`. | Valor por defecto; `surface/danger/subtle`, `text/danger`, `border/danger`, `surface/danger/bold` |
| Warning | Snackbar amarillo con ícono `warning`. | `surface/warning/subtle`, `text/warning`, `border/warning`, `surface/warning/bold` |
| Information | Snackbar azul con ícono `info`. | `surface/info/subtle`, `text/info`, `border/info`, `surface/info/bold` |
| Success | Snackbar verde con ícono `check`. | `surface/success/subtle`, `text/success`, `border/success`, `surface/success/bold` |

### label

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Texto | Contenido del mensaje. | Valor por defecto: "Single-line toast bar" |

### showButton

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra el Button de acción anidado después del mensaje. | Valor por defecto |
| false | Oculta el Button de acción. | Propiedad booleana |

### showBar

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra la barra de 8px en la parte inferior. | Valor por defecto |
| false | Oculta la barra. | Propiedad booleana |

La etiqueta del Button anidado ("Button") no se expone como propiedad de Snackbar.

## Estados

Snackbar no tiene variantes de estado. El Button anidado define sus propios estados en el component set de Button.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/danger/subtle`, `surface/warning/subtle`, `surface/info/subtle`, `surface/success/subtle` | Fondo del contenido, pista de la barra, fondo del Button | Variables de Figma |
| Color — superficie | `surface/danger/bold`, `surface/warning/bold`, `surface/info/bold`, `surface/success/bold` | Relleno de la barra | Variables de Figma |
| Color — texto | `text/danger`, `text/warning`, `text/info`, `text/success` | Mensaje y etiqueta del Button | Variables de Figma |
| Color — borde | `border/danger`, `border/warning`, `border/info`, `border/success` | Borde del Button | Variables de Figma |
| Color — ícono | `icon/danger`, `icon/warning`, `icon/info`, `icon/success` | Íconos de estado y de cierre | Variables de Figma |
| Color | `Color/Background/Alpha/Default` | Parte vacía transparente de la barra (Information) | Variables de Figma |
| Espaciado | `space/16`, `space/12`, `space/4`, `space/0`, `size/48` | Padding | Variables de Figma |
| Espaciado | `gap/lg`, `gap/sm` | Espacios | Variables de Figma |
| Radio | `semantic/md`, `semantic/sm`, `semantic/full` | Contenedor, Button, relleno de la barra | Variables de Figma |
| Ancho de borde | `width/1` | Borde del Button | Variables de Figma |
| Tipografía | `Text/Body/MD` | Mensaje (16/20) | Estilo de texto de Figma |
| Tipografía | `Text/Button/SM` | Etiqueta del Button (12/16) | Estilo de texto de Figma |

Sin vincular a tokens: el espacio de 16px entre ícono, mensaje y botón; la parte vacía de 80px de la barra; y el desplazamiento de 16px del ícono de cierre. El padding derecho del contenido usa `size/48`, una variable de tamaño, en lugar de una variable de espaciado.

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Elementos observados: el Button anidado y el ícono de cierre.
- Interpretación basada en evidencia: el snackbar aparece después de una acción, puede desaparecer automáticamente cuando la barra se agota y se puede descartar con el ícono de cierre. La posición en pantalla, la temporización, la animación, el apilamiento de varios snackbars y la pausa al pasar el puntero no están definidos en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El estado no se comunica solo con color: cada tipo tiene un ícono distinto.
- Contraste del mensaje sobre el fondo del tipo: Danger 5,55:1, Warning 3,97:1, Information 4,26:1, Success 4,27:1. Warning, Information y Success quedan por debajo del umbral habitual de WCAG AA de 4,5:1 para texto de 16px.
- El relleno de la barra tiene 5,68:1 o más frente a su pista.
- El ícono de cierre mide 16px, sin botón contenedor ni estados.

Información de accesibilidad faltante: comportamiento de los anuncios, duración de la visualización y la posibilidad de extenderla, gestión del foco para el botón de acción y nombre accesible para el ícono de cierre.

## Pautas de contenido

Observaciones verificadas:

- El mensaje por defecto es "Single-line toast bar" y la etiqueta del botón es "Button"; ambos son textos de ejemplo.
- El mensaje puede hacer salto de línea dentro de su ancho máximo.

Recomendaciones:

- Limita el mensaje a una oración breve.
- Usa un verbo único y específico para el botón de acción (por ejemplo, "Deshacer").

## Ejemplos

### Acción confirmada con deshacer

Configuración: `Type=Success`, `showButton=true`, `showBar=true`

Descripción: una confirmación de que una acción se completó, con una acción "Deshacer" y una barra de tiempo.

Evidencia / clasificación: configuración existente en Figma (variante `2255:981`); el contenido es una recomendación.

### Error sin acción

Configuración: `Type=Danger`, `showButton=false`, `showBar=false`

Descripción: un mensaje de fallo que permanece hasta que el usuario lo cierra.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas.

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. Significado y comportamiento de la barra. La barra inferior siempre se muestra con el mismo relleno (termina 80px antes del borde), sin una propiedad para definir su avance. Confirmar si es un temporizador para el descarte automático y cómo debe comportarse.
2. Tipo por defecto. La variante por defecto es `Type=Danger` porque es la variante superior izquierda. Confirmar si Danger debe ser el valor por defecto.
3. Contraste del texto. Los mensajes Warning (3,97:1), Information (4,26:1) y Success (4,27:1) están por debajo de 4,5:1 sobre sus fondos. Confirmar si estas combinaciones de color se aceptan.
4. Control de cierre. El ícono de cierre siempre está visible, no tiene propiedad de visibilidad y es un ícono simple de 16px sin estados de botón. Confirmar si debe ser opcional e interactivo.
5. Relación con Inline Alert. Snackbar e Inline Alert comparten los mismos colores de estado, íconos y texto por defecto ("Single-line toast bar"). Confirmar cuándo usar cada componente.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2255:980`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
