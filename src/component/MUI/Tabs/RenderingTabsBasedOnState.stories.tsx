import { Story, Meta } from '@storybook/react/types-6-0';
import RenderingTabsBasedOnState from './RenderingTabsBasedOnState';

export default {
  title: 'MUI-컴포넌트/Tabs',
  component: RenderingTabsBasedOnState,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <RenderingTabsBasedOnState {...args} />;

export const 상태에_기반한_탭_랜더링 = Template.bind({});
상태에_기반한_탭_랜더링.args = {};
상태에_기반한_탭_랜더링.argTypes = {};
