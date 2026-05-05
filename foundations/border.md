# Border — Genome Evolution Design System

## Width
| Token | Valor | Uso |
|---|---|---|
| `border/width/0` | 0px | Elementos sin borde |
| `border/width/1` | 1px | Inputs, cards, divisores, estado por defecto |
| `border/width/2` | 2px | Estado seleccionado o borde enfatizado |
| `border/width/4` | 4px | Acento fuerte, uso excepcional |
| `border/focus/width` | 2px | Focus ring exclusivamente |

## Color roles
| Token | Valor aproximado | Uso |
|---|---|---|
| `border/default` | #c3cbc5 | Estado base |
| `border/strong` | #5f6d62 | Énfasis o separación fuerte |
| `border/focus` | #339947 | Foco accesible |
| `border/disabled` | #c3cbc5 | Elementos deshabilitados |
| `border/evergreen` | #297a39 | Variante de marca primaria |
| `border/indigo` | #6b1b99 | Variante de marca secundaria |
| `border/danger` | rojo semántico | Error o acción destructiva |

## Radius semántico
| Token | Valor | Uso |
|---|---|---|
| `radius/semantic/none` | 0px | Bordes rectos |
| `radius/semantic/xs` | 2px | Elementos muy compactos |
| `radius/semantic/sm` | 4px | Inputs, badges pequeños |
| `radius/semantic/md` | 8px | Cards, dropdowns, modales compactos |
| `radius/semantic/lg` | 12px | Contenedores grandes |
| `radius/semantic/xl` | 16px | Superficies destacadas |
| `radius/semantic/pill` | 32px | Tags, chips, switch, botones rounded |
| `radius/semantic/full` | 999px | Avatar y elementos circulares |

## Reglas de uso
- Usar `border/width/1` como default en casi todos los controles.
- Usar `border/focus` y `border/focus/width` solo para foco.
- Usar aliases semánticos de radio, nunca valores raw de `radius/scale/*`.

## Antipatrones
- No usar `border/width/2` como borde por defecto de formularios.
- No usar `radius/semantic/full` en rectángulos anchos.
- No mezclar `radius/semantic/pill` con bordes pesados si no está definido por el componente.
