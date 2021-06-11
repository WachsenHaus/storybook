import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import AppBarInteraction from './AppBarInteraction';

export default {
  title: 'MUI-컴포넌트/Drawer',
  component: AppBarInteraction,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AppBarInteraction {...args} />;

export const 앱바_상호작용 = Template.bind({});
앱바_상호작용.args = {};
앱바_상호작용.argTypes = {};