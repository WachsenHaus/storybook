import { Story, Meta } from '@storybook/react/types-6-0';
import FixedPosition from './FixedPosition';

export default {
  title: 'MUI-컴포넌트/Appbar',
  component: FixedPosition,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <FixedPosition {...args} />;

export const 고정된_위치 = Template.bind({});
고정된_위치.args = {};
고정된_위치.argTypes = {
  toobar: {
    name: 'toolbar',
    description: 'toolbar는 기본속성으로 flex를 가집니다.',
  },
  margin: {
    name: 'toolbarmargin',
    description: '콘텐츠가 appbar구성 요소 뒤로 이동하기 때문에 toolbarmargin이라는 mixins를 사용하여, 마진을 자동으로 넣어줘야합니다. tooblar는',
  },
};
