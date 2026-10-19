# Bordes — Genome Evolution Design System

## Grosor
| Token | Valor | Uso |
|---|---|---|
| `border/width/0` | 0px | Elementos sin borde |
| `border/width/1` | 1px | Campos, tarjetas, divisores y estado predeterminado |
| `border/width/2` | 2px | Estado seleccionado o borde enfatizado |
| `border/width/4` | 4px | Acento fuerte, uso excepcional |
| `border/focus/width` | 2px | Exclusivamente para el anillo de foco |

## Roles de color
| Token | Valor aproximado | Uso |
|---|---|---|
| `border/default` | #c3cbc5 | Estado base |
| `border/strong` | #5f6d62 | Énfasis o separación marcada |
| `border/focus` | #339947 | Foco accesible |
| `border/disabled` | #c3cbc5 | Elementos deshabilitados |
| `border/evergreen` | #297a39 | Variante de marca primaria |
| `border/indigo` | #6b1b99 | Variante de marca secundaria |
| `border/danger` | rojo semántico | Error o acción destructiva |

## Radios semánticos
| Token | Valor | Uso |
|---|---|---|
| `radius/semantic/none` | 0px | Esquinas rectas |
| `radius/semantic/xs` | 2px | Elementos muy compactos |
| `radius/semantic/sm` | 4px | Campos e insignias pequeñas |
| `radius/semantic/md` | 8px | Tarjetas, menús y modales compactos |
| `radius/semantic/lg` | 12px | Contenedores grandes |
| `radius/semantic/xl` | 16px | Superficies destacadas |
| `radius/semantic/pill` | 32px | Etiquetas, chips, interruptores y botones redondeados |
| `radius/semantic/full` | 999px | Avatares y elementos circulares |

## Reglas de uso
- Usar `border/width/1` como valor predeterminado en casi todos los controles.
- Usar `border/focus` y `border/focus/width` solo para indicar foco.
- Usar alias semánticos de radio, nunca valores directos de `radius/scale/*`.

## Antipatrones
- No usar `border/width/2` como borde predeterminado de formularios.
- No usar `radius/semantic/full` en rectángulos anchos.
- No combinar `radius/semantic/pill` con bordes gruesos si el componente no lo define.
