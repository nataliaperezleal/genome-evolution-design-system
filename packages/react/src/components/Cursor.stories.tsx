import type { Meta, StoryObj } from "@storybook/react";

import { Cursor } from "./Cursor";

const meta = {
  title: "Components/Cursor",
  component: Cursor,
  tags: ["autodocs"],
  args: { label: "Natalia", tone: "evergreen", variant: "pointer" },
  argTypes: {
    label: { control: "text" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    variant: { control: "inline-radio", options: ["pointer", "text", "grab"] }
  }
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pointer: Story = {};
export const Text: Story = { args: { variant: "text", tone: "indigo", label: "Editing" } };
export const Grab: Story = { args: { variant: "grab", label: "Move item" } };
