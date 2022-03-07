import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.section`
  background-color: #fff;
  color: #333;
  border: 1px solid black;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px;
  position: relative;
`;

function Card({ children, className }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

export default Card;
