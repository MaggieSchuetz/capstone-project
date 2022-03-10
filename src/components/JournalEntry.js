import React from 'react';
import Card from './shared/Card';
import styled from 'styled-components';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Button from './shared/Button';

function JournalEntry({ item, handleDelete, editEntry }) {
  return (
    <Card>
      <Date>{item.date}</Date>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <Button
        type="button"
        className="delete"
        aria-label="deleteJournalEntry"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTrashAlt size={20} />
      </Button>
      <Button
        type="button"
        className="edit"
        aria-label="editJournalEntry"
        onClick={() => {
          editEntry(item);
        }}
      >
        <FaEdit size={20} />
      </Button>
    </Card>
  );
}

const Date = styled.p`
  color: grey;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export default JournalEntry;
