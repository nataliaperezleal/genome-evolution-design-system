---
component: "Cursor"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2204-2358"
last_updated: "2026-10-22"
tags:
  - "cursor"
  - "pointer"
  - "illustration"
---

# Cursor

Sistema: Genome Evolution Design System

## Resumen del componente

Cursor es un conjunto de 38 gráficos de puntero y de cursor de texto que se seleccionan mediante una única propiedad `Type`, e incluye cursores de flecha, mano, zoom, texto, selección, redimensionamiento y dirección.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Cursor ofrece representaciones visuales de punteros del ratón y cursores de texto para usar en diseños, maquetas y prototipos. Esto se sustenta en el nombre del componente, en los valores de `Type` (por ejemplo `Arrow ↖︎`, `Pointer 👆`, `Grab 🖐`, `Zoom ➕`, `Resize ↔︎`), en sus gráficos y en su uso dentro de otros componentes: Color Picker muestra una instancia de `Cursor` (`Type=Pointer 👆`) sobre su área de color para ilustrar la interacción.

Especificación verificada: `Type=Input |` está descrito en Figma como "Blinking text cursor" (cursor de texto parpadeante).

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Type | 38 valores; ver Variantes | Pointer 👆 |

El valor predeterminado proviene de la definición de propiedades del componente en Figma. Los valores de `Type` incluyen símbolos y emoji, y deben usarse exactamente como están escritos (ver Pautas de contenido).

### Configuración predeterminada

`Type=Pointer 👆`: un cursor de mano que señala, de 24 × 24 px, en `icon/primary` con contorno `background/canvas`.

### Uso típico

Observación verificada: El conjunto de componentes contiene 38 variantes sin otras propiedades además de `Type`. La mayoría de las variantes miden 24 × 24 px; las variantes de flecha con insignia miden 28 × 40 px; `Select Area ✛` y `Screenshot 📷` miden 28 × 28 px.

Interpretación basada en evidencia:

- Coloque una instancia de Cursor en un diseño para mostrar dónde y cómo señala o interactúa el usuario (como hace Color Picker con `Pointer 👆`).
- Elija el `Type` cuyo nombre corresponda a la interacción ilustrada: `Pointer 👆` para elementos clicables, `Grab 🖐` / `Grabbed ✊` para contenido arrastrable, los tipos `Resize` y `Direction` para redimensionar o mover en una dirección, `Input |` para un punto de inserción de texto.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece un conjunto consistente y reutilizable de gráficos de cursor para que los diseños puedan ilustrar la interacción del puntero sin dibujar cursores de forma improvisada.

### Resultado esperado

Interpretación basada en evidencia: Los diseños y prototipos comunican la respuesta esperada del puntero en cada interacción.

### Contexto típico

Observación verificada: Se usa dentro de Color Picker (`Type=Pointer 👆` sobre el selector del área de color). Otros contextos no están documentados en Figma.

## Cuándo usar

Interpretaciones basadas en evidencia a partir de los nombres y gráficos de las variantes:

- Para ilustrar el estado del puntero sobre un elemento interactivo en una maqueta o prototipo.
- Para mostrar un cursor de texto parpadeante en un campo de texto (`Input |`, descripción verificada).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- Cada tipo tiene un único tamaño y color fijos; no hay propiedades de tamaño, color ni estado.
- Los gráficos son vectores aplanados; sus partes no se pueden recolorear mediante propiedades.

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Gráfico del cursor | Obligatoria | Un único gráfico vectorial aplanado para el `Type` seleccionado. |
| Insignia | Presente en los tipos de flecha con insignia | Insignia de estado abajo a la derecha de la flecha (`Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌`). |
| Capa de color | Presente en `Input \|` | Capa `icon/primary` enmascarada con la forma del cursor de texto. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Tamaño — tipos estándar | 24 × 24 px | Dimensiones de las variantes |
| Tamaño — `Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌` | 28 × 40 px | Dimensiones de las variantes |
| Tamaño — `Select Area ✛`, `Screenshot 📷` | 28 × 28 px | Dimensiones de las variantes |
| Desbordamiento — `Input \|` | Recortado | Contexto de diseño |

El componente no usa auto layout.

## Semántica

Interpretación basada en evidencia, a partir de los nombres y gráficos de las variantes:

- **Flechas**: `Arrow ↖︎` es la flecha estándar. `Arrow ➕` añade una insignia verde con signo más, `Arrow ⌛️` una insignia azul de progreso, `Arrow 🚫` una insignia roja de prohibición y `Arrow ❌` una insignia roja con una cruz.
- **Manos**: `Pointer 👆` (mano que señala), `Grab 🖐` (mano abierta), `Grabbed ✊` (mano cerrada).
- **Zoom y mover**: `Zoom ➕`, `Zoom ➖` (lupa con más o menos), `Move` (flechas en cuatro direcciones).
- **Texto**: `Input |` (cursor de texto parpadeante, verificado), `⌶ - Horizontal` (gráfico de I-beam vertical), `⌶ - Vertical` (gráfico de I-beam horizontal).
- **Selección y otros**: `Help ？` (signo de interrogación), `Cell ✚` (más grueso), `Cross ✛` (mira fina), `Alias ⤤` (flecha curva), `Select Area ✛` (mira con objetivo), `Screenshot 📷` (cámara).
- **Redimensionar**: `Resize ←`, `→`, `↑`, `↓` (flecha contra una barra, que indica un borde), `Resize ↔︎`, `Resize ↕︎` (flechas dobles con barra central).
- **Dirección**: `Direction ←`, `→`, `↑`, `↓`, `↖︎`, `↗︎`, `↙︎`, `↘︎` (flechas simples), `Direction ↔︎`, `↕︎`, `⤡`, `⤢` (flechas dobles).

No verificado en Figma: correspondencia con valores de cursor de la plataforma o de CSS, y cualquier comportamiento.

## Iconografía

Cada `Type` es un gráfico de cursor; ver Semántica para las descripciones y Mapeo de tokens para los colores.

## Variantes (Propiedades)

El inventario siguiente es completo: se listaron las 38 variantes.

### Type

| Grupo | Valores |
|-------|---------|
| Flecha | `Arrow ↖︎`, `Arrow ➕`, `Arrow ⌛️`, `Arrow 🚫`, `Arrow ❌` |
| Mano | `Pointer 👆`, `Grab 🖐`, `Grabbed ✊` |
| Zoom y mover | `Zoom ➕`, `Zoom ➖`, `Move` |
| Texto | `Input \|`, `⌶ - Horizontal`, `⌶ - Vertical` |
| Selección y otros | `Help ？`, `Cell ✚`, `Cross ✛`, `Alias ⤤`, `Select Area ✛`, `Screenshot 📷` |
| Redimensionar | `Resize ←`, `Resize →`, `Resize ↑`, `Resize ↓`, `Resize ↔︎`, `Resize ↕︎` |
| Dirección | `Direction ←`, `Direction →`, `Direction ↑`, `Direction ↓`, `Direction ↖︎`, `Direction ↗︎`, `Direction ↙︎`, `Direction ↘︎`, `Direction ↔︎`, `Direction ↕︎`, `Direction  ⤡`, `Direction ⤢` |

Los grupos anteriores son una organización editorial; Figma define una única lista plana de `Type`.

## Estados

Cursor no tiene propiedad de estado.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Ícono | `icon/primary` | Color principal del cursor | Vinculación de variable |
| Fondo | `background/canvas` | Contorno claro alrededor de los gráficos | Vinculación de variable |
| Texto | `text/success` | Insignia de `Arrow ➕` | Vinculación de variable |
| Enlace | `link/default`, `link/visited` | Insignia de `Arrow ⌛️` | Vinculación de variable |
| Ícono | `icon/danger` | Insignias de `Arrow 🚫` y `Arrow ❌` | Vinculación de variable |
| Ícono | `icon/inverse` | Cruz de la insignia de `Arrow ❌` | Vinculación de variable |
| Efecto | `shadow-l` | `Arrow 🚫` y `Arrow ❌` | Estilo de efecto |
| Radio | `radius/0` | Cursores de dirección (inspeccionado: `Direction ←`) | Vinculación de variable |

Comportamiento actual: El estilo de color `Artificial/Artificial-400` también se usa dentro del conjunto de componentes; no se aisló durante la inspección qué variante lo usa.

## Interacción

Cursor es un gráfico estático sin estados ni interacciones de prototipo. `Input |` se describe como parpadeante, pero el componente no define ninguna animación.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Los gráficos de cursor son ilustraciones decorativas dentro de los diseños; no contienen texto.
- Los gráficos usan `icon/primary` con un contorno `background/canvas`, lo que ayuda a que destaquen sobre fondos variados.
- El significado de las insignias depende del color y del símbolo (más, progreso, prohibición, cruz).

No verificado en Figma: si los gráficos de cursor están pensados para usarse en interfaces de producción o solo en artefactos de diseño.

## Pautas de contenido

Observaciones verificadas sobre los valores de `Type`:

- Los valores incluyen símbolos y emoji (por ejemplo `Pointer 👆`, `Arrow ⌛️`, `Help ？`) y algunos incluyen selectores de variación invisibles (por ejemplo `Arrow ↖︎`, `Resize ↔︎`).
- `Help ？` usa un signo de interrogación de ancho completo.
- `Direction  ⤡` contiene dos espacios entre la palabra y la flecha, mientras que `Direction ⤢` contiene uno.
- `⌶ - Horizontal` y `⌶ - Vertical` comienzan con el símbolo `⌶`.

Los valores deben copiarse exactamente al referenciar una variante.

## Ejemplos

### Elemento clicable

Configuración: `Type=Pointer 👆`

Descripción: Mano que señala sobre un elemento interactivo, como se usa en Color Picker.

Evidencia / Clasificación: Variante predeterminada; uso observado en Color Picker.

### Foco en un campo de texto

Configuración: `Type=Input |`

Descripción: Cursor de texto parpadeante dentro de un campo de texto.

Evidencia / Clasificación: Variante existente; descripción documentada en Figma.

### Acción no disponible

Configuración: `Type=Arrow 🚫`

Descripción: Flecha con una insignia roja de prohibición.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

[No se encontraron combinaciones inválidas documentadas]

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.

[No hay cambios históricos verificados disponibles]
