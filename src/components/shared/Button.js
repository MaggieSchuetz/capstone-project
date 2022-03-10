import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: hotpink;
  border: 0;
  border-radius: 8px;
  color: black;
  width: 100px;
  height: 40px;
  margin: 10px;

  &:disabled {
    background-color: grey;
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
