import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext'

import Logout_Btn from './Logout_Btn';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [error, setError] = useState('');
  const {  logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout () {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) { setError('Failed to log out.') };
  };

  return (
    <Container>
      <>&nbsp;</>
      <LogoContainer>
        <Secrets>
          SECRETS
          <OfThe_Vertical>
            of <br /> the
          </OfThe_Vertical>
        </Secrets>
        <div>CARTOMANCER</div>
      </LogoContainer>
      <MenuSwitch onClick={handleLogout}>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Logout_Btn />
      </MenuSwitch>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 0.5vh solid #db8aae;
  height: 10vh;
  background: #699897;
  color: #e1c4ca;
  z-index: 2;
`;
const MenuSwitch = styled.button`
  width: 10%;
  height: 100%;
  color: #e1c4ca;
  background: none;
  border: none;
  justify-self: flex-start;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-family: Bagnard;
  line-height: 20px;
  transform: translate(5vw,-10px);
`;
const Secrets = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
`;
const OfThe_Vertical = styled.span`
  display: flex;
  font-size: 1rem;
  text-align: center;
  line-height: 15px;
  transform: translateY(-5px);
`;

export default Nav;
