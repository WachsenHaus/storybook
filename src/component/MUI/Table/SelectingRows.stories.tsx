import { Story, Meta } from '@storybook/react/types-6-0';
import SelectingRows from './SelectingRows';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Table',
  component: SelectingRows,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SelectingRows {...args} />;

export const 행_선택 = Template.bind({});
행_선택.args = {};
행_선택.argTypes = {};
