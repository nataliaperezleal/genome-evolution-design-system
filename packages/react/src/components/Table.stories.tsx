import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { showHeader: true },
  argTypes: {
    showHeader: { control: "boolean" },
    ...Object.fromEntries(Array.from({ length: 9 }, (_, index) => [`column${index + 2}`, { control: "boolean" }])),
    ...Object.fromEntries(Array.from({ length: 9 }, (_, index) => [`row${index + 2}`, { control: "boolean" }])),
    headers: { control: "object" },
    rows: { control: "object" },
    children: { control: false }
  },
  decorators: [(Story) => <div style={{ overflowX: "auto" }}><Story /></div>]
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const MultipleRowsAndColumns: Story = {
  args: {
    column2: true,
    column3: true,
    row2: true,
    headers: ["Name", "Status", "Owner"],
    rows: [
      ["Genome Evolution", "Active", "Natalia"],
      ["Design system", "In review", "Alex"]
    ]
  }
};
export const WithoutHeader: Story = { args: { showHeader: false } };
