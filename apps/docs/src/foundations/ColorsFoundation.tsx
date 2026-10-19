import { useState } from "react";

import { allTokens, colorRoleContexts } from "@genome-evolution/tokens";
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

type RoleContext = (typeof colorRoleContexts)[number];
type RoleEntry = RoleContext["roles"][number];
type RoleRow = {
  token: string;
  label: string;
  contexts: Record<string, RoleEntry>;
};
type RoleGroup = {
  id: string;
  rows: RoleRow[];
};

const palettePrefix = "color.primitive.light.palette.";

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

function collectRoleGroups(): RoleGroup[] {
  const groups = new Map<string, Map<string, RoleRow>>();

  for (const context of colorRoleContexts) {
    for (const role of context.roles) {
      const [groupId] = role.token.split(".");
      const groupRows = groups.get(groupId) ?? new Map<string, RoleRow>();
      const row = groupRows.get(role.token) ?? {
        token: role.token,
        label: role.token.slice(groupId.length + 1),
        contexts: {}
      };
      row.contexts[context.id] = role;
      groupRows.set(role.token, row);
      groups.set(groupId, groupRows);
    }
  }

  return [...groups.entries()].map(([id, rows]) => ({
    id,
    rows: [...rows.values()]
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
  language
}: {
  group: ColorGroup;
  language: Language;
}) {
  return (
    <div className="color-group-table">
      <div className="color-group-row color-group-row--header">
        <span>Token</span>
        <span>{language === "es" ? "Claro" : "Light"}</span>
        <span>{language === "es" ? "Oscuro" : "Dark"}</span>
      </div>
      {group.entries.map((entry) => (
        <div className="color-group-row" key={entry.token}>
          <span className="color-group-row__token">
            {entry.label || entry.token.slice(palettePrefix.length)}
          </span>
          <ColorValue value={entry.light} label={language === "es" ? "Claro" : "Light"} />
          <ColorValue value={entry.dark} label={language === "es" ? "Oscuro" : "Dark"} />
        </div>
      ))}
    </div>
  );
}

function PaletteGroups({ groups, language }: { groups: ColorGroup[]; language: Language }) {
  return (
    <div className="color-group-grid">
      {groups.map((group) => (
        <details className="color-group-disclosure" key={group.id}>
          <summary>
            <span>{titleFor(group.id, groupTitles, language)}</span>
            <span className="color-disclosure-count">{group.entries.length} {language === "es" ? "colores" : "colors"}</span>
          </summary>
          <ColorGroupTable group={group} language={language} />
        </details>
      ))}
    </div>
  );
}

function RoleMatrix({
  groups,
  language,
  theme,
  query
}: {
  groups: RoleGroup[];
  language: Language;
  theme: "light" | "dark";
  query: string;
}) {
  const contexts = colorRoleContexts.map((context) => context.id);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGroups = groups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((row) => {
        if (!normalizedQuery) return true;
        const roleText = [
          row.token,
          ...Object.values(row.contexts).flatMap((role) => [role.reference ?? "", role.value])
        ].join(" ").toLowerCase();
        return roleText.includes(normalizedQuery);
      })
    }))
    .filter((group) => group.rows.length > 0);

  return (
    <div className="role-matrix-groups">
      {filteredGroups.map((group, index) => (
        <details className="role-matrix-group" key={group.id} open={Boolean(normalizedQuery) || index === 0}>
          <summary>
            <span>{titleFor(group.id, roleTitles, language)}</span>
            <span className="color-disclosure-count">{group.rows.length} {language === "es" ? "roles" : "roles"}</span>
          </summary>
          <div className="role-matrix-scroll">
            <table className="role-matrix">
              <thead>
                <tr>
                  <th scope="col">{language === "es" ? "Rol" : "Role"}</th>
                  {contexts.map((context) => <th scope="col" key={context}>{context}</th>)}
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.token}>
                    <th scope="row">{row.label}</th>
                    {contexts.map((context) => {
                      const role = row.contexts[context];
                      if (!role) return <td key={context}>—</td>;

                      const value = theme === "light" ? role.light : role.dark;
                      const swatchValue = value ?? role.value;
                      const missingAlias = !role.reference;
                      return (
                        <td key={context}>
                          <span
                            className="role-matrix-cell"
                            title={`${context}: ${swatchValue}${missingAlias ? " (no Figma alias exported)" : ""}`}
                          >
                            <span
                              className="role-matrix-swatch"
                              style={{ background: swatchValue }}
                              aria-hidden="true"
                            />
                            <code>{role.reference ?? role.value}</code>
                            {missingAlias && (
                              <span className="role-matrix-warning">
                                {language === "es" ? "sin alias" : "no alias"}
                              </span>
                            )}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ))}
      {filteredGroups.length === 0 && (
        <p className="color-empty-state">
          {language === "es" ? "No hay roles que coincidan con la búsqueda." : "No roles match your search."}
        </p>
      )}
    </div>
  );
}

export function ColorsFoundation({ language, theme }: { language: Language; theme: "light" | "dark" }) {
  const [activeView, setActiveView] = useState<"roles" | "scales">("roles");
  const [roleQuery, setRoleQuery] = useState("");
  const paletteGroups = collectPaletteGroups();
  const roleGroups = collectRoleGroups();
  const roleCount = roleGroups.reduce((total, group) => total + group.rows.length, 0);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Color</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Una referencia para las escalas primitivas y los roles de color de los seis contextos, con sus valores para tema claro y oscuro."
            : "One reference for primitive scales and semantic color roles across all six contexts, with values for both light and dark themes."}
        </p>
      </section>

      <section className="foundation-section">
        <div className="color-view-switch" role="group" aria-label={language === "es" ? "Vistas de color" : "Color views"}>
          <button
            type="button"
            aria-pressed={activeView === "roles"}
            onClick={() => setActiveView("roles")}
          >
            {language === "es" ? "Roles" : "Roles"} <span>{roleCount}</span>
          </button>
          <button
            type="button"
            aria-pressed={activeView === "scales"}
            onClick={() => setActiveView("scales")}
          >
            {language === "es" ? "Escalas primitivas" : "Primitive scales"} <span>{paletteGroups.length}</span>
          </button>
        </div>

        {activeView === "roles" ? (
          <div>
            <div className="color-panel-intro">
              <div>
                <h2>{language === "es" ? "Roles por contexto" : "Roles by context"}</h2>
                <p>
                  {language === "es"
                    ? `Compara las referencias de Figma para los seis contextos. Product sigue activo para los componentes; las muestras usan el tema ${theme === "light" ? "claro" : "oscuro"}.`
                    : `Compare Figma references across all six contexts. Product remains active for components; swatches use the ${theme} theme.`}
                </p>
              </div>
              <label className="color-role-search">
                <span>{language === "es" ? "Buscar rol o referencia" : "Search role or reference"}</span>
                <input
                  type="search"
                  value={roleQuery}
                  onChange={(event) => setRoleQuery(event.target.value)}
                  placeholder={language === "es" ? "Ej. text.primary" : "e.g. text.primary"}
                />
              </label>
            </div>
            <RoleMatrix groups={roleGroups} language={language} theme={theme} query={roleQuery} />
          </div>
        ) : (
          <div>
            <div className="color-panel-intro">
              <div>
                <h2>{language === "es" ? "Escalas primitivas" : "Primitive scales"}</h2>
                <p>
                  {language === "es"
                    ? "Abre una escala para ver los valores primitivos en los temas claro y oscuro."
                    : "Expand a scale to see its primitive values in light and dark themes."}
                </p>
              </div>
            </div>
            <PaletteGroups groups={paletteGroups} language={language} />
          </div>
        )}
      </section>
    </div>
  );
}
