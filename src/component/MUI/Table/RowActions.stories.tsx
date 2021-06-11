import { Story, Meta } from '@storybook/react/types-6-0';
import RowActions from './RowActions';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Table',
  component: RowActions,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <RowActions {...args} />;

export const 행_동작 = Template.bind({});
행_동작.args = {};
행_동작.argTypes = {};
