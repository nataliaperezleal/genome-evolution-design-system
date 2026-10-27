import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

const meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  args: {
    text: "List item",
    type: "list",
    size: "md",
    state: "default",
    leftSide: false,
    rightSide: false
  },
  argTypes: {
    text: { control: "text" },
    type: { control: "inline-radio", options: ["list", "header"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    state: { control: "inline-radio", options: ["default", "hover", "pressed", "selected", "focused"] },
    leftSide: { control: "boolean" },
    showLeftCheckBox: { control: "boolean" },
    showLeftSwitch: { control: "boolean" },
    showLeftIcon: { control: "boolean" },
    leftIcon: { control: false },
    rightSide: { control: "boolean" },
    showRightCheckBox: { control: "boolean" },
    showRightSwitch: { control: "boolean" },
    showRightIcon: { control: "boolean" },
    rightIcon: { control: false },
    items: { control: false },
    variant: { table: { disable: true } }
  },
  decorators: [(Story) => <div style={{ maxWidth: 560 }}><Story /></div>]
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Header: Story = { args: { type: "header" } };
export const Selected: Story = { args: { state: "selected" } };
export const WithSideControls: Story = { args: { leftSide: true, rightSide: true } };
export const Collection: Story = {
  args: {
    items: [
      { id: "design", title: "Design review", description: "Review the updated component library.", meta: "Today" },
      { id: "tokens", title: "Update tokens", description: "Align semantic colors with the latest theme.", meta: "Tomorrow" },
      { id: "release", title: "Prepare release", description: "Publish the next stable version.", meta: "Friday" }
    ],
    text: undefined,
    leftSide: false,
    rightSide: false
  }
};
