import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {
  it('renders all three input fields and a submit button', () => {
    render(<Form />);
    const date = screen.getByLabelText('Date:', { exact: false });
    const title = screen.getByLabelText('Title:');
    const journalEntry = screen.getByLabelText('Journal Entry:');
    const button = screen.getByRole('button');

    expect(date).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(journalEntry).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe('Form_functionality', () => {
  it('generates a new journal entry on submit', () => {
    const handleAdd = jest.fn();
    const changeEvent = jest.fn();

    render(<Form handleAdd={handleAdd} />);

    const date = screen.getByLabelText('Date:');
    const title = screen.getByLabelText('Title:');
    const journalEntry = screen.getByLabelText('Journal Entry:');
    const button = screen.getByRole('button');

    userEvent.type(date, '2015-03-12');
    userEvent.type(title, 'Trekking in Bukit Lawang');
    userEvent.type(
      journalEntry,
      "After a restless night (due to the paper-thin mattress that seemed to be crawling  with bugs), it was, for once, not difficult to get out of  bed early. We drenched ourselves in DEET and double-checked whether we had everything we'd need for three days in the jungle. After about an hour, we saw a baby orangutan swinging high above our heads! It was an amazing experience."
    );
    userEvent.click(button);

    expect(handleAdd).toHaveBeenCalledWith({
      date: '2015-03-12',
      title: 'Trekking in Bukit Lawang',
      text: "After a restless night (due to the paper-thin mattress that seemed to be crawling  with bugs), it was, for once, not difficult to get out of  bed early. We drenched ourselves in DEET and double-checked whether we had everything we'd need for three days in the jungle. After about an hour, we saw a baby orangutan swinging high above our heads! It was an amazing experience.",
    });
  });
});
