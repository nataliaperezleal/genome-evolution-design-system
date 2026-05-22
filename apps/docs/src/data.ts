import manifestJson from "../../../manifest.json";
import type { DocRecord, ManifestData } from "./types";
import tokenVarsCss from "../../../packages/tokens/dist/variables.css?raw";
import darkTheme from "../../../packages/tokens/dist/themes/dark.json";

const foundationDocs = import.meta.glob("../../../foundations/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

const componentDocs = import.meta.glob("../../../components/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

const foundationDocsEs = import.meta.glob("../../../foundations/es/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

const componentDocsEs = import.meta.glob("../../../components/es/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

export const manifest = manifestJson as ManifestData;

function countUniqueCssVars(css: string) {
  const matches = css.match(/--ge-[a-z0-9-]+(?=:)/gi) ?? [];
  return new Set(matches.map((value) => value.toLowerCase())).size;
}

export const tokenStats = {
  cssVarCount: countUniqueCssVars(tokenVarsCss),
  darkOverrideCount: Object.keys(darkTheme as Record<string, unknown>).length
};

function normalizeTitle(markdown: string, fallback: string) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1];
  return heading ?? fallback;
}

function fileToSlug(file: string) {
  return file.replace(/\.md$/, "").replace(/\//g, "-");
}

function resolveDoc(file: string, fallbackName: string, body: string): DocRecord {
  const path = `../../../${file}`;
  return {
    slug: fileToSlug(file),
    title: normalizeTitle(body, fallbackName),
    path: file,
    body
  };
}

function resolveLocalizedDoc(file: string, fallbackName: string, locale: "en" | "es"): DocRecord {
  const path = `../../../${file}`;
  const localizedPath = locale === "es" ? path.replace(/^(\.\.\/\.\.\/\.\.\/)(components|foundations)\//, "$1$2/es/") : path;

  const body =
    locale === "es"
      ? foundationDocsEs[localizedPath] ?? componentDocsEs[localizedPath] ?? foundationDocs[path] ?? componentDocs[path] ?? ""
      : foundationDocs[path] ?? componentDocs[path] ?? "";

  return resolveDoc(file, fallbackName, body);
}

export const foundationDocsBySlug = Object.fromEntries(
  manifest.foundations.map((entry) => {
    const doc = resolveLocalizedDoc(entry.file, entry.name, "en");
    return [doc.slug, doc];
  })
);

export const componentDocsBySlug = Object.fromEntries(
  manifest.components.map((entry) => {
    const doc = resolveLocalizedDoc(entry.file, entry.name, "en");
    return [doc.slug, doc];
  })
);

export const foundationDocsBySlugEs = Object.fromEntries(
  manifest.foundations.map((entry) => {
    const doc = resolveLocalizedDoc(entry.file, entry.name, "es");
    return [doc.slug, doc];
  })
);

export const componentDocsBySlugEs = Object.fromEntries(
  manifest.components.map((entry) => {
    const doc = resolveLocalizedDoc(entry.file, entry.name, "es");
    return [doc.slug, doc];
  })
);
