import { Story, Meta } from '@storybook/react/types-6-0';
import MainContent from './MainContent';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Card',
  component: MainContent,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <MainContent {...args} />;

export const 메인_콘텐츠 = Template.bind({});
메인_콘텐츠.args = {};
메인_콘텐츠.argTypes = {};
