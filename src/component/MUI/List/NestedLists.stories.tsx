import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import NestedLists from './NestedLists';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: NestedLists,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NestedLists {...args} />;

export const 중첩된_리스트 = Template.bind({});
중첩된_리스트.args = {};
중첩된_리스트.argTypes = {};
