---
component: "Switch"
system: "Genome Evolution Design System"
type: "Control de formulario (interruptor binario)"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-3286"
last_updated: "2026-10-23"
tags:
  - "switch"
  - "toggle"
  - "form-control"
---

# Switch

Sistema: Genome Evolution Design System

## Resumen del componente

Control de dos posiciones, con etiqueta de texto opcional, que representa una configuración activada (On) o desactivada (Off), disponible en dos tamaños y tres tratamientos de color.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Switch es un control binario. La propiedad `Behavior` solo expone `On` y `Off`, el indicador (thumb) está a la izquierda en las variantes `Off` y a la derecha en las variantes `On`, y el conjunto incluye los estados `Hover`, `Pressed`, `Focused` y `Disabled`. Todo ello indica un control interactivo que activa o desactiva una configuración. No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Behavior | On, Off | No verificado en Figma |
| Color | Default, Evergreen, Indigo | No verificado en Figma |
| State | Default, Hover, Pressed, Focused, Disabled | No verificado en Figma |
| Size | SM, MD | No verificado en Figma |
| Label (booleana) | true, false | true (según Figma MCP) |
| Text (texto) | Texto libre | "Label" (según Figma MCP) |

Los nombres de las propiedades `Label` y `Text` se indican tal como los expone Figma MCP; no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

No se encontró una variante por defecto verificada. El conjunto contiene 28 variantes; los valores por defecto que reporta la generación de código de Figma MCP (`Behavior` Off, `Color` Default, `State` Disabled, `Size` SM) no coinciden con la primera variante del conjunto (`Behavior=On, Color=Evergreen, State=Default, Size=SM`), por lo que ninguno se considera el valor por defecto documentado.

Observaciones verificadas:

- Todas las variantes inspeccionadas muestran la etiqueta con el texto de ejemplo "Label".
- La propiedad booleana `Label` se reporta como `true` y la propiedad `Text` como "Label".

### Uso típico

Observaciones verificadas:

- El switch está disponible en `SM` (16 px de alto) y `MD` (24 px de alto).
- Los switches `Off` usan `Color=Default`; los switches `On` usan `Color=Evergreen` o `Color=Indigo` (o `Color=Default` cuando están deshabilitados).
- La etiqueta de texto se ubica a la derecha del switch y puede ocultarse con la propiedad booleana `Label`.

Interpretación basada en evidencia: Coloca el Switch junto a una etiqueta breve que nombre la configuración que controla. Combina `Behavior=Off` con `Color=Default`, y `Behavior=On` con `Evergreen` o `Indigo`, que son las únicas combinaciones habilitadas del conjunto.

Recomendación: Usa un mismo color `On` de forma consistente dentro de una vista o formulario. Figma no documenta cuándo elegir Evergreen o Indigo (ver Aclaraciones pendientes).

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Switch permite al usuario activar o desactivar una opción o configuración con un único control, y muestra el estado actual de un vistazo mediante la posición del indicador y el color del riel (track).

### Resultado esperado

Interpretación basada en evidencia: El usuario puede ver si una configuración está activada o desactivada y cambiarla directamente. Las variantes `On` usan borde e indicador de color (Evergreen o Indigo), y las variantes `Off` usan colores neutros.

### Contexto típico

Interpretación basada en evidencia: Configuraciones, preferencias y formularios donde una opción tiene exactamente dos estados. Los dos tamaños y la tipografía de la etiqueta (10 px para `SM`, 16 px para `MD`) sugieren su uso tanto en interfaces compactas como de densidad estándar.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para activar o desactivar una opción binaria, como una configuración o funcionalidad, representada por `Behavior=On` / `Behavior=Off`.
- Cuando el estado activado/desactivado debe ser visible en todo momento.
- En diseños compactos, usa `Size=SM`; en diseños estándar, usa `Size=MD`.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Como el componente solo expone dos valores para `Behavior`, considera otro control cuando una opción tenga más de dos estados.

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| switch | Requerida | Riel e indicador, construidos como una única capa gráfica llamada `switch`. El indicador está a la izquierda en `Off` y a la derecha en `On`. |
| Label | Opcional | Capa de texto llamada `Label`, ubicada a la derecha del switch. Su visibilidad se controla con la propiedad booleana `Label` y su contenido con la propiedad `Text`. |
| Anillo de foco | Condicional | Contorno dibujado por fuera del riel, presente solo en las variantes `State=Focused`. |

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dirección | Horizontal, elementos centrados | Auto layout de Figma |
| Espacio (switch a etiqueta) | 8 px (`gap/sm`) | Vinculación de variable |
| Relleno interno | 0 (`space/0`) | Vinculación de variable |
| Tamaño del switch, SM | 29 × 16 px | Dimensiones de capa |
| Tamaño del switch, MD | 42 × 24 px | Dimensiones de capa |
| Tamaño del componente con "Label", SM | 63 × 16 px | Dimensiones de variante |
| Tamaño del componente con "Label", MD | 91 × 24 px | Dimensiones de variante |
| Token de radio, SM | `semantic/md` (8) | Vinculación de variable; aplicado al riel (interpretación: completamente redondeado a 16 px de alto) |
| Token de radio, MD | `semantic/lg` (12) | Vinculación de variable; aplicado al riel (interpretación: completamente redondeado a 24 px de alto) |
| Separación del anillo de foco | Se extiende 2 px por fuera del riel en todos los lados | Geometría de capas en variantes `Focused` |

El diámetro del indicador y su separación interna forman parte de la capa gráfica `switch` y no se exponen como medidas independientes: No verificado en Figma.

## Semántica

Interpretación basada en evidencia: `Behavior=On` representa una configuración activa; `Behavior=Off` representa una configuración inactiva. La posición del indicador y el cambio de color entre neutro (`Off`) y Evergreen o Indigo (`On`) comunican el estado. `Color` solo cambia el tratamiento visual del estado `On`; Figma no documenta ninguna diferencia semántica entre Evergreen e Indigo.

Elemento HTML, rol ARIA y anuncios de lector de pantalla: No verificado en Figma.

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 28 variantes.

### Behavior

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| On | Indicador a la derecha; el borde del riel y el indicador usan el `Color` seleccionado (Evergreen o Indigo), o colores neutros de deshabilitado cuando `State=Disabled`. | Nombres de variantes, captura, vinculaciones de variables |
| Off | Indicador a la izquierda; riel e indicador neutros. | Nombres de variantes, captura, vinculaciones de variables |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Tratamiento neutro. Se usa en todas las variantes `Off` y en las dos variantes `Disabled`. | Nombres de variantes |
| Evergreen | Tratamiento `On` verde (`border/evergreen`, `icon/evergreen`). | Vinculaciones de variables |
| Indigo | Tratamiento `On` morado (`border/indigo`, `icon/indigo`). | Vinculaciones de variables |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Apariencia en reposo. | Nombres de variantes |
| Hover | Fondo del riel en estado hover. | Vinculaciones de variables |
| Pressed | Fondo del riel en estado presionado. | Vinculaciones de variables |
| Focused | Agrega un anillo de foco de 2 px por fuera del riel. | Vinculaciones de variables, geometría de capas |
| Disabled | Riel, indicador y etiqueta atenuados. Disponible para `Off` y `On` solo con `Color=Default`. | Nombres de variantes, vinculaciones de variables |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| SM | Switch de 29 × 16 px; la etiqueta usa `Text/Body/XXS` (10/14). | Dimensiones de capa, estilo de texto |
| MD | Switch de 42 × 24 px; la etiqueta usa `Text/Body/MD` (16/20). | Dimensiones de capa, estilo de texto |

### Label

Propiedad booleana que muestra u oculta la capa de texto de la etiqueta. Valor por defecto reportado: `true`.

### Text

Propiedad de texto que define el contenido de la etiqueta. Valor por defecto reportado: "Label".

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | En reposo | `Off`: riel blanco (`background/canvas`), borde neutro, indicador `icon/primary`. `On`: riel blanco, borde e indicador de color. | Vinculaciones de variables |
| Hover | Hover | El fondo del riel cambia a `background/interactive/hovered`; el indicador `Off` cambia a `icon/interactive/hovered`. | Vinculaciones de variables |
| Pressed | Presionado | El fondo del riel cambia a `background/interactive/pressed`; el indicador `Off` usa `icon/interactive/hovered`. | Vinculaciones de variables |
| Focused | Foco por teclado o programático (interpretación) | Anillo `border/focus` de 2 px alrededor del riel, para todos los colores. | Vinculaciones de variables, captura |
| Disabled | No disponible | Riel `background/disabled`, borde `border/disabled`, indicador `icon/disabled`, etiqueta `text/disabled`. | Vinculaciones de variables |

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma en las variantes inspeccionadas.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Fondo | `background/canvas` | Relleno del riel en Default y Focused | Variantes Off/On Default |
| Fondo | `background/interactive/hovered` | Relleno del riel en Hover | Variantes Off y On Hover |
| Fondo | `background/interactive/pressed` | Relleno del riel en Pressed | Variantes Off y On Pressed |
| Fondo | `background/disabled` | Relleno del riel en Disabled | Variantes Off y On Disabled |
| Borde | `border/interactive/hovered` | Borde del riel para `Off` en Default, Hover y Pressed | Variantes Off |
| Borde | `border/evergreen` | Borde del riel para `On` + `Evergreen` | Variantes Evergreen |
| Borde | `border/indigo` | Borde del riel para `On` + `Indigo` | Variantes Indigo |
| Borde | `border/disabled` | Borde del riel en Disabled | Variantes Disabled |
| Borde | `border/focus` | Color del anillo de foco, para todos los colores | Variantes Focused |
| Grosor de borde | `focus/width` (2) | Grosor del anillo de foco | Variantes Focused |
| Icono | `icon/primary` | Indicador `Off` en Default y Focused | Variantes Off |
| Icono | `icon/interactive/hovered` | Indicador `Off` en Hover y Pressed | Variantes Off |
| Icono | `icon/evergreen` | Indicador `On` + `Evergreen` | Variantes Evergreen |
| Icono | `icon/indigo` | Indicador `On` + `Indigo` | Variantes Indigo |
| Icono | `icon/disabled` | Indicador en Disabled | Variantes Disabled |
| Texto | `text/primary` | Color de la etiqueta (habilitado) | Todas las variantes habilitadas |
| Texto | `text/disabled` | Color de la etiqueta en Disabled | Variantes Disabled |
| Tipografía | `Text/Body/XXS` | Etiqueta, `Size=SM` | Estilo de texto |
| Tipografía | `Text/Body/MD` | Etiqueta, `Size=MD` | Estilo de texto |
| Espaciado | `gap/sm` (8) | Espacio entre switch y etiqueta | Auto layout |
| Espaciado | `space/0` (0) | Relleno del contenedor | Auto layout |
| Radio | `semantic/md` (8), `semantic/lg` (12) | Radio del riel para SM y MD | Vinculaciones de variables |

## Interacción

Estados observados: `Default`, `Hover`, `Pressed`, `Focused` y `Disabled` están disponibles como variantes visuales para switches `Off` y `On` habilitados.

Interpretación basada en evidencia: Al activar el switch, `Behavior` alterna entre `Off` y `On`, y los switches `Disabled` no responden a la interacción.

No verificado en Figma: interacciones de prototipo, transiciones, tiempos de animación, si hacer clic en la etiqueta alterna el switch y las teclas usadas para alternarlo.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Un estado `Focused` dedicado muestra un anillo `border/focus` de 2 px por fuera del riel, separado de este.
- El estado se comunica tanto por la posición del indicador como por el color, no solo por el color.
- Hay una etiqueta de texto visible disponible mediante las propiedades `Label` y `Text`.
- `Disabled` usa tokens dedicados de deshabilitado para riel, indicador y etiqueta.

Información de accesibilidad faltante (no verificada en Figma): rol y estado ARIA, soporte de teclado, anuncios de lector de pantalla, requisitos de nombre accesible cuando `Label` está oculta, tamaño mínimo del área táctil y cumplimiento de contraste.

## Guía de contenido

Observación verificada: La etiqueta se ubica a la derecha del switch, ocupa una sola línea sin ajuste y usa el texto de ejemplo "Label" en todas las variantes.

Recomendación: Usa una etiqueta breve que nombre la configuración que se controla.

## Ejemplos

### Configuración activada, tamaño estándar

Configuración: `Behavior=On`, `Color=Evergreen`, `State=Default`, `Size=MD`, `Label=true`

Descripción: Switch mediano en posición activada, con borde e indicador Evergreen y etiqueta visible.

Evidencia / Clasificación: Variante existente en Figma (`2184:3320`).

### Configuración deshabilitada, tamaño compacto

Configuración: `Behavior=Off`, `Color=Default`, `State=Disabled`, `Size=SM`, `Label=true`

Descripción: Switch pequeño en posición desactivada, con riel, indicador y etiqueta atenuados.

Evidencia / Clasificación: Variante existente en Figma (`2184:3311`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

Observación verificada: El conjunto solo contiene variantes para estas combinaciones, por lo que las siguientes no se pueden seleccionar en Figma:

- `Behavior=Off` con `Color=Evergreen` o `Color=Indigo`.
- `Behavior=On` con `Color=Default`, excepto cuando `State=Disabled`.
- `State=Disabled` con `Color=Evergreen` o `Color=Indigo`.

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `checked` | `boolean` | `undefined` | Estado marcado controlado. |
| `defaultChecked` | `boolean` | `false` | Estado inicial no controlado. |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Función que se ejecuta cuando cambia el valor. |
| `disabled` | `boolean` | `false` | Desactiva la interacción. |
| `label` | `string` | `undefined` | Configura la propiedad `label` del componente. |
| `size` | `"sm" \| "md"` | `"md"` | Configura la propiedad `size` del componente. |
| `tone` | `"default" \| "evergreen" \| "indigo"` | `"evergreen"` | Configura la propiedad `tone` del componente. |

También acepta los atributos nativos de React para el elemento HTML subyacente (ButtonHTMLAttributes).
### Ejemplos

#### Controlled switch

```tsx
import { Switch } from "@genome-evolution/react";

<Switch checked onCheckedChange={() => {}} aria-label="Notifications" />;
```

## Aclaraciones pendientes

1. **Evergreen vs. Indigo.** Figma ofrece dos colores `On` sin guía sobre cuándo usar cada uno. Esto afecta cómo diseñadores y desarrolladores eligen el valor de `Color`.
2. **Variante por defecto.** No hay un valor por defecto documentado. Los valores que reporta Figma MCP (`Off`, `Default`, `Disabled`, `SM`) no coinciden con la primera variante del conjunto (`On`, `Evergreen`, `Default`, `SM`). Confirma la variante por defecto prevista.
3. **Color del anillo de foco en Indigo.** Las variantes `Focused` Indigo usan `border/focus` (#339947, verde). Confirma que el color de foco compartido es intencional.
4. **Capa inconsistente en `Behavior=On, Color=Evergreen, State=Pressed, Size=MD`.** Esta variante usa una capa llamada `Group 1` en lugar de la capa `switch` presente en todas las demás variantes, lo que puede afectar las sobrescrituras (overrides) y el mantenimiento.
5. **Token de borde en Off.** Las variantes `Off` habilitadas usan `border/interactive/hovered` para el borde del riel tanto en `Default` como en `Hover`. Confirma si `Default` debería usar un token de borde de reposo.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `2184:3286`) el 2026-10-23.
