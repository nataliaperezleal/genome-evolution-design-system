# Tipografía — Genome Evolution Design System

Los roles tipográficos se publican con la estructura `typography.role.base.<rol>.<tamaño>.<propiedad>`. La página de documentación lee directamente estos tokens.

## Familias tipográficas

| Token de rol | Valor | Uso |
|---|---|---|
| `typography.role.base.body.md.family` | Open Sans | Texto general de la interfaz |
| `typography.role.base.heading.md.family` | Poppins | Encabezados |
| `typography.role.base.display.md.family` | Poppins | Texto de exhibición |
| `typography.role.base.code.md.family` | Roboto Mono | Código y valores técnicos |

## Ejemplos de roles

| Token de rol | Tamaño | Peso | Altura de línea |
|---|---:|---|---:|
| `typography.role.base.body.sm` | 14px | regular | 20px |
| `typography.role.base.label.xs` | 12px | medium | 16px |
| `typography.role.base.button.md` | 14px | medium | 16px |
| `typography.role.base.heading.xl` | 36px | bold | 56px |
| `typography.role.base.display.md` | 48px | bold | 56px |
| `typography.role.base.code.md` | 14px | regular | 20px |

Los pesos se muestran por nombre. En CSS, `regular` es 400, `medium` es 500, `semibold` es 600 y `bold` es 700.

Otros roles publicados son `body`, `label`, `title`, `heading`, `display`, `button`, `code` y `overline`, con los tamaños y propiedades disponibles en el paquete de tokens.

## Uso

- Prefiere un token de rol en lugar de definir por separado la familia, el tamaño, el peso, la altura de línea o el espaciado entre letras.
- Usa los roles de cuerpo para lectura; los de etiqueta y botón para controles; los de encabezado y título para jerarquía; y los de código para contenido técnico.
- Reserva los roles de exhibición para títulos destacados de página o sección.
