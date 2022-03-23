import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from './Image.js';

import { BiExpand as Expand, BiCollapse as Shrink } from 'react-icons/bi';

function Gallery({ galleryContent, deleteImage }) {
  const [buttonState, setButtonState] = useState('normal');
  const [galleryState, setGalleryState] = useState('normal');
  const expandGallery = () => {
    buttonState === 'normal'
      ? setButtonState('expanded')
      : setButtonState('normal');

    galleryState === 'normal'
      ? setGalleryState('large')
      : setGalleryState('normal');
  };
  console.log(buttonState);
  return (
    <GalleryWrap>
      <GalleryContainer className={`${galleryState}`}>
        {galleryContent.map((image, index) => (
          <Image
            alt=""
            key={index}
            src={image.url}
            galleryContent={galleryContent}
            deleteImage={deleteImage}
            className={`${galleryState}`}
          />
        ))}
      </GalleryContainer>{' '}
      <IconButton
        type="button"
        alt="expand"
        className={`${buttonState}`}
        aria-label="expandGallery"
        onClick={() => {
          expandGallery();
        }}
      >
        {buttonState === 'expanded' && <Shrink size={30} alt="expandGallery" />}
        {buttonState === 'normal' && <Expand size={30} alt="expandGallery" />}
      </IconButton>
    </GalleryWrap>
  );
}

const GalleryContainer = styled.div`
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: 1;
  gap: 10px;
  overflow-x: auto;

  &.large {
    position: absolute;
    z-index: 10;
    height: 100vh;
  }
`;

const GalleryWrap = styled.section`
  position: relative;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  color: cadetblue;
  background-color: snow;
  border: solid 2px darkslategray;
  border-radius: 50%;
  position: absolute;
  bottom: 9em;
  left: 1em;
`;

export default Gallery;
