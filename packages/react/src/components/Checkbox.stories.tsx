import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { label: "Email me product updates", helperText: "You can change this preference at any time." },
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    color: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    indeterminate: { control: "boolean" },
    icon: { control: false },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Error: Story = { args: { error: "Please confirm your preference.", helperText: undefined } };
export const Disabled: Story = { args: { disabled: true } };
export const Indeterminate: Story = { args: { indeterminate: true, label: "Select all projects" } };
export const Evergreen: Story = { args: { defaultChecked: true, color: "evergreen" } };
export const Indigo: Story = { args: { defaultChecked: true, color: "indigo" } };
