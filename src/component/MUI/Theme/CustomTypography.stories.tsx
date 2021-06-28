import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import CustomTypography, { CustomTypographyTypes } from './CustomTypography';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Theme',
  component: CustomTypography,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<CustomTypographyTypes> = (args) => <CustomTypography {...args} />;

export const CustomTypography_ = Template.bind({});
CustomTypography_.argTypes = {
  themeFont: {
    defaultValue: 'roboto',
    control: { type: 'select', options: ['roboto', 'ubuntu', 'exo'] },
  },
};
