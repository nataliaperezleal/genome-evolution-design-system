import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type Row = { token: string; value: string };

function pick(prefix: string) {
  const rows: Row[] = [];
  for (const [token, value] of Object.entries(allTokens)) {
    if (token.startsWith(prefix) && (typeof value === "string" || typeof value === "number")) {
      rows.push({ token, value: String(value) });
    }
  }
  rows.sort((a, b) => a.token.localeCompare(b.token, undefined, { numeric: true }));
  return rows;
}

function pxToRem(px: string) {
  const value = Number(String(px).replace("px", "").trim());
  if (!Number.isFinite(value)) return "";
  return `${(value / 16).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}rem`;
}

function extractPx(value: string) {
  const num = Number(value.replace("px", "").trim());
  return Number.isFinite(num) ? num : 0;
}

function GridPreview({ columns }: { columns: number }) {
  return (
    <div className="grid-preview" style={{ ["--grid-cols" as any]: columns }} aria-hidden="true">
      {Array.from({ length: columns }).map((_, index) => (
        <div key={index} className="grid-preview__col" />
      ))}
    </div>
  );
}

export function LayoutFoundation({ language }: { language: Language }) {
  const spacing = useMemo(() => pick("spacing.base.space."), []);
  const gaps = useMemo(() => pick("spacing.base.gap."), []);
  const layout = useMemo(() => pick("layout.base."), []);

  const columns = useMemo(() => {
    const read = (id: string) => {
      const value = allTokens[id];
      return typeof value === "number" ? value : Number(value);
    };
    return {
      desktop: read("layout.base.columns.desktop"),
      tablet: read("layout.base.columns.tablet"),
      mobile: read("layout.base.columns.mobile")
    };
  }, []);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>{language === "es" ? "Diseño de página" : "Layout"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "El diseño de página y el espaciado crean consistencia mediante márgenes, separaciones, columnas y escalas que mantienen una densidad uniforme."
            : "Layout and spacing create consistency: margins, gutters, columns, and spacing scales that keep density uniform."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Espaciado" : "Spacing"}</h2>
        <p>
          {language === "es"
            ? "Los tokens spacing.base.space.* definen la escala de espacio en píxeles. Usa spacing.base.gap.* para las separaciones entre elementos."
            : "The spacing.base.space.* tokens define the spacing scale in pixels. Use spacing.base.gap.* for gaps between elements."}
        </p>

        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>{language === "es" ? "Token" : "Token"}</div>
            <div>REM</div>
            <div>{language === "es" ? "Píxeles" : "Pixels"}</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {spacing.map((row) => {
            const px = row.value;
            const pxValue = extractPx(px);
            const rem = pxToRem(px);
            const barWidth = Math.min(220, Math.max(0, pxValue * 2.2));
            return (
              <div className="foundation-table__row foundation-table__row--layout" key={row.token}>
                <div>
                  <span className="token-pill">{row.token}</span>
                </div>
                <div className="token-value-mono">{rem}</div>
                <div className="token-value-mono">{pxValue}px</div>
                <div>
                  <div className="space-bar" style={{ width: barWidth }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="foundation-subsection">
          <h3>{language === "es" ? "Separación" : "Gap"}</h3>
          <p>
            {language === "es"
              ? "Los tokens de separación mantienen un ritmo consistente entre elementos. Úsalos en grupos, cuadrículas y listas."
              : "Gap tokens keep spacing rhythm consistent between items. Use them in stacks, grids, and groups."}
          </p>
          <div className="foundation-table">
            <div className="foundation-table__head">
              <div>Token</div>
              <div>{language === "es" ? "Token primitivo" : "Primitive token"}</div>
              <div>{language === "es" ? "Píxeles" : "Pixels"}</div>
              <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
            </div>
            {gaps.map((row) => {
              const pxValue = extractPx(row.value);
              const primitive = spacing.find((space) => extractPx(space.value) === pxValue);
              const barWidth = Math.min(180, Math.max(0, pxValue * 4));
              return (
                <div className="foundation-table__row foundation-table__row--layout" key={row.token}>
                  <div>
                    <span className="token-pill">{row.token}</span>
                  </div>
                  <div className="token-value-mono">
                    {primitive?.token ?? (language === "es" ? "Sin equivalencia" : "No equivalent")}
                  </div>
                  <div className="token-value-mono">{pxValue}px</div>
                  <div>
                    <div className="space-bar space-bar--thin" style={{ width: barWidth }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="foundation-section">
        <h2>{language === "es" ? "Cuadrícula y puntos de quiebre" : "Grid and breakpoints"}</h2>
        <p>
          {language === "es"
            ? "La cuadrícula define columnas, separaciones y márgenes para cada tamaño de pantalla."
            : "The grid defines columns, gutters, and margins per breakpoint to keep layouts consistent."}
        </p>

        <div className="grid-block">
          <p className="grid-block__title">{language === "es" ? "Escritorio" : "Desktop"}</p>
          <GridPreview columns={columns.desktop} />
        </div>
        <div className="grid-block">
          <p className="grid-block__title">Tablet</p>
          <GridPreview columns={columns.tablet} />
        </div>
        <div className="grid-block">
          <p className="grid-block__title">{language === "es" ? "Móvil" : "Mobile"}</p>
          <GridPreview columns={columns.mobile} />
        </div>

        <div className="foundation-subsection">
          <h3>{language === "es" ? "Tokens" : "Tokens"}</h3>
          <div className="foundation-table">
            <div className="foundation-table__head">
              <div>Token</div>
              <div>{language === "es" ? "Valor" : "Value"}</div>
              <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
            </div>
            {layout.map((row) => (
              <div className="foundation-table__row foundation-table__row--layout" key={row.token}>
                <div>
                  <span className="token-pill">{row.token}</span>
                </div>
                <div className="token-value-mono">{row.value}</div>
                <div>
                  <div className="layout-pill">
                    <span className="token-value-mono">{row.token.split(".").slice(-2).join(".")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
