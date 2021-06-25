import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import UsingThemeColors from './UsingThemeColors';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Typography',
  component: UsingThemeColors,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<{
  color: 'secondary';
}> = (args) => <UsingThemeColors {...args} />;

export const UsingThemeColors_ = Template.bind({});
UsingThemeColors_.argTypes = {
  color: {
    defaultValue: 'secondary',
    control: { type: 'select', options: ['default', 'error', 'inherit', 'textPrimary', 'textSecondary', 'primary', 'secondary'] },
  },
};
