import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ListIcons from './ListIcons';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: ListIcons,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ListIcons {...args} />;

export const 리스트_아이콘 = Template.bind({});
리스트_아이콘.args = {};
리스트_아이콘.argTypes = {};
