import type { Meta, StoryObj } from "@storybook/react";

import { SplitButton } from "./SplitButton";

const meta = {
  title: "Components/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  args: {
    label: "Save",
    onClick: () => undefined,
    color: "evergreen",
    type: "primary",
    size: "regular",
    items: [
      { label: "Save as draft", onSelect: () => undefined },
      { label: "Save and publish", onSelect: () => undefined }
    ]
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "primary action clicked" },
    color: { control: "inline-radio", options: ["evergreen", "indigo", "default"] },
    type: { control: "inline-radio", options: ["primary", "secondary"] },
    size: { control: "inline-radio", options: ["regular", "small"] },
    disabled: { control: "boolean" },
    items: { control: "object" }
  }
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMoreActions: Story = {
  args: {
    label: "Create",
    items: [
      { label: "Create project", onSelect: () => undefined },
      { label: "Create from template", onSelect: () => undefined },
      { label: "Import project", onSelect: () => undefined }
    ]
  }
};
