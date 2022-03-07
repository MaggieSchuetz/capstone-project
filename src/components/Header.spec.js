import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header', () => {
  it('renders a default Header', () => {
    render(<Header>Header</Header>);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });
});
