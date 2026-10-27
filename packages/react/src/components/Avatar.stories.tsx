import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { type: "icon", size: 16, tone: "default" },
  argTypes: {
    initials: { control: "text" },
    label: { control: "text" },
    type: { control: "inline-radio", options: ["icon", "person", "print"] },
    size: { control: "inline-radio", options: [16, 24, 32, 40, 48] },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    src: { control: "text" },
    alt: { control: "text" },
    showState: { control: "boolean" },
    focused: { control: "boolean" },
    icon: { control: false }
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
export const PrintSizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Avatar type="print" label="B" size={16} />
      <Avatar type="print" label="G" size={24} />
      <Avatar type="print" label="E" size={32} tone="evergreen" />
      <Avatar type="print" label="I" size={40} tone="indigo" />
      <Avatar type="print" label="N" size={48} />
    </div>
  )
};
export const Types: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Avatar type="icon" size={40} />
      <Avatar type="person" size={40} alt="Profile photo" />
      <Avatar type="print" size={40} label="NP" tone="evergreen" />
    </div>
  )
};
export const WithStatus: Story = { args: { type: "print", label: "NP", size: 40, showState: true } };
export const Focused: Story = { args: { type: "print", label: "NP", size: 40, focused: true } };
