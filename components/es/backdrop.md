---
component: Backdrop
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [superposicion, modal, fondo, enfoque]
---

# Backdrop

## Propósito

Proporciona una capa de superposición semi-transparente que oscurece o aclara el contenido de fondo, comúnmente utilizada con diálogos modales, menús desplegables y otras superposiciones para establecer jerarquía visual y enfoque. El backdrop crea un efecto scrim que reduce la complejidad visual del fondo y dirige la atención del usuario al contenido primario.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Color | White, Black | Black |

## Cuándo usar

- Oscurecer fondo al mostrar diálogos modales
- Crear enfoque en contenido de superposición (menús desplegables, popovers, tooltips)
- Reducir desorden visual desaturando el fondo
- Establecer separación visual entre capas
- Mejorar contraste para contenido flotante
- Desactivar interacción de fondo durante interacción modal
- Crear jerarquía visual en capas

## Cuándo NO usar

- Para fondos de página permanentes
- Cuando se requiere interacción total con el fondo
- Sin componente de superposición acompañante
- Para estados de hover simples sin modal
- Cuando la accesibilidad requiere visibilidad de contenido de fondo
- Como elemento decorativo sin propósito funcional

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor de superposición | Sí | Capa de fondo semi-transparente | Siempre presente |
| Efecto de desenfoque | Sí | Desenfoque de backdrop aplicado al contenido detrás | Siempre presente |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Descripción |
|-----------|------|----------------|---------|-------------|
| Color | Enum | Black | White, Black | Controla color de superposición. Black crea superposición oscura; White crea superposición clara |

## Especificaciones visuales

| Atributo | Valor |
|----------|-------|
| Ancho | 182px |
| Altura | 131px |
| Desenfoque de backdrop | 8px |
| Opacidad | 60% (0.6) |
| Desbordamiento | clip |

## Estados

[Solo existe un estado visual; sin estados interactivos]

## Colores

| Color | Valor de superposición | Hex (Referencia) | Caso de uso |
|-------|----------------------|------------------|------------|
| Black | overlay/black | rgba(76,87,78,0.6) | Tinte oscuro; modales, superposiciones estándar |
| White | overlay/white | rgba(247,248,247,0.6) | Tinte claro; superposiciones tema claro, fondos sutiles |

## Mapeo de tokens

### Fondo

- **Color=Black**: overlay/black (rgba(76,87,78,0.6))
- **Color=White**: overlay/white (rgba(247,248,247,0.6))

### Efectos

- **Blur**: backdrop-blur-8px
- **Desbordamiento**: clip (previene artefactos de desenfoque en bordes)

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Contraste de color | Superposiciones semi-transparentes; verificar contraste con contenido subyacente |
| Opacidad | 60% mantiene algo de visibilidad de fondo; suficiente para contexto modal |
| Gestión de enfoque | Backdrop no recibe enfoque; el enfoque debe estar en contenido modal |
| Navegación de teclado | Backdrop típicamente no interactivo; modal subyacente maneja interacciones |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Diálogo modal | Superposición oscura estándar para modal | Color=Black |
| Modal tema claro | Superposición sutil para interfaces claras | Color=White |
| Scrim de menú desplegable | Oscurecimiento de fondo para menús desplegables | Color=Black |
| Fondo de popover | Superposición establecedora de enfoque para popovers | Color=Black |
| Fondo de notificación | Fondo semi-transparente para notificaciones toast | Color=Black |

## Guías de uso

- Siempre emparejar backdrop con componente modal, desplegable u otra superposición
- Asegurarse de que backdrop cubra toda la ventana gráfica o área prevista
- Black se recomienda para la mayoría de casos de uso
- White debe usarse en interfaces con tema claro
- El efecto de desenfoque de backdrop mantiene cierta visibilidad del contenido de fondo
- Considerar backdrop como capa no interactiva; manejar interacciones en componente de superposición arriba

## Notas de implementación

- Backdrop debe posicionarse absolutamente o fijo detrás del contenido de superposición
- Z-index debe ser menor que componente de superposición pero mayor que contenido de página principal
- El efecto de desenfoque puede afectar el rendimiento en dispositivos de gama baja; considerar optimización
- Nivel de opacidad (60%) balancea enfoque con visibilidad de fondo
