import { useMemo } from "react";

import { allTokens } from "@genome-evolution/tokens";
import type { Language } from "../i18n";

type TypographyRow = {
  tokenPrefix: string;
  label: string;
  family: string;
  weight: string;
  size: string;
  lineHeight: string;
  tracking: string;
};

function tokenValue(name: string) {
  const value = allTokens[name];
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}

function pxToRem(px: string) {
  const value = Number(String(px).replace("px", "").trim());
  if (!Number.isFinite(value)) return "";
  return `${(value / 16).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}rem`;
}

function buildRows(category: string) {
  const prefix = `typography.role.${category}.`;
  const candidates = Object.keys(allTokens).filter((key) => key.startsWith(prefix) && key.endsWith(".family"));
  const sizeIds = candidates
    .map((key) => key.slice(prefix.length, -".family".length))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return sizeIds.map((sizeId) => {
    const tokenPrefix = `${prefix}${sizeId}`;
    return {
      tokenPrefix,
      label: `${category}.${sizeId}`,
      family: tokenValue(`${tokenPrefix}.family`),
      weight: tokenValue(`${tokenPrefix}.weight`),
      size: tokenValue(`${tokenPrefix}.size`),
      lineHeight: tokenValue(`${tokenPrefix}.line-height`),
      tracking: tokenValue(`${tokenPrefix}.tracking`)
    } satisfies TypographyRow;
  });
}

function formatWeight(weight: string) {
  const map: Record<string, string> = {
    400: "Regular",
    500: "Medium",
    600: "Semibold",
    700: "Bold"
  };
  return map[weight] ?? weight;
}

function Typefaces() {
  const bodyFamily = tokenValue("typography.primitive.family.body") || "system-ui";
  const monoFamily = tokenValue("typography.primitive.family.mono") || "ui-monospace";

  return (
    <section className="foundation-section">
      <h2>Typefaces</h2>
      <p>Estas familias están definidas como primitivos y se consumen por los roles tipográficos.</p>
      <div className="typeface-grid">
        <div className="typeface-card">
          <div className="typeface-sample" style={{ fontFamily: bodyFamily }}>
            Aa
          </div>
          <p className="typeface-name">{bodyFamily}</p>
        </div>
        <div className="typeface-card">
          <div className="typeface-sample" style={{ fontFamily: monoFamily }}>
            Aa
          </div>
          <p className="typeface-name">{monoFamily}</p>
        </div>
      </div>
    </section>
  );
}

function TextFormatting() {
  return (
    <section className="foundation-section">
      <h2>Text formatting</h2>
      <p>Los estilos de texto ayudan a crear jerarquía y guiar lectura sin cambiar la intención del contenido.</p>
      <div className="formatting-grid">
        <div className="formatting-card">
          <p className="formatting-title">Regular</p>
          <p className="formatting-body">
            El estilo por defecto: úsalo para textos de lectura, descripciones y la mayoría del contenido.
          </p>
        </div>
        <div className="formatting-card">
          <p className="formatting-title">Italic</p>
          <p className="formatting-body">
            Reserva itálica para énfasis editorial o nombres. Evita usarla como único indicador de estado.
          </p>
        </div>
        <div className="formatting-card">
          <p className="formatting-title">Strong</p>
          <p className="formatting-body">
            Úsalo para resaltar palabras claves. Mantén el contraste y evita saturar el párrafo con negritas.
          </p>
        </div>
      </div>
    </section>
  );
}

function TypographyTable({ title, description, rows }: { title: string; description: string; rows: TypographyRow[] }) {
  return (
    <section className="typo-block">
      <div className="typo-block__head">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="typo-table">
        <div className="typo-table__head">
          <div>Preview</div>
          <div>Name</div>
          <div>Font formatting</div>
          <div>Font weight</div>
          <div>Font size</div>
          <div>Line height</div>
          <div>Letter spacing</div>
        </div>
        {rows.map((row) => {
          const isMono = row.family.toLowerCase().includes("mono");
          const sampleText = isMono ? "const genome = true;" : "Aa";
          return (
            <div className="typo-table__row" key={row.tokenPrefix}>
              <div className="typo-preview" style={{ fontFamily: row.family }}>
                {sampleText}
              </div>
              <div>
                <span className="token-pill">{row.tokenPrefix}</span>
              </div>
              <div className="typo-cell">{row.label.includes("strong") ? "Strong" : "Regular"}</div>
              <div className="typo-cell">{formatWeight(row.weight)}</div>
              <div className="typo-cell">
                <span className="token-value-mono">{row.size}</span>
                <span className="typo-muted"> / {pxToRem(row.size)}</span>
              </div>
              <div className="typo-cell">
                <span className="token-value-mono">{row.lineHeight}</span>
                <span className="typo-muted"> / {pxToRem(row.lineHeight)}</span>
              </div>
              <div className="typo-cell">
                <span className="token-value-mono">{row.tracking}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function TypographyFoundation({ language }: { language: Language }) {
  const blocks = useMemo(
    () => [
      {
        title: "Body",
        description: "Texto para lectura. Úsalo para descripciones, mensajes y contenido editorial.",
        rows: buildRows("body")
      },
      {
        title: "Label",
        description: "Etiquetas para inputs, botones y microcopy. Mantén tamaños pequeños y legibles.",
        rows: buildRows("label")
      },
      {
        title: "Title",
        description: "Titulares de sección y jerarquía intermedia. Ideal para cards y encabezados internos.",
        rows: buildRows("title")
      },
      {
        title: "Heading",
        description: "Titulares para páginas y áreas principales. Úsalos con moderación para no saturar jerarquía.",
        rows: buildRows("heading")
      },
      {
        title: "Display",
        description: "Titulares editoriales grandes para landing/hero. Evita usarlos en layouts densos.",
        rows: buildRows("display")
      },
      {
        title: "Button",
        description: "Texto para botones. Debe priorizar legibilidad y consistencia en estados.",
        rows: buildRows("button")
      },
      {
        title: "Code",
        description: "Texto monoespaciado para snippets y valores técnicos. Úsalo para tokens y ejemplos.",
        rows: buildRows("code")
      },
      {
        title: "Overline",
        description: "Micro jerarquía en mayúsculas para categorizar o seccionar contenido.",
        rows: buildRows("overline")
      }
    ],
    []
  );

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>Typography</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "La tipografía construye jerarquía y claridad en la interfaz. Estos tokens definen roles consistentes para lectura, UI y código, manteniendo un ritmo estable."
            : "Typography builds hierarchy and clarity. These tokens define consistent roles for reading, UI, and code, keeping a stable rhythm across sizes and line-height."}
        </p>
      </section>

      <Typefaces />
      <TextFormatting />

      <section className="foundation-section">
        <h2>Text style and tokens</h2>
        <p>Roles tipográficos listos para uso en componentes. Cada fila representa un token público.</p>
        <div className="typo-blocks">
          {blocks.map((block) => (
            <TypographyTable key={block.title} title={block.title} description={block.description} rows={block.rows} />
          ))}
        </div>
      </section>
    </div>
  );
}
