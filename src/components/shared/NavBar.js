import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { AiOutlineRead } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0;
  text-align: center;
  color: palevioletred;
  position: sticky;
  bottom: 0;
  height: 60px;
  background-color: cadetblue;
  background-size: cover;
  background-position-y: 55%;
  font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  font-size: 25pt;
  color: blanchedalmond;
`;

const StyledNavLink = styled(NavLink)`
  background-color: inherit;
  color: grey;

  &.active {
    color: blanchedalmond;
  }
`;
function NavBar() {
  return (
    <>
      <StyledNavBar>
        <StyledNavLink
          to="/newentry"
          className={isActive => 'nav-link' + (isActive ? ' active' : '')}
          aria-label="newEntry"
        >
          <IoAddCircleOutline alt="New Entry" />
        </StyledNavLink>
        <StyledNavLink
          to="/journalentries"
          className={isActive => 'nav-link' + (isActive ? ' active' : '')}
          aria-label="readJournal"
        >
          <AiOutlineRead alt="Read Journal" />
        </StyledNavLink>
      </StyledNavBar>
    </>
  );
}

export default NavBar;
