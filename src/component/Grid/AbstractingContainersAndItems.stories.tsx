import { Story, Meta } from '@storybook/react/types-6-0';
import AbstractingContainersAndItems from './AbstractingContainersAndItems';

export default {
  title: 'GES-컴포넌트/Grid',
  component: AbstractingContainersAndItems,
} as Meta;

const Template: Story = (args) => <AbstractingContainersAndItems {...args} />;

export const 컨테이너와_항목의_추상화 = Template.bind({});
컨테이너와_항목의_추상화.args = {};
