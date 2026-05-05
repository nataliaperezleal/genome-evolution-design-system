# Elevation — Genome Evolution Design System

## Recetas de sombra
La elevación se compone con `position`, `blur` y `color.role.overlay.black`.

| Nivel | Receta | Uso |
|---|---|---|
| `elevation/none` | sin sombra | Canvas, superficies planas |
| `elevation/sm` | `0 1px 2px 0 overlay.black` | Hover sutil, foco leve |
| `elevation/md` | `0 2px 4px 0 overlay.black` | Cards, popovers pequeños |
| `elevation/lg` | `0 4px 8px 0 overlay.black` | Dropdowns, paneles flotantes |
| `elevation/xl` | `0 4px 16px 0 overlay.black` | Modales, overlays pesados |

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
- `Dropdown`, `Tooltip`, `Datepicker`: `elevation/lg`
- `Modal`: `elevation/xl`
- `Group` elevado o `Card` futura: `elevation/md`
- Superficies base e inputs en reposo: `elevation/none`

## Regla clave
- No usar `elevation/position/*` o `elevation/blur/*` directamente en componentes. Siempre componer una receta semántica.

## Antipatrones
- No inventar sombras con valores arbitrarios.
- No aplicar `elevation/xl` a elementos pequeños como badges o tags.
- No usar sombra para comunicar selección cuando basta con `border` o `surface`.
