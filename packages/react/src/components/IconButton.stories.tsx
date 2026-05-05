import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { SearchIcon } from "../stories/primitives";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    label: "Search",
    icon: <SearchIcon />,
    tone: "evergreen",
    variant: "filled",
    size: "md"
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
