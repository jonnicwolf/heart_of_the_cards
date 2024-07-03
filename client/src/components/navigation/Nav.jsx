import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

import Logout_Btn from './Logout_Btn';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [error, setError] = useState('');

  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout () {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to log out.');
      return (
        <Alert variant='danger'>{error}</Alert>
      );
    };
  };

  return (
    <Container>

      <LogoContainer>
        <span>ESP</span>
        <span>ERI</span>
      </LogoContainer>

      <MenuSwitch onClick={handleLogout}>
        <Logout_Btn />
      </MenuSwitch>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5vh solid #db8aae;
  height: 10vh;
  background: #699897;
  color: #e1c4ca;
  z-index: 2;
  padding: 15px;
`;
const MenuSwitch = styled.button`
  height: 100%;
  color: #e1c4ca;
  background: none;
  border: none;
  justify-self: flex-start;
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-family: Bagnard;
  line-height: 25px;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 15px;
  //  transform: translate(30px,-5px);
  }
  @media only screen and (min-width: 1000px) {
    font-size: 2.1rem;
  }
`;

export default Nav;
