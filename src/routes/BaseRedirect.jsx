import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'store/auth/authSelectors';

const BaseRedirect = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/welcome" replace />
  );
};

export default BaseRedirect;
