import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/global.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Test from './pages/Test';

import Nav from './components/navigation/Nav';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  const location = useLocation();
  const no_nav_list = [
    '/login',
    '/signup',
    '/forgot-password'
  ];

  return (
    <AuthProvider>
      <Container>
        {!no_nav_list.includes(location.pathname) && <Nav />}
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Container>
    </AuthProvider>
  );
};

const Container = styled.div`
  max-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: black;
  overflow: hidden;
`;

export default App;
