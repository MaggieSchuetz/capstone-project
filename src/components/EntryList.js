import React from 'react';
import JournalEntry from './JournalEntry';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function EntryList({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
  deleteImage,
}) {
  function sortByDates() {
    content.forEach(item => {
      item.formattedDate = new Date(item.date);
      content.sort((a, b) => b.formattedDate - a.formattedDate);
    });
  }
  sortByDates();
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
          deleteImage={deleteImage}
        />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding-bottom: 60px;
`;

export default EntryList;
