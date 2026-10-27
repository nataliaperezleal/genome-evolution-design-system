import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tab, TabList } from "./Tab";

const options = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Settings", value: "settings" }
];

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: { text: "Tab name", state: "default", size: "md", showLeftIcon: true, showRightIcon: true },
  argTypes: {
    color: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
    state: { control: "inline-radio", options: ["default", "hovered", "pressed", "selected", "focused", "selected-focused", "focused-selected"] },
    showLeftIcon: { control: "boolean" },
    showText: { control: "boolean" },
    showRightIcon: { control: "boolean" }
  }
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { state: "selected", color: "indigo" } };
export const TabListInteractive: Story = {
  render: () => {
    const [value, setValue] = useState("overview");
    return <TabList options={options} value={value} onChange={setValue} />;
  }
};
