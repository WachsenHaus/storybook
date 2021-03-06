import { Story, Meta } from '@storybook/react/types-6-0';
import WithNavigation from './WithNavigation';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Appbar',
  component: WithNavigation,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <WithNavigation {...args} />;

export const 내비게이션과_함께_사용하기 = Template.bind({});
내비게이션과_함께_사용하기.args = {};
내비게이션과_함께_사용하기.argTypes = {};
