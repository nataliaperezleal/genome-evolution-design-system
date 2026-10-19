# Spacing — Genome Evolution Design System

## Spacing scale

Primitive tokens published by the `@genome-evolution/tokens` package. Values are in pixels.

| Token | Value |
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

## Gap tokens

These semantic tokens reuse values from the primitive scale.

| Token | Primitive token | Value |
|---|---|---:|
| `spacing.base.gap.none` | `spacing.base.space.0` | 0px |
| `spacing.base.gap.xxs` | `spacing.base.space.2` | 2px |
| `spacing.base.gap.xs` | `spacing.base.space.4` | 4px |
| `spacing.base.gap.sm` | `spacing.base.space.8` | 8px |
| `spacing.base.gap.md` | `spacing.base.space.12` | 12px |
| `spacing.base.gap.lg` | `spacing.base.space.16` | 16px |
| `spacing.base.gap.xl` | `spacing.base.space.24` | 24px |

## Component usage

- **Accordion MD**: horizontal padding `spacing.base.space.16`; vertical padding derived from `size/40`.
- **Accordion SM**: horizontal padding `spacing.base.space.8`; vertical padding derived from `size/32`.
- **Button MD**: horizontal padding `spacing.base.space.16` and vertical padding `spacing.base.space.8`.
- **Button SM**: horizontal padding `spacing.base.space.12` and vertical padding `spacing.base.space.4`.
- **Table header**: horizontal padding `spacing.base.space.16` and vertical padding `spacing.base.space.8`.
- **Table cell small**: horizontal padding `spacing.base.space.16` and vertical padding `spacing.base.space.4`.
- **Table cell medium**: horizontal padding `spacing.base.space.16` and vertical padding `spacing.base.space.8`.
