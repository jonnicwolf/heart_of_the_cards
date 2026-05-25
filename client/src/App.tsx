import React, { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Test from './pages/Test';
import Starfield from './components/p5/Starfield';

const App: FC = () => {
  return (
    <Container>
      <Starfield width={window.innerWidth} height={window.innerHeight} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  height: 1%;
  display: flex; 
  flex-direction: column;
  z-index: 0;
`;

export default App;
