import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    title: "Tooltip text",
    description: "Tooltip description",
    showTitle: true,
    showDescription: true,
    showImage: false,
    color: "white",
    side: "top",
    children: <button type="button">Hover or focus me</button>
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    showTitle: { control: "boolean" },
    showDescription: { control: "boolean" },
    showImage: { control: "boolean" },
    color: { control: "inline-radio", options: ["white", "black"] },
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
export const Black: Story = { args: { color: "black" } };
export const WithImage: Story = {
  args: {
    showImage: true,
    image: <span style={{ display: "block", height: "100%", background: "linear-gradient(120deg, #297a39, #6b1b99)" }} />,
    title: "Helpful context",
    description: "A brief explanation alongside a visual."
  }
};
