---
component: "{{ComponentName}}"
system: "{{DesignSystemName}}"
type: "{{ComponentType}}"
status: "{{Status}}"
version: "{{Version}}"
owner: "{{OwnerOrTeam}}"
figma_node: "{{FigmaNodeLinkOrId}}"
last_updated: "{{YYYY-MM-DD}}"
tags:
  - "{{Tag1}}"
  - "{{Tag2}}"
  - "{{Tag3}}"
---

# {{ComponentName}}

System: {{DesignSystemName}}

## Documentation Rules

- Use standard Markdown headings without bold formatting.
- Follow the repository templates and naming conventions.
- Use Figma as the authoritative source for component specifications.
- Existing component documentation must not be read, reused, referenced, or treated as evidence.
- Never invent properties, values, defaults, tokens, dimensions, behavior, constraints, accessibility requirements, or historical changes.
- Complete all relevant sections using the strongest available Figma evidence.
- Evidence-based interpretations are allowed when supported by multiple observable pieces of Figma evidence.
- Clearly distinguish verified specifications from evidence-based interpretations.
- Do not treat visual appearance alone as proof of behavior, accessibility support, semantics, or implementation details.
- Generate sections dynamically and omit sections that are genuinely not applicable.
- Reserve [Pending confirmation] only for material gaps that cannot reasonably be addressed from available Figma evidence.
- If sources conflict, document the conflicting evidence and leave the conclusion unresolved.
- Do not change component property names, token names, or variant values when translating documentation.
- Keep English and Spanish documentation semantically equivalent.
- Preserve the original language of technical identifiers, tokens, code, and property values.
- Remove unused examples, template instructions, and unresolved placeholders from the final document.
- Record only material unresolved questions in Pending Clarification.
- Do not modify the documentation templates while documenting a component.
- Documentation is not an audit report.
- Prioritize usability, understanding, and adoption of the component over documenting the inspection process.
- Describe the component from the perspective of a consumer of the design system, not from the perspective of a reviewer validating the component.
- For Default Configuration, Typical Usage, Purpose / Intent, When to Use, When NOT to Use, Semantics, Iconography, Interaction, Accessibility, and Invalid Combinations, make a best-effort attempt to provide meaningful documentation before resorting to [Pending confirmation].

## Component Summary

{{OneSentenceDescription}}

## Quick Reference

### What It Is

{{SemanticRole}}

Use a concise, evidence-supported description of the component's purpose.

Describe the component's purpose using available evidence from:

- component description
- properties
- variants
- visible examples
- surrounding design-system context

If the exact role cannot be fully verified, document the strongest evidence-based interpretation and identify any uncertainty.

### Key Properties

Include a table with one row per relevant, verified Figma property.

| Property | Available Values | Default |
|----------|------------------|---------|
| {{PropertyName}} | {{VerifiedValues}} | {{VerifiedDefault}} |

Rules:

- Use property names and values exactly as they appear in Figma.
- Include only properties and values that have been verified.
- Include a default only when it is explicitly supported by reliable evidence.
- Do not assume the first variant, first listed value, or selected screenshot variant is the default.
- If sources disagree about a default, record the conflict in Pending Clarification.
- Remove empty rows and all unused examples.
- If no relevant properties exist, omit this subsection when appropriate.

### Default Configuration

{{DefaultConfiguration}}

Document only a configuration supported by verified evidence. Identify the source when the default is ambiguous or disputed.

If a default cannot be verified:

- Document the visible configurations that were inspected.
- Identify which values were observed.
- Explicitly state that no verified default configuration was found.

Do not assume that a visible example represents the default.

### Typical Usage

Document established usage contexts and relevant configurations.

Clearly label recommendations separately from verified observations.

Example distinction:

Verified observation: The component exposes the Size values Small, Medium, and Large.

Recommendation: Consider Medium for standard application layouts.

Do not present recommendations as official design-system rules.

{{TypicalUsage}}

Use examples, variants, naming conventions, component structure, and surrounding design-system context to describe likely usage patterns.

When usage is inferred from evidence rather than explicitly documented, label it as:

Evidence-based interpretation:

## Purpose / Intent

Describe the component's purpose as completely as the available evidence allows.

A lack of written documentation does not prevent documenting purpose when the purpose is reasonably supported by the component's structure, variants, naming, or examples.

Clearly distinguish:

- Verified specification
- Evidence-based interpretation

### Problem Solved

{{WhatProblemItSolves}}

### Expected Outcome

{{UserOutcome}}

### Typical Context

{{TypicalContext}}

Document only relevant information supported by available evidence. Omit subsections that are not applicable. Use [Pending confirmation] only when the missing information is material.

## When to Use

Include supported usage guidance. Distinguish official design-system guidance from recommendations.

- {{UseCase1}}
- {{UseCase2}}

Omit unsupported examples and remove unused rows.

Use available evidence to describe appropriate usage scenarios.

Where scenarios are inferred rather than documented, label them as evidence-based interpretations.

Use [Pending confirmation] only when the available evidence is insufficient to support any meaningful usage guidance.

## When NOT to Use

Include documented restrictions or well-supported recommendations against using the component in particular contexts.

- {{AvoidCase1}}
- {{AvoidCase2}}

Do not infer prohibited use cases from the component's appearance or name.

If no restrictions are documented, state:

[No documented restrictions found]

Use this statement only when the available sources have been checked sufficiently. Otherwise, write:

[Pending confirmation]

If no explicit restrictions are documented, describe only verified limitations or clearly state that no restrictions were found.

Do not invent prohibitions.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| {{PartName}} | {{VerifiedRequirement}} | {{VerifiedDescription}} |

Rules:

- Include only component parts that can be identified from available evidence.
- Mark a part as required or optional only when this is supported by the source.
- Do not infer internal implementation structure from appearance alone.
- Omit the table if anatomy is not applicable or cannot be established.

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| {{LayoutProperty}} | {{VerifiedValue}} | {{Source}} |

Include only relevant, verified measurements and layout properties, such as width, height, padding, gap, radius, alignment, or positioning.

Rules:

- Distinguish directly measured values from values obtained from design tokens.
- Identify the relevant variant or configuration when measurements differ.
- Do not generalize measurements from one variant to all variants.
- Do not infer responsive behavior or layout constraints without evidence.
- Omit unverified rows.

If layout information is relevant but cannot be verified, write:

[Pending confirmation]

## Semantics

Document semantic meaning using all available Figma evidence, including:

- component descriptions
- properties
- variants
- labels
- surrounding examples

Do not invent implementation details, HTML elements, ARIA roles, or screen-reader behavior that cannot be verified.

Do not infer semantic roles or intended meaning from visual appearance alone.

{{SemanticDetails}}

If relevant information cannot be verified, write:

[Pending confirmation]

## Iconography

Document icon usage only when it is relevant and can be verified.

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| {{IconSlot}} | {{IconDescription}} | {{Source}} |

Rules:

- Include only verified icon placements and supported descriptions.
- Preserve actual icon names and identifiers.
- Do not infer behavior from an icon's appearance.
- Remove unused rows.
- Omit this section when iconography is not applicable.

## Variants (Properties)

Document each actual Figma property in its own subsection.

Use property names and values exactly as defined in Figma.

### {{PropertyName}}

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| {{PropertyValue}} | {{VerifiedDescription}} | {{Evidence}} |

Rules:

- Include only existing, verified properties and values.
- Document all relevant values when the available metadata allows complete verification.
- Distinguish a complete variant inventory from a partial inspection.
- Describe the meaning of a value only when supported by evidence.
- Do not infer behavior or intent from a variant name.
- Identify combinations or properties that were not inspected.
- Do not create empty property sections.
- Remove all unused examples and placeholders.

If the available sources do not establish the property inventory sufficiently, document the verified subset and explain the limitation in Pending Clarification.

## States

Document states explicitly supported by variants, prototypes, metadata, component descriptions, or other verified Figma evidence.

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| {{StateName}} | {{StateDescription}} | {{VisualChanges}} | {{Source}} |

Rules:

- Distinguish visual state variants from verified interactive states.
- A visible state variant does not prove that an interaction or state transition is implemented.
- Do not invent transitions, timing, hover behavior, focus behavior, or disabled behavior.
- Identify the relevant configuration if states vary by property.
- Remove unused rows.
- Omit this section when states are not applicable.

If states are relevant but cannot be verified, write:

[Pending confirmation]

## Token Mapping

Document only tokens that can be identified and verified in the available sources.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| {{Category}} | {{TokenName}} | {{VerifiedUsage}} | {{Source}} |

Rules:

- Preserve token names exactly.
- Distinguish tokens directly verified in Figma from tokens referenced in supplemental sources.
- Mark any token not verified in Figma as "Not verified in Figma".
- Do not infer a token mapping from a visually similar color, dimension, or style.
- Do not claim a token is used by the component unless the relationship is supported by evidence.
- Identify partial verification where applicable.
- Omit unsupported token categories and unused rows.

If token usage is relevant but cannot be verified, write:

[Pending confirmation]

## Interaction

Document observed interaction-related evidence, including:

- visible states
- state variants
- prototype links
- interaction labels
- component descriptions

Clearly distinguish between:

- Verified interactions
- Observed states
- Evidence-based interpretations

Do not assume implementation behavior that cannot be verified.

## Accessibility

Document all accessibility-related evidence available in Figma.

Relevant information may include:

- labels
- visible state differentiation
- focus indicators
- icon usage
- contrast-related observations
- accessibility notes
- semantic descriptions

Clearly distinguish:

- Verified accessibility requirements
- Accessibility-related observations
- Missing accessibility information

Do not invent:

- ARIA roles
- WCAG compliance claims
- keyboard support
- screen-reader behavior
- focus management behavior

unless explicitly verified.

## Content Guidelines

Document verified content guidance relevant to the component, such as:

- Labels and terminology.
- Capitalization.
- Message content.
- Formatting.
- Naming conventions.

Only include guidance supported by available evidence. Clearly label recommendations.

{{ContentGuidelines}}

Omit this section when content guidance is not applicable.

## Examples

Include examples only when supported by actual source material or clearly labeled as recommendations.

### {{ExampleName}}

Configuration: {{ExampleConfiguration}}

Description: {{ExampleDescription}}

Evidence / Classification: {{EvidenceOrRecommendation}}

Rules:

- Preserve actual property names and values.
- Identify whether an example is an existing documented configuration or a proposed recommendation.
- Do not fabricate production use cases or claim that an example exists in the product without evidence.
- Remove unused examples.
- Omit this section when no useful examples are available.

## Invalid Combinations

Document invalid combinations only when explicitly supported by available Figma evidence or information provided by the user.

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| {{InvalidCombination}} | {{VerifiedReason}} | {{Source}} |

Rules:

- Distinguish explicitly invalid combinations from combinations that are merely untested or undocumented.
- Do not infer invalidity from visual appearance.
- Do not label a combination invalid solely because it is not shown in the available variants.
- Preserve relevant constraints and conditions accurately.
- Remove unused rows.
If no invalid combinations are documented after inspection, write:

[No documented invalid combinations found]

## Pending Clarification

List only unresolved questions that materially affect documentation accuracy, component usage, implementation, or maintenance.

For each question, include when relevant:

- Question or discrepancy.
- Competing evidence and its source.
- What remains unverified.
- What evidence or decision would resolve it.

Do not repeat every instance of [Pending confirmation]. Reference the relevant section instead.

{{PendingQuestions}}

If no material questions remain, write:

None

Do not add clarification items for:

- internal implementation details
- property names already exposed by Figma
- variant combinations that can already be documented from inspection
- visual observations that do not affect usage guidance
- speculative design intent

A clarification must have a meaningful impact on how designers or developers use, implement, or maintain the component.

## Notes / Changelog

Generated or reviewed using available source material on {{YYYY-MM-DD}}.

Record changes only when they are supported by verifiable evidence.

Do not infer historical changes from timestamps, naming conventions, variant names, property structures, design patterns, or component organization.

Distinguish the current documentation update from verified historical component changes.

Do not attempt to reconstruct component history from naming conventions, timestamps, component structure, or inferred design evolution.

If verified version history exists:

{{HistoricalChanges}}

Otherwise, write:

[No verified historical changes available]
