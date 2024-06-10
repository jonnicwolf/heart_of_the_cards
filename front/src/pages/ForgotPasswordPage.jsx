import React from 'react';
import styled from 'styled-components';
import ForgotPassword from '../components/forms/ForgotPassword';
import GraphicCard from '../components/GraphicCard';

export default function ForgotPasswordPage() {
  return (
    <Container>
      <GraphicCard />
      <SignupCard>
        <ForgotPassword />
      </SignupCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const SignupCard = styled.div`
  width: 50vw;
  height: 100vh;
`;
