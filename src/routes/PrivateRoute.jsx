import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { getIsLoggedIn } from 'store/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = false; // uncomment other and remove this

  return <>{isLoggedIn ? children : <Navigate to={redirectTo} replace />}</>;
};

export default PrivateRoute;
