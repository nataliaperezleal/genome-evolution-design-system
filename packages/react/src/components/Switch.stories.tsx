import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { defaultChecked: true, "aria-label": "Enable notifications" },
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    onCheckedChange: { action: "checked changed" }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {};
export const Off: Story = { args: { defaultChecked: false } };
export const Disabled: Story = { args: { disabled: true } };
