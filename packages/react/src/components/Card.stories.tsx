import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Project overview",
    children: "A card groups related information and actions into a distinct surface.",
    variant: "base"
  },
  argTypes: {
    title: { control: "text" },
    variant: { control: "inline-radio", options: ["base", "elevated"] },
    footer: { control: false }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithFooter: Story = {
  args: { footer: <button type="button">View project</button> }
};
export const Elevated: Story = { args: { variant: "elevated" } };
