import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: { theme: "apps-designer", showUserName: true, showMail: true, showAvatar: true },
  argTypes: {
    theme: { control: "inline-radio", options: ["apps-designer", "apps-tools", "workportal"] },
    showUserName: { control: "boolean" },
    showMail: { control: "boolean" },
    showAvatar: { control: "boolean" },
    eyebrow: { table: { disable: true } },
    title: { table: { disable: true } },
    subtitle: { table: { disable: true } },
    leading: { table: { disable: true } },
    actions: { table: { disable: true } }
  },
  decorators: [(Story) => <div style={{ width: "100%", overflowX: "auto" }}><Story /></div>]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AppsDesigner: Story = {};
export const AppsTools: Story = { args: { theme: "apps-tools" } };
export const Workportal: Story = { args: { theme: "workportal" } };
export const GenericPageHeader: Story = {
  args: {
    theme: undefined,
    eyebrow: "Workspace",
    title: "Projects",
    subtitle: "Manage and review your projects.",
    actions: <button type="button">Create project</button>
  }
};
