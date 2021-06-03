import { Story, Meta } from '@storybook/react/types-6-0';
import DrawerItemState from './DrawerItemState';

export default {
  title: 'MUI-컴포넌트/Drawer',
  component: DrawerItemState,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <DrawerItemState {...args} />;

export const 드로우_항목_상태 = Template.bind({});
드로우_항목_상태.args = {};
드로우_항목_상태.argTypes = {};
