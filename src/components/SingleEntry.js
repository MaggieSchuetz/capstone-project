import React from 'react';
import JournalEntry from './JournalEntry';
import styled from 'styled-components';
import { useContext } from 'react';
import { TiArrowBack as Return } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';
import ErrorFallback from './ErrorFallback.js';
import LocationContext from '../context/LocationContext';

function SingleEntry({
  content,
  handleDelete,
  editJournalEntry,
  galleryContent,
  deleteImage,
}) {
  const { activeItemLocation } = useContext(LocationContext);

  const entriesWithLocation = content
    .filter(entry => entry.location !== undefined)
    .map(entry => entry);

  const filteredContent = entriesWithLocation.find(item => {
    return item.location[0].id === activeItemLocation[0].id;
  });

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
      </ErrorBoundary>
    </motion.div>
  );
}

const ListContainer = styled.div`
  padding-bottom: 60px;
`;

const StyledLink = styled(Link)`
  color: darkslategray;
`;

export default SingleEntry;
