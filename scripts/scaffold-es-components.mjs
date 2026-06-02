import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const manifestPath = path.join(repoRoot, "manifest.json");
const componentsDir = path.join(repoRoot, "components");
const componentsEsDir = path.join(componentsDir, "es");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(jsonPath) {
  return JSON.parse(fs.readFileSync(jsonPath, "utf8"));
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeFileIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) return false;
  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

function main() {
  const manifest = readJson(manifestPath);
  const entries = Array.isArray(manifest?.components) ? manifest.components : [];

  ensureDir(componentsEsDir);

  let created = 0;
  let skipped = 0;
  const missingSources = [];

  for (const entry of entries) {
    const file = entry?.file;
    if (typeof file !== "string" || !file.startsWith("components/") || !file.endsWith(".md")) continue;

    const sourcePath = path.join(repoRoot, file);
    const destPath = path.join(repoRoot, file.replace(/^components\//, "components/es/"));

    if (!fs.existsSync(sourcePath)) {
      missingSources.push(file);
      continue;
    }

    const content = readFile(sourcePath);
    const didCreate = writeFileIfMissing(destPath, content);
    if (didCreate) created += 1;
    else skipped += 1;
  }

  const summary = {
    created,
    skipped_existing: skipped,
    missing_sources: missingSources
  };

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(summary, null, 2));
}

main();

