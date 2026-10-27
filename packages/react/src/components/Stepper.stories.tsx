import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./Stepper";

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Workspace", description: "Set up your workspace" },
  { label: "Invite team", description: "Add collaborators" },
  { label: "Complete", description: "Review and finish" }
];

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  args: { steps, currentStep: 1, orientation: "horizontal" },
  argTypes: {
    steps: { control: "object" },
    currentStep: { control: { type: "number", min: 0, max: steps.length - 1, step: 1 } },
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] }
  }
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const FirstStep: Story = { args: { currentStep: 0 } };
export const Completed: Story = { args: { currentStep: 3 } };
