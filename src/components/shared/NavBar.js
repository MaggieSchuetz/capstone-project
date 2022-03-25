import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineRead, AiOutlineSearch } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100vw;
  background-color: cadetblue;
  font-family: 'Fredericka the Great', Verdana, Arial, Helvetica, sans-serif,
    bold;
  font-size: 25pt;
  z-index: 12;
`;

const StyledNavLink = styled(NavLink)`
  background-color: inherit;
  color: darkslategray;

  &.active {
    color: snow;
  }
`;
function NavBar({ setEntryEdit }) {
  const handleClick = e => {
    setEntryEdit({
      edit: false,
    });
  };

  return (
    <StyledNavBar>
      <StyledNavLink to="/searchtags" aria-label="searchTags">
        <AiOutlineSearch alt="Search by tags" />
      </StyledNavLink>
      <StyledNavLink to="/journalentries" aria-label="readJournal">
        <AiOutlineRead alt="Read Journal" />
      </StyledNavLink>
      <StyledNavLink to="/newentry" aria-label="newEntry">
        <IoAddCircleOutline alt="New Entry" onClick={handleClick} />
      </StyledNavLink>
    </StyledNavBar>
  );
}

export default NavBar;
