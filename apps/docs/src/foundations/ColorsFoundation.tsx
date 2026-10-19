import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
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

export function ColorsFoundation({ language }: { language: Language }) {
  const primary = useMemo(() => pick("color.primitive.light.palette.brand.primary."), []);
  const secondary = useMemo(() => pick("color.primitive.light.palette.brand.secondary."), []);
  const accent = useMemo(() => pick("color.primitive.light.palette.brand.accent."), []);
  const neutral = useMemo(() => pick("color.primitive.light.palette.neutral."), []);
  const alpha = useMemo(() => pick("color.primitive.light.palette.alpha."), []);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>{language === "es" ? "Colores" : "Colors"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "El sistema usa tokens de color para mantener la consistencia. Incluye escalas de marca, colores neutros y transparencias para capas y estados."
            : "The system uses color tokens to ensure consistency. It includes saturated brand scales, neutrals, and alpha colors for overlays and states."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Anatomía del color" : "Color anatomy"}</h2>
        <p>
          {language === "es"
            ? "Una paleta clara ayuda a comunicar intención: marca, jerarquía, estado y contraste."
            : "A clear palette communicates intent: brand, hierarchy, state, and contrast."}
        </p>

        <div className="foundation-subsection">
          <h3>{language === "es" ? "Colores saturados" : "Saturated colors"}</h3>
          <p>
            {language === "es"
              ? "Los colores saturados representan la marca y se usan como acento, énfasis y estados destacados."
              : "Saturated colors represent the brand and are used for emphasis and highlighted states."}
          </p>
          <div className="palette-columns">
            {[
              { title: language === "es" ? "Primario" : "Primary", entries: primary },
              { title: language === "es" ? "Secundario" : "Secondary", entries: secondary },
              { title: language === "es" ? "Acento" : "Accent", entries: accent }
            ].map((col) => (
              <div className="palette-column" key={col.title}>
                <p className="palette-column__title">{col.title}</p>
                <div className="swatch-stack">
                  {col.entries.map((entry) => (
                    <div key={entry.token} className="swatch-row" style={{ background: entry.value }}>
                      <span className="swatch-label">{entry.token.replace("color.primitive.light.palette.", "")}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="foundation-subsection">
          <h3>{language === "es" ? "Colores neutros" : "Neutral colors"}</h3>
          <p>
            {language === "es"
              ? "Los colores neutros se usan en fondos, texto y contenedores. Son la base de las interfaces claras y oscuras."
              : "Neutrals are used for backgrounds, text, and containers. They are the backbone of light and dark UIs."}
          </p>
          <div className="neutral-stage">
            <div className="neutral-stack">
              {neutral.map((entry) => (
                <div key={entry.token} className="neutral-swatch" style={{ background: entry.value }}>
                  <span>{entry.token.replace("color.primitive.light.palette.", "")}</span>
                  <span className="neutral-hex">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="foundation-subsection">
          <h3>{language === "es" ? "Colores con transparencia" : "Alpha colors"}</h3>
          <p>
            {language === "es"
              ? "Las transparencias permiten que las capas y los estados funcionen sobre distintas superficies."
              : "Alpha colors help overlays, scrims, and states work across multiple surfaces."}
          </p>
          <div className="alpha-stage">
            <div className="alpha-card">
              <div className="alpha-stack">
                {alpha.map((entry) => (
                  <div key={entry.token} className="alpha-swatch" style={{ background: entry.value }}>
                    <span>{entry.token.replace("color.primitive.light.palette.", "")}</span>
                    <span className="neutral-hex">{entry.value}</span>
                  </div>
                ))}
              </div>
              <div className="alpha-circle" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
