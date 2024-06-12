import React from 'react';
import styled from 'styled-components';
import ForgotPassword from '../components/forms/ForgotPassword';
import GraphicCard from '../components/GraphicCard';

export default function ForgotPasswordPage() {
  const windowWidth = window.innerWidth < 850;
  return (
    <Container>
      {windowWidth ? null : <GraphicCard />}
      <SignupCard windowWidth={windowWidth}>
        <ForgotPassword />
      </SignupCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const SignupCard = styled.div`
  width: ${props => props.windowWidth ? '100vw' : '50vw'};
  height: 100vh;
`;
