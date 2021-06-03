import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import DrawerItemNavigation from './DrawerItemNavigation';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Drawer',
  component: DrawerItemNavigation,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <DrawerItemNavigation {...args} />;

export const 드로우_내비게이션 = Template.bind({});
드로우_내비게이션.args = {};
드로우_내비게이션.argTypes = {};

// storiesOf('Chapter 3 Drawers', module)
//   .addDecorator(withKnobs)
//   .addDecorator(StoryRouter())
//   .add('Drawer Item Navigation', () => <DrawerItemNavigation />);
