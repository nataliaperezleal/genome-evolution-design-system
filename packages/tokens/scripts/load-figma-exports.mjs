import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exportRoot = path.resolve(__dirname, "..", "source", "figma");

async function readExport(relativePath) {
  const filePath = path.join(exportRoot, relativePath);
  return JSON.parse(await readFile(filePath, "utf8"));
}

function withoutSetMetadata(node, convertValue = (value) => value) {
  if (Array.isArray(node)) return node.map((value) => withoutSetMetadata(value, convertValue));
  if (!node || typeof node !== "object") return node;

  if ("$value" in node) {
    return {
      ...node,
      $value: convertValue(node.$value)
    };
  }

  return Object.fromEntries(
    Object.entries(node)
      .filter(([key]) => !key.startsWith("$"))
      .map(([key, value]) => [key, withoutSetMetadata(value, convertValue)])
  );
}

function flattenTokens(node, trail = [], result = new Map()) {
  if (!node || typeof node !== "object") return result;

  if ("$value" in node) {
    result.set(trail.join("."), node.$value);
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith("$")) flattenTokens(value, [...trail, key], result);
  }
  return result;
}

function colorSignature(value) {
  if (!value || typeof value !== "object" || !Array.isArray(value.components)) return null;
  const components = value.components.map((component) => Math.round(component * 255));
  const alpha = Math.round((value.alpha ?? 1) * 255);
  return [...components, alpha].join(",");
}

function colorToCss(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object" || typeof value.hex !== "string") {
    throw new Error(`Unsupported Figma color value: ${JSON.stringify(value)}`);
  }

  const hex = value.hex.toLowerCase();
  if (!/^#[\da-f]{6}(?:[\da-f]{2})?$/.test(hex)) {
    throw new Error(`Unsupported Figma color hex value "${value.hex}".`);
  }
  if (hex.length === 9 || value.alpha === undefined || value.alpha >= 1) return hex;
  return `${hex}${Math.round(value.alpha * 255).toString(16).padStart(2, "0")}`;
}

function normalizeTypographyValue(value) {
  if (typeof value === "string" && /^-?\d+,\d+%$/.test(value)) {
    return value.replace(",", ".");
  }
  return value;
}

function preferredPaletteGroup(rolePath) {
  const role = rolePath.toLowerCase();
  if (role.includes("danger")) return "error";
  if (role.includes("warning")) return "alert";
  if (role.includes("info")) return "info";
  if (role.includes("success")) return "success";
  if (role.includes("evergreen")) return "primary";
  if (role.includes("indigo")) return "secondary";
  if (role.includes("accent")) return "accent";
  if (role === "background.canvas") return "neutral";
  if (role === "background.alpha") return "alpha";
  return null;
}

function roleAliases(roleTokens, lightPalette, darkPalette) {
  const bySignature = new Map();
  for (const [path, value] of lightPalette) {
    const signature = colorSignature(value);
    if (!signature) continue;
    const candidates = bySignature.get(signature) ?? [];
    candidates.push(path);
    bySignature.set(signature, candidates);
  }

  const darkPaths = new Set(darkPalette.keys());
  const aliases = new Map();
  for (const [rolePath, token] of roleTokens) {
    const signature = colorSignature(token);
    const candidates = bySignature.get(signature) ?? [];
    const preferredGroup = preferredPaletteGroup(rolePath);
    const preferredCandidates = preferredGroup
      ? candidates.filter((candidate) => candidate.startsWith(`palette.${preferredGroup}.`))
      : [];
    const selected = (preferredCandidates.length ? preferredCandidates : candidates)
      .sort((a, b) => a.split(".").length - b.split(".").length || a.localeCompare(b))[0];

    if (!selected || !darkPaths.has(selected)) {
      throw new Error(
        `Could not map Product color role "${rolePath}" to the matching light and dark primitive palettes.`
      );
    }

    aliases.set(rolePath, `{${selected}}`);
  }

  return aliases;
}

function setTokenValue(tree, tokenPath, value) {
  const segments = tokenPath.split(".");
  let target = tree;
  for (const segment of segments.slice(0, -1)) {
    target[segment] ??= {};
    target = target[segment];
  }
  const leaf = target[segments.at(-1)];
  target[segments.at(-1)] = {
    ...(leaf && typeof leaf === "object" ? leaf : {}),
    $type: "color",
    $value: value
  };
}

export async function loadFigmaExports(legacySource) {
  const [
    border,
    elevation,
    layer,
    layout,
    opacity,
    radius,
    spacing,
    colorLight,
    colorDark,
    colorRoleProduct,
    typographyBase,
    typographyBrand,
    typographyRoles
  ] = await Promise.all([
    readExport("Border.json"),
    readExport("Elevation.json"),
    readExport("Layer.json"),
    readExport("Layout.json"),
    readExport("Opacity.json"),
    readExport("Radius.json"),
    readExport("Spacing.json"),
    readExport("Color_Primitive/Color_PrimitiveLight.tokens.json"),
    readExport("Color_Primitive/Color_PrimitiveDark.tokens.json"),
    readExport("Color_Role/Color_RoleProduct.tokens.json"),
    readExport("Typography_Primitive/Typography_PrimitiveBase.tokens.json"),
    readExport("Typography_Primitive/Typography_PrimitiveBrand.tokens.json"),
    readExport("Typography_Role/Typography_RoleBase.tokens.json")
  ]);

  const source = structuredClone(legacySource);
  const colorLightTokens = withoutSetMetadata(colorLight, colorToCss);
  const colorDarkTokens = withoutSetMetadata(colorDark, colorToCss);
  const lightPalette = flattenTokens(withoutSetMetadata(colorLight));
  const darkPalette = flattenTokens(withoutSetMetadata(colorDark));
  const productRoles = flattenTokens(colorRoleProduct);
  const roleReferences = roleAliases(productRoles, lightPalette, darkPalette);

  source["Border/Base"] = withoutSetMetadata(border);
  source["Elevation/Base"] = withoutSetMetadata(elevation);
  source["Layer/Base"] = withoutSetMetadata(layer);
  source["Layout/Base"] = withoutSetMetadata(layout);
  source["Opacity/Base"] = withoutSetMetadata(opacity);
  source["Radius/Base"] = withoutSetMetadata(radius);
  source["Spacing/Base"] = withoutSetMetadata(spacing);
  source["Color / Primitive/Light"] = colorLightTokens;
  source["Color / Primitive/Dark"] = colorDarkTokens;
  source["Typography / Primitive/Base"] = withoutSetMetadata(typographyBase);
  source["Typography / Primitive/Brand"] = withoutSetMetadata(typographyBrand);
  source["Typography / Role/Base"] = withoutSetMetadata(
    typographyRoles,
    normalizeTypographyValue
  );

  const convertedRoles = {};
  for (const [rolePath, reference] of roleReferences) {
    setTokenValue(convertedRoles, rolePath, reference);
  }
  // Product exports hover and pressed surfaces but omit their default states.
  for (const [rolePath, reference] of Object.entries({
    "link.evergreen": "{link.evergreen.default}",
    "link.indigo": "{link.indigo.default}",
    "surface.subtlest": "{palette.neutral.100}",
    "surface.subtle": "{palette.neutral.300}",
    "surface.raised": "{palette.neutral.900}",
    "surface.evergreen.subtle": "{palette.primary.100}",
    "surface.evergreen.bold": "{palette.primary.900}",
    "surface.indigo.subtle": "{palette.secondary.100}",
    "surface.indigo.bold": "{palette.secondary.900}",
    "surface.danger.subtle": "{palette.error.100}",
    "surface.danger.bold": "{palette.error.900}",
    "surface.info.subtle": "{palette.info.100}",
    "surface.info.bold": "{palette.info.900}",
    "surface.success.subtle": "{palette.success.100}",
    "surface.success.bold": "{palette.success.900}",
    "surface.warning.subtle": "{palette.alert.100}",
    "surface.warning.bold": "{palette.alert.900}"
  })) {
    setTokenValue(convertedRoles, rolePath, reference);
  }
  source["Color / Role/Light"] = convertedRoles;

  return source;
}
