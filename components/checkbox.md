---
component: "Checkbox"
system: "Genome Evolution Design System"
type: "Form / Selection"
status: "Design"
version: "1.0"
owner: "UX Design Team"
last_updated: "2025-05-19"
tags: [form, selection, binary, checkbox, accessibility]
---
 
# Checkbox — Genome Evolution Design System
 
**Component Type:** Form / Selection
**Status:** Design
**Version:** 1.0
**Owner:** UX Design Team
**Last Updated:** 2025-05-19
**Size:** 415×300px (component set)
 
## Quick Reference
 
| Property | Values | Default |
|----------|--------|---------|
| Color | Default, Evergreen, Indigo, Disabled | Default |
| State | Default, Hovered, Pressed, Focused, Disable | Default |
| Type | Default, Check, Mixed | Default |
| Show Label | true, false | true |
| Label | TEXT | "Label" |
 
**Invalid Combinations:**
- Color=Disabled + State distinto de Disable (no mezclar Disabled con Hovered, Pressed o Focused)
- Type=Default + interpretación de seleccionado (Type=Default es vacío/sin marcar)
- Show Label=false sin accesibilidad (nunca dejar el checkbox sin contexto accesible)
- Type=Mixed con Color=Disabled en estado Default (estado indeterminado no válido en deshabilitado)
---
 
## Purpose
 
El Checkbox es un control de selección que permite al usuario marcar una o varias opciones de forma independiente. Es ideal para selecciones múltiples, aceptación de términos, filtros y preferencias donde el usuario puede seleccionar cero, una o múltiples opciones sin restricciones de exclusión mutua.
 
El componente soporta tres estados de selección:
- **Default:** Sin marcar / Estado vacío
- **Check:** Marcado / Seleccionado
- **Mixed:** Indeterminado / Selección parcial (útil para tablas con selección jerárquica)
---
 
## When to Use
 
- Selección múltiple en formularios donde el usuario puede elegir varias opciones
- Aceptación de términos y condiciones o políticas de privacidad
- Filtros de lista donde se pueden aplicar múltiples criterios simultáneamente
- Selección masiva de ítems en tablas o listas (con estado Mixed para selección parcial)
- Preferencias de configuración o permisos donde múltiples opciones son independientes
- Validación de características o funcionalidades disponibles
- Consentimiento para múltiples canales de comunicación o servicios
---
 
## When NOT to Use
 
- Selección exclusiva entre opciones: usar Radio Button en su lugar
- Activar/desactivar una función en tiempo real: usar Toggle/Switch
- Navegación entre vistas o páginas: usar Tab o Navigation
- Selección única obligatoria: usar Dropdown Select o Radio Button
- Cambios de estado inmediatos: usar Switch que proporciona retroalimentación visual instantánea
- Estados indeterminados sin contexto jerárquico: usar Type=Default o Type=Check
---
 
## Anatomy
 
El componente Checkbox está compuesto por los siguientes elementos:
 
**Partes del componente:**
- **Checkbox box** (Obligatorio): Cuadrado contenedor que cambia de estilo según State (Default/Hovered/Pressed/Focused/Disable). Tamaño: variable según contexto (típicamente 16×16px, 20×20px, 24×24px)
- **Check icon** (Condicional): Ícono de marca visible solo cuando Type=Check. Varía según Color y State
- **Mixed indicator** (Condicional): Línea o símbolo visible solo cuando Type=Mixed. Indica selección parcial en contextos jerárquicos
- **Label text** (Condicional): Texto descriptivo visible solo cuando Show Label=true. Describe la opción que representa el checkbox
- **Focus ring** (Automático): Anillo de enfoque visible cuando State=Focused. Proporciona accesibilidad para navegación por teclado
**Dimensiones estándar:**
- Ancho checkbox box: 16px, 20px o 24px (según escala)
- Alto checkbox box: 16px, 20px o 24px (según escala)
- Gap entre box y label: 8px
- Altura total con label: 24px (típico), 32px (grande)
- Radio de esquinas (corner): 4px (checkbox box), 2px (ícono)
**Espaciado:**
- Padding interno del componente: 0px (ajustado por parent container)
- Margin mínimo recomendado: 8px (para evitar clics accidentales en checkboxes adyacentes)
- Line height del label: 16px (para 12px font), 20px (para 14px font)
---
 
## Variants
 
### Color (4 variantes)
 
- **Default:** Color primario del sistema (azul/neutro). Usado en formularios estándar. Proporciona máximo contraste y jerarquía visual normal.
- **Evergreen:** Color verde/success. Usado para acciones positivas, confirmaciones o selecciones deseables. Comunica éxito o validación positiva.
- **Indigo:** Color secundario/accent. Usado para opciones destacadas o de importancia media. Proporciona énfasis visual sin ser tan dominante como Evergreen.
- **Disabled:** Color neutro/gris. Usado cuando la opción no está disponible o es readonly. El checkbox no es interactivo. State debe ser Disable.
### State (5 variantes)
 
- **Default:** Estado base sin interacción. Cursor normal. Totalmente interactivo.
- **Hovered:** Usuario está posicionando el cursor sobre el checkbox. Hover effect visual (típicamente: background más claro, border más oscuro, cursor pointer).
- **Pressed:** Usuario está haciendo clic/presionando. Estados visuales más marcados. Retroalimentación táctil o visual clara.
- **Focused:** Checkbox recibió el foco por teclado (Tab). Visible focus ring alrededor del componente. Permite navegación por teclado accesible.
- **Disable:** Checkbox deshabilitado / readonly. No interactivo. Color forzado a Disabled. Opacidad reducida o gris más claro.
### Type (3 variantes)
 
- **Default:** Sin marcar / Estado vacío. Checkbox box vacío. No muestra ícono Check ni Mixed indicator. Representa "opción no seleccionada".
- **Check:** Marcado / Seleccionado. Muestra ícono de marca (checkmark). Representa "opción seleccionada".
- **Mixed:** Indeterminado / Selección parcial. Muestra guión o línea horizontal. Usado en tablas jerárquicas donde algunos items hijos están seleccionados pero no todos. Comunica "selección incompleta/parcial".
### Show Label (2 variantes)
 
- **true (default):** Label visible. El texto descriptivo aparece a la derecha del checkbox box. Proporciona contexto claro de la opción. Recomendado en la mayoría de casos.
- **false:** Label oculto. Solo muestra el checkbox box. Usado cuando el espacio es limitado o cuando el contexto es obvio por el layout circundante. Requiere tooltip o aria-label para accesibilidad.
---
 
## Token Mapping
 
### Color States
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Box background (unchecked) | Color | background/canvas | #ffffff | Fondo transparente / herencia del container |
| Box border (Default/unchecked) | Color | border/default | #c3cbc5 | Gris neutro estándar |
| Box border (Hovered/unchecked) | Color | border/strong | #5f6d62 | Gris más oscuro para hover |
| Box background (checked) | Color | palette/brand/primary/500 | #339947 (Evergreen) | Relleno cuando está seleccionado |
| Check icon color | Color | icon/inverse | #f7f8f7 | Blanco/inverso para contraste en fondo colored |
| Label text (enabled) | Color | text/primary | - | Color de texto principal |
| Label text (disabled) | Color | text/disabled | #a8a8a8 | Gris desaturado para disabled state |
| Focus ring | Color | palette/primary/focus | rgba(51, 153, 71, 0.25) | Anillo semitransparente |
| Disabled background | Color | background/disabled | #f5f5f5 | Gris muy claro |
| Disabled border | Color | border/disabled | #d3d3d3 | Gris pálido |
 
### Evergreen Color Variant
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Box background (checked) | Color | palette/brand/success/500 | #339947 | Verde principal |
| Box border (Default) | Color | border/success | #1f5c2b | Verde oscuro |
| Box border (Hovered) | Color | border/success/strong | #0d2612 | Verde más oscuro |
| Focus ring | Color | palette/success/focus | rgba(51, 153, 71, 0.25) | Anillo verde semi-transparente |
 
### Indigo Color Variant
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Box background (checked) | Color | palette/brand/secondary/500 | #5f5dff | Indigo/violeta |
| Box border (Default) | Color | border/secondary | #4a47d1 | Indigo más oscuro |
| Box border (Hovered) | Color | border/secondary/strong | #2d29ba | Indigo aún más oscuro |
| Focus ring | Color | palette/secondary/focus | rgba(95, 93, 255, 0.25) | Anillo indigo semi-transparente |
 
### Typography
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Label font family | Typography | text/body/sm | Inter, sans-serif | Tipografía estándar de cuerpo |
| Label font size | Typography | text/body/sm | 14px | Tamaño estándar para labels |
| Label line height | Typography | text/body/sm | 20px | Altura de línea con padding |
| Label font weight | Typography | text/body/sm | 400 | Regular (400), Bold (600) si enfatizado |
 
### Spacing & Layout
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Gap (box to label) | Spacing | gap/sm | 8px | Espacio horizontal entre checkbox y text |
| Padding container | Spacing | space/8 | 8px | Padding mínimo alrededor |
| Border radius (box) | Radius | radius/4 | 4px | Esquinas ligeramente redondeadas |
| Border radius (icon) | Radius | radius/2 | 2px | Ícono con radio más pequeño |
| Border width (default) | Stroke | stroke/1 | 1px | Borde estándar |
| Border width (focused) | Stroke | stroke/2 | 2px | Borde más grueso en focus |
 
### Shadows & Effects
 
| Property | Type | Token | Value | Notes |
|----------|------|-------|-------|-------|
| Swatch focus shadow | Shadow | elevation/xs | 0 0 0 2px rgba(0,0,0,0.25) | Sombra de enfoque |
| Box hover shadow | Shadow | elevation/none | none | Sin sombra en hover (flat design) |
| Press effect | Effect | opacity/80 | 80% | Opacidad reducida en pressed state |
 
---
 
## Semantics
 
- **Binary choice:** El checkbox representa una elección entre dos estados: seleccionado o no seleccionado.
- **Independence:** Cada checkbox es independiente. Seleccionar uno no afecta a otros (a diferencia de radio buttons donde solo uno puede estar seleccionado).
- **Partial state (Mixed):** En contextos jerárquicos (tablas con filas agrupadas), Type=Mixed comunica que la selección es incompleta/parcial.
- **Accessibility-first:** El componente soporta navegación por teclado (Tab, Spacebar), focus indicators claros y aria-labels para lectores de pantalla.
- **Color coding:** Los colores (Default/Evergreen/Indigo/Disabled) comunican el contexto semántico de la opción (normal, success, importante, deshabilitado).
- **Visual hierarchy:** Show Label=true proporciona contexto claro; Show Label=false solo se usa cuando el contexto es obvio (requiere tooltip).
---
 
## Interaction
 
- **Pointer click:** Al hacer clic en el checkbox, cambia el estado de Type entre Default ↔ Check (o cíclicamente Default → Check → Mixed → Default en modo indeterminado).
- **Keyboard (Spacebar):** Al presionar Spacebar con el checkbox en focus, alterna el estado Type (igual a click).
- **Keyboard (Tab):** Tab navega hacia el checkbox, Shift+Tab navega atrás. El focus ring es visible.
- **Label click:** Al hacer clic en el label text, activa el checkbox (si está correctamente asociado con for/id en HTML). Amplia el área clickeable.
- **Hover:** En State=Hovered, se muestra retroalimentación visual (cambio de color/border) indicando que es interactivo.
- **Pressed:** Al presionar (durante el clic), el componente muestra retroalimentación adicional (presión visual, opacidad, etc.).
- **Focus-visible:** El focus ring es visible al navegar con teclado, pero puede estar oculto en navegación por ratón (según el sistema operativo).
- **Disabled non-interactive:** Cuando Color=Disabled, el checkbox no responde a interacciones. El cursor cambia a "not-allowed".
- **State persistence:** El estado seleccionado (Type=Check) persiste hasta que el usuario lo deselecciona nuevamente.
---
 
## Accessibility
 
**HTML Structure:**
- Debe estar dentro de un `<label>` o asociado con `<input type="checkbox" id="..." aria-label="...">`.
- Si no hay label visible (Show Label=false), usar `aria-label="descriptive text"`.
- El atributo `checked` debe reflejar el estado Type (Type=Check → checked=true).
- Para Type=Mixed, usar `aria-checked="mixed"` (no soportado nativamente en HTML, requiere JavaScript).
- Estructura recomendada: `<label><input type="checkbox"> Label text</label>`.
**Keyboard:**
- **Tab:** Navega hacia el checkbox. El focus ring debe ser visible.
- **Shift+Tab:** Navega atrás desde el checkbox.
- **Spacebar:** Alterna el estado seleccionado (Type: Default ↔ Check).
- **Enter:** En algunos contextos, Enter también puede alternar (opcional, confirmar con UX).
- **Arrow keys:** No alteran el checkbox. Pueden navegar entre opciones de un grupo de checkboxes (si está implementado).
**Screen Reader:**
- El input type="checkbox" es anunciado automáticamente como "checkbox" o "check box".
- El estado debe ser anunciado: "checked" (cuando Type=Check), "unchecked" (cuando Type=Default), "partially checked" o "indeterminate" (cuando Type=Mixed).
- Si Show Label=true, el label text es anunciado como parte del control.
- Si Show Label=false, usar `aria-label="..."` para describir la opción.
- `aria-describedby="..."` puede apuntar a texto adicional si hay instrucciones (ej: "Requirido para continuar").
- En grupos de checkboxes jerárquicos, usar `role="group"` y `aria-labelledby="..."` para indicar la agrupación.
**Contrast:**
- Border del checkbox box debe tener contraste mínimo 3:1 contra el fondo.
- Label text debe tener contraste mínimo 4.5:1 contra su fondo.
- Check icon debe tener contraste 3:1 contra el fondo del box.
- Focus ring debe ser claramente visible contra el fondo (típicamente 3px de ancho, contraste 3:1).
- En modo Disabled, el contraste puede ser menor (2:1 es aceptable para estados deshabilitados).
**Focus Indicator:**
- Focus ring debe ser visible en todos los estados (Default, Hovered, Pressed, Focused).
- No remover el focus ring con CSS (outline: none) sin proporcionar una alternativa clara.
- Focus ring recomendado: 2px sólido, color del esquema (ej: indigo para Color=Indigo), radio de 2px alrededor del box.
---
 
## Content Guidelines
 
- **Label text:** Debe ser conciso, descriptivo y comenzar con mayúscula. Ej: "Acepto los términos", "Mostrar contraseña", "Enviar notificaciones".
- **Active voice:** Preferir "Aceptar términos" sobre "Términos aceptados" (el usuario realiza la acción).
- **Avoid ambiguity:** No usar negativos confusos. Ej: NO "No recibir newsletters" → SÍ "Recibir newsletters".
- **Parallel structure:** Si hay múltiples checkboxes en un grupo, usar una estructura similar para todos los labels.
- **Length:** Mantener labels en una sola línea cuando sea posible. Si es más largo, wrapping es aceptable pero mantener en máximo 2-3 líneas.
- **Punctuation:** Normalmente no usar puntuación al final (ej: "Acepto" NO "Acepto.").
- **Capitalization:** Usar title case para labels de opciones. Ej: "Enviar Confirmación por Email".
- **Help text:** Si se necesita contexto adicional, usar description text debajo del checkbox con font size menor y color text/secondary.
- **Error messages:** Cuando hay validación, mostrar error message rojo debajo del grupo de checkboxes: "Por favor, acepta los términos para continuar".
- **Placeholder:** No usar attribute placeholder en checkboxes (no aplica). Use description text en su lugar.
---
 
## Examples
 
**Checkbox en formulario de registro:**
Color=Default, State=Default, Type=Check, Show Label=true, Label="Acepto los términos y condiciones de servicio"
 
Contexto: Formulario de sign-up. El usuario ha leído y aceptado los términos. El checkbox está seleccionado (Type=Check) como confirmación visual.
 
**Selección múltiple en lista de preferencias:**
Grupo de tres checkboxes:
- Color=Default, State=Default, Type=Check, Show Label=true, Label="Email"
- Color=Default, State=Default, Type=Check, Show Label=true, Label="SMS"
- Color=Default, State=Default, Type=Check, Show Label=true, Label="Push Notifications"
Contexto: Configuración de preferencias. El usuario puede seleccionar múltiples canales de comunicación de forma independiente.
 
**Selección parcial en tabla jerárquica:**
Color=Evergreen, State=Default, Type=Mixed, Show Label=false
 
Contexto: Tabla de usuarios agrupados por departamento. El usuario ha seleccionado algunos usuarios dentro del departamento, pero no todos. El Type=Mixed (guión horizontal) indica selección incompleta.
 
**Checkbox deshabilitado:**
Color=Disabled, State=Disable, Type=Default, Show Label=true, Label="Esta opción no está disponible en tu plan"
 
Contexto: Formulario de configuración. La opción está deshabilitada porque el usuario no tiene los permisos necesarios. Visualmente gris/desaturado. No interactivo.
 
**Filtro con énfasis visual:**
Color=Indigo, State=Hovered, Type=Check, Show Label=true, Label="Productos destacados"
 
Contexto: Página de búsqueda/filtros. El usuario está filtrando para ver solo productos destacados. El color Indigo proporciona énfasis visual sin ser tan dominante como Evergreen.
 
---
 
## QA Checklist
 
**Visual QA:**
- [ ] Checkbox box renders con el tamaño correcto (16×16px, 20×20px o 24×24px)
- [ ] Border es visible en todos los Color variants (Default, Evergreen, Indigo, Disabled)
- [ ] Type=Check muestra el ícono de marca con alineación correcta
- [ ] Type=Mixed muestra el guión/línea horizontal (no el ícono de marca)
- [ ] Type=Default muestra el box vacío sin iconografía
- [ ] Gap entre box y label es consistente (8px)
- [ ] Label text no se recorta o desborda (wrapping es aceptable)
- [ ] Focus ring es visible cuando State=Focused (mínimo 2px, contraste claro)
- [ ] Hover visual feedback es claro (cambio de color, border, etc.)
- [ ] Pressed state muestra retroalimentación táctil (opacidad, escala, etc.)
- [ ] Disabled state es claramente distinguible (gris, sin interactividad)
**Functional QA:**
- [ ] Click en el checkbox alterna el estado Type
- [ ] Spacebar con focus en el checkbox alterna el estado
- [ ] Tab navega hacia el checkbox
- [ ] Shift+Tab navega atrás desde el checkbox
- [ ] Click en el label text también alterna el checkbox (si está correctamente asociado)
- [ ] Show Label=false ocul ta el label text
- [ ] Show Label=true muestra el label text
- [ ] Color variants no afectan la funcionalidad (solo visual)
- [ ] Disabled checkbox no responde a interacciones
**Accessibility QA:**
- [ ] Input type="checkbox" está presente en el HTML
- [ ] Aria-label o label asociado describe claramente la opción (si Show Label=false)
- [ ] Focus ring es visible sin remover outline con CSS
- [ ] Type=Mixed tiene aria-checked="mixed" si aplica
- [ ] Contraste de text/icon vs. background cumple WCAG AA (4.5:1 para texto)
- [ ] Screen reader anuncia "checkbox" + descripción
- [ ] Type=Check se anuncia como "checked"
- [ ] Type=Mixed se anuncia como "indeterminate" o "partially checked"
- [ ] Teclado es totalmente funcional (sin dependencia del mouse)
**Content QA:**
- [ ] Label text es claro y conciso
- [ ] No hay negativos confusos (ej: "No recibir newsletters")
- [ ] Estructura paralela en grupos de checkboxes
- [ ] Puntuación es consistente (o ninguna)
- [ ] Help text o description text es visible si es necesario
- [ ] Error messages son claramente visibles y útiles
**Cross-browser QA:**
- [ ] Renderiza correctamente en Chrome, Firefox, Safari, Edge
- [ ] Comportamiento de focus ring es consistente
- [ ] Animaciones de hover/press son suaves y consistentes
- [ ] No hay diferencias inesperadas en tamaño o espaciado
---
 
## Changelog
 
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-05-19 | Componente inicial creado. Propiedades: Color (Default, Evergreen, Indigo, Disabled), State (Default, Hovered, Pressed, Focused, Disable), Type (Default, Check, Mixed), Show Label (true/false), Label (TEXT). Variantes completas: 60 combinaciones de color + state + type. Documentación de accesibilidad, semántica e interacción incluida. |
 
---
 
## Related Components
 
- **Radio Button:** Para selección exclusiva (solo una opción puede estar seleccionada).
- **Toggle / Switch:** Para activar/desactivar una función en tiempo real.
- **Dropdown Select:** Para selección de lista con muchas opciones.
- **Tab:** Para navegación entre vistas.
---
 
## Design System References
 
- **Tokens:** [Design Tokens JSON](./design-tokens_1.json)
- **Documentation:** [Genome Evolution Design System](https://figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra)
- **Figma Component:** [Checkbox - 2085:1201](https://figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2085-1201)
