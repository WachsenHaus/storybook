import { Story, Meta } from '@storybook/react/types-6-0';
import { UnderstandingBreakpoints } from './Grid';

export default {
  title: 'GES-컴포넌트/Grid',
  component: UnderstandingBreakpoints,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <UnderstandingBreakpoints {...args} />;

export const 그리드기본 = Template.bind({});
그리드기본.argTypes = {
  spacing: {
    name: 'spacing',
    defaultValue: 1,
    description: '컴포넌트간의 간격을 결정합니다. 1은 기본값으로 8px를 뜻합니다 2는 16px를 뜻합니다',
  },
};
그리드기본.args = {
  spacing: 1,
};
