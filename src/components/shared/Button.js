import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: palevioletred;
  border: 0;
  border-radius: 8px;
  color: black;
  width: 100px;
  height: 40px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
  }
  &.delete {
    height: fit-content;
    width: fit-content;
    color: black;
    background-color: inherit;
    border: none;
    position: absolute;
    bottom: 0px;
    right: 10px;
  }

  &.edit {
    height: fit-content;
    width: fit-content;
    color: black;
    background-color: inherit;
    border: none;
    position: absolute;
    bottom: 0px;
    right: 50px;
  }
`;

function Button({ children, type, isDisabled, className, onClick }) {
  return (
    <StyledButton
      type={type}
      disabled={isDisabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
