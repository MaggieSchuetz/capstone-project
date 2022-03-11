import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import NavBar from './NavBar.js';

describe('NavBar', () => {
  it('renders a Navbar', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
