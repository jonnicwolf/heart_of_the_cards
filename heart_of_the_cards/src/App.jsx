import { useState } from 'react';
import { Routes, Route } from 'react-dom'
import styled from 'styled-components';

import Nav from './components/navigation/Nav';

function App() {

  return (
    <Container>
      <Routes>
        <Route to='/'/>
      </Routes>
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export default App;
