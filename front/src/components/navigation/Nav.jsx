import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <Dummy />
      <Bump>
        HEART
        <MiddleSpan>
          <div>of</div>
          <div>the</div>
        </MiddleSpan>
        CARDS
      </Bump>
      <MenuSwitch>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
      </MenuSwitch>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 0.5vh solid #db8aae;
  height: 5%;
  background: #699897;
  color: #e1c4ca;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    height: 10%;
  }
`;
const Dummy = styled.div`
  width: 10%;
  height: 100%;
`;
const MenuSwitch = styled.button`
  width: 10%;
  height: 100%;
  background: none;
  border: 1px solid red;
  border: none;
`;
const Bump = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: Bagnard;
  gap: 1.5vw;
  font-size: 6vw;
  margin: 0;
  background: #699897;
  @media screen and (min-width: 1024px) {
    font-size: 4rem;
    gap: 10px;
  }
`;
const MiddleSpan = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 3.3vw;
  padding-bottom: 1vw;
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 0.5vw;
  }
  @media screen and (min-width: 1500px) {
    padding: 0.5vw;
  }
`;

export default Nav;
