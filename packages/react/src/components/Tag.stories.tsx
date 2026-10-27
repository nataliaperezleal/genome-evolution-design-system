import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";
import { SearchIcon } from "../stories/primitives";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "Design", tone: "neutral" },
  argTypes: {
    children: { control: "text" },
    tone: { control: "inline-radio", options: ["neutral", "evergreen", "indigo"] },
    icon: { control: false },
    disabled: { control: "boolean" }
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag tone="neutral">Neutral</Tag>
      <Tag tone="evergreen">Evergreen</Tag>
      <Tag tone="indigo">Indigo</Tag>
    </div>
  )
};
export const WithIcon: Story = { args: { icon: <SearchIcon />, children: "Search" } };
export const Disabled: Story = { args: { disabled: true } };
