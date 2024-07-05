import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

import Logout_Btn from './Logout_Btn';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <MenuLogoWarp>
        <LogoContainer onClick={handleClick}>
          <span>ESP</span>
          <span>ERI</span>
        </LogoContainer>

        <SlideOutMenu showMenu={showMenu}>
          <Home src='https://img.icons8.com/?size=100&id=xZbsecl9NwAy&format=png&color=FFFFFF' alt=''/>
          <History src="https://img.icons8.com/?size=100&id=hZ5zdXjC6tJ3&format=png&color=FFFFFF" alt="" />
        </SlideOutMenu>
      </MenuLogoWarp>

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
  color: white;
  z-index: 2;
  padding: 15px;
`;
const MenuLogoWarp = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  width: 20%;
`
const MenuSwitch = styled.button`
  height: 1G00%;
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
  }
  @media only screen and (min-width: 1000px) {
    font-size: 2.1rem;
  }
`;
const SlideOutMenu = styled.div`
  display: flex;
  gap: 2vw;
  padding: 5px;
  opacity: ${props => props.showMenu ? '100%' : 0} ;
  width: ${props => props.showMenu ? '100%' : 0} ;
  border: ${props => props.showMenu ?  "1px solid white" : "none"};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
const History = styled.img`
  height: 2.5rem;
`;
const Home = styled.img`
  height: 2.8rem;
`;

export default Nav;
