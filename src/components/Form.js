import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function Form({ handleAdd }) {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageDate, setMessageDate] = useState('Date req');
  const [messageTitle, setMessageTitle] = useState('Title req');
  const [messageText, setMessageText] = useState(
    'Please write a journal entry'
  );

  const handleDateChange = e => {
    setDate(e.target.value);
    setMessageDate('');
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
    if (title.length > 40) {
      setMessageTitle('This title is too long');
    } else {
      setMessageTitle(null);
    }
  };

  const handleTextChange = e => {
    setText(e.target.value);
    setMessageText(null);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newEntry = {
      date,
      title,
      text,
    };
    handleAdd(newEntry);
    document.getElementById('form').reset();
    setTitle('');
    setText('');
    setButtonDisabled(true);
  };

  function enableButton() {
    if (date !== null && title !== '' && text !== '') {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }

  useEffect(() => {
    enableButton();
  }, [date, title, text]);

  return (
    <Card>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Please enter a date:
          <input
            type="date"
            className="postDate"
            //value={date}
            required
            onChange={handleDateChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            className="postTitle"
            placeholder="Title (required)"
            value={title}
            required
            onChange={handleTitleChange} //{e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Journal Entry:
          <textarea
            type="text"
            className="journalEntry"
            placeholder="Write about your adventure!"
            value={text}
            required
            onChange={handleTextChange}
          />
          {messageDate && <div className="message">{messageDate}</div>}
          {messageTitle && <div className="message">{messageTitle}</div>}
          {messageText && <div className="message">{messageText}</div>}
        </label>
        <Button type="submit" isDisabled={buttonDisabled}>
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default Form;
