import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Workspace", href: "#workspace" },
      { label: "Projects", href: "#projects" },
      { label: "Genome Evolution" }
    ]
  },
  argTypes: {
    items: { control: "object" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] }
  }
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ShortPath: Story = {
  args: { items: [{ label: "Settings", href: "#" }, { label: "Profile" }] }
};
export const LongPath: Story = {
  args: {
    items: [
      { label: "Workspace", href: "#workspace" },
      { label: "Business unit", href: "#business-unit" },
      { label: "Team", href: "#team" },
      { label: "Projects", href: "#projects" },
      { label: "Genome Evolution" }
    ]
  }
};
export const Evergreen: Story = { args: { tone: "evergreen" } };
export const Indigo: Story = { args: { tone: "indigo" } };
