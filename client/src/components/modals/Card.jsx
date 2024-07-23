import React from 'react';
import styled from 'styled-components';

import Eye from '../p5/Eye'

export default function Card() {

  return (
    <Container>
      <Eye width={80} height={160}/>
      <Welcome>
        Welcome to <br />Esperi
      </Welcome>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Welcome = styled.div`
  font-family: Bagnard;
`
