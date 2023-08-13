import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { Trash } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Button {...args}>Simple Button</Button>;
  },
};

export const IconButton: Story = {
  args: {
    variants: "icon",
  },
  render: (args) => {
    return (
      <Button {...args}>
        <Trash />
      </Button>
    );
  },
};
