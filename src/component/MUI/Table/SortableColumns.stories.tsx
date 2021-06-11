import { Story, Meta } from '@storybook/react/types-6-0';
import SortableColumns from './SortableColumns';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Table',
  component: SortableColumns,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SortableColumns {...args} />;

export const 정렬_가능한_열 = Template.bind({});
정렬_가능한_열.args = {};
정렬_가능한_열.argTypes = {};
