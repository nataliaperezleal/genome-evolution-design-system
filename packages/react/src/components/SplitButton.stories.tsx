import type { Meta, StoryObj } from "@storybook/react";

import { SplitButton } from "./SplitButton";

const meta = {
  title: "Components/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  args: {
    label: "Save",
    onClick: () => undefined,
    items: [
      { label: "Save as draft", onSelect: () => undefined },
      { label: "Save and publish", onSelect: () => undefined }
    ]
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "primary action clicked" },
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
