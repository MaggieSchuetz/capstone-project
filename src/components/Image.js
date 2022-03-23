import React from 'react';
import styled from 'styled-components';
import { FaTimes as Delete } from 'react-icons/fa';

function Gallery({ src, deleteImage }) {
  return (
    <ImgContainer>
      <Img alt="" src={src} />
      <IconButton
        type="button"
        alt="deletePhoto"
        className="delete"
        aria-label="deletePhoto"
        onClick={() => {
          deleteImage(src);
        }}
      >
        <Delete size={20} alt="delete" />
      </IconButton>
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  margin: 2rem none;
  border-radius: 10px;
  height: 15em;
  width: auto;

  &.large {
    z-index: 10;
    height: 100%;
  }
`;

const IconButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  color: palevioletred;
  background-color: snow;
  border: 2px solid palevioletred;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Gallery;
