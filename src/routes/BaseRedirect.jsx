import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { getIsLoggedIn } from 'store/auth/auth-selectors';
// import { selectIsLoggedIn } from '../store/auth/authSelectors';
const BaseRedirect = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false; // uncomment other and remove this

  return isLoggedIn ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/welcome" replace />
  );
};

export default BaseRedirect;
