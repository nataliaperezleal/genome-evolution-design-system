---
component: Avatar
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [user-identity, profile, presence, status]
---

# Avatar

## Purpose

Visually represents a person or entity through an initial, generic icon, or real image with optional status indicator support. Avatars display user identity in lists, tables, profiles, comments, assignments, and mentions.

## Quick Reference

| Property | Values | Default |
|----------|--------|---------|
| Type | Icon, Person, Print | Icon |
| Color | Default, Evergreen, Indigo | Default |
| Size | 16, 24, 32, 40, 48 | 32 |
| Show State | true, false | true |
| Label | Text/Character | B |

## When to Use

- Show user identity in lists, tables, or profiles
- Indicate presence or availability with status indicator
- Represent people in comments, assignments, or mentions
- Display user selection or filtering in compact layouts

## When NOT to Use

- As a primary action button
- When available space is less than 16px
- To represent non-personal entities (use specific icon instead)
- As decorative element without contextual purpose

## Anatomy

| Part | Required | Description | Condition |
|------|----------|-------------|-----------|
| Container | Yes | Rounded square background | Always present |
| Content | Yes | Icon, photo, or initial | Depends on Type |
| Status Indicator | No | Small colored dot | Only when Show State=true |
| Background | Yes | Subtle color fill | Visible for Print type |
| Border | Conditional | Focus/default border | Visible in Focused state |

## Properties

| Property | Type | Default | Values | Applies To | Description |
|----------|------|---------|--------|------------|-------------|
| Type | Enum | Icon | Icon, Person, Print | All | Defines the content displayed: Icon (generic avatar), Person (user photo), Print (initial/letter) |
| Color | Enum | Default | Default, Evergreen, Indigo | All | Applies color theme to background and text. Default uses canvas background; Evergreen uses evergreen surface; Indigo uses indigo surface |
| Size | Enum | 32 | 16, 24, 32, 40, 48 | All | Size in pixels. Affects container dimensions, typography, and status indicator size |
| Show State | Boolean | true | true, false | All | Controls visibility of status indicator dot in top-left corner |
| Label | String | B | Any single character | Print only | Initial or character to display when Type=Print |

## States

| State | Description | Visual Changes |
|-------|-------------|-----------------|
| Default | Standard avatar appearance | No border modifications; regular opacity |
| Focused | Interactive focus state | Green focus border (border/focus color); status indicator remains visible |

## Sizes

| Size | Dimensions | Typography | Status Size | Notes |
|------|------------|-----------|-------------|-------|
| 16 | 16x16px | Text/Label/XS (11px) | 6x6px | Minimum size; status indicator may be cramped |
| 24 | 24x24px | Text/Body/XS Strong (12px) | 8x8px | Compact layout size |
| 32 | 32x32px | Text/Body/SM Strong (14px) | 10x10px | Default and recommended size |
| 40 | 40x40px | Text/Body/MD Strong (16px) | 12x12px | Large layout size |
| 48 | 48x48px | Text/Body/MD Strong (16px) | 12x12px | Extra large size for prominent display |

## Token Mapping

### Background

- **Type=Print, Color=Default**: background/canvas
- **Type=Print, Color=Evergreen**: surface/evergreen/subtle
- **Type=Print, Color=Indigo**: surface/indigo/subtle
- **Type=Person**: transparent (image based)
- **Type=Icon**: transparent

### Text

- **Type=Print, Color=Default**: text/secondary
- **Type=Print, Color=Evergreen**: text/evergreen
- **Type=Print, Color=Indigo**: text/indigo

### Border

- **Default state (Type=Print, Size=24+)**: border/strong
- **Focused state**: border/focus (width: 2px)

### Icon

- **Type=Icon, all sizes**: Generic person silhouette (varies by size)

### Typography

- **Size=16**: Text/Label/XS (family/body, weight/semibold, size/11, lineHeight/16, letterSpacing/wide)
- **Size=24**: Text/Body/XS Strong (family/body, weight/semibold, size/12, lineHeight/16, letterSpacing/normal)
- **Size=32**: Text/Body/SM Strong (family/body, weight/semibold, size/14, lineHeight/20, letterSpacing/normal)
- **Size=40+**: Text/Body/MD Strong (family/body, weight/semibold, size/16, lineHeight/20, letterSpacing/normal)

### Spacing

- **Status indicator position**: Top-left corner, inset by proportional margin relative to size
- **Container padding**: Content centered within container

### Radius

- **Container**: radius/24 (fully rounded square)
- **Image (Type=Person)**: radius/24
- **Icon container**: radius/24

### Shadow

[Pending confirmation]

## Accessibility

| Property | Value |
|----------|-------|
| Focus state | Visible green border (2px, border/focus color) |
| Status indicator | Visual-only; indicates presence state |
| Label (Type=Print) | Screenreader-accessible text content when Label is provided |
| Alternative text | [Pending confirmation] |

## Examples

| Example | Description | Configuration |
|---------|-------------|----------------|
| User list item | Compact avatar showing user identity | Type=Icon, Color=Default, Size=32, Show State=true |
| Profile page | Large avatar with user photo | Type=Person, Color=Default, Size=48, Show State=false |
| Initial badge | Avatar displaying letter initial | Type=Print, Color=Indigo, Size=40, Label=B, Show State=true |
| Focused state | Avatar in keyboard focus state | Any combination + Focus state |
| Team member | Evergreen-colored initial avatar | Type=Print, Color=Evergreen, Size=32, Label=J, Show State=false |
| Mention list | Small compact avatars | Type=Icon, Color=Evergreen, Size=16, Show State=false |

## Invalid Combinations

- **Type=Person without image**: Falls back to Icon automatically; avoid using Print as fallback
- **Label with Type=Icon or Type=Person**: Label property only applies to Type=Print
- **Size=16 with Show State=true**: Status indicator may not render correctly due to space constraints; use Show State=false for Size=16

## Usage Guidelines

- Use avatars to support identity, not as decorative imagery
- Keep labels to a single character when using the Print type
- Prefer 32px for most product surfaces and reserve larger sizes for profiles
- Hide the status indicator when space is limited or when presence is not relevant
- Use the Photo/Person type only when the image is meaningful and available

## Implementation Notes

- Keep the avatar shape fully rounded so it reads consistently across sizes
- Reserve focus styling for interactive avatar usage, such as profile links or selectors
- Keep the status indicator small enough to avoid competing with the main content
- Ensure fallback behavior remains consistent when image assets are unavailable
