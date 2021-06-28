import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ScalingIcons, { ScalingIconsTypes } from './ScalingIcons';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Icon',
  component: ScalingIcons,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    fontSize: {
      defaultValue: 'inherit',
      control: {
        type: 'select',
        options: ['inherit', 'default', 'small', 'large'],
      },
    },
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<ScalingIconsTypes> = (args) => <ScalingIcons {...args} />;

export const ScalingIcons_ = Template.bind({});
