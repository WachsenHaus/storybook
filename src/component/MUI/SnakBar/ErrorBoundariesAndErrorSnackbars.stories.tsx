import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ErrorBoundariesAndErrorSnackbars from './ErrorBoundariesAndErrorSnackbars';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: ErrorBoundariesAndErrorSnackbars,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ErrorBoundariesAndErrorSnackbars {...args} />;

export const 에러바운더리 = Template.bind({});
에러바운더리.args = {};
에러바운더리.argTypes = {};
