import { useEffect, useMemo, useState } from "react";

import {
  Accordion,
  Avatar,
  Backdrop,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  ClearButton,
  ColorPicker,
  Cursor,
  Datepicker,
  type DatepickerSize,
  type DatepickerTone,
  type   DatepickerType,
  IconButton,
  InlineAlert,
  Input,
  Dropdown,
  Link,
  Group,
  Header,
  Switch,
  type InputState,
  Table,
  Tag,
  List,
  Modal,
  type ModalSize,
  Paginator,
  ProgressBar,
  RadioButtonGroup,
  Scorecard,
  Scroll,
  SegmentedButton,
  SplitButton,
  Snackbar,
  type SnackbarType,
  Stepper,
  TabList,
  Tooltip,
  TextArea
} from "@genome-evolution/react";
import ColorPickerDemo from "./ColorPickerDemo";

import { componentDocsBySlug, componentDocsBySlugEs, foundationDocsBySlug, foundationDocsBySlugEs, manifest, tokenStats } from "./data";
import { renderInline, renderMarkdown } from "./markdown";
import type { DocRecord, NavItem } from "./types";
import { BorderFoundation } from "./foundations/BorderFoundation";
import { ColorsFoundation } from "./foundations/ColorsFoundation";
import { TypographyFoundation } from "./foundations/TypographyFoundation";
import { LayoutFoundation } from "./foundations/LayoutFoundation";
import { OpacityFoundation } from "./foundations/OpacityFoundation";
import { ElevationFoundation } from "./foundations/ElevationFoundation";
import { detectInitialLanguage, dict, t, type Language } from "./i18n";

type ComponentTabId =
  | "overview"
  | "when-to-use"
  | "when-not-to-use"
  | "anatomy"
  | "states"
  | "rules"
  | "do-dont"
  | "tokens"
  | "accessibility"
  | "implementation";

const componentTabTranslationKeys: Record<ComponentTabId, keyof typeof dict> = {
  overview: "docs.tab.overview",
  "when-to-use": "docs.tab.whenToUse",
  "when-not-to-use": "docs.tab.whenNotToUse",
  anatomy: "docs.tab.anatomy",
  states: "docs.tab.states",
  rules: "docs.tab.rules",
  "do-dont": "docs.tab.doDont",
  tokens: "docs.tab.tokens",
  accessibility: "docs.tab.accessibility",
  implementation: "docs.tab.implementation"
};

function publicAsset(path: string) {
  return new URL(path.replace(/^\/+/, ""), document.baseURI).toString();
}

function BrandLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 128 128"
      role="img"
      aria-label="Genome Evolution"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.44 119.7L91.84 81.8002C93.18 81.0402 94 79.6202 94 78.0802V38.7402L24.16 78.6002C22.82 79.3602 22 80.7802 22 82.3202V117.7C22 119.46 23.9 120.58 25.44 119.7Z"
        fill="#00A346"
      />
      <path
        d="M50.14 55.4802L40.12 49.6402C38.8 48.8802 38 47.4602 38 45.9402V10.3002C38 8.52016 39.92 7.42016 41.46 8.30016L86.8 34.5402L50.14 55.4602V55.4802Z"
        fill="#00CC57"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path
        d="M3.333 8h9.334m0 0L8.667 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path
        d="M7.333 12a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Zm5.334 1.333-2.54-2.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M8 2.667v6.666m0 0L5.333 6.667M8 9.333l2.667-2.666M3.333 11.333v1.334c0 .736.597 1.333 1.334 1.333h6.666c.737 0 1.334-.597 1.334-1.333v-1.334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const foundationItems: NavItem[] = manifest.foundations.map((entry) => ({
    id: entry.file.replace(/\.md$/, "").replace(/\//g, "-"),
    label: entry.name,
    group: "foundations"
  }))
  .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));

const componentItems: NavItem[] = manifest.components
  .map((entry) => ({
    id: entry.file.replace(/\.md$/, "").replace(/\//g, "-"),
    label: entry.name,
    group: "components"
  }))
  .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", group: "overview" },
  { id: "getting-started", label: "Getting Started", group: "overview" },
  ...foundationItems,
  ...componentItems
];

function localizedFoundationLabel(item: NavItem, language: Language) {
  if (item.group !== "foundations") return item.label;
  const keyById: Record<string, Parameters<typeof t>[0]> = {
    "foundations-border": "nav.foundation.border",
    "foundations-color": "nav.foundation.color",
    "foundations-elevation": "nav.foundation.elevation",
    "foundations-layout": "nav.foundation.layout",
    "foundations-opacity": "nav.foundation.opacity",
    "foundations-spacing": "nav.foundation.spacing",
    "foundations-typography": "nav.foundation.typography"
  };
  const key = keyById[item.id];
  return key ? t(key, language) : item.label;
}

function getItemMeta(id: string, language: Language) {
  if (id === "overview") {
    return { kind: "overview" as const };
  }
  if (id === "getting-started") {
    return { kind: "getting-started" as const };
  }
  const foundationDocs = language === "es" ? foundationDocsBySlugEs : foundationDocsBySlug;
  const componentDocs = language === "es" ? componentDocsBySlugEs : componentDocsBySlug;

  if (foundationDocs[id]) {
    return { kind: "foundation" as const, doc: foundationDocs[id] };
  }
  if (componentDocs[id]) {
    return { kind: "component" as const, doc: componentDocs[id] };
  }
  return { kind: "overview" as const };
}

const homeFeaturedComponentIds = [
  "components-button",
  "components-input",
  "components-modal",
  "components-inline-alert",
  "components-table",
  "components-dropdown"
];

function normalizeHeading(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function headingToTabId(heading: string): ComponentTabId | null {
  const normalized = normalizeHeading(heading);

  if (normalized === "overview" || normalized === "resumen" || normalized === "vision general") return "overview";
  if (
    normalized === "purpose" ||
    normalized === "purpose intent" ||
    normalized === "proposito" ||
    normalized === "proposito intencion" ||
    normalized === "objetivo"
  )
    return "overview";

  if (normalized.includes("when to use") || normalized.includes("cuando usar")) return "when-to-use";
  if (
    normalized.includes("when not to use") ||
    normalized.includes("when to not use") ||
    normalized.includes("cuando no usar")
  )
    return "when-not-to-use";

  if (
    normalized === "anatomy" ||
    normalized === "anatomia" ||
    normalized === "structure anatomy" ||
    normalized === "estructura anatomia"
  )
    return "anatomy";
  if (normalized === "states" || normalized === "estados") return "states";
  if (normalized === "rules" || normalized === "reglas") return "rules";
  if (normalized.includes("do") && normalized.includes("dont")) return "do-dont";
  if (normalized === "accessibility" || normalized === "accesibilidad") return "accessibility";
  if (normalized === "implementation" || normalized === "implementacion") return "implementation";
  if (
    normalized === "tokens" ||
    normalized === "token" ||
    normalized.includes("token mapping") ||
    normalized.includes("mapeo de tokens")
  )
    return "tokens";

  return null;
}

function stripFrontmatter(markdown: string) {
  return markdown.replace(/^---[\s\S]*?---\n/, "");
}

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;
  const raw = match[1];
  const data: Record<string, string> = {};

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const kv = trimmed.match(/^([a-zA-Z0-9_]+)\s*:\s*(.+)\s*$/);
    if (!kv) continue;
    const key = kv[1];
    let value = kv[2].trim();
    value = value.replace(/^"(.+)"$/, "$1").replace(/^'(.+)'$/, "$1");
    data[key] = value;
  }
  return data;
}

function stripInlineMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\s*>\s?/g, "")
    .trim();
}

function splitMarkdownByH2(markdown: string) {
  const body = stripFrontmatter(markdown);
  const lines = body.split("\n");
  const intro: string[] = [];
  const sections: Array<{ heading: string; content: string[] }> = [];
  let current: { heading: string; content: string[] } | null = null;

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)\s*$/);
    if (match) {
      if (current) sections.push(current);
      current = { heading: match[1], content: [] };
      continue;
    }
    if (!current) intro.push(line);
    else current.content.push(line);
  }
  if (current) sections.push(current);

  return { intro: intro.join("\n").trim(), sections };
}

function parseMarkdownTableRow(line: string) {
  const cells: string[] = [];
  let cell = "";
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");

  for (let index = 0; index < trimmed.length; index += 1) {
    if (trimmed[index] === "\\" && trimmed[index + 1] === "|") {
      cell += "|";
      index += 1;
    } else if (trimmed[index] === "|") {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += trimmed[index];
    }
  }
  cells.push(cell.trim());
  return cells;
}

function extractAnatomyParts(markdown: string) {
  const { sections } = splitMarkdownByH2(markdown);
  const anatomy = sections.find((section) => {
    const heading = normalizeHeading(section.heading);
    return heading === "structure anatomy" || heading === "estructura anatomia";
  });
  if (!anatomy) return [];

  const lines = anatomy.content;
  const partsHeading = lines.findIndex((line) => {
    const match = line.match(/^###\s+(.+)\s*$/);
    if (!match) return false;
    const heading = normalizeHeading(match[1]);
    return heading === "component parts" || heading === "partes del componente";
  });
  if (partsHeading < 0) return [];

  const tableRows: string[][] = [];
  for (let index = partsHeading + 1; index < lines.length; index += 1) {
    if (/^#{1,3}\s+/.test(lines[index])) break;
    if (!lines[index].trim().startsWith("|")) continue;
    if (/^\|\s*:?-{3,}/.test(lines[index])) continue;
    tableRows.push(parseMarkdownTableRow(lines[index]));
  }

  return tableRows.slice(1).flatMap((cells) => {
    const [name, requirement, description] = cells;
    if (!name) return [];
    return [{ name, requirement: requirement ?? "", description: description ?? "" }];
  });
}

function extractPurposeFromMarkdown(markdown: string) {
  const { sections } = splitMarkdownByH2(markdown);
  const purposeSection = sections.find((section) => {
    const normalized = normalizeHeading(section.heading);
    return (
      normalized === "purpose" ||
      normalized === "purpose intent" ||
      normalized === "proposito" ||
      normalized === "proposito intencion" ||
      normalized === "objetivo"
    );
  });
  const content = purposeSection?.content ?? [];

  const paragraphs: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const joined = current.join(" ").replace(/\s+/g, " ").trim();
    if (joined) paragraphs.push(stripInlineMarkdown(joined));
    current = [];
  };

  for (const rawLine of content) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flush();
      continue;
    }
    if (line.trim() === "---") continue;
    if (line.trim().startsWith(">") && !current.length && !paragraphs.length) continue;
    current.push(line);
  }
  flush();

  if (!paragraphs.length) return null;
  // Prefer a substantive paragraph (avoid title-like lines such as "Avatar — Component").
  const substantive = paragraphs.find((p) => p.length >= 60 && !/—\s*component$/i.test(p));
  return substantive ?? paragraphs.reduce((best, next) => (next.length > best.length ? next : best), paragraphs[0]) ?? null;
}

function markdownToPlainText(markdown: string) {
  const withoutFrontmatter = stripFrontmatter(markdown);
  return withoutFrontmatter
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function downloadFromString(filename: string, content: string, mime = "text/plain") {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function trimMarkdownFromQuickReference(markdown: string) {
  const lines = markdown.split("\n");
  const isQuickReference = (heading: string) => {
    const normalized = normalizeHeading(heading);
    return normalized.includes("quick reference") || normalized.includes("referencia rapida") || normalized.includes("referencia rápida");
  };

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index]?.match(/^##\s+(.+)\s*$/);
    if (!match) continue;
    if (isQuickReference(match[1])) {
      return lines.slice(index).join("\n").trim();
    }
  }
  return markdown;
}

function buildComponentMarkdownTabs(markdown: string) {
  const { intro, sections } = splitMarkdownByH2(markdown);

  const mdByTab: Partial<Record<ComponentTabId, string>> = {};
  const leftovers: string[] = [];

  for (const section of sections) {
    const tabId = headingToTabId(section.heading);
    const sectionMarkdown = `## ${section.heading}\n${section.content.join("\n")}`.trim();
    if (!tabId) {
      leftovers.push(sectionMarkdown);
      continue;
    }
    mdByTab[tabId] = [mdByTab[tabId], sectionMarkdown].filter(Boolean).join("\n\n");
  }

  const overviewParts = [intro, mdByTab.overview, ...leftovers].filter((part) => Boolean(part?.trim()));
  if (overviewParts.length) mdByTab.overview = overviewParts.join("\n\n");

  return mdByTab;
}

function splitMarkdownByH3(markdown: string) {
  const lines = markdown.split("\n");
  const cards: Array<{ title?: string; body: string[] }> = [];
  let current: { title?: string; body: string[] } | null = null;

  for (const line of lines) {
    const match = line.match(/^###\s+(.+)\s*$/);
    if (match) {
      if (current) cards.push(current);
      current = { title: match[1], body: [] };
      continue;
    }
    if (!current) current = { title: undefined, body: [] };
    current.body.push(line);
  }
  if (current) cards.push(current);

  return cards
    .map((card) => ({ title: card.title, body: card.body.join("\n").trim() }))
    .filter((card) => Boolean(card.title) || Boolean(card.body));
}

function splitMarkdownByStrongLabels(markdown: string) {
  const lines = markdown.split("\n");
  const cards: Array<{ title?: string; body: string[] }> = [];
  let current: { title?: string; body: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const body = current.body.join("\n").trim();
    if (current.title || body) cards.push({ title: current.title, body: body ? body.split("\n") : [] });
    current = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    // Supports both `**Label:**` and `**Label**:` styles.
    const match =
      line.match(/^\*\*([^*]+?):\*\*\s*$/) ??
      line.match(/^\*\*([^*]+)\*\*:\s*$/);
    if (match) {
      flush();
      current = { title: match[1], body: [] };
      continue;
    }
    if (!current) current = { title: undefined, body: [] };
    current.body.push(rawLine);
  }
  flush();

  return cards
    .map((card) => ({ title: card.title, body: card.body.join("\n").trim() }))
    .filter((card) => Boolean(card.title) || Boolean(card.body));
}

function splitMarkdownByH2Cards(markdown: string) {
  const lines = markdown.split("\n");
  const cards: Array<{ title?: string; body: string[] }> = [];
  let current: { title?: string; body: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const body = current.body.join("\n").trim();
    if (current.title || body) cards.push({ title: current.title, body: body ? body.split("\n") : [] });
    current = null;
  };

  for (const rawLine of lines) {
    const match = rawLine.match(/^##\s+(.+)\s*$/);
    if (match) {
      flush();
      current = { title: match[1], body: [] };
      continue;
    }
    if (!current) current = { title: undefined, body: [] };
    current.body.push(rawLine);
  }
  flush();

  return cards
    .map((card) => ({ title: card.title, body: card.body.join("\n").trim() }))
    .filter((card) => Boolean(card.title) || Boolean(card.body));
}

function markdownToDocCards(markdown: string, language: Language) {
  // Prefer H2-driven cards when the document has multiple H2 sections.
  // This keeps each card aligned to the markdown section structure.
  const h2FirstPass = splitMarkdownByH2Cards(markdown);
  const h2Titled = h2FirstPass.filter((card) => Boolean(card.title));
  if (h2Titled.length > 1) {
    return h2FirstPass
      .map((card) => ({ title: card.title, body: card.body }))
      .filter((card) => Boolean(card.title) || Boolean(card.body?.trim()));
  }

  // If we only have one (or zero) titled H2, avoid fabricating an "Overview" title.
  // Untitled cards render fine without a header, and this prevents repeated "Overview" headings.
  const allowSyntheticOverviewTitle = false;

  const h3Cards = splitMarkdownByH3(markdown);
  const expanded: Array<{ title?: string; body: string }> = [];

  for (const card of h3Cards) {
    if (!card.title) {
      expanded.push(card);
      continue;
    }

    const strongCards = splitMarkdownByStrongLabels(card.body);
    if (strongCards.length <= 1) {
      expanded.push(card);
      continue;
    }

    for (const strongCard of strongCards) {
      expanded.push({
        title: strongCard.title ? `${card.title} · ${strongCard.title}` : card.title,
        body: strongCard.body
      });
    }
  }

  if (!expanded.length) return [];

  // If there are no H3 headings (single untitled card), try splitting by H2 sections first,
  // then by strong-label blocks to avoid long "walls of text".
  if (expanded.length === 1 && !expanded[0].title) {
    const h2Cards = splitMarkdownByH2Cards(expanded[0].body);
    if (h2Cards.length > 1) {
      return h2Cards
        .map((card) => ({ title: card.title, body: card.body }))
        .filter((card) => Boolean(card.title) || Boolean(card.body?.trim()));
    }

    const strongCards = splitMarkdownByStrongLabels(expanded[0].body);
    if (strongCards.length > 1) {
      const firstUntitled = strongCards[0] && !strongCards[0].title ? strongCards[0] : null;
      const rest = firstUntitled ? strongCards.slice(1) : strongCards;
      const cards = rest.map((entry) => ({ title: entry.title, body: entry.body }));
      if (firstUntitled && firstUntitled.body.trim()) {
        cards.unshift({
          title: undefined,
          body: firstUntitled.body
        });
      }
      return cards;
    }
  }

  // Ensure any leading untitled content becomes a real card so everything is grouped.
  // Do not force a synthetic title; it creates repetitive "Overview" headings in some docs.
  if (allowSyntheticOverviewTitle && expanded[0] && !expanded[0].title && expanded[0].body.trim()) {
    expanded[0] = { ...expanded[0], title: language === "es" ? "Resumen" : "Overview" };
  }

  return expanded;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mapComponentTypeToCategory(type: string | undefined, language: Language, category?: string) {
  const normalized = (type ?? "").toLowerCase();
  const cat = (en: string, es: string) => ({ id: slugify(en), label: language === "es" ? es : en });

  if (category === "AI") return { id: "ai-components", label: t("nav.aiComponents", language) };

  // Matches the reference categories (Material/Polaris-like).
  if (normalized.includes("content") || normalized.includes("display") || normalized.includes("data display"))
    return cat("Content", "Contenido");
  if (normalized.includes("layout") || normalized.includes("container")) return cat("Layout and organization", "Layout y organización");
  if (normalized.includes("action")) return cat("Menus and actions", "Menús y acciones");
  if (normalized.includes("navigation") || normalized.includes("search")) return cat("Navigation and search", "Navegación y búsqueda");
  if (normalized.includes("presentation") || normalized.includes("identity")) return cat("Presentation", "Presentación");
  if (normalized.includes("form") || normalized.includes("input") || normalized.includes("selection"))
    return cat("Selection and input", "Selección e input");
  if (normalized.includes("status") || normalized.includes("feedback") || normalized.includes("indicator"))
    return cat("Status", "Estado");
  if (normalized.includes("overlay") || normalized.includes("interaction")) return cat("System experiences", "Experiencias del sistema");

  return cat("Other", "Otros");
}

function CategoryIcon({ id }: { id: string }) {
  // Minimal icon set to make the grid feel like a system reference.
  const common = { width: 44, height: 44, viewBox: "0 0 24 24", fill: "none" as const };
  if (id.includes("content")) {
    return (
      <svg {...common}>
        <path d="M7 7h10M7 12h10M7 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M6 3.8h12A2.2 2.2 0 0 1 20.2 6v12A2.2 2.2 0 0 1 18 20.2H6A2.2 2.2 0 0 1 3.8 18V6A2.2 2.2 0 0 1 6 3.8Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  if (id.includes("layout")) {
    return (
      <svg {...common}>
        <path
          d="M5 6.5h14M9 6.5V18M5 18h14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.2 4.2h11.6A2 2 0 0 1 19.8 6.2v11.6a2 2 0 0 1-2 2H6.2a2 2 0 0 1-2-2V6.2a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  if (id.includes("menus") || id.includes("actions")) {
    return (
      <svg {...common}>
        <path d="M7 8h10M7 12h6M7 16h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M5.8 4.2h12.4A1.8 1.8 0 0 1 20 6v12a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 18V6a1.8 1.8 0 0 1 1.8-1.8Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  if (id.includes("navigation")) {
    return (
      <svg {...common}>
        <path
          d="M10.3 10.3a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M16.7 17.2 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M4.2 6.2h9.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id.includes("presentation")) {
    return (
      <svg {...common}>
        <path d="M7 8.2h10v7.2H7V8.2Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 17.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 15.4V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (id.includes("selection")) {
    return (
      <svg {...common}>
        <path
          d="M6.2 6.2h11.6a2 2 0 0 1 2 2v7.6a2 2 0 0 1-2 2H6.2a2 2 0 0 1-2-2V8.2a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M7.4 12h6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16.2 10.8v2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (id.includes("status")) {
    return (
      <svg {...common}>
        <path
          d="M12 4.4a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M8.6 12.1l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M12 4.3a7.7 7.7 0 1 0 0 15.4 7.7 7.7 0 0 0 0-15.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M12 7.8v4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16.6h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function NavGroupIcon({ group }: { group: NavItem["group"] }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const };

  if (group === "overview") {
    return (
      <svg {...common}>
        <path
          d="M4 11.2 12 4l8 7.2V20a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 20v-8.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9.2 21.8v-7h5.6v7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (group === "foundations") {
    return (
      <svg {...common}>
        <path
          d="M12 3.8 20 8.4v7.2l-8 4.6-8-4.6V8.4l8-4.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 3.8v16.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 8.4l8 4.6 8-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M5.2 6.2h6.6v6.6H5.2V6.2Zm7 0h6.6v6.6h-6.6V6.2ZM5.2 13.2h6.6v6.6H5.2v-6.6Zm7 0h6.6v6.6h-6.6v-6.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComponentPreview({
  componentName,
  docBody,
  language
}: {
  componentName: string;
  docBody?: string;
  language?: Language;
}) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoPopoverRect, setDemoPopoverRect] = useState<DOMRect | null>(null);
  const [demoPage, setDemoPage] = useState(1);
  const [demoSegment, setDemoSegment] = useState("light");
  const [demoSnackOpen, setDemoSnackOpen] = useState(false);
  const [demoSwitch, setDemoSwitch] = useState(true);
  const [demoTab, setDemoTab] = useState("solid");

  if (componentName === "Button") {
    return (
      <div className="preview-stack">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
    );
  }

  if (componentName === "Duo Button") {
    const buttonPairs = [
      { color: "Evergreen" as const, tone: "evergreen" as const, size: "md" as const },
      { color: "Indigo" as const, tone: "indigo" as const, size: "md" as const },
      { color: "Evergreen" as const, tone: "evergreen" as const, size: "sm" as const },
      { color: "Indigo" as const, tone: "indigo" as const, size: "sm" as const }
    ];

    return (
      <div className="duo-button-specimen">
        <p className="table-muted">
          {language === "es" ? "Muestra visual basada en la guía del componente." : "Visual specimen based on the component guide."}
        </p>
        {buttonPairs.map((pair) => (
          <div className="duo-button-specimen__row" key={`${pair.color}-${pair.size}`}>
            <span className="duo-button-specimen__label">
              {pair.color} ·{" "}
              {pair.size === "md" ? "Regular" : language === "es" ? "Pequeño" : "Small"}
            </span>
            <div className="preview-row">
              <Button variant="secondary" tone={pair.tone} size={pair.size}>
                {language === "es" ? "Cancelar" : "Cancel"}
              </Button>
              <Button variant="primary" tone={pair.tone} size={pair.size}>
                {language === "es" ? "Aplicar" : "Apply"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (componentName === "Input") {
    return (
      <div className="preview-form">
        <Input label="Workspace name" placeholder="Genome Evolution" helperText="This appears across your docs site." />
        <Input label="Project slug" defaultValue="genome-evolution" error="Slug already in use." />
      </div>
    );
  }

  if (componentName === "Icon Button") {
    return (
      <div className="preview-stack">
        <IconButton label="Search" icon={<SearchIcon />} />
        <IconButton label="Go forward" icon={<ArrowIcon />} variant="outline" tone="neutral" />
      </div>
    );
  }

  if (componentName === "Badge") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Badge tone="neutral">Borrador</Badge>
          <Badge tone="primary">Nuevo</Badge>
          <Badge tone="success">Activo</Badge>
          <Badge tone="warning">En revisión</Badge>
          <Badge tone="danger">Error</Badge>
        </div>
      </div>
    );
  }

  if (componentName === "Inline Alert") {
    return (
      <div className="preview-stack">
        <InlineAlert tone="info" icon="ℹ">
          Tu plan se renovará el <strong>15 de mayo</strong>. Revisa tu método de pago antes de esa fecha.
        </InlineAlert>
        <InlineAlert tone="success" icon="✓">
          Cambios guardados correctamente. Los usuarios verán la actualización en breve.
        </InlineAlert>
        <InlineAlert tone="warning" icon="⚠">
          El uso del API supera el 80% de tu cuota mensual. Considera actualizar tu plan.
        </InlineAlert>
        <InlineAlert tone="danger" icon="✕">
          No se pudo procesar el pago. Verifica los datos de tu tarjeta e intenta nuevamente.
        </InlineAlert>
      </div>
    );
  }

  if (componentName === "Avatar") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Avatar initials="AB" size="sm" tone="blue" />
          <Avatar initials="CD" size="md" tone="green" />
          <Avatar initials="EF" size="lg" tone="amber" />
        </div>
        <div className="preview-row">
          <div className="avatar-group">
            <Avatar initials="JS" size="md" tone="blue" />
            <Avatar initials="MR" size="md" tone="green" />
            <Avatar initials="PL" size="md" tone="amber" />
            <Avatar initials="+4" size="md" tone="pink" />
          </div>
        </div>
      </div>
    );
  }

  if (componentName === "Table") {
    return (
      <div className="preview-table">
        <Table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Último acceso</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="JS" size="sm" tone="blue" />
                  <div>
                    <div className="table-user__name">Julia Sánchez</div>
                    <div className="table-user__meta">julia@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>admin</code>
              </td>
              <td>
                <Badge tone="success">Activo</Badge>
              </td>
              <td className="table-muted">Hace 2 h</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="MR" size="sm" tone="amber" />
                  <div>
                    <div className="table-user__name">Miguel Ruiz</div>
                    <div className="table-user__meta">miguel@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>editor</code>
              </td>
              <td>
                <Badge tone="warning">En revisión</Badge>
              </td>
              <td className="table-muted">Ayer, 4:30 p.m.</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="AP" size="sm" tone="pink" />
                  <div>
                    <div className="table-user__name">Ana Pereira</div>
                    <div className="table-user__meta">ana@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>viewer</code>
              </td>
              <td>
                <Badge tone="neutral">Inactivo</Badge>
              </td>
              <td className="table-muted">Hace 14 días</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  if (componentName === "Link") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Link href="#foundations-typography">Default link</Link>
          <Link href="#foundations-color" tone="evergreen">
            Evergreen link
          </Link>
          <Link href="#components-button" tone="indigo">
            Indigo link
          </Link>
        </div>
      </div>
    );
  }

  if (componentName === "Group") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Group wrap gap="sm">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary" tone="indigo">
            Secondary
          </Button>
          <ClearButton tone="default">Clear</ClearButton>
          <Badge tone="success">Active</Badge>
          <Tag tone="indigo">Filter</Tag>
        </Group>
        <Group direction="column" align="start" gap="xs">
          <span className="table-muted">Column stack example</span>
          <Group gap="xs">
            <Badge tone="neutral">Meta</Badge>
            <Badge tone="primary">New</Badge>
          </Group>
        </Group>
      </div>
    );
  }

  if (componentName === "Header") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Header
          eyebrow="Workspace"
          title="Genome Evolution"
          subtitle="Design system reference"
          leading={<BrandLogo />}
          actions={
            <>
              <ClearButton tone="default">Docs</ClearButton>
              <Button size="sm">New</Button>
            </>
          }
        />
      </div>
    );
  }

  if (componentName === "List") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <List
          items={[
            {
              id: "a",
              leading: <Avatar initials="JS" size="sm" tone="blue" />,
              title: "Julia Sánchez",
              description: "julia@empresa.com",
              meta: <Badge tone="success">Activo</Badge>,
              trailing: (
                <ClearButton tone="default" aria-label="More actions">
                  ···
                </ClearButton>
              )
            },
            {
              id: "b",
              leading: <Avatar initials="MR" size="sm" tone="amber" />,
              title: "Miguel Ruiz",
              description: "miguel@empresa.com",
              meta: <Badge tone="warning">En revisión</Badge>,
              trailing: (
                <ClearButton tone="default" aria-label="More actions">
                  ···
                </ClearButton>
              )
            }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Progress Bar") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <ProgressBar value={32} max={100} tone="evergreen" />
        <ProgressBar value={62} max={100} tone="indigo" />
        <ProgressBar indeterminate tone="neutral" label="Loading" />
      </div>
    );
  }

  if (componentName === "Paginator") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Paginator page={demoPage} pageCount={16} onPageChange={setDemoPage} />
        <div className="table-muted">Current page: {demoPage}</div>
      </div>
    );
  }

  if (componentName === "Modal") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Button onClick={() => setDemoModalOpen(true)}>Open modal</Button>
        <Modal
          open={demoModalOpen}
          title="Confirm changes"
          description="This action updates the workspace settings for everyone."
          onClose={() => setDemoModalOpen(false)}
          footer={
            <>
              <ClearButton tone="default" onClick={() => setDemoModalOpen(false)}>
                Cancel
              </ClearButton>
              <Button onClick={() => setDemoModalOpen(false)}>Confirm</Button>
            </>
          }
        >
          <Input label="Workspace name" defaultValue="Genome Evolution" helperText="Shown across your docs site." />
        </Modal>
      </div>
    );
  }

  if (componentName === "Radio Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <RadioButtonGroup
          label="Plan"
          defaultValue="pro"
          options={[
            { value: "free", label: "Free", description: "For personal exploration and small projects." },
            { value: "pro", label: "Pro", description: "Best for teams building products with tokens." },
            { value: "enterprise", label: "Enterprise", description: "Advanced controls and compliance." }
          ]}
          onChange={() => {}}
        />
      </div>
    );
  }

  if (componentName === "Scorecard") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Scorecard label="Usuarios activos" value="4,821" change="↑ 12.4% vs mes anterior" tone="success" />
          <Scorecard label="Ingresos MRR" value="$38.2K" change="↑ 7.1% vs mes anterior" tone="success" />
          <Scorecard label="Errores" value="14" change="↓ 3.2% vs semana anterior" tone="warning" />
        </div>
      </div>
    );
  }

  if (componentName === "Scroll") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Scroll maxHeight={180}>
          <p className="table-muted">Scrollable content</p>
          {Array.from({ length: 18 }, (_, i) => (
            <p key={i} className="table-muted">
              Item {i + 1}: secondary content inside a scrollable surface.
            </p>
          ))}
        </Scroll>
      </div>
    );
  }

  if (componentName === "Segmented Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <SegmentedButton
          value={demoSegment}
          onChange={setDemoSegment}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "System" }
          ]}
        />
        <div className="table-muted">Selected: {demoSegment}</div>
      </div>
    );
  }

  if (componentName === "Split Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <SplitButton
          label="Publish"
          onClick={() => {}}
          items={[
            { label: "Publish now", onSelect: () => {} },
            { label: "Schedule…", onSelect: () => {} },
            { label: "Save draft", onSelect: () => {} }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Checkbox") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Checkbox label="Enviar notificaciones" defaultChecked disabled={false} />
        <Checkbox label="Modo silencioso" disabled={false} />
        <Checkbox label="Requiere confirmación" error="Debes aceptar para continuar." disabled={false} />
      </div>
    );
  }

  if (componentName === "Clear Button") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <ClearButton tone="default" leadingIcon={<ArrowIcon />}>
            Back
          </ClearButton>
          <ClearButton tone="indigo" trailingIcon={<ArrowIcon />}>
            Next
          </ClearButton>
          <ClearButton tone="default" typeTone="danger">
            Delete
          </ClearButton>
          <ClearButton tone="evergreen" corner="rounded">
            Pill action
          </ClearButton>
        </div>
      </div>
    );
  }

  if (componentName === "Color Picker") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <ColorPickerDemo width={320} />
      </div>
    );
  }

  if (componentName === "Cursor") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Cursor label="Pointer" />
          <Cursor variant="text" label="Text" />
          <Cursor variant="grab" label="Grab" tone="indigo" />
        </div>
      </div>
    );
  }

  if (componentName === "Datepicker") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Datepicker label="Start date" helperText="Pick a date for the milestone." defaultValue="2026-05-04" />
        <Datepicker label="End date" error="End date must be after start date." />
      </div>
    );
  }

  if (componentName === "Dropdown") {
    return (
      <article className="preview-dropdown-card">
        <strong>Items default</strong>
        <Dropdown presentation="panel" content="items" />
      </article>
    );
  }

  if (componentName === "Switch") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <div className="preview-row">
          <Switch checked={demoSwitch} onCheckedChange={setDemoSwitch} aria-label="Notificaciones" />
          <span>Notificaciones</span>
        </div>
        <div className="preview-row">
          <Switch defaultChecked={false} aria-label="Accesibilidad" />
          <span>Modo de accesibilidad</span>
        </div>
      </div>
    );
  }

  if (componentName === "Snackbar") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Button onClick={() => setDemoSnackOpen(true)}>Show snackbar</Button>
        <Snackbar
          open={demoSnackOpen}
          tone="success"
          message="Changes saved successfully."
          actionLabel="Undo"
          onAction={() => setDemoSnackOpen(false)}
          onClose={() => setDemoSnackOpen(false)}
          autoHideDurationMs={3500}
        />
      </div>
    );
  }

  if (componentName === "Stepper") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Stepper
          currentStep={1}
          steps={[
            { label: "Details", description: "Name and workspace info" },
            { label: "Billing", description: "Plan and payment" },
            { label: "Confirm", description: "Review changes" }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Tab") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <TabList
          value={demoTab}
          onChange={setDemoTab}
          options={[
            { value: "solid", label: "Solid" },
            { value: "gradient", label: "Gradient" }
          ]}
        />
        <div className="table-muted">Active tab: {demoTab}</div>
      </div>
    );
  }

  if (componentName === "Tooltip") {
    return (
      <div className="preview-stack" style={{ alignItems: "flex-start" }}>
        <Tooltip content="This is a tooltip">
          <ClearButton tone="default">Hover me</ClearButton>
        </Tooltip>
        <Tooltip content="Secondary info" side="right">
          <Badge tone="primary">Info</Badge>
        </Tooltip>
      </div>
    );
  }

  if (componentName === "Text Area") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <TextArea label="Notes" placeholder="Write a short note…" helperText="Supports multi-line input." />
        <TextArea label="Error example" defaultValue="Too long…" error="Max 140 characters." />
      </div>
    );
  }

  if (componentName === "Breadcrumb") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "#overview" },
            { label: "Components", href: "#components-button" },
            { label: "Button" }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Tag") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Tag>Default</Tag>
          <Tag tone="evergreen">Evergreen</Tag>
          <Tag tone="indigo">Indigo</Tag>
        </div>
      </div>
    );
  }

  if (componentName === "Accordion") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Accordion title="What is included in the design system?" defaultOpen>
          Tokens, editorial guidance, a React package layer, and patterns for building calmer interfaces.
        </Accordion>
        <Accordion title="How should I choose tones?" tone="indigo">
          Use evergreen for primary flows and indigo for secondary emphasis. Reserve semantic tones for feedback states.
        </Accordion>
      </div>
    );
  }

  if (componentName === "Backdrop") {
    return (
      <div className="preview-stack backdrop-preview">
        <div className="backdrop-preview-main">
          <div className="preview-row">
            <span className="table-muted">Backdrop is an overlay. Preview shows swatches instead.</span>
          </div>
          <div className="preview-row">
            <div className="backdrop-swatch backdrop-swatch--black" aria-hidden="true" />
            <div className="backdrop-swatch backdrop-swatch--white" aria-hidden="true" />
          </div>
          <Backdrop open={false} />
        </div>
      </div>
    );
  }

  if (componentName === "Breadcrumb") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "#overview" },
            { label: "Foundations", href: "#foundations-color" },
            { label: "Color" }
          ]}
        />
      </div>
    );
  }

  return (
    <div className="preview-placeholder">
      <div className="preview-placeholder__title">
        <span>Live preview pending</span>
        <Badge tone="neutral" variant="outline">
          React TBD
        </Badge>
      </div>
      <p>This component page has guidance and tokens, but the React package output is still pending.</p>
    </div>
  );
}

type HomeShowcaseProps = {
  componentCount: number;
  foundationCount: number;
  cssVarCount: number;
  darkOverrideCount: number;
  theme: "light" | "dark";
  version: string;
  lastUpdated: string;
  language: Language;
};

function HomeShowcase({
  componentCount,
  foundationCount,
  cssVarCount,
  darkOverrideCount,
  theme,
  version,
  lastUpdated,
  language
}: HomeShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"system" | "overview" | "guidelines">("overview");
  const tokenSyncLabel =
    cssVarCount > 0 ? t("overview.panel.tokenSync.ready", language) : t("overview.panel.tokenSync.pending", language);
  const tokenSyncTone = cssVarCount > 0 ? "success" : "warning";

  return (
    <div className="home-showcase">
      <section className="feature-box" aria-label="Feature box">
        <div className="action-tabs" role="tablist" aria-label="Overview tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "system"}
            className={activeTab === "system" ? "is-active" : undefined}
            onClick={() => setActiveTab("system")}
          >
            {t("overview.panel.tabs.system", language)}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "overview"}
            className={activeTab === "overview" ? "is-active" : undefined}
            onClick={() => setActiveTab("overview")}
          >
            {t("overview.panel.tabs.overview", language)}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "guidelines"}
            className={activeTab === "guidelines" ? "is-active" : undefined}
            onClick={() => setActiveTab("guidelines")}
          >
            {t("overview.panel.tabs.guidelines", language)}
          </button>
        </div>

        <div className="feature-content" role="tabpanel">
          <p className="feature-eyebrow">
            {activeTab === "system"
              ? t("overview.panel.eyebrow.system", language)
              : activeTab === "overview"
                ? t("overview.panel.eyebrow.workspace", language)
                : t("overview.panel.eyebrow.guidelines", language)}
          </p>
          <h4 className="feature-title">Genome Evolution</h4>
          <p className="feature-subtitle">
            {activeTab === "system"
              ? t("overview.panel.subtitle.system", language)
              : activeTab === "overview"
                ? t("overview.panel.subtitle.overview", language)
                : t("overview.panel.subtitle.guidelines", language)}
          </p>

          <div className="feature-meta" aria-label="System metadata">
            <div className="feature-meta__row">
              <span className="feature-meta__label">{t("overview.panel.meta.lastUpdated", language)}</span>
              <span className="feature-meta__value">{lastUpdated}</span>
            </div>
            <div className="feature-meta__row">
              <span className="feature-meta__label">{t("overview.panel.meta.version", language)}</span>
              <span className="feature-meta__value">{version}</span>
            </div>
            <div className="feature-meta__row">
              <span className="feature-meta__label">{t("overview.panel.meta.themeActive", language)}</span>
              <span className="feature-meta__value">
                {theme === "dark" ? t("theme.dark", language) : t("theme.light", language)}
              </span>
            </div>
            <div className="feature-meta__row">
              <span className="feature-meta__label">{t("overview.panel.meta.tokenSyncStatus", language)}</span>
              <span className={`feature-pill feature-pill--${tokenSyncTone}`}>{tokenSyncLabel}</span>
            </div>
          </div>

          <div className="feature-checklist" aria-label="System readiness">
            <div className="feature-check">
              <span className="feature-count" aria-hidden="true">
                {cssVarCount}
              </span>
              <p>{t("overview.panel.checks.tokens", language)}</p>
            </div>
            <div className="feature-check">
              <span className="feature-count" aria-hidden="true">
                {componentCount}
              </span>
              <p>{t("overview.panel.checks.components", language)}</p>
            </div>
            <div className="feature-check">
              <span className="feature-count" aria-hidden="true">
                {foundationCount}
              </span>
              <p>{t("overview.panel.checks.guidelines", language)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GettingStartedPage({ language }: { language: Language }) {
  const gettingStartedSections = [
    {
      title: t("gettingStarted.sections.foundations.title", language),
      body: t("gettingStarted.sections.foundations.body", language)
    },
    {
      title: t("gettingStarted.sections.components.title", language),
      body: t("gettingStarted.sections.components.body", language)
    },
    {
      title: t("gettingStarted.sections.patterns.title", language),
      body: t("gettingStarted.sections.patterns.body", language)
    },
    {
      title: t("gettingStarted.sections.content.title", language),
      body: t("gettingStarted.sections.content.body", language)
    },
    {
      title: t("gettingStarted.sections.accessibility.title", language),
      body: t("gettingStarted.sections.accessibility.body", language)
    },
    {
      title: t("gettingStarted.sections.ready.title", language),
      body: t("gettingStarted.sections.ready.body", language)
    },
    {
      title: t("gettingStarted.sections.resources.title", language),
      body: t("gettingStarted.sections.resources.body", language)
    }
  ];

  return (
    <article className="foundation-page getting-started-page">
      <header className="foundation-hero getting-started-hero">
        <p className="eyebrow">{t("gettingStarted.eyebrow", language)}</p>
        <h1>{t("gettingStarted.title", language)}</h1>
        <p className="getting-started-summary">{t("gettingStarted.summary", language)}</p>
      </header>

      <section className="getting-started-content">
        <div className="getting-started-intro">
          <h4>{t("gettingStarted.what.title", language)}</h4>
          <p>{t("gettingStarted.what.body", language)}</p>
        </div>

        <div className="getting-started-parts">
          <h4>{t("gettingStarted.parts.title", language)}</h4>
          <div className="getting-started-list">
            {gettingStartedSections.map((section) => (
              <section className="getting-started-card" key={section.title}>
                <div className="getting-started-card__media" aria-hidden="true" />
                <div className="getting-started-card__copy">
                  <h5>{section.title}</h5>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function ButtonStatesPreview({ language }: { language: Language }) {
  const states = [
    { id: "default", label: language === "es" ? "Predeterminado" : "Default" },
    { id: "hover", label: language === "es" ? "Al pasar" : "Hovered" },
    { id: "pressed", label: language === "es" ? "Presionado" : "Pressed" },
    { id: "focus", label: language === "es" ? "Con foco" : "Focused" },
    { id: "disabled", label: language === "es" ? "Deshabilitado" : "Disabled" }
  ] as const;

  const [size, setSize] = useState<"md" | "sm">("md");
  const [corner, setCorner] = useState<"default" | "rounded">("default");
  const [showIcons, setShowIcons] = useState(false);

  const columns = [
    { key: "primary-evergreen", label: "Primary / Evergreen", props: { variant: "primary" as const, tone: "evergreen" as const } },
    { key: "primary-indigo", label: "Primary / Indigo", props: { variant: "primary" as const, tone: "indigo" as const } },
    { key: "secondary-evergreen", label: "Secondary / Evergreen", props: { variant: "secondary" as const, tone: "evergreen" as const } },
    { key: "secondary-indigo", label: "Secondary / Indigo", props: { variant: "secondary" as const, tone: "indigo" as const } },
    { key: "tertiary-default", label: "Tertiary / Default", props: { variant: "tertiary" as const, tone: "neutral" as const } },
    { key: "danger-default", label: "Danger / Default", props: { variant: "primary" as const, tone: "danger" as const } },
    { key: "info-default", label: "Information / Default", props: { variant: "primary" as const, tone: "information" as const } },
    { key: "success-default", label: "Success / Default", props: { variant: "primary" as const, tone: "success" as const } },
    { key: "warning-default", label: "Warning / Default", props: { variant: "primary" as const, tone: "warning" as const } }
  ] as const;

  function isCellValid(stateId: (typeof states)[number]["id"], colKey: (typeof columns)[number]["key"]) {
    if (stateId !== "disabled") return true;
    return colKey.startsWith("primary-") || colKey.startsWith("secondary-");
  }

  return (
    <section className="button-states">
      <p className="eyebrow">{language === "es" ? "Estados" : "States"}</p>
      <h4>{language === "es" ? "Tipo × Color × Estado" : "Type × Color × State"}</h4>

      <div
        className="button-states__controls"
        aria-label={language === "es" ? "Controles de vista de Button" : "Button preview controls"}
      >
        <div className="button-states__control">
          <span className="button-states__control-label">{language === "es" ? "Tamaño" : "Size"}</span>
          <div className="button-states__segmented" role="group" aria-label={language === "es" ? "Tamaño" : "Size"}>
            <button type="button" className={size === "md" ? "is-selected" : undefined} onClick={() => setSize("md")}>
              MD
            </button>
            <button type="button" className={size === "sm" ? "is-selected" : undefined} onClick={() => setSize("sm")}>
              SM
            </button>
          </div>
        </div>

        <div className="button-states__control">
          <span className="button-states__control-label">{language === "es" ? "Esquinas" : "Corner"}</span>
          <div className="button-states__segmented" role="group" aria-label={language === "es" ? "Esquinas" : "Corner"}>
            <button
              type="button"
              className={corner === "default" ? "is-selected" : undefined}
              onClick={() => setCorner("default")}
            >
              Default
            </button>
            <button
              type="button"
              className={corner === "rounded" ? "is-selected" : undefined}
              onClick={() => setCorner("rounded")}
            >
              Rounded
            </button>
          </div>
        </div>

        <div className="button-states__control">
          <span className="button-states__control-label">{language === "es" ? "Íconos" : "Icons"}</span>
          <div className="button-states__segmented" role="group" aria-label={language === "es" ? "Íconos" : "Icons"}>
            <button
              type="button"
              className={!showIcons ? "is-selected" : undefined}
              aria-pressed={!showIcons}
              onClick={() => setShowIcons(false)}
            >
              {language === "es" ? "Ocultos" : "Off"}
            </button>
            <button
              type="button"
              className={showIcons ? "is-selected" : undefined}
              aria-pressed={showIcons}
              onClick={() => setShowIcons(true)}
            >
              {language === "es" ? "Visibles" : "On"}
            </button>
          </div>
        </div>
      </div>

      <div
        className="button-states__scroll"
        role="region"
        aria-label={language === "es" ? "Matriz de estados de Button" : "Button states matrix"}
        tabIndex={0}
      >
        <div
          className="button-states__grid"
          role="table"
          aria-label={language === "es" ? "Estados de Button" : "Button states"}
          style={{ ["--button-states-cols" as never]: String(columns.length + 1) }}
        >
          <div className="button-states__header" role="row">
            <div role="columnheader">{language === "es" ? "Estado" : "State"}</div>
            {columns.map((col) => (
              <div key={col.key} role="columnheader">
                {col.label}
              </div>
            ))}
          </div>

          {states.map((state) => (
            <div key={state.id} className="button-states__row" role="row">
              <div className="button-states__state" role="rowheader">
                {state.label}
              </div>

              {columns.map((col) => {
                const valid = isCellValid(state.id, col.key);
                if (!valid) {
                  return (
                    <div key={col.key} role="cell" className="button-states__na">
                      <span aria-label={language === "es" ? "No disponible" : "Not available"}>—</span>
                    </div>
                  );
                }

                const isDisabled = state.id === "disabled";
                const sim = state.id === "default" || isDisabled ? undefined : state.id;

                return (
                  <div key={col.key} role="cell">
                    <Button {...col.props} size={size} corner={corner} disabled={isDisabled} data-sim={sim}>
                      {showIcons ? <span className="button-state-icon" aria-hidden="true">✓</span> : null}
                      Button
                      {showIcons ? <span className="button-state-icon" aria-hidden="true">×</span> : null}
                    </Button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClearButtonStatesPreview({ language }: { language: Language }) {
  const states = [
    { id: "default", label: language === "es" ? "Predeterminado" : "Default" },
    { id: "hover", label: language === "es" ? "Al pasar" : "Hovered" },
    { id: "pressed", label: language === "es" ? "Presionado" : "Pressed" },
    { id: "focus", label: language === "es" ? "Con foco" : "Focused" },
    { id: "disabled", label: language === "es" ? "Deshabilitado" : "Disabled" }
  ] as const;

  const [corner, setCorner] = useState<"default" | "rounded">("default");
  const [showIcons, setShowIcons] = useState(true);
  const columns = [
    { key: "default", label: "Default", tone: "default" as const, typeTone: "default" as const },
    { key: "evergreen", label: "Evergreen", tone: "evergreen" as const, typeTone: "default" as const },
    { key: "indigo", label: "Indigo", tone: "indigo" as const, typeTone: "default" as const },
    { key: "information", label: "Information", tone: "indigo" as const, typeTone: "information" as const },
    { key: "success", label: "Success", tone: "indigo" as const, typeTone: "success" as const },
    { key: "danger", label: "Danger", tone: "indigo" as const, typeTone: "danger" as const },
    { key: "warning", label: "Warning", tone: "indigo" as const, typeTone: "warning" as const }
  ] as const;

  return (
    <section className="button-states clear-button-states">
      <p className="eyebrow">{language === "es" ? "Estados" : "States"}</p>
      <h4>{language === "es" ? "Color × Tipo × Estado" : "Color × Type × State"}</h4>
      <p className="button-states__description">
        {language === "es"
          ? "Compara los tonos y estados disponibles. Desplázate horizontalmente para ver toda la matriz."
          : "Compare available tones and states. Scroll horizontally to view the full matrix."}
      </p>

      <div
        className="button-states__controls"
        aria-label={language === "es" ? "Controles de vista de Clear Button" : "Clear Button preview controls"}
      >
        <div className="button-states__control">
          <span className="button-states__control-label">{language === "es" ? "Esquinas" : "Corner"}</span>
          <div className="button-states__segmented" role="group" aria-label={language === "es" ? "Esquinas" : "Corner"}>
            <button
              type="button"
              className={corner === "default" ? "is-selected" : undefined}
              aria-pressed={corner === "default"}
              onClick={() => setCorner("default")}
            >
              Default
            </button>
            <button
              type="button"
              className={corner === "rounded" ? "is-selected" : undefined}
              aria-pressed={corner === "rounded"}
              onClick={() => setCorner("rounded")}
            >
              Rounded
            </button>
          </div>
        </div>

        <div className="button-states__control">
          <span className="button-states__control-label">{language === "es" ? "Íconos" : "Icons"}</span>
          <div className="button-states__segmented" role="group" aria-label={language === "es" ? "Íconos" : "Icons"}>
            <button
              type="button"
              className={!showIcons ? "is-selected" : undefined}
              aria-pressed={!showIcons}
              onClick={() => setShowIcons(false)}
            >
              {language === "es" ? "Ocultos" : "Off"}
            </button>
            <button
              type="button"
              className={showIcons ? "is-selected" : undefined}
              aria-pressed={showIcons}
              onClick={() => setShowIcons(true)}
            >
              {language === "es" ? "Visibles" : "On"}
            </button>
          </div>
        </div>
      </div>

      <div
        className="button-states__scroll"
        role="region"
        aria-label={language === "es" ? "Matriz de estados de Clear Button" : "Clear Button states matrix"}
        tabIndex={0}
      >
        <div
          className="button-states__grid"
          role="table"
          aria-label={language === "es" ? "Estados de Clear Button" : "Clear Button states"}
          style={{ ["--button-states-cols" as never]: String(columns.length + 1) }}
        >
          <div className="button-states__header" role="row">
            <div role="columnheader">{language === "es" ? "Estado" : "State"}</div>
            {columns.map((column) => (
              <div key={column.key} role="columnheader">
                {column.key === "default" || column.key === "evergreen" || column.key === "indigo"
                  ? `${column.label} / ${language === "es" ? "Predeterminado" : "Default"}`
                  : `${column.label} / Indigo`}
              </div>
            ))}
          </div>

          {states.map((state) => (
            <div key={state.id} className="button-states__row" role="row">
              <div className="button-states__state" role="rowheader">
                {state.label}
              </div>
              {columns.map((column) => {
                const isDisabled = state.id === "disabled";
                const isUnavailable = isDisabled && column.key !== "default";
                if (isUnavailable) {
                  return (
                    <div key={column.key} role="cell" className="button-states__na">
                      <span aria-label={language === "es" ? "No disponible" : "Not available"}>—</span>
                    </div>
                  );
                }

                const sim = state.id === "default" || isDisabled ? undefined : state.id;
                return (
                  <div key={column.key} role="cell">
                    <ClearButton
                      tone={column.tone}
                      typeTone={column.typeTone}
                      corner={corner}
                      disabled={isDisabled}
                      data-sim={sim}
                      leadingIcon={showIcons ? <span className="clear-button-state__leading" aria-hidden="true"><ArrowIcon /></span> : undefined}
                      trailingIcon={showIcons ? <ArrowIcon /> : undefined}
                    >
                      Button
                    </ClearButton>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="button-states__note">
        {language === "es"
          ? "Deshabilitado solo está documentado para Color=Default y Type=Default."
          : "Disabled is only documented for Color=Default and Type=Default."}
      </p>
    </section>
  );
}

function FormControlStatesPreview({
  componentName,
  language
}: {
  componentName: string;
  language: Language;
}) {
  const isSpanish = language === "es";
  const heading = isSpanish ? "Referencia visual de estados" : "Visual state reference";
  const noteLabel = isSpanish ? "Comportamiento de React" : "React implementation";

  if (componentName === "Input") {
    const states: Array<{ id: InputState; label: string }> = [
      { id: "default", label: isSpanish ? "Predeterminado" : "Default" },
      { id: "filled", label: isSpanish ? "Con valor" : "Filled" },
      { id: "hovered", label: isSpanish ? "Al pasar" : "Hovered" },
      { id: "on-focus", label: isSpanish ? "Al enfocar" : "On focus" },
      { id: "focused", label: isSpanish ? "Enfocado" : "Focused" },
      { id: "error", label: isSpanish ? "Error" : "Error" },
      { id: "disabled", label: isSpanish ? "Deshabilitado" : "Disabled" },
      { id: "read-only", label: isSpanish ? "Solo lectura" : "Read only" }
    ];

    return (
      <section className="form-states" aria-label={`${componentName} ${heading}`}>
        <header className="form-states__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Cada muestra usa los estados, tamaños y tokens descritos en el Markdown del componente."
              : "Each specimen uses the states, sizes, and tokens described in the component Markdown."}
          </p>
        </header>
        <div className="form-states__grid">
          {states.map(({ id, label }) => (
            <article className="form-states__item" key={id}>
              <strong>{label}</strong>
              <Input
                label={label}
                state={id}
                defaultValue={id === "default" || id === "disabled" ? undefined : "Genome Evolution"}
                error={id === "error" ? (isSpanish ? "Revisa este valor." : "Check this value.") : undefined}
                disabled={id === "disabled"}
                readOnly={id === "read-only"}
              />
            </article>
          ))}
        </div>
        <p className="form-states__note">
          <strong>{isSpanish ? "Tamaños adicionales:" : "Additional sizes:"}</strong>{" "}
          <Input size="sm" label={isSpanish ? "Pequeño" : "Small"} showInfo={false} showLeftIcon={false} showRightIcon={false} />
          <span>
            {isSpanish
              ? "La especificación también contempla SM, orientación Label Left y esquinas Rounded."
              : "The spec also defines SM, Label Left orientation, and Rounded corners."}
          </span>
        </p>
      </section>
    );
  }

  if (componentName === "Checkbox") {
    const examples = [
      {
        label: isSpanish ? "Predeterminado · deshabilitado" : "Default · disabled",
        props: { disabled: true }
      },
      {
        label: isSpanish ? "Check · Default" : "Check · Default",
        props: { disabled: false, defaultChecked: true }
      },
      {
        label: isSpanish ? "Mixed · Default" : "Mixed · Default",
        props: { disabled: false, indeterminate: true }
      },
      {
        label: isSpanish ? "Check · Evergreen" : "Check · Evergreen",
        props: { disabled: false, defaultChecked: true, color: "evergreen" as const }
      },
      {
        label: isSpanish ? "Check · Indigo" : "Check · Indigo",
        props: { disabled: false, defaultChecked: true, color: "indigo" as const }
      }
    ];

    return (
      <section className="form-states" aria-label={`${componentName} ${heading}`}>
        <header className="form-states__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Las muestras habilitadas se pueden marcar. Usa Tab para comprobar el foco y pasa el cursor para ver Hovered."
              : "Enabled specimens are interactive. Use Tab to check focus and hover to see Hovered."}
          </p>
        </header>
        <div className="form-states__grid form-states__grid--compact">
          {examples.map(({ label, props }) => (
            <article className="form-states__item" key={label}>
              <strong>{label}</strong>
              <Checkbox label={isSpanish ? "Opción" : "Option"} {...props} />
            </article>
          ))}
        </div>
        <p className="form-states__note">
          <strong>{noteLabel}:</strong>{" "}
          {isSpanish
            ? "La variante Plus está descrita en Markdown, pero aún no está implementada en React."
            : "The Plus variant is documented in Markdown but is not implemented in React yet."}
        </p>
      </section>
    );
  }

  const switchExamples = [
    { label: isSpanish ? "Off · SM" : "Off · SM", size: "sm" as const, tone: "default" as const, checked: false },
    { label: isSpanish ? "On · Evergreen · SM" : "On · Evergreen · SM", size: "sm" as const, tone: "evergreen" as const, checked: true },
    { label: isSpanish ? "On · Indigo · SM" : "On · Indigo · SM", size: "sm" as const, tone: "indigo" as const, checked: true },
    { label: isSpanish ? "Off · MD" : "Off · MD", size: "md" as const, tone: "default" as const, checked: false },
    { label: isSpanish ? "On · Evergreen · MD" : "On · Evergreen · MD", size: "md" as const, tone: "evergreen" as const, checked: true },
    { label: isSpanish ? "On · Indigo · MD" : "On · Indigo · MD", size: "md" as const, tone: "indigo" as const, checked: true },
    { label: isSpanish ? "Disabled · SM" : "Disabled · SM", size: "sm" as const, tone: "default" as const, checked: false, disabled: true },
    { label: isSpanish ? "Disabled · MD" : "Disabled · MD", size: "md" as const, tone: "default" as const, checked: false, disabled: true }
  ];

  return (
    <section className="form-states" aria-label={`${componentName} ${heading}`}>
      <header className="form-states__header">
        <p className="eyebrow">{heading}</p>
        <p>
          {isSpanish
            ? "La documentación no confirma un estado predeterminado; estas son combinaciones visuales documentadas."
            : "The documentation does not confirm a default state; these are documented visual combinations."}
        </p>
      </header>
      <div className="form-states__grid form-states__grid--compact">
        {switchExamples.map(({ label, size, tone, checked, disabled }) => (
          <article className="form-states__item" key={label}>
            <strong>{label}</strong>
            <Switch
              defaultChecked={checked}
              size={size}
              tone={tone}
              disabled={disabled}
              label={isSpanish ? "Opción" : "Option"}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function InteractiveStatesPreview({
  componentName,
  language
}: {
  componentName: string;
  language: Language;
}) {
  const isSpanish = language === "es";
  const heading = isSpanish ? "Referencia visual" : "Visual reference";
  const [datepickerType, setDatepickerType] = useState<DatepickerType>("numbers");
  const [datepickerSize, setDatepickerSize] = useState<DatepickerSize>("sm");
  const [datepickerTone, setDatepickerTone] = useState<DatepickerTone>("evergreen");
  const [showDatepickerButtons, setShowDatepickerButtons] = useState(true);
  const [showConventions, setShowConventions] = useState(true);
  const [appliedDate, setAppliedDate] = useState("");
  const [modalSize, setModalSize] = useState<ModalSize>("small");
  const [modalOpen, setModalOpen] = useState(false);
  const [showSnackbarButton, setShowSnackbarButton] = useState(true);
  const [showSnackbarBar, setShowSnackbarBar] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState<Record<SnackbarType, boolean>>({
    danger: true,
    warning: true,
    information: true,
    success: true
  });
  const [accordionSize, setAccordionSize] = useState<"md" | "sm">("md");
  const [accordionTone, setAccordionTone] = useState<"default" | "evergreen" | "indigo">("default");
  const [radioTone, setRadioTone] = useState<"default" | "evergreen" | "indigo">("default");
  const [radioSelection, setRadioSelection] = useState("standard");
  const [tabSize, setTabSize] = useState<"md" | "sm">("md");
  const [tabColor, setTabColor] = useState<"default" | "indigo" | "evergreen">("default");
  const [referenceTab, setReferenceTab] = useState("overview");
  const [segmentedSize, setSegmentedSize] = useState<"md" | "sm">("md");
  const [segmentedColor, setSegmentedColor] = useState<"default" | "evergreen" | "indigo">("default");
  const [segmentedRounded, setSegmentedRounded] = useState(false);
  const [segmentedSelection, setSegmentedSelection] = useState("list");
  const [colorPickerType, setColorPickerType] = useState<"Solid" | "Gradient">("Solid");
  const [pageSize, setPageSize] = useState(15);
  const [rangePage, setRangePage] = useState(1);
  const [inputPage, setInputPage] = useState(3);
  const [numbersPage, setNumbersPage] = useState(3);
  const [splitColor, setSplitColor] = useState<"evergreen" | "indigo">("evergreen");
  const [splitType, setSplitType] = useState<"primary" | "secondary">("primary");
  const [splitSize, setSplitSize] = useState<"regular" | "small">("regular");
  const [splitAction, setSplitAction] = useState("");

  if (componentName === "Color Picker") {
    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Cambia entre los modos Solid y Gradient; prueba el área de color, los valores y la biblioteca."
              : "Switch between Solid and Gradient; try the color area, values, and saved color library."}
          </p>
        </header>
        <article className="interaction-reference__card interaction-reference__card--color-picker">
          <ColorPicker
            label={isSpanish ? "Color de marca" : "Brand color"}
            defaultValue="#4F46E5"
            type={colorPickerType}
            onTypeChange={setColorPickerType}
          />
        </article>
        <p className="interaction-reference__note">
          {isSpanish
            ? "El modo Gradiente muestra las paradas de ejemplo documentadas; la edición del color sólido está conectada."
            : "Gradient mode shows the documented sample stops; solid color editing is connected."}
        </p>
      </section>
    );
  }

  if (componentName === "Paginator") {
    const totalItems = 100;
    const pageCountBySize = Math.ceil(totalItems / pageSize);

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Prueba los tres tipos documentados: tamaño y rango, entrada directa y botones numerados."
              : "Try the three documented types: page size and range, direct input, and numbered buttons."}
          </p>
        </header>
        <div className="interaction-reference__grid interaction-reference__grid--paginator">
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Tamaño y rango" : "Page size + range"}</strong>
            <Paginator
              type="page-size-range"
              page={rangePage}
              pageCount={pageCountBySize}
              pageSize={pageSize}
              totalItems={totalItems}
              onPageChange={setRangePage}
              onPageSizeChange={(nextPageSize) => {
                setPageSize(nextPageSize);
                setRangePage(1);
              }}
            />
            <span className="interaction-reference__caption">
              {isSpanish ? `Página ${rangePage} · ${pageSize} por página` : `Page ${rangePage} · ${pageSize} per page`}
            </span>
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Entrada directa" : "Input"}</strong>
            <Paginator type="input" page={inputPage} pageCount={8} onPageChange={setInputPage} />
            <span className="interaction-reference__caption">
              {isSpanish ? `Página ${inputPage} de 8` : `Page ${inputPage} of 8`}
            </span>
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Páginas numeradas" : "Numbers"}</strong>
            <Paginator type="numbers" page={numbersPage} pageCount={8} onPageChange={setNumbersPage} />
            <span className="interaction-reference__caption">
              {isSpanish ? `Página ${numbersPage} de 8` : `Page ${numbersPage} of 8`}
            </span>
          </article>
        </div>
        <p className="interaction-reference__note">
          {isSpanish
            ? "La especificación limita los estados no predeterminados a Input y Numbers; el tipo Tamaño y rango solo documenta Default."
            : "The spec limits non-default states to Input and Numbers; Page size + range documents Default only."}
        </p>
      </section>
    );
  }

  if (componentName === "Split Button") {
    const colors = ["evergreen", "indigo"] as const;
    const types = ["primary", "secondary"] as const;
    const sizes = ["regular", "small"] as const;
    const actions = [
      { label: isSpanish ? "Publicar ahora" : "Publish now", onSelect: () => setSplitAction(isSpanish ? "Publicado ahora" : "Published now") },
      { label: isSpanish ? "Programar…" : "Schedule…", onSelect: () => setSplitAction(isSpanish ? "Programación seleccionada" : "Schedule selected") },
      { label: isSpanish ? "Guardar borrador" : "Save draft", onSelect: () => setSplitAction(isSpanish ? "Borrador guardado" : "Draft saved") }
    ];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Compara Primary y Secondary, sus colores y tamaños; usa la flecha para abrir las acciones relacionadas."
              : "Compare Primary and Secondary, their colors and sizes; use the chevron to open related actions."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tipo" : "Type"}>
          {types.map((type) => (
            <button key={type} type="button" aria-pressed={splitType === type} onClick={() => setSplitType(type)}>
              {type === "primary" ? "Primary" : "Secondary"}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color" : "Color"}>
          {colors.map((color) => (
            <button key={color} type="button" aria-pressed={splitColor === color} onClick={() => setSplitColor(color)}>
              {color === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño" : "Size"}>
          {sizes.map((size) => (
            <button key={size} type="button" aria-pressed={splitSize === size} onClick={() => setSplitSize(size)}>
              {size === "regular" ? (isSpanish ? "Regular" : "Regular") : (isSpanish ? "Pequeño" : "Small")}
            </button>
          ))}
        </div>
        <div className="interaction-reference__split-row">
          <article className="interaction-reference__card">
            <strong>{splitType === "primary" ? "Primary" : "Secondary"} · {splitColor} · {splitSize}</strong>
            <SplitButton
              label={isSpanish ? "Publicar" : "Publish"}
              onClick={() => setSplitAction(isSpanish ? "Acción principal ejecutada" : "Primary action triggered")}
              items={actions}
              color={splitColor}
              type={splitType}
              size={splitSize}
            />
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Deshabilitado (solo Primary)" : "Disabled (Primary only)"}</strong>
            <SplitButton
              label={isSpanish ? "Publicar" : "Publish"}
              onClick={() => {}}
              items={actions}
              color="default"
              type="primary"
              size={splitSize}
              disabled
            />
          </article>
        </div>
        {splitAction ? <p className="interaction-reference__caption" role="status">{splitAction}</p> : null}
      </section>
    );
  }

  if (componentName === "Accordion") {
    const sizes = ["md", "sm"] as const;
    const tones = ["default", "evergreen", "indigo"] as const;

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Compara tamaños, colores, comportamiento expandido y los estados Disabled y Loading."
              : "Compare sizes, colors, expanded behavior, and the Disabled and Loading states."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño del acordeón" : "Accordion size"}>
          {sizes.map((size) => (
            <button key={size} type="button" aria-pressed={accordionSize === size} onClick={() => setAccordionSize(size)}>
              {size.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color del acordeón expandido" : "Expanded accordion color"}>
          {tones.map((tone) => (
            <button key={tone} type="button" aria-pressed={accordionTone === tone} onClick={() => setAccordionTone(tone)}>
              {tone === "default" ? (isSpanish ? "Predeterminado" : "Default") : tone === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
        </div>
        <div className="interaction-reference__grid">
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Colapsado · interactivo" : "Collapsed · interactive"}</strong>
            <Accordion title={isSpanish ? "Detalles de la sección" : "Section details"} size={accordionSize}>
              {isSpanish ? "Contenido que aparece al expandir." : "Content shown when expanded."}
            </Accordion>
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Expandido" : "Expanded"}</strong>
            <Accordion title={isSpanish ? "Detalles de la sección" : "Section details"} size={accordionSize} tone={accordionTone} defaultOpen>
              {isSpanish ? "Contenido de ejemplo del panel expandido." : "Example content in the expanded panel."}
            </Accordion>
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Disabled" : "Disabled"}</strong>
            <Accordion title={isSpanish ? "Sección no disponible" : "Unavailable section"} size={accordionSize} disabled>
              {isSpanish ? "Este contenido no está disponible." : "This content is unavailable."}
            </Accordion>
          </article>
          <article className="interaction-reference__card">
            <strong>Loading</strong>
            <Accordion title="Loading" size={accordionSize} state="loading">
              Loading
            </Accordion>
          </article>
        </div>
      </section>
    );
  }

  if (componentName === "Radio Button") {
    const tones = ["default", "evergreen", "indigo"] as const;
    const options = [
      { label: isSpanish ? "Estándar" : "Standard", value: "standard" },
      { label: isSpanish ? "Compacto" : "Compact", value: "compact" },
      { label: isSpanish ? "Personalizado" : "Custom", value: "custom" }
    ];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Selecciona una opción; cada grupo permite una sola selección. Evergreen e Indigo se muestran para la opción seleccionada."
              : "Choose an option; each group allows one selection. Evergreen and Indigo are shown for the selected option."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color de selección" : "Selected color"}>
          {tones.map((tone) => (
            <button key={tone} type="button" aria-pressed={radioTone === tone} onClick={() => setRadioTone(tone)}>
              {tone === "default" ? (isSpanish ? "Predeterminado" : "Default") : tone === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
        </div>
        <div className="interaction-reference__grid">
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Habilitado" : "Enabled"}</strong>
            <RadioButtonGroup
              label={isSpanish ? "Elige una opción" : "Choose an option"}
              options={options}
              value={radioSelection}
              onChange={setRadioSelection}
              tone={radioTone}
            />
          </article>
          <article className="interaction-reference__card">
            <strong>{isSpanish ? "Deshabilitado · predeterminado" : "Disabled · default"}</strong>
            <RadioButtonGroup
              label={isSpanish ? "Opción no disponible" : "Unavailable option"}
              options={[{ label: isSpanish ? "No disponible" : "Unavailable", value: "unavailable" }]}
              defaultValue="unavailable"
              disabled
            />
          </article>
        </div>
      </section>
    );
  }

  if (componentName === "Tab") {
    const sizes = ["md", "sm"] as const;
    const colors = ["default", "indigo", "evergreen"] as const;
    const options = [
      { label: isSpanish ? "Resumen" : "Overview", value: "overview" },
      { label: isSpanish ? "Actividad" : "Activity", value: "activity" },
      { label: isSpanish ? "Ajustes" : "Settings", value: "settings" }
    ];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Cambia de pestaña y compara tamaños y colores de la pestaña seleccionada."
              : "Switch tabs and compare sizes and colors for the selected tab."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño de pestaña" : "Tab size"}>
          {sizes.map((size) => (
            <button key={size} type="button" aria-pressed={tabSize === size} onClick={() => setTabSize(size)}>
              {size.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color de selección" : "Selected color"}>
          {colors.map((color) => (
            <button key={color} type="button" aria-pressed={tabColor === color} onClick={() => setTabColor(color)}>
              {color === "default" ? (isSpanish ? "Predeterminado" : "Default") : color === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
        </div>
        <TabList options={options} value={referenceTab} onChange={setReferenceTab} color={tabColor} size={tabSize} />
        <div className="interaction-reference__tab-panel" role="tabpanel">
          {isSpanish ? `Contenido: ${options.find((option) => option.value === referenceTab)?.label}` : `Content: ${options.find((option) => option.value === referenceTab)?.label}`}
        </div>
      </section>
    );
  }

  if (componentName === "Segmented Button") {
    const sizes = ["md", "sm"] as const;
    const colors = ["default", "evergreen", "indigo"] as const;
    const options = [
      { label: isSpanish ? "Lista" : "List", value: "list" },
      { label: isSpanish ? "Tablero" : "Board", value: "board" },
      { label: isSpanish ? "Calendario" : "Calendar", value: "calendar" }
    ];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Selecciona una sección y compara el tamaño, el color seleccionado y las esquinas."
              : "Select a section and compare size, selected color, and corner style."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño" : "Size"}>
          {sizes.map((size) => (
            <button key={size} type="button" aria-pressed={segmentedSize === size} onClick={() => setSegmentedSize(size)}>
              {size.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color seleccionado" : "Selected color"}>
          {colors.map((color) => (
            <button key={color} type="button" aria-pressed={segmentedColor === color} onClick={() => setSegmentedColor(color)}>
              {color === "default" ? (isSpanish ? "Predeterminado" : "Default") : color === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
          <button type="button" aria-pressed={segmentedRounded} onClick={() => setSegmentedRounded((rounded) => !rounded)}>
            {isSpanish ? "Redondeado" : "Rounded"}
          </button>
        </div>
        <SegmentedButton
          options={options}
          value={segmentedSelection}
          onChange={setSegmentedSelection}
          color={segmentedColor}
          size={segmentedSize}
          rounded={segmentedRounded}
          aria-label={isSpanish ? "Vista" : "View"}
        />
        <p className="interaction-reference__caption">
          {isSpanish ? `Seleccionado: ${options.find((option) => option.value === segmentedSelection)?.label}` : `Selected: ${options.find((option) => option.value === segmentedSelection)?.label}`}
        </p>
      </section>
    );
  }

  if (componentName === "Dropdown") {
    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Referencia visual del panel de opciones documentado, con filas de icono y texto y una acción en el pie."
              : "Visual reference for the documented options panel, with icon-and-text rows and a footer action."}
          </p>
        </header>
        <div className="interaction-reference__grid interaction-reference__grid--dropdown">
          <article className="interaction-reference__card">
            <strong>Items default</strong>
            <Dropdown presentation="panel" content="items" />
          </article>
        </div>
        <p className="interaction-reference__note">
          {isSpanish
            ? "La referencia muestra diez filas y un botón en el pie."
            : "The reference shows ten rows and a footer button."}
        </p>
      </section>
    );
  }

  if (componentName === "Datepicker") {
    const dateTypes: Array<{ value: DatepickerType; label: string }> = [
      { value: "numbers", label: isSpanish ? "Días" : "Numbers" },
      { value: "month", label: isSpanish ? "Meses" : "Month" },
      { value: "year", label: isSpanish ? "Años" : "Year" }
    ];
    const sizes: DatepickerSize[] = ["sm", "md"];
    const tones: DatepickerTone[] = ["evergreen", "indigo"];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Prueba los tres tipos de calendario, ambos tamaños y colores, y las opciones de botones y convenciones."
              : "Try the three calendar types, both sizes and colors, and the optional buttons and conventions."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tipo de calendario" : "Calendar type"}>
          {dateTypes.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={datepickerType === value}
              className={datepickerType === value ? "is-selected" : undefined}
              onClick={() => setDatepickerType(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño del calendario" : "Calendar size"}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={datepickerSize === size}
              className={datepickerSize === size ? "is-selected" : undefined}
              onClick={() => setDatepickerSize(size)}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Color del calendario" : "Calendar color"}>
          {tones.map((tone) => (
            <button
              key={tone}
              type="button"
              aria-pressed={datepickerTone === tone}
              className={datepickerTone === tone ? "is-selected" : undefined}
              onClick={() => setDatepickerTone(tone)}
            >
              {tone === "evergreen" ? "Evergreen" : "Indigo"}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={showDatepickerButtons}
            className={showDatepickerButtons ? "is-selected" : undefined}
            onClick={() => setShowDatepickerButtons((visible) => !visible)}
          >
            {isSpanish ? "Botones" : "Buttons"}
          </button>
          {datepickerType === "numbers" ? (
            <button
              type="button"
              aria-pressed={showConventions}
              className={showConventions ? "is-selected" : undefined}
              onClick={() => setShowConventions((visible) => !visible)}
            >
              {isSpanish ? "Convenciones" : "Conventions"}
            </button>
          ) : null}
        </div>
        <div className="interaction-reference__calendar">
          <Datepicker
            presentation="panel"
            type={datepickerType}
            size={datepickerSize}
            tone={datepickerTone}
            defaultValue="2021-03-05"
            showButtons={showDatepickerButtons}
            showConventions={showConventions}
            onDateChange={setAppliedDate}
          />
          {appliedDate ? (
            <span className="interaction-reference__caption">
              {isSpanish ? `Fecha aplicada: ${appliedDate}` : `Applied date: ${appliedDate}`}
            </span>
          ) : null}
        </div>
        <p className="interaction-reference__note">
          {isSpanish
            ? "Los marcadores de ejemplo aparecen en los días 2, 12 y 22; la documentación define su forma y leyenda, pero no asigna fechas concretas."
            : "Sample markers appear on days 2, 12, and 22; the spec defines their shape and legend but does not assign specific dates."}
        </p>
      </section>
    );
  }

  if (componentName === "Modal") {
    const sizes: ModalSize[] = ["small", "medium", "large", "bigger", "90%", "full"];

    return (
      <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
        <header className="interaction-reference__header">
          <p className="eyebrow">{heading}</p>
          <p>
            {isSpanish
              ? "Elige un tamaño documentado y abre el diálogo. Usa Escape, el botón de cerrar o las acciones del pie para cerrarlo."
              : "Choose a documented size and open the dialog. Use Escape, the close control, or footer actions to dismiss it."}
          </p>
        </header>
        <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Tamaño del modal" : "Modal size"}>
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={modalSize === size}
              className={modalSize === size ? "is-selected" : undefined}
              onClick={() => setModalSize(size)}
            >
              {size === "90%" ? size : size[0].toUpperCase() + size.slice(1)}
            </button>
          ))}
          <button type="button" className="interaction-reference__primary" onClick={() => setModalOpen(true)}>
            {isSpanish ? "Abrir modal" : "Open modal"}
          </button>
        </div>
        <p className="interaction-reference__note">
          {isSpanish
            ? "El icono de expandir se muestra como en la referencia; su efecto no está definido en el Markdown. El contenido de ejemplo sí cambia por tamaño."
            : "The expand icon is shown as in the reference; its effect is not defined in the Markdown. The sample content does change by size."}
        </p>
        <Modal
          open={modalOpen}
          size={modalSize}
          title={isSpanish ? "Vista previa del modal" : "Modal preview"}
          description={isSpanish ? "Contenido de ejemplo para validar el tamaño seleccionado." : "Sample content to review the selected size."}
          showTitleIcon
          expand
          helperText
          tertiaryButton
          onClose={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          onConfirm={() => setModalOpen(false)}
          onTertiary={() => setModalOpen(false)}
          sizeContent={{
            small: <p>{isSpanish ? "Contenido breve para una confirmación." : "Short content for a confirmation."}</p>,
            medium: <p>{isSpanish ? "Contenido de formulario o detalle para el tamaño Medium." : "Form or detail content for Medium size."}</p>,
            large: <p>{isSpanish ? "Contenido ampliado para revisar más información." : "Expanded content for reviewing more information."}</p>,
            bigger: <p>{isSpanish ? "Área amplia para tareas de edición complejas." : "A large area for complex editing tasks."}</p>,
            "90%": <p>{isSpanish ? "Contenido de trabajo que ocupa casi toda la ventana." : "Workspace content that uses most of the viewport."}</p>,
            full: <p>{isSpanish ? "Contenido de pantalla completa para edición." : "Full-screen content for editing."}</p>
          }}
        />
      </section>
    );
  }

  const snackbarTypes: Array<{ type: SnackbarType; label: string }> = [
    { type: "danger", label: isSpanish ? "Peligro" : "Danger" },
    { type: "warning", label: isSpanish ? "Advertencia" : "Warning" },
    { type: "information", label: isSpanish ? "Información" : "Information" },
    { type: "success", label: isSpanish ? "Éxito" : "Success" }
  ];

  return (
    <section className="interaction-reference" aria-label={`${componentName} ${heading}`}>
      <header className="interaction-reference__header">
        <p className="eyebrow">{heading}</p>
        <p>
          {isSpanish
            ? "Compara los cuatro tipos y alterna el botón de acción y la barra inferior documentados."
            : "Compare all four types and toggle the documented action button and bottom bar."}
        </p>
      </header>
      <div className="interaction-reference__controls" role="group" aria-label={isSpanish ? "Partes opcionales" : "Optional parts"}>
        <button
          type="button"
          aria-pressed={showSnackbarButton}
          className={showSnackbarButton ? "is-selected" : undefined}
          onClick={() => setShowSnackbarButton((visible) => !visible)}
        >
          {isSpanish ? "Botón de acción" : "Action button"}
        </button>
        <button
          type="button"
          aria-pressed={showSnackbarBar}
          className={showSnackbarBar ? "is-selected" : undefined}
          onClick={() => setShowSnackbarBar((visible) => !visible)}
        >
          {isSpanish ? "Barra inferior" : "Bottom bar"}
        </button>
        <button
          type="button"
          onClick={() => setSnackbarOpen({ danger: true, warning: true, information: true, success: true })}
        >
          {isSpanish ? "Mostrar todos" : "Show all"}
        </button>
      </div>
      <div className="interaction-reference__grid interaction-reference__grid--snackbar">
        {snackbarTypes.map(({ type, label }) => (
          <article className="interaction-reference__card" key={type}>
            <strong>{label}</strong>
            {snackbarOpen[type] ? (
              <Snackbar
                open
                type={type}
                message={isSpanish ? `Mensaje de ${label.toLowerCase()}.` : `${label} message.`}
                actionLabel={isSpanish ? "Deshacer" : "Undo"}
                showButton={showSnackbarButton}
                showBar={showSnackbarBar}
                autoHideDurationMs={0}
                onAction={() => setSnackbarOpen((current) => ({ ...current, [type]: false }))}
                onClose={() => setSnackbarOpen((current) => ({ ...current, [type]: false }))}
              />
            ) : (
              <button
                type="button"
                className="interaction-reference__primary"
                onClick={() => setSnackbarOpen((current) => ({ ...current, [type]: true }))}
              >
                {isSpanish ? "Mostrar mensaje" : "Show message"}
              </button>
            )}
          </article>
        ))}
      </div>
      <p className="interaction-reference__note">
        {isSpanish
          ? "Las muestras permanecen abiertas para comparar tipos; el componente React mantiene su temporizador en uso normal."
          : "Specimens stay visible for comparison; the React component keeps its timer during normal use."}
      </p>
    </section>
  );
}

function ComponentStatesShowcase({
  componentName,
  doc,
  language
}: {
  componentName: string;
  doc: DocRecord;
  language: Language;
}) {
  const statesMarkdown = buildComponentMarkdownTabs(doc.body).states ?? "";
  return (
    <section className="component-states-showcase">
      <header className="component-states-showcase__header">
        <p className="eyebrow">{language === "es" ? "Guía visual" : "Visual guide"}</p>
        <h4>{language === "es" ? "Variantes y estados" : "Variants and states"}</h4>
        <p>
          {language === "es"
            ? "Compara el ejemplo del componente con los estados descritos en su Markdown."
            : "Compare the component example with the states described in its Markdown."}
        </p>
      </header>

      <div className="component-states-showcase__body">
        <div className="component-states-showcase__preview">
          <p className="component-states-showcase__label">
            {language === "es" ? "Ejemplo visual" : "Visual example"}
          </p>
          <ComponentPreview componentName={componentName} docBody={doc.body} language={language} />
        </div>
        <div className="component-states-showcase__states">
          <p className="component-states-showcase__label">{language === "es" ? "Estados documentados" : "Documented states"}</p>
          <div className="markdown-body">{renderMarkdown(statesMarkdown)}</div>
          </div>
      </div>
    </section>
  );
}

function AnatomyReferenceImage({
  componentName,
  docPath,
  language
}: {
  componentName: string;
  docPath: string;
  language: Language;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const filename = docPath.split("/").pop()?.replace(/\.md$/, "") ?? componentName.toLowerCase().replace(/\s+/g, "-");

  return (
    <figure className="anatomy-reference">
      <div className="anatomy-reference__frame">
        {imageFailed ? (
          <div className="anatomy-reference__fallback">
            <span>{language === "es" ? "Imagen de anatomía pendiente" : "Anatomy image pending"}</span>
            <code>{filename}.png</code>
          </div>
        ) : (
          <img
            src={publicAsset(`images/${filename}-anatomy.png`)}
            alt={language === "es" ? `Anatomía de ${componentName}` : `${componentName} anatomy`}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
    </figure>
  );
}

function ComponentDocumentation({
  componentName,
  language,
  doc
}: {
  componentName: string;
  language: Language;
  doc: DocRecord;
}) {
  const mdTabs = useMemo(() => buildComponentMarkdownTabs(doc.body), [doc.body]);
  const frontmatter = useMemo(() => parseFrontmatter(doc.body), [doc.body]);
  const purpose = useMemo(() => extractPurposeFromMarkdown(doc.body), [doc.body]);
  const tabOrder: ComponentTabId[] = [
    "overview",
    "when-to-use",
    "when-not-to-use",
    "anatomy",
    "states",
    "rules",
    "do-dont",
    "tokens",
    "accessibility",
    "implementation"
  ];

  const availableTabs = useMemo(() => {
    return tabOrder.filter((tab) => Boolean(mdTabs[tab]?.trim()));
  }, [mdTabs]);

  const defaultTab = availableTabs[0] ?? "overview";
  const [activeTab, setActiveTab] = useState<ComponentTabId>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, componentName]);

  const anatomyParts = useMemo(() => extractAnatomyParts(doc.body), [doc.body]);
  const mdForCards = useMemo(() => {
    const md = mdTabs[activeTab] ?? "";
    if (activeTab === "overview") {
      return trimMarkdownFromQuickReference(md);
    }
    return md;
  }, [mdTabs, activeTab]);
  const mdCards = useMemo(() => markdownToDocCards(mdForCards, language), [mdForCards, language]);
  const anatomyCards = useMemo(
    () =>
      mdCards.flatMap((card) => {
        const heading = normalizeHeading(card.title ?? "");
        if (heading === "structure anatomy" || heading === "estructura anatomia") return [];
        if (anatomyParts.length && (heading === "component parts" || heading === "partes del componente")) return [];
        const bodyHeading = card.body.match(/^##\s+(.+)\s*$/m);
        if (!card.title && bodyHeading) {
          const normalizedBodyHeading = normalizeHeading(bodyHeading[1]);
          if (normalizedBodyHeading === "structure anatomy" || normalizedBodyHeading === "estructura anatomia") {
            const body = card.body.replace(bodyHeading[0], "").trim();
            return body ? [{ ...card, body }] : [];
          }
        }
        if (heading === "composition" || heading === "composicion") {
          const body = card.body.replace(/```[^\n]*\n[\s\S]*?```/g, "").trim();
          return body ? [{ ...card, body }] : [];
        }
        return [card];
      }),
    [anatomyParts.length, mdCards]
  );
  const isBackdropAccessibility = componentName === "Backdrop" && activeTab === "accessibility";
  const isBackdropOverview = componentName === "Backdrop" && activeTab === "overview";
  const downloadFileName = useMemo(() => doc.path.split("/").pop() ?? `${componentName}.md`, [doc.path, componentName]);

  return (
    <div className="component-docs">
      <section className="component-hero">
        <div>
          <p className="eyebrow">{t("docs.componentGuidance", language)}</p>
          <h3>{componentName}</h3>
          {purpose ? <p className="component-subtitle">{purpose}</p> : null}

          {frontmatter ? (
            <div className="meta-pills" aria-label={language === "es" ? "Metadatos del componente" : "Component metadata"}>
              {frontmatter.type ? (
                <span className="meta-pill">
                  <span className="meta-pill__k">{language === "es" ? "Tipo" : "Type"}</span>
                  <span className="meta-pill__v">{frontmatter.type}</span>
                </span>
              ) : null}
              {frontmatter.status ? (
                <span className="meta-pill">
                  <span className="meta-pill__k">{language === "es" ? "Estado" : "Status"}</span>
                  <span className="meta-pill__v">{frontmatter.status}</span>
                </span>
              ) : null}
              {frontmatter.version ? (
                <span className="meta-pill">
                  <span className="meta-pill__k">{language === "es" ? "Versión" : "Version"}</span>
                  <span className="meta-pill__v">{frontmatter.version}</span>
                </span>
              ) : null}
              {frontmatter.owner ? (
                <span className="meta-pill">
                  <span className="meta-pill__k">{language === "es" ? "Owner" : "Owner"}</span>
                  <span className="meta-pill__v">{frontmatter.owner}</span>
                </span>
              ) : null}
              {frontmatter.last_updated ? (
                <span className="meta-pill">
                  <span className="meta-pill__k">{language === "es" ? "Actualizado" : "Last Updated"}</span>
                  <span className="meta-pill__v">{frontmatter.last_updated}</span>
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="component-hero-preview">
          <ComponentPreview componentName={componentName} docBody={doc.body} language={language} />
          <div className="component-hero-download">
            <Tooltip
              content={
                language === "es"
                  ? "Incluye mapeo a tokens, ejemplos de uso y guía de accesibilidad."
                  : "Includes token mapping, usage examples, and accessibility guidance."
              }
              side="top"
            >
              <button
                type="button"
                className="subtle-download-link"
                onClick={() => downloadFromString(downloadFileName, doc.body, "text/markdown")}
              >
                <DownloadIcon /> {language === "es" ? "Descargar .md" : "Download .md"}
              </button>
            </Tooltip>
          </div>
        </div>
      </section>

      <div className="tab-strip" role="tablist" aria-label={`${componentName} sections`}>
        {availableTabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            className={tab === activeTab ? "is-active" : undefined}
            onClick={() => setActiveTab(tab)}
          >
            {t(componentTabTranslationKeys[tab], language)}
          </button>
        ))}
      </div>

      <div className="component-layout">
        <section className="component-content">
          {componentName === "Button" && activeTab === "states" ? <ButtonStatesPreview language={language} /> : null}
          {componentName === "Clear Button" && activeTab === "states" ? (
            <ClearButtonStatesPreview language={language} />
          ) : null}
          {activeTab === "states" &&
          ["Input", "Checkbox", "Switch"].includes(componentName) ? (
            <FormControlStatesPreview componentName={componentName} language={language} />
          ) : null}
          {activeTab === "states" &&
          ["Accordion", "Radio Button", "Tab", "Segmented Button", "Color Picker", "Paginator", "Split Button", "Dropdown", "Datepicker", "Modal", "Snackbar"].includes(componentName) ? (
            <InteractiveStatesPreview componentName={componentName} language={language} />
          ) : null}
          {activeTab === "states" &&
          !["Button", "Clear Button", "Input", "Checkbox", "Switch", "Accordion", "Radio Button", "Tab", "Segmented Button", "Color Picker", "Paginator", "Split Button", "Dropdown", "Datepicker", "Modal", "Snackbar"].includes(componentName) ? (
            <ComponentStatesShowcase componentName={componentName} doc={doc} language={language} />
          ) : null}

          {activeTab === "anatomy" ? (
            <div className="anatomy-view">
              {anatomyParts.length ? (
                <div className="anatomy-primary">
                  <AnatomyReferenceImage componentName={componentName} docPath={doc.path} language={language} />
                  <section className="anatomy-hierarchy" aria-label={language === "es" ? "Anatomía del componente" : "Component anatomy"}>
                    <div className="anatomy-row anatomy-row--root">
                      <span className="anatomy-row__number">1</span>
                      <strong className="anatomy-row__name">{componentName}</strong>
                    </div>
                    {anatomyParts.map((part, index) => (
                      <div className="anatomy-row anatomy-row--part" key={`${part.name}-${index}`}>
                        <span className="anatomy-row__number">{`1.${index + 1}`}</span>
                        <div className="anatomy-row__content">
                          <strong className="anatomy-row__name">{part.name}</strong>
                          {part.requirement || part.description ? (
                            <span className="anatomy-row__detail">
                              {part.requirement ? renderInline(part.requirement) : null}
                              {part.requirement && part.description ? " · " : null}
                              {part.description ? renderInline(part.description) : null}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              ) : null}

              {anatomyCards.length ? (
                <div className="section-stack">
                  {anatomyCards.map((card, index) => (
                    <article key={`anatomy-${index}`} className="doc-section-card">
                      {card.title ? <h4>{card.title}</h4> : null}
                      <div className="markdown-body">{renderMarkdown(card.body)}</div>
                    </article>
                  ))}
                </div>
              ) : null}

              {!anatomyParts.length && !anatomyCards.length ? (
                <div className="markdown-body">{renderMarkdown(mdTabs[activeTab] ?? doc.body)}</div>
              ) : null}
            </div>
          ) : activeTab === "tokens" && mdCards.length ? (
            <div className="section-stack">
              {mdCards.map((card, index) => (
                <article key={`${activeTab}-md-${index}`} className="doc-section-card">
                  {card.title ? <h4>{card.title}</h4> : null}
                  <div className="markdown-body">{renderMarkdown(card.body)}</div>
                </article>
              ))}
            </div>
          ) : activeTab === "implementation" && mdCards.length ? (
            <div className="section-stack">
              {mdCards.map((card, index) => (
                <article key={`${activeTab}-md-${index}`} className="doc-section-card">
                  {card.title ? <h4>{card.title}</h4> : null}
                  <div className="markdown-body">{renderMarkdown(card.body)}</div>
                </article>
              ))}
            </div>
          ) : isBackdropAccessibility ? (
	            <div className="accessibility-split">
	              <article className="doc-section-card accessibility-split__media">
	                <h4>{language === "es" ? "Accesibilidad (ejemplo)" : "Accessibility (example)"}</h4>
	                <figure className="doc-image">
	                  <img
	                    src={publicAsset("images/backdrop/accessibility.png")}
	                    alt={language === "es" ? "Ejemplo de accesibilidad para Backdrop" : "Backdrop accessibility example"}
	                    loading="lazy"
	                  />
	                  <figcaption>
	                    {language === "es"
	                      ? "Referencia visual de cómo debe comportarse el Backdrop en contextos accesibles."
	                      : "Visual reference for Backdrop behavior in accessible contexts."}
	                  </figcaption>
	                </figure>
	              </article>

	              <div className="accessibility-split__content">
	                {mdCards.length ? (
	                  <div className="section-stack">
	                    {mdCards.map((card, index) => (
	                      <article key={`${activeTab}-md-${index}`} className="doc-section-card">
	                        {card.title ? <h4>{card.title}</h4> : null}
	                        <div className="markdown-body">{renderMarkdown(card.body)}</div>
	                      </article>
	                    ))}
	                  </div>
	                ) : (
	                  <div className="markdown-body">{renderMarkdown(mdTabs[activeTab] ?? doc.body)}</div>
	                )}
	              </div>
	            </div>
          ) : isBackdropOverview ? (
            <div className="section-stack">
              {(() => {
                const exampleCard = (
                  <article key="backdrop-example-image" className="doc-section-card" id="backdrop-example-image">
                    <h4>{language === "es" ? "Ejemplo (imagen)" : "Example (image)"}</h4>
                    <figure className="doc-image">
                      <img
                        src={publicAsset("images/backdrop/example.png")}
                        alt={language === "es" ? "Ejemplo de Backdrop detrás de un modal" : "Backdrop usage example behind a modal"}
                        loading="lazy"
                      />
                      <figcaption>
                        {language === "es"
                          ? "Backdrop usado para bloquear el fondo detrás de un modal."
                          : "Backdrop used to block the UI behind a modal."}
                      </figcaption>
                    </figure>
                  </article>
                );

                const renderedMdCards = mdCards.map((card, index) => (
                  <article key={`${activeTab}-md-${index}`} className="doc-section-card">
                    {card.title ? <h4>{card.title}</h4> : null}
                    <div className="markdown-body">{renderMarkdown(card.body)}</div>
                  </article>
                ));

                if (renderedMdCards.length) return [...renderedMdCards, exampleCard];
                return [
                  <div key="overview-fallback" className="markdown-body">
                    {renderMarkdown(mdTabs[activeTab] ?? doc.body)}
                  </div>,
                  exampleCard
                ];
              })()}
            </div>
          ) : mdCards.length ? (
	            <div className="section-stack">
	              {mdCards.map((card, index) => (
	                <article key={`${activeTab}-md-${index}`} className="doc-section-card">
	                  {card.title ? <h4>{card.title}</h4> : null}
	                  <div className="markdown-body">{renderMarkdown(card.body)}</div>
	                </article>
	              ))}
	            </div>
	          ) : (
	            <div className="markdown-body">{renderMarkdown(mdTabs[activeTab] ?? doc.body)}</div>
	          )}
        </section>
      </div>
    </div>
  );
}

export function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage());
  const [activeId, setActiveId] = useState(() => window.location.hash.replace(/^#/, "") || "overview");
  const [navExpanded, setNavExpanded] = useState<Record<NavItem["group"], boolean>>(() => {
    if (typeof window === "undefined") return { overview: true, foundations: false, components: false };
    try {
      const raw = window.localStorage.getItem("ge-docs-nav-expanded");
      if (!raw) return { overview: true, foundations: false, components: false };
      const parsed = JSON.parse(raw) as Partial<Record<NavItem["group"], boolean>>;
      return {
        overview: parsed.overview ?? true,
        foundations: parsed.foundations ?? false,
        components: parsed.components ?? false
      };
    } catch {
      return { overview: true, foundations: false, components: false };
    }
  });
  const [componentCatsExpanded, setComponentCatsExpanded] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem("ge-docs-components-cats");
      if (!raw) return {};
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    window.localStorage.setItem("ge-docs-lang", language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("ge-docs-nav-expanded", JSON.stringify(navExpanded));
  }, [navExpanded]);

  useEffect(() => {
    window.localStorage.setItem("ge-docs-components-cats", JSON.stringify(componentCatsExpanded));
  }, [componentCatsExpanded]);

  useEffect(() => {
    const onHashChange = () => setActiveId(window.location.hash.replace(/^#/, "") || "overview");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return navItems;
    return navItems.filter((item) => {
      const label =
        item.id === "overview"
          ? t("nav.overview", language)
          : item.id === "getting-started"
            ? t("nav.gettingStarted", language)
            : localizedFoundationLabel(item, language);
      return label.toLowerCase().includes(normalized);
    });
  }, [language, query]);

  const active = getItemMeta(activeId, language);
  const activeNavItem = navItems.find((item) => item.id === activeId);
  const activeLabel = activeNavItem?.label ?? "Overview";
  const activeLabelDisplay =
    activeId === "overview"
      ? t("nav.overview", language)
      : activeId === "getting-started"
        ? t("nav.gettingStarted", language)
        : activeNavItem
          ? localizedFoundationLabel(activeNavItem, language)
          : activeLabel;
  const componentManifest = manifest.components.find((entry) => entry.name === activeLabel);

  const activeGroup: NavItem["group"] = navItems.find((item) => item.id === activeId)?.group ?? "overview";
  const queryActive = query.trim().length > 0;
  const componentCategories = useMemo(() => {
    const filterValue = query.toLowerCase().trim();
    const grouped = new Map<
      string,
      { id: string; label: string; items: Array<{ id: string; label: string; status?: string }> }
    >();

    for (const entry of manifest.components) {
      const componentId = entry.file.replace(/\.md$/, "").replace(/\//g, "-");
      const category = mapComponentTypeToCategory(entry.type, language, entry.category);
      const visible =
        !filterValue ||
        entry.name.toLowerCase().includes(filterValue) ||
        category.label.toLowerCase().includes(filterValue);
      if (!visible) continue;

      if (!grouped.has(category.id)) grouped.set(category.id, { ...category, items: [] });
      grouped.get(category.id)!.items.push({ id: componentId, label: entry.name, status: entry.status });
    }

    return Array.from(grouped.values())
      .map((cat) => ({ ...cat, items: cat.items.sort((a, b) => a.label.localeCompare(b.label)) }))
      .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));
  }, [language, query]);

  const activeComponentCategoryId = useMemo(() => {
    const entry = manifest.components.find((item) => item.file.replace(/\.md$/, "").replace(/\//g, "-") === activeId);
    if (!entry) return null;
    return mapComponentTypeToCategory(entry.type, language, entry.category).id;
  }, [activeId, language]);

  useEffect(() => {
    setNavExpanded((prev) => {
      if (prev[activeGroup]) return prev;
      return { ...prev, [activeGroup]: true };
    });
  }, [activeGroup]);

  useEffect(() => {
    if (!activeComponentCategoryId) return;
    setComponentCatsExpanded((prev) => {
      if (prev[activeComponentCategoryId]) return prev;
      return { ...prev, [activeComponentCategoryId]: true };
    });
  }, [activeComponentCategoryId]);

  const isBorderFoundation = activeId === "foundations-border";
  const isColorsFoundation = activeId === "foundations-color";
  const isTypographyFoundation = activeId === "foundations-typography";
  const isLayoutFoundation = activeId === "foundations-layout";
  const isOpacityFoundation = activeId === "foundations-opacity";
  const isElevationFoundation = activeId === "foundations-elevation";

  const featuredComponents = useMemo(() => {
    return homeFeaturedComponentIds
      .map((id) => {
        const label = navItems.find((item) => item.id === id)?.label;
        if (!label) return null;
        const slug = id.replace(/^components-/, "");
        const doc = language === "es" ? componentDocsBySlugEs[slug] : componentDocsBySlug[slug];
        return { id, label, subtitle: doc ? extractPurposeFromMarkdown(doc.body) ?? "" : "" };
      })
      .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  }, [language]);

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar">
        <button
          type="button"
          className="brand-lockup brand-lockup--link"
          onClick={() => {
            window.location.hash = "#overview";
            setActiveId("overview");
          }}
        >
          <div className="brand-mark">
            <BrandLogo />
          </div>
          <div>
            <p className="eyebrow">Design system</p>
            <h1>Genome Evolution</h1>
          </div>
        </button>

        <label className="search-box">
          <SearchIcon />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("search.placeholder", language)}
          />
        </label>

        <nav className="nav-groups">
          {["overview", "foundations", "components"].map((group) => {
            const items = filtered.filter((item) => item.group === group);
            if (!items.length) return null;

            const groupKey = group as NavItem["group"];
            const isExpanded = queryActive ? true : navExpanded[groupKey];
            const sectionId = `nav-group-${groupKey}`;

            return (
              <section key={group}>
                <button
                  type="button"
                  className="nav-group-toggle"
                  aria-expanded={isExpanded}
                  aria-controls={sectionId}
                  onClick={() => {
                    setNavExpanded((prev) => ({ ...prev, [groupKey]: !prev[groupKey] }));
                  }}
                >
                  <span className="nav-tree-chevron" aria-hidden="true" />
                  <span className="nav-group-icon" aria-hidden="true">
                    <NavGroupIcon group={groupKey} />
                  </span>
                  <span className="nav-label">
                    {group === "overview"
                      ? t("nav.overview", language)
                      : group === "foundations"
                        ? t("nav.foundations", language)
                        : t("nav.components", language)}
                  </span>
                </button>

                {isExpanded ? (
                  groupKey === "components" ? (
                    <div id={sectionId} className="nav-components">
                      <div className="nav-components-cats">
                        {componentCategories.map((cat) => {
                          const catExpanded = queryActive ? true : componentCatsExpanded[cat.id] ?? false;
                          return (
                            <div key={cat.id} className="nav-components-cat">
                              <button
                                type="button"
                                className="nav-components-cat__toggle"
                                aria-expanded={catExpanded}
                                aria-controls={`nav-components-cat-${cat.id}`}
                                onClick={() => {
                                  setComponentCatsExpanded((prev) => ({ ...prev, [cat.id]: !(prev[cat.id] ?? false) }));
                                }}
                              >
                                <span className="nav-tree-chevron" aria-hidden="true" />
                                <span className="nav-components-cat__label">{cat.label}</span>
                                <span className="components-index__count" aria-label={`${cat.items.length}`}>
                                  {cat.items.length}
                                </span>
                              </button>

                              {catExpanded ? (
                                <ul id={`nav-components-cat-${cat.id}`} className="nav-components-cat__list">
                                  {cat.items.map((item) => (
                                    <li key={item.id}>
                                      <a
                                        className={item.id === activeId ? "is-active" : undefined}
                                        href={`#${item.id}`}
                                        onClick={() => setActiveId(item.id)}
                                      >
                                        {item.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <ul id={sectionId} className={`nav-group-list nav-group-list--${groupKey}`}>
                      {items.map((item) => (
                        <li key={item.id}>
                          <a
                            className={item.id === activeId ? "is-active" : undefined}
                            href={`#${item.id}`}
                            onClick={() => setActiveId(item.id)}
                          >
                            {item.id === "overview"
                              ? t("nav.overview", language)
                              : item.id === "getting-started"
                                ? t("nav.gettingStarted", language)
                                      : item.id === "components"
                                        ? t("nav.components", language)
                                        : localizedFoundationLabel(item, language)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )
                ) : null}
              </section>
            );
          })}
        </nav>
      </aside>

      <main className="docs-main">
        <div className="docs-main-inner">
          <header className="docs-topbar">
            <div>
              <p className="eyebrow">{t("topbar.eyebrow", language)}</p>
              <h2>{activeLabelDisplay}</h2>
            </div>
            <div className="topbar-controls">
              <div className="theme-toggle" aria-label="Language toggle">
                <button className={language === "es" ? "is-selected" : undefined} onClick={() => setLanguage("es")}>
                  {t("lang.es", language)}
                </button>
                <button className={language === "en" ? "is-selected" : undefined} onClick={() => setLanguage("en")}>
                  {t("lang.en", language)}
                </button>
              </div>
              <div className="theme-toggle" aria-label="Theme toggle">
                <button className={theme === "light" ? "is-selected" : undefined} onClick={() => setTheme("light")}>
                  {t("theme.light", language)}
                </button>
                <button className={theme === "dark" ? "is-selected" : undefined} onClick={() => setTheme("dark")}>
                  {t("theme.dark", language)}
                </button>
              </div>
            </div>
          </header>

          {active.kind === "overview" ? (
            <>
              <section className="hero-stage">
                <div className="hero-stage__copy">
                  <h3>{t("overview.hero.title", language)}</h3>
                  <p>{t("overview.hero.body", language)}</p>
                  <div className="hero-stage__search">
                    <label className="hero-search" aria-label={t("overview.hero.search.label", language)}>
                      <SearchIcon />
                      <input
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={t("search.placeholder", language)}
                      />
                    </label>
                    <p className="hero-search-hint">{t("overview.hero.search.hint", language)}</p>
                  </div>

                  <div className="hero-stage__actions">
                    <Button
                      onClick={() => {
                        window.location.hash = "#components-button";
                        setActiveId("components-button");
                      }}
                    >
                      {t("overview.hero.cta.primary", language)}
                    </Button>
                    <Button
                      variant="secondary"
                      tone="indigo"
                      onClick={() => {
                        window.location.hash = "#foundations-color";
                        setActiveId("foundations-color");
                      }}
                    >
                      {t("overview.hero.cta.secondary", language)}
                    </Button>
                  </div>
                </div>
                <HomeShowcase
                  componentCount={manifest.components.length}
                  foundationCount={manifest.foundations.length}
                  cssVarCount={tokenStats.cssVarCount}
                  darkOverrideCount={tokenStats.darkOverrideCount}
                  theme={theme}
                  version={manifest.version}
                  lastUpdated={manifest.last_updated}
                  language={language}
                />
              </section>

              <section className="signal-grid">
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.scale", language)}</p>
                  <h3>
                    {manifest.components.length} {t("overview.signal.scale.valueSuffix", language)}
                  </h3>
                  <p>{t("overview.signal.scale.body", language)}</p>
                </article>
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.foundations", language)}</p>
                  <h3>
                    {manifest.foundations.length} {t("overview.signal.foundations.valueSuffix", language)}
                  </h3>
                  <p>{t("overview.signal.foundations.body", language)}</p>
                </article>
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.impl", language)}</p>
                  <h3>{t("overview.signal.impl.value", language)}</h3>
                  <p>{t("overview.signal.impl.body", language)}</p>
                </article>
              </section>

              <section className="portal-band">
                <div className="portal-band__copy">
                  <p className="eyebrow">{t("overview.portal.title", language)}</p>
                  <h3>{t("overview.portal.headline", language)}</h3>
                  <p>{t("overview.portal.body", language)}</p>
                </div>
                <div className="portal-grid">
                  <a className="portal-card" href="#foundations-color" onClick={() => setActiveId("foundations-color")}>
                    <p className="eyebrow">{t("overview.portal.foundations.title", language)}</p>
                    <h4>{t("overview.portal.foundations.title", language)}</h4>
                    <p>{t("overview.portal.foundations.body", language)}</p>
                  </a>
                  <a className="portal-card" href="#components-button" onClick={() => setActiveId("components-button")}>
                    <p className="eyebrow">{t("overview.portal.components.title", language)}</p>
                    <h4>{t("overview.portal.components.title", language)}</h4>
                    <p>{t("overview.portal.components.body", language)}</p>
                  </a>
                </div>
              </section>

              <section className="overview-grid overview-grid--home overview-grid--featured">
                <article className="feature-panel feature-panel--wide">
                  <p className="eyebrow">{t("overview.featured.title", language)}</p>
                  <h3>{t("overview.featured.title", language)}</h3>
                  <p>{t("overview.featured.body", language)}</p>
                  <div className="featured-grid">
                    {featuredComponents.map((entry) => (
                      <a key={entry.id} className="featured-card" href={`#${entry.id}`} onClick={() => setActiveId(entry.id)}>
                        <h4>{entry.label}</h4>
                        {entry.subtitle ? <p>{entry.subtitle}</p> : null}
                      </a>
                    ))}
                  </div>
                </article>
              </section>

              <section className="overview-grid overview-grid--home">
                <article className="feature-panel feature-panel--wide">
                  <p className="eyebrow">{t("overview.start.eyebrow", language)}</p>
                  <h3>{t("overview.start.title", language)}</h3>
                  <p>{t("overview.start.body", language)}</p>
                  <div className="quick-links">
                    <a href="#components-button" onClick={() => setActiveId("components-button")}>
                      Button
                    </a>
                    <a href="#components-input" onClick={() => setActiveId("components-input")}>
                      Input
                    </a>
                    <a href="#components-icon-button" onClick={() => setActiveId("components-icon-button")}>
                      Icon Button
                    </a>
                  </div>
                </article>

                <article className="feature-panel">
                  <p className="eyebrow">{t("overview.principle.eyebrow", language)}</p>
                  <h3>{t("overview.principle.title", language)}</h3>
                  <p>{t("overview.principle.body", language)}</p>
                </article>

                <article className="feature-panel">
                  <p className="eyebrow">{t("overview.tokens.eyebrow", language)}</p>
                  <h3>{t("overview.tokens.title", language)}</h3>
                  <p>{t("overview.tokens.body", language)}</p>
                </article>
              </section>

              <section className="foundation-band">
                <div className="foundation-band__copy">
                  <p className="eyebrow">{t("overview.foundation.eyebrow", language)}</p>
                  <h3>{t("overview.foundation.title", language)}</h3>
                  <p>{t("overview.foundation.body", language)}</p>
                </div>
                <div className="foundation-band__links">
                  {[
                    { id: "foundations-color", label: t("overview.foundation.links.color", language) },
                    { id: "foundations-typography", label: t("overview.foundation.links.typography", language) },
                    { id: "foundations-spacing", label: t("overview.foundation.links.spacing", language) },
                    { id: "foundations-layout", label: t("overview.foundation.links.layout", language) }
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={() => setActiveId(item.id)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            </>
          ) : active.kind === "getting-started" ? (
            <GettingStartedPage language={language} />
          ) : isTypographyFoundation ? (
            <TypographyFoundation language={language} />
          ) : isColorsFoundation ? (
            <ColorsFoundation language={language} theme={theme} />
          ) : isLayoutFoundation ? (
            <LayoutFoundation language={language} />
          ) : isOpacityFoundation ? (
            <OpacityFoundation language={language} />
          ) : isElevationFoundation ? (
            <ElevationFoundation language={language} />
          ) : isBorderFoundation ? (
            <BorderFoundation theme={theme} language={language} />
          ) : active.kind === "component" ? (
            <ComponentDocumentation componentName={activeLabel} language={language} doc={active.doc} />
          ) : (
            <div className="detail-layout">
              <section className="detail-body">
                <div className="detail-header">
                  <p className="eyebrow">{active.kind === "foundation" ? "Foundation" : "Component"}</p>
                  <h3>{active.doc.title}</h3>
                  <p className="path-chip">{active.doc.path}</p>
                </div>
                <div className="markdown-body">{renderMarkdown(active.doc.body)}</div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
