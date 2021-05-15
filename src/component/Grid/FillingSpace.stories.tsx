import { Story, Meta } from '@storybook/react/types-6-0';
import FillingSpace from './FillingSpace';

export default {
  title: 'GES-컴포넌트/Grid',
  component: FillingSpace,
} as Meta;

const Template: Story = (args) => <FillingSpace {...args} />;

export const 공간_채우기_justify = Template.bind({});
공간_채우기_justify.args = {};
