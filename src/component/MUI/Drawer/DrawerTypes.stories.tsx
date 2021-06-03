import { Story, Meta } from '@storybook/react/types-6-0';
import DrawerTypes from './DrawerTypes';

export default {
  title: 'MUI-컴포넌트/Drawer',
  component: DrawerTypes,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <DrawerTypes {...args} />;

export const 드로우_타입 = Template.bind({});
드로우_타입.args = {};
드로우_타입.argTypes = {};
