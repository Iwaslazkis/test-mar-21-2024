import type { Meta, StoryObj } from '@storybook/react';

import DiwasakiContainer from './diwasaki';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/DiwasakiContainer',
  component: DiwasakiContainer,
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
} satisfies Meta<typeof DiwasakiContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true,
      label: 'DiwasakiButton',
    },
  };