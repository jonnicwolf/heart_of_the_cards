import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return !currentUser
    ? <Navigate to="/login" state={{ from: location }} replace />
    : <Component {...rest} />
};
