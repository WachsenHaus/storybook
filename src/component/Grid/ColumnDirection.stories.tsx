import { Story, Meta } from '@storybook/react/types-6-0';

import ColumnDirection from './ColumnDirection';

export default {
  title: 'GES-컴포넌트/Grid',
  component: ColumnDirection,
} as Meta;

const Template: Story = (args) => <ColumnDirection {...args} />;

export const 컬럼방향 = Template.bind({});

컬럼방향.args = {
  grid: 'column',
};
컬럼방향.argTypes = {
  grid: {
    name: 'grid',
    description: '열의 개수를 고정시키려면, xs브레이크 속성만 지정해야한다.',
    control: {
      type: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
  },
};
