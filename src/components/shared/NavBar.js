import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineRead } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0;
  position: sticky;
  bottom: 0;
  height: 60px;
  background-color: cadetblue;
  font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  font-size: 25pt;
`;

const StyledNavLink = styled(NavLink)`
  background-color: inherit;
  color: black;

  &.active {
    color: snow;
  }
`;
function NavBar() {
  return (
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
  );
}

export default NavBar;
