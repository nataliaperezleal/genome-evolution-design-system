import { useMemo } from "react";

import { allTokens, themes } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type PaletteEntry = { token: string; value: string };

function pick(prefix: string) {
  const entries: PaletteEntry[] = [];
  for (const [token, value] of Object.entries(allTokens)) {
    if (token.startsWith(prefix) && typeof value === "string") {
      entries.push({ token, value });
    }
  }
  entries.sort((a, b) => a.token.localeCompare(b.token, undefined, { numeric: true }));
  return entries;
}

function pickRole(prefix: string) {
  const entries: PaletteEntry[] = [];
  for (const [token, value] of Object.entries(themes.light)) {
    if (token.startsWith(prefix) && typeof value === "string") {
      entries.push({ token, value });
    }
  }
  entries.sort((a, b) => a.token.localeCompare(b.token));
  return entries;
}

function SwatchTable({ title, entries }: { title: string; entries: PaletteEntry[] }) {
  return (
    <div className="palette-table">
      <p className="palette-table__title">{title}</p>
      <div className="palette-table__grid">
        {entries.map((entry) => (
          <div key={entry.token} className="palette-table__row" style={{ background: entry.value }}>
            <span className="palette-table__token">{entry.token.replace("color.primitive.light.palette.", "")}</span>
            <span className="palette-table__hex">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PaletteFoundation({ language }: { language: Language }) {
  const primary = useMemo(() => pick("color.primitive.light.palette.brand.primary."), []);
  const secondary = useMemo(() => pick("color.primitive.light.palette.brand.secondary."), []);
  const accent = useMemo(() => pick("color.primitive.light.palette.brand.accent."), []);
  const neutral = useMemo(() => pick("color.primitive.light.palette.neutral."), []);
  const alpha = useMemo(() => pick("color.primitive.light.palette.alpha."), []);

  const semanticCards = useMemo(
    () => [
      {
        title: "Error",
        items: [
          { token: "color.role.surface.danger.subtle", value: String(themes.light["color.role.surface.danger.subtle"]) },
          { token: "color.role.surface.danger.bold", value: String(themes.light["color.role.surface.danger.bold"]) },
          { token: "color.role.text.danger", value: String(themes.light["color.role.text.danger"]) },
          { token: "color.role.border.danger", value: String(themes.light["color.role.border.danger"]) }
        ].filter((item) => item.value && item.value !== "undefined")
      },
      {
        title: "Info",
        items: [
          { token: "color.role.surface.info.subtle", value: String(themes.light["color.role.surface.info.subtle"]) },
          { token: "color.role.surface.info.bold", value: String(themes.light["color.role.surface.info.bold"]) },
          { token: "color.role.text.info", value: String(themes.light["color.role.text.info"]) },
          { token: "color.role.border.info", value: String(themes.light["color.role.border.info"]) }
        ].filter((item) => item.value && item.value !== "undefined")
      },
      {
        title: "Success",
        items: [
          { token: "color.role.surface.success.subtle", value: String(themes.light["color.role.surface.success.subtle"]) },
          { token: "color.role.surface.success.bold", value: String(themes.light["color.role.surface.success.bold"]) },
          { token: "color.role.text.success", value: String(themes.light["color.role.text.success"]) },
          { token: "color.role.border.success", value: String(themes.light["color.role.border.success"]) }
        ].filter((item) => item.value && item.value !== "undefined")
      },
      {
        title: "Alert",
        items: [
          { token: "color.role.surface.warning.subtle", value: String(themes.light["color.role.surface.warning.subtle"]) },
          { token: "color.role.surface.warning.bold", value: String(themes.light["color.role.surface.warning.bold"]) },
          { token: "color.role.text.warning", value: String(themes.light["color.role.text.warning"]) },
          { token: "color.role.border.warning", value: String(themes.light["color.role.border.warning"]) }
        ].filter((item) => item.value && item.value !== "undefined")
      }
    ],
    []
  );

  const overlay = useMemo(() => pickRole("color.role.overlay."), []);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Primitive tokens</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "La paleta es una selección de colores que trabajan juntos para crear consistencia. Estas escalas son el punto de partida para construir tokens semánticos."
            : "The palette is a set of colors that work together to create consistency. These scales are the starting point for semantic tokens."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>The palette</h2>
        <div className="palette-columns palette-columns--table">
          <SwatchTable title="Main" entries={primary} />
          <SwatchTable title="Secondary" entries={secondary} />
          <SwatchTable title="Accent" entries={accent} />
        </div>
      </section>

      <section className="foundation-section">
        <h2>Semantics</h2>
        <p>
          {language === "es"
            ? "Los tokens semánticos traducen la paleta a intención: estados, feedback y jerarquía."
            : "Semantic tokens translate the palette into intent: states, feedback, and hierarchy."}
        </p>
        <div className="semantics-grid">
          {semanticCards.map((card) => (
            <div className="semantics-card" key={card.title}>
              <p className="semantics-card__title">{card.title}</p>
              <div className="semantics-card__list">
                {card.items.map((item) => (
                  <div key={item.token} className="semantics-row" style={{ background: item.value }}>
                    <span className="semantics-row__token">{item.token.replace("color.role.", "")}</span>
                    <span className="semantics-row__hex">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="foundation-section">
        <h2>Neutrals</h2>
        <div className="palette-wide">
          {neutral.map((entry) => (
            <div key={entry.token} className="palette-wide__row" style={{ background: entry.value }}>
              <span>{entry.token.replace("color.primitive.light.palette.", "")}</span>
              <span className="palette-table__hex">{entry.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="foundation-section">
        <h2>Alpha colors</h2>
        <div className="palette-wide">
          {alpha.map((entry) => (
            <div key={entry.token} className="palette-wide__row" style={{ background: entry.value }}>
              <span>{entry.token.replace("color.primitive.light.palette.", "")}</span>
              <span className="palette-table__hex">{entry.value}</span>
            </div>
          ))}
        </div>
        {overlay.length ? (
          <div className="overlay-note">
            <p className="eyebrow">Overlay roles</p>
            <div className="overlay-pills">
              {overlay.map((entry) => (
                <div key={entry.token} className="overlay-pill">
                  <span className="token-pill">{entry.token.replace("color.role.", "")}</span>
                  <span className="token-value-mono">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
