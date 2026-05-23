import React, { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import '../styles/global.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
// import SignupPage from './pages/SignupPage';
// import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Test from './pages/Test';
import Starfield from './components/p5/Starfield';


//import { AuthProvider } from './components/contexts/AuthContext';

const App: FC = () => {
  return (
    <Container>
      {/* <Starfield width={window.innerWidth} height={window.innerHeight} /> */}
      {/* <Starfield width={200} height={200} /> */}
      {/* <AuthProvider> */}
        {/* {!no_nav_list.includes(location.pathname) && <Nav />} */}
        {/* <Nav /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/history' element={<HistoryPage />} />
          {/* <Route path='/login' element={<LoginPage />} /> */}
          {/* <Route path='/signup' element={<SignupPage />} /> */}
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      {/* </AuthProvider> */}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // background-color: #fce6c5;
  // background-color: #000;
  z-index: 0;
`;

export default App;
