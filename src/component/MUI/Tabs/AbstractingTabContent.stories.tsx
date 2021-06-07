import { Story, Meta } from '@storybook/react/types-6-0';
import AbstractingTabContent from './AbstractingTabContent';

export default {
  title: 'MUI-컴포넌트/Tabs',
  component: AbstractingTabContent,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AbstractingTabContent {...args} />;

export const 탭_콘텐츠_추상화 = Template.bind({});
탭_콘텐츠_추상화.args = {};
탭_콘텐츠_추상화.argTypes = {};
