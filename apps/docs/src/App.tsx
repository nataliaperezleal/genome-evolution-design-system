import { useEffect, useMemo, useState } from "react";

import {
  Accordion,
  Avatar,
  Backdrop,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  ClearButton,
  Cursor,
  Datepicker,
  IconButton,
  InlineAlert,
  Input,
  ColorPicker,
  Dropdown,
  Link,
  Group,
  Header,
  Switch,
  Table,
  Tag,
  List,
  Modal,
  Paginator,
  ProgressBar,
  RadioButtonGroup,
  Scoreboard,
  Scroll,
  SegmentedButton,
  SplitButton,
  Snackbar,
  Stepper,
  TabList,
  Tooltip,
  TextArea
} from "@genome-evolution/react";
import ColorPickerDemo from "./ColorPickerDemo";

import { componentDocsBySlug, componentDocsBySlugEs, foundationDocsBySlug, foundationDocsBySlugEs, manifest, tokenStats } from "./data";
import { componentSpecs, componentTabLabels, tr, type ComponentTabId } from "./component-specs";
import { renderMarkdown } from "./markdown";
import type { DocRecord, NavItem } from "./types";
import { BorderFoundation } from "./foundations/BorderFoundation";
import { ColorsFoundation } from "./foundations/ColorsFoundation";
import { TypographyFoundation } from "./foundations/TypographyFoundation";
import { LayoutFoundation } from "./foundations/LayoutFoundation";
import { OpacityFoundation } from "./foundations/OpacityFoundation";
import { ElevationFoundation } from "./foundations/ElevationFoundation";
import { detectInitialLanguage, t, type Language } from "./i18n";

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
  if (normalized === "purpose" || normalized === "proposito" || normalized === "objetivo") return "overview";

  if (normalized.includes("when to use") || normalized.includes("cuando usar")) return "when-to-use";
  if (
    normalized.includes("when not to use") ||
    normalized.includes("when to not use") ||
    normalized.includes("cuando no usar")
  )
    return "when-not-to-use";

  if (normalized === "anatomy" || normalized === "anatomia") return "anatomy";
  if (normalized === "states" || normalized === "estados") return "states";
  if (normalized === "rules" || normalized === "reglas") return "rules";
  if (normalized.includes("do") && normalized.includes("dont")) return "do-dont";
  if (normalized === "accessibility" || normalized === "accesibilidad") return "accessibility";
  if (normalized === "implementation" || normalized === "implementacion") return "implementation";
  if (normalized === "tokens" || normalized === "token") return "tokens";

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

function extractPurposeFromMarkdown(markdown: string) {
  const { sections } = splitMarkdownByH2(markdown);
  const purposeSection = sections.find((section) => {
    const normalized = normalizeHeading(section.heading);
    return normalized === "purpose" || normalized === "purpose intent" || normalized === "proposito" || normalized === "objetivo";
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

function mapComponentTypeToCategory(type: string | undefined, language: Language) {
  const normalized = (type ?? "").toLowerCase();
  const cat = (en: string, es: string) => ({ id: slugify(en), label: language === "es" ? es : en });

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

  if (componentName === "Card") {
    return (
      <div className="preview-stack">
        <Card
          style={{ width: 240 }}
          title="Tarjeta base"
          footer={
            <>
              <Badge tone="neutral">Borrador</Badge>
              <Button size="sm" variant="tertiary">
                Ver
              </Button>
            </>
          }
        >
          Ideal para agrupar información relacionada con un contenedor de bajo contraste.
        </Card>
        <Card
          style={{ width: 240 }}
          variant="elevated"
          title="Tarjeta elevada"
          footer={
            <>
              <Badge tone="primary">Destacado</Badge>
              <Button size="sm" tone="indigo">
                Abrir
              </Button>
            </>
          }
        >
          Para contenido destacado o seleccionado que necesita separarse del fondo.
        </Card>
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

  if (componentName === "Scoreboard") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Scoreboard label="Usuarios activos" value="4,821" change="↑ 12.4% vs mes anterior" tone="success" />
          <Scoreboard label="Ingresos MRR" value="$38.2K" change="↑ 7.1% vs mes anterior" tone="success" />
          <Scoreboard label="Errores" value="14" change="↓ 3.2% vs semana anterior" tone="warning" />
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
            <Card key={i} variant="elevated" title={`Item ${i + 1}`}>
              Secondary content lives inside a scrollable surface.
            </Card>
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
        <Checkbox label="Enviar notificaciones" defaultChecked />
        <Checkbox label="Modo silencioso" />
        <Checkbox label="Requiere confirmación" error="Debes aceptar para continuar." />
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
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Dropdown
          label="Role"
          defaultValue="editor"
          options={[
            { value: "admin", label: "Admin" },
            { value: "editor", label: "Editor" },
            { value: "viewer", label: "Viewer" }
          ]}
          helperText="Permissions update immediately."
        />
        <Dropdown
          label="Plan"
          options={[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "enterprise", label: "Enterprise" }
          ]}
          error="Plan selection required."
        />
      </div>
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
    <Card
      variant="elevated"
      title={
        <div className="preview-placeholder__title">
          <span>Live preview pending</span>
          <Badge tone="neutral" variant="outline">
            React TBD
          </Badge>
        </div>
      }
    >
      This component page has guidance and tokens, but the React package output is still pending.
    </Card>
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

function ComponentDocumentation({
  componentName,
  language,
  doc
}: {
  componentName: string;
  language: Language;
  doc: DocRecord;
}) {
  const spec = componentSpecs[componentName];
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
    return tabOrder.filter((tab) => {
      const hasMarkdown = Boolean(mdTabs[tab]?.trim());
      // Prefer Markdown: if the heading exists in the MD, show the tab.
      if (hasMarkdown) return true;
      // If there's no Markdown for this tab, allow a fallback from the spec
      // only for tokens and implementation (props/code/tokenCards).
      if (tab === "tokens") return Boolean(spec?.tokenCards?.length);
      if (tab === "implementation") return Boolean(spec?.props?.length || spec?.code?.length);
      return false;
    });
  }, [mdTabs, spec]);

  const defaultTab = availableTabs[0] ?? "overview";
  const [activeTab, setActiveTab] = useState<ComponentTabId>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, componentName]);

  const sections = spec?.tabs?.[activeTab] ?? [];
  const mdForCards = useMemo(() => {
    const md = mdTabs[activeTab] ?? "";
    if (activeTab === "overview") {
      return trimMarkdownFromQuickReference(md);
    }
    return md;
  }, [mdTabs, activeTab]);
  const mdCards = useMemo(() => markdownToDocCards(mdForCards, language), [mdForCards, language]);
  const isBackdropAccessibility = componentName === "Backdrop" && activeTab === "accessibility";
  const isBackdropOverview = componentName === "Backdrop" && activeTab === "overview";
  const downloadFileName = useMemo(() => doc.path.split("/").pop() ?? `${componentName}.md`, [doc.path, componentName]);

  return (
    <div className="component-docs">
      <section className="component-hero">
        <div>
          <p className="eyebrow">{tr("Component guidance", language)}</p>
          <h3>{componentName}</h3>
          {purpose ? <p className="component-subtitle">{purpose}</p> : spec?.subtitle ? (
            <p className="component-subtitle">{tr(spec.subtitle, language)}</p>
          ) : null}

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
            {componentTabLabels[tab][language]}
          </button>
        ))}
      </div>

      <div className="component-layout">
        <section className="component-content">
          {componentName === "Button" && activeTab === "states" ? <ButtonStatesPreview language={language} /> : null}
          {componentName === "Clear Button" && activeTab === "states" ? (
            <ClearButtonStatesPreview language={language} />
          ) : null}

          {activeTab === "anatomy" ? (
            <div className={`anatomy-two-column ${mdCards.length ? "anatomy--paired" : ""}`}>
              {mdCards.length ? (
                <div className="anatomy-paired-rows">
                  {(() => {
                    const cardsToRender = componentName === "Color Picker" ? mdCards.slice(1) : mdCards;
                    return cardsToRender.map((card, idx) => {
                      const index = idx;
                    const title = card.title ?? "";
                    const lower = title.toLowerCase();
                    let imageName: string | null = null;
                    if (componentName === "Color Picker") {
                      if (/compartida|shared/i.test(title)) imageName = "anatomy.png";
                      else if (/gradient/i.test(lower)) imageName = "gradient.png";
                      else if (/solid/i.test(lower) || /solo modo solid/i.test(lower)) imageName = "solid.png";
                    }

                      return (
                        <div key={`pair-${index}`} className="anatomy-paired-row">
                          <div className="anatomy-image-placeholder" aria-hidden={card.title ? undefined : "true"}>
                            {imageName ? <img src={`/dist/images/color-picker/${imageName}`} alt={title} /> : null}
                          </div>
                          <article className="doc-section-card">
                            {card.title ? <h4>{card.title}</h4> : null}
                            <div className="markdown-body">{renderMarkdown(card.body)}</div>
                          </article>
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                <>
                  <div className="anatomy-two-column__media">
                    <div className="anatomy-image-list">
                      <div className="anatomy-image-item">
                        <div className="anatomy-image-placeholder" aria-hidden="true" />
                      </div>
                      <div className="anatomy-image-item">
                        <div className="anatomy-image-placeholder" aria-hidden="true" />
                      </div>
                      <div className="anatomy-image-item">
                        <div className="anatomy-image-placeholder" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="anatomy-two-column__content">
                    {sections.length ? (
                      <div className="section-stack">
                        {sections.map((section, index) => (
                          <article key={`${activeTab}-${index}`} className="doc-section-card">
                            <div className={section.preview && section.layout === "split" ? "spec-split" : undefined}>
                              {section.preview ? <div className="spec-preview">{section.preview}</div> : null}
                              <div>
                                {section.title ? <h4>{tr(section.title, language)}</h4> : null}
                                {section.body?.map((paragraph) => (
                                  <p key={typeof paragraph === "string" ? paragraph : paragraph.en}>{tr(paragraph, language)}</p>
                                ))}
                                {section.bullets ? (
                                  <ul>
                                    {section.bullets.map((bullet) => (
                                      <li key={typeof bullet === "string" ? bullet : bullet.en}>{tr(bullet, language)}</li>
                                    ))}
                                  </ul>
                                ) : null}
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="markdown-body">{renderMarkdown(mdTabs[activeTab] ?? doc.body)}</div>
                    )}
                  </div>
                </>
              )}
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
          ) : activeTab === "tokens" && spec?.tokenCards?.length ? (
            <div className="token-grid">
              {spec.tokenCards.map((card) => (
                <article key={card.token} className="token-card">
                  {card.swatch ? <div className="token-swatch" style={{ background: card.swatch }} /> : null}
                  <p className="eyebrow">{tr("Token", language)}</p>
                  <h4>{tr(card.label, language)}</h4>
                  <code>{card.token}</code>
                  {card.value ? <p className="token-value">{card.value}</p> : null}
                  {card.note ? <p>{tr(card.note, language)}</p> : null}
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
          ) : activeTab === "implementation" && (spec?.props?.length || spec?.code?.length) ? (
            <div className="implementation-grid">
              {spec?.props?.length ? (
                <section className="props-table-wrap">
                  <div className="section-head">
                    <p className="eyebrow">{tr("Props", language)}</p>
                    <h4>{tr("Implementation contract", language)}</h4>
                  </div>
                  <table className="props-table">
                    <thead>
                      <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {spec.props.map((prop) => (
                        <tr key={prop.name}>
                          <td>
                            <code>{prop.name}</code>
                          </td>
                          <td>
                            <code>{prop.type}</code>
                          </td>
                          <td>
                            <code>{prop.defaultValue}</code>
                          </td>
                          <td>{tr(prop.description, language)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              ) : null}

              {spec?.code?.length ? (
                <section className="snippet-list">
                  <div className="section-head">
                    <p className="eyebrow">{tr("Code", language)}</p>
                    <h4>{tr("Snippets", language)}</h4>
                  </div>
                  {spec.code.map((snippet) => (
                    <article
                      key={typeof snippet.title === "string" ? snippet.title : snippet.title.en}
                      className="snippet-card"
                    >
                      <h5>{tr(snippet.title, language)}</h5>
                      <pre>
                        <code>{snippet.code}</code>
                      </pre>
                    </article>
                  ))}
                </section>
	              ) : null}
	            </div>
	          ) : isBackdropAccessibility ? (
	            <div className="accessibility-split">
	              <article className="doc-section-card accessibility-split__media">
	                <h4>{language === "es" ? "Accesibilidad (ejemplo)" : "Accessibility (example)"}</h4>
	                <figure className="doc-image">
	                  <img
	                    src="/images/backdrop/accessibility.png"
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
	                ) : sections.length ? (
	                  <div className="section-stack">
	                    {sections.map((section, index) => (
	                      <article key={`${activeTab}-${index}`} className="doc-section-card">
	                        <div className={section.preview && section.layout === "split" ? "spec-split" : undefined}>
	                          {section.preview ? <div className="spec-preview">{section.preview}</div> : null}
	                          <div>
	                            {section.title ? <h4>{tr(section.title, language)}</h4> : null}
	                            {section.body?.map((paragraph) => (
	                              <p key={typeof paragraph === "string" ? paragraph : paragraph.en}>{tr(paragraph, language)}</p>
	                            ))}
	                            {section.bullets ? (
	                              <ul>
	                                {section.bullets.map((bullet) => (
	                                  <li key={typeof bullet === "string" ? bullet : bullet.en}>{tr(bullet, language)}</li>
	                                ))}
	                              </ul>
	                            ) : null}
	                          </div>
	                        </div>
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
                  <article className="doc-section-card" id="backdrop-example-image">
                    <h4>{language === "es" ? "Ejemplo (imagen)" : "Example (image)"}</h4>
                    <figure className="doc-image">
                      <img
                        src="/images/backdrop/example.png"
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

                if (sections.length) {
                  return [
                    ...sections.map((section, index) => (
                      <article key={`${activeTab}-${index}`} className="doc-section-card">
                        <div className={section.preview && section.layout === "split" ? "spec-split" : undefined}>
                          {section.preview ? <div className="spec-preview">{section.preview}</div> : null}
                          <div>
                            {section.title ? <h4>{tr(section.title, language)}</h4> : null}
                            {section.body?.map((paragraph) => (
                              <p key={typeof paragraph === "string" ? paragraph : paragraph.en}>{tr(paragraph, language)}</p>
                            ))}
                            {section.bullets ? (
                              <ul>
                                {section.bullets.map((bullet) => (
                                  <li key={typeof bullet === "string" ? bullet : bullet.en}>{tr(bullet, language)}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    )),
                    exampleCard
                  ];
                }

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
	          ) : sections.length ? (
	            <div className="section-stack">
	              {sections.map((section, index) => (
	                <article key={`${activeTab}-${index}`} className="doc-section-card">
	                  <div className={section.preview && section.layout === "split" ? "spec-split" : undefined}>
	                    {section.preview ? <div className="spec-preview">{section.preview}</div> : null}
	                    <div>
	                      {section.title ? <h4>{tr(section.title, language)}</h4> : null}
	                      {section.body?.map((paragraph) => (
	                        <p key={typeof paragraph === "string" ? paragraph : paragraph.en}>{tr(paragraph, language)}</p>
	                      ))}
	                      {section.bullets ? (
	                        <ul>
	                          {section.bullets.map((bullet) => (
	                            <li key={typeof bullet === "string" ? bullet : bullet.en}>{tr(bullet, language)}</li>
	                          ))}
	                        </ul>
	                      ) : null}
	                    </div>
	                  </div>
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
      const visible = !filterValue || entry.name.toLowerCase().includes(filterValue);
      if (!visible) continue;

      const category = mapComponentTypeToCategory(entry.type, language);
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
    return mapComponentTypeToCategory(entry.type, language).id;
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
        const spec = componentSpecs[label];
        return { id, label, subtitle: spec ? tr(spec.subtitle, language) : "" };
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
