import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';

export default {
  title: 'MUI-컴포넌트/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const text = Template.bind({});
text.args = {
  inputText: '텍스트를 입력하시오.',
  color: '색상을 정하시오.',
};
