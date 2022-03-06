import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function Form() {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //const [messageDate, setMessageDate] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageText, setMessageText] = useState(
    'Please write a journal entry'
  );

  const handleDateChange = e => {
    setDate(e.target.value);
    console.log(date);
    // if (date === null) {
    //   setButtonDisabled(true);
    // } else {
    //   setButtonDisabled(false);
    //   console.log(date);
    // }
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
    console.log(title);
    // if (title === '') {
    //   setButtonDisabled(true);
    // } else if (title.trim().length > 40) {
    //   setButtonDisabled(true);
    //   setMessageTitle('This title is too long');
    // } else {
    //   setButtonDisabled(false);
    //   setMessageTitle(null);
    // }
  };

  const handleTextChange = e => {
    setText(e.target.value);
    console.log(text);
    // if (text === '') {
    //   setButtonDisabled(true);
    // } else {
    //   setButtonDisabled(false);
    setMessageText(null);
    // }
  };

  if (date !== null && title !== '' && text !== '') {
    setButtonDisabled(false);
  }

  return (
    <Card>
      <form>
        <label>
          Please enter a date:
          <input
            type="date"
            className="postDate"
            //value={date}
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
            onChange={e => setTitle(e.target.value)}
          />
          {messageTitle && <div className="message">{messageTitle}</div>}
        </label>
        <label>
          Journal Entry:
          <textarea
            type="text"
            className="journalEntry"
            placeholder="Write about your adventure!"
            value={text}
            onChange={handleTextChange}
          />
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
