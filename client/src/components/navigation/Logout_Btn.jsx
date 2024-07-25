import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Logout_Btn() {
  return (
    <StyledLink to='/login'>
      <Icon src='https://img.icons8.com/?size=100&id=ydJtUOZO_dfS&format=png&color=fcfcfc' />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Bagnard;
`;
const Icon = styled.img`
  height: 2rem;
  @media only screen and (max-width: 720px) {
    height: 1.3rem;
  }
`
