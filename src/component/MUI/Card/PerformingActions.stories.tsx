import { Story, Meta } from '@storybook/react/types-6-0';
import PerformingActions from './PerformingActions';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Card',
  component: PerformingActions,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <PerformingActions {...args} />;

export const 동작_수행하기 = Template.bind({});
동작_수행하기.args = {};
동작_수행하기.argTypes = {};
