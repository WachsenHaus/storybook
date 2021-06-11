import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ListAvatarsAndText from './ListAvatarsAndText';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: ListAvatarsAndText,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ListAvatarsAndText {...args} />;

export const 리스트_아바타와_텍스트 = Template.bind({});
리스트_아바타와_텍스트.args = {};
리스트_아바타와_텍스트.argTypes = {};
