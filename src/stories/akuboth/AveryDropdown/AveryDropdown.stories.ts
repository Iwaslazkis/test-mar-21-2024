import type { Meta, StoryObj } from '@storybook/react';

import AveryDropdown from './AveryDropdown.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Coding12/AveryDropdown',
  component: AveryDropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' }
  },
} satisfies Meta<typeof AveryDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark_Theme: Story = {
  args: {
    disabled: false,
    options: { Example1: 'example1_value', Example2: 'example2_value', ExampleDefault: 'exampleDefault_value', Example4: 'example4_value' },
    defaultOption: 'ExampleDefault',
    bold: true,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    color: '#333333',
    backgroundColor: '#8553f8'
  },
};
export const Light_Theme: Story = {
  args: {
    disabled: false,
    options: { Example1: 'example1_value', Example2: 'example2_value', ExampleDefault: 'exampleDefault_value', Example4: 'example4_value' },
    defaultOption: 'ExampleDefault',
    bold: true,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    color: '#FFFFFF',
    backgroundColor: '#8553f8'
  },
};
export const Dark_Theme_Disabled: Story = {
  args: {
    disabled: true,
    options: { Example1: 'example1_value', Example2: 'example2_value', ExampleDefault: 'exampleDefault_value', Example4: 'example4_value' },
    defaultOption: 'ExampleDefault',
    bold: true,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    color: '#333333',
    backgroundColor: '#8553f8'
  },
};
export const Light_Theme_Disabled: Story = {
  args: {
    disabled: true,
    options: { Example1: 'example1_value', Example2: 'example2_value', ExampleDefault: 'exampleDefault_value', Example4: 'example4_value' },
    defaultOption: 'ExampleDefault',
    bold: true,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    color: '#FFFFFF',
    backgroundColor: '#8553f8'
  },
};