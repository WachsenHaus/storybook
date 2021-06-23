import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import UsingMenuTransitions, { UsingMenuTypes } from './UsingMenuTransitions';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Menu',
  component: UsingMenuTransitions,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    transition: { defaultValue: 'collapse', control: { type: 'select', options: ['collapse', 'fade', 'grow', 'slide'] } },
    duration: { defaultValue: 300, control: { type: 'number' } },
  },
} as Meta;

const Template: Story<UsingMenuTypes> = (args) => <UsingMenuTransitions {...args} />;

export const UsingMenuTransitions_ = Template.bind({});
UsingMenuTransitions_.args = {};
UsingMenuTransitions_.argTypes = {};
