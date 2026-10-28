# Figma MCP Integration

## 1. Purpose

Figma MCP enables an AI agent to access design information from Figma through the tools exposed by its configured MCP client.

Within Genome Evolution, it supports three main tasks: inspecting a design reference, mapping that reference to documented components and tokens, and comparing generated or existing interfaces against the intended design.

Figma MCP complements the repository. It does not replace `AGENTS.md`, component documentation, design tokens, or the React implementation. See `AGENTS.md` sections 2 and 4 for the source-of-truth hierarchy and the interface workflow.

## 2. When to Use It

Use Figma MCP when a task depends on information that the repository cannot provide reliably, such as:

- Layout, hierarchy, and spacing relationships in a specific frame.
- Variants, states, and properties represented in a specific component or screen.
- Comparing a generated or existing interface against a specific design reference.
- Investigating discrepancies between a design and the documented design system.

For component usage rules, token definitions, composition patterns, and React APIs, use the repository documentation and implementation.

If the task depends on a specific Figma reference and the intended file, frame, or node cannot be identified from the available context, ask for clarification before proceeding. Otherwise, continue with the available information and state any relevant limitations.

## 3. Client Capabilities

Figma MCP can be used from any MCP-capable client that exposes the tools needed for this workflow. The specific tools, skills, setup, and authentication depend on each client and its configuration. Refer to the team's setup documentation for client-specific instructions, if available.

At minimum, the client should allow the agent to:

- Read a Figma frame, component, or node by reference.
- Inspect the relevant structure, properties, variants, and states exposed by the available tools.
- Report clearly when access fails or when the retrieved information is partial.

If the client provides additional Figma-related skills or tools, the agent may use them when they support this workflow. Do not assume that a skill or tool exists unless it is available in the current session. Tool names and skills may change; verify them in the current session before relying on them.

If a client lacks the capabilities required for the task, report the limitation rather than improvising a workaround.

## 4. What to Check in Figma and What to Check in the Repository

| Question | Source |
|---|---|
| What does the design look like, including layout, hierarchy, and visual relationships? | Figma |
| Which variants, states, and properties does the design show? | Figma, then confirm against component documentation |
| When should a component be used, and which combinations are invalid? | Repository: AI rules and component documentation |
| Which token represents a color, spacing, or typography value? | Repository: `packages/tokens/` and foundations |
| Which props does a React component accept? | React implementation: public exports, component types, and relevant implementation files |
| Is a component documented in Genome Evolution? | `manifest.json` and `components/` |

In short, Figma shows what the design intends, the repository explains how the system uses it, and the React code defines what is available in the implementation.

The manifest provides a structured inventory of documented resources, but it should not be treated as definitive proof that a component exists or does not exist in the implementation.

## 5. Handling Discrepancies

Identify and report discrepancies. Do not resolve them silently.

- **A Figma value has no matching token:** Report the gap. Do not substitute the nearest token without disclosing the decision. Use a fallback only if it is explicitly identified, as described in `AGENTS.md` section 6.

- **A Figma variant or property is not documented:** Report it as undocumented. Do not treat it as an established design-system rule.

- **A documented variant is not implemented in React:** Report the limitation. Do not use it in generated code, and do not modify the library unless the task explicitly requests it.

- **Figma and component documentation disagree on structure, behavior, or allowed combinations:** If the difference changes the outcome, report it and ask for clarification. If clarification is not possible and the difference does not materially affect the outcome, use the most conservative option and state the assumption.

- **A Figma component is not in `manifest.json`:** Treat it as missing from the registered inventory. Check the component documentation and React implementation before deciding whether it is available and supported. Do not add it to the inventory unless the task explicitly requires updating it, the component's status has been verified, and the change is reviewed.

## 6. Recommended Workflow

1. **Identify the design reference.** Determine the Figma file, frame, or node required for the task. If the reference cannot be identified and is necessary, ask for clarification.

2. **Confirm availability.** Check that the relevant tools are available in the current session and that the user has access to the required file.

3. **Retrieve only what is needed.** Inspect the structure, variants, properties, and other details relevant to the task. Consider whether the retrieved information is sufficient for the intended analysis.

4. **Map the design to the system.** Find the corresponding documented components, composition patterns, and tokens.

5. **Check implementation.** If the output includes React code, inspect the actual component exports, public props, types, and relevant implementation constraints. Use component documentation as usage guidance, but do not assume that documented properties are implemented unless the code confirms them.

6. **Generate or evaluate.** Preserve the intended design while applying the established design-system rules and implementation constraints.

7. **Report the result.** List the sources used, discrepancies found, assumptions made, and limitations that affect the outcome.

## 7. Limitations

Agents must acknowledge these limitations, especially when generating or auditing interfaces:

- **Availability varies.** Tools, skills, permissions, and behavior depend on the client and current session. Do not assume they are identical across clients.

- **Access is limited to authorized files.** If access fails, report it. Do not attempt to bypass access restrictions.

- **Retrieval may be partial.** A single request may not return every layer, property, or variant. Consider the completeness of the retrieved information before describing a design as fully inspected.

- **A design may not describe interaction behavior.** Figma may not fully specify transitions, keyboard behavior, responsive rules, or other runtime behavior. Use component documentation and implementation evidence where available.

- **A design does not prove accessibility.** Check contrast, focus behavior, accessible names, and touch targets against `AGENTS.md` section 9 and `ai/evaluation-checklist.md`.

- **A design does not prove implementation.** A component in Figma may not exist in React, and a component in the repository may not match the current design.

- **Values from Figma are not token definitions.** Verify token names and definitions against the available token sources in `packages/tokens/` and the documented foundations. Do not invent token names or treat values observed in Figma as authoritative token definitions.

- **A design comparison does not validate code.** Run the repository checks described in `AGENTS.md` section 10 when applicable. Do not claim that tests or validation have passed unless they were actually performed.

## 8. Security and Permissions

- Use only authorized MCP connections.
- Do not request, store, or commit credentials, authentication tokens, or private connection details.
- Access only the files and resources authorized for the current task.
- Do not include sensitive client configuration or authentication details in repository documentation.

## 9. Scope and Maintenance

This document describes how agents should use Figma MCP for design inspection, interface generation, and design audits.

Client-specific setup, authentication, available skills, and connection configuration belong in the team's setup documentation, if maintained separately.

Update this document when the supported workflows or the responsibilities of each source change.

Note: the references to `AGENTS.md` sections in this document (2, 4, 6, 8, 9, and 10) depend on that file's current numbering. When `AGENTS.md` changes, review this document's cross-references to ensure they still point to the correct instructions.

## 10. Validation Checklist

Before reporting work that depends on Figma MCP, verify the following where applicable:

- [ ] The intended Figma reference was identified.
- [ ] The relevant design information was retrieved, and its completeness was considered.
- [ ] Component choices were compared with Genome Evolution documentation.
- [ ] Token usage follows the documented token definitions and foundations.
- [ ] React APIs were checked against the actual implementation if the output requires React code.
- [ ] Discrepancies, assumptions, and access limitations were documented.
- [ ] No inspection, validation, or test was reported as completed unless it was actually performed.