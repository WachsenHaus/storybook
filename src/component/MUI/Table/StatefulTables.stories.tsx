import { Story, Meta } from '@storybook/react/types-6-0';
import StatefulTables from './StatefulTables';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Table',
  component: StatefulTables,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <StatefulTables {...args} />;

export const 상태_테이블 = Template.bind({});
상태_테이블.args = {};
상태_테이블.argTypes = {};
