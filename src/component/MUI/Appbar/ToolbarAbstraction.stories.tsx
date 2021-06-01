import { Story, Meta } from '@storybook/react/types-6-0';
import ToolbarAbstraction from './ToolbarAbstraction';

export default {
  title: 'MUI-컴포넌트/Appbar',
  component: ToolbarAbstraction,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ToolbarAbstraction {...args} />;

export const 툴바_추상화 = Template.bind({});
툴바_추상화.args = {};
툴바_추상화.argTypes = {
  toobar: {
    name: 'toolbar',
    description: 'toolbar는 기본속성으로 flex를 가집니다.',
  },
  margin: {
    name: 'toolbarmargin',
    description: '콘텐츠가 appbar구성 요소 뒤로 이동하기 때문에 toolbarmargin이라는 mixins를 사용하여, 마진을 자동으로 넣어줘야합니다. tooblar는',
  },
};
