---
component: Badge
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [indicador, etiqueta, estado, tag]
---

# Badge

## Propósito

Muestra contadores, estados o etiquetas de categoría en formato compacto y visualmente distintivo. Los badges proporcionan retroalimentación visual rápida y etiquetado en elementos de UI, comunicando estado, contadores y significado semántico de un vistazo.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Type | Filled, Line | Line |
| Color | Default, Evergreen, Indigo, Inverse, Information, Warning, Error, Success | Default |
| Label | Texto/numérico | 0 |

## Cuándo usar

- Mostrar contador de notificaciones o indicadores de estado
- Mostrar etiquetas de categoría o labels
- Indicar estado (nuevo, actualizado, error, éxito)
- Marcar elementos con significado semántico (advertencias, alertas)
- Destacar cambios de estado accionables
- Agrupar etiquetas relacionadas en espacio compacto
- Proporcionar retroalimentación visual rápida sin interrumpir diseño

## Cuándo NO usar

- Para texto descriptivo largo (máx ~2-3 caracteres)
- Cuando se necesita información detallada
- Como elemento de acción principal
- Para estados de carga (usar spinner dedicado)
- Cuando la accesibilidad requiere texto más largo
- Para contenido interactivo (badges son de solo lectura)

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Contenedor redondeado en forma de píldora | Siempre presente |
| Fondo | Sí | Fondo coloreado (rellenado) o transparente (línea) | Siempre presente |
| Borde | Condicional | Borde coloreado | Solo para Type=Line |
| Etiqueta de texto | Sí | Contenido de texto del badge | Siempre presente |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Descripción |
|-----------|------|----------------|---------|-------------|
| Type | Enum | Line | Filled, Line | Variante de estilo. Filled=fondo sólido; Line=contorno con borde |
| Color | Enum | Default | Default, Evergreen, Indigo, Inverse, Information, Warning, Error, Success | Color semántico indicando estado o significado |
| Label | String | 0 | Cualquier texto (0-3 caract. recomendado) | Contenido de texto del badge |

## Paleta de colores

| Color | Fondo | Borde | Texto | Caso de uso |
|-------|-------|-------|-------|------------|
| Default | surface/raised | border/default | text/inverse (Filled), text/primary (Line) | Estado neutro; badges predeterminados |
| Evergreen | surface/evergreen/bold | icon/evergreen | text/inverse (Filled), text/evergreen (Line) | Éxito, positivo, estado activo |
| Indigo | surface/indigo/bold | border/indigo | text/inverse (Filled), text/indigo (Line) | Primario, marca, estado importante |
| Inverse | background/canvas | icon/inverse | text/secondary | Fondos invertidos/claros |
| Information | surface/info/bold | icon/info | text/inverse (Filled), text/info (Line) | Información, útil, informativo |
| Warning | surface/warning/bold | border/warning | text/inverse (Filled), text/warning (Line) | Precaución, advertencia, atención necesaria |
| Error | surface/danger/bold | icon/danger | text/inverse (Filled), text/danger (Line) | Error, peligro, estado crítico |
| Success | surface/success/bold | icon/success | text/inverse (Filled), text/success (Line) | Éxito, confirmado, positivo |

## Estilos de tipo

| Tipo | Fondo | Borde | Color de texto |
|------|-------|-------|----------------|
| Filled | Color semántico (bold) | Ninguno | text/inverse |
| Line | surface/subtlest (Default) o semántico sutil | Color semántico | Color de texto semántico coincidente |

## Mapeo de tokens

### Fondo

- **Type=Filled, Color=Default**: surface/raised
- **Type=Filled, Color=Evergreen**: surface/evergreen/bold
- **Type=Filled, Color=Indigo**: surface/indigo/bold
- **Type=Filled, Color=Information**: surface/info/bold
- **Type=Filled, Color=Warning**: surface/warning/bold
- **Type=Filled, Color=Error**: surface/danger/bold
- **Type=Filled, Color=Success**: surface/success/bold
- **Type=Filled, Color=Inverse**: background/canvas
- **Type=Line, Color=Default**: surface/subtlest
- **Type=Line, Color=Evergreen**: surface/evergreen/subtle
- **Type=Line, Color=Information**: surface/info/subtle
- **Type=Line, Color=Warning**: surface/warning/subtle
- **Type=Line, Color=Error**: surface/danger/subtle
- **Type=Line, Color=Success**: surface/evergreen/subtle

### Texto

- **Type=Filled**: text/inverse
- **Type=Line, Color=Default**: text/primary
- **Type=Line, Color=Evergreen**: text/evergreen
- **Type=Line, Color=Indigo**: text/indigo
- **Type=Line, Color=Inverse**: text/inverse
- **Type=Line, Color=Information**: text/info
- **Type=Line, Color=Warning**: text/warning
- **Type=Line, Color=Error**: text/danger
- **Type=Line, Color=Success**: text/success

### Borde

- **Type=Line, Color=Default**: border/default
- **Type=Line, Color=Evergreen**: icon/evergreen
- **Type=Line, Color=Indigo**: border/indigo
- **Type=Line, Color=Inverse**: icon/inverse
- **Type=Line, Color=Information**: icon/info
- **Type=Line, Color=Warning**: border/warning
- **Type=Line, Color=Error**: icon/danger
- **Type=Line, Color=Success**: icon/success

### Tipografía

- **Label**: Text/Label/XS (family/body, weight/semibold, size/11, lineHeight/16, letterSpacing/wide)

### Espaciado

- **Relleno horizontal**: space/4 (4px)
- **Relleno vertical**: space/0 (0px)
- **Radio de borde**: 350px (píldora completamente redondeada)

## Estados

[Sin estados interactivos; badges son elementos de solo lectura]

## Tamaños

| Dimensión | Valor |
|-----------|-------|
| Altura | Auto (ajustado al texto) |
| Ancho | Auto (ajustado al texto + relleno) |
| Ancho mínimo | ~20px |
| Radio de borde | 350px (forma píldora) |
| Tamaño de fuente | 11px |
| Altura de línea | 16px |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Contraste de texto | Texto de alto contraste en fondo; verificar WCAG AA |
| Color semántico | No confiar solo en color; el texto de etiqueta debe transmitir significado |
| Estado deshabilitado | Sin estado deshabilitado; usar reducción de opacidad si es necesario |
| Estado de enfoque | Los badges no son enfocables; sin interacción de teclado |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Contador de notificaciones | Contador de mensajes no leídos | Type=Filled, Color=Default, Label="5" |
| Indicador de éxito | Acción confirmada | Type=Filled, Color=Success, Label="✓" |
| Etiqueta de advertencia | Estado de alerta/precaución | Type=Line, Color=Warning, Label="!" |
| Etiqueta de información | Indicador de característica nueva | Type=Line, Color=Information, Label="New" |
| Estado de error | Condición de error | Type=Filled, Color=Error, Label="!" |
| Etiqueta activa | Estado activo | Type=Line, Color=Evergreen, Label="Active" |
| Estado de borrador | Trabajo en progreso | Type=Line, Color=Default, Label="Draft" |
| Badge importante | Estado de marca/primario | Type=Filled, Color=Indigo, Label="Important" |

## Guías de uso

- Mantener etiquetas cortas (0-3 caracteres recomendado; máx 5 caracteres)
- Usar colores semánticos para transmitir significado
- Emparejar color con ícono o texto para claridad (no confiar solo en color)
- Combinar badges con otros elementos de UI (botones, listas, tarjetas)
- Usar Filled para estado prominente; Line para secundario
- Asegurar contraste suficiente entre texto y fondo
- Posicionar badges cerca del contenido relevante
- Usar estilo consistente dentro de áreas de características

## Notas de implementación

- Badge no recibe enfoque de teclado
- Badge no es interactivo; colocar dentro de elemento interactivo si se necesita acción
- Considerar comportamiento responsivo para pantallas pequeñas
- Truncamiento de texto no recomendado; usar etiquetas más cortas
