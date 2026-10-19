# Color — Genome Evolution Design System

## Paleta de marca
| Nombre | Valor hex | Token | Uso |
|---|---|---|---|
| Evergreen (primario) | #297a39 | `border/evergreen` | Color verde principal de marca |
| Evergreen intenso | — | `surface/evergreen/bold` | Fondo de botones primarios |
| Indigo (secundario) | #6b1b99 | `border/indigo` | Color púrpura secundario de marca |
| Indigo intenso | — | `surface/indigo/bold` | Fondo de botones secundarios |

## Tokens de superficie
| Token | Uso |
|---|---|
| `background/canvas` | #ffffff — Fondo base de los componentes |
| `background/interactive/hovered` | #f7f8f7 — Estado al pasar el cursor |
| `background/interactive/pressed` | #e9ecea — Estado presionado |
| `background/disabled` | #f4f6f4 — Estado deshabilitado |
| `background/loading` | rgba(217,222,218,0.6) — Indicador de carga |

## Tokens de texto
| Token | Valor hex | Uso |
|---|---|---|
| `text/primary` | #2d342f | Texto principal |
| `text/secondary` | #5f6d62 | Texto secundario |
| `text/disabled` | #849588 | Texto deshabilitado |
| `text/inverse` | blanco | Texto sobre fondos oscuros |
| `text/evergreen` | #297a39 | Texto en la variante Evergreen |
| `text/indigo` | #6b1b99 | Texto en la variante Indigo |

## Tokens de borde
| Token | Valor hex | Uso |
|---|---|---|
| `border/default` | #c3cbc5 | Borde en estado normal |
| `border/strong` | #5f6d62 | Borde enfatizado |
| `border/focus` | #339947 | Anillo de foco de 2px |
| `border/disabled` | #c3cbc5 | Borde de elementos deshabilitados |
| `border/evergreen` | #297a39 | Borde Evergreen |
| `border/indigo` | #6b1b99 | Borde Indigo |

## Colores semánticos
| Token | Color |
|---|---|
| `surface/danger/bold` | Rojo de error |
| `surface/warning/bold` | Amarillo de advertencia |
| `surface/success/bold` | Verde de éxito |
| `surface/info/bold` | Azul informativo |

## Regla especial para Warning

El color Warning siempre usa `text/primary` para el texto, nunca `text/warning`.
Razón: el amarillo no tiene contraste suficiente sobre fondos claros (WCAG 2.1 AA).
