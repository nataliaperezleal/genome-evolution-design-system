# Color — Genome Evolution Design System

La referencia única de color combina las escalas primitivas y los roles semánticos del contexto Product. Los valores provienen de los exports separados de Figma en `packages/tokens/source/figma`.

## Escalas primitivas

Incluyen las familias primary, secondary, accent, error, info, success, alert, neutral y alpha; además de las escalas de marca y de producto. Cada token tiene un valor para tema claro y otro para tema oscuro.

## Roles semánticos

Los roles Product organizan los colores según su uso: texto, enlaces, iconos, bordes, fondos, superficies y superposiciones. Los roles apuntan a las escalas primitivas para mantener los valores consistentes.

Los exports de superficies incluyen estados al pasar el cursor y al presionar, pero no siempre incluyen el estado normal. En esos casos, el estado normal se completa usando el tono anterior de la misma escala.

La página **Color** presenta ambas partes juntas y en español e inglés.
