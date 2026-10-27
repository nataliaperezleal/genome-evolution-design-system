import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Paginator } from "./Paginator";

const meta = {
  title: "Components/Paginator",
  component: Paginator,
  tags: ["autodocs"],
  args: { page: 4, pageCount: 12, onPageChange: () => undefined },
  argTypes: {
    page: { control: { type: "number", min: 1 } },
    pageCount: { control: { type: "number", min: 1 } },
    onPageChange: { action: "page changed" }
  }
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FirstPage: Story = { args: { page: 1, pageCount: 5 } };
export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(4);
    return <Paginator page={page} pageCount={12} onPageChange={setPage} />;
  }
};
