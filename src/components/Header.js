import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Header({ text }) {
  return (
    <>
      <div className="HeaderContainer">
        <StyledHeader>{text}</StyledHeader>
      </div>
    </>
  );
}

export default Header;
