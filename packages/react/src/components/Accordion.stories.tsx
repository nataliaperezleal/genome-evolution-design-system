import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    text: "Placeholder",
    children: "Content",
    size: "md",
    tone: "default",
    state: "default",
    defaultOpen: false,
    showLeftIcon: false,
    showCheckbox: false,
    showBadge: false
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md"] },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    state: { control: "inline-radio", options: ["default", "hovered", "pressed", "focused", "disabled", "loading"] },
    text: { control: "text" },
    showLeftIcon: { control: "boolean" },
    icon: { control: false },
    showCheckbox: { control: "boolean" },
    showBadge: { control: "boolean" },
    badge: { control: "text" },
    children: { control: "text" },
    defaultOpen: { control: "boolean" }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const InitiallyOpen: Story = { args: { defaultOpen: true, tone: "evergreen" } };
export const Disabled: Story = { args: { state: "disabled" } };
export const Loading: Story = { args: { state: "loading", defaultOpen: true } };
export const WithOptionalParts: Story = {
  args: { showLeftIcon: true, showCheckbox: true, showBadge: true, badge: "0" }
};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, width: 265 }}>
      <Accordion text="Default tone" defaultOpen>Default appearance</Accordion>
      <Accordion text="Evergreen tone" tone="evergreen" defaultOpen>Evergreen appearance</Accordion>
      <Accordion text="Indigo tone" tone="indigo" defaultOpen>Indigo appearance</Accordion>
    </div>
  )
};
