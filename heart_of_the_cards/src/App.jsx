import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import Home from './pages/Home';
import Nav from './components/navigation/Nav';

function App() {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
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
  background: black;
`;

export default App;
