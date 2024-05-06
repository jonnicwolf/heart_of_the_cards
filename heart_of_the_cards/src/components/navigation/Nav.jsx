import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <Dummy />
      <Bump />
      <MenuSwitch />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid red;
  height: 4.5%;
  transform: translateX(-10px);
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
  width: 180px;
  height: 80px;
  border: 1px solid red;
  border-radius: 50%;
  background: white;
`;

export default Nav;
