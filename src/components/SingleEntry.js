import React from 'react';
import JournalEntry from './JournalEntry';
import styled from 'styled-components';
import { useContext } from 'react';
import { TiArrowBack as Return } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import LocationContext from '../context/LocationContext';

function SingleEntry({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
  deleteImage,
}) {
  const { activeItemLocation } = useContext(LocationContext);

  const filteredContent = content.find(item => {
    return item.location[0].id === activeItemLocation[0].id;
  });

  console.log('activeItemLocation', activeItemLocation);
  console.log('content', content);
  console.log('filteredContent', filteredContent);

  return (
    <ListContainer>
      {filteredContent ? (
        <JournalEntry
          key={filteredContent.id}
          item={filteredContent}
          handleDelete={handleDelete}
          editJournalEntry={editJournalEntry}
          galleryContent={galleryContent}
          deleteImage={deleteImage}
        />
      ) : (
        <p>This entry has been deleted.</p>
      )}
      <StyledLink to="/map" aria-label="returnToMap">
        <Return size={40} />
      </StyledLink>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding-bottom: 60px;
`;

const StyledLink = styled(Link)`
  color: darkslategray;
`;

export default SingleEntry;
