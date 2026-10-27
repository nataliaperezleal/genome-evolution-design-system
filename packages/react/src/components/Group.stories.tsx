import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "./Group";

const meta = {
  title: "Components/Group",
  component: Group,
  tags: ["autodocs"],
  args: {
    direction: "row",
    gap: "md",
    align: "center",
    justify: "start",
    wrap: false,
    children: "Grouped actions"
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["row", "column"] },
    gap: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] },
    align: { control: "inline-radio", options: ["start", "center", "end", "stretch"] },
    justify: { control: "select", options: ["start", "center", "end", "between"] },
    wrap: { control: "boolean" },
    children: { control: false }
  },
  render: (args) => (
    <Group {...args}>
      <button type="button">Save</button>
      <button type="button">Cancel</button>
      <button type="button">More options</button>
    </Group>
  )
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { direction: "column", align: "stretch" } };
export const Wrapped: Story = { args: { wrap: true, justify: "between" } };
