import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { content: "More information about this action.", side: "top", children: <button type="button">Hover or focus me</button> },
  argTypes: {
    content: { control: "text" },
    side: { control: "inline-radio", options: ["top", "bottom", "left", "right"] },
    children: { control: false }
  }
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {};
export const Bottom: Story = { args: { side: "bottom" } };
export const Left: Story = { args: { side: "left" } };
export const Right: Story = { args: { side: "right" } };
