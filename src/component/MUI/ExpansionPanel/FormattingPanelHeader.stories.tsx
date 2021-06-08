import { Story, Meta } from '@storybook/react/types-6-0';
import FormattingPanelHeaders from './FormattingPanelHeader';

export default {
  title: 'MUI-컴포넌트/ExpansionPanel',
  component: FormattingPanelHeaders,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <FormattingPanelHeaders {...args} />;

export const 패널_헤더_서식_지정 = Template.bind({});
패널_헤더_서식_지정.args = {};
패널_헤더_서식_지정.argTypes = {};
