import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JournalEntry from './JournalEntry.js';

const item = {
  id: 'id',
  date: '2022-03-07',
  title: 'Title',
  text: 'Journal Entry',
  tags: ['tag1', 'tag2'],
};
describe('JournalEntry', () => {
  it('renders a default JournalEntry from an item that contains date, title and text', () => {
    render(<JournalEntry item={item}>{item.text}</JournalEntry>);

    const card = screen.getByText('Journal Entry');
    expect(card).toBeInTheDocument();
  });
});

describe('JournalEntry_deleteButton', () => {
  it('renders a card with a delete button', () => {
    render(<JournalEntry item={item}>{item.text}</JournalEntry>);
    const deleteButton = screen.getByLabelText('deleteJournalEntry');

    expect(deleteButton).toBeInTheDocument();
  });
});

describe('JournalEntry_delete', () => {
  it('deletes an item when deleteButton is clicked', () => {
    const handleDelete = jest.fn();
    render(
      <JournalEntry handleDelete={handleDelete} item={item}>
        {item.text}
      </JournalEntry>
    );

    const deleteButton = screen.getByLabelText('deleteJournalEntry');
    const id = 'id';
    userEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledWith(id);
  });
});

describe('JournalEntry_editButton', () => {
  it('renders a card with a edit button', () => {
    render(<JournalEntry item={item}>{item.text}</JournalEntry>);
    const editButton = screen.getByLabelText('editJournalEntry');

    expect(editButton).toBeInTheDocument();
  });
});

describe('JournalEntry_edit', () => {
  it('edits an item when editButton is clicked', () => {
    const editJournalEntry = jest.fn();
    render(
      <JournalEntry editJournalEntry={editJournalEntry} item={item}>
        {item.text}
      </JournalEntry>
    );

    const editButton = screen.getByLabelText('editJournalEntry');

    userEvent.click(editButton);
    expect(editJournalEntry).toHaveBeenCalledWith(item);
  });
});

describe('JournalEntry_tags', () => {
  it('renders tags in the journal entry', () => {
    render(<JournalEntry item={item}>{item.text}</JournalEntry>);
    const tag = screen.getByText('tag1');

    expect(tag).toBeInTheDocument();
  });
});
