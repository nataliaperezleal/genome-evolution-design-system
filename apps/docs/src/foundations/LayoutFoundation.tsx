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
  const spacing = useMemo(() => pick("spacing.space."), []);
  const gaps = useMemo(() => pick("spacing.gap."), []);
  const layout = useMemo(() => pick("layout."), []);

  const columns = useMemo(() => {
    const read = (id: string) => {
      const value = allTokens[id];
      return typeof value === "number" ? value : Number(value);
    };
    return {
      desktop: read("layout.columns.desktop") || 12,
      tablet: read("layout.columns.tablet") || 8,
      mobile: read("layout.columns.mobile") || 4
    };
  }, []);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Layout</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Layout y spacing ayudan a construir consistencia: márgenes, gutters, columnas y escalas de espacio que mantienen densidad uniforme."
            : "Layout and spacing create consistency: margins, gutters, columns, and spacing scales that keep density uniform."}
        </p>
      </section>

      <section className="foundation-section">
        <h2>Spacing</h2>
        <p>
          {language === "es"
            ? "El sistema usa una base de 4px (y múltiplos). Usa spacing.space.* para padding/margin y spacing.gap.* para separaciones entre elementos."
            : "The system uses a 4px base (and multiples). Use spacing.space.* for padding/margin and spacing.gap.* for gaps between elements."}
        </p>

        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>REM</div>
            <div>Pixels</div>
            <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
          </div>
          {spacing.map((row) => {
            const px = row.value;
            const pxValue = extractPx(px);
            const rem = pxToRem(px);
            const barWidth = Math.min(220, Math.max(2, pxValue * 2.2));
            return (
              <div className="foundation-table__row foundation-table__row--layout" key={row.token}>
                <div>
                  <span className="token-pill">{row.token}</span>
                </div>
                <div className="token-value-mono">{rem}</div>
                <div className="token-value-mono">{px}</div>
                <div>
                  <div className="space-bar" style={{ width: barWidth }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="foundation-subsection">
          <h3>Gap</h3>
          <p>
            {language === "es"
              ? "Tokens de gap ayudan a mantener ritmo consistente entre ítems. Úsalos en stacks, grids y grupos."
              : "Gap tokens keep spacing rhythm consistent between items. Use them in stacks, grids, and groups."}
          </p>
          <div className="foundation-table">
            <div className="foundation-table__head">
              <div>Token</div>
              <div>Primitive token</div>
              <div>Pixels</div>
              <div>{language === "es" ? "Representación visual" : "Visual representation"}</div>
            </div>
            {gaps.map((row) => {
              const pxValue = extractPx(row.value);
              const barWidth = Math.min(180, Math.max(2, pxValue * 4));
              return (
                <div className="foundation-table__row foundation-table__row--layout" key={row.token}>
                  <div>
                    <span className="token-pill">{row.token}</span>
                  </div>
                  <div className="token-value-mono">{row.token.replace("spacing.gap.", "spacing.space.")}</div>
                  <div className="token-value-mono">{row.value}</div>
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
        <h2>Grid and breakpoints</h2>
        <p>
          {language === "es"
            ? "La grilla define columnas, gutters y márgenes por breakpoint para asegurar layouts consistentes."
            : "The grid defines columns, gutters, and margins per breakpoint to keep layouts consistent."}
        </p>

        <div className="grid-block">
          <p className="grid-block__title">Desktop</p>
          <GridPreview columns={columns.desktop} />
        </div>
        <div className="grid-block">
          <p className="grid-block__title">Tablet</p>
          <GridPreview columns={columns.tablet} />
        </div>
        <div className="grid-block">
          <p className="grid-block__title">Mobile</p>
          <GridPreview columns={columns.mobile} />
        </div>

        <div className="foundation-subsection">
          <h3>Tokens</h3>
          <div className="foundation-table">
            <div className="foundation-table__head">
              <div>Token</div>
              <div>Value</div>
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
