# Layout — Genome Evolution Design System

## Breakpoints
| Token | Value | Use |
|---|---|---|
| `layout.base.breakpoint.mobile` | 360px | Minimum supported viewport |
| `layout.base.breakpoint.tablet` | 1024px | Switch from mobile to tablet grid |
| `layout.base.breakpoint.computer` | 1440px | Switch from tablet to desktop grid |

## Grid by breakpoint
| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Mobile | `layout.base.columns.mobile` = 4 | `layout.base.gutter.mobile` = 16px | `layout.base.margin.mobile` = 16px |
| Tablet | `layout.base.columns.tablet` = 8 | `layout.base.gutter.tablet` = 16px | `layout.base.margin.tablet` = 32px |
| Desktop (at `computer`) | `layout.base.columns.desktop` = 12 | `layout.base.gutter.desktop` = 16px | `layout.base.margin.desktop` = 32px |

## Usage rules
- `layout.base.*` applies to the page-level grid, not the internal spacing of components.
- `margin.*` defines the horizontal inset of the main layout.
- `gutter.*` defines the space between grid columns.
- `columns.*` is used to calculate spans, not to set widths for isolated components.

## Composition examples
- Simple mobile form: span 4/4 with `layout.base.margin.mobile`.
- Tablet panel and table: spans 3/8 and 5/8 with `layout.base.gutter.tablet`.
- Desktop dashboard: sidebar 3/12, content 9/12 with `layout.base.margin.desktop`.

## Anti-patterns
- Do not use `layout.base.margin.*` as internal padding for cards, modals, or inputs.
- Do not skip breakpoints: design and review at 360, 1024, and 1440.
- Do not use 12-column grids on mobile.
