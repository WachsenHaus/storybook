import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import MySnackbarContent from './SnackbarContent';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/SnackBar',
  component: MySnackbarContent,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <MySnackbarContent {...args} />;

export const 나의_스낵바_내용 = Template.bind({});
나의_스낵바_내용.args = {};
나의_스낵바_내용.argTypes = {};
