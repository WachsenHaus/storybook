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
스크롤_시_숨기기.argTypes = {};
