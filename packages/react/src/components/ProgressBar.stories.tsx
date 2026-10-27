import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: { value: 64, max: 100, tone: "evergreen", label: "Upload progress" },
  argTypes: {
    value: { control: { type: "number", min: 0 } },
    max: { control: { type: "number", min: 1 } },
    indeterminate: { control: "boolean" },
    tone: { control: "inline-radio", options: ["evergreen", "indigo", "neutral"] },
    label: { control: "text" }
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}><Story /></div>]
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {};
export const Indeterminate: Story = { args: { indeterminate: true, value: 0 } };
export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 420 }}>
      <ProgressBar value={35} tone="evergreen" label="Evergreen progress" />
      <ProgressBar value={65} tone="indigo" label="Indigo progress" />
      <ProgressBar value={90} tone="neutral" label="Neutral progress" />
    </div>
  )
};
