import React from 'react';
import styled from 'styled-components';
import Image from './Image.js';

function Gallery({ galleryContent, deleteImage }) {
  return (
    <GalleryContainer>
      {galleryContent.map((image, index) => (
        <Image
          alt=""
          key={index}
          src={image.url}
          galleryContent={galleryContent}
          deleteImage={deleteImage}
        />
      ))}
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
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
`;

export default Gallery;
