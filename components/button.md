---
component: "Button"
system: "Genome Evolution Design System"
type: "Button"
status: "Production"
version: "2.0"
owner: "UX Design"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=392-861"
last_updated: "2026-10-19"
tags:
  - "button"
  - "action"
  - "call-to-action"
---

# Button — Genome Evolution Design System

Interactive action button. It communicates an available action and lets the user execute it. It is the main call-to-action element on screens, forms and dialogs.

## Quick Reference

### What it is

Interactive action button (source: Figma component description).

### Key Properties

- Type [Primary | Secondary | Tertiary | Danger | Information | Success | Warning] — default: Primary
- Color [Evergreen | Indigo | Default] — default: Evergreen
- Size [SM | MD] — default: MD
- State [Default | Hovered | Pressed | Disabled | Focused] — default: Default
- Corner [Default | Rounded] — default: Default
- showLeadingIcon [true | false] — default: false
- showTrailingIcon [true | false] — default: false
- label — visible button text (default: "Button")

### Default Configuration

Type=Primary, Color=Evergreen, Size=MD, State=Default, Corner=Default, showLeadingIcon=false, showTrailingIcon=false, label=Button

### Invalid Combinations

- Type=Tertiary + Color=Evergreen or Color=Indigo (Tertiary only accepts Color=Default)
- Type=Danger, Information, Success or Warning + Color=Evergreen or Color=Indigo
- State=Disabled + Type=Tertiary, Danger, Information, Success or Warning (variant does not exist)
- Type=Primary or Secondary + Color=Default + State other than Disabled (variant does not exist)

### Typical Usage

- Primary action: Type=Primary, Color=Evergreen, Size=MD, Corner=Default
- Secondary action: Type=Secondary, Color=Evergreen, Size=MD
- Low-emphasis action: Type=Tertiary, Color=Default, Size=SM
- Destructive action: Type=Danger, Size=MD
- Rounded variant: Type=Primary, Color=Indigo, Corner=Rounded, Size=SM

---

## Purpose / Intent

### Problem Solved

Communicates an available action and lets the user execute it (source: Figma component description).

### Typical Context

Screens, forms and dialogs (source: Figma component description).

---

## When to Use

- Primary action of a screen
- Form confirmation
- Destructive action with Danger context
- Informational or status contextual action

---

## When NOT to Use

- For navigation between pages (use Link)
- For multiple actions of equal hierarchy without clear context
- More than one Primary per view

---

## Structure (Anatomy)

### Component Parts

| Part | Required | Description |
|--------|--------|--------|
| Container | Required | Rectangular frame with horizontal auto layout. Fill, border and radius depend on Type, Color, State and Corner. |
| Leading icon | Optional — showLeadingIcon | 16×16 icon, default "check". Replaceable through the leadingIcon slot. |
| Label | Required | Button text. Default: "Button". |
| Trailing icon | Optional — showTrailingIcon | 16×16 icon, default "close". Replaceable through the trailingIcon slot. |

### Layout

| Property | Value |
|-----------|-----------|
| Height | Size=SM: 24. Size=MD: 32 (some variants measure 30 or 34, see Pending Clarification). |
| Width | Hugs content. With the default label: SM 64–66, MD 79–81. |
| Padding | Size=MD: space/16 horizontal, space/8 vertical (Primary + Evergreen + Default uses 8 top / 6 bottom). Size=SM: space/12 horizontal, space/4 vertical. |
| Gap | gap/sm between icon and label |
| Radius | Corner=Default: semantic/sm (4). Corner=Rounded: semantic/pill (32). |

---

## Semantics

Per the Figma description, Button communicates an available action. Type conveys hierarchy and context: Primary for the main action, Danger for destructive actions, and Information, Success and Warning for contextual or status actions.

---

## Iconography

### Icon Slots

| Slot | Description |
|--------|--------|
| Leading | 16×16 icon controlled by showLeadingIcon. Default: "check". Replaceable through the leadingIcon slot. |
| Trailing | 16×16 icon controlled by showTrailingIcon. Default: "close". Replaceable through the trailingIcon slot. |

### Rules

- Icons are visible only when their show property is true.
- Icon color: [Pending confirmation] (no icon token is bound in the variants reviewed).
- Allowed icons for the slots: [Pending confirmation]

---

## Variants (Properties)

### Type

| Value | Description |
|--------|--------|
| Primary | Solid fill. Main action. Available with Color=Evergreen and Indigo (all States except Disabled) and Color=Default (State=Disabled only). |
| Secondary | Outline with 1px border. Secondary action. Available with Color=Evergreen and Indigo (all States except Disabled) and Color=Default (State=Disabled only). |
| Tertiary | Canvas background with 1px border/strong border. Action without emphasis. Only Color=Default. States: Default, Hovered, Pressed, Focused. |
| Danger | Subtle red fill with border/danger border. Destructive action. Only Color=Default. States: Default, Hovered, Pressed, Focused. |
| Information | Subtle blue fill with border/info border. Informational contextual action. Only Color=Default. States: Default, Hovered, Pressed, Focused. |
| Success | Subtle green fill with border/success border. Status contextual action. Only Color=Default. States: Default, Hovered, Pressed, Focused. |
| Warning | Subtle yellow fill with border/warning border. Status contextual action. Only Color=Default. States: Default, Hovered, Pressed, Focused. |

### Color

| Value | Description |
|--------|--------|
| Evergreen | Primary green palette. Default brand color for Primary and Secondary buttons (source: Figma description of the Color property, which names the brand "Genome Plus"). |
| Indigo | Indigo palette. Available for Primary and Secondary. |
| Default | Neutral. Used by Tertiary, Danger, Information, Success and Warning, and by the Disabled state of Primary and Secondary. |

### Size

| Value | Description |
|--------|--------|
| SM | 24px high. Label: Text/Button/SM (size/12). |
| MD | 32px high. Label: Text/Button/MD (size/14). |

### State

| Value | Description |
|--------|--------|
| Default | Base appearance. |
| Hovered | Hover appearance (see States). |
| Pressed | Pressed appearance (see States). |
| Disabled | Disabled appearance. Only Primary and Secondary with Color=Default. |
| Focused | 2px border/focus border. |

### Corner

| Value | Description |
|--------|--------|
| Default | Radius semantic/sm (4). |
| Rounded | Pill radius semantic/pill (32). |

### showLeadingIcon

| Value | Description |
|--------|--------|
| true | Shows the leading icon. |
| false | Hides the leading icon. |

### showTrailingIcon

| Value | Description |
|--------|--------|
| true | Shows the trailing icon. |
| false | Hides the trailing icon. |

### label

Visible button text. Default value: "Button".

---

## States

| State | Description | Visual Changes |
|--------|--------|--------|
| Default | Base appearance. | Primary: surface/evergreen/bold or surface/indigo/bold fill, text/inverse text. Secondary: background/canvas fill, border/evergreen or border/indigo 1px border, text/evergreen or text/indigo text. Tertiary: background/canvas fill, border/strong border, text/primary text. Danger, Information, Success, Warning: subtle fill, matching border and text tokens. |
| Hovered | Hover appearance. | Primary: surface/evergreen/bold/hovered or surface/indigo/bold/hovered fill. Secondary and Tertiary: background/interactive/hovered fill. Danger, Information, Success, Warning: surface/{type}/subtle/hovered fill. |
| Pressed | Press appearance. | Primary: surface/evergreen/bold/pressed or surface/indigo/bold/pressed fill. Secondary and Tertiary: background/interactive/pressed fill. Danger, Information, Success, Warning: surface/{type}/subtle/pressed fill. |
| Disabled | Non-interactive appearance. | Primary: background/disabled fill, text/disabled text. Secondary: background/disabled fill, border/disabled border, text/disabled text. |
| Focused | Focus appearance. | 2px (`border.base.focus.width`) `border/focus` border; fill and text as in Default. |

---

## Token Mapping

Tokens are confirmed per variant. For Indigo, Information, Success and Warning the pairing follows the variable set of the component and the naming of the Evergreen and Danger variants checked individually. Spacing, size, width and radius tokens were confirmed as Figma variables but not cross-checked against the token files.

### Background

| Token | Usage | Notes |
|--------|--------|--------|
| surface/evergreen/bold | Fill | Type=Primary, Color=Evergreen |
| surface/evergreen/bold/hovered | Fill | Primary, Evergreen, Hovered |
| surface/evergreen/bold/pressed | Fill | Primary, Evergreen, Pressed |
| surface/indigo/bold | Fill | Type=Primary, Color=Indigo |
| surface/indigo/bold/hovered | Fill | Primary, Indigo, Hovered |
| surface/indigo/bold/pressed | Fill | Primary, Indigo, Pressed |
| background/canvas | Fill | Secondary and Tertiary, Default |
| background/interactive/hovered | Fill | Secondary and Tertiary, Hovered |
| background/interactive/pressed | Fill | Secondary and Tertiary, Pressed |
| background/disabled | Fill | State=Disabled |
| surface/danger/subtle, /hovered, /pressed | Fill | Type=Danger |
| surface/info/subtle, /hovered, /pressed | Fill | Type=Information |
| surface/success/subtle, /hovered, /pressed | Fill | Type=Success |
| surface/warning/subtle, /hovered, /pressed | Fill | Type=Warning |

### Text

| Token | Usage | Notes |
|--------|--------|--------|
| text/inverse | Label | Type=Primary |
| text/evergreen | Label | Type=Secondary, Color=Evergreen |
| text/indigo | Label | Type=Secondary, Color=Indigo |
| text/primary | Label | Type=Tertiary |
| text/danger | Label | Type=Danger |
| text/info | Label | Type=Information |
| text/success | Label | Type=Success |
| text/warning | Label | Type=Warning |
| text/disabled | Label | State=Disabled |

### Border

| Token | Usage | Notes |
|--------|--------|--------|
| border/evergreen | 1px border | Type=Secondary, Color=Evergreen |
| border/indigo | 1px border | Type=Secondary, Color=Indigo |
| border/strong | 1px border | Type=Tertiary |
| border/danger | 1px border | Type=Danger |
| border/info | 1px border | Type=Information |
| border/success | 1px border | Type=Success |
| border/warning | 1px border | Type=Warning |
| border/disabled | 1px border | Secondary, State=Disabled |
| border/focus | Focus border | State=Focused |
| border.base.focus.width | Focus border width (2) | State=Focused |
| width/1 | Border width (1) | Bordered variants |

### Typography

| Token | Usage | Notes |
|--------|--------|--------|
| Text/Button/MD | Label | Size=MD: size/14, line-height/16, weight/semibold, family/body |
| Text/Button/SM | Label | Size=SM: size/12, line-height/16, weight/semibold, family/body |

### Spacing

| Token | Usage | Notes |
|--------|--------|--------|
| space/16 | Horizontal padding | Size=MD |
| space/8 | Vertical padding | Size=MD |
| space/6 | Bottom padding | Primary, Evergreen, MD, Default |
| space/12 | Horizontal padding | Size=SM |
| space/4 | Vertical padding | Size=SM |
| gap/sm | Gap between icon and label | |

### Radius

| Token | Usage | Notes |
|--------|--------|--------|
| semantic/sm | Container radius | Corner=Default |
| semantic/pill | Container radius | Corner=Rounded |

## Interaction

The component has Hovered, Pressed, Focused and Disabled states as variants. Activation behavior, loading behavior and keyboard behavior are not documented.

## Accessibility

| Topic | Information |
|--------|--------|
| Accessibility Requirement | [Pending confirmation] |
| Visible State Support | State=Focused (2px border/focus border) and State=Disabled variants. |
| Notes | No roles, keyboard behavior or accessible names are documented. |

---

## Content Guidelines

- label: visible button text (default: "Button").
- Length limits, casing and wording rules: [Pending confirmation]

---

## Examples

### Example 1

Configuration:

```text
Type=Primary, Color=Evergreen, Size=MD, Corner=Default
```

Description:

Primary action (source: Figma component description).

### Example 2

Configuration:

```text
Type=Tertiary, Color=Default, Size=SM
```

Description:

Action without emphasis (source: Figma component description).

### Example 3

Configuration:

```text
Type=Primary, Color=Indigo, Corner=Rounded, Size=SM
```

Description:

Rounded variant (source: Figma component description).

---

## Invalid Combinations

- Type=Tertiary + Color=Evergreen or Color=Indigo (Tertiary only accepts Color=Default)
- Type=Danger, Information, Success or Warning + Color=Evergreen or Color=Indigo
- State=Disabled + Type=Tertiary, Danger, Information, Success or Warning (variant does not exist)
- Type=Primary or Secondary + Color=Default + State other than Disabled (variant does not exist)

---

## QA Checklist

- Properties documented.
- Property names match Figma exactly.
- Variant values match Figma exactly.
- Defaults documented.
- Invalid combinations documented.
- Tokens verified.
- No undocumented behavior added.
- No undocumented accessibility behavior added.
- Height inconsistencies in Size=MD resolved.
- Icon tokens defined.

---

## Pending Clarification

- Size=MD height varies across variants (30, 32 and 34). Which value is correct?
- Primary + Evergreen + Default + MD uses 8 top / 6 bottom padding, unlike the other variants. Is this intentional?
- Disabled is only available for Primary and Secondary with Color=Default. Should Tertiary, Danger, Information, Success and Warning have a Disabled variant?
- The Figma description says "State=Disabled does not apply Color change", but Primary and Secondary with Color=Default exist only as Disabled. Confirm the intended rule.
- Property names showLeadingIcon, showTrailingIcon and label use camelCase unlike other components. Confirm the exact names in Figma.
- Icon color and the allowed icons for the leading and trailing slots.
- Interaction and keyboard behavior; accessibility (roles, accessible name, focus order).
- Loading behavior (no Loading state exists).
- Secondary + Indigo, Information, Success and Warning token pairing was checked at component-set level, not variant by variant.
- Status, version and owner.

---

## Notes / Changelog

Generated from available source material on 2026-10-19.