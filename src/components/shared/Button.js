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
    color: palevioletred;
  }
`;

function Button({ children, type, isDisabled, className }) {
  return (
    <StyledButton type={type} disabled={isDisabled} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;
