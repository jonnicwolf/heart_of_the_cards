import React, { FC } from 'react'
import styled from 'styled-components';

import Starfield from '../components/p5/Starfield';

const Test: FC = () => {
  return (
    <Container>
      {/* <Forest /> */}
      {/* <div>hello</div> */}
      <Starfield />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default Test;
