import type { Meta, StoryObj } from "@storybook/react";

import { Scroll } from "./Scroll";

const meta = {
  title: "Components/Scroll",
  component: Scroll,
  tags: ["autodocs"],
  args: {
    maxHeight: 180,
    children: (
      <div style={{ display: "grid", gap: 12, padding: 12 }}>
        {Array.from({ length: 10 }, (_, index) => <div key={index}>Scrollable content item {index + 1}</div>)}
      </div>
    )
  },
  argTypes: { maxHeight: { control: "text" } },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>]
} satisfies Meta<typeof Scroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Compact: Story = { args: { maxHeight: 120 } };
