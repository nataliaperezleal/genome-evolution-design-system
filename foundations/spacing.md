# Spacing — Genome Evolution Design System

## Escala de espacio

Tokens primitivos publicados por el paquete `@genome-evolution/tokens`. Sus valores son píxeles.

| Token | Valor |
|---|---:|
| `spacing.base.space.0` | 0px |
| `spacing.base.space.1` | 1px |
| `spacing.base.space.2` | 2px |
| `spacing.base.space.4` | 4px |
| `spacing.base.space.8` | 8px |
| `spacing.base.space.12` | 12px |
| `spacing.base.space.16` | 16px |
| `spacing.base.space.20` | 20px |
| `spacing.base.space.24` | 24px |
| `spacing.base.space.32` | 32px |
| `spacing.base.space.40` | 40px |
| `spacing.base.space.48` | 48px |
| `spacing.base.space.64` | 64px |
| `spacing.base.space.80` | 80px |
| `spacing.base.space.96` | 96px |

## Tokens de separación (gap)

Estos tokens semánticos reutilizan valores de la escala primitiva.

| Token | Token primitivo | Valor |
|---|---|---:|
| `spacing.base.gap.none` | `spacing.base.space.0` | 0px |
| `spacing.base.gap.xxs` | `spacing.base.space.2` | 2px |
| `spacing.base.gap.xs` | `spacing.base.space.4` | 4px |
| `spacing.base.gap.sm` | `spacing.base.space.8` | 8px |
| `spacing.base.gap.md` | `spacing.base.space.12` | 12px |
| `spacing.base.gap.lg` | `spacing.base.space.16` | 16px |
| `spacing.base.gap.xl` | `spacing.base.space.24` | 24px |

## Uso por componente

- **Accordion MD**: padding horizontal `spacing.base.space.16`; padding vertical derivado de `size/40`.
- **Accordion SM**: padding horizontal `spacing.base.space.8`; padding vertical derivado de `size/32`.
- **Button MD**: padding horizontal `spacing.base.space.16` y vertical `spacing.base.space.8`.
- **Button SM**: padding horizontal `spacing.base.space.12` y vertical `spacing.base.space.4`.
- **Table header**: padding horizontal `spacing.base.space.16` y vertical `spacing.base.space.8`.
- **Table cell small**: padding horizontal `spacing.base.space.16` y vertical `spacing.base.space.4`.
- **Table cell medium**: padding horizontal `spacing.base.space.16` y vertical `spacing.base.space.8`.
