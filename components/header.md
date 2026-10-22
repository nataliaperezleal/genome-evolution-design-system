---
component: "Header"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2184-1376"
last_updated: "2026-10-22"
tags:
  - "header"
  - "navigation"
  - "app-bar"
---

# Header

System: Genome Evolution Design System

## Component Summary

Header is a 1440 px wide top bar on `surface/evergreen/bold`, available in three product themes: `Apps Designer` (product identity and user information), `Apps Tools` (tool actions, the current app and app actions) and `Workportal` (main navigation, search and user avatar).

## Quick Reference

### What It Is

Evidence-based interpretation: Header is the application top bar that identifies the product and gives access to navigation, tools and the user's account. This is supported by the component name, its full-width layout at the top of a 1440 px frame, the Bizagi logo in every theme, and the theme-specific content: user name, email and avatar (`Apps Designer`), tool and app actions (`Apps Tools`), and navigation items with search and avatar (`Workportal`). Figma does not include a written usage description for the Header component set.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Theme | Apps Designer, Apps Tools, Workportal | Apps Designer |
| userName (boolean) | true, false | true |
| mail (boolean) | true, false | true |
| avatar (boolean) | true, false | true |

Defaults are taken from the component property definitions in Figma. `userName`, `mail` and `avatar` affect only `Theme=Apps Designer`; the other themes have fixed content. Labels (product name, navigation items, actions) are not exposed as properties.

### Default Configuration

`Theme=Apps Designer` with user name, email and avatar shown: a 1440 × 64 px bar with the Bizagi icon, the "App Designer" product name, and on the right "User name", "user.name@company.com" and a 40 px `Print` avatar.

### Typical Usage

Verified observation: The component set has three variants, one per `Theme`. Each theme has a different structure and content; they share the width, the brand background and the Bizagi logo.

Evidence-based interpretation:

- `Apps Designer` for the header of the App Designer product, with the signed-in user's information.
- `Apps Tools` for an app-editing context: tool actions on the left, the current app in the center and app actions (unlock, save status, download, open, publish) on the right.
- `Workportal` for the Workportal product: main navigation, search and the user avatar.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: Provides a consistent, branded top bar for each product context, with the navigation and actions that context needs.

### Expected Outcome

Evidence-based interpretation: Users can identify the product they are in, reach navigation and tools, and see their account.

### Typical Context

Evidence-based interpretation: The top of application screens designed at 1440 px width, in Bizagi products (App Designer, app tools and Workportal).

## When to Use

Evidence-based interpretations based on the variants:

- As the top bar of App Designer screens (`Apps Designer`).
- As the top bar while working on an app (`Apps Tools`).
- As the top bar of Workportal screens (`Workportal`).

## When NOT to Use

[No documented restrictions found]

Limitations of the current component:

- The width is fixed at 1440 px; responsive behavior is not defined.
- Navigation items, actions and labels are fixed in each theme and are not exposed as properties.

## Composition and Hierarchy Rules

### Apps Designer (64 px)

| Position | Content |
|----------|---------|
| Left | Logo block: 32 px Bizagi icon with 16 px padding. |
| Left, after logo | Product name: small Bizagi wordmark above "App Designer" (vector graphics). |
| Right | User block: "User name" (`userName`) and "user.name@company.com" (`mail`), right-aligned, then a 40 px Avatar (`avatar`; `Type=Print`, `Color=Evergreen`). |

### Apps Tools (64 px)

| Position | Content |
|----------|---------|
| Left | Bizagi icon, then four actions: Controls (`add`), Settings (`settings`), Tools (`toolbox`), ADA Charts (`ADA-Charts`). |
| Center | "Main menu" button (lock icon, label, chevron-down) above the app name ("test-app-ux"). |
| Right | Unlock app (`lock-open`), App saved (`check`, after the label), Download app (`download`), Open app (`external-link`), Publish (`publish`). |

- Each action is a 64 px high item with a 16 px icon and a 10 px label, 16 px horizontal padding and an 8 px gap.
- Publish is the last item and is highlighted with a `surface/evergreen/subtle` background and a `text/primary` label.

### Workportal (48 px)

| Position | Content |
|----------|---------|
| Left | Full Bizagi wordmark (104 × 32 px), then navigation items: Me (`home`), Inbox (`inbox`), New Case (`suitcase-add`), Queries (`Search`), Reports (`chart-bars`), Live Processes (`live-process`), Admin (`settings`). |
| Right | Search field (Input, 244 px wide, placeholder "Search"), then a 24 px Avatar (`Type=Print`, `Color=Evergreen`). |

- New Case, Queries, Reports, Live Processes and Admin end with an `arrow-dropdown` icon. Evidence-based interpretation: these items open menus; Me and Inbox navigate directly.

### Child components

| Child | Used in | Configuration observed |
|-------|---------|------------------------|
| Bizagi logo | All themes | `Type=Icon` 32 px (Apps Designer, Apps Tools), `Type=Full` 104 × 32 px (Workportal); white |
| Avatar | Apps Designer, Workportal | `Type=Print`, `Color=Evergreen`, `Size=40` / `Size=24` |
| Button | Apps Tools (Main menu) | Overridden: `background/alpha` fill, `border/evergreen` border, lock and chevron-down icons |
| Input | Workportal (search) | 24 px field with a search icon in the leading slot, placeholder "Search"; label and helper hidden |

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Bar | Required | 1440 px wide container on `surface/evergreen/bold`. |
| Logo | Required | Bizagi icon or wordmark. |
| Product identity | Apps Designer | Product name graphic. |
| Tool and app actions | Apps Tools | Icon-and-label action items on both sides; current app in the center. |
| Navigation menu | Workportal | Icon-and-label navigation items. |
| User area | Apps Designer, Workportal | User name and email (Apps Designer), search (Workportal), avatar. |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Width | 1440 px | Variant dimensions |
| Height | 64 px (Apps Designer, Apps Tools), 48 px (Workportal) | Variant dimensions |
| Background | `surface/evergreen/bold` | Variable binding |
| Horizontal padding | 16 px (Apps Designer content area, Workportal) | Design context |
| Logo block | 16 px padding (Apps Designer, Apps Tools); 24 px horizontal, 8 px vertical (Workportal) | Design context |
| Apps Tools action items | 64 px high, 16 px horizontal padding, 8 px gap, 16 px icons | Design context |
| Workportal navigation items | Full height, `space/16` horizontal padding, 4 px gap, 16 px icons | Variable binding, design context |
| Apps Designer user block | 154 px wide, right-aligned; 16 px gap to the avatar | Design context |
| Workportal user area | Search 244 px wide; 16 px gap to the avatar | Design context |

## Semantics

Evidence-based interpretation:

- The logo identifies the Bizagi product family; the product name or navigation identifies the specific product.
- In `Apps Tools`, "App saved" with a check mark is a status indicator, while the other items are actions; Publish is the emphasized action.
- In `Workportal`, the navigation items lead to product areas; items with `arrow-dropdown` open submenus.

Not verified in Figma: HTML landmarks (for example, banner or navigation), current-page indication, and the behavior of each item.

## Iconography

| Theme | Icons |
|-------|-------|
| Apps Tools | `add`, `settings`, `toolbox`, `ADA-Charts`, lock (Main menu), `chevron-down`, `lock-open`, `check`, `download`, `external-link`, `publish` |
| Workportal | `home`, `inbox`, `suitcase-add`, `Search`, `chart-bars`, `live-process`, `settings`, `arrow-dropdown`, search (in Input) |

All icons are 16 px.

## Variants (Properties)

The inventory below is complete: all three variants were inspected.

### Theme

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Apps Designer | 64 px; logo, product name, user name and email, 40 px avatar. | Default |
| Apps Tools | 64 px; logo and tool actions, Main menu and app name, app actions with highlighted Publish. | — |
| Workportal | 48 px; full wordmark, seven navigation items, search field, 24 px avatar. | — |

### userName, mail, avatar

| Property | Verified Description | Evidence / Notes |
|----------|----------------------|------------------|
| userName | Shows "User name". | Apps Designer only; default `true` |
| mail | Shows the email address. | Apps Designer only; default `true` |
| avatar | Shows the 40 px avatar. | Apps Designer only; default `true` |

## States

The Header component set has no state property. Navigation items and actions have no hover, pressed, selected or focused variants in this component.

## Token Mapping

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Surface | `surface/evergreen/bold` | Bar background | Variable binding |
| Surface | `surface/evergreen/subtle` | Publish item background (Apps Tools) | Variable binding |
| Text | `text/inverse` | Labels on the bar | Variable binding |
| Text | `text/primary` | Publish label | Variable binding |
| Background | `background/alpha` | Main menu button fill | Variable binding |
| Border | `border/evergreen` | Main menu button border | Variable binding |
| Spacing | `space/16` | Workportal navigation item padding | Variable binding |
| Typography | `Text/Body/XXS` | Apps Tools action labels | Text style |
| Typography | `Text/Label/XS` | App name (Apps Tools) | Text style |
| Typography | `Text/Body/SM`, `Body/medium/regular` | Workportal navigation labels | Text styles |
| Typography | `Body/medium/strong`, `Body/small/regular` | User name and email (Apps Designer) | Text styles |

Avatar, Button and Input tokens are documented with those components.

Current behavior:

- Several texts use the older `Body/...` text styles (`font/...` variables): the Apps Designer user name and email, and the Workportal "Inbox" and "Queries" labels. The other Workportal labels use `Text/Body/SM`.
- The "Live Processes" label is bound to `icon/inverse` instead of `text/inverse`; both resolve to the same color.
- Most paddings and gaps use fixed values rather than spacing variables.
- The product name in `Apps Designer` and the logos are vector graphics, not text.
- In `Workportal`, the search field's leading icon layer is named `calendar` and shows a search icon.

## Interaction

The component has no state variants. Prototype interactions were not inspected.

Not verified in Figma: what each action and navigation item does, how submenus open, active-page indication, and keyboard navigation.

## Accessibility

Accessibility-related observations:

- All navigation items and actions combine an icon with a text label.
- Apps Tools labels are 10 px (`size/10`); Workportal labels are 14 px.
- Labels use `text/inverse` on `surface/evergreen/bold`. Contrast ratios have not been verified.

Missing accessibility information (not verified in Figma): landmarks, current-page indication, focus appearance for items, keyboard support, and accessible names for the logo and avatar.

## Content Guidelines

Verified observations (sample content):

- Apps Designer: "User name", "user.name@company.com".
- Apps Tools: "Controls", "Settings", "Tools", "ADA Charts", "Main menu", "test-app-ux", "Unlock app", "App saved", "Download app", "Open app", "Publish".
- Workportal: "Me", "Inbox", "New Case", "Queries", "Reports", "Live Processes", "Admin", "Search".

Labels are single-line and use sentence or title case as shown.

## Examples

### App Designer header

Configuration: `Theme=Apps Designer`, `userName=true`, `mail=true`, `avatar=true`

Description: Product identity on the left and the user's name, email and avatar on the right.

Evidence / Classification: Default variant in Figma.

### App editing header

Configuration: `Theme=Apps Tools`

Description: Tool actions, the current app with its Main menu, and app actions ending with Publish.

Evidence / Classification: Existing variant in Figma.

### Workportal header

Configuration: `Theme=Workportal`

Description: Main navigation with dropdown items, search and avatar.

Evidence / Classification: Existing variant in Figma.

## Invalid Combinations

| Combination / Condition | Verified Reason | Evidence |
|-------------------------|-----------------|----------|
| `userName`, `mail` or `avatar` with `Theme=Apps Tools` or `Theme=Workportal` | The properties have no effect in these themes | Property bindings |

## Pending Clarification

None

## Notes / Changelog

Generated or reviewed using available source material on 2026-10-22.

[No verified historical changes available]
