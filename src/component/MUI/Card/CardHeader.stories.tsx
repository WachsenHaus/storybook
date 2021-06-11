import { Story, Meta } from '@storybook/react/types-6-0';
import MyCardHeader from './CardHeader';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Card',
  component: MyCardHeader,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <MyCardHeader {...args} />;

export const 카드_헤더 = Template.bind({});
카드_헤더.args = {};
카드_헤더.argTypes = {};
