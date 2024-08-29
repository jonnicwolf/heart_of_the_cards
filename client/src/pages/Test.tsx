import React, { FC } from 'react'
import styled from 'styled-components';

import Forest from '../components/threeJs/Forest'

const Test: FC = () => {
  return (
    <Container>
      <Forest />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default Test;
