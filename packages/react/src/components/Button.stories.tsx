import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ArrowRight } from "../stories/primitives";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Continue",
    variant: "primary",
    tone: "evergreen",
    size: "md",
    corner: "default"
  },
  argTypes: {
    children: { control: "text" },
    tone: {
      control: "select",
      options: ["evergreen", "indigo", "danger", "information", "success", "warning", "neutral"]
    },
    variant: { control: "select", options: ["primary", "secondary", "tertiary"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    corner: { control: "inline-radio", options: ["default", "rounded"] },
    leadingIcon: { control: false },
    trailingIcon: { control: false }
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

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  )
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Button tone="evergreen">Evergreen</Button>
      <Button tone="indigo">Indigo</Button>
      <Button tone="danger">Danger</Button>
      <Button tone="information">Information</Button>
      <Button tone="success">Success</Button>
      <Button tone="warning">Warning</Button>
      <Button tone="neutral">Neutral</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>
  )
};

export const Rounded: Story = {
  args: {
    corner: "rounded"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
