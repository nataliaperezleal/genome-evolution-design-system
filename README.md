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

- `npm run validate:css-vars` comprueba las variables CSS referenciadas por componentes y documentación.
- `npm run smoke` valida tokens, variables CSS, la documentación del sitio y Storybook.
- `npm run storybook` inicia el catálogo de componentes en `http://localhost:6006`.

## Estructura

```text
genome-design-system/
├── manifest.json       # Índice completo de componentes, fundamentos y reglas de IA
├── foundations/        # Tokens, tipografía, color, layout y otros fundamentos
├── components/         # Componentes documentados en inglés y español
├── patterns/           # Patrones de uso y combinaciones
├── ai/                 # Reglas y guías para agentes IA
├── examples/           # Ejemplos completos
└── templates/          # Plantillas para nuevos componentes
```

## Fuente de verdad de componentes

Los archivos `components/*.md` definen el contrato visual y de comportamiento de cada componente; sus versiones en `components/es/` son la documentación localizada. Los valores visuales deben venir de los tokens existentes del repositorio, no de valores nuevos definidos por separado en React.

`packages/react` es una implementación de ese contrato, no una fuente alternativa ni una generación automática desde Markdown. Al cambiar una implementación, se deben respetar las variantes, estados y valores documentados, y usar los tokens correspondientes. Si falta una definición o hay una contradicción en los Markdown, hay que resolverla en la documentación antes de elegir un comportamiento nuevo.

## Componentes (44)

Todos los componentes están identificados con estado `Design`. El inventario completo y sus metadatos están en [manifest.json](manifest.json).

| Componente | Documentación | Estado |
|---|---|---|
| Accordion | [accordion.md](components/accordion.md) | Design |
| Avatar | [avatar.md](components/avatar.md) | Design |
| Backdrop | [backdrop.md](components/backdrop.md) | Design |
| Badge | [badge.md](components/badge.md) | Design |
| Breadcrumb | [breadcrumb.md](components/breadcrumb.md) | Design |
| Breadcrumb Item | [breadcrumb-item.md](components/breadcrumb-item.md) | Design |
| Button | [button.md](components/button.md) | Design |
| Calendar Month | [calendar-month.md](components/calendar-month.md) | Design |
| Calendar Number | [calendar-number.md](components/calendar-number.md) | Design |
| Checkbox | [checkbox.md](components/checkbox.md) | Design |
| Clear Button | [clear-button.md](components/clear-button.md) | Design |
| Color Picker | [color-picker.md](components/color-picker.md) | Design |
| Cursor | [cursor.md](components/cursor.md) | Design |
| Datepicker | [datepicker.md](components/datepicker.md) | Design |
| Duo Button | [duo-button.md](components/duo-button.md) | Design |
| Dropdown | [dropdown.md](components/dropdown.md) | Design |
| Dropdown Empty Content | [dropdown-empty-content.md](components/dropdown-empty-content.md) | Design |
| Dropdown Icon Text | [dropdown-icon-text.md](components/dropdown-icon-text.md) | Design |
| Group | [group.md](components/group.md) | Design |
| Header | [header.md](components/header.md) | Design |
| Icon Button | [icon-button.md](components/icon-button.md) | Design |
| Inline Alert | [inline-alert.md](components/inline-alert.md) | Design |
| Input | [input.md](components/input.md) | Design |
| Link | [link.md](components/link.md) | Design |
| List | [list.md](components/list.md) | Design |
| Modal | [modal.md](components/modal.md) | Design |
| Paginator | [paginator.md](components/paginator.md) | Design |
| Panel | [panel.md](components/panel.md) | Design |
| Progress Bar | [progress-bar.md](components/progress-bar.md) | Design |
| Radio Button | [radio-button.md](components/radio-button.md) | Design |
| Scorecard | [scorecard.md](components/scorecard.md) | Design |
| Scroll | [scroll.md](components/scroll.md) | Design |
| Segmented Button | [segmented-button.md](components/segmented-button.md) | Design |
| Snackbar | [snackbar.md](components/snackbar.md) | Design |
| Split Button | [split-button.md](components/split-button.md) | Design |
| Stepper | [stepper.md](components/stepper.md) | Design |
| Switch | [switch.md](components/switch.md) | Design |
| Tab | [tab.md](components/tab.md) | Design |
| Table | [table.md](components/table.md) | Design |
| Table Cell Assets | [table-cell-assets.md](components/table-cell-assets.md) | Design |
| Table Header Assets | [table-header-assets.md](components/table-header-assets.md) | Design |
| Tag | [tag.md](components/tag.md) | Design |
| Text Area | [text-area.md](components/text-area.md) | Design |
| Tooltip | [tooltip.md](components/tooltip.md) | Design |

## Componentes IA (5)

| Componente | Documentación | Estado |
|---|---|---|
| Chat IA | [chat-ia.md](components/chat-ia.md) | Design |
| Chat Suggestion IA | [chat-suggestion-ia.md](components/chat-suggestion-ia.md) | Design |
| Input IA | [input-ia.md](components/input-ia.md) | Design |
| Suggestion IA | [suggestion-ia.md](components/suggestion-ia.md) | Design |
| Thinking IA | [thinking-ia.md](components/thinking-ia.md) | Design |

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

## Fuente de verdad en Figma

[Ver archivo en Figma](https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution)

## Contribución

Cada componente tiene documentación generada desde el frame **"Texto para el md"** en Figma. Para actualizarla, edita el frame en Figma, extrae su contenido y actualiza el archivo Markdown correspondiente.
