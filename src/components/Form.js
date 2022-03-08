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
    if (
      (title.length > 40 && date === null) ||
      (title.length > 40 && text === '')
    ) {
      setMessage('Please fill out all fields!');
      setMessageTitle('This title is too long');
      setButtonDisabled(true);
    } else if (
      (title.length > 40 && date !== null) ||
      (title.length > 40 && text !== '')
    ) {
      setButtonDisabled(true);
      setMessageTitle('This title is too long');
      setMessage('');
    } else if (
      (title.length < 40 && date === null) ||
      (title.length < 40 && title === '') ||
      (title.length < 40 && text === '')
    ) {
      setMessage('Please fill out all fields!');
      setMessageTitle('');
      setButtonDisabled(true);
    } else if (date !== null && title !== '' && text !== '') {
      setButtonDisabled(false);
      setMessage('');
      setMessageTitle('');
    } else {
      setButtonDisabled(true);
      setMessage('Please fill out all fields!');
    }
  }

  useEffect(() => {
    enableButton();
  }, [date, title, text]);

  return (
    <Card className="forForm">
      <FormContainer id="form" onSubmit={handleSubmit}>
        <Label>
          <h2>Date:</h2>
          <input
            type="date"
            className="postDate"
            //value={date}
            required
            onChange={handleDateChange}
          />
        </Label>
        <Label>
          <h2>Title:</h2>
          <input
            type="text"
            className="postTitle"
            placeholder="Title"
            value={title}
            required
            onChange={handleTitleChange} //{e => setTitle(e.target.value)}
          />
        </Label>
        <Label>
          <h2>Journal Entry:</h2>
          <textarea
            type="text"
            className="journalEntry"
            placeholder="Write about your adventure!"
            value={text}
            required
            onChange={handleTextChange}
          />
        </Label>
        <Button type="submit" isDisabled={buttonDisabled}>
          Submit
        </Button>
        {messageTitle && <P className="message">{messageTitle}</P>}
        {message && <P className="message">{message}</P>}
      </FormContainer>
    </Card>
  );
}

const StyledP = styled.p`
  color: red;
`;

function P({ children }) {
  return <StyledP>{children}</StyledP>;
}

const StyledFormContainer = styled.form`
  display: grid;
  justify-content: center;
  align-content: center;
`;

function FormContainer({ children, id, onSubmit }) {
  return (
    <StyledFormContainer id={id} onSubmit={onSubmit}>
      {children}
    </StyledFormContainer>
  );
}

const StyledLabel = styled.label`
  display: grid;
  justify-content: center;
  align-content: center;
`;

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Form;
