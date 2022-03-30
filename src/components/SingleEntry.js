import React from 'react';
import JournalEntry from './JournalEntry';
import styled from 'styled-components';
import { useContext } from 'react';

import LocationContext from '../context/LocationContext';

function SingleEntry({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
  deleteImage,
}) {
  const { activeItemLocation } = useContext(LocationContext);
  const filteredContent = content.find(item =>
    item.location.filter(location =>
      location.id.includes(activeItemLocation[0].id)
    )
  );

  // .filter(item =>
  //   item.location.includes(activeItemLocation[0].id)
  // );
  // const displayedItem = [filteredContent];
  console.log(
    activeItemLocation[0].id,
    content[0].location[0].id,
    filteredContent
    // displayedItem
  );

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

export default SingleEntry;
