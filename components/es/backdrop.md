---
component: "Backdrop"
system: "Genome Evolution Design System"
type: "Overlay / Modal"
status: "Design"
version: "1.1"
owner: "UX Design Team"
last_updated: "2026-05-21"
tags: [overlay, backdrop, modal, dialog, drawer, non-interactive, theme-aware]
---
 
# Backdrop — Genome Evolution Design System
 
**Component Type:** Overlay / Modal  
**Status:** Design  
**Version:** 1.1  
**Owner:** UX Design Team  
**Last Updated:** 2026-05-21
 
## Quick Reference
 
| Propiedad | Valores | Default |
|----------|--------|---------|
| Color | White, Black | Black |
 
**Theme-Aware Rendering:**
- Light Theme: Color=Black (overlay oscuro), Color=White (overlay claro)
- Dark Theme: Color=White (overlay claro), Color=Black (overlay oscuro)
**Invalid Combinations:**
- Color=White en Light theme (transparente/invisible)
- Color=Black en Dark theme (transparente/invisible)
- Backdrop sin un componente flotante encima
**Total Variants:** 2 (2 Colors × 1 adaptación por tema = render dependiente del tema)
 
## Purpose
 
El componente Backdrop es una capa overlay semitransparente que bloquea visualmente la interfaz subyacente mientras acompaña un componente flotante (modal, drawer, diálogo, popover). Funciona como mecanismo de separación visual y foco, señalando que el elemento flotante requiere atención y que la interacción con el fondo está temporalmente bloqueada.
 
El componente es **theme-aware**, adaptando automáticamente su color según el tema actual (Light / Dark) para asegurar un bloqueo visual consistente. Es puramente visual y no interactivo por defecto, aunque puede opcionalmente capturar clicks para disparar el cierre del modal.
 
## When to Use
 
- Modales o diálogos que requieren aislamiento de foco respecto al fondo
- Drawers, sidebars o paneles deslizables que se superponen al contenido principal
- Menús tipo popover que necesiten separación visual del fondo
- Cualquier componente flotante/modal que requiera distinción jerárquica
- Para crear experiencias de focus-trap donde se resalte un único elemento interactivo
- Para reducir carga cognitiva atenuando elementos de fondo
- En móviles cuando un modal full-screen necesita bloquear el contenido subyacente
- Para confirmar acciones críticas con diálogos modales
## When NOT to Use
 
- Como elemento interactivo (Backdrop en sí no debería ser accionable)
- Como overlay decorativo o tinte de secciones (usa backgrounds/colores de superficie)
- Sin un componente flotante encima (usa backgrounds o fills de sección)
- Para estados de carga/progreso (usa componentes dedicados de Loading/Progress)
- Como mecanismo principal de foco para contenido no modal
- Para tooltips o popovers livianos (usa Tooltip)
- Para oscurecer el fondo sin un contexto modal
## Anatomy
 
**Partes del componente:**
- **Overlay Layer** (Requerido): rectángulo semitransparente full-viewport que cubre el área accesible. Sin elementos visuales, texto o controles. Una sola forma plana con color y opacidad.
**Dimensiones:**
- Ancho: 100% (llena el viewport/contenedor)
- Alto: 100% (llena el viewport/contenedor)
- Posición: Absolute o Fixed
- Z-index: debajo del elemento flotante (modal/drawer) y encima del contenido de fondo
**Estilo:**
- Fondo: color sólido con transparencia (alpha)
- Sin bordes, sombras ni decoración
- Sin texto ni íconos
- Apariencia uniforme
- Opacidad semitransparente (no completamente opaca ni transparente)
## Variants
 
### Color (2 variantes)
Color define la apariencia del overlay y se adapta al tema.
 
- **Black:** overlay oscuro. En Light theme se renderiza como overlay oscuro (palette/alpha/1000) para oscurecer fondos claros. En Dark theme se renderiza como overlay oscuro (palette/alpha/100) para mantener visibilidad. Útil para énfasis y bloqueo visual.
- **White:** overlay claro. En Light theme se renderiza como overlay claro (palette/alpha/100) para un bloqueo sutil (no recomendado para bloqueo fuerte). En Dark theme se renderiza como overlay claro (palette/alpha/1000) para atenuar fondos oscuros.
 
**Nota de tema:** las combinaciones Color/Theme deben garantizar contraste y visibilidad.
## Interaction
 
El Backdrop no es interactivo por defecto. Su interacción depende del componente flotante:
 
- **Bloqueo de fondo:** Backdrop debe impedir interacción con contenido por debajo (pointer-events) cuando el overlay flotante está abierto.
- **Click para cerrar (opcional):** si es clickeable, el click suele cerrar el modal/drawer y devolver el foco al elemento que lo abrió.
- **Focus trap:** el foco debe permanecer dentro del componente flotante. Backdrop no debe recibir foco.
- **Stacking:** manejar z-index correctamente si existen overlays anidados.
## Accessibility
 
**Estructura HTML:**
- Backdrop es un `<div>` (u otro contenedor)
- No debe recibir foco (sin tabindex o -1)
- No debe ser interactivo por teclado
- Puede usar `role="presentation"`
- No debe tener contenido textual ni hijos interactivos
**Ejemplo de estructura HTML:**
```html
<div class="backdrop" role="presentation" aria-hidden="true"></div>
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <!-- modal content -->
</div>
```
 
**Teclado:**
- No debe ser un tab stop
- Escape pertenece al modal/superficie flotante, no al backdrop
- Tab debe ciclar solo dentro del modal (focus trap)
- No debe capturar eventos de teclado
**Lector de pantalla:**
- Debe ocultarse: `aria-hidden="true"`
- Sin texto que anunciar
- Se anuncia el componente flotante, no el backdrop
- El foco pertenece al modal
**Contraste:**
- Opacidad semitransparente intencional
- El fondo queda visible pero atenuado
- Elegir Black/White asegura visibilidad según tema
- No hay requisito de contraste entre backdrop y la superficie flotante (capas separadas)
## Content Guidelines
 
- Backdrop no contiene contenido: no tiene texto, labels ni información
- Toda la comunicación e interacción pertenece al componente flotante encima
- No agregar texto, íconos o decoración al backdrop
- Mantenerlo como overlay uniforme
## Examples
 
**Modal en Light theme (overlay oscuro):**
Color=Black, Light theme, full-screen, Z-index bajo el modal, Token: palette/alpha/1000 (~70-80% opacidad)
 
**Modal en Dark theme (overlay claro):**
Color=White, Dark theme, full-screen, Z-index bajo el modal, Token: palette/alpha/1000 (~70-80% opacidad)
 
**Drawer con backdrop (Light theme):**
Color=Black, Light theme, full-screen, Z-index bajo el drawer, Token: palette/alpha/1000
 
**Drawer con backdrop (Dark theme):**
Color=White, Dark theme, full-screen, Z-index bajo el drawer, Token: palette/alpha/1000
 
**Backdrop clickeable para cierre:**
Color=Black (Light theme), full-screen, onClick cierra modal, Token: palette/alpha/1000
 
**Backdrop no clickeable:**
Color=Black, full-screen, pointer-events: none, cierre solo con botón, Token: palette/alpha/1000
 
**Diálogo con backdrop:**
Color=Black (Light theme), cover full-screen, diálogo centrado, focus trap activo, Token: palette/alpha/1000
 
**Modales anidados:**
Cada modal tiene su propio backdrop; z-index escalonado; Token: palette/alpha/1000 cada uno
 
**Popover con backdrop sutil:**
Color=White (Light theme, sutil), overlay por área (no full-screen), Token: palette/alpha/100
 
**Modal móvil:**
Color=Black, full viewport, tocar backdrop (opcional) cierra, modal entra desde abajo, Token: palette/alpha/1000
 
**Diálogo crítico:**
Color=Black (alto contraste), full-screen, modal elevado, requiere acción explícita, Token: palette/alpha/1000
 
**Diálogo de confirmación:**
Color=Black, full-screen, modal con "Confirm" y "Cancel", click en backdrop opcional, Token: palette/alpha/1000
