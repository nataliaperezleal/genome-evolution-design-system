---
pattern: "Sidebar Navigation"
system: "Genome Evolution Design System"
type: "Pattern"
status: "draft"
created: "2026-10-28"
tags: [navigation, sidebar, menu, layout]
---

# Navegación lateral

## Composición

- No presupongas un componente `Sidebar` dedicado: compón el área como navegación semántica con `nav` y una lista de destinos.
- Usa `Link` para los destinos navegables. Usa un destino de enlace real y no un botón para cambiar de ruta.
- Agrupa destinos relacionados bajo una etiqueta descriptiva. Para grupos que se pueden expandir, usa `Accordion` y deja claro qué destinos contiene.
- Identifica la página actual de forma semántica y visual; no comuniques la selección solo mediante color.
- Conserva el orden lógico de navegación y permite recorrer los destinos y grupos con teclado.

## Diseño y accesibilidad

- Mantén las etiquetas breves y reconocibles; no dependas únicamente de iconos para nombrar una ruta.
- El nombre del grupo debe describir su contenido. El estado expandido o contraído debe estar disponible para tecnologías de asistencia.
- Proporciona un indicador de foco visible y verifica su contraste con el fondo adyacente.
- En vistas estrechas, conserva el acceso a los mismos destinos y su jerarquía; no ocultes la navegación sin ofrecer un control accesible para abrirla.

## Tipografía, color y espacio

- Etiquetas de navegación: `var(--ge-typography-role-body-sm-family)`, `var(--ge-typography-role-body-sm-size)`, `var(--ge-typography-role-body-sm-weight)` y `var(--ge-typography-role-body-sm-line-height)`.
- Usa `var(--ge-color-role-text-primary)` para destinos, `var(--ge-color-role-text-secondary)` para información secundaria y `var(--ge-color-role-background-canvas)` para la superficie.
- Separa grupos con `var(--ge-spacing-gap-md)` y sus elementos con `var(--ge-spacing-gap-sm)`.

## Pendientes de verificar

- Los exports de `index.ts` no confirman cómo configurar el estado de `Accordion`, su anuncio accesible ni el destino y estado actual de `Link` en React.
- No hay un componente `Sidebar` documentado en el inventario ni exportado desde `index.ts`; la composición semántica descrita debe implementarse con la estructura disponible.

## Fuentes consultadas

- [manifest.json](../../manifest.json)
- [accordion.md](../../components/accordion.md)
- [link.md](../../components/link.md)
- [index.ts](../../packages/react/src/index.ts)
- [variables.css](../../packages/tokens/dist/variables.css)
- [token-usage-rules.md](../../ai/token-usage-rules.md)
- [typography.md](../../foundations/typography.md)
- [evaluation-checklist.md](../../ai/evaluation-checklist.md)
- [AGENTS.md](../../AGENTS.md)
