import React, { FC } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/global.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Test from './pages/Test';

import Nav from './components/navigation/Nav';
import { AuthProvider } from './components/contexts/AuthContext';

const App: FC = () => {
  const location = useLocation();
  const no_nav_list: string[] = [
    '/login',
    '/signup',
    '/forgot-password'
  ];

  return (
    <Container>
      <AuthProvider>
        {!no_nav_list.includes(location.pathname) && <Nav />}
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </AuthProvider>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fce6c5;
`;

export default App;
