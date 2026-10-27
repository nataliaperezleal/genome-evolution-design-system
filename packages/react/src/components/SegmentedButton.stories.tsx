import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedButton } from "./SegmentedButton";

const options = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" }
];

const meta = {
  title: "Components/SegmentedButton",
  component: SegmentedButton,
  tags: ["autodocs"],
  args: { options, value: "week", onChange: () => undefined },
  argTypes: { options: { control: "object" }, value: { control: "text" }, onChange: { action: "selection changed" } }
} satisfies Meta<typeof SegmentedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("week");
    return <SegmentedButton options={options} value={value} onChange={setValue} />;
  }
};
