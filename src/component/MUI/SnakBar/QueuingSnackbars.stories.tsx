import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import QueuingSnackbars from './QueuingSnackbars';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: QueuingSnackbars,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <QueuingSnackbars {...args} />;

export const 큐닝스낵바 = Template.bind({});
큐닝스낵바.args = {};
큐닝스낵바.argTypes = {};
