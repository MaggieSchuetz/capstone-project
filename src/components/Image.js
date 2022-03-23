import React from 'react';
import styled from 'styled-components';
import { FaTimes as Delete } from 'react-icons/fa';

function Image({ src, deleteImage, className }) {
  return (
    <ImgContainer className={`${className}`}>
      <Img alt="" src={src} className={`${className}`} />
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
  &.large {
  }
`;

const Img = styled.img`
  margin: 2rem none;
  border-radius: 10px;
  height: 15em;
  width: auto;

  &.large {
    height: 30em;
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
  z-index: 10;
`;

export default Image;
