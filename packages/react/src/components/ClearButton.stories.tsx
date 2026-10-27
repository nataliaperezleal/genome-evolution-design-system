import type { Meta, StoryObj } from "@storybook/react";

import { ClearButton } from "./ClearButton";
import { ArrowRight } from "../stories/primitives";

const meta = {
  title: "Components/ClearButton",
  component: ClearButton,
  tags: ["autodocs"],
  args: { children: "Continue", tone: "indigo", typeTone: "default", corner: "default" },
  argTypes: {
    children: { control: "text" },
    tone: { control: "inline-radio", options: ["default", "evergreen", "indigo"] },
    typeTone: { control: "select", options: ["default", "information", "success", "danger", "warning"] },
    corner: { control: "inline-radio", options: ["default", "rounded"] },
    leadingIcon: { control: false },
    trailingIcon: { control: false }
  }
} satisfies Meta<typeof ClearButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcons: Story = { args: { leadingIcon: <ArrowRight />, trailingIcon: <ArrowRight /> } };
export const SemanticTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <ClearButton typeTone="information">Information</ClearButton>
      <ClearButton typeTone="success">Success</ClearButton>
      <ClearButton typeTone="danger">Danger</ClearButton>
      <ClearButton typeTone="warning">Warning</ClearButton>
    </div>
  )
};
