import React from 'react';
import styled from 'styled-components';

import Board from '../components/Board';

const Home = () => {
  return (
    <Container>
      <Board />
    </Container>
  );
};

const Container = styled.div`
  height: 95%;
`;

export default Home;
