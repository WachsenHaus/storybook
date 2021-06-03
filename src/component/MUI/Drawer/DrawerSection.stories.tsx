//DrawerSection

import { Story, Meta } from '@storybook/react/types-6-0';
import DrawerSection from './DrawerSection';

export default {
  title: 'MUI-컴포넌트/Drawer',
  component: DrawerSection,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <DrawerSection {...args} />;

export const 드로우_섹션 = Template.bind({});
드로우_섹션.args = {};
드로우_섹션.argTypes = {};
