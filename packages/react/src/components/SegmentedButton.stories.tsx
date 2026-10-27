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
  args: { text: "Section name", showText: true, showIcon: true, icon: "≡", state: "default", color: "default", size: "md" },
  argTypes: {
    text: { control: "text" },
    showText: { control: "boolean" },
    showIcon: { control: "boolean" },
    state: { control: "inline-radio", options: ["default", "selected", "hovered", "pressed", "focused"] },
    color: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
    rounded: { control: "boolean" }
  }
} satisfies Meta<typeof SegmentedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { state: "selected", color: "evergreen" } };
export const SegmentedControl: Story = {
  render: () => {
    const [value, setValue] = useState("week");
    return <SegmentedButton options={options} value={value} onChange={setValue} />;
  }
};
