---
component: "Header"
system: "Genome Evolution DS"
type: "Navigation"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-1376"
last_updated: "2026-04-16"
tags: [header, navigation, global, topbar, apps-designer, apps-tools, workportal]
---

# Header — Genome Evolution DS

Barra de navegación global de ancho completo (1440px) con tres temas para distintos productos: Apps Designer, Apps Tools y Workportal.

## Quick Reference (AI-optimized)

**Propiedad única:**
- `theme` [`Apps Designer` | `Apps Tools` | `Workportal`] — default: `Apps Designer`

**Dimensiones por theme:**

| Theme | Ancho | Alto |
|---|---|---|
| Apps Designer | 1440px | 64px |
| Apps Tools | 1440px | 64px |
| Workportal | 1440px | 48px |

**Tokens comunes:**

| Elemento | Token | Valor |
|---|---|---|
| Fondo general | `surface/evergreen/bold` | #297a39 |
| Logo zone fondo | `surface/evergreen/subtle` | #eefbf2 |
| Texto nav items | `text/inverse` | #f7f8f7 |
| Avatar fondo | `surface/evergreen/subtle` | #eefbf2 |
| Avatar letra | `text/evergreen` | #297a39 |

**Combinaciones inválidas:**
- Usar contenido de un theme en otro.
- Avatar 40px en Workportal (usa 24px) o Avatar 24px en Apps Designer (usa 40px).
- Omitir logo zone con `surface/evergreen/subtle`.

## Variants por Theme

### Theme = Apps Designer
- Logo zone izquierda: `surface/evergreen/subtle`, padding 16px, logo Bizagi 32×32px.
- Header bar derecha: `surface/evergreen/bold`, justify-between.
  - Content (296px): logotipo "bzg" + wordmark "App Designer".
  - User Actions: nombre + email + Avatar 40px.
- Props booleanos: `avatar`, `mail`, `userName`.

### Theme = Apps Tools
- Logo zone + 4 nav items: Controls, Settings, Tools, ADA Charts.
- Page info (centro, 204px): botón "Main menu" + label de app.
- Right actions (5 items): Unlock app | App saved | Download app | Open app | **Publish**.
  - ⚠️ Publish: único item con `surface/evergreen/subtle` + `text/primary`.

### Theme = Workportal
- Left: Logo Bizagi 104×32px + 7 nav items (Me, Inbox, New Case▼, Queries▼, Reports▼, Live Processes▼, Admin▼).
- Right: Search input 244px + Avatar 24px.

## Token Mapping por Theme

### Apps Designer
| Elemento | Token |
|---|---|
| User name | `Body/medium/strong` 14/20 semibold |
| Email | `Body/small/regular` 12/18 regular |
| Avatar | 40×40px, `surface/evergreen/subtle`, `text/evergreen`, `Text/Body/MD Strong` |

### Apps Tools
| Elemento | Token |
|---|---|
| Nav items | `Text/Body/XS` 12/16 regular, `text/inverse` |
| Main menu | `Text/Button/SM` 12/16 semibold, `background/alpha` rgba(173,184,176,0.6) |
| Page label | `Text/Label/XS` 11/16 semibold tracking-wide, blanco |
| Publish fondo | `surface/evergreen/subtle` |
| Publish texto | `text/primary` #2d342f |

### Workportal
| Elemento | Token |
|---|---|
| Nav items | `Text/Body/SM` 14/20 regular, `text/inverse` |
| Search | 244px, `background/canvas`, `border/default`, radius 4px |
| Search placeholder | `Text/Body/XS` 12/16, `text/secondary` |
| Avatar | 24×24px, `surface/evergreen/subtle`, `text/evergreen`, `Text/Body/XS Strong` |

## Accessibility
- `<header role="banner">` + `<nav aria-label="Navegación principal">`.
- Nav items con arrow-dropdown: `aria-haspopup="true"` + `aria-expanded`.
- Search: `aria-label="Búsqueda global"`.
- Avatar: `aria-label` con nombre del usuario.
- Contraste text/inverse (#f7f8f7) sobre surface/evergreen/bold (#297a39) → cumple 4.5:1.

## Changelog
- `2026-04-16` — Documentación completa. 3 themes confirmados.
