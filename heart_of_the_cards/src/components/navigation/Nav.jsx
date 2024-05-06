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
  height: 5vw;
  margin: 30px;
`;
const Dummy = styled.div`
  width: 10%;
  height: 100%;
`
const MenuSwitch = styled.button`
  width: 10%;
  height: 100%;
`
const Bump = styled.div`
  width: 180px;
  height: 70px;
  border: 1px solid red;
  border-radius: 50%;
`;

export default Nav;
