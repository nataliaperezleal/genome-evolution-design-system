# Invalid Combinations — Genome Evolution

A consolidated list of property combinations that should NOT be used.

> Property names below follow the Figma component documentation. Before using them in code, verify the actual prop names and allowed values in the relevant component's TypeScript types (`packages/react/src/index.ts` exports). Do not assume that a Figma variant or property exists in React.

This list is not exhaustive. If a combination is not listed here, verify it against the component documentation.

## Accordion

- `Show Checkbox=True` with `Show Icon=True`: the left slot has room for only one of them. Verify against the Accordion documentation.
- `State=Disabled` with `Behavior=Expanded`: a disabled accordion should not be expanded. Verify against the documentation.
- `State=Loading` with `Behavior=Expanded`: verify whether loading content should be expanded. Do not assume.

## Avatar

- `Size=16` with `Show state=true`: the status indicator does not fit at this size. Verify against the documentation.
- `Letter` visible with `Type=Icon` or `Type=Person`: the Letter variant applies to the Print type. Verify the documented fallback behavior.
- `Type=Person` without an image: use the documented fallback (Print or Icon).

## Backdrop

- Overlay color that does not contrast with the active theme (for example, `Color=White` in a Light theme). Verify the documented color-theme combinations.
- A Backdrop without a floating component above it has no purpose and should not be used alone.

## Badge

- Badge without a numeric value: Badge is intended for numeric counts. Use Tag for text.
- `Type=Line` with `Color=Inverse`: verify contrast against the documentation before using.
- Using `Color=Warning` with a text color token: verify the text token in `ai/token-usage-rules.md`.

## Button

- `Type=Primary` or `Secondary` with `Color=Default` and a state other than `Disabled`: verify against the Button documentation.
- `Type=Primary` or `Secondary` with `State=Disabled` and a color other than `Default`: verify against the documentation.
- `Type=Tertiary` with `Color=Evergreen` or `Indigo`: only `Color=Default` is documented for this type.
- `Type=Tertiary` with `State=Disabled`: this state is not documented for this type.
- `Type=Danger`, `Info`, `Success`, or `Warning` with a color other than `Default`: only `Default` is documented.
- `Type=Danger`, `Info`, `Success`, or `Warning` with `State=Disabled`: this state is not documented for this type.

## Checkbox

- `Color=Disabled` with `State=Hovered`, `Pressed`, or `Focused`: a disabled control does not respond to interaction.
- `Type=Default` in Figma means an empty (unselected) checkbox. It does not mean "selected."
- `Show Label=False` without an accessible name: provide `aria-label` or `aria-labelledby` to meet WCAG requirements.