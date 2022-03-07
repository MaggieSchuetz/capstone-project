import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: hotpink;
  border: 0;
  border-radius: 8px;
  color: black;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: purple;
  }
  &:disabled {
    background-color: grey;
  }
`;

function Button({ children, type, isDisabled }) {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
