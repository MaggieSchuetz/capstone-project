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
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTrashAlt />
      </button>
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
