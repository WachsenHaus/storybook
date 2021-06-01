import { Story, Meta } from '@storybook/react/types-6-0';
import AppBarWithButtons from './HideOnScroll';

export default {
  title: 'MUI-컴포넌트/Appbar',
  component: AppBarWithButtons,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AppBarWithButtons {...args} />;

export const 스크롤_시_숨기기 = Template.bind({});
스크롤_시_숨기기.args = {};
스크롤_시_숨기기.argTypes = {
  toobar: {
    name: 'toolbar',
    description: 'toolbar는 기본속성으로 flex를 가집니다.',
  },
  margin: {
    name: 'toolbarmargin',
    description: '콘텐츠가 appbar구성 요소 뒤로 이동하기 때문에 toolbarmargin이라는 mixins를 사용하여, 마진을 자동으로 넣어줘야합니다. tooblar는',
  },
};
