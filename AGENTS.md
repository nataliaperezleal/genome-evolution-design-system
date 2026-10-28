# Genome Evolution — Agent Instructions

## 1. Purpose
This repository provides the design-system knowledge AI agents need to understand, select, and compose interface components consistently. It includes component documentation, design foundations, design tokens, composition patterns, AI usage rules, documentation templates to support the creation and organization of component documentation, and a React implementation.

The primary goal is to generate interfaces that follow Genome Evolution and remain faithful to its intended visual language, component behavior, and composition rules.

Use the repository to discover relevant design-system resources and guide interface generation. Apply the source-of-truth and conflict-resolution rules in Section 2 whenever information is incomplete, inconsistent, or consequential to the result.

## 2. Sources of Truth and Reliability

Use each source according to its responsibility:

- **Figma:** Defines the intended visual design, component structure, variants, properties, and visual decisions.
- **Component documentation:** Explains component purpose, anatomy, properties, variants, states, usage guidance, accessibility considerations, and known limitations.
- **`manifest.json`:** Provides a structured inventory for discovering documented components, their metadata, variants, and documentation paths.
- **Design tokens and foundations:** Provide reusable values and conventions for implementing design decisions, including color, typography, spacing, borders, and elevation.
- **Composition patterns:** Describe how components can be combined to solve recurring interface needs.
- **AI usage rules:** Provide guidance on component selection, token usage, invalid combinations, and evaluation criteria.
- **React implementation:** Defines which components, properties, types, and behaviors are available in the React library.

Figma defines the intended visual design; design tokens provide its implementable representation. Use official tokens that correspond to the design decisions.

**Reliability rule:** Before relying on information that materially affects an interface or implementation, check the relevant source and confirm that the information is consistent with the task. Do not assume that repository files, metadata, templates, or documented capabilities are automatically verified, current, or synchronized with Figma.

If sources disagree, identify the discrepancy and determine which source governs the specific decision. For example, use Figma for intended visual design and the actual implementation for available React APIs. Do not silently choose a version, invent missing information, or treat one source as authoritative for every type of decision.

If a required source is unavailable, proceed only with the information available. State the limitation when it affects the result.

## 3. Repository Structure

- **Component documentation:** `components/` (English) and `components/es/` (Spanish).
- **Component inventory:** `manifest.json`.
- **Design foundations:** `foundations/`.
- **AI usage rules:** `ai/`.
- **Composition patterns:** `patterns/`.
- **Documentation templates:** `templates/`. Contains templates intended to support component documentation. Their structure and suitability may vary, so assess the relevant template before reusing it.
- **Design tokens:** `packages/tokens/`.
- **React implementation:** `packages/react/`.
- **Documentation website:** `apps/docs/`.

Use this structure to locate resources relevant to the task. Do not assume that every directory is complete or that every file is suitable for every purpose.

## 4. Interface Generation Workflow

Follow this workflow when generating an interface:

1. **Understand the request.** Identify the page, user goal, content hierarchy, key actions, user states, and target environment.
2. **Discover existing components.** Search `manifest.json` and component documentation for components that match the required functionality.
3. **Review design guidance.** Consult relevant component documentation, composition patterns, foundations, tokens, and AI rules.
4. **Establish visual direction.** When the task requires fidelity to a specific design, inspect the relevant Figma frames or nodes if access is available. Use the design to guide component structure, variants, layout, and visual decisions.
5. **Select and compose.** Reuse existing components and suitable documented patterns. Apply official tokens and respect supported variant combinations, states, and constraints.
6. **Implement for the target environment.** Use the APIs and technologies available in the target project.
7. **Validate the result.** Check component selection, token usage, visual consistency, responsive behavior, accessibility, and relevant implementation constraints.

Do not claim to have inspected Figma if access was unavailable. If Figma is unavailable, use the relevant repository documentation and explicitly identify any resulting limitation.

Do not use documentation templates as sources of interface structure, component definitions, or visual design decisions. Use component documentation, composition patterns, design foundations, and Figma when available and relevant.

## 5. Component and Design-System Rules

- Reuse existing Genome Evolution components and suitable patterns whenever they meet the requirement.
- Create new design-system components only when the existing system does not meet the requirement and the task explicitly calls for a new component or extension.
- Use only component properties, variants, states, and combinations supported by the relevant sources.
- Do not invent component names, properties, variants, token names, or unsupported behaviors.
- Do not assume that a component's presence in Figma or `manifest.json` proves that it is implemented in React.
- Do not assume that a React implementation supports every variant or property described in the design documentation.
- Preserve each component's intended purpose, hierarchy, and interaction behavior.
- When a requirement is not covered by the existing system, explain the gap and propose the smallest appropriate solution.
- Distinguish between a documented design capability and a capability available in the target implementation.

## 6. Design Tokens and Visual Consistency

- Use official Genome Evolution tokens for color, typography, spacing, borders, elevation, and other supported visual properties.
- Consult `ai/token-usage-rules.md` and the relevant foundation documentation.
- Prefer an existing token over a hardcoded visual value when it represents the intended design decision.
- Do not invent token names, assume similarly named tokens are interchangeable, or introduce arbitrary visual values that conflict with the intended design system.
- If a required token is missing or its mapping is unclear, report the gap. Use an explicitly identified fallback only when necessary and appropriate for the target environment.
- Follow the intended layout, sizing, responsive behavior, and visual hierarchy.
- If available token definitions conflict with the intended design, report the discrepancy rather than silently changing the design or token mapping.

## 7. Handling Ambiguity and Conflicting Information

Ask for clarification when:

- The target environment is unspecified and choosing it would materially change the solution.
- Figma and the documentation disagree in a way that changes component structure, interaction, or visual outcome, and the authoritative decision cannot be established.
- A required component, property, token, or behavior is missing and no valid alternative can be determined.
- Multiple interpretations of the request would lead to substantially different interfaces.
- Proceeding would require inventing a design-system rule or making an assumption with a significant impact on the result.

If clarification is not possible, such as during an automated task, choose the safest reasonable option that best preserves existing design-system conventions. Avoid irreversible or broad changes, document the assumption, and clearly report any resulting limitations.

For minor ambiguities that do not materially affect the result, proceed with the most reasonable interpretation, state the assumption when relevant, and keep the solution easy to revise.

Do not ask for information that can be reliably resolved from available sources.

## 8. React Implementation Guidance

Use this section when the requested output must use the Genome Evolution React library.

- Import components and types through documented public entry points, such as `@genome-evolution/react`, unless the package explicitly documents another public export.
- Import types with `import type`.
- Check available component exports, properties, and types in `packages/react/src/index.ts` and the relevant package exports.
- Use documented public exports from `@genome-evolution/tokens` when consuming typed tokens.
- Do not import from internal source paths or depend on undocumented deep imports.
- Confirm that a Figma variant or documented property is supported by the actual React implementation before using it.
- If a required component or property is missing from the implementation, report the limitation. Do not modify the design-system library unless the task explicitly requests that work.

Example imports, when applicable:

```
import { Button, Modal } from "@genome-evolution/react";
import type { ButtonProps } from "@genome-evolution/react";
import "@genome-evolution/react/styles.css";
```

```
import { allTokens } from "@genome-evolution/tokens";
```

These imports are examples, not a guarantee that every named export is available in every version. Confirm the actual public API before using them.

## 9. Accessibility and Responsive Behavior

Consult the relevant component or pattern documentation and `ai/evaluation-checklist.md`.

Check the following, as applicable:

- Keyboard navigation and visible focus for interactive elements.
- Text contrast of at least 4.5:1 for normal text, following WCAG 2.1 AA.
- Accessible names for controls without visible labels.
- Correct semantic use of actions, links, and selection controls.
- State communication that does not rely on color alone.
- Responsive layouts that preserve content hierarchy and usability.
- Touch targets of at least 32 px, preferably 40 px, following this repository's guidance. The 32 px minimum is a repository guideline, not a general WCAG requirement.

Do not claim that accessibility has been fully validated unless the relevant checks were actually performed.

## 10. Verification

Choose verification steps according to the type of change.

### Interface generation

- Check component selection, supported variant combinations, and token usage.
- Compare the result with relevant design guidance and Figma when available.
- Review responsive behavior and applicable accessibility requirements.
- Report assumptions, discrepancies, and unverified details that affect the result.

### Documentation-only changes

Changes limited to descriptive Markdown files, such as component explanations or usage guidance, generally do not require a build.

- Check content accuracy against the relevant source of truth.
- Review relevant links and referenced file paths manually.
- When creating or restructuring component documentation, consult a relevant template from `templates/` if one exists. Assess whether its structure is appropriate before reusing it.
- Do not assume that existing documentation is correct simply because it is already present.

### AI instructions and structured metadata

Changes to `AGENTS.md`, files under `ai/`, or `manifest.json` can affect agent behavior and component discovery.

- Review Markdown headings, lists, links, and referenced file paths manually.
- Validate JSON syntax when modifying `manifest.json`.
- Check that referenced files exist and that component identifiers and documentation paths are consistent when relevant.
- Review the changes against the relevant source files and intended agent workflow.
- Run an existing repository-specific validator only when it is available and relevant. Do not assume a dedicated validator exists.

### Code, tokens, and implementation changes

For changes to React, tokens, or application code, run the relevant checks from the repository root:

- `npm run typecheck`: checks TypeScript types.
- `npm run build`: runs the workspace build scripts.
- `npm run smoke`: rebuilds tokens, validates CSS variables, and builds the documentation and Storybook.

If running `npm run build-storybook` separately, run `npm run build:tokens` first.

The repository does not currently provide a unit-test script. Do not claim unit tests passed unless a test suite was actually executed.

Run checks appropriate to the change and report the commands executed, their outcomes, and any checks not run. Do not run build commands unnecessarily for changes that do not affect the build.

## 11. Reporting

When completing a task:

- Summarize what was generated or changed.
- Identify the components, patterns, and tokens used when relevant.
- State assumptions and discrepancies found.
- Distinguish verified information from inferred decisions.
- Report validation performed and any remaining limitations.
- Do not claim that Figma was inspected, a build passed, or a behavior was tested unless it actually happened.
