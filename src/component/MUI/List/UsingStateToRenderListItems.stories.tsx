import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react';
import UsingStateToRenderListItems from './UsingStateToRenderListItems';
import { withKnobs, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'MUI-컴포넌트/List',
  component: UsingStateToRenderListItems,
  decorators: [withKnobs, StoryRouter()],
  argTypes: {},
} as Meta;

const Template: Story = (args) => <UsingStateToRenderListItems {...args} />;

export const 상태를_사용한_리스트_항목_렌더링 = Template.bind({});
상태를_사용한_리스트_항목_렌더링.args = {};
상태를_사용한_리스트_항목_렌더링.argTypes = {};
