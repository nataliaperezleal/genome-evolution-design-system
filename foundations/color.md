# Color — Genome Plus DS

## Paleta de marca
| Nombre | Valor hex | Token | Uso |
|---|---|---|---|
| Evergreen (primary) | #297a39 | `border/evergreen` | Marca primaria verde |
| Evergreen bold | — | `surface/evergreen/bold` | Fondo botones primarios |
| Indigo (secondary) | #6b1b99 | `border/indigo` | Marca secundaria púrpura |
| Indigo bold | — | `surface/indigo/bold` | Fondo botones indigo |

## Tokens de superficie
| Token | Uso |
|---|---|
| `background/canvas` | #ffffff — Fondo base de componentes |
| `background/interactive/hovered` | #f7f8f7 — Hover |
| `background/interactive/pressed` | #e9ecea — Pressed |
| `background/disabled` | #f4f6f4 — Disabled |
| `background/loading` | rgba(217,222,218,0.6) — Skeleton |

## Tokens de texto
| Token | Valor hex | Uso |
|---|---|---|
| `text/primary` | #2d342f | Texto principal |
| `text/secondary` | #5f6d62 | Texto secundario |
| `text/disabled` | #849588 | Texto deshabilitado |
| `text/inverse` | blanco | Sobre fondos oscuros |
| `text/evergreen` | #297a39 | Texto en variante Evergreen |
| `text/indigo` | #6b1b99 | Texto en variante Indigo |

## Tokens de borde
| Token | Valor hex | Uso |
|---|---|---|
| `border/default` | #c3cbc5 | Borde en reposo |
| `border/strong` | #5f6d62 | Borde enfatizado |
| `border/focus` | #339947 | Anillo de foco (2px) |
| `border/disabled` | #c3cbc5 | Borde deshabilitado |
| `border/evergreen` | #297a39 | Borde Evergreen |
| `border/indigo` | #6b1b99 | Borde Indigo |

## Semánticos
| Token | Color |
|---|---|
| `surface/danger/bold` | Rojo error |
| `surface/warning/bold` | Amarillo advertencia |
| `surface/success/bold` | Verde éxito |
| `surface/info/bold` | Azul información |

## Regla especial Warning
El color Warning siempre usa `text/primary` para texto, nunca `text/warning`.
Razón: el amarillo no tiene contraste suficiente sobre fondos claros (WCAG 2.1 AA).
