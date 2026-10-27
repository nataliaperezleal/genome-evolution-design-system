import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TabList } from "./Tab";

const options = [
  { label: "Overview", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Settings", value: "settings" }
];

const meta = {
  title: "Components/TabList",
  component: TabList,
  tags: ["autodocs"],
  args: { options, value: "overview", onChange: () => undefined },
  argTypes: { options: { control: "object" }, value: { control: "text" }, onChange: { action: "tab changed" } }
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <div>
        <TabList options={options} value={value} onChange={setValue} />
        <p style={{ marginTop: 16 }}>Selected tab: {value}</p>
      </div>
    );
  }
};
