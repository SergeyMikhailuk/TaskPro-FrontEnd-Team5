
import React, { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Container } from './styled';

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate('/welcome');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <Container>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AuthPage;
