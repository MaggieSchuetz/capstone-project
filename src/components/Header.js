import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 10px;
  margin: 0;
  text-align: center;
  position: sticky;
  top: 0;
  height: 70px;
  /* background: url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')
    no-repeat; */
  background-color: cadetblue;
  background-size: cover;
  background-position-y: 50%;
  font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  font-size: 25pt;
  color: snow;
  z-index: 8;

  text-shadow: 2px 2px 4px #000000;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

function Header({ text }) {
  return (
    <>
      <StyledHeader>{text}</StyledHeader>
    </>
  );
}

export default Header;
