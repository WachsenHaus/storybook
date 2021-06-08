//ScrollablePanelContent
import { Story, Meta } from '@storybook/react/types-6-0';
import ScrollablePanelContent from './ScrollablePanelContent';

export default {
  title: 'MUI-컴포넌트/ExpansionPanel',
  component: ScrollablePanelContent,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ScrollablePanelContent {...args} />;

export const 스크롤_가능한_패널_콘텐츠 = Template.bind({});
스크롤_가능한_패널_콘텐츠.args = {};
스크롤_가능한_패널_콘텐츠.argTypes = {};
