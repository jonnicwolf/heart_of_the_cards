import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import '../styles/global.css';

import Home from './pages/Home';
import Test from './pages/Test';

import Nav from './components/navigation/Nav';

function App() {

  return (
    <Container>
      <RoutesContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </RoutesContainer>

      <Nav />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: black;
  overflow: clip;
`;
const RoutesContainer = styled.div`
  height: 95%;
`;

export default App;