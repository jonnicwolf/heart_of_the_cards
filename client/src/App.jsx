import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/global.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Test from './pages/Test';

import Nav from './components/navigation/Nav';
import { useAuth } from './components/contexts/AuthContext';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();
  const location = useLocation();
  const no_nav_list = [
    '/login',
    '/signup',
    '/forgot-password'
  ];

  return (
    <AuthProvider>
      <Container>
        {showAlert && <Alert variant='success'>{currentUser} logged out successfully!</Alert>}
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
        {!no_nav_list.includes(location.pathname) && <Nav />}
      </Container>
    </AuthProvider>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: black;
`;

export default App;
