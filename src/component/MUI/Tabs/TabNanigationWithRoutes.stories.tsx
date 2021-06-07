import { Story, Meta } from '@storybook/react/types-6-0';
import TabNanigationWithRoutes from './TabNanigationWithRoutes';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'MUI-컴포넌트/Tabs',
  component: TabNanigationWithRoutes,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <TabNanigationWithRoutes {...args} />;

export const 경로로_탭_탐색하기 = Template.bind({});
경로로_탭_탐색하기.args = {};
경로로_탭_탐색하기.argTypes = {};

//TabNanigationWithRoutes
