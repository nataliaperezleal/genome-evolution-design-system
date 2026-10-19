import { allTokens, themes } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type ColorScaleEntry = {
  token: string;
  label: string;
  light: string;
  dark: string;
};

type ColorGroup = {
  id: string;
  title: string;
  entries: ColorScaleEntry[];
};

const palettePrefix = "color.primitive.light.palette.";
const rolePrefix = "color.role.light.";

const groupTitles: Record<string, { en: string; es: string }> = {
  primary: { en: "Primary", es: "Primario" },
  secondary: { en: "Secondary", es: "Secundario" },
  accent: { en: "Accent", es: "Acento" },
  error: { en: "Error", es: "Error" },
  info: { en: "Information", es: "Información" },
  success: { en: "Success", es: "Éxito" },
  alert: { en: "Alert", es: "Alerta" },
  neutral: { en: "Neutral", es: "Neutros" },
  alpha: { en: "Transparency", es: "Transparencias" },
  evergreen: { en: "Evergreen", es: "Evergreen" },
  indigo: { en: "Indigo", es: "Índigo" },
  citrus: { en: "Citrus", es: "Citrus" },
  beryllium: { en: "Beryllium", es: "Beryllium" },
  "brand.evergreen": { en: "Brand · Evergreen", es: "Marca · Evergreen" },
  "brand.indigo": { en: "Brand · Indigo", es: "Marca · Índigo" },
  "brand.citrus": { en: "Brand · Citrus", es: "Marca · Citrus" },
  "brand.beryllium": { en: "Brand · Beryllium", es: "Marca · Beryllium" },
  state: { en: "Product states", es: "Estados de producto" },
  "products.state": { en: "Product states", es: "Estados de producto" },
  "products.modeler": { en: "Modeler", es: "Modeler" },
  "products.studio": { en: "Studio", es: "Studio" },
  "products.automation": { en: "Automation", es: "Automation" },
  "products.apps": { en: "Apps", es: "Apps" },
  "products.neutrals": { en: "Product neutrals", es: "Neutros de producto" },
  modeler: { en: "Modeler", es: "Modeler" },
  studio: { en: "Studio", es: "Studio" },
  automation: { en: "Automation", es: "Automation" },
  apps: { en: "Apps", es: "Apps" },
  neutrals: { en: "Product neutrals", es: "Neutros de producto" }
};

const roleTitles: Record<string, { en: string; es: string }> = {
  text: { en: "Text", es: "Texto" },
  link: { en: "Links", es: "Enlaces" },
  icon: { en: "Icons", es: "Iconos" },
  border: { en: "Borders", es: "Bordes" },
  background: { en: "Backgrounds", es: "Fondos" },
  surface: { en: "Surfaces", es: "Superficies" },
  overlay: { en: "Overlays", es: "Superposiciones" }
};

function titleFor(id: string, titles: Record<string, { en: string; es: string }>, language: Language) {
  const title = titles[id];
  if (title) return title[language];
  return id
    .split(".")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function collectPaletteGroups(): ColorGroup[] {
  const groups = new Map<string, ColorScaleEntry[]>();

  for (const [token, value] of Object.entries(allTokens)) {
    if (!token.startsWith(palettePrefix) || typeof value !== "string") continue;
    const suffix = token.slice(palettePrefix.length);
    const parts = suffix.split(".");
    const groupId = ["brand", "products"].includes(parts[0]) ? parts.slice(0, 2).join(".") : parts[0];
    const darkToken = `color.primitive.dark.palette.${suffix}`;
    const darkValue = allTokens[darkToken];
    if (typeof darkValue !== "string") {
      throw new Error(`Missing dark color primitive "${darkToken}".`);
    }

    const entries = groups.get(groupId) ?? [];
    entries.push({
      token,
      label: parts.slice(groupId.split(".").length).join("."),
      light: value,
      dark: darkValue
    });
    groups.set(groupId, entries);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, entries]) => ({
      id,
      title: id,
      entries: entries.sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }))
    }));
}

function collectRoleGroups(): ColorGroup[] {
  const groups = new Map<string, ColorScaleEntry[]>();

  for (const [token, value] of Object.entries(themes.light)) {
    if (!token.startsWith(rolePrefix) || typeof value !== "string") continue;
    const suffix = token.slice(rolePrefix.length);
    const [groupId] = suffix.split(".");
    const darkValue = themes.dark[token];
    if (typeof darkValue !== "string") {
      throw new Error(`Missing dark semantic color role "${token}".`);
    }

    const entries = groups.get(groupId) ?? [];
    entries.push({ token, label: suffix, light: value, dark: darkValue });
    groups.set(groupId, entries);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, entries]) => ({
      id,
      title: id,
      entries: entries.sort((a, b) => a.label.localeCompare(b.label))
    }));
}

function ColorValue({ value, label }: { value: string; label: string }) {
  return (
    <span className="color-value">
      <span
        className="color-value__swatch"
        style={{ background: value }}
        role="img"
        aria-label={`${label}: ${value}`}
      />
      <span className="color-value__hex">{value}</span>
    </span>
  );
}

function ColorGroupTable({
  group,
  language,
  role = false
}: {
  group: ColorGroup;
  language: Language;
  role?: boolean;
}) {
  return (
    <section className="color-group-card">
      <h3>{titleFor(group.id, role ? roleTitles : groupTitles, language)}</h3>
      <div className="color-group-table">
        <div className="color-group-row color-group-row--header">
          <span>Token</span>
          <span>{language === "es" ? "Claro" : "Light"}</span>
          <span>{language === "es" ? "Oscuro" : "Dark"}</span>
        </div>
        {group.entries.map((entry) => (
          <div className="color-group-row" key={entry.token}>
            <span className="color-group-row__token">
              {role ? entry.label : entry.label || entry.token.slice(palettePrefix.length)}
            </span>
            <ColorValue value={entry.light} label={language === "es" ? "Claro" : "Light"} />
            <ColorValue value={entry.dark} label={language === "es" ? "Oscuro" : "Dark"} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function ColorsFoundation({ language }: { language: Language }) {
  const paletteGroups = collectPaletteGroups();
  const roleGroups = collectRoleGroups();

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Color</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Una referencia única para todas las escalas primitivas y los roles semánticos de color del contexto Product, con sus valores para temas claro y oscuro."
            : "One reference for every primitive color scale and semantic color role in the Product context, with values for both light and dark themes."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Escalas primitivas" : "Primitive scales"}</h2>
        <p>
          {language === "es"
            ? "Las escalas son los valores de base. Cada fila muestra el mismo token en claro y oscuro."
            : "Scales are the base color values. Each row shows the same token in light and dark themes."}
        </p>
        <div className="color-group-grid">
          {paletteGroups.map((group) => (
            <ColorGroupTable key={group.id} group={group} language={language} />
          ))}
        </div>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Roles semánticos · Product" : "Semantic roles · Product"}</h2>
        <p>
          {language === "es"
            ? "Los roles describen para qué se usa cada color —texto, enlace, icono, borde, fondo, superficie o superposición— y conectan con las escalas anteriores."
            : "Roles describe how each color is used—text, link, icon, border, background, surface, or overlay—and connect back to the scales above."}
        </p>
        <div className="color-group-grid">
          {roleGroups.map((group) => (
            <ColorGroupTable key={group.id} group={group} language={language} role />
          ))}
        </div>
      </section>
    </div>
  );
}
