import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LocationContext from '../../context/LocationContext';
import {
  AiOutlineRead as Read,
  AiOutlineSearch as Search,
} from 'react-icons/ai';
import { IoAddCircleOutline as Write } from 'react-icons/io5';
import { FaMapMarkedAlt as Map } from 'react-icons/fa';
import styled from 'styled-components';

function NavBar({ setEntryEdit }) {
  const handleClick = e => {
    setEntryEdit({
      edit: false,
    });
    grabItemPosition();
  };

  const { grabItemPosition } = useContext(LocationContext);

  return (
    <StyledNavBar>
      <StyledNavLink to="/map" aria-label="searchTags">
        <Map alt="Map" />
      </StyledNavLink>
      <StyledNavLink to="/searchtags" aria-label="searchTags">
        <Search alt="Search by tags" />
      </StyledNavLink>
      <StyledNavLink to="/journalentries" aria-label="readJournal">
        <Read alt="Read Journal" />
      </StyledNavLink>
      <StyledNavLink to="/newentry" aria-label="newEntry">
        <Write alt="New Entry" onClick={handleClick} />
      </StyledNavLink>
    </StyledNavBar>
  );
}
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
export default NavBar;
