import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type Row = {
  token: string;
  positionX: number;
  positionY: number;
  blur: string;
  colorToken: string;
  colorValue: string;
  boxShadow: string;
};

function readNumber(name: string) {
  const value = allTokens[name];
  if (typeof value === "number") return value;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function readString(name: string) {
  const value = allTokens[name];
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

export function ElevationFoundation({ theme, language }: { theme: string; language: Language }) {
  const rows = useMemo<Row[]>(() => {
    const levels = [
      { id: "none", position: "elevation.position.0", blur: "elevation.blur.4" },
      { id: "xs", position: "elevation.position.1", blur: "elevation.blur.1" },
      { id: "sm", position: "elevation.position.2", blur: "elevation.blur.2" },
      { id: "md", position: "elevation.position.2", blur: "elevation.blur.4" },
      { id: "lg", position: "elevation.position.2", blur: "elevation.blur.8" },
      { id: "overlay", position: "elevation.position.2", blur: "elevation.blur.16" }
    ];

    const alphaToken = theme === "dark" ? "color.primitive.dark.palette.alpha.300" : "color.primitive.light.palette.alpha.300";
    const alphaValue = readString(alphaToken) || "rgba(0,0,0,0.12)";

    return levels.map((level) => {
      const position = readNumber(level.position);
      const blur = readString(level.blur);
      const boxShadow = `0 ${position}px ${blur} 0 ${alphaValue}`;
      return {
        token: `elevation.${level.id}`,
        positionX: 0,
        positionY: position,
        blur,
        colorToken: alphaToken.replace("color.primitive.", "palette/").replace(/\./g, "/"),
        colorValue: alphaValue,
        boxShadow
      };
    });
  }, [theme]);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>{language === "es" ? "Elevación" : "Elevation"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "La elevación crea profundidad visual mediante sombras. Úsala para establecer jerarquía, separar capas y destacar paneles y elementos superpuestos."
            : "Elevation defines visual depth through shadows. Use it to establish hierarchy, separate layers, and improve affordance in overlays and raised containers."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Sombras" : "Shadows"}</h2>
        <p>
          {language === "es"
            ? "Cada nivel combina posición y desenfoque. El color proviene de la paleta con transparencia para mantener un efecto sutil."
            : "Levels combine position and blur. Color comes from the alpha palette to stay subtle."}
        </p>
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>{language === "es" ? "Valor" : "Value"}</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {rows.map((row) => (
            <div className="foundation-table__row" key={row.token}>
              <div>
                <span className="token-pill">{row.token}</span>
              </div>
              <div className="elevation-meta">
                <div>
                  {language === "es" ? "Posición" : "Position"}: X={row.positionX} Y={row.positionY}
                </div>
                <div>{language === "es" ? "Desenfoque" : "Blur"}: {row.blur}</div>
                <div>
                  {language === "es" ? "Color" : "Color"}: <span className="token-value-mono">{row.colorValue}</span>
                </div>
              </div>
              <div>
                <div className="elevation-preview" style={{ boxShadow: row.boxShadow }} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
