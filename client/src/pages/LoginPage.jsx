import React from 'react';
import styled from 'styled-components';
import Login from '../components/forms/Login';
import GraphicCard from '../components/GraphicCard';

export default function LoginPage() {
  const windowWidth = window.innerWidth < 850;

  return (
    <Container>
      {!windowWidth && <GraphicCard />}
      <LoginCard windowWidth={windowWidth}>
        <Login />
      </LoginCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const LoginCard = styled.div`
  width: ${props => props.windowWidth ? '100vw' : '50vw'};
  height: 100vh;
`;
