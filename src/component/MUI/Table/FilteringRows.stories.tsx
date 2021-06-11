import { Story, Meta } from '@storybook/react/types-6-0';
import FilteringRows from './FilteringRows';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Table',
  component: FilteringRows,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <FilteringRows {...args} />;

export const 행_필터링 = Template.bind({});
행_필터링.args = {};
행_필터링.argTypes = {};
