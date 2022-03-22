import React from 'react';
import styled from 'styled-components';

function Gallery({ galleryContent }) {
  // if (!galleryContent || galleryContent.length === 0) {
  //   return <p>No images available for this post</p>;
  // }
  return (
    <ImageContainer>
      {galleryContent.map((image, index) => (
        <img alt="" key={index} src={image.url} />
      ))}
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: 1;
  gap: 10px;
  overflow-x: auto;
  position: relative;

  > * {
    margin: 20px none;
    border-radius: 10px;
    height: 15em;
    width: auto;
  }
`;

export default Gallery;
