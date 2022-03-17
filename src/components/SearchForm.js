import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './shared/Button';
import JournalEntry from './JournalEntry';

function SearchForm({ content, handleDelete, editJournalEntry }) {
  const [tags, setTags] = useState([]);

  const handleTagChange = e => {
    setTags(e.target.value.split(','));
    console.log(tags);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setTags([]);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Container>
          <Label htmlFor="tags">Tags:</Label>
          <Input
            id="tags"
            name="tags"
            type="text"
            placeholder="Jungle, monkeys,..."
            value={tags}
            maxLength="40"
            onChange={handleTagChange}
          />
        </Container>
        <Button type="submit">Search</Button>
      </FormContainer>
      <p>Enter a tag you would like to search for</p>
      <ListContainer>
        {content.map(item => (
          <JournalEntry
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            editJournalEntry={editJournalEntry}
          />
        ))}
      </ListContainer>
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: snow;
  color: #333;
  border-radius: 15px;
  padding: 40px 40px;
  margin: 20px;
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

const Container = styled.div`
  position: relative;
  padding: 10px;
`;

const ListContainer = styled.div`
  /* height: 100vh; */
`;

export default SearchForm;
