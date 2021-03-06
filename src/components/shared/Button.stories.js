import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'default',
  isDisabled: true,
};

export const Delete = Template.bind({});
Delete.args = {
  type: 'delete',
};

export const Edit = Template.bind({});
Edit.args = {
  type: 'edit',
};
