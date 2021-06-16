import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import SnackbarTransitions from './SnackbarTransitions';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: SnackbarTransitions,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SnackbarTransitions {...args} />;

export const 스낵바_변화 = Template.bind({});
스낵바_변화.args = {};
스낵바_변화.argTypes = {};
