import React from 'react';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';

const Board = () => {
  return (
    <Container>
      <EyeContainer>
        <Eye />
      </EyeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vw;
  width: 100vw;
  padding: 40px;
`;
const EyeContainer = styled.div`
  transform: translateY(-300px);
  border: 1px solid red;
`;

export default Board;
