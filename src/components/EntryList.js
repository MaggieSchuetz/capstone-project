import React from 'react';
import JournalEntry from './JournalEntry';
import styled from 'styled-components';

function EntryList({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
}) {
  if (!content || content.length === 0) {
    return <p>You don't have any journal entries yet.</p>;
  }
  return (
    <ListContainer>
      {content.map(item => (
        <JournalEntry
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          editJournalEntry={editJournalEntry}
          galleryContent={galleryContent}
        />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding-bottom: 60px;
`;

export default EntryList;
