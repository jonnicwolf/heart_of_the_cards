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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
`;

export default App;
