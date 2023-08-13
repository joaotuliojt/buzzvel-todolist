import type { Meta, StoryObj } from "@storybook/react";

import { TodoContainer } from ".";

const meta = {
  title: "Components/TodoContainer",
  component: TodoContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof TodoContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
