# Prompt Template — Genome Evolution

A template for asking an AI agent to generate UI with the Genome Evolution design system.

Paths are relative to the repository root. `AGENTS.md` is the primary reference for workflow and source-of-truth rules.

## Base Prompt for UI Generation

```
Using the Genome Evolution design system documented in this repository:

1. Read AGENTS.md for the workflow and source-of-truth rules.
2. Read manifest.json to identify the documented components.
3. If they exist, read ai/component-selection-rules.md and ai/invalid-combinations.md.
4. Read the documentation for each relevant component in components/ to confirm its documented properties and states.
5. If the output is code, verify component exports and props in packages/react/src/index.ts before using them.

Task: [describe the UI to generate]

Target environment: [React, HTML, Figma, or other. If unspecified, ask before generating code.]

Constraints:
- Use only components that are documented in manifest.json.
- Use official design tokens. Do not hardcode color, spacing, or typography values.
- Do not invent component names, properties, variants, or token names.
- Specify the required properties of each component with documented values.
- Do not use invalid property combinations.
- If Figma is available and the task requires visual fidelity, inspect the relevant frame. Do not claim to have inspected Figma otherwise.

Report at the end:
- Components and tokens used.
- Assumptions made.
- Discrepancies between sources.
- Checks performed and limitations.
```

## Example Query

```
Which component should I use for a selection where only one option can be active at a time?

Expected answer: Radio Button (not Checkbox or Switch). In React, the component is RadioButtonGroup.
See: ai/component-selection-rules.md, "Selection and Forms", if the file exists.
```