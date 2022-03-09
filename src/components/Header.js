import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 10px;
  margin: 0;
  text-align: center;
  color: palevioletred;
  position: sticky;
  top: 0;
  height: 60px;
  //background: url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80') no-repeat;
  background-color: cadetblue;
  background-size: cover;
  background-position-y: 55%;
  font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  font-size: 25pt;
  color: blanchedalmond;
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
