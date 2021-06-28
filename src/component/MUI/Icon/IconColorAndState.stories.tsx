import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import IconColorAndState, { IconColorAndStateTypes } from './IconColorAndState';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Icon',
  component: IconColorAndState,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    color: {
      defaultValue: 'action',
      control: {
        type: 'select',
        options: ['action', 'error', 'inherit', 'primary', 'secondary', 'disabled'],
      },
    },
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<IconColorAndStateTypes> = (args) => <IconColorAndState {...args} />;

export const IconColorAndState_ = Template.bind({});
