import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.section`
  background-color: snow;
  color: #333;
  /* border: 1px solid black; */
  border-radius: 15px;
  padding: 40px 30px;
  margin: 20px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

function Card({ children, className }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

export default Card;
