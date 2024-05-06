import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <Dummy />
      <Bump>
        Heart
        <MiddleSpan><div>of</div><div>the</div></MiddleSpan>
        Cards
      </Bump>
      <MenuSwitch />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 5px solid #db8aae;
  height: 6%;
  transform: translateX(-10px);
  background: #699897;
  color: #e1c4ca;
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
  width: 130px;
  height: 100px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: Bagnard;
  gap: 1.5vw;
  font-size: 6vw;
  padding: 0;
  margin: 0;
  background: #699897;
  border-top: 8px solid #db8aae;
`;
const MiddleSpan = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 3.3vw;
  padding-bottom: 0.5vw;
`;

export default Nav;
