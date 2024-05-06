import React from 'react';
import styled from 'styled-components';

const Board = () => {
  return (
    <Container>
      woooo
    </Container>
  );
};

const Container = styled.div`
  clip-path: polygon(
    25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%
  );
  transform: rotate(30deg);
  height: 100px;
  width: 100px;
  background: black;
`;

export default Board;
