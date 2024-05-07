import React from 'react';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';
import Inquery from './forms/Inquery';

const Board = () => {
  return (
    <Container>
      <EyeContainer>
        <Eye />
      </EyeContainer>
      <Inquery />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vw;
  width: 100vw;
`;
const EyeContainer = styled.div`
  transform: translateY(-300px);
`;

export default Board;
