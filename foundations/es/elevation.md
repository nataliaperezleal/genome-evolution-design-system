# Elevación — Genome Evolution Design System

## Recetas de sombra
La elevación se compone con `position`, `blur` y `color.role.overlay.black`.

| Nivel | Receta | Uso |
|---|---|---|
| `elevation/none` | sin sombra | Lienzo y superficies planas |
| `elevation/sm` | `0 1px 2px 0 overlay.black` | Resaltado sutil al pasar el cursor o foco leve |
| `elevation/md` | `0 2px 4px 0 overlay.black` | Tarjetas y ventanas emergentes pequeñas |
| `elevation/lg` | `0 4px 8px 0 overlay.black` | Menús desplegables y paneles flotantes |
| `elevation/xl` | `0 4px 16px 0 overlay.black` | Modales y capas prominentes |

## Tokens base
| Token | Valor |
|---|---|
| `elevation/position/0` | 0 |
| `elevation/position/1` | 1 |
| `elevation/position/2` | 2 |
| `elevation/position/4` | 4 |
| `elevation/blur/0` | 0px |
| `elevation/blur/1` | 1px |
| `elevation/blur/2` | 2px |
| `elevation/blur/4` | 4px |
| `elevation/blur/8` | 8px |
| `elevation/blur/16` | 16px |

## Uso por componente
- `Dropdown`, `Tooltip` y `Datepicker`: `elevation/lg`
- `Modal`: `elevation/xl`
- `Group` elevado o un futuro `Card`: `elevation/md`
- Superficies base y campos en reposo: `elevation/none`

## Regla clave
- No usar `elevation/position/*` o `elevation/blur/*` directamente en componentes. Siempre componer una receta semántica.

## Antipatrones
- No inventar sombras con valores arbitrarios.
- No aplicar `elevation/xl` a elementos pequeños como insignias o etiquetas.
- No usar sombras para comunicar selección cuando basta con `border` o `surface`.
