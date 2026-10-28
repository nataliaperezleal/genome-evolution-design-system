# Token Usage Rules — Genome Evolution

Rules for applying design tokens consistently in Genome Evolution.

Token names and values are defined in `packages/tokens/` and the relevant documentation in `foundations/`. This file describes how to apply them. If this file and the token source disagree, the token source governs. Verify the exact names in `packages/tokens/` before using them in code.

## Core Rule

**Do not use hardcoded visual values when an official token applies.** Use the token that represents the design decision.

Avoid:

```css
color: #339947;
```

Use the token exposed by the token package. The exact CSS variable or export name depends on the generated output. Verify it before using it, for example:

```css
color: var(--<verified-token-name>);
```

Do not assume that a token name follows a particular pattern (such as `border/focus` mapped to `--border-focus`) unless the generated output confirms it.

## Token Categories

Use these categories to find the relevant token family in the token source:

- **Background:** canvas, interactive states (hovered, pressed), disabled.
- **Text:** primary, secondary, disabled, inverse.
- **Border:** default, strong, focus, and variant-specific borders (for example, Evergreen and Indigo).
- **Spacing and gap:** the spacing scale.
- **Typography:** font families, sizes, and weights.

Do not infer that a token exists because a similar name exists. Confirm it in the token source.

## Focus

Focus indicators use the focus border token. The documented focus indicator is 2 px. Verify the token name and its contrast against the background before using it.

## Spacing

Use only the spacing tokens defined in the token source. If the scale is closed, do not create intermediate values. If a required spacing value is missing, report the gap.

## Typography

Use the font family, size,