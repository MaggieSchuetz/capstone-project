import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from './shared/Card';
import Button from './shared/Button';

function Form({ handleAdd }) {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // const [messageDate, setMessageDate] = useState('(required)');
  const [messageTitle, setMessageTitle] = useState('');
  // const [messageText, setMessageText] = useState('(required)');
  const [message, setMessage] = useState('Please fill out all fields!');

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
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
    if (title.length > 40) {
      setButtonDisabled(true);
      setMessageTitle('This title is too long');
    } else if (date !== null && title !== '' && text !== '') {
      setButtonDisabled(false);
      setMessage('');
      setMessageTitle('');
    } else {
      setButtonDisabled(true);
    }
  }

  useEffect(() => {
    enableButton();
  }, [date, title, text]);

  return (
    <Card className="forForm">
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Date:
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
            placeholder="Title"
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
        </label>
        <Button type="submit" isDisabled={buttonDisabled}>
          Submit
        </Button>
        {messageTitle && (
          <Span Span className="message">
            {messageTitle}
          </Span>
        )}
        {message && <Span className="message">{message}</Span>}
      </form>
    </Card>
  );
}

const StyledSpan = styled.span`
  color: red;

  &.hidden {
    display: none;
  }
`;

function Span({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}

export default Form;
