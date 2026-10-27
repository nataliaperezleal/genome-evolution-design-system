import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "0", tone: "default", variant: "line" },
  argTypes: {
    children: { control: "text" },
    tone: { control: "select", options: ["default", "inverse", "information", "warning", "error", "success", "evergreen", "indigo"] },
    variant: { control: "inline-radio", options: ["line", "filled"] },
    icon: { control: false }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="default">Default</Badge>
      <Badge tone="inverse">Inverse</Badge>
      <Badge tone="information">Information</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="error">Error</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="evergreen">Evergreen</Badge>
      <Badge tone="indigo">Indigo</Badge>
    </div>
  )
};
export const Filled: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="default" variant="filled">Default</Badge>
      <Badge tone="information" variant="filled">Information</Badge>
      <Badge tone="warning" variant="filled">Warning</Badge>
      <Badge tone="error" variant="filled">Error</Badge>
      <Badge tone="success" variant="filled">Success</Badge>
      <Badge tone="evergreen" variant="filled">Evergreen</Badge>
      <Badge tone="indigo" variant="filled">Indigo</Badge>
    </div>
  )
};
