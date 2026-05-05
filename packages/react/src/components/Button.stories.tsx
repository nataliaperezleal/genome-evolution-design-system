import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ArrowRight } from "../stories/primitives";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Continue",
    variant: "primary",
    tone: "evergreen",
    size: "md",
    corner: "default"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const WithIcons: Story = {
  args: {
    leadingIcon: <ArrowRight />,
    trailingIcon: <ArrowRight />,
    children: "Review"
  }
};
