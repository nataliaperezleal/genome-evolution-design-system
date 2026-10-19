---
component: .BreadcrumbItem
system: Genome Evolution Design System
type: Component
status: "Production"
version: 1.0
owner: UX Design Team
last_updated: 2026-05-27
tags: [navegacion, jerarquia, componente-interno, breadcrumb]
---

# .BreadcrumbItem

## Propósito

Elemento individual de breadcrumb que representa un solo paso en la jerarquía de navegación. Se utiliza internamente por el componente Breadcrumb para construir la ruta de navegación. Este es un componente interno y no debe usarse directamente en interfaces; siempre use el contenedor principal Breadcrumb en su lugar.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Item | Overflow, Level, Current | Overflow |
| State | Default, Disabled, Hovered, Pressed, Focused | Default |
| Text | String | Text (Level/Current), ... (Overflow) |

## Cuándo usar

- Construir implementaciones personalizadas de breadcrumb
- Extender componente Breadcrumb con tipos de elementos adicionales
- Crear patrones de navegación tipo breadcrumb
- Desarrollar patrones de navegación especializados

## Cuándo NO usar

- Como componente independiente en interfaces de usuario (usar padre Breadcrumb)
- Para elementos fuera del contexto de navegación breadcrumb
- Cuando el componente Breadcrumb puede usarse directamente
- Para navegación no jerárquica

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Envoltorio de elemento con relleno y radio de borde | Siempre presente |
| Etiqueta de texto | Sí | Contenido de texto/etiqueta de elemento | Siempre presente |
| Separador | Condicional | Ícono de chevron (final) | Solo para elementos Overflow y Level |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Descripción |
|-----------|------|----------------|---------|-------------|
| Item | Enum | Overflow | Overflow, Level, Current | Tipo de elemento breadcrumb en jerarquía |
| State | Enum | Default | Default, Disabled, Hovered, Pressed, Focused | Estado visual e interactivo |
| Text | String | Dependiente del contexto | Cualquier string | Texto de etiqueta del elemento |

## Tipos de elemento

| Tipo | Descripción | Pantalla de texto | Separador | Caso de uso |
|------|-------------|------------------|-----------|------------|
| Overflow | Indicador colapsado | "..." (puntos suspensivos) | Sí (chevron-right) | Elemento raíz al mostrar breadcrumbs colapsados |
| Level | Nivel intermedio de jerarquía | Texto personalizable | Sí (chevron-right) | Niveles principales (Level 2-4 en jerarquía) |
| Current | Página actual/final | Texto personalizable | No | Último elemento indicando ubicación página actual |

## Estados

| Estado | Descripción | Cambios visuales | Fondo | Borde |
|--------|-------------|------------------|-------|-------|
| Default | Estado de elemento estándar | Colores estándar | Transparente | Ninguno |
| Hovered | Hover del ratón sobre elemento | Resaltado de fondo claro | interactive/hovered | Ninguno |
| Pressed | Clic/presión activa | Fondo más oscuro | interactive/pressed | Ninguno |
| Focused | Enfoque de teclado vía Tab | Borde de enfoque verde | Transparente | Borde 2px border/focus |
| Disabled | Estado no interactivo | Color de texto apagado | Transparente | Ninguno |

## Tipografía

| Tipo de elemento | Peso | Estilo | Tamaño | Altura línea | Espaciado letra |
|------------------|------|--------|--------|------------|-----------------|
| Overflow | semibold | Text/Button/MD | 14px | 16px | normal |
| Level | regular | Text/Body/SM | 14px | 20px | 0 |
| Current | semibold | Text/Button/MD | 14px | 16px | normal |

## Mapeo de tokens

### Fondo

- **State=Default**: Transparente
- **State=Hovered**: background/interactive/hovered
- **State=Pressed**: background/interactive/pressed
- **State=Focused**: Transparente (solo borde)
- **State=Disabled**: Transparente

### Color de texto

- **Overflow, Default**: text/primary
- **Overflow, Disabled**: text/disabled
- **Level, Default/Hovered/Pressed/Focused**: text/secondary
- **Level, Disabled**: text/disabled
- **Current, Default/Hovered/Pressed/Focused**: text/primary
- **Current, Disabled**: text/disabled

### Borde

- **State=Focused**: border/focus (2px)
- **State=Default/Hovered/Pressed/Disabled**: Ninguno

### Ícono (Separador Chevron)

- **Estado Default/Disabled**: Ícono gris primario
- **Estado Hovered/Pressed/Focused**: Ícono gris secundario
- **Tamaño ícono**: 12px (ancho) × 12px (alto)
- **Tamaño contenedor**: 12px ancho × 12.004px alto

### Espaciado

- **Relleno horizontal**: space/8 (8px)
- **Relleno vertical**: space/8 (8px)
- **Brecha (texto a chevron)**: gap/sm (8px)
- **Radio de borde**: radius/4 (4px)
- **Altura elemento**: 36px

## Guía visual de estados de interacción

### Elemento Overflow
- **Default**: "..." en semibold, texto primario, chevron estándar
- **Hovered**: Fondo claro con "..."
- **Pressed**: Fondo más oscuro con "..."
- **Focused**: Borde verde con "..."
- **Disabled**: "..." en color texto deshabilitado, chevron deshabilitado

### Elemento Level
- **Default**: "Text" en regular, texto secundario, chevron estándar
- **Hovered**: Fondo claro con "Text"
- **Pressed**: Fondo más oscuro con "Text"
- **Focused**: Borde verde con "Text"
- **Disabled**: "Text" en color texto deshabilitado, chevron deshabilitado

### Elemento Current
- **Default**: "Text" en semibold, texto primario (sin separador)
- **Hovered**: Fondo claro con "Text"
- **Pressed**: Fondo más oscuro con "Text"
- **Focused**: Borde verde con "Text"
- **Disabled**: "Text" en color texto deshabilitado (sin separador)

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Elemento overflow | Raíz de puntos suspensivos | Item=Overflow, State=Default |
| Navegación de nivel | Breadcrumb intermedio | Item=Level, State=Default, Text="Products" |
| Página actual | Breadcrumb final | Item=Current, State=Default, Text="Electronics" |
| Nivel en hover | Hover interactivo | Item=Level, State=Hovered |
| Navegación enfocada | Enfoque de teclado | Item=Level, State=Focused |
| Breadcrumb deshabilitado | No interactivo | Item=Level, State=Disabled |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Navegación de teclado | Los elementos deben ser enfocables (tecla Tab) |
| Indicador de enfoque | Borde verde visible de 2px en enfoque |
| Contraste de color de texto | Todos los colores de texto cumplen estándares WCAG AA |
| Estado deshabilitado | Visualmente deshabilitado; pointer-events deshabilitado |
| HTML semántico | Debe implementarse como elementos de enlace dentro de nav breadcrumb |
| Etiquetas ARIA | Debe marcarse con ARIA breadcrumb apropiado |

## Guías de uso

- No use como componente independiente; use padre Breadcrumb
- El contenido de texto debe ser conciso y descriptivo
- Mantener estilo consistente dentro de rutas de breadcrumb
- Asegurar accesibilidad de teclado (navegación Tab)
- Usar tipo de elemento apropiado para posición en jerarquía
- El elemento actual debe ser siempre el último en breadcrumb
- Proporcionar retroalimentación visual para todos los estados interactivos
- Deshabilitar elementos solo cuando sea necesario (enlaces rotos, secciones no disponibles)

## Notas de implementación

- El componente está diseñado para uso interno dentro de Breadcrumb
- El tipo de elemento y estado determinan toda presentación visual y de texto
- El separador de chevron está oculto para tipo de elemento Current
- El elemento Overflow muestra "..." automáticamente (sin personalización)
- El borde de enfoque utiliza ancho sólido de 2px
- Las transiciones de fondo se aplican a estados hover y press
- El color de texto varía según la combinación de tipo de elemento y estado
- El color del ícono (chevron) cambia basado en estado de interacción