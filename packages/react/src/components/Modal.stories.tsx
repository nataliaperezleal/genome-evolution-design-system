import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: true,
    title: "Delete project?",
    description: "This action cannot be undone. The project and its data will be permanently removed.",
    children: <p>Are you sure you want to continue?</p>,
    footer: <><button type="button">Cancel</button><button type="button">Delete project</button></>
  },
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    children: { control: false },
    footer: { control: false },
    onClose: { action: "closed" }
  },
  parameters: { layout: "fullscreen" }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
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
