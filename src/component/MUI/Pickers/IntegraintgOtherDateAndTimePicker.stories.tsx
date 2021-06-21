import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import IntegratingWithOtherDateAndTimePackages from './IntegraintgOtherDateAndTimePicker';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Pickers',
  component: IntegratingWithOtherDateAndTimePackages,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story = (args) => <IntegratingWithOtherDateAndTimePackages {...args} />;

export const 데이트_피커_인터그레이팅 = Template.bind({});
