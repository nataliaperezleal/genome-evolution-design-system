export type Language = "en" | "es";

type Dict = Record<string, { en: string; es: string }>;

export const dict: Dict = {
  "nav.overview": { en: "Overview", es: "Inicio" },
  "nav.foundations": { en: "Foundations", es: "Foundations" },
  "nav.components": { en: "Components", es: "Components" },

  "search.placeholder": { en: "Search components, tokens or foundations", es: "Busca componentes, tokens o foundations" },

  "topbar.eyebrow": { en: "Design system docs", es: "Documentación del sistema" },
  "theme.light": { en: "Light", es: "Claro" },
  "theme.dark": { en: "Dark", es: "Oscuro" },
  "lang.es": { en: "ES", es: "ES" },
  "lang.en": { en: "EN", es: "EN" },

  "overview.hero.eyebrow": { en: "Genome Evolution Design System", es: "Genome Evolution Design System" },
  "overview.hero.title": {
    en: "A design language built to scale across teams and AI workflows.",
    es: "Un lenguaje de diseño preparado para escalar entre personas y AI workflows."
  },
  "overview.hero.body": {
    en: "Centralized documentation for foundations, components, tokens and implementation patterns.",
    es: "Documentación centralizada para foundations, componentes, tokens y patrones de implementación."
  },
  "overview.hero.cta.primary": { en: "Explore components", es: "Explorar componentes" },
  "overview.hero.cta.secondary": { en: "View foundations", es: "Ver Foundations" },

  "overview.signal.scale": { en: "Scale", es: "Escala" },
  "overview.signal.foundations": { en: "Foundations", es: "Foundations" },
  "overview.signal.impl": { en: "Implementation", es: "Implementación" },
  "overview.signal.scale.body": {
    en: "From actions and form controls to overlays, navigation and data display.",
    es: "Desde acciones y formularios hasta overlays, navegación y data display."
  },
  "overview.signal.scale.valueSuffix": { en: "documented components", es: "componentes documentados" },
  "overview.signal.foundations.body": {
    en: "Color, typography, spacing, layout, border, elevation and token exports aligned in code.",
    es: "Color, tipografía, spacing, layout, border, elevation y exports de tokens alineados en código."
  },
  "overview.signal.foundations.valueSuffix": { en: "foundation references", es: "referencias de foundations" },
  "overview.signal.impl.value": { en: "React + tokens + docs", es: "React + tokens + docs" },
  "overview.signal.impl.body": {
    en: "A working package layer sits underneath the documentation surface and feeds the live previews.",
    es: "Una capa de paquetes vive debajo de la documentación y alimenta los previews en vivo."
  },

  "overview.start.title": {
    en: "Three component pages already behave like a real design system reference.",
    es: "Tres páginas de componentes ya se comportan como una referencia real de sistema de diseño."
  },
  "overview.start.body": {
    en: "Button, Input and Icon Button now include editorial guidance, live previews, implementation props, token mapping and code snippets.",
    es: "Button, Input e Icon Button incluyen guía editorial, previews en vivo, props de implementación, mapeo a tokens y snippets."
  },
  "overview.start.eyebrow": { en: "Start here", es: "Empieza aquí" },
  "overview.principle.eyebrow": { en: "Principle", es: "Principio" },
  "overview.tokens.eyebrow": { en: "Tokens", es: "Tokens" },
  "overview.principle.title": { en: "Use docs for judgment, Storybook for mechanics.", es: "Docs para criterio, Storybook para mecánica." },
  "overview.principle.body": { en: "The site is shaped to answer why and when, not only what renders.", es: "El sitio responde por qué y cuándo, no solo qué renderiza." },
  "overview.tokens.title": { en: "Public semantic exports, not raw primitives by default.", es: "Exports semánticos públicos, no primitivos raw." },
  "overview.tokens.body": { en: "Light and dark theme outputs are already separated for implementation.", es: "Los temas light y dark ya están separados para implementación." },

  "overview.hero.search.label": { en: "Jump to a page", es: "Ir a una página" },
  "overview.hero.search.hint": { en: "Type to filter the sidebar list.", es: "Escribe para filtrar la lista del sidebar." },

  "overview.panel.tabs.system": { en: "System", es: "Sistema" },
  "overview.panel.tabs.overview": { en: "Overview", es: "Overview" },
  "overview.panel.tabs.guidelines": { en: "Guidelines", es: "Guías" },

  "overview.panel.eyebrow.system": { en: "SYSTEM", es: "SISTEMA" },
  "overview.panel.eyebrow.workspace": { en: "WORKSPACE", es: "ESPACIO DE TRABAJO" },
  "overview.panel.eyebrow.guidelines": { en: "GUIDELINES", es: "GUÍAS" },

  "overview.panel.subtitle.system": {
    en: "Foundations, components, tokens and docs shipped as one source of truth.",
    es: "Foundations, componentes, tokens y docs como un solo source of truth."
  },
  "overview.panel.subtitle.overview": { en: "Token-driven primitives in context.", es: "Primitivas guiadas por tokens en contexto." },
  "overview.panel.subtitle.guidelines": {
    en: "Editorial guidance for calmer, clearer interfaces.",
    es: "Guía editorial para interfaces más calmadas y claras."
  },

  "overview.panel.meta.lastUpdated": { en: "Last updated", es: "Última actualización" },
  "overview.panel.meta.version": { en: "Version", es: "Versión" },
  "overview.panel.meta.themeActive": { en: "Theme active", es: "Tema activo" },
  "overview.panel.meta.tokenSyncStatus": { en: "Token sync status", es: "Estado de sync de tokens" },

  "overview.panel.tokenSync.ready": { en: "AI Context Ready", es: "Contexto AI listo" },
  "overview.panel.tokenSync.pending": { en: "Token sync pending", es: "Sync de tokens pendiente" },

  "overview.panel.checks.tokens": { en: "Tokens documented", es: "Tokens documentados" },
  "overview.panel.checks.components": { en: "Components described", es: "Componentes descritos" },
  "overview.panel.checks.guidelines": { en: "Usage guidelines connected", es: "Guías de uso conectadas" },

  "overview.foundation.eyebrow": { en: "Foundation system", es: "Sistema de foundations" },
  "overview.foundation.title": {
    en: "The visual language is already codified across color, typography and spacing.",
    es: "El lenguaje visual ya está codificado en color, tipografía y espaciado."
  },
  "overview.foundation.body": {
    en: "The next layer of growth is less about inventing new style and more about turning the existing source of truth into more complete component behavior.",
    es: "El siguiente paso es menos inventar estilo y más convertir el source of truth actual en comportamiento de componentes más completo."
  },
  "overview.foundation.links.color": { en: "Color", es: "Color" },
  "overview.foundation.links.typography": { en: "Typography", es: "Tipografía" },
  "overview.foundation.links.spacing": { en: "Spacing", es: "Espaciado" },
  "overview.foundation.links.layout": { en: "Layout", es: "Layout" },

  "overview.portal.title": { en: "Explore the system", es: "Explora el sistema" },
  "overview.portal.headline": { en: "A practical map for design and engineering.", es: "Un mapa práctico para diseño e ingeniería." },
  "overview.portal.body": {
    en: "Start from foundations, scan component guidance, or grab tokens and styles for implementation.",
    es: "Empieza por foundations, revisa guías de componentes o toma tokens y estilos para implementar."
  },
  "overview.portal.foundations.title": { en: "Foundations", es: "Foundations" },
  "overview.portal.foundations.body": {
    en: "Color, typography, spacing and layout decisions that keep the UI coherent.",
    es: "Color, tipografía, spacing y layout: decisiones que mantienen coherencia en la UI."
  },
  "overview.portal.components.title": { en: "Components", es: "Components" },
  "overview.portal.components.body": {
    en: "Editorial guidance, tokens and implementation contracts for each component.",
    es: "Guía editorial, tokens y contrato de implementación por componente."
  },
  "overview.portal.tokens.title": { en: "Tokens & styles", es: "Tokens y estilos" },
  "overview.portal.tokens.body": {
    en: "Consume semantic exports (themes + CSS variables) instead of raw primitives.",
    es: "Consume exports semánticos (themes + variables CSS) en lugar de primitivos raw."
  },

  "overview.featured.title": { en: "Featured components", es: "Componentes destacados" },
  "overview.featured.body": {
    en: "A small set of pages to calibrate hierarchy, forms, overlays and feedback.",
    es: "Un set pequeño para calibrar jerarquía, formularios, overlays y feedback."
  }
};

export function t(key: keyof typeof dict, language: Language) {
  return dict[key][language];
}

export function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("ge-docs-lang");
  if (stored === "en" || stored === "es") return stored;
  const nav = navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("es") ? "es" : "en";
}
