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

const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

function normalizeFontWeight(value, tokenPath) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") {
    throw new Error(`Font weight at ${tokenPath} must be a string or number, got ${JSON.stringify(value)}`);
  }

  const raw = value.trim();
  if (/^\d+$/.test(raw)) return Number(raw);

  const key = raw.toLowerCase().replace(/[\s_-]/g, "");
  if (!(key in FONT_WEIGHTS)) {
    throw new Error(`Unknown font weight "${value}" at ${tokenPath}`);
  }
  return FONT_WEIGHTS[key];
}

function isWeightToken(trail, node) {
  if (node.$type === "fontWeight") return true;
  return trail.at(-1) === "weight";
}

function convertTypography(node, convertText = (value) => value, trail = []) {
  if (!node || typeof node !== "object") return node;

  if ("$value" in node) {
    const value = isWeightToken(trail, node)
      ? normalizeFontWeight(node.$value, trail.join("."))
      : convertText(node.$value);
    return { ...node, $value: value };
  }

  return Object.fromEntries(
    Object.entries(node)
      .filter(([key]) => !key.startsWith("$"))
      .map(([key, value]) => [key, convertTypography(value, convertText, [...trail, key])])
  );
}

function flattenRoleEntries(node, trail = [], result = []) {
  if (!node || typeof node !== "object") return result;

  if ("$value" in node) {
    const aliasData = node.$extensions?.["com.figma.aliasData"]?.targetVariableName;
    const valueAlias = typeof node.$value === "string" ? node.$value.match(/^\{([^}]+)\}$/)?.[1] : null;
    result.push({
      token: trail.join("."),
      value: colorToCss(node.$value),
      reference: typeof aliasData === "string" ? aliasData : valueAlias ?? null
    });
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith("$")) flattenRoleEntries(value, [...trail, key], result);
  }
  return result;
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

export async function loadFigmaExports() {
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
    colorRoleAI,
    colorRoleApps,
    colorRoleAutomation,
    colorRoleModeler,
    colorRoleProduct,
    colorRoleStudio,
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
    readExport("Color_Role/Color_RoleAI.tokens.json"),
    readExport("Color_Role/Color_RoleApps.tokens.json"),
    readExport("Color_Role/Color_RoleAutomation.tokens.json"),
    readExport("Color_Role/Color_RoleModeler.tokens.json"),
    readExport("Color_Role/Color_RoleProduct.tokens.json"),
    readExport("Color_Role/Color_RoleStudio.tokens.json"),
    readExport("Typography_Primitive/Typography_PrimitiveBase.tokens.json"),
    readExport("Typography_Primitive/Typography_PrimitiveBrand.tokens.json"),
    readExport("Typography_Role/Typography_RoleBase.tokens.json")
  ]);

  const source = {
    $metadata: {
      name: "Genome Evolution Design System",
      version: "1.0.0"
    }
  };
  const colorLightTokens = withoutSetMetadata(colorLight, colorToCss);
  const colorDarkTokens = withoutSetMetadata(colorDark, colorToCss);
  const lightPalette = flattenTokens(withoutSetMetadata(colorLight));
  const darkPalette = flattenTokens(withoutSetMetadata(colorDark));
  const contexts = [
    { id: "Product", data: colorRoleProduct },
    { id: "AI", data: colorRoleAI },
    { id: "Modeler", data: colorRoleModeler },
    { id: "Studio", data: colorRoleStudio },
    { id: "Automation", data: colorRoleAutomation },
    { id: "Apps", data: colorRoleApps }
  ];

  source.$colorRoleContexts = contexts.map(({ id, data }) => ({
    id,
    roles: (() => {
      const entries = flattenRoleEntries(data);
      const entriesByToken = new Map(entries.map((role) => [role.token, role]));
      const resolved = new Map();

      function resolve(role, stack = []) {
        if (resolved.has(role.token)) return resolved.get(role.token);
        if (stack.includes(role.token)) {
          throw new Error(`Circular color role alias in ${id}: ${[...stack, role.token].join(" -> ")}`);
        }

        if (!role.reference) {
          const result = { ...role, light: role.value, dark: null };
          resolved.set(role.token, result);
          return result;
        }

        const targetRole = entriesByToken.get(role.reference.replaceAll("/", "."));
        if (targetRole) {
          const target = resolve(targetRole, [...stack, role.token]);
          const result = { ...role, light: target.light, dark: target.dark };
          resolved.set(role.token, result);
          return result;
        }

        const primitivePath = role.reference.replaceAll("/", ".");
        const lightValue = lightPalette.get(primitivePath);
        const darkValue = darkPalette.get(primitivePath);
        if (!lightValue || !darkValue) {
          throw new Error(`Could not resolve Figma role alias "${role.reference}" in context "${id}".`);
        }

        const result = {
          ...role,
          light: colorToCss(lightValue),
          dark: colorToCss(darkValue)
        };
        resolved.set(role.token, result);
        return result;
      }

      return entries.map((role) => resolve(role));
    })()
  }));

  source["Border/Base"] = withoutSetMetadata(border);
  source["Elevation/Base"] = withoutSetMetadata(elevation);
  source["Layer/Base"] = withoutSetMetadata(layer);
  source["Layout/Base"] = withoutSetMetadata(layout);
  source["Opacity/Base"] = withoutSetMetadata(opacity);
  source["Radius/Base"] = withoutSetMetadata(radius);
  source["Spacing/Base"] = withoutSetMetadata(spacing);
  source["Color / Primitive/Light"] = colorLightTokens;
  source["Color / Primitive/Dark"] = colorDarkTokens;
  source["Typography / Primitive/Base"] = convertTypography(typographyBase);
  source["Typography / Primitive/Brand"] = convertTypography(typographyBrand);
  source["Typography / Role/Base"] = convertTypography(typographyRoles, normalizeTypographyValue);

  const convertedRoles = {};
  for (const role of flattenRoleEntries(colorRoleProduct)) {
    if (!role.reference) {
      throw new Error(`Product color role "${role.token}" is missing its Figma alias reference.`);
    }
    setTokenValue(convertedRoles, role.token, `{${role.reference.replaceAll("/", ".")}}`);
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