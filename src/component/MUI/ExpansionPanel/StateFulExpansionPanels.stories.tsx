import { Story, Meta } from '@storybook/react/types-6-0';
import StateFulExpansionPanels from './StateFulExpansionPanels';

export default {
  title: 'MUI-컴포넌트/ExpansionPanel',
  component: StateFulExpansionPanels,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <StateFulExpansionPanels {...args} />;

export const 상태_저장_확장_패널 = Template.bind({});
상태_저장_확장_패널.args = {};
상태_저장_확장_패널.argTypes = {};
