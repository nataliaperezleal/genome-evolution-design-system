import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue;
      files.push(...(await walk(full)));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

function extractCssVarNames(cssText) {
  const vars = new Set();
  const re = /--ge-[a-z0-9-]+/gi;
  for (const match of cssText.matchAll(re)) {
    vars.add(match[0]);
  }
  return vars;
}

function extractUsedVars(text) {
  const used = new Set();
  const re = /var\(\s*(--ge-[a-z0-9-]+)\s*(?:,[^)]+)?\)/gi;
  for (const match of text.matchAll(re)) {
    used.add(match[1]);
  }
  return used;
}

function findUnitlessDefinitions(cssText) {
  const issues = [];
  const lines = cssText.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^\s*(--ge-[a-z0-9-]+)\s*:\s*([^;]+);/i);
    if (!m) continue;
    const name = m[1];
    const value = m[2].trim();
    if (/^-?\d+(\.\d+)?$/.test(value)) {
      issues.push({ name, value, line: i + 1 });
    }
  }
  return issues;
}

async function main() {
  const variablesCssPath = path.join(repoRoot, "packages/tokens/dist/variables.css");
  const variablesCss = await readFile(variablesCssPath, "utf8").catch((err) => {
    console.error(`ERROR: Could not read ${variablesCssPath}`);
    console.error(err?.message ?? err);
    process.exitCode = 2;
    return null;
  });
  if (!variablesCss) return;

  const defined = extractCssVarNames(variablesCss);
  const unitless = findUnitlessDefinitions(variablesCss);

  const ignoreMissing = new Set([
    // Runtime/inline variables (set by components at render-time).
    "--ge-group-gap"
  ]);

  const scanRoots = [
    path.join(repoRoot, "packages/react/src"),
    path.join(repoRoot, "apps/docs/src")
  ];

  const used = new Set();
  for (const root of scanRoots) {
    const rootStat = await stat(root).catch(() => null);
    if (!rootStat?.isDirectory()) continue;
    const files = (await walk(root)).filter((file) => /\.(css|ts|tsx|js|mjs|md)$/.test(file));
    for (const file of files) {
      const text = await readFile(file, "utf8").catch(() => "");
      for (const v of extractUsedVars(text)) used.add(v);
    }
  }

  const missing = [...used].filter((v) => !defined.has(v) && !ignoreMissing.has(v)).sort();

  const unitlessUsed = unitless.filter((issue) => used.has(issue.name) && !ignoreMissing.has(issue.name));
  if (unitlessUsed.length) {
    console.log("Unitless variable definitions that are referenced (likely broken in CSS):");
    for (const issue of unitlessUsed.slice(0, 50)) {
      console.log(`- ${issue.name} = ${issue.value} (variables.css:${issue.line})`);
    }
    if (unitlessUsed.length > 50) console.log(`…and ${unitlessUsed.length - 50} more`);
    console.log("");
  }

  if (missing.length) {
    console.log("CSS variables used but not defined in packages/tokens/dist/variables.css:");
    for (const v of missing.slice(0, 100)) {
      console.log(`- ${v}`);
    }
    if (missing.length > 100) {
      console.log(`…and ${missing.length - 100} more`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("OK: All referenced `--ge-*` CSS variables are defined, and no unitless numeric definitions were found.");
}

await main();
