import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const sourceFile = path.join(packageRoot, "source", "tokens.json");
const distDir = path.join(packageRoot, "dist");
const themesDir = path.join(distDir, "themes");

const source = JSON.parse(await readFile(sourceFile, "utf8"));
const fallbackReferences = {
  "family.display": "Open Sans"
};
const themes = ["light", "dark"];
const publicPrefixes = [
  "border.width.",
  "border.focus.width",
  "color.role.",
  "focus.",
  "layer.z-index.",
  "layout.",
  "motion.",
  "opacity.state.",
  "radius.semantic.",
  "spacing.",
  "typography.role."
];

function normalizeTokenSegment(segment) {
  return String(segment)
    .trim()
    .toLowerCase()
    .replace(/\s*\/\s*/g, ".")
    .replace(/\s+/g, ".")
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.+|\.+$/g, "");
}

function isTokenLeaf(value) {
  return value && typeof value === "object" && "$value" in value;
}

function collectTokenEntries(node, trail = [], all = new Map()) {
  if (typeof node === "string" || typeof node === "number" || typeof node === "boolean") {
    all.set(trail.join("."), node);
    return all;
  }

  if (!node || typeof node !== "object") {
    return all;
  }

  if (isTokenLeaf(node)) {
    all.set(trail.join("."), node.$value);
    // Some Figma exports include state variants (e.g. hovered/pressed) alongside a base $value.
    // Keep collecting nested tokens instead of returning early.
  }

  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$")) {
      continue;
    }
    collectTokenEntries(value, [...trail, normalizeTokenSegment(key)], all);
  }

  return all;
}

const tokenEntries = collectTokenEntries(source);

function isPublicToken(token) {
  return publicPrefixes.some((prefix) => token.startsWith(prefix));
}

function findReferenceValue(ref, theme) {
  if (tokenEntries.has(ref)) {
    return tokenEntries.get(ref);
  }

  const preferredCandidates = [];

  if (ref.startsWith("palette.")) {
    preferredCandidates.push(`color.primitive.${theme}.${ref}`);
  }

  if (
    ref.startsWith("family.") ||
    ref.startsWith("size.") ||
    ref.startsWith("line-height.") ||
    ref.startsWith("letter-spacing.") ||
    ref.startsWith("weight.")
  ) {
    preferredCandidates.push(`typography.primitive.${ref}`);
  }

  for (const candidate of preferredCandidates) {
    if (tokenEntries.has(candidate)) {
      return tokenEntries.get(candidate);
    }
  }

  const suffixMatches = [...tokenEntries.entries()].filter(([token]) => token.endsWith(`.${ref}`));
  if (suffixMatches.length >= 1) {
    return suffixMatches[0][1];
  }

  if (ref in fallbackReferences) {
    return fallbackReferences[ref];
  }

  return undefined;
}

function resolveReference(value, theme, stack = []) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(/\{([^}]+)\}/g, (_, ref) => {
    if (stack.includes(ref)) {
      throw new Error(`Circular token reference: ${[...stack, ref].join(" -> ")}`);
    }

    const refValue = findReferenceValue(ref, theme);
    if (refValue === undefined) {
      throw new Error(`Missing token reference: ${ref}`);
    }

    return String(resolveReference(refValue, theme, [...stack, ref]));
  });
}

function resolveTokenMap(theme) {
  return Object.fromEntries(
    [...tokenEntries.entries()].map(([token, value]) => [token, resolveReference(value, theme)])
  );
}

function filterPublicTokens(tokenMap) {
  return Object.fromEntries(Object.entries(tokenMap).filter(([token]) => isPublicToken(token)));
}

function toCssVariable(token) {
  return `--ge-${token.replace(/\./g, "-")}`;
}

function toCssBlock(selector, tokenMap, theme = null) {
  const lines = Object.entries(tokenMap).map(([token, value]) => {
    const themedVar = toCssVariable(token);
    const aliasVar = theme ? toCssVariable(token.replace(`${theme}.`, '')) : null;
    
    if (aliasVar && aliasVar !== themedVar) {
      return `  ${themedVar}: ${value};\n  ${aliasVar}: var(${themedVar});`;
    }
    return `  ${themedVar}: ${value};`;
  });
  return `${selector} {\n${lines.join("\n")}\n}\n`;
}

const resolvedByTheme = Object.fromEntries(themes.map((theme) => [theme, resolveTokenMap(theme)]));
const publicByTheme = Object.fromEntries(
  themes.map((theme) => [theme, filterPublicTokens(resolvedByTheme[theme])])
);

const lightPublic = publicByTheme.light;
const darkPublic = publicByTheme.dark;
const darkOverrides = Object.fromEntries(
  Object.entries(darkPublic).filter(([token, value]) => lightPublic[token] !== value)
);

const publicMetadata = {
  system: source.$metadata?.name ?? "Genome Evolution Design System",
  version: source.$metadata?.version ?? "0.0.0",
  generatedAt: source.$metadata?.generatedAt ?? null,
  source: "packages/tokens/source/tokens.json",
  publicPrefixes,
  themes
};

const indexJs = `import tokens from "./tokens.json" with { type: "json" };
import light from "./themes/light.json" with { type: "json" };
import dark from "./themes/dark.json" with { type: "json" };
import allTokens from "./all-tokens.json" with { type: "json" };

export { allTokens, dark, light, tokens };

export const themes = { light, dark };

export function token(name, theme = "light") {
  if (theme === "dark") {
    return dark[name];
  }
  return light[name];
}

export function cssVar(name) {
  return \`var(--ge-\${name.replace(/\\./g, "-")})\`;
}
`;

const indexDts = `export declare const tokens: Record<string, string | number | boolean>;
export declare const light: Record<string, string | number | boolean>;
export declare const dark: Record<string, string | number | boolean>;
export declare const allTokens: Record<string, string | number | boolean>;
export declare const themes: {
  light: Record<string, string | number | boolean>;
  dark: Record<string, string | number | boolean>;
};
export declare function token(
  name: string,
  theme?: "light" | "dark"
): string | number | boolean | undefined;
export declare function cssVar(name: string): string;
`;

await rm(distDir, { recursive: true, force: true });
await mkdir(themesDir, { recursive: true });

await writeFile(path.join(distDir, "all-tokens.json"), `${JSON.stringify(resolvedByTheme.light, null, 2)}\n`);
await writeFile(path.join(distDir, "tokens.json"), `${JSON.stringify(lightPublic, null, 2)}\n`);
await writeFile(path.join(themesDir, "light.json"), `${JSON.stringify(lightPublic, null, 2)}\n`);
await writeFile(path.join(themesDir, "dark.json"), `${JSON.stringify(darkPublic, null, 2)}\n`);
await writeFile(path.join(distDir, "metadata.json"), `${JSON.stringify(publicMetadata, null, 2)}\n`);
await writeFile(
  path.join(distDir, "variables.css"),
  `${toCssBlock(":root, [data-theme=\"light\"]", lightPublic, "light")}\n${toCssBlock("[data-theme=\"dark\"]", darkOverrides, "dark")}`
);
await writeFile(path.join(distDir, "index.js"), indexJs);
await writeFile(path.join(distDir, "index.d.ts"), indexDts);
