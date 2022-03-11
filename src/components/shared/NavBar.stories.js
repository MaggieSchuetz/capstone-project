import NavBar from './NavBar.js';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/NavBar',
  component: NavBar,
};

const Template = args => (
  <MemoryRouter>
    <NavBar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
