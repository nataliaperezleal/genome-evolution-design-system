# Token Usage Rules — Genome Evolution

Rules for applying design tokens consistently in Genome Evolution.

## Sources and Consumption

- **Design source:** `packages/tokens/source/figma/` contains the Figma variable exports.
- **Generated output:** `packages/tokens/dist/` is built from the design source by `packages/tokens/scripts/build.mjs`. Code consumes the generated CSS variables and the typed exports from `@genome-evolution/tokens`.
- Do not edit `dist/` by hand.

For design decisions, the Figma source governs. For names used in code, the generated output in `dist/` is authoritative. If the two disagree, report the discrepancy as described in `AGENTS.md` section 2. Do not choose one silently.

Verify exact CSS variable names in `packages/tokens/dist/variables.css` before using them.

## Core Rule

Do not hardcode visual values when an official token applies. Use the generated CSS variable:

```css
color: var(--ge-color-role-text-primary);
```

Do not invent token names, and do not assume that similar names are interchangeable.

## Color Roles

Color role tokens are defined per product context in `packages/tokens/source/figma/Color_Role/`. The contexts are AI, Apps, Automation, Modeler, Product, and Studio. Values differ between contexts.

The generated CSS variables (`--ge-color-role-*`) do not include a context in their names. Do not assume which product context they resolve to. If a task requires a specific product context, ask for it, as described in `AGENTS.md` section 7.

Do not copy color values from this document. Read values from the generated output.

The theme controls light and dark values. Variable names do not include `light` or `dark`.

## Warning Colors

Whether `text/warning` has enough contrast depends on the context. Check the value in the selected context and the component documentation before using it for text.

## Focus

- **Focus color:** `--ge-color-role-border-focus`. Its value depends on the theme.
- **Focus width:** `--ge-border-focus-width`, which is 2px.

Verify the contrast of the focus color against the adjacent background before using it.

## Spacing

Spacing tokens are exposed as CSS variables in two groups.

Scale, in pixels: `--ge-spacing-space-{n}`, where `n` is one of 0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, or 96.

Gap aliases: `--ge-spacing-gap-{name}`, where `name` is one of:

| Variable | Resolves to |
|---|---|
| `--ge-spacing-gap-none` | `space-0` (0px) |
| `--ge-spacing-gap-xxxs` | `space-2` (2px) |
| `--ge-spacing-gap-xxs` | `space-4` (4px) |
| `--ge-spacing-gap-xs` | `space-6` (6px) |
| `--ge-spacing-gap-sm` | `space-8` (8px) |
| `--ge-spacing-gap-md` | `space-12` (12px) |
| `--ge-spacing-gap-lg` | `space-16` (16px) |
| `--ge-spacing-gap-xl` | `space-24` (24px) |
| `--ge-spacing-gap-xxl` | `space-40` (40px) |

Example:

```css
padding: var(--ge-spacing-gap-sm);
```

Use only values from this scale. Do not create intermediate values. If a required value is missing, report the gap.

## Typography

Components use role tokens. Each role token holds its own value. Do not replace a role token with a primitive token when a role applies.

### Role tokens

Pattern: `--ge-typography-role-{role}-{size}-{property}`

| Role | Sizes |
|---|---|
| `body` | lg, md, sm, xs, xxs |
| `button` | lg, md, sm |
| `code` | lg, md, sm |
| `display` | md, sm |
| `heading` | xl, lg, md, sm |
| `label` | lg, md, sm, xs |
| `overline` | md |
| `title` | lg, md, sm |

Properties: `family`, `size`, `weight`, `line-height`, `tracking`.

Only the `body` roles have a strong variant, which inserts `strong` before the property, for example `--ge-typography-role-body-md-strong-weight`. The other roles do not have one.

Example:

```css
font-family: var(--ge-typography-role-body-md-family);
font-size: var(--ge-typography-role-body-md-size);
font-weight: var(--ge-typography-role-body-md-weight);
line-height: var(--ge-typography-role-body-md-line-height);
letter-spacing: var(--ge-typography-role-body-md-tracking);
```

Role tokens use `tracking`. Primitive tokens use `letter-spacing`. Do not mix the two names.

Do not copy typography values from this document. Read them from `packages/tokens/dist/variables.css`.

### Primitive tokens

Primitive tokens are not referenced by role tokens. Use them only when defining a new role or when no role applies, and report that case.

- Families: `--ge-typography-primitive-family-{body|brand|mono}`.
- Sizes: `--ge-typography-primitive-size-{10|11|12|14|16|18|20|24}`. The `brand` group also defines `size-30`, `size-36`, `size-48`, and `size-96`.
- Weights: `--ge-typography-primitive-weight-{regular|semibold|bold}`.
- Letter spacing: `--ge-typography-primitive-letter-spacing-{normal|tight|wide}`.

The `brand` group repeats families, sizes, weights, and letter spacing with a `brand` prefix, for example `--ge-typography-primitive-brand-size-12`. Do not choose between the base and brand groups without a documented rule in `foundations/typography.md`. If none exists, ask.

### Role tokens

[sin cambios: tabla, propiedades, variante strong, ejemplo y nota de tracking]

### Primitive tokens

Primitive tokens are not referenced by role tokens. Use them only when defining a new role or when no role applies, and report that case.

- Families: `--ge-typography-primitive-family-{body|brand|mono}`.
- Sizes: `--ge-typography-primitive-size-{10|11|12|14|16|18|20|24}`. The `brand` group also defines `size-30`, `size-36`, `size-48`, and `size-96`.
- Weights: `--ge-typography-primitive-weight-{regular|semibold|bold}`.
- Letter spacing: `--ge-typography-primitive-letter-spacing-{normal|tight|wide}`.

The `brand` group repeats families, sizes, weights, and letter spacing with a `brand` prefix, for example `--ge-typography-primitive-brand-size-12`. Do not choose between the base and brand groups without a documented rule in `foundations/typography.md`. If none exists, ask.

### Role tokens

Pattern: `--ge-typography-role-{role}-{size}-{property}`

| Role | Sizes |
|---|---|
| `body` | lg, md, sm, xs, xxs |
| `button` | lg, md, sm |
| `code` | lg, md, sm |
| `display` | md, sm |
| `heading` | xl, lg, md, sm |
| `label` | lg, md, sm, xs |
| `overline` | md |
| `title` | lg, md, sm |

Properties: `family`, `size`, `weight`, `line-height`, `tracking`.

Only the `body` roles have a strong variant, which inserts `strong` before the property, for example `--ge-typography-role-body-md-strong-weight`. The other roles do not have one.

Example:

```css
font-family: var(--ge-typography-role-body-md-family);
font-size: var(--ge-typography-role-body-md-size);
font-weight: var(--ge-typography-role-body-md-weight);
line-height: var(--ge-typography-role-body-md-line-height);
letter-spacing: var(--ge-typography-role-body-md-tracking);
```

Role tokens use `tracking`. Primitive tokens use `letter-spacing`. Do not mix the two names.

Do not copy typography values from this document. Read them from `packages/tokens/dist/variables.css`.

### Primitive tokens

Use primitives only when defining a new role or when no role applies, and report that case.

- Families: `--ge-typography-primitive-family-{body|brand|mono}`.
- Sizes: `--ge-typography-primitive-size-{10|11|12|14|16|18|20|24}`. The `brand` group also defines `size-30`, `size-36`, `size-48`, and `size-96`.
- Weights: `--ge-typography-primitive-weight-{regular|semibold|bold}`.
- Letter spacing: `--ge-typography-primitive-letter-spacing-{normal|tight|wide}`.

The `brand` group repeats families, sizes, weights, and letter spacing with a `brand` prefix, for example `--ge-typography-primitive-brand-size-12`. Do not choose between the base and brand groups without a documented rule in `foundations/typography.md`. If none exists, ask.

## Token Categories

Use these categories to find the relevant token family in the design source:

- **Background:** canvas, disabled, selected, readonly, loading, and interactive states.
- **Text:** primary, secondary, tertiary, disabled, inverse, and state or variant text roles.
- **Border:** default, subtle, strong, disabled, inverse, focus, state or variant borders, and interactive states.
- **Spacing and gap:** the spacing scale and its aliases.
- **Typography:** font families, sizes, weights, line heights, and tracking.

Do not infer that a token exists because a similar name exists. Confirm it in the design source and in the generated output.