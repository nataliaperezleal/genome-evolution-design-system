import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";
import { ArrowRight } from "../stories/primitives";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: { children: "View documentation", href: "#", tone: "default" },
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
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
export const WithIcons: Story = { args: { leadingIcon: <ArrowRight />, trailingIcon: <ArrowRight /> } };
