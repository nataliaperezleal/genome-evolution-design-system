import { useEffect, useMemo, useState } from "react";

import type { Language } from "../i18n";

type TokenRow = {
  cssVar: string;
  label: string;
  kind: "radius" | "width" | "color";
};

function readCssVar(varName: string) {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

export function BorderFoundation({ theme, language }: { theme: string; language: Language }) {
  const rows = useMemo<TokenRow[]>(
    () => [
      { cssVar: "--ge-radius-semantic-none", label: "None", kind: "radius" },
      { cssVar: "--ge-radius-semantic-xs", label: "XS", kind: "radius" },
      { cssVar: "--ge-radius-semantic-sm", label: "SM", kind: "radius" },
      { cssVar: "--ge-radius-semantic-md", label: "MD", kind: "radius" },
      { cssVar: "--ge-radius-semantic-lg", label: "LG", kind: "radius" },
      { cssVar: "--ge-radius-semantic-xl", label: "XL", kind: "radius" },
      { cssVar: "--ge-radius-semantic-pill", label: "Pill", kind: "radius" },
      { cssVar: "--ge-radius-semantic-full", label: "Full", kind: "radius" },
      { cssVar: "--ge-border-width-0", label: "0", kind: "width" },
      { cssVar: "--ge-border-width-1", label: "1", kind: "width" },
      { cssVar: "--ge-border-width-2", label: "2", kind: "width" },
      { cssVar: "--ge-border-width-4", label: "4", kind: "width" },
      { cssVar: "--ge-border-focus-width", label: "Focus", kind: "width" },
      { cssVar: "--ge-color-role-border-default", label: "Default", kind: "color" },
      { cssVar: "--ge-color-role-border-subtle", label: "Subtle", kind: "color" },
      { cssVar: "--ge-color-role-border-strong", label: "Strong", kind: "color" },
      { cssVar: "--ge-color-role-border-disabled", label: "Disabled", kind: "color" },
      { cssVar: "--ge-color-role-border-inverse", label: "Inverse", kind: "color" },
      { cssVar: "--ge-color-role-border-focus", label: "Focus", kind: "color" },
      { cssVar: "--ge-color-role-border-selected", label: "Selected", kind: "color" },
      { cssVar: "--ge-color-role-border-evergreen", label: "Evergreen", kind: "color" },
      { cssVar: "--ge-color-role-border-indigo", label: "Indigo", kind: "color" },
      { cssVar: "--ge-color-role-border-danger", label: "Danger", kind: "color" },
      { cssVar: "--ge-color-role-border-warning", label: "Warning", kind: "color" },
      { cssVar: "--ge-color-role-border-success", label: "Success", kind: "color" },
      { cssVar: "--ge-color-role-border-info", label: "Info", kind: "color" }
    ],
    []
  );

  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const next: Record<string, string> = {};
    for (const row of rows) {
      next[row.cssVar] = readCssVar(row.cssVar);
    }
    setValues(next);
  }, [rows, theme]);

  const radiusRows = rows.filter((row) => row.kind === "radius");
  const widthRows = rows.filter((row) => row.kind === "width");
  const colorRows = rows.filter((row) => row.kind === "color");

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Border</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Los bordes ayudan a suavizar contornos y separar elementos sin recargar la interfaz. Usamos tokens semánticos para radio, grosor y color para asegurar consistencia."
            : "Borders soften edges and separate elements without adding noise. We use semantic tokens for radius, width, and color to keep components consistent."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Border radius" : "Border radius"}</h2>
        <p>
          {language === "es"
            ? "Redondea esquinas para una apariencia más amable y moderna. Usa aliases semánticos, no valores de escala directos."
            : "Rounds corners for a friendlier, more modern look. Use semantic aliases, not raw scale values."}
        </p>
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>Value</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {radiusRows.map((row) => (
            <div className="foundation-table__row" key={row.cssVar}>
              <div>
                <span className="token-pill">{row.cssVar}</span>
              </div>
              <div className="token-value-mono">{values[row.cssVar] || "—"}</div>
              <div>
                <div className="visual-box" style={{ borderRadius: `var(${row.cssVar})` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Border width" : "Border width"}</h2>
        <p>
          {language === "es"
            ? "Define jerarquía visual. Mantén el default en 1px y reserva el foco para su token dedicado."
            : "Controls visual hierarchy. Keep the default at 1px and reserve focus for its dedicated token."}
        </p>
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>Value</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {widthRows.map((row) => {
            const borderColor =
              row.cssVar === "--ge-border-focus-width"
                ? "var(--ge-color-role-border-focus)"
                : "var(--ge-color-role-border-default)";
            const widthValue =
              row.cssVar === "--ge-border-focus-width" ? "var(--ge-border-focus-width)" : `var(${row.cssVar})`;
            return (
              <div className="foundation-table__row" key={row.cssVar}>
                <div>
                  <span className="token-pill">{row.cssVar}</span>
                </div>
                <div className="token-value-mono">{values[row.cssVar] || "—"}</div>
                <div>
                  <div className="visual-box" style={{ border: `${widthValue} solid ${borderColor}` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Border colors" : "Border colors"}</h2>
        <p>
          {language === "es"
            ? "Aplica estos tokens a propiedades de borde/outline/ring (no a fills) para comunicar estado y jerarquía."
            : "Apply these tokens to border/outline/ring properties (not fills) to communicate state and hierarchy."}
        </p>
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>Value</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {colorRows.map((row) => (
            <div className="foundation-table__row" key={row.cssVar}>
              <div>
                <span className="token-pill">{row.cssVar}</span>
              </div>
              <div className="token-value-mono">{values[row.cssVar] || "—"}</div>
              <div className="foundation-color-visual">
                <div className="color-swatch" style={{ background: `var(${row.cssVar})` }} aria-hidden="true" />
                <div className="visual-box" style={{ border: `3px solid var(${row.cssVar})`, width: 86 }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
