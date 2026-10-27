import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    title: "Project details",
    children: "Additional project information can be placed in this expandable section."
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    disabled: { control: "boolean" },
    defaultOpen: { control: "boolean" }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const InitiallyOpen: Story = { args: { defaultOpen: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, width: 420 }}>
      <Accordion title="Default tone">Default appearance</Accordion>
      <Accordion title="Evergreen tone" tone="evergreen">Evergreen appearance</Accordion>
      <Accordion title="Indigo tone" tone="indigo">Indigo appearance</Accordion>
    </div>
  )
};
