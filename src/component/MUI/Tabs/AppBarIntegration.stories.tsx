import { Story, Meta } from '@storybook/react/types-6-0';
import AppBarIntegration from './AppBarIntegration';

export default {
  title: 'MUI-컴포넌트/Tabs',
  component: AppBarIntegration,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AppBarIntegration {...args} />;

export const 앱바_통합 = Template.bind({});
앱바_통합.args = {};
앱바_통합.argTypes = {};
