import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type Row = {
  level: string;
  positionX: number;
  positionY: number;
  blur: string;
  colorValue: string;
  boxShadow: string;
};

function readNumber(name: string) {
  const value = allTokens[name];
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Missing or invalid elevation token "${name}".`);
  }
  return value;
}

function readString(name: string) {
  const value = allTokens[name];
  if (typeof value !== "string" && typeof value !== "number") {
    throw new Error(`Missing elevation token "${name}".`);
  }
  return String(value);
}

export function ElevationFoundation({ language }: { language: Language }) {
  const rows = useMemo<Row[]>(() => {
    const levels = [
      { id: "none", x: 0, y: 0, blur: 0 },
      { id: "xs", x: 1, y: 1, blur: 1 },
      { id: "sm", x: 2, y: 2, blur: 2 },
      { id: "md", x: 2, y: 4, blur: 4 },
      { id: "lg", x: 2, y: 4, blur: 8 },
      { id: "overlay", x: 2, y: 4, blur: 16 }
    ];

    const alphaToken = "color.primitive.light.palette.alpha.300";
    const alphaValue = readString(alphaToken);

    return levels.map((level) => {
      const positionX = readNumber(`elevation.base.position.${level.x}`);
      const positionY = readNumber(`elevation.base.position.${level.y}`);
      const blur = readNumber(`elevation.base.blur.${level.blur}`);
      const color = level.id === "none" ? "transparent" : alphaValue;
      const boxShadow = `${positionX}px ${positionY}px ${blur}px 0 ${color}`;
      return {
        level: level.id,
        positionX,
        positionY,
        blur: `${blur}px`,
        colorValue: color,
        boxShadow
      };
    });
  }, []);

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
            ? "Estas sombras son ejemplos visuales compuestos con tokens base de posición, desenfoque y color. Los nombres de nivel son etiquetas ilustrativas, no tokens de rol publicados."
            : "These shadows are visual examples composed from base position, blur, and color tokens. The level names are illustrative labels, not published role tokens."}
        </p>
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>{language === "es" ? "Nivel ilustrativo" : "Illustrative level"}</div>
            <div>{language === "es" ? "Valor" : "Value"}</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {rows.map((row) => (
            <div className="foundation-table__row" key={row.level}>
              <div>
                <span className="token-pill">{row.level}</span>
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
