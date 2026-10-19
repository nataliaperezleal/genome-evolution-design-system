import { useMemo } from "react";

import { themes } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type RoleTokenRow = { token: string; light: string; dark: string };

function pickRole(category: string) {
  const prefix = `color.role.light.${category}.`;
  const entries: RoleTokenRow[] = [];
  for (const [token, value] of Object.entries(themes.light)) {
    if (!token.startsWith(prefix) || typeof value !== "string") continue;
    const dark = themes.dark[token];
    if (typeof dark !== "string") continue;
    entries.push({ token, light: value, dark });
  }
  entries.sort((a, b) => a.token.localeCompare(b.token));
  return entries;
}

function TokenGroup({ title, rows, language }: { title: string; rows: RoleTokenRow[]; language: Language }) {
  return (
    <section className="role-group">
      <h2>{title}</h2>
      <div className="role-table">
        <div className="role-table__head">
          <div>Token</div>
          <div>{language === "es" ? "Claro" : "Light"}</div>
          <div>{language === "es" ? "Oscuro" : "Dark"}</div>
        </div>
        {rows.map((row) => (
          <div className="role-table__row" key={row.token}>
            <div>
              <span className="token-pill">{row.token.replace("color.role.light.", "color.role.")}</span>
            </div>
            <div className="role-sample">
              <div className="role-swatch" style={{ background: row.light }} aria-hidden="true" />
              <span className="token-value-mono">{row.light}</span>
            </div>
            <div className="role-sample">
              <div className="role-swatch" style={{ background: row.dark }} aria-hidden="true" />
              <span className="token-value-mono">{row.dark}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TokensFoundation({ language }: { language: Language }) {
  const groups = useMemo(
    () => [
      { id: "text", title: language === "es" ? "Texto" : "Text", rows: pickRole("text") },
      { id: "link", title: language === "es" ? "Enlace" : "Link", rows: pickRole("link") },
      { id: "icon", title: language === "es" ? "Ícono" : "Icon", rows: pickRole("icon") },
      { id: "border", title: language === "es" ? "Borde" : "Border", rows: pickRole("border") },
      { id: "background", title: language === "es" ? "Fondo" : "Background", rows: pickRole("background") },
      { id: "surface", title: language === "es" ? "Superficie" : "Surface", rows: pickRole("surface") },
      { id: "overlay", title: language === "es" ? "Superposición" : "Overlay", rows: pickRole("overlay") }
    ],
    [language]
  );

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">{language === "es" ? "Fundamentos" : "Foundations"}</p>
        <h1>{language === "es" ? "Tokens de rol" : "Role Tokens"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Los tokens de rol son la capa pública del sistema: nombres semánticos listos para usar en componentes. Aquí puedes ver cómo cambian entre los temas claro y oscuro."
            : "Role tokens are the public layer of the system: semantic names ready to use in components. Here you can see how they change between light and dark mode."}
        </p>
      </section>

      <div className="role-groups">
        {groups.map((group) => (
          <TokenGroup key={group.id} title={group.title} rows={group.rows} language={language} />
        ))}
      </div>
    </div>
  );
}
