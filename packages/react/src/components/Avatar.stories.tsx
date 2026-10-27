import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { initials: "NP", size: "md", tone: "neutral" },
  argTypes: {
    initials: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: { control: "select", options: ["blue", "green", "amber", "pink", "neutral"] }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Avatar initials="SM" size="sm" tone="blue" />
      <Avatar initials="MD" size="md" tone="green" />
      <Avatar initials="LG" size="lg" tone="amber" />
    </div>
  )
};
export const Tones: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Avatar initials="BL" tone="blue" />
      <Avatar initials="GR" tone="green" />
      <Avatar initials="AM" tone="amber" />
      <Avatar initials="PK" tone="pink" />
      <Avatar initials="NE" tone="neutral" />
    </div>
  )
};
