import type { Meta, StoryObj } from "@storybook/react";

import { InlineAlert } from "./InlineAlert";

const meta = {
  title: "Components/InlineAlert",
  component: InlineAlert,
  tags: ["autodocs"],
  args: { children: "Your changes have been saved.", tone: "info" },
  argTypes: {
    children: { control: "text" },
    tone: { control: "inline-radio", options: ["info", "success", "warning", "danger"] },
    icon: { control: false }
  }
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {};
export const Success: Story = { args: { tone: "success", children: "Your project is ready." } };
export const Warning: Story = { args: { tone: "warning", children: "Some settings need your attention." } };
export const Danger: Story = { args: { tone: "danger", children: "The update could not be completed." } };
