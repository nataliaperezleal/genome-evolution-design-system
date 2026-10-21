Documentation Rules

- Only record information that can be directly verified from Figma properties, variants, component structure, screenshots, tokens, metadata, or provided documentation.
- Do not assume implementation behavior.
- Do not assume accessibility support unless explicitly documented.
- Do not assume responsive behavior unless explicitly documented.
- Do not assume validation logic unless explicitly documented.
- A visible variant proves that a variant exists, not that the associated behavior is implemented.
- Separate verified observations from recommendations.
- When information cannot be verified, use: [Pending confirmation]
- Generate property sections dynamically.
- Do not create empty placeholders.
- Do not output unused Property entries.

{{ComponentName}} — {{ComponentType}}

{{OneSentenceDescription}}

USE WHEN:
- {{UseCase1}}
- {{UseCase2}}
- {{UseCase3}}

DO NOT USE:
- {{AvoidCase1}}
- {{AvoidCase2}}

PROPERTIES (exactly as they appear in Figma):

{{Generate one entry per actual property found in the component.

Format:

- PropertyName [ValueA | ValueB | ValueC] — default: DefaultValue

Rules:
- Include only real properties.
- Include only verified values.
- Include default values only when verified.
- Do not generate empty property rows.
- Remove this instruction block from the final output.
}}

DEFAULT CONFIGURATION:
- {{DefaultConfiguration}}

INVALID COMBINATIONS:
- {{InvalidCombo1}}
- {{InvalidCombo2}}
- {{InvalidCombo3}}

If unavailable:
[Pending confirmation]

TYPICAL USAGE:
- {{ContextName1}}: {{Property}}={{Value}}, {{Property}}={{Value}}
- {{ContextName2}}: {{Property}}={{Value}}, {{Property}}={{Value}}
- {{ContextName3}}: {{Property}}={{Value}}, {{Property}}={{Value}}
