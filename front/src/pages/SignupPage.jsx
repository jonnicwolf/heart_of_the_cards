import React from 'react';
import styled from 'styled-components';
import Signup from '../components/forms/Signup';
import GraphicCard from '../components/GraphicCard';

export default function SignupPage() {
  const windowWidth = window.innerWidth < 850;
  return (
    <Container>
      {windowWidth ? null : <GraphicCard />}
      <SignupCard windowWidth={windowWidth}>
        <Signup />
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
