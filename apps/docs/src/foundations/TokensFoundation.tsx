import type { Language } from "../i18n";

export function TokensFoundation({ language }: { language: Language }) {
  return (
    <div className="foundation-page">
      <section className="foundation-hero">
        <p className="eyebrow">{language === "es" ? "Fundamentos" : "Foundations"}</p>
        <h1>{language === "es" ? "Tokens de rol" : "Role Tokens"}</h1>
        <p className="foundation-lead">
          {language === "es"
            ? "Los roles de color tienen una referencia visual única en la página Color, con sus valores para los temas claro y oscuro."
            : "Color roles have one visual reference on the Color page, with values for both light and dark themes."}
        </p>
      </section>

      <section className="foundation-section">
        <p>
          {language === "es"
            ? "Para evitar mostrar los mismos roles en dos lugares, esta página ya no duplica los tokens de color."
            : "To avoid listing the same roles in two places, this page no longer duplicates color tokens."}{" "}
          <a href="#foundations-color">
            {language === "es" ? "Consulta todos los colores en Color." : "See all colors on the Color page."}
          </a>
        </p>
      </section>
    </div>
  );
}
