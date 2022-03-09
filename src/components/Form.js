import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './shared/Button';

function Form({ handleAdd }) {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageTitle, setMessageTitle] = useState('');
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
    const form = e.target;
    const { date, title, text } = form.elements;
    const newEntry = {
      date: date.value,
      title: title.value,
      text: text.value,
    };
    handleAdd(newEntry);
    form.reset();
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

  useEffect(
    () => {
      enableButton();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [date, title, text]
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="date">Date:</Label>
      <Input
        id="date"
        name="date"
        type="date"
        className="postDate"
        required
        onChange={handleDateChange}
      />
      <Label htmlFor="title">Title:</Label>
      <Input
        id="title"
        name="title"
        type="text"
        className="postTitle"
        placeholder="Title"
        value={title}
        required
        onChange={handleTitleChange} //{e => setTitle(e.target.value)}
      />
      <Label htmlFor="text">Journal Entry:</Label>
      <Textarea
        id="text"
        name="text"
        type="text"
        className="journalEntry"
        placeholder="Write about your adventure!"
        value={text}
        required
        onChange={handleTextChange}
      />
      <Button type="submit" isDisabled={buttonDisabled}>
        Submit
      </Button>
      {messageTitle && <P className="message">{messageTitle}</P>}
      {message && <P className="message">{message}</P>}
    </FormContainer>
  );
}

const P = styled.p`
  color: palevioletred;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #333;
  border: 1px solid black;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px;
`;

const Label = styled.label`
  text-align: left;
  padding: 10px;
`;

const Input = styled.input`
  width: 70vw;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  font-size: 12pt;
  color: grey;
  padding: 5px;
`;

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  font-size: 12pt;
  color: grey;
  padding: 5px;
`;

export default Form;
