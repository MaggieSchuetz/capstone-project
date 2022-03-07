import { render, screen } from '@testing-library/react';
import JournalEntry from './JournalEntry.js';

const item = {
  date: '2022-03-07',
  title: 'Title',
  text: 'Journal Entry',
};
describe('JournalEntry', () => {
  it('renders a default JournalEntry from an item that contains date, title and text', () => {
    render(<JournalEntry item={item}>{item.text}</JournalEntry>);

    const card = screen.getByText('Journal Entry');
    expect(card).toBeInTheDocument();
  });
});
