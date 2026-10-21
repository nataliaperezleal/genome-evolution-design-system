---
component: "Avatar"
system: "Genome Evolution Design System"
type: "Not verified in Figma"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-21"
---

# Avatar

System: Genome Evolution Design System

## Component Summary

Avatar is a component with three Type values (Print, Person, Icon), five Size values, and two State values. The Color values Evergreen and Indigo exist for Type=Print.

## Quick Reference

### What It Is

[Pending confirmation]

Verified observation: Figma exposes three Type values. Print contains a text label, Person contains a photographic image, and Icon contains a single vector graphic.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Type | Print, Person, Icon | Not verified in Figma |
| Color | Default, Evergreen, Indigo | Not verified in Figma |
| Size | 16, 24, 32, 40, 48 | Not verified in Figma |
| State | Default, Focused | Not verified in Figma |

Evergreen and Indigo exist only for Type=Print. Type=Person and Type=Icon exist only with Color=Default.

### Default Configuration

[Pending confirmation]

### Typical Usage

[Pending confirmation]

## Purpose / Intent

[Pending confirmation]

## When to Use

[Pending confirmation]

## When NOT to Use

[Pending confirmation]

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Not verified in Figma | Root element with the variable radius/24 bound in Type=Print and Type=Person variants. In Type=Print it carries the fill and border. In Type=Person the root has no fill or border. |
| Label | Not verified in Figma | Centered text present in Type=Print variants. The sample content in every Print variant is "B". |
| Image | Not verified in Figma | Layer named "unsplash:LWkFHEGpleE" in Type=Person variants, with a literal 360px corner radius. |
| Icon graphic | Not verified in Figma | Single vector graphic filling Type=Icon variants. The glyph is not identified by name. |
| State indicator | Not verified in Figma | Small element at the bottom-right of Print and Person variants, exposed through a `showState` switch in the generated component interface. Its Figma property type, default, meaning, and fill color are not verified. Not present in Type=Icon variants. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Variant dimensions | Width = Height = Size value (16, 24, 32, 40, 48) | Figma metadata, all 50 variants |
| Corner radius (token binding) | Variable radius/24 (value 24) is bound on the root of all 30 Type=Print variants and all 10 Type=Person variants | Figma design context; value from Figma variable definitions |
| Corner radius (Person image layer) | Literal 360px, not bound to a variable | Figma design context |
| Corner radius (Type=Icon) | No radius found on the root of the 10 Icon variants | Figma design context |
| Border (Print, Color=Default, State=Default) | 1px, border/strong | Figma design context |
| Border (Print, Color=Evergreen or Indigo, State=Default) | None; fill only | Figma design context |
| Border (State=Focused, Print and Person) | 2px, border/focus (focus/width). In Person it is applied to the image layer. | Figma design context |
| State indicator size | 6 (Size 16), 8 (Size 24), 10 (Size 32), 12 (Size 40), 12 (Size 48) | Figma design context |
| State indicator position (top = left) | Size 16: 9 or 10; Size 24: 15 or 16; Size 32: 21 or 22; Size 40: 27 or 28; Size 48: 35 or 36 | Figma design context |

The indicator position is 1px smaller in Print, Color=Default, State=Default than in the other Print variants and in the Person variants, at every size. The reason is not documented (see Pending Clarification).

The rendered corner radius at Sizes below 48 was not independently measured. Measurements are per variant and are not generalized across variants. Person and Icon variants were measured for their root dimensions, borders, and indicator geometry only.

## Semantics

[Pending confirmation]

## Iconography

| Slot | Verified Icon / Description | Evidence |
|------|-----------------------------|----------|
| Type=Icon graphic | A single vector graphic per Size and State. The glyph name is not exposed. | Figma design context |

## Variants (Properties)

### Type

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Print | Text label inside a container | 30 variants |
| Person | Photographic image | 10 variants, Color=Default only |
| Icon | Single vector graphic | 10 variants, Color=Default only |

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Print: background/canvas fill, border/strong border, label in text/secondary | Figma variable bindings |
| Evergreen | Print: surface/evergreen/subtle fill, label in text/evergreen, no border in State=Default | Print only |
| Indigo | Print: surface/indigo/subtle fill, label in text/indigo, no border in State=Default | Print only |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| 16 | 16 x 16; Print label style Text/Label/XS | Figma |
| 24 | 24 x 24; Print label style Text/Body/XS Strong | Figma |
| 32 | 32 x 32; Print label style Text/Body/SM Strong | Figma |
| 40 | 40 x 40; Print label style Text/Body/MD Strong | Figma |
| 48 | 48 x 48; Print label style Text/Body/MD Strong | Figma |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Visual variant | Figma |
| Focused | Visual variant with a 2px border/focus ring (see States) | Figma |

Inventory completeness: all 50 variants listed in the node metadata were inspected. Properties defined outside this node, if any, were not inspected.

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Visual variant | Print Color=Default: 1px border/strong. Print Evergreen and Indigo: fill only, no border. Person and Icon: no border. | Figma |
| Focused | Visual variant | Print Color=Default: a 2px border/focus replaces the 1px border/strong. Print Evergreen and Indigo: a 2px border/focus is present where Default has no border. Person: 2px border/focus on the image layer at all five Sizes. Icon: a separate graphic asset whose inset is -12.5% (Size 16), -8.33% (24), -6.25% (32), -5% (40), and -4.17% (48), which equals 2px at each size by arithmetic. The ring color of the Icon asset was not verified. | Figma |

These are visual state variants only. They do not prove that any interaction, focus behavior, or state transition is implemented.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color | background/canvas (#ffffff) | Print, Color=Default fill | Figma variable binding |
| Color | border/strong (#5f6d62) | Print, Color=Default border in State=Default | Figma variable binding |
| Color | border/focus (#339947) | Border in State=Focused (Print, Person) | Figma variable binding |
| Color | text/secondary (#5f6d62) | Print, Color=Default label | Figma variable binding |
| Color | surface/evergreen/subtle (#eefbf2) | Print, Color=Evergreen fill | Figma variable binding |
| Color | text/evergreen (#297a39) | Print, Color=Evergreen label | Figma variable binding |
| Color | surface/indigo/subtle (#fdf5ff) | Print, Color=Indigo fill | Figma variable binding |
| Color | text/indigo (#6b1b99) | Print, Color=Indigo label | Figma variable binding |
| Shape | radius/24 (24) | Corner radius bound on the root of Print and Person variants. Not bound on the Person image layer (literal 360px) or on Icon variants. | Figma variable binding |
| Border width | focus/width (2) | State=Focused border | Figma variable binding |
| Typography | Text/Label/XS | Print label at Size 16 (family/body, size/11, weight 600, line-height/16, letter-spacing/wide) | Figma |
| Typography | Text/Body/XS Strong | Print label at Size 24 (size/12, line-height/16, letter-spacing/normal) | Figma |
| Typography | Text/Body/SM Strong | Print label at Size 32 (size/14, line-height/20, letter spacing 0) | Figma |
| Typography | Text/Body/MD Strong | Print label at Sizes 40 and 48 (size/16, line-height/20, letter-spacing/normal) | Figma |

The variable icon/secondary (#849588) is returned for this node, but its usage in the component was not established. The 1px Default border width is not bound to a variable that I could identify. Token values come from Figma only; repository token JSON files were not used.

## Interaction

[Pending confirmation]

## Accessibility

[Pending confirmation]

## Invalid Combinations

[Pending confirmation]

Observation, not a rule: Color values Evergreen and Indigo are not provided for Type=Person or Type=Icon.

## QA Checklist

- [x] Component identity and source references verified.
- [ ] Documented properties and values checked against available Figma evidence.
- [x] Variant inventory completeness assessed and any inspection limitations documented.
- [ ] Default values verified, or unresolved conflicts recorded.
- [ ] Layout measurements checked against the relevant configurations.
- [ ] Token mappings verified against their actual sources.
- [x] Visual states distinguished from verified interactive behavior.
- [ ] Accessibility claims supported by explicit evidence.
- [ ] Invalid combinations supported by explicit evidence.
- [x] Recommendations distinguished from verified observations.
- [ ] English and Spanish documentation are semantically equivalent.
- [x] No unresolved template placeholders remain.
- [x] No template instructions remain in the final document.
- [ ] No unsupported or fabricated information has been added.
- [x] Historical changes included only when supported by version history.

## Pending Clarification

1. Component structure. Node 2040:247 is a frame holding 50 components, and it is not confirmed as a component set. Properties defined outside it, if any, were not inspected. Resolve by confirming the component set in Figma.
2. Property inventory and defaults. The default value of Type, Color, Size, and State is not established. The generated interface also lists `label` (sample "B") and `showState`, but whether they are Figma properties, their types, and their defaults are unverified. Resolve by confirming the component properties panel in Figma.
3. State indicator. Its purpose, fill color (an SVG asset that was not opened), and property status are unverified. Its position is 1px smaller in Print, Color=Default, State=Default than in other variants, and it is not known whether this is intentional.
4. Layout and radius. The rendered corner radius below Size 48 and the Person image layer's literal 360px radius are not reconciled with the radius/24 binding. The ring color of Icon Focused assets is not verified.
5. Tokens. The variable weight/semibold resolves to the style name "Medium" with numeric weight 600. The usage of icon/secondary is unknown. The 1px Default border width has no identified variable.
6. Not documented in Figma: purpose, usage guidance, restrictions, semantics, interaction, accessibility, invalid combinations, status, version, owner, and tags.
7. Person image. It is a placeholder photograph. Whether it is meant to be swapped is not documented.
8. Print-only colors. It is not known whether the absence of Evergreen and Indigo for Person and Icon is intentional.

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-21.

[No verified historical changes available]
