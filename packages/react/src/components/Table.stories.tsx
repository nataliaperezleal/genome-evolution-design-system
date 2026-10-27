import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr><th>Project</th><th>Status</th><th>Owner</th><th>Updated</th></tr>
      </thead>
      <tbody>
        <tr><td>Genome Evolution</td><td>Active</td><td>Natalia</td><td>Today</td></tr>
        <tr><td>Design system</td><td>In review</td><td>Alex</td><td>Yesterday</td></tr>
        <tr><td>Token migration</td><td>Planned</td><td>Sam</td><td>Oct 24</td></tr>
      </tbody>
    </Table>
  )
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
