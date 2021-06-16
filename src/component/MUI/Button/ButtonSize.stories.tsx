import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import ButtonSize, { MyButtonTypes } from './ButtonSize';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Button',
  component: ButtonSize,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story<MyButtonTypes> = (args) => <ButtonSize {...args} />;

export const 버튼크기 = Template.bind({});
