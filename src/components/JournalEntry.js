import React from 'react';
import Card from './shared/Card';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

function JournalEntry({ item, handleDelete }) {
  return (
    <Card>
      <Date>{item.date}</Date>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <DeleteButton
        type="button"
        className="delete"
        aria-label="deleteJournalEntry"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTrashAlt size={20} />
      </DeleteButton>
    </Card>
  );
}

const Date = styled.p`
  color: grey;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const DeleteButton = styled.button`
  color: black;
  background-color: inherit;
  border: none;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
export default JournalEntry;
