---
component: "Link"
system: "Genome Evolution Design System"
type: "Component set"
status: "Not verified in Figma"
version: "Not verified in Figma"
owner: "Not verified in Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2185-571"
last_updated: "2026-10-23"
tags:
  - "navigation"
  - "link"
  - "text-action"
---

# Link

System: Genome Evolution Design System

## Component Summary

Link is an underlined text element in three color themes and two sizes, with visual states for default, hover, pressed, visited, focus, and disabled.

## Quick Reference

### What It Is

Evidence-based interpretation: a text link for navigation or lightweight actions. The component set (Figma node `2185:571`) consists of a single underlined text layer, with a `Visited` state (a state specific to links that point to destinations) and a 2px focus outline in `Focused`. No written component description is defined for Link in Figma.

### Key Properties

| Property | Available Values | Default |
|----------|------------------|---------|
| Color | Default, Indigo, Evergreen | Default |
| State | Default, Hovered, Pressed, Visited, Focused, Disable | Default |
| Size | MD, SM | MD |
| text | Text | "Link" |

### Default Configuration

The component property defaults exposed by Figma are `Color=Default`, `State=Default`, `Size=MD`, and `text="Link"`. This corresponds to variant `2185:572`, the top-left variant of the component set.

### Typical Usage

Verified observations:

- The link text is underlined in every variant.
- `Size=MD` uses 14px text in a 32px-tall area; `Size=SM` uses 12px text in a 24px-tall area. Width adjusts to the text.
- `Color=Indigo` and `Color=Evergreen` change the `Default`, `Focused`, and `Visited` (MD) colors. `Hovered` and `Pressed` use the same colors for all three themes.
- `State=Disable` exists only for `Color=Default`.

Evidence-based interpretation:

- Use `Color=Default` for standard links. Use `Indigo` or `Evergreen` to match those color themes, which also appear as `Color` values in the Button component.
- Use `SM` in dense contexts (for example, tables, helper text, or compact panels) and `MD` in standard content.

## Purpose / Intent

### Problem Solved

Evidence-based interpretation: users need a recognizable, low-emphasis way to navigate to another page, section, or resource without the visual weight of a button.

### Expected Outcome

Evidence-based interpretation: the user recognizes the underlined text as interactive, activates it, and, when the destination has been visited before, can distinguish it through the `Visited` color.

### Typical Context

Evidence-based interpretation: within content, forms, helper text, tables, and supporting actions where a text-only affordance is appropriate.

## When to Use

Evidence-based interpretations, derived from the states and structure:

- To navigate to another page, section, or external resource.
- For secondary or inline actions that do not need button emphasis.
- Where tracking previously visited destinations is useful (`State=Visited`).

The Button component's Figma description recommends a link over a button for simple page-to-page navigation.

## When NOT to Use

[No documented restrictions found]

No usage restrictions are defined for Link in Figma. As recommendations only:

- Do not use Link for primary actions that need visual emphasis; use Button.
- Do not use Link for non-interactive text; the underline signals interactivity.

## Structure (Anatomy)

### Component Parts

| Part | Required / Optional | Description |
|------|---------------------|-------------|
| Container | Required | Auto-layout frame with padding and a 4px radius. Shows a 2px focus border in `Focused`; otherwise has no fill or border. |
| Text | Required | Underlined, single-line, centered text. Default text: "Link". |

### Layout

| Property | Verified Value | Evidence |
|----------|----------------|----------|
| Padding — `MD` | 16px horizontal, 8px vertical | `space/16`, `space/8` |
| Padding — `SM` | 8px horizontal, 4px vertical | `space/8`, `space/4` |
| Height | 32px (`MD`); 24px (`SM`) | Direct measurement |
| Width | Hugs the text (61px `MD`, 41px `SM` with "Link") | Direct measurement |
| Corner radius | 4px | `radius/4` |
| Gap | 0px | `gap/none` |
| Focus border | 2px, `Focused` only | Direct measurement (not bound to a width token); color `border/focus` |
| Text wrapping | None (single line) | Figma text settings |

## Semantics

Evidence-based interpretation:

- Link represents a navigation target or a lightweight action. The `Visited` state indicates that the destination has been visited before.
- `Color` is a theme choice, not a semantic status; no meaning beyond theming is documented.
- `Disable` represents a link that is not currently available.

Not verified in Figma: HTML element (for example, `a` vs `button`), ARIA roles or attributes, how disabled links are exposed, and screen-reader behavior.

## Variants (Properties)

The variant inventory is complete: 32 variants (3 `Color` × 5 states × 2 `Size`, plus `State=Disable` for `Color=Default` in both sizes). All variants were inspected.

### Color

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Blue link. | `link/default` (#004a76); `Visited` (MD) `link/visited` (#2f7cb6) |
| Indigo | Purple link. | `link/indigo/default` (#6b1b99); `Visited` (MD) `link/indigo/visited` (#a155ce) |
| Evergreen | Green link. | `link/evergreen/default` (#297a39); `Visited` (MD) `link/evergreen/visited` (#3db856) |

### State

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Default | Resting link in the `Color` theme color. | `link/default`, `link/indigo/default`, `link/evergreen/default` |
| Hovered | Darker link color; pointer cursor set in Figma. Same color for all themes. | `link/hovered` (#003353) |
| Pressed | Darkest link color. Same color for all themes. | `link/pressed` (#002842) |
| Visited | Lighter, theme-specific color in `MD`; in `SM`, all themes use `link/pressed`. | See Pending Clarification |
| Focused | Theme color plus a 2px focus border with 4px radius. | `border/focus` (#339947) |
| Disable | Muted gray link. Available only for `Color=Default`. | `link/disabled` (#849588) |

### Size

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| MD | 14px text (`Text/Button/MD Underline`, 14/16); 16px × 8px padding; 32px tall. | Default |
| SM | 12px text (`Text/Button/SM Underline`, 12/16); 8px × 4px padding; 24px tall. | — |

### text

| Value | Verified Description | Evidence / Notes |
|-------|----------------------|------------------|
| Text | Link label. | Default: "Link" |

## States

| State | Verified Description | Visual Changes | Evidence |
|-------|----------------------|----------------|----------|
| Default | Resting | Theme color, underlined | Variants `2185:572`, `2255:1837`, `2255:1887` |
| Hovered | Pointer over the link | Color changes to `link/hovered` for all themes | Variants `2185:606`, `2255:1839`, `2255:1889` |
| Pressed | Being activated | Color changes to `link/pressed` for all themes | Variants `2185:608`, `2255:1841`, `2255:1891` |
| Visited | Destination previously visited | Theme-specific visited color (`MD`); `link/pressed` (`SM`) | Variants `2189:5021`, `2255:1843`, `2255:1893` |
| Focused | Has focus | 2px `border/focus` outline around the padded area | Variants `2185:610`, `2255:1845`, `2255:1895` |
| Disable | Unavailable | `link/disabled` color, still underlined | Variants `2185:612`, `2185:662` |

These are visual state variants. Transitions, timing, and the conditions that trigger each state are not defined in Figma.

## Token Mapping

All tokens below are verified as Figma variables or text styles used by this component set.

| Category | Token | Verified Usage | Evidence |
|----------|-------|----------------|----------|
| Color — text | `link/default` | Text, `Color=Default` (`Default`, `Focused`) | Figma variables |
| Color — text | `link/indigo/default` | Text, `Color=Indigo` (`Default`, `Focused`) | Figma variables |
| Color — text | `link/evergreen/default` | Text, `Color=Evergreen` (`Default`, `Focused`) | Figma variables |
| Color — text | `link/hovered` | Text, `Hovered` (all themes) | Figma variables |
| Color — text | `link/pressed` | Text, `Pressed` (all themes); `Visited` in `SM` (all themes) | Figma variables |
| Color — text | `link/visited`, `link/indigo/visited`, `link/evergreen/visited` | Text, `Visited` in `MD`, per theme | Figma variables |
| Color — text | `link/disabled` | Text, `Disable` | Figma variables |
| Color — border | `border/focus` | Focus border, `Focused` | Figma variables |
| Spacing | `space/16`, `space/8` | Padding (`MD`) | Figma variables |
| Spacing | `space/8`, `space/4` | Padding (`SM`) | Figma variables |
| Spacing | `gap/none` | Container gap | Figma variables |
| Radius | `radius/4` | Container radius (visible as the focus border radius) | Figma variables |
| Typography | `Text/Button/MD Underline` | Text (`MD`) | Figma text style |
| Typography | `Text/Button/SM Underline` | Text (`SM`) | Figma text style |

Not bound to a token: the 2px focus border width. Both text styles use `weight/semibold`, which resolves to the font style "Medium" while the styles declare weight 600.

## Interaction

- Verified interactions: prototype interactions were not available through the inspection tools.
- Observed states: `Hovered` (with a pointer cursor set in Figma), `Pressed`, `Visited`, `Focused`, and `Disable` are visual state variants.
- Evidence-based interpretation: the link navigates or triggers an action when activated, shows hover and pressed feedback, and shows a focus outline for keyboard focus. Navigation targets, new-tab behavior, and how `Disable` prevents activation are not defined in Figma.

## Accessibility

Verified accessibility requirements: none are documented in Figma.

Accessibility-related observations:

- The underline is present in every state, so links are not identified by color alone.
- `Focused` provides a visible 2px focus outline (`border/focus`, 3.63:1 against white).
- Contrast ratios calculated against a white background (the component has no background of its own): `link/default` 9.37:1, `link/indigo/default` 9.37:1, `link/evergreen/default` 5.33:1, `link/hovered` 13.14:1, `link/pressed` 15.19:1, `link/visited` 4.49:1, `link/indigo/visited` 4.46:1, `link/evergreen/visited` 2.56:1. The three visited colors fall below the common 4.5:1 WCAG AA threshold for normal text; `link/evergreen/visited` falls well below. See Pending Clarification.
- The `SM` size has a 24px-tall area.

Missing accessibility information: link vs button semantics, how disabled links are exposed to assistive technology, keyboard behavior, and guidance for links that open in a new tab or external site.

## Content Guidelines

Verified observations:

- Default text is "Link", a placeholder.
- Link text is single-line and centered.

Recommendations:

- Write link text that describes the destination or action (for example, "View invoice"), not generic text such as "Click here".
- Keep link text short so it stays on one line.

## Examples

### Standard link

Configuration: `Color=Default`, `State=Default`, `Size=MD`

Description: a standard underlined link in content.

Evidence / Classification: existing Figma configuration (variant `2185:572`).

### Compact themed link

Configuration: `Color=Evergreen`, `State=Default`, `Size=SM`

Description: a small link that matches the Evergreen theme, for dense layouts.

Evidence / Classification: existing Figma configuration (variant `2255:1897`).

## Invalid Combinations

[No documented invalid combinations found]

Unavailable combinations: the variant set has no `Color=Indigo, State=Disable` or `Color=Evergreen, State=Disable` variants, so these combinations cannot be selected in Figma. Whether they are intentionally excluded is not documented; see Pending Clarification.

## Pending Clarification

1. Disabled themed links. `State=Disable` exists only for `Color=Default`. Confirm whether Indigo and Evergreen links can be disabled, and if so, whether they should switch to `Color=Default, State=Disable`.
2. `Visited` in `SM`. `SM` visited links use `link/pressed` for all themes, while `MD` visited links use the theme-specific visited tokens. Confirm which is intended.
3. Theme colors on hover and press. `Hovered` and `Pressed` use the same dark blue for all themes, so Indigo and Evergreen links turn blue on interaction. Confirm whether theme-specific hover and pressed tokens are needed.
4. Visited contrast. `link/visited` (4.49:1), `link/indigo/visited` (4.46:1), and especially `link/evergreen/visited` (2.56:1) are below 4.5:1 against white. Confirm whether these colors should be adjusted.
5. State naming. The value `Disable` differs from `Disabled` used in other components (for example, Input and Button). Confirm whether it should be renamed; renaming affects existing instances.

## Notes / Changelog

Generated from Figma evidence (component set `2185:571`) on 2026-10-23.

[No verified historical changes available]
