import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";
import { ArrowRight } from "../stories/primitives";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: { children: "Link", href: "#", tone: "default", size: "md" },
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
    visited: { control: "boolean" },
    "aria-disabled": { control: "boolean" },
    leadingIcon: { control: false },
    trailingIcon: { control: false }
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Link href="#" tone="default">Default</Link>
      <Link href="#" tone="evergreen">Evergreen</Link>
      <Link href="#" tone="indigo">Indigo</Link>
    </div>
  )
};
export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Link href="#" size="md">Medium link</Link>
      <Link href="#" size="sm">Small link</Link>
    </div>
  )
};
export const Visited: Story = { args: { visited: true, children: "Visited link" } };
export const Disabled: Story = { args: { "aria-disabled": true, children: "Unavailable link" } };
export const WithIcons: Story = { args: { leadingIcon: <ArrowRight />, trailingIcon: <ArrowRight /> } };
