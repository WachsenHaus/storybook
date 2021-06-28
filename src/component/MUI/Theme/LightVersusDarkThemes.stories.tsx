import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import LightVersusDarkThemes, { LightVersusDarkThemesTypes } from './LightVersusDarkThemes';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Theme',
  component: LightVersusDarkThemes,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<LightVersusDarkThemesTypes> = (args) => <LightVersusDarkThemes {...args} />;

export const LightVersusDarkThemes_ = Template.bind({});
LightVersusDarkThemes_.argTypes = {
  themeType: {
    defaultValue: 'light',
    control: { type: 'select', options: ['light', 'dark'] },
  },
};
