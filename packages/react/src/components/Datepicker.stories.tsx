import type { Meta, StoryObj } from "@storybook/react";

import { Datepicker } from "./Datepicker";

const meta = {
  title: "Components/Datepicker",
  component: Datepicker,
  tags: ["autodocs"],
  args: {
    presentation: "panel",
    type: "numbers",
    size: "sm",
    tone: "evergreen",
    defaultValue: "2021-03-05",
    showButtons: true,
    showConventions: true
  },
  argTypes: {
    presentation: { table: { disable: true } },
    type: { control: "inline-radio", options: ["numbers", "month", "year"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    tone: { control: "inline-radio", options: ["evergreen", "indigo"] },
    showButtons: { control: "boolean" },
    showConventions: { control: "boolean" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    onDateChange: { action: "date changed" }
  }
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Months: Story = { args: { type: "month" } };
export const Years: Story = { args: { type: "year" } };
export const MediumIndigo: Story = { args: { size: "md", tone: "indigo", showConventions: false } };
export const FormField: Story = {
  args: {
    presentation: "field",
    label: "Due date",
    helperText: "Choose a date for this task.",
    type: "numbers",
    size: "sm",
    tone: "evergreen"
  }
};
