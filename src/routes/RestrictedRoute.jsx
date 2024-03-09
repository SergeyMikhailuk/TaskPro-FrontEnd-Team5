import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../store/auth/authSelectors';

const RestrictedRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to={redirectTo} replace /> : children}</>;
};

export default RestrictedRoute;
