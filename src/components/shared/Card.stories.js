import Card from './Card.js';

export default {
  title: 'components/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    date: '2022-03-07',
    title: 'Working on Storybook',
    text: 'Writing tests',
  },
  children: 'Display this',
};
