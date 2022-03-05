import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function Form() {
  //const [date, setDate] = useState();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // const handleDateChange = e => {
  //   setDate(e.target.value);
  //   console.log(date);
  // };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <label>
          Please enter a date:
          <input
            type="date"
            className="postDate"
            // value={date}
            // onChange={handleDateChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            className="postTitle"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          Journal Entry:
          <input
            type="text"
            className="journalEntry"
            placeholder="Write about your adventure!"
            value={text}
            onChange={handleTextChange}
          />
        </label>
        <Button>Submit</Button>
      </form>
    </Card>
  );
}

export default Form;
