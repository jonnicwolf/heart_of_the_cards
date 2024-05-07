import React from 'react';
import styled from 'styled-components';

import Eye from './p5/Eye';

const Board = () => {
  return (
    <Container>
      <Eye />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid black;
  height: 110vw;
  width: 100vw;
  padding: 40px;
`;

export default Board;
