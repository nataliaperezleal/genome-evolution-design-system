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
- Include only relevant information supported by available evidence.
- Remove unused rows, placeholders, and template instructions.
- Omit sections that are not applicable.
- Use [Pending confirmation] when relevant information cannot be verified.
- Clearly distinguish verified observations from recommendations.
- Never invent metadata, properties, values, tokens, or behaviors.

{{OneSentenceDescription}}

## Quick Reference

### What it is

{{SemanticRole}}

If unavailable:

[Pending confirmation]

### Key Properties

Generate a table with one row per verified Figma property.
Include available values and defaults only when verified.
Remove this instruction and generate the actual table.

Rules:

- Include only existing properties.
- Include only verified values.
- Remove unused example rows.
- Remove unresolved placeholders.
- Do not create empty rows.

Default values are a special category of information.

A value may be documented as default only when at least one of the following is true:

- Explicitly marked as default in Figma.
- Explicitly documented.
- Explicitly present in metadata.
- Explicitly provided by the user.

Do not assume that:

- the first visible variant is the default.
- the selected variant in a screenshot is the default.
- the first value in a property list is the default.

### Default Configuration

{{DefaultConfiguration}}

If unavailable:

[Pending confirmation]



### Typical Usage

Document relevant usage contexts and verified configurations.

Recommendations must be clearly labeled.

Examples:

Verified Observation:
Available Size values are Small, Medium, Large.

Recommendation:
Use Size=Medium for standard application layouts.

Never merge recommendations and verified observations into the same statement.

{{TypicalUsage}}

If unavailable:

[Pending confirmation]

## Purpose / Intent

### Problem Solved

{{WhatProblemItSolves}}

If unavailable:

[Pending confirmation]

### Expected Outcome

{{UserOutcome}}

If unavailable:

[Pending confirmation]

### Typical Context

{{TypicalContext}}

If unavailable:

[Pending confirmation]

## When to Use

- {{UseCase1}}
- {{UseCase2}}

If unavailable:

[Pending confirmation]

## When NOT to Use

- {{AvoidCase1}}
- {{AvoidCase2}}

If unavailable:

[Pending confirmation]

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|------|----------|-------------|
| {{PartName}} | {{RequiredOrOptional}} | {{PartDescription}} |

Rules:

- Generate one row per verified component part.
- Remove unused example rows.
- Do not invent anatomy elements.

If unavailable:

[Pending confirmation]

### Layout

| Property | Verified Value |
|----------|----------------|
| Height | {{Height}} |
| Width | {{Width}} |
| Padding | {{Padding}} |
| Gap | {{Gap}} |
| Radius | {{Radius}} |

Rules:

- Include only relevant layout properties supported by available evidence.
- Remove rows that cannot be verified.
- Do not invent measurements.

If unavailable:

[Pending confirmation]

## Semantics

Document semantic information only when explicitly supported by the source material.

Do not infer semantics from visual appearance alone.

If unavailable:

[Pending confirmation]

## Iconography

Document icons only when their usage can be verified.

| Slot | Description |
|------|-------------|
| {{IconSlot}} | {{IconDescription}} |

Rules:

- Generate rows only for verified icon placements.
- Remove unused example rows.
- Do not infer icon behavior.

If unavailable:

[Pending confirmation]

## Variants (Properties)

Use property names and values exactly as defined in Figma.

Generate one subsection per actual Figma property.

Rules:

- Use only existing Figma properties.
- Use only existing Figma values.
- Remove unused examples.
- Do not generate empty property sections.
- Do not document inferred meanings.
- Do not invent undocumented values.
- Remove all unresolved placeholders.

### {{PropertyName}}

| Value | Description |
|--------|-------------|
| {{PropertyValue}} | {{VerifiedDescription}} |

## States

Document only states that are explicitly supported by:

- variants
- screenshots
- prototypes
- metadata
- explicit documentation

Do not infer behavior from appearance alone.

| State | Description | Visual Changes |
|--------|-------------|----------------|
| {{StateName}} | {{StateDescription}} | {{VisualChanges}} |

Rules:

- Generate only verified states.
- Remove unused example rows.
- Do not invent state transitions.

If unavailable:

[Pending confirmation]

## Token Mapping

Document only tokens that can be identified and verified.

Include only relevant token categories.

| Category | Token | Usage |
|----------|--------|--------|
| {{Category}} | {{TokenName}} | {{VerifiedUsage}} |

Rules:

- Generate only verified token mappings.
- Remove unsupported categories.
- Do not infer token usage from visual appearance.
- Do not generate guessed token names.

If unavailable:

[Pending confirmation]

## Interaction

Document interactions only when explicitly supported by:

- prototypes
- metadata
- provided documentation
- verified source material

Distinguish observed visual states from verified interactive behavior.

{{InteractionDetails}}

If unavailable:

[Pending confirmation]

## Accessibility

Document only accessibility information explicitly provided by the source material.

Do not infer:

- WCAG compliance
- keyboard support
- focus behavior
- ARIA support
- screen reader behavior

{{AccessibilityDetails}}

If unavailable:

[Pending confirmation]

## Content Guidelines

Document verified guidance for:

- labels
- messages
- capitalization
- formatting
- terminology

Only include guidance supported by evidence.

{{ContentGuidelines}}

If unavailable:

[Pending confirmation]

## Examples

Include only examples supported by available source material.

Recommendations must be explicitly labeled.

### {{ExampleName}}

Configuration: {{ExampleConfiguration}}

Description: {{ExampleDescription}}

If unavailable:

[Pending confirmation]

## Invalid Combinations

Document combinations only when they are explicitly identified as invalid by:

- the design system
- metadata
- documentation
- the user

{{InvalidCombinations}}

If no invalid combinations are documented and evidence confirms none are defined:

[No documented invalid combinations found]

If the available source material is insufficient to determine this:

[Pending confirmation]

## QA Checklist

- [ ] All documented properties and values match the available Figma source.
- [ ] Variant values verified.
- [ ] Default values included only when verified.
- [ ] Relevant tokens verified against available sources.
- [ ] No undocumented behavior added.
- [ ] No undocumented accessibility claims added.
- [ ] Recommendations distinguished from verified observations.
- [ ] No unresolved template placeholders remain.
- [ ] No template instructions remain.
- [ ] No fabricated information present.

## Pending Clarification

List only unresolved questions that materially affect the accuracy or use of the documentation.

Do not repeat every instance of [Pending confirmation].

{{PendingQuestions}}

If no clarification is needed:

None

## Notes / Changelog

Generated from verified source material on {{YYYY-MM-DD}}.

Historical changes may only be documented when evidence from multiple versions exists.

Do not infer historical changes from:

- timestamps
- naming conventions
- variant names
- property structures
- design patterns
- component organization

If verified version history exists:

{{HistoricalChanges}}

Otherwise:

[No verified historical changes available]