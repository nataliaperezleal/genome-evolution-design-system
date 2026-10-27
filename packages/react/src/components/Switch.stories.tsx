import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { defaultChecked: true, size: "sm", tone: "evergreen", label: "Label" },
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    label: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md"] },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    disabled: { control: "boolean" },
    onCheckedChange: { action: "checked changed" }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {};
export const Off: Story = { args: { defaultChecked: false } };
export const Disabled: Story = { args: { disabled: true, tone: "default", defaultChecked: false } };
