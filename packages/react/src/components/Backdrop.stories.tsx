import type { Meta, StoryObj } from "@storybook/react";

import { Backdrop } from "./Backdrop";

const meta = {
  title: "Components/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  args: { open: true, tone: "black" },
  argTypes: {
    open: { control: "boolean" },
    tone: { control: "inline-radio", options: ["black", "white"] }
  },
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {};
export const White: Story = { args: { tone: "white" } };
export const Closed: Story = { args: { open: false } };
