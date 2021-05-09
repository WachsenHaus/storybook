import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UnderstandingBreakpoints } from './Grid';

export default {
  title: 'GES-컴포넌트/Grid',
  component: UnderstandingBreakpoints,
} as Meta;

const Template: Story = (args) => <UnderstandingBreakpoints {...args} />;

export const GES_GRID = Template.bind({});
GES_GRID.args = {};
