//LazyLoadingPanelContent

import { Story, Meta } from '@storybook/react/types-6-0';
import LazyLoadingPanelContent from './LazyLoadingPanelContent';

export default {
  title: 'MUI-컴포넌트/ExpansionPanel',
  component: LazyLoadingPanelContent,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <LazyLoadingPanelContent {...args} />;

export const 패널_콘텐츠_지연_로딩 = Template.bind({});
패널_콘텐츠_지연_로딩.args = {};
패널_콘텐츠_지연_로딩.argTypes = {};
