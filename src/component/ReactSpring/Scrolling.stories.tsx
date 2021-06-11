import { config } from '@react-spring/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import Scrolling from './Scrolling';

export default {
  title: '리액트스프링-컴포넌트/연습',
  component: Scrolling,
} as Meta;

const Template: Story = (args) => <Scrolling {...args} />;

export const 스크롤 = Template.bind({});
스크롤.argTypes = {
  springValue: {
    name: 'springValue',
    description:
      '원리는 useSpirng은 number나 string을 리턴해준다. 이 문자열,숫자값은 config설정값을 기반으로 선형적으로 값이 변경된다. 이 변경된 문자열,숫자값을 html 요소에 적재적소에 넣어 활용하면 된다',
  },
};
