import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ScrollingLists from './ScrollingLists';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: ScrollingLists,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ScrollingLists {...args} />;

export const 리스트_스크롤 = Template.bind({});
리스트_스크롤.args = {};
리스트_스크롤.argTypes = {};
