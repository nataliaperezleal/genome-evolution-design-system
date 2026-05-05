export type Language = "en" | "es";

type Dict = Record<string, { en: string; es: string }>;

export const dict: Dict = {
  "nav.overview": { en: "Overview", es: "Inicio" },
  "nav.foundations": { en: "Foundations", es: "Foundations" },
  "nav.components": { en: "Components", es: "Components" },

  "search.placeholder": { en: "Search foundations and components", es: "Busca foundations y components" },

  "topbar.eyebrow": { en: "Design system docs", es: "Documentación del sistema" },
  "theme.light": { en: "Light", es: "Claro" },
  "theme.dark": { en: "Dark", es: "Oscuro" },
  "lang.es": { en: "ES", es: "ES" },
  "lang.en": { en: "EN", es: "EN" },

  "overview.hero.eyebrow": { en: "Genome Evolution Design System", es: "Genome Evolution Design System" },
  "overview.hero.title": {
    en: "Build calmer interfaces with sharper decisions, stronger tokens and a more usable component language.",
    es: "Construye interfaces más calmadas con mejores decisiones, tokens sólidos y un lenguaje de componentes usable."
  },
  "overview.hero.body": {
    en: "This is the editorial face of the system: foundations, guidance, tokens and implementation patterns gathered into one place, with Storybook still available as the technical playground.",
    es: "Esta es la cara editorial del sistema: foundations, guías, tokens y patrones de implementación en un solo lugar, con Storybook como playground técnico."
  },
  "overview.hero.cta.primary": { en: "Explore Button", es: "Explorar Button" },
  "overview.hero.cta.secondary": { en: "Browse Foundations", es: "Ver Foundations" },

  "overview.signal.scale": { en: "Scale", es: "Escala" },
  "overview.signal.foundations": { en: "Foundations", es: "Foundations" },
  "overview.signal.impl": { en: "Implementation", es: "Implementación" },
  "overview.signal.scale.body": {
    en: "From actions and form controls to overlays, navigation and data display.",
    es: "Desde acciones y formularios hasta overlays, navegación y data display."
  },
  "overview.signal.foundations.body": {
    en: "Color, typography, spacing, layout, border, elevation and token exports aligned in code.",
    es: "Color, tipografía, spacing, layout, border, elevation y exports de tokens alineados en código."
  },
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
  "overview.principle.title": { en: "Use docs for judgment, Storybook for mechanics.", es: "Docs para criterio, Storybook para mecánica." },
  "overview.principle.body": { en: "The site is shaped to answer why and when, not only what renders.", es: "El sitio responde por qué y cuándo, no solo qué renderiza." },
  "overview.tokens.title": { en: "Public semantic exports, not raw primitives by default.", es: "Exports semánticos públicos, no primitivos raw." },
  "overview.tokens.body": { en: "Light and dark theme outputs are already separated for implementation.", es: "Los temas light y dark ya están separados para implementación." }
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

