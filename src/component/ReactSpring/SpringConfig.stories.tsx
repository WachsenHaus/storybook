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
  from: {
    name: 'from',
    description: 'useSpring에서 사용할 값이다.',
  },
  to: {
    name: 'to',
    description: '목표로할 애니메이션 실행값',
  },
  loop: {
    name: 'loop',
    description: 'boolean값 또는 숫자로 반복최대치를 정할 수 있고,reverse값을 넣으면 반대로 반복을 하게된다.',
  },
  delay: {
    name: 'delay',
    description: '애니메이션이 시작 되기 전 지연 시간입니다.',
  },
  immediate: {
    name: 'immediate',
    description: 'true인 경우 애니메이션을 방지합니다.',
  },
  config: {
    name: 'config',
    description: 'tension,friction등을 설정합니다',
  },
  reset: {
    name: 'reset',
    description: 'true인 경우 from -> to로 애니메이션을 시작합니다',
  },
  reverse: {
    name: 'reverse',
    description: 'from과 to가 전환됩니다. reset flag와 함께 사용하는 경우에만 의미가 있습니다.',
  },
  cancel: {
    name: 'cancel',
    description: 'bool/string/fn',
  },
  pause: {
    name: 'pause',
    description: 'true인경우 애니메이션을 정지',
  },
  events: {
    name: 'events',
    description: '다양한 이벤트 콜백',
  },
};
