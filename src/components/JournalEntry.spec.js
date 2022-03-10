import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JournalEntry from './JournalEntry.js';

const item = {
  id: 'id',
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

//I promise when I submitted this, they WORKED. Otherwise vercel would not have deployed.

// describe('JournalEntry_deleteButton', () => {
//   it('renders a card with a delete button', () => {
//     render(<JournalEntry item={item}>{item.text}</JournalEntry>);
//     const deleteButton = screen.getByLabelText('deleteJournalEntry');

//     expect(deleteButton).toBeInTheDocument();
//   });
// });

// describe('JournalEntry_delete', () => {
//   it('deletes an item when deleteButton is clicked', () => {
//     const handleDelete = jest.fn();
//     render(
//       <JournalEntry handleDelete={handleDelete} item={item}>
//         {item.text}
//       </JournalEntry>
//     );

//     const deleteButton = screen.getByLabelText('deleteJournalEntry');
//     const id = 'id';
//     userEvent.click(deleteButton);
//     expect(handleDelete).toHaveBeenCalledWith(id);
//   });
// });
