import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./Stepper";

const steps = [
  { label: "Account", number: 0, backLine: false },
  { label: "Workspace", number: 1, state: "selected" as const, tone: "evergreen" as const },
  { label: "Invite team", number: 2 },
  { label: "Complete", number: 3, nextLine: false }
];

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  args: { steps, currentStep: 1, orientation: "horizontal" },
  argTypes: {
    steps: { control: "object" },
    currentStep: { table: { disable: true } },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] }
  }
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const FirstStep: Story = {
  args: { steps: [{ label: "Step label", number: 0, backLine: false, nextLine: false }] }
};
export const Checked: Story = {
  args: { steps: [{ label: "Step label", state: "checked", tone: "indigo", number: 0, backLine: false, nextLine: false }] }
};
