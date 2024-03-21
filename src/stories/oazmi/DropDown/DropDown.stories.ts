import type { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown'
import { userEvent, within } from '@storybook/test';

const meta: Meta = {
  title: 'Components/OazmiDropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Menu",
    disabled: false,
  }, 
    play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('OazmiDropDown'));
  }
};

export const Disabled: Story = { 
  args: {
    text: "Menu",
    disabled: true,
  },
};