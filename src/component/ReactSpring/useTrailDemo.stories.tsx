import { config } from '@react-spring/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import UseTrailDemoPage from './useTrailDemo';

export default {
  title: '리액트스프링-컴포넌트/연습',
  component: UseTrailDemoPage,
} as Meta;

const Template: Story = (args) => <UseTrailDemoPage {...args} />;

export const 트레일데모 = Template.bind({});
트레일데모.args = {
  tension: 200,
  friction: 120,
};
트레일데모.argTypes = {
  frition: {
    name: 'frition',
    description: '마찰력 - 높을수록 목표치에 다달하는 속도가 천천히 변경됨',
  },
  tension: {
    name: 'tension',
    description: '장력 - 높을수록 빠르게 변함',
  },
};
