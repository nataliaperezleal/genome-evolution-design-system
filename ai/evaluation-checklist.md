# Evaluation Checklist — Genome Evolution

Checklist for evaluating whether an AI-generated UI proposal is correct and consistent with the design system.

Use this checklist after the source-of-truth and verification steps in `AGENTS.md`. Passing these checks does not replace verifying the component, token, or prop against the relevant source.

## General Checklist

- [ ] All components used are documented in `manifest.json`.
- [ ] If the output is code, all components and props are confirmed in `packages/react/src/index.ts` or the relevant package exports.
- [ ] No hardcoded color, spacing, or typography values are used when an official token applies.
- [ ] No invalid property combinations are used (see `ai/invalid-combinations.md` if it exists).
- [ ] Required properties of each component are specified, and their values are documented.
- [ ] The selected component is the most specific one for the use case (see `ai/component-selection-rules.md`).
- [ ] Interactive states are handled according to each component's documented states (for example, hover, pressed, focused, disabled).
- [ ] Text follows the content guidance of the component.
- [ ] Focus tokens are used from the official token set, not from hardcoded values. Verify the token name in `ai/token-usage-rules.md` or `packages/tokens/`.

## Accessibility Checklist

Follow `AGENTS.md` section 9 and `ai/evaluation-checklist.md` for the full list.

- [ ] Normal text meets a contrast ratio of at least 4.5:1; large text meets at least 3:1 (WCAG 2.1 AA).
- [ ] Focus indicators are visible on all interactive elements and meet the documented contrast requirement.
- [ ] Controls without visible text have an accessible name, such as `aria-label`.
- [ ] State is not communicated by color alone.
- [ ] Touch targets are at least 32 px, preferably 40 px. This is a repository guideline, not a general WCAG requirement.

## Semantic Checklist

- [ ] Button is used for actions, not Link.
- [ ] Link is used for navigation, not Button.
- [ ] Checkbox is used for multiple independent selections, not Radio.
- [ ] Radio Button (`RadioButtonGroup` in React) is used for exclusive selection, not Checkbox.
- [ ] Switch is used to toggle a feature in real time, not Checkbox.
- [ ] Badge contains only numeric or count values; use Tag for text. Verify this against the Badge documentation.

## Reporting

- [ ] Assumptions, discrepancies, and unverified items are reported when they affect the result.