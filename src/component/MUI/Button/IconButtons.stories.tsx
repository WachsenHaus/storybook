import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import IconButtons from './IconButtons';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Button',
  component: IconButtons,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    iconColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['default', 'secondary', 'primary'],
      },
    },
  },
} as Meta;

const Template: Story<{
  iconColor: any;
}> = (args) => <IconButtons {...args} />;

export const 아이콘버튼 = Template.bind({});
