import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Project name",
    placeholder: "Genome Evolution",
    helperText: "Use a short, descriptive label."
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: "This field is required.",
    helperText: undefined
  }
};
