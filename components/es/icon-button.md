---
component: "Icon Button"
system: "Genome Evolution Design System"
type: "Action"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2182-3348"
last_updated: "2026-10-20"
tags:
  - "button"
  - "icon"
  - "action"
  - "toolbar"
  - "compact"
  - "filled"
  - "outline"
---

# Icon Button — Genome Evolution Design System

System: Genome Evolution Design System

Botón de acción compacto que contiene solo un ícono, disponible en tipos Filled y Outline, cuatro colores, cinco estados, tres tamaños y dos estilos de esquina.

Clave de fuentes: el contenido sin marca está verificado en Figma. El contenido marcado como "Legacy" proviene de la documentación anterior de este archivo y está pendiente de validación [Pending confirmation].

## Referencia rápida

### Qué es

Control de acción solo con ícono, sin texto. La descripción del componente en Figma lo clasifica como "Button".

### Propiedades clave

| Propiedad | Valores | Default |
|---|---|---|
| Type | Filled, Outline | Filled |
| Color | Evergreen, Indigo, Inverse, Default | Evergreen |
| State | Default, Hover, Pressed, Focused, Disable | Default |
| Size | SM, MD, LG | MD |
| Corner | Square, Rounded | Square |
| smallIcon | Ícono intercambiable para Size=SM | — |
| mediumIcon | Ícono intercambiable para Size=MD | — |
| largeIcon | Ícono intercambiable para Size=LG | — |

Los defaults figuran en la descripción del componente en Figma. El default de Size (MD) coincide además con el default de la implementación en React, pero es provisional: ver Aclaración pendiente 9. Figma no marca íconos por defecto; consulta Iconografía para ver las instancias de ícono usadas en las variantes inspeccionadas.

### Configuración por defecto

Type=Filled, Color=Evergreen, State=Default, Size=MD, Corner=Square. Size=MD es provisional (ver Aclaración pendiente 9).

### Uso típico

Observación verificada: la descripción del componente en Figma lista tres variantes de ejemplo y las marca como "no son guía de uso" (ver Ejemplos).

Recomendación (Legacy, pendiente de validación):

- Usar Filled para mayor peso visual y acciones primarias, y Outline para acciones secundarias.
- Usar Indigo para funcionalidades de IA.
- Usar Inverse sobre fondos oscuros.

## Propósito / Intención

### Problema que resuelve

Ofrece una acción cuando el espacio disponible no permite un botón con texto.

### Resultado esperado

[Pending confirmation]

### Contexto típico

Toolbars donde se agrupan varias acciones y el texto generaría ruido visual.

## Cuándo usar

- El espacio disponible no permite un botón con texto.
- El ícono es lo bastante claro sin etiqueta (send, trash, save, edit, close).
- Se agrupan varias acciones en una toolbar donde el texto sería visualmente ruidoso.

## Cuándo NO usar

El bloque "DO NOT USE" de la descripción en Figma repite el texto de "USE WHEN", por lo que no hay casos a evitar verificados [Pending confirmation].

Legacy (pendiente de validación):

- La acción es ambigua sin etiqueta.
- Es el CTA principal de una pantalla.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida | Descripción |
|---|---|---|
| Contenedor | Sí | Marco cuyo fondo y borde dependen de Type, Color y State. |
| Ícono | Sí (en las variantes inspeccionadas) | Instancia de ícono intercambiable, centrada en el contenedor. |

### Layout

| Propiedad | Valor verificado |
|---|---|
| Alto y ancho | LG 48px, MD 32px, SM 24px (cuadrado) |
| Padding | LG 12px, MD 8px, SM 4px (`space/4`) |
| Tamaño del ícono | LG 24px, MD 16px, SM 16px |
| Radio, Corner=Square | 4px (`semantic/sm`) |
| Radio, Corner=Rounded | 999px (`semantic/full`) |
| Anillo de foco | 2px (`focus/width`), color `border/focus` #339947 |

Medido directamente en variantes Type=Filled, Color=Evergreen, State=Default: Square para LG y SM, Rounded para MD. El padding de LG y MD se leyó como valor fijo, sin token de espaciado asociado. Las variantes Outline y el resto de los estados no se midieron una por una.

## Semántica

[Pending confirmation]

## Iconografía

| Slot | Descripción |
|---|---|
| largeIcon | Size=LG. Ícono de 24px. Las variantes inspeccionadas usan `send`. |
| mediumIcon | Size=MD. Ícono de 16px. Las variantes inspeccionadas usan `send`. |
| smallIcon | Size=SM. Ícono de 16px. Las variantes inspeccionadas usan `trash`. |

## Variantes (Propiedades)

### Type

| Valor | Descripción |
|---|---|
| Filled | Variante con relleno de fondo. |
| Outline | Variante definida por su borde. |

### Color

| Valor | Descripción |
|---|---|
| Evergreen | Verde. Usa `surface/evergreen/bold` #297a39 en la variante inspeccionada. |
| Indigo | Índigo. |
| Inverse | Fondo claro. Existe solo con Type=Filled y no tiene estado Disable. |
| Default | Neutro. Existe con Type=Outline en los cinco estados, y con Type=Filled solo en State=Disable. |

### State

| Valor | Descripción |
|---|---|
| Default | Variante en reposo. |
| Hover | Variante de hover. |
| Pressed | Variante de presionado. |
| Focused | Variante con anillo de foco. |
| Disable | Variante deshabilitada. Existe solo con Color=Default. |

### Size

| Valor | Descripción |
|---|---|
| SM | 24×24px. |
| MD | 32×32px. |
| LG | 48×48px. |

### Corner

| Valor | Descripción |
|---|---|
| Square | Radio de 4px. |
| Rounded | Radio de 999px (inspeccionado en Size=MD), apariencia circular. |

## Estados

| Estado | Descripción | Cambios visuales |
|---|---|---|
| Default | Variante en reposo. | Tokens base del Type y Color. |
| Hover | La variante existe. | Cambia el fondo (ver Mapeo de tokens). |
| Pressed | La variante existe. | Cambia el fondo (ver Mapeo de tokens). |
| Focused | La variante existe. | Anillo de 2px en `border/focus` #339947. |
| Disable | La variante existe, solo para Color=Default. | Tokens disabled de fondo o borde e ícono. |

## Mapeo de tokens

### Verificados directamente en Figma (variante inspeccionada)

| Categoría | Token | Uso |
|---|---|---|
| Fondo | `surface/evergreen/bold` #297a39 | Type=Filled, Color=Evergreen, State=Default |
| Ícono | `icon/inverse` #f7f8f7 | Type=Filled, Color=Evergreen, State=Default |
| Radio | `semantic/sm` 4 | Corner=Square (Size=LG y SM inspeccionados) |
| Radio | `semantic/full` 999 | Corner=Rounded (Size=MD inspeccionado) |
| Padding | `space/4` 4 | Size=SM |

### Presentes en las variables de Figma del componente (vínculo con cada variante no verificado)

Los nombres y valores de los tokens existen en Figma. La columna de uso proviene de la documentación anterior y no se comprobó variante por variante [Pending confirmation].

| Token | Valor | Uso (Legacy) |
|---|---|---|
| `surface/evergreen/bold/hovered` | #1f5c2b | Filled, Evergreen, Hover |
| `surface/evergreen/bold/pressed` | #174520 | Filled, Evergreen, Pressed |
| `surface/indigo/bold` | #6b1b99 | Filled, Indigo, Default |
| `surface/indigo/bold/hovered` | #4f0077 | Filled, Indigo, Hover |
| `surface/indigo/bold/pressed` | #30004a | Filled, Indigo, Pressed |
| `background/canvas` | #ffffff | Filled, Inverse, Default |
| `background/interactive/hovered` | #f7f8f7 | Fondo hover de Filled Inverse y de Outline |
| `background/interactive/pressed` | #e9ecea | Fondo pressed de Filled Inverse y de Outline |
| `background/disabled` | #f4f6f4 | Filled, Disable |
| `border/evergreen` | #297a39 | Outline, Evergreen, borde |
| `border/indigo` | #6b1b99 | Outline, Indigo, borde |
| `border/disabled` | #c3cbc5 | Outline, Disable, borde |
| `icon/evergreen` | #297a39 | Outline, Evergreen, ícono |
| `icon/indigo` | #6b1b99 | Outline, Indigo, ícono |
| `icon/primary` | #5f6d62 | Ícono de Filled Inverse y de Outline Default |
| `icon/disabled` | #9daaa0 | Disable, ícono |
| `border/focus` | #339947 | Anillo de foco |
| `focus/width` | 2 | Grosor del anillo de foco |

### No encontrados en Figma

`border/strong` #5f6d62 figura en la versión anterior como borde de Type=Outline, Color=Default. No aparece en las variables de Figma del componente. `border/default` #c3cbc5 sí está presente, pero se desconoce su uso [Pending confirmation].

## Interacción

Los estados visuales existen como variantes (ver Estados). El comportamiento interactivo no está verificado: no había prototipo ni documentación de interacción disponibles. [Pending confirmation]

## Accesibilidad

Guía de implementación Legacy, tomada de la documentación anterior. No es un requisito oficial del Design System y está pendiente de validación [Pending confirmation]:

- Añadir una etiqueta accesible descriptiva, ya que el control no tiene texto visible (ejemplo anterior: `aria-label="Eliminar"`).
- Marcar el ícono como decorativo (`aria-hidden="true"`).
- En el estado deshabilitado, usar `aria-disabled="true"` y mantenerlo fuera del orden de foco.
- Usar Size=MD (32px) como tamaño mínimo para áreas táctiles en móvil.

## Guías de contenido

[Pending confirmation]

## Ejemplos

### Ejemplo 1

Configuración: Type=Filled, Color=Evergreen, State=Default, Size=LG, Corner=Square

Descripción: Variante de ejemplo listada en la descripción de Figma. No es guía de uso.

### Ejemplo 2

Configuración: Type=Outline, Color=Indigo, State=Hover, Size=MD, Corner=Rounded

Descripción: Variante de ejemplo listada en la descripción de Figma. No es guía de uso.

### Ejemplo 3

Configuración: Type=Outline, Color=Default, State=Disable, Size=SM, Corner=Square

Descripción: Variante de ejemplo listada en la descripción de Figma. No es guía de uso.

## Combinaciones inválidas

### No presentes en el set de variantes (verificado)

Las siguientes combinaciones no tienen variante en Figma, en ningún Size ni Corner. Su ausencia no significa que estén prohibidas oficialmente.

| Type | Color | States sin variante |
|---|---|---|
| Filled | Evergreen, Indigo, Inverse | Disable |
| Filled | Default | Default, Hover, Pressed, Focused |
| Outline | Evergreen, Indigo | Disable |
| Outline | Inverse | Default, Hover, Pressed, Focused, Disable |

### Declaradas oficialmente como inválidas

[Pending confirmation]. La descripción de Figma indica que la validez de estas combinaciones no está confirmada, y `ai/invalid-combinations.md` no tiene entrada para Icon Button.

### Legacy (pendiente de validación)

- La documentación anterior listaba como inválidas las combinaciones ausentes de arriba. Figma no lo confirma.
- largeIcon con Size=MD o SM (usar mediumIcon o smallIcon).
- Color=Inverse sobre fondos claros. Parece una recomendación de uso más que una regla de variantes.

## Checklist de QA

- [ ] Todas las propiedades y valores documentados coinciden con la fuente de Figma disponible. (Parcial: el Layout se midió solo en variantes Filled / Evergreen / Default.)
- [x] Valores de variantes verificados.
- [ ] Valores por defecto incluidos solo cuando están verificados. (Parcial: Size=MD es provisional; ver Aclaración pendiente 9.)
- [ ] Tokens relevantes verificados contra las fuentes disponibles. (Parcial: ver Mapeo de tokens.)
- [x] No se añadió comportamiento no documentado.
- [ ] No se añadieron afirmaciones de accesibilidad no documentadas. (Se incluye guía Legacy etiquetada.)
- [x] Recomendaciones diferenciadas de las observaciones verificadas.
- [x] No quedan placeholders de plantilla sin resolver.
- [x] No quedan instrucciones de plantilla.
- [x] No hay información fabricada.

## Aclaraciones pendientes

1. ¿Qué token de borde usa Type=Outline, Color=Default: `border/strong` (no encontrado en Figma) o `border/default` #c3cbc5?
2. ¿Qué debería decir el bloque "DO NOT USE" de Figma, y se mantienen los elementos Legacy de "Cuándo NO usar"?
3. ¿Alguna de las guías de accesibilidad Legacy o de las recomendaciones de uso Legacy es oficial?
4. ¿El Design System declara oficialmente inválida alguna de las combinaciones ausentes?
5. ¿A qué tokens se vincula realmente cada variante Hover, Pressed, Disable y Outline?
6. ¿Las variantes Outline, el resto de los estados y las variantes Rounded de otros tamaños comparten el padding, el tamaño de ícono y el radio medidos?
7. ¿Son correctos "Action" (type) y "Production" (status)? Provienen del archivo anterior y del manifest, no de Figma.
8. ¿Hay versión y responsable definidos? No se encontró ninguno, por lo que se dejaron fuera del front-matter.
9. ¿Cuál es el default real de Size en el set del componente? El código generado desde Figma al inspeccionar variantes devolvió LG como default, mientras que la descripción del componente en Figma y la implementación en React indican MD. Se mantiene MD como default provisional hasta confirmar la variante por defecto del set.

## Notas / Changelog

Generado el 2026-10-20 a partir del componente en Figma (nodo 2182:3348) y de la documentación anterior de este archivo.

[No verified historical changes available]
