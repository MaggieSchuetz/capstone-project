import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import axios from 'axios';

function Form({
  handleAdd,
  entryEdit,
  setEntryEdit,
  updateContent,
  handlePhotoAdd,
}) {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('Please fill out all fields!');
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [dataUrls, setDataUrls] = useState([]);
  const [messageImage, setMessageImage] = useState('');
  const thisDataUrl = dataUrls;

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleTagChange = e => {
    setTags(e.target.value.toLowerCase().split(','));
  };

  const uploadImages = images => {
    setMessageImage('Please wait until all photos have been uploaded!');
    const toUpload = images.map(image => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'rupkxbut');
      formData.append('tags', title);
      formData.append('folder', title);
      formData.append('title', title);
      return axios
        .post(
          'https://api.cloudinary.com/v1_1/maggie-schuetz/image/upload',
          formData
        )
        .then(response => {
          setDataUrls(prevDataUrls => [response.data, ...prevDataUrls]);
        });
    });

    axios.all(toUpload);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const newEntry = {
      date: date,
      title: title,
      text: text,
      tags: tags,
    };
    if (entryEdit.edit === true) {
      updateContent(entryEdit.item.id, newEntry);
      handlePhotoAdd(thisDataUrl);

      setDate('');
      setTitle('');
      setText('');
      setTags([]);
      setButtonDisabled(true);
      setEntryEdit({
        edit: false,
      });
      setMessageImage('');
      setImages([]);
      setDataUrls([]);
    } else {
      handleAdd(newEntry);
      handlePhotoAdd(thisDataUrl);
      setDate('');
      setTitle('');
      setText('');
      setTags([]);
      setButtonDisabled(true);
      setEntryEdit({
        edit: false,
      });
      setMessageImage('');
      setImages([]);
      setDataUrls([]);
    }
  };

  function enableButton() {
    if (
      (title.length === 80 && date === '') ||
      (title.length === 80 && text === '')
    ) {
      setMessage('Please fill out all necessary fields!');
      setMessageTitle('Your title can be no longer than this');
      setButtonDisabled(true);
    } else if (
      (title.length === 80 && date !== '') ||
      (title.length === 80 && text !== '')
    ) {
      setButtonDisabled(true);
      setMessageTitle('Your title can be no longer than this');
      setMessage('');
    } else if (
      (title.length < 80 && date === '') ||
      (title.length < 80 && title === '') ||
      (title.length < 80 && text === '')
    ) {
      setMessage('Please fill out all necessary fields!');
      setMessageTitle('');
      setButtonDisabled(true);
    } else if (date !== null && title !== '' && text !== '') {
      setButtonDisabled(false);
      setMessage('');
      setMessageTitle('');
    } else {
      setButtonDisabled(true);
      setMessage('Please fill out all necessary fields!');
    }
  }

  useEffect(
    () => {
      enableButton();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [date, title, text]
  );
  useEffect(() => {
    if (entryEdit.edit === true) {
      setDate(entryEdit.item.date);
      setTitle(entryEdit.item.title);
      setText(entryEdit.item.text);
      setTags(entryEdit.item.tags);
      setButtonDisabled(false);
      setMessage('');
      setMessageImage('');
      setDataUrls([]);
    }
  }, [entryEdit]);

  useEffect(() => {
    if (images.length > 0 && dataUrls.length === images.length) {
      setMessageImage('');
    }
  }, [dataUrls, images]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Container>
        <Label htmlFor="date">Date:</Label>
        <Input
          id="date"
          name="date"
          type="date"
          required
          onChange={handleDateChange}
          value={date}
        />
      </Container>
      <Container>
        <Label htmlFor="title">Title:</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          maxLength="80"
          required
          onChange={handleTitleChange}
        />
      </Container>
      <Container className="photoUpload">
        <Label htmlFor="photoUpload">Upload some Photos:</Label>
        <Input
          id="photoUpload"
          name="photoUpload"
          className="photoUpload"
          type="file"
          multiple
          onChange={e => {
            setImages([...e.target.files]);
          }}
        />{' '}
        <Button
          type="button"
          className="photoUpload"
          aria-label="upload"
          onClick={() => uploadImages(images)}
        >
          Upload
        </Button>
      </Container>

      <Container>
        <Label htmlFor="text">Journal Entry:</Label>
        <Textarea
          id="text"
          name="text"
          type="text"
          placeholder="Write about your adventure!"
          value={text}
          required
          onChange={handleTextChange}
        />
      </Container>
      <Container>
        <Label htmlFor="tags">Tags:</Label>
        <Input
          id="tags"
          name="tags"
          type="text"
          placeholder="e.g. jungle, monkeys,..."
          value={tags}
          maxLength="40"
          onChange={handleTagChange}
        />
      </Container>
      <Button type="submit" isDisabled={buttonDisabled} aria-label="submit">
        Submit
      </Button>
      {messageTitle && <P className="message">{messageTitle}</P>}
      {message && <P className="message">{message}</P>}
      {messageImage && <P className="message">{messageImage}</P>}
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
  background-color: snow;
  color: #333;
  border-radius: 15px;
  padding: 40px 40px;
  margin: 20px 20px 80px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Label = styled.label`
  color: darkslategray;
  text-align: left;
  padding: 10px;
  position: absolute;
  top: -8px;
  left: 3px;
  text-shadow: 1px 1px 2px lightgray;
`;

const Input = styled.input`
  width: 70vw;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  font-size: 12pt;
  color: grey;
  padding: 20px 5px 5px 5px;
  background-color: white;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  &:focus {
    outline: 0.2px lightgrey;
    box-shadow: 0 2px 4px 0 darkslategray, 0 3px 10px 0 cadetblue;
  }
`;

const Textarea = styled.textarea`
  width: 70vw;
  height: 50vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  font-size: 12pt;
  color: grey;
  padding: 20px 5px 5px 5px;
  background-color: white;
  border: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);

  &:focus {
    outline: 0.2px lightgrey;
    box-shadow: 0 2px 4px 0 darkslategray, 0 3px 10px 0 cadetblue;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 10px;
`;

export default Form;
