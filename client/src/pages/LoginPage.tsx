import React, { FC } from 'react';
import styled from 'styled-components';
import Login from '../components/forms/Login';
import GraphicCard from '../components/GraphicCard';

interface Props {
  windowWidth: boolean
}

const LoginPage: FC = () => {
  const windowWidth: boolean = window.innerWidth < 850;

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
const LoginCard = styled.div<Props>`
  width: ${props => props.windowWidth ? '100vw' : '50vw'};
  height: 100vh;
`;

export default LoginPage;
