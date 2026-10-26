---
component: "Scorecard"
system: "Genome Evolution Design System"
type: "Component set"
status: "Design"
version: "1.0"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2191-2125"
last_updated: "2026-10-23"
tags:
  - "data-display"
  - "metric"
  - "kpi"
---

# Scorecard

Sistema: Genome Evolution Design System

## Resumen del componente

Scorecard muestra un único valor destacado con una descripción breve, en dos tamaños, con la descripción debajo o encima del valor.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: una tarjeta compacta para destacar un número o una métrica clave. El component set (nodo de Figma `2191:2125`) consta de un contenedor blanco redondeado con un texto grande "Value" y un texto pequeño "Description". En Figma no hay una descripción escrita definida para Scorecard.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Size | SM, MD | SM |
| Style | Top value, Bottom value | Top value |

Los textos del valor y de la descripción no se exponen como propiedades.

### Configuración por defecto

Los valores por defecto de las propiedades que expone Figma son `Size=SM` y `Style=Top value`. Esto corresponde a la variante `2191:2126`, la variante superior izquierda del component set: un valor de 24px sobre una descripción de 10px.

### Uso típico

Observaciones verificadas:

- `Size=SM` usa un valor de 24px regular; `Size=MD` usa un valor de 36px semibold. La descripción mide 10px en ambos tamaños.
- `Style=Top value` ubica el valor sobre la descripción; `Style=Bottom value` ubica la descripción sobre el valor.
- El ancho de la tarjeta se ajusta a su contenido.
- El valor ("Value") y la descripción ("Description") son textos fijos que solo se pueden cambiar sobrescribiendo las capas de texto.

Interpretación basada en evidencia:

- Usa Scorecard en dashboards, resúmenes o reportes para destacar cifras clave.
- Usa `MD` para métricas principales y `SM` para métricas secundarias o layouts densos.
- Usa `Top value` cuando el número es el foco, y `Bottom value` cuando la descripción funciona como encabezado del número.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: los usuarios necesitan leer cifras clave rápidamente sin recorrer tablas ni gráficos.

### Resultado esperado

Interpretación basada en evidencia: el usuario nota el valor de inmediato y entiende qué mide gracias a la descripción.

### Contexto típico

Interpretación basada en evidencia: dashboards, resúmenes de reportes y páginas de vista general.

## Cuándo usar

Interpretaciones basadas en evidencia, derivadas de la estructura y las propiedades:

- Para destacar un único número o una métrica clave.
- Para mostrar varias métricas una junto a otra en un resumen.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

En Figma no hay restricciones de uso definidas para Scorecard. Solo como recomendaciones:

- Evita usar Scorecard para textos largos o varios valores; contiene un valor y una descripción breve.
- Evita ubicarlo directamente sobre un fondo blanco sin separación; la tarjeta es blanca y no tiene borde ni sombra.

## Estructura (anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Contenedor | Obligatoria | Contenedor blanco con radio de 8px y padding; sin borde ni sombra. |
| Valor | Obligatoria | Texto principal grande. Texto por defecto: "Value". |
| Descripción | Obligatoria | Texto secundario pequeño. Texto por defecto: "Description". |

Ninguno de los textos se puede ocultar; no se exponen propiedades de visibilidad.

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Apilado vertical | Auto layout de Figma |
| Espacio | 0px | `gap/none` |
| Radio | 8px | `radius/8` |
| Padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Tamaño — `SM` | 76 × 58px (con el texto por defecto) | Medición directa |
| Tamaño — `MD` | 127 × 78px (con el texto por defecto) | Medición directa |
| Ancho | Se ajusta al contenido | Auto layout de Figma |
| Alineación — `Top value` | Contenido y texto centrados | Auto layout de Figma |
| Alineación — `Bottom value` | Contenido alineado al inicio (izquierda); texto de la descripción centrado en su línea | Auto layout de Figma |

## Semántica

Interpretación basada en evidencia:

- El valor es la cifra clave; la descripción explica qué representa esa cifra.
- `Style` cambia solo el orden de lectura (primero el valor o primero la descripción), no el significado.

No verificado en Figma: estructura semántica (por ejemplo, encabezado o lista de definiciones), cómo se asocian el valor y la descripción para las tecnologías de asistencia y el formato de los números.

## Variantes (propiedades)

El inventario de variantes es completo: 4 variantes (2 `Size` × 2 `Style`). Se inspeccionaron todas las variantes.

### Size

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| SM | Valor de 24px regular (`Text/Heading/MD`); padding de 8px × 4px. | Valor por defecto; variantes `2191:2126`, `2191:2129` |
| MD | Valor de 36px semibold (`Text/Heading/XL Semibold`); padding de 16px × 8px. | Variantes `2191:2132`, `2191:2135` |

### Style

| Valor | Descripción verificada | Evidencia / notas |
|-------|------------------------|-------------------|
| Top value | Valor sobre la descripción; centrado. | Valor por defecto; variantes `2191:2126`, `2191:2132` |
| Bottom value | Descripción sobre el valor; alineado al inicio. | Variantes `2191:2129`, `2191:2135` |

## Estados

Scorecard no tiene variantes de estado.

## Mapeo de tokens

Todos los tokens siguientes están verificados como variables o estilos de texto de Figma usados por este component set.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color — superficie | `background/canvas` | Fondo del contenedor | Variables de Figma |
| Color — texto | `text/primary` | Valor | Variables de Figma |
| Color — texto | `text/secondary` | Descripción | Variables de Figma |
| Radio | `radius/8` | Radio del contenedor | Variables de Figma |
| Espaciado | `space/16`, `space/8`, `space/4` | Padding | Variables de Figma |
| Espaciado | `gap/none` | Espacio | Variables de Figma |
| Tipografía | `Text/Heading/MD` | Valor (`SM`, 24/36 regular) | Estilo de texto de Figma |
| Tipografía | `Text/Heading/XL Semibold` | Valor (`MD`, 36/48 semibold) | Estilo de texto de Figma |
| Tipografía | `Text/Body/XXS` | Descripción (10/14) | Estilo de texto de Figma |

## Interacción

- Interacciones verificadas: las interacciones de prototipo no estuvieron disponibles a través de las herramientas de inspección.
- Scorecard no tiene elementos interactivos ni variantes de estado.

## Accesibilidad

Requisitos de accesibilidad verificados: no hay ninguno documentado en Figma.

Observaciones relacionadas con la accesibilidad:

- El texto del valor (`text/primary`) tiene 12,78:1 sobre blanco; el texto de la descripción (`text/secondary`) tiene 5,45:1.
- La descripción mide 10px.
- La tarjeta no tiene borde ni sombra, por lo que sobre una superficie blanca su límite no es visible.

Información de accesibilidad faltante: cómo leen juntos el valor y su descripción las tecnologías de asistencia, y el formato de números y unidades.

## Pautas de contenido

Observaciones verificadas:

- El contenido por defecto es "Value" y "Description"; ambos son textos de ejemplo.
- El texto no hace salto de línea en `SM`.

Recomendaciones:

- Mantén el valor breve, como un número con una unidad o un símbolo.
- Escribe una descripción breve que nombre la métrica.

## Ejemplos

### Métrica principal

Configuración: `Size=MD`, `Style=Top value`

Descripción: un número grande con su descripción debajo, para la cifra principal de un dashboard.

Evidencia / clasificación: configuración existente en Figma (variante `2191:2132`).

### Métrica compacta con etiqueta

Configuración: `Size=SM`, `Style=Bottom value`

Descripción: una métrica pequeña con su descripción sobre el número.

Evidencia / clasificación: configuración existente en Figma (variante `2191:2129`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. Nombre del componente: Scorecard, de acuerdo con el nombre utilizado en Figma.
2. Texto fijo. "Value" y "Description" no se exponen como propiedades de texto y no se pueden ocultar. Confirmar si deben agregarse propiedades de texto (y opcionalmente toggles de visibilidad, unidades o indicadores de tendencia).
3. Peso del valor. El valor es regular en `SM` y semibold en `MD`. Confirmar si esta diferencia de peso es intencional.
4. Alineación. `Top value` está centrado, mientras que `Bottom value` está alineado al inicio. Confirmar la alineación prevista para cada estilo.
5. Separación de la tarjeta. La tarjeta es blanca y no tiene borde ni sombra, por lo que es invisible sobre fondos blancos. Confirmar si debe tener borde, sombra o un fondo diferente.

## Notas / registro de cambios

Generado a partir de evidencia de Figma (component set `2191:2125`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
