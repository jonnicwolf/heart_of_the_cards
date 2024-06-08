import React from 'react';
import styled from 'styled-components';
import Login from '../components/forms/Login';

export default function LoginPage() {
  return (
    <Container>
      <GraphicCard>
        <img src="" alt="" />
      </GraphicCard>
      <LoginCard>
        <Login />
      </LoginCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const LoginCard = styled.div`
  width: 50vw;
  height: 100vh;
`;
const GraphicCard = styled.div`
  width: 70vw;
  height: 100vh;
  max-width: 1200px;
  border: 1px solid red;
`;

