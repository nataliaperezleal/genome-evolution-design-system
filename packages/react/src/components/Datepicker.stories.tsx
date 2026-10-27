import type { Meta, StoryObj } from "@storybook/react";

import { Datepicker } from "./Datepicker";

const meta = {
  title: "Components/Datepicker",
  component: Datepicker,
  tags: ["autodocs"],
  args: { label: "Due date", helperText: "Choose a date for this task." },
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    min: { control: "date" },
    max: { control: "date" }
  }
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "2026-10-27" } };
export const Error: Story = { args: { error: "Select a valid date.", helperText: undefined } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "2026-10-27" } };
