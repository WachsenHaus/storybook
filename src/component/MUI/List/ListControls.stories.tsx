import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ListControls from './ListControls';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: ListControls,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ListControls {...args} />;

export const 리스트_제어 = Template.bind({});
리스트_제어.args = {};
리스트_제어.argTypes = {};
