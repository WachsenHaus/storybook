import { Story, Meta } from '@storybook/react/types-6-0';
import ExpandableCards from './ExpandableCards';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/Card',
  component: ExpandableCards,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ExpandableCards {...args} />;

export const 확장_카드 = Template.bind({});
확장_카드.args = {};
확장_카드.argTypes = {};
