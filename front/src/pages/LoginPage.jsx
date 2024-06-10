import React from 'react';
import styled from 'styled-components';
import Login from '../components/forms/Login';
import GraphicCard from '../components/GraphicCard';

export default function LoginPage() {
  return (
    <Container>
      <GraphicCard />
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
