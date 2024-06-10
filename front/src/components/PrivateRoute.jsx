import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../components/contexts/AuthContext';

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser
  ? <Outlet />
  : <Navigate to="/login" state={{ from: location }} replace />
};
