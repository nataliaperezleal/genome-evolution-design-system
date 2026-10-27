import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Paginator } from "./Paginator";

const meta = {
  title: "Components/Paginator",
  component: Paginator,
  tags: ["autodocs"],
  args: { type: "page-size-range", page: 1, pageCount: 7, pageSize: 15, totalItems: 100, showPages: true, onPageChange: () => undefined },
  argTypes: {
    type: { control: "inline-radio", options: ["page-size-range", "input", "numbers"] },
    page: { control: { type: "number", min: 1 } },
    pageCount: { control: { type: "number", min: 1 } },
    pageSize: { control: { type: "number", min: 1 } },
    totalItems: { control: { type: "number", min: 0 } },
    showPages: { control: "boolean" },
    onPageChange: { action: "page changed" },
    onPageSizeChange: { action: "page size changed" }
  }
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const PageInput: Story = { args: { type: "input", page: 1, pageCount: 12 } };
export const Numbers: Story = { args: { type: "numbers", page: 2, pageCount: 12 } };
export const FirstPage: Story = { args: { page: 1, pageCount: 5 } };
export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(4);
    return <Paginator type="numbers" page={page} pageCount={12} onPageChange={setPage} />;
  }
};
