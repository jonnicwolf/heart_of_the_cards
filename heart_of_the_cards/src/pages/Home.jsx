import React from 'react';
import styled from 'styled-components';

import Board from '../components/Board';

import forest from '../assets/forest.jpg'

const Home = () => {
  return (
    <Container>
      <Board />
    </Container>
  );
};

const Container = styled.div`
  height: 95%;
  background: no-repeat url(${forest});
`;

export default Home;
