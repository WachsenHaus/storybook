import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import ValidationAndErrorDisplay from './ValidationAndErrorDisplay';
export default {
  title: 'MUI-컴포넌트/TextField',
  component: ValidationAndErrorDisplay,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {
    // size: { defaultValue: 'small', control: { type: 'select', options: ['small', 'medium'] } },
    // color: { defaultValue: 'secondary', control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
  },
} as Meta;

const Template: Story = (args) => <ValidationAndErrorDisplay {...args} />;

export const 에러검증텍스트 = Template.bind({});
