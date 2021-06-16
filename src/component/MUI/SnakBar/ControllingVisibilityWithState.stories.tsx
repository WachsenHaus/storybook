import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ControllingVisibilityWithState from './ControllingVisibilityWithState';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: ControllingVisibilityWithState,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ControllingVisibilityWithState {...args} />;

export const 상태와_보여줌을_컨트롤 = Template.bind({});
상태와_보여줌을_컨트롤.args = {};
상태와_보여줌을_컨트롤.argTypes = {};
