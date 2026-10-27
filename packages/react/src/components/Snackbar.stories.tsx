import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Snackbar } from "./Snackbar";

const meta = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  args: {
    open: true,
    message: "Project settings saved.",
    tone: "success",
    actionLabel: "Undo",
    autoHideDurationMs: 0
  },
  argTypes: {
    open: { control: "boolean" },
    message: { control: "text" },
    tone: { control: "inline-radio", options: ["neutral", "success", "warning", "danger", "info"] },
    actionLabel: { control: "text" },
    autoHideDurationMs: { control: { type: "number", min: 0 } },
    onAction: { action: "action clicked" },
    onClose: { action: "closed" }
  },
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};
export const Warning: Story = { args: { tone: "warning", message: "Some settings have not been published.", actionLabel: undefined } };
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
