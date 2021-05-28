import { Story, Meta } from '@storybook/react/types-6-0';
import FixedColumnLayout from './FixedColumnLayout';

export default {
  title: 'MUI-컴포넌트/Grid',
  component: FixedColumnLayout,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <FixedColumnLayout {...args} />;

export const 고정열_레이아웃 = Template.bind({});
고정열_레이아웃.args = {
  width: 6,
};
고정열_레이아웃.argTypes = {
  width: {
    name: 'width',
    description: '열의 개수를 고정시키려면, xs브레이크 속성만 지정해야한다.',
    defaultValue: 6,
  },
};
