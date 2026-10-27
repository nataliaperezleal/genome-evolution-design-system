import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";

const meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  args: {
    variant: "unordered",
    size: "md",
    items: [
      { id: "design", title: "Design review", description: "Review the updated component library.", meta: "Today" },
      { id: "tokens", title: "Update tokens", description: "Align semantic colors with the latest theme.", meta: "Tomorrow" },
      { id: "release", title: "Prepare release", description: "Publish the next stable version.", meta: "Friday" }
    ]
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["unordered", "ordered"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    items: { control: "object" }
  },
  decorators: [(Story) => <div style={{ maxWidth: 560 }}><Story /></div>]
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Ordered: Story = { args: { variant: "ordered" } };
export const Compact: Story = { args: { size: "sm" } };
