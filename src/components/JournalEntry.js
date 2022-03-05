import React from 'react';
import styled from 'styled-components';

const StyledEntry = styled.div`
  background-color: #fff;
  color: #333;
  border: 1px solid black;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px;
  position: relative;
`;

function JournalEntry({ item }) {
  return (
    <StyledEntry>
      <div className="text-display">
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </StyledEntry>
  );
}

export default JournalEntry;
