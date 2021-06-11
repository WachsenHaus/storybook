import { Story, Meta } from '@storybook/react/types-6-0';
import PresentingMedia from './PresentingMedia';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Card',
  component: PresentingMedia,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <PresentingMedia {...args} />;

export const 미디어_표현 = Template.bind({});
미디어_표현.args = {};
미디어_표현.argTypes = {};
