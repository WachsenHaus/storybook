import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import Autocomplete from './HighlightingSearchResults';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/AutoComplete',
  component: Autocomplete,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Autocomplete {...args} />;

export const 하이라이팅서치결과 = Template.bind({});
