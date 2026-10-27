import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { SearchIcon } from "../stories/primitives";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    label: "Search",
    icon: <SearchIcon />,
    tone: "evergreen",
    variant: "filled",
    size: "md"
  },
  argTypes: {
    label: { control: "text" },
    icon: { control: false },
    tone: { control: "inline-radio", options: ["evergreen", "indigo", "neutral"] },
    variant: { control: "inline-radio", options: ["filled", "outline"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
    tone: "neutral"
  }
};

export const Tones: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <IconButton label="Search evergreen" icon={<SearchIcon />} tone="evergreen" />
      <IconButton label="Search indigo" icon={<SearchIcon />} tone="indigo" />
      <IconButton label="Search neutral" icon={<SearchIcon />} tone="neutral" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <IconButton label="Small search" icon={<SearchIcon />} size="sm" />
      <IconButton label="Medium search" icon={<SearchIcon />} size="md" />
      <IconButton label="Large search" icon={<SearchIcon />} size="lg" />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
