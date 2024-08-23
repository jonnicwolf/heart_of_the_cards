import React from 'react'
import styled from 'styled-components';

import Forest from '../components/threeJs/Forest'

const Test = () => {
  return (
    <Container>
      <Forest />
    </Container>
  )
}

export default Test;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;