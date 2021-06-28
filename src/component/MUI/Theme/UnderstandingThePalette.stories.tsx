import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import UnderstandingThePallette, { hueOptions, UnderstandingThePalletteTypes } from './UnderstandingThePalette';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Theme',
  component: UnderstandingThePallette,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<UnderstandingThePalletteTypes> = (args) => <UnderstandingThePallette {...args} />;

export const UnderstandingThePallette_ = Template.bind({});
UnderstandingThePallette_.argTypes = {
  primaryShade: {
    defaultValue: 500,
    control: {
      type: 'range',
      range: true,
      min: 100,
      max: 900,
      step: 100,
    },
  },
  primaryHue: { defaultValue: 'red', control: { type: 'select', options: hueOptions } },
};
