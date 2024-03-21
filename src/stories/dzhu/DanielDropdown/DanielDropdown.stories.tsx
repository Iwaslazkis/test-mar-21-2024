import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

import { DanielDropdown } from "./DanielDropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DanielDropdown',
  component: DanielDropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DanielDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: [
      <option key="1" value="option1">Option 1</option>,
      <option key="2" value="option2">Option 2</option>,
      <option key="3" value="option3">Option 3</option>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    children: [
      <option key="1" value="option1">Option 1</option>,
      <option key="2" value="option2">Option 2</option>,
      <option key="3" value="option3">Option 3</option>,
    ],
    disabled: true,
  },
};

export const Open: Story = {
  args: {
    children: [
      <option key="1" value="option1">Option 1</option>,
      <option key="2" value="option2">Option 2</option>,
      <option key="3" value="option3">Option 3</option>,
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId("DanielDropdown"));
  },
};
