---
component: "Accordion"
system: "Genome Evolution Design System"
type: "No verificado en Figma"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2016-2350"
last_updated: "2026-10-21"
---

# Accordion

Sistema: Genome Evolution Design System

## Resumen del componente

Accordion es un componente con una fila de encabezado y, en Behavior=Expanded, un área de contenido. Tiene dos valores de Behavior, dos de Size, tres de Color y seis de State.

## Referencia rápida

### Qué es

[Pendiente de confirmación]

Observación verificada: Figma expone los valores de Behavior Collapsed y Expanded. Las variantes Collapsed contienen solo una fila de encabezado con un icono chevron-down. Las variantes Expanded contienen una fila de encabezado con un icono chevron-up y un contenedor de contenido debajo.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Color | Default, Evergreen, Indigo | No verificado en Figma |
| Behavior | Collapsed, Expanded | No verificado en Figma |
| Size | MD, SM | No verificado en Figma |
| State | Default, Hovered, Pressed, Focused, Disabled, Loading | No verificado en Figma |

La disponibilidad de variantes no es una matriz completa. Color=Default existe para ambos valores de Behavior, ambos Size y los seis State (24 variantes). Evergreen e Indigo existen solo para Behavior=Expanded, con los State Default, Hovered, Pressed y Focused, en ambos Size (16 variantes). Disabled y Loading existen solo para Color=Default.

### Configuración por defecto

[Pendiente de confirmación]

### Uso típico

[Pendiente de confirmación]

## Propósito / Intención

[Pendiente de confirmación]

## Cuándo usarlo

[Pendiente de confirmación]

## Cuándo NO usarlo

[Pendiente de confirmación]

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Header Container | No verificado en Figma | Fila que contiene el icono izquierdo, el texto y los iconos finales. Lleva el fondo y el borde inferior, y en Focused lleva el borde de 2px (en Expanded). |
| Icono izquierdo ("info") | No verificado en Figma | Icono de 16 x 16 al inicio del encabezado, activado por `showLeftIcon` y reemplazable mediante `icon` en la interfaz generada. |
| Checkbox | No verificado en Figma | Marco "Check" de 20 x 20 que contiene una casilla de 16 x 16 (borde de 1px icon/primary, radio de 2px) y un icono "bizagi-lines" de 16 x 16, activado por `showCheckbox` en la interfaz generada. En Behavior=Collapsed, Size=MD, State=Default contiene además una capa de texto "Label". |
| Texto | No verificado en Figma | Texto del encabezado, con contenido de muestra "Placeholder". |
| Badge | No verificado en Figma | Píldora de 14px de ancho con el texto de muestra "0", activada por `showBadge` en la interfaz generada. |
| Chevron | No verificado en Figma | Icono de 12 x 12: chevron-down en Collapsed, chevron-up en Expanded. |
| Content Container | No verificado en Figma | Presente solo en las variantes Behavior=Expanded, de 100px de alto, con una ranura de contenido en su interior (los nombres de capa varían según la variante, como "Content MD Default" y "Accordion Content"). |
| Marcadores de carga | No verificado en Figma | En State=Loading, rectángulos que usan background/loading reemplazan el texto y el chevron, y dos barras reemplazan el contenido en Expanded. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho de la variante | 265 en las 40 variantes | Metadatos de Figma |
| Alto de la variante | Collapsed MD 36; Collapsed SM 24; Expanded MD 136; Expanded SM 124 | Metadatos de Figma, las 40 variantes |
| Padding del encabezado (Size=MD) | Horizontal space/16, vertical space/8 | Contexto de diseño de Figma, variantes MD de color Default y variantes MD Evergreen/Indigo inspeccionadas |
| Padding del encabezado (Size=SM) | Horizontal space/8, vertical space/2 | Contexto de diseño de Figma, solo SM Default Expanded y Collapsed |
| Espaciado entre elementos del encabezado | 8, vinculado a gap/sm o space/8 en la mayoría de las capas inspeccionadas y 8 literal en otras | Contexto de diseño de Figma |
| Alto del Content Container | 100 en las variantes Expanded | Contexto de diseño de Figma |
| Padding del Content Container | space/16 (MD), space/8 (SM Default); 16 literal en Indigo MD Focused | Contexto de diseño de Figma |
| Radio de esquina de la ranura de contenido | radius/4 | Contexto de diseño de Figma |
| Borde inferior (Collapsed, color Default) | 1px en la raíz, border/default; ninguno en la raíz de Collapsed Disabled | Contexto de diseño de Figma |
| Borde inferior (encabezado Expanded) | 1px: border/strong (color Default: Default, Hovered, Pressed), border/disabled (Disabled), border/evergreen (Evergreen Default) | Contexto de diseño de Figma |
| Borde de foco (State=Focused) | 2px, border/focus (focus/width), alrededor del contenedor del encabezado en Expanded y alrededor de la raíz en Collapsed MD | Contexto de diseño de Figma |
| Tamaños de iconos | Icono izquierdo 16; chevron 12; marco del checkbox 20 con una casilla de 16 | Contexto de diseño de Figma |

Los anchos de borde de 1px provienen de las clases de borde generadas. No encontré una variable vinculada al ancho de 1px. Las medidas son por variante y no se generalizan. No se verificó un ancho fijo ni comportamiento responsivo.

## Semántica

[Pendiente de confirmación]

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono izquierdo | "info" | Contexto de diseño de Figma |
| Icono del checkbox | "bizagi-lines" | Contexto de diseño de Figma |
| Icono final | "chevron-down" (Collapsed) y "chevron-up" (Expanded) | Contexto de diseño de Figma |

Los colores de los iconos están definidos dentro de recursos SVG que no se abrieron. Las variables icon/disabled e icon/primary se devuelven para este nodo, pero no se verificó su aplicación a iconos concretos.

## Variantes (Propiedades)

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Texto del encabezado en text/primary, fondo del encabezado background/canvas | 24 variantes |
| Evergreen | Texto del encabezado en text/evergreen, borde inferior del encabezado Expanded en border/evergreen (verificado en Size=MD, State=Default) | 8 variantes, solo Behavior=Expanded |
| Indigo | Texto del encabezado en text/indigo (verificado en Size=MD, State=Focused) | 8 variantes, solo Behavior=Expanded |

### Behavior

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Collapsed | Fila de encabezado con chevron-down | 12 variantes, solo Color=Default |
| Expanded | Fila de encabezado con chevron-up, más un Content Container de 100px | 28 variantes |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| MD | Padding del encabezado space/16 por space/8; alturas 36 (Collapsed) y 136 (Expanded) | Verificado en variantes de color Default y 2 variantes con color |
| SM | Padding del encabezado space/8 por space/2; alturas 24 (Collapsed) y 124 (Expanded). El estilo del texto del encabezado es el mismo Text/Body/SM que en MD. | Verificado solo en SM Default Expanded y Collapsed |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Apariencia en reposo | Figma |
| Hovered | Variante visual | Figma |
| Pressed | Variante visual | Figma |
| Focused | Variante visual con un border/focus de 2px | Figma |
| Disabled | Variante visual | Solo Color=Default |
| Loading | Variante visual | Solo Color=Default |

Completitud del inventario: se identificaron las 40 variantes listadas en los metadatos del nodo. La inspección detallada cubrió 16 de ellas, por lo que no se documentan los detalles específicos de las 24 variantes restantes. No se inspeccionaron las propiedades definidas fuera de este nodo, si existen.

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Variante visual | Fondo del encabezado background/canvas, texto text/primary. | Figma |
| Hovered | Variante visual | El fondo del encabezado pasa a background/interactive/hovered. | Figma, color Default MD |
| Pressed | Variante visual | El fondo del encabezado pasa a background/interactive/pressed. | Figma, color Default MD |
| Focused | Variante visual | Aparece un border/focus de 2px alrededor del contenedor del encabezado (Expanded) o de la raíz (Collapsed MD). | Figma, color Default MD; Indigo MD Expanded |
| Disabled | Variante visual | El fondo del encabezado pasa a background/disabled y el texto pasa a text/disabled. En Expanded el borde inferior del encabezado es border/disabled. En Collapsed MD no se encontró borde inferior en la raíz. | Figma, color Default MD |
| Loading | Variante visual | El texto y el chevron se reemplazan por rectángulos background/loading (una barra de 170 x 20 y un cuadrado de 12 x 12). En Expanded el contenido muestra dos barras background/loading (ancho completo y 129 de ancho). | Figma, color Default MD |

Son únicamente variantes visuales de estado. No demuestran que se haya implementado ninguna interacción, comportamiento de expandir o contraer, comportamiento de foco o transición de estado. No se inspeccionaron en detalle Hovered, Pressed y Focused para Evergreen e Indigo, ni los State de SM distintos de Default.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color | background/canvas (#ffffff) | Fondo del encabezado (Default, Focused, Loading) y fondo del Content Container | Vinculación de variable en Figma |
| Color | background/interactive/hovered (#f7f8f7) | Fondo del encabezado en Hovered | Vinculación de variable en Figma |
| Color | background/interactive/pressed (#e9ecea) | Fondo del encabezado en Pressed | Vinculación de variable en Figma |
| Color | background/disabled (#f4f6f4) | Fondo del encabezado en Disabled | Vinculación de variable en Figma |
| Color | background/loading (#d9deda99) | Rectángulos de marcador de carga | Vinculación de variable en Figma |
| Color | text/primary (#2d342f) | Texto del encabezado (color Default, no Disabled) | Vinculación de variable en Figma |
| Color | text/disabled (#849588) | Texto del encabezado en Disabled | Vinculación de variable en Figma |
| Color | text/evergreen (#297a39) | Texto del encabezado Evergreen (verificado en Size=MD, State=Default) | Vinculación de variable en Figma |
| Color | text/indigo (#6b1b99) | Texto del encabezado Indigo (verificado en Size=MD, State=Focused) | Vinculación de variable en Figma |
| Color | border/strong (#5f6d62) | Borde inferior del encabezado Expanded en color Default | Vinculación de variable en Figma |
| Color | border/default (#c3cbc5) | Borde inferior de la raíz en Collapsed | Vinculación de variable en Figma |
| Color | border/disabled (#c3cbc5) | Borde inferior del encabezado Expanded en Disabled | Vinculación de variable en Figma |
| Color | border/evergreen (#297a39) | Borde inferior del encabezado Expanded Evergreen (verificado en Size=MD, State=Default) | Vinculación de variable en Figma |
| Color | border/focus (#339947) | Borde de State=Focused | Vinculación de variable en Figma |
| Color | icon/primary (#5f6d62) | Borde de la casilla del checkbox | Vinculación de variable en Figma |
| Ancho de borde | focus/width (2) | Borde de State=Focused | Vinculación de variable en Figma |
| Espaciado | space/16, space/8, space/2 | Padding del encabezado y del contenido (ver Layout) | Vinculación de variable en Figma |
| Espaciado | gap/sm (8) | Espaciado entre elementos del encabezado en la mayoría de las capas inspeccionadas | Vinculación de variable en Figma |
| Forma | radius/4 (4) | Radio de esquina de la ranura de contenido | Vinculación de variable en Figma |
| Tipografía | Text/Body/SM | Texto del encabezado (family/body, size/14, peso 400, line-height/20, espaciado entre letras 0) | Figma |
| Tipografía | size/12, line-height/16, letter-spacing/normal | Texto "Label" en el checkbox (Collapsed, MD, Default) | Vinculación de variable en Figma |

Lo siguiente se devuelve para este nodo, pero no se estableció su uso: border/indigo (#6b1b99), icon/disabled (#9daaa0), radius/0 y weight/regular (se resuelve al nombre de estilo "Regular"). El Badge usa valores literales (borde #9e9e9e, texto #272727) y referencias a variables font/* que no devolvieron las definiciones de variables de Figma, y el ancho de borde del checkbox referencia width/1, que tampoco se devolvió. Los valores de los tokens provienen únicamente de Figma; no se usaron los archivos JSON de tokens del repositorio.

## Interacción

[Pendiente de confirmación]

## Accesibilidad

[Pendiente de confirmación]

## Combinaciones inválidas

[Pendiente de confirmación]

Observación, no una regla: Evergreen e Indigo no se proporcionan para Behavior=Collapsed, y Disabled y Loading tampoco se proporcionan para ellos.

## Lista de verificación de QA

- [x] Identidad del componente y referencias de origen verificadas.
- [ ] Propiedades y valores documentados contrastados con la evidencia disponible de Figma.
- [x] Completitud del inventario de variantes evaluada y limitaciones de inspección documentadas.
- [ ] Valores por defecto verificados, o conflictos sin resolver registrados.
- [ ] Medidas de layout contrastadas con las configuraciones relevantes.
- [ ] Mapeos de tokens verificados contra sus fuentes reales.
- [x] Estados visuales distinguidos del comportamiento interactivo verificado.
- [ ] Afirmaciones de accesibilidad respaldadas por evidencia explícita.
- [ ] Combinaciones inválidas respaldadas por evidencia explícita.
- [x] Recomendaciones distinguidas de las observaciones verificadas.
- [ ] La documentación en inglés y en español es semánticamente equivalente.
- [x] No quedan marcadores de posición de la plantilla sin resolver.
- [x] No quedan instrucciones de la plantilla en el documento final.
- [ ] No se ha añadido información no respaldada o inventada.
- [x] Cambios históricos incluidos solo cuando los respalda un historial de versiones.

## Aclaraciones pendientes

1. Estructura del componente. El nodo 2016:2350 es un frame que contiene 40 componentes y no está confirmado como component set. No se inspeccionaron las propiedades definidas fuera de él, si existen. Se resuelve confirmando el component set en Figma.
2. Inventario de propiedades y valores por defecto. No se ha establecido el valor por defecto de Color, Behavior, Size ni State. La interfaz generada también lista `text` (muestra "Placeholder"), `showLeftIcon`, `showCheckbox`, `showBadge`, `icon` y ranuras de contenido, pero no están verificados si son propiedades de Figma, ni sus tipos ni sus valores por defecto. Se resuelve confirmando el panel de propiedades en Figma.
3. Inspección parcial. Solo 16 de las 40 variantes se inspeccionaron en detalle. Los State de SM distintos de Default, las variantes Evergreen e Indigo distintas de las dos indicadas, y Hovered y Pressed de las variantes con color se identificaron solo por nombre y tamaño.
4. Brechas de tokens. Literales del Badge, referencias font/* y width/1 sin resolver, anchos de borde de 1px sin vincular, el padding literal de 16 en Indigo MD Focused, y el uso no establecido de border/indigo, icon/disabled, icon/primary en los iconos y radius/0.
5. Diferencias de capas entre variantes. El texto "Label" del checkbox aparece solo en Collapsed, MD, Default entre las variantes inspeccionadas. Collapsed Disabled no tiene borde inferior en la raíz mientras que Expanded Disabled sí. En Focused, el borde está en la raíz en Collapsed y en el contenedor del encabezado en Expanded. Se desconoce si son intencionales.
6. Disponibilidad de variantes. Se desconoce si la ausencia de Evergreen e Indigo para Collapsed, y de Disabled y Loading para esos colores, es intencional.
7. No documentado en Figma: propósito, guía de uso, restricciones, semántica, interacción (incluido expandir y contraer), accesibilidad, combinaciones inválidas, status, version, owner, tags y el contenido que va en la ranura de contenido.

## Notas / Registro de cambios

Generado o revisado usando el material de origen disponible el 2026-10-21.

[No hay cambios históricos verificados disponibles]
