import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: { value: 10, max: 100, tone: "evergreen", label: "Upload progress" },
  argTypes: {
    value: { control: "inline-radio", options: [10, 25, 70, 100] },
    max: { control: { type: "number", min: 1 } },
    indeterminate: { table: { disable: true } },
    tone: { control: "inline-radio", options: ["evergreen", "indigo"] },
    label: { control: "text" }
  },
  decorators: [(Story) => <div style={{ width: 350 }}><Story /></div>]
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {};
export const ProgressVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 350 }}>
      {[10, 25, 70, 100].map((value) => <ProgressBar key={value} value={value} label={`${value}% complete`} />)}
    </div>
  )
};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 350 }}>
      <ProgressBar value={70} tone="evergreen" label="Evergreen progress" />
      <ProgressBar value={70} tone="indigo" label="Indigo progress" />
    </div>
  )
};
