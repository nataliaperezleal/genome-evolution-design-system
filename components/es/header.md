---
component: Header
system: Genome Evolution Design System
type: Navigation / Global bar
status: Done
version: 1.2
figma_node: 2184:1376
last_updated: "2026-10-19"
tags: [header, navigation, global-bar, Apps Designer, Apps Tools, Workportal]
---

# Header

## Referencia rápida

### Qué es
Barra de navegación global de ancho completo (1440px) cuya estructura y contenido cambian según el theme del producto. Existen tres themes: `Apps Designer`, `Apps Tools` y `Workportal`.

### Propiedades clave

| Propiedad | Valores | Por defecto |
|---|---|---|
| Theme | Apps Designer \| Apps Tools \| Workportal | Apps Designer |
| avatar | true \| false | true |
| mail | true \| false | true |
| userName | true \| false | true |

### Configuración por defecto
`Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`

### Combinaciones inválidas
- Mezclar el contenido de un theme en otro (cada theme tiene estructura fija).
- Usar el header sin logo zone.
- Avatar `Size=40` en `Theme=Workportal` (usa `Size=24`).
- Avatar `Size=24` en `Theme=Apps Designer` (usa `Size=40`).

### Uso típico
- `Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`
- `Theme=Apps Tools`
- `Theme=Workportal`

## Propósito / Intención
Barra principal de navegación global de la aplicación, disponible en tres themes según el producto o contexto (Apps Designer, Apps Tools, Workportal).

## Cuándo usar
- Cuando se necesita la barra de navegación principal de la aplicación en cualquiera de los tres productos/contextos.

## Cuándo NO usar
- Como header de sección o de panel interno.
- En viewports menores a 1440px sin adaptación responsive.

## Estructura (Anatomía)

### Partes del componente

| Theme | Parte | Contenido |
|---|---|---|
| Apps Designer | Logo | Logo bizagi 32×32 |
| Apps Designer | Header → Content (296px) | Logotipo Group (8px de alto) + wordmark "App Designer" |
| Apps Designer | Header → User Actions | Nombre de usuario, email, Avatar (Color=Evergreen, Size=40) |
| Apps Tools | Left actions | Logo + 4 ítems con ícono + texto: Controls, Settings, Tools, ADA Charts |
| Apps Tools | Page info (204px) | Botón "Main menu" (ícono lock-closed + ícono chevron-down) + label "test-app-ux" |
| Apps Tools | Right actions | Unlock app, App saved (check), Download app, Open app, Publish |
| Workportal | Left → Logo | Logo bizagi completo 104×32 |
| Workportal | Left → Navigation Menu | 7 Navigation Items: Me, Inbox, New Case, Queries, Reports, Live Processes, Admin |
| Workportal | User Actions | Search input (244px) + Avatar (Color=Evergreen, Size=24) |

### Layout

| Theme | Ancho × Alto | Layout (según lo visible en Figma) |
|---|---|---|
| Apps Designer | 1440×64 | Fila, ítems centrados; Logo padding 16; Header padding horizontal 16, justify-between; gap 16 en User Actions |
| Apps Tools | 1440×64 | Fila, justify-between; cada ítem de acción con padding horizontal 16, gap 8, alto 64 |
| Workportal | 1440×48 | Fila, justify-between, padding horizontal 16; Logo padding 24 horizontal / 8 vertical; Navigation Item padding horizontal 16, gap 4; gap 16 en User Actions |

## Iconografía

| Theme | Íconos (nombres de capa en Figma) | Tamaño |
|---|---|---|
| Apps Designer | bizagi (logo) | 32×32 |
| Apps Tools | add, settings, toolbox, ADA-Charts, lock-open, check, download, external-link, publish; botón Main menu: check (nombre de capa, asset lock-closed), close (nombre de capa, asset chevron-down) | 16×16 |
| Workportal | home, inbox, suitcase-add, arrow-dropdown, Search, chart-bars, live-process, settings | 16×16 |

Nota: algunos nombres de capa no coinciden con el ícono que contienen (ver Aclaraciones pendientes).

## Variantes (Propiedades)

| Propiedad | Valores | Por defecto | Aplica a |
|---|---|---|---|
| Theme | Apps Designer \| Apps Tools \| Workportal | Apps Designer | Todos |
| avatar | true \| false | true | Booleano visible en Theme=Apps Designer 
| mail | true \| false | true | Booleano visible en Theme=Apps Designer 
| userName | true \| false | true | Booleano visible en Theme=Apps Designer 

## Mapeo de tokens

Los tokens listados son los exportados por Figma para este nodo. Los nombres de tokens de color se verificaron contra `Color_RoleProduct.tokens.json`. Los tokens de spacing, gap, radius, semantic y tipografía no se cruzaron con sus archivos de tokens [Pending confirmation].

### Fondo

| Elemento | Token | Valor |
|---|---|---|
| Barra del header (todos los themes) | surface/evergreen/bold | #297a39 |
| Avatar | surface/evergreen/subtle | #eefbf2 |
| Ítem Publish (Apps Tools) | surface/evergreen/subtle | #eefbf2 |
| Botón Main menu (Apps Tools) | background/alpha | #adb8b099 |
| Search input (Workportal) | background/canvas | #ffffff |

### Texto

| Elemento | Token | Valor |
|---|---|---|
| Ítems de navegación, acciones, nombre de usuario, email | text/inverse | #f7f8f7 |
| Label de Publish | text/primary | #2d342f |
| Label del Avatar | text/evergreen | #297a39 |
| Placeholder de búsqueda | text/secondary | #5f6d62 |
| Label "Live Processes" | icon/inverse (usado como color de texto) | #f7f8f7 |
| "test-app-ux", "Download app" | text/inverse | #FFFFFF |

### Borde

| Elemento | Token | Valor |
|---|---|---|
| Botón Main menu | border/evergreen | #297a39 |
| Search input | border/default | #c3cbc5 |

### Ícono
Tokens exportados: icon/inverse (#f7f8f7), icon/evergreen (#297a39), icon/primary (#5f6d62). Mapeo por ícono: [Pending confirmation].

### Tipografía

| Elemento | Estilo |
|---|---|
| Nombre de usuario Apps Designer | Body/medium/strong |
| Email Apps Designer | Body/small/regular |
| Ítems y acciones de Apps Tools | Text/Body/XXS (10/14, regular) |
| Main menu de Apps Tools | Text/Button/SM |
| Label de página de Apps Tools | Text/Label/XS |
| Ítems de navegación Workportal | Text/Body/SM (algunos ítems usan Body/medium/regular) |
| Placeholder de búsqueda Workportal | Text/Body/XXS |
| Label del Avatar Size=40 | Text/Body/MD Strong |
| Label del Avatar Size=24 | Text/Body/XS Strong |

### Espaciado
space/4, space/8, space/16, gap/sm, gap/xxxs (según lo exportado por Figma).

### Radio
semantic/sm (4px) para el botón Main menu y el Search input; radius/24 para el Avatar.

## Ejemplos

1. `Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`: logo, wordmark "App Designer", "User name", "user.name@company.com" y Avatar Size=40.
2. `Theme=Apps Tools`: acciones izquierdas (Controls, Settings, Tools, ADA Charts), Main menu con label "test-app-ux", acciones derechas (Unlock app, App saved, Download app, Open app, Publish).
3. `Theme=Workportal`: navegación (Me, Inbox, New Case, Queries, Reports, Live Processes, Admin), Search input y Avatar Size=24.

## Combinaciones inválidas
- Mezclar el contenido de un theme en otro (cada theme tiene estructura fija).
- Usar el header sin logo zone.
- Avatar `Size=40` en `Theme=Workportal`.
- Avatar `Size=24` en `Theme=Apps Designer`.

(Fuente: descripción del componente en Figma.)

## Checklist de QA
- [ ] El Theme corresponde al producto (Apps Designer, Apps Tools o Workportal)
- [ ] Dimensiones: 1440×64 (Apps Designer, Apps Tools) y 1440×48 (Workportal)
- [ ] Avatar Size=40 en Apps Designer y Size=24 en Workportal
- [ ] Tokens de color y tipografía vinculados, sin valores hard-coded
- [ ] Logo zone presente
- [ ] No se usa como header de sección o panel interno

## Aclaraciones pendientes
1. Fondo de la logo zone: la descripción indica `surface/evergreen/subtle`; el diseño renderiza `surface/evergreen/bold` en los tres themes.
2. Nombres de propiedad: la descripción usa `theme`; las variantes usan `Theme`. Los booleanos `avatar`, `mail`, `userName` están en camelCase y solo controlan Apps Designer.
3. Tipografía de ítems de Apps Tools: la descripción indica Text/Body/XS (12/16); el diseño usa Text/Body/XXS (10/14).
4. Placeholder de búsqueda en Workportal: la descripción indica Text/Body/XS; el diseño usa Text/Body/XXS (10/14).
5. Los ítems de navegación de Workportal mezclan Text/Body/SM y Body/medium/regular (line-height 22).
6. Textos con white / Neutral/Neutral100 en lugar de text/inverse ("test-app-ux", "Download app"), e icon/inverse usado como color de texto ("Live Processes").
7. Padding del botón Main menu: space/8 resuelve a 9px y space/4 a 5px en el código generado, frente a 8px/4px en otros elementos.
8. Nombres de capa que no coinciden con el ícono (Main menu: check/close; Search input: calendar).
9. La descripción menciona logo "Bizagi Apps 32×32" y Avatar "size/24 (radius pill)"; el diseño usa radius/24 y el ícono bizagi.
10. Estados, interacción, semántica, accesibilidad, comportamiento responsive y color del ícono Publish.

## Notas / Changelog
- Las reglas derivadas de la descripción (Cuándo NO usar, Combinaciones inválidas) provienen de la descripción del componente en Figma.
- 2026-10-19: Documentación inicial generada a partir del material fuente disponible (nodo 2184:1376).