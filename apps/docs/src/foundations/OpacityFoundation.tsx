import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type Row = { token: string; value: string; percent: number };

function tokenValue(name: string) {
  const value = allTokens[name];
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

export function OpacityFoundation({ language }: { language: Language }) {
  const rows = useMemo<Row[]>(() => {
    const stateKeys = ["disabled", "ghost", "overlay", "loading", "readonly", "selected"] as const;
    return stateKeys.map((key) => {
      const token = `opacity.state.${key}`;
      const raw = allTokens[token];
      const percent = typeof raw === "number" ? raw : Number(raw);
      const primitive = percent === 100 ? "opacity.primitive.100" : `opacity.primitive.${percent}`;
      return {
        token,
        value: primitive,
        percent: Number.isFinite(percent) ? percent : 0
      };
    });
  }, []);

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Opacity</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "La opacidad controla transparencia para crear jerarquía y capas. Úsala con cuidado: preferimos comunicar estados con tokens de color y usar opacidad cuando el componente completo debe atenuarse."
            : "Opacity controls transparency to create hierarchy and layering. Use it sparingly: prefer state colors, and use opacity when the whole component needs to fade."}
        </p>
      </section>

      <section className="foundation-section">
        <div className="foundation-table">
          <div className="foundation-table__head">
            <div>Token</div>
            <div>Value</div>
            <div>Visual representation</div>
          </div>
          {rows.map((row) => (
            <div className="foundation-table__row" key={row.token}>
              <div>
                <span className="token-pill">{row.token}</span>
              </div>
              <div className="token-value-mono">{row.value}</div>
              <div>
                <div
                  className="opacity-swatch"
                  style={{
                    background: "var(--ge-color-role-text-primary)",
                    opacity: Math.max(0, Math.min(1, row.percent / 100))
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="foundation-footnote">
          Primitivos disponibles: <span className="token-value-mono">{tokenValue("opacity.primitive.0")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.10")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.20")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.40")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.60")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.80")}</span>,{" "}
          <span className="token-value-mono">{tokenValue("opacity.primitive.100")}</span>.
        </p>
      </section>
    </div>
  );
}
