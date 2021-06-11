import { config } from '@react-spring/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import SpringConfig, { SpringTypes } from './SpringConfig';

export default {
  title: '리액트스프링-컴포넌트/연습',
  component: SpringConfig,
} as Meta;

const Template: Story<SpringTypes> = (args) => <SpringConfig {...args} />;

export const 스프링연습 = Template.bind({});
스프링연습.args = {
  tension: 200,
  friction: 120,
};
스프링연습.argTypes = {
  frition: {
    name: 'frition',
    description: '마찰력 - 높을수록 목표치에 다달하는 속도가 천천히 변경됨',
  },
  tension: {
    name: 'tension',
    description: '장력 - 높을수록 빠르게 변함',
  },
};
