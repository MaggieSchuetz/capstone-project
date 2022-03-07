import { render, screen } from '@testing-library/react';
import Card from './Card.js';

describe('Card', () => {
  it('renders a default Card', () => {
    render(<Card>Card</Card>);

    const card = screen.getByText('Card');
    expect(card).toBeInTheDocument();
  });
});
