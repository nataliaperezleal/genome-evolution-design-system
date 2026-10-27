import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    eyebrow: "WORKSPACE",
    title: "Projects",
    subtitle: "Manage and review your projects."
  },
  argTypes: { eyebrow: { control: "text" }, title: { control: "text" }, subtitle: { control: "text" }, leading: { control: false }, actions: { control: false } }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithActions: Story = {
  args: { actions: <button type="button">Create project</button> }
};
export const WithLeadingAndActions: Story = {
  args: {
    leading: <span aria-hidden="true">◈</span>,
    actions: <button type="button">Create project</button>
  }
};
