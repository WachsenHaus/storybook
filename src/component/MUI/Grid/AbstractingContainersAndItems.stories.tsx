import { Story, Meta } from '@storybook/react/types-6-0';
import AbstractingContainersAndItems from './AbstractingContainersAndItems';

export default {
  title: 'MUI-컴포넌트/Grid',
  component: AbstractingContainersAndItems,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <AbstractingContainersAndItems {...args} />;

export const 컨테이너와_항목의_추상화 = Template.bind({});
컨테이너와_항목의_추상화.args = {};
컨테이너와_항목의_추상화.argTypes = {
  추상화: {
    name: '추상화',
    description: '자바스크립트의 rest 파라미터를 사용하면 중복을 제거하여 사용할 수 있습니다.',
  },
};
