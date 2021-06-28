import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ComponentThemeSettings from './ComponentThemeSettings';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Theme',
  component: ComponentThemeSettings,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story = (args) => <ComponentThemeSettings {...args} />;

export const ComponentThemeSettings_ = Template.bind({});
ComponentThemeSettings_.argTypes = {
  //   color: {
  //     defaultValue: 'secondary',
  //     control: { type: 'select', options: ['default', 'error', 'inherit', 'textPrimary', 'textSecondary', 'primary', 'secondary'] },
  //   },
};
