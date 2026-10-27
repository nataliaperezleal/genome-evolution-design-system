import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    content: "items",
    presentation: "panel",
    options: Array.from({ length: 10 }, (_, index) => ({ label: "Item list", value: `item-${index + 1}` })),
    buttonLabel: "Button"
  },
  argTypes: {
    presentation: { table: { disable: true } },
    content: { control: "inline-radio", options: ["items", "slots"] },
    options: { control: "object" },
    buttonLabel: { control: "text" },
    onValueChange: { action: "option selected" },
    onApply: { action: "apply" },
    children: { control: false },
    disabled: { control: "boolean" }
  },
  decorators: [(Story) => <div style={{ width: 174 }}><Story /></div>]
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Slots: Story = {
  args: { content: "slots" },
  render: (args) => (
    <Dropdown {...args} content="slots">
      {["Custom option 1", "Custom option 2", "Custom option 3"].map((item) => (
        <button key={item} className="ge-dropdown__option" role="option" type="button">{item}</button>
      ))}
    </Dropdown>
  )
};
export const FormField: Story = {
  args: {
    presentation: "field",
    label: "Environment",
    helperText: "Select where to deploy this project.",
    options: [
      { label: "Development", value: "development" },
      { label: "Staging", value: "staging" },
      { label: "Production", value: "production" }
    ]
  }
};
