import type { Meta, StoryObj } from "@storybook/react";

import { Scroll } from "./Scroll";

const meta = {
  title: "Components/Scroll",
  component: Scroll,
  tags: ["autodocs"],
  args: {
    orientation: "vertical",
    size: "small",
    indicatorOnly: true
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    size: { control: "inline-radio", options: ["small", "regular"] },
    indicatorOnly: { control: "boolean" },
    maxHeight: { control: "text" },
    children: { control: false }
  },
  decorators: [(Story) => <div style={{ minHeight: 280, display: "flex", alignItems: "flex-start" }}><Story /></div>]
} satisfies Meta<typeof Scroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const Regular: Story = { args: { size: "regular" } };
export const ScrollableContent: Story = {
  args: {
    indicatorOnly: false,
    maxHeight: 180,
    children: (
      <div style={{ display: "grid", gap: 12, padding: 12 }}>
        {Array.from({ length: 10 }, (_, index) => <div key={index}>Scrollable content item {index + 1}</div>)}
      </div>
    )
  }
};
