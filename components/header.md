---
component: Header
system: Genome Evolution Design System
type: Navigation / Global bar
status: Done
version: 1.2
figma_node: 2184:1376
last_updated: "2026-10-19"
tags: [header, navigation, global-bar, Apps Designer, Apps Tools, Workportal]
---

# Header

## Quick Reference

### What it is
Full-width (1440px) global navigation bar whose structure and content change according to the product theme. Three themes exist: `Apps Designer`, `Apps Tools` and `Workportal`.

### Key Properties

| Property | Values | Default |
|---|---|---|
| Theme | Apps Designer \| Apps Tools \| Workportal | Apps Designer |
| avatar | true \| false | true |
| mail | true \| false | true |
| userName | true \| false | true |

### Default Configuration
`Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`

### Invalid Combinations
- Mixing the content of one theme into another (each theme has a fixed structure).
- Using the header without a logo zone.
- Avatar `Size=40` in `Theme=Workportal` (it uses `Size=24`).
- Avatar `Size=24` in `Theme=Apps Designer` (it uses `Size=40`).

### Typical Usage
- `Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`
- `Theme=Apps Tools`
- `Theme=Workportal`

## Purpose / Intent
Main global navigation bar of the application, available in three themes depending on the product or context (Apps Designer, Apps Tools, Workportal).

## When to Use
- When the main navigation bar of the application is needed in any of the three products/contexts.

## When NOT to Use
- As a section header or internal panel header.
- In viewports narrower than 1440px without a responsive adaptation.

## Structure (Anatomy)

### Component Parts

| Theme | Part | Content |
|---|---|---|
| Apps Designer | Logo | bizagi logo 32×32 |
| Apps Designer | Header → Content (296px) | Group logotype (8px high) + "App Designer" wordmark |
| Apps Designer | Header → User Actions | User name, email, Avatar (Color=Evergreen, Size=40) |
| Apps Tools | Left actions | Logo + 4 items with icon + text: Controls, Settings, Tools, ADA Charts |
| Apps Tools | Page info (204px) | Button "Main menu" (lock-closed icon + chevron-down icon) + label "test-app-ux" |
| Apps Tools | Right actions | Unlock app, App saved (check), Download app, Open app, Publish |
| Workportal | Left → Logo | Full bizagi logo 104×32 |
| Workportal | Left → Navigation Menu | 7 Navigation Items: Me, Inbox, New Case, Queries, Reports, Live Processes, Admin |
| Workportal | User Actions | Search input (244px) + Avatar (Color=Evergreen, Size=24) |

### Layout

| Theme | Width × Height | Layout (as visible in Figma) |
|---|---|---|
| Apps Designer | 1440×64 | Row, items centered; Logo padding 16; Header padding horizontal 16, justify-between; gap 16 in User Actions |
| Apps Tools | 1440×64 | Row, justify-between; each action item padding horizontal 16, gap 8, height 64 |
| Workportal | 1440×48 | Row, justify-between, padding horizontal 16; Logo padding 24 horizontal / 8 vertical; Navigation Item padding horizontal 16, gap 4; gap 16 in User Actions |

## Iconography

| Theme | Icons (layer names in Figma) | Size |
|---|---|---|
| Apps Designer | bizagi (logo) | 32×32 |
| Apps Tools | add, settings, toolbox, ADA-Charts, lock-open, check, download, external-link, publish; Main menu button: check (layer name, lock-closed asset), close (layer name, chevron-down asset) | 16×16 |
| Workportal | home, inbox, suitcase-add, arrow-dropdown, Search, chart-bars, live-process, settings | 16×16 |

Note: some layer names do not match the icon they contain (see Pending Clarification).

## Variants (Properties)

| Property | Values | Default | Applies to |
|---|---|---|---|
| Theme | Apps Designer \| Apps Tools \| Workportal | Apps Designer | All |
| avatar | true \| false | true | Boolean visible in Theme=Apps Designer 
| mail | true \| false | true | Boolean visible in Theme=Apps Designer 
| userName | true \| false | true | Boolean visible in Theme=Apps Designer 

## Token Mapping

Tokens below are those exported by Figma for this node. Color token names were checked against `Color_RoleProduct.tokens.json`. Spacing, gap, radius, semantic and typography tokens were not cross-checked against their token files [Pending confirmation].

### Background

| Element | Token | Value |
|---|---|---|
| Header bar (all themes) | surface/evergreen/bold | #297a39 |
| Avatar | surface/evergreen/subtle | #eefbf2 |
| Publish item (Apps Tools) | surface/evergreen/subtle | #eefbf2 |
| Main menu button (Apps Tools) | background/alpha | #adb8b099 |
| Search input (Workportal) | background/canvas | #ffffff |

### Text

| Element | Token | Value |
|---|---|---|
| Nav items, actions, user name, email | text/inverse | #f7f8f7 |
| Publish label | text/primary | #2d342f |
| Avatar label | text/evergreen | #297a39 |
| Search placeholder | text/secondary | #5f6d62 |
| "Live Processes" label | icon/inverse (used as text color) | #f7f8f7 |
| "test-app-ux", "Download app" | text/inverse | #FFFFFF |

### Border

| Element | Token | Value |
|---|---|---|
| Main menu button | border/evergreen | #297a39 |
| Search input | border/default | #c3cbc5 |

### Icon
Token exported: icon/inverse (#f7f8f7), icon/evergreen (#297a39), icon/primary (#5f6d62). Mapping per icon: [Pending confirmation].

### Typography

| Element | Style |
|---|---|
| Apps Designer user name | Body/medium/strong |
| Apps Designer email | Body/small/regular |
| Apps Tools nav items and actions | Text/Body/XXS (10/14, regular) |
| Apps Tools Main menu | Text/Button/SM |
| Apps Tools page label | Text/Label/XS |
| Workportal nav items | Text/Body/SM (some items use Body/medium/regular) |
| Workportal search placeholder | Text/Body/XXS |
| Avatar label Size=40 | Text/Body/MD Strong |
| Avatar label Size=24 | Text/Body/XS Strong |

### Spacing
space/4, space/8, space/16, gap/sm, gap/xxxs (as exported by Figma).

### Radius
semantic/sm (4px) for Main menu button and Search input; radius/24 for Avatar.

## Examples

1. `Theme=Apps Designer`, `avatar=true`, `mail=true`, `userName=true`: logo, "App Designer" wordmark, "User name", "user.name@company.com" and Avatar Size=40.
2. `Theme=Apps Tools`: left actions (Controls, Settings, Tools, ADA Charts), Main menu with label "test-app-ux", right actions (Unlock app, App saved, Download app, Open app, Publish).
3. `Theme=Workportal`: navigation (Me, Inbox, New Case, Queries, Reports, Live Processes, Admin), Search input and Avatar Size=24.

## Invalid Combinations
- Mixing the content of one theme into another (each theme has a fixed structure).
- Using the header without a logo zone.
- Avatar `Size=40` in `Theme=Workportal`.
- Avatar `Size=24` in `Theme=Apps Designer`.

(Source: Figma component description.)

## QA Checklist
- [ ] Theme matches the product (Apps Designer, Apps Tools or Workportal)
- [ ] Dimensions: 1440×64 (Apps Designer, Apps Tools) and 1440×48 (Workportal)
- [ ] Avatar Size=40 in Apps Designer and Size=24 in Workportal
- [ ] Color and typography tokens are bound and not hard-coded
- [ ] Logo zone present
- [ ] Not used as an internal section/panel header

## Pending Clarification
1. Logo zone background: the description says `surface/evergreen/subtle`; the design renders `surface/evergreen/bold` in all three themes.
2. Property naming: description uses `theme`; variants use `Theme`. Booleans `avatar`, `mail`, `userName` appear in camelCase and only drive Apps Designer.
3. Apps Tools nav items typography: description says Text/Body/XS (12/16); design uses Text/Body/XXS (10/14).
4. Workportal search placeholder: description says Text/Body/XS; design uses Text/Body/XXS (10/14).
5. Workportal nav items mix Text/Body/SM and Body/medium/regular (line-height 22).
6. Text colors using white / Neutral/Neutral100 instead of text/inverse ("test-app-ux", "Download app"), and icon/inverse used as a text color ("Live Processes").
7. Main menu button padding: space/8 resolves to 9px and space/4 to 5px in the generated code, versus 8px/4px elsewhere.
8. Layer names not matching icons (Main menu: check/close; Search input: calendar).
9. Description mentions logo "Bizagi Apps 32×32" and Avatar "size/24 (radius pill)"; the design uses radius/24 and the bizagi icon.
10. States, interaction, semantics, accessibility, responsive behavior and Publish icon color.

## Notes / Changelog
- Description-derived rules (When NOT to Use, Invalid Combinations) come from the Figma component description.
- 2026-10-19: Initial documentation generated from available source material (node 2184:1376).