import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ThemedIcons, { ThemedIconsTypes } from './ThemedIcons';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Icon',
  component: ThemedIcons,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<ThemedIconsTypes> = (args) => <ThemedIcons {...args} />;

export const ThemedIcons_ = Template.bind({});
ThemedIcons_.argTypes = {
  theme: {
    theme: 'Filled',
    control: {
      type: 'select',
      options: ['Filled', 'Outlined', 'Rounded', 'Sharp', 'TwoTone'],
    },
  },
};
