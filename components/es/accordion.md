---
component: Accordion
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [expandible, colapsable, contenido, divulgacion]
---

# Accordion

## Propósito

Permite a los usuarios alternar la visibilidad de secciones de contenido para gestionar la densidad de información y mejorar la facilidad de lectura de la interfaz. Los componentes accordion agrupan contenido relacionado en secciones colapsables, reduciendo la carga cognitiva al ocultar información secundaria mientras se mantiene el acceso a los detalles cuando sea necesario.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Behavior | Collapsed, Expanded | Collapsed |
| Color | Default, Evergreen, Indigo | Default |
| Size | SM, MD | MD |
| State | Default, Disabled, Hovered, Pressed, Focused, Loading | Default |
| Show Badge | true, false | false |
| Show Checkbox | true, false | false |
| Show Left Icon | true, false | false |
| Text | String | Placeholder |

## Cuándo usar

- Agrupar contenido relacionado en secciones colapsables
- Reducir la carga cognitiva ocultando información secundaria
- Organizar información jerárquica (preguntas frecuentes, configuración, filtros)
- Crear diseños compactos con detalles expandibles
- Organizar contenido en formularios con secciones opcionales
- Gestionar espacio en diseños con información densa
- Soportar patrones de divulgación progresiva

## Cuándo NO usar

- Para información crítica que debe estar siempre visible
- Cuando el contenido se alterna frecuentemente (preferir diseño siempre visible)
- Para elementos individuales (usar divulgación en su lugar)
- Cuando las relaciones de contenido requieren visibilidad constante
- Para estructuras de navegación primaria
- Cuando todas las secciones generalmente están expandidas

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Encabezado | Sí | Contenedor clickeable con texto y controles | Siempre presente |
| Texto | Sí | Texto de etiqueta del encabezado describiendo contenido | Siempre presente |
| Ícono de chevron | Sí | Ícono giratorio indicando estado expandido/colapsado | Siempre presente |
| Contenedor de contenido | Condicional | Contenedor para contenido expandible | Solo cuando Behavior=Expanded |
| Checkbox | Condicional | Control de selección para encabezado | Solo cuando Show Checkbox=true |
| Badge | Condicional | Badge indicador mostrando contador/estado | Solo cuando Show Badge=true |
| Ícono izquierdo | Condicional | Ícono apareciendo a la izquierda del texto | Solo cuando Show Left Icon=true |
| Borde | Condicional | Borde inferior distinguiendo secciones | Visible en expandido y ciertos estados |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Se aplica a | Descripción |
|-----------|------|----------------|---------|------------|-------------|
| Behavior | Enum | Collapsed | Collapsed, Expanded | Todos | Controla si el contenido es visible. Collapsed muestra solo encabezado; Expanded muestra encabezado y área de contenido |
| Color | Enum | Default | Default, Evergreen, Indigo | Todos | Aplica tema de color semántico. Afecta color de texto, bordes y fondo en estados interactivos |
| Size | Enum | MD | SM, MD | Todos | Controla relleno y espaciado. SM=compacto, MD=estándar |
| State | Enum | Default | Default, Disabled, Hovered, Pressed, Focused, Loading | Todos | Estado visual que afecta color de fondo, bordes e interactividad |
| Show Badge | Boolean | false | true, false | Todos | Muestra/oculta indicador badge en encabezado |
| Show Checkbox | Boolean | false | true, false | Todos | Muestra/oculta control de checkbox antes del texto |
| Show Left Icon | Boolean | false | true, false | Todos | Muestra/oculta ícono a la izquierda del contenido de texto |
| Text | String | Placeholder | Cualquier string | Todos | Texto de etiqueta del encabezado |

## Estados

| Estado | Descripción | Cambios visuales |
|--------|-------------|------------------|
| Default | Estado estándar del accordion | Fondo canvas; borde predeterminado |
| Hovered | Estado de hover del ratón | Color de fondo interactivo/hover |
| Pressed | Estado de clic/presión activa | Color de fondo interactivo/presionado; fondo más oscuro |
| Focused | Estado de enfoque del teclado | Borde de enfoque verde (2px border/focus) |
| Disabled | Estado no interactivo | Fondo deshabilitado; color de texto deshabilitado; cursor deshabilitado |
| Loading | Estado de carga de contenido | Animación de marcador; elementos de esqueleto de carga |

## Tamaños

| Tamaño | Relleno | Altura (Colapsado) | Tamaño texto | Tamaño badge | Espaciado | Notas |
|--------|---------|-------------------|--------------|--------------|-----------|-------|
| SM | 8px horizontal, 2px vertical | 24px | 14px (Text/Body/SM) | 10px | 8px gap | Diseño compacto; espaciado reducido |
| MD | 16px horizontal, 8px vertical | 36px | 14px (Text/Body/SM) | 10px | 8px gap | Estándar; recomendado |

## Mapeo de tokens

### Fondo

- **State=Default**: background/canvas
- **State=Hovered**: background/interactive/hovered
- **State=Pressed**: background/interactive/pressed
- **State=Disabled**: background/disabled
- **State=Loading**: background/canvas
- **Área de contenido**: background/canvas

### Texto

- **Color=Default, State=Default**: text/primary
- **Color=Default, State=Disabled**: text/disabled
- **Color=Evergreen**: text/evergreen
- **Color=Indigo**: text/indigo

### Borde

- **Behavior=Collapsed, State=Default**: border/default (fondo)
- **Behavior=Expanded**: border/strong (Color=Default), border/evergreen (Color=Evergreen), border/indigo (Color=Indigo) (fondo)
- **State=Focused**: border/focus (2px, todos los lados)
- **State=Disabled**: border/disabled

### Ícono

- **Chevron abajo**: Ícono vector (12px)
- **Chevron arriba**: Ícono vector (12px)
- **Ícono izquierdo**: 16px

### Tipografía

- **Texto**: Text/Body/SM (family/body, weight/regular, size/14, lineHeight/20)
- **Badge**: 10px semibold

### Espaciado

- **Relleno encabezado SM**: space/8 horizontal, space/2 vertical
- **Relleno encabezado MD**: space/16 horizontal, space/8 vertical
- **Relleno contenido**: space/16 (MD), space/8 (SM)
- **Brecha entre elementos**: gap/sm (8px)
- **Altura contenido**: 100px

### Radio

- **Área de contenido**: radius/4

### Sombra

[Pendiente de confirmación]

## Contenedores de contenido

El accordion soporta diferentes áreas de contenido basadas en combinaciones de tamaño y color:

| Tipo de contenido | Se aplica a | Propósito |
|-------------------|------------|----------|
| Content SM Default | Size=SM, Color=Default, Behavior=Expanded | Área de contenido compacta para tema color predeterminado |
| Content SM Evergreen | Size=SM, Color=Evergreen, Behavior=Expanded | Área de contenido compacta para tema evergreen |
| Content SM Indigo | Size=SM, Color=Indigo, Behavior=Expanded | Área de contenido compacta para tema indigo |
| Content MD Default | Size=MD, Color=Default, Behavior=Expanded | Área de contenido estándar para tema color predeterminado |
| Content MD Evergreen | Size=MD, Color=Evergreen, Behavior=Expanded | Área de contenido estándar para tema evergreen |
| Content MD Indigo | Size=MD, Color=Indigo, Behavior=Expanded | Área de contenido estándar para tema indigo |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Estado de enfoque | Borde verde visible 2px (border/focus) |
| Interacción de teclado | Espacio/Enter alterna estado expandido; gestión de enfoque requerida |
| Atributos ARIA | [Pendiente de confirmación] |
| Indicación de estado | Cambios de color y borde visuales; rotación de ícono |
| Estado deshabilitado | Visualmente deshabilitado; cursor not-allowed |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Sección de preguntas frecuentes | Accordion básico para preguntas frecuentes | Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=false |
| Panel de filtros | Accordion con múltiples opciones de filtro | Behavior=Collapsed, Color=Default, Size=MD, Show Checkbox=true |
| Grupo de configuración | Configuración agrupada con contador de badge | Behavior=Collapsed, Color=Evergreen, Size=MD, Show Badge=true |
| Formulario compacto | Formulario que ahorra espacio con secciones opcionales | Behavior=Collapsed, Color=Indigo, Size=SM |
| Sección activa | Accordion actualmente expandido | Behavior=Expanded, State=Default |
| Accordion deshabilitado | Accordion no interactivo | State=Disabled |
| Estado de carga | Contenido cargando | State=Loading |

## Combinaciones inválidas

[Pendiente de confirmación - sin combinaciones inválidas explícitas documentadas en material fuente]

## Guías de interacción

- Hacer clic en el encabezado alterna entre estados Collapsed y Expanded
- En estado Expanded, el ícono de chevron apunta hacia arriba; en estado Collapsed, apunta hacia abajo
- El estado de enfoque aplica un borde verde para accesibilidad de teclado
- El estado deshabilitado previene todas las interacciones
- El estado de carga muestra marcadores de esqueleto en el área de contenido
- El checkbox se puede usar independientemente del comportamiento expandir/colapsar
- Las actualizaciones del badge deben reflejar el estado actual (ej. contador de elementos)

## Guías de uso

- Usa accordion para reducir densidad visual sin ocultar por completo el contenido relacionado
- Mantén títulos de encabezado cortos para que el escaneo sea rápido
- Prefiere el tamaño predeterminado y usa SM solo cuando el espacio sea limitado
- Combina badge y checkbox solo cuando aporten contexto claro a la sección
- Evita anidamientos profundos que compliquen el escaneo y la navegación por teclado

## Notas de implementación

- Conserva la estructura encabezado-primero para que el contenido expandido se perciba asociado
- Mantén visible el estilo de foco para usuarios de teclado, especialmente en listas densas
- Trata el estado loading como un placeholder de contenido, no como un patrón de layout distinto
- Conserva consistente el área de contenido expandida entre variantes de color
