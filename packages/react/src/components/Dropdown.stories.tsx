import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    label: "Environment",
    helperText: "Select where to deploy this project.",
    options: [
      { label: "Development", value: "development" },
      { label: "Staging", value: "staging" },
      { label: "Production", value: "production" }
    ]
  },
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    options: { control: "object" },
    disabled: { control: "boolean" }
  },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>]
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Error: Story = { args: { error: "Choose an environment.", helperText: undefined } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "staging" } };
