import React, { useState } from 'react';
import styled from 'styled-components';

import Eye from '../components/p5/Eye';
import Inquery from './forms/Inquery';

const Board = () => {
  const [query, setQuery] = useState('');

  return (
    <Container>
      <Eye />
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
  height: 94vh;
  width: 100%;
  gap: 20vh;
  z-index: 2;
`;

export default Board;
