import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    label: "Description",
    placeholder: "Describe your project",
    helperText: "Include the key information someone should know."
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    rows: { control: { type: "number", min: 2, max: 12 } },
    disabled: { control: "boolean" },
    required: { control: "boolean" }
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>]
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "A shared design system for Genome Evolution." } };
export const Error: Story = { args: { error: "Please add a description.", helperText: undefined } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "This description is locked." } };
