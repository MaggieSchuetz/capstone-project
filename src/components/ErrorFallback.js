import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiArrowBack as Return } from 'react-icons/ti';

export default function ErrorFallback({ error }) {
  return (
    <>
      <p>Oops, something went wrong. </p>
      <StyledLink to="/map" aria-label="returnToMap">
        <Return size={40} />
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  color: darkslategray;
`;
