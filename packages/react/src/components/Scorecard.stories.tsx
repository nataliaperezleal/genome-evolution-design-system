import type { Meta, StoryObj } from "@storybook/react";

import { Scorecard } from "./Scorecard";

const meta = {
  title: "Components/Scorecard",
  component: Scorecard,
  tags: ["autodocs"],
  args: { label: "Description", value: "Value", size: "sm", valuePosition: "top" },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md"] },
    valuePosition: { control: "inline-radio", options: ["top", "bottom"] },
    change: { table: { disable: true } },
    tone: { table: { disable: true } }
  },
  decorators: [(Story) => <div style={{ display: "flex", gap: 16, alignItems: "start" }}><Story /></div>]
} satisfies Meta<typeof Scorecard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Medium: Story = { args: { size: "md" } };
export const BottomValue: Story = { args: { valuePosition: "bottom" } };
