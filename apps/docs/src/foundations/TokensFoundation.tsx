import { useMemo } from "react";

import { themes } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type RoleTokenRow = { token: string; light: string; dark: string };

function pickRole(prefix: string) {
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

function TokenGroup({ title, rows }: { title: string; rows: RoleTokenRow[] }) {
  return (
    <section className="role-group">
      <h2>{title}</h2>
      <div className="role-table">
        <div className="role-table__head">
          <div>Token</div>
          <div>Light</div>
          <div>Dark</div>
        </div>
        {rows.map((row) => (
          <div className="role-table__row" key={row.token}>
            <div>
              <span className="token-pill">{row.token}</span>
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
      { title: "Text", rows: pickRole("color.role.text.") },
      { title: "Link", rows: pickRole("color.role.link.") },
      { title: "Icon", rows: pickRole("color.role.icon.") },
      { title: "Border", rows: pickRole("color.role.border.") },
      { title: "Background", rows: pickRole("color.role.background.") },
      { title: "Surface", rows: pickRole("color.role.surface.") },
      { title: "Overlay", rows: pickRole("color.role.overlay.") }
    ],
    []
  );

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Foundations</p>
        <h1>Role Tokens</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Los role tokens son la capa pública del sistema: nombres semánticos listos para usar en componentes. Aquí puedes ver cómo cambian entre light y dark mode."
            : "Role tokens are the public layer of the system: semantic names ready to use in components. Here you can see how they change between light and dark mode."}
        </p>
      </section>

      <div className="role-groups">
        {groups.map((group) => (
          <TokenGroup key={group.title} title={group.title} rows={group.rows} />
        ))}
      </div>
    </div>
  );
}
