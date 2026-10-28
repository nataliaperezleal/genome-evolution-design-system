# Component Selection Rules — Genome Evolution

Guidance for AI agents on when to use each component in the system.

Component names below follow the documentation. Before using a component in code, verify its export and props in `packages/react/src/index.ts` and the relevant component documentation. Do not assume that a documented name, variant, or property exists in React.

## Selection by Use Case

### User Actions

| Use case | Component | Notes |
|---|---|---|
| Primary action on the screen | Button (primary type) | Verify the exact color and type props in the component documentation |
| Secondary action | Button (secondary type) | |
| Discrete or contextual action | Button (tertiary type) | |
| Destructive action | Button (danger type) | |
| Icon-only action | IconButton | Requires an accessible name (`aria-label`) |
| Two related actions | Verify in documentation | Do not assume a Duo Button export exists |
| Primary action with a secondary menu | SplitButton | |
| Clear a field | ClearButton | |

### Selection and Forms

| Use case | Component | Notes |
|---|---|---|
| Multiple independent selections | Checkbox | |
| Exactly one option from a group | RadioButtonGroup | |
| Toggle a feature in real time | Switch | |
| Select from a long list | Dropdown | |
| Select a date | Datepicker | |
| Choose a color | ColorPicker | |
| Single-line text | Input | |
| Multi-line text | TextArea | |
| Visible exclusive selection | SegmentedButton | Check the documented option limit before applying a number |

### Navigation

| Use case | Component | Notes |
|---|---|---|
| Main application navigation | Header | |
| Location context | Breadcrumb | |
| Content sections | Tab / TabList | |
| Navigate between data pages | Paginator | |
| Inline link in text | Link | |
| Collapsible sections | Accordion | |

### Feedback and Status

| Use case | Component | Notes |
|---|---|---|
| Brief temporary message | Snackbar | |
| Alert inside content | InlineAlert | |
| Confirmation dialog | Modal | |
| Operation progress | ProgressBar | |
| Count on an element | Badge | |
| Contextual hover information | Tooltip | |
| Block UI behind a modal | Backdrop | Use with Modal or the documented overlay pattern |

### Data and Content

| Use case | Component | Notes |
|---|---|---|
| Tabular data | Table | |
| List of items | List | |
| Label or category | Tag | |
| Highlighted numeric data | Scorecard | |
| User identity | Avatar | |

## Priority Rules

1. Prefer the more specific component over a generic one when it fully meets the requirement. For example, use `ClearButton` to clear a field instead of building a custom button.
2. A Button does not replace a Link for navigation.
3. A Switch does not replace a Checkbox for multiple selection.
4. Badge is intended for numeric or count values; use Tag for text labels. Verify this against the Badge documentation before applying it in code.

## Unverified Items

The following points need verification before being treated as rules:

- The exact name and props of Duo Button, which does not appear in the React index.
- The `Drawer` component, which is not in the React index.
- The specific color values and button type names in the documentation.
- The option limit for SegmentedButton.