import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonGroup } from "./RadioButton";

const options = [
  { label: "Starter", value: "starter", description: "For small teams getting started." },
  { label: "Professional", value: "professional", description: "Advanced tools for growing teams." },
  { label: "Enterprise", value: "enterprise", description: "Flexible controls for larger organizations." }
];

const meta = {
  title: "Components/RadioButtonGroup",
  component: RadioButtonGroup,
  tags: ["autodocs"],
  args: { label: "Choose a plan", options, defaultValue: "professional", tone: "default" },
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
    defaultValue: { control: "text" },
    value: { control: "text" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    disabled: { control: "boolean" },
    onChange: { action: "selection changed" }
  },
  decorators: [(Story) => <div style={{ maxWidth: 380 }}><Story /></div>]
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("professional");
    return <RadioButtonGroup label="Choose a plan" options={options} value={value} onChange={setValue} />;
  }
};
