import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('Form', () => {
  it('renders all three input fields and a submit button', () => {
    const entryEdit = {
      item: {},
      edit: false,
    };
    render(<Form entryEdit={entryEdit} />);

    const date = screen.getByLabelText('Date:', { exact: false });
    const title = screen.getByLabelText('Title:');
    const uploadButton = screen.getByText('Upload');
    const photoUpload = screen.getByLabelText('Upload some Photos:');
    const journalEntry = screen.getByLabelText('Journal Entry:');
    const tags = screen.getByLabelText('Tags:');
    const submitButton = screen.getByText('Submit');

    expect(date).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(photoUpload).toBeInTheDocument();
    expect(uploadButton).toBeInTheDocument();
    expect(journalEntry).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
  });
});

describe('Form_functionality', () => {
  it('generates a new journal entry on submit', () => {
    const handleAdd = jest.fn();
    const handlePhotoAdd = jest.fn();
    const entryEdit = {
      item: {},
      edit: false,
    };
    const setEntryEdit = jest.fn();
    render(
      <Form
        handleAdd={handleAdd}
        handlePhotoAdd={handlePhotoAdd}
        entryEdit={entryEdit}
        setEntryEdit={setEntryEdit}
      />
    );

    const date = screen.getByLabelText('Date:');
    const title = screen.getByLabelText('Title:');
    const journalEntry = screen.getByLabelText('Journal Entry:');
    const submitButton = screen.getByText('Submit');

    userEvent.type(date, '2015-03-12');
    userEvent.type(title, 'Trekking in Bukit Lawang');
    userEvent.type(
      journalEntry,
      "After a restless night (due to the paper-thin mattress that seemed to be crawling  with bugs), it was, for once, not difficult to get out of  bed early. We drenched ourselves in DEET and double-checked whether we had everything we'd need for three days in the jungle. After about an hour, we saw a baby orangutan swinging high above our heads! It was an amazing experience."
    );
    userEvent.click(submitButton);

    expect(handleAdd).toHaveBeenCalledWith({
      date: '2015-03-12',
      title: 'Trekking in Bukit Lawang',
      text: "After a restless night (due to the paper-thin mattress that seemed to be crawling  with bugs), it was, for once, not difficult to get out of  bed early. We drenched ourselves in DEET and double-checked whether we had everything we'd need for three days in the jungle. After about an hour, we saw a baby orangutan swinging high above our heads! It was an amazing experience.",
      tags: [],
    });
  });
});
