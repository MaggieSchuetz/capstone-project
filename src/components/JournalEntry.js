import React from 'react';
import Card from './shared/Card';
import styled from 'styled-components';

function JournalEntry({ item }) {
  return (
    <Card>
      <div className="text-display">
        <Date>{item.date}</Date>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </Card>
  );
}

const StyledDate = styled.p`
  color: grey;
  position: absolute;
  top: 10px;
  right: 20px;
`;

function Date({ children }) {
  return <StyledDate>{children}</StyledDate>;
}

export default JournalEntry;
