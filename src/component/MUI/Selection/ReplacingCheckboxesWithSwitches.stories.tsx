import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ReplacingCheckboxesWithSwitches from './ReplacingCheckboxesWithSwitches';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Selection',
  component: ReplacingCheckboxesWithSwitches,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story = (args) => <ReplacingCheckboxesWithSwitches {...args} />;

export const 교체체크박스_스위치와함께 = Template.bind({});
