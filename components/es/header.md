---
component: "Header"
system: "Genome Evolution Design System"
type: "Conjunto de componentes"
status: "Design"
version: "1.2"
owner: "UX Team"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-1376"
last_updated: "2026-10-22"
tags:
  - "header"
  - "navigation"
  - "app-bar"
---

# Header

Sistema: Genome Evolution Design System

## Resumen del componente

Header es una barra superior de 1440 px de ancho sobre `surface/evergreen/bold`, disponible en tres temas de producto: `Apps Designer` (identidad del producto e información del usuario), `Apps Tools` (acciones de herramientas, la app actual y acciones de la app) y `Workportal` (navegación principal, búsqueda y avatar del usuario).

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Header es la barra superior de la aplicación que identifica el producto y da acceso a la navegación, las herramientas y la cuenta del usuario. Esto se sustenta en el nombre del componente, en su diseño a ancho completo en la parte superior de un marco de 1440 px, en el logo de Bizagi presente en todos los temas y en el contenido específico de cada tema: nombre, correo y avatar del usuario (`Apps Designer`), acciones de herramientas y de la app (`Apps Tools`), y elementos de navegación con búsqueda y avatar (`Workportal`). Figma no incluye una descripción de uso escrita para el conjunto de componentes Header.

### Propiedades clave

| Propiedad | Valores disponibles | Predeterminado |
|-----------|---------------------|----------------|
| Theme | Apps Designer, Apps Tools, Workportal | Apps Designer |
| userName (booleano) | true, false | true |
| mail (booleano) | true, false | true |
| avatar (booleano) | true, false | true |

Los valores predeterminados provienen de las definiciones de propiedades del componente en Figma. `userName`, `mail` y `avatar` afectan solo a `Theme=Apps Designer`; los demás temas tienen contenido fijo. Las etiquetas (nombre del producto, elementos de navegación, acciones) no se exponen como propiedades.

### Configuración predeterminada

`Theme=Apps Designer` con nombre de usuario, correo y avatar visibles: una barra de 1440 × 64 px con el ícono de Bizagi, el nombre de producto "App Designer" y, a la derecha, "User name", "user.name@company.com" y un avatar `Print` de 40 px.

### Uso típico

Observación verificada: El conjunto de componentes tiene tres variantes, una por cada `Theme`. Cada tema tiene una estructura y un contenido distintos; comparten el ancho, el fondo de marca y el logo de Bizagi.

Interpretación basada en evidencia:

- `Apps Designer` para el encabezado del producto App Designer, con la información del usuario que ha iniciado sesión.
- `Apps Tools` para un contexto de edición de una app: acciones de herramientas a la izquierda, la app actual en el centro y acciones de la app (desbloquear, estado de guardado, descargar, abrir, publicar) a la derecha.
- `Workportal` para el producto Workportal: navegación principal, búsqueda y avatar del usuario.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Ofrece una barra superior consistente y con la marca para cada contexto de producto, con la navegación y las acciones que ese contexto necesita.

### Resultado esperado

Interpretación basada en evidencia: Los usuarios pueden identificar el producto en el que se encuentran, acceder a la navegación y a las herramientas, y ver su cuenta.

### Contexto típico

Interpretación basada en evidencia: La parte superior de pantallas de aplicación diseñadas a 1440 px de ancho, en productos de Bizagi (App Designer, herramientas de apps y Workportal).

## Cuándo usar

Interpretaciones basadas en evidencia a partir de las variantes:

- Como barra superior de las pantallas de App Designer (`Apps Designer`).
- Como barra superior mientras se trabaja en una app (`Apps Tools`).
- Como barra superior de las pantallas de Workportal (`Workportal`).

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Limitaciones del componente actual:

- El ancho es fijo de 1440 px; el comportamiento adaptable no está definido.
- Los elementos de navegación, las acciones y las etiquetas son fijos en cada tema y no se exponen como propiedades.

## Reglas de composición y jerarquía

### Apps Designer (64 px)

| Posición | Contenido |
|----------|-----------|
| Izquierda | Bloque de logo: ícono de Bizagi de 32 px con relleno de 16 px. |
| Izquierda, después del logo | Nombre del producto: wordmark pequeño de Bizagi sobre "App Designer" (gráficos vectoriales). |
| Derecha | Bloque de usuario: "User name" (`userName`) y "user.name@company.com" (`mail`), alineados a la derecha, y luego un Avatar de 40 px (`avatar`; `Type=Print`, `Color=Evergreen`). |

### Apps Tools (64 px)

| Posición | Contenido |
|----------|-----------|
| Izquierda | Ícono de Bizagi y luego cuatro acciones: Controls (`add`), Settings (`settings`), Tools (`toolbox`), ADA Charts (`ADA-Charts`). |
| Centro | Botón "Main menu" (ícono de candado, etiqueta, chevron-down) sobre el nombre de la app ("test-app-ux"). |
| Derecha | Unlock app (`lock-open`), App saved (`check`, después de la etiqueta), Download app (`download`), Open app (`external-link`), Publish (`publish`). |

- Cada acción es un elemento de 64 px de alto con un ícono de 16 px y una etiqueta de 10 px, relleno horizontal de 16 px y espacio de 8 px.
- Publish es el último elemento y se resalta con un fondo `surface/evergreen/subtle` y una etiqueta `text/primary`.

### Workportal (48 px)

| Posición | Contenido |
|----------|-----------|
| Izquierda | Wordmark completo de Bizagi (104 × 32 px) y luego los elementos de navegación: Me (`home`), Inbox (`inbox`), New Case (`suitcase-add`), Queries (`Search`), Reports (`chart-bars`), Live Processes (`live-process`), Admin (`settings`). |
| Derecha | Campo de búsqueda (Input, 244 px de ancho, marcador "Search") y luego un Avatar de 24 px (`Type=Print`, `Color=Evergreen`). |

- New Case, Queries, Reports, Live Processes y Admin terminan con un ícono `arrow-dropdown`. Interpretación basada en evidencia: estos elementos abren menús; Me e Inbox navegan directamente.

### Componentes hijos

| Hijo | Uso | Configuración observada |
|------|-----|-------------------------|
| Logo de Bizagi | Todos los temas | `Type=Icon` de 32 px (Apps Designer, Apps Tools), `Type=Full` de 104 × 32 px (Workportal); blanco |
| Avatar | Apps Designer, Workportal | `Type=Print`, `Color=Evergreen`, `Size=40` / `Size=24` |
| Button | Apps Tools (Main menu) | Sobrescrito: relleno `background/alpha`, borde `border/evergreen`, íconos de candado y chevron-down |
| Input | Workportal (búsqueda) | Campo de 24 px con un ícono de búsqueda en la ranura inicial, marcador "Search"; etiqueta y texto de ayuda ocultos |

## Estructura (Anatomía)

### Partes del componente

| Parte | Obligatoria / Opcional | Descripción |
|-------|------------------------|-------------|
| Barra | Obligatoria | Contenedor de 1440 px de ancho sobre `surface/evergreen/bold`. |
| Logo | Obligatoria | Ícono o wordmark de Bizagi. |
| Identidad del producto | Apps Designer | Gráfico con el nombre del producto. |
| Acciones de herramientas y de la app | Apps Tools | Elementos de acción con ícono y etiqueta a ambos lados; app actual en el centro. |
| Menú de navegación | Workportal | Elementos de navegación con ícono y etiqueta. |
| Área de usuario | Apps Designer, Workportal | Nombre y correo del usuario (Apps Designer), búsqueda (Workportal), avatar. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 1440 px | Dimensiones de las variantes |
| Alto | 64 px (Apps Designer, Apps Tools), 48 px (Workportal) | Dimensiones de las variantes |
| Fondo | `surface/evergreen/bold` | Vinculación de variable |
| Relleno horizontal | 16 px (área de contenido de Apps Designer, Workportal) | Contexto de diseño |
| Bloque de logo | Relleno de 16 px (Apps Designer, Apps Tools); 24 px horizontal y 8 px vertical (Workportal) | Contexto de diseño |
| Elementos de acción de Apps Tools | 64 px de alto, relleno horizontal de 16 px, espacio de 8 px, íconos de 16 px | Contexto de diseño |
| Elementos de navegación de Workportal | Alto completo, relleno horizontal `space/16`, espacio de 4 px, íconos de 16 px | Vinculación de variable, contexto de diseño |
| Bloque de usuario de Apps Designer | 154 px de ancho, alineado a la derecha; espacio de 16 px hasta el avatar | Contexto de diseño |
| Área de usuario de Workportal | Búsqueda de 244 px de ancho; espacio de 16 px hasta el avatar | Contexto de diseño |

## Semántica

Interpretación basada en evidencia:

- El logo identifica la familia de productos de Bizagi; el nombre del producto o la navegación identifican el producto concreto.
- En `Apps Tools`, "App saved" con una marca de verificación es un indicador de estado, mientras que los demás elementos son acciones; Publish es la acción destacada.
- En `Workportal`, los elementos de navegación llevan a áreas del producto; los elementos con `arrow-dropdown` abren submenús.

No verificado en Figma: regiones HTML (por ejemplo, banner o navegación), indicación de la página actual y el comportamiento de cada elemento.

## Iconografía

| Tema | Íconos |
|------|--------|
| Apps Tools | `add`, `settings`, `toolbox`, `ADA-Charts`, candado (Main menu), `chevron-down`, `lock-open`, `check`, `download`, `external-link`, `publish` |
| Workportal | `home`, `inbox`, `suitcase-add`, `Search`, `chart-bars`, `live-process`, `settings`, `arrow-dropdown`, búsqueda (en Input) |

Todos los íconos miden 16 px.

## Variantes (Propiedades)

El inventario siguiente es completo: se inspeccionaron las tres variantes.

### Theme

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Apps Designer | 64 px; logo, nombre del producto, nombre y correo del usuario, avatar de 40 px. | Predeterminado |
| Apps Tools | 64 px; logo y acciones de herramientas, Main menu y nombre de la app, acciones de la app con Publish resaltado. | — |
| Workportal | 48 px; wordmark completo, siete elementos de navegación, campo de búsqueda, avatar de 24 px. | — |

### userName, mail, avatar

| Propiedad | Descripción verificada | Evidencia / Notas |
|-----------|------------------------|-------------------|
| userName | Muestra "User name". | Solo Apps Designer; predeterminado `true` |
| mail | Muestra la dirección de correo. | Solo Apps Designer; predeterminado `true` |
| avatar | Muestra el avatar de 40 px. | Solo Apps Designer; predeterminado `true` |

## Estados

El conjunto de componentes Header no tiene propiedad de estado. Los elementos de navegación y las acciones no tienen variantes de hover, presión, selección ni foco en este componente.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Superficie | `surface/evergreen/bold` | Fondo de la barra | Vinculación de variable |
| Superficie | `surface/evergreen/subtle` | Fondo del elemento Publish (Apps Tools) | Vinculación de variable |
| Texto | `text/inverse` | Etiquetas sobre la barra | Vinculación de variable |
| Texto | `text/primary` | Etiqueta de Publish | Vinculación de variable |
| Fondo | `background/alpha` | Relleno del botón Main menu | Vinculación de variable |
| Borde | `border/evergreen` | Borde del botón Main menu | Vinculación de variable |
| Espaciado | `space/16` | Relleno de los elementos de navegación de Workportal | Vinculación de variable |
| Tipografía | `Text/Body/XXS` | Etiquetas de las acciones de Apps Tools | Estilo de texto |
| Tipografía | `Text/Label/XS` | Nombre de la app (Apps Tools) | Estilo de texto |
| Tipografía | `Text/Body/SM`, `Body/medium/regular` | Etiquetas de navegación de Workportal | Estilos de texto |
| Tipografía | `Body/medium/strong`, `Body/small/regular` | Nombre y correo del usuario (Apps Designer) | Estilos de texto |

Los tokens de Avatar, Button e Input se documentan en esos componentes.

Comportamiento actual:

- Varios textos usan los estilos de texto anteriores `Body/...` (variables `font/...`): el nombre y el correo del usuario en Apps Designer, y las etiquetas "Inbox" y "Queries" de Workportal. Las demás etiquetas de Workportal usan `Text/Body/SM`.
- La etiqueta "Live Processes" está vinculada a `icon/inverse` en lugar de `text/inverse`; ambos se resuelven en el mismo color.
- La mayoría de los rellenos y espacios usan valores fijos en lugar de variables de espaciado.
- El nombre del producto en `Apps Designer` y los logos son gráficos vectoriales, no texto.
- En `Workportal`, la capa del ícono inicial del campo de búsqueda se llama `calendar` y muestra un ícono de búsqueda.

## Interacción

El componente no tiene variantes de estado. No se inspeccionaron interacciones de prototipo.

No verificado en Figma: qué hace cada acción y cada elemento de navegación, cómo se abren los submenús, la indicación de la página activa y la navegación con teclado.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- Todos los elementos de navegación y las acciones combinan un ícono con una etiqueta de texto.
- Las etiquetas de Apps Tools miden 10 px (`size/10`); las de Workportal, 14 px.
- Las etiquetas usan `text/inverse` sobre `surface/evergreen/bold`. Las relaciones de contraste no se han verificado.

Información de accesibilidad faltante (no verificado en Figma): regiones, indicación de la página actual, apariencia de foco de los elementos, soporte de teclado y nombres accesibles para el logo y el avatar.

## Pautas de contenido

Observaciones verificadas (contenido de ejemplo):

- Apps Designer: "User name", "user.name@company.com".
- Apps Tools: "Controls", "Settings", "Tools", "ADA Charts", "Main menu", "test-app-ux", "Unlock app", "App saved", "Download app", "Open app", "Publish".
- Workportal: "Me", "Inbox", "New Case", "Queries", "Reports", "Live Processes", "Admin", "Search".

Las etiquetas ocupan una sola línea y usan mayúscula inicial o mayúsculas de título, como se muestra.

## Ejemplos

### Encabezado de App Designer

Configuración: `Theme=Apps Designer`, `userName=true`, `mail=true`, `avatar=true`

Descripción: Identidad del producto a la izquierda y nombre, correo y avatar del usuario a la derecha.

Evidencia / Clasificación: Variante predeterminada en Figma.

### Encabezado de edición de app

Configuración: `Theme=Apps Tools`

Descripción: Acciones de herramientas, la app actual con su Main menu y acciones de la app que terminan con Publish.

Evidencia / Clasificación: Variante existente en Figma.

### Encabezado de Workportal

Configuración: `Theme=Workportal`

Descripción: Navegación principal con elementos desplegables, búsqueda y avatar.

Evidencia / Clasificación: Variante existente en Figma.

## Combinaciones inválidas

| Combinación / Condición | Razón verificada | Evidencia |
|-------------------------|------------------|-----------|
| `userName`, `mail` o `avatar` con `Theme=Apps Tools` o `Theme=Workportal` | Las propiedades no tienen efecto en estos temas | Vinculaciones de propiedades |

## Implementación

### API de React

| Propiedad | Tipo | Predeterminado | Descripción |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Title"` | Título principal del encabezado. |
| `eyebrow` | `ReactNode` | `undefined` | Etiqueta contextual breve sobre el título. |
| `subtitle` | `ReactNode` | `undefined` | Descripción complementaria debajo del título. |
| `leading` | `ReactNode` | `undefined` | Contenido inicial, normalmente un ícono o avatar. |
| `actions` | `ReactNode` | `undefined` | Acciones alineadas a la derecha. |
| `theme` | `"apps-designer" \| "apps-tools" \| "workportal"` | `"apps-designer"` | Configura la propiedad `theme` del componente. |
| `showUserName` | `boolean` | `true` | Configura la propiedad `showUserName` del componente. |
| `showMail` | `boolean` | `true` | Configura la propiedad `showMail` del componente. |
| `showAvatar` | `boolean` | `true` | Configura la propiedad `showAvatar` del componente. |

También acepta los atributos nativos de React para el elemento HTML subyacente (HTMLAttributes).
### Ejemplos

#### Header with actions

```tsx
import { Header, Button } from "@genome-evolution/react";

<Header
  eyebrow="Workspace"
  title="Genome Evolution"
  actions={<Button size="sm">New</Button>}
/>;
```

## Aclaraciones pendientes

Ninguna

## Notas / Registro de cambios

Generado o revisado con el material de origen disponible el 2026-10-22.
