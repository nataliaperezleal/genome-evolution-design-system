import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: true,
    size: "small",
    showHeader: true,
    title: "Modal 16x title",
    showTitleIcon: false,
    expand: false,
    close: true,
    showButtons: true,
    helperText: false,
    valueHelperText: "1 of 5",
    tertiaryButton: false,
    children: <div style={{ minHeight: 120 }}>Content</div>
  },
  argTypes: {
    open: { control: "boolean" },
    size: { control: "inline-radio", options: ["small", "medium", "large", "bigger", "90%", "full"] },
    showHeader: { control: "boolean" },
    title: { control: "text" },
    showTitleIcon: { control: "boolean" },
    titleIcon: { control: false },
    expand: { control: "boolean" },
    close: { control: "boolean" },
    showButtons: { control: "boolean" },
    helperText: { control: "boolean" },
    valueHelperText: { control: "text" },
    tertiaryButton: { control: "boolean" },
    description: { table: { disable: true } },
    children: { control: false },
    footer: { control: false },
    onConfirm: { action: "confirmed" },
    onCancel: { action: "cancelled" },
    onTertiary: { action: "tertiary action" },
    onClose: { action: "closed" }
  },
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Medium: Story = { args: { size: "medium" } };
export const Large: Story = { args: { size: "large" } };
export const Bigger: Story = { args: { size: "bigger" } };
export const NinetyPercent: Story = { args: { size: "90%" } };
export const Full: Story = { args: { size: "full", children: <div style={{ minHeight: "calc(100vh - 180px)" }}>Full content</div> } };
export const WithOptionalParts: Story = { args: { showTitleIcon: true, expand: true, helperText: true, tertiaryButton: true } };
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>Open modal</button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  }
};
