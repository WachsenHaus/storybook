import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import DynamicallyLoadingIcons, { CategoriesType } from './DynamicallyLoadingIcons';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Icon',
  component: DynamicallyLoadingIcons,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    category: {
      defaultValue: 'Alert',
      control: {
        type: 'select',
        options: ['action', 'Alert', 'Av', 'Communication'],
      },
    },
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<CategoriesType> = (args) => <DynamicallyLoadingIcons {...args} />;

export const DynamicallyLoadingIcons_ = Template.bind({});
