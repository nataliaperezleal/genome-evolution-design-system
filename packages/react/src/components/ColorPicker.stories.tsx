import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "./ColorPicker";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  args: { label: "Brand color", defaultValue: "#23748f", type: "Solid" },
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "color" },
    value: { control: "color" },
    type: { control: "inline-radio", options: ["Solid", "Gradient"] },
    onChange: { action: "color changed" },
    onTypeChange: { action: "type changed" }
  },
  parameters: { layout: "padded" }
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {};
export const Gradient: Story = { args: { type: "Gradient" } };
export const InitialColor: Story = { args: { defaultValue: "#d97706", label: "Accent color" } };
