import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "./Group";

const meta = {
  title: "Components/Group",
  component: Group,
  tags: ["autodocs"],
  args: {
    title: "Title",
    state: "collapsed",
    tone: "default",
    showFooter: true,
    showPaginator: true,
    pageCount: 5
  },
  argTypes: {
    title: { control: "text" },
    state: { control: "inline-radio", options: ["collapsed", "expanded"] },
    defaultState: { table: { disable: true } },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    showFooter: { control: "boolean" },
    showPaginator: { control: "boolean" },
    pageCount: { control: { type: "number", min: 1 } },
    onStateChange: { action: "state changed" },
    leftActions: { control: false },
    rightActions: { control: false },
    children: { control: false }
  },
  render: (args) => (
    <Group key={args.state} {...args} state={undefined} defaultState={args.state}>
      <div style={{ minHeight: 184 }}>Group content</div>
    </Group>
  )
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};
export const ExpandedEvergreen: Story = { args: { state: "expanded", tone: "evergreen" } };
export const ExpandedIndigo: Story = { args: { state: "expanded", tone: "indigo" } };
