import NavBar from './NavBar.js';
import { Router } from 'react-router-dom';

export default {
  title: 'components/NavBar',
  component: NavBar,
};

const Template = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  parent: <Router></Router>,
};
