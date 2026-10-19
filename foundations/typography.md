# Typography — Genome Evolution Design System

Typography roles are published under `typography.role.base.<role>.<size>.<property>`. The documentation page reads these tokens directly.

## Font families

| Role token | Value | Use |
|---|---|---|
| `typography.role.base.body.md.family` | Open Sans | General interface text |
| `typography.role.base.display.md.family` | Open Sans | Large display text |
| `typography.role.base.code.md.family` | Roboto Mono | Code and technical values |

## Role examples

| Role token | Size | Weight | Line height |
|---|---:|---|---:|
| `typography.role.base.body.sm` | 14px | regular | 20px |
| `typography.role.base.label.xs` | 12px | medium | 16px |
| `typography.role.base.button.md` | 14px | semibold | 16px |
| `typography.role.base.heading.xl` | 36px | bold | 56px |
| `typography.role.base.display.md` | 48px | bold | 56px |
| `typography.role.base.code.md` | 14px | regular | 20px |

Other published roles include `body`, `label`, `title`, `heading`, `display`, `button`, `code`, and `overline`, with the sizes and properties available in the token package.

## Usage

- Prefer a role token over setting font family, size, weight, line height, or tracking separately.
- Use body roles for reading, label and button roles for controls, heading and title roles for hierarchy, and code roles for technical content.
- Keep display roles for prominent page or section titles.
