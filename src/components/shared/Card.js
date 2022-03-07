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

  &.forForm {
    display: flex;
    flex-direction: column; //naahhhh this is how the FORM needs to be styled because the input fields are children of the form
  }
`;

function Card({ children, className }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

export default Card;
