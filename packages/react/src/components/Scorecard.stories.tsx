import type { Meta, StoryObj } from "@storybook/react";

import { Scorecard } from "./Scorecard";

const meta = {
  title: "Components/Scorecard",
  component: Scorecard,
  tags: ["autodocs"],
  args: { label: "Active users", value: "24,680", change: "+12.4% this month", tone: "success" },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    change: { control: "text" },
    tone: { control: "inline-radio", options: ["neutral", "success", "warning", "danger", "info"] }
  },
  decorators: [(Story) => <div style={{ maxWidth: 280 }}><Story /></div>]
} satisfies Meta<typeof Scorecard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Warning: Story = { args: { label: "Pending tasks", value: "18", change: "Needs review", tone: "warning" } };
export const Danger: Story = { args: { label: "Failed checks", value: "3", change: "Requires attention", tone: "danger" } };
