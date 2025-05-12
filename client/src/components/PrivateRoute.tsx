import React, { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute: FC = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>loading</div>;

  return currentUser
  ? <Outlet />
  : <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;
