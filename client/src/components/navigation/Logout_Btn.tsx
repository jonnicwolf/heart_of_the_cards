import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logout_Btn: FC = () => {
  return (
    <StyledLink to='/login'>
      <Icon src='https://img.icons8.com/?size=100&id=ydJtUOZO_dfS&format=png&color=#000' />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Bagnard;
`;
const Icon = styled.img`
  height: 2.5rem;
  @media only screen and (max-width: 720px) {
    height: 1.3rem;
  }
`;

export default Logout_Btn;
