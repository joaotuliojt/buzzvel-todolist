import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";
import { Lock, Search } from "lucide-react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Simple Input",
  },
};

export const LeftIcon: Story = {
  args: {
    leftIcon: Search,
    placeholder: "Input with icon",
  },
};

export const RightIcon: Story = {
  args: {
    rightIcon: Lock,
    placeholder: "Input with icon",
    type: "password",
  },
};

export const ErrorMessage: Story = {
  args: {
    leftIcon: Search,
    placeholder: "Input with icon",
    errorMessage: "Invalid Value",
  },
};
