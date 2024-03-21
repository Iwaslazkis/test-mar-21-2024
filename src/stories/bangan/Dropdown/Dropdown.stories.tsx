import React from "react";
import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

export default {
  title: "Components/Hjoshi-Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
}

const Template = (args) => <Dropdown {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  backgroundColor: "#008cff",
  fontColor: "white",
  borderColor: "#008cff",
  disable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    backgroundColor: "lightgrey",
    fontColor: "white",
    borderColor: "lightgrey",
    disable: true,
};

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('TlaDropdown'));
  }
};