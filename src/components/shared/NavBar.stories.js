import NavBar from './NavBar.js';

export default {
  title: 'components/NavBar',
  component: NavBar,
};

const Template = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    date: '2022-03-07',
    title: 'Working on Storybook',
    text: 'Writing tests',
  },
  children: 'Display this',
};
