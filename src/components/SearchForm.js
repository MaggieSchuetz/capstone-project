import React, { useState } from 'react';
import styled from 'styled-components';
import JournalEntry from './JournalEntry';

function SearchForm({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
}) {
  const [search, setSearch] = useState('');

  const filteredContent = content.filter(item =>
    item.tags.join().toLowerCase().includes(search.toLowerCase())
  );

  const handleTagChange = e => {
    setSearch(e.target.value);
    console.log(content, filteredContent, galleryContent, search);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Container>
          <Label htmlFor="search">Search Tags:</Label>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="e.g. jungle, monkeys,..."
            value={search}
            maxLength="40"
            onChange={handleTagChange}
          />
        </Container>
        <p>Start typing to search for tags</p>
      </FormContainer>
      {filteredContent.length !== content.length &&
        filteredContent.length !== 0 && (
          <ListContainer>
            {filteredContent.map(item => (
              <JournalEntry
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                editJournalEntry={editJournalEntry}
                galleryContent={galleryContent}
              />
            ))}
          </ListContainer>
        )}
      {filteredContent.length === 0 && search.length !== 0 && (
        <p>Sorry, there are no tags that match your search.</p>
      )}
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
  padding-bottom: 60px;
`;

export default SearchForm;
