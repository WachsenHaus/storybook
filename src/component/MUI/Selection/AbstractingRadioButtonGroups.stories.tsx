import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import AbstractingRadioButtonGroups from './AbstractingRadioButtonGroups';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Selection',
  component: AbstractingRadioButtonGroups,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story = (args) => <AbstractingRadioButtonGroups {...args} />;

export const 라디오버튼그룹 = Template.bind({});
