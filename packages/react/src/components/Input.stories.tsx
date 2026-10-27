import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Project name",
    placeholder: "Genome Evolution",
    helperText: "Use a short, descriptive label."
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "number", "tel", "url"]
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    readOnly: { control: "boolean" }
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

export const Required: Story = {
  args: {
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "name@example.com",
    helperText: "Use your organization email address."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Genome Evolution"
  }
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "This value cannot be edited"
  }
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 360 }}>
      <Input id="storybook-input-text" label="Text" placeholder="Enter text" />
      <Input id="storybook-input-email" label="Email" type="email" placeholder="name@example.com" />
      <Input id="storybook-input-password" label="Password" type="password" placeholder="Enter password" />
      <Input id="storybook-input-search" label="Search" type="search" placeholder="Search projects" />
    </div>
  )
};
