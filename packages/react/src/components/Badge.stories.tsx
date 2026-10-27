import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Status", tone: "neutral", variant: "filled" },
  argTypes: {
    children: { control: "text" },
    tone: { control: "select", options: ["neutral", "primary", "info", "success", "warning", "danger"] },
    variant: { control: "inline-radio", options: ["filled", "outline"] },
    icon: { control: false }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="primary">Primary</Badge>
      <Badge tone="info">Information</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
    </div>
  )
};
export const Outlined: Story = { args: { variant: "outline", tone: "success" } };
