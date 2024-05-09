import React, { useState } from 'react';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';
import Inquery from './forms/Inquery';

const Board = () => {
  const [query, setQuery] = useState('');

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
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vw;
  width: 100vw;
  gap: 20vw;
  z-index: 2;
`;
const EyeContainer = styled.div`
  // transform: translateY(-300px);
`;

export default Board;
