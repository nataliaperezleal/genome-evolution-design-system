# Genome Evolution Design System

Sistema de diseño de Bizagi / Genome Plus. Documentación pública de componentes, fundamentos y patrones de UI.

> Este repositorio es la fuente de verdad para implementaciones, revisiones de código y consultas por agentes de IA.

---

## Ejecutar localmente

Requisitos: Node.js 20+ y npm.

```bash
npm ci
```

- Storybook (UI components): `npm run storybook` (http://localhost:6006)
- Docs (sitio Vite): `npm run docs` (http://127.0.0.1:6011)
- Build: `npm run build`
- Typecheck: `npm run typecheck`
- Smoke check (tokens + docs + storybook): `npm run smoke`

---

## Verlo “en cualquier lugar” (GitHub Pages)

Este repo incluye workflow para publicar `apps/docs` en GitHub Pages cuando haces push a `main` (requiere `BASE_PATH` para servir bajo `/<repo>/`).

- Workflow: `.github/workflows/docs-gh-pages.yml`

1) En GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**  
2) Luego de un push a `main`, tu sitio queda en:

`https://<tu-usuario>.github.io/<nombre-del-repo>/`

---

## Validaciones rápidas

Para evitar errores silenciosos (por ejemplo variables CSS faltantes o valores numéricos sin unidad que rompen `padding`, `border-radius`, `z-index`, etc.):

- Validador de CSS vars: `npm run validate:css-vars` (script: `scripts/validate-css-vars.mjs`)
- Recomendado antes de publicar: `npm run smoke`

## Estructura del repositorio

```
genome-design-system/
├── README.md
├── manifest.json               ← Índice completo para IA
├── CHANGELOG.md
│
├── foundations/                ← Tokens, tipografía, color, layout
├── components/                 ← 36 componentes documentados
├── patterns/                   ← Patrones de uso y combinaciones
├── ai/                         ← Reglas y guías para agentes IA
├── examples/                   ← Ejemplos completos
└── templates/                  ← Plantillas para nuevos componentes
```

---

## Componentes disponibles (36)

| Componente | Archivo | Estado |
|---|---|---|
| Accordion | [accordion.md](components/accordion.md) | Production |
| Avatar | [avatar.md](components/avatar.md) | Production |
| Backdrop | [backdrop.md](components/backdrop.md) | Production |
| Badge | [badge.md](components/badge.md) | Production |
| Breadcrumb | [breadcrumb.md](components/breadcrumb.md) | Production |
| Button | [button.md](components/button.md) | Draft |
| Clear Button | [clear-button.md](components/clear-button.md) | Production |
| Checkbox | [checkbox.md](components/checkbox.md) | Production |
| Color Picker | [color-picker.md](components/color-picker.md) | Production |
| Cursor | [cursor.md](components/cursor.md) | Production |
| Datepicker | [datepicker.md](components/datepicker.md) | Production |
| Duo Button | [duo-button.md](components/duo-button.md) | Production |
| Dropdown | [dropdown.md](components/dropdown.md) | Production |
| Group | [group.md](components/group.md) | Production |
| Header | [header.md](components/header.md) | Production |
| Icon Button | [icon-button.md](components/icon-button.md) | Production |
| Inline Alert | [inline-alert.md](components/inline-alert.md) | Production |
| Input | [input.md](components/input.md) | Production |
| Link | [link.md](components/link.md) | Production |
| List | [list.md](components/list.md) | Production |
| Modal | [modal.md](components/modal.md) | Production |
| Paginator | [paginator.md](components/paginator.md) | Production |
| Progress Bar | [progress-bar.md](components/progress-bar.md) | Production |
| Radio Button | [radio-button.md](components/radio-button.md) | Production |
| Scoreboard | [scoreboard.md](components/scoreboard.md) | Production |
| Scroll | [scroll.md](components/scroll.md) | Production |
| Segmented Button | [segmented-button.md](components/segmented-button.md) | Production |
| Split Button | [split-button.md](components/split-button.md) | Production |
| Snackbar | [snackbar.md](components/snackbar.md) | Production |
| Stepper | [stepper.md](components/stepper.md) | Production |
| Switch | [switch.md](components/switch.md) | Production |
| Tab | [tab.md](components/tab.md) | Production |
| Table | [table.md](components/table.md) | Production |
| Tag | [tag.md](components/tag.md) | Production |
| Text Area | [text-area.md](components/text-area.md) | Production |
| Tooltip | [tooltip.md](components/tooltip.md) | Production |

---

## Fundamentos

- [Tipografía](foundations/typography.md)
- [Color](foundations/color.md)
- [Spacing](foundations/spacing.md)
- [Layout](foundations/layout.md)
- [Elevation](foundations/elevation.md)
- [Border](foundations/border.md)
- [Tokens](foundations/tokens.json)

---

## Para agentes IA

Lee primero [`manifest.json`](manifest.json) para obtener el índice completo del sistema.  
Lee [`ai/component-selection-rules.md`](ai/component-selection-rules.md) para entender cuándo usar cada componente.  
Lee [`ai/invalid-combinations.md`](ai/invalid-combinations.md) para evitar errores comunes.

---

## Fuente de verdad en Figma

[Ver archivo en Figma](https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution)

---

## Contribución

Cada componente tiene su documentación generada desde el frame **"Texto para el md"** en Figma.  
Para actualizar: editar el frame en Figma → extraer contenido → actualizar el `.md` correspondiente.
