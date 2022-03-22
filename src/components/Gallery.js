import React from 'react';
import styled from 'styled-components';

function Gallery({ galleryContent }) {
  return (
    <ImageContainer>
      {galleryContent.map((image, index) => (
        <Img alt="" key={index} src={image.url} />
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
`;

const Img = styled.img`
  margin: 20px none;
  border-radius: 10px;
  height: 15em;
  width: auto;
  position: relative;
`;

export default Gallery;
