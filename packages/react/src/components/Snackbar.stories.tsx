import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Snackbar } from "./Snackbar";

const meta = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  args: {
    open: true,
    label: "Single-line toast bar",
    type: "danger",
    showButton: true,
    showBar: true,
    actionLabel: "Undo",
    autoHideDurationMs: 0
  },
  argTypes: {
    open: { control: "boolean" },
    label: { control: "text" },
    type: { control: "inline-radio", options: ["danger", "warning", "information", "success"] },
    showButton: { control: "boolean" },
    showBar: { control: "boolean" },
    actionLabel: { control: "text" },
    autoHideDurationMs: { control: { type: "number", min: 0 } },
    onAction: { action: "action clicked" },
    onClose: { action: "closed" }
  },
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = { args: { type: "success", label: "Project settings saved." } };
export const Warning: Story = { args: { type: "warning", label: "Some settings have not been published.", showButton: false } };
export const Information: Story = { args: { type: "information", label: "New updates are available." } };
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>Show notification</button>
        <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  }
};
