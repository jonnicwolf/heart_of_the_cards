import React from 'react';
import styled from 'styled-components';
import Signup from '../components/forms/Signup';
import GraphicCard from '../components/GraphicCard';

export default function SignupPage() {
  return (
    <Container>
      <GraphicCard />
      <SignupCard>
        <Signup />
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
