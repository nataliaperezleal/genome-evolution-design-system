# Component Short Description Template

## Output Rules

- Produce the final description in English only.
- The description is intended to be copied manually into the existing Figma component description field.
- Derive the description from the validated long documentation and the verified Figma evidence used to create it.
- Use concise, practical language suitable for designers and developers working with the design system.
- Preserve actual Figma property names, variant values, token names, and technical identifiers exactly as defined.
- Only include information supported by Figma properties, variants, component structure, verified tokens, metadata, or other verified Figma evidence.
- Treat Figma as the authoritative source for component specifications.
- Keep the description short enough to fit comfortably within a Figma component description.
- Do not invent defaults, properties, behaviors, accessibility support, responsive behavior, validation logic, usage restrictions, or invalid combinations.
- A visible variant proves that a variant exists, not that its associated behavior is implemented.
- Distinguish verified facts from recommendations. Do not present recommendations as official design-system rules.
- Include only sections that provide useful, supported information.
- Generate property entries dynamically from the actual component.
- Remove unused examples, instruction blocks, empty entries, and template placeholders.
- Do not reproduce the full long documentation in this description.
- Do not include frontmatter, a changelog, a QA checklist, or lengthy implementation details.
- Do not modify the Figma canvas. Return the final description in the chat for manual copy and paste.
- Only include sections that contain verified, useful information.
- Omit empty sections rather than displaying empty headings.

Include only the sections that contain verified, useful information. The output format below is illustrative rather than mandatory.

## Output Format

{{ComponentName}} — {{ComponentType}}

{{OneSentenceDescription}}

USE WHEN:
- {{VerifiedUseCase1}}
- {{VerifiedUseCase2}}

DO NOT USE:
- {{DocumentedRestriction1}}

PROPERTIES:
- {{PropertyName}} [{{VerifiedValue1}} | {{VerifiedValue2}}]

TYPICAL USAGE:
- {{VerifiedOrRecommendedContext}}


## Section Rules

### Component Name and Description

- Use the component's actual name and supported component type.
- Write one concise sentence explaining its purpose.
- Do not make claims about behavior that has not been verified.

### USE WHEN

- Include only useful, evidence-supported usage contexts.
- Keep entries short and actionable.
- Prefer actionable guidance over exhaustive documentation.
- Label recommendations explicitly when they are not official guidance.
- If no usage guidance is established, omit the section.

### DO NOT USE

- Include only explicitly documented restrictions or clearly labeled recommendations.
- Do not invent prohibited scenarios.
- If no restrictions are documented and the relevant sources have been checked, omit this section.
- If the sources are insufficient to determine restrictions, do not imply that none exist.

### PROPERTIES

Use one entry per actual property found in Figma.

Format:

- PropertyName [ValueA | ValueB | ValueC] — default: DefaultValue

Rules:

- Keep property names and values exactly as defined in Figma.
- Include only verified values.
- Include a default only when explicitly verified.
- If the default is unknown or disputed, omit it and report the unresolved issue separately in the chat.
- Do not include implementation-only properties as Figma properties.
- Remove unused entries.


### TYPICAL USAGE

- Include only useful, concise examples.
- Use real property names and valid values.
- Clearly label recommendations.
- Do not invent real product contexts or imply an example exists in production without evidence.
- Omit the section when no useful examples can be supported.

## Final Validation

Before returning the description, verify that:

- It is written entirely in English.
- It is derived from the validated long documentation.
- Every property, value, default, and constraint is supported by evidence.
- It contains no template instructions or unresolved placeholders.
- It does not duplicate information unnecessarily.
- It is concise and suitable for a Figma component description.
- It is returned in the chat and not saved as a separate repository file.
- When verified defaults, restrictions, or invalid combinations are not available, omit those sections instead of adding placeholders or uncertainty statements.
- Target 100–250 words total.
- Prioritize the information most useful for selecting and configuring the component in Figma.
- Include only the sections that contain verified, useful information.