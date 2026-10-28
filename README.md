# Genome Evolution Design System

Este repositorio reúne la documentación de componentes, fundamentos y patrones de UI.

> Este repositorio es la fuente de verdad para implementaciones, revisiones de código y consultas por agentes de IA.

## Sitio oficial — GitHub Pages

El único sitio vigente de documentación se publica desde `apps/docs` mediante GitHub Pages.

1. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
2. El workflow [docs-gh-pages.yml](.github/workflows/docs-gh-pages.yml) publica automáticamente cada push a `main`. También puedes ejecutarlo manualmente desde **Actions → Deploy docs to GitHub Pages → Run workflow**.
3. El sitio estará disponible en `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.

Para probar el sitio localmente antes de publicar:

```bash
npm ci
npm run docs
```

## Validaciones

Requisitos: Node.js 20+ y npm.

```bash
npm run build
npm run typecheck
npm run smoke
```

- `npm run validate:css-vars` comprueba que las variables CSS usadas en `packages/react/src` y `apps/docs/src` existan en los tokens generados.
- `npm run smoke` valida tokens, variables CSS, la documentación del sitio y Storybook.
- `npm run storybook` inicia el catálogo de componentes en `http://localhost:6006`.

## Estructura

```text
genome-evolution-design-system/
├── manifest.json       # Índice completo de componentes, fundamentos y reglas de IA
├── foundations/        # Tokens, tipografía, color, layout y otros fundamentos
├── components/         # Componentes documentados en inglés y español
├── patterns/           # Patrones de uso y combinaciones
├── ai/                 # Reglas y guías para agentes IA
├── examples/           # Ejemplos completos
└── templates/          # Plantillas para nuevos componentes
```

## Fuente de verdad de componentes
Los archivos `components/*.md` describen el contrato visual y de comportamiento de cada componente. `packages/react` define qué está implementado y disponible en código. Si la documentación y la implementación no coinciden, se reporta la diferencia antes de elegir un comportamiento.

## Componentes

- Documentados: 49. El inventario completo y sus metadatos están en [manifest.json](manifest.json).
- Exportados desde `packages/react/src/index.ts`: 35 exports.
- Planeados para código, pendientes de implementación: Duo Button y los componentes IA (Chat IA, Chat Suggestion IA, Input IA, Suggestion IA y Thinking IA).
- Partes de otros componentes, con documentación propia pero sin export independiente:
  - `Datepicker`: Calendar Month, Calendar Number.
  - `Table`: Table Cell Assets, Table Header Assets.
  - `Dropdown`: Dropdown Empty Content, Dropdown Icon Text.

| Componente | Documentación | Export en React |
|---|---|---|
| Accordion | [accordion.md](components/accordion.md) | Sí |
| Avatar | [avatar.md](components/avatar.md) | Sí |
| Backdrop | [backdrop.md](components/backdrop.md) | Sí |
| Badge | [badge.md](components/badge.md) | Sí |
| Breadcrumb | [breadcrumb.md](components/breadcrumb.md) | Sí |
| Breadcrumb Item | [breadcrumb-item.md](components/breadcrumb-item.md) | Tipo `BreadcrumbItem` dentro de Breadcrumb |
| Button | [button.md](components/button.md) | Sí |
| Calendar Month | [calendar-month.md](components/calendar-month.md) | Parte de Datepicker |
| Calendar Number | [calendar-number.md](components/calendar-number.md) | Parte de Datepicker |
| Checkbox | [checkbox.md](components/checkbox.md) | Sí |
| Chat IA | [chat-ia.md](components/chat-ia.md) | Planeado |
| Chat Suggestion IA | [chat-suggestion-ia.md](components/chat-suggestion-ia.md) | Planeado |
| Clear Button | [clear-button.md](components/clear-button.md) | Sí |
| Color Picker | [color-picker.md](components/color-picker.md) | Sí |
| Cursor | [cursor.md](components/cursor.md) | Sí |
| Datepicker | [datepicker.md](components/datepicker.md) | Sí |
| Duo Button | [duo-button.md](components/duo-button.md) | Planeado |
| Dropdown | [dropdown.md](components/dropdown.md) | Sí |
| Dropdown Empty Content | [dropdown-empty-content.md](components/dropdown-empty-content.md) | Parte de Dropdown |
| Dropdown Icon Text | [dropdown-icon-text.md](components/dropdown-icon-text.md) | Parte de Dropdown |
| Group | [group.md](components/group.md) | Sí |
| Header | [header.md](components/header.md) | Sí |
| Icon Button | [icon-button.md](components/icon-button.md) | Sí |
| Inline Alert | [inline-alert.md](components/inline-alert.md) | Sí |
| Input | [input.md](components/input.md) | Sí |
| Input IA | [input-ia.md](components/input-ia.md) | Planeado |
| Link | [link.md](components/link.md) | Sí |
| List | [list.md](components/list.md) | Sí |
| Modal | [modal.md](components/modal.md) | Sí |
| Paginator | [paginator.md](components/paginator.md) | Sí |
| Progress Bar | [progress-bar.md](components/progress-bar.md) | Sí |
| Radio Button | [radio-button.md](components/radio-button.md) | Sí (`RadioButtonGroup`) |
| Scorecard | [scorecard.md](components/scorecard.md) | Sí |
| Scroll | [scroll.md](components/scroll.md) | Sí |
| Segmented Button | [segmented-button.md](components/segmented-button.md) | Sí |
| Snackbar | [snackbar.md](components/snackbar.md) | Sí |
| Split Button | [split-button.md](components/split-button.md) | Sí |
| Stepper | [stepper.md](components/stepper.md) | Sí |
| Suggestion IA | [suggestion-ia.md](components/suggestion-ia.md) | Planeado |
| Switch | [switch.md](components/switch.md) | Sí |
| Tab | [tab.md](components/tab.md) | Sí |
| Table | [table.md](components/table.md) | Sí |
| Table Cell Assets | [table-cell-assets.md](components/table-cell-assets.md) | Parte de Table |
| Table Header Assets | [table-header-assets.md](components/table-header-assets.md) | Parte de Table |
| Tag | [tag.md](components/tag.md) | Sí |
| Text Area | [text-area.md](components/text-area.md) | Sí |
| Thinking IA | [thinking-ia.md](components/thinking-ia.md) | Planeado |
| Tooltip | [tooltip.md](components/tooltip.md) | Sí |

## Fundamentos

- [Tipografía](foundations/typography.md)
- [Color](foundations/color.md)
- [Spacing](foundations/spacing.md)
- [Layout](foundations/layout.md)
- [Opacidad](foundations/opacity.md)
- [Elevation](foundations/elevation.md)
- [Border](foundations/border.md)

## Para agentes IA

Lee primero [manifest.json](manifest.json) para obtener el índice completo del sistema.

- [Reglas de selección de componentes](ai/component-selection-rules.md)
- [Combinaciones inválidas](ai/invalid-combinations.md)
- [Uso de tokens](ai/token-usage-rules.md)
- [Plantilla de prompt](ai/prompt-template.md)
- [Checklist de evaluación](ai/evaluation-checklist.md)
- [Figma MCP](ai/figma-mcp.md)

## Fuente de verdad en Figma

[Ver archivo en Figma](https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution)
