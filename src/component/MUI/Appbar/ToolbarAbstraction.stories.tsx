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
툴바_추상화.argTypes = {};
