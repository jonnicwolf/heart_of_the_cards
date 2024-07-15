import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

import Logout_Btn from './Logout_Btn';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout () {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      return (
        <Alert variant='danger'>{error}</Alert>
      );
    };
  };

  const handleLogoClick = () => {
    setShowMenu(!showMenu);
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  return (
    <Container>
      <MenuLogoWarp>
        <Logo onClick={handleLogoClick} showMenu={showMenu}>
          <span>ESP</span>
          <span>ERI</span>
        </Logo>

        <SlideOutMenu showMenu={showMenu}>
          <HomeButton onClick={handleHomeClick}>
            <Home src='https://img.icons8.com/?size=100&id=xZbsecl9NwAy&format=png&color=FFFFFF' alt=''/>
            <HomeText>Home</HomeText>
          </HomeButton>

          <HistoryButton onClick={handleHistoryClick}>
            <History src="https://img.icons8.com/?size=100&id=hZ5zdXjC6tJ3&format=png&color=FFFFFF" alt="" />
            <HistoryText>History</HistoryText>
          </HistoryButton>

          <Logout onClick={handleLogout}>
            <Logout_Btn />
            <LogoutText>Logout</LogoutText>
          </Logout>
        </SlideOutMenu>

      </MenuLogoWarp>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: flex-start;
  height: 10vh;
  background: #699897;
  color: white;
  z-index: 2;
  padding-left: 15px;
`;
const MenuLogoWarp = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
`;
const Logout = styled.button`
  height: 100%;
  color: #e1c4ca;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-family: Bagnard;
  line-height: ${props => props.showMenu ? '35px' : '25px'};
  transition: line-height 0.3s ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
    line-height: 15px;
  }
`;
const SlideOutMenu = styled.div`
  display: flex;
  gap: 2vw;
  padding: 5px 10px 5px 10px;
  opacity: ${props => props.showMenu ? '100%' : 0} ;
  width: ${props => props.showMenu ? '100%' : 0} ;
  border: ${props => props.showMenu ?  "1px solid white" : "none"};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
const Home = styled.img`
  height: 2rem;
`;
const HomeButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
`;
const HomeText = styled.span`
  color: white;
  font-size: 0.7rem;
  font-family: Bagnard;
`;
const History = styled.img`
  height: 2rem;
`;
const HistoryButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
`;
const HistoryText = styled.span`
  color: white;
  font-size: 0.7rem;
  font-family: Bagnard;
  padding: 0;
  margin: 0;
`;
const LogoutText = styled.span`
  color: white;
  font-size: 0.7rem;
  font-family: Bagnard;
  padding: 0;
  margin: 0;
`;

export default Nav;