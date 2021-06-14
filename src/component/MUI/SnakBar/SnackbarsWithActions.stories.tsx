import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import Snackbars from './SnackbarsWithActions';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: Snackbars,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Snackbars {...args} />;

export const 스낵바와_액션 = Template.bind({});
스낵바와_액션.args = {};
스낵바와_액션.argTypes = {};
