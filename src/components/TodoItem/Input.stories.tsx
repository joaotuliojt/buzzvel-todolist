import type { Meta, StoryObj } from "@storybook/react";

import { TodoItem } from ".";

const meta = {
  title: "Components/TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
} satisfies Meta<typeof TodoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "A simple task",
    finished: false,
    id: "ABCDEFGH",
  },
};
