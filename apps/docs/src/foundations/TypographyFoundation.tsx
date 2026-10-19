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

const typographyBlockTitlesEs: Record<string, string> = {
  Body: "Cuerpo",
  Label: "Etiqueta",
  Title: "Título",
  Heading: "Encabezado",
  Display: "Display",
  Button: "Botón",
  Code: "Código",
  Overline: "Antetítulo"
};

function tokenValue(name: string) {
  const value = allTokens[name];
  if (typeof value !== "string" && typeof value !== "number") {
    throw new Error(`Missing typography token "${name}".`);
  }
  return String(value);
}

function pxToRem(px: string) {
  const value = Number(String(px).replace("px", "").trim());
  if (!Number.isFinite(value)) return "";
  return `${(value / 16).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}rem`;
}

function buildRows(category: string) {
  const prefix = `typography.role.base.${category}.`;
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

function formatWeight(weight: string, language: Language) {
  const map: Record<string, { en: string; es: string }> = {
    regular: { en: "Regular", es: "Regular" },
    medium: { en: "Medium", es: "Medio" },
    semibold: { en: "Semibold", es: "Seminegrita" },
    bold: { en: "Bold", es: "Negrita" }
  };
  return map[weight]?.[language] ?? weight;
}

function Typefaces({ language }: { language: Language }) {
  const bodyFamily = tokenValue("typography.role.base.body.md.family");
  const monoFamily = tokenValue("typography.role.base.code.md.family");

  return (
    <section className="foundation-section">
      <h2>{language === "es" ? "Familias tipográficas" : "Typefaces"}</h2>
      <p>
        {language === "es"
          ? "Estas familias se leen de los roles tipográficos publicados para texto y código."
          : "These families come from the published typography roles for text and code."}
      </p>
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

function TextFormatting({ language }: { language: Language }) {
  return (
    <section className="foundation-section">
      <h2>{language === "es" ? "Estilos de texto" : "Text formatting"}</h2>
      <p>
        {language === "es"
          ? "Los estilos de texto ayudan a crear jerarquía y guiar la lectura sin cambiar la intención del contenido."
          : "Text styles create hierarchy and guide reading without changing the intent of the content."}
      </p>
      <div className="formatting-grid">
        <div className="formatting-card">
          <p className="formatting-title">{language === "es" ? "Regular" : "Regular"}</p>
          <p className="formatting-body">
            {language === "es"
              ? "Estilo predeterminado para textos de lectura, descripciones y la mayoría del contenido."
              : "The default style for body copy, descriptions, and most content."}
          </p>
        </div>
        <div className="formatting-card">
          <p className="formatting-title">{language === "es" ? "Itálica" : "Italic"}</p>
          <p className="formatting-body">
            {language === "es"
              ? "Reserva la itálica para énfasis editorial o nombres. No la uses como único indicador de estado."
              : "Reserve italics for editorial emphasis or names. Do not use them as the only indicator of state."}
          </p>
        </div>
        <div className="formatting-card">
          <p className="formatting-title">{language === "es" ? "Negrita" : "Strong"}</p>
          <p className="formatting-body">
            {language === "es"
              ? "Úsala para resaltar palabras clave. Mantén el contraste y evita saturar el párrafo con negritas."
              : "Use it to emphasize key words. Maintain contrast and avoid overloading paragraphs with bold text."}
          </p>
        </div>
      </div>
    </section>
  );
}

function TypographyTable({
  title,
  description,
  rows,
  language
}: {
  title: string;
  description: string;
  rows: TypographyRow[];
  language: Language;
}) {
  return (
    <section className="typo-block">
      <div className="typo-block__head">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="typo-table">
        <div className="typo-table__head">
          <div>{language === "es" ? "Vista previa" : "Preview"}</div>
          <div>{language === "es" ? "Nombre" : "Name"}</div>
          <div>{language === "es" ? "Estilo de fuente" : "Font formatting"}</div>
          <div>{language === "es" ? "Peso de fuente" : "Font weight"}</div>
          <div>{language === "es" ? "Tamaño de fuente" : "Font size"}</div>
          <div>{language === "es" ? "Altura de línea" : "Line height"}</div>
          <div>{language === "es" ? "Espaciado entre letras" : "Letter spacing"}</div>
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
              <div className="typo-cell">
                {row.label.includes("strong") ? (language === "es" ? "Negrita" : "Strong") : "Regular"}
              </div>
              <div className="typo-cell">{formatWeight(row.weight, language)}</div>
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
        description:
          language === "es"
            ? "Texto para lectura. Úsalo en descripciones, mensajes y contenido editorial."
            : "Reading text for descriptions, messages, and editorial content.",
        rows: buildRows("body")
      },
      {
        title: "Label",
        description:
          language === "es"
            ? "Etiquetas para campos, botones y textos breves. Mantén los tamaños pequeños y legibles."
            : "Labels for fields, buttons, and microcopy. Keep sizes small and legible.",
        rows: buildRows("label")
      },
      {
        title: "Title",
        description:
          language === "es"
            ? "Títulos de sección y jerarquía intermedia. Ideales para tarjetas y encabezados internos."
            : "Section titles and mid-level hierarchy, ideal for cards and internal headings.",
        rows: buildRows("title")
      },
      {
        title: "Heading",
        description:
          language === "es"
            ? "Encabezados para páginas y áreas principales. Úsalos con moderación para mantener una jerarquía clara."
            : "Headings for pages and primary areas. Use them sparingly to keep hierarchy clear.",
        rows: buildRows("heading")
      },
      {
        title: "Display",
        description:
          language === "es"
            ? "Titulares editoriales grandes para páginas de inicio y secciones principales. Evítalos en diseños densos."
            : "Large editorial headlines for landing pages and hero sections. Avoid them in dense layouts.",
        rows: buildRows("display")
      },
      {
        title: "Button",
        description:
          language === "es"
            ? "Texto para botones. Debe priorizar la legibilidad y mantener la consistencia entre estados."
            : "Button text that prioritizes legibility and remains consistent across states.",
        rows: buildRows("button")
      },
      {
        title: "Code",
        description:
          language === "es"
            ? "Texto monoespaciado para fragmentos de código y valores técnicos. Úsalo para tokens y ejemplos."
            : "Monospaced text for code snippets and technical values. Use it for tokens and examples.",
        rows: buildRows("code")
      },
      {
        title: "Overline",
        description:
          language === "es"
            ? "Texto breve en mayúsculas para categorizar o dividir el contenido."
            : "Short uppercase text used to categorize or section content.",
        rows: buildRows("overline")
      }
    ],
    [language]
  );

  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">Genome</p>
        <h1>{language === "es" ? "Tipografía" : "Typography"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "La tipografía construye jerarquía y claridad en la interfaz. Estos tokens definen roles consistentes para lectura, UI y código, manteniendo un ritmo estable."
            : "Typography builds hierarchy and clarity. These tokens define consistent roles for reading, UI, and code, keeping a stable rhythm across sizes and line-height."}
        </p>
      </section>

      <Typefaces language={language} />
      <TextFormatting language={language} />

      <section className="foundation-section">
        <h2>{language === "es" ? "Estilos de texto y tokens" : "Text styles and tokens"}</h2>
        <p>
          {language === "es"
            ? "Roles tipográficos listos para usarse en componentes. Cada fila representa un token público."
            : "Typography roles ready for use in components. Each row represents a public token."}
        </p>
        <div className="typo-blocks">
          {blocks.map((block) => (
            <TypographyTable
              key={block.title}
              title={language === "es" ? typographyBlockTitlesEs[block.title] ?? block.title : block.title}
              description={block.description}
              rows={block.rows}
              language={language}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
