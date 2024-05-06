import { useState } from 'react';
import styled from 'styled-components';

import Nav from './components/navigation/Nav';

function App() {

  return (
    <Container>
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  height: 102vh;
  width: 102vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: translate(-10px, -10px);
  position: fixed;
`;

export default App;
