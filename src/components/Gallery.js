import React from 'react';
import styled from 'styled-components';

function Gallery({ galleryContent }) {
  if (!galleryContent || galleryContent.length === 0) {
    return <p>You haven't uploaded any images yet.</p>;
  }
  return (
    <ListContainer>
      {galleryContent.map((image, index) => (
        <img width="100px" height="100px" alt="" key={index} src={image} />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  padding-bottom: 60px;
`;

export default Gallery;
