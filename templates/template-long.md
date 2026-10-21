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
- Follow the existing repository conventions and preserve verified information from existing documentation.
- Use Figma, implementation code, metadata, design tokens, and existing documentation as distinct evidence sources.
- Identify the source supporting important technical claims when the source is relevant or when sources conflict.
- Never invent metadata, properties, values, defaults, tokens, dimensions, behavior, constraints, or historical changes.
- Distinguish verified facts, legacy information, recommendations, and unresolved questions.
- Do not treat visual appearance as proof of implementation behavior, accessibility support, or interaction behavior.
- Remove unused examples, template instructions, and unresolved template placeholders from the final document.
- Generate sections dynamically. Include only sections relevant to the component and supported by available evidence.
- Omit sections that are not applicable. If a relevant section cannot be verified, use a concise pending-confirmation note rather than inventing content.
- Do not repeat the same unresolved question in multiple sections. Record material unresolved questions in Pending Clarification.
- If sources conflict, document the competing evidence and leave the conclusion unresolved until it can be verified.
- Do not change component property names or variant values when translating documentation.
- Keep English and Spanish documentation semantically equivalent.
- Preserve the original language of technical identifiers, token names, code, and property values.
- Do not update the source templates while documenting an individual component.

## Component Summary

{{OneSentenceDescription}}

## Quick Reference

### What It Is

{{SemanticRole}}

Use a concise, evidence-supported description of the component's purpose.

If the role cannot be established, write:

[Pending confirmation]

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

If a default cannot be verified, write:

[Pending confirmation]

### Typical Usage

Document established usage contexts and relevant configurations.

Clearly label recommendations separately from verified observations.

Example distinction:

Verified observation: The component exposes the Size values Small, Medium, and Large.

Recommendation: Consider Medium for standard application layouts.

Do not present recommendations as official design-system rules.

{{TypicalUsage}}

If no usage guidance can be established, write:

[Pending confirmation]

## Purpose / Intent

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

If usage guidance is relevant but cannot be verified, write:

[Pending confirmation]

## When NOT to Use

Include documented restrictions or well-supported recommendations against using the component in particular contexts.

- {{AvoidCase1}}
- {{AvoidCase2}}

Do not infer prohibited use cases from the component's appearance or name.

If no restrictions are documented, state:

[No documented restrictions found]

Use this statement only when the available sources have been checked sufficiently. Otherwise, write:

[Pending confirmation]

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

- Distinguish directly measured values from values obtained from design tokens or implementation code.
- Identify the relevant variant or configuration when measurements differ.
- Do not generalize measurements from one variant to all variants.
- Do not infer responsive behavior or layout constraints without evidence.
- Omit unverified rows.

If layout information is relevant but cannot be verified, write:

[Pending confirmation]

## Semantics

Document semantic purpose, role, and meaning only when supported by explicit source material.

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

Document states explicitly supported by variants, prototypes, metadata, implementation code, or documentation.

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
- Distinguish tokens directly inspected in Figma from tokens found in code or legacy documentation.
- Do not infer a token mapping from a visually similar color, dimension, or style.
- Do not claim a token is used by the component unless the relationship is supported by evidence.
- Identify partial verification where applicable.
- Omit unsupported token categories and unused rows.

If token usage is relevant but cannot be verified, write:

[Pending confirmation]

## Interaction

Document interactive behavior only when supported by prototypes, implementation code, metadata, explicit documentation, or other reliable evidence.

Distinguish:

- Observed visual states.
- Verified interactive behavior.
- Behavior described in documentation but not independently verified.
- Recommendations for future implementation.

{{InteractionDetails}}

Do not assume click behavior, dismissal behavior, keyboard interactions, state transitions, animations, or event handling.

If interaction is not applicable, omit this section. If relevant behavior cannot be verified, write:

[Pending confirmation]

## Accessibility

Document accessibility requirements and implementation details only when supported by explicit evidence.

Relevant information may include:

- Semantic role.
- Accessible name or label.
- Keyboard interaction.
- Focus indicators and focus management.
- Screen reader behavior.
- Documented accessibility requirements.
- Verified accessibility-related implementation details.

Do not infer WCAG compliance, ARIA attributes, keyboard support, focus behavior, or screen reader behavior from appearance alone.

Distinguish documented recommendations from verified implementation.

{{AccessibilityDetails}}

If accessibility behavior is relevant but cannot be verified, write:

[Pending confirmation]

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

Document invalid combinations only when explicitly supported by the design system, component metadata, implementation validation, existing documentation, or the user.

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| {{InvalidCombination}} | {{VerifiedReason}} | {{Source}} |

Rules:

- Distinguish explicitly invalid combinations from combinations that are merely untested or undocumented.
- Do not infer invalidity from visual appearance.
- Do not label a combination invalid solely because it is not shown in the available variants.
- Preserve relevant constraints and conditions accurately.
- Remove unused rows.

If the available evidence has been checked and no invalid combinations are documented, write:

[No documented invalid combinations found]

If the available evidence is insufficient, write:

[Pending confirmation]

## QA Checklist

Mark an item as complete only when sufficient evidence supports it. If verification is partial, leave the item unchecked and explain the limitation in Pending Clarification.

- [ ] Component identity and source references verified.
- [ ] Documented properties and values checked against available Figma evidence.
- [ ] Variant inventory completeness assessed and any inspection limitations documented.
- [ ] Default values verified, or unresolved conflicts recorded.
- [ ] Layout measurements checked against the relevant configurations.
- [ ] Token mappings verified against their actual sources.
- [ ] Visual states distinguished from verified interactive behavior.
- [ ] Accessibility claims supported by explicit evidence.
- [ ] Invalid combinations supported by explicit evidence.
- [ ] Recommendations distinguished from verified observations.
- [ ] English and Spanish documentation are semantically equivalent.
- [ ] No unresolved template placeholders remain.
- [ ] No template instructions remain in the final document.
- [ ] No unsupported or fabricated information has been added.
- [ ] Historical changes included only when supported by version history.

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

## Notes / Changelog

Generated or reviewed using available source material on {{YYYY-MM-DD}}.

Record changes only when they are supported by verifiable evidence.

Do not infer historical changes from timestamps, naming conventions, variant names, property structures, design patterns, or component organization.

Distinguish the current documentation update from verified historical component changes.

If verified version history exists:

{{HistoricalChanges}}

Otherwise, write:

[No verified historical changes available]
