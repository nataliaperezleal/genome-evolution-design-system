---
component: "Inline Alert"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2181-3058"
last_updated: "2026-10-23"
tags:
  - "feedback"
  - "alert"
  - "status-message"
---

# Inline Alert

Sistema: Genome Evolution Design System

## Resumen del componente

Inline Alert es una barra de mensaje con fondo tintado que comunica un mensaje de tipo Danger, Warning, Information o Success mediante un ícono de estado, un título opcional, una descripción, un botón de acción opcional y un ícono de cierre opcional.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: un mensaje de retroalimentación no modal, integrado en el layout. El component set (nodo de Figma `2181:3058`) combina una superficie con el color del estado, un borde izquierdo de color de 4px, un ícono de estado y texto con el color del estado, junto con una propiedad `Type` cuyos valores (`Danger`, `Warning`, `Information`, `Success`) nombran el estado semántico del mensaje. En Figma no hay una descripción escrita definida para Inline Alert.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Danger, Warning, Information, Success | Danger (valor por defecto de la propiedad en Figma; ver Aclaraciones pendientes) |
| Size | Regular, Small | Regular (valor por defecto de la propiedad en Figma; ver Aclaraciones pendientes) |
| showTitle | true, false | true |
| showButton | true, false | true |
| showClose | true, false | true |
| title | Texto | "Title" |
| description | Texto | "Single-line toast bar" |

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son: `Type=Danger`, `Size=Regular`, `showTitle=true`, `showButton=true`, `showClose=true`, `title="Title"`, `description="Single-line toast bar"`.

En Figma, la variante por defecto de un component set es la primera variante del conjunto, y `Type=Danger, Size=Regular` es esa primera variante. No está documentado si Danger es un valor por defecto intencional del diseño o una consecuencia del orden de las variantes.

### Uso típico

Observaciones verificadas:

- Cada `Type` está disponible en dos tamaños: `Regular` (76px de alto en las variantes inspeccionadas) y `Small` (56px de alto en las variantes inspeccionadas).
- Todas las variantes muestran un ícono de estado y una descripción. El título, el botón de acción y el ícono de cierre son opcionales y se controlan con `showTitle`, `showButton` y `showClose`.
- El botón de acción es una instancia anidada del componente Button del sistema, con el color correspondiente al `Type` de la alerta.

Interpretación basada en evidencia:

- Usa `Regular` cuando el mensaje necesite más prominencia, por ejemplo en la parte superior de una sección de página o de un formulario, y `Small` en layouts más densos como paneles, tarjetas o junto a un grupo de campos específico. Esta lectura se basa en el ícono más grande (24px frente a 16px), la tipografía más grande (título de 18px frente a 14px) y el mayor padding de `Regular`.
- Usa el botón de acción cuando el mensaje tenga una única acción de seguimiento directamente relacionada, y el ícono de cierre cuando el mensaje pueda descartarse una vez leído.

Recomendación: mantén el título visible en los mensajes `Danger` y `Warning` para que el problema se identifique de un vistazo. Es una recomendación, no una regla del sistema de diseño.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan notar y comprender información de estado (errores, riesgos, información neutral o confirmaciones) en el contexto al que aplica, sin salir de la vista actual ni ser interrumpidos por un modal.

### Resultado esperado

Interpretación basada en evidencia: el usuario identifica el tipo de mensaje por su color e ícono, lo comprende a partir del título y la descripción, y opcionalmente puede ejecutar una acción relacionada o descartar el mensaje.

### Contexto típico

Interpretación basada en evidencia: integrado en el contenido de páginas, formularios, paneles o secciones, junto al contenido al que se refiere el mensaje. El nombre del componente ("Inline") y su estructura dentro del flujo (sin overlay, sombra ni elevación en las variantes inspeccionadas) respaldan esta lectura. El texto de descripción por defecto "Single-line toast bar" menciona un toast, pero el componente no define ningún comportamiento propio de un toast (posicionamiento, temporización u overlay); ver Aclaraciones pendientes.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de los valores de `Type` y de la estructura del componente:

- `Danger`: para informar un error, una falla o un problema bloqueante que requiere atención.
- `Warning`: para destacar un riesgo o una condición que el usuario debe revisar antes de continuar.
- `Information`: para ofrecer información o una guía neutral y contextual.
- `Success`: para confirmar que una acción o un proceso se completó correctamente.
- Cuando el mensaje se relaciona con un área específica de la página y debe permanecer visible en contexto.
- Cuando un mensaje necesita una acción de seguimiento relacionada (`showButton=true`) o debe poder descartarse (`showClose=true`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Inline Alert. Solo como recomendaciones:

- No uses un Inline Alert para mostrar únicamente una etiqueta de estado o una categoría sin un mensaje; la descripción en Figma del componente Button recomienda usar Badges o componentes equivalentes para estados, etiquetas o categorías.
- Evita usar el botón de acción de la alerta para varias acciones que compitan entre sí; el componente ofrece un único espacio para botón.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Frame redondeado y recortado, con una superficie sutil del color del `Type` y un borde izquierdo de 4px del color del `Type`. |
| Ícono de estado | Obligatoria | Ícono específico de cada `Type` (24px en `Regular`, 16px en `Small`). Presente en todas las variantes; no se expone una propiedad de visibilidad. |
| Título | Opcional (`showTitle`) | Texto de encabezado breve con el color de texto del `Type`. Texto por defecto: "Title". |
| Descripción | Obligatoria | Texto del mensaje con el color de texto del `Type`. Presente en todas las variantes; no se expone una propiedad de visibilidad. Texto por defecto: "Single-line toast bar". |
| Botón | Opcional (`showButton`) | Instancia anidada de Button con la etiqueta "Button", con el estilo correspondiente al `Type`. |
| Ícono de cierre | Opcional (`showClose`) | Ícono `close` de 16px, alineado arriba en el extremo derecho del contenedor. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal: grupo de contenido y luego ícono de cierre | Auto layout de Figma |
| Alineación del contenedor | Superior (el ícono de cierre se alinea arriba) | Auto layout de Figma |
| Alineación del grupo de contenido | Centrado verticalmente (ícono, texto, botón) | Auto layout de Figma |
| Radio de esquinas | 8px | `radius/8` |
| Borde izquierdo | 4px | Medición directa (no vinculado a un token) |
| Espacio entre el grupo de contenido y el ícono de cierre | 8px | `gap/sm` |
| Padding — `Regular` | 16px en todos los lados | `space/16` |
| Padding — `Small` | Izquierda 16px; derecha, arriba y abajo 8px | `space/16`, `space/8` |
| Espacio dentro del grupo de contenido — `Regular` | 16px | Medición directa (no vinculado a un token) |
| Espacio dentro del grupo de contenido — `Small` | 12px | Medición directa (no vinculado a un token) |
| Alto — `Regular` | 76px (con título y descripción de una línea) | Medición directa |
| Alto — `Small` | 56px (con título y descripción de una línea) | Medición directa |
| Ancho | 430px (Danger y Warning, ambos tamaños; Information y Success `Regular`); unos 422px (Information y Success `Small`) | Medición directa; ver Aclaraciones pendientes |
| Tamaño del ícono de estado | 24 × 24px (`Regular`); 16 × 16px (`Small`) | Medición directa |
| Tamaño del ícono de cierre | 16 × 16px (ambos tamaños) | Medición directa |
| Button anidado | 24px de alto; radio de 4px (`semantic/sm`); borde de 1px (`width/1`). `Regular`: padding horizontal `size/16` (16px), padding vertical `space/8` (8px). `Small`: padding horizontal `space/12` (12px), padding vertical `space/4` (4px) | Variables de Figma y medición directa |

El texto dentro del grupo de contenido ocupa el ancho disponible y hace salto de línea (`word-break: break-word`). El comportamiento de redimensionamiento y responsive no está documentado; ver Aclaraciones pendientes.

## Semántica

Interpretación basada en evidencia:

- `Type` comunica el estado semántico del mensaje: `Danger` (error o problema crítico), `Warning` (precaución), `Information` (información neutral) y `Success` (confirmación positiva). Cada `Type` usa de forma consistente su propio ícono de estado y sus propias variables `surface/*`, `border/*`, `text/*` e `icon/*`.
- El título funciona como un resumen breve del mensaje, y la descripción contiene el detalle.
- El Button anidado representa una acción relacionada con el mensaje. El ícono de cierre representa el descarte del mensaje.

No verificado en Figma: elementos HTML, roles ARIA (por ejemplo, `alert` o `status`), comportamiento de live region y anuncios de lector de pantalla.

## Iconografía

| Espacio | Ícono / descripción verificada | Evidencia |
|---------|--------------------------------|-----------|
| Ícono de estado — `Danger` | `circle-close`; 24px (`Regular`), 16px (`Small`); `icon/danger` | Capas y variables de Figma |
| Ícono de estado — `Warning` | `warning`; 24px (`Regular`), 16px (`Small`); `icon/warning` | Capas y variables de Figma |
| Ícono de estado — `Information` | `info`; 24px (`Regular`), 16px (`Small`); `icon/info` | Capas y variables de Figma |
| Ícono de estado — `Success` | `check`; 24px (`Regular`), 16px (`Small`); `icon/success` | Capas y variables de Figma |
| Ícono de cierre | `close`; 16px en ambos tamaños; se muestra con `showClose=true` | Capas de Figma |

El ícono de estado es fijo para cada `Type`. No se expone una propiedad para cambiarlo u ocultarlo.

## Variantes (propiedades)

El inventario siguiente es completo para el component set: 8 variantes (4 `Type` × 2 `Size`) y cinco propiedades que no son de variante. Los nombres de las propiedades booleanas y de texto se listan tal como los expone el MCP de Figma.

### Type

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Danger | Alerta con tinte rojo e ícono `circle-close`. | `surface/danger/subtle` (#ffe9e5), `border/danger`, `text/danger`, `icon/danger` (#ba1a1a) |
| Warning | Alerta con tinte amarillo e ícono `warning`. | `surface/warning/subtle` (#fff0c2), `border/warning`, `text/warning`, `icon/warning` (#8c7500) |
| Information | Alerta con tinte azul e ícono `info`. | `surface/info/subtle` (#f7f9ff), `border/info`, `text/info`, `icon/info` (#2f7cb6) |
| Success | Alerta con tinte verde e ícono `check`. | `surface/success/subtle` (#e8ffef), `border/success`, `text/success`, `icon/success` (#00885c) |

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Regular | Ícono de estado de 24px; título `Text/Title/SM` (18/24); descripción `Text/Body/MD` (16/20); texto del botón `Text/Button/MD` (14/16); padding de 16px; espacio de contenido de 16px. | 76px de alto en las variantes inspeccionadas |
| Small | Ícono de estado de 16px; título `Text/Body/SM Strong` (14/20); descripción `Text/Body/SM` (14/20); texto del botón `Text/Button/SM` (12/16); padding vertical y derecho de 8px, padding izquierdo de 16px; espacio de contenido de 12px. | 56px de alto en las variantes inspeccionadas |

### showTitle

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra el título sobre la descripción. | Valor por defecto |
| false | Oculta el título; solo se muestra la descripción. | Propiedad booleana |

### showButton

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra el Button de acción anidado al final del grupo de contenido. | Valor por defecto |
| false | Oculta el Button de acción. | Propiedad booleana |

### showClose

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| true | Muestra el ícono de cierre de 16px en la esquina superior derecha. | Valor por defecto |
| false | Oculta el ícono de cierre. | Propiedad booleana |

### title

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Texto | Contenido del título. | Valor por defecto: "Title" |

### description

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Texto | Contenido de la descripción. | Valor por defecto: "Single-line toast bar" |

La etiqueta del Button anidado ("Button") no se expone como propiedad de Inline Alert.

## Estados

Inline Alert no tiene variantes de estado (por ejemplo, hover, focus o pressed) en Figma. El Button anidado es una instancia del componente Button, que define sus propios estados en su component set. El ícono de cierre es una capa de ícono simple sin variantes de estado.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma vinculados a este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `surface/danger/subtle`, `surface/warning/subtle`, `surface/info/subtle`, `surface/success/subtle` | Fondo del contenedor y fondo del Button anidado, según el `Type` | Variables de Figma |
| Color — borde | `border/danger`, `border/warning`, `border/info`, `border/success` | Borde izquierdo de 4px del contenedor y borde de 1px del Button anidado, según el `Type` | Variables de Figma |
| Color — texto | `text/danger`, `text/warning`, `text/info`, `text/success` | Título, descripción y etiqueta del Button, según el `Type` | Variables de Figma |
| Color — ícono | `icon/danger`, `icon/warning`, `icon/info`, `icon/success` | Íconos de estado y de cierre, según el `Type` | Variables de Figma |
| Espaciado | `space/16` | Padding del contenedor (`Regular`: todos los lados; `Small`: izquierda) | Variables de Figma |
| Espaciado | `space/8` | Padding del contenedor (`Small`: arriba, abajo, derecha); padding vertical del Button anidado (`Regular`) | Variables de Figma |
| Espaciado | `space/12`, `space/4` | Padding horizontal y vertical del Button anidado (`Small`) | Variables de Figma |
| Espaciado | `size/16` | Padding horizontal del Button anidado (`Regular`) | Variables de Figma |
| Espaciado | `gap/sm` | Espacio entre el grupo de contenido y el ícono de cierre; espacio dentro del Button anidado | Variables de Figma |
| Radio | `radius/8` | Radio de esquinas del contenedor | Variables de Figma |
| Radio | `semantic/sm` | Radio de esquinas del Button anidado (4px) | Variables de Figma |
| Ancho de borde | `width/1` | Borde del Button anidado (1px) | Variables de Figma |
| Tipografía | `Text/Title/SM` | Título (`Regular`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/MD` | Descripción (`Regular`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/SM Strong` | Título (`Small`) | Estilo de texto de Figma |
| Tipografía | `Text/Body/SM` | Descripción (`Small`) | Estilo de texto de Figma |
| Tipografía | `Text/Button/MD`, `Text/Button/SM` | Etiqueta del Button anidado (`Regular`, `Small`) | Estilos de texto de Figma |

Sin vincular a tokens: el ancho de 4px del borde izquierdo y los espacios del grupo de contenido (16px en `Regular`, 12px en `Small`).

## Interacción

- Interacciones verificadas: ninguna. No se encontraron interacciones de prototipo para Inline Alert.
- Elementos observados: el Button anidado (un componente interactivo con sus propios estados en el component set de Button) y el ícono de cierre.
- Interpretación basada en evidencia: el Button ejecuta una acción relacionada con el mensaje y el ícono de cierre descarta la alerta. El comportamiento de descarte, la animación, la temporización y el cierre automático no están verificados en Figma.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El estado no se comunica solo con color: cada `Type` tiene una forma de ícono distinta (`circle-close`, `warning`, `info`, `check`), y el título puede incluir una etiqueta textual.
- Relaciones de contraste calculadas a partir de los valores de las variables (color de texto sobre la superficie sutil): Danger 5,55:1, Warning 3,97:1, Information 4,26:1, Success 4,27:1. Warning, Information y Success quedan por debajo de 4,5:1, el umbral habitual de WCAG AA para texto de tamaño normal; todo el texto de descripción (14–16px) y el título de `Regular` (18px semibold) son texto de tamaño normal según las definiciones de WCAG. Ver Aclaraciones pendientes.
- El ícono de cierre mide 16 × 16px, sin área táctil adicional ni variantes de estado.

Información de accesibilidad faltante: roles ARIA, comportamiento de live region o de anuncios, acceso por teclado al Button y al ícono de cierre, orden de foco e indicadores de foco, y nombre accesible para el control de cierre.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Title" para el título y "Single-line toast bar" para la descripción; ambos son textos de ejemplo.
- El texto hace salto de línea dentro del ancho disponible.

Recomendaciones:

- Escribe un título breve que nombre la situación y usa la descripción para el detalle o el siguiente paso.
- Usa una etiqueta de botón breve y orientada a la acción que describa lo que hace la acción.
- Reemplaza el texto de ejemplo por defecto en cada uso.

## Ejemplos

### Alerta Danger con acción de recuperación

Configuración: `Type=Danger`, `Size=Regular`, `showTitle=true`, `showButton=true`, `showClose=true`

Descripción: un mensaje de error con título, detalle, una acción relacionada y opción de descarte. Esta configuración coincide con los valores por defecto de las propiedades en Figma.

Evidencia / clasificación: configuración existente en Figma (nodo `2181:3059`).

### Confirmación de éxito compacta

Configuración: `Type=Success`, `Size=Small`, `showTitle=false`, `showButton=false`, `showClose=true`

Descripción: una confirmación breve en un layout denso, solo con el ícono, la descripción y el ícono de cierre.

Evidencia / clasificación: recomendación construida a partir de propiedades verificadas; esta combinación exacta no se muestra en Figma.

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. `Type` por defecto. Figma expone `Type=Danger, Size=Regular` como valor por defecto porque es la primera variante del conjunto. Confirmar si Danger es el valor por defecto previsto o si las variantes deberían reordenarse (por ejemplo, para que `Information` sea el valor por defecto).
2. Contraste del texto. Los colores de texto de Warning (3,97:1), Information (4,26:1) y Success (4,27:1) sobre sus superficies sutiles están por debajo de 4,5:1. Confirmar si estas combinaciones de color se aceptan o deben ajustarse.
3. Ancho y comportamiento de redimensionamiento. Los anchos de las variantes difieren (430px frente a unos 422px), y algunas variantes `Regular` usan un grupo de contenido de ancho fijo (unos 374px), mientras que `Danger, Regular` usa un grupo de contenido que ocupa todo el ancho. Confirmar el comportamiento de ancho previsto (fijo, ocupar el contenedor o ajustarse al contenido) y los anchos mínimo y máximo.
4. Tamaño del Button anidado en `Regular`. El Button mide 24px de alto pero usa `Text/Button/MD` y el padding de MD; el componente Button define MD como 32px y SM como 24px. Confirmar qué `Size` de Button debe usar la alerta `Regular`. Además, la etiqueta del Button no se expone como propiedad de Inline Alert.
5. Control de cierre. El elemento de cierre es un ícono de 16px sin contenedor de botón, área táctil ni estados. Confirmar si debe ser un componente interactivo (por ejemplo, un icon button) y cuál es su comportamiento esperado.
6. Relación con toast. La descripción por defecto "Single-line toast bar" hace referencia a un toast. Confirmar si Inline Alert está pensado solo para ubicación en línea y en qué se diferencia de los componentes de toast o snackbar del sistema.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2181:3058`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
