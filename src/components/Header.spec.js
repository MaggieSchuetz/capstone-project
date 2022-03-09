import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header', () => {
  it('renders a default Header', () => {
    render(<Header text="Header">Header</Header>);

    const header = screen.getByText('Header');
    expect(header).toBeInTheDocument();
  });
});
