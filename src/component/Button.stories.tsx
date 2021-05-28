import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'MUI-컴포넌트/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    primaryColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const GES_BUTTON = Template.bind({});
GES_BUTTON.args = {
  borderRadius: 1,
  InputText: '버튼',
  primary: false,
};
